export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://wss.acloudbank.com",
    WS_NODE_LIST: [
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {url: "wss://wss.acloudbank.com", location: "Northern America"},
        {url: "wss://wss.acloudbank.com", location: "Africa"},
        {url: "wss://ru.localcoin.is", location: "Russia"}
    ],
    DEFAULT_FAUCET: "https://faucet.acloudbank.coms", // 2018-12-infrastructure worker proposal
    TESTNET_FAUCET: "https://faucet.wss.acloudbank.com",
    RPC_URL: "https://api.acb.is/apidocs/"
};
