// alab 308.5.1
console.log("Part#1");
let num = [2,4,6,8,10];
let names = ['Rajeen', 'Iskander', 'Yoon', 'Chenhao', 'Amber'];
function sumFunction(numArray){
    //It takes an array of number and returns the sum.
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i];
        //console.log(sum);
    }
    return sum;
}
console.log(" - The sum of the array is", sumFunction(num));
function avgFunction(numArray){
    return sumFunction(numArray) / numArray.length;
}
console.log(" - The Average of the array is", avgFunction(num));
function longestString(namesArray){
    //Set the longest name variable to the first name in the array.
    let longestName = namesArray[0];
    //loop through each name in the array.
    for(let i = 1; i < namesArray.length; i++){
        //if the current name length is longer than the longest name's length the set it as the new longest.
        if(longestName.length < namesArray[i].length){
            longestName = namesArray[i];
        }
    }
    return longestName;
}
console.log(" - The longest string of the array is", longestString(names));


function stringsLongerThan(arr, num) {
    return arr.filter(str => str.length > num);
}

// Example usage
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // ["hello", "morning"]



function stringsLongerThan(stringArray,number){
    //This function take an array of strings and a number and outputs the strings that have the length greater than the number.
    let newArray = [];
    //Empty array created
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i].length > number){
            newArray.push(stringArray[i]);
            //This for loop checks the strings individually and compares their length to the number
            //If the above condition is true, then it adds the string to the empty array 'newArray'
        }
    }
    return newArray;
}
console.log(" - The string longer than the numbers are:", stringsLongerThan(names,5));

console.log('===============================Part 2===========================================')

const DATA = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

//can also do this below with this 
//array.sort(function(a, b){return a.age - b.age});

function sortByAge(){
    // this function sorts the age from the smaller number to higher numbers (can also do a.age.length)
    // a paamets will have the age key value fo the first object in the array and will compare it to the 2nd one.
    //Then the 2nd one will become the 'a' and will be compared to the 3rd. 
    return DATA.sort((a,b) => a.age - b.age);
};

console.log(sortByAge());

function filterArrayByAge(){
    //putting a plus infront of object converts string value to integer (i.e "40" = 40).
    return DATA.filter((object) => +object.age < 50);
}
console.log(filterArrayByAge());


function change(){
    return DATA.map((object) => {
        //Make a new key value with a key being "Job" and value being object.occupation.
        object["Job"] = object.occupation;
        //Then we will delete exsisting occupation key value.
        delete object.occupation;
        object.age = ((+object.age)+1).toString();
        return object;
    })
}
console.log(change());

const sumOfAges = DATA.reduce((accumulator, currentValue) => accumulator + (+currentValue.age), 0);      
//When using reduce() method on a object array, you must supply an initial value which is 0. 
let avgAgeOfDATA = sumOfAges / DATA.length;

console.log(`The sum of the ages of the object array is ${sumOfAges}`);
console.log(`The Average of the ages of the object array is ${avgAgeOfDATA}`);

console.log("");
console.log("=============================Part#3=====================================");


function incrementAge(object) {

    for (let i = 0; i < object.length; i++) {

        if ("age" in object[i]) {        // Checks if the age key exist in the object array.
            object[i].age = (+object[i].age + 1).toString();
        } else {
            object[i].age = "0"                 //adds the age field with value of 0 to the array object if the age key does not exist.
        }
        object[i].update_at = new Date();       //adds the update_at field and sets the value to current date and time.

    }

    return object;

}

console.log(incrementAge(DATA));

function copyIncrement(object){

    const copyDATA = [...object];    //Creates the copy of the object array.

    for (let i = 0; i < copyDATA.length; i++){
            copyDATA[i].age = (+copyDATA[i].age + 1).toString();    //increments the age by one.
            copyDATA[i].update_at.setTime(815788860000);            //Sets the date to Nov 8th 1995.
        }

    return copyDATA;
}

console.log("=======================COPY=============================");
console.log(copyIncrement(DATA));

