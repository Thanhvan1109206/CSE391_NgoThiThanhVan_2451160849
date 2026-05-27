const products = [
    {
        id:1,
        name:"iPhone 16",
        price:25990000,
        category:"phone",
        image:"https://placehold.co/200x200",
        rating:4.8,
        inStock:true
    },

    {
        id:2,
        name:"Samsung S25",
        price:22990000,
        category:"phone",
        image:"https://placehold.co/200x200",
        rating:4.5,
        inStock:true
    },

    {
        id:3,
        name:"MacBook Pro",
        price:45990000,
        category:"laptop",
        image:"https://placehold.co/200x200",
        rating:4.9,
        inStock:true
    },

    {
        id:4,
        name:"Dell XPS 15",
        price:38990000,
        category:"laptop",
        image:"https://placehold.co/200x200",
        rating:4.6,
        inStock:true
    },

    {
        id:5,
        name:"AirPods Pro",
        price:5990000,
        category:"accessory",
        image:"https://placehold.co/200x200",
        rating:4.7,
        inStock:true
    },

    {
        id:6,
        name:"Sony WH-1000XM5",
        price:7990000,
        category:"accessory",
        image:"https://placehold.co/200x200",
        rating:4.9,
        inStock:false
    },

    {
        id:7,
        name:"iPad Pro",
        price:27990000,
        category:"tablet",
        image:"https://placehold.co/200x200",
        rating:4.8,
        inStock:true
    },

    {
        id:8,
        name:"Galaxy Tab S9",
        price:21990000,
        category:"tablet",
        image:"https://placehold.co/200x200",
        rating:4.4,
        inStock:true
    },

    {
        id:9,
        name:"Asus ROG",
        price:35990000,
        category:"laptop",
        image:"https://placehold.co/200x200",
        rating:4.3,
        inStock:true
    },

    {
        id:10,
        name:"Xiaomi 15",
        price:15990000,
        category:"phone",
        image:"https://placehold.co/200x200",
        rating:4.2,
        inStock:true
    },

    {
        id:11,
        name:"Logitech Mouse",
        price:990000,
        category:"accessory",
        image:"https://placehold.co/200x200",
        rating:4.1,
        inStock:true
    },

    {
        id:12,
        name:"Lenovo Legion",
        price:32990000,
        category:"laptop",
        image:"https://placehold.co/200x200",
        rating:4.5,
        inStock:false
    }
];

let filteredProducts = [...products];
let cartCount = 0;

const body = document.body;

/* ===== MAIN CONTAINER ===== */

const container = document.createElement("div");
container.className = "container";

body.appendChild(container);

/* ===== TOP BAR ===== */

const topBar = document.createElement("div");
topBar.className = "top-bar";

const searchInput = document.createElement("input");
searchInput.placeholder = "Tìm sản phẩm...";
searchInput.className = "search-box";

const sortSelect = document.createElement("select");

sortSelect.innerHTML = `
    <option value="">Sắp xếp</option>
    <option value="price-asc">Giá tăng</option>
    <option value="price-desc">Giá giảm</option>
    <option value="name">Tên A-Z</option>
    <option value="rating">Đánh giá cao nhất</option>
`;

const darkBtn = document.createElement("button");
darkBtn.textContent = "Dark Mode";
darkBtn.className = "dark-btn";

topBar.appendChild(searchInput);
topBar.appendChild(sortSelect);
topBar.appendChild(darkBtn);

container.appendChild(topBar);

/* ===== CATEGORY BUTTONS ===== */

const categoriesDiv = document.createElement("div");
categoriesDiv.className = "categories";

const categories = ["all","phone","laptop","tablet","accessory"];

categories.forEach(category => {
    const btn = document.createElement("button");

    btn.textContent = category.toUpperCase();

    btn.addEventListener("click", () => {
        filterByCategory(category);
    });

    categoriesDiv.appendChild(btn);
});

container.appendChild(categoriesDiv);

/* ===== PRODUCTS CONTAINER ===== */

const productsContainer = document.createElement("div");
productsContainer.className = "products";

container.appendChild(productsContainer);

/* ===== CART ===== */

const cartIcon = document.createElement("div");
cartIcon.className = "cart-icon";
cartIcon.innerHTML = `
🛒
<span class="badge">0</span>
`;

body.appendChild(cartIcon);

const badge = cartIcon.querySelector(".badge");

/* ===== FUNCTIONS ===== */

function renderProducts(productArray){

    productsContainer.innerHTML = "";

    productArray.forEach(product => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="card-body">
                <h3>${product.name}</h3>

                <p class="price">
                    ${product.price.toLocaleString()}đ
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <p class="stock">
                    ${product.inStock ? "Còn hàng" : "Hết hàng"}
                </p>

                <button class="add-cart">
                    Thêm giỏ
                </button>
            </div>
        `;

        /* Modal */

        card.addEventListener("click", () => {
            createModal(product);
        });

        /* Add cart */

        const addBtn = card.querySelector(".add-cart");

        addBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            cartCount++;

            badge.textContent = cartCount;
        });

        productsContainer.appendChild(card);
    });
}

function filterByCategory(category){

    if(category === "all"){
        filteredProducts = [...products];
    }else{
        filteredProducts = products.filter(product => {
            return product.category === category;
        });
    }

    renderProducts(filteredProducts);
}

function searchProducts(keyword){

    const result = filteredProducts.filter(product => {
        return product.name
            .toLowerCase()
            .includes(keyword.toLowerCase());
    });

    renderProducts(result);
}

function sortProducts(value){

    let sorted = [...filteredProducts];

    switch(value){

        case "price-asc":
            sorted.sort((a,b) => a.price - b.price);
            break;

        case "price-desc":
            sorted.sort((a,b) => b.price - a.price);
            break;

        case "name":
            sorted.sort((a,b) => {
                return a.name.localeCompare(b.name);
            });
            break;

        case "rating":
            sorted.sort((a,b) => b.rating - a.rating);
            break;
    }

    renderProducts(sorted);
}

function createModal(product){

    const modal = document.createElement("div");
    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>

            <img src="${product.image}">

            <h2>${product.name}</h2>

            <p>
                Giá:
                ${product.price.toLocaleString()}đ
            </p>

            <p>
                Danh mục:
                ${product.category}
            </p>

            <p>
                Đánh giá:
                ⭐ ${product.rating}
            </p>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector(".close-btn");

    closeBtn.addEventListener("click", () => {
        modal.remove();
    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.remove();
        }
    });
}

/* ===== EVENTS ===== */

searchInput.addEventListener("input", (e) => {
    searchProducts(e.target.value);
});

sortSelect.addEventListener("change", (e) => {
    sortProducts(e.target.value);
});

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

/* ===== INIT ===== */

renderProducts(products);