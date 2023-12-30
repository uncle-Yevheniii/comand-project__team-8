let lastScroll = 0;
const defaultOffset = 2;
const header = document.querySelector('header');
const headerSection = document.querySelector('.header-container');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

export function handleHeaderScroll() {
   window.addEventListener('scroll', () => {
      if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
         header.classList.add('hide');
      } else if (scrollPosition() < lastScroll && containHide()) {
         header.classList.remove('hide');
      }
      if (scrollPosition() > defaultOffset) {
         headerSection.classList.add('scrolled');
      } else {
         headerSection.classList.remove('scrolled');
      }
      lastScroll = scrollPosition();
   });
}