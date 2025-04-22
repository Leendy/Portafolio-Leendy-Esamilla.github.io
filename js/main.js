window.onload = function(){
    var barraCarga = document.getElementById('barra-carga');
    
    if(barraCarga) {
        barraCarga.style.visibility = 'hidden';
        barraCarga.style.display = 'none';
    }
}
// Efecto de luz que sigue al cursor
const luzCursor = document.createElement('div');
luzCursor.className = 'luz-cursor';
document.body.appendChild(luzCursor);

document.addEventListener('mousemove', (e) => {
    luzCursor.style.left = e.clientX + 'px';
    luzCursor.style.top = e.clientY + 'px';
});

$(document).ready(function(){
    // Check if baffle exists before using it
    if(typeof baffle !== 'undefined') {
        const profesion = baffle(".profesion");
        const tagline = baffle("#tagline");
        
        tagline.set({
            characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
            speed: 90
        });
        tagline.start();
        tagline.reveal(3000);

        profesion.set({
            characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
            speed: 90
        });
        profesion.start();
        profesion.reveal(3000);
    }

    
    $('#boton-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

});

   
