class Book {
    title: string;
    author: string;
    isRead: boolean;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.isRead = false;
    }
    
    info(): string {
        return `"${this.title}" is written by "${this.author}".`;
    }

    read(): void {
        this.isRead = true;
        console.log(`Read ${this.title}.`)
    }

}

let book = new Book("The Witcher", "Andrzej Sapkowski");

console.log(book.info())
console.log(book.isRead)

book.read()
console.log(book.isRead)


