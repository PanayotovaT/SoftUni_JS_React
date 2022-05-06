export const request = async (method, url, data) => {
    let result = null;

    if (method === 'GET') {
        result = fetch(url);
    } else {
        result = fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        })
    }

    return result.then(responseHandler);
}

async function responseHandler(res) {
    let jsonData = await res.json()
    if (res.ok) {
        return jsonData;
    } else {
        throw jsonData;
    }

}

function getToken() {
    try {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            throw new Error({ message: 'You must be authenticated!' })
        }
        return user.accessToken;

    } catch (err) {
        console.log(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');