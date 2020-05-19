import { AbstractIconLib } from '../iconlib.js'

const iconPrefix = 'pillow-icon-'
const mapping = {
  collapse: 'caret-down',
  expand: 'caret-right',
  delete: 'remove',
  edit: 'pencil',
  add: 'plus',
  subtract: 'minus',
  cancel: 'remove',
  save: 'sparkline',
  moveup: 'chevron-up',
  moveright: 'chevron-right',
  movedown: 'chevron-down',
  moveleft: 'chevron-left',
  copy: 'copy-previous',
  clear: 'reset',
  time: 'clock',
  calendar: 'table',
  edit_properties: 'hamburger'
}

export class desmosIconlib extends AbstractIconLib {
  constructor () {
    super(iconPrefix, mapping)
  }
}
