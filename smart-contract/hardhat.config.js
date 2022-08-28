require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    chainstack: {
        url: "https://nd-355-517-248.p2pify.com/f347204583a69f92a5055d33752b37cf",
        accounts: ["5869d469ca58a7f8fb8f933449e0aa90c767da138e0cab33292cc2e171263909"]
    },
   }
};

