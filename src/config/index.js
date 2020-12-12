'use strict'

import 'dotenv/config'

module.exports = {
  port: process.env.PORT,
  contactPoint: {
    name: process.env.CONTACT_POINT_NAME,
    email: process.env.CONTACT_POINT_EMAIL,
    service: process.env.CONTACT_POINT_SERVICE,
    host: process.env.CONTACT_POINT_HOST,
    port: process.env.CONTACT_POINT_PORT,
    pass: process.env.CONTACT_POINT_PASS
  }
}
