(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5466618"],{2017:function(e,t,o){"use strict";var s=o("624b"),n=o.n(s);n.a},"5fbe":function(e,t,o){e.exports=o.p+"static/img/logo2.745fd978.png"},"624b":function(e,t,o){},"9ed6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"lowin  lowin-blue"},[e._m(0),o("div",{staticClass:"lowin-wrapper"},[o("div",{staticClass:"lowin-box lowin-login"},[o("div",{staticClass:"lowin-box-inner"},[o("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules}},[o("p",[e._v("马上来考试系统")]),o("div",{staticClass:"lowin-group"},[o("label",[e._v("用户名 ")]),o("el-input",{ref:"userName",staticClass:"lowin-input",attrs:{placeholder:"用户名",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),o("div",{staticClass:"lowin-group password-group"},[o("label",[e._v("密码 "),o("a",{staticClass:"forgot-link",attrs:{href:"#"}},[e._v("忘记密码?")])]),o("el-input",{key:e.passwordType,ref:"password",staticClass:"lowin-input",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),o("el-button",{staticClass:"lowin-btn login-btn",attrs:{loading:e.loading,type:"text"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")]),o("div",{staticClass:"text-foot"},[e._v(" 还没有账号? "),o("router-link",{staticClass:"register-link",attrs:{to:"/register"}},[e._v(" 注册 ")])],1)],1)],1)])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lowin-brand"},[s("img",{staticStyle:{"margin-top":"12px"},attrs:{src:o("5fbe"),alt:"logo"}})])}],i=o("d0f5"),a=o("9f3a"),r=o("7ded"),l={name:"Login",data:function(){var e=function(e,t,o){t.length<5?o(new Error("用户名不能少于5个字符")):o()},t=function(e,t,o){t.length<5?o(new Error("密码不能少于5个字符")):o()};return{loginForm:{userName:"",password:"",remember:!1},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1}},created:function(){},mounted:function(){""===this.loginForm.userName?this.$refs.userName.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:Object(i["a"])({checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.shiftKey,o=e.key;o&&1===o.length&&(this.capsTooltip=!!(t&&o>="a"&&o<="z"||!t&&o>="A"&&o<="Z")),"CapsLock"===o&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this,t=this;this.$refs.loginForm.validate((function(o){if(!o)return!1;e.loading=!0,r["a"].login(e.loginForm).then((function(e){e&&1===e.code?(t.setUserName(t.loginForm.userName),t.$router.push({path:"/"})):(t.loading=!1,t.$message.error(e.message))})).catch((function(e){t.loading=!1}))}))}},Object(a["d"])("user",["setUserName"]))},c=l,u=(o("2017"),o("b873"),o("9ca4")),p=Object(u["a"])(c,s,n,!1,null,"25e01cae",null);t["default"]=p.exports},b873:function(e,t,o){"use strict";var s=o("be8b"),n=o.n(s);n.a},be8b:function(e,t,o){}}]);