var duration = 2000; //'slow'
$(".test").each(function(index) {
    $(this).delay(duration * index).fadeIn(duration);
});