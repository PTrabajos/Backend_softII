import express from 'express'
import UniversidadController from '../controllers/universidadController.js';

const { findAll, create, update, remove, findOne } = UniversidadController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;