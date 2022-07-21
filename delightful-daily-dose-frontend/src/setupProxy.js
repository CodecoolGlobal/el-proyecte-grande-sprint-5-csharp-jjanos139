const { createProxyMiddleware } = require('http-proxy-middleware');

//const context = "/weatherforecast";
const context = [
    "/Home",
    "/Login",
    "/Register",
    "/Logout",
    "/Stories",
    "/googleLogin",
    "/google-response"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:44310',
        secure: false,
        changeOrigin: true,
    });

    app.use(appProxy);
};
