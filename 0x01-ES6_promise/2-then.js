//export default function handleResponseFromAPI (promise) {
//    const newpromise = () => {
//        promise.resolve({ status: 200, body: 'Success' });
//        promise.reject(new Error('The fake API is not working currently'));
//        promise.finally(() => {('Got a response from the API')});
//    }
//    return newpromise;
//}

export default function handleResponseFromAPI (promise) {
    return promise
        .then(() => (
            { status: 200, body: 'Success' }
        ))
        .catch(() => (
            new Error('The fake API is not working currently')
        ))
        .finally(() => (
            "Got a response from the API"
        ));
};
