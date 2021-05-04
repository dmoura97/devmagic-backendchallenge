import { container } from "tsyringe";

import { IPlayersRepositories } from "../../modules/players/repositories/IPlayersRepository";
import { PlayersRepository } from "../../modules/players/repositories/PlayersRepository";

container.registerSingleton<IPlayersRepositories>(
  "PlayersRepository",
  PlayersRepository
);
