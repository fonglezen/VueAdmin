

<template>
  <div id="header">
  	
  	<!-- logo -->
  	
  	<div class="pull-left">
  		<img src="../assets/logo.png" alt="" class="logo" />
  	</div>
  	
  	
  	<!-- navbtn -->
  	<div class="pull-left">
  		<i class="fa fa-list">&nbsp;</i>
  	</div>
  	
  	<!-- user -->
  	
  	<div class="user pull-right">
  		<div class="avatar" v-bind:style="avatarStyle"></div>
  	</div>
  	
  </div>
</template>

<style scoped lang="less">
		#header{
			position: fixed;
			top: 0;
			left:0;
			width: 100%;
			background: #222;
			height: 60px;
			color:#fff;
			
			i{
				color:#fff;
				
				&.fa-list{
			    line-height: 60px;
			    font-size: 24px;
			    margin-left: 20px;
			    cursor: pointer;
				}
			}
			
			
			.logo{
				padding-top: 5px;
				margin-left: 10px;;
			}
			
			.user{
				.avatar{
					margin-top:7.5px;
					width:45px;
					height: 45px;
					border-radius: 50%;
					margin-right: 10px;;
				}
			}
		}
		
		
</style>

<script>
	export default {
	  name: 'head',
	  data () {
	    return {
	      avatarUrl:'https://sfault-avatar.b0.upaiyun.com/291/732/2917322619-54cae775be71e_big64',
	      avatarStyle:{}
	    }
	  },
	  
	  created () {
	  	this.avatarStyle = {
      	'background':'#fff url('+ this.avatarUrl +') no-repeat center',
      	'background-size': 'cover'
      }
	  }
	}
</script>
