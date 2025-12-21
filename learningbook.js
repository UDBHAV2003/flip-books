// ----------------------------------------------
// 1. NEXT / PREVIOUS BUTTONS (Page Turn Controls)
// ----------------------------------------------

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
// HTML में जितने भी अगला/पिछला page turn वाले button हैं, उन्हें select कर लिया।

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        // हर button में लिखा data-page बताता है कि कौन सा page पलटना है।

        const pageTurn = document.getElementById(pageTurnId);
        // अब इसी ID वाला page पकड़ लिया।

        if (pageTurn.classList.contains("turn")) {
            // अगर page पहले से पलटा हुआ है →

            pageTurn.classList.remove("turn");
            // turn class हटाते ही page वापस normal स्थिति में चले जाता है।

            setTimeout(() => {
                pageTurn.style.zIndex = 40 - index;
                // z-index कम कर रहे हैं ताकि page नीचे चला जाए।
            }, 500); // 0.5s बाद क्योंकि animation 1s तक चलता है।
        } else {
            // अगर page सीधा है → अब उसे पलट दो।

            pageTurn.classList.add("turn");
            // turn class लगाने से CSS में rotateY(180deg) हो जाता है।

            setTimeout(() => {
                pageTurn.style.zIndex = 50 + index;
                // z-index बढ़ा रहे हैं ताकि पलटा हुआ page ऊपर आए।
            }, 500);
        }
    }
});


const pages = document.querySelectorAll(".book-page.page-right");
// Right-side वाले सभी pages

const contactMeBtn = document.querySelector(".btn.contact-me");

contactMeBtn.onclick = () => {
    // Contact button दबते ही सभी pages एक-एक करके पलटेंगे।

    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add("turn"); 
            // Page पलट गया

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500); // 3D animation stable होने के बाद z-index सेट किया

        }, (index + 1) * 200 + 100);  
        // Delay → एक natural page-by-page flipping effect के लिए
    })
}


let totalPage = pages.length;
let pageNumber = 0;

const backProfileButton = document.querySelector(".back-profile");

backProfileButton.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {

            reverseIndex();  
            // Which page remove करना है, यह function calculate करता है

            pages[pageNumber].classList.remove("turn");
            // Current page को वापस सीधा कर दिया

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);

        }, (index + 1) * 200 + 100);
    })
}

// Circular reverse index
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPage - 1;
    }
}



const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

setTimeout(() => {
    coverRight.classList.add("turn");
}, 2100); 
// 2.1 seconds बाद cover खुलता है → smooth intro animation

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);
// Cover को पीछे भेज दिया क्योंकि वह अब जरूरत नहीं है

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);
// Left page को ऊपर रखा ताकि वह visible रहे


pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove("turn");

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);

    }, (index + 1) * 200 + 2100);
});



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
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
    }

    const speed = isDeleting ? 100 : 150;
    setTimeout(type, speed);
  }

  type();
});
