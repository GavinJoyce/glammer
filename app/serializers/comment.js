import DS from 'ember-data';

//NOTE: there is no error when `DS.EmbeddedRecordsMixin` is removed
export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin);
