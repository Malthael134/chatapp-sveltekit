package example

import "fmt"

type Book struct {
	title  string
	author string
	isRead bool
}

func (b Book) info() string {
	return fmt.Sprintf(b.title + "is written by" + b.author)
}

func main() {
	book := Book{
		title:  "The Witcher",
		author: "Andrzej Sapkowski",
		isRead: false,
	}

	fmt.Println(book.info())
	fmt.Println(book.isRead)

	fmt.Println(book.info())
	fmt.Println(book.isRead)

}
