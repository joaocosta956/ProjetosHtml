
console.log('oi')



// Aqui fica a lógica dos projetos!!



var boxProjetos = document.querySelector('.projetos');
boxProjetos.innerHTML = "";

var valor = 1;
// var projetos = ['Projeto 1', 'Projeto 2', 'Projeto 3'];
const projetos = {
    'Projeto 1' : 'https://google.com', 
    'Projeto 2' : 'https://youtube.com', 
    'Projeto 3' : '',

};

const tamanhoProjetos = Object.keys(projetos).length;

console.log(tamanhoProjetos)

var i = 0

for (let chave in projetos){
    console.log(chave)

    if(valor == 0){
        console.log('dentro o if 0')
        boxProjetos.innerHTML+=`

        <h3> Nenhum Projeto disponivel, volte mais tarde :)</h3>

    `
        break
    }
    else{
        console.log(projetos[chave]);
    boxProjetos.innerHTML+=`


    <div class="box-projetos">
                <div class="img-projeto" style="background-image: url(images/background`+i+`.jpg);"></div>
                <div class="text-projetos">
                    <h3><a href="`+projetos[chave]+`">`+chave+`</a></h3>
                </div>
            </div>

`
 i++
}
}



// for (var i = 0; i <= projetos.length; i++){
//     console.log(projetos.length)

//     if(valor == 0){
//         console.log('dentro o if 0')
//         boxProjetos.innerHTML+=`

//         <h3> Nenhum Projeto disponivel, volte mais tarde :)</h3>

//     `
//         break
//     }
//     else{
//     if (projetos.length > i){
//         console.log(projetos[i]);
//     boxProjetos.innerHTML+=`


//     <div class="box-projetos">
//                 <div class="img-projeto" style="background-image: url(images/background`+i+`.jpg);"></div>
//                 <div class="text-projetos">
//                     <h3><a href="https://google.com">`+projetos[i]+`</a></h3>
//                 </div>
//             </div>

// `
//     }else{
//     console.log('Fora do range')
//     }
// }
// }


