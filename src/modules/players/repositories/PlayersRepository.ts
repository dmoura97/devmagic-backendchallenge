import { getRepository, Repository } from "typeorm";

import { Player } from "../entities/Player";
import { ICreatePlayerDTO, IPlayersRepositories } from "./IPlayersRepository";

class PlayersRepository implements IPlayersRepositories {
  private repository: Repository<Player>;

  constructor() {
    this.repository = getRepository(Player);
  }

  async findBySummonerId(summonerId: string): Promise<Player> {
    const player = await this.repository.findOne({ summonerId });
    return player;
  }

  async delete(player: ICreatePlayerDTO): Promise<void> {
    await this.repository.delete(player);
  }

  async findById(id: string): Promise<Player> {
    const player = await this.repository.findOne(id);
    return player;
  }

  async findByNickName(nickname: string): Promise<Player> {
    const player = await this.repository.findOne({ nickname });
    return player;
  }

  async listAll(): Promise<Player[]> {
    const players = await this.repository.find();
    return players;
  }
  async create({
    nickname,
    accountId,
    summonerLevel,
    profileIconId,
    summonerId,
    id,
  }: ICreatePlayerDTO): Promise<Player> {
    const player = this.repository.create({
      nickname,
      accountId,
      summonerLevel,
      profileIconId,
      summonerId,
      id,
    });

    await this.repository.save(player);

    return player;
  }
}

export { PlayersRepository };
