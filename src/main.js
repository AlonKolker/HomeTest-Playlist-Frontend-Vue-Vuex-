import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { store } from './store'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas)
library.add(fab)




import './assets/styles/styles.scss'

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)
.use(store).mount("#app");

// app.use(router)
// app.use(store)
// app.mount('#app')
