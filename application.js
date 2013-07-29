$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() 
  {
      $(".add").bind('click', function()
      {
        var grabText = $('')
        // $(".todo").append('<p>bacon</p>');  
        
        
       var addIt =  $('.todo-button').val()
       var addDiv =  $('.cheese') 
        
        $('.todo').append(addIt)
        $('.todo').appendTo(addDiv)

      });
  }

  function deleteParas()
  {
    $(this).on("click", function() 
    {if ($(this).on(click)     ) 
      {

      }  
    }); 
  }

  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});


// Delete: this takes an element out of the DOM
// Complete: this just appends some text to the file and says nice work 
// or something like that.  
