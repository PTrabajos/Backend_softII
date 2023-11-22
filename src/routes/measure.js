import express from 'express'

import ControllerFactory from '../controllers/MeasureControllerFactory.js';

const controllerFactory = new ControllerFactory()
const controller = controllerFactory.createController()

const router = express.Router()

router.get("/", controller.findAll)
router.post("/", controller.create)
router.delete("/:id", controller.remove)
router.get("/:id", controller.findOne)

export default router;