import { Request, Response } from "express";
import { container } from "tsyringe";

import auth from "../../../../config/token";
import { api } from "../../../../services/api";
import { DetailedListWinsLossesUseCase } from "./DetailedListWinsLossesUseCase";

interface IDetails {
  tier: string;
  rank: string;
  wins: number;
  losses: number;
}

class DetailedListWinsLossesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      let totalWins = 0;
      let totalLosses = 0;

      const { data } = await api.get(
        `lol/league/v4/entries/by-summoner/${id}?api_key=${auth.authorization.token}
        `
      );

      data.forEach((data: IDetails) => {
        totalWins += data.wins;
        totalLosses += data.losses;
      });

      const detailedListWinsLossesUseCase = container.resolve(
        DetailedListWinsLossesUseCase
      );

      const playerDetails = await detailedListWinsLossesUseCase.execute({
        summonerId: id,
        totalWins,
        totalLosses,
      });

      return response.status(200).json(playerDetails);
    } catch (error) {
      return response.status(400).json({ error: "Player does not exists!" });
    }
  }
}

export { DetailedListWinsLossesController };
