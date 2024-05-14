$(document).ready(function () {
    size_li = $(".blog-list-wrap .post-listing .blog-list-item").size();
    x=6;
    $('.blog-list-wrap .post-listing .blog-list-item:lt('+x+')').show();
    $('#list-load-more').click(function () {
        x= (x+6 <= size_li) ? x+6 : size_li;
        $('.blog-list-wrap .post-listing .blog-list-item:lt('+x+')').fadeIn(300);
        if(x == size_li){
        $('#list-load-more').hide();
        }
    });
});
