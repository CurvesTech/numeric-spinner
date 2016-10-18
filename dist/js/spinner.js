$(function(){


    // append on the up and down buttons.
    $('.spinner').append(
      '<div class="input-group-btn-vertical">' +
        '<button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>' +
        '<button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>' +
       '</div>'
    );

    $('.spinner .btn:first-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {   
        // check if it has a step attribute.
        var step = 1; // default step.
        if(input.attr('step') != null) {
          step = parseInt(input.attr('step'));
        } 
        input.val(parseInt(input.val(), 10) + step);
      } else {
        btn.next("disabled", true);
      }
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {

        // check if it has a step attribute.
        var step = 1; // default step
        if(input.attr('step') != null) {
          step = parseInt(input.attr('step'));
        }     
        input.val(parseInt(input.val(), 10) - step);
      } else {
        btn.prev("disabled", true);
      }
    });

})