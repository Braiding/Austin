  window.onload = function(){
    var topbtn =  document.getElementById("backTop");
    // 屏幕高度
    var screenHeight = document.documentElement.clientHeight;
    // 滚动事件
    window.onscroll = function(){
      var pageOffset = window.pageYOffset;
      if(pageOffset >= screenHeight){
        topbtn.style.display = "block";
      }else{
        topbtn.style.display = "none";
      }
    }
    // 计时器
    var timer = null;
    topbtn.onclick = function(){
      timer = setInterval(function(){
        var pageOffset = window.pageYOffset;
        var scrollSpeed = pageOffset / 8;
        window.scrollTo({
          top: pageOffset - scrollSpeed,
          behavior: "instant"
        });
        if(pageOffset == 0){
          clearInterval(timer);
        }
      }, 30);
    }
  }
