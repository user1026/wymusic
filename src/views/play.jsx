import React, { Component } from 'react'
import {getmusic,getmusicci} from "../utils/http"
import "../assets/css/play.css"

export default class play extends Component {
    constructor(){
        super();
        this.state={
            isurl:false,
            isci:false,
            url:'',
            ci:[],
        }
    }
    componentDidMount(){
        var music=document.getElementById('music');
        var showgeci=document.getElementsByClassName("showgeci")[0];
        music.addEventListener('timeupdate',()=>{
           //music.duration
         
           var li=document.querySelectorAll(".showgeci>ul>li")
           let {ci}=this.state;
           for(let i=0;i<ci.length-2;i++){
                if(ci[i][0]<music.currentTime&&music.currentTime<ci[i+1][0]){
                           li[i].className="cili seled";
                           showgeci.style.top=(200-30*i)+'px'
                }else{
                    li[i].className="cili";
                }
           }
        })
        getmusic(this.props.match.params.id).then(res=>{
            let url=res.data.data[0].url
            this.setState({
                url:url,
                isurl:true
            })
            music.load();
        })
        getmusicci(this.props.match.params.id).then(res=>{
           let str= res.data.lrc.lyric
         str=str.split("[");
        str.shift();
        let ci=[];
        str.forEach(val => {
            ci.push(val.split("]"))
        });
         
          ci.forEach(val=>{
              val[0]=this.timetranslate(val[0]);
          })
         
           this.setState({
               ci:ci,
               isci:true
           })
       })
    }
    timetranslate(t){
       
        var arr = t.split(':');
        var ms = parseInt(arr[0]*60);
        var ss = parseInt(arr[1]);
        var seconds = ms + ss;
        return seconds;
    }
    render() {
        let {isurl,url,ci,isci}=this.state;
        return (
            <div className="play">
                <header><button>返回</button><p>正在播放</p></header>
                 <div className="geci">
                     <div className="showgeci">
                         <ul>
                         {isci?ci.map((val,index)=>{
                             return (
                                 <li className="cili"  key={index} >{val[1]}</li>
                             )
                         }):null}
                         </ul>
                     </div>
                </div>
               <audio id="music" src={isurl?url:null}  controls="controls"></audio>
            </div>
        )
    }
}
