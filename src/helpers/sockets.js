
module.exports = 
    function (io){
        let users = {}
        io.on('connection', socket =>{
            console.log("New socket connection")

            socket.on("text", async (json) => {
                console.log("text server")
               
            })
 
        })


        
    }