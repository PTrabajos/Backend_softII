import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import UserPayment from "../models/user_payment.js";

class UserPaymentControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(UserPayment)
        return new BaseController(repository)
    }

}

export default UserPaymentControllerFactory