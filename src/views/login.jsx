import React, { Component } from "react";

import { reqlogin } from "../utils/http";

export default class login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        phone: "",
        password: "",
      },
    };
  }
  login() {
    let {user}=this.state
    reqlogin(user).then(res => {
      if (res.data.code === 200) {
         //localStorage.setItem("userinfo",JSON.stringify(res.data))
         //localStorage.setItem("cookie",res.data.cookie)    
        alert("登录成功");
        this.props.history.push("/index/home");
      } else {
        alert("登录失败");
      }
    });
  }
  register(){
    
  }
  change(e, type) {
    let { user } = this.state;
    if (type === "phone") {
      user.phone = e.target.value;
      this.setState({
        user: user,
      });
    } else {
      user.password = e.target.value;
      this.setState({
        user: user,
      });
    }
  }
  render() {
    let { user } = this.state;
    return (
      <div className="login">
        <div className="user">
          <span>手机号</span>
          <input
            type="text"
            value={user.phone}
            onChange={(e) => this.change(e, "phone")}
          />
        </div>
        <div className="user">
          <span>密码</span>
          <input
            type="text"
            value={user.password}
            onChange={(e) => this.change(e, "password")}
          />
        </div>
        <div className="user">
          <button onClick={() => this.login()}>登录</button>
          <button onClick={() => this.register()}>注册</button>
        </div>
      </div>
    );
  }
}
