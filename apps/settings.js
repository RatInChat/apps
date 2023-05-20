module.exports = {
    logo: 'https://static.thenounproject.com/png/1008927-200.png',
    ads: false,
    async execute(mainframe, data, page) {
        // make the page on mainframe
        const box = document.createElement('div');
        box.id = 'settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso';
        box.style.width = '100%';
        box.style.height = '100%';
        box.style.backgroundColor = 'white';
        box.style.color = 'black';
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';
        mainframe.appendChild(box);
        
        const title = document.createElement('h1');
        title.innerText = page;
        box.appendChild(title);

        if (page == 'prefrences') {
            
        }
    },
    async close(mainframe, data, page) {
        // close the page on mainframe
        const box = document.getElementById('settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
        box.remove();
    }
}
