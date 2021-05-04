import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Player } from "../../entities/Player";
import { IPlayersRepositories } from "../../repositories/IPlayersRepository";

interface IRequest {
  id?: string;
  nickname: string;
  accountId: string;
  summonerLevel: number;
  profileIconId: number;
  summonerId: string;
}

@injectable()
class CreatePlayerUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepository: IPlayersRepositories
  ) {}

  async execute({
    nickname,
    accountId,
    summonerLevel,
    profileIconId,
    summonerId,
  }: IRequest): Promise<Player> {
    const playerAlreadyExists = await this.playersRepository.findByNickName(
      nickname
    );

    if (playerAlreadyExists) {
      throw new AppError("Nickname already exists");
    }

    const player = this.playersRepository.create({
      nickname,
      accountId,
      summonerLevel,
      profileIconId,
      summonerId,
    });

    return player;
  }
}

export { CreatePlayerUseCase };
