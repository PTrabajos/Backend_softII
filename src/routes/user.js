import express from 'express'
import UserController from '../controllers/userController.js';

const { findAll, create, remove, findOne } = UserController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;