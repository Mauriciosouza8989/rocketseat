const rotate = document.querySelector('.rotate')
const x = document.querySelector('.x')
const sofa = document.querySelector('.sofa')

rotate.addEventListener('click', () => {
    rotate.style.display = 'none'
    x.style.display = 'flex'
    sofa.src = './src/SofáRotate.gif'

})
x.addEventListener('click', () => {
    rotate.style.display = 'flex'
    x.style.display = 'none'
    sofa.src = './src/sofa.png'
})