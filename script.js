const tela = document.querySelector('#tela');
let count = ''


/*  EXIBIR */
const exibirBtn = document.querySelectorAll('.bt').forEach((element) => {
    element.addEventListener('click',()=>{
        let number = element.value
        count += number
    
        tela.innerHTML = count
    })
})   

function mostrarnatela(){
    tela.innerHTML = count
}


/*  LIMPAR */
document.querySelector('.clear').addEventListener('click',()=>{

    tela.innerHTML = ''
    count = ''
})


/*  Apagar um */
document.querySelector('.delet').addEventListener('click',()=>{
    count = count.substring(0, count.length -1);
    tela.innerHTML = count
})

/*  Calcular */
document.querySelector('.calcular').addEventListener('click',()=>{

    if(count){
        let resultado = eval(count);
        count = resultado
        tela.innerHTML = resultado
        count = count.toString()
    
    }else{
        tela.innerHTML = "0"
    }

})


