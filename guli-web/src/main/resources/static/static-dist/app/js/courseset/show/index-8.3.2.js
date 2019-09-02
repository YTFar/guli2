webpackJsonp(["app/js/courseset/show/index"], {
    0: function (t, e) {
        t.exports = jQuery
    }, "2d70a8242072c37fd8f4": function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var o = i("d14d05cad9e7abf02a5d"), r = i("d5fb0e67d2d4c1ebaaed"), a = n(r),
            s = (i("9181c6995ae8c5c94b7a"), i("584608d4ce1895020bac"));
        new (n(i("96c126fe59db35f1e68f")).default), echo.init(), (0, o.chapterAnimate)(), function () {
            var t = $(".color-primary").css("color"), e = $(".color-warning").css("color");
            $("#freeprogress").easyPieChart({
                easing: "easeOutBounce",
                trackColor: "#ebebeb",
                barColor: t,
                scaleColor: !1,
                lineWidth: 14,
                size: 145,
                onStep: function (t, e, i) {
                    $("canvas").css("height", "146px"), $("canvas").css("width", "146px"), 100 == Math.round(i) && $(this.el).addClass("done"), $(this.el).find(".percent").html(Translator.trans("course_set.learn_progress") + '<br><span class="num">' + Math.round(i) + "%</span>")
                }
            }), $("#orderprogress-plan").easyPieChart({
                easing: "easeOutBounce",
                trackColor: "#ebebeb",
                barColor: e,
                scaleColor: !1,
                lineWidth: 14,
                size: 145
            });
            var i = $("#orderprogress-plan").length > 0 ? "transparent" : "#ebebeb";
            $("#orderprogress").easyPieChart({
                easing: "easeOutBounce",
                trackColor: i,
                barColor: t,
                scaleColor: !1,
                lineWidth: 14,
                size: 145,
                onStep: function (t, e, i) {
                    100 == Math.round(i) && $(this.el).addClass("done"), $(this.el).find(".percent").html(Translator.trans("course_set.learn_progress") + '<br><span class="num">' + Math.round(i) + "%</span>")
                }
            })
        }(), function () {
            $(".member-expire").length && $(".member-expire a").trigger("click")
        }(), function () {
            var t = parseInt($("#discount-endtime-countdown").data("remaintime"));
            if (t >= 0) {
                var e = new Date((new Date).valueOf() + 1e3 * t);
                $("#discount-endtime-countdown").countdown(e, function (t) {
                    $(this).html(t.strftime(Translator.trans("course_set.show.count_down_format_hint")))
                }).on("finish.countdown", function () {
                    $(this).html(Translator.trans("course_set.show.time_finish_hint")), setTimeout(function () {
                        $.post(app.crontab, function () {
                            window.location.reload()
                        })
                    }, 2e3)
                })
            }
        }(), $(".js-attachment-list").length > 0 && new a.default($(".js-attachment-list")), (0, s.buyBtn)($(".js-buy-btn")), (0, s.buyBtn)($(".js-task-buy-btn"))
    }, "2e99c3409e5b9bc7ee65": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.debounce = function (t, e, i) {
            var n = void 0, o = 0;
            return function () {
                for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                if (i) n && clearTimeout(n), n = setTimeout(function () {
                    t.apply(void 0, a)
                }, e); else {
                    var l = (new Date).getTime();
                    if (l - o < e) return;
                    o = l, t.apply(void 0, a)
                }
            }
        }
    }, "584608d4ce1895020bac": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        e.buyBtn = function (t) {
            t.on("click", function (t) {
                $.post($(t.currentTarget).data("url"), function (t) {
                    "object" === (void 0 === t ? "undefined" : n(t)) ? window.location.href = t.url : $("#modal").modal("show").html(t)
                })
            })
        }
    }, "8eb9dc5e12df64060c23": function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(), s = i("9181c6995ae8c5c94b7a");
        i("8f3ec98312b1f1f6bafb");
        var l = i("63fff8fb24f3bd1f61cd"), c = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(l), u = i("2e99c3409e5b9bc7ee65"), d = function (t) {
            function e(t) {
                n(this, e);
                var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._options = t, i._initConfig(), i._displayAllImmediately ? i._displayCurrentPageDataAndSwitchToNext() : i._initUpLoading(), i
            }

            return r(e, t), a(e, [{
                key: "_initUpLoading", value: function () {
                    if (0 != $(".js-down-loading-more").length) var t = this, e = new Waypoint({
                        element: $(".js-down-loading-more")[0], handler: function (i) {
                            "down" == i && (t._isLastPage || t._canNotDisplayMore() ? e.disable() : (t._scrollToBottom(), e.disable(), t._displayCurrentPageDataAndSwitchToNext(), Waypoint.refreshAll(), e.enable()))
                        }, offset: "bottom-in-view"
                    })
                }
            }, {
                key: "_initConfig", value: function () {
                    this._currentPage = 1, this._displayAllImmediately = !!this._options.displayAllImmediately, this._displayAllImmediately ? this._pageSize = 1e4 : this._pageSize = this._options.pageSize ? this._options.pageSize : 25, this._afterFirstLoad = this._options.afterFirstLoad ? this._options.afterFirstLoad : null, this._isFirstLoad = !0, this._options.displayItem ? (this._displayItemDisplayed = !1, this._displayItem = this._options.displayItem) : (this._displayItemDisplayed = !0, this._displayItem = null), this._isLastPage = !1
                }
            }, {
                key: "_displayCurrentPageDataAndSwitchToNext", value: function () {
                    this._displayData(), this._isLastPage || this._currentPage++, this._isFirstLoad && (this._displayItemDisplayed ? (this._isFirstLoad = !1, this._afterFirstLoad && this._afterFirstLoad()) : this._displayCurrentPageDataAndSwitchToNext())
                }
            }, {
                key: "_displayData", value: function () {
                    if (!this._isLastPage) for (var t = this._getStartIndex(), e = 0; e < this._pageSize; e++) {
                        var i = this._options.data[e + t];
                        if (!this._displayItemDisplayed) {
                            var n = this._displayItem.key, o = this._displayItem.value;
                            i[n] == o && (this._displayItemDisplayed = !0)
                        }
                        (0, s.isEmpty)(i) ? this._isLastPage = !0 : this._generateSingleCachedData(i)
                    }
                }
            }, {
                key: "_scrollToBottom", value: function () {
                    var t = this, e = this, i = $(".js-sidebar-pane");
                    if (i.length) {
                        var n = i[0], o = i.height(), r = n.scrollHeight, a = n.scrollTop;
                        e._afterFirstLoad && n.addEventListener("scroll", (0, u.debounce)(function () {
                            a + o >= r && !t._isLastPage && e._displayCurrentPageDataAndSwitchToNext()
                        }, 500, !0))
                    }
                }
            }, {
                key: "_generateSingleCachedData", value: function (t) {
                    var e = $(this._options.dataTemplateNode).html(), i = t, n = this,
                        o = e.replace(/({\w+})/g, function (t) {
                            return n._replace(t, i, "{", "}")
                        });
                    o = o.replace(/(%7B\w+%7D)/g, function (t) {
                        return n._replace(t, i, "%7B", "%7D")
                    });
                    var r = $("<div>").append(o);
                    this._removeUnNeedNodes(r), $(".infinite-container").append(r.html())
                }
            }, {
                key: "_getStartIndex", value: function () {
                    return (this._currentPage - 1) * this._pageSize
                }
            }, {
                key: "_replace", value: function (t, e, i, n) {
                    var o = t.split(i)[1].split(n)[0], r = this._options.context;
                    return "function" == typeof r[o] ? r[o](e, r) : void 0 !== e[o] ? e[o] : t
                }
            }, {
                key: "_canNotDisplayMore", value: function () {
                    return 1 != this._currentPage && 0 != $(".js-only-display-one-page").length
                }
            }, {
                key: "_removeUnNeedNodes", value: function (t) {
                    t.find("[display-if=false]").remove(), t.find("[display-if=0]").remove(), t.find("[hide-if=1]").remove(), t.find("[hide-if=true]").remove(), t.find("tmp :first-child").each(function () {
                        var t = $(this).parent();
                        t.hasClass("js-ignore-remove") || "TMP" != t[0].nodeName || $(this).unwrap()
                    })
                }
            }]), e
        }(c.default);
        e.default = d
    }, "8f3ec98312b1f1f6bafb": function (t, e) {
        !function () {
            "use strict";

            function t(n) {
                if (!n) throw new Error("No options passed to Waypoint constructor");
                if (!n.element) throw new Error("No element option passed to Waypoint constructor");
                if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
                this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                    name: this.options.group,
                    axis: this.axis
                }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
            }

            var e = 0, i = {};
            t.prototype.queueTrigger = function (t) {
                this.group.queueTrigger(this, t)
            }, t.prototype.trigger = function (t) {
                this.enabled && this.callback && this.callback.apply(this, t)
            }, t.prototype.destroy = function () {
                this.context.remove(this), this.group.remove(this), delete i[this.key]
            }, t.prototype.disable = function () {
                return this.enabled = !1, this
            }, t.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0, this
            }, t.prototype.next = function () {
                return this.group.next(this)
            }, t.prototype.previous = function () {
                return this.group.previous(this)
            }, t.invokeAll = function (t) {
                var e = [];
                for (var n in i) e.push(i[n]);
                for (var o = 0, r = e.length; r > o; o++) e[o][t]()
            }, t.destroyAll = function () {
                t.invokeAll("destroy")
            }, t.disableAll = function () {
                t.invokeAll("disable")
            }, t.enableAll = function () {
                t.Context.refreshAll();
                for (var e in i) i[e].enabled = !0;
                return this
            }, t.refreshAll = function () {
                t.Context.refreshAll()
            }, t.viewportHeight = function () {
                return window.innerHeight || document.documentElement.clientHeight
            }, t.viewportWidth = function () {
                return document.documentElement.clientWidth
            }, t.adapters = [], t.defaults = {
                context: window,
                continuous: !0,
                enabled: !0,
                group: "default",
                horizontal: !1,
                offset: 0
            }, t.offsetAliases = {
                "bottom-in-view": function () {
                    return this.context.innerHeight() - this.adapter.outerHeight()
                }, "right-in-view": function () {
                    return this.context.innerWidth() - this.adapter.outerWidth()
                }
            }, window.Waypoint = t
        }(), function () {
            "use strict";

            function t(t) {
                window.setTimeout(t, 1e3 / 60)
            }

            function e(t) {
                this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop()
                }, this.waypoints = {
                    vertical: {},
                    horizontal: {}
                }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
            }

            var i = 0, n = {}, o = window.Waypoint, r = window.onload;
            e.prototype.add = function (t) {
                var e = t.options.horizontal ? "horizontal" : "vertical";
                this.waypoints[e][t.key] = t, this.refresh()
            }, e.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
                t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
            }, e.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), e.didResize = !1
                }

                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
                })
            }, e.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), e.didScroll = !1
                }

                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
                })
            }, e.prototype.handleResize = function () {
                o.Context.refreshAll()
            }, e.prototype.handleScroll = function () {
                var t = {}, e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                for (var i in e) {
                    var n = e[i], o = n.newScroll > n.oldScroll, r = o ? n.forward : n.backward;
                    for (var a in this.waypoints[i]) {
                        var s = this.waypoints[i][a];
                        if (null !== s.triggerPoint) {
                            var l = n.oldScroll < s.triggerPoint, c = n.newScroll >= s.triggerPoint, u = l && c,
                                d = !l && !c;
                            (u || d) && (s.queueTrigger(r), t[s.group.id] = s.group)
                        }
                    }
                }
                for (var h in t) t[h].flushTriggers();
                this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
            }, e.prototype.innerHeight = function () {
                return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
            }, e.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty()
            }, e.prototype.innerWidth = function () {
                return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
            }, e.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
                for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
            }, e.prototype.refresh = function () {
                var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
                this.handleScroll(), t = {
                    horizontal: {
                        contextOffset: e ? 0 : i.left,
                        contextScroll: e ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: e ? 0 : i.top,
                        contextScroll: e ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                for (var r in t) {
                    var a = t[r];
                    for (var s in this.waypoints[r]) {
                        var l, c, u, d, h, p = this.waypoints[r][s], f = p.options.offset, y = p.triggerPoint, m = 0,
                            g = null == y;
                        p.element !== p.element.window && (m = p.adapter.offset()[a.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(a.contextDimension * f / 100))), l = a.contextScroll - a.contextOffset, p.triggerPoint = Math.floor(m + l - f), c = y < a.oldScroll, u = p.triggerPoint >= a.oldScroll, d = c && u, h = !c && !u, !g && d ? (p.queueTrigger(a.backward), n[p.group.id] = p.group) : !g && h ? (p.queueTrigger(a.forward), n[p.group.id] = p.group) : g && a.oldScroll >= p.triggerPoint && (p.queueTrigger(a.forward), n[p.group.id] = p.group)
                    }
                }
                return o.requestAnimationFrame(function () {
                    for (var t in n) n[t].flushTriggers()
                }), this
            }, e.findOrCreateByElement = function (t) {
                return e.findByElement(t) || new e(t)
            }, e.refreshAll = function () {
                for (var t in n) n[t].refresh()
            }, e.findByElement = function (t) {
                return n[t.waypointContextKey]
            }, window.onload = function () {
                r && r(), e.refreshAll()
            }, o.requestAnimationFrame = function (e) {
                (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
            }, o.Context = e
        }(), function () {
            "use strict";

            function t(t, e) {
                return t.triggerPoint - e.triggerPoint
            }

            function e(t, e) {
                return e.triggerPoint - t.triggerPoint
            }

            function i(t) {
                this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
            }

            var n = {vertical: {}, horizontal: {}}, o = window.Waypoint;
            i.prototype.add = function (t) {
                this.waypoints.push(t)
            }, i.prototype.clearTriggerQueues = function () {
                this.triggerQueues = {up: [], down: [], left: [], right: []}
            }, i.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var n = this.triggerQueues[i], o = "up" === i || "left" === i;
                    n.sort(o ? e : t);
                    for (var r = 0, a = n.length; a > r; r += 1) {
                        var s = n[r];
                        (s.options.continuous || r === n.length - 1) && s.trigger([i])
                    }
                }
                this.clearTriggerQueues()
            }, i.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = o.Adapter.inArray(e, this.waypoints);
                return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
            }, i.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = o.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null
            }, i.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t)
            }, i.prototype.remove = function (t) {
                var e = o.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1)
            }, i.prototype.first = function () {
                return this.waypoints[0]
            }, i.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1]
            }, i.findOrCreate = function (t) {
                return n[t.axis][t.name] || new i(t)
            }, o.Group = i
        }(), function () {
            "use strict";

            function t(t) {
                this.$element = e(t)
            }

            var e = window.jQuery, i = window.Waypoint;
            e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
                t.prototype[i] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return this.$element[i].apply(this.$element, t)
                }
            }), e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
                t[n] = e[n]
            }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
        }(), function () {
            "use strict";

            function t(t) {
                return function () {
                    var i = [], n = arguments[0];
                    return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function () {
                        var o = t.extend({}, n, {element: this});
                        "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
                    }), i
                }
            }

            var e = window.Waypoint;
            window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
        }()
    }, "96c126fe59db35f1e68f": function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(), r = i("8eb9dc5e12df64060c23"), a = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(r), s = function () {
            function t(e) {
                n(this, t), void 0 === e && (e = {}), this._init(e)
            }

            return o(t, [{
                key: "_init", value: function (t) {
                    var e = {
                        data: this._toJson($(".js-hidden-data").html()), context: {
                            course: this._toJson($(".js-hidden-course-info").html()),
                            i18n: this._toJson($(".js-hidden-i18n").html()),
                            metas: this._toJson($(".js-hidden-activity-metas").html()),
                            currentTimeStamp: parseInt($(".js-hidden-current-timestamp").html(), 10),
                            isChapter: function (t, e) {
                                return "chapter" == t.itemType
                            },
                            isUnit: function (t, e) {
                                return "unit" == t.itemType
                            },
                            isTask: function (t, e) {
                                return "task" == t.itemType
                            },
                            getChapterName: function (t, e) {
                                return Translator.trans("course.chapter", {
                                    chapter_name: e.i18n.i18nChapterName,
                                    number: t.number,
                                    title: t.title
                                })
                            },
                            getUnitName: function (t, e) {
                                return Translator.trans("course.unit", {
                                    part_name: e.i18n.i18nUnitName,
                                    number: t.number,
                                    title: t.title
                                })
                            },
                            getTaskName: function (t, e) {
                                return Translator.trans("course.catalogue.task_status.task", {
                                    taskName: e.i18n.i18nTaskName,
                                    taskNumber: t.number,
                                    taskTitle: t.title
                                })
                            },
                            hasWatchLimitRemaining: function (t, e) {
                                return !1 !== t.watchLimitRemaining
                            },
                            highlightTaskClass: function (t, e) {
                                return t.taskId == e.course.currentTaskId ? "active" : ""
                            },
                            taskClass: function (t, e) {
                                var i = "es-icon left-menu";
                                return e.isTaskLocked(t, e) ? i += " es-icon-lock" : "" == t.result || "false" == e.course.isMember ? i += " es-icon-undone-check color-gray" : "start" == t.resultStatus ? i += " es-icon-doing color-primary" : "finish" == t.resultStatus && (i += " es-icon-iccheckcircleblack24px color-primary"), i
                            },
                            isTaskLocked: function (t, e) {
                                return e.course.isMember ? "lockMode" == e.course.learnMode && t.lock : "lockMode" == e.course.learnMode
                            },
                            isPublished: function (t, e) {
                                return "published" == t.status
                            },
                            isPublishedTaskUnlocked: function (t, e) {
                                return e.isPublished(t, e) && !e.isTaskLocked(t, e)
                            },
                            isCloudVideo: function (t, e) {
                                return "video" == t.type && "cloud" == t.fileStorage
                            },
                            getMetaIcon: function (t, e) {
                                return void 0 !== e.metas[t.type] ? e.metas[t.type].icon : ""
                            },
                            getMetaName: function (t, e) {
                                return void 0 !== e.metas[t.type] ? e.metas[t.type].name : ""
                            },
                            isLiveReplayGenerated: function (t, e) {
                                return "ungenerated" != t.replayStatus
                            },
                            isLive: function (t, e) {
                                return "live" == t.type
                            },
                            isLiveNotStarted: function (t, e) {
                                return e.isLive(t, e) && e.currentTimeStamp < e.toInt(t.activityStartTime)
                            },
                            isLiveStarting: function (t, e) {
                                return e.isLive(t, e) && e.currentTimeStamp >= e.toInt(t.activityStartTime) && e.currentTimeStamp <= e.toInt(t.activityEndTime)
                            },
                            isLiveFinished: function (t, e) {
                                return e.isLive(t, e) && e.currentTimeStamp > e.toInt(t.activityEndTime)
                            },
                            toInt: function (t) {
                                return parseInt(t, 10)
                            }
                        }, dataTemplateNode: ".js-infinite-item-template"
                    }, i = $.extend(e, t);
                    new a.default(i), this._displayAllImmediately && this._destroyPaging()
                }
            }, {
                key: "_destroyPaging", value: function () {
                    for (var t = ["js-infinite-item-template", "js-hidden-data", "js-hidden-course-info", "js-hidden-i18n", "js-hidden-activity-metas", "js-hidden-current-timestamp", "infinite-container", "js-down-loading-more"], e = 0; e < t.length; e++) $("." + t[e]).removeClass(t[e])
                }
            }, {
                key: "_toJson", value: function (t) {
                    var e = {};
                    return t && (e = $.parseJSON(t.replace(/[\r\n\t]/g, ""))), e
                }
            }]), t
        }();
        e.default = s
    }, d14d05cad9e7abf02a5d: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = e.toggleIcon = function (t, e, i) {
            var n = t.find(".js-remove-icon"), o = t.find(".js-remove-text");
            n.hasClass(e) ? (n.removeClass(e).addClass(i), o && o.text(Translator.trans("收起"))) : (n.removeClass(i).addClass(e), o && o.text(Translator.trans("展开")))
        };
        e.chapterAnimate = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "body",
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".js-task-chapter",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "es-icon-remove",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "es-icon-anonymous-iconfont";
            $(t).on("click", e, function (t) {
                var r = $(t.currentTarget);
                r.nextUntil(e).animate({height: "toggle", opacity: "toggle"}, "normal"), n(r, i, o)
            })
        }
    }
}, ["2d70a8242072c37fd8f4"]);