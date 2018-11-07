const cardList_div = document.querySelector("#card_list");
const search_text = document.querySelector("#search_text");
const search_btn = document.querySelector("#search_btn");
const js_playlist = document.querySelector("#js-playlist");

const UI = {
  /* Input 태그 세팅*/
  setInputArea: () => {
    const inputArea = document.querySelector(".js-search");
    inputArea.addEventListener("keyup", e => {
      if (e.which === 13) SoundCloudAPI.getTracks(inputArea.value);
    });
  },
  /*검색 버튼 세팅*/
  setIconButon: () => {
    const searchButton = document.querySelector(".js-submit");
    searchButton.addEventListener("click", () => {
      SoundCloudAPI.getTracks(inputArea.value);
    });
  },
  /*reset 버튼 세팅*/ 
  setResetButton: () => {
    const resetButton = document.querySelector("#js-reset");
    resetButton.addEventListener("click", () => {
      localStorage.clear();
      sidebar.innerHTML = null;
    });
  },
  /**/
  setPlayList: () => {
    const sidebar = document.querySelector("#js-playlist");
    sidebar.innerHTML = localStorage.getItem("playlist");
  }
};

/* 1. 검색 */

js_playlist.innerHTML = localStorage.getItem("playlist");

/* 2. SoundCloud API  사용하기 */

const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },

  getTrack: keyword => {
    SC.get("/tracks", {
      q: keyword
    }).then(function(tracks) {
      SoundCloudAPI.renderTrack(tracks);
    });
  },
  
  rederTracks: (tracks) => {cardList_div.innerHTML = null;

    tracks.forEach(track => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("div");
      image.classList.add("image");
  
      const img = document.createElement("img");
      img.classList.add("image_img");
      img.src = track.artwork_url || "https://lorempixel.com/290/290/abstract";
      image.appendChild(img);
  
      const content = document.createElement("div");
      content.classList.add("content");
  
      const header = document.createElement("div");
      header.classList.add("header");
  
      const a = document.createElement("a");
      a.href = track.permalink_url;
      a.target = "_blank";
      a.text = track.title;
      header.appendChild(a);
      content.appendChild(header);
  
      const button_div = document.createElement("div");
      button_div.classList.add("ui", "bottom", "attached", "button", "js-button");
  
      const icon = document.createElement("i");
      icon.classList.add("add", "icon");
  
      const span = document.createElement("span");
      span.innerText = "Add to playlist";
  
      button_div.appendChild(icon);
      button_div.appendChild(span);
      button_div.addEventListener("click", () => {
        SoundCloudAPI.addPlayList(track.permalink_url);
      });
  
      card.appendChild(image);
      card.appendChild(content);
      card.appendChild(button_div);
      cardList_div.appendChild(card);
    });
  },
  addPlayList: (trackURL) => {SC.oEmbed(trackURL, {
    auto_play: true
  }).then(function(embed) {
    const playboxes = document.querySelectorAll("#playbox");
    const sidebar - document.querySelector('#js-playlist');

    const playbox = document.createElement("div");
    playbox.setAttribute("id", "playbox");
    playbox.innerHTML = embed.html;

    sidebar.insertBefore(playbox, sidebar.firstChild);

    localStorage.setItem("playlist", sidebar.innerHTML);
    console.log("logStorage");
  });}

};

SoundCloudAPI.init();

/* 검색 */

search_btn.addEventListener("click", () => {
  SoundCloudAPI.getTrack(search_text.value);
});

search_text.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    SoundCloudAPI.getTrack(search_text.value);
  }
});


  
