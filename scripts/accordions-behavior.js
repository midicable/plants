  let accordions = document.querySelectorAll('.prices-btn');
  let accordionButton;
  let accordionCircle;
  let accordionLines;
  let accordionBody;
  let accordionBodyHeight;
  let lastClicked;

  accordions.forEach(accordion => {
    accordionBodyHeight = accordion.querySelector('.prices-btn-body').clientHeight;
    accordion.querySelector('.prices-btn-body').style.height = '0px';

    accordion.querySelector('.prices-btn-header').addEventListener('click', () => {
      if (lastClicked && lastClicked != accordion && lastClicked.classList.contains('prices-btn-active')) {
        lastClicked.querySelector('.prices-btn-header').dispatchEvent(new Event('click'));
      }

      accordionBody = accordion.querySelector('.prices-btn-body');
      accordionButton = accordion.querySelector('.accordion-button');
      accordionCircle = accordionButton.querySelector('.accordion-circle');
      accordionLines = accordionButton.querySelectorAll('.accordion-line');

      accordion.classList.toggle('prices-btn-active');
      accordionBody.classList.toggle('prices-btn-body-active');
      accordionButton.classList.toggle('accordion-button-active');
      accordionCircle.classList.toggle('accordion-circle-active');
      accordionLines.forEach(line => {
        line.classList.toggle('accordion-line-active');
      });

      if (accordionBody.classList.contains('prices-btn-body-active')) {
        accordionBody.style.height = accordionBodyHeight + 'px';
      } else {
        accordionBody.style.height = '0px';
      }
      lastClicked = accordion;
    });
  });