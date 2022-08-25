function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    var read_ans = "";
    if (this.read) {
      read_ans = "already read";
    }
    else { read_ans = "not read yet"}

    return this.title + " by " + this.author + ", " + this.pages + " pages, " + read_ans
  }
}

// This is just a test
theHobbit = new Book("book", "book", 123, true)
console.log(theHobbit.info())
