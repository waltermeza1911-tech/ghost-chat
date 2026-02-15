const io = require("socket.io")(process.env.PORT || 3000, {
  cors: { origin: "*" }
});

console.log("Servidor funcionando...");

io.on("connection", (socket) => {
  socket.on("enviar-mensaje", (data) => {
    io.emit("recibir-mensaje", data); // Reparte el mensaje a todos
  });
});
