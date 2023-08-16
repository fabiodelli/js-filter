// Ottenere il riferimento agli elementi DOM necessari
const imageInput = document.getElementById("imageInput"); // Input per l'immagine
const filteredImage = document.getElementById("filteredImage"); // Immagine filtrata
const blurInput = document.getElementById("blur"); // Input per il filtro di sfocatura
const brightnessInput = document.getElementById("brightness"); // Input per il filtro di luminosità

// Aggiungere un listener per l'evento "change" sull'input dell'immagine
imageInput.addEventListener("change", function (event) {
  // Ottenere il file selezionato dall'input
  const selectedImage = event.target.files[0];
  
  // Creare un URL per l'immagine selezionata
  const imageURL = URL.createObjectURL(selectedImage);
  
  // Impostare l'URL come sorgente dell'immagine filtrata
  filteredImage.src = imageURL;
});

// Aggiungere un listener per l'evento "input" sull'input della sfocatura
blurInput.addEventListener("input", function () {
  // Ottenere il valore dell'input di sfocatura
  const blurValue = blurInput.value;
  
  // Applicare il filtro di sfocatura all'immagine filtrata
  filteredImage.style.filter = `blur(${blurValue}px)`;
});

// Aggiungere un listener per l'evento "input" sull'input della luminosità
brightnessInput.addEventListener("input", function () {
  
  // Ottenere il valore dell'input di luminosità
  const brightnessValue = brightnessInput.value;
  
  // Applicare il filtro di luminosità all'immagine filtrata
  filteredImage.style.filter = `brightness(${brightnessValue}%)`;
});

