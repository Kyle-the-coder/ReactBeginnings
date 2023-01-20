const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker')
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const createUser = () => {

    const newUser ={
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
    return newUser;

}

const createProduct = () => {
    const newFake = {
        companyId: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const newFakeUser = createUser();
console.log(newFakeUser);

app.get("/api/companies/new", (req, res) =>{
    res.json(newFakeProduct)
});

app.get("/api/user/new", (req, res) =>{
    res.json(newFakeUser)
});


app.get("/api/user/company", (req, res) =>{
    res.json([newFakeUser, newFakeProduct])
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

