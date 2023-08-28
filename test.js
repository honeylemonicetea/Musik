// let doc = [...document.childNodes]

// function nodeChecker(node) {
//     if (node.offsetWidth > 375) {
//         console.log("found it")
//         console.log(node)
//         return node
//     }
//     if (node.hasChildNodes()) {
//         // check the parent first   
//         let grandkids = [...node.childNodes]
//         grandkids.forEach((kid) => {
//             return nodeChecker(kid)
//         })
//     } 
// }


// doc.forEach((node) => {
//     let faultyNode = nodeChecker(node)
//     console.dir(faultyNode)
// })


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);