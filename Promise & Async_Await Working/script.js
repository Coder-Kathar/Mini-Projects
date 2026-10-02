function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isWalk = true;
            if(isWalk){
                resolve("The dog walked with you");
            }
            else{
                reject("You didn't walk with dog");
            }
        }, 1000);
    });
}
function cleanKitchen(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isClean = true;
            if(isClean){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}
function clearTrash(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isThrown = false;
            if(isThrown){
                resolve("You thrown the trash out");
            }
            else{
                reject("You must throw the trash out rn");
            }
        }, 1500);
    });
}

// walkDog().then(value => { console.log(value); return cleanKitchen(); })
//          .then(value => { console.log(value); return clearTrash(); })
//          .then(value => { console.log(value); console.log("All the tasks are completed"); })
//          .catch(error => console.error(error));

async function doChrous(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const clearTrashResult = await clearTrash();
        console.log(clearTrashResult);

        console.log("You completed  All the works!");
    }
    catch(error){
        console.error(error);
    }
}

doChrous();