
// muestra todas las card en general
const divElement = document.getElementById("cardSection")
const CONTENEDORCHECK = document.getElementById("checkSection")
const INPUT = document.querySelectorAll("input")


//      Llamadas de Funciones
// Imprimir Cards
printCard()
//crea las Checkbox
crearCheckBoxes(data.events)
// Escuchar y Filtrar cruzado
INPUT.addEventListener('input',filtradoPrincipal)
// llamada al filtrado de categorias
filtrarPorCategoria(data.events)





//Imprime Todas las Cartas
function printCard(){
  let card = '';

  for (let event of data.events) {
    console.log(data.events);
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
}
// crea las checkbox necesarias por categoria
function crearCheckBoxes(array){
  let arrayCategories = array.map(data => data.events.category)
  console.log(arrayCategories)
  let setCategories = new Set(arrayCategories)
  console.log(setCategories)
  let arrayChecks = data.events.from(setCategories)
  console.log(arrayChecks)
  let checkboxes = ''
  arrayChecks.forEach(category => {
      checkboxes += `
    <input type="checkbox" class="btn-check" id="${category}">
    <label class="btn btn-outline-danger labelp" for="${category}">${category}</label>`
  })
  CONTENEDORCHECK.innerHTML = checkboxes
}



//Filtra todo incluyendo la categorias y el buscador y muestra por pantalla lo filtrado
function filtradoPrincipal(){
  let primerFiltro = filtrarPorTexto(people,INPUT.value)
  let segundoFiltro = filtrarPorCategoria(primerFiltro)
  pintarPersonas(segundoFiltro)
}
 


//Filtro el Buscador
function filtrarPorTexto(array,texto){
  let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}
  
//filtrado por categoria
function filtrarPorCategoria(array){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  let arrayChecksChecked = arrayChecks.filter(check => check.checked)
  console.log(arrayChecksChecked);
  let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  console.log(arrayChecksCheckedValues);
  let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.country))
  console.log(arrayFiltrado);
  if(arrayChecksChecked.length > 0){
      return arrayFiltrado
  }
  return array
}