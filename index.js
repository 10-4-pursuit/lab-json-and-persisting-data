const { faker } = require("@faker-js/faker");
const fs = require("fs");
const readline = require('readline');


const getRandomTime = () => {
    const randomMinutes = Math.floor(Math.random() * 3) + 2;
    const randomSeconds = Math.floor(Math.random() * 60);
    const formattedMinutes = String(randomMinutes).padStart(2, '0');
    const formattedSeconds = String(randomSeconds).padStart(2, '0');
    const randomTime = `${formattedMinutes}:${formattedSeconds}`;
    return randomTime;
};

const generateSong = () => ({
    title: faker.music.songName(),
    artist: faker.name.fullName(),
    duration: getRandomTime(),
});

const generatePlaylist = (numberOfSongs) => ({
    id: faker.datatype.uuid(),
    name: faker.address.cityName(),
    songs: Array.from({ length: numberOfSongs }, () => generateSong()),
});

const numberOfPlaylists = 6;
const songsPerPlaylist = 10;
  
const playlists = Array.from({ length: numberOfPlaylists }, () =>
    generatePlaylist(songsPerPlaylist)
);

let existingData = [];

if (fs.existsSync('./data/playlists.json')) {
    const existingDataBuffer = fs.readFileSync('./data/playlists.json');
    existingData = JSON.parse(existingDataBuffer);
}

// const updatedData = existingData.concat(playlists);
  
// fs.writeFileSync('./data/playlists.json', JSON.stringify(updatedData, null, 2));

function readData() {
    if (fs.existsSync('./data/playlists.json')) {
      const dataBuffer = fs.readFileSync('./data/playlists.json');
      return JSON.parse(dataBuffer);
    } else {
      return [];
    }
}

function loadPlaylists() {
    try {
      const data = fs.readFileSync('./data/playlists.json', 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading playlists.json:', error);
      return [];
    }
}

function savePlaylists(playlists) {
    try {
      fs.writeFileSync('./data/playlists.json', JSON.stringify(playlists, null, 2));
    } catch (error) {
      console.error('Error writing playlists.json:', error);
    }
}

function addSongToPlaylist(playlist, song) {
    playlist.songs.push(song);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addSongToSelectedPlaylist() {
    const playlists = loadPlaylists();
  
    if (playlists.length === 0) {
      console.log('No playlists found in playlists.json. Please create some playlists first.');
      rl.close();
      return;
    }
  
    console.log('Select a playlist to add a song to:');
    playlists.forEach((playlist, index) => {
      console.log(`${index + 1}. ${playlist.name}`);
    });
  
    rl.question('Enter the number of the playlist: ', (selectedPlaylistIndex) => {
      const playlistIndex = parseInt(selectedPlaylistIndex) - 1;
  
      if (isNaN(playlistIndex) || playlistIndex < 0 || playlistIndex >= playlists.length) {
        console.log('Invalid playlist selection. Please enter a valid number.');
        rl.close();
        return;
      }
  
      rl.question('Enter the song title: ', (title) => {
        rl.question('Enter the artists: ', (artists) => {
          rl.question('Enter the song duration (mm:ss): ', (duration) => {
            if (!/^\d{2}:\d{2}$/.test(duration)) {
                console.log('Invalid duration format. Please use the format "mm:ss".');
                rl.close;
                return;
            }

            const song = {
                title,
                artists,
                duration
            };
  
            addSongToPlaylist(playlists[playlistIndex], song);
            savePlaylists(playlists);
  
            console.log('Song added to the playlist successfully.');
            rl.close();
          });
        });
      });
    });
}

addSongToSelectedPlaylist();


module.exports = {
    readData,
    savePlaylists,
    addSongToPlaylist,
    loadPlaylists,
    addSongToSelectedPlaylist,
};