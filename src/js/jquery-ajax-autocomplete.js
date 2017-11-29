/**
 * Created by dhiogoboza on 29/11/17.
 * Available at: https://github.com/dhiogoboza/jquery-ajax-autocomplete
 * A jquery plugin to autocomplete a input text with result of a ajax request.
 */

(function ($) {
    
    $.fn.autocomplete = function (options) {
        var settings = $.extend({
            url: "",
            method: "POST",
            data: "",
            delay: 200,
            onSelection: null
        }, options );
        
        function request(url, text, method, data, successCallback, errorCallback) {
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: "text=" + text + "&" + data,
                success: function(result) {
                    successCallback(result);
                },
                error: function(xhr, status, error) {
                    errorCallback(xhr, status, error);
                }
            });
        }
        
        return this.each(function() {
            var $this = $(this);
            var $data_container;
            var $visible_input;
            var timeout = 0;
            
            function initNodes() {
                $visible_input = $this.clone();
                $visible_input.attr("id", "");
                $visible_input.attr("name", "");
                
                $visible_input.insertAfter($this);
                $this.hide();
                
                $container = $(".a-ac-container");
                
                if (!$container.length) {
                    $container = $("<div />").addClass("a-ac-container");
                    $("body").append($container);
                }
            }
                       
            function initEvents() {
                $visible_input.on('input', function() {
                    if (timeout !== 0) {
                        clearTimeout(timeout);
                    }
                    
                    timeout = setTimeout(function() {
                        request(settings.url, $visible_input.val(), settings.method, settings.data, successCallback, errorCallback);
                    }, settings.delay);
                    
                }).focusout(function() {
                    setTimeout(function() {
                        $container.empty().hide();
                    }, 100);
                    
                });
            }
            
            function selectItem($selection) {
                var id = $selection.data("id");
                var name = $selection.html();
                
                $this.val(id);
                $visible_input.val(name);
                
                if (settings.onSelection) {
                    settings.onSelection(id, name); 
                }
            }
            
            function successCallback(result) {
                $container.empty().css({
                        "top": $visible_input.position().top + $visible_input.height(),
                        "left": $visible_input.position().left,
                        "width": $visible_input.width() + 3
                    }).show();
                
                for (var i = 0; i < result.length; i++){
                    var obj = result[i];
                    
                    var $item = $("<div />")
                            .addClass("item")
                            .html(obj["name"])
                            .data("id", obj["id"])
                            .on("click", function() {
                                selectItem($(this));
                            });
                    
                    $container.append($item);
                }
            }
            
            function errorCallback(xhr, status, error) {
                alert("Error at request");
            }
            
            initNodes();
            initEvents();
        });
    };
})(jQuery);
