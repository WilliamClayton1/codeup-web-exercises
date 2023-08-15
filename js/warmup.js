function logUser(stringArgument) {
    if (typeof stringArgument !== 'string' || !isNaN(Number(stringArgument))) {
        return false;
    }

    return `${stringArgument} has logged in for the day.`;
}

console.log(logUser('will'));

