// Task_01
function task_01() {
  const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };

  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = "false";

  const keys = Object.keys(user);

  for (const elem of keys) {
    const key = elem;
    const value = user[elem];
    console.log(`${key}: ${value}`);
  }
}
// ================================================
