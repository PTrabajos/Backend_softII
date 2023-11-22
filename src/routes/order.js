import express from 'express'
import OrderController from '../controllers/orderController.js'

const { findAll, create, remove, findOne } = OrderController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;