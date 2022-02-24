export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToZero = () => {
  window.scrollTo(0, 0);
};
