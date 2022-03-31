import { Router } from 'express'
import todos from './todos'
const router = Router()

router.use(root)
router.use('/todos', todos)

export default router
