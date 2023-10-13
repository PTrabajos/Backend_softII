import express from 'express'
import ProductController from '../controllers/productController.js';

const { findAll, create, update, remove, findOne } = ProductController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;