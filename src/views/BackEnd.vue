
<style>
  
</style>

<template>
  <div id="BackEnd">
   
    <!-- 头部，包含logo和navbtn和头像 -->
    <Head></Head>
    
    <!--导航列表 -->
    <Navbar></Navbar>
    

  </div>
</template>

<script>
import Head from '../components/Head'
import Navbar from '../components/NavList'

export default {
  components: {
    'Head':Head,
    'Navbar':Navbar
  },
  
  data () {
  	return {
  		
  	}
  },
  
  method: {
  
  }
}
</script>