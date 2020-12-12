'use strict'

import { contactPoint } from '../../config'
import TemplateHandler from './templateHandler'
import { eventEmitter, Events } from '../../subscribers/eventEmitter'
import Email from 'email-templates'

class MailHandler {
  static async send (mail) {
    const transport = {
      host: contactPoint.host,
      port: contactPoint.port,
      secure: false,
      auth: {
        user: contactPoint.email,
        pass: contactPoint.pass
      }
    }
    const email = new Email({
      message: {
        from: mail.sender.email
      },
      send: true,
      transport
    })
    email
      .send({
        template: TemplateHandler.getPath(mail.template),
        message: {
          to: mail.receiver.email
        },
        locals: TemplateHandler.parse(mail, mail.template)
      })
      .then((res) => {
        eventEmitter.emit(Events.LOG_INFO, mail)
      })
  }
}

module.exports = MailHandler
