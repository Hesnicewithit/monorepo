type AddressBook = Record<"mainnet" | "testnet", Record<number, string>>;
import { constants } from "ethers";

export const ROUTER_ADMINS: AddressBook = {
  mainnet: {
    6648936: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // mainnet
    1869640809: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // optimism
    6450786: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // bnb
    6778479: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // gnosis
    1886350457: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // polygon
    1634886255: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // arbitrum one
    1818848877: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // linea x
    1835365481: "0x2f6e0e9212450c8d6Cd2a3BbD478855bfb464Dc0", // metis
    1835101812: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // mantle
    1887071085: "0x7bE978Cc84612E08f7844672B0E6A6F367FE2b6A", // polygonzk
    1635148152: "0xf08e14fc36a874beb16ab66100fab7fafc3c8d54", // avalanche
    1650553709: "0xf08e14fc36a874beb16ab66100fab7fafc3c8d54", // base
    2053862243: "0xE11Bd4D60EEcbbFF8494E6b274e87cB71dcdb978", // zksync-era
    1836016741: "0x3C45f010512405BDEf283A32102A68114Dfc1e47", // mode
    1935897199: "0x3C45f010512405BDEf283A32102A68114Dfc1e47", // scroll
    2020368761: "0xade09131C6f43fe22C2CbABb759636C43cFc181e", // xlayer
  },
  testnet: {},
};

export const PROTOCOL_ADMINS: AddressBook = {
  mainnet: {
    6648936: "0xf2964cCcB7CDA9e808aaBe8DB0DDDAF7890dd378", // mainnet
    1869640809: "0xDb56Fb8F49997Aa1eaa91ebA578fb5992FE22ceF", // optimism
    6450786: "0x06D63fb4f3F9B8235E71ff4AE82958a45B3dd4A8", // bnb
    6778479: "0xFE431e08C415FA4A4e3778da19bff3c1659154B5", // gnosis
    1886350457: "0x95e687bA2d2A791B0246d66bC4fbdD0457dCab19", // polygon
    1634886255: "0xC1167F7209A7434252e427Ad96693ccf6FB2755F", // arbitrum one
    1818848877: "0x50d22a34183e7cD3164184011998a3D50303f75d", // linea
    1835365481: "0xa81a3e9b6fdd1c00785082eee42affe62d3f1217", // metis
    1835101812: "0xa1bf64c4c185570bd79354296097edad915a45d3", // mantle
    1887071085: "0xa1bf64c4c185570bd79354296097edad915a45d3", // polygonzk
    1635148152: "0xa1bf64c4c185570bd79354296097edad915a45d3", // avalanche
    1650553709: "0xa1bf64c4c185570bd79354296097edad915a45d3", // base
    2053862243: "0x92290ba80ac3a6d6fd0a23e74de692d684435572", // zksync-era
    1836016741: "0x739eea65c622bfa4a9e664ae37334a4e14c4b2dd", // mode
    1935897199: "0x739eea65c622bfa4a9e664ae37334a4e14c4b2dd", // scroll
    2020368761: "0xade09131C6f43fe22C2CbABb759636C43cFc181e", // xlayer
  },
  testnet: {
    1735353714: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // goerli
    1936027759: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // sepolia
    1735356532: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // optimism goerli
    9991: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // mumbai
    1734439522: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // arbitrum-goerli
    1668247156: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // linea-goerli
  },
};

export const DAO_CONTRACTS: AddressBook = {
  mainnet: {
    6648936: "0x4d50a469fc788a3c0CdC8Fd67868877dCb246625", // mainnet
    1869640809: "0x6eCeD04DdC5A7709d5877c963cED0288Fb1c7348", // optimism
    6450786: "0x9435Ba7C661a0Fd477deED640491de8c100325A7", // bnb
    6778479: "0x7616Bc6d0dee5E250BA5b3dDa6cbbB71786FB638", // gnosis
    1886350457: "0x0970Adeb473609F91D03e9Bba85F49C445040cD7", // polygon
    1634886255: "0x5C711DB90dEc0a5B81C626968DEa4187a7f9C1F2", // arbitrum one
    1818848877: "0x8167289250c0cD874cAf63d5C06B08c132d2505d", // linea
    1835365481: "0xc2f93ba0368bb96245ec6c3472ca244c6ef47063", // metis
    1835101812: "0xf08e14fc36a874beb16ab66100fab7fafc3c8d54", // mantle
    1887071085: "0xf08e14fc36a874beb16ab66100fab7fafc3c8d54", // polygonzk
    1635148152: "0xf08e14fc36a874beb16ab66100fab7fafc3c8d54", // avalanche
    1650553709: "0xf08e14fc36a874beb16ab66100fab7fafc3c8d54", // base
    2053862243: "0x22058f32cd71d08e6bb6430815ec075cb890af41", // zksync-era
    1836016741: "0xa40a871b9bc7def6b0eb215513ae0b6491b18012", // mode
    1935897199: "0xa40a871b9bc7def6b0eb215513ae0b6491b18012", // scroll
    2020368761: "0xade09131C6f43fe22C2CbABb759636C43cFc181e", // xlayer
  },
  testnet: {
    1735353714: "0xC4E604b3F1Ab77bc8bF62989ccC0670bc575C124", // goerli
    1936027759: "0xC4E604b3F1Ab77bc8bF62989ccC0670bc575C124", // sepolia
    1735356532: "0x52F3ca3554336d9B36c74DF8F4C0887b00C3498E", // optimism goerli
    9991: "0x52F3ca3554336d9B36c74DF8F4C0887b00C3498E", // mumbai
    1734439522: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // arbitrum-goerli
    1668247156: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // linea-goerli
    2053862260: "0xa2Ee8DCd2A8A3A54Cf37F6590E5108BbE502B006", // zksync2 testnet
  },
};

export const TO_LOCAL_ADMINS: string[] = ["Unwrapper", "RelayerProxy"];
