
      
                    module.exports = {

                      app_name: 'settings',
        
                      icon: 'https://p1.hiclipart.com/preview/909/115/679/gear-icon-settings-icon-seo-and-online-marketing-icon-material-property-logo-symbol-hardware-accessory-png-clipart.jpg',
        
                  async execute(mainframe, data, page) {
        
                            let date = Date.now();
                            const rect = mainframe.getBoundingClientRect();
                            const topOffset = rect.top + window.scrollY;
                            const box = document.createElement('div');
                            box.id = `${this.app_name ? this.app_name : 'app'}dd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso${date}`;
                            box.classList.add('windowdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                            box.style = `
                                width: 100vw;
                                height: calc(100vh - 55px);
                                top: ${topOffset}px;
                                position: fixed;
                                background-color: #101010;
                                border-radius: 5px;
                                z-index: 10000;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                max-width: ${mainframe.offsetWidth}px;
                                max-height: ${mainframe.offsetHeight - document.querySelector('#taskbardd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso').offsetHeight - 1}px;
                                bottom: 0;
                            `;
                            mainframe.appendChild(box);
        
        
                const close = document.createElement('button');
                close.innerText = '✕';
                close.style = `
                  position: absolute !important;
                  top: 0 !important;
                  right: 0 !important;
                  background-color: transparent !important;
                  color: #FFFFFF !important;
                  border: none !important;
                  border-radius: 5px !important;
                  padding: 5px !important;
                  margin: 5px !important;
                  height:  !important;
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
                  background-color: transparent !important;
                  color: #FFFFFF !important;
                  border: none !important;
                  border-radius: 5px !important;
                  padding: 5px !important;
                  margin: 5px !important;
                  height:  !important;
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
                      if (old_pos.x == 0 && old_pos.y == 0) { old_pos.x = box.offsetLeft; old_pos.y = box.offsetTop; }
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
                      old_pos.x = box.offsetLeft;
                      old_pos.y = box.offsetTop;
                      old_size.width = box.style.width;
                      old_size.height = box.style.height;
                      box.style.width = '100vw';
                      box.style.height = `calc(100vh - 55px)`;
                      box.style.left = '${mainframe.offsetLeft}px';
                      box.style.top = '${mainframe.offsetTop}px';
                      restored = false;
                      box.style.border = 'none';
                    }
        
                    // Reset transition after animation completes
                    setTimeout(() => {
                      box.style.transition = 'none';
                    }, 300);
                  });
        
                box.appendChild(restore_maximize);
        
        
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
                    minimize.classList.add('minimizeButtondd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                    minimize.innerText = '🗕';
                    minimize.style = `
                    position: absolute !important;
                    top: 0 !important;
                    right: 80px !important;
                    background-color: transparent !important;
                    color: #FFFFFF !important;
                    border: none !important;
                    border-radius: 5px !important;
                    padding: 5px !important;
                    margin: 5px !important;
                    height:  !important;
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
                      if (box.id !== `settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso${date}`) return;
                      if (box.style.display !== 'none') return;
                      const box2 = document.getElementById(box.id);
                      box2.style.display = 'flex';
                      box2.classList.add('maximize-animation');
                      setTimeout(() => {
                        icon.classList.add('icon-bounce-animation');
                        box2.classList.remove('maximize-animation');
                        setTimeout(() => {
                          icon.classList.remove('icon-bounce-animation');
                          minimized = false;
                        }, 500);
                      }, 500);
                    });
                    // check what page
                    if (page === 'prefrences') {
                      const prefrences = document.createElement('div');
                      const nav_bar = document.createElement('div');
                      const nav_bar_title = document.createElement('div');
                      const nav_bar_items = [
                        {
                          name: 'General',
                          id: 'general',
                          icon: '',
                        },
                        {
                          name: 'Prefrences',
                          id: 'prefrences',
                          icon: '',
                        },
                        {
                          name: 'Advanced',
                          id: 'advanced',
                          icon: '',
                        },
                      ];

                      nav_bar_title.innerText = 'Settings';
                      nav_bar_title.style = `
                        font-size: 20px;
                        font-weight: bold;
                        color: #FFFFFF;
                        margin: 10px;
                        margin-left: 20px;
                        margin-right: 20px;
                        text-align: center;
                        line-height: 1;
                        flex: 1;
                        `;
                      nav_bar_title.classList.add('nav-bar-titledd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                      nav_bar.appendChild(nav_bar_title);
                      nav_bar.style = `
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #101010;
                        height: 40px;
                        width: 100%;
                        border-bottom: 1px solid #FFFFFF;
                        `;
                      nav_bar.classList.add('nav-bardd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                      prefrences.style = `
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: #101010;
                        height: 100%;
                        width: 100%;
                        `;

                      for (let i = 0; i < nav_bar_items.length; i++) {
                        const item = document.createElement('div');
                        item.innerText = nav_bar_items[i].name;
                        item.style = `
                          font-size: 20px;
                          font-weight: bold;
                          color: #FFFFFF;
                          margin: 10px;
                          margin-left: 20px;
                          margin-right: 20px;
                          text-align: center;
                          line-height: 1;
                          flex: 1;
                          `;
                        item.classList.add('nav-bar-itemdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                        item.addEventListener('click', () => {
                          const items = document.querySelectorAll('.nav-bar-itemdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                          for (let i = 0; i < items.length; i++) {
                            items[i].style.backgroundColor = 'transparent';
                          }
                          item.style.backgroundColor = 'gray';
                          const settings = document.querySelectorAll('.settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                          for (let i = 0; i < settings.length; i++) {
                            settings[i].style.display = 'none';
                          }
                          const setting = document.getElementById(`settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso_${nav_bar_items[i].id}`);
                          setting.style.display = 'flex';
                        });
                        nav_bar.appendChild(item);
                      }
                      
                      box.appendChild(prefrences);
                      box.appendChild(nav_bar);
                  }
            }
         }
