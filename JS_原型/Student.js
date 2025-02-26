class Student{ 
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    // introduce(){
    //     console.log("My name is ${this.name} and my score is ${this.score}")
    // }

}

const student = new Student("zidi",99); 
student.name;
student.score;
student.introduce(); // 我们并没有创建 introduce() 那为什么我们可以调用这个方法呢?  

// _proto_ 
student.__proto__; // 也是个对象, 他有自己的方法 
stduent.prototype 

stduent.prototype === student._proto_ // 打印结果为 True 


// 什么是原型 ? 