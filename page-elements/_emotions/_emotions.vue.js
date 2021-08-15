import sectionTitle from '../../blocks/_section-title/_section-title.vue.js';
import basement from '../../blocks/_basement/_basement.vue.js';

export default {
	components: {
		sectionTitle,
		basement,
	},

	template:
	`<section class="emotions">
		<div class="emotions__inner wrapper">
			<sectionTitle
				class = 'emotions__title'
				number = '04'
				title = 'event'
			></sectionTitle>

			<div class="emotions__content">
				<h4 class='emotions__content-title'>Feel emotions</h4>
				<p class='emotions__content-paragraph'>
					One purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried.  
					<br><br>
					Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. 
				</p>
			</div>

			<basement></basement>
		</div>
	</section>`
}