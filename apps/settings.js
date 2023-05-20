module.exports = {
    logo: 'https://static.thenounproject.com/png/1008927-200.png',
    ads: false,
    async execute(mainframe, data, page) {
        // make the page on mainframe
        const box = document.createElement('div');
        box.id = 'settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso';
        box.style.width = '100vw';
        box.style.height = `calc(100vh - 55px)`;
        box.style.top = '0';
        box.style.position = 'fixed';
        box.style.backgroundColor = 'black';
        box.style.borderRadius = '5px';
        box.style.zIndex = '10000';
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';
        box.style.border = '1px solid #000000';
        box.style.boxShadow = '0px 0px 10px 0px #000000';

        
        mainframe.appendChild(box);
        
        const title = document.createElement('h1');
        title.innerText = page;
        box.appendChild(title);

        if (page == 'preferences') {
            console.log('I think it worked')
        }
    },
    async close(mainframe, data, page) {
        // close the page on mainframe
        const box = document.getElementById('settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
        box.remove();
    }
}
