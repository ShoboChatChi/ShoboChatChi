package route

import (
    "fmt"
	"github.com/gin-gonic/gin"
)

func SetupMessageRoute(r *gin.RouterGroup) {
	// const notificationManager = NotificationManager.getInstance()
	// const databaseManager = DatabaseManager.getInstance()

	r.GET("/init/:channel", func(c *gin.Context) {
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// const channel = c.Param("channel")
		// messagesCh = make(chan []Message)
		// go messageRepository.getBeforeSpecifiedTime(channel, Data.now(), numInitMessage, messagesCh)
		// const messages = <-messagesCh
		// c.JSON(messages)
	})

	r.GET("/all/:channel", func(c *gin.Context) {
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// const channel = c.Param("channel")
		// messagesCh := make(chan []Message)
		// go messageRepository.getAll(channel, messagesCh)
		// const messages = <-messagesCh
		// c.JSON(messages)
	})

	r.GET("/id/:id", func(c *gin.Context) {
        id := c.Param("id")
        fmt.Sprint(id)
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// messageCh := make(chan Message)
		// go messageRepository.getById(c.Param("id"), messageCh)
		// const message = <-messageCh
		// c.JSON(message)
	})

	r.GET("/time-after/:channel/:time", func(c *gin.Context) {
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// const channel = c.Param("channel")
		// const time = parseInt(c.Param("time"))
		// messagesCh := make(chan []Message)
		// go messageRepository.getAllAfterSpecifiedTime(channel, time, messagesCh)
		// const messages = <-messagesCh
		// c.JSON(messages)
	})

	r.GET("time-before/:channel/:time/:num", func(c *gin.Context) {
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// const channel = c.Param("channel")
		// const time = parseInt(c.Param("time"))
		// const num = parseInt(c.Param("num"))
		// messagesCh := make(chan []Message)
		// go messageRepository.getBeforeSpecifiedTime(channel, time, num, messagesCh)
		// const messages = <-messagesCh
		// c.JSON(messages)
	})

	r.POST("/:channel", func(c *gin.Context) {
        channel := c.Param("channel")
        fmt.Sprint(channel)
		// const sess = sessions.Default(c)
		// if sess == undifined {
		// 	c.String(500)
		// 	return
		// }
        //
		// //const contentType = ....
        //
		// const channel = c.Param("channel")
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// ch := make(chan bool)
		// go messageRepository.insertAndGetId(channel, sess.userId, c.PostForm("content"), ch)
		// <-ch
		// //prime
		// go notificationManager.notifiyClientsOfNewMessage(channel, ch)
		// <-ch
		// c.String(200)
	})

	r.POST("/:channel/:id", func(c *gin.Context) {
        channel := c.Param("channel")
        id := c.Param("id")
        fmt.Sprint(channel)
        fmt.Sprint(id)
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// const channelRepository = databaseManager.getRepository(ChannelRepository)
        //
		// const sess = sessions.Default(c)
		// if sess == undefined {
		// 	c.String(500)
		// 	return
		// }
		// const channel = c.Param("channel")
		// if !channelRepository.hasName(channel) {
		// 	c.String(405)
		// 	return
		// }
		// const messageId = c.Param("id")
		// messageCh := make(chan Message)
		// go messageRepository.getId(messageId, messageCh)
		// const message = <-messageCh
		// if message.userId == sess.userId {
		// 	ch := make(chan bool)
		// 	go messageRepository.updataById(messageId, c.PostForm("content"), ch)
		// 	<-ch
		// 	go notificationManager.notifyClientsOfChangeMessage(channel, messageId, ch)
		// 	<-ch
		// 	c.String(200)
		// } else {
		// 	c.String(405)
		// }
	})

	r.DELETE("/:channel/:id", func(c *gin.Context) {
        channel := c.Param("channel")
        id := c.Param("id")
        fmt.Printf(channel)
        fmt.Printf(id)
		// const messageRepository = databaseManager.getRepository(MessageRpository)
		// const channelRepository = databaseManager.getRepository(ChannelRepository)
        //
		// const sess = sessions.Default(c)
		// if sess == undefined {
		// 	c.String(405)
		// 	return
		// }
		// const messageId = c.Param("id")
		// const channel = c.Param("Channel")
		// if !channelRepository.hasName(channel) {
		// 	c.String(405)
		// 	return
		// }
		// messageCh := make(chan Message)
		// go messageRepository.deleteById(messageId, messageCh)
		// const message = <-messageCh
		// if message.userId == sess.userId {
		// 	ch := make(chan bool)
		// 	go messageRepository.deleteById(messageId, ch)
		// 	<-ch
		// 	notificationManager.notifyClientsOfDeleteMessage(channel, messageId)
		// 	c.String(200)
		// } else {
		// 	c.String(405)
		// }

	})
}
