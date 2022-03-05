import express from "express";
import bodyParser from "body-parser";
import App from "./App";
import ReactDOMServer from "react-dom/server";

const app = express();

app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToString(App());
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
