function calculateSquare(number){
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(typeof number !== 'number') {
                return reject(new Error ('Argument of type number is expected!'))
            }
            const result = number * number;
            return resolve(result);
        }, 1000)
    });
    return promise;
}

calculateSquare(2)
.then(value => {console.log('Success:' + value)},
        reason => {console.log('Error: ' + reason)});

console.log('____________________________________')

function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1)
}

function capitalize1(text) {
    return new Promise(function (resolve, reject){
        if(typeof text !== 'string'){
            return reject(new Error('Not a string'))
        }
        const result = text[0].toUpperCase() + text.substr(1)
        return resolve(result)
    }
    )
}

capitalize1("whatisithis")
.then(value => {
    console.log(value);
    return calculateSquare(5)
})
.then(value2 => {
    console.log(value2)},
    reason => {
        console.log('Error happend' + reason);
    }
);
