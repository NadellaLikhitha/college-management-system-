require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const studentRoutes = require("./routes/student.routes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Home Route
app.get("/", (req, res) => {

    res.send("College Management System API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});