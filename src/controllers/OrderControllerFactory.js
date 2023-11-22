import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import Order from "../models/order.js";

class OrderControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(Order)
        return new BaseController(repository)
    }

}

export default OrderControllerFactory