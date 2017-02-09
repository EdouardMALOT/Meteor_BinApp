import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bin';

Meteor.startup(() => {
  
    Meteor.publish('bins', function() {
      return Bins.find({ownerId: this.userId});
    })

});
