$(function() {

    $('li').css('font-size', '20px')
    $('h1, p, li').css('background-color', 'yellow')
    alert($('#heading').html());

    $('h1').click(() => {
        $("body").css('background-color', '#6495ED');
    })

    $("#doubleClickMe").on("dblclick", () => {
        $('p').css('font-size', '18px');
    })

   $('.hoverOver').on({
       mouseenter: () => {
           $('.hoverOver').css('color', 'red');
       },
       mouseleave: () => {
           $('.hoverOver').css('color', 'black');
       }
   })
});


