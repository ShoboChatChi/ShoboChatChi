package route

import "github.com/gin-gonic/gin"

func SetupChatRoute(r *gin.RouterGroup){
    r.GET("/", func (c * gin.Context)  {
        // TODO
        // c.HTML(200, "../../client/public/index.html", )
    })
}
