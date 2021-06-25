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

