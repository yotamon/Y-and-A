$(".item-checkbox").change(function() {
    $(this).parent().toggleClass("checked");
});

$(".item-name").click(function() {
    let parentItem = $(this).parent();
    $(".item").each(function (e){$(this).removeClass("active")})
    // parentItem.toggleClass('active');
    // if(parentItem) {parentItem.removeClass('active')}
    parentItem.addClass("active");
    if (parentItem.hasClass('active')) {
        $('#details-box').addClass('active');
        console.log($('#details-title-item-name'));
        $('#details-title-item-name').html($(this).val())
    }
    else {
        $('#details-box').removeClass('active');
    }
});