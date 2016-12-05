'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularTop10SongsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should initialize playlists with no elements', function () {
    expect(scope.playlists.length).toBe(0);
  });

  
  it("should add playlist to scope playlists", function() {
    scope.plName = 'Test Playlist';
    scope.addPlaylist();
    expect(scope.playlists.length).toBe(1);
  });

  it("should not add playlist with an existing playlist name", function() {
    scope.plName = 'Test Playlist';
    scope.addPlaylist();
    scope.plName = 'Test Playlist';
    scope.addPlaylist();
    expect(scope.playlists.length).toBe(1);
  });
//
//  it("should return result as 'Scissors' when given 'Paper' and 'Scissors' as choices ", function() {
//    var result = scope.getResults('Paper', 'Scissors');
//    expect(result).toEqual('Scissors');
//  });
//
//  it("should return result as 'it is a tie' when given 'Paper' and 'Paper' as choices ", function() {
//    var result = scope.getResults('Paper', 'Paper');
//    expect(result).toEqual('it is a tie');
//  });
//
//  it("should return result as 'it is a tie' when given 'Rock' and 'Rock' as choices ", function() {
//    var result = scope.getResults('Rock', 'Rock');
//    expect(result).toEqual('it is a tie');
//  });
//
//  it("should return result as 'it is a tie' when given 'Scissors' and 'Scissors' as choices ", function() {
//    var result = scope.getResults('Scissors', 'Scissors');
//    expect(result).toEqual('it is a tie');
//  });
});
