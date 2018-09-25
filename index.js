var electron = require("electron")
async function main() {
    console.log("main")
    try{
    await electron.app.whenReady()
    console.log("ready, wait for done")
    let x = electron.nativeImage.createFromPath("test.webp")
    console.log("done")
    }
    catch(err){
        console.log("error", err)
    }
}


main()