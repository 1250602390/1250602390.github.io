//复制函数
function selectText(){
    if(document.Selection){
        //ie浏览器
        return document.selection.createRange().text.replace(/\s*/g,"");
    }else{
        //标准浏览器
        return window.getSelection().toString().replace(/\s*/g,"");
    }
}
function getSelect(){
    const values = selectText()
    if(values === ''){
        $('.toast.warning p').html('请选择复制的内容!')
        $('.toast.warning').addClass('show');
        setTimeout(()=>{
            $('.toast.warning').removeClass('show');
        },2000)
    }else {
        $('.toast.success p').html('复制成功!')
        $('.toast.success').addClass('show');
        setTimeout(()=>{
            $('.toast.success').removeClass('show');
        },2000)
    }
    document.execCommand('copy')
    window.getSelection().removeAllRanges();
}
function baiduSearch(){
    let values = selectText()
    if (values === ''){
        $('.toast.warning p').html('请选择搜索的内容!')
        $('.toast.warning').addClass('show');
        setTimeout(()=>{
            $('.toast.warning').removeClass('show');
        },2000)
    }else {
        window.open(`
    https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${values}AF&fenlei=256&rsv_pq=0x9d1d1a690009bb50&rsv_t=bc0dvuJ6l9F89ZuC2y1UFNBXx028%2FTtFrw%2FuOKrClSuJTSMy%2FtBZLzd7KtEm&rqlang=en&rsv_enter=0&rsv_dl=tb&rsv_sug3=2&rsv_sug1=2&rsv_sug7=100&rsv_btype=i&inputT=2725&rsv_sug4=2725
    `)
        values = ''
    }
}