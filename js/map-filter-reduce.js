const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//filter
let userLanguage = users.filter((user) => {
    return user.languages.length > 2;
})
console.log(userLanguage);

//map
let userEmail = users.map((user) => {
    return user.email
})
console.log(userEmail);

//reduce problem 1
let yearsOfExperience = users.map((user) =>  {
    return user.yearsOfExperience
})

let totalYears = yearsOfExperience.reduce((start, year) => {
    return start += year
})
console.log(totalYears);

//reduce problem 2
let usersEmail = users.map((user) => {
    return user.email
})

let email = usersEmail.reduce((start, str) => {

})


//reduce problem 3
let strName = users.reduce((start, user) => {
    return start += `${user.name}, `
}, `Your instructors are: `)
console.log(strName);

// bonus
// let languageList = users.map((user) => {
//     return user.languages;
// })



// let newList = languageList.reduce((start, user) => {
//     return start += `${user}, `
// }, ' ')
// console.log(newList);