'use strict'

class Generate {
  static Contact () {
    const names = ['John', 'Jane', 'Andrés', 'Íñigo', 'Úrsula María']
    const surnames = ['Doe', 'González', 'Iñárritu', 'Laínez']
    const providers = ['gmail', 'hotmail', 'hey', 'altavista', 'geocities']
    const extensions = ['com', 'es', 'net', 'co.uk']
    const separators = ['-', '_', '', '.']
    const messages = ['Deseo más información', 'Buenas,\nMe gustaría saber más sobre sus talleres.\nUn saludo cordial,\n', '<p>Deseo saber más sobre los <span>Talleres</span></p>']
    const oneName = names[Math.floor(Math.random() * names.length)]
    const oneSurname = surnames[Math.floor(Math.random() * surnames.length)]
    const oneProvider = providers[Math.floor(Math.random() * providers.length)]
    const oneSeparator = separators[Math.floor(Math.random() * separators.length)]
    const oneExtension = extensions[Math.floor(Math.random() * extensions.length)]
    const oneMessage = messages[Math.floor(Math.random() * messages.length)]

    return {
      name: `${oneName} ${oneSurname}`,
      email: `${oneName}${oneSeparator}${oneSurname}@${oneProvider}.${oneExtension}`,
      message: oneMessage
    }
  }
}

module.exports = Generate
