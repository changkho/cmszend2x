$(document).ready(function(){	
	$("dl.zend_form" ).append("<div class='clear'></div>");
	//Load CKEDITOR 
	if ($(".editor").length > 0){
		$(".editor").each(function(){
			//$(this).parent().prev().css('float', 'none');
			if ($(this).hasClass('All')){
				CKEDITOR.replace(this, { height: 160,  width:715, toolbar: 'All' });
			}else if ($(this).hasClass('Full')){
				CKEDITOR.replace(this, { height: 250, width:715, toolbar: 'Full' });					
			}else if ($(this).hasClass('Basic')){
				CKEDITOR.replace(this, { height: 160, width:715, toolbar: 'Basic' });
			}else if ($(this).hasClass('Simple')){
				CKEDITOR.replace(this, { height: 160, width:715, toolbar: 'Simple' });					
			}
		});
	}
	//Load ckfinder
	$("*[class^='finder']")
		.each(function(){	
			//lay tham so
			var startupPath = '';
			var params = $(this).attr('class').split('|', 2);
			if (typeof(params[1]) != 'undefined') {
				startupPath = params[1];
			}
			$(this).attr('id',$(this).attr('name'));
			var functionData=$(this).attr('id');
			//tao control a
			var a = $("<a>").html('<div class="button2-left" style="margin-bottom: -7px;margin-left:2px; float: none; display: inline-block;"><div class="blank"><a class="modal" href="javascript:void(0)">Click chọn</a></div></div><br clear="all" /><br clear="all" />').click(function(){
				if (BrowseServer){
					BrowseServer(startupPath, functionData);
				}
			});
			//them vao sau textbox
			$(this).after(a);			
		})
	;	
	
	//Xu ly kiem tra du lieu nhap phai la so
	var number_last_value; 
	$("input.number").focus(function(){
		number_last_value = $(this).val();
	});
	$("input.number").blur(function(){
		var number = $(this).val(); 
		if ((number != '') && (isNaN(number) || (number < 0))){
			alert('Dữ liệu nhập không hợp lệ.');
			$(this).val(number_last_value).focus();
		}
	});	
	
	// An message box sau 3s
	var message = $(".system-message");
	if ( message != 'undefined' ) {
		message.delay(3000).fadeOut();
	}
	
	// Xu ly convert alias
	var name = $(".input-name");
	if(name!='undefined'){
		name.blur(function(){
			var str=$(this).val();
			if(str!=''){
					$.post('/admin/index/convert-alias',{name:str} ,function(result){
						$('.input-alias').val(result);			  
					});	
			}
		})
	}
	// Check all user 
	$("input[id^='ct']").click(function(){
		var param = $(this).attr('name');
		var status=this.checked;
		$("input[name^='module["+param+"]']").each(function(){this.checked=status;})
	});
	
	
});