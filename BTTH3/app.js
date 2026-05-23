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
let students = JSON.parse(localStorage.getItem('k66_students')) || [];

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
// --- 3. HÀM HIỂN THỊ DANH SÁCH (RENDER) ---
function renderStudents() {
    tableBody.innerHTML = ''; // Xóa sạch dữ liệu cũ

    if (students.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#888;">Danh sách trống!</td></tr>`;
        return;
    }

    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.className}</td>
            <td><strong>${student.gpa}</strong></td>
            <td>${student.email}</td>
            <td>
                <button class="btn-edit" data-id="${student.id}" style="background:#3498db; color:white; border:none; padding:4px 8px; border-radius:3px; cursor:pointer;">Sửa</button>
                <button class="btn-delete" data-id="${student.id}" style="background:#e74c3c; color:white; border:none; padding:4px 8px; border-radius:3px; cursor:pointer;">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// --- 4. SỰ KIỆN SUBMIT FORM (XỬ LÝ THÊM MỚI) ---
studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Chặn tải lại trang

    if (formMode.value !== 'create') return; // Luồng này chỉ giải quyết thêm mới

    const studentData = {
        id: inputId.value.trim(),
        name: inputName.value.trim(),
        dob: inputDob.value,
        className: inputClass.value.trim(),
        gpa: parseFloat(inputGpa.value),
        email: inputEmail.value.trim()
    };

    // Kiểm tra trùng khóa chính
    const isExist = students.some(s => s.id === studentData.id);
    if (isExist) {
        alert("Lỗi: Mã sinh viên này đã tồn tại!");
        return;
    }

    students.push(studentData);
    alert("Thêm sinh viên thành công!");
    
    renderStudents(); // Vẽ lại bảng
    modal.style.display = 'none'; // Ẩn popup
    studentForm.reset();
});

// Chạy thử lần đầu khi tải trang
renderStudents();
// --- 5. HÀM THỐNG KÊ & ĐỒNG BỘ LOCALSTORAGE ---
function updateStatisticsAndStorage() {
    // Lưu xuống bộ nhớ trình duyệt
    localStorage.setItem('k66_students', JSON.stringify(students));

    // Tính toán số liệu thống kê
    const total = students.length;
    let average = 0;
    if (total > 0) {
        const totalGpa = students.reduce((sum, s) => sum + s.gpa, 0);
        average = (totalGpa / total).toFixed(2);
    }

    document.getElementById('total-students').innerText = total;
    document.getElementById('class-average').innerText = average;
}

// Chèn hàm đồng bộ vào logic Submit sửa dữ liệu (Cập nhật đè lên nút submit cũ ở Luồng 3)
studentForm.addEventListener('submit', (e) => {
    if (formMode.value === 'edit') {
        const idCanSua = oldStudentId.value;
        const index = students.findIndex(s => s.id === idCanSua);
        
        if (index !== -1) {
            students[index] = {
                id: inputId.value.trim(),
                name: inputName.value.trim(),
                dob: inputDob.value,
                className: inputClass.value.trim(),
                gpa: parseFloat(inputGpa.value),
                email: inputEmail.value.trim()
            };
            alert("Cập nhật thông tin thành công!");
            renderStudents();
            modal.style.display = 'none';
            studentForm.reset();
        }
    }
    updateStatisticsAndStorage(); // Đồng bộ sau khi Thêm hoặc Sửa
});

// --- 6. EVENT DELEGATION: SỰ KIỆN CLICK NÚT SỬA / XÓA TRÊN BẢNG ---
tableBody.addEventListener('click', (e) => {
    const idSelected = e.target.getAttribute('data-id');

    // Hành động Sửa
    if (e.target.classList.contains('btn-edit')) {
        const student = students.find(s => s.id === idSelected);
        if (student) {
            inputId.value = student.id;
            inputName.value = student.name;
            inputDob.value = student.dob;
            inputClass.value = student.className;
            inputGpa.value = student.gpa;
            inputEmail.value = student.email;

            formMode.value = 'edit';
            oldStudentId.value = student.id;
            document.getElementById('modal-title').innerText = "Cập Nhật Thông Tin";
            inputId.disabled = true; // Khóa trường Mã SV
            modal.style.display = 'flex';
        }
    }

    // Hành động Xóa
    if (e.target.classList.contains('btn-delete')) {
        const confirmDelete = confirm(`Bạn có chắc muốn xóa sinh viên có mã: ${idSelected}?`);
        if (confirmDelete) {
            students = students.filter(s => s.id !== idSelected);
            renderStudents();
            updateStatisticsAndStorage();
        }
    }
});

// Sửa lại hàm render ở đầu để tự động gọi thống kê khi tải trang lần đầu
// (Hãy thêm dòng gọi hàm dưới đây vào cuối hàm renderStudents() ở Luồng 3)
updateStatisticsAndStorage();