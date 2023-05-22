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

    // Add resizable feature to the window
    let isResizing = false;
    let resizeDirection = '';

    // Define the resize handles (borders) of the window
    const resizeHandles = {
      top: 'n',
      right: 'e',
      bottom: 's',
      left: 'w',
    };

    // Define the border width for resizing
    const borderWidth = 5; // Adjust as needed

    // Set cursor styles for each resize direction
    const cursorStyles = {
      n: 'ns-resize',
      e: 'ew-resize',
      s: 'ns-resize',
      w: 'ew-resize',
    };

    // Set cursor style based on the resize direction
    function setCursorStyle(element, direction) {
      element.style.cursor = cursorStyles[direction];
    }

    // Remove cursor style from the element
    function removeCursorStyle(element) {
      element.style.cursor = '';
    }

    // Check if the mouse position is within the border width of the given side
    function isWithinBorderWidth(position, side, boxRect) {
      return (
        position >= boxRect[side] - borderWidth / 2 &&
        position <= boxRect[side] + borderWidth / 2
      );
    }

    // Check if the mouse position is within the resize borders of the box
    function isWithinResizeBorders(clientX, clientY, boxRect) {
      const { top, right, bottom, left } = boxRect;
      return (
        isWithinBorderWidth(clientX, 'left', boxRect) ||
        isWithinBorderWidth(clientX, 'right', boxRect) ||
        isWithinBorderWidth(clientY, 'top', boxRect) ||
        isWithinBorderWidth(clientY, 'bottom', boxRect) ||
        (clientX > left && clientX < right && clientY > top && clientY < bottom)
      );
    }

    // Check if the mouse position is within the corner handles of the box
    function isWithinCornerHandles(clientX, clientY, boxRect) {
      const { top, right, bottom, left } = boxRect;
      return (
        (clientX >= left - borderWidth / 2 && clientX <= left + borderWidth / 2) &&
        (clientY >= top - borderWidth / 2 && clientY <= top + borderWidth / 2) ||
        (clientX >= right - borderWidth / 2 && clientX <= right + borderWidth / 2) &&
        (clientY >= top - borderWidth / 2 && clientY <= top + borderWidth / 2) ||
        (clientX >= right - borderWidth / 2 && clientX <= right + borderWidth / 2) &&
        (clientY >= bottom - borderWidth / 2 && clientY <= bottom + borderWidth / 2) ||
        (clientX >= left - borderWidth / 2 && clientX <= left + borderWidth / 2) &&
        (clientY >= bottom - borderWidth / 2 && clientY <= bottom + borderWidth / 2)
      );
    }

    restore_maximize.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // Only activate on left mouse button

      const boxRect = box.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Check if the mouse position is within the resize borders or corner handles
      if (isWithinResizeBorders(clientX, clientY, boxRect)) {
        isResizing = true;

        // Determine the resize direction based on the clicked position
        if (isWithinCornerHandles(clientX, clientY, boxRect)) {
          // Determine the corner handle that was clicked
          if (clientX <= boxRect.left + borderWidth / 2) {
            if (clientY <= boxRect.top + borderWidth / 2) {
              resizeDirection = 'nw';
            } else {
              resizeDirection = 'sw';
            }
          } else {
            if (clientY <= boxRect.top + borderWidth / 2) {
              resizeDirection = 'ne';
            } else {
              resizeDirection = 'se';
            }
          }
        } else {
          // Determine the side handle that was clicked
          if (isWithinBorderWidth(clientX, 'left', boxRect)) {
            resizeDirection = 'w';
          } else if (isWithinBorderWidth(clientX, 'right', boxRect)) {
            resizeDirection = 'e';
          } else if (isWithinBorderWidth(clientY, 'top', boxRect)) {
            resizeDirection = 'n';
          } else if (isWithinBorderWidth(clientY, 'bottom', boxRect)) {
            resizeDirection = 's';
          }
        }

        e.preventDefault(); // Prevent text selection while resizing
        setCursorStyle(document.body, resizeDirection);
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;

      // Calculate the new size based on the resize direction
      const boxRect = box.getBoundingClientRect();
      const newWidth = boxRect.width + (e.movementX || 0);
      const newHeight = boxRect.height + (e.movementY || 0);

      // Update the size of the box based on the resize direction
      switch (resizeDirection) {
        case 'nw':
          box.style.width = `${newWidth}px`;
          box.style.height = `${newHeight}px`;
          break;
        case 'ne':
          box.style.width = `${newWidth}px`;
          box.style.height = `${newHeight}px`;
          box.style.top = `${boxRect.top - (newHeight - boxRect.height)}px`;
          break;
        case 'sw':
          box.style.width = `${newWidth}px`;
          box.style.height = `${newHeight}px`;
          box.style.left = `${boxRect.left - (newWidth - boxRect.width)}px`;
          break;
        case 'se':
          box.style.width = `${newWidth}px`;
          box.style.height = `${newHeight}px`;
          box.style.left = `${boxRect.left - (newWidth - boxRect.width)}px`;
          box.style.top = `${boxRect.top - (newHeight - boxRect.height)}px`;
          break;
        case 'n':
          box.style.height = `${newHeight}px`;
          box.style.top = `${boxRect.top + (e.movementY || 0)}px`;
          break;
        case 'e':
          box.style.width = `${newWidth}px`;
          break;
        case 's':
          box.style.height = `${newHeight}px`;
          break;
        case 'w':
          box.style.width = `${newWidth}px`;
          box.style.left = `${boxRect.left + (e.movementX || 0)}px`;
          break;
      }
    });

    document.addEventListener('mouseup', () => {
      if (isResizing) {
        isResizing = false;
        resizeDirection = '';
        removeCursorStyle(document.body);
      }
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
