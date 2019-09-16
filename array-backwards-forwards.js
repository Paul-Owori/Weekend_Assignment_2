/**
 * Store a set of words in an array and display the contents both forward and backward.
 */

let arrayForwards = ["This", "is", "an", "array"];

const printForwards = () => {

    let i = 0
    for (i = 0; i < arrayForwards.length; i++) {
        console.log(arrayForwards[i])
    }
}

const printBackwards = () => {
    //let arrayLength = arrayForwards.length;
    let i = arrayForwards.length;;
    while (i > -1) {
        console.log(arrayForwards[i])
        i--
    }
}