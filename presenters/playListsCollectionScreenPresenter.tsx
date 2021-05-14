import {connect} from "react-redux";
import Playlist from '../models/Playlist'
import {createPlaylist, changePlaylistID, getPlaylists,deletePlaylist} from '../store/Playlist/playlistActions'
import { PlayListsCollectionScreen } from "../views";


const mapStateToProps = (state: any) => ({ 
    playlists: state.playlistReducer.playlists,
    playlistID: state.playlistReducer.playlistID,
    user: state.userReducer.user
  });
  
  const mapDispatchToProps = (dispatch: any) => ({ //TODO: ADD TO LISTS
      addPlaylist: (playlist: Playlist) => dispatch(createPlaylist(playlist)),
      changePlaylistID: (playlistID: string) => dispatch(changePlaylistID(playlistID)),
      getPlaylists: (userId: string) => dispatch(getPlaylists(userId)),
      deletePlaylist: (PlaylistId: string) => dispatch(deletePlaylist(PlaylistId))
      });
      
  const connectComponent = connect (mapStateToProps, mapDispatchToProps);
  export default connectComponent(PlayListsCollectionScreen);
  
