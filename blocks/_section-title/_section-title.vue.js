export default {
	props: ['number', 'title'],

	template:
	`<div class="section-title">
		<h2 class="section-title__number">{{ number }}</h2>
		<h3 class="section-title__title">{{ title }}</h3>
	</div>`
}