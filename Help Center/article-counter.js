window.onload = () => {
    //get collections
    const collections = [...document.querySelectorAll("[kdv-collection-name]")];

    //get references
    const referenceElements = document.querySelectorAll(".collection-reference");
    let references = [];
    referenceElements.forEach(n => references.push(String(n.innerText)));
    
    collections.forEach((collection) => {
        const name = collection.getAttribute("kdv-collection-name");
        const filteredArr = references.filter(n => n === name);
        
        collection.querySelector("[kdv-collection-counter]").innerText = filteredArr.length;
    })
}