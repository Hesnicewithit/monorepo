///NXTP Config Generator based on vector/modules/router/src/config.ts
import * as fs from "fs";

import { Type, Static } from "@sinclair/typebox";
import { config as dotenvConfig } from "dotenv";
import { ajv, ChainData, TAddress, TIntegerString } from "@connext/nxtp-utils";
import contractDeployments from "@connext/nxtp-contracts/deployments.json";
import { SubgraphReaderChainConfigSchema } from "@connext/nxtp-adapters-subgraph";

const DEFAULT_ALLOWED_TOLERANCE = 10; // in percent
const DEFAULT_REDIS_BASE_URL = "redis://mock";

dotenvConfig();

/**
 * Helper to allow easy mocking
 */
export const getContractDeployments: any = () => {
  return contractDeployments;
};

/**
 * Returns the address of the `TransactionManager` deployed to the provided chain, or undefined if it has not been deployed
 *
 * @param chainId - The chain you want the address on
 * @returns The deployed address or `undefined` if it has not been deployed yet
 */
export const getDeployedTransactionManagerContract = (chainId: number): { address: string; abi: any } | undefined => {
  const record = getContractDeployments()[chainId.toString()] ?? {};
  const name = Object.keys(record)[0];
  if (!name) {
    return undefined;
  }
  const contract = record[name]?.contracts?.TransactionManager;
  return contract ? { address: contract.address, abi: contract.abi } : undefined;
};

/**
 * Returns the address of the `ConnextPriceOracle` deployed to the provided chain, or undefined if it has not been deployed
 *
 * @param chainId - The chain you want the address on
 * @returns The deployed address or `undefined` if it has not been deployed yet
 */
export const getDeployedPriceOracleContract = (chainId: number): { address: string; abi: any } | undefined => {
  const record = getContractDeployments()[chainId.toString()] ?? {};
  const name = Object.keys(record)[0];
  if (!name) {
    return undefined;
  }
  const contract = record[name]?.contracts?.ConnextPriceOracle;
  return contract ? { address: contract.address, abi: contract.abi } : undefined;
};

/**
 * Returns the addresses where the price oracle contract is deployed to
 *
 */
export const getDeployedChainIdsForGasFee = (): number[] => {
  const chainIdsForGasFee: number[] = [];
  const contractDeployments = getContractDeployments();
  const chainIds = Object.keys(contractDeployments);
  chainIds.forEach((chainId) => {
    const record = contractDeployments[chainId.toString()];
    const chainName = Object.keys(record)[0];
    if (chainName) {
      const priceOracleContract = record[chainName]?.contracts?.ConnextPriceOracle;
      if (priceOracleContract) {
        chainIdsForGasFee.push(Number(chainId));
      }
    }
  });
  return chainIdsForGasFee;
};

export const TAssetDescription = Type.Object({
  name: Type.String(),
  id: TAddress,
  mainnetEquivalent: Type.Optional(TAddress),
});

export type AssetDescription = Static<typeof TAssetDescription>;

export const TChainConfig = Type.Object({
  assets: Type.Array(TAssetDescription), // Assets for which the router provides liquidity on this chain.
  subgraph: SubgraphReaderChainConfigSchema, // Subgraph configuration for this chain.
  rpc: Type.Array(Type.String()),
  gasStations: Type.Array(Type.String()),
  confirmations: Type.Integer({ minimum: 1 }), // What we consider the "safe confirmations" number for this chain.
  deployments: Type.Object({
    priceOracle: TAddress,
    transactionManager: TAddress,
  }),
  nomadDomain: Type.String(),
});

export type ChainConfig = Static<typeof TChainConfig>;

export const TServerConfig = Type.Object({
  port: Type.Integer({ minimum: 1, maximum: 65535 }),
  host: Type.String({ format: "ipv4" }),
  requestLimit: Type.Integer(),
  adminToken: Type.String(),
});

export const TModeConfig = Type.Object({
  diagnostic: Type.Boolean(),
  cleanup: Type.Boolean(),
  priceCaching: Type.Boolean(),
});

export const NxtpRouterConfigSchema = Type.Object({
  chains: Type.Record(TIntegerString, TChainConfig),
  logLevel: Type.Union([
    Type.Literal("fatal"),
    Type.Literal("error"),
    Type.Literal("warn"),
    Type.Literal("info"),
    Type.Literal("debug"),
    Type.Literal("trace"),
    Type.Literal("silent"),
  ]),
  mnemonic: Type.Optional(Type.String()),
  web3SignerUrl: Type.Optional(Type.String()),
  redisUrl: Type.String({ format: "uri" }),
  sequencerUrl: Type.String({ format: "uri" }),
  server: TServerConfig,
  maxSlippage: Type.Number({ minimum: 0, maximum: 100 }),
  mode: TModeConfig,
  network: Type.Union([Type.Literal("testnet"), Type.Literal("mainnet"), Type.Literal("local")]),
});

export type NxtpRouterConfig = Static<typeof NxtpRouterConfigSchema>;

/**
 * Gets and validates the router config from the environment.
 *
 * @returns The router config with sensible defaults
 */
export const getEnvConfig = (_chainData: Map<string, ChainData>): NxtpRouterConfig => {
  let configJson: Record<string, any> = {};
  let configFile: any = {};

  try {
    configJson = JSON.parse(process.env.NXTP_CONFIG || "");
  } catch (e) {
    console.info("No NXTP_CONFIG exists, using config file and individual env vars");
  }
  try {
    let json: string;

    const path = process.env.NXTP_CONFIG_FILE ?? "config.json";
    if (fs.existsSync(path)) {
      json = fs.readFileSync(path, { encoding: "utf-8" });
      configFile = JSON.parse(json);
      console.log('configFile: ', configFile);
    }
  } catch (e) {
    console.error("Error reading config file!");
    process.exit(1);
  }
  // return configFile;

  const nxtpConfig: NxtpRouterConfig = {
    mnemonic: process.env.NXTP_MNEMONIC || configJson.mnemonic || configFile.mnemonic,
    web3SignerUrl: process.env.NXTP_WEB3_SIGNER_URL || configJson.web3SignerUrl || configFile.web3SignerUrl,
    redisUrl: process.env.NXTP_REDIS_URL || configJson.redisUrl || configFile.redisUrl || DEFAULT_REDIS_BASE_URL,
    chains: process.env.NXTP_CHAIN_CONFIG
      ? JSON.parse(process.env.NXTP_CHAIN_CONFIG)
      : configJson.chains
      ? configJson.chains
      : configFile.chains,
    logLevel: process.env.NXTP_LOG_LEVEL || configJson.logLevel || configFile.logLevel || "info",
    network: process.env.NXTP_NETWORK || configJson.network || configFile.network || "mainnet",
    server: {
      port: process.env.NXTP_SERVER_PORT || configJson.server?.port || configFile.server?.port || 8080,
      host: process.env.NXTP_SERVER_HOST || configJson.server?.host || configFile.server?.host || "0.0.0.0",
      requestLimit:
        process.env.NXTP_SERVER_REQUEST_LIMIT ||
        configJson.server?.requestLimit ||
        configFile.server?.requestLimit ||
        500,
      adminToken: process.env.NXTP_SERVER_ADMIN_TOKEN || configJson.server?.adminToken || configFile.server?.adminToken,
    },
    mode: {
      cleanup: process.env.NXTP_CLEAN_UP_MODE || configJson.mode?.cleanup || configFile.mode?.cleanup || false,
      priceCaching:
        process.env.NXTP_PRICE_CACHE_MODE || configJson.mode?.priceCaching || configFile.mode?.priceCaching || true,
      diagnostic: process.env.NXTP_DIAGNOSTIC_MODE || configJson.mode?.diagnostic || configFile.mode?.diagnostic || false,
    },
    maxSlippage:
      process.env.NXTP_ALLOWED_TOLERANCE ||
      configJson.allowedTolerance ||
      configFile.allowedTolerance ||
      DEFAULT_ALLOWED_TOLERANCE,
    sequencerUrl: process.env.NXTP_SEQUENCER || configJson.sequencerUrl || configFile.sequencerUrl,
  };

  if (!nxtpConfig.mnemonic && !nxtpConfig.web3SignerUrl) {
    throw new Error("Wallet missing, please add either mnemonic or web3SignerUrl");
  }

  const validate = ajv.compile(NxtpRouterConfigSchema);

  const valid = validate(nxtpConfig);

  if (!valid) {
    throw new Error(validate.errors?.map((err: any) => err.message).join(","));
  }

  return nxtpConfig;
};

let nxtpConfig: NxtpRouterConfig | undefined;

/**
 * Caches and returns the environment config
 *
 * @returns The config
 */
export const getConfig = async (chainData: Map<string, ChainData>): Promise<NxtpRouterConfig> => {
  if (!nxtpConfig) {
    nxtpConfig = getEnvConfig(chainData);
  }
  return nxtpConfig;
};