import(
  "../handler/hashHandler/hash"
  "../handler/loginHandler/redirectChatWhenLoggedIn"
  "../database/DatabaseManager"
  "../database/repository/UserRepository"
  "../../common/User"
  "../../common/validate/escapeHTML"
)
func SetupLoginRoute(r *gin.RouterGroup){
  r.GET("/", redirectChatWhenLoggedIn,  func (c *gin.Context)  {
    c.HTML("../public/login.html")
  })

  r.POST("/", func(c *gin.Context){
    sess := sessions.Default(c)
    if sess == undifined{
      c.String(401)
      return
    }
    const UserRepository := databaseManager.getRepository(UserRepository)

    const name := escapeHTML(c.PostForm("name"))
    const password := c.PostForm("password")

    userCh := make(chan User)
    go UserRepository.getByName(name, userCh)
    const user := <- userCh
    if user == undifined{
      c.String(401)
    }else if user.password != hash(password){
      c.String(401)
    }else{
      sess.userId = user.id
      sess.isLoggedin = true
      c.Redirect("/chat")
    }
  })
}
