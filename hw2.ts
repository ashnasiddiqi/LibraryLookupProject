import express from "express";

const app = express();
const PORT = 3000;
type User = {
  Name: string;
  Email: string;
};
// Middleware to parse JSON requests
app.use(express.json());

// In-memory user list
let userList: User[] = [{ Name: "Ash", Email: "Ash@example.com" }];

// GET all user
app.get("/user", (req, res) => {
  res.json({ user: userList });
});

// POST a new user
app.post("/user", (req, res) => {
  userList.push(req.body);
  res.json({ userList: userList });
});

// DELETE a user by index
app.delete("/user", (req, res) => {
  const { index } = req.body;
  if (index === undefined || index < 0 || index >= userList.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  userList.splice(index, 1);
});

type Books = {
  Name: string;
  ISBN: string;
};
// Middleware to parse JSON requests
app.use(express.json());

// In-memory book list
let bookList: Books[] = [{ Name: "title", ISBN: "123456789" }];

// Get all books
app.get("/book", (req, res) => {
  res.json({ book: bookList });
});

// Post a new book
app.post("/book", (req, res) => {
  bookList.push(req.body);
  res.json({ bookList: bookList });
});

// DELETE a book by index
app.delete("/book", (req, res) => {
  const { index } = req.body;
  if (index === undefined || index < 0 || index >= bookList.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  bookList.splice(index, 1);
});

type Reviews = {
  Rating: number;
};
// Middleware to parse JSON requests
app.use(express.json());

// In-memory rating list
let ratingList: Reviews[] = [{ Rating: 1 }];

// Get all rating
app.get("/rating", (req, res) => {
  res.json({ rating: ratingList });
});

// Post a new rating
app.post("/rating", (req, res) => {
  ratingList.push(req.body);
  res.json({ ratingList: ratingList });
});

// DELETE a rating by index
app.delete("/rating", (req, res) => {
  const { index } = req.body;
  if (index === undefined || index < 0 || index >= ratingList.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  ratingList.splice(index, 1);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
