import { videoService } from "../../services/video.service"

export const videoStore = {
  state: {
    videos: [],
    slectedVideo: null,
    filter: "",
  },
  getters: {
    videos({ videos, filter }) {
      if (filter === "") return videos
      return videos.filter((video) => video.comment.toLowerCase().includes(filter))
    },
    selectedVideo({ slectedVideo }) {
        console.log(slectedVideo)
      return slectedVideo
    },
  },
  mutations: {
    setVideos(state, { videos }) {
      state.videos = videos
    },

    setFilter(state, { text }) {
      state.filter = text
    },
    setSelectedVideo(state, { selectedVid }) {
        state.slectedVideo = selectedVid
    },
  },
  actions: {
    async loadVideos({ commit,dispatch }) {
      try {
        const videos = await videoService.query()
        commit({ type: "setVideos", videos })
        let selectedVid = videos[0]
        await dispatch('setSelectedVideo',{selectedVid} )
        // commit({ type: "setSelectedVideo", video: videos[0] })
      } catch (err) {
        console.log("itemStore: Error in loadItems", err)
        throw err
      }
    },
    async setSelectedVideo({ commit }, { selectedVid }) {
        commit({ type: "setSelectedVideo", selectedVid })
      },
    setFilter({ commit }, { text }) {
      commit({ type: "setFilter", text })
    },
  },
}
