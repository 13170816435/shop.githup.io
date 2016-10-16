function detailLi() {
   var str=location.search        //str的值为: ?xxx  就是传过来商品的ID(goosid)
    var indexs=str.substring(1,str.length) //得到?后面的值
			 	  $.ajax({
			 	  	  type:"get",
			 	  	  dataType:"JSONP",
			 	  	  url:'http://datainfo.duapp.com/shopdata/getGoods.php',
                       success:function(data){
                       	console.log(data)
                       	    for(var i=0;i<data.length;i++){        //遍历data数组 然后当等于传过来的ID时 就取出i (就知道你传过来的ID是哪个商品的ID了)
							        if(indexs==data[i].goodsID){
							                    indexs=i;
							              }
							         }
                       	    
                         $('.things').html('') //每次点击之前将 这个div里的内容清空
                       	    // console.log(data[indexs])
                      $('.things').append(createDiv(data[indexs][3]))
                       },    //如果你这里不加逗号的话 它会报button 按钮里的showData里的方法没定义
                       error:function(XMLHttpRequest,textStatus,error){
                       	   console.log("error");
                       }
			 	  })
			 }
	
    //var index = $(this).loc.index(); //index只能通过启动服务器之后才能获取到但是它在两个文件中使用所以这样是获取不到的
    
    
function detailLi2() {
   var str=location.search        //str的值为: ?xxx  就是传过来商品的ID(goosid)
    var indexs=str.substring(1,str.length) //得到?后面的值
    var newName=sessionStorage.getItem('newName')
			 	  $.ajax({
			 	  	  type:"get",
			 	  	  dataType:"JSONP",
			 	  	  data:{
	                        selectText:newName,
					   },
			 	  	  url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
                       success:function(data){
                       	console.log(data)
                       	    for(var i=0;i<data.length;i++){        //遍历data数组 然后当等于传过来的ID时 就取出i (就知道你传过来的ID是哪个商品的ID了)
							        if(indexs==data[i].goodsID){
							                    indexs=i;
							              }
							         }
                       	    
                         $('.things').html('') //每次点击之前将 这个div里的内容清空
                       	    // console.log(data[indexs])
                      $('.things').append(createDiv2(data[indexs][3]))
                       },    //如果你这里不加逗号的话 它会报button 按钮里的showData里的方法没定义
                       error:function(XMLHttpRequest,textStatus,error){
                       	   console.log("error");
                       }
			 	  })
			 }


function detailLi3() {
   
    var indexs=sessionStorage.getItem('id') //得到?后面的值
    var indexs=parseInt(indexs.substring(0,1))
    var newName=sessionStorage.getItem('types') 
    
			 	  $.ajax({
			 	  	  type:"get",
			 	  	  dataType:"JSONP",
			 	  	  url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
			 	  	  data:{
			 	  	  	  selectText: newName,
			 	  	  },
                       success:function(data){
                       	console.log(data)
                       	    for(var i=0;i<data.length;i++){        //遍历data数组 然后当等于传过来的ID时 就取出i (就知道你传过来的ID是哪个商品的ID了)
							        if(indexs==data[i].goodsID){
							                    indexs=i;
							              }
							         }
                       	    
                         $('.things').html('') //每次点击之前将 这个div里的内容清空
                       	     console.log(data[indexs])
                      $('.things').append(createDiv(data[indexs][3]))
                       },    //如果你这里不加逗号的话 它会报button 按钮里的showData里的方法没定义
                       error:function(XMLHttpRequest,textStatus,error){
                       	   console.log("error");
                       }
			 	  })
			 }

function createDiv(src){
        var LiHtml=$("#imgs").html();
        var newLi= LiHtml.replace('{{src}}',src)
        return newLi
    }

function createDiv2(src){
        var LiHtml=$("#imgs").html();
        var newLi= LiHtml.replace('{{src}}',src)
        return newLi
    }

function createDiv3(src){
        var LiHtml=$("#imgs").html();
        var newLi= LiHtml.replace('{{src}}',src)
        return newLi
    }