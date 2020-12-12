'use strict'

class Loggable {
  logEntry (message) {
    return `[Class ${this.constructor.name}]: {action}`
  }
}

module.exports = Loggable
