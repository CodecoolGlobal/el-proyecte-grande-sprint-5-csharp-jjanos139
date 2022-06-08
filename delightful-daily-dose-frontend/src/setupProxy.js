const { createProxyMiddleware } = require('http-proxy-middleware');

//const context = "/weatherforecast";
const context = [
    "/Home"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'http://localhost:7945',
        secure: false,
        changeOrigin: true
    });

    app.use(appProxy);
};
