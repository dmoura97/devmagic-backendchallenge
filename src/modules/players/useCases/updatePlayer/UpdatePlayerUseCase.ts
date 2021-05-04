import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Player } from "../../entities/Player";
import { IPlayersRepositories } from "../../repositories/IPlayersRepository";

interface IRequest {
  player_id: string;
  summonerName: string;
  summonerLevel: number;
}

@injectable()
class UpdatePlayerUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepository: IPlayersRepositories
  ) {}

  async execute({
    player_id,
    summonerName,
    summonerLevel,
  }: IRequest): Promise<Player> {
    const player = await this.playersRepository.findById(player_id);

    if (!player) {
      throw new AppError("Player not found!");
    }

    player.nickname = summonerName;
    player.summonerLevel = summonerLevel;

    await this.playersRepository.create(player);

    return player;
  }
}

export { UpdatePlayerUseCase };
