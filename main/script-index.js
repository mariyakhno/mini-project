
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-div');

            const userId = document.createElement('h2');
            userId.append(user.id);
            const userName = document.createElement('h3');
            userName.append(user.name);

            const userBtn = document.createElement('button');
            const btnLink = document.createElement('a');
            btnLink.setAttribute('href', `../users/user-details.html?user_id=${user.id}`);
            btnLink.append('Show details');
            userBtn.append(btnLink);

            userDiv.append(userId, userName, userBtn);
            document.body.append(userDiv);
        }
    })