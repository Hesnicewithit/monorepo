import { InitConfig } from "../../helpers";

export const MAINNET_PRODUCTION_INIT_CONFIG: InitConfig = {
  hub: "6648936", // MAINNET
  supportedDomains: [
    "6648936", // MAINNET
    "1869640809", // OPTIMISM
    "1886350457", // POLYGON
    // "1634886255", // ARBITRUM ONE
    "6450786", // BNB
    "6778479", // GNOSIS
  ],
  assets: [
    {
      name: "USDC",
      canonical: {
        domain: "6648936",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
      },
      representations: {
        "1869640809": {
          local: "0xc7d36fE97cC7A8D10FdD3F678b660118fb13D548",
          adopted: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        },
        "1886350457": {
          local: "0x11DAd8C97a7688d9deD484a7270efDc4a7Fe04C5",
          adopted: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        },
        // "1634886255": {
        //   local: "0x85fb8e2903ad92a2ab0c6a725806636666ee2ab4",
        //   adopted: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        // },
        "6450786": {
          local: "0xe4f1ce2dc807084a874e957d5d2ac6502820bc15",
          adopted: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        },
        "6778479": {
          local: "0x67e79CC8d6b7C164Da28864875242b9210BFeb15",
          adopted: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        },
      },
    },
    {
      name: "WETH",
      canonical: {
        domain: "6648936",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals: 18,
      },
      representations: {
        "1869640809": {
          local: "0x20bf24AfE0A935f15059d65cF24ff6bA360E6c97",
          adopted: "0x4200000000000000000000000000000000000006",
        },
        "1886350457": {
          local: "0xe918780FdC803388B8281caEe8E096CB2c227E4A",
          adopted: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        },
        // "1634886255": {
        //   local: "0xfd5c16a50b717338cbcb44e34e10d735709e9cb9",
        //   adopted: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        // },
        "6450786": {
          local: "0x6b205aeaae9de574d76d4e45af92998aefca205b",
          adopted: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        },
        "6778479": {
          local: "0x735c7e2035ff902EC8F7115355191Cabb05D86fd",
          adopted: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
        },
      },
    },
    {
      name: "KP3R",
      canonical: {
        domain: "6648936",
        address: "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
        decimals: 18,
      },
      representations: {
        // optimism
        "1869640809": {
          local: "0x74bcb73fA7010EB523a81feE2bB23EaB3d12c2f8",
          adopted: "0x74bcb73fA7010EB523a81feE2bB23EaB3d12c2f8",
        },
        // polygon
        "1886350457": {
          local: "0x8b46589ACB27C66d09dBeACBcdBAFF7dcc681b13",
          adopted: "0x8b46589ACB27C66d09dBeACBcdBAFF7dcc681b13",
        },
        // bnb
        "6450786": {
          local: "0xeC9A9073f7D386e1Ef5f931eE2A33150C9E52cd5",
          adopted: "0xeC9A9073f7D386e1Ef5f931eE2A33150C9E52cd5",
        },
        // gnosis
        "6778479": {
          local: "0x7Cd74859273818F928d2D20472343cb61378af49",
          adopted: "0x7Cd74859273818F928d2D20472343cb61378af49",
        },
      },
    },
    {
      name: "kLP",
      canonical: {
        domain: "6648936",
        address: "0x3f6740b5898c5D3650ec6eAce9a649Ac791e44D7",
        decimals: 18,
      },
      representations: {
        // optimism
        "1869640809": {
          local: "0x3007DB59A437f3F0a64b4fE26c8caf20E9Cb6f43",
          adopted: "0x3007DB59A437f3F0a64b4fE26c8caf20E9Cb6f43",
        },
        // polygon
        "1886350457": {
          local: "0x37227A963Da5bdbe192E12add9f207fF915F470C",
          adopted: "0x37227A963Da5bdbe192E12add9f207fF915F470C",
        },
        // bnb
        "6450786": {
          local: "0x6D9F091C2D92215b6Ab68061f0997ADe31985C3C",
          adopted: "0x6D9F091C2D92215b6Ab68061f0997ADe31985C3C",
        },
        // gnosis
        "6778479": {
          local: "0x2F8e2b29cBf58875035eCfe41E61112c9B3be19e",
          adopted: "0x2F8e2b29cBf58875035eCfe41E61112c9B3be19e",
        },
      },
    },
  ],
  agents: {
    watchers: {
      allowlist: ["0xade09131C6f43fe22C2CbABb759636C43cFc181e"],
    },
    routers: {
      allowlist: ["0xF26c772C0fF3a6036bDdAbDAbA22cf65ECa9F97c"],
    },
    sequencers: {
      allowlist: ["0x4fFA5968857a6C8242E4A6Ded2418155D33e82E7"],
    },
    relayers: {
      allowlist: [
        "0xaBcC9b596420A9E9172FD5938620E265a0f9Df92",
        "0x935AaAe0f5b02007c08512F0629a9d37Af2E1A47",
        "0x9B077C59fDe7de5AdCeF8093Bc38B61d43FC7007",
        "0xE2Fc8F14B6cEb1AD8165623E02953eDB100288bE",
        "0xe8a5eE73f3c8F1Cd55915f6Eb5Fc7df4206f3C78",
        "0x43728A95386D64384C76Afd416Dcc8118869BA6c",
        "0x62B1a88CCc6BC5e6FF91FB2FCD29Ab4F819b35C6",
      ],
    },
  },
};
