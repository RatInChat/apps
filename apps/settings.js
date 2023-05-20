module.exports = {
  logo: 'https://static.thenounproject.com/png/1008927-200.png',
  ads: false,
  async execute(mainframe, data, page) {
    // Create the settings container
    const box = document.createElement('div');
    box.id = 'settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso';
    box.style.width = '100vw';
    box.style.height = `calc(100vh - 55px)`;
    box.style.top = '0';
    box.style.position = 'fixed';
    box.style.backgroundColor = '#F8F8F8';
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
    box.appendChild(title);

    // Create the close button
    const close = document.createElement('button');
    close.innerText = 'X';
    close.style = `
      position: absolute;
      top: 0;
      right: 0;
      background-color: #F8F8F8;
      color: #000000;
      border: none;
      border-radius: 5px;
      padding: 5px;
      margin: 5px;
      cursor: pointer;
    `;

    close.addEventListener('mouseover', () => {
      close.style.backgroundColor = 'red';
      close.style.color = 'white';
    });

    close.addEventListener('mouseout', () => {
      close.style.backgroundColor = '#F8F8F8';
      close.style.color = '#000000';
    });

    close.addEventListener('click', () => {
      box.remove();
    });

    box.appendChild(close);

    if (page == 'Preferences') {
      // Add preferences content
      const content = document.createElement('div');
      content.style.marginTop = '20px';
      content.innerText = 'Preferences content goes here.';
      box.appendChild(content);
    }
  }
};
