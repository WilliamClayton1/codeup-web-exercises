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
let userLanguage = users.filter((user) => user.languages.length > 2)
console.log(userLanguage);

//map
let userEmail = users.map((user) => user.email)
console.log(userEmail);

//reduce problem 1
let yearsOfExperience = users.map((user) => user.yearsOfExperience)

let totalYears = yearsOfExperience.reduce((start, year) => start += year)
console.log(totalYears);

//reduce problem 2
let emails = users.reduce((start, str) => {
    if (start.length < str.email.length) {
        start = str.email
    }
    return start
}, '');

console.log(emails);

//reduce problem 3
let StringName = users.reduce((accumulator, user, index) => {
    if (index === (users.length - 1)) {
        return accumulator +=`${user.name}.`;
    } else {
        return  accumulator += `${user.name}, `;
    }
}, 'Your Instructor are: ')
console.log(StringName)

// bonus
let languageList = users.map((user) => {
    let lang = user.languages
    let newArray = [];
    let newList = lang.find((element) => {
        console.log(element);
    })
})
