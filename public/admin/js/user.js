

$(function(){
  var page=1;
  var pageSize=5;
  render();
   var id,isDelete
  $('tbody').on('click','button',function(){
    $("#userModal").modal("show")
    id=$(this).parent().data("id")
   isDelete=$(this).hasClass("btn-danger")?0:1
  })
  $(".confirm").on('click',function(){
    $.ajax({
      type:"post",
        url:"/user/updateUser",
        data:{
          id:id,
          isDelete:isDelete
        },
        success:function (info) {

          if(info.success){
            //关闭模态框
            $("#userModal").modal("hide");

            //重新渲染表格
            render();
          }

        }
    })
  })
  function render(){
    $.ajax({
      url:"/user/queryUser",
      type:"get",
      data:{
        page:page,
        pageSize:pageSize
      },
      success:function(info){
        console.log(info)
        var html=template('tpl',info)
        $("tbody").html(html)
        
          //渲染分页
          $("#paginator").bootstrapPaginator({
            bootstrapMajorVersion:3,
            currentPage: page,
            totalPages: Math.ceil(info.total/info.size),
            onPageClicked:function (a,b,c,p) {
              page = p;
              render();
            }
          });
      }
    })
  }
})