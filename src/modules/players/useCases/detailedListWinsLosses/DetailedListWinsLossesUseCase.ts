import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Player } from "../../entities/Player";
import { IPlayersRepository } from "../../repositories/IPlayersRepository";

interface IRequest {
  summonerId: string;
  totalWins: number;
  totalLosses: number;
}

@injectable()
class DetailedListWinsLossesUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepository: IPlayersRepository
  ) {}

  async execute({
    summonerId,
    totalWins,
    totalLosses,
  }: IRequest): Promise<Player> {
    const player = await this.playersRepository.findBySummonerId(summonerId);

    if (!player) {
      throw new AppError("Player does not exists!");
    }

    const playerDetails = {
      id: player.id,
      nickname: player.nickname,
      accountId: player.accountId,
      summonerLevel: player.summonerLevel,
      profileIconId: player.profileIconId,
      summonerId: player.summonerId,
      wins: totalWins,
      losses: totalLosses,
    };

    return playerDetails;
  }
}

export { DetailedListWinsLossesUseCase };
