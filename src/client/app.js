import { DOMHelper } from './dom-helper';
import * as statusField from './templates/status-entry.html';


window.onload = function () {
  const domHelper = new DOMHelper();
  domReady(domHelper);
}


function domReady(domHelper) {
  domHelper.appendStringToDOM('body', statusField);
}





