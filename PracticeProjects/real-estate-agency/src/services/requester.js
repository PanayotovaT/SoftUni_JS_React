const request = async (url, options) => {

    try {
        const response  =  await fetch(url, options);

        if(response.ok) {
            try {
                return await response.json();
            } catch(err) {
                return await response;
            }

        } else {
            const result = await response.json();
            throw new Error(result.message);
        }

    } catch(err) {
       throw new Error(err.message);
    }

}

const getOptions = (method='GET', body) => {

    let options = {
        method,
        headers: {}
    }

    let token  = null;

    try {
        token = localStorage.getItem('user');

    } catch(err) {
        return err;
    }

    if(token) {
        options.headers['X-Authorization'] = JSON.parse(token).accessToken;
    }

    if(body){

        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body);
    }

    return options;
}

export const get = async (url) => await request(url, getOptions());

export const post = async (url, data) =>await request(url, getOptions('POST', data));

export const put = async (url, data) => await request(url, getOptions('PUT', data));

export const del = async (url) => await request(url, getOptions('DELETE'));