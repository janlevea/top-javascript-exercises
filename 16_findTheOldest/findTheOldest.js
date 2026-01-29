const currentYear = new Date().getFullYear();
let ageOfOldestPerson = 0;
let oldestPerson;

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let ageOfOldestPerson = 0;
    let oldestPerson;

    for (let i = 0; i < people.length; i++) {
        if (ageOfOldestPerson === 0) {
            if (people[i].yearOfDeath === undefined) {
                ageOfOldestPerson = currentYear - people[i].yearOfBirth;
                oldestPerson = people[i];
            }
            else {
                ageOfOldestPerson = people[i].yearOfDeath - people[i].yearOfBirth;
                oldestPerson = people[i];
            }
        }
        else {
            let age = 0;
            if (people[i].yearOfDeath === undefined) {
                age = currentYear - people[i].yearOfBirth;
            }
            else {
                age = people[i].yearOfDeath - people[i].yearOfBirth;
            }
            if (age > ageOfOldestPerson) {
                ageOfOldestPerson = age;
                oldestPerson = people[i];
            }
        }
    }
    return oldestPerson; 
};

// Do not edit below this line
module.exports = findTheOldest;
