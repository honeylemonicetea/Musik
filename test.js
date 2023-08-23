let doc = [...document.childNodes]

function nodeChecker(node) {
    if (node.offsetWidth > 375) {
        console.log("found it")
        console.log(node)
        return node
    }
    if (node.hasChildNodes()) {
        // check the parent first   
        let grandkids = [...node.childNodes]
        grandkids.forEach((kid) => {
            return nodeChecker(kid)
        })
    } 
}


doc.forEach((node) => {
    let faultyNode = nodeChecker(node)
    console.dir(faultyNode)
})


// let d = document.querySelector(".story-text-box").childNodes
// console.dir(d[1])

