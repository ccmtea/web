var myComponents = Vue.extend({
	template:`
		<header class="header">
	  	<nav class="nav">
	  		<ul>
	  			<li class="tc fs16"><a>首页</a></li>
	  			<li class="tc fs16"><a>技术</a></li>
	  			<li class="tc fs16"><a>个人</a></li>
	  			<li class="tc fs16"><a>关于</a></li>
	  		</ul>
	  	</nav>
	</header>
	`
})

Vue.component('v-header',myComponents)