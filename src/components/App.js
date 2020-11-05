import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoContent from './VideoContent';
import VideoList from './VideoList';
import './App.css';


class App extends React.Component {
  state = {
    videos : [],
    selectedVideo : null
  }

  componentDidMount() {
    this.getSearchTerm('cats');
  }

  getSearchTerm = async (term) => {
    console.log(`inside app`, term);
    const result = await youtube.get("search/",{
      params: {
        q: term
      }
    })
    console.log(result.data.items);
    this.setState({
      videos : result.data.items,
      selectedVideo: result.data.items[0]
    })
  }

  onVideoSelect = (video) =>{
    console.log(`in the app component`, video)
    this.setState({
      selectedVideo: video
    })
  }
  
  render(){
  return(
    <div className="App">
      <h1>React Youtube App</h1>
    <SearchBar onAppSearch={this.getSearchTerm}/>
    <div className="videoContainer">
    <VideoContent video={this.state.selectedVideo}/>
    <VideoList videos={this.state.videos} onClickVideo={this.onVideoSelect}/>
    </div>
    </div>
  )
  }
}

 
export default App;