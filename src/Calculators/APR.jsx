const emi = 25000;
const interestRate = 7;
const loanTenure = 5;
const principalLoanAmount = 1262550;



const apr = calculateApr(principalLoanAmount, emi, loanTenure);
console.log("Annual Percentage Rate (APR):", apr.toFixed(2));
