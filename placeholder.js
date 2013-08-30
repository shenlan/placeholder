//placeHolder 插件
(function($){
    $.fn.placeHolder=function(options){
        if(typeof options == "string"){
            return $.fn.placeHolder.methods[options](this);
        }
        options = options || {};

        return this.each(function(){
            var setting = $.data(this, "placeHolder");
            if(setting){
                setting = $.extend(setting, options);    
            }else{
                var opts = $.extend({}, $.fn.placeHolder.defaults, options);
                opts = {options : opts, label : $('<label>')}
                $.data(this, "placeHolder", opts);
                create(this, opts);
            }
        })
    };

    function create(target,opts){
        if ('placeholder' in document.createElement(target.tagName)) return;
        var _self = $(target),
            _placeholder = _self.attr('placeholder'),
            _label = opts.label,
            _pos = _self.offset(),
            _className = opts.options.className;

        _label.css({position:"absolute",top: _pos.top, left: _pos.left,color:"#999",cursor:"text"}).
            addClass(_className).
            html(_placeholder).
            appendTo("body").
            click(function () {
                _self.get(0).focus();
            });
        _self.keydown(function(event) {
            _label.hide();
        }).blur(function(event) {
            if(_self.val().length>0){
                _label.hide();
            }else{
                _label.show();
            }
        });
    };

    $.fn.placeHolder.methods = {
        show:function(jq){
            return jq.each(function(){
                $(this).data("placeHolder").label.show();
            });
        },
        hide:function(jq){
            return jq.each(function(){
                $(this).data("placeHolder").label.hide();
            });
        }
    };

    $.fn.placeHolder.defaults  = {className:'placeholder'};

})(jQuery);