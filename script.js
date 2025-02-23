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

    // 시작하기 버튼 클릭 시 꾸미기 화면으로 이동
    startBtn.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        dressupScreen.classList.remove("hidden");
    });

    // 완성 버튼 클릭 시 완성 화면으로 이동
    completeBtn.addEventListener("click", () => {
        dressupScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        finalCharacter.innerHTML = characterPreview.innerHTML;
    });

    // 다시하기 버튼 클릭 시 꾸미기 화면으로 이동
    restartBtn.addEventListener("click", () => {
        resultScreen.classList.add("hidden");
        dressupScreen.classList.remove("hidden");
    });

    // 카테고리 버튼 클릭 시 해당 아이템 목록 표시
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

    // 캐릭터 화면에 선택한 아이템 반영
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
