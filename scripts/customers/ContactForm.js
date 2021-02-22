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
        
        <button id="submit">Submit</button>
        </form>
    </div>
    </div>
    `
    contentTarget.innerHTML = HTMLRep
    }

    eventHub.addEventListener("showContactForm", ContactForm)