// ****** for_each loop ****** :

const proMming = ["JavaScript" , "Phthon" , "Swift" , "Ktolin" , "C++" , "C"]

// proMming.forEach(function (val) {
//   console.log(val)
// } )

// use in arrow function : 

proMming.forEach((coder, index,arr) => {
  console.log(coder , index , arr)
})


const myObject = [
  {
    languageName : "javaScript" ,
    fileName : "js" ,
    
  },
  {
    languageName : "Java" ,
    fileName : "ja" ,
    
  } ,
  {
    languageName : "Python" ,
    fileName : "py" ,
    
  }
]


myObject.forEach( (item) => {
  console.log(item)
} )



























