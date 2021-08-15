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
				<div class="projects__item"><img src="images/Strategy.png" alt="Strategy"></div>
				<div class="projects__item"><img src="images/Headphones.png" alt="Headphones"></div>
				<div class="projects__item"><img src="images/Badminton.png" alt="Badminton"></div>
				<div class="projects__item"><img src="images/and.png" alt="and"></div>
				<div class="projects__item"><img src="images/Sun Stone.png" alt="Sun Stone"></div>
				<div class="projects__item"><img src="images/sixth planet.png" alt="sixth planet"></div>
			</div>
		</div>
	</section>`
}