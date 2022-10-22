import { httpService } from "./http.service"
import { utilService } from "./util.service"
import { storageService } from "./async-storage.service"
import axios from "axios"
import { API_KEY } from "../assets/safe/api"


export const videoService = {
  query,
  save,
  // remove,
  // getById,
}

// _createItems()
// query()
let gVidoes = await storageService.query('videos') || {}

async function query(searchBy = "dog") {
  
// return _createItems()
console.log(gVidoes.length)
if(gVidoes.length>0) return gVidoes
gVidoes = []
console.log('try catch')
  try {
    let importedVideos
    // let vidoes = []
    await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchBy}videoDuration=any&key=${API_KEY} `
      )
      .then((res) => {
        importedVideos = res.data.items
        importedVideos.forEach((vid) => {
          gVidoes.push({
            _id: vid.id.videoId,
            url: 'https://www.youtube.com/embed/' + vid.id.videoId,
            name: vid.snippet.title,
            description: vid.snippet.description,
            TotalVots: 10,
            thumbnail: vid.snippet.thumbnails.default.url,
          })
        })
      }).catch(err=>console.log(err))
      storageService.save('videos',gVidoes)
    return gVidoes
  } catch (err) {
    throw err
  }
}

// async function getById(itemId) {
//   return storageService.get("item", itemId)
// }

function save(video) {
  return storageService.post("video", video)
}

function remove(videoId) {
  // return httpService.delete(`item/${itemId}`)
  return storageService.remove("video", videoId)
}

function _createItems() {
  // let videos = JSON.parse(localStorage.getItem("video"))
  // if (!videos) {
   let videos = utilService.getDemoItems()
   return videos
  // }
  // localStorage.setItem("video", JSON.stringify(videos))
}
