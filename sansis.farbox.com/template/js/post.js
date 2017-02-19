

;$(function () {
    'use strict'
    

    $(".vice-pic img").mouseenter(
    	function(){
    		var thumbnil_url = $(this).attr("src");
    		var bigImage = $(".main-pic img")[0];
    		$(bigImage).attr("src", thumbnil_url);
    	}
    )
    $(".vice-pic img").hover(
    	function(){
    	$(this).css({
    		'cursor': 'pointer',
    		'opacity': '1',
    		'border' : '2px solid #5592a4'
    	})},function(){
    	$(this).css({
    		'opacity': '0.8',
    		'border': '2px solid transparent'
    	})}
    )
   


})

