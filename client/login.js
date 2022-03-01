
const login = () => {
    const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    console.log(username)

    try {

        const data = {
            username: username,
            password: password,
        }

        

        const response = await fetch("http://localhost:4800/api/auth/verify", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })

        const res = await response.json()
        console.log(res)
        document.getElementById("userLogged").innerText = res.username + "has logged to our system"
        
    } catch (error) {
        console.log(error)
    }
})
}

login()