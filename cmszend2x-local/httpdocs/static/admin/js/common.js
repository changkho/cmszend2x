// user-defined function
var common = {
	
	
	
	openProcess: function(){
		
		$('#loading').fadeIn('slow');
	},

	closeProcess: function(){
		
		$('#loading').fadeOut('slow');
	},
	
	closeDialog: function(){
		$( "#dialog-confirm" ).dialog( "close" );
	},
	
	dialog: function(callback_func, params, title, message){
		$( "#dialog-confirm").attr('title', title);
		$( "#dialogMessage").html(message);
		$( "#dialog-confirm").dialog({
			resizable: false,
			height:140,
			modal: true,
			buttons: {
				"Confirm": function() {
					callback_func.call(this,params)
				},
				Cancel: function() {
					common.closeDialog();
				}
			}
		});		
	},
	//Popup add item
	callAddPopup: function(url,title,w,pos){
		 $( "#popup-dialog:ui-dialog" ).dialog( "destroy" );	
			if(typeof(pos)=='undefined' || pos==null) pos='center';
			if(typeof(w)=='undefined' || w==null) w=920;
			if(typeof(title)=='undefined' || title==null) title="Popup";
			var dialogOpts= {
		            closeOnEscape: true,
		            height: 'auto',
		            autoOpen: false, width: w,title: title, draggable: true, resizable: false,
					modal: true,
					minHeight: 0,
					position: pos,
		            close: function(){  $( "#popup-dialog:ui-dialog" ).dialog( "destroy" );	} 
		        }
			$("#popup-dialog").load(url,function (response, status, xhr) {
				$("#popup-dialog").dialog(dialogOpts);
				$("#popup-dialog").dialog("open");
	    }); 
	},
	
	callAddPopup_bk: function(url,title,w,pos){
		 $( "#popup-dialog:ui-dialog" ).dialog( "destroy" );	
		if(typeof(pos)=='undefined' || pos==null) pos='center';
		if(typeof(w)=='undefined' || w==null) w=920;
		if(typeof(title)=='undefined' || title==null) title="Popup";
		$(function(){		
			$("#popup-dialog").dialog({
				autoOpen: false, width: w,title: title, draggable: true, resizable: false,
				modal: true,
				minHeight: 0,
				position: pos,
	 			open: function () {
	 				$("#popup-dialog").load(url,function (response, status, xhr) {});  
	        	},
				 close: function () {
	        	}
			});
		});
		$("#popup-dialog").dialog("open");
	},
	ajaxSetup: function(){
		
		$.ajaxSetup({
			
			cache:false,
			
			type: "POST",
			
			error: function (jqXHR, textStatus, errorThrown) {
				
			        alert(textStatus);
			        
			    }
			    			
		});
		
		$(document).ajaxStart(function(){
			
			common.openProcess();
			
		});		
		
		$(document).ajaxStop(function(){
			
			common.closeProcess();
			
		});		
		
	},

	
}

common.ajaxSetup();