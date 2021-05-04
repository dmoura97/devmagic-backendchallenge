import { Request, Response } from "express";
import { container } from "tsyringe";

import { api } from "../../../../services/api";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

interface IData {
  data: {
    id: string;
    accountId: string;
    name: string;
    profileIconId: number;
    summonerLevel: number;
  };
}

class CreatePlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { summonerName } = request.body;

    const { data }: IData = await api.get(
      `lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-b60c19fa-3949-4176-92bd-0fbddaac046c`
    );

    const createPlayerUseCase = container.resolve(CreatePlayerUseCase);

    const player = await createPlayerUseCase.execute({
      nickname: data.name,
      accountId: data.accountId,
      summonerLevel: data.summonerLevel,
      profileIconId: data.profileIconId,
      summonerId: data.id,
    });

    return response.status(200).json(player);
  }
}

export { CreatePlayerController };
