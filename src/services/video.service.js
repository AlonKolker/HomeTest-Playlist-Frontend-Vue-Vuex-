
import { storageService } from "./async-storage.service"
import axios from "axios"
import { API_KEY } from "../assets/safe/api"

export const videoService = {
  query,
  save,
}


let gVidoes = (await storageService.query("videos")) || {}

async function query(searchBy = "dog") {
  console.log(gVidoes.length)
  if (gVidoes.length > 0) return gVidoes
  gVidoes = []
  console.log("try catch")
  try {
    let importedVideos
    await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchBy}videoDuration=any&key=${API_KEY} `
      )
      .then((res) => {
        importedVideos = res.data.items
        importedVideos.forEach((vid) => {
          gVidoes.push({
            _id: vid.id.videoId,
            url: "https://www.youtube.com/embed/" + vid.id.videoId,
            name: vid.snippet.title,
            description: vid.snippet.description,
            TotalVots: 10,
            thumbnail: vid.snippet.thumbnails.default.url,
          })
        })
      })
      .catch((err) => console.log(err))
    storageService.save("videos", gVidoes)
    return gVidoes
  } catch (err) {
    throw err
  }
}



function save(video) {
  return storageService.post("video", video)
}

