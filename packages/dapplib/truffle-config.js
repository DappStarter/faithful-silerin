require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind honey hockey clog olympic syrup'; 
let testAccounts = [
"0x8aca1fbe2542039a7afc7ab1ca9044cea41cf9d938d8b71bc7cadd83c25723b6",
"0x8d21404ba94232a86e30d8630b555f1a92182795c747da2894715cccddb46661",
"0x485ae274708e51641ed042803672c6e962cc709ffa35ac1cc7cc6a66b73448ab",
"0x611b5c61c90df640e46d195c66f2d61a572be9830b65dd01241a0298439d69e2",
"0x533bf2ef77c029d70c666e351ee87372d8d7fdc6300da327a15dc4805b70d6f2",
"0x093ecf59944e778b28c7c5828b9c7fc2e127e41dfc72c0e9b186bccba1b4f5b1",
"0xbf107149701741a17931c011a7b3ebba5dadbc53a61e049f7ddf62bb0656dcab",
"0x19f5b24284540da47433dca5a3e51bf4d2592b1871d9c5cba7153a40f3f6cd76",
"0xabb10c663b77e2bc95554060d601a71a233333fbe8f7c9c183753a70b80f823a",
"0xb4ac2407171eae5da1e7d6d180d431e0c57efe9513fe5a4484846881eac0ceba"
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
