const { createProxyMiddleware } = require('http-proxy-middleware');

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
        target: process.env.BACKEND_URL,
        secure: false,
        changeOrigin: true,
    });

    app.use(appProxy);
};
