
// muestra todas las card en general
const divElement = document.getElementById("cardSection");
  let card = '';

  for (let event of data.events) {
    console.log(data.events);
    card += `<div class="card cardp col-sm-6"  >
                        <img src="${event.image}" class="bd-placeholder-img card-img-top svgp" alt="imagen del evento">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.description}</p>
                            <a href="./detail.html" class="btn btn-primary">More Details</a>
                            <p class="card-text">Price:${event.price}</p>
                        </div>
                 </div>`
  }
  divElement.innerHTML = card;
   

  