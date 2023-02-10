export default {
    getPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts/').then((res) => res.json()).then((res) => {
            return res
        })
    },
    getPost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`).then((res) => res.json()).then((res) => {
            return res
        })
    },
    getComments(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`).then((res) => res.json()).then((res) => {
            return res
        })
    },
    deletePost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`, { method: 'DELETE', }).then((res) => res.json()).then((res) => {
            return res
        })
    },
    addPost(title, body) {
        return fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json()).then((res) => {
            return res
        })
    }
}