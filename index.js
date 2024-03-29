const express = require("express");
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json({limit: '50mb'}))
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods",'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();
})

app.get("/",(req,res)=>{
    res.send(states)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("running 8080 PORT"));

const states = [{"code": "AN","name": "Andaman and Nicobar Islands"},
{"code": "AP","name": "Andhra Pradesh"},
{"code": "AR","name": "Arunachal Pradesh"},
{"code": "AS","name": "Assam"},
{"code": "BR","name": "Bihar"},
{"code": "CG","name": "Chandigarh"},
{"code": "CH","name": "Chhattisgarh"},
{"code": "DH","name": "Dadra and Nagar Haveli"},
{"code": "DD","name": "Daman and Diu"},
{"code": "DL","name": "Delhi"},
{"code": "GA","name": "Goa"},
{"code": "GJ","name": "Gujarat"},
{"code": "HR","name": "Haryana"},
{"code": "HP","name": "Himachal Pradesh"},
{"code": "JK","name": "Jammu and Kashmir"},
{"code": "JH","name": "Jharkhand"},
{"code": "KA","name": "Karnataka"},
{"code": "KL","name": "Kerala"},
{"code": "LD","name": "Lakshadweep"},
{"code": "MP","name": "Madhya Pradesh"},
{"code": "MH","name": "Maharashtra"},
{"code": "MN","name": "Manipur"},
{"code": "ML","name": "Meghalaya"},
{"code": "MZ","name": "Mizoram"},
{"code": "NL","name": "Nagaland"},
{"code": "OR","name": "Odisha"},
{"code": "PY","name": "Puducherry"},
{"code": "PB","name": "Punjab"},
{"code": "RJ","name": "Rajasthan"},
{"code": "SK","name": "Sikkim"},
{"code": "TN","name": "Tamil Nadu"},
{"code": "TS","name": "Telangana"},
{"code": "TR","name": "Tripura"},
{"code": "UK","name": "Uttarakhand"},
{"code": "UP","name": "Uttar Pradesh"},
{"code": "WB","name": "West Bengal"}]