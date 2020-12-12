'use strict'

import { eventEmitter, Events } from '../subscribers/eventEmitter'
import { Logger } from '../infrastructure'

class LoggerSubscriber {
  static start () {
    return new LoggerSubscriber()
  }

  constructor () {
    this.initializeEventListeners()
  }

  initializeEventListeners () {
    eventEmitter.on(Events.LOG_INFO, (loggable) => {
      Logger.log('info', loggable.logEntry())
    })
  }
}

module.exports = LoggerSubscriber
