


function input_tk(input_depo_with_values){
    // find input depo_with id 
    const your_input_deposit_with_text = document.getElementById(input_depo_with_values);
    // get input deposit_with value
    const your_input_deposit_values = parseFloat(your_input_deposit_with_text.value);
    // reset input box 
    your_input_deposit_with_text.value = '';
    return your_input_deposit_values;
}
function add_tk(add_id,new_amount){
    // find input depo_with id 
    const addid = document.getElementById(add_id);
    // get input deposit_with value
    const old_tk = parseFloat(addid.innerText);
    const total = old_tk + new_amount ;
    addid.innerText = total;
}
function total_balance_tk(new_amount,add){
    // find output depo_with id 
    const output_id = document.getElementById("output_Balance");
    // get input deposit_with value
    const old_tk = parseFloat(output_id.innerText);

    if(add == true){
        output_id.innerText = old_tk + new_amount ;
    }
    else{
        output_id.innerText = old_tk - new_amount ;
    }
    
}
document.getElementById('deposit_btn').addEventListener('click',function(){
    // const your_deposit_text = document.getElementById('input_deposite_values');
    // // get input deposit 
    // const your_deposit_values = parseFloat(your_deposit_text.value);
    // console.log(your_deposit_values);
    // const output_deposit_text = document.getElementById('output_deposit');
    // // get output deposit 
    // const output_deposit_values = parseFloat(output_deposit_text.innerText);
    // // console.log(output_deposit_values)
    // output_deposit.innerText = your_deposit_values;
    // // total add deposit
    // const new_deposit_tk = your_deposit_values + output_deposit_values ;
    // // console.log(new_deposit_tk);
    // // assign new deposit 
    // output_deposit_text.innerText = new_deposit_tk;

    // // show entry input 
    // your_deposit_text.value = '';

    const amount = input_tk("input_deposite_values")
    add_tk("output_deposit",amount);
    total_balance_tk(amount,true);



    // add main balnace 
    // const output_Balance = document.getElementById('output_Balance');
    // const output_Balance_values = parseFloat(output_Balance.innerText);
    // // update balance after deposit 
    // output_Balance.innerText = output_Balance_values + your_deposit_values;
})
document.getElementById('withdraw_btn').addEventListener('click',function(){
    // const your_withdraw_text = document.getElementById('input_withdraw_values');
    // // get input withdrow 
    // const your_withdraw_values = parseFloat(your_withdraw_text.value);
    // // console.log(your_withdraw_values);
    // const output_withdraw_text = document.getElementById('output_withdraw');
    // // get output withdraw
    // const output_withdraw_values = parseFloat(output_withdraw_text.innerText)
    // // console.log(output_withdraw_values)
    // output_withdraw_text.innerText = your_withdraw_values;

    // const new_withdraw_tk = your_withdraw_values + output_withdraw_values;
    // // console.log(new_withdraw_tk);
    // // add main balnace 
    // output_withdraw_text.innerText = new_withdraw_tk;
    
    // // show entry input 
    // your_withdraw_text.value = '';
    // // (-) main balnace 
    // const output_Balance = document.getElementById('output_Balance');
    // const output_Balance_values = parseFloat(output_Balance.innerText);
    // // update balance after deposit 
    // output_Balance.innerText = output_Balance_values - your_withdraw_values;


    const amount = input_tk("input_withdraw_values")
    add_tk("output_withdraw",amount)
    total_balance_tk(amount,false);
})