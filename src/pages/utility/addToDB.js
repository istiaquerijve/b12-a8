const getStorCard = () => {
    const storCardSTR = localStorage.getItem("list");
    if (storCardSTR){
        const storCardData = JSON.parse(storCardSTR)
        return storCardData
    }
    else{
        return [];
    }
}

const addToStorDB = (id) => {
    const storCardData = getStorCard()
    if(storCardData.includes(id)){
        alert("INSTALLED")
    }
    else{
        storCardData.push(id)

        const data = JSON.stringify(storCardData)
        localStorage.setItem("list", data)
        
    }

} 

export {addToStorDB, getStorCard}