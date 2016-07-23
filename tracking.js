(function() {
    Tracking = {
        trackingMessage : false,

        init: function() {
            var elements = document.querySelectorAll("[data-definition]");
            var obj  = event = desc = fn = currentEl = null;
            if (elements.length) {
                for (var index = 0; index < elements.length; index++) {
                    currentEl = elements[index];
                    obj = Tracking.__convert(currentEl.getAttribute("data-definition"));
                    if (obj.length) {
                        for(var indexObj = 0; indexObj < obj.length; indexObj++){
                            Tracking.__applyEvent(currentEl, obj[indexObj]);
                        }
                    }else{
                        Tracking.__applyEvent(currentEl, obj);
                    }
                };
            }
        },
        __debugConsole: function(obj, target){
            if(Tracking.trackingMessage){
                if(typeof obj.description != 'undefined'){
                    console.log(obj.description);
                }else{
                    var t = target.getAttribute("data-description");
                    if(t != undefined){
                        console.log(t)
                    }
                }
            }
        },
        __applyEvent: function(currentEl, obj) {
            var body = body = document.querySelector("body");
            event = currentEl.getAttribute("data-event");
            event = event != null ? event : obj.event; 
            if(event != null){
                (event == "scroll" ? window : currentEl).addEventListener(event, function(event) {
                    event.preventDefault();

                    if (this != window) {
                        fn = typeof obj.function != 'undefined' ? obj.function : currentEl.getAttribute("data-function");
                        Tracking.__debugConsole(obj, this);
                    } else {
                        fn = typeof obj.function != 'undefined' ? obj.function : body.getAttribute("data-function");
                        Tracking.__debugConsole(obj, body);
                    }

                    if (typeof fn == "string") {
                        try {
                            if(window[fn]()){
                                Tracking.__ga(obj);
                                return;
                            }
                        } catch (err) {
                            throw ("function " + fn + " does not exists");
                        }
                    }else{
                        Tracking.__ga(obj);
                    }
                });
            }
        },
        __convert: function(obj) {
            try {
                return JSON.parse(obj);
            } catch (err) {
                throw ("Invalid format in JSON, use this notation data-definition='{\"field\" : \"value\"}' in yor HTML markup");
            }
        },
        __ga: function(obj) {
            console.log(obj.eventLabel + " was triggered");
            //ga('send', 'event', obj.eventCategory, obj.eventAction, obj.eventLabel); return;
        }
    }
    Tracking.init();
})();