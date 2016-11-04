
<style>
  
</style>

<template>
  <div id="BackEnd">
   
    <!-- 头部，包含logo和navbtn和头像 -->
    <Head>Head</Head>
    
    <!--导航列表 -->
    <Navbar>Head</Navbar>
    
    <!--页面内容 -->
    <Frame></Frame>

  </div>
</template>

<script>
import Head from '../components/Head'
import Navbar from '../components/NavList'
import Frame from '../components/Frame'

export default {
  components: {
    'Head':Head,
    'Navbar':Navbar,
    'Frame':Frame
  },
  
  data () {
  	return {
  		
  	}
  },
  
  method: {
  
  }
}
</script>