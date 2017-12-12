<template>
  <div>
    <div class="logo">LOGO</div>
    <div class="login">
      登录者
    </div>
    <ul class="nav">
      <li><a href="">首页</a></li>
      <li><a href="">安全</a></li>
      <li><a href="">解决方案</a></li>
      <li><a href="">最新活动</a></li>
      <li><a href="">产品介绍</a></li>
      <li @mouseover="istool=true" @mouseout="istool=false"><a href="">常用工具<b></b></a></li>
      <li @mouseover="isguide=true" @mouseout="isguide=false"><a href="">开发指南<b></b></a>
        <ul class="guidemenu" v-show="isguide">
          <li><a href="">开发流程</a></li>
          <li><a href="">前后端契约</a></li>
          <li><a href="">API文档说明</a></li>
          <li><a href="">视觉稿</a></li>
          <li><a href="">UE稿</a></li>
          <li><a href="">需求说明</a></li>
        </ul>
      </li>
    </ul>
    <div class="toolmenu" v-show="istool||ismenu" @mouseover="ismenu=true" @mouseout="ismenu=false">
      <ul class="menu">
        <li>开发者中心</li>
        <li><a href="">SDK</a></li>
        <li><a href="">API文档</a></li>
      </ul>
      <ul class="menu">
        <li>打包工具</li>
        <li><a href="">Grunt</a></li>
        <li><a href="">glup</a></li>
        <li><a href="">Webpack</a></li>
        <li><a href="">Browserify</a></li>
      </ul>
      <ul class="menu">
        <li>压缩工具</li>
        <li><a href="">YUI</a></li>
        <li><a href="">JS Compressor</a></li>
        <li><a href="">CSS Compressor</a></li>
      </ul>
      <ul class="menu">
        <li>代码美化工具</li>
        <li><a href="">在线工具</a></li>
        <li><a href="">JSON压缩转义工具</a></li>
      </ul>
      <ul class="menu">
        <li>版本管理</li>
        <li><a href="">SVN</a></li>
        <li><a href="">码云</a></li>
        <li><a href="">Gitlab</a></li>
        <li><a href="">Gerrit</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      istool: false,
      ismenu: false,
      isguide: false
    }
  }
}
</script>
<style lang="less">
html,body,div,span,ul,li,a,b,i,em,strong{margin:0;padding:0;}
ul li {list-style: none;}
a{text-decoration: none;}
.logo{
  position: absolute;left:20px;
  color:#fff;z-index: 100;
  height:75px;line-height: 75px;
  background-color: #ccc;
  padding:0 15px;
  box-sizing: border-box;
  font-size:24px;
}
.login {
  position: absolute;
  z-index: 100;
  right:0;
  height:30px;line-height: 30px;
  padding:0 20px;
  color:green;
}
.nav{
  background-color: #343A46;
  position: relative;
  text-align: right;
  padding:30px 0 10px 0;
  >li{
    display: inline-block;
    border-left: 1px solid #3E444F;
    border-right: 1px solid #292E37;
    margin-left: -3px;
    position: relative;
    &:after{
      position: absolute;
      content: '';
      height:20px;left:0;right:0;
    }
    >a{
      display: block;
      padding:8px 25px;
      color:#fff;
      position: relative;
      b{
        display: inline-block;
        height: 4px;
        width: 4px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform:rotate(135deg);
        // transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;right: 15%;
        margin-top: -4px;
      }
    }
  }
}
// 横菜单
.toolmenu{
  .menu{
    color:#eee;
    padding:10px 20px;
    font-size:12px;
    li{
      margin:15px 0;
      a{
        color:#fff;
        &:hover{
          color:#58a;
        }
      }
    }
    li:first-child{
      font-weight: bold;
      color:#fff;
      font-size: 14px;
    }
  }
  position: absolute;
  top:75px;left:0;right:0;
  padding:20px 30px;
  background-color: #424e66;
  display: flex;
  justify-content: center;
}
// 竖菜单
.guidemenu{
  position: absolute;
  top:45px;left:0;right:0;
  background-color: #424e66;
  li{
    &:hover{
      background-color: #000;
      a{

      }
    }
  }
  a{
    display: block;
    color:#fff;
    padding:10px;
    text-align: left;
    font-size: 12px;
  }
}
.nav > li a:after{
  background-color: #02a3d8;
  bottom:0px;content: "";
  height: 2px;left: 0;
  position: absolute;
  transform: scaleX(0);
  transition: all 0.1s ease 0s;
  visibility: hidden;
  width: 100%;
}
.nav > li > a:hover{
  b{transform:rotate(-45deg);top: 60%;}
  &:after{transform:scaleX(1);visibility:visible;}
}
</style>
