'use strict'

import { Router } from 'express'
import { ContactService } from '../../services'
import { body, validationResult } from 'express-validator'

const router = Router()
const ContactServiceInstance = new ContactService()

router.get('/', (req, res) => {
  return res.send('contacts section')
})

router.post('/', [
  body('email').isEmail()
], async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const contactDTO = req.body
  await ContactServiceInstance.send(contactDTO)
  return res.status(200).json({ message: 'A contact was successfully received.' })
}
)

export default router
