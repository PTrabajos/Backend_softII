import express from 'express'
import order_itemsController from '../controllers/order_itemsController.js';

const { findAll, create, remove, findOne } = order_itemsController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;