Dropzone.autoDiscover = false;
$(function () {
    $("#myUploader").dropzone({
        url: "/file/post",
        method: "post",
        uploadMultiple: true,
        parallelUploads: 2,
        dictDefaultMessage: "Drag files here or <br> click to select... ",
    });

});