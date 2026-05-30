const gallery =
    document.getElementById("gallery");

const loader =
    document.getElementById("loader");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const closeBtn =
    document.getElementById("close");

let page = 1;
let isLoading = false;

async function loadMorePhotos() {

    if (isLoading) return;

    isLoading = true;

    loader.style.display = "block";

    try {

        const response = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=20`
        );

        const photos =
            await response.json();

        renderPhotos(photos);

        page++;

    } catch(error) {

        console.error(error);

    } finally {

        loader.style.display = "none";

        isLoading = false;
    }
}

function renderPhotos(photos) {

    photos.forEach(photo => {

        const img =
            document.createElement("img");

        img.className = "photo";

        img.loading = "lazy";

        img.src = photo.download_url;

        img.alt = photo.author;

        img.addEventListener("click", () => {

            lightbox.classList.remove("hidden");

            lightboxImg.src =
                photo.download_url;
        });

        gallery.appendChild(img);
    });
}

const observer =
new IntersectionObserver(entries => {

    if(entries[0].isIntersecting){

        loadMorePhotos();
    }

});

observer.observe(
    document.getElementById("load-trigger")
);

closeBtn.addEventListener("click", () => {

    lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.classList.add("hidden");
    }
});

loadMorePhotos();