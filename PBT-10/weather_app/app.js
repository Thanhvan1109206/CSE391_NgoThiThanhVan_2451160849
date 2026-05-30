const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const weatherDiv = document.getElementById("weather");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");

const historyList = document.getElementById("historyList");

function showLoading() {
    loading.classList.remove("hidden");
    weatherDiv.classList.add("hidden");
    errorDiv.classList.add("hidden");
}

function showError(message) {
    loading.classList.add("hidden");
    weatherDiv.classList.add("hidden");

    errorDiv.classList.remove("hidden");
    errorDiv.textContent = message;
}

function showWeather(data, city) {
    loading.classList.add("hidden");
    errorDiv.classList.add("hidden");

    weatherDiv.classList.remove("hidden");

    cityName.textContent = city;

    temp.textContent =
        `Nhiệt độ: ${data.current_condition[0].temp_C} °C`;

    humidity.textContent =
        `Độ ẩm: ${data.current_condition[0].humidity}%`;

    description.textContent =
        `Mô tả: ${data.current_condition[0].weatherDesc[0].value}`;

    weatherIcon.src =
        data.current_condition[0].weatherIconUrl[0].value;
}

function saveHistory(city) {
    let history =
        JSON.parse(localStorage.getItem("weatherHistory")) || [];

    history = history.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    history.unshift(city);

    history = history.slice(0, 5);

    localStorage.setItem(
        "weatherHistory",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory() {
    const history =
        JSON.parse(localStorage.getItem("weatherHistory")) || [];

    historyList.innerHTML = "";

    history.forEach(city => {
        const li = document.createElement("li");

        li.textContent = city;

        li.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });

        historyList.appendChild(li);
    });
}

async function getWeather(city) {

    if (!city.trim()) {
        showError("Vui lòng nhập tên thành phố");
        return;
    }

    try {

        showLoading();

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if (!response.ok) {
            throw new Error("Không lấy được dữ liệu");
        }

        const data = await response.json();

        showWeather(data, city);

        saveHistory(city);

    } catch (error) {

        showError(
            "Có lỗi xảy ra hoặc thành phố không tồn tại"
        );

        console.error(error);
    }
}

searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value);
});

renderHistory();