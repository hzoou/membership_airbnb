const url = 'http://localhost:8080';

const fetchAPI = (uri, method, body) => {
    return fetch(url + uri, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then((res) => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok.');
    }).then((data) => {
        return data;
    }).catch((err) => {
        return alert(err.message);
    });
};

export { fetchAPI };