import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import OrderItem from "../models/order_item.js";

class OrderItemControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(OrderItem)
        return new BaseController(repository)
    }

}

export default OrderItemControllerFactory