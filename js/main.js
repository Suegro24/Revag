const conversionButton = document.querySelector('#buttonConversion');

const showMore = (type) => {
    switch(type) {
        case 'conversion': {
            const block = document.querySelector('.conversion__show-more-content');
            if (block.style.display === 'block') {
                block.style.display = 'none';
                conversionButton.innerHTML = 'Dowiedz się więcej...';
            }
            else {
                block.style.display = 'block';
                conversionButton.innerHTML = 'Ukryj podpowiedź';
            }

        }
    }
}

const toggleMessageBox = () => {
    const contactBox = document.querySelector('#contactBox');
    const button = document.querySelector('#buttonBox');
    if (contactBox.style.opacity == '1') {
        const image = document.createElement('img');
        image.src="./images/form.png";
        image.width="20";
        contactBox.style.opacity = '0';

        button.innerHTML = '';
        button.appendChild(image);

    } else {
        contactBox.style.opacity = '1';
        button.innerHTML = 'X';
    } 
}

const initMessageButton = () => {
    const image = document.createElement('img');
    image.src="./images/form.png";
    image.width="20";

    const whatsapp = document.createElement('a');
    whatsapp.href="https://api.whatsapp.com/send/?phone=%2B48668300462&text&app_absent=0";
    whatsapp.target="_blank";
    whatsapp.className = 'contact-box__item';
    const whatsappImage = document.createElement('img');
    whatsappImage.src="./images/whatsapp.svg";
    whatsappImage.width="32";
    const whatsappText = document.createElement('p');
    whatsappText.innerText = 'Whatsapp';
    whatsapp.appendChild(whatsappImage);
    whatsapp.appendChild(whatsappText);

    const box = document.createElement('div');
    box.className = 'contact-box';
    box.setAttribute('id', 'contactBox');
    box.appendChild(whatsapp);

    const button = document.createElement('div');
    button.className="button-box";
    button.setAttribute('id', 'buttonBox');

    button.appendChild(image);
    button.addEventListener('click', toggleMessageBox, false)

    const boxContainer = document.createElement('div');
    boxContainer.className = 'container-box';
    boxContainer.appendChild(box);
    boxContainer.appendChild(button);

    const main = document.querySelector('.main');
    main.appendChild(boxContainer);
}

const run = () => {
    initMessageButton();
};

run();

conversionButton.addEventListener('click', showMore.bind(null, 'conversion'));