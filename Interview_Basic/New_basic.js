// In javascript tere is a question asked the what is [JAVASCRIPT EXECUTION CONTEXT]

//in js when ever we run the js in browser [{}] -> Global.E.C will make automatically 
// the G.E.C is also have different in ever js engin so when we run on browser the G.E.C is window object and the G.E.C is made they refer to the this keyword that hold the content of to the G.E.C
//this -> in browser is window's object

//They are of different type

//1. Global Execution Context
//2. Function or Functional Execution Context
//3. Eval Execution Context -> these is not in use generally but we know about these

// how js code execute
//they execute in two phase
//1. Memory Creation Phase also called as Creation phase
//2. Execution Phase  
//example how they look

let val1 = 10
let val2 = 5
function addNum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10 , 2)

//steps of these example
//step -> 1. Global execution or global envoirment and first allocate into this
//step -> 2. Memory Phase -> val1 -> undefined 
//                   val2 -> undefined
//                   addNum -> defination
//                   result1 -> undefined
//                   result2 -> undefined

// step 1 and step 2 are called first cycle 

//second cycle
//step -> 3. Execution Phase 
//           val1 <- 10
//           val2 <- 5
//           addNum -> | new enviroment     | -> These will delete automatically after execution
//                     |        +           | -> Memory Phase -> val1 = val2 = total -> undefined
//                     |  execution thread  | -> Execution Context -> num1 -> 10 
//                                                                    num2 -> 5
//                                                                    total -> 15 ->> these return to G.E.C
//          result1 -> 15
//          for result2 they step2 and 3 will run and the answer is -> 12
//
//
// because of these box the step2 and step3 will run one more time

 
//*************************call stack********************************/