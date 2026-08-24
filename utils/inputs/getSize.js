export const getSize = (rl) => {
    return new Promise((resolve) => {
        // requests number or rows/columns
        rl.question("Enter the size of the square (e.g. 4): ", (sizeStr) => {
            // converts to number
            let size = +sizeStr;

            // checks if NaN, 0, or 1, repeats the question if so
            if (Number.isNaN(size) || size < 2) {
                console.log("Invalid size. Please enter a valid number greater than 1.");
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