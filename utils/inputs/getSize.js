export const getSize = (rl) => {
    return new Promise((resolve) => {
        // requests number or rows/columns
        rl.question("Enter the size of the square (e.g. 4): ", (sizeStr) => {
            // converts to number
            let size = +sizeStr;

            // checks if NaN, repeats the question if so
            if (Number.isNaN(size)) {
                console.log("Invalid size. Please enter a number.");
                resolve(getSize(rl))
            }

            // checks if integer, rounds and informs if not
            if (!Number.isInteger(size)) {
                console.log("Entry must be an integer, your input has been rounded.")
                size = Math.round(+sizeStr);
            }

            resolve(size)
        })
    })
}