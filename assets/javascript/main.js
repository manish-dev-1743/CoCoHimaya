  document.addEventListener("DOMContentLoaded", () => {
    const WORD_LIMIT = 10;

    document.querySelectorAll(".card-text").forEach(el => {
      const fullText = el.innerText.trim();
      const words = fullText.split(/\s+/);

      if (words.length <= WORD_LIMIT) return;

      const shortText = words.slice(0, WORD_LIMIT).join(" ");

      el.innerHTML = `
        <span class="short-text">${shortText}...</span>
        <span class="full-text d-none">${fullText}</span>
        <a href="#" class="read-toggle"> Read more</a>
      `;

      const toggle = el.querySelector(".read-toggle");
      const shortSpan = el.querySelector(".short-text");
      const fullSpan = el.querySelector(".full-text");

      toggle.addEventListener("click", e => {
        e.preventDefault();
        const isHidden = fullSpan.classList.contains("d-none");

        shortSpan.classList.toggle("d-none", isHidden);
        fullSpan.classList.toggle("d-none", !isHidden);
        toggle.innerText = isHidden ? " Read less" : " Read more";
      });
    });
  });

  var swiper = new Swiper(".mySwiper", {
    loop:true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
  });

  lightGallery(document.getElementById('static-thumbnails'), {
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});

 