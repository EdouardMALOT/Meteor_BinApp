import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert' : function(){
        return Bins.insert({
            createAt: new Date(),
            content: '',
            shareWith: [],
            ownerId: this.userId
        });
    },
    
    'bins.remove' : function(bin){
        return Bins.remove(bin);
    }

});

export const Bins = new Mongo.Collection('bins');
