
import { storageService } from "./async-storage.service"
import axios from "axios"

export const videoService = {
  query,
  save,
}


// let gVidoes = (await storageService.query("videos")) || {} //For preventing api exceeded
let gVidoes

async function query(searchBy = "javascript") {
  console.log(searchBy);
  // if (gVidoes.length > 0) return gVidoes //For preventing api exceeded
  gVidoes = []
  try {
    let KEY = import.meta.env.VITE_API_KEY
    let importedVideos
    await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchBy}videoDuration=any&key=${KEY} `
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
    // storageService.save("videos", gVidoes)//For preventing api exceeded
    return gVidoes
  } catch (err) {
    throw err
  }
}



function save(video) {
  return storageService.post("video", video)
}

