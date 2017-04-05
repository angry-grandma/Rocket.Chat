Template.allThreads.events({
	'click .all-threads-nav a'(e) {
		// e.preventDefault();
		const user = Meteor.user();
		console.log('aloha threads', user.username);
	}
});

Template.allThreads.helpers({
	me: () => Meteor.user().username
});
