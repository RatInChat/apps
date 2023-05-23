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

    restore_maximize.addEventListener('click', () => {
      if (restore_maximize.innerText == '🗗') {
        restore_maximize.innerText = '🗖';
        box.style.width = '50vw';
        box.style.height = `calc(50vh - 55px)`;
        box.style.left = `${old_pos.x}px`;
        box.style.top = `${old_pos.y}px`;
        restored = true;
      } else {
        restore_maximize.innerText = '🗗';
        box.style.width = '100vw';
        box.style.height = `calc(100vh - 55px)`;
        old_pos.x = box.offsetLeft;
        old_pos.y = box.offsetTop;
        box.style.left = '0';
        box.style.top = '0';
        restored = false;
      }
    });
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    
    box.addEventListener('mousedown', (e) => {
      if (!restored) return;
      if (e.clientY <= box.offsetTop + 30) {
        isDragging = true;
        dragOffsetX = e.clientX - box.offsetLeft;
        dragOffsetY = e.clientY - box.offsetTop;
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
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
    
    // Resize feature
    const resizeBorders = ['top', 'right', 'bottom', 'left'];

    resizeBorders.forEach((border) => {
      const resizeHandle = document.createElement('div');
      resizeHandle.className = `resize-handle-${border}`;
      resizeHandle.style.cssText = `
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #000;
        opacity: 0.5;
        pointer-events: auto;
        cursor: ${border}-resize;
        ${border}: -0.5px;
      `;

      box.appendChild(resizeHandle);
    });

    const handleHoverStyles = {
      top: 'cursor: n-resize;',
      right: 'cursor: e-resize;',
      bottom: 'cursor: s-resize;',
      left: 'cursor: w-resize;',
    };

    resizeBorders.forEach((border) => {
      const handle = box.querySelector(`.resize-handle-${border}`);
      
      handle.addEventListener('mouseenter', () => {
        box.style.cssText += handleHoverStyles[border];
      });

      handle.addEventListener('mouseleave', () => {
        box.style.cursor = 'default';
      });
    });

    // Resize functionality
    let isResizing = false;
    let resizeDirection = '';

    resizeBorders.forEach((border) => {
      const handle = box.querySelector(`.resize-handle-${border}`);
      
      handle.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeDirection = border;
      });
    });

    document.addEventListener('mousemove', (e) => {
      if (isResizing) {
        if (resizeDirection === 'right') {
          const newWidth = e.clientX - box.offsetLeft;
          box.style.width = `${newWidth}px`;
        } else if (resizeDirection === 'bottom') {
          const newHeight = e.clientY - box.offsetTop;
          box.style.height = `${newHeight}px`;
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

    if (page == 'Preferences') {
      const content = document.createElement('div');
      content.style.marginTop = '20px';
      content.innerText = 'Preferences content goes here.';
      content.style.color = '#FFFFFF';
      box.appendChild(content);
    }
  }
};
