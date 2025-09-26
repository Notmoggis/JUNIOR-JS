// Proyecto 1: Random Color
let title = document.getElementById("title-junior-js");
let btn = document.getElementById("randomcolor-button");
let header = document.getElementById("header-junior-js"); // cambia aquí

btn.addEventListener("click", () => {
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);

    let r2 = (r1 + 100) % 256;
    let g2 = (g1 + 100) % 256;
    let b2 = (b1 + 100) % 256;

    title.style.color = `rgb(${r1}, ${g1}, ${b1})`;
    title.style.textShadow = `2px 2px 5px rgba(${r2}, ${g2}, ${b2}, 0.8)`;
    header.style.background = `rgb(${r2}, ${g2}, ${b2})`; // cambia el fondo aquí
});




// Proyecto 2: Lista de tareas
let inputhw = document.getElementById("input-homeworks");
let btnhw = document.getElementById("add");
let listhw = document.getElementById("list-ul");
btnhw.addEventListener("click", () => {
    if (inputhw.value.trim() !== "") {
        let lihw = document.createElement("li");
        lihw.textContent = inputhw.value;
        let borrar = document.createElement("button");
        borrar.textContent = "X";
        borrar.addEventListener("click", () => lihw.remove());
        lihw.appendChild(borrar);
        listhw.appendChild(lihw);
        inputhw.value = "";
    }
});

// Proyecto 3: Contador con timer
let cont = 0;
let second = 0;
let interval = null;
let number = document.getElementById("contador-num-1");

document.getElementById("sum-number-button-1").addEventListener("click", () => {
    cont++;
    number.textContent = cont;

    if (!interval) {
        interval = setInterval(() => {
            second++;
            number.textContent = second;
        }, 1000);
    }
});
document.getElementById("delete-number-button").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});
document.getElementById("reboot-number-button").addEventListener("click", () => {
    cont = 0;
    second = 0;
    number.textContent = second;
    clearInterval(interval);
    interval = null;
});

// Proyecto 4: Tienda con slider vertical
let car = document.getElementById("car");

document.querySelectorAll("#products-container .product-item button").forEach(btn => {
  btn.addEventListener("click", e => {
    let productDiv = e.target.parentElement.cloneNode(true);
    let clonedButton = productDiv.querySelector("button");
    if(clonedButton) clonedButton.remove();

    let li = document.createElement("li");
    li.appendChild(productDiv);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => li.remove());
    li.appendChild(deleteBtn);

    car.appendChild(li);
  });
});


// Proyecto 5: Calculadora
let calcDisplay = document.getElementById("calc-display");
let calcButtons = document.querySelectorAll(".calc-btn");
calcButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let val = btn.textContent;
        if(val === "=") {
            try {
                calcDisplay.value = eval(calcDisplay.value);
            } catch {
                calcDisplay.value = "Error";
            }
        } else {
            calcDisplay.value += val;
        }
    });
});

// Proyecto 6: Adivina el número
let randomNum = Math.floor(Math.random() * 100) + 1;
let guessInput = document.getElementById("guess-input");
let guessBtn = document.getElementById("guess-btn");
let guessResult = document.getElementById("guess-result");

guessBtn.addEventListener("click", () => {
    let val = parseInt(guessInput.value);
    if(isNaN(val) || val < 1 || val > 100) {
        guessResult.textContent = "Introduce un número entre 1 y 100";
        return;
    }
    if(val === randomNum) {
        guessResult.textContent = `¡Correcto! Era ${randomNum}`;
        randomNum = Math.floor(Math.random() * 100) + 1;
    } else if(val < randomNum) {
        guessResult.textContent = "Demasiado bajo";
    } else {
        guessResult.textContent = "Demasiado alto";
    }
});



