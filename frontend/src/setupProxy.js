const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/user", {
      target: "http://localhost:8080",
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware("/board", {
      target: "http://localhost:8081",
      changeOrigin: true,
    }),
  );
};