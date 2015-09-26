$(document).ready(function(){
  console.log('inside the jquery ready function');

  $('.submit').click(function(){

    var newPerson = inputs('new');
    // inp_id = dataSet.getcount() + 1;
    console.log('newPerson',newPerson);
    dataSet.addPerson(newPerson);
    paintTable();
  });

  $('.delete').click(function(){
    console.log(this.attr('id'));
    /*    
    console.log(this.attr('id'));
    var which = this.attr('id');
    */    
    dataSet.deletePerson()
    paintTable();
  });

  $('.edit').click(function(){
    console.log(this.attr('id'));
    // hide edit  delete button
    // show update and cancel button 
    // on click of update call update function
  });
  $('.update').click(function(id){
    // get the values from dom
    var updatedPerson = inputs('edited');
    dataSet.update(updatedPerson)
    paintTable();
  });
});


//library code follows