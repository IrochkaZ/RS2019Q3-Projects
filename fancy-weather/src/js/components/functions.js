module.exports = {
  createEl: (tag, cls, innerText = null, appendTo = null) => {
    const el = document.createElement(tag);
    if (cls) {
      el.classList.add(cls);
    }
    if (innerText) {
      el.innerText = innerText;
    }
    if (appendTo) {
      appendTo.append(el);
    }
    return el;
  },
};
