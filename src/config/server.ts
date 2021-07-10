import express, { Application } from 'express';
import Colors = require('colors.ts');
import pokemonRouter from '../routes/pokemonRoutes';
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    pokemons: `${process.env.API_PATH}/pokemons`
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.pokemons, pokemonRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server online in port ${this.port}`.green);
      Colors.colors("green", "Server online in port");
    })
  }
}

export default Server;