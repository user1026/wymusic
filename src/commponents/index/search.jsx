import React, { Component } from "react";
import {
  reqkeywords,
  reqsongsresult,
  reqhot,
  reqhotlv,
  searchword,
  searchre,
} from "../../utils/http";
import "../../assets/css/search.css";
export default class search extends Component {
  constructor() {
    super();
    this.state = {
      searchsuggest: [],
      searchsuggest2:[],
      searchsuggest3:[],
      hot: [],
      isend: false,
      searchresult: [],
      issearch:true,
    };
  }
  componentDidMount() {
    reqhot().then((res) => {
      if (res.data.code === 200) {
        this.setState({
          hot: res.data.data,
        });
      }
      console.log(this.state.hot);
    });
    reqhotlv().then((res) => {
      if (res.data.code === 200) {
        console.log(res);
      }
    });
  }
  //搜索结果
  searchs(word) {
    reqkeywords(word).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          searchresult: res.data,
        });
      }
    });
  }
  select(id) {}
  //搜索建议
  search(e) {
        searchword(e.target.value).then((res) => {
          if (res.data.code === 200) {
            this.setState({
              searchsuggest: res.data.result.albums,
              searchsuggest2:res.data.result.songs,
              searchsuggest3:res.data.result.artists,
              issearch:false,
            });
          }
        });
    
  }
  render() {
    let { searchsuggest, hot, searchresult,issearch ,searchsuggest2,searchsuggest3} = this.state;
    return (
      <div className="search">
        <div className="searchinput">
          <input
            type="text"
            placeholder="请输入歌词、歌曲名、歌手"
            onChange={(e) => {
              this.search(e);
            }}
           
          />
          <ul>
            {searchsuggest
              ? searchsuggest.map((val, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        this.search(val.id);
                      }}
                    >
                      {val.name} {val.artist.name}
                    </li>
                  );
                })
              : null}
               {searchsuggest2
              ? searchsuggest2.map((val, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        this.search(val.id);
                      }}
                    >
                       {val.name}{val.artists[0].name}{val.album.name}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <div className="hot">
          {hot&&issearch
            ? hot.map((val, index) => {
                return (
                  <button
                    key={val.score}
                    onClick={() => {
                      this.searchs(val.searchWord);
                    }}
                  >
                    {val.searchWord}
                  </button>
                );
              })
            : null}
        </div>
        <div className="searchresult">
          <ul>
            {searchresult
              ? searchresult.map((val, index) => {
                  return <li></li>;
                })
              : null}
          </ul>
        </div>
      </div>
    );
  }
}
