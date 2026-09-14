import server from "./server";
import "dotenv/config";
import colors from "colors";
import { testConnection } from "./config";

const PORT = process.env.PORT;

testConnection()

server.listen(PORT, () => {
  console.log(colors.cyan.bold(`REST API corriendo en el puerto ${PORT}`));
});
