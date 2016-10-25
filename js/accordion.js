
jQuery(function(){
	
	function close_accordion_section(currentAttrValue) {
							
                             jQuery('.accordion-section-title').removeClass('active');
                             jQuery('.accordion-section-content').slideUp(300).removeClass('open');
                     }
	
	
                     jQuery('.accordion-section-title').click(function(e) {
                             // Grab current anchor value
							
                             var currentAttrValue = jQuery(this).attr('id');

                             if(jQuery(this).is('.active')) {
								   close_accordion_section(currentAttrValue);
                             }else {
                                     close_accordion_section(currentAttrValue);

                                     // Add active class to section title
                                     jQuery(this).addClass('active');
                                     // Open up the hidden content panel
									 jQuery('.' + currentAttrValue).slideDown(300).addClass('open'); 
                             }

                             e.preventDefault();
                     });
					 
					 
					jQuery('#accordion-0').trigger('click');

});