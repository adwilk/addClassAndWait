(function($) {
    var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';
    var promises = [];
    var collection;

    $.fn.addClassAndWait = function(className) {
        collection = this;

        this.each(function() {
            var deferred = new $.Deferred();

            $(this).addClass(className).one(transitionEnd, function() {
                deferred.resolve(collection);
            });

            promises.push(deferred);
        });

        return $.when.apply(undefined, promises).promise();
    };
}(jQuery));