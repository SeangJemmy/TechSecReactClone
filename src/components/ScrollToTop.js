export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export function ScrollToZero() {
  setTimeout(() => {
    document.getElementById("navv").scrollIntoView();
  }, 200);
}
