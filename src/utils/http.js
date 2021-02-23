import axios from "axios";
import qs from "qs";
//响应拦截
axios.interceptors.response.use((res) => {
  console.log(res);
  return res;
});
//请求拦截
axios.interceptors.request.use((req) => {
  //req.params.cookie=JSON.parse(localStorage.getItem("userinfo")).cookie
  return req;
});
export let reqlogin = (user) => {
  return axios({
    url: "/login/cellphone",
    method: "get",
    params:{phone:user.phone,password:user.password}
  });
};
export let reqsongs=(num)=>{
  return axios({
    url:'/personalized',
    method:'get',
    params:{limit:num}
  })
}
export let reqnewsongs=(num)=>{
  return axios({
    url:'/personalized/newsong',
    method:'get',
    params:{limit:num}
  })
}
export let reqmusic=()=>{
  return axios({
    url:'/recommend/songs',
    method:'get'
  })
}
export let reqkeywords=(words)=>{
  return axios({
    url:'/search/multimatch',
    method:'get',
    params:{keywords:words}
  })
}
export let reqsongsresult=(words)=>{
  return axios({
    url:'/search/suggest',
    method:'get',
    params:{keywords:words}
  })
}
export let reqhot=()=>{
  return axios({
    url:'/search/hot/detail',
    method:'get',
  })
}
export let reqhotlv=()=>{
  return axios({
    url:'/search/hot',
    method:'get',
  })
}
export let getmusic=(id)=>{
  return axios({
    url:'/song/url?id='+id,
    method:'get',
  })
}
export let getmusicci=(id)=>{
  return axios({
    url:'/lyric?id='+id,
    method:'get',
  })
}
export let searchword=(word)=>{
    return axios({
      url:`/search/suggest?keywords=${word}`,
      method:'get'
    })
}

