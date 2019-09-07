exports.removeAuthInfo = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    console.log("auth info removed");
  } catch (err) {
    console.log(err);
  }
};
exports.saveAuthInfo = async (token, id) => {
  try {
    localStorage.setItem("token", token);
    localStorage.setItem("_id", id);
    console.log("auth info saved");
  } catch (err) {
    console.log(err);
  }
};

exports.getAuthInfo = async () => {
  try {
    return {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("_id")
    };
  } catch (err) {
    console.log(err);
  }
};
