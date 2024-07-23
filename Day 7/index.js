let bookObj={
    title:"30 Days Of Javascript",
    author:"Prakhar",
    year:2024,

    getInfo:function(){
        return this.title
    },

    updateYear: function(yr){
        this.year=yr
    },

    library:{
        name:"The Learners CLub",
        books:[{}]
    }
}
console.table(bookObj)

console.log(bookObj.title);
console.log(bookObj.author);
console.log(bookObj.getInfo());

bookObj.updateYear(2028)

console.log(bookObj.library.name);

bookObj.library.books.push({title: "java"})
bookObj.library.books.push({title: "javascript"})
bookObj.library.books.push({title: "python"})

for(let i=0;i<bookObj.library.books.length;i++){
    if(bookObj.library.books[i].title == null){
        continue
    }
    console.log(bookObj.library.books[i]);
}

//for in loop

for (const key in bookObj) {
    const element = bookObj[key];
    console.log(element);
}

const keys=Object.keys(bookObj)
console.log(keys);

const values=Object.values(bookObj)
console.log(values);