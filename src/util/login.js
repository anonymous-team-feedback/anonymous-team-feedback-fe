exports.removeAuthInfo = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
}
exports.saveAuthInfo = (token, id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("_id", id);
}