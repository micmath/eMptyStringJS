window[""] = {
    capitalize:  function(emptyString) { return ""; },
    isArray:     function(emptyString) { return false; },
    isDate:      function(emptyString) { return false; },
    isFunction:  function(emptyString) { return false; },
    isEmpty:     function(emptyString) { return true; },
    isNumber:    function(emptyString) { return false; },
    escapeHTML:  function(emptyString) { return ""; },
    sub:         function(emptyString, pattern, replacement) { return ""; },
    interpolate: function(emptyString, data) { return ""; },
    stripTags:   function(emptyString) { return ""; },
    trim:        function(emptyString) { return ""; },
};

alert( window[""].isArray("") ); // false
alert( window[""].isEmpty("") ); // true