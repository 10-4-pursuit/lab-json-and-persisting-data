const fs = require("fs");
const { readData, loadPlaylists, savePlaylists, addSongToPlaylist, addSongToSelectedPlaylist } = require("../index.js");

describe('Testing Playlist Functions', () => {
    beforeAll(() => {
      fs.copyFileSync('./data/playlists.json', './data/playlists_backup.json');
    });
  
    afterAll(() => {
      fs.copyFileSync('./data/playlists_backup.json', './data/playlists.json');
    });
  
    it('should read data from playlists.json', () => {
      const data = readData();
      expect(data).toEqual(expect.arrayContaining([]));
    });
  
    it('should save and load playlists', () => {
      const testPlaylists = [
        {
          id: 'test-id',
          name: 'Test Playlist',
          songs: [
            {
              title: 'Test Song',
              artist: 'Test Artist',
              duration: '03:30',
            },
          ],
        },
      ];
  
      savePlaylists(testPlaylists);
  
      const loadedPlaylists = loadPlaylists();
  
      expect(loadedPlaylists).toEqual(expect.arrayContaining(testPlaylists));
    });
  
    it('should add a song to a playlist', () => {
      const playlist = {
        id: 'test-id',
        name: 'Test Playlist',
        songs: [],
      };
  
      const song = {
        title: 'Test Song',
        artist: 'Test Artist',
        duration: '03:30',
      };
  
      addSongToPlaylist(playlist, song);
  
      expect(playlist.songs).toEqual(expect.arrayContaining([song]));
    });
  
    it('should add a song to a selected playlist', () => {
    });
  });

