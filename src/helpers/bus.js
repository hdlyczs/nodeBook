import Vue from 'vue'

export default new Vue()

/*
用法

import Bus from '@/helpers/bus'

Bus.$on('test',data => {
	console.log(data)
})

Bus.$emit('test','hello')

*/