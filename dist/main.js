const menu = document.querySelectorAll('nav a')
const menuList = document.getElementById('menuList')
const toggleMenu = document.getElementById('toggleMenu')

const activeMenu = (activeNode) => {
    menu.forEach(node =>{
        node.classList.remove('text-yellow-300')
    })
    activeNode.classList.add('text-yellow-300')
}

menu.forEach((node, index) =>{
    if(index === 0){
        node.classList.add('text-yellow-300')
    }
    node.addEventListener('click', ()=>{
        activeMenu(node)
    })
})

toggleMenu.addEventListener('click', () =>{
    menuList.classList.toggle('hidden')
})