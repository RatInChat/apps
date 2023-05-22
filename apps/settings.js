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
      position: absolute;
      top: 0;
      right: 0;
      background-color: #101010;
      color: #FFFFFF;
      border: none;
      border-radius: 5px;
      padding: 5px;
      margin: 5px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10001;
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
      position: absolute;
      top: 0;
      right: 40px;
      background-color: #101010;
      color: #FFFFFF;
      border: none;
      border-radius: 5px;
      padding: 5px;
      margin: 5px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10001;
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

    box.appendChild(restore_maximize);

    const minimize = document.createElement('button');
    minimize.innerText = '🗕';
    minimize.style = `
    position: absolute;
    top: 0;
    right: 80px;
    background-color: #101010;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    z-index: 10001;
  `;
    
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
        }
        , 500);
      }
      , 500);
    });

    box.appendChild(minimize);

    const icon = document.querySelector(`img[src="${this.icon}"]`);
    icon.addEventListener('click', () => {
      box.style.display = 'flex';
      box.classList.add('maximize-animation');
      setTimeout(() => {
        icon.classList.add('icon-bounce-animation');
        box.classList.remove('maximize-animation');
        setTimeout(() => {
          icon.classList.remove('icon-bounce-animation');
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
