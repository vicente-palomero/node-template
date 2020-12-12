'use strict'

import { eventEmitter, Events } from '../subscribers/eventEmitter'
import { LogHandler } from '../infrastructure/logger'

class LoggerSubscriber {
  static start () {
    return new LoggerSubscriber()
  }

  constructor () {
    this.initializeEventListeners()
  }

  initializeEventListeners () {
    eventEmitter.on(Events.LOG_INFO, (loggable) => {
      LogHandler.log('info', loggable.logEntry())
    })
  }
}

module.exports = LoggerSubscriber
