const addTransBtn = document.querySelector(".add-transaction")
const cancelTransBtn = document.querySelector(".cancel")
const saveTransBtn = document.querySelector(".save")
const transPanel = document.querySelector(".add-transaction-panel")
const transNameInput = document.querySelector("#name")
const transAmountInput = document.querySelector("#amount")
const transCategorySelect = document.querySelector("#category")
const incomeArea = document.querySelector(".income-area")

let selectedCategory
let categoryIcon

const showPanel = () => {
	transPanel.style.display = "flex"
}

const closePanel = () => {
	transPanel.style.display = "none"
	clearInputs()
}

const checkForm = () => {
	if (
		transNameInput.value !== "" &&
		transAmountInput.value !== "" &&
		transCategorySelect.value !== "none"
	) {
		console.log("ok")
		createNewtrans()
		closePanel()
	} else {
		alert("Complete all the fields")
	}
}

const createNewtrans = () => {
	const newTransaction = document.createElement("div")
	newTransaction.classList.add("transaction")

	selectCategory()

	selectIcon(selectedCategory)

	newTransaction.innerHTML = `<p class="transaction-name">${categoryIcon}${transNameInput.value}</p>
    <p class="transaction-amount">${transAmountInput.value} zł<button class="delete"><i class="fas fa-times"></i></button></p>`

	incomeArea.append(newTransaction)
}

const clearInputs = () => {
	transNameInput.value = ""
	transAmountInput.value = ""
	transCategorySelect.selectedIndex = 0
}

const selectCategory = () => {
	selectedCategory =
		transCategorySelect[transCategorySelect.selectedIndex].textContent
}

const selectIcon = category => {
	switch (category) {
		case "[ + ] Income":
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>'
			break
		case "[ - ] Shopping":
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>'
			break
		case "[ - ] Food":
			categoryIcon = '<i class="fas fa-hamburger"></i>'
			break
		case "[ - ] Entertainment":
			categoryIcon = '<i class="fas fa-film"></i>'
			break
	}
}

addTransBtn.addEventListener("click", showPanel)
cancelTransBtn.addEventListener("click", closePanel)
saveTransBtn.addEventListener("click", checkForm)

console.dir(transCategorySelect)
console.dir(transCategorySelect[0].textContent)
console.dir(transCategorySelect[1].textContent)
console.dir(transCategorySelect[2].textContent)
console.dir(transCategorySelect[transCategorySelect.selectedIndex].textContent)
