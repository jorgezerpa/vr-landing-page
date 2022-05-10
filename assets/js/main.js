//setting background lights
const backgroundLight = () => {
    const main = document.querySelector('.main');
    const separation = document.body.scrollHeight/10;
    for(let i = 0; i<10; i++){
        const side = i%2===0 ? 90 : 0; 
        main.innerHTML += `
            <div class="bg__light" style="top: ${separation*i}px; left: ${side}%;" ></div>
        `
    }
}
backgroundLight()



/*=============== SHOW MENU ===============*/
const body = document.querySelector('body')

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            if(document.querySelector('.nav__menu a[href*=' + sectionId + ']')){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
        }else{
            if(document.querySelector('.nav__menu a[href*=' + sectionId + ']')){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






                //header animations
                document.onreadystatechange = () => {
                    if (document.readyState === 'complete') {
                        document.querySelector('.home__title').style.animationPlayState = "running";
                        document.querySelector('.home__description').style.animationPlayState = "running";
                        document.querySelector('.home__button').style.animationPlayState = "running";
                        document.querySelector('.home__ilustration').style.animationPlayState = "running";
                    }
                  };
                
                
                                //scroll animations
                const aboutImage = document.querySelector('.about__image');
                const aboutTitle = document.querySelector('.about__title');
                const aboutDesc = document.querySelector('.about__description');
                const servicesData = document.querySelectorAll('.services__data');
                
                const toObserve = [
                    aboutImage,
                    aboutTitle,
                    aboutDesc,
                ]
                
                
                
                const cargarImagen = (entradas, observador) => {
                    entradas.forEach((entrada) => {
                        if(entrada.isIntersecting){
                            entrada.target.style.animationPlayState = 'running';
                            console.log(entrada.target)
                            console.log(entrada.target.style.animationPlayState)
                        } else {
                            // entrada.target.classList.remove('visible');
                        }
                    });
                }
                
                const observador = new IntersectionObserver(cargarImagen, {
                    root: null,
                    rootMargin: '500px 0px 100px 0px',
                    threshold: 1.0
                });
                
                
                toObserve.forEach(element=>{
                        observador.observe(element);
                })
                servicesData.forEach(element=>{
                        observador.observe(element);
                })


