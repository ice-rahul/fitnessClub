const goToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const goToCourse = () => {
  window.scrollTo({
    top: document.getElementById('courses').offsetTop,
    behavior: 'smooth',
  });
};

const goToHighlights = () => {
  window.scrollTo({
    top: document.getElementById('highlights').offsetTop,
    behavior: 'smooth',
  });
};

const goToContact = () => {
  window.scrollTo({
    top: document.getElementById('contact').offsetTop,
    behavior: 'smooth',
  });
};
