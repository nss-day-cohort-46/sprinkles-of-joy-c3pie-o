import { authHelper } from "../auth/authHelper.js"
import { customerLogin, getCustomer } from "./CustomerProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".form__register")

let categories = []

export const RegisterForm = () => {
  render()
}

const render = () => {
  if (!authHelper.isUserLoggedIn()) {
    contentTarget.innerHTML = `
      <h3>Register for a customer account</h3>
      <p>Already have an account? Login <a href="#" id="link__login">here</a>.</p>
      <form>
        <fieldset>
        <label for="register-firstName">First: </label>
        <input type="text" id="register-firstName" name="register-firstName">
        </fieldset>
        <fieldset>
        <label for="register-lastName">Last: </label>
        <input type="text" id="register-lastName" name="register-lastName">
        </fieldset>
        <fieldset>
        <label for="register-email">Email: </label>
        <input type="text" id="register-email" name="register-email">
        </fieldset>
        <fieldset>
        <label for="register-password">Password: </label>
        <input type="password" id="register-password" name="register-password">
        </fieldset>
        <fieldset>
        <input type="checkbox" id="register-rewards" name="register-rewards">
        <label for="register-rewards">Yes, I would like to join the rewards program. </label>
        </fieldset>
        <button id="customerRegister">Register</button>
      </form>
    `
  }
}

eventHub.addEventListener("showRegisterForm", RegisterForm)

const saveCustomer = customer => {
  let stringifyObj = JSON.stringify(customer)
  // debugger
  return fetch('http://localhost:8088/customers', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: stringifyObj
  })
}

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "customerRegister") {
      const firstName = document.getElementById("register-firstName").value
      const lastName = document.getElementById("register-lastName").value
      const email = document.getElementById("register-email").value
      const password = document.getElementById("register-password").value
      const rewards = document.getElementById("register-rewards").value


      // Make a new object representation of a note
      const newCustomer = {
          // Key/value pairs here
          name: `${firstName} ${lastName}`,
          email: email,
          rewardsMember: (rewards === "on"),
          password: password,
      }

      // Change API state and application state
      
      saveCustomer(newCustomer)
      
      
  }
})

eventHub.addEventListener("click", evt => {
  if (evt.target.id === "link__login") {
    contentTarget.innerHTML = ""

    const customEvent = new CustomEvent("showLoginForm")
    eventHub.dispatchEvent(customEvent)
  }
})
