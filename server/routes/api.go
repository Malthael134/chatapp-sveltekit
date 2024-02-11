package api

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	// "github.com/gorilla/websocket"
)

var router = gin.Default()

func Run(addr string) {

	setup(router)

	err := router.Run(addr)

	if err != nil {
		panic("API crashed")
	}

	fmt.Println("API is running")

}

// type templateRoute struct {
// 	Route string
// 	Name  string
// }

type fileRoute struct {
	Route string
	Path  string
}

func setup(r *gin.Engine) {
	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	/** Load pages & templates */
	// r.LoadHTMLGlob("public/**/*.html")

	// var templates = []templateRoute{}

	var files = []fileRoute{
		{Route: "/chat", Path: "./public/views/index.html"},
	}

	for _, file := range files {
		r.StaticFile(file.Route, file.Path)
	}

}
