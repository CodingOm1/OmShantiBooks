document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.event');

  elements.forEach((element, index) => {
      const hideTimeKey = `hideTime-${index}`;
      const addTime = localStorage.getItem(hideTimeKey);

      if (addTime) {
          const now = new Date().getTime();
          const fiveDays = 5 * 24 * 60 * 60 * 1000;

          if (now >= parseInt(addTime) + fiveDays) {
              element.classList.add('block-none');
          } else {
              const remainingTime = parseInt(addTime) + fiveDays - now;

              setTimeout(() => {
                  element.classList.add('block-none');
              }, remainingTime);
          }
      } else {
          const currentTime = new Date().getTime();
          localStorage.setItem(hideTimeKey, currentTime);
      }
  });
});
