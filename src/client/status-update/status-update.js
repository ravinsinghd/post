import { domHelper } from '../helpers/dom-helper';
import * as statusField from './status-update.html';


export function statusFieldInit() {
  domHelper.appendStringToDOM('main', statusField);
}


