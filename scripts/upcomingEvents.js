/* const divEvents = document.getElementById("upSection")
const currentDate = Date.parse(data.currentDate);

printCardUp()


function printCardUp(){
    let cards = ''
    
    for(dataEvent of data.events){
        if (Date.parse(dataEvent.date) > currentDate) {
            cards += `<div class="card cardp col-sm-6"  >
                            <img src="${dataEvent.image}" class="bd-placeholder-img card-img-top svgp" alt="imagen del evento">
                            <div class="card-body">
                                <h5 class="card-title">${dataEvent.name}</h5>
                                <p class="card-text">${dataEvent.description}</p>
                                <a href="./detail.html" class="btn btn-danger">More Details</a>
                                <p class="card-text">Price:${dataEvent.price}</p>
                            </div>
                    </div>`
            }
        };
    divEvents.innerHTML = cards;

} */


const divElement = document.getElementById("upSection")
const CONTENEDORCHECK = document.getElementById("checkSection2")
const INPUT = document.getElementById("search2")

// Llamadas de Funciones
// Imprimir Cards
printCard(data.events)
//crea las Checkbox
crearCheckBoxes(data.events)
// Escuchar y Filtrar cruzado
INPUT.addEventListener('input',filtradoPrincipal)
CONTENEDORCHECK.addEventListener('change',filtradoPrincipal)




//Imprime Todas las Cartas
function printCard(array){
    let card = '';

    if(array.length > 0 ){
    for (let event of array) {
        card += `<div class="card cardp col-sm-6"  >
                            <img src="${event.image}" class="bd-placeholder-img card-img-top svgp" alt="imagen del evento">
                            <div class="card-body">
                                <h5 class="card-title">${event.name}</h5>
                                <p class="card-text">${event.description}</p>
                                <a href="./detail.html" class="btn btn-danger">More Details</a>
                                <p class="card-text">Price:${event.price}</p>
                            </div>
                    </div>`
    }
    divElement.innerHTML = card;
    }else{
    divElement.innerHTML = `<h2>NOT FOUND</h2>`
    }



}
// crea las checkbox necesarias por categoria
function crearCheckBoxes(array){
    let arrayCategories = array.map(data => data.category)
  /* console.log(arrayCategories) */
    let setCategories = new Set(arrayCategories)
  /* console.log(setCategories) */
    let arrayChecks = Array.from(setCategories)
  /* console.log(arrayChecks) */
    let checkboxes = ''
    arrayChecks.forEach(category => {
        checkboxes += `
    <input type="checkbox" class="btn-check" id="${category}" value="${category}">
    <label class="btn btn-outline-danger labelp" for="${category}">${category}</label>`
    })
    CONTENEDORCHECK.innerHTML = checkboxes
}

//Filtra todo incluyendo la categorias y el buscador y muestra por pantalla lo filtrado
function filtradoPrincipal(){

    let primerFiltro = filtrarPorTexto(data.events, INPUT.value)
  /* console.log(primerFiltro) */
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    printCard(segundoFiltro)
}


//Filtro el Buscador
function filtrarPorTexto(array,texto){
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  /* console.log(arrayFiltrado) */
    return arrayFiltrado
}


//filtrado por categoria
function filtrarPorCategoria(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
  // console.log(checkboxes); 
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
  // console.log(arrayChecksChecked);
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  // console.log(arrayChecksCheckedValues);
    let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
    /* console.log(arrayFiltrado)
  console.log(array) */
    if(arrayChecksChecked.length > 0){
        return arrayFiltrado
    }else{
    return array
    }

}