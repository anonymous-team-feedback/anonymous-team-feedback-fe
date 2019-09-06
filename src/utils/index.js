// local storage utility funtion that receives a type of method, the key for the storage item and its value, in that order.
export const storageUtil = (type, key, val) => {
    switch (type) {
        case 'setItem':
            localStorage.setItem(key, val)
            break;
        case 'removeItem':
            localStorage.removeItem(key)
            break;
        case 'getItem':
            localStorage.getItem(key)
            break;
        case 'clear':
            localStorage.clear()
            break;
        default:
            break;
    }
}