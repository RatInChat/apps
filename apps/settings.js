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
  
      // Create the title
      const title = document.createElement('h1');
      title.innerText = page;
      title.style.color = '#FFFFFF';
      box.appendChild(title);
  
      // Create the close button
      const close = document.createElement('button');
      close.innerText = 'X';
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
        cursor: pointer;
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
        icon.remove();
      });
  
      box.appendChild(close);
  
      if (page == 'Preferences') {
        // Add preferences content
        const content = document.createElement('div');
        content.style.marginTop = '20px';
        content.innerText = 'Preferences content goes here.';
        content.style.color = '#FFFFFF';
        box.appendChild(content);
      }
    }
  };
  
