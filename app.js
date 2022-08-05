const URL = "https://api-eurodance.onrender.com/api/eurodance/getAll";
const container = document.querySelector(".music-container");
const musicList = [];

//1 init
const init = async () => {
  await getSongs();
  mapSongs(musicList);
};

//2 get
const getSongs = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  const songs = data.data.elements;
  mapSongs(songs);
};

//3 map
const mapSongs = (songs) => {
  mappedSongs = songs.map((song) => ({
    name: song.songname,
    album: song.dicsname,
    group: song.group,
    year: song.year,
    image: song.image,
  }));
  console.log(mappedSongs);
  printSongs(mappedSongs);
};

//4 print
const printSongs = (list) => {
  for (const song of list) {
    const songElement = `
    <figure class="songs-container">
      <div class="text-container">
            <h2>${song.name}🎧</h1>
            <h3> Album: ${song.album}</h3>
            <h4>Group: ${song.group}</h4>
            <h5>${song.year}</h5>
      </div>
            <img src="${song.image}" alt="${song.name}" />
            <a href="#" class="more">More info></a>
    </figure>
        `;
    container.innerHTML += songElement;
    console.log(container);
  }
};

init();
