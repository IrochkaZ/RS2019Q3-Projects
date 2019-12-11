module.exports = {
  createEl: (tag, cls, innerText = null, appendTo = null) => {
    const el = document.createElement(tag);
    if (cls) {
      if (Array.isArray(cls)) {
        el.classList.add(...cls);
      } else {
        el.classList.add(cls);
      }
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
