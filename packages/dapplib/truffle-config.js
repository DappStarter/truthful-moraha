require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember pupil include area blue general'; 
let testAccounts = [
"0xb9f812aa99261393f0f82cf6eeabaaa15cf7f0066e22fdb0e04da17ee91ca79b",
"0xe99cacf67ba3bcecfddf2fd1e65b22a9c34abf73399f4f4430e3419e32c73f64",
"0xeddd9e978834ff5b235f909c23c8c9d811e5e18314e07211b0b841f74802d53c",
"0x060442f3ed0866889af8ec208adcb4c40592c9dcd677690a103ea80f408c3422",
"0x434ff76699a41c444487bde3cd593b1b08b912fb2f0e22cf00c4fa3703c6f7f4",
"0x76ca81225331a7ef7a568b69cfbccbdd369e1424b35c0314fb6197b1041630a0",
"0xa4d3de600c8a6218756452d127ef899e155b94d4f000360b7d058cda5584cf8a",
"0x7d94e0ed9808547cd4707c42e03ca9b8a1a2791e67aac0d683cbcdc15d8a3a7e",
"0x9e1f00edd3bc1195bc3b2ec71bef846e398c99ddb293465cee1509841eb82630",
"0x9e38c7b5960bb66064af01b04cee686aa3105d0ad109f897204694480611bc65"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
