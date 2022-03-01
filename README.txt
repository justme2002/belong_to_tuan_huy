- Back-end has been built: ExpressJS framework on nodeJS env
- Libs has been used for this project:
    + express
    + argon2
    + body-parser (unused)
    + express-session (unused)
    + mysql
    + nodemon
    + dotenv

- init server
    + install nodeJS (essential step)
    + go to VSCode terminal ( using window terminal / bash)
    + type npm run auth to init server at URL http://localhost:4800, port=4800

- import mysql file
    + go to DB_file/account.sql, account.sql is the DB exported file from server
    + create a database name "authentication_db" (as the same with the name of the DB that has been exported)
    + import DB file into phpMyAdmin (xampp included) by using "import" function and choosing DB file (account.sql) to import

- API
    + "POST http://localhost:4800/api/auth/store" to store user registration
    + "POST http://localhost:4800/api/auth/verify" for user input verification 




