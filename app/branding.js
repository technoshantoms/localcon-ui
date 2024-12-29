import {Apis} from "bitsharesjs";

/**
 * This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 * the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

//function _isMainnet() {
//    const mainnet =
//        "e1605132ecd5ffdf8635b2432d3b6df35d0a0b18572b5120e82acb132c02d6a1";
//
//    // treat every other chain as testnet
//    return Apis.instance().chain_id === mainnet;
//}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "Cloud Bank";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://market.rudex.org";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "http://localhost:48887", // 2017-12-infrastructure worker proposal
        show: true,
        editable: false,
        referrer: "onboarding.bitshares.foundation"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "http://localhost:48887", // operated as a contribution by BitShares EU
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/brand-new-layout/img/logo.svg");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "lightTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 * 
 * export function getUnits() {
    return ["CBANK", "USD", "CNY", "BTC", "EUR", "GBP"];
}
 * 
 * export function getUnits(chainId = "d1de01c8_") {
    if (chainId === "d1de01c8_") return ["CBANK", "USD", "EUR"];
    else if (chainId === "3da3a128_") return ["CBANK"];
    // unknown chain id: (need to return at least one unit)
    else return ["TESTED"];
}
 */

export function getUnits(chainId = "e1605132") {
    if (chainId === "e1605132")
        return ["BTS", "USD", "CNY", "BTC", "EUR", "GBP", "RUB", "CBANK", "ETH", "XMR", "DASH", "LTC", "USDT", "RUB", "UAH"];
    else if (chainId === "39f5e2ed") return ["TEST"];
}

export function getDefaultMarket() {
    return "CBANK_CNY";
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */

export function getMyMarketsBases() {
    return ["CBANK","USD","BTC","CNY","KRW"];
}

/*
All trusted tokens
 */
export function get_allTokens() {
    return {
        nativeTokens: ["CBANK", "BTC", "USD", "KES"],
        rudexTokens: [
            "DONATE",
            "CBANK",
            "LANDLORD",

            "USD",
            "ACB.LTC",
            "ACB.ETH",
            "ACB.EOS",
            "ACB.PZM",
            "ACB.GOLOS",
            "ACB.STEEM",
            "ACB.NBS",
            "ACB.XMR",
            "ACB.BTS",
            "ACB.TRX",

            "ACB.BNB",
            "ACB.BUSD",
            "BTCB",
            "ACB.DEC",
            "ACB.SPS"

            //RuDEX MPA-s OLD
            /*
            "ACB.XBS",
            "ACB.XBT",
            "ACB.RUB",
            "ACB.OIL",
            "ACB.XAU"
            */
        ],
        delistedTokens: ["ACB.PPY", "ACB.SMOKE", "ACB.WLS"],
        otherTokens: []
    };
}

/*
These are the default coins that are displayed with the images
 */
export function getImageName(symbol) {
    if (symbol.startsWith("CBANK.")) return symbol;
    if (
        get_allTokens().nativeTokens.indexOf(symbol) !== -1 ||
        symbol == "CNY" ||
        symbol == "DEXBOT" ||
        symbol == "LANDLORD"
    )
        return symbol;

    return "unknown";

    //let imgName = symbol.split(".");
    //return imgName.length === 2 ? imgName[1] : imgName[0];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    let tokens = {
        nativeTokens: [
            "CBANK",
            "USD",
            "BTC",
            "CNY",
            "CNY1.0",
            "EUR",
            "EUR1.0",
            "GOLD",
            "GOLD1.0",
            "RUBLE",
            "RUB1.0",
            "SILVER",
            "SILVER1.0",
            "USD",
            "USD1.0"
        ],
        gdexTokens: [
            "GDEX.BTC",
            "GDEX.BTO",
            "GDEX.EOS",
            "GDEX.ETH",
            "GDEX.BKBT",
            "GDEX.GXC",
            "GDEX.SEER",
            "GDEX.FOTA",
            "GDEX.JRC",
            "GDEX.EOSDAC",
            "GDEX.MTS",
            "GDEX.GUSD",
            "GDEX.IQ",
            "GDEX.NULS",
            "GDEX.USDT"
        ],
        openledgerTokens: [],
        rudexTokens: [],
        xbtsxTokens: [
            "XBTSX.STH",
            "XBTSX.POST",
            "XBTSX.DOGE",
            "XBTSX.BTC",
            "XBTSX.BTG",
            "XBTSX.BCH",
            "XBTSX.LTC",
            "XBTSX.DASH",
            "XBTSX.NVC",
            "XBTSX.UNI",
            "XBTSX.NMC",
            "XBTSX.WAVES",
            "XBTSX.COF",
            "XBTSX.MDL",
            "XBTSX.ETH",
            "XBTSX.EXR",
            "XBTSX.USDT",
            "XBTSX.TUSD",
            "XBTSX.USDC",
            "XBTSX.USDN",
            "XBTSX.USD",
            "XBTSX.RUB",
            "XBTSX.EUR",
            "XBTSX.ATRI",
            "XBTSX.FIL",
            "XBTSX.EOS",
            "XBTSX.BAT"
        ],
        honestTokens: ["HONEST.BTC", "HONEST.USD"],
        ioxbankTokens: ["IOB.XRP"],
        otherTokens: ["CVCOIN", "HERO", "OCT", "HERTZ", "YOYOW"]
    };

    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * MPA-s for show (order) in Collaterals in Account Portfolio
 * @returns {*}
 */
export function getGroupedMPAsRuDEX() {
    let tokens = {
        listed: [],
        rudex: [
            //RuDEX MPA-s
            /*            "CBANK.XBS",
            "CBANK.XBT",
            "CBANK.RUB",
            "CBANK.OIL",
            "CBANK.XAU"*/
        ]
    };

    return tokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = ["USD", "CBANK"]) {
    return [
        ["USD", "CBANK"],
        ["USD", "GOLD"],
        ["USD", "HERO"],
        ["USD", "GDEX.BTC"],
        ["USD", "GDEX.ETH"],
        ["USD", "GDEX.EOS"],
        ["USD", "GDEX.BTO"],
        ["USD", "HONEST.BTC"],
        ["USD", "HONEST.USD"],
        ["CNY", "CBANK"],
        ["CNY", "USD"],
        ["CNY", "YOYOW"],
        ["CNY", "OCT"],
        ["CNY", "GDEX.BTC"],
        ["CNY", "GDEX.ETH"],
        ["CNY", "GDEX.EOS"],
        ["CNY", "GDEX.BTO"],
        ["CNY", "GDEX.SEER"],
        ["CNY", "GDEX.BKBT"],
        ["CNY", "GDEX.USDT"],
        ["CNY", "GDEX.GXC"],
        ["CNY", "HONEST.BTC"],
        ["CNY", "HONEST.USD"],
        ["CBANK", "RUBLE"],
        ["CBANK", "HERO"],
        ["CBANK", "OCT"],
        ["CBANK", "SILVER"],
        ["CBANK", "GOLD"],
        ["CBANK", "GDEX.BTC"],
        ["CBANK", "GDEX.ETH"],
        ["CBANK", "GDEX.EOS"],
        ["CBANK", "GDEX.BTO"],
        ["CBANK", "GDEX.USDT"],
        ["CBANK", "XBTSX.BTC"],
        ["CBANK", "XBTSX.ETH"],
        ["CBANK", "XBTSX.EUR"],
        ["CBANK", "XBTSX.RUB"],
        ["CBANK", "XBTSX.STH"],
        ["CBANK", "XBTSX.TUSD"],
        ["CBANK", "XBTSX.WAVES"],
        ["CBANK", "XBTSX.USD"],
        ["CBANK", "XBTSX.USDC"],
        ["CBANK", "XBTSX.USDN"],
        ["CBANK", "XBTSX.USDT"],
        ["CBANK", "HONEST.BTC"],
        ["CBANK", "HONEST.USD"],
        ["CBANK", "IOB.XRP"],
        ["CBANK", "HERTZ"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    return ["XBTSX.", "GDEX.", "HONEST.", "IOB."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for gpAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "CBANK.", "gp"
    return ["bit"];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    const allowedGateways = [
        "TRADE",
        "OPEN", // keep to display the warning icon, permanently disabled in gateways.js
        "RUDEX", // keep to display the warning icon, permanently disabled in gateways.js
        "GDEX",
        "XBTSX",
        "IOB",
        "CITADEL", // keep to display the warning icon, permanently disabled in gateways.js
        "BRIDGE", // keep to display the warning icon, permanently disabled in gateways.js
        "SPARKDEX" // keep to display the warning icon, permanently disabled in gateways.js
    ];
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getDashboardAssets() {
    return ["BTC", "ETH", "XMR", "DASH", "LTC", "USDT"];
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the BitShares UI placed under bitshares.org."
    };
}

export function showAssetsAccounts() {
    return ["nathan"];
}

/**
 * The featured coins displayed on the Listing page of the UI
 *
 * @returns {[{[string]:[string]}]}
 */
export function getListingCoins() {
    return [
        //soon: true, (for TON example)
        {
            name: "The 2027 Presidential candidate",
            active: "yes",
            ticker: "USD",
            page: "https://morara.kebaso.com",
            account: "nathan",
            goal: 3000000,
            votes: 0
        },
        {
            name: "Kennedy Ventures",
            active: "yes",
            ticker: "USD",
            page: "https://homepesa.com",
            account: "dennis",
            goal: 10000,
            votes: 0
        },
        {
            name: "Dennis K. Satia",
            active: "yes",
            ticker: "USD",
            page: "https://web.acloudbank.com",
            account: "purity",
            goal: 28000,
            votes: 0
        }
    ];
}

export function getListedCoins() {
    return [
        {
            name: "ADAMANT Messenger",
            active: "yes",
            ticker: "USD",
            page: "https://adamant.im",
            account: "nathan",
            goal: 10000,
            votes: 0
        }
    ];
}
