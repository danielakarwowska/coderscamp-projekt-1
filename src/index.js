const front = document.querySelector('.front')
const back = document.querySelector('.back')

const on = () => {
    front.style.transform = 'translate(-43%,-30%)'
    front.style.backgroundColor = '#3A6254'
    front.style.color = '#E5E5E5'
    back.style.transform = 'translate(-50%,-50%)'
    back.style.backgroundColor = '#E5E5E5'
}

const off = () => {
    front.style.transform = 'translate(-50%,-50%)'
    front.style.backgroundColor = '#E5E5E5'
    front.style.color = '#3C3744'
    back.style.transform = 'translate(-43%,-30%)'
   back.style.backgroundColor = '#3A6254'
}


front.addEventListener('mouseover', on)
back.addEventListener('mouseover', on)
front.addEventListener('mouseleave', off)
back.addEventListener('mouseleave', off)




