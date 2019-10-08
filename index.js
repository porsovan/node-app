const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('hey world'))

//listen to port 3000 by default
// app.listen(process.env.PORT || 3000)
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;