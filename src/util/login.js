export async function removeAuthInfo() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("firstName");
    console.log("auth info removed");
  } catch (err) {
    console.log(err);
  }
}
export async function saveAuthInfo(token, id, name) {
  try {
    localStorage.setItem("token", token);
    localStorage.setItem("_id", id);
    localStorage.setItem("firstName", name)
    console.log("auth info saved");
  } catch (err) {
    console.log(err);
  }
}

export async function getAuthInfo() {
  try {
    return {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("_id"),
      firstName: localStorage.getItem("firstName")
    };
  } catch (err) {
    console.log(err);
  }
}
