import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		return ['red', 'green', 'blue', 'pink'];
	}
});