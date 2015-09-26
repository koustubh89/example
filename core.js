var inputs = function(type){
  var newPerson = new person();
  if(type == 'edited'){
    inp_name= $('.inp_updated_name').val();
    inp_age= $('.inp_updated_age').val();
    inp_phone= $('.inp_updated_phone').val();
    inp_id= '';
    // get edited person's row id
    newPerson = new person(inp_name,inp_age,inp_phone,inp_id);
  }else if(type == 'new'){
    inp_name= $('.inp_name').val();
    inp_age= $('.inp_age').val();
    inp_phone= $('.inp_phone').val();
    // genereate a new id
    inp_id = dataSet.getcount() + 1;
    newPerson = new person(inp_name,inp_age,inp_phone);
  }
  return newPerson;
}

var findTable = function(){
  var paintArea = $('#datatable');
  var table = $(paintArea.find('table'));
  return table;
};

var paintTable = function(){
  var table = findTable();
  var data = dataSet.getAll();
  for(var i in data){
    var newRow = "<tr>"+ 
      "<td> <input type='checkbox' data-id='"+data[i].id+"'/></td>"+
      "<td>"+data[i].name+"</td>"+
      "<td>"+data[i].age+"</td>"+
      "<td>"+data[i].phone+"</td>"+
      "<td> <input type='button' class='edit'   data-id='"+data[i].id+"' value='Edit'/></td>"+
      "<td> <input type='button' class='delete' data-id='"+data[i].id+"' value='Delete'/></td>"+
    "</tr>";
    table.find('tbody').append(newRow);
  };
}

var dataSet = {
  "allPersons" : [],
  iterate : function(){
    var idx = -1;
    for(var i in  this.allPersons){
        if(person.id == this.allPersons[i].id){
          idx = i;
          break;
        }
      }
    return idx;
  },
  getAll : function(){
    return this.allPersons;
  },
  getcount :  function(){
    return this.allPersons.length;
  },
  addPerson : function(person){
    var index = this.iterate();
    if(index == -1){
      this.allPersons.push(person);
      return true;
    }else{
      var message = "person with name"+ person.name+"already present" ;
      alert (message);
      return false;
    }
  }, 
  deletePerson :  function(person){
    var index = this.iterate();
    if(index > -1){
      this.allPersons.splice(index, 1); // removes the element from the array 
      return true;
    }else{
      alert("requested resource not present");
      return false;
    };
  },
  updatePerson : function(person){
    var index = this.iterate();
    if (index> -1) {
      this.allPersons[index] = person;
      return true;
    }else{
      alert("requested resource not present");
      return false;
    };
  }
};

var person = function(name,phone,age,generatedId){
  this.name=name;
  this.age=age;
  this.phone=phone;
  this.id=generatedId;
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