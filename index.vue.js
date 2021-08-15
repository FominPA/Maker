import header from './page-elements/_header/_header.vue.js';
import mission from './page-elements/_mission/_mission.vue.js';
import projects from './page-elements/_projects/_projects.vue.js';
import team from './page-elements/_team/_team.vue.js';
import emotions from './page-elements/_emotions/_emotions.vue.js';

let index = Vue.createApp({
	components: {
		'index-header': header,
		mission,
		projects,
		team,
		emotions,
	}
}).mount('body');