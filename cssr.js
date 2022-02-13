/* CSSR */
var cssr = {
  KEYWORD: 'cssr',
  DOM_COLLECTION: document.getElementsByTagName('*'),
  USED_CLASSES: [],
  STYLESHEET: '',
  TEMP: {
    CLASS: '',
    PROPERTY: '',
    VALUE: ''
  },
  convertProperty: function(value) {
    switch (value) {
      case 'bg':
        return 'background-color'
      case 'c':
        return 'color'
      case 'm':
        return 'margin'
      case 'p':
        return 'padding'
      case 'b':
        return 'border'
      case 'ta':
        return 'text-align'
      case 'h':
        return 'height'
      case 'w':
        return 'width'
      case 'mt':
        return 'margin-top'
      case 'mb':
        return 'margin-bottom'
      case 'mr':
        return 'margin-right'
      case 'ml':
        return 'margin-left'
      case 'pt':
        return 'padding-top'
      case 'pb':
        return 'padding-bottom'
      case 'pr':
        return 'padding-right'
      case 'pl':
        return 'padding-left'
      case 'fs':
        return 'font-size'
      case 'bs':
        return 'box-shadow'
      case 'ps':
        return 'position'
      case 'disp':
        return 'display'
      case 'l':
        return 'left'
      case 'r':
        return 'right'
      case 'b':
        return 'bottom'
      case 't':
        return 'top'
      case 'z':
        return 'z-index'
    }
    return value
  }
}

//  Change Things Here

for (var i = 0; i < cssr.DOM_COLLECTION.length; i++) {
  cssr.USED_CLASSES.push(...cssr.DOM_COLLECTION[i].classList)
}

cssr.USED_CLASSES = [...new Set(cssr.USED_CLASSES)]
cssr.USED_CLASSES = cssr.USED_CLASSES.filter(e => e.substring(0, 4) === cssr.KEYWORD && e.split('-').length === 3)

for (i = 0; i < cssr.USED_CLASSES.length; i++) {
  cssr.TEMP.PROPERTY = cssr.USED_CLASSES[i].split('-')[1]
  cssr.TEMP.VALUE = cssr.USED_CLASSES[i].split('-')[2]
  cssr.TEMP.CLASS = cssr.USED_CLASSES[i]
  if (cssr.TEMP.VALUE.substring(0, 3) === "VAR") cssr.TEMP.VALUE = 'var(--' + cssr.TEMP.VALUE.substring(3, cssr.TEMP.VALUE.length) + ')'
  

  cssr.TEMP.PROPERTY = cssr.convertProperty(cssr.TEMP.PROPERTY)

  cssr.TEMP.VALUE = cssr.TEMP.VALUE.replaceAll('_', ' ').replaceAll('H', '#').replaceAll('NEG','-').replaceAll('P','.')

  cssr.STYLESHEET += `
  .${cssr.TEMP.CLASS}{
    ${cssr.TEMP.PROPERTY}:${cssr.TEMP.VALUE};
      }
  `
}

document.querySelector('body').innerHTML += `<style>${cssr.STYLESHEET}</style>`
