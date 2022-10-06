export const addLinkEvents = (hover) => {
  document.querySelectorAll('a').forEach((el) => {
    el.addEventListener('mouseover', () => hover(true));
    el.addEventListener('mouseout', () => hover(false));
  });
   document.querySelectorAll('button').forEach((el) => {
    el.addEventListener('mouseover', () => hover(true));
    el.addEventListener('mouseout', () => hover(false));
  });
};

export const addEventListeners = (move, enter, leave) => {
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseenter', enter);
  document.addEventListener('mouseleave', leave);
};

export const removeEventListeners = (move, enter, leave) => {
  document.removeEventListener('mousemove', move);
  document.removeEventListener('mouseenter', enter);
  document.removeEventListener('mouseleave', leave);
};