const stuff = document.querySelector('.mainContent');
const logger = document.querySelector('.loginInfo');
const user = document.querySelector('#username');
const passwr = document.querySelector('#password');



const display = () => {
   
    console.log("main content clicked")
   
}


const showInfo = () => {
     
     console.log(user.value)
     console.log(passwr.value)
     logger.reset()

}


stuff.addEventListener('click',display)
logger.addEventListener('submit',showInfo)
