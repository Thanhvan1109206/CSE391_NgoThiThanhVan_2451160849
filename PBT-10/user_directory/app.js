let users = [];
let editingId = null;

const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");

const api = {

    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {
        const response =
            await fetch(`${this.baseURL}/users`);

        return response.json();
    },

    async getUser(id) {
        const response =
            await fetch(`${this.baseURL}/users/${id}`);

        return response.json();
    },

    async createUser(data) {
        const response =
            await fetch(`${this.baseURL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        return response.json();
    },

    async updateUser(id, data) {

        const response =
            await fetch(`${this.baseURL}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        return response.json();
    },

    async deleteUser(id) {

        const response =
            await fetch(`${this.baseURL}/users/${id}`, {
                method: "DELETE"
            });

        return response;
    }
};

const ui = {

    renderUsers(data) {

        userList.innerHTML = "";

        data.forEach(user => {

            const card =
                document.createElement("div");

            card.className = "user-card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>

                <button onclick="editUser(${user.id})">
                    Edit
                </button>

                <button onclick="removeUser(${user.id})">
                    Delete
                </button>
            `;

            userList.appendChild(card);
        });
    },

    showLoading() {
        document
            .getElementById("loading")
            .classList.remove("hidden");
    },

    hideLoading() {
        document
            .getElementById("loading")
            .classList.add("hidden");
    },

    showError(msg) {

        message.className = "error";
        message.textContent = msg;
    },

    showSuccess(msg) {

        message.className = "success";
        message.textContent = msg;
    }
};

async function loadUsers() {

    try {

        ui.showLoading();

        users = await api.getUsers();

        ui.renderUsers(users);

    } catch {

        ui.showError(
            "Failed to load users"
        );

    } finally {

        ui.hideLoading();
    }
}

userForm.addEventListener(
    "submit",
    async function(e) {

        e.preventDefault();

        const userData = {

            name:
                document.getElementById("name").value,

            email:
                document.getElementById("email").value
        };

        try {

            if (editingId) {

                const updated =
                    await api.updateUser(
                        editingId,
                        userData
                    );

                users = users.map(user =>
                    user.id === editingId
                        ? updated
                        : user
                );

                ui.showSuccess(
                    "User updated"
                );

                editingId = null;

            } else {

                const created =
                    await api.createUser(
                        userData
                    );

                created.id =
                    Date.now();

                users.unshift(created);

                ui.showSuccess(
                    "User created"
                );
            }

            ui.renderUsers(users);

            userForm.reset();

        } catch {

            ui.showError(
                "Save failed"
            );
        }
    }
);

async function editUser(id) {

    const user =
        users.find(u => u.id === id);

    editingId = id;

    document.getElementById("name").value =
        user.name;

    document.getElementById("email").value =
        user.email;
}

async function removeUser(id) {

    const confirmDelete =
        confirm("Delete this user?");

    if (!confirmDelete) return;

    try {

        await api.deleteUser(id);

        users = users.filter(
            user => user.id !== id
        );

        ui.renderUsers(users);

        ui.showSuccess(
            "User deleted"
        );

    } catch {

        ui.showError(
            "Delete failed"
        );
    }
}

searchInput.addEventListener(
    "input",
    function() {

        const keyword =
            this.value.toLowerCase();

        const filtered =
            users.filter(user =>
                user.name
                    .toLowerCase()
                    .includes(keyword)
                ||
                user.email
                    .toLowerCase()
                    .includes(keyword)
            );

        ui.renderUsers(filtered);
    }
);

loadUsers();