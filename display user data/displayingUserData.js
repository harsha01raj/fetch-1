document.getElementById("fetchUsersBtn").addEventListener('click', fetchUsers);
function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            let output = '';
            data.data.forEach(user => {
                console.log(user);
                output += `
                <div class="user-card">
                    <img src="${user.avatar}" alt="Users avatar">
                    <div class="user-details">
                        <span class="first_name">${user.first_name}</span>
                        <span class="email">${user.email}</span>
                    </div>
                </div>
             `

            })
            document.getElementById('usersList').innerHTML= output;
        })
}