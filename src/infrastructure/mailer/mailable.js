'use static'

class Mailable {
  parseLocal (name) {
    return this[name]
  }
}

module.exports = Mailable
