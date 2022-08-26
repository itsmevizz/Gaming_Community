const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const connectDB = require("./bin/db");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const node_media_server = require("./Media/media_server");
require("dotenv").config({ path: "./.env" });

const adminRouter = require("./routes/admin");
const usersRouter = require("./routes/users");
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gamming Community API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3005",
      },
    ],
  },
  apis: ["./api/apiDoc.js"], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
  if (!req.user) {
    res.header(
      "Cache-Control",
      "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
    );
  }
  next();
});

app.use(logger("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
connectDB();
node_media_server.run();

app.use("/", usersRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
    message: err.message,
  });
});

module.exports = app;
