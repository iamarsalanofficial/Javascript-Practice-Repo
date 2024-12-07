// ES5

// function Student(name, age, city)
// {
//     this.stdName = name;
//     this.stdAge = age;
//     this.stdCity = city;
//     this.getName = function (){
//         return this.stdName;
//     };
// }
// const std1 = new Student("faraz", 24, "karachi");
// const std2 = new Student("farooq", 25, "lahore");
// console.log(std1 ,std1.getName());
// console.log(std2.getName());


// ES6
// class Student {
//     constructor(name, age, city)
//     {
//         this.stdName = name;
//         this.stdAge = age;
//         this.stdCity = city;
//     }
//     getName = () => {
//         return this.stdName;
//     };
// }
// const std3 = new  Student ("hussain", 21, "karachi");
// console.log(std3 ,std3.getName());


// class Student {
//     constructor(name, age, city){
//         this.stdName = name;
//         this.stdAge = age;
//         this.stdCity = city;
//     };    
// };

// class School extends School {
//     constructor(schoolID, schoolName, name, age, city){
//         this.sclName = schoolName;
//         this.sclId = schoolID;
//         this.stdName = name;
//         this.stdAge = age;
//         this.stdCity = city;
//     };    
// };


// const std1 

// const greet = () =>{
//     return "Muhammad Arsalan"
// };

// const stdObj = () => {
//     return {
//         name: "Ali Ahmed",
//         age: 22,
//         city: "karachi",
//         email: "ali@gmail.com",
//         status: true,
//     };
// };

// export { greet, stdObj };

// News App
const cardDiv = document.getElementById('cardSection');
const input = document.getElementById('inputField');
let search = () => {

    const API_KEY = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=b1dab7be26854f629656ae1f25e2ff48`;
    fetch(API_KEY)
    .then((res) => res.json())
    .then((data) => {        
        data.articles.map((e,i) => {
            console.log(data.e);
            cardDiv.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${e.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text text-truncate" style="max-width: 150px;">${e.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>`;
    
        });
    })
    .catch((error) => {
        console.log(error);
        
    });
}