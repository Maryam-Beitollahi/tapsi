const user = {
  name: "mari",
  age: 32,
  address: "tehran",
};
console.log(user["name"]);
const selectedProperty = "name";
console.log(user[selectedProperty]);
user.name = "ali";
delete user.address;
console.log(user);

const items = [1, 2, 3, "mari"];
console.log(items);
console.log(items[0]);
items[4] = "hasan";
console.log(items);

let x = 10;
x = x + 5;
x++;
console.log(x);
console.log(x + 5, x / 2);

const userName = "mari";
const userLastName = "beitollahi";
console.log(userName + " " + userLastName);
console.log("4" - "saheb");

const totalPrice = 100_000;
const limit = 1000;
const isFree = totalPrice < limit;
console.log(isFree);

console.log(1 === "1");
console.log(1 == "1");
console.log(2 != "2");
console.log(2 !== "2");