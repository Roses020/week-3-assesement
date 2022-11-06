const colorBtn = document.querySelector('#color')
 const placeBtn = document.querySelector('#place')
 const ritualBtn = document.querySelector('#ritual')


function colorClick() {
    alert('Blue')
}
function placeClick() {
    alert('tulum mexico')
}
function rituallClick() {
    alert('going to the gym')
}

placeBtn.addEventListener('click', placeClick)
ritualBtn.addEventListener('click', rituallClick)
colorBtn.addEventListener('click', colorClick)




