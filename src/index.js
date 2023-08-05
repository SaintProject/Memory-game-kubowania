document.addEventListener("DOMContentLoaded", () => {
    //card options
    const cardArray = [
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())//yeah, but this sorts the array randomly... :/

    const grid = document.querySelector(".grid")
    const resultDispay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "src/images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    

    function flipCard(){
        let cardId = this.getAttribute("data-id")
        console.log(cardArray[cardId].name)
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosenIds)
    }

    function checkForMatch(){
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        const cards = document.querySelectorAll("img")//an array of the img elements

        if (optionOneId === optionTwoId){
            // alert("You have clicked the same image!")
            cards[optionOneId].setAttribute("src", "src/images/blank.png")
            cards[optionTwoId].setAttribute("src", "src/images/blank.png")
        }
        else if (cardsChosen[0] === cardsChosen[1]){
            // alert("You found a match!")
            cards[optionOneId].setAttribute("src", "src/images/white.png")
            cards[optionTwoId].setAttribute("src", "src/images/white.png")
            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTwoId].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)
        }
        else {
            // alert("Sorry, try again!")
            cards[optionOneId].setAttribute("src", "src/images/blank.png")
            cards[optionTwoId].setAttribute("src", "src/images/blank.png")
        }
        cardsChosen = []//very quick and simple way to remove all elements! (could also use pop())
        cardsChosenIds = []
        resultDispay.textContent = cardsWon.length//could also use innerhtml

        if (cardsWon.length === cardArray.length/2){
            resultDispay.textContent = "Congratulations. You won!"
            alert("Congratulations. You won!")
        }
    }








    createBoard()
})