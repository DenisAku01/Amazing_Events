const divEvents = document.getElementById("upSection")
const currentDate = Date.parse(data.currentDate);

let cards = ''

for(dataEvent of data.events){
    if (Date.parse(dataEvent.date) > currentDate) {
        cards += `<div class="card cardp col-sm-6"  >
                        <img src="${dataEvent.image}" class="bd-placeholder-img card-img-top svgp" alt="imagen del evento">
                        <div class="card-body">
                            <h5 class="card-title">${dataEvent.name}</h5>
                            <p class="card-text">${dataEvent.description}</p>
                            <a href="./detail.html" class="btn btn-primary">More Details</a>
                            <p class="card-text">Price:${dataEvent.price}</p>
                        </div>
                 </div>`
        }
    };

  
  
divEvents.innerHTML = cards;