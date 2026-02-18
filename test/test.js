// STATE
let expenses = [];

// DOM references
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalSpan = document.getElementById("total");

// EVENT
addBtn.addEventListener("click", function () {

  const title = titleInput.value;
  const amount = Number(amountInput.value);

  // VALIDATION
  if (title === "" || amount <= 0) {
    alert("Enter valid data");
    return;
  }

  // ADD TO ARRAY
  expenses.push({
    title: title,
    amount: amount
  });

  // CLEAR INPUTS
  titleInput.value = "";
  amountInput.value = "";

  // UPDATE UI
  renderExpenses();
  updateTotal();
});


// RENDER FUNCTION
function renderExpenses() {

  expenseList.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {

    const li = document.createElement("li");

    li.textContent = expenses[i].title + " - " + expenses[i].amount;

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      expenses.splice(i, 1);
      renderExpenses();
      updateTotal();
    });

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
  }
}


// TOTAL CALCULATION
function updateTotal() {

  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  totalSpan.textContent = total;

  // BRANCHING EXAMPLE
  if (total > 1000) {
    totalSpan.style.color = "red";
  } else {
    totalSpan.style.color = "black";
  }
}
