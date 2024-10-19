const express = require("express");
const app = express();
const fs = require("fs/promises");
const files = ["index", "about", "contact-me", "404"];
const PORT = 3000;
//const http = require("http");

async function page(name) {
  const fileName = `./${name}.html`;
  try {
    return await fs.readFile(fileName, "utf8");
  } catch (err) {
    console.log(err);
  }
}
app.listen(PORT, () => {
  console.log("logged");
});

app.get("/", (req, res) => {
  const fileName = req.params.name;
  res.sendFile('../index.html', { root: path.join(__dirname) });
});

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     switch (req.url) {
//       case `/`:
//         page(files[0]).then((data) => {
//           res.end(data);
//         });
//         break;
//       case `/${files[1]}`:
//         page(files[1]).then((data) => {
//           res.end(data);
//         });
//         break;
//       case `/${files[2]}`:
//         page(files[2]).then((data) => {
//           res.end(data);
//         });
//         break;
//       default:
//         `/${files[3]}`;
//         page(files[3]).then((data) => {
//           res.end(data);
//         });
//     }
//   })
//   .listen(8080);
