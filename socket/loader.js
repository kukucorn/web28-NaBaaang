import channel from "./controllers/channel.js";
import chat from "./controllers/chat.js";

const socketLoader = (httpServer, io, port) => {
  io.on("connection", socket => {
    channel(io, socket);
    chat(io, socket);
    socket.on("disconnect", () => {});
  });

  httpServer.listen(port, () =>
    console.log(`Socket.io started on PORT: ${port}`)
  );
};

export default socketLoader;
