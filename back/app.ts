import express from "express";

const port = process.env.PORT ?? 3001;

const app = express();

app.get("/", (_req, res) => {
  res.status(200).send("<h1>mada fucker funciona</h1>");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
