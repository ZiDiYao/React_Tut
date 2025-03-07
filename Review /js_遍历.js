// 不够简洁: 不推荐
let arr01 = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // apple, banana, cherry
} 

// 里面调用一个 callback func 
// 本质上: 在一个函数中嵌入自己的逻辑
let arr02 = ["apple", "banana", "cherry"];
arr02.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});


function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();  // 这里调用回调函数
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye); 



// 遍历 MAP 
let myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"]
]);

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// （适用于不确定次数的遍历） 
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// callBack 拓展
document.getElementById("myButton").addEventListener("click", () => {
    console.log("按钮被点击了！");
});
