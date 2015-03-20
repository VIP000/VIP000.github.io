/* dCodes Framework: (c) TemplateAccess */

// <![CDATA[
$(function() {
	$("img.dc_wrapcapt").each(function(i) 
	{
		var captiontext = $(this).attr('title');
		$(this).wrap("<div class='img_box'></div>");
		$(this).parent().append("<div class='thecaption'>" + captiontext + "</div>");
	});
});