 const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const WORD_LIMIT = 10;

  document.querySelectorAll(".card-text").forEach(p => {
    // Find the anchor tag inside <p>
    const readMoreLink = p.querySelector("a");

    // Get the text content without the <a>
    let fullText = "";
    p.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        fullText += node.textContent.trim() + " ";
      }
    });

    const words = fullText.trim().split(/\s+/);
    if (words.length <= WORD_LIMIT) return;  

  
    const shortText = words.slice(0, WORD_LIMIT).join(" ") + "...";
 
    p.innerHTML = shortText + " ";
    if (readMoreLink) p.appendChild(readMoreLink);
  });
});


  var swiper = new Swiper(".mySwiper", {
    loop:true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
  });
 
document.getElementById("faqSearch").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".faq-item").forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(value) ? "" : "none";
    });
});
 
// document.addEventListener("DOMContentLoaded", () => {
//     const reviews = document.querySelectorAll(".review-item");
//     const toggleBtn = document.getElementById("toggleReviews");
//     const visibleCount = 3;
//     let expanded = false;
//     function setInitialState() {
//         reviews.forEach((review, index) => {
//             review.classList.toggle("is-visible", index < visibleCount);
//         });
//     }
//     setInitialState();
//     toggleBtn.addEventListener("click", () => {
//         expanded = !expanded;
//         reviews.forEach((review, index) => {
//             if (expanded || index < visibleCount) {
//                 review.classList.add("is-visible");
//             } else {
//                 review.classList.remove("is-visible");
//             }
//         });
//         toggleBtn.textContent = expanded ? "Show Less" : "Show More";
//     });
// });

Fancybox.bind('[data-fancybox="gallery"]', {
 
});
var swiper = new Swiper(".mySwiperreview", {
    loop: true,
    speed: 600,
    spaceBetween: 24,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 28,
        },
        1200: {
            slidesPerView: 3.75,
            spaceBetween: 30,
        }
    }
});

document.querySelector(".calendar-icon").addEventListener("click", function () {
    document.getElementById("startDate").showPicker();
});

 