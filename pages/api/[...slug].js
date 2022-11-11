import { createProxyMiddleware, } from "http-proxy-middleware"; // @2.0.6
import axios from 'axios';
import { } from "express";

const proxy = createProxyMiddleware({
  target: "https://papi.cekpara.com",
  secure: false,
  router: {
    protocol: "https:", // The : is required
    host: "papi.cekpara.com",

  },
  onProxyReq: (proxyReq, req, res) => {
    debugger
    proxyReq.setHeader("access-Control-Allow-Origin", "*");
    proxyReq.setHeader("accept", "application/json, text/plain, */*");
    proxyReq.setHeader("host", "papi.cekpara.com");
    proxyReq.setHeader("connection", "keep-alive");
    proxyReq.setHeader(
      "user-agent",
      "CekPara/87 CFNetwork/1125.2 Darwin/19.4.0"
    );
    // proxyReq.removeHeader("host");
    proxyReq.removeHeader("referer");
    // proxyReq.removeHeader("connection");
    // proxyReq.removeHeader("origin");
    proxyReq.removeHeader("sec-fetch-dest");
    proxyReq.removeHeader("sec-fetch-mode");
    proxyReq.removeHeader("sec-fetch-site");
    proxyReq.removeHeader("sec-ch-ua-platform");
    proxyReq.removeHeader("sec-ch-ua");
    proxyReq.removeHeader("sec-ch-ua-mobile");
    proxyReq.removeHeader("sec-fetch-user");
    proxyReq.removeHeader("upgrade-insecure-requests");
    console.log({ proxyReq, req, res });
  },
  onProxyRes: (proxyRes, req, res) => {
    debugger
    console.log({ proxyRes, req, res });
  },
  onError: function onError(err, req, res, target) {
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end(
      "Something went wrong. And we are reporting a custom error message."
    );
  },
});

/**
 * 
 * @param {import("next/dist/server/request-meta").NextIncomingMessage} req 
 * @param {http} res 
 */
export default function handler(req, res) {

  // debugger;

    delete req.headers['host'];
    delete req.headers['referer'];
    delete req.headers['host'];
    axios({
      method: req.method.toLowerCase(),
      baseURL: "https://papi.cekpara.com",
      url: req.url,
      data: req.body,
      headers: req.headers,
    }).then((result) => {
      // debugger;
      console.log(res);
      res.status(result.status).json(result.data);
    }).catch((err) => {
      // debugger;
      console.log(err.res);
      Object.keys(err.response.headers).forEach(header => {
        res.setHeader(header, err.response.headers[header]);
      })
      res.status(err.response.status).json(err.response.data);
    })

    

}
