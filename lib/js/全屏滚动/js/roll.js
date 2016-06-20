$(function(){
    var fullPage=function(selector){
        return new fullPage.prototype.init(selector);
    }
    fullPage.prototype={
        init:function(selector){
            $(selector).height(this.h);
            return this;
        },
        h:window.innerHeight || document.documentElement.clientHeight ,
        direction:'vertical'
    }
    fullPage.prototype.init.prototype=fullPage.prototype;
    fullPage('li');
    console.log(fullPage().h);
});