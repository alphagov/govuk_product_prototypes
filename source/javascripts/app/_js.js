
// Plugin to clear text fields
(function ($, undefined) {  
    $.fn.clearable = function () {  
        var $this = this;  
        $this.wrap('<div class="clear-holder" />');  
        var helper = $('<span class="clear-helper">×</span>');  
        $this.parent().append(helper);  
        helper.click(function(){  
            $this.val(""); 
            $('.search-results').removeClass('visible'); 
        });  
    };  
})(jQuery);

$(document).ready(function() {


$("#input-search").clearable();


// Initialise tabs
$('.tabs-code').accTabs({ defaultTab: 100 });

});