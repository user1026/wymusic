import React, { Component } from "react";

import { reqsongs ,reqnewsongs} from "../../utils/http";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      song: [],
      newsongs:[],
    };
  }
  UNSAFE_componentWillMount(){
   
  }
  componentDidMount() {
    reqsongs(6).then((res) => {
        if (res.data.code === 200) {
          this.setState({
            songs: res.data.result,
          });
        }
      });
      reqnewsongs(10).then((res) => {
        if (res.data.code === 200) {
          this.setState({
            newsongs: res.data.result,
          });
         
        }
      });
  }
  wh(){

  }
  playmusic(id){
    this.props.history.push(`/play/${id}`)
  }
  render() {
   
    let { songs,newsongs } = this.state;
    return (
      <div className="home" onWheel={()=>{this.wh()}}>
        <div className="songs">推荐歌单</div>
        <div className="songsmain">
          {songs?songs.map((val) => {
            return (
              <div className="songs2" key={val.id}>
                <div className="img">
                  <p className="playnum">{val.playCount}</p>
                  <img src={val.picUrl} alt="#" />
                </div>
                <p>{val.name}万</p>
              </div>
            );
          }):null}
        </div>
        <div className="songs">最新音乐</div>
            <ul>
                {newsongs?newsongs.map((val)=>{
                    return (<li key={val.id} onClick={()=>{this.playmusic(val.id)}}>
                        <p className="p1">{val.name}</p>
                        <p className="p2">{val.song.artists[0].name+"-"+ val.song.album.name}</p>
                    </li>)
                }):null}
            </ul>
      </div>
    );
  }
}
