$(document).ready(function(){

    $('.card-y').on('click', function(){

        var url = $(this).data('url');

        window.location.href = url
    });
});