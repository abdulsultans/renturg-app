(async () => {
  require("dotenv").config({ path: __dirname + "/config/.env" });

  process.env.internalIP = await require("internal-ip").v4();

  if (!process.env.PORT) {
    process.env.PORT = 3333;
  }

  const path = require("path");
  const http = require("http");
  const mongoose = require("mongoose");
  const socketio = require("socket.io");
  const express = require("express");
  const morgan = require("morgan");
  const routes = require("./routes");
  const cors = require("cors");

  const app = express();
  const server = http.Server(app);
  const io = socketio(server);
  const connectedUsers = {};

  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("database authenticated")
  );

  io.on("connection", (socket) => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
  });

  app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
  });

  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
  app.use(routes);

  app.get("/", (req, res) => {
    res.send("Home");
  });

  server.listen(process.env.PORT, () =>
    console.log("Server running successfuly")
  );
})();
