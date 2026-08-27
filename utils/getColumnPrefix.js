export const getColumnPrefix = (rows) => {
    // gets the current amount of rows, used as a column index to calculate letters for a prefix
    const index = rows.length;
    let prefix = "";
    // loops through the rows and adds the column letters to a prefix variable, used to work out the next row
    for (let i = 0; i < index; i++) {
        prefix += rows[i][index];
    }
    return prefix;
}