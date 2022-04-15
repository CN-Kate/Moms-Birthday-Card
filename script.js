$("button").click(function() {
    $(".present").attr("src", "https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg");
    $("button").hide();
    $(".message").text("Pick a Saturday and lets go meet some otters together!");
    $("img").attr("href", "https://www.sheddaquarium.org/about-shedd/press-releases/sea-otter-encounter");
});