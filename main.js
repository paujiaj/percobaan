const nav = document.querySelector('nav');
const header = document.querySelector('header');

const navObserverCallback = (watchEntry, navObserver) => {
    if(!watchEntry[0].isIntersecting) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
    console.log(watchEntry[0].isIntersecting);
}

const navObserverOptions = {
    threshold: .09
}

const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

navObserver.observe(header);

document.querySelectorAll('.foto-box img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-foto').style.display = 'block';
        document.querySelector('.popup-foto img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-foto span').onclick = () =>{
    document.querySelector('.popup-foto').style.display = 'none';
}


var navLinks = document.getElementById("navLinks");
function showmenu(){
    navLinks.style.right = "0px";
}
function hidemenu(){
    navLinks.style.right = "-700px";
}
