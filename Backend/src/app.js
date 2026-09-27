
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
// const authRouter = require("./routes/auth.route")
const todoRouter = require("./routes/todo.route")
const cors = require("cors");

app.get("/", (req,res) => {
  res.send("Runing App")
})

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  // origin: ['http://localhost:5173','https://to-do-frontend-g4n2.onrender.com'],
  origin: "*",
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type',  'Authorization']
}));

// Routes
// app.use("/api/auth",  authRouter)
app.use("/api/task",  todoRouter)


// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


module.exports = app;