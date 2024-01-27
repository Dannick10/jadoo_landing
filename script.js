const email = document.querySelector('#email')
const notyferror = new Notyf({
    duration: 1000,
    position: {
      x: 'center',
      y: 'top',
    },
    types: [
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 2000,
        dismissible: true
      }
    ]
  });

  const notywait = new Notyf({
    duration: 1000,
    position: {
      x: 'center',
      y: 'top',
    },
    types: [
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        background: 'orange',
        duration: 2000,
        dismissible: true
      }
    ]
  });



document.querySelector('#btn_mall').addEventListener('click',(event)=>{
  

    if(email.validity.valueMissing){
        msg = 'Please fill out the form'
        notyferror.error('Please fill out the form');
    }  else if(email.validity.typeMismatch){

        notywait.error('invalid format put @');

    } else if(statsEmail.valid){

        notyferror.sucess('thanks');
    }
   
    
    event.preventDefault()
})


const backtoTop = document.querySelector('.activedbottom')
window.addEventListener('scroll',()=>{
    backtoTop.classList.toggle('activedbottom', window.scrollY < 500)

    
  })    
  
  backtoTop.addEventListener('click',()=>{
    window.scrollTo({
      top: 0
    })
  })

