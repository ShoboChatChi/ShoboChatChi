package route

import(
  "../handler/hashHandler/hash"
  "../database/DatabaseManager"
  "../database/repository/UserRpository"
  "../notification/NotificationManager"
)

func SetupSettingRoute(r *gin.RouterGroup){
  const notificationManager := NotificationManager.getInstance()
  r.GET("/", func(c *gin.Context){
    c.HTML("../public/setting.html")
  })

  r.PUT("/username", func(c *gin.Context){
    const sess := sessions.Default(c)
    if sess == undefined{
      c.String(401)
      return
    }
    const databaseManager := DatabaseManager.getInstance()
    const userRepository := databaseManager.getRepository(UserRepository)
    const userId := sess.userId
    const newName := c.PostForm("name")

    const userCh := make(chan User)
    go userRepository.getById(userId, userCh)
    const registeredUser := <- userCh

    const ch := make(chan bool)
    go userRepository.hasName(newName, ch)
    if <- ch{
      c.String(401)
    }else if !isValidUsername(newName){
      c.String(400)
    }else{
      go userRepository.updateNameById(userId, newName, ch)
      <- ch
      notificationManager.notifyClientsOfChangedUsername(registerdUser.name, newName)
      c.String(200)
    }
  })

  r.PUT("/userpass", func(c *gin.Context){
    const sess := sessions.Default(c)
    if sess == undifined{
      c.String(401)
      return
    }

    const databaseManager := DatabaseManager.getInstance()
    const userRepository := databaseManager.getRepository(UserRepository)

    const userId := sess.userId
    const newPassword := c.PostForm("password")
    if !isValidUserpass(newPassword){
      c.String(400)
    }
    ch := make(chan bool)
    go userRepository.ulpdataPassById(userId, hash(newPassword), ch)
    <- ch
    c.String(200)

  })

}
