const pageTurnBtn=document.querySelectorAll('.nextprev-btn')

pageTurnBtn.forEach((el,index)=>{
    el.onclick=()=>{
         const pageTurnId=el.getAttribute("data-page")
         const pageTurn=document.getElementById(pageTurnId)  
         
         
         if(pageTurn.classList.contains("turn")){
            pageTurn.classList.remove("turn")
            setTimeout(() => {

                pageTurn.style.zIndex=40 - index
                
            }, 500);
         }else{
            pageTurn.classList.add("turn")
            setTimeout(() => {
                pageTurn.style.zIndex=50 + index    //HI*****************************
            }, 500);
         }
    }
   
})

const pages=document.querySelectorAll(".book-page.page-right")
const contactMeBtn=document.querySelector(".btn.contact-me")


contactMeBtn.onclick=()=>{
  alert("Contact Me button clicked!")

    pages.forEach((page,index)=>{
        setTimeout(() => {
            page.classList.add("turn")

            setTimeout(() => {
               page.style.zIndex=20 + index 
            }, 500);
        }, (index+1)*200+100);
    })
}

let totalPage=pages.length
let pageNumber=0

const backProfileButton=document.querySelector(".back-profile")

backProfileButton.onclick=()=>{
    pages.forEach((_,index)=>{
        setTimeout(() => {
           reverseIndex()
        pages[pageNumber].classList.remove("turn")

        setTimeout(() => {
            reverseIndex()
            pages[pageNumber].style.zIndex=10+index
        }, 500); 
        },(index+1)*200+100);
    })
}


function reverseIndex(){
    pageNumber--
    if(pageNumber<0){
        pageNumber=totalPage-1
    }
}

const coverRight=document.querySelector(".cover.cover-right")
const pageLeft=document.querySelector(".book-page.page-left")

setTimeout(() => {
   coverRight.classList.add("turn") 
},2100);

setTimeout(() => {
   coverRight.style.zIndex=-1 
},2800);


setTimeout(() => {
   pageLeft.style.zIndex=20 
},3200);

pages.forEach((_,index)=>{
   setTimeout(()=>{
     reverseIndex()

    pages[pageNumber].classList.remove("turn")

    setTimeout(() => {
       reverseIndex()
       pages[pageNumber].style.zIndex=10+index 
    },500);
   },(index+1)*200+2100);
})


// **********************I WRITE*********************

// const a=document.querySelectorAll(".profile-page h1")
// a.forEach((nam,index)=>{
//     console.log(nam.textContent.length)
// })




// ********************name animation********************

// ********************name animation********************

document.addEventListener("DOMContentLoaded", () => {
  const text = "Udbhav Pratap Singh";
  const title = document.getElementById("typewriter");
  let index = 0;
  let isDeleting = false;

  function type() {
    if (isDeleting) {
      title.textContent = text.substring(0, index--);
    } else {
      title.textContent = text.substring(0, index++);
    }

    if (!isDeleting && index > text.length) {
      setTimeout(() => isDeleting = true, 1000); // pause before deleting
    } else if (isDeleting && index === 0) {
      isDeleting = false;
    }

    const speed = isDeleting ? 100 : 150;
    setTimeout(type, speed);
  }

  type();
});