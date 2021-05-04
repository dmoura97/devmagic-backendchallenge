import { Router } from "express";

import { CreatePlayerController } from "../modules/players/useCases/createPlayer/CreatePlayerController";
import { DeletePlayerController } from "../modules/players/useCases/deletePlayer/DeletePlayerController";
import { DetailedListWinsLossesController } from "../modules/players/useCases/detailedListWinsLosses/DetailedListWinsLossesController";
import { ListPlayersController } from "../modules/players/useCases/listAllPlayers/ListPlayersController";
import { UpdatePlayerController } from "../modules/players/useCases/updatePlayer/UpdatePlayerController";

const playersRoutes = Router();

const createPlayerController = new CreatePlayerController();
const listPlayersController = new ListPlayersController();
const detailedListWinsLossesController = new DetailedListWinsLossesController();
const updatePlayerController = new UpdatePlayerController();
const deletePlayerController = new DeletePlayerController();

playersRoutes.post("/", createPlayerController.handle);

playersRoutes.get("/", listPlayersController.handle);
playersRoutes.get("/details/:id", detailedListWinsLossesController.handle);
playersRoutes.put("/update/:id", updatePlayerController.handle);
playersRoutes.delete("/delete/:id", deletePlayerController.handle);

export { playersRoutes };
