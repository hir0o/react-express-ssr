import React from "react";

const Html = ({ Children, title }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>
      <body>
        <h1>app</h1>
        <div id="root">
          <Children />
        </div>
        <script defer src="/client.js" />
      </body>
    </html>
  );
};

export default Html;
