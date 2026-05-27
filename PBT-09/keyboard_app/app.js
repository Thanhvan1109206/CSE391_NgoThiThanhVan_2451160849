const images = [
    "https://placehold.co/600x400?text=Image+1",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+3",
    "https://placehold.co/600x400?text=Image+4",
    "https://placehold.co/600x400?text=Image+5"
];

let current = 0;
let slideshow = null;

/* ===== GALLERY ===== */

const gallery = document.createElement("div");
gallery.className = "gallery";

gallery.innerHTML = `
    <h1>Keyboard Gallery</h1>

    <img
        id="galleryImage"
        src="${images[0]}"
        alt="Gallery Image"
        tabindex="0"
    >

    <div class="controls">

        <button id="prevBtn"
            aria-label="Previous image">
            ← Prev
        </button>

        <button id="nextBtn"
            aria-label="Next image">
            Next →
        </button>

    </div>

    <p>
        Keyboard:
        ← → | 1-9 | Space | Ctrl+K
    </p>
`;

document.body.appendChild(gallery);

const img =
    document.getElementById("galleryImage");

function renderImage(){

    img.src = images[current];
}

function nextImage(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    renderImage();
}

function prevImage(){

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    renderImage();
}

document
    .getElementById("nextBtn")
    .addEventListener("click", nextImage);

document
    .getElementById("prevBtn")
    .addEventListener("click", prevImage);

/* ===== COMMAND PALETTE ===== */

const modal = document.createElement("div");

modal.className = "modal";

modal.innerHTML = `
    <div class="modal-content">

        <input
            type="text"
            class="command-input"
            placeholder="Nhập command..."
            aria-label="Command palette input"
        >

        <div class="commands"></div>

    </div>
`;

document.body.appendChild(modal);

const commandInput =
    modal.querySelector(".command-input");

const commandsDiv =
    modal.querySelector(".commands");

const commands = [
    "Open Gallery",
    "Next Image",
    "Previous Image",
    "Play Slideshow",
    "Pause Slideshow"
];

function renderCommands(keyword = ""){

    commandsDiv.innerHTML = "";

    const filtered =
        commands.filter(cmd =>
            cmd.toLowerCase()
            .includes(keyword.toLowerCase())
        );

    filtered.forEach(cmd => {

        const item =
            document.createElement("div");

        item.className = "command-item";

        item.textContent = cmd;

        commandsDiv.appendChild(item);
    });
}

renderCommands();

commandInput.addEventListener("input", (e) => {

    renderCommands(e.target.value);
});

/* ===== KEYBOARD EVENTS ===== */

document.addEventListener("keydown", (e) => {

    /* Ctrl + K */

    if(e.ctrlKey && e.key === "k"){

        e.preventDefault();

        modal.style.display = "flex";

        commandInput.focus();
    }

    /* Escape */

    if(e.key === "Escape"){

        modal.style.display = "none";
    }

    /* Arrows */

    if(e.key === "ArrowRight"){

        nextImage();
    }

    if(e.key === "ArrowLeft"){

        prevImage();
    }

    /* Number keys */

    if(!isNaN(e.key)){

        const index =
            Number(e.key) - 1;

        if(images[index]){

            current = index;

            renderImage();
        }
    }

    /* Space */

    if(e.code === "Space"){

        e.preventDefault();

        if(slideshow){

            clearInterval(slideshow);

            slideshow = null;

        }else{

            slideshow = setInterval(() => {

                nextImage();

            },2000);
        }
    }

    /* Enter */

    if(e.key === "Enter" &&
        modal.style.display === "flex"){

        alert(
            "Command selected: " +
            commandInput.value
        );

        modal.style.display = "none";
    }
});