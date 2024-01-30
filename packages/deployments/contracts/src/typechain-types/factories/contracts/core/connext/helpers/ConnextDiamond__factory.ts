/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConnextDiamond,
  ConnextDiamondInterface,
  IDiamondCut,
} from "../../../../../contracts/core/connext/helpers/ConnextDiamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "initContract",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "initData",
            type: "bytes",
          },
        ],
        internalType: "struct ConnextDiamond.Initialization[]",
        name: "_initializations",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ConnextDiamond__fallback_facetNotExit",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x0004000000000002001000000000000200000000030100190000006003300270000001c90430019700030000004103550002000000010355000001c90030019d000100000000001f0000008001000039000000400010043f00000000030000310000000101200190000000140000c13d000000000130004c000000220000c13d000000000100001900000000020000190000000003000019072004b50000040f0000009f01300039000000200200008a001000000002001d000000000121016f000001ca02100041000001cb0220009c000000330000213d000001f00100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019072004bd0000040f0000000201000367000000000101043b000001e6011001970000000000100435000001e901000041000000200010043f000000400200003900000000010000190720048c0000040f000000000101041a000001cd02100198000000610000c13d000001f401000041000000800010043f00000080010000390000000402000039072004bd0000040f000000400010043f0000001f0130018f00000002020003670000000504300272000000410000613d00000000050000190000000506500210000000000762034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b000000390000413d000000000510004c000000500000613d0000000504400210000000000242034f00000003011002100000008004400039000000000504043300000000051501cf000000000515022f000000000202043b0000010001100089000000000212022f00000000011201cf000000000151019f0000000000140435000001cc010000410000005f0230008c00000000020000190000000002012019000001cc04300197000000000540004c0000000001008019000001cc0440009c000000000102c019000000000110004c0000005e0000613d000000800100043d000001cd0210009c0000009b0000a13d00000000010000190000000002000019072004bd0000040f000000020100036700000000030000310000001f0430018f00000005033002720000006e0000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000635004b000000670000413d000000000540004c0000007c0000613d00000003044002100000000503300210000000000503043300000000054501cf000000000545022f000000000131034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000151019f00000000001304350000000001000414000000040320008c0000012a0000c13d000000030100036700000001020000310000001f0320018f00000005022002720000008c0000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000000850000413d000000000430004c0000014f0000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f00000000001204350000014f0000013d000000a00500043d000001ce0250009c0000005e0000213d00000080023000390000009f04500039000001cc06000041000000000724004b00000000070000190000000007068019000001cc08200197000001cc04400197000000000984004b0000000006008019000000000484013f000001cc0440009c00000000040700190000000004066019000000000440004c0000005e0000c13d00000080045000390000000006040433000001ce0760009c0000001b0000213d00000005076002100000003f087000390000001009000029000000000898016f000000400900043d0000000008890019000f00000009001d000000000998004b00000000090000190000000109004039000001ce0a80009c0000001b0000213d00000001099001900000001b0000c13d000000400080043f0000000f080000290000000000680435000000a0055000390000000006570019000000000726004b0000005e0000213d0000000f0700002900000020077000390000006003300039000600000007001d000000000865004b000001530000813d0000000008050433000001ce0980009c0000005e0000213d00000000094800190000000008930049000001cc0a000041000000600b80008c000000000b000019000000000b0a4019000001cc08800197000000000c80004c000000000a00a019000001cc0880009c00000000080b001900000000080a6019000000000880004c0000005e0000c13d000000400800043d000001db0a80009c0000001b0000213d000000600a8000390000004000a0043f000000200a900039000000000a0a0433000001cd0ba0009c0000005e0000213d0000000000a80435000000400a900039000000000a0a0433000000020ba0008c0000005e0000213d000000200b8000390000000000ab0435000000600a900039000000000a0a0433000001ce0ba0009c0000005e0000213d000000000a9a00190000003f09a00039000001cc0b000041000000000c29004b000000000c000019000000000c0b8019000001cc09900197000001cc0d200197000000000ed9004b000000000b0080190000000009d9013f000001cc0990009c00000000090c001900000000090b6019000000000990004c0000005e0000c13d0000002009a00039000000000b090433000001ce09b0009c0000001b0000213d000000050cb002100000003f09c00039000000100d000029000000000dd9016f000000400900043d000000000dd90019000000000e9d004b000000000e000019000000010e004039000001ce0fd0009c0000001b0000213d000000010ee001900000001b0000c13d0000004000d0043f0000000000b90435000000400aa00039000000000bac0019000000000c2b004b0000005e0000213d000000000c090019000000000dba004b000001240000813d000000000d0a0433000001e60ed00197000000000eed004b0000005e0000c13d000000200cc000390000000000dc0435000000200aa000390000011a0000013d000000400a80003900000000009a0435000000000087043500000020055000390000002007700039000000cb0000013d0000000004000031000000000300001900000000050000190000000006000019072004550000040f000000030200036700000001030000310000001f0430018f00000005033002720000013c0000613d00000000050000190000000506500210000000000762034f000000000707043b00000000007604350000000105500039000000000635004b000001350000413d000000000540004c0000014a0000613d00000003044002100000000503300210000000000503043300000000054501cf000000000545022f000000000232034f000000000202043b0000010004400089000000000242022f00000000024201cf000000000252019f0000000000230435000000000110004c0000014f0000c13d00000001020000310000000001000019072004bd0000040f000000010200003100000000010000190000000003000019072004b50000040f000000c00500043d000001ce0450009c0000005e0000213d0000009f04500039000001cc06000041000000000724004b00000000070000190000000007068019000001cc08200197000001cc04400197000000000984004b0000000006008019000000000484013f000001cc0440009c00000000040700190000000004066019000000000440004c0000005e0000c13d00000080045000390000000006040433000001ce0760009c0000001b0000213d00000005076002100000003f087000390000001009000029000000000898016f000000400900043d0000000008890019000300000009001d000000000998004b00000000090000190000000109004039000001ce0a80009c0000001b0000213d00000001099001900000001b0000c13d000000400080043f000000030800002900000000006804350000000005750019000000a005500039000000000625004b0000005e0000213d000000030600002900000020076000390000000006040019000200000007001d0000002006600039000000000856004b000001db0000813d0000000008060433000001ce0980009c0000005e0000213d00000000094800190000000008930049000001cc0a000041000000400b80008c000000000b000019000000000b0a4019000001cc08800197000000000c80004c000000000a00a019000001cc0880009c00000000080b001900000000080a6019000000000880004c0000005e0000c13d000000400800043d000001f30a80009c0000001b0000213d000000400a8000390000004000a0043f000000200a900039000000000a0a0433000001cd0ba0009c0000005e0000213d0000000000a80435000000400a900039000000000a0a0433000001ce0ba0009c0000005e0000213d000000000b9a00190000003f09b00039000001cc0a000041000000000c29004b000000000c000019000000000c0a8019000001cc09900197000001cc0d200197000000000ed9004b000000000a0080190000000009d9013f000001cc0990009c00000000090c001900000000090a6019000000000990004c0000005e0000c13d0000002009b000390000000009090433000001ce0a90009c0000001b0000213d0000003f0a900039000000100c000029000000000cca016f000000400a00043d000000000cca0019000000000dac004b000000000d000019000000010d004039000001ce0ec0009c0000001b0000213d000000010dd001900000001b0000c13d0000004000c0043f00000000009a0435000000400bb00039000000000cb90019000000000c2c004b0000005e0000213d000000200ca00039000000000d000019000000000e9d004b000001d40000813d000000000ecd0019000000000fbd0019000000000f0f04330000000000fe0435000000200dd00039000001cc0000013d00000000099c0019000000000009043500000020098000390000000000a9043500000000008704350000002007700039000001820000013d000001cd01100198000e00000001001d000001f50000613d000001cf01000041000000000401041a000001c9010000410000000002000414000001c90320009c0000000001024019000000c001100210000001d0011001c7000d00000004001d000001cd054001970000800d020000390000000303000039000001d1040000410000000e06000029072007110000040f00000001012001900000005e0000613d0000000d01000029000001d2011001970000000e02000029000000000121019f000001cf02000041000000000012041b000000400100043d000100000001001d000001d30110009c0000001b0000213d00000001030000290000002001300039000000400010043f0000000000030435000000400100043d000e00000001001d0000002001100039000d00000001001d0000000f02000029072004d90000040f0000000e030000290000000001310049000000200210008a00000000002304350000001f011000390000001002000029000000000221016f00000000040300190000000001320019000000000221004b00000000020000190000000102004039000001ce0310009c0000001b0000213d00000001022001900000001b0000c13d000000400010043f00000000020404330000000d010000290720048c0000040f000e00000001001d000001d401000041000000000101041a000000000110004c000002f80000c13d0000000f010000290000000001010433000500000001001d0000004001000039000400000001001d00000000030000190000000501000029000000000113004b0000035c0000813d0000000f010000290000000001010433000000000131004b000003f20000a13d000000050130021000000006020000290000000001210019000000000101043300000020021000390000000004020433000000020240008c000003f90000213d000d00000003001d000000000240004c0000004002100039000002860000613d0000000001010433000e00000001001d0000000001020433000b00000001001d0000000001010433000700000001001d000000000110004c0000000001000019000000010100c039000c00000004001d072005180000040f0000000e01000029000001cd021001970000000c01000029000000010110008c0000000b010000290000002001100039000900000001001d000002cf0000c13d000000000120004c0000000001000019000000010100c039000a00000002001d0720052c0000040f0000000a010000290000000000100435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f000000000101041a000001ed021001980000025b0000c13d0000000a01000029000e00000002001d072005560000040f0000000e0200002900000000040000190000000d030000290000000701000029000000000114004b000002f60000813d000e00000002001d0000000b010000290000000001010433000000000141004b000003f20000a13d000800000004001d0000000501400210000000090200002900000000011200190000000001010433000001e601100197000c00000001001d0000000000100435000001e901000041000000200010043f000000400200003900000000010000190720048c0000040f000000000101041a000001cd011001970000000a02000029000000000221004b0000033a0000613d0000000c02000029072005ef0000040f0000000c010000290000000e020000290000000a03000029072005a90000040f0000000e01000029000001ed01100197000001ed0210009c000003190000613d0000000804000029000000010440003900000001021000390000000d030000290000025d0000013d0000000001010433000e00000001001d0000000001020433000900000001001d0000000001010433000000000110004c0000000001000019000000010100c039072005180000040f0000000e01000029000001cd01100198000a00000001001d0000000001000019000000010100c0390720052c0000040f0000000a010000290000000000100435000001ec01000041000000200010043f000000000100001900000004020000290720048c0000040f000000000101041a000001ed01100198000e00000001001d000002a20000c13d0000000a01000029072005560000040f00000009010000290000002002100039000700000002001d0000000001010433000800000001001d00000000020000190000000d030000290000000801000029000000000112004b000002f60000813d00000009010000290000000001010433000000000121004b000003f20000a13d000b00000002001d0000000501200210000000070200002900000000011200190000000001010433000001e601100197000c00000001001d0000000000100435000001e901000041000000200010043f000000400200003900000000010000190720048c0000040f000000000101041a000001cd01100198000003290000c13d0000000c010000290000000e02000029000e00000002001d0000000a03000029072005a90000040f0000000e01000029000001ed01100197000001ed0210009c000003190000613d0000000b0200002900000001022000390000000101100039000e00000001001d0000000d03000029000002a90000013d000000000120004c000004000000c13d0000000b010000290000000001010433000a00000001001d00000000020000190000000d030000290000000a01000029000000000112004b000002f60000813d0000000b010000290000000001010433000000000121004b000003f20000a13d000e00000002001d0000000501200210000000090200002900000000011200190000000001010433000001e602100197000001e70120009c0000034b0000613d000001e80120009c0000034b0000613d0000000000200435000001e901000041000000200010043f000c00000002001d000000400200003900000000010000190720048c0000040f000000000101041a000001cd011001970000000c02000029072005ef0000040f0000000e0200002900000001022000390000000d03000029000002d60000013d0000000103300039000002220000013d0000000e010000290000000000100435000001d501000041000000200010043f000000400200003900000000010000190720048c0000040f000000000101041a000d00000001001d000000000110004c0000030b0000613d000001d60100004100000000001004390000800b010000390000000402000039072004a30000040f0000000d02000029000000000112004b000003200000a13d000000400100043d0000004402100039000001d703000041000000000032043500000024021000390000001d030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000006402000039072004bd0000040f000001f00100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019072004bd0000040f0000000e010000290000000000100435000001d501000041000000200010043f000000400200003900000000010000190720048c0000040f000000000001041b0000021c0000013d000000400100043d0000006402100039000001f10300004100000000003204350000004402100039000001f2030000410000000000320435000000240210003900000035030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f000000400100043d0000006402100039000001ee0300004100000000003204350000004402100039000001ef030000410000000000320435000000240210003900000038030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f000000400100043d0000006402100039000001ea0300004100000000003204350000004402100039000001eb03000041000000000032043500000024021000390000002a030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f000000400100043d000e00000001001d0000000f020000290000000103000029072004d90000040f0000000e040000290000000001410049000001c902000041000001c90340009c000000000302001900000000030440190000004003300210000001c90410009c00000000010280190000006001100210000000000131019f0000000003000414000001c90430009c0000000002034019000000c002200210000000000121019f000001d0011001c70000800d020000390000000103000039000001d904000041000b00000003001d072007110000040f00000001012001900000005e0000613d00000001010000290000000001010433000000000110004c000004110000c13d00000003010000290000000001010433000c00000001001d000f00000000001d0000000c010000290000000f02000029000000000112004b000004220000813d000000030100002900000000010104330000000f02000029000000000121004b000003f20000a13d0000000f01000029000000050110021000000002020000290000000001210019000000000201043300000020012000390000000001010433000d00000001001d00000000010104330000000002020433000001cd02200198000e00000002001d000003ec0000613d000000000110004c000004290000613d00000000010004100000000e02000029000000000112004b000003ac0000613d000000400200043d000001db0120009c0000001b0000213d0000006001200039000000400010043f0000004001200039000001dc0300004100000000003104350000002001200039000001dd030000410000000000310435000000280100003900000000001204350000000e01000029072006f80000040f00000000010004140000000e02000029000000040220008c0000000b02000029000003b90000613d0000000d02000029000000000402043300000020032000390000000e0200002900000000050000190000000006000019072004550000040f000000000201001900000060010000390000000103000032000003e90000613d000001ce0130009c0000001b0000213d0000003f013000390000001004000029000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000001ce0640009c0000001b0000213d00000001055001900000001b0000c13d000000400040043f00000000003104350000002003100039000000030400036700000001060000310000000505600272000003da0000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000857004b000003d20000413d0000001f06600190000003e90000613d0000000505500210000000000454034f00000000035300190000000305600210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f0000000000430435000000000220004c000003ee0000c13d0000043a0000013d000000000110004c000004110000c13d0000000f010000290000000101100039000f00000001001d000003810000013d000001f00100004100000000001004350000003201000039000000040010043f00000024020000390000000001000019072004bd0000040f000001f00100004100000000001004350000002101000039000000040010043f00000024020000390000000001000019072004bd0000040f000000400100043d0000006402100039000001e40300004100000000003204350000004402100039000001e5030000410000000000320435000000240210003900000036030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f000000400100043d0000006402100039000001e20300004100000000003204350000004402100039000001e303000041000000000032043500000024021000390000003c030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f00000020010000390000010000100443000001200000044300000100010000390000004002000039000001da03000041072004b50000040f000000400100043d0000006402100039000001e00300004100000000003204350000004402100039000001e103000041000000000032043500000024021000390000003d030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f0000000003010433000000400500043d000001d8020000410000000000250435000000040250003900000020040000390000000000420435001000000005001d0000002402500039000000000330004c000004500000c13d0000002601000039000000000012043500000010010000290000006403100039000001de0200004100000000002304350000004403100039000001df0200004100000000002304350000008402000039072004bd0000040f072004c60000040f000000100300002900000000023100490000000001030019072004bd0000040f0002000000000002000200000006001d000100000005001d000001c905000041000001c90630009c00000000030580190000004003300210000001c90640009c00000000040580190000006004400210000000000334019f000001c90410009c0000000001058019000000c001100210000000000113019f0720071b0000040f000000010900002900000000030100190000006003300270000001c9033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000004780000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000004700000413d000000010220018f000000000640004c000004880000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d000001c903000041000001c90410009c00000000010380190000004001100210000001c90420009c00000000020380190000006002200210000000000112019f0000000002000414000001c90420009c0000000002038019000000c002200210000000000112019f000001d0011001c70000801002000039072007160000040f0000000102200190000004a00000613d000000000101043b000000000001042d00000000010000190000000002000019072004bd0000040f0000000003010019000001c9010000410000000004000414000001c90540009c0000000001044019000000c00110021000000060022002100000000001120019000001f5011000410000000002030019072007160000040f0000000102200190000004b20000613d000000000101043b000000000001042d00000000010000190000000002000019072004bd0000040f000001c904000041000001c90510009c000000000104801900000040011002100000006002200210000000000121019f0000000001310019000007210001042e000001c903000041000001c90420009c0000000002038019000001c90410009c000000000103801900000040011002100000006002200210000000000112019f00000722000104300000000003010433000000000032043500000020022000390000000004000019000000000534004b000004d20000813d00000000052400190000002004400039000000000614001900000000060604330000000000650435000004ca0000013d000000000123001900000000000104350000001f01300039000000200300008a000000000131016f0000000001120019000000000001042d00000060050000390000000000510435000000000602043300000060041000390000000000640435000000800400008a00000000071400490000008008100039000000050460021000000000044800190000000009000019000000000a69004b000005080000813d0000002002200039000000000a4700190000000000a80435000000000a020433000000000b0a0433000001cd0bb001970000000000b40435000000200ba00039000000000b0b0433000000020cb0008c000005110000213d000000200c4000390000000000bc0435000000400aa00039000000000a0a0433000000400b40003900000000005b0435000000600c400039000000000b0a04330000000000bc04350000008004400039000000000c000019000000000dbc004b000005050000813d000000200aa00039000000000d0a0433000001e60dd001970000000000d40435000000010cc000390000002004400039000004fc0000013d00000001099000390000002008800039000004e40000013d0000000002140049000000400510003900000000002504350000002001100039000000000001043500000000010300190000000002040019072004c60000040f000000000001042d000001f00100004100000000001004350000002101000039000000040010043f00000024020000390000000001000019072004bd0000040f000000000110004c0000051b0000613d000000000001042d000000400100043d0000006402100039000001f60300004100000000003204350000004402100039000001f703000041000000000032043500000024021000390000002b030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f000000000110004c0000052f0000613d000000000001042d000000400100043d0000006402100039000001f80300004100000000003204350000004402100039000001f903000041000000000032043500000024021000390000002c030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f0001000000000002000001d402000041000000000202041a000100000001001d000000000112004b0000054f0000a13d000001d4010000410000000000100435000000200200003900000000010000190720048c0000040f000000010200002900000000012100190000000002000019000000000001042d000001f00100004100000000001004350000003201000039000000040010043f00000024020000390000000001000019072004bd0000040f0002000000000002000000400200043d000001fa0320009c0000058c0000813d0000006003200039000000400030043f0000004004200039000001fb0300004100000000003404350000002004200039000001fc03000041000000000034043500000024030000390000000000320435000100000001001d072006f80000040f000001d401000041000000000101041a000200000001001d0000000101000029000001cd01100197000100000001001d0000000000100435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f00000002030000290000000101100039000000000031041b000001ce0130009c0000058c0000213d0000000101300039000001d402000041000000000012041b0000000001030019072005400000040f0000000302200210000001cd0300004100000000032301cf000000ff0420008c0000000003002019000000010400002900000000022401cf0000000002002019000000000232016f000000010400008a000000000343013f000000000401041a000000000334016f000000000223019f000000000021041b000000000001042d000001f00100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019072004bd0000040f0001000000000002000000000301041a000100000002001d000000000223004b000005a20000a13d0000000000100435000000200200003900000000010000190720048c0000040f00000001030000290000000302300270000000000121001900000002023002100000001c0220018f000000000001042d000001f00100004100000000001004350000003201000039000000040010043f00000024020000390000000001000019072004bd0000040f0005000000000002000500000003001d000300000002001d000100000001001d000001e601100197000200000001001d0000000000100435000001e901000041000000200010043f0000004002000039000400000002001d00000000010000190720048c0000040f0000000302000029000000a002200210000000000301041a000001cd03300197000000000223019f000000000021041b0000000501000029000001cd01100197000500000001001d0000000000100435000001ec01000041000000200010043f000000000100001900000004020000290720048c0000040f000000000201041a000001fd0320009c000005e80000813d0000000103200039000000000031041b072005930000040f0000000302200210000001c90300004100000000032301cf0000000104000029000000e004400270000000ff0520008c000000000300201900000000022401cf0000000002002019000000000232016f000000010400008a000000000343013f000000000401041a000000000334016f000000000223019f000000000021041b00000002010000290000000000100435000001e901000041000000200010043f000000400200003900000000010000190720048c0000040f000000000201041a000001d2022001970000000503000029000000000232019f000000000021041b000000000001042d000001f00100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019072004bd0000040f0007000000000002000001cd03100198000006d60000613d0000000001000410000000000113004b000700000003001d000006e70000613d000001e601200197000400000001001d0000000000100435000001e901000041000000200010043f0000004002000039000500000002001d00000000010000190720048c0000040f000000000101041a000600000001001d00000007010000290000000000100435000001ec01000041000000200010043f000000000100001900000005020000290720048c0000040f000000000101041a000000000210004c000006c80000613d0000000603000029000000a002300270000000010110008a000500000001001d000000000112004b000006490000613d000300000002001d00000007010000290000000000100435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f0000000502000029072005930000040f0000000302200210000000ff0320008c0000000003000019000006220000213d000000000101041a000000000121022f000000e003100210000100000003001d00000007010000290000000000100435000001ec01000041000000200010043f0000004002000039000200000002001d00000000010000190720048c0000040f0000000302000029072005930000040f000001c903000041000000030220021000000000032301cf000000ff0420008c00000000030020190000000105000029000000e00450027000000000022401cf0000000002002019000000000232016f000000010400008a000000000343013f000000000401041a000000000334016f000000000223019f000000000021041b0000000000500435000001e901000041000000200010043f000000000100001900000002020000290720048c0000040f0000000602000029000001d202200197000000000301041a000001cd03300197000000000223019f000000000021041b00000007010000290000000000100435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f000000000301041a000000000230004c000006cf0000613d000000010230008a000600000002001d000300000001001d072005930000040f0000000302200210000001c90300004100000000032301cf000000010400008a000000000343013f000000ff0220008c000200000004001d00000000020300190000000002042019000000000301041a000000000232016f000000000021041b00000006010000290000000302000029000000000012041b00000004010000290000000000100435000001e901000041000000200010043f000000400200003900000000010000190720048c0000040f000000000001041b0000000501000029000000000110004c000006c70000c13d0000000201000029000001d401000041000000000101041a000000000210004c000006c80000613d000000010110008a000500000001001d00000007010000290000000000100435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f00000005020000290000000101100039000000000101041a000600000001001d000000000121004b000006a90000613d0000000001020019072005400000040f0000000302200210000000ff0320008c00000000030000190000068e0000213d000000000101041a000000000121022f000001cd03100197000500000003001d0000000601000029072005400000040f0000000302200210000001cd0300004100000000032301cf000000ff0420008c0000000003002019000000050500002900000000022501cf0000000002002019000000000232016f0000000204000029000000000343013f000000000401041a000000000334016f000000000223019f000000000021041b0000000000500435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f00000001011000390000000602000029000000000021041b000001d401000041000000000101041a000000000210004c000006cf0000613d000000010110008a000600000001001d072005400000040f0000000302200210000001cd0300004100000000032301cf0000000204000029000000000343013f000000ff0220008c00000000020300190000000002042019000000000301041a000000000232016f000000000021041b000001d4010000410000000602000029000000000021041b00000007010000290000000000100435000001ec01000041000000200010043f000000400200003900000000010000190720048c0000040f0000000101100039000000000001041b000000000001042d000001f00100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019072004bd0000040f000001f00100004100000000001004350000003101000039000000040010043f00000024020000390000000001000019072004bd0000040f000000400100043d000000640210003900000200030000410000000000320435000000440210003900000201030000410000000000320435000000240210003900000037030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f000000400100043d0000006402100039000001fe0300004100000000003204350000004402100039000001ff03000041000000000032043500000024021000390000002e030000390000000000320435000001d80200004100000000002104350000000402100039000000200300003900000000003204350000008402000039072004bd0000040f0002000000000002000200000002001d00000202020000410000000000200439000000040010044300008002010000390000002402000039072004a30000040f000000000110004c000007030000613d000000000001042d000000400300043d000100000003001d000001d801000041000000000013043500000004013000390000002002000039000000000021043500000024023000390000000201000029072004c60000040f000000010300002900000000023100490000000001030019072004bd0000040f00000714002104210000000102000039000000000001042d0000000002000019000007130000013d00000719002104230000000102000039000000000001042d0000000002000019000007180000013d0000071e002104250000000102000039000000000001042d00000000020000190000071d0000013d0000072000000432000007210001042e0000072200010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffffc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132002000000000000000000000000000000000000000000000000000000000000008be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0ffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffdfc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131ec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1321796b89b91644bc98cd93958e4c9038275d622183e25ac5af08cc6b5d955391324c69624469616d6f6e643a2064656c6179206e6f7420656c617073656400000008c379a0000000000000000000000000000000000000000000000000000000008faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6730000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff9f206e6f20636f64650000000000000000000000000000000000000000000000004c69624469616d6f6e644375743a205f696e697420616464726573732068617376657274656400000000000000000000000000000000000000000000000000004c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072657920627574205f696e6974206973206e6f7420616464726573732830290000004c69624469616d6f6e644375743a205f63616c6c6461746120697320656d70743029206275745f63616c6c64617461206973206e6f7420656d707479000000004c69624469616d6f6e644375743a205f696e6974206973206164647265737328657373206d7573742062652061646472657373283029000000000000000000004c69624469616d6f6e644375743a2052656d6f76652066616365742061646472ffffffff00000000000000000000000000000000000000000000000000000000bbf2358e000000000000000000000000000000000000000000000000000000001f931c1c00000000000000000000000000000000000000000000000000000000c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c2073656c6563746f7273000000000000000000000000000000000000000000004c69624469616d6f6e644375743a2043616e6e6f742072656d6f766520637574c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d0000000000000000000000000000000000000000ffffffffffffffffffffffff6374696f6e20776974682073616d652066756e6374696f6e00000000000000004c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e4e487b71000000000000000000000000000000000000000000000000000000006e207468617420616c72656164792065786973747300000000000000000000004c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f000000000000000000000000000000000000000000000000ffffffffffffffbf8249a7f10000000000000000000000000000000000000000000000000000000002000002000000000000000000000000000000000000000000000000000000006163657420746f206375740000000000000000000000000000000000000000004c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206665206164647265737328302900000000000000000000000000000000000000004c69624469616d6f6e644375743a204164642066616365742063616e27742062000000000000000000000000000000000000000000000000ffffffffffffffa0636f6465000000000000000000000000000000000000000000000000000000004c69624469616d6f6e644375743a204e657720666163657420686173206e6f2000000000000000000000000000000000000000000000000100000000000000007461626c652066756e6374696f6e0000000000000000000000000000000000004c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7574696f6e207468617420646f65736e27742065786973740000000000000000004c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e631806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83";

type ConnextDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnextDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnextDiamond__factory extends ContractFactory {
  constructor(...args: ConnextDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _contractOwner: PromiseOrValue<string>,
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _initializations: ConnextDiamond.InitializationStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ConnextDiamond> {
    return super.deploy(
      _contractOwner,
      _diamondCut,
      _initializations,
      overrides || {}
    ) as Promise<ConnextDiamond>;
  }
  override getDeployTransaction(
    _contractOwner: PromiseOrValue<string>,
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _initializations: ConnextDiamond.InitializationStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractOwner,
      _diamondCut,
      _initializations,
      overrides || {}
    );
  }
  override attach(address: string): ConnextDiamond {
    return super.attach(address) as ConnextDiamond;
  }
  override connect(signer: Signer): ConnextDiamond__factory {
    return super.connect(signer) as ConnextDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnextDiamondInterface {
    return new utils.Interface(_abi) as ConnextDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnextDiamond {
    return new Contract(address, _abi, signerOrProvider) as ConnextDiamond;
  }
}
