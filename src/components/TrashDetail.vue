<template>
	<div id="note-detail">
		<h1>{{msg}}:{{$route.params.noteId}}</h1>
	</div>
</template>
<script>
import Auth from '@/apis/auth'
export default{
	name:'Login',
	data(){
		return{
			msg:'回收站'
		}
	},
	created(){
		Auth.getInfo().then(res => {
			if(!res.isLogin){
				this.$router.push({path:'/login'})
			}
		})
	}
}
</script>