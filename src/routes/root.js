import { Router } from 'express'
import { append } from 'express/lib/response'
import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling Root')
  res.send({ msg: 'hello there' })
})

export default router
