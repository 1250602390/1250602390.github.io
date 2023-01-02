$('#btn-war').on('click', () => {
    $('.toast.warning').removeClass('show');
})
$(document).ready(function () {
    document.oncontextmenu = function () {
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