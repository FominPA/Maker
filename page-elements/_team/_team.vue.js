import sectionTitle from '../../blocks/_section-title/_section-title.vue.js';
import person from './__person.vue.js';

export default {
	components: {
		sectionTitle,
		person,
	},

	template:
	`<section class="team">
		<sectionTitle
			class = 'team__title'
			number = '03'
			title = 'team'
		></sectionTitle>

		<div class="team__content">
			<person
				class = 'team__person_p1'
				imageUrl = 'images/Bryson.png'
				imageAlt = 'Bryson'
				name = 'George M. Bryson'
				position = 'Founder & Group CEO'
				description = 'Ladyship it daughter securing procured or am moreover mr. Put sir she exercise vicinity cheerful wondered. Continual say suspicion provision you neglected sir curiosity unwilling. 
							   <br><br>
							   Simplicity end themselves increasing led day sympathize yet. General windows effects not are drawing man garrets.'
			></person>
			<person
				class = 'team__person_p2'
				imageUrl = 'images/Gilmore.png'
				imageAlt = 'Gilmore'
				name = 'Kenneth G. Gilmore'
				position = 'Bussiness Manager'
				description = ''
			></person>
			<person
				class = 'team__person_p3'
				imageUrl = 'images/Main.png'
				imageAlt = 'Main'
				name = 'Richard C. Main'
				position = 'Marketing & Communication Manager'
				description = ''
			></person>
			<person
				class = 'team__person_p4'
				imageUrl = 'images/Flynn.png'
				imageAlt = 'Flynn'
				name = 'Judith R. Flynn'
				position = 'International Executive Director'
				description = ''
			></person>
			<person
				class = 'team__person_p5'
				imageUrl = 'images/Thompson.png'
				imageAlt = 'Thompson'
				name = 'Donald S. Thompson'
				position = 'Finance Director'
				description = ''
			></person>
		</div>
	</section>`
}