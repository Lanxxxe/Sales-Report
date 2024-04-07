// HTML returns
let pondo_sales = document.querySelector('#pondo-sales');
let avail_membership = document.querySelector('#avail-membership');
let gaming_sales = document.querySelector('#gaming-sales');
let canteen_sales = document.querySelector('#canteen-sales');
let topup_sales = document.querySelector('#topup-sales');

// Inputs


// Button
let calculate_button = document.querySelector('#calculate-button');

const calculation = () => {
    let pondo = document.querySelector('#pondo');
    let canteen = document.querySelector('#canteen');
    let membership = document.querySelector('#membership');
    let salary = document.querySelector('#salary');
    let expenses = document.querySelector('#expenses');
    
    let to_be_deduct = Number(canteen.value) + Number(salary.value) + Number(expenses.value);
    
    pondo_sales.innerHTML = Number(pondo.value);
    topup_sales.innerHTML = Number(pondo.value) - (Number(canteen.value) + Number(membership.value));
    avail_membership.innerHTML = Number(membership.value) ;
    canteen_sales.innerHTML = Number(canteen.value);
    gaming_sales.innerHTML =  Number(pondo.value) - Number(to_be_deduct) ; 
};

calculate_button.addEventListener('click', () => {
    calculation();
});
