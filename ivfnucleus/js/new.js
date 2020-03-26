$(document).ready(function(){
	var edideel = 0;
	 $('.slct tbody tr').click(function(){
	 	  $('.slct tbody tr').removeClass('highlight');
	 	  $(this).addClass('highlight');

	 	  edideel = $(this).attr('data');//edit & delete table tr
	 });

	  //blog page
	  $('#dlet2').click(function(){
	 	  if (edideel !=0) {
	 	  	   $.ajax({
	 	   	    	 type: 'POST',
	 	   	    	 url: 'deleteblog.php',
	 	   	    	 data: {edideel:edideel},

	 	   	    	 success : function(data){
	 	   	    	 	  if (data == 'yes') {
	 	   	    	 	  	$('.slct tbody tr[data="'+edideel+'"]').remove();
	 	   	    	 	  }
	 	   	    	 	  else{
	 	   	    	 	  	  alert(data);
	 	   	    	 	  }
	 	   	    	 }
	 	   	    })
	 	  }
	 });
	  //blog page
	  $('#edti2').click(function(){
	 	  if(edideel != 0) {
	 	  	  let r = '.slct tbody tr[data="'+edideel+'"]';
	 	  	  let tr = $(r+' .b_name').html();
	 	  	  $('input[name="bname"]').val(tr);

	 	  	  let tr1 = $(r+' .b_date').html();
	 	  	  $('.dseoo').html(` <label>SEO</label>
                                            <textarea id="facio" name="bseo" rows="10" class="form-control">`+tr1+`</textarea>`)

	 	  	  let tr5 = $(r+' .b_content').html();
	 	  	  $('.edtokart').html(` <label>Description</label>
                                            <textarea id="editor2" name="bdesc" rows="10" cols="80">`+tr5+`</textarea>`)
	 	  	   $(function() {
                CKEDITOR.replace('editor2');
                $(".textarea").wysihtml5();
            });
	 	  	  // $('textarea[name="bdesc"]').val(tr5);
	 	  	  // $('iframe').contents().find('body').text(tr5);

	 	  	  $('.xyz1').html('<input type="hidden" name="idf2" value="'+edideel+'">');

	 	  	  $('#edttt2').attr('action', 'changeimage.php');
	 	  	  $('#upudt button').html('update');
	 	  }

	 });
	  
});