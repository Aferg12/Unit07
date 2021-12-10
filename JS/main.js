

document.querySelector('#title').innerHTML = "Pizza Emporium"
document.querySelector('#slogan').innerHTML = "Literal Objects"






const pizza = {
    crust: "thin",
    size: "small",
    topping: "pepperoni",
    buildPizza: function() {
        console.log('buildPizza method has been called')
        message = `We are now baking your ${pizza.size} pizza on ${pizza.crust} crust with ${pizza.topping} and cheese`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        message = `You will need to purchase ${flour} cups of flour and 1 pound of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message;

        if (pizza.crust === 'thin') four = 1
        message = `You will need to purchase ${flour} cup of flour and 1 pound of ${pizza.topping}`
        document.querySelector('#feedback').textContent = message;

    }

}


document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')


document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')



document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')

document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')





document.querySelector('#order').addEventListener('click', pizza.buildPizza)



document.querySelector('#makeList').addEventListener('click', pizza.shoppingList)


let feedback = document.querySelector('#feedback')