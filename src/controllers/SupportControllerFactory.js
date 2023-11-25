import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import Support from "../models/support.js";

class SupportControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(Support)
        return new BaseController(repository)
    }

}

export default SupportControllerFactory