const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//* 1) Middlewares
//* use middleware to read respond from Post body request
app.use(express.json());

//* 3rd-party Middleware
app.use(morgan("dev"));

app.use((req, res, next) => {
  req.user = { name: "An" };
  req.requestTimer = new Date().toISOString();
  next();
});

//* 2) Route Handlers

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
