const queryString = location.search
const params = new URLSearchParams(queryString)

const id = params.get("_id")
console.log ('id ', id)

const cardSelect = data.events.find(card => card.id === id)
console.log('cardSelect:', cardSelect);
const ubi = document.getElementById("details")
/* console.log(ubi) */

ubi.innerHTML = `<div class="maxDetalles ">
<img class="img " src="${cardSelect.image}" alt="">
<section class="card-complete">
    <div class="card-top">
        <h1>${cardSelect.place}</h1>
        <h2>${cardSelect.name}</h2>
        <p> ${cardSelect.price}$</p>
        <p>${cardSelect.capacity}</p>
    </div>
    <div class="card-mid">
        <p>${cardSelect.description}</p>
        <p>${cardSelect.date}</p>
    </div>
    <div class="card-footer">
        <p>${cardSelect.estimate}</p>
        <p>${cardSelect.category}</p>
    </div>
</section>
</div>`