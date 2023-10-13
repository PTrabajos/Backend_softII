import express from 'express'
import Order_detailController from '../controllers/order_detailController.js';

const { findAll, create, remove, findOne } = Order_detailController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;