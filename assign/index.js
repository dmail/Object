var ObjectModifier = require('../object-modifier');
var assignPropertyOf = require('../complete/completePropertyOf');
var assign = ObjectModifier.create(assignPropertyOf);

module.exports = assign;
if( !Object.assign ) Object.assign = assign;