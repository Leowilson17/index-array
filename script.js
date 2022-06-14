// 1. at() method
//  To display the index element value
let student_mark = [40,50,20,30,10];
let display = student_mark.at(3); 
let display = student_mark . at (-3); 
console.log(display);   // return index value
console.log (student_mark)  // return array

// 2. indexOf()
//  To show the element index position
let mobiles = ['Apple', 'Samsung', 'Realme', 'Redmi', 'Apple'];
let check_state = mobiles . indexOf('Redmi');  
console.log (check_state);  // return index position
let check_state_2 = mobiles . indexOf('Apple', 2);  
console.log(check_state);   // return last element index position

// 3. lastIndexOf()
// To show same value array but display last element  index position
let last = ['Banana','Pineapple', 'Banana'];
let found = last . lastIndexOf("Banana"); 
console.log(found); // return last element index position

// 4. includes()
// To Check the array elements true or false
let games = ['pubg', 'clashofclans', 'freefire', 'subway-suffer'];
let check_game = games . includes('pubg'); // return true 
let games_check = games . includes('COC'); // return false
console.log(check_game);  // return length and array

// fill()
// 5. To show method changes all elements in an array
var fill_method = [20,30,10,2];
var show = fill_method . fill (22, 1, 3); // return length and fill particular element 1 to 3 (index value)
var show_1 = fill_method . fill(50,2);   // return length and fill after position value 2 position
var show_2 = fill_method . fill(100);  // return length and fill full array
console.log(show);

// 6. copyWithin()
// To Show start the length again change to start index position
let range = [10,230,40,30,50]
let disPlay = range.copyWithin(1,3,5); // (target, start, end)
console.log(disPlay);
