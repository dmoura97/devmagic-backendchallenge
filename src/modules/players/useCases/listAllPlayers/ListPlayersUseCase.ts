import { inject, injectable } from "tsyringe";

import { Player } from "../../entities/Player";
import { IPlayersRepositories } from "../../repositories/IPlayersRepository";

@injectable()
class ListPlayersUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepository: IPlayersRepositories
  ) {}

  async execute(): Promise<Player[]> {
    const players = await this.playersRepository.listAll();

    return players;
  }
}

export { ListPlayersUseCase };
