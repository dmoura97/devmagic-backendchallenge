import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPlayersUseCase } from "./ListPlayersUseCase";

class ListPlayersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPlayersUseCase = container.resolve(ListPlayersUseCase);

    const all = await listPlayersUseCase.execute();

    return response.json(all);
  }
}

export { ListPlayersController };
