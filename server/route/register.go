package route

import (
	// "github.com/ShoboChatChi/ShoboChatChi/handler"
	"github.com/gin-gonic/gin"
)

func SetupRegisterRoute(r *gin.RouterGroup) {
	// const databaseManager = DatabaseManager.getInstance()

	// r.GET("/",
	// 	handler.redirectChatWhenLoggedIn,
	// 	func(c *gin.Context) {
	// 		c.HTML("../pubilc/register.html")
	// 	})

	r.POST("/", func(c *gin.Context) {
		// const sess = sessions.Default(c)
		// if sess == undifined {
		// 	c.String(401)
		// 	return
		// }
		// const UserRepository = databaseManager.getRepository(UserRepository)
		//
		// const name = escapeHTML(c.PostForm("name"))
		// const password = c.PostForm("password")
		// ch := make(chan bool)
		// go UserRepository.hasName(name, ch)
		// if <-ch {
		// 	c.String(401)
		// } else if !isValidUsername(name) || !isValidUserpass(password) {
		// 	c.String(400)
		// } else {
		// 	userIdCh := make(chan int)
		// 	go UserRepository.insertAndGetId(name, hash(password), userIdCh)
		// 	const userId = <-userIdCh
		// 	sess.userId = userId
		// 	sess.isLoggedin = true
		// 	c.Redirect("/chat")
		// }
	})

}
