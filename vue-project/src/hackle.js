import * as Hackle from '@hackler/javascript-sdk'
const config = { debug: true }

const hacklerClient = Hackle.createInstance('sdkkey', config)

hacklerClient.onReady(function(){
    console.log("onReady")
})