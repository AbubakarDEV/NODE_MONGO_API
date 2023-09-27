const express = require("express");
const app = express();

app.use(express.json());

const deleteData = require("./delete");
const insert = require("./insert");
const read = require("./read");
const updateData = require("./update");

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(`${dirPath}/apple.txt`, "this is file textx");
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

app.get("/", async (req, res) => {
  let data = await read();
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await insert(req.body);
  res.send(data);
});

app.put("/", async (req, res) => {
  let data = await updateData(req.body);
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  let data = await deleteData(req.params.id);
  res.send(data);
});

app.listen(5000);
