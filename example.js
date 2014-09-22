$(document).ready(function(){
  console.log('inside the jquery ready function');

  $('.sub').click(function(){
    inp_name= $('.inp_name').val();
    inp_age= $('.inp_age').val();
    inp_phone= $('.inp_phone').val();
    var newPerson = new person(inp_name,inp_age,inp_phone);
    console.log('newPerson',newPerson);
    makeAjax(newPerson);
  });
  
}); 

var person = function(name,phone,age){
  this.name=name;
  this.age=age;
  this.phone=phone;
  console.log('values collected on the calling object');
};

var makeAjax = function(data) {
  $.ajax({
    url: "your/own/api/call",
    data: data,
    }).done(function() {
      console.log('ajax call made.. implement what is to be done on success of this call');
    }).error(function(){
      console.log('api doesnt exist');
    });
};