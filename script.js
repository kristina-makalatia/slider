let data = [
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/photos/beautiful-panoramic-view-of-tbilisi-at-sunset-picture-id476813550?k=20&m=476813550&s=612x612&w=0&h=nkgs_znOulcr77969-rB-mQ4Tyr8qN53crzMASFZlDU=',
        title: 'image title1',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
        title: 'image title2',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'https://media.istockphoto.com/photos/beautiful-panoramic-view-of-tbilisi-at-sunset-picture-id476813550?k=20&m=476813550&s=612x612&w=0&h=nkgs_znOulcr77969-rB-mQ4Tyr8qN53crzMASFZlDU=',
        title: 'image title3',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
        title: 'image title4',
        url: 'https://google.com'
    }

]

let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);

    return tagtitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src',  item.imageUrl);
    tagImage.setAttribute('alt', item.title);

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log(dots);

    return dots;
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowleftClick)
arrowRight.addEventListener('click', arrowRightClick);


// setInterval( () => {
//     arrowRightClick();
// }, 3000);


setSlide();

