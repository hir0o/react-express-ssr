import express from "express";
import Top from "../client/pages/Top";
import App from "./Html";
import ReactDOMServer from "react-dom/server";

const app = express();

app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToString(
    App({
      title: "Hello World",
      Children: Top,
    })
  );
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
