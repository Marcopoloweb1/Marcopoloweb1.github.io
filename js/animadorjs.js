addEventListener('DOMContentLoaded',()=>{


    const mostrarcontenedor = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar') 
            }
        });
    }
    
    
    const observer = new IntersectionObserver(mostrarcontenedor,{
    
        threshold: 0.75 // 0- 1
    })
    
    const elementosHTML=document.querySelectorAll('.pruebavista')
    elementosHTML.forEach(elementoHtml=>{
        setTimeout(mostrarcontenedor,300);
        observer.observe(elementoHtml)
    })

})

window.sr = ScrollReveal();

sr.reveal('.mostrando',{

    duration: 3000

});

/**https://scrollrevealjs.org/guide/hello-world.html
 * 
 * https://www.youtube.com/watch?v=bs6WPzeCF7I
 * 
 */