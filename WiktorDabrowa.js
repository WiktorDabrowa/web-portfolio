document.addEventListener('DOMContentLoaded', main)
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente harum error? Enim delectus recusandae numquam dolores ratione quasi temporibus itaque fuga libero. Optio nihil reiciendis nostrum consectetur eum laborum architecto. Ipsam similique voluptatibus voluptatem sapiente delectus aperiam neque, corrupti aliquid, aut adipisci libero ratione nesciunt veritatis consectetur ullam cupiditate'


function main() {
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(element => {
        element.addEventListener('click',rotate)
    });

    setTimeout(() => type('Hello, my name is Wiktor Dąbrowa, glad to see you here!','page-1--name',100),4000)
    setTimeout(() => type(lorem, 'page-1--text', 25), 10000)
}
function render(element){
    // Starts appearing animation
    // descdendant of element must contain 'type' class
    // and an id
    for (const descendant of element.querySelectorAll('*')) {
        console.log(descendant)
        if (descendant.classList.contains('type')){
            type(descendant.innerHTML, descendant.id, 25)
        }
    }

}
function rotate() {
    // Display active page
    const pages = document.querySelectorAll('.page')
    const page = pages[this.dataset.page - 1]
    pages.forEach(page => {
        if (page.classList.contains('rotated')) {
            page.classList.add('post-rotated')
            setTimeout(() => {page.classList.remove('post-rotated')},1500)
        }
        page.classList.remove('rotated')
    })
    page.classList.add('rotated')
    if (!page.hasAttribute('already_shown')) {
        render(page)
        console.log(`${page.id} First Show`)
        page.setAttribute('already_shown', '')
    } else {
        console.log('This page was shown before')
    }
    // Disable Button for the active page
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
        button.disabled = false
    })
    buttons[this.dataset.page - 1].disabled=true

}

function type(string, element_id, speed) {
    const tag = document.querySelector(`#${element_id}`)
    for (let i = 0; i < string.length+1 ; i++) {
        setTimeout(() => {tag.innerHTML = string.slice(0,i)}, i*speed)
    }
}

