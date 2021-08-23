  // This is Hello world program of JavaScript

  console.log("Hello World");

  'use strict'

  //let Age;             // let age = 'undefined';
  //console.log(Age);

  // variable
  let firstname, lastname = "Daily Tution", Age = 24;

  //display variable
  console.log(firstname);
  console.log(lastname);
  console.log(Age);

  //Creating a costant
  const TEMP = 12.4, NAME = "Daily";

  //Display a costant
  console.log(TEMP);
  console.log(NAME);
   
  //Literal - providing value directly in the program; create identifier with value
  let Goal = "Tutorial make happy"; // literal "Tutorial make happy"

  let reference = Goal;
  //display literal
  console.log(reference);

  // primitive data type - immutable; can't be changed
  let height = 25; // Declare variable height with value 25

  height = 32; // creates new variable location instead of changing the value
  height = "Hello" + "World"; //Concatination ; same with strings

  console.log(height);

  //Boolean type ; No quotations
  let Do = true;
  let more = false;

  //Symbols ; constructor
  let blue = symbol("Color blue");
  let white = symbol("Color White")

  blue === white //get false 
  
  /*Objects
      1. Arrays
      2. Date
      3. Regular expressions
      4. Map and WeakMap
      5. Set and WeakSet */

      // Creating an object
      const obj = {
          name: "Alexia",
          age: 20
      }; // object with properties

      //deleting properties
      delete obj.age;

      console.log(obj.name);


      obj.bags = 34; //object property with value

      console.log(obj.bags);

  //Creating an array with different data
      const a1 = [1,2,3,4,5];
      const a2 = [1,2,null,4,'five'];
      const a3 = ['hello','world','array'];

  //have an array containing an array
      const a4 = [
          [1,2,3],
          [4,5,6]
      ];

  //get no of elements in an array ; length
   console.log(a1.length);

   //get array value
   console.log(a2[4]);
      
   //change array element
   a3[0] = "Welcome";
   console.log(a3[0]);

   //display date
   const now = new Date();
   console.log(now); 

    //create map -object
  const roles = new Map();

  //used to assign roles to the users Set- to specify key and value pair to map object
  roles.set(t1,'User 1');
  roles.set(t2,'User 2');
  
  //create set
  const roles = new Set();

  //specify roles to users
  roles.add('User 1'); 

  //Escaping done to avoid quotation errors
  const str=("we took his bag, he said \"Don \'t touch my bag. \"") 

  // string concatination
  let Temp = 20.5;
  let strcat=("Weather in Kisii is:" +Temp +"\u00b0c"); //unicode degree

  console.log(strcat);

  // if...else

  let time = 15;
  if(time<12)
      console.log("Good Morning");
  else
      console.log("Good Afternoon");

      // while loop printing numbers 0-9
      let count =0;

      while(count < 10){
          console.log(count);
          count++;
      }