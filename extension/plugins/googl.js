var Googl = function() {

  /* Shortens a given URL.
   */
  var _shorten = function(dataObject) {
    var reqBody = {
      'longUrl': dataObject.data
    };

    return new Promise(function(resolve, reject) {
      $.ajax({
        'type': 'POST',
        'url': 'https://www.googleapis.com/urlshortener/v1/url',
        'data': JSON.stringify(reqBody),
        'headers': {
          'Content-Type': 'application/json'
        },
        'dataType': 'json',
        'success': function(data) {
          var retVal = {
            'type': 'url',
            'data-serialization': 'text',
            'data': data.id
          };
          resolve(retVal);
        },
        'error': function(data, status) {
          // TODO: Error handling.
          console.log('Error: ' + status);
          reject({
            'type': 'null'
          });
        }
      });
    });
  };

  return {
    getRecipes: function() {
      return [
        {
          'title': 'Shorten URL (goo.gl)',
          'callback': _shorten,
          'inputs': [
            {
              'type': 'url'
            }
          ]
        }
      ];
    }
  };
};