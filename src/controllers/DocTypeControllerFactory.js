import ControllerFactory from "./ControllerFactory.js";

import BaseRepository from "../repository/baseRepository.js";
import BaseController from "./BaseController.js";

import DocType from "../models/doc_type.js";

class DocTypeControllerFactory extends ControllerFactory {

    createController() {
        const repository = new BaseRepository(DocType)
        return new BaseController(repository)
    }

}

export default DocTypeControllerFactory