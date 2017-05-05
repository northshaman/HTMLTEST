jQuery('document').ready(function(){
jQuery('body').append('<a href="http://google.com">Перейти в Гугл!</a>');

jQuery('input').on('keyup',function(){
  var value1,value2;

  value1=parseInt(jQuery('#text1').val());
  value2=parseInt(jQuery('#text2').val());

jQuery('#exit').html(value1*value2);

});
//pClone = jQuery('p').clone();
//jQuery('body').append(pClone);
var test1;
test1=prompt('Dratuti','123');
jQuery(text1).val(test1);
//test1 = confirm('Delete');
if(test1==123){
  alert("koko!");
} else {
  alert("bad");
}
});
