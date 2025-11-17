const carousels = ["carouselPets", "carouselNatureza", "carouselAlimentos"];

carousels.forEach((id, index) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("slid.bs.carousel", (e) => {
      if (e.to === 2) {
        // último grupo do carrossel
        const nextIndex = (index + 1) % carousels.length;
        const nextCarousel = new bootstrap.Carousel(`#${carousels[nextIndex]}`);
        setTimeout(() => nextCarousel.to(0), 2000);
      }
    });
  }
});
