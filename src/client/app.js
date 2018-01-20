import { domHelper } from './helpers/dom-helper';
import { statusFieldInit } from './status-update/status-update';
import * as layout from './templates/layout.html';


window.onload = function () {
  domReady();
}


function domReady() {
  domHelper.appendStringToDOM('body', layout);
  statusFieldInit();

}





