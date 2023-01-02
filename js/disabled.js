$('#btn-war').on('click', () => {
    $('.toast.warning').removeClass('show');
})
$(document).ready(function () {
    $(document).click(function(){
        $(".usercm").hide();
    });
    document.oncontextmenu = function (e) {
        //Get window size:
        const winWidth = $(document).width();
        const winHeight = $(document).height();
        //Get pointer position:
        const posX = e.pageX;
        const posY = e.pageY;
        //Get contextmenu size:
        const menuWidth = $(".usercm").width();
        const menuHeight = $(".usercm").height();
        //Security margin:
        const secMargin = 10;
        //Prevent page overflow:
        if(posX + menuWidth + secMargin >= winWidth
            && posY + menuHeight + secMargin >= winHeight){
            //Case 1: right-bottom overflow:
            posLeft = posX - menuWidth - secMargin + "px";
            posTop = posY - menuHeight - secMargin + "px";
        }
        else if(posX + menuWidth + secMargin >= winWidth){
            //Case 2: right overflow:
            posLeft = posX - menuWidth - secMargin + "px";
            posTop = posY + secMargin + "px";
        }
        else if(posY + menuHeight + secMargin >= winHeight){
            //Case 3: bottom overflow:
            posLeft = posX + secMargin + "px";
            posTop = posY - menuHeight - secMargin + "px";
        }
        else {
            //Case 4: default values:
            posLeft = posX + secMargin + "px";
            posTop = posY + secMargin + "px";
        };
        //Display contextmenu:
        $(".usercm").css({
            "left": posLeft,
            "top": posTop
        }).show();
        return false;
    };
    document.onkeydown = function () {
        /*f12*/
        if (window.event && window.event.keyCode == 123) {
            event.keyCode = 0;
            event.returnValue = false;
            $('.toast.warning').addClass('show');
            setTimeout(()=>{
                $('.toast.warning').removeClass('show');
            },2000)
            return false;
        }
        /*ctrl+u*/
        if (event.ctrlKey && window.event.keyCode == 85) {
            $('.toast.warning').addClass('show');
            setTimeout(()=>{
                $('.toast.warning').removeClass('show');
            },2000)
            return false;
        }
        /*ctrl+shift+i*/
        if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
            $('.toast.warning').addClass('show');
            setTimeout(()=>{
                $('.toast.warning').removeClass('show');
            },2000)
            return false;
        }
        /* Ctrl+S*/
        else if ((event.ctrlKey) && (event.keyCode == 83)) {
            $('.toast.warning').addClass('show');
            setTimeout(()=>{
                $('.toast.warning').removeClass('show');
            },2000)
            return false;
        }
    };
});