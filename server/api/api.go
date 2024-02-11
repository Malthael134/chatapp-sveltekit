package api

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	// "github.com/gorilla/websocket"
)

var router = gin.Default()

func Run() {

	setup(router)

	err := router.Run(":8080")

	if err != nil {
		panic("API crashed")
	}

	fmt.Println("API is running")

}

func setup(r *gin.Engine) {
	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
}
