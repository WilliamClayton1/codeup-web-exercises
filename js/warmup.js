// function logUser(stringArgument) {
//     if (typeof stringArgument !== 'string' || !isNaN(Number(stringArgument))) {
//         return false;
//     }
//
//     return `${stringArgument} has logged in for the day.`;
// }

console.log(logUser('will'));

let userObject = {
    username: 'JohnDoe123',
    email: 'JohnDoe123@gmail.com'
};

console.log(userObject.username);
console.log(userObject.email);

function logUser(object) {
    if (typeof object.username !== 'string' || typeof object.email !== 'string') {
        return false;
    }

    return `${object.email} has logged in for the day.`;
}

userObject.userRoles = ['admin', 'moderator', 'buyer', 'seller'];

userObject.userProfile = {
    userProfileUrl: 'myURLToPictice',
    userLocation: 'San Antonio, Texas',
    numLikes: 7
};

console.log(userObject.userProfile.userProfileUrl);