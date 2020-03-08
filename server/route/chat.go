package route

func SetupChatRoute(r *gin.RouterGroup){
  r.GET("/", func (c * gin.Context)  {
    c.HTML("../public/chat.html")
  })
}
