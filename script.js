let selectedCircle = null;

// Funktion, um einen Kreis zu drehen
function rotateCircle(circle) {
  circle.style.transform = `rotate(${Math.random() * 360}deg)`;
}

// Funktion, um das Popup-Feld zu öffnen
function openPopup(circle) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-button" onclick="closePopup()">×</span>
      <p>${circle.dataset.popupContent}</p>
    </div>
  `;
  circle.parentElement.appendChild(popup);
  selectedCircle = circle;
}

// Funktion, um das Popup-Feld zu schließen
function closePopup() {
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
    selectedCircle = null;
  }
}

// Event Listener für jeden Kreis, um die Funktionen aufzurufen
const circles = document.getElementsByClassName("circle");
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    if (selectedCircle !== this) {
      if (selectedCircle) {
        closePopup();
      }
      rotateCircle(this);
      openPopup(this);
    }
  });
}
