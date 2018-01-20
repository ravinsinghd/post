export const domHelper = {

  appendStringToDOM: function (parentSelector, htmlString) {
    const parentEle = document.querySelector(parentSelector);
    if (parentEle) {
      parentEle.insertAdjacentHTML('beforeend', htmlString);
    }
  }
}