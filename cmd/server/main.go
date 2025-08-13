package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Toolforge API is running",
		})
	})

	router.GET("/api/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ok",
		})
	})

	err := router.Run()
	if err != nil {
		fmt.Println("router run error:", err)
	}
}
