
const register = () => {
    const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const passwordConfirm = document.getElementById("password-confirmation").value

    if (password !== passwordConfirm) {
        document.getElementById("message").innerHTML = "different value on password confirmation"
    } else {
        try {

            const data = {
                username: username,
                password: password,
                email: email
            }
    
            const response = await fetch("http://localhost:4800/api/auth/store", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            const res = await response.json()
    
            res.success === true ? (document.getElementById("message").innerText = res.message): document.getElementById("message").innerText = res.message
    
            
    
        } catch (error) {
            console.log(error)
        }
    }


    
})
}

register()