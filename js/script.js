{/* <div class="window popup">
            <div class="window-gradient"></div>
            <div class="title">
                <span>Error</span>
            </div>
            <div class="content">
                <div class="message">
                    <div class="icon">
                        <img src="error.ico">
                    </div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </div>
                </div>
                <div class="buttons">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div> */}

function createPopup(title, message, type) {
    const popup = document.createElement('div');
    popup.classList.add('window', 'popup');
    popup.innerHTML = `
        <div class="window-gradient"></div>
        <div class="title">
            <span>${title}</span>
        </div>
        <div class="content">
            <div class="message">
                <div class="icon">
                    <img src="resources/img/${type}.ico">
                </div>
                <div class="text">
                    ${message}
                </div>
            </div>
            <div class="buttons">
                <button>OK</button>
            </div>
        </div>
    `;
    audio = new Audio(`resources/audio/${type}.wav`);
    audio.play();
    popup.querySelector("button").addEventListener("click", () => {
        popup.style.animation = "close 0.2s forwards";
        setTimeout(() => {
            popup.remove();
        }, 198);
    });
    document.querySelector(".container").appendChild(popup);
}

document.querySelector("#buttonTest").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        createPopup("Popup test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", button.dataset.type);
    });
})