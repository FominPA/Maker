import sectionTitle from '../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		sectionTitle,
	},

	template:
	`<section class="projects">
		<sectionTitle
			class = 'projects__title'
			number = '02'
			title = 'projects'
		></sectionTitle>

		<div class="projects__inner wrapper">
			<div class="projects__content">
				<img class="projects__item" src="images/Strategy.png" alt="Strategy">
				<img class="projects__item" src="images/Headphones.png" alt="Headphones">
				<img class="projects__item" src="images/Badminton.png" alt="Badminton">
				<img class="projects__item" src="images/and.png" alt="and">
				<img class="projects__item" src="images/Sun Stone.png" alt="Sun Stone">
				<img class="projects__item" src="images/sixth planet.png" alt="sixth planet">
			</div>
		</div>
	</section>`
}