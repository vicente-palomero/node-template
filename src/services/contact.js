'use strict'

import { contactPoint } from '../config'
import { MailHandler, Templates } from '../infrastructure/mailer'
import { MailModel } from '../models'

class ContactService {
  constructor (MailHandlerInstance) {
    this.MailHandler = MailHandlerInstance || MailHandler
  }

  async send ({ name, email, subject, message }) {
    const sender = { name, email }
    const us = contactPoint
    const contactMail = new MailModel(sender, us, subject, message, Templates.CONTACT)
    const confirmationMail = new MailModel(us, sender, subject, message, Templates.CONTACT_CONFIRM)
    await this.MailHandler.send(contactMail)
    await this.MailHandler.send(confirmationMail)
  }
}

module.exports = ContactService
