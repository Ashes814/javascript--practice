"use strict";
const budget = Object.freeze([
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: "jonas"
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: "jonas"
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: "jonas"
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: "matilda"
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: "matilda"
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: "jonas"
    }
]);
const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100
});
const getLimit = (limits, user)=>limits?.[user] ?? 0;
// Pure function
const addExpense = function(state, limits, value, description, user = "jonas") {
    const cleanUser = user.toLowerCase();
    return value <= getLimit(limits, user) ? [
        ...state,
        {
            value: -value,
            description,
            user: cleanUser
        }
    ] : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza \uD83C\uDF55");
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, "Going to movies \uD83C\uDF7F", "Matilda");
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
console.log(newBudget3);
const checkExpenses = function(state, limits) {
    return state.map((entry)=>{
        return entry.value < -getLimit(limits, entry.user) ? {
            ...entry,
            flag: "limit"
        } : entry;
    });
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);
const logBigExpenses = function(state, bigLimit) {
    // let output = '';
    // for (const el of budget) {
    //   output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
    // }
    // output = output.slice(0, -2); // Remove last '/ '
    // console.log(output);
    const bigExpenses = state.filter((entry)=>entry.value <= -bigLimit).map((entry)=>entry.description.slice(-2)).join(" / ");
    console.log(bigExpenses);
};
logBigExpenses(finalBudget, 1);

//# sourceMappingURL=index.ae0d2ce7.js.map
