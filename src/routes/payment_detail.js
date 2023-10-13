import express from 'express'
import Payment_detailController from '../controllers/payment_detailController.js';

const { findAll, create, update, remove, findOne } = Payment_detailController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;