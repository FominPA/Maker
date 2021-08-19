import sectionTitle from '../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		sectionTitle,
	},

	template:
	`<section class="projects">
		<div class="projects__inner wrapper">

			<sectionTitle
				class = 'projects__title'
				number = '02'
				title = 'projects'
			></sectionTitle>

			<div class="projects__content">
				<div class="projects__item"><img src="page-elements/_projects/images/Strategy.png" alt="Strategy"></div>
				<div class="projects__item"><img src="page-elements/_projects/images/Headphones.png" alt="Headphones"></div>
				<div class="projects__item"><img src="page-elements/_projects/images/Badminton.png" alt="Badminton"></div>
				<div class="projects__item"><img src="page-elements/_projects/images/and.png" alt="and"></div>
				<div class="projects__item"><img src="page-elements/_projects/images/Sun Stone.png" alt="Sun Stone"></div>
				<div class="projects__item"><img src="page-elements/_projects/images/sixth planet.png" alt="sixth planet"></div>
			</div>
		<div>
	</section>`
}