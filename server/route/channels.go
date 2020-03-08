package route

import (
	"github.com/gin-gonic/gin"
	// "net/http"
	// "../../common/validate/escapeHTML"
	// "../database/DatabaseMAnager"
	// "../database/repository/ChannelRepository"
	// "../database/repository/MessageRepository"
	// "../notification/NotificationMAnager"
)

func SetupChannelsRoute(r *gin.RouterGroup) {
	r.POST("/", func(c *gin.Context) {
		// const channelRepository = databaseManager.getRepository(ChannelRepository)
		// const channel = escapeHTML(c.PostForm("channel"))
		// ch := make(chan bool)
		// go channelRepository.hasName(channel, ch)
		// if <-ch{
		//     c.String(405)
		// }else if !isValidChannelName(channel){
		//     c.String(400)
		// }else{
		//     go channelRepository.insertAndGetId(channel)
		//     <- ch
		//     notificationManager.notifiClientOfNewChannel(channel)
		//     c.String(200)
		// }
		//
	})

	r.DELETE("/", func(c *gin.Context) {
		// const messageRepository = databaseManager.getRepository(MessageRepository)
		// const channelRepository = databaseManager.getRepository(ChannelRepository)
		// const channel = c.PostForm("channel")
		// ch := make(chan bool)
		// go channelRepository.hasName(channel)
		// if <-ch{
		//     //console
		//     go messageRepository.deleteByChannel(channel, ch)
		//     <-ch
		//     go channelRepository.deleteByName(channel, ch)
		//     <-ch
		//     notificationManager.notifiyClientOfDeletedChannel(channel)
		//     c.String(200)
		// }else{
		//     c.String(405)
		// }
	})
}
