// --- 1. TRUY VẤN CÁC PHẦN TỬ DOM ---
const modal = document.getElementById('task-modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const taskForm = document.getElementById('task-form');
const taskListContainer = document.getElementById('task-list');

const inputTitle = document.getElementById('task-title');
const inputDesc = document.getElementById('task-desc');
const inputDeadline = document.getElementById('task-deadline');
const inputPriority = document.getElementById('task-priority');
const formMode = document.getElementById('form-mode');
const oldTaskId = document.getElementById('old-task-id');

// Khởi tạo mảng dữ liệu tạm
let tasks = [];

// --- 2. SỰ KIỆN ĐÓNG / MỞ POPUP FORM ---
btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    formMode.value = 'create';
    document.getElementById('modal-title').innerText = "Thêm Công Việc Mới";
    taskForm.reset();
});

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
    taskForm.reset();
});