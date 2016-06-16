import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    date: attr(),
    hours: attr(),
    status: attr(),
    repoLink: attr(),
    description: attr(),
});
