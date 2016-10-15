$('.allthings').on('click', '.del', function() {
	//console.log("delete")
	 $(this).parent().parent().parent().html("");
	 $(this).parent().parent().parent().css("border-bottom","none")
	var goodsId = $(this).attr('goodsId')
	$.ajax({
		type: "get",
		dataType: "JSONP",
		url:"http://datainfo.duapp.com/shopdata/updatecar.php",
		data: {
			userID:user,
			goodsID:goodsId,
			number:'0'
		},

		success: function(data){
	       $(this).parent().parent().parent().removeClass('things');
	       
		},
		error: function(XMLHttpRequest, textStatus, errors) {
			console.log("error");
		}
	});
})

//function createLis(src, name, price, discount, className, goodsId) {
//	var LiHtml = $("#items").html();
//	var newLi = LiHtml.replace("{{src}}", src).replace("{{name}}", name)
//		.replace("{{price}}", price).replace("{{discount}}", discount).replace("{{type}}", className)
//		.replace("{{goodsId}}", goodsId)
//	return newLi
//}