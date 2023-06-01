// function printNumbers (from, to){
//   let id = setTimeout(function inner () {
//     if(from === to){
//       console.log(from);
//       clearInterval(id);
//       return;
//     }
//     console.log(from++);
//     setTimeout(inner, 1000);
//   }, 1000);
// }

// printNumbers(4, 8);


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// function cashDecorator(someFunc){
//   let map = new Map();
//   return function (arg){
//     if(map.has(arg)){
//       console.log('from cashe');
//       return map.get(arg);
//     }else{
//       let newValue = someFunc(arg);
//       map.set(arg, newValue);
//       console.log('new calculate');
//       return newValue;
//     }
//   }
// }

// function sum(a){
//   return a + 10;
// }

// sum = cashDecorator(sum);
// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(3));
// console.log(sum(1));


//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



// function work(a, b){
//   console.log(a + b);
// }

// function spy(someFunc){
//   inner.calls = [];
//    function inner (...args){
//     inner.calls.push([...args]);
//     return someFunc(...args);
//   }
//   return inner;
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (let args of work.calls){
//   console.log('call:' + args.join());
// }


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


// function f(x){
//   console.log(x);
// }

// function delay(someFunc, ms){
//   return function(...args){
//     setTimeout(()=> {
//       someFunc.apply(this, args);
//     }, ms);
//   }
// }

// let f1000 = delay(f, 1000);
// let f2000 = delay(f, 2000);

// f1000('test');
// f2000('test');


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////




// function debounce(someFunc, ms){
//   let key = false;
//   return function (...args){
    
//     if(!key){
//       key = true;
//       someFunc.apply(this, args);
//       setTimeout(()=>{
//         key = false;
//       }, ms);
//     }else{
//       return;
//     }
//   }
// }

// let f = debounce(console.log, 1000);

// f(1);
// f(2);

// setTimeout(()=> f(3), 100);
// setTimeout(()=> f(3), 1100);
// setTimeout(()=> f(3), 1500);


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// function f(a){
//   console.log(a);
// }

// function throttle(someFunc, ms){
//   let key = false;
//   let savedThis = null;
//   let savedArgs = null;
//   return function inner (...args){

//     if(!key){
//       key = true;
//       someFunc.apply(this, args);
//       setTimeout(()=>{
//         key = false;
//         if(savedArgs){
//           inner.apply(savedThis, savedArgs);
//           savedArgs = null;
//         }
//       }, ms);
      
//     }else{
//       savedThis = this;
//       savedArgs = args;
//       return;
//     }
//   }
// }

// let f1000 = throttle(f, 1000);

// f1000(1);
// f1000(2);
// f1000(3);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



// let graph = { A: ['B', 'D'], B: ['C', 'N', 'Z'], D: ['E', 'F'], F: ['S'] }

//   async function fetchFlights(from) {
//     let arr = await new Promise(resolve => {
//       resolve(graph[from]);
//     })
//     return arr;
//   }

//   findPath('A', 'S', fetchFlights).then((resolve) =>  console.log(resolve));

//   function findPath(start, finish, fetchFlights) {

//     return new Promise(resolve => {
//       inner(resolve);
//     })
    
//    async function inner(resolve, currentPoint = start, currentPath = '') {

//     let path = currentPath + currentPoint;
    
//     let citiesArr = await fetchFlights(currentPoint);

//     if (!citiesArr) {
//       return;
//     }
//     for (let i = 0; i < citiesArr.length; i++) {
//       if (citiesArr[i] === finish) {
//         path += citiesArr[i];
//         resolve(path);
//         return;
//       }
//       await inner(resolve, citiesArr[i], path);
      
//       if(path === start && i === citiesArr.length - 1){
//         resolve('new error!!! no such a way!!!')
//       }
//     }
//   }
// }

// async function findPath(start, finish, fetchFlights){

//   let arr = [start];
//   let obj = {};

//   while(arr.length){
//     let currentPoint = arr.pop();
//     let newPortion = await fetchFlights(currentPoint);
    
//     if(newPortion){
//       for (let i = 0; i < newPortion.length; i++) {
//         arr.push(newPortion[i]);
//       }
//       obj[currentPoint] = newPortion;
//     }
//   }

//   return new Promise(resolve => {
//     inner(resolve);
//   })
 
//   function inner(resolve, path = '', currentPoint = start ){
//     let newPath = path + currentPoint;
//     let arr = obj[currentPoint];
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i] === finish){
//         newPath += arr[i];
//         resolve(newPath);
//       }
//       if(!obj[arr[i]]){
//         continue;
//       } else{
//         inner(resolve, newPath, arr[i]);
//       }
//       if(newPath === start && i === arr.length -1){
//         resolve('new error!!! no such a way!!!');
//       }
//     }
    
//   }

// }

/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////