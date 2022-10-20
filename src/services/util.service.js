export const utilService = {
  delay,
  getRandomInt,
  makeId,
  getDemoItems,
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
  var txt = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getDemoItems() {
  return [
    {
      TotalVots: 10,
      description:
        "Don't Get Fooled Show with Big Ri and Ace College Football 2022 Week 8 Betting Picks & Predictions ⏰ Video Duration: 26:36 ...",
      name: "Easy Money 2022 l College Football Week 8 Picks  Predictions l Best Bets Handicapper Expert 10/22/22",
      thumbnail: "https://i.ytimg.com/vi/gOHCYT4sanQ/default.jpg",
      _id: "gOHCYT4sanQ",
      url:'https://www.youtube.com/watch?v=gOHCYT4sanQ',
    },
    {
      TotalVots: 10,
      description: "Girl Guild Test Prank On Angry Youtuber - ये नहीं सोचा था मैंने - Free Fire Max Get Free Diamonds: ...",
      name: "Girl Guild Test Prank On Angry Youtuber 🤣🔥 - ये नहीं सोचा था मैंने 🤬 - Free Fire Max",
      thumbnail: "https://i.ytimg.com/vi/I92gQhtAhEI/default.jpg",
      _id: "I92gQhtAhEI",
      url:'https://www.youtube.com/watch?v=I92gQhtAhEI',
    },
     {
      TotalVots: 10,
      description: "In this short video, I'm going to show you how to quickly and easily match background music to any video duration in Premiere Pro ...",
      name: "How to match your music to any video duration #premierepro #adobe",
      thumbnail: "https://i.ytimg.com/vi/zAev_FDV1xc/default.jpg",
      _id: "zAev_FDV1xc",
      url:'https://www.youtube.com/watch?v=zAev_FDV1xc',
    },
  ]
}

function _getLorem() {
  return "Lorem ipsum dolor sit amet? "
}
