export class DOMHelper {

  appendStringToDOM(parentSelector, htmlString) {
    const parentEle = document.querySelector(parentSelector);
    if (parentEle) {
      parentEle.insertAdjacentHTML('beforeend', htmlString);
    }
  }
}