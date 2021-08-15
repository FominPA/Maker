import logo from '../_logo/_logo.vue.js';

export default {
	components: {
		logo,
	},

	template:
	`<div class="basement">
		<logo class="logo_basement"></logo>
		<nav class="menu">
			<div class="menu__item">About</div>
			<div class="menu__item">Faq</div>
			<div class="menu__item">Blog</div>
			<div class="menu__item">Tour</div>
			<div class="menu__item">Contact</div>
		</nav>
		<p class="basement__copyrigth">© 2016 Maker. All rights reserved</p>
	</div>`
}