import { domHelper } from '../helpers/dom-helper';
import * as statusField from './status-update.html';
import * as statusList from '../status-list/status-list.html';


export function statusFieldInit() {
  domHelper.appendStringToDOM('main', statusField);
  domHelper.appendStringToDOM('main', statusList);
  addEventHandlers();
}

function addEventHandlers() {
  document.querySelector('.submit').addEventListener('click', () => {
    const statusItemTemp = document.querySelector('#status-item-template');
    const item = statusItemTemp.content.querySelector('li');
    item.textContent = document.querySelector('.status-entry').value;
    var clone = document.importNode(statusItemTemp.content, true);
    document.querySelector('.status-list').appendChild(clone);
  })
}