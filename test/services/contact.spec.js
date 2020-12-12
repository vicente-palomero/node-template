'use strict'

import { expect } from 'chai'
import { spy } from 'sinon'
import ContactService from '../../src/services/contact'
import { Generate } from '../helpers'

describe('Mail service', () => {
  it('when contact message is received it should send two emails', () => {
    const spyMailer = {
      send: spy()
    }
    const contact = Generate.Contact()
    const contactServiceInstance = new ContactService(spyMailer)
    return contactServiceInstance.send(contact).then(result => {
      expect(spyMailer.send.calledTwice).to.be.true
    })
  })
})
