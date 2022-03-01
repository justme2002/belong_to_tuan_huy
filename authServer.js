// express and dotenv configuration

require("dotenv").config()
const express = require("express")

const app = express()
app.use(express.json())

// import body-parser

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw())


// import DB

const connection = require("./DB")

// CORS integrated

const cors = require("cors")
app.use(cors())

//import argon2 hash lib

const argon2 = require("argon2")

// Authentication router (shortcut), recommend using Router or Controller instead

app.post("/api/auth/store", async (req, res) => {
    const id = Math.floor(Math.random() * 100000000)
    const { username, password, email } = req.body

    if (!username || !password || !email) return res.json({
        success: false,
        message: "invalid infomation"
    })


    try {
        const sql = "INSERT INTO account VALUES (?, ?, ?, ?)"
        const hashed = await argon2.hash(password)
        await connection.query(sql, [id, username, hashed, email])
        res.json({
            success: true,
            message: "user register successfully"
        })

    } catch (error) {
        console.log(error)
    }
    
})

// verify user to login and save user data in a session


app.post("/api/auth/verify", (req, res) => {

    const { username, password } = req.body
    
    if(!username && !password) return res.status(404).json({
        success: false,
        message: "error username or password"
    })

    const sql = "SELECT * FROM account WHERE username = ?"
    connection.query(sql, username, async (err, result) => {
        
        try {
            const encodedPassword = result[0].password
            await argon2.verify(encodedPassword, password)

            res.json({
                success: true,
                message: "Welcome back user",
                username: username
            })
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                message: "500 external error"
            })
        }
    
        
    })
    
})



// init PORT for authentication server

const PORT = 4800
app.listen(process.env.PORT || PORT, () => console.log(`Authentication server has been init-ed at port ${PORT}`))
