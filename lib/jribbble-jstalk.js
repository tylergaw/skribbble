/**
 * A CocoaScript/JSTalk version of the JavaScript Dribbble API wrapper
 * http://jribbble.com
 * http://dribbble.com/api
 *
 * Copyright (c) 2014 Tyler Gaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

// We'll set a global var by immediately invocating a function that returns the
// jribbble object
var jribbble = (function () {
  'use strict';

  var exports = {};
  var methods = {
    'getShotById': '/shots/$/',
    'getReboundsOfShot': '/shots/$/rebounds/',
    'getShotsByList': '/shots/$/',
    'getShotsByPlayerId': '/players/$/shots/',
    'getShotsThatPlayerFollows': '/players/$/shots/following/',
    'getPlayerById': '/players/$/',
    'getPlayerFollowers': '/players/$/followers/',
    'getPlayerFollowing': '/players/$/following/',
    'getPlayerDraftees': '/players/$/draftees/',
    'getCommentsOfShot': '/shots/$/comments/',
    'getShotsThatPlayerLikes': '/players/$/shots/likes/'
  };

  // Going to return the methods for introspection purposes.
  exports.methods = methods;

  function createAPIMethod (urlPattern) {
    return function () {
      // Convert arguments to a real Array
      var args = [].slice.call(arguments);

      // We run shift() on args here because we don't need to send
      // the first argument in the request.
      var path = urlPattern.replace('$', args.shift());

      // We add the uuid so the requests aren't cached
      var url = 'http://api.dribbble.com' + path + '?uuid=' + uuid();

      // Looking for the paging options so we can add them to the query string
      if (args.length > 0) {
        for (var opt in args[0]) {
          url += '&' + opt + '=' + args[0][opt];
        }
      }

      return getJSON(url);
    }
  }

  for (var method in methods) {
    exports[method] = createAPIMethod(methods[method]);
  }

  // Sychronous request to url
  function getJSON (url) {
    var request = NSURLRequest.requestWithURL(NSURL.URLWithString(url));
    var response = NSURLConnection.sendSynchronousRequest_returningResponse_error(request, null, null);
    return JSON.parse(NSString.alloc().initWithData_encoding(response, NSUTF8StringEncoding));
  }

  //Thanks to Kevin Hakanson
  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/873856#873856
  function uuid () {
    var s = [],
      hexDigits = '0123456789ABCDEF',
      i = 0;

    for (i = 0; i < 32; i += 1) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }

    s[12] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
    s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01

    return s.join('');
  }

  return exports;
}());
