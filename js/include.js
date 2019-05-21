$(function () {
    $.get("/html/header.html",function (data) {
        $("#header").html(data);
    });
    $.get("footer.html",function (data) {
        $("#footer").html(data);
    });
    $.get("loginModel.html",function (data) {
        $("#loginModel").html(data);
    });
    $.get("registeModel.html",function (data) {
        $("#registeModel").html(data);
    });
});