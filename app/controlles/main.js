angular.module('AngularTop10SongsApp')
    .controller('MainCtrl',
                ["$scope", "PlaylistService", "_", "Spotify",
                function ($scope, PlaylistService, _, Spotify) {
    
    $scope.playlists = PlaylistService.getAllPlaylists();
    $scope.activeList = {};
    $scope.setActiveTrack = {};
    $scope.searchTypes = ['track', 'artist', 'album'];
    $scope.searchBy = $scope.searchQuery = '';
    $scope.searchResults = [];
                    
    $scope.addPlaylist = function() {
        
        var item = {id: $scope.playlists.length, 
                    title: $scope.plName,
                   tracks: []};
        
        if(checkTitleExist(item.title)) {
           alert('Playlist title already exists. Please choose another title');
            return;
        }
        
        PlaylistService.addPlaylist(item);
        $scope.activeList = item;

    }
    
    $scope.setActiveList = function(playlistId) {

        $scope.activeList = _.findWhere($scope.playlists, {id: playlistId});
        
    }        
    
    $scope.setSearchBy = function(type) {
        
        $scope.searchBy = type;
        
    }
    
    $scope.doSearch = function() {
           
        $scope.clearResults();
        Spotify.search($scope.searchQuery, $scope.searchBy).then(function (data) {
            
            $scope.setResults(data[$scope.searchBy+'s'].items);
            
        });
        
    }
    
    $scope.clearResults = function() {
        
        $scope.searchResults.length = 0;
        
    }
    
    $scope.setResults = function(items) {

        if(items.length > 0) {
            _.each(items, function(track){
                    var artistName = _.has(track, 'artists') ? _.first(track.artists).name : '';
                    var albumName  = _.has(track, 'album') ? track.album.name : '';
                    var imgSrc = _.has(track, 'album') ? _.first(track.album.images).url : '';
                   $scope.searchResults.push({id: track.id,
                                              album: albumName, 
                                              title: track.name, 
                                              artist:  artistName,
                                              customImage: imgSrc,
                                              note: ''
                                             }); 
                  });    
        }        
        
    }
    
    $scope.addTrack = function(item) {
        
        if( typeof item != undefined) {
            if($scope.activeList.tracks.length > 10) {
                alert('Maximum track count has been reached for this playlist');
                return;
            }
            
            $scope.activeList.tracks.push(item);
            $scope.searchResults = _.without($scope.searchResults, 
                                             _.findWhere($scope.searchResults,
                                                         {id: item.id}
                                                        )
                                            );
        }
                
    }
    
    $scope.editTrack = function() {
        console.log($scope.activeTrack);
        $scope.activeTrack.active = false;
        $scope.activeList.tracks[$scope.activeTrack.index] = $scope.activeTrack;
        delete $scope.activeList.tracks[$scope.activeTrack.index].index;
    }
    
    $scope.deleteTrack = function(index) {
        
        $scope.activeList.tracks.splice(index, 1);
        
    }
    
    $scope.setActiveTrack = function(index) {
                
        _.each($scope.activeList.tracks, function(track, key){
            $scope.activeList.tracks[key].active = false;
        });

        $scope.activeTrack = $scope.activeList.tracks[index];    
        $scope.activeTrack.active = true;
        $scope.activeTrack.index = index;                
        
    }
    
    $scope.getTracksByAlbumId = function(id) {
        
        Spotify.getAlbumTracks(id).then(function (data) {
            $scope.searchBy = 'track';
            $scope.clearResults();
            $scope.setResults(data.items);         
        });
    }
    
    $scope.getTracksByArtistId = function(id) {
        
        Spotify.getArtistTopTracks(id, 'US').then(function (data) {
            $scope.searchBy = 'track';
            $scope.clearResults();
            $scope.setResults(data.tracks);                      
          });
    }
    
    $scope.export = function () {
        
        $scope.savedJSON = JSON.stringify($scope.activeList,null,"    ");
 
    };
    
    function checkTitleExist(title) {
                
        for (var i = 0; i < $scope.playlists.length; i++) {
            if($scope.playlists[i].title == title) {
                return true;       
            }
        }
        return false;
    }
    
}]);