import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import User from "../models/user.js";

class UserControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(User)
        return new BaseController(repository)
    }

}

export default UserControllerFactory