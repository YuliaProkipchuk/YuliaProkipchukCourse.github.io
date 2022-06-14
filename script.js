let scrl = document.getElementsByClassName('nav');
window.addEventListener('scroll', function (e) {
    if (this.window.scrollY) {
        scrl[0].style.backgroundColor = '#0c2b0e';
        scrl[0].style.opacity = '1';
    }
    if (this.window.scrollY == 0) {
        scrl[0].style.backgroundColor = 'rgba(0, 0, 0, 0.445)';
    }



})
window.addEventListener('scroll', function (e) {

    if (this.window.scrollY == document.body.scrollHeight) {
        scrl[0].style.position = "static";
        console.log('e')
    }
    else {
        scrl[0].style.position = 'fixed';
    }


})



let readb = document.querySelectorAll('.offer_button');
let rext = document.querySelectorAll('.read-more');


function a() {
 
        if (readb[0].textContent == 'Дізнатися більше' ) {
            rext[0].style.display = 'block';
            readb[0].textContent = 'Згорнути';
        }
        else {
            console.log('s')
            readb[0].textContent = 'Дізнатися більше';
            rext[0].style.display = 'none';
           
        }
    

}
function a1() {
 
    if (readb[1].textContent == 'Дізнатися більше' ) {
        rext[1].style.display = 'block';
        readb[1].textContent = 'Згорнути';
        
    }
    else {
        console.log('s')
        readb[1].textContent = 'Дізнатися більше';
        rext[1].style.display = 'none';
       
    }


}
function a2() {
 
    if (readb[2].textContent == 'Дізнатися більше' ) {
        rext[2].style.display = 'block';
        readb[2].textContent = 'Згорнути';
        
    }
    else {
        console.log('s')
        readb[2].textContent = 'Дізнатися більше';
        rext[2].style.display = 'none';
       
    }


}
function a3() {
 
    if (readb[3].textContent == 'Дізнатися більше' ) {
        rext[3].style.display = 'block';
        readb[3].textContent = 'Згорнути';
        
    }
    else {
        console.log('s')
        readb[3].textContent = 'Дізнатися більше';
        rext[3].style.display = 'none';
       
    }


}function a4() {
 
    if (readb[4].textContent == 'Дізнатися більше' ) {
        rext[4].style.display = 'block';
        readb[4].textContent = 'Згорнути';
        
    }
    else {
        console.log('s')
        readb[4].textContent = 'Дізнатися більше';
        rext[4].style.display = 'none';
       
    }


}function a5() {
 
    if (readb[5].textContent == 'Дізнатися більше' ) {
        rext[5].style.display = 'block';
        readb[5].textContent = 'Згорнути';
        
    }
    else {
        console.log('s')
        readb[5].textContent = 'Дізнатися більше';
        rext[5].style.display = 'none';
       
    }


}


const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.images-container');

const first_clone = images.children[0].cloneNode(true);
const last_clone = images.children[images.children.length - 1].cloneNode(true);

images.insertBefore(last_clone, images.children[0]);
images.appendChild(first_clone);

images.style.transiyionDuration = '0.0s';
images.style.transform = `translate(-1080px)`;

let current = 1;
next.addEventListener('click', () => {
    if (current < images.children.length - 1) {
        current++;
        images.style.transiyionDuration = '0.5s';
        images.style.transform = `translate(-${current * 1080}px)`;

        if (current === images.children.length - 1) {
            setTimeout(() => {
                images.style.transiyionDuration = '0.0s';
                images.style.transform = `translate(-1080px)`;
                current = 1;
            }, 600);
        }
    } else {
        return;
    }
});

prev.addEventListener('click', () => {
    if (current > 0) {
        current--;
        images.style.transiyionDuration = '0.5s';
        images.style.transform = `translate(-${current * 1080}px)`;

        if (current === 0) {
            images.style.transiyionDuration = '0.0s';
            images.style.transform = `translate(-${images.children.length - 2 * 1080}px)`;
            current = images.children.length - 2;
        }
    } else {
        return;
    }
});


