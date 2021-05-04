import { Player } from "../entities/Player";

interface ICreatePlayerDTO {
  id?: string;
  nickname: string;
  accountId: string;
  summonerLevel: number;
  profileIconId: number;
  summonerId: string;
}

interface IPlayersRepositories {
  findByNickName(nickname: string): Promise<Player>;
  findBySummonerId(summonerId: string): Promise<Player>;
  findById(id: string): Promise<Player>;
  listAll(): Promise<Player[]>;
  create({
    nickname,
    accountId,
    summonerLevel,
    profileIconId,
    summonerId,
    id,
  }: ICreatePlayerDTO): Promise<Player>;
  delete(player: ICreatePlayerDTO): Promise<void>;
}

export { IPlayersRepositories, ICreatePlayerDTO };
