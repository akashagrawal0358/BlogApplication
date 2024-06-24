


export const getAccessToken = () => {
    return sessionStorage.getItem('accessToken');
}

// checks params or query 
export const getType = (value, body) => {
    if (value.params) {
        return { params: body }
    } else if (value.query) {
        if (typeof body === 'object') {
            return { query: body._id }
        } else {
            return { query: body }
        }
    }
    // if both not matched then return empty object
    return {};
}