package main

import (
	"github.com/ShoboChatChi/ShoboChatChi/route"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func init() {
	// ch := make(chan bool)
	// go NotificationManager.initialize(ch)
	// <-ch
	// go DatabaseManager.initialize(ch)
	// <-ch
	//
	// const databaseManagaer = DatabaseManager.getInstance()
	// const userRepository = databaseManagaer.getRepository(userRepository)
	// const channelRespository = databaseManager.getRepository(ChannelRepository)
	//
	// for _,  channel := range(defaultChannelList){
	//     go channelRepository.hasName(channel, ch)
	//     if !(<-ch){
	//         go channelRepository.insertAndGetId(channel, ch)
	//         <-ch
	//     }
	// }
}

func main() {
	router := gin.Default()

	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("mysession", store))

	indexRouter := router.Group("/index")
	route.SetupIndexRoute(indexRouter)

	loginRouter := router.Group("/login")
	route.SetupLoginRoute(loginRouter)

	registerRouter := router.Group("/register")
	route.SetupRegisterRoute(registerRouter)

	settingRouter := router.Group("/setting")
	// settingRouter.Use(checkLogin())
	route.SetupSettingRoute(settingRouter)

	chatRouter := router.Group("/chat")
	// chatRouter.Use(checkLogin())
	route.SetupChatRoute(chatRouter)

	messagesRouter := router.Group("/messages")
	// messageRouter.Use(checkLogin())
	route.SetupMessageRoute(messagesRouter)

	channelsRouter := router.Group("/channels")
	// channelsRouter.Use(checkLogin())
	route.SetupChannelsRoute(channelsRouter)

	router.Run(":8080")
}
