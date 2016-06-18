import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('day', params.day_id);
  },

  actions: {
    updateDay(day, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          day.set(key,params[key]);
        }
      });
      day.save();
      this.transitionTo('day', params.day_id);
    }
  }
});
