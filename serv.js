const express = require('express')
const path = require('path')



const app = express()


app.use(express.static(path.join('public')))



app.listen(7000,()=>{
	console.log(`Server started on port 7000`)
})
