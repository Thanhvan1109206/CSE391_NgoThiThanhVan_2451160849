const body = document.body;

const container = document.createElement("div");
container.className = "container";

body.appendChild(container);

container.innerHTML = `
    <h1>Đăng ký</h1>

    <form id="registerForm">

        <div class="form-group">
            <label>Họ tên</label>
            <input type="text" id="name">
            <small id="nameError"></small>
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" id="email">
            <small id="emailError"></small>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" id="password">

            <div class="strength-bar">
                <div class="strength-fill" id="strengthFill"></div>
            </div>

            <small id="passwordError"></small>
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" id="confirmPassword">
            <small id="confirmError"></small>
        </div>

        <div class="form-group">
            <label>Phone</label>
            <input type="text" id="phone" maxlength="13">
            <small id="phoneError"></small>
        </div>

        <button id="submitBtn" disabled>
            Đăng ký
        </button>

    </form>
`;

const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

let valid = {
    name:false,
    email:false,
    password:false,
    confirm:false,
    phone:false
};

/* ===== NAME ===== */

nameInput.addEventListener("input", () => {

    const value = nameInput.value.trim();

    if(value.length >= 2 && value.length <= 50){

        valid.name = true;

        document.getElementById("nameError").innerHTML =
            "✅ Hợp lệ";

        document.getElementById("nameError").className =
            "success";

    }else{

        valid.name = false;

        document.getElementById("nameError").innerHTML =
            "❌ Tên phải 2-50 ký tự";
    }

    checkForm();
});

/* ===== EMAIL ===== */

emailInput.addEventListener("input", () => {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(emailInput.value)){

        valid.email = true;

        document.getElementById("emailError").innerHTML =
            "✅ Email hợp lệ";

        document.getElementById("emailError").className =
            "success";

    }else{

        valid.email = false;

        document.getElementById("emailError").innerHTML =
            "❌ Email không đúng định dạng";
    }

    checkForm();
});

/* ===== PASSWORD ===== */

passwordInput.addEventListener("input", () => {

    const value = passwordInput.value;

    const fill =
        document.getElementById("strengthFill");

    if(value.length < 8){

        fill.style.width = "33%";
        fill.style.background = "red";

        document.getElementById("passwordError").innerHTML =
            "Yếu";

        valid.password = false;

    }else if(
        /[A-Za-z]/.test(value) &&
        /\d/.test(value)
    ){

        fill.style.width = "66%";
        fill.style.background = "orange";

        document.getElementById("passwordError").innerHTML =
            "Trung bình";

        valid.password = true;
    }

    if(
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value) &&
        value.length >= 8
    ){

        fill.style.width = "100%";
        fill.style.background = "green";

        document.getElementById("passwordError").innerHTML =
            "Mạnh";

        valid.password = true;
    }

    checkConfirm();
    checkForm();
});

/* ===== CONFIRM PASSWORD ===== */

confirmInput.addEventListener("input", () => {
    checkConfirm();
    checkForm();
});

function checkConfirm(){

    if(confirmInput.value === passwordInput.value &&
        confirmInput.value !== ""){

        valid.confirm = true;

        document.getElementById("confirmError").innerHTML =
            "✅ Khớp mật khẩu";

        document.getElementById("confirmError").className =
            "success";

    }else{

        valid.confirm = false;

        document.getElementById("confirmError").innerHTML =
            "❌ Không khớp mật khẩu";
    }
}

/* ===== PHONE ===== */

phoneInput.addEventListener("input", () => {

    let value =
        phoneInput.value.replace(/\D/g,"");

    if(value.length > 4 && value.length <= 7){

        value =
            value.replace(
                /(\d{4})(\d+)/,
                "$1-$2"
            );

    }else if(value.length > 7){

        value =
            value.replace(
                /(\d{4})(\d{3})(\d+)/,
                "$1-$2-$3"
            );
    }

    phoneInput.value = value;

    const digits =
        value.replace(/\D/g,"");

    if(digits.length === 10){

        valid.phone = true;

        document.getElementById("phoneError").innerHTML =
            "✅ Số điện thoại hợp lệ";

        document.getElementById("phoneError").className =
            "success";

    }else{

        valid.phone = false;

        document.getElementById("phoneError").innerHTML =
            "❌ Phải đủ 10 số";
    }

    checkForm();
});

/* ===== FORM CHECK ===== */

function checkForm(){

    const allValid =
        Object.values(valid).every(v => v);

    submitBtn.disabled = !allValid;
}

/* ===== SUBMIT ===== */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const modal = document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-content">

            <h2>Đăng ký thành công!</h2>

            <p>
                Họ tên:
                ${nameInput.value}
            </p>

            <p>
                Email:
                ${emailInput.value}
            </p>

            <p>
                Phone:
                ${phoneInput.value}
            </p>

            <button class="close-btn">
                Đóng
            </button>

        </div>
    `;

    document.body.appendChild(modal);

    modal
        .querySelector(".close-btn")
        .addEventListener("click", () => {
            modal.remove();
        });
});