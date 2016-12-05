# Angular Top Songs
This application allows users to create one or more playlists and add tracks to them from Spotify API service.
 
##Workflow
- Add playlist from the left sidebar, playlist name is unique so you can't use the same name more than once
- Added playlist is automatically selected and user can add tracks by clicking on the add track button in the right side panel
- When track search dialog modal is open, user can search for tracks by (track title, artist, or album).
    - User selects the search by value from the dropdown then enters a value in the field next, then click on the 'GO' button
    - If user is searching by title, he can add tracks to playlist by clicking on the 'Add to playlist' button
    - If user if searching by artist, he is first presented with search results for artist name. 
        - User is then able to get top tracks for the artist by clicking ont the 'Get top tracks' button.
        - User is then presented with top tracks for the artist, which he can add to playlist. 
    - If user if searching by album, he is first presented with search results for album name. 
        - User is then able to get album tracks for the album by clicking ont the 'Get tracks' button.
        - User is then presented with top tracks for the album, which he can add to playlist. 

- User can export all created playlists/track to JSON by click on the 'Export to JSON' button on the right side panel.

##Unit Tests

- from command line, run the following commands
    - npm install
    - bower install
    - karma start
 
