package route

import(
  "../handler/loginHandler/redirectChatWhenLoggedIn",
)

func SetupIndexRoute(r *gin.RouterGroup){
  r.GET("/", redirectChatWhenLoggedIn, func (c *gin.Context)  {
    next()
  })
}
