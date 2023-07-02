const addTransBtn = document.querySelector(".add-transaction")
const cancelTransBtn = document.querySelector(".cancel")
const saveTransBtn = document.querySelector(".save")
const transPanel = document.querySelector(".add-transaction-panel")
const transNameInput = document.querySelector("#name")
const transAmountInput = document.querySelector("#amount")
const transCategorySelect = document.querySelector("#category")
const incomeArea = document.querySelector(".income-area")
const expenseArea = document.querySelector(".expenses-area")
const availableMoney = document.querySelector(".available-money")
const deleteAllTransactionsBtn = document.querySelector(".delete-all")
const lightBtn = document.querySelector(".light")
const darkBtn = document.querySelector(".dark")
let root = document.documentElement

let fundsArray = [0]
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
		createNewtrans()
		closePanel()
	} else {
		alert("Complete all the fields")
	}
}

const removeTransaction = e => {
	if (e.target.nodeName === "I") {
		let amountToDelete = e.target.parentElement.parentElement.textContent
		amountToDelete = parseFloat(amountToDelete)
		const indexofDeletedItem = fundsArray.indexOf(amountToDelete)
		fundsArray.splice(indexofDeletedItem, 1)
		addFunds()
		e.target.closest("div").remove()
	}
}

const createNewtrans = () => {
	const newTransaction = document.createElement("div")
	newTransaction.classList.add("transaction")
	selectCategory()
	selectIcon(selectedCategory)

	newTransaction.innerHTML = `<p class="transaction-name">${categoryIcon}${transNameInput.value}</p>
    <p class="transaction-amount">${transAmountInput.value} zł<button class="delete"><i class="fas fa-times"></i></button></p>`

	fundsArray.push(parseFloat(transAmountInput.value))
	addFunds()
	assignTransaction(newTransaction)
}

const assignTransaction = transaction => {
	if (transAmountInput.value < 0) {
		expenseArea.append(transaction)
	} else {
		incomeArea.append(transaction)
	}
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

const addFunds = () => {
	const sum = fundsArray.reduce((total, amount) => total + amount)
	availableMoney.textContent = sum
}

const deleteAllTransactions = () => {
	incomeArea.innerHTML = "<h3>Income:</h3>"
	expenseArea.innerHTML = "<h3>Expenses:</h3>"
	fundsArray = [0]
	availableMoney.textContent = "0 zł"
}

const changeToLightMode = () => {
	root.style.setProperty("--first-color", "#ffecd1")
	root.style.setProperty("--second-color", "#001524")
	root.style.setProperty("--border-color", "rgba(0, 0, 0, 0.2)")
}

const changeToDarkMode = () => {
	root.style.setProperty("--first-color", "#001524")
	root.style.setProperty("--second-color", "#ffecd1")
	root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.2)")
}

addTransBtn.addEventListener("click", showPanel)
cancelTransBtn.addEventListener("click", closePanel)
saveTransBtn.addEventListener("click", checkForm)
incomeArea.addEventListener("click", removeTransaction)
expenseArea.addEventListener("click", removeTransaction)
deleteAllTransactionsBtn.addEventListener("click", deleteAllTransactions)
lightBtn.addEventListener("click", changeToLightMode)
darkBtn.addEventListener("click", changeToDarkMode)
