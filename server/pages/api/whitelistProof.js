"use strict";
(() => {
var exports = {};
exports.id = 950;
exports.ids = [950];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 972:
/***/ ((module) => {

module.exports = require("express-redis-cache");

/***/ }),

/***/ 7981:
/***/ ((module) => {

module.exports = require("keccak256");

/***/ }),

/***/ 3084:
/***/ ((module) => {

module.exports = require("merkletreejs");

/***/ }),

/***/ 5885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_redis_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(972);
/* harmony import */ var express_redis_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_redis_cache__WEBPACK_IMPORTED_MODULE_1__);


const c = express_redis_cache__WEBPACK_IMPORTED_MODULE_1___default()();
const run = (req, res)=>(fn)=>new Promise((resolve, reject)=>{
            fn(req, res, (result)=>result instanceof Error ? reject(result) : resolve(result)
            );
        })
;
const { MerkleTree  } = __webpack_require__(3084);
const keccak256 = __webpack_require__(7981);
let whitelist = __webpack_require__(449);
const hashedAddresses = whitelist.map((addr)=>keccak256(addr)
);
const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
    sortPairs: true
});
const handler = async (req, res)=>{
    const middleware = run(req, res);
    await middleware(cors__WEBPACK_IMPORTED_MODULE_0___default()());
    await middleware(c.route());
    /** validate req type **/ if (req.method !== 'GET') {
        res.status(400).json({
        });
        return;
    }
    const address = req.query.address;
    if (!address) {
        res.status(400).json({
            msg: "address is required"
        });
        return;
    }
    const hashedAddress = keccak256(address);
    const proof = merkleTree.getHexProof(hashedAddress);
    const root = merkleTree.getHexRoot();
    // just for front-end display convenience
    // proof will be validated in smart contract as well
    const valid = merkleTree.verify(proof, hashedAddress, root);
    res.status(200).json({
        proof,
        valid
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 449:
/***/ ((module) => {

module.exports = JSON.parse('["0x6F0739F676aC30F4a683D5248ed567FB85B407fC","0xB46adfe7e10675b1E43F9132dA7f00A9aD3642f3","0xF9E1845cf5E982F4E13F23d75d41Bf795d35Bcf1","0x185c01A7CE4721f172ACC6D33296408Cef549E3A","0x781622cbdc0Da00d62600439875F0Ac3198F1dCA","0x1B6e58C8904f320d4f55e17704a9Fe05F50BCe47","0x561795d64E310fE2CEd04c58476251e89bF1b182","0x0CE3dd4BF469058518674f7eb8F4E75e46b1E068","0x1039893b37Afd300Ea40581305870Ac6F9f5DD32","0xe3029dbf2f4E5CDE524dC34F38045bca5B081117","0xed1123Cf41c8F4fFd81bd21c53B5B0687477E391","0x2526B26D31500d8D7711b80e22a9F48D2142a2eF","0x9702a0cd0aA7BB7db7727846A0170aB7758Bd428","0x447F043bD961278787fd79318864e09D5FBf8682","0xF04471496Ab5fD2B3C14eAdACc10387D8bC3345b","0xc88AcaE23b29171ed51757FBC8bF72c283a2293C","0xd27f21F9E620cbaAB77ad8d9170475447276286c","0x05A900E3728403fE758eBb3Cae93E24E738BFa2F","0xC619F81C6Ae4081eEB1F485B2055d5c07AF4D777","0x15BadcE39af5C8c15A13bc70d3E54482d0777978","0x8C925133eaFe84D5A6aE7d5ab003d09352021da7","0xf24ae000Ef808F95fb68f0167bF2D1096c2A2c36","0xe01CF9C2f08e0bB3CBfad7d05c20deD26245fe63","0x736353Be76D2419496b0A4869985dfFB0FE1173a","0xc828DF18d5A55009AB502137a64e9D77808A5Bf6","0xbA3A6000895fa693a34D1b6C278BCb950B406FeA","0xBa221bb0A7B9050E78007D7275F91897E650dAAA","0xC084B410c91D76793EF156B3B3b14115763688D7","0xa0cb5fec6e37a35d03300424aa2e82367c4163eb","0xe5f81629BDbBD2c1bBd2915507f12515920Ac3eD","0xC9b9B6b465ff7c8BC402D5AcfAeA097571D2266f","0x4a6600A46b33208Ba05e916521867a0e612248Fa","0xeBE5760B77bB0c0dbB18Ca9179FddFC41812AC8C","0x4DcdfE37485CD3f9E2424AD7F7c39b84a17A91af","0x85b65BD430f4B473d33eb97b0E5A20AABAB46CFc","0xcCbe7cb4CA2a8eE015cE0a9e50b1ce46aDF59D12","0x1471966abfe75cF87Fdad8B76D657EAB8400f0B0","0x3472fa1a1067Bce3c74dd66574b271742a1dF8eF","0x564D29d85cf45D5a1f1c7A45474c67b89F0eb29E","0x23118FFc015eCFb33925bF65C47869a4A4Ed32b1","0xf3Ddd776E322F5BBa74A2E613a5b14B5503cf699","0xaf12A9aF19331FA9b89915537CE9D41BcE5E4c5d","0xe2DBb451Cd7Bf788AaB33EAa2Ae5d72fdDfeC9df","0x6c59439214eb37e9e57f692345391088c67ae8ec","0xE8D391EF649a6652b9047735F6C0D48b6ae751DF","0xC874cB8808C8a5DAc6AbfBD0CdB8B32ee4e5B1d3","0xBB9323a9E65108ebc97a8f0957e751B793eAf4DB","0xBEa2995E431B3F38aC9D82C802e71A3c89C09A25","0x4F626CfE5aC2278DC3315eE1ED65B21c1E236DC3","0x9F755880A28fD3899FaF1c7D09fCB39bAbB4F7a8","0x70DDDA43d4f616263b1dB0ec672CbD8795db13b1","0x510E55779c4DcE3f76c54c298319A80b8378EdBe","0x5812500E79C78D0525c4Dd60BB50012d3969e995","0x92C9e2D6a6A69C97cAaa908A03da56d41b960C2b","0x5Ecc8919024828855b8c1dCC418CB7DabFda9BF6","0x0CE3dd4BF469058518674f7eb8F4E75e46b1E068","0x34fAE48dAa45beA5C336F101a271F0b677feaCdF","0x55e32475cb0AE0434Ae6CCeFc8B9A1d7A146A68a","0xc81d4ab2303A5d03B46F7060AD5c32Ea70c38Fdf","0x6DB215DA508b1c9fAABeC918Cc0753796f56718e","0xf458CBD025443fc97A6ab9c8c4a451699F5A6Cde","0x26708b7d7e0ba7e222d76958783ab320656ced0b","0xdb9eb5e43acb165b5552d313c8f47185661990bd","0xbe0d8edd3c7f47a0ff9d83d57c937d66ff4b3aa8","0xD7fEb6F85f4A1E6aE018D73a5d96497A996bF58f","0xF5EA796413D14CFDAc42312664405E04c42f055C","0xC4680ba2365418fAb2CCab206eD99E2C19219470","0x6486675EF9fdA0e4cE00a4d580571b0A7233D4B6","0x43cD12Ac683DA3460E315638900122a3809331e5","0x2D839c254D31C8ca19b39731ACAC170232B35663","0x825d18c3ec1D54F61f463F1f97aD070F1A876F5c","0x0AA98068781700714DF6B97806780E502c63353b","0xD5b49667f8846C70aa13056b4aDCbf19A68Dca09","0xbC1f37C7226fA710D0de26E63f18FF32cB53FA48","0x2740a78dECC708271FED085a57DFc235B050F24f","0x8611abf2e6fc4ba00e9e3d10cdb1e5382cde1f84","0xb74072b2ba81158b8753A6FA76473a37e486E92E","0xa95aD21917aF866923ea0a7BA144d14e056905bd","0xC839de0fEd241607d50aa4107aE582443B906e4c","0xB6079178B306d2454Bad91756143B772AD1f1944","0xFD904360F15eA845097F6f26464F7B93d843Fa3B","0x565465a0E19309ECB839319453E2c83Aa0BeFDF2","0x1712Bf0c459Dc5C85B78eEe46642d169bE0Ae1Bd","0x7124f10B591fCC647Cc4882BD2feCb6c16531509","0xc5a17f8c74e5bc50f371df97aeac5b132ccd38d8","0x260F47F318a9DB3d3148D5892D1dc95f0c68EbAf","0x08255e706F23aB1F5703Eb717d8CfB5d097aE0F6","0xcCe4eFc6882fF0FC60E70BAA33c3B8dCeEf4E827","0x5FD6698FE80d221b29c1628a55c81feDb46B5b21","0x47aE34439CF54d2d436AA4E916c8FE4e3F0bC11f","0xaded433c89885aD84a8822268deF8c92EbB8b52a","0xbfB003092E1187C75129E2c42b25871c001Fa1e2","0x423B01535A46b437165D0b253Acce8f13Ab953Fa","0x8E65f3d120BA31aE6595511F77B8f361410F5c06","0x2F1A50B42528ceE88bffDE924dC18d1d0D8CC021","0x382DB824e89dc8244d5c507Ac484b86E28c0367e","0x695Aafa716A307cB72A6DC0Df7B33E6230CA1908","0x4076EcA4Db9684Fa1D9bfAc231CB516889A33E5A","0x884bf8b9c21B66B28679987E2FE1c59B849AB382","0x3aE33A926a69aeb1Ca977CEC976b9e53FA84fc25","0x18111df217f0F54EAaD4704399Fa8e7a2Dd94E05","0x090c28Bd9C5B6f34C11Ed409eD719F1Fbf17a2e8","0x87DEE6ac79e734d5e1C21C89C8eAeD8f5885553a","0xd10E4De8bC7ACf771242FAe8Bc491dE9DDC1396A","0x2a7d69b2bD30ac45F405D4b7b04D89cFB1532037","0x533a6C879b6d607b63E94ED6619A687E843b4D1F","0x892EFefaBc660502F2914eaB28cE9A445813EE90","0x2702d7b843a994a388B830f64f9Ca17118F965C1","0xEc3e1cd8627f6071bF25a7E75D0f3Fab045F8167","0x03e9b685b74d4ebf7531BF6A4cDBd891467e7e8c","0x90873ACC11d3e0E3Ebca98efd477BF7a79EabC41","0x71522B91Cd3e0C0B75F8ca5A33043BC7aa380F04","0xEeBD7ceD5559360FC6493dd43822Fc13A45A2caD","0x9cBFC9Cda35D51f370a6148849b107Aa3cc5f745","0x497B5AF00112F42f57B2496BDe21123b1D4F85d6","0x85cB6ab4b818A4db2E2812e41f4f33a52A662aC6","0xc613F84539FD5fdA452f780eBDe9421Fc78DBf2a","0x051F7Be713B3f3615D60FD7010a5c4335aC3C94E","0x0624b2E6fc69D4Bf7ac5052cea71ebCd7C67bFC8","0x2C11C79192F1C497B6bb817D5aC90085BD519eBf","0x199C65F320B7EA641a55161E3489a1F6851DAB04","0xa4F63eF9D035a255c9bDf6A100F9AF8E705A8Eb3","0x8027192a3da5DBc6e398f6a5b585E9D8c410803f"]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5885));
module.exports = __webpack_exports__;

})();