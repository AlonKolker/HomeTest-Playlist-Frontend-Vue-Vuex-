import { createStore } from 'vuex'
import { videoStore } from './modules/video.store'

export const store = createStore({
  strict: true,
  modules: {
    videoStore
  },
})

