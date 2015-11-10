// require traverson and traverson-hal
var traverson = require('traverson');
var JsonHalAdapter = require('traverson-hal');

// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

// use Traverson to follow links, as usual
traverson
.from('https://search.apps.ubuntu.com/api/v1')
.jsonHal()
.withTemplateParameters({q: 'xkcd'})
.follow('search')
.getResource(function(error, document) {
  if (error) {
    console.error('No luck :-)')
  } else {
    console.log('We have followed the path and reached our destination.')
    console.log(JSON.stringify(document))
  }
});
