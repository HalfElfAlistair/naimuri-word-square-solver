export const getSize = (rl) => {
    return new Promise((resolve) => {
        // requests number or rows/columns
        rl.question("Enter the size of the square (e.g. 4): ", (sizeStr) => {
            resolve(sizeStr)
        })
    })
}