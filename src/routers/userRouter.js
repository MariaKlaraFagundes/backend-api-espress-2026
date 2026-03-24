import express from 'express'
import { getUserController } from '../controllers/user/getUserCoontrollers.js'
import { createUserController } from '../controllers/user/createUserController.js'
import { updateUsersController } from '../controllers/user/updateUserController.js'
import { updateUserAvatarController } from '../controllers/user/updateAvatarUserController.js'
import { deleteUserController } from '../controllers/user/deleteUserCOntroller.js'

const router = express.Router()

router.get('/', getUserController)
router.post('/', createUserController)
router.put('/', updateUsersController)
router.patch('/', updateUserAvatarController)
router.delete('/', deleteUserController)
router.delete('/:id', deleteUserController)

export default router