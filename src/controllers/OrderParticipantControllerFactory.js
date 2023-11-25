import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import OrderParticipant from "../models/order_participant.js";

class OrderParticipantControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(OrderParticipant)
        return new BaseController(repository)
    }

}

export default OrderParticipantControllerFactory