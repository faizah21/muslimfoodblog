function scrollToBottom() {
  window.scrollTo({
    top: 4200,
    behavior: "smooth",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export { scrollToBottom, scrollToTop };
