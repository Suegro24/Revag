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

conversionButton.addEventListener('click', showMore.bind(null, 'conversion'));