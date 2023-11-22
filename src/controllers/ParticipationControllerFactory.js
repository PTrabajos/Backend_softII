import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import Participation from "../models/participation.js";

class ParticipationControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(Participation)
        return new BaseController(repository)
    }

}

export default ParticipationControllerFactory