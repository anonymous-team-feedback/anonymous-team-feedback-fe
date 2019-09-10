export async function removeAuthInfo() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    console.log("auth info removed");
  } catch (err) {
    console.log(err);
  }
}
export async function saveAuthInfo(token, id) {
  try {
    localStorage.setItem("token", token);
    localStorage.setItem("_id", id);
    console.log("auth info saved");
  } catch (err) {
    console.log(err);
  }
}

export async function getAuthInfo() {
  try {
    return {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("_id")
    };
  } catch (err) {
    console.log(err);
  }
}
