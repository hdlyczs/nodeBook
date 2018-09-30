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
			msg:'noteDetail'
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