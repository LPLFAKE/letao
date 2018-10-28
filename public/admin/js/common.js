NProgress.start()
NProgress.done() 
$(document).ajaxStart(function(){
  NProgress.start()
})
$(document).ajaxStop(function(){
  NProgress.done()
})


//二级分类管理
$(".category>a").on("click",function(){
  $(this).next().slideToggle()
})

//侧边栏显示与隐藏
$(".icon_menu").on("click",function(){
  $("body").toggleClass("active")
  $(".lt_aside").toggleClass("active")
})


//退出功能
$(".icon_logout").on("click",function(){
  $("#logoutModal").modal("show")
})

//模态框退出
$(".logout").on("click",function(){
  $.ajax({
    url:"/employee/employeeLogout",
    tape:"get",
    success:function(info){
      if(info.success){
        location.href="login.html"
      }
    }
  })
})