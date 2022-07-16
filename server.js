// import dependencies
// import express from 'express'
const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')
const port = 8000

// express config

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

// class init section
// 
class Company {
    constructor() {
        this.id = faker.random.numeric()
        this.name = faker.company.companyName() 
        this.address = {}
        this.address.street = faker.address.street()
        this.address.city = faker.address.city()
        this.address.state = faker.address.state()
        this.address.zip = faker.address.zipCode()
        this.address.country = faker.address.country()
        this.catchphrase = faker.company.bs()
    }
}

class User {
    constructor() {
        this.id = faker.random.numeric()
        this.name = faker.name.findName() 
        this.email = faker.internet.email()
        this.phone = faker.phone.phoneNumber()
        this.password = faker.internet.password()
    }
}

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company()
    res.json(newCompany)
})

app.get("/api/users/new", (req, res) => {
    const newUser = new User()
    return res.json(newUser)
})

app.get("/api/user/company", (req, res)=>{
    const newPerson = new User()
    const newCompany = new Company()
    const newEmployee = { newPerson, newCompany }
    res.json(newEmployee)
})


// port listening

app.listen(port, ()=>console.log('Listening to port : ${port}'))