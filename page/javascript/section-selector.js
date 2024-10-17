const sections = Array.from(document.getElementsByClassName('section-content'))
const navLi = Array.from(document.getElementsByClassName('nav-li'))

let active_section = navLi[0]
let active_index = 0
let changed = false

changeState(0)

window.addEventListener('scroll', () => {
    let totalHeight = 0;
    sections.forEach((sec, i) => {
        totalHeight += sec.clientHeight
        if (totalHeight >= window.scrollY + 100 && !changed) {
            active_index = i
            changed = true
            changeState()
        }
    })
    changed = false
})

function changeState() {
    let i = active_index
    active_section.classList.remove('active-btn')
    active_section = navLi[i]
    active_section.classList.add('active-btn')
}