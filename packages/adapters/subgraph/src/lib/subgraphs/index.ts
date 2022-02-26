import { GraphQLClient } from "graphql-request";

import { getSdk as _getRuntimeSdk } from "./runtime/graphqlsdk";

export { TransactionStatus, Sdk as RuntimeSdk } from "./runtime/graphqlsdk";

export const getRuntimeSdk = (url: string) => _getRuntimeSdk(new GraphQLClient(url));
