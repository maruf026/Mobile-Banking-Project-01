document.getElementById('add-btn').addEventListener('click',function(event){
    event.preventDefault();
    let addmoney= getInputValueById('input-addmoney');
    let addmoneyPin= getInputValueById('input-addmoney-pin');
    if (addmoneyPin===123){
        console.log('ok')
        let balance= getTextValueById('acount-balance');
        let total= balance+addmoney;
        document.getElementById('acount-balance').innerText = total;

    }


})

// document.getElementById('add-btn').addEventListener('click', function (event) {
//     event.preventDefault(); // Prevents form submission

//     let addmoney = getInputValueById('input-addmoney'); // Get input amount as a number
//     let addmoneyPin = inputValue('input-addmoney-pin'); // Get PIN as a string

//     if (addmoneyPin === '123') {
//         console.log('PIN is correct');

//         let balance = getTextValueById('acount-balance'); // Get balance as a number
//         console.log("Current Balance:", balance);
//         console.log("Add Money Amount:", addmoney);

//         let total = balance + addmoney; // Correct addition
//         console.log("Updated Balance:", total);

//         // Update the displayed balance
//         document.getElementById('acount-balance').innerText = total;
//     } else {
//         alert("Wrong PIN");
//     }
// });
