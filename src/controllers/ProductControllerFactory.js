import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import Product from "../models/product.js";

class ProductControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(Product)
        return new BaseController(repository)
    }

}

export default ProductControllerFactory