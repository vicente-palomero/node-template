'use strict'

import templates from './templates'
import path from 'path'
import fs from 'fs'

function parseFile (file, regex, source) {
  const locals = {}
  const data = fs.readFileSync(file, 'utf8')

  let m
  while ((m = regex.exec(data)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }

    locals[m[0]] = source.parseLocal(m[0]) || `MISSING ${m[0]}`
  }
  return locals
}

class TemplateHandler {
  static getTemplate (templateName) {
    return Object.assign({}, templates(templateName))
  }

  static getPath (template) {
    return path.join(__dirname, '..', '..', 'assets', 'emails', template)
  }

  static parse (source, template) {
    const pathname = TemplateHandler.getPath(template)
    const regex = /(?<=(\$|#){)[a-z]*(?=})/gm
    return Object.assign(
      parseFile(`${pathname}/html.pug`, regex, source),
      parseFile(`${pathname}/subject.pug`, regex, source)
    )
  }
}

module.exports = TemplateHandler
