const formSent = async (url,data) => {
    let result = await fetch(url, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:data
    });
    return await result.json();
};

export {formSent};