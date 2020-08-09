Dropzone.autoDiscover = false;
$(function () {
    $("#myUploader").dropzone({
        url: "/file/post",
        method: "post",
        uploadMultiple: true,
        parallelUploads: 2,
        dictDefaultMessage: "Drag files here or <br> click to select... ",
    });
    var selected_link, selected_div;

    $('.mynav .list li a.nav-link').on('click', function () {
        selected_link = $(this).attr('data-link');
        console.log(selected_link);
        selected_div = $('.menu-selected ') + selected_link;
        $('.mydropzone').hide();
        $('.menu-selected .menu-div').hide();
        $('.menu-selected ').fadeIn().children(selected_link).fadeIn();
    });


});