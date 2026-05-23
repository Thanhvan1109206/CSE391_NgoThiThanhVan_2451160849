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
// --- 3. HÀM HIỂN THỊ DANH SÁCH CÔNG VIỆC (RENDER CARDS) ---
function renderTasks() {
    taskListContainer.innerHTML = ''; // Xóa sạch danh sách cũ trước khi vẽ

    if (tasks.length === 0) {
        taskListContainer.innerHTML = `<div style="text-align:center; color:#95a5a6; padding: 20px;">Không có công việc nào. Thảnh thơi quá!</div>`;
        return;
    }

    tasks.forEach((task) => {
        const card = document.createElement('div');
        // Thay đổi class CSS động tùy thuộc vào trạng thái công việc đã hoàn thành chưa
        card.className = `task-card ${task.completed ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="task-info">
                <div class="task-text-title" style="font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;">${task.title}</div>
                <div style="font-size: 0.9rem; color: #555; margin-bottom: 5px;">${task.desc}</div>
                <div style="font-size: 0.85rem; color: #7f8c8d;">
                    📅 Hạn: ${task.deadline} | ⭐ Ưu tiên: <span style="font-weight:600;">${task.priority}</span>
                </div>
            </div>
            <div class="task-actions">
                <input type="checkbox" class="chk-toggle" data-id="${task.id}" ${task.completed ? 'checked' : ''} style="transform: scale(1.3); margin-right: 15px; cursor:pointer;">
                <button class="btn-edit" data-id="${task.id}" style="background:#3498db; color:white; padding:5px 10px; font-size:0.85rem; margin-right:5px;">Sửa</button>
                <button class="btn-delete" data-id="${task.id}" style="background:#e74c3c; color:white; padding:5px 10px; font-size:0.85rem;">Xóa</button>
            </div>
        `;
        taskListContainer.appendChild(card);
    });
}

// --- 4. SỰ KIỆN SUBMIT FORM (XỬ LÝ THÊM MỚI) ---
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formMode.value !== 'create') return; // Bỏ qua nếu đang ở luồng sửa

    const taskData = {
        id: 'TK_' + Date.now(), // Tạo ID ngẫu nhiên bằng mốc thời gian độc nhất
        title: inputTitle.value.trim(),
        desc: inputDesc.value.trim(),
        deadline: inputDeadline.value,
        priority: inputPriority.value,
        completed: false // Công việc mới tạo mặc định là chưa hoàn thành
    };

    tasks.push(taskData);
    alert("Thêm công việc thành công!");

    renderTasks();
    modal.style.display = 'none';
    taskForm.reset();
});

// Chạy khởi tạo danh sách ban đầu
renderTasks();