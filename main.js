// const list = document.querySelectorAll('li');

// list.forEach(el => {
//     el.addEventListener('click', function(event) {
//         const active = document.querySelector('.active');
        
//         if (active) {
//             active.classList.remove('active');
//         }
        
//         const target = event.currentTarget;
//         target.classList.add('active');

//         const ctrl = event.ctrlKey;

//         if (ctrl) {
//             active.classList.add('active');
//         }
//     });
// })

// task2

const img = document.querySelectorAll('li > img');
const mainImg = document.querySelector('.main-img');
const p = document.querySelector('.text');


img.forEach(el => {
    el.addEventListener('mouseover', function(event) {
        const target = event.currentTarget;
        
        let src = target.getAttribute('src');
        let alt = target.getAttribute('alt');
        console.log(alt);
        
        mainImg.setAttribute('src', src);
        mainImg.setAttribute('alt', alt);
        p.innerHTML = alt;
    })
})