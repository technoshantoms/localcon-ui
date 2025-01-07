const environment = process.env.NODE_ENV;

let EES_BASE_URL;
let REGISTRATION_SERVICE_BASE_URL;
let RECAPTCHA_KEY;
let DEFAULT_WS_NODE;
let WS_NODE_LIST_URL_NODE1;
let WS_NODE_LIST_URL_NODE2;
let WS_NODE_LIST_URL_NODE3;

if (environment === "development") {
    EES_BASE_URL = "http://localhost:3000";
    REGISTRATION_SERVICE_BASE_URL = "http://localhost:48887";
    RECAPTCHA_KEY = "6Ldp0XQpAAAAAPkfUN6OUp4efAOyb3bnUy5ZC1yd";
    DEFAULT_WS_NODE = "ws://http://localhost:8090/ws";
    WS_NODE_LIST_URL_NODE1 = "wss://wss.acloudbank6.com";
    WS_NODE_LIST_URL_NODE2 = "wss://wss.acloudbank7.com";
    WS_NODE_LIST_URL_NODE3 = "wss://wss.acloudbank8.com";
} else if (environment === "production") {
    EES_BASE_URL = "http://localhost:3000";
    REGISTRATION_SERVICE_BASE_URL = "http://localhost:48887";
    RECAPTCHA_KEY = "6Ldp0XQpAAAAAPkfUN6OUp4efAOyb3bnUy5ZC1yd";
    DEFAULT_WS_NODE = "http://localhost:8090/ws";
    WS_NODE_LIST_URL_NODE1 = "wss://wss.acloudbank3.com";
    WS_NODE_LIST_URL_NODE2 = "wss://wss.acloudbank4.com";
    WS_NODE_LIST_URL_NODE3 = "wss://wss.acloudbank5.com";
}

export {
    EES_BASE_URL,
    REGISTRATION_SERVICE_BASE_URL,
    RECAPTCHA_KEY,
    DEFAULT_WS_NODE,
    WS_NODE_LIST_URL_NODE1,
    WS_NODE_LIST_URL_NODE2,
    WS_NODE_LIST_URL_NODE3
};
