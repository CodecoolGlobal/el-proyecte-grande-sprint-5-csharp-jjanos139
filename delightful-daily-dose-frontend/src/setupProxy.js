const { createProxyMiddleware } = require('http-proxy-middleware');

//const context = "/weatherforecast";
const context = [
    "/Home"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:44310',
        secure: true,
        changeOrigin: true
    });

    app.use(appProxy);
};
