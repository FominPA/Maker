import sectionTitle from '../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		sectionTitle,
	},

	template: 
	`<section class="mission wrapper">
		<sectionTitle
			class = 'mission__title'
			number = '01'
			title = 'mission'
		></sectionTitle>

		<img class="mission__image" src="images/mission 2.png" alt="mission">

		<div class="mission__content">
			<p class="mission__paragraph">Is allowance instantly strangers applauded discourse so. Separate entrance welcomed sensible laughing why one moderate shy. We seeing piqued garden he. As in merry at forth least ye stood.</p>
			<br>
			<p class="mission__paragraph">And cold sons yet with. Delivered middleton therefore me at. Attachment companions man way excellence how her pianoforte.</p>
		</div>
	</section>`
}