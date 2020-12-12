'use strict'

import { EventEmitter } from 'events'

const Events = {
  LOG_INFO: 'log-info'
}

const eventEmitter = new EventEmitter()

module.exports = {
  eventEmitter,
  Events
}
