const income = document.getElementById('income');
const iType = document.getElementById('income-type');
const submit = document.getElementById('submit');


const expense = document.getElementById('expense');
const eType = document.getElementById('expense-type');
const submitExpense = document.getElementById('submit-expense');


const dataDivIncome = document.getElementById('data-div-income');
const dataDivBalance = document.getElementById('data-div-balance');
const dataDivTotalExpense = document.getElementById('data-div-totalExpense');

const detailDivIncome = document.getElementById('detail-div-income');
const detailDivExpense = document.getElementById('detail-div-expense');


let iVal = 0;
let balance = 0;

submit.addEventListener('click', ()=> {
	iVal += +(income.value);
	balance += +(income.value);
	detailDivIncome.innerHTML = `<h4>Income</h4>`
	dataDivIncome.innerText = `Income: ${iVal}`;
	const div = document.createElement('div');
	detailDivIncome.appendChild(div);
	div.innerText = `${iType.value}: ${income.value}`;
	income.value = "";
	iType.value = "";
});


let outgo = [];
let totalExpense = 0;

submitExpense.addEventListener('click', ()=> {
	if(balance<expense.value){		
			alert('Too Expensive!')
			return;
	}

	totalExpense = totalExpense + +(expense.value)
	dataDivTotalExpense.innerText = `Total Expense: ${totalExpense}`
	balance -= expense.value;
	outgo.push({value: expense.value, type: eType.value});
	expense.value = '';
	detailDivExpense.innerText = '';
	detailDivExpense.innerHTML = '<h4>Expense</h4>';

	outgo.map(expVal => {
		const div = document.createElement('div');
		detailDivExpense.appendChild(div);
		div.innerText = `${expVal.type} ${expVal.value} (${(expVal.value/iVal*100).toFixed(1)}%)`; 
		dataDivBalance.innerText = `Balance:${balance}`;
		
			
	// let data = 0;
	// let data = expVal.value;
	// console.log(data)
	})

});

// {
//   const div = d3.create("div")
//       .style("font", "10px sans-serif")
//       .style("text-align", "right")
//       .style("color", "white");

//   div.selectAll("div")
//     .data(data)
//     .join("div")
//       .style("background", "steelblue")
//       .style("padding", "3px")
//       .style("margin", "1px")
//       .style("width", d => `${d * 10}px`)
//       .text(d => d);

//   return div.node();
// }



