resource "aws_iam_role" "lambda" {
  name = "${var.container_family}-${var.environment}-${var.stage}-lambda-role"

  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Action" : "sts:AssumeRole",
        "Principal" : {
          "Service" : "lambda.amazonaws.com"
        },
        "Effect" : "Allow"
      }
    ]
  })

  inline_policy {
    name = "${var.container_family}-${var.environment}-${var.stage}-lambda-policies"
    policy = jsonencode({
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ],
          "Resource" : ["*"]
        }
      ]
    })
  }
}
resource "aws_lambda_function" "executable" {
  function_name = "${var.container_family}-${var.environment}-${var.stage}"
  image_uri     = var.docker_image
  package_type  = "Image"
  role          = aws_iam_role.lambda.arn
  architectures = ["x86_64"]
  timeout       = 300
  environment {
    variables = var.container_env_vars
  }
}

resource "aws_lambda_permission" "allow_events_bridge_to_run_lambda" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.executable.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.event_rule.arn
}

resource "aws_cloudwatch_event_rule" "event_rule" {
  name                = "${var.container_family}-${var.environment}-${var.stage}-event-rule"
  description         = "Fires every X minutes"
  schedule_expression = var.schedule_expression
}

# Trigger our lambda based on the schedule
resource "aws_cloudwatch_event_target" "trigger_lambda_on_schedule" {
  rule      = aws_cloudwatch_event_rule.event_rule.name
  target_id = "lambda"
  arn       = aws_lambda_function.executable.arn
}
