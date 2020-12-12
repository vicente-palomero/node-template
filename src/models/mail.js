'use strict'

import aggregation from 'aggregation/es6'
import { Loggable } from '../infrastructure/logger'
import { Mailable } from '../infrastructure/mailer'

class MailModel extends aggregation(Loggable, Mailable) {
  constructor (sender, receiver, subject, message, template) {
    super()
    this.sender = sender
    this.receiver = receiver
    this.subject = subject
    this.message = message
    this.template = template || null
  }

  logEntry () {
    const loggableMessage = super.logEntry()
    return loggableMessage.replace('{action}', `Email sent from ${this.sender.name} to ${this.receiver.name}`)
  }

  parseLocal (property) {
    switch (property) {
      case 'name':
        return this.receiver.name
      case 'sender':
        return this.sender.name
      default:
        return super.parseLocal(property)
    }
  }
}

module.exports = MailModel
