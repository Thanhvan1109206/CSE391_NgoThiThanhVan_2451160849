// --- 1. TRUY VẤN CÁC PHẦN TỬ DOM ---
const modal = document.getElementById('student-modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const studentForm = document.getElementById('student-form');
const tableBody = document.getElementById('student-table-body');

const inputId = document.getElementById('student-id');
const inputName = document.getElementById('student-name');
const inputDob = document.getElementById('student-dob');
const inputClass = document.getElementById('student-class');
const inputGpa = document.getElementById('student-gpa');
const inputEmail = document.getElementById('student-email');
const formMode = document.getElementById('form-mode');
const oldStudentId = document.getElementById('old-student-id');

// Khởi tạo mảng ảo để chứa dữ liệu (Luồng 4 sẽ chuyển sang localStorage)
let students = [];

// --- 2. SỰ KIỆN ĐÓNG BẬT POPUP ---
// Mở form chế độ thêm mới
btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    formMode.value = 'create';
    document.getElementById('modal-title').innerText = "Thêm Sinh Viên Mới";
    inputId.disabled = false;
    studentForm.reset();
});

// Đóng form
btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
    studentForm.reset();
});