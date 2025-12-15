// Aave Earn Modal JavaScript
// You can modify this file to add your custom functionality

document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("modalOverlay")
  const amountInput = document.getElementById("amountInput")
  const quickAmountBtns = document.querySelectorAll(".quick-amount-btn")

  // Simulated balance
  const balance = 2.45

  // Quick amount buttons
  quickAmountBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const percentage = Number.parseInt(btn.dataset.amount)
      const amount = ((balance * percentage) / 100).toFixed(4)
      amountInput.value = amount
    })
  })

  // Interact button click - Connect Wallet flow
  interactButton.addEventListener("click", () => {
    // Add loading state
    interactButton.classList.add("loading")

    // Simulate wallet connection
    setTimeout(() => {
      interactButton.classList.remove("loading")
      interactButton.classList.add("success")

      // Reset after showing success
      setTimeout(() => {
        interactButton.classList.remove("success")
        // Change button text to "Deposit" after connection
        interactButton.querySelector(".button-text").textContent = "Deposit Now"
      }, 1500)
    }, 2000)
  })

  // Expose functions globally so you can call them from other scripts
  window.AaveEarnModal = {
    getButton: () => interactButton,
  }
})
