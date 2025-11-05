
document.addEventListener('DOMContentLoaded', () => {
  
  const slides = [
    'imagenes/imagen 1.jpg',
  'imagenes/imagen 2.jpg',
  'imagenes/imagen 3.jpg',
     ];

  let idx = 0;
  const imgEl = document.getElementById('slide-img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dots');


  function crearDots(){
    slides.forEach((_, i) => {
      const d = document.createElement('div');
      d.classList.add('dot');
      if (i === idx) d.classList.add('active');
      d.addEventListener('click', () => {
        idx = i;
        mostrarSlide(idx);
      });
      dotsContainer.appendChild(d);
    });
  }

  function actualizarDots(){
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  function mostrarSlide(i){
    imgEl.src = slides[i];
    imgEl.alt = `Slide ${i+1}`;
    actualizarDots();
  }

  function next(){
    idx = (idx + 1) % slides.length;
    mostrarSlide(idx);
  }

  function prev(){
    idx = (idx - 1 + slides.length) % slides.length; 
     mostrarSlide(idx);
  }


  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  crearDots();
  mostrarSlide(idx);

 
});
