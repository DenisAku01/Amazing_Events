console.log(document.location.search)
console.log(document.location)
const querySearch = document.location.search
const id = new URLSearchParams(querySearch).get("id")
const ubi = document.getElementById("details")
console.log(id)


const cardSelecta= fetch('amazing.json').then(res => res.json()).then(
    data => {
        
        console.log(data.events)
        let cardSelect = data.events.find( event => event._id == id )
        console.log(cardSelect)
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
                }
)


/* console.log(ubi) */

