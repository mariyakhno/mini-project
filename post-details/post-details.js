const url = new URL(window.location.href);
const urlPostId = url.searchParams.get('post_id');

fetch(`https://jsonplaceholder.typicode.com/posts/${urlPostId}`)
    .then(response => response.json())
    .then(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('user-post');

        for (const postKey in post) {
            const postElem = document.createElement('div');
            postElem.append(postKey + ': ' + post[postKey]);
            postDiv.append(postElem);
        }
        document.body.append(postDiv);
    })
    .then(() => fetch(`https://jsonplaceholder.typicode.com/posts/${urlPostId}/comments`))
    .then(response => response.json())
    .then(comments => {
        const commentsDiv = document.createElement('div');
        // commentsDiv.classList.add('user-post__comments');

        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('user-post__comments');

            for (const commentKey in comment) {
                const commentElem = document.createElement('div');
                commentElem.append(commentKey + ': ' + comment[commentKey]);
                commentDiv.append(commentElem);
            }
            commentsDiv.append(commentDiv);
        }
        document.body.append(commentsDiv);
    });