package handler

func checkLogin(c *gin.Context){
  const sess := sessions.Default(c)
  if sess == undifined || !sess.IsLoggedin{
    c.Redirect("/")
  }
  else{
    next()
  }
}

func redirectChatWhenLoggedIn(c *gin.Context){
  const sess := session.Default(c)
  if sess != undefined && sess.isLoggedin{
    c.Redirect("/chat")
  }else{
    next()
  }
}
