import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IPlayersRepository } from "../../repositories/IPlayersRepository";

interface IRequest {
  player_id: string;
}

@injectable()
class DeletePlayerUseCase {
  constructor(
    @inject("PlayersRepository")
    private playersRepositories: IPlayersRepository
  ) {}

  async execute({ player_id }: IRequest): Promise<void> {
    const player = await this.playersRepositories.findById(player_id);

    if (!player) {
      throw new AppError("Player does not exists!");
    }

    await this.playersRepositories.delete(player);
  }
}

export { DeletePlayerUseCase };
