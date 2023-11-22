import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import ProblemType from "../models/problem_type.js";

class ProblemTypeControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(ProblemType)
        return new BaseController(repository)
    }

}

export default ProblemTypeControllerFactory