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
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      -khtml-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
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
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      -khtml-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    `;
    restore_maximize.innerText = '🗗';
    let restored = false;
    
    restore_maximize.addEventListener('mouseover', () => {
      restore_maximize.style.backgroundColor = 'gray';
    });

    restore_maximize.addEventListener('mouseout', () => {
      restore_maximize.style.backgroundColor = '#101010';
    });
    
    let old_pos = {
      x: 0,
      y: 0
    };

    let old_size = {
      width: `50vw`,
      height: `calc(50vh - 55px)`
    };

    const borderWidth = 1; // 1 pixel border width
    const borderColor = 'white';
    restore_maximize.addEventListener('click', () => {
      if (restore_maximize.innerText == '🗗') {
        restore_maximize.innerText = '🗖';
        box.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out';
        box.style.width = old_size.width;
        box.style.height = old_size.height;
        box.style.left = `${old_pos.x}px`;
        box.style.top = `${old_pos.y}px`;
        restored = true;
        box.style.border = `${borderWidth}px solid ${borderColor}`;
      } else {
        restore_maximize.innerText = '🗗';
        box.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out';
        box.style.width = '100vw';
        box.style.height = `calc(100vh - 55px)`;
        box.style.left = '0';
        box.style.top = '0';
        restored = false;
        box.style.border = 'none';
      }
    
      // Reset transition after animation completes
      setTimeout(() => {
        box.style.transition = 'none';
      }, 300);
    });
    
    let isDragging = false;
    let isResizing = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    
    box.addEventListener('mousedown', (e) => {
      if (!restored && !isResizing) return;
      if (e.clientY <= box.offsetTop + 30) {
        isDragging = true;
        dragOffsetX = e.clientX - box.offsetLeft;
        dragOffsetY = e.clientY - box.offsetTop;
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (isDragging && !isResizing) {
        const newX = e.clientX - dragOffsetX;
        const newY = e.clientY - dragOffsetY;
        box.style.left = `${newX}px`;
        box.style.top = `${Math.max(newY, 0)}px`;
      }
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    box.appendChild(restore_maximize);

    let resizeDirection = '';
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    function setResizeCursor(direction) {
      let cursor = '';
      if (!restored) return;
      if (direction === 'left' || direction === 'right') {
        cursor = 'ew-resize';
      } else if (direction === 'top' || direction === 'bottom') {
        cursor = 'ns-resize';
      } else if (direction === 'top-left' || direction === 'bottom-right') {
        cursor = 'nwse-resize';
      } else if (direction === 'top-right' || direction === 'bottom-left') {
        cursor = 'nesw-resize';
      }
      box.style.cursor = cursor;
    }

    document.addEventListener('mousedown', (e) => {
      if (restored) {
        const { clientX, clientY } = e;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = box;
    
        if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'left';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'right';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          isResizing = true;
          resizeDirection = 'top';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'bottom';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          isResizing = true;
          resizeDirection = 'top-left';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          isResizing = true;
          resizeDirection = 'top-right';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'bottom-left';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'bottom-right';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        }
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (isResizing) {
        const { clientX, clientY } = e;
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
    
        if (resizeDirection.includes('left')) {
          const newWidth = startWidth - deltaX;
          box.style.width = `${newWidth}px`;
          box.style.left = `${startX + deltaX}px`;
        } else if (resizeDirection.includes('right')) {
          const newWidth = startWidth + deltaX;
          box.style.width = `${newWidth}px`;
        }
    
        if (resizeDirection.includes('top')) {
          const newHeight = startHeight - deltaY;
          box.style.height = `${newHeight}px`;
          box.style.top = `${startY + deltaY}px`;
        } else if (resizeDirection.includes('bottom')) {
          const newHeight = startHeight + deltaY;
          box.style.height = `${newHeight}px`;
        }
      } else {
        const { clientX, clientY } = e;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = box;
    
        if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          setResizeCursor('left');
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          setResizeCursor('right');
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          setResizeCursor('top');
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          setResizeCursor('bottom');
        } else {
          box.style.cursor = 'default';
        }
      }
    });

    document.addEventListener('mouseup', () => {
      isResizing = false;
    });
    
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
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      -khtml-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important; 
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

    // add a double click within 10px of the top of the box to maximize or restore also within 500ms of the last click
    let lastClick = 0;
    box.addEventListener('dblclick', (e) => {
      console.log('hi');
      if (e.clientY <= box.offsetTop + 10 && Date.now() - lastClick <= 500) {
        console.log('hi2')
        if (restored) {
          restore_maximize.click();
        } else {
          restore_maximize.click();
        }
      }
      lastClick = Date.now();
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
