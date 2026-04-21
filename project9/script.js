function profileUpadate(){

    const user = {
        name:"suabsh",
        age:25,
        email:"vijay@gmail.com"

    }
    user.email = "subashnaren82@gmail.com";
    user.isActive = true;

    console.log(user)

}
// profileUpadate()


function shoppingCartTotal(){
const cart = [
    {name:"Shirt",price:500},
    {name:"Shoes",price:1500},
    {name:"Cap",price:300},
]
const sum = cart.map(v => v.price).reduce((a,v) => a+v,0);
console.log(sum)


}


// shoppingCartTotal();





function findSpecificObject() {
    const users = [
        {name:"vijay",age:25},
        {name:"Arun",age:30},
        {name:"Kumar",age:28},
    ];

    const result = users.find(users => users.name === "Arun");
    console.log(result);


}
//  findSpecificObject()


function addItemToArray(){
    let products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Bag", price: 1500 }
];


products.push({ name: "Watch", price: 2000 });
 
 products = products.filter(products => products.name !== "Shoes");
 products  = products.filter(products => products.price>1000);





console.log(products);


}

// addItemToArray()

function totalCount(){ 

const fruits = {
    apple:2,
    banana:5,
    mango:3
}

console.log(Object.keys(fruits).length)

}

// totalCount()






// 1.
function login(){
    let username = "subash";
    let password = "";
    if (username && password){
        console.log("login successful")
    }else{
            console.log("please enter your password")
    }
}

// login()


// 2.
function createVariableToStoreProductName(){
    let name = "samsung";
    let price = 16000;
    let stock = "5"
  
    console.log(`${name} costs ${price} and only ${stock} stock`)
}



// createVariableToStoreProductName();


// 3.
function totalMark(){
    let maths = 90;
let history = 80;
let English = 50;

const total = maths + history + English;

console.log(total);
}

// totalMark();

``


// 4.
 function swap(){
    let a = 12;
    let b = 23;
    [a,b]=[b,a]
    console.log(a,b)
 }

//  swap()


// 5.
function voteEligibility(){
    let age = 7;
    if (age >= 18){
        console.log(`your eligible for vote`)
    }else{
        console.log(`Your are not eligible for work`)
    }
}


// voteEligibility()


// 6.
function markGrade(){
    let marks = 80;
    if (marks>=90){
        console.log(`Grade A`)
    } else if(marks >= 75){
        console.log(`Grade B`)
    } else {
        console.log(`Fail`)
    }
}

// markGrade()

// 7.
function movieTicket(){
    let Age = 13;
    let child = 100;
    let Adult = 200;
    if (Age < 12){
        console.log(`child Rs: ${child}`)
    }else {
        console.log(`Rs ${Adult} for age above 11`)
    }
}

// movieTicket()



// 8.
function oddEvenNumber(){
    let number = 3;
    if (number%2 == 0){
        console.log(`This is Even number`)
    }else {
        console.log(`This is Odd number`)
    }
}


// oddEvenNumber()


// What is leadcode 


// 9.
function positiveNegativeZero() {
    let num = 34;
    if (num < 0){
        console.log(`Negative number`)
    } else if (num > 0 ){
        console.log(`Positive number`)
    }else{
        console.log(`zero`)
    }
}

// positiveNegativeZero()




// 10.

function celciusToF(celcius){
    let F = (celcius * 9/5)+32;
    return F
}

// console.log(celciusToF(4))


// 11.
function findL(a,b){
    if (a>b){
        return a;
    } else{
        return b;
    }
}

// console.log(findL(34,345))


// 12.formula - EMI=P×r×(1+r)n​
//                  (1+r)n−1

// P → Loan amount
// r → monthly interest rate
// n → number of months





// 13.
function showPanel(role){
    if (role == "admin"){
        console.log("Show Admin panel")
    } else{
        console.log("Show user dashboard")
    }
}

// showPanel("sdfsdf");





// 14.

function islogginTrue(){
    let loggin = true;
    if (loggin){
        console.log("Welcome")
    }else{
        console.log("Please login")
    }
}

// islogginTrue();






// 15
function discountPrice(price){

    
    let discountprice = price * 0.10;
    let final = price - discountprice;
    return final

}

// console.log(discountPrice(200));


// 16.

function checkPassword( P1,P2){
    if(P1 == P2){
        console.log("Password Matched")
    } else{
        console.log("Password not matched ")
    }

}

// checkPassword("subash","kjh")


// 17.
function allow(login,admin){
    if (login && admin){
        console.log("access granted")
    }else{
        console.log("access denied")
    }
}

// allow("subash", "sdf");


// 18.
function greet(name){
    console.log(`hellow ${name}`)
}


// greet("subash")







// 12.2
function removeStudents (){
    const students = ["Arun", "Bala", "Kumar", "Subash"];
    const removed = students.filter(name => name !== "Subash");
    console.log(removed)
}




// removeStudents()



















