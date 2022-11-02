module.exports = {
    validateQueryName: (queryName) => {
        const queryNameArr = queryName.split(" ");
        for (let i = 0; i < queryNameArr.length; i++) {
            queryNameArr[i] = queryNameArr[i].charAt(0).toUpperCase() + queryNameArr[i].slice(1).toLowerCase();
        }
        const validQueryName = queryNameArr.join(" ");
        return validQueryName;
    }
}
