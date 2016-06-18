import Ember from 'ember';

export default Ember.Component.extend({
  updateDayForm: false,
  actions: {
    updateDayForm(){
      this.set('updateDayForm', true);
    },

    updateDay(day){
      debugger;
      var params = {
        date: this.get('author'),
        hours: this.get('hours'),
        repoLink: this.get('repoLink'),
        description: this.get('description'),
      };

      this.set('updateDayForm', false);
      this.sendAction('updateDay', day, params);
    }
  }
});
