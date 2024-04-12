const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const PORT = 3000;
const app = express();

app.use(express.json());
app.get("/todos", (req, res) => {});

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = createTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
});

app.listen(PORT, () => `Listening on port ${PORT}`);
