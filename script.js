let string = ""
let buttons = document.querySelectorAll('button')
let input = document.getElementById('inputBox')
let arr = Array.from(buttons)

arr.forEach(function(button){
    button.addEventListener('click', function(e){
        // console.log(e.target);

    //     if(string.includes('.') && e.target.innerText ==='.'){
    //         return;
    // }

        if(e.target.innerHTML === '='){
            string = eval(string)
            input.value = string;
        }

        else if(e.target.innerHTML === 'AC'){
            string = ''
            input.value = string
        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.substring(0, string.length-1)
            input.value = string
        }
        else{
        string =  string + e.target.innerHTML
        input.value = string
        }
    })
})
// Array.from(buttons).forEach(function(button){
//     button.addEventListener('click', function(e){

//         if(e.target.innerHTML === '='){
//             string = eval(string)
//             document.querySelector("input").value = string
//         }
//         else if((e.target.innerHTML === 'C')){
            
//                 string = ""
//                 document.querySelector("input").value = string
            
//         }
//         else{
//             console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector("input").value = string
            
//         }
        
//     })
// })