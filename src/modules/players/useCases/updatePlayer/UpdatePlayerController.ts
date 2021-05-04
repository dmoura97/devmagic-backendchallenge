import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlayerUseCase } from "./UpdatePlayerUseCase";

class UpdatePlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { summonerName, summonerLevel } = request.body;

    const updatePlayerUseCase = container.resolve(UpdatePlayerUseCase);

    const playerUpdate = await updatePlayerUseCase.execute({
      player_id: id,
      summonerName,
      summonerLevel,
    });

    return response.status(200).json(playerUpdate);
  }
}

export { UpdatePlayerController };
