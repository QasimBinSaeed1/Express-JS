import fs from "fs/promises";
let a = fs.writeFile("qasim.txt", "My name is Qasim Bin Saeed").then(() => {
        console.log("1st File is Created");
    }).catch((error) => {
        console.error("1st File cannot be Created");
    });
console.log("1st Code Ends...");
let b = fs.appendFile("qasim.txt", "\nMy name is Qasim Bin Saeed Don").then(() => {
    console.log("2nd File is Created");
}).catch((error) => {
    console.error("2nd File cannot be Created");
});
console.log("2nd Code Ends...");
