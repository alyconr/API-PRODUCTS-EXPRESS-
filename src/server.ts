import "dotenv/config";
import app from "./app.js";

const rawPort = process.env.PORT ?? 3000;
const port = Number(rawPort);


if (!Number.isInteger(port) || port <= 0 || port > 65535) {
  throw new Error(`Invalid port number: ${rawPort} el puerto debe ser un numero entero positivo entre 1 y 65535`);
}


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});