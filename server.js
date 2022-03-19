const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            "street": faker.address.streetName(), 
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipcode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}
console.log(new User());
console.log(new Company());

app.get("/api/users/new", (req, res)=>{
    const newUser = new User()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res)=>{
    const newCompany = new Company()
    res.json(newCompany)
})

app.get("/api/user/company", (req,res)=>{
    const results = {
        "user": new User(),
        "company": new Company()
    }
    res.json(results)
//     const newUser = new User()
//     newUser.company = new Company()
// This way will return a new user and their company not a seperate company.
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );
