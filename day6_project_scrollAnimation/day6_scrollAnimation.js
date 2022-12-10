const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',() => {console.log('scrolled');checkBoxes(); removeTopBoxes()})

checkBoxes()
//removeTopBoxes() benim eklentimdir
removeTopBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
//proje burda bitiyor gerisi benim eklentim

 function removeTopBoxes() {
    const triggerTop = window.innerHeight / 5
    boxes.forEach((box, id) => {
        const boxBottom = box.getBoundingClientRect().bottom
        if(boxBottom < triggerTop) {
            box.classList.remove('show')
            //console.log(id)
        }
    })
} 
