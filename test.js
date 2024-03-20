console.log("hello");


const getUserFromDb = (username, onFoundCallcack) => {


    setTimeout(() => {
        onFoundCallcack({
            username,
            psss: "12345",
            id:1
        })

    }, 3000);
}

getUserFromDb("giorgi", (foundUser) => {
    if(foundUser.id === 1) {
        console.log("firstUser");
    }
});
