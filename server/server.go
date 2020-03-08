package main

import (
  "github.com/gin-gonic/gin",
  "net/http",
  "github.com/gin-contrib/sessions",
  "github.com/gin-contrib/sessions/cookie"
)

func init(){
  ch := make(chan bool)
  go NotificationManager.initialize(ch)
  <-ch
  go DatabaseManager.initialize(ch)
  <-ch

  const databaseManagaer := DatabaseManager.getInstance()
  const userRepository := databaseManagaer.getRepository(userRepository)
  const channelRespository := databaseManager.getRepository(ChannelRepository)

  for _,  channel := range(defaultChannelList){
    go channelRepository.hasName(channel, ch)
    if !(<-ch){
      go channelRepository.insertAndGetId(channel, ch)
      <-ch
    }
  }
}

func main(){
  router := gin.Default()

  store := cookie.NewStore([byte("secret")])
  router.Use(sessions.Sessions("mysession", store))

  indexRouter := router.Group("/index")
  {
    SetupIndexRoute(indexRouter)
  }

  loginRouter := router.Group("/login")
  {
    SetupLoginRoute(loginRouter)
  }

  registerRouter := router.Group("/register")
  {
    SetupRegisterRoute(registerRouter)
  }

  settingRouter := router.Group("/setting")
  settingRouter.Use(checkLogin())
  {
    SetupSettingRoute(settingRouter)
  }

  chatRouter := router.Group("/chat")
  chatRouter.Use(checkLogin())
  {
    SetupChatRoute(chatRouter)
  }

  messagesRouter := router.Group("/messages")
  messageRouter.Use(checkLogin())
  {
    SetupMessageRoute(messagesRouter)
  }

  channelsRouter := router.Group("/channels")
  channelsRouter.Use(checkLogin())
  {
    SetupChannelsRoute(channelsRouter)
  }

  router.Run(":8080")
}
