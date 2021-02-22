import "./ContactForm.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", e => {
debugger
    if (e.target.href === "contact") {
        
        const customEvent = new CustomEvent("showContactForm")
        eventHub.dispatchEvent(customEvent)
    }
})