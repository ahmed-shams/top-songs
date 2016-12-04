angular.module("AngularTop10SongsApp").service("PlaylistService", function(){
    
    var playlists = [];    

    const getAllPlaylists = function() {
        return playlists;
    }

    const addPlaylist = function(playlist) {
        playlists.push(playlist);
    }

    const removePlaylist = function(playlistId) {
        playlists.push(playlist);
    }

    const exportJson = function(json) {
        playlistJson = json;
    }

    return {
        getAllPlaylists: getAllPlaylists,
        addPlaylist: addPlaylist,
        exportJson: exportJson
    }
})