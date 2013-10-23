var list ={
	
	url			: '/admin/index',
	page		: 1,
	currentObj 	: null,
	
	data:{
		
		filter_field:{},
		filter_value:{}
		
	},
	
	swapImage: function(src){
		
		 return ( 
		              src == config.icon_unactive ? config.icon_active : config.icon_unactive);		
	},
	
	updateHTML: function(data){
		
		switch(data.action){
			
			case 'toggle-status':
				
				if(data.key == 'single'){
					var src = this.currentObj.attr('src');
					this.currentObj.attr('src', list.swapImage(src));
				
				}else{
					// process multi
					var arrStatus=[config.icon_unactive, config.icon_active]
					data.id.forEach( function(elem){
						var src = $( 'tr[id=' + elem + ']').find('img.status').attr('src');
						$( 'tr[id=' + elem + ']').find('img.status').attr('src', arrStatus[data.status]);
					} );
					common.closeDialog();
				}
				
			break;
			
			case 'delete':
				
				if(data.key == 'single'){
					$( 'tr[id=' + data.id + ']' ).remove();
				}else{
				
					data.id.forEach( function(elem){
						$( 'tr[id=' + elem + ']' ).remove();
					} );
				}
				common.closeDialog();
				
			break;
			
			default:
			
			break
			
		}
		
	},
	
	toggleMultiVal: function(status){

		var mess = (status==1) ? 'enable' : 'disable';
		var callback_func = list.doUpdate;
	 	var listid = $('input:checked:not(.chkCheckall)').map(function(i,n) {
	        return $(n).val();
	    }).get(); //get converts it to an array
		
    
		common.dialog(callback_func, {action:'toggle-status', key: 'multi', id: listid, status:status}, 
					  'Make ' + mess + ' selected rows ?', 
					  "All selected rows will " + mess + "!");
		
	},
	
	toggleVal: function(id,e){
		
		this.currentObj = $(e.target);
		var data = {action:'toggle-status', key: 'single', id: id};
		list.doUpdate(data);
		
	},
	
	 
	// do delete, update
	doUpdate: function(data){
		
		$.ajax({
			url: list.url + '/' + data.action,
			data: data,
			
		}).done(function(resp) {
			
			list.updateHTML(data);
			
		})
	},
	
	show: function(){
		
		$.ajax({
			url: this.url + '/list',
			context: $('#container'),
			data: this.data,
			dataType: "json",
			
		}).done(function(json ) {
			//json
			$(this).html(json[0])
			$('span[id=spnPaging]').each(function(){
				$(this).html(json[1]);
			})
			$('#spnTotalRows').html(json[2]);
			
		});		
		
	},
	
	deleteMultiRow: function(){
		
		var callback_func = list.doUpdate;
	 	var listid = $('input:checked:not(.chkCheckall)').map(function(i,n) {
	        return $(n).val();
	    }).get(); //get converts it to an array

    
		common.dialog(callback_func, {action:'delete', key: 'multi', id: listid}, 
					  'Delete selected rows ?', 
					  "All selected rows would be deleted, This deletion can not undo!");
					  
	},
	
	deleteSingleRow: function(id){
		
		var callback_func = list.doUpdate;
		common.dialog(callback_func, {action:'delete', key: 'single', id: id}, 
					  'Delete one row ?', 
					  "This deletion can not undo!");
	},
	
	makePaging: function(obj){
		
		// makePerPage
		this.data ['limit'] = obj.val();
		this.data ['page'] = this.page;
		
	},
	
	makeSearch: function(){
		
		// make search
		field = $('#listField').val();
		keyword = $('#txtKeyword').val();
		this.data ['field'] = field;
		this.data ['keyword'] = keyword;
		
	},

	sort: function(sort_field, sort_type){
		this.data['sort_field'] = sort_field;
		this.data['sort_type'] = sort_type;
		this.show();
	},

	/*updateSort: function(){
		var objValue=[];
		var tr = $("#container").children("tr");
		tr.each(function(){
			var objs={
					   "id" : $(this).attr("id"),
					   "value" : $(this).children("td").find("input[name='a.sort']").val()
					 }   
			objValue.push(objs);
		})
		$.ajax({
					url:  this.url +'/update-sort',
					data: {param:objValue},
					success: function(){	
					}
					
			})	
	},*/
	
	makeFilterText: function(obj){

		var filter_value = obj.val();
		
		if( filter_value !='all' ){
			
			var key = obj.attr('id');
			
			this.data.filter_field[ key ]=obj.attr('id');
			
			this.data.filter_value[ key ]=filter_value;
			
		}
		
	},
	
	makeFilterDate: function(obj){

		var filter_value = obj.val();
		if( filter_value !='all' ){
			
			this.data['filter_field_date'] = obj.attr('id');
			this.data['filter_value_date'] = filter_value;
		}
		
	},
	
	bindEvent: function(){
		$(document).ready(function(){

			$('select[rel=listFilter]').each(function(){
				$(this).change(function(){
					list.makeFilterText($(this));
					list.show();
					
				})			
			});
			
			$('#btnSearch').click(function(){
				list.makeSearch();
				list.show();
			});
			
			$('select[id=cboLimit]').each(function(){
				$(this).change(function(){
					$('select[id=cboLimit]').not(this).val($(this).val());
					list.makePaging( $(this) );
					list.show();
				})	
			});
			
		// add multiple Check / Uncheck functionality
		    $(".chkCheckall").click(function () {
		          $(".chkRow").prop("checked", $(this).is(':checked'));
		    });
		    
		    $("#bUpdateSort").click(function(){
		    	var objValue=[];
				var tr = $("#container").children("tr");
				tr.each(function(){
					var objs={
					        "id" : $(this).attr("id"),
					        "value" : $(this).children("td").find("input[name='a.sort']").val()
					    }   

					objValue.push(objs);
				})
				$.ajax({
					url: '/admin/index/update-sort',
					data: {param:objValue},
					success: function(){
						
					}
					
				})
			})
        
		})
			
	},
	
	loadDatePicker: function(){
		
		$(document).ready(function(){
			
			$( "input.textbox_calendar" ).each(function(){
				$(this).datepicker({
					showOn: "button",
					buttonImage: "/static_admin/images/edit.png",
					buttonImageOnly: true,
					dateFormat: "dd/mm/yy",
					showAnim: "slide",
					changeMonth: true,
					changeYear: true					
				});
			})
			
			$( "input.textbox_calendar" ).each(function(){
				$(this).change(function(){
					list.makeFilterDate($(this));
					list.show();
				})
							
			})
			
		})
	},
	
}



var requestPage = function(url, page){
	list.page = page;
	list.makeSearch();
	list.makePaging( $('select[id=cboLimit]').first() );
	list.show();
}