const addTransBtn = document.querySelector(".add-transaction")
const cancelTransBtn = document.querySelector(".cancel")
const saveTransBtn = document.querySelector(".save")
const transPanel = document.querySelector(".add-transaction-panel")
const transNameInput = document.querySelector("#name")
const transAmountInput = document.querySelector("#amount")
const transCategorySelect = document.querySelector("#category")

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
	} else {
		alert('Complete all the fields')
	}
}

const clearInputs = () =>{
    transNameInput.value = ''
    transAmountInput.value = ''
    transCategorySelect.selectedIndex = 0
}

addTransBtn.addEventListener("click", showPanel)
cancelTransBtn.addEventListener("click", closePanel)
saveTransBtn.addEventListener("click", checkForm)

console.dir(transCategorySelect)
