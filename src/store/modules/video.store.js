import { videoService } from "../../services/video.service"

export const videoStore = {
  state: {
    videos: [],
    slectedVideo: null,
    searchBy: "",
  },
  getters: {
    videos({ videos }) {
    return videos
    },
    selectedVideo({ slectedVideo }) {
      return slectedVideo
    },
    searchBy({ searchBy }) {
      return searchBy
    },
  },
  mutations: {
    setVideos(state, { videos }) {
      state.videos = videos
    },

    setSearchBy(state, { text }) {
      state.searchBy = text
    },
    setSelectedVideo(state, { selectedVid }) {
        state.slectedVideo = selectedVid
    },
  },
  actions: {
    async loadVideos({ commit,dispatch,getters ,state }) {
      console.log('loadVideos',state.selectedVid);
      // let searchBy = getters.searchBy
      try {
        const videos = await videoService.query()
        commit({ type: "setVideos", videos })
        // if(state.slectedVideo === null){
          let selectedVid = videos[0]
          await dispatch('setSelectedVideo',{selectedVid} )
        // }
      } catch (err) {
        console.log("itemStore: Error in loadItems", err)
        throw err
      }
    },
    async setSelectedVideo({ commit }, { selectedVid }) {
        commit({ type: "setSelectedVideo", selectedVid })
      },
      async setSearchBy({ commit,dispatch }, { text }) {
      commit({ type: "setSearchBy", text })
      await dispatch('loadVideos' )

    },
  },
}
