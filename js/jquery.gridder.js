! function(a) {
    a.fn.extend(a.easing, {
        def: "easeInOutExpo",
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 === b ? c : b === e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        }
    }), a.fn.gridderExpander = function(b) {
        var c = a.extend({}, a.fn.gridderExpander.defaults, b);
        return this.each(function() {
            function b(b, c) {
                c.scroll && a("html, body").animate({
                    scrollTop: b.find(".selectedItem").offset().top - c.scrollOffset
                }, {
                    duration: 200,
                    easing: c.animationEasing
                }), e.removeClass("hasSelectedItem"), f = !1, b.find(".selectedItem").removeClass("selectedItem"), b.find(".gridder-show").slideUp(c.animationSpeed, c.animationEasing, function() {
                    b.find(".gridder-show").remove(), c.onClosed(b)
                })
            }
            var d, e = a(this),
                f = !1;
            c.onStart(e), e.find(".gridder-list").on("click", function(g) {
                g.stopPropagation();
                var h = a(this);
                if (h.hasClass("selectedItem")) return void b(e, c);
                if (e.find(".selectedItem").removeClass("selectedItem"), h.addClass("selectedItem"), e.find(".gridder-show").remove(), c.scroll) {
                    var i = "panel" === c.scrollTo ? h.offset().top - c.scrollOffset : h.offset().top - c.scrollOffset;
                    a("html, body").animate({
                        scrollTop: i
                    }, {
                        duration: c.animationSpeed,
                        easing: c.animationEasing
                    })
                }
                e.hasClass("hasSelectedItem") || e.addClass("hasSelectedItem");
                var j = a('<div class="gridder-show loading"></div>');
                d = j.insertAfter(h);
                var k = a(h.data("griddercontent")).html(),
                    l = '<div class="gridder-padding">';
                l += '<div class="gridder-navigation">', l += '<a href="#" class="gridder-close">Close</a>', l += '<a href="#" class="gridder-nav prev">Previous</a>', l += '<a href="#" class="gridder-nav next">Next</a>', l += "</div>", l += '<div class="gridder-expanded-content">', l += k, l += "</div>", l += "</div>", d.html(l), f ? d.find(".gridder-padding").fadeIn(c.animationSpeed, c.animationEasing, function() {
                    f = !0, a.isFunction(c.onContent) && c.onContent(d)
                }) : d.find(".gridder-padding").slideDown(c.animationSpeed, c.animationEasing, function() {
                    f = !0, a.isFunction(c.onContent) && c.onContent(d)
                })
            }), e.on("click", ".gridder-nav.next", function(b) {
                b.preventDefault(), a(this).parents(".gridder-show").next().trigger("click")
            }), e.on("click", ".gridder-nav.prev", function(b) {
                b.preventDefault(), a(this).parents(".gridder-show").prev().prev().trigger("click")
            }), e.on("click", ".gridder-close", function(a) {
                a.preventDefault(), b(e, c)
            })
        })
    }, a.fn.gridderExpander.defaults = {
        scroll: !1,
        scrollOffset: 30,
        scrollTo: "panel",
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        onStart: function() {
            console.log("Gridder Inititialized")
        },
        onContent: function() {
            console.log("Gridder Content Loaded")
        },
        onClosed: function() {
            console.log("Gridder Closed")
        }
    }
}(jQuery);