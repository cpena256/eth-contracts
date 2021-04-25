import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyC4Sued1TcmntUMI-iOg_VjJO-ol-2h5U0";

class App extends Component {
    constructor(props) {
        super(props);
  
        this.state = { videos: [],
                       selectedVideo: null 
                    };
                    this.videoSearch('surfboards');
        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term},  (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
              });
          });
    }

    render() { 
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
        <div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );
  }
}

//Take the component's generated HTML and put it on the page (the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));

