
var userLoggedIn = false;
var itemNames = false;
var userIndex = null;
var itemIndex = null;

var shopInfo = {
    shopName: "Zara",
    address: "Manhattan Avenue, New York",
    uniqueCode: "NY656",
    userInfo: [
        {
            name: "Angelina",
            surname: "Jolie",
            age: 47,
            birthday: "4.06.1975",
            username: "angel123",
            password: "jolie123"
        }
    ],
    clothingItems: [
        {
            itemName: "Blue jeans",
            category: "Trousers",
            price: 50,
            stockQuantity: 456
        }
    ]
}
//Add users
function addUsers(user){
    shopInfo.userInfo.push(user);
    console.log(`${user.name} ${user.surname} has been added.`);
};

//Add users call functions argument
addUsers(
    {
        name: "Daniel",
        surname: "Mariano",
        age: 23,
        birthday: "3.16.1985",
        username: "daniel123",
        password: "mariano123"
    }
);

// Remove users
function removeUser(id){
    userLoggedIn = false;
    userIndex = null;
    console.log(`${shopInfo.userInfo[id].name} has been removed.`);
    shopInfo.userInfo.splice(id, 1);
}

removeUser(0);

//Add Items
function addItems(item){
    shopInfo.clothingItems.push(item);
    console.log(`${item.itemName} has been added to the list.`) 
}

function removeItem({username,password},id){
    shopInfo.userInfo.forEach(e =>{
        if(e.username == username && e.password == password){
            userLoggedIn = true;
            shopInfo.clothingItems.forEach(item =>{
                console.log(`${item.itemName} has been removed.`);
                shopInfo.clothingItems.splice(id, 1);
            })
        }
    })
    if(!userLoggedIn){
        userLoggedIn = false;
        console.log("Invalid username or password. Try again!");
    }
}

removeItem({username: "daniel123", password: "mariano123"},1)

//Add items and stocks call functions argument
addItems(
    {
        itemName: "Nike shoes",
        category: "Shoes",
        price: 1050,
        stockQuantity: 123
    }
)

//Add stocks
function addStocks(item, quantity){
    shopInfo.clothingItems.forEach(element => {
        if(element.itemName == item){
            element.stockQuantity += quantity;
            console.log(`${element.itemName} has been updated. The new stocks is ${element.stockQuantity}.`)
        }
    })
}

addStocks("Nike shoes", 11);

// Add to cart

function addToCart({username, password},{item, quantity}){
    shopInfo.userInfo.forEach((element, index) => {
        if(element.username == username && element.password == password){
            userLoggedIn = true;
            userIndex = index;
            shopInfo.clothingItems.forEach((e,index) => {
                if (e.itemName == item){
                    itemNames = true;
                    itemIndex = index;
                    shopInfo.clothingItems[itemIndex].stockQuantity -= quantity;
                    console.log(`Thank you for purchasing. Please wait our confirmation of your order.`);
                    console.log(`Great! your order has been confirmed.`);
                    console.log(`____________________________________`)
                    console.log(`| ------------- ${shopInfo.shopName} ------------- |`)
                    console.log(`| -- ${shopInfo.address} -- |`)
                    console.log(`| ------------ ${shopInfo.uniqueCode} ------------- |`)
                    console.log(`|                                  |`)
                    console.log(`| Client: ${shopInfo.userInfo[userIndex].name} ${shopInfo.userInfo[userIndex].surname}  `)
                    console.log(`| ${quantity} -----------         ${e.itemName} |`)
                    console.log(`| Your bill is:         $${shopInfo.clothingItems[index].price * quantity}      |`);
                    console.log(`____________________________________`)
                }
                
            });
            if(!itemNames){
                itemNames = false;
                console.log("Item is not defined")
            }
        }
    })
    if(!userLoggedIn){
        userLoggedIn = false;
        console.log("Invalid username or password. Try again!");
    }
}

// Add to cart call function
addToCart(
    {
        username: "daniel123", 
        password: "mariano123"
    },
    {
        item: "Nike shoes",
        quantity: 3
    }
)













