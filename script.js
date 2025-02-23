document.addEventListener("DOMContentLoaded", function () {
    const startScreen = document.getElementById("start-screen");
    const dressupScreen = document.getElementById("dressup-screen");
    const resultScreen = document.getElementById("result-screen");

    const startBtn = document.getElementById("start-btn");
    const completeBtn = document.getElementById("complete-btn");
    const restartBtn = document.getElementById("restart-btn");

    const menuButtons = document.querySelectorAll(".menu-btn");
    const itemsContainer = document.getElementById("items");
    const characterPreview = document.getElementById("character-preview");
    const finalCharacter = document.getElementById("final-character");

    let characterState = {
        face: "",
        hood: "",
        clothes: "",
        accessory: ""
    };

    startBtn.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        dressupScreen.classList.remove("hidden");
    });

    completeBtn.addEventListener("click", () => {
        dressupScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        finalCharacter.innerHTML = characterPreview.innerHTML;
    });

    restartBtn.addEventListener("click", () => {
        resultScreen.classList.add("hidden");
        dressupScreen.classList.remove("hidden");
    });

    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            itemsContainer.innerHTML = "";
            for (let i = 1; i <= 5; i++) {
                const img = document.createElement("img");
                img.src = `assets/${category}_${i}.png`;
                img.classList.add("item");
                img.addEventListener("click", () => {
                    characterState[category] = img.src;
                    updateCharacter();
                });
                itemsContainer.appendChild(img);
            }
        });
    });

    function updateCharacter() {
        characterPreview.innerHTML = "";
        for (let key in characterState) {
            if (characterState[key]) {
                const img = document.createElement("img");
                img.src = characterState[key];
                characterPreview.appendChild(img);
            }
        }
    }
});
