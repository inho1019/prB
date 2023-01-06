//고래
const whbutton = document.querySelector(".whbut")
whbutton.style.display = "none"

let wht = 0 

function whalenx() {
    whaletxs(wht);
    whbutton.style.animation = "byebut 2s"
    //whbutton.disabled = true;
        setTimeout(() => { 
        mkwhale();
        whbutton.style.display = "none"
        }, 1900);
}

function mkwhale() {
    whale.style.display = "block";
    whale.style.animation = "whale 10s";
    setTimeout(() => { 
             whale.style.display = "none";
                           }, 9500);
}

function whaletxf(a) {
    ststr.innerHTML = whtxf[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    wht += 1;
    setTimeout(() => {
    if (wht < whtxf.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             whaletxf(wht);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        wht = 0;
        stsec.style.paddingBottom = "20%";
        whbutton.style.display = "block"
    }
        }, 4000);
}

function whaletxs(a) {
    ststr.innerHTML = whtxs[a]; 
    ststr.classList.remove("animate__fadeOut");
    ststr.classList.add("animate__animated");
    ststr.classList.add("animate__fadeIn");
    ststr.style.setProperty('--animate-duration', '2s');
    wht += 1;
    setTimeout(() => {
    if (wht < whtxs.length) {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
         setTimeout(() => { 
             whaletxs(wht);
             ststr.classList.remove("animate__fadeOut");
                           }, 2000);
    } else {
        ststr.classList.remove("animate__fadeIn");
        ststr.classList.add("animate__animated");
        ststr.classList.add("animate__fadeOut");
        wht = 0;
    }
        }, 4000);
}
//