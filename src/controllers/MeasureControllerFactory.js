import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import Measure from "../models/measure.js"

class MeasureControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(Measure)
        return new BaseController(repository)
    }

}

export default MeasureControllerFactory