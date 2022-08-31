let url = new URL (location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => {
        let ul = document.createElement('ul')
        for (let user of users) {
            let li = document.createElement('li');
            li.innerHTML = <h2>${user.id}. ${user.name}</h2>
                            <p>userName - ${user.username}</p>
                             <p>Email- ${user.email}</p>
                             <p>address- ${user.address.street} ${user.address.suite} ${user.address.city}</p>
                            <p>${user.address.phone} ${user.address.website}</p>;
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    })

