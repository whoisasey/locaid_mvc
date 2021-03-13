const  {createProxyMiddleware}  = require("http-proxy-middleware");
module.exports = function (app) {
  app.use('/api/locaid',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true
    })
  )
};