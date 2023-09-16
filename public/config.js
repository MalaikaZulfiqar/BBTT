const CONTRACT_ADDRESS = "0x5bdB23a9eE4495B306EC6e95d911498d6782AC49";    // Enter contract address

const NETWORK_ID = 5; // Mainnet
const MIN_BBTT_BALANCE = 10000;

//const CARD_WALLET = "0x2dADE6Cc700AB5CA7f1709A4EcB5F3b1F9ADB885";
const TOKEN_ADDRESS = "0x92a8771c925ec0812325546075be51e76d2f7123"; // BBTT on mainnet

const ETH_MAIN_ADDRESS = "0x0000000000000000000000000000000000000000";
const USDC_TEST_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const USDT_TEST_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const WBTC_TEST_ADDRESS = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const PAXG_TEST_ADDRESS = "0x45804880De22913dAFE09f4980848ECE6EcbAf78";

const USDC_MAIN_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const USDT_MAIN_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const WBTC_MAIN_ADDRESS = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const PAXG_MAIN_ADDRESS = "0x45804880De22913dAFE09f4980848ECE6EcbAf78";

const ETH_ADDRESS = ETH_MAIN_ADDRESS;

const USDC_ADDRESS = USDC_TEST_ADDRESS;
const USDT_ADDRESS = USDT_TEST_ADDRESS;
const WBTC_ADDRESS = WBTC_MAIN_ADDRESS;


const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"txValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"userInputAmount","type":"uint256"},{"indexed":false,"internalType":"string","name":"encryptedAddress","type":"string"},{"indexed":true,"internalType":"address","name":"srcCurrency","type":"address"},{"indexed":true,"internalType":"address","name":"dstCurrency","type":"address"},{"indexed":false,"internalType":"uint256","name":"senderEthDeposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"senderUsdcDeposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"senderUsdtDeposits","type":"uint256"}],"name":"newDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"txValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"userInputAmount","type":"uint256"},{"indexed":false,"internalType":"string","name":"encryptedAddress","type":"string"},{"indexed":true,"internalType":"address","name":"srcCurrency","type":"address"},{"indexed":true,"internalType":"address","name":"dstCurrency","type":"address"},{"indexed":false,"internalType":"uint256","name":"senderTokenDeposits","type":"uint256"}],"name":"newTokenDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"bool","name":"isOwner","type":"bool"}],"name":"ownershipChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"currency","type":"address"}],"name":"withdrawalMade","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"encryptedAddress","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"dst","type":"address"}],"name":"depositETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"depositRateLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"string","name":"encryptedAddress","type":"string"},{"internalType":"uint256","name":"requestAmount","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"txValue","type":"uint256"}],"name":"depositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"encryptedAddress","type":"string"},{"internalType":"uint256","name":"requestAmount","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"txValue","type":"uint256"}],"name":"depositUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"encryptedAddress","type":"string"},{"internalType":"uint256","name":"requestAmount","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"txValue","type":"uint256"}],"name":"depositUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getUserDeposits","outputs":[{"internalType":"uint256","name":"ethDeposits","type":"uint256"},{"internalType":"uint256","name":"usdtDeposits","type":"uint256"},{"internalType":"uint256","name":"usdcDeposits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getUserTokenDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDepositTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minEthAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minUsdAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"modifyMinEthAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"modifyMinTokenAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"modifyRateLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"modifyminUsdAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"senderEthDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"senderUsdcDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"senderUsdtDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"bool","name":"_isOwner","type":"bool"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"dst","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];         // Define contract ABI



// Define USDC ABI (ERC20 Interface)
const erc20ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function allowance(address owner, address spender) external view returns (uint256)"
];

const minEthLimit = 0.5;
const maxEthLimit = 20.125;

const minUsdLimit = 500;
const maxUsdLimit = 5125;

const ETH_LIMIT_1 = 0.5;
const ETH_LIMIT_2 = 1;
const ETH_LIMIT_3 = 3;
const ETH_LIMIT_4 = 5.125;
const ETH_LIMIT_5 = 10.125;
const ETH_LIMIT_6 = 20.125;

const USD_LIMIT_1 = 500;
const USD_LIMIT_2 = 1000;
const USD_LIMIT_3 = 3000;
const USD_LIMIT_4 = 5125;

const WBTC_LIMIT_1 = 0.03;
const WBTC_LIMIT_2 = 0.06;
const WBTC_LIMIT_3 = 0.2;
const WBTC_LIMIT_4 = 0.375;

const PAXG_LIMIT_1 = 0.5;
const PAXG_LIMIT_2 = 1;
const PAXG_LIMIT_3 = 3;
const PAXG_LIMIT_4 = 5.125;