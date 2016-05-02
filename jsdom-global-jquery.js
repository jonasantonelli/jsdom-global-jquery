/*
 * enables jsdom globally + jquery.
 */



module.exports = function jsDomGlobalJquery(){
    
    var jsdomGlobal = require('jsdom-global/register');
    var jQuery = require('jquery')(window);
    
    global.jQuery = jQuery;
    
};

