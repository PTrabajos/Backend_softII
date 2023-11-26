import express from 'express'

import ControllerFactory from '../controllers/OrderControllerFactory.js';

const controllerFactory = new ControllerFactory()
const controller = controllerFactory.createController()

const router = express.Router()

router.get("/", controller.findAll)
router.post("/", controller.create)
router.delete("/:id", controller.remove)
router.get("/:id", controller.findOne)
router.put('/', controller.update )

export default router;