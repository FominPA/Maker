export default {
	props: ['imageUrl', 'imageAlt', 'name', 'position', 'description'],

	template:
	`<div class="team__person">
		<img class="team__person" :src="imageUrl" :alt="imageAlt">
		<div class="team__person-content">
			<div class="team__person-hr"></div>
			<div class="team__person-name">{{ name }}</div>
			<div class="team__person-position">{{ position }}</div>
			<div v-if='description' class="team__person-description">
				<span v-html="description"></span>
			</div>
		</div>
	</div>`
}