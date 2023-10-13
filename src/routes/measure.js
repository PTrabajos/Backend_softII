import express from 'express'
import MeasureController from '../controllers/measureController.js';

const { findAll, create, remove, findOne } = MeasureController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;