  let btns = document.querySelectorAll('.service-btn');
  let lastClickedBtn;
  let serviceItems = document.querySelectorAll('.service-item');
  let services = {
    'Gardens': false, 
    'Lawns': false,
    'Planting': false
  };
  let isAllActive;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      isAllActive = true;

      btn.classList.toggle('active-service-btn');
      if (document.querySelectorAll('.active-service-btn').length == 3) {
        lastClickedBtn.classList.remove('active-service-btn');
        services[lastClickedBtn.textContent] = false;
      }

      if (btn.classList.contains('active-service-btn')) {
        services[btn.textContent] = true;
      } else {
        services[btn.textContent] = false;
      }

      for (const service in services) {
        if (services[service]) {
          isAllActive = false;
          break;
        }
      }
      
      if (isAllActive) {
        serviceItems.forEach(item => {
          item.classList.remove('blurred-service-item');
        });
      } else {
        for (const service in services) {
          if (!services[service]) {
            Array.from(serviceItems).filter(item => item.classList.contains(service)).forEach(item => {
              item.classList.add('blurred-service-item');
            });
          } else {
            Array.from(serviceItems).filter(item => item.classList.contains(service)).forEach(item => {
              item.classList.remove('blurred-service-item');
            });
          }
        }
      }

      lastClickedBtn = btn;
    });
  });
