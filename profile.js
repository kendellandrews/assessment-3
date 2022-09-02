const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')
let color = ('green')
let place = ('Beach')
let ritual = ('Morning Gym Sesh.')


const colorGreen = () => {
    colorBtn.textContent= color
    console.log('Green')
}


const placeFav = () => {
    placeBtn.textContent= place
    console.log('Beach')
}


const ritualFav = () => {
    ritualBtn.textContent= ritual
    console.log('Morning Gym Sesh.')
}





colorBtn.addEventListener('click', colorGreen )
placeBtn.addEventListener('click', placeFav )
ritualBtn.addEventListener('click', ritualFav )



colorBtn.classList.add("colorClass");
placeBtn.classList.add("placeClass");
ritualBtn.classList.add("ritualClass");