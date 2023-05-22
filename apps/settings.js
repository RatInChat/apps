module.exports = {
  icon: 'https://p1.hiclipart.com/preview/909/115/679/gear-icon-settings-icon-seo-and-online-marketing-icon-material-property-logo-symbol-hardware-accessory-png-clipart.jpg',
  ads: false,
  async execute(mainframe, data, page) {
    // Create the settings container
    const box = document.createElement('div');
    box.id = 'settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso';
    box.style.width = '100vw';
    box.style.height = `calc(100vh - 55px)`;
    box.style.top = '0';
    box.style.position = 'fixed';
    box.style.backgroundColor = '#101010';
    box.style.borderRadius = '5px';
    box.style.zIndex = '10000';
    box.style.display = 'flex';
    box.style.flexDirection = 'column';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';        
    mainframe.appendChild(box);

    const title = document.createElement('h1');
    title.innerText = page;
    title.style.color = '#FFFFFF';
    box.appendChild(title);

    const close = document.createElement('button');
    close.innerText = '✕';
    close.style = `
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
      background-color: #101010 !important;
      color: #FFFFFF !important;
      border: none !important;
      border-radius: 5px !important;
      padding: 5px !important;
      margin: 5px !important;
      width: 40px !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      z-index: 10001 !important;
    `;

    close.addEventListener('mouseover', () => {
      close.style.backgroundColor = 'red';
    });

    close.addEventListener('mouseout', () => {
      close.style.backgroundColor = '#101010';
    });

    close.addEventListener('click', () => {
      box.remove();
      const icon = document.querySelector(`img[src="${this.icon}"]`);
      icon.classList.add('app-icon-animation-reverse');

      setTimeout(() => {
        icon.remove();
      }, 500);
    });

    box.appendChild(close);

    const restore_maximize = document.createElement('button');

    restore_maximize.style = `
      position: absolute !important;
      top: 0 !important;
      right: 40px !important;
      background-color: #101010 !important;
      color: #FFFFFF !important;
      border: none !important;
      border-radius: 5px !important;
      padding: 5px !important;
      margin: 5px !important;
      width: 40px !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      z-index: 10001 !important;
    `;
    restore_maximize.innerText = '🗗';

    restore_maximize.addEventListener('mouseover', () => {
      restore_maximize.style.backgroundColor = 'gray';
    });

    restore_maximize.addEventListener('mouseout', () => {
      restore_maximize.style.backgroundColor = '#101010';
    });

    restore_maximize.addEventListener('click', () => {
      if (restore_maximize.innerText == '🗗') {
        restore_maximize.innerText = '🗖';
        box.style.width = '50vw';
        box.style.height = `calc(50vh - 55px)`;
      } else {
        restore_maximize.innerText = '🗗';
        box.style.width = '100vw';
        box.style.height = `calc(100vh - 55px)`;
      }
    });

    // Add draggable and resizable features to the minimized window
    // Lets see how buggy it is, first try
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let resizeOffsetX = 0;
    let resizeOffsetY = 0;

    restore_maximize.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // Only activate on left mouse button
      isDragging = true;
      dragOffsetX = e.clientX - box.offsetLeft;
      dragOffsetY = e.clientY - box.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      // Calculate the new position based on the drag offset
      const newX = e.clientX - dragOffsetX;
      const newY = e.clientY - dragOffsetY;

      // Restrict the dragging within 10px from the top
      const topLimit = 10;
      const constrainedY = Math.max(topLimit, newY);

      // Update the position of the box
      box.style.left = `${newX}px`;
      box.style.top = `${constrainedY}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    box.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // Only activate on left mouse button
      resizeOffsetX = e.clientX - box.offsetWidth;
      resizeOffsetY = e.clientY - box.offsetHeight;
    });

    document.addEventListener('mousemove', (e) => {
      if (e.buttons !== 1) return; // Only activate when left mouse button is held
      if (e.clientX <= 10 || e.clientY <= 10) return; // Restrict resizing within 10px from the top

      // Calculate the new size based on the resize offset
      const newWidth = e.clientX - resizeOffsetX;
      const newHeight = e.clientY - resizeOffsetY;

      // Update the size of the box
      box.style.width = `${newWidth}px`;
      box.style.height = `${newHeight}px`;
    });

    box.appendChild(restore_maximize);

    const minimize = document.createElement('button');
    minimize.innerText = '🗕';
    minimize.style = `
      position: absolute !important;
      top: 0 !important;
      right: 80px !important;
      background-color: #101010 !important;
      color: #FFFFFF !important;
      border: none !important;
      border-radius: 5px !important;
      padding: 5px !important;
      margin: 5px !important;
      width: 40px !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      font-size: 18px !important;
      font-weight: bold !important;
      line-height: 1 !important;
      z-index: 10001 !important;    
  `;
    let minimized = false;
    minimize.addEventListener('mouseover', () => {
      minimize.style.backgroundColor = 'gray';
    });
    
    minimize.addEventListener('mouseout', () => {
      minimize.style.backgroundColor = '#101010';
    });

    minimize.addEventListener('click', () => {
      const icon = document.querySelector(`img[src="${this.icon}"]`);
      icon.classList.remove('app-icon-animation');
      box.classList.add('minimize-animation');
      
      setTimeout(() => {
        box.style.display = 'none';
        icon.classList.add('icon-bounce-animation')
        setTimeout(() => {
          icon.classList.remove('icon-bounce-animation');
          box.classList.remove('minimize-animation');
          minimized = true;
        }
        , 500);
      }
      , 500);
    });

    box.appendChild(minimize);

    const icon = document.querySelector(`img[src="${this.icon}"]`);
    icon.addEventListener('click', () => {
      if (!minimized) return;
      box.style.display = 'flex';
      box.classList.add('maximize-animation');
      setTimeout(() => {
        icon.classList.add('icon-bounce-animation');
        box.classList.remove('maximize-animation');
        setTimeout(() => {
          icon.classList.remove('icon-bounce-animation');
          minimized = false;
        }
        , 500);
      }
      , 500);
    });

    if (page == 'Preferences') {
      const content = document.createElement('div');
      content.style.marginTop = '20px';
      content.innerText = 'Preferences content goes here.';
      content.style.color = '#FFFFFF';
      box.appendChild(content);
    }
  }
};
