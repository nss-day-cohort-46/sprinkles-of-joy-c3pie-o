const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".modal")

// export const ContactForm = () => {
//     render()
//   }

export const ContactForm = () => {
    
    const HTMLRep = `
    <div id="contact__Modal" class="modal--parent">
    <div class="modal--content">
        <h3>Contact Us!</h3>
        
        <form>
        <fieldset>
        <label for="contact-email">Email: </label>
        <input type="text" id="contact-email" name="contact-email">
        </fieldset>
        <fieldset>
        <label for="phone-Number">Phone: </label>
        <input type="text" id="phone-Number" name="phone-Number">
        </fieldset>
        <fieldset>
        <label for="message">Message: </label>
        <input type="text" id="message" name="message">
        </fieldset>
        </form>
        <button id="modal--close">Submit</button>
        
    </div>
    </div>
    `
    contentTarget.innerHTML = HTMLRep
    }
    

    eventHub.addEventListener("click", e => {
    // debugger
        if (e.target.id === "contact") {
            
            const customEvent = new CustomEvent("showContactForm")
            eventHub.dispatchEvent(customEvent)
        }
    })

    eventHub.addEventListener("showContactForm", () => {
        ContactForm()
    })

    eventHub.addEventListener("click", event => {
        if (event.target.id === "modal--close") {
          closeModal()
        }
      })
const contentContainer =  document.querySelector(".modal")
      const closeModal = () => {
        contentContainer.innerHTML = ""
      }