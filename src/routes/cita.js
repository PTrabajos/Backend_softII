import express from 'express'
import CitaController from '../controllers/citaController.js';

const { findAll, create, update, remove, findOne } = CitaController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;