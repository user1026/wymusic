import React, { Component } from "react";
import { reqmusic } from "../../utils/http";
export default class music extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
    };
  }
  componentDidMount() {
    reqmusic().then((res) => {
      if (res.data.code === 200) {
        this.setState({
          music: res.data.data.dailySongs,
        });
        
      }
    });
  }
  render() {
      let {music}=this.state
    return (
      <div className="music">
        <div className="musicimg">
          <p>热歌榜</p>
        </div>
        <div className="musicmain">
          <ul>
              {music?music.map((val,index)=>{
                  return (<li key={val.id}>
                      <div className="index">
                          {index+1<10?`0${index+1}`:index+1}
                      </div>
                      <div>
                      <p className="p1">{val.name}</p>
                    <p className="p2">{val.ar[0].name+"-"+ val.al.name}</p>
                      </div>
                   
                </li>)
              }):null}
          </ul>
        </div>
      </div>
    );
  }
}
