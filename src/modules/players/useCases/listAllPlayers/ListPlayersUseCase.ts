import { inject, injectable } from "tsyringe";

import { Player } from "../../entities/Player";
import { IPlayersRepository } from "../../repositories/IPlayersRepository";

@injectable()
class ListPlayersUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepository: IPlayersRepository
  ) {}

  async execute(): Promise<Player[]> {
    const players = await this.playersRepository.listAll();

    return players;
  }
}

export { ListPlayersUseCase };
