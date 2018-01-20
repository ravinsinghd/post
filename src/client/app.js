import { DOMHelper } from './dom-helper';
import * as layout from './templates/layout.html';
import * as statusField from './templates/status-entry.html';


window.onload = function () {
  const domHelper = new DOMHelper();
  domReady(domHelper);
}


function domReady(domHelper) {
  domHelper.appendStringToDOM('body', layout);
  domHelper.appendStringToDOM('main', statusField);
}





