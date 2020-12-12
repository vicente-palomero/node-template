'use strict'

import contact from './contact'

const load = () => {
  return [
    { path: '/contacts', router: contact }
  ]
}

export default {
  load
}
