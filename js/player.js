/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */ !(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define(t) :
        (((e = "undefined" != typeof globalThis ? globalThis : e || self).Vimeo =
                e.Vimeo || {}),
            (e.Vimeo.Player = t()));
})(this, function() {
    "use strict";

    function r(t, e) {
        var n,
            r = Object.keys(t);
        return (
            Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
                e &&
                (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n)),
            r
        );
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ?
                r(Object(n), !0).forEach(function(e) {
                    s(t, e, n[e]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) :
                r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
        }
        return t;
    }

    function j() {
        j = function() {
            return a;
        };
        var a = {},
            e = Object.prototype,
            s = e.hasOwnProperty,
            f =
            Object.defineProperty ||
            function(e, t, n) {
                e[t] = n.value;
            },
            t = "function" == typeof Symbol ? Symbol : {},
            o = t.iterator || "@@iterator",
            n = t.asyncIterator || "@@asyncIterator",
            r = t.toStringTag || "@@toStringTag";

        function i(e, t, n) {
            return (
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                }),
                e[t]
            );
        }
        try {
            i({}, "");
        } catch (e) {
            i = function(e, t, n) {
                return (e[t] = n);
            };
        }

        function u(e, t, n, r) {
            var i,
                a,
                u,
                c,
                o = t && t.prototype instanceof p ? t : p,
                l = Object.create(o.prototype),
                s = new x(r || []);
            return (
                f(l, "_invoke", {
                    value:
                        ((i = e),
                            (a = n),
                            (u = s),
                            (c = "suspendedStart"),
                            function(e, t) {
                                if ("executing" === c)
                                    throw new Error("Generator is already running");
                                if ("completed" === c) {
                                    if ("throw" === e) throw t;
                                    return T();
                                }
                                for (u.method = e, u.arg = t;;) {
                                    var n = u.delegate;
                                    if (n) {
                                        var r = (function e(t, n) {
                                            var r = n.method,
                                                o = t.iterator[r];
                                            if (void 0 === o)
                                                return (
                                                    (n.delegate = null),
                                                    ("throw" === r &&
                                                        t.iterator.return &&
                                                        ((n.method = "return"),
                                                            (n.arg = void 0),
                                                            e(t, n),
                                                            "throw" === n.method)) ||
                                                    ("return" !== r &&
                                                        ((n.method = "throw"),
                                                            (n.arg = new TypeError(
                                                                "The iterator does not provide a '" +
                                                                r +
                                                                "' method"
                                                            )))),
                                                    h
                                                );
                                            var i = d(o, t.iterator, n.arg);
                                            if ("throw" === i.type)
                                                return (
                                                    (n.method = "throw"),
                                                    (n.arg = i.arg),
                                                    (n.delegate = null),
                                                    h
                                                );
                                            var a = i.arg;
                                            return a ?
                                                a.done ?
                                                ((n[t.resultName] = a.value),
                                                    (n.next = t.nextLoc),
                                                    "return" !== n.method &&
                                                    ((n.method = "next"), (n.arg = void 0)),
                                                    (n.delegate = null),
                                                    h) :
                                                a :
                                                ((n.method = "throw"),
                                                    (n.arg = new TypeError(
                                                        "iterator result is not an object"
                                                    )),
                                                    (n.delegate = null),
                                                    h);
                                        })(n, u);
                                        if (r) {
                                            if (r === h) continue;
                                            return r;
                                        }
                                    }
                                    if ("next" === u.method) u.sent = u._sent = u.arg;
                                    else if ("throw" === u.method) {
                                        if ("suspendedStart" === c) throw ((c = "completed"), u.arg);
                                        u.dispatchException(u.arg);
                                    } else "return" === u.method && u.abrupt("return", u.arg);
                                    c = "executing";
                                    var o = d(i, a, u);
                                    if ("normal" === o.type) {
                                        if (
                                            ((c = u.done ? "completed" : "suspendedYield"), o.arg === h)
                                        )
                                            continue;
                                        return {
                                            value: o.arg,
                                            done: u.done
                                        };
                                    }
                                    "throw" === o.type &&
                                        ((c = "completed"), (u.method = "throw"), (u.arg = o.arg));
                                }
                            }),
                }),
                l
            );
        }

        function d(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                };
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                };
            }
        }
        a.wrap = u;
        var h = {};

        function p() {}

        function c() {}

        function l() {}
        var v = {};
        i(v, o, function() {
            return this;
        });
        var y = Object.getPrototypeOf,
            m = y && y(y(P([])));
        m && m !== e && s.call(m, o) && (v = m);
        var g = (l.prototype = p.prototype = Object.create(v));

        function w(e) {
            ["next", "throw", "return"].forEach(function(t) {
                i(e, t, function(e) {
                    return this._invoke(t, e);
                });
            });
        }

        function b(c, l) {
            var t;
            f(this, "_invoke", {
                value: function(n, r) {
                    function e() {
                        return new l(function(e, t) {
                            !(function t(e, n, r, o) {
                                var i = d(c[e], c, n);
                                if ("throw" !== i.type) {
                                    var a = i.arg,
                                        u = a.value;
                                    return u && "object" == typeof u && s.call(u, "__await") ?
                                        l.resolve(u.__await).then(
                                            function(e) {
                                                t("next", e, r, o);
                                            },
                                            function(e) {
                                                t("throw", e, r, o);
                                            }
                                        ) :
                                        l.resolve(u).then(
                                            function(e) {
                                                (a.value = e), r(a);
                                            },
                                            function(e) {
                                                return t("throw", e, r, o);
                                            }
                                        );
                                }
                                o(i.arg);
                            })(n, r, e, t);
                        });
                    }
                    return (t = t ? t.then(e, e) : e());
                },
            });
        }

        function k(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
        }

        function E(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }

        function x(e) {
            (this.tryEntries = [{
                tryLoc: "root"
            }]),
            e.forEach(k, this),
                this.reset(!0);
        }

        function P(t) {
            if (t) {
                var e = t[o];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        r = function e() {
                            for (; ++n < t.length;)
                                if (s.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                            return (e.value = void 0), (e.done = !0), e;
                        };
                    return (r.next = r);
                }
            }
            return {
                next: T
            };
        }

        function T() {
            return {
                value: void 0,
                done: !0
            };
        }
        return (
            f(g, "constructor", {
                value: (c.prototype = l),
                configurable: !0
            }),
            f(l, "constructor", {
                value: c,
                configurable: !0
            }),
            (c.displayName = i(l, r, "GeneratorFunction")),
            (a.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return (!!t && (t === c || "GeneratorFunction" === (t.displayName || t.name)));
            }),
            (a.mark = function(e) {
                return (
                    Object.setPrototypeOf ?
                    Object.setPrototypeOf(e, l) :
                    ((e.__proto__ = l), i(e, r, "GeneratorFunction")),
                    (e.prototype = Object.create(g)),
                    e
                );
            }),
            (a.awrap = function(e) {
                return {
                    __await: e
                };
            }),
            w(b.prototype),
            i(b.prototype, n, function() {
                return this;
            }),
            (a.AsyncIterator = b),
            (a.async = function(e, t, n, r, o) {
                void 0 === o && (o = Promise);
                var i = new b(u(e, t, n, r), o);
                return a.isGeneratorFunction(t) ?
                    i :
                    i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
            }),
            w(g),
            i(g, r, "Generator"),
            i(g, o, function() {
                return this;
            }),
            i(g, "toString", function() {
                return "[object Generator]";
            }),
            (a.keys = function(e) {
                var n = Object(e),
                    r = [];
                for (var t in n) r.push(t);
                return (
                    r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var t = r.pop();
                            if (t in n) return (e.value = t), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (a.values = P),
            (x.prototype = {
                constructor: x,
                reset: function(e) {
                    if (
                        ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = void 0),
                            this.tryEntries.forEach(E), !e)
                    )
                        for (var t in this)
                            "t" === t.charAt(0) &&
                            s.call(this, t) &&
                            !isNaN(+t.slice(1)) &&
                            (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(n) {
                    if (this.done) throw n;
                    var r = this;

                    function e(e, t) {
                        return (
                            (i.type = "throw"),
                            (i.arg = n),
                            (r.next = e),
                            t && ((r.method = "next"), (r.arg = void 0)), !!t
                        );
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var o = this.tryEntries[t],
                            i = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc"),
                                u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                            } else if (a) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (
                            r.tryLoc <= this.prev &&
                            s.call(r, "finallyLoc") &&
                            this.prev < r.finallyLoc
                        ) {
                            var o = r;
                            break;
                        }
                    }
                    o &&
                        ("break" === e || "continue" === e) &&
                        o.tryLoc <= t &&
                        t <= o.finallyLoc &&
                        (o = null);
                    var i = o ? o.completion : {};
                    return (
                        (i.type = e),
                        (i.arg = t),
                        o ?
                        ((this.method = "next"), (this.next = o.finallyLoc), h) :
                        this.complete(i)
                    );
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ?
                        (this.next = e.arg) :
                        "return" === e.type ?
                        ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end")) :
                        "normal" === e.type && t && (this.next = t),
                        h
                    );
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc), E(n), h;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r,
                                o = n.completion;
                            return "throw" === o.type && ((r = o.arg), E(n)), r;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return (
                        (this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: n
                        }),
                        "next" === this.method && (this.arg = void 0),
                        h
                    );
                },
            }),
            a
        );
    }

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                c = u.value;
        } catch (e) {
            return void n(e);
        }
        u.done ? t(c) : Promise.resolve(c).then(r, o);
    }

    function h(u) {
        return function() {
            var e = this,
                a = arguments;
            return new Promise(function(t, n) {
                var r = u.apply(e, a);

                function o(e) {
                    c(r, t, n, o, i, "next", e);
                }

                function i(e) {
                    c(r, t, n, o, i, "throw", e);
                }
                o(void 0);
            });
        };
    }

    function l(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
                Object.defineProperty(e, y(r.key), r);
        }
    }

    function e(e, t, n) {
        return (
            t && o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        );
    }

    function s(e, t, n) {
        return (
            (t = y(t)) in e ?
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            }) :
            (e[t] = n),
            e
        );
    }

    function i(e) {
        return (i = Object.setPrototypeOf ?
            Object.getPrototypeOf.bind() :
            function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf ?
            Object.setPrototypeOf.bind() :
            function(e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }

    function a() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return (
                Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function() {})
                ), !0
            );
        } catch (e) {
            return !1;
        }
    }

    function d(e, t, n) {
        return (d = a() ?
            Reflect.construct.bind() :
            function(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new(Function.bind.apply(e, r))();
                return n && f(o, n.prototype), o;
            }).apply(null, arguments);
    }

    function t(e) {
        var r = "function" == typeof Map ? new Map() : void 0;
        return (t = function(e) {
            if (
                null === e ||
                ((t = e), -1 === Function.toString.call(t).indexOf("[native code]"))
            )
                return e;
            var t;
            if ("function" != typeof e)
                throw new TypeError(
                    "Super expression must either be null or a function"
                );
            if (void 0 !== r) {
                if (r.has(e)) return r.get(e);
                r.set(e, n);
            }

            function n() {
                return d(e, arguments, i(this).constructor);
            }
            return (
                (n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                f(n, e)
            );
        })(e);
    }

    function p(e) {
        if (void 0 === e)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
        return e;
    }

    function v(n) {
        var r = a();
        return function() {
            var e,
                t = i(n);
            return (function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t)
                    throw new TypeError(
                        "Derived constructors may only return object or undefined"
                    );
                return p(e);
            })(
                this,
                r ?
                ((e = i(this).constructor), Reflect.construct(t, arguments, e)) :
                t.apply(this, arguments)
            );
        };
    }

    function y(e) {
        var t = (function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 === n) return ("string" === t ? String : Number)(e);
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
    }
    var n =
        "undefined" != typeof global &&
        "[object global]" === {}.toString.call(global);

    function m(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ?
            e :
            ""
            .concat(t.toLowerCase())
            .concat(e.substr(0, 1).toUpperCase())
            .concat(e.substr(1));
    }

    function g(e) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
    }

    function w(e) {
        return /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e);
    }

    function b(e) {
        var t,
            n = 0 < arguments.length && void 0 !== e ? e : {},
            r = n.id,
            o = n.url,
            i = r || o;
        if (!i)
            throw new Error(
                "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
            );
        if (((t = i), !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t))
            return "https://vimeo.com/".concat(i);
        if (g(i)) return i.replace("http:", "https:");
        if (r) throw new TypeError("“".concat(r, "” is not a valid video id."));
        throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
    }

    function k(t, e, n, r, o) {
        var i = 3 < arguments.length && void 0 !== r ? r : "addEventListener",
            a = 4 < arguments.length && void 0 !== o ? o : "removeEventListener",
            u = "string" == typeof e ? [e] : e;
        return (
            u.forEach(function(e) {
                t[i](e, n);
            }), {
                cancel: function() {
                    return u.forEach(function(e) {
                        return t[a](e, n);
                    });
                },
            }
        );
    }
    var E = void 0 !== Array.prototype.indexOf,
        x = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(n || (E && x)))
        throw new Error(
            "Sorry, the Vimeo Player API is not available in this browser."
        );
    var P,
        T,
        O,
        _,
        M =
        "undefined" != typeof globalThis ?
        globalThis :
        "undefined" != typeof window ?
        window :
        "undefined" != typeof global ?
        global :
        "undefined" != typeof self ?
        self :
        {};

    function S() {
        if (void 0 === this)
            throw new TypeError("Constructor WeakMap requires 'new'");
        if ((_(this, "_id", "_WeakMap_" + N() + "." + N()), 0 < arguments.length))
            throw new TypeError("WeakMap iterable is not supported");
    }

    function C(e, t) {
        if (!F(e) || !T.call(e, "_id"))
            throw new TypeError(
                t + " method called on incompatible receiver " + typeof e
            );
    }

    function N() {
        return Math.random().toString().substring(2);
    }

    function F(e) {
        return Object(e) === e;
    }
    (P =
        "undefined" != typeof globalThis ?
        globalThis :
        "undefined" != typeof self ?
        self :
        "undefined" != typeof window ?
        window :
        M).WeakMap ||
        ((T = Object.prototype.hasOwnProperty),
            (O =
                Object.defineProperty &&
                (function() {
                    try {
                        return 1 === Object.defineProperty({}, "x", {
                            value: 1
                        }).x;
                    } catch (e) {}
                })()),
            (_ = function(e, t, n) {
                O
                    ?
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        writable: !0,
                        value: n,
                    }) :
                    (e[t] = n);
            }),
            (P.WeakMap =
                (_(S.prototype, "delete", function(e) {
                        if ((C(this, "delete"), !F(e))) return !1;
                        var t = e[this._id];
                        return !(!t || t[0] !== e) && (delete e[this._id], !0);
                    }),
                    _(S.prototype, "get", function(e) {
                        if ((C(this, "get"), F(e))) {
                            var t = e[this._id];
                            return t && t[0] === e ? t[1] : void 0;
                        }
                    }),
                    _(S.prototype, "has", function(e) {
                        if ((C(this, "has"), !F(e))) return !1;
                        var t = e[this._id];
                        return !(!t || t[0] !== e);
                    }),
                    _(S.prototype, "set", function(e, t) {
                        if ((C(this, "set"), !F(e)))
                            throw new TypeError("Invalid value used as weak map key");
                        var n = e[this._id];
                        return n && n[0] === e ? (n[1] = t) : _(e, this._id, [e, t]), this;
                    }),
                    _(S, "_polyfill", !0),
                    S)));
    var L,
        A =
        ((function(e) {
                var t, n, r;
                (r = function() {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        e = Object.prototype.toString,
                        u =
                        "undefined" != typeof setImmediate ?
                        function(e) {
                            return setImmediate(e);
                        } :
                        setTimeout;
                    try {
                        Object.defineProperty({}, "x", {}),
                            (t = function(e, t, n, r) {
                                return Object.defineProperty(e, t, {
                                    value: n,
                                    writable: !0,
                                    configurable: !1 !== r,
                                });
                            });
                    } catch (e) {
                        t = function(e, t, n) {
                            return (e[t] = n), e;
                        };
                    }

                    function c(e, t) {
                        (this.fn = e), (this.self = t), (this.next = void 0);
                    }

                    function l(e, t) {
                        r.add(e, t), (n = n || u(r.drain));
                    }

                    function s(e) {
                        var t,
                            n = typeof e;
                        return (
                            null == e || ("object" != n && "function" != n) || (t = e.then),
                            "function" == typeof t && t
                        );
                    }

                    function f() {
                        for (var e = 0; e < this.chain.length; e++)
                            !(function(e, t, n) {
                                var r, o;
                                try {
                                    !1 === t ?
                                        n.reject(e.msg) :
                                        (r = !0 === t ? e.msg : t.call(void 0, e.msg)) ===
                                        n.promise ?
                                        n.reject(TypeError("Promise-chain cycle")) :
                                        (o = s(r)) ?
                                        o.call(r, n.resolve, n.reject) :
                                        n.resolve(r);
                                } catch (e) {
                                    n.reject(e);
                                }
                            })(
                                this,
                                1 === this.state ?
                                this.chain[e].success :
                                this.chain[e].failure,
                                this.chain[e]
                            );
                        this.chain.length = 0;
                    }

                    function d(e) {
                        var n,
                            r = this;
                        if (!r.triggered) {
                            (r.triggered = !0), r.def && (r = r.def);
                            try {
                                (n = s(e)) ?
                                l(function() {
                                    var t = new v(r);
                                    try {
                                        n.call(
                                            e,
                                            function() {
                                                d.apply(t, arguments);
                                            },
                                            function() {
                                                h.apply(t, arguments);
                                            }
                                        );
                                    } catch (e) {
                                        h.call(t, e);
                                    }
                                }): ((r.msg = e), (r.state = 1), 0 < r.chain.length && l(f, r));
                            } catch (e) {
                                h.call(new v(r), e);
                            }
                        }
                    }

                    function h(e) {
                        var t = this;
                        t.triggered ||
                            ((t.triggered = !0),
                                t.def && (t = t.def),
                                (t.msg = e),
                                (t.state = 2),
                                0 < t.chain.length && l(f, t));
                    }

                    function p(e, n, r, o) {
                        for (var t = 0; t < n.length; t++)
                            !(function(t) {
                                e.resolve(n[t]).then(function(e) {
                                    r(t, e);
                                }, o);
                            })(t);
                    }

                    function v(e) {
                        (this.def = e), (this.triggered = !1);
                    }

                    function y(e) {
                        (this.promise = e),
                        (this.state = 0),
                        (this.triggered = !1),
                        (this.chain = []),
                        (this.msg = void 0);
                    }

                    function m(e) {
                        if ("function" != typeof e) throw TypeError("Not a function");
                        if (0 !== this.__NPO__) throw TypeError("Not a promise");
                        this.__NPO__ = 1;
                        var r = new y(this);
                        (this.then = function(e, t) {
                            var n = {
                                success: "function" != typeof e || e,
                                failure: "function" == typeof t && t,
                            };
                            return (
                                (n.promise = new this.constructor(function(e, t) {
                                    if ("function" != typeof e || "function" != typeof t)
                                        throw TypeError("Not a function");
                                    (n.resolve = e), (n.reject = t);
                                })),
                                r.chain.push(n),
                                0 !== r.state && l(f, r),
                                n.promise
                            );
                        }),
                        (this.catch = function(e) {
                            return this.then(void 0, e);
                        });
                        try {
                            e.call(
                                void 0,
                                function(e) {
                                    d.call(r, e);
                                },
                                function(e) {
                                    h.call(r, e);
                                }
                            );
                        } catch (e) {
                            h.call(r, e);
                        }
                    }
                    var g = t({},
                        "constructor",
                        m, !(r = {
                            add: function(e, t) {
                                (a = new c(e, t)),
                                i ? (i.next = a) : (o = a),
                                    (i = a),
                                    (a = void 0);
                            },
                            drain: function() {
                                var e = o;
                                for (o = i = n = void 0; e;) e.fn.call(e.self), (e = e.next);
                            },
                        })
                    );
                    return (
                        t((m.prototype = g), "__NPO__", 0, !1),
                        t(m, "resolve", function(n) {
                            return n && "object" == typeof n && 1 === n.__NPO__ ?
                                n :
                                new this(function(e, t) {
                                    if ("function" != typeof e || "function" != typeof t)
                                        throw TypeError("Not a function");
                                    e(n);
                                });
                        }),
                        t(m, "reject", function(n) {
                            return new this(function(e, t) {
                                if ("function" != typeof e || "function" != typeof t)
                                    throw TypeError("Not a function");
                                t(n);
                            });
                        }),
                        t(m, "all", function(t) {
                            var a = this;
                            return "[object Array]" != e.call(t) ?
                                a.reject(TypeError("Not an array")) :
                                0 === t.length ?
                                a.resolve([]) :
                                new a(function(n, e) {
                                    if ("function" != typeof n || "function" != typeof e)
                                        throw TypeError("Not a function");
                                    var r = t.length,
                                        o = Array(r),
                                        i = 0;
                                    p(
                                        a,
                                        t,
                                        function(e, t) {
                                            (o[e] = t), ++i === r && n(o);
                                        },
                                        e
                                    );
                                });
                        }),
                        t(m, "race", function(t) {
                            var r = this;
                            return "[object Array]" != e.call(t) ?
                                r.reject(TypeError("Not an array")) :
                                new r(function(n, e) {
                                    if ("function" != typeof n || "function" != typeof e)
                                        throw TypeError("Not a function");
                                    p(
                                        r,
                                        t,
                                        function(e, t) {
                                            n(t);
                                        },
                                        e
                                    );
                                });
                        }),
                        m
                    );
                }),
                ((n = M)[(t = "Promise")] = n[t] || r()),
                e.exports && (e.exports = n[t]);
            })((L = {
                exports: {}
            })),
            L.exports),
        R = new WeakMap();

    function q(e, t, n) {
        var r = R.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(n), R.set(e.element, r);
    }

    function I(e, t) {
        return (R.get(e.element) || {})[t] || [];
    }

    function V(e, t, n) {
        var r = R.get(e.element) || {};
        if (!r[t]) return !0;
        if (!n) return (r[t] = []), R.set(e.element, r), !0;
        var o = r[t].indexOf(n);
        return (-1 !== o && r[t].splice(o, 1),
            R.set(e.element, r),
            r[t] && 0 === r[t].length
        );
    }

    function D(e) {
        if ("string" == typeof e)
            try {
                e = JSON.parse(e);
            } catch (e) {
                return console.warn(e), {};
            }
        return e;
    }

    function W(e, t, n) {
        var r, o;
        e.element.contentWindow &&
            e.element.contentWindow.postMessage &&
            ((r = {
                    method: t
                }),
                void 0 !== n && (r.value = n),
                8 <=
                (o = parseFloat(
                    navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
                )) &&
                o < 10 &&
                (r = JSON.stringify(r)),
                e.element.contentWindow.postMessage(r, e.origin));
    }

    function z(n, r) {
        var t,
            e,
            o = [];
        (r = D(r)).event
            ?
            ("error" === r.event &&
                I(n, r.data.method).forEach(function(e) {
                    var t = new Error(r.data.message);
                    (t.name = r.data.name), e.reject(t), V(n, r.data.method, e);
                }),
                (o = I(n, "event:".concat(r.event))),
                (t = r.data)) :
            !r.method ||
            ((e = (function(e, t) {
                    var n = I(e, t);
                    if (n.length < 1) return !1;
                    var r = n.shift();
                    return V(e, t, r), r;
                })(n, r.method)) &&
                (o.push(e), (t = r.value))),
            o.forEach(function(e) {
                try {
                    if ("function" == typeof e) return void e.call(n, t);
                    e.resolve(t);
                } catch (e) {}
            });
    }
    var U = [
        "autopause",
        "autoplay",
        "background",
        "byline",
        "color",
        "colors",
        "controls",
        "dnt",
        "height",
        "id",
        "interactive_params",
        "keyboard",
        "loop",
        "maxheight",
        "maxwidth",
        "muted",
        "playsinline",
        "portrait",
        "responsive",
        "speed",
        "texttrack",
        "title",
        "transparent",
        "url",
        "width",
    ];

    function G(r, e) {
        var t = 1 < arguments.length && void 0 !== e ? e : {};
        return U.reduce(function(e, t) {
            var n = r.getAttribute("data-vimeo-".concat(t));
            return (!n && "" !== n) || (e[t] = "" === n ? 1 : n), e;
        }, t);
    }

    function B(e, t) {
        var n = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized"))
            return t.querySelector("iframe");
        var r = document.createElement("div");
        return (
            (r.innerHTML = n),
            t.appendChild(r.firstChild),
            t.setAttribute("data-vimeo-initialized", "true"),
            t.querySelector("iframe")
        );
    }

    function H(i, e, t) {
        var a = 1 < arguments.length && void 0 !== e ? e : {},
            u = 2 < arguments.length ? t : void 0;
        return new Promise(function(t, n) {
            if (!g(i))
                throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
            var e = "https://vimeo.com/api/oembed.json?url=".concat(
                encodeURIComponent(i)
            );
            for (var r in a)
                a.hasOwnProperty(r) &&
                (e += "&".concat(r, "=").concat(encodeURIComponent(a[r])));
            var o = new(
                "XDomainRequest" in window ? XDomainRequest : XMLHttpRequest
            )();
            o.open("GET", e, !0),
                (o.onload = function() {
                    if (404 !== o.status)
                        if (403 !== o.status)
                            try {
                                var e = JSON.parse(o.responseText);
                                if (403 === e.domain_status_code)
                                    return (
                                        B(e, u),
                                        void n(new Error("“".concat(i, "” is not embeddable.")))
                                    );
                                t(e);
                            } catch (e) {
                                n(e);
                            }
                    else n(new Error("“".concat(i, "” is not embeddable.")));
                    else n(new Error("“".concat(i, "” was not found.")));
                }),
                (o.onerror = function() {
                    var e = o.status ? " (".concat(o.status, ")") : "";
                    n(
                        new Error(
                            "There was an error fetching the embed code from Vimeo".concat(
                                e,
                                "."
                            )
                        )
                    );
                }),
                o.send();
        });
    }
    var Y,
        Q,
        J,
        X = {
            role: "viewer",
            autoPlayMuted: !0,
            allowedDrift: 0.3,
            maxAllowedDrift: 1,
            minCheckInterval: 0.1,
            maxRateAdjustment: 0.2,
            maxTimeToCatchUp: 1,
        },
        $ = (function() {
            !(function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function"
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    },
                })),
                Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && f(e, t);
            })(a, t(EventTarget));
            var r,
                n,
                o,
                i = v(a);

            function a(e, t) {
                var o,
                    n =
                    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    r = 3 < arguments.length ? arguments[3] : void 0;
                return (
                    l(this, a),
                    s(p((o = i.call(this))), "logger", void 0),
                    s(p(o), "speedAdjustment", 0),
                    s(
                        p(o),
                        "adjustSpeed",
                        (function() {
                            var n = h(
                                j().mark(function e(t, n) {
                                    var r;
                                    return j().wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (o.speedAdjustment === n)
                                                        return e.abrupt("return");
                                                    e.next = 2;
                                                    break;
                                                case 2:
                                                    return (e.next = 4), t.getPlaybackRate();
                                                case 4:
                                                    return (
                                                        (e.t0 = e.sent),
                                                        (e.t1 = o.speedAdjustment),
                                                        (e.t2 = e.t0 - e.t1),
                                                        (e.t3 = n),
                                                        (r = e.t2 + e.t3),
                                                        o.log("New playbackRate:  ".concat(r)),
                                                        (e.next = 12),
                                                        t.setPlaybackRate(r)
                                                    );
                                                case 12:
                                                    o.speedAdjustment = n;
                                                case 13:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(e, t) {
                                return n.apply(this, arguments);
                            };
                        })()
                    ),
                    (o.logger = r),
                    o.init(t, e, u(u({}, X), n)),
                    o
                );
            }
            return (
                e(a, [{
                        key: "disconnect",
                        value: function() {
                            this.dispatchEvent(new Event("disconnect"));
                        },
                    },
                    {
                        key: "init",
                        value:
                            ((o = h(
                                    j().mark(function e(t, n, r) {
                                        var o,
                                            i,
                                            a,
                                            u = this;
                                        return j().wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (e.next = 2), this.waitForTOReadyState(t, "open")
                                                            );
                                                        case 2:
                                                            if ("viewer" === r.role)
                                                                return (e.next = 5), this.updatePlayer(t, n, r);
                                                            e.next = 10;
                                                            break;
                                                        case 5:
                                                            (o = k(t, "change", function() {
                                                                return u.updatePlayer(t, n, r);
                                                            })),
                                                            (i = this.maintainPlaybackPosition(t, n, r)),
                                                            this.addEventListener("disconnect", function() {
                                                                    i.cancel(), o.cancel();
                                                                }),
                                                                (e.next = 14);
                                                            break;
                                                        case 10:
                                                            return (e.next = 12), this.updateTimingObject(t, n);
                                                        case 12:
                                                            (a = k(
                                                                n, ["seeked", "play", "pause", "ratechange"],
                                                                function() {
                                                                    return u.updateTimingObject(t, n);
                                                                },
                                                                "on",
                                                                "off"
                                                            )),
                                                            this.addEventListener("disconnect", function() {
                                                                return a.cancel();
                                                            });
                                                        case 14:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function(e, t, n) {
                                    return o.apply(this, arguments);
                                }),
                    },
                    {
                        key: "updateTimingObject",
                        value:
                            ((n = h(
                                    j().mark(function e(t, n) {
                                        return j().wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.t0 = t), (e.next = 3), n.getCurrentTime();
                                                    case 3:
                                                        return (e.t1 = e.sent), (e.next = 6), n.getPaused();
                                                    case 6:
                                                        if (!e.sent) {
                                                            e.next = 10;
                                                            break;
                                                        }
                                                        (e.t2 = 0), (e.next = 13);
                                                        break;
                                                    case 10:
                                                        return (e.next = 12), n.getPlaybackRate();
                                                    case 12:
                                                        e.t2 = e.sent;
                                                    case 13:
                                                        (e.t3 = e.t2),
                                                        (e.t4 = {
                                                            position: e.t1,
                                                            velocity: e.t3
                                                        }),
                                                        e.t0.update.call(e.t0, e.t4);
                                                    case 16:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function(e, t) {
                                    return n.apply(this, arguments);
                                }),
                    },
                    {
                        key: "updatePlayer",
                        value:
                            ((r = h(
                                    j().mark(function e(t, n, r) {
                                        var o, i, a;
                                        return j().wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o = t.query()),
                                                                    (i = o.position),
                                                                    (a = o.velocity),
                                                                    "number" == typeof i && n.setCurrentTime(i),
                                                                    "number" != typeof a)
                                                            ) {
                                                                e.next = 25;
                                                                break;
                                                            }
                                                            if (0 === a) return (e.next = 6), n.getPaused();
                                                            e.next = 11;
                                                            break;
                                                        case 6:
                                                            if (((e.t0 = e.sent), !1 !== e.t0)) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            n.pause();
                                                        case 9:
                                                            e.next = 25;
                                                            break;
                                                        case 11:
                                                            if (0 < a) return (e.next = 14), n.getPaused();
                                                            e.next = 25;
                                                            break;
                                                        case 14:
                                                            if (((e.t1 = e.sent), !0 === e.t1))
                                                                return (
                                                                    (e.next = 18),
                                                                    n.play().catch(
                                                                        (function() {
                                                                            var t = h(
                                                                                j().mark(function e(t) {
                                                                                    return j().wrap(function(e) {
                                                                                        for (;;)
                                                                                            switch ((e.prev = e.next)) {
                                                                                                case 0:
                                                                                                    if (
                                                                                                        "NotAllowedError" ===
                                                                                                        t.name &&
                                                                                                        r.autoPlayMuted
                                                                                                    )
                                                                                                        return (
                                                                                                            (e.next = 3), n.setMuted(!0)
                                                                                                        );
                                                                                                    e.next = 5;
                                                                                                    break;
                                                                                                case 3:
                                                                                                    return (
                                                                                                        (e.next = 5),
                                                                                                        n.play().catch(function(e) {
                                                                                                            return console.error(
                                                                                                                "Couldn't play the video from TimingSrcConnector. Error:",
                                                                                                                e
                                                                                                            );
                                                                                                        })
                                                                                                    );
                                                                                                case 5:
                                                                                                case "end":
                                                                                                    return e.stop();
                                                                                            }
                                                                                    }, e);
                                                                                })
                                                                            );
                                                                            return function(e) {
                                                                                return t.apply(this, arguments);
                                                                            };
                                                                        })()
                                                                    )
                                                                );
                                                            e.next = 19;
                                                            break;
                                                        case 18:
                                                            this.updatePlayer(t, n, r);
                                                        case 19:
                                                            return (e.next = 21), n.getPlaybackRate();
                                                        case 21:
                                                            if (((e.t2 = e.sent), (e.t3 = a), e.t2 === e.t3)) {
                                                                e.next = 25;
                                                                break;
                                                            }
                                                            n.setPlaybackRate(a);
                                                        case 25:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function(e, t, n) {
                                    return r.apply(this, arguments);
                                }),
                    },
                    {
                        key: "maintainPlaybackPosition",
                        value: function(a, u, e) {
                            var c = this,
                                l = e.allowedDrift,
                                s = e.maxAllowedDrift,
                                t = e.minCheckInterval,
                                f = e.maxRateAdjustment,
                                d = e.maxTimeToCatchUp,
                                n = 1e3 * Math.min(d, Math.max(t, s)),
                                r = (function() {
                                    var e = h(
                                        j().mark(function e() {
                                            var t, n, r, o, i;
                                            return j().wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (((e.t0 = 0 === a.query().velocity), e.t0)) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            return (e.next = 4), u.getPaused();
                                                        case 4:
                                                            (e.t1 = e.sent), (e.t0 = !0 === e.t1);
                                                        case 6:
                                                            if (e.t0) return e.abrupt("return");
                                                            e.next = 8;
                                                            break;
                                                        case 8:
                                                            return (
                                                                (e.t2 = a.query().position),
                                                                (e.next = 11),
                                                                u.getCurrentTime()
                                                            );
                                                        case 11:
                                                            if (
                                                                ((e.t3 = e.sent),
                                                                    (t = e.t2 - e.t3),
                                                                    (n = Math.abs(t)),
                                                                    c.log("Drift: ".concat(t)),
                                                                    s < n)
                                                            )
                                                                return (e.next = 18), c.adjustSpeed(u, 0);
                                                            e.next = 22;
                                                            break;
                                                        case 18:
                                                            u.setCurrentTime(a.query().position),
                                                                c.log("Resync by currentTime"),
                                                                (e.next = 29);
                                                            break;
                                                        case 22:
                                                            if (l < n)
                                                                return (
                                                                    (i = (r = n / d) < (o = f) ? (o - r) / 2 : o),
                                                                    (e.next = 28),
                                                                    c.adjustSpeed(u, i * Math.sign(t))
                                                                );
                                                            e.next = 29;
                                                            break;
                                                        case 28:
                                                            c.log("Resync by playbackRate");
                                                        case 29:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                                o = setInterval(function() {
                                    return r();
                                }, n);
                            return {
                                cancel: function() {
                                    return clearInterval(o);
                                },
                            };
                        },
                    },
                    {
                        key: "log",
                        value: function(e) {
                            var t;
                            null !== (t = this.logger) &&
                                void 0 !== t &&
                                t.call(this, "TimingSrcConnector: ".concat(e));
                        },
                    },
                    {
                        key: "waitForTOReadyState",
                        value: function(n, r) {
                            return new Promise(function(t) {
                                !(function e() {
                                    n.readyState === r ?
                                        t() :
                                        n.addEventListener("readystatechange", e, {
                                            once: !0
                                        });
                                })();
                            });
                        },
                    },
                ]),
                a
            );
        })(),
        K = new WeakMap(),
        Z = new WeakMap(),
        ee = {},
        Player = (function() {
            function Player(u) {
                var e,
                    t,
                    c = this,
                    n =
                    1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (
                    (l(this, Player),
                        window.jQuery &&
                        u instanceof jQuery &&
                        (1 < u.length &&
                            window.console &&
                            console.warn &&
                            console.warn(
                                "A jQuery object with multiple elements was passed, using the first element."
                            ),
                            (u = u[0])),
                        "undefined" != typeof document &&
                        "string" == typeof u &&
                        (u = document.getElementById(u)),
                        (e = u), !Boolean(
                            e &&
                            1 === e.nodeType &&
                            "nodeName" in e &&
                            e.ownerDocument &&
                            e.ownerDocument.defaultView
                        ))
                )
                    throw new TypeError(
                        "You must pass either a valid element or a valid id."
                    );
                if (
                    ("IFRAME" === u.nodeName ||
                        ((t = u.querySelector("iframe")) && (u = t)),
                        "IFRAME" === u.nodeName && !g(u.getAttribute("src") || ""))
                )
                    throw new Error("The player element passed isn’t a Vimeo embed.");
                if (K.has(u)) return K.get(u);
                (this._window = u.ownerDocument.defaultView),
                (this.element = u),
                (this.origin = "*");
                var r,
                    o = new A(function(i, a) {
                        var e;
                        (c._onMessage = function(e) {
                            if (g(e.origin) && c.element.contentWindow === e.source) {
                                "*" === c.origin && (c.origin = e.origin);
                                var t = D(e.data);
                                if (
                                    t &&
                                    "error" === t.event &&
                                    t.data &&
                                    "ready" === t.data.method
                                ) {
                                    var n = new Error(t.data.message);
                                    return (n.name = t.data.name), void a(n);
                                }
                                var r = t && "ready" === t.event,
                                    o = t && "ping" === t.method;
                                if (r || o)
                                    return c.element.setAttribute("data-ready", "true"), void i();
                                z(c, t);
                            }
                        }),
                        c._window.addEventListener("message", c._onMessage),
                            "IFRAME" !== c.element.nodeName &&
                            H(b((e = G(u, n))), e, u)
                            .then(function(e) {
                                var t,
                                    n,
                                    r,
                                    o = B(e, u);
                                return (
                                    (c.element = o),
                                    (c._originalElement = u),
                                    (t = u),
                                    (n = o),
                                    (r = R.get(t)),
                                    R.set(n, r),
                                    R.delete(t),
                                    K.set(c.element, c),
                                    e
                                );
                            })
                            .catch(a);
                    });
                return (
                    Z.set(this, o),
                    K.set(this.element, this),
                    "IFRAME" === this.element.nodeName && W(this, "ping"),
                    ee.isEnabled &&
                    ((r = function() {
                            return ee.exit();
                        }),
                        (this.fullscreenchangeHandler = function() {
                            (ee.isFullscreen ? q : V)(c, "event:exitFullscreen", r),
                            c.ready().then(function() {
                                W(c, "fullscreenchange", ee.isFullscreen);
                            });
                        }),
                        ee.on("fullscreenchange", this.fullscreenchangeHandler)),
                    this
                );
            }
            var n;
            return (
                e(Player, [{
                        key: "callMethod",
                        value: function(n, e) {
                            var r = this,
                                o = 1 < arguments.length && void 0 !== e ? e : {};
                            return new A(function(e, t) {
                                return r
                                    .ready()
                                    .then(function() {
                                        q(r, n, {
                                            resolve: e,
                                            reject: t
                                        }), W(r, n, o);
                                    })
                                    .catch(t);
                            });
                        },
                    },
                    {
                        key: "get",
                        value: function(n) {
                            var r = this;
                            return new A(function(e, t) {
                                return (
                                    (n = m(n, "get")),
                                    r
                                    .ready()
                                    .then(function() {
                                        q(r, n, {
                                            resolve: e,
                                            reject: t
                                        }), W(r, n);
                                    })
                                    .catch(t)
                                );
                            });
                        },
                    },
                    {
                        key: "set",
                        value: function(n, r) {
                            var o = this;
                            return new A(function(e, t) {
                                if (((n = m(n, "set")), null == r))
                                    throw new TypeError("There must be a value to set.");
                                return o
                                    .ready()
                                    .then(function() {
                                        q(o, n, {
                                            resolve: e,
                                            reject: t
                                        }), W(o, n, r);
                                    })
                                    .catch(t);
                            });
                        },
                    },
                    {
                        key: "on",
                        value: function(e, t) {
                            if (!e) throw new TypeError("You must pass an event name.");
                            if (!t) throw new TypeError("You must pass a callback function.");
                            if ("function" != typeof t)
                                throw new TypeError("The callback must be a function.");
                            0 === I(this, "event:".concat(e)).length &&
                                this.callMethod("addEventListener", e).catch(function() {}),
                                q(this, "event:".concat(e), t);
                        },
                    },
                    {
                        key: "off",
                        value: function(e, t) {
                            if (!e) throw new TypeError("You must pass an event name.");
                            if (t && "function" != typeof t)
                                throw new TypeError("The callback must be a function.");
                            V(this, "event:".concat(e), t) &&
                                this.callMethod("removeEventListener", e).catch(function(
                                    e
                                ) {});
                        },
                    },
                    {
                        key: "loadVideo",
                        value: function(e) {
                            return this.callMethod("loadVideo", e);
                        },
                    },
                    {
                        key: "ready",
                        value: function() {
                            var e =
                                Z.get(this) ||
                                new A(function(e, t) {
                                    t(new Error("Unknown player. Probably unloaded."));
                                });
                            return A.resolve(e);
                        },
                    },
                    {
                        key: "addCuePoint",
                        value: function(e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? t : {};
                            return this.callMethod("addCuePoint", {
                                time: e,
                                data: n
                            });
                        },
                    },
                    {
                        key: "removeCuePoint",
                        value: function(e) {
                            return this.callMethod("removeCuePoint", e);
                        },
                    },
                    {
                        key: "enableTextTrack",
                        value: function(e, t) {
                            if (!e) throw new TypeError("You must pass a language.");
                            return this.callMethod("enableTextTrack", {
                                language: e,
                                kind: t,
                            });
                        },
                    },
                    {
                        key: "disableTextTrack",
                        value: function() {
                            return this.callMethod("disableTextTrack");
                        },
                    },
                    {
                        key: "pause",
                        value: function() {
                            return this.callMethod("pause");
                        },
                    },
                    {
                        key: "play",
                        value: function() {
                            return this.callMethod("play");
                        },
                    },
                    {
                        key: "requestFullscreen",
                        value: function() {
                            return ee.isEnabled ?
                                ee.request(this.element) :
                                this.callMethod("requestFullscreen");
                        },
                    },
                    {
                        key: "exitFullscreen",
                        value: function() {
                            return ee.isEnabled ?
                                ee.exit() :
                                this.callMethod("exitFullscreen");
                        },
                    },
                    {
                        key: "getFullscreen",
                        value: function() {
                            return ee.isEnabled ?
                                A.resolve(ee.isFullscreen) :
                                this.get("fullscreen");
                        },
                    },
                    {
                        key: "requestPictureInPicture",
                        value: function() {
                            return this.callMethod("requestPictureInPicture");
                        },
                    },
                    {
                        key: "exitPictureInPicture",
                        value: function() {
                            return this.callMethod("exitPictureInPicture");
                        },
                    },
                    {
                        key: "getPictureInPicture",
                        value: function() {
                            return this.get("pictureInPicture");
                        },
                    },
                    {
                        key: "remotePlaybackPrompt",
                        value: function() {
                            return this.callMethod("remotePlaybackPrompt");
                        },
                    },
                    {
                        key: "unload",
                        value: function() {
                            return this.callMethod("unload");
                        },
                    },
                    {
                        key: "destroy",
                        value: function() {
                            var n = this;
                            return new A(function(e) {
                                var t;
                                Z.delete(n),
                                    K.delete(n.element),
                                    n._originalElement &&
                                    (K.delete(n._originalElement),
                                        n._originalElement.removeAttribute(
                                            "data-vimeo-initialized"
                                        )),
                                    n.element &&
                                    "IFRAME" === n.element.nodeName &&
                                    n.element.parentNode &&
                                    (n.element.parentNode.parentNode &&
                                        n._originalElement &&
                                        n._originalElement !== n.element.parentNode ?
                                        n.element.parentNode.parentNode.removeChild(
                                            n.element.parentNode
                                        ) :
                                        n.element.parentNode.removeChild(n.element)),
                                    n.element &&
                                    "DIV" === n.element.nodeName &&
                                    n.element.parentNode &&
                                    (n.element.removeAttribute("data-vimeo-initialized"),
                                        (t = n.element.querySelector("iframe")) &&
                                        t.parentNode &&
                                        (t.parentNode.parentNode &&
                                            n._originalElement &&
                                            n._originalElement !== t.parentNode ?
                                            t.parentNode.parentNode.removeChild(t.parentNode) :
                                            t.parentNode.removeChild(t))),
                                    n._window.removeEventListener("message", n._onMessage),
                                    ee.isEnabled &&
                                    ee.off("fullscreenchange", n.fullscreenchangeHandler),
                                    e();
                            });
                        },
                    },
                    {
                        key: "getAutopause",
                        value: function() {
                            return this.get("autopause");
                        },
                    },
                    {
                        key: "setAutopause",
                        value: function(e) {
                            return this.set("autopause", e);
                        },
                    },
                    {
                        key: "getBuffered",
                        value: function() {
                            return this.get("buffered");
                        },
                    },
                    {
                        key: "getCameraProps",
                        value: function() {
                            return this.get("cameraProps");
                        },
                    },
                    {
                        key: "setCameraProps",
                        value: function(e) {
                            return this.set("cameraProps", e);
                        },
                    },
                    {
                        key: "getChapters",
                        value: function() {
                            return this.get("chapters");
                        },
                    },
                    {
                        key: "getCurrentChapter",
                        value: function() {
                            return this.get("currentChapter");
                        },
                    },
                    {
                        key: "getColor",
                        value: function() {
                            return this.get("color");
                        },
                    },
                    {
                        key: "getColors",
                        value: function() {
                            return A.all([
                                this.get("colorOne"),
                                this.get("colorTwo"),
                                this.get("colorThree"),
                                this.get("colorFour"),
                            ]);
                        },
                    },
                    {
                        key: "setColor",
                        value: function(e) {
                            return this.set("color", e);
                        },
                    },
                    {
                        key: "setColors",
                        value: function(e) {
                            if (!Array.isArray(e))
                                return new A(function(e, t) {
                                    return t(new TypeError("Argument must be an array."));
                                });
                            var t = new A(function(e) {
                                    return e(null);
                                }),
                                n = [
                                    e[0] ? this.set("colorOne", e[0]) : t,
                                    e[1] ? this.set("colorTwo", e[1]) : t,
                                    e[2] ? this.set("colorThree", e[2]) : t,
                                    e[3] ? this.set("colorFour", e[3]) : t,
                                ];
                            return A.all(n);
                        },
                    },
                    {
                        key: "getCuePoints",
                        value: function() {
                            return this.get("cuePoints");
                        },
                    },
                    {
                        key: "getCurrentTime",
                        value: function() {
                            return this.get("currentTime");
                        },
                    },
                    {
                        key: "setCurrentTime",
                        value: function(e) {
                            return this.set("currentTime", e);
                        },
                    },
                    {
                        key: "getDuration",
                        value: function() {
                            return this.get("duration");
                        },
                    },
                    {
                        key: "getEnded",
                        value: function() {
                            return this.get("ended");
                        },
                    },
                    {
                        key: "getLoop",
                        value: function() {
                            return this.get("loop");
                        },
                    },
                    {
                        key: "setLoop",
                        value: function(e) {
                            return this.set("loop", e);
                        },
                    },
                    {
                        key: "setMuted",
                        value: function(e) {
                            return this.set("muted", e);
                        },
                    },
                    {
                        key: "getMuted",
                        value: function() {
                            return this.get("muted");
                        },
                    },
                    {
                        key: "getPaused",
                        value: function() {
                            return this.get("paused");
                        },
                    },
                    {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.get("playbackRate");
                        },
                    },
                    {
                        key: "setPlaybackRate",
                        value: function(e) {
                            return this.set("playbackRate", e);
                        },
                    },
                    {
                        key: "getPlayed",
                        value: function() {
                            return this.get("played");
                        },
                    },
                    {
                        key: "getQualities",
                        value: function() {
                            return this.get("qualities");
                        },
                    },
                    {
                        key: "getQuality",
                        value: function() {
                            return this.get("quality");
                        },
                    },
                    {
                        key: "setQuality",
                        value: function(e) {
                            return this.set("quality", e);
                        },
                    },
                    {
                        key: "getRemotePlaybackAvailability",
                        value: function() {
                            return this.get("remotePlaybackAvailability");
                        },
                    },
                    {
                        key: "getRemotePlaybackState",
                        value: function() {
                            return this.get("remotePlaybackState");
                        },
                    },
                    {
                        key: "getSeekable",
                        value: function() {
                            return this.get("seekable");
                        },
                    },
                    {
                        key: "getSeeking",
                        value: function() {
                            return this.get("seeking");
                        },
                    },
                    {
                        key: "getTextTracks",
                        value: function() {
                            return this.get("textTracks");
                        },
                    },
                    {
                        key: "getVideoEmbedCode",
                        value: function() {
                            return this.get("videoEmbedCode");
                        },
                    },
                    {
                        key: "getVideoId",
                        value: function() {
                            return this.get("videoId");
                        },
                    },
                    {
                        key: "getVideoTitle",
                        value: function() {
                            return this.get("videoTitle");
                        },
                    },
                    {
                        key: "getVideoWidth",
                        value: function() {
                            return this.get("videoWidth");
                        },
                    },
                    {
                        key: "getVideoHeight",
                        value: function() {
                            return this.get("videoHeight");
                        },
                    },
                    {
                        key: "getVideoUrl",
                        value: function() {
                            return this.get("videoUrl");
                        },
                    },
                    {
                        key: "getVolume",
                        value: function() {
                            return this.get("volume");
                        },
                    },
                    {
                        key: "setVolume",
                        value: function(e) {
                            return this.set("volume", e);
                        },
                    },
                    {
                        key: "setTimingSrc",
                        value:
                            ((n = h(
                                    j().mark(function e(t, n) {
                                        var r,
                                            o = this;
                                        return j().wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (t) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            throw new TypeError(
                                                                "A Timing Object must be provided."
                                                            );
                                                        case 2:
                                                            return (e.next = 4), this.ready();
                                                        case 4:
                                                            return (
                                                                (r = new $(this, t, n)),
                                                                W(this, "notifyTimingObjectConnect"),
                                                                r.addEventListener("disconnect", function() {
                                                                    return W(o, "notifyTimingObjectDisconnect");
                                                                }),
                                                                e.abrupt("return", r)
                                                            );
                                                        case 8:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function(e, t) {
                                    return n.apply(this, arguments);
                                }),
                    },
                ]),
                Player
            );
        })();
    return (
        n ||
        ((Y = (function() {
                for (
                    var e,
                        t = [
                            [
                                "requestFullscreen",
                                "exitFullscreen",
                                "fullscreenElement",
                                "fullscreenEnabled",
                                "fullscreenchange",
                                "fullscreenerror",
                            ],
                            [
                                "webkitRequestFullscreen",
                                "webkitExitFullscreen",
                                "webkitFullscreenElement",
                                "webkitFullscreenEnabled",
                                "webkitfullscreenchange",
                                "webkitfullscreenerror",
                            ],
                            [
                                "webkitRequestFullScreen",
                                "webkitCancelFullScreen",
                                "webkitCurrentFullScreenElement",
                                "webkitCancelFullScreen",
                                "webkitfullscreenchange",
                                "webkitfullscreenerror",
                            ],
                            [
                                "mozRequestFullScreen",
                                "mozCancelFullScreen",
                                "mozFullScreenElement",
                                "mozFullScreenEnabled",
                                "mozfullscreenchange",
                                "mozfullscreenerror",
                            ],
                            [
                                "msRequestFullscreen",
                                "msExitFullscreen",
                                "msFullscreenElement",
                                "msFullscreenEnabled",
                                "MSFullscreenChange",
                                "MSFullscreenError",
                            ],
                        ],
                        n = 0,
                        r = t.length,
                        o = {}; n < r; n++
                )
                    if ((e = t[n]) && e[1] in document) {
                        for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                        return o;
                    }
                return !1;
            })()),
            (Q = {
                fullscreenchange: Y.fullscreenchange,
                fullscreenerror: Y.fullscreenerror,
            }),
            (J = {
                request: function(o) {
                    return new Promise(function(e, t) {
                        function n() {
                            J.off("fullscreenchange", n), e();
                        }
                        J.on("fullscreenchange", n);
                        var r = (o = o || document.documentElement)[Y.requestFullscreen]();
                        r instanceof Promise && r.then(n).catch(t);
                    });
                },
                exit: function() {
                    return new Promise(function(t, e) {
                        var n, r;
                        J.isFullscreen ?
                            ((n = function e() {
                                    J.off("fullscreenchange", e), t();
                                }),
                                J.on("fullscreenchange", n),
                                (r = document[Y.exitFullscreen]()) instanceof Promise &&
                                r.then(n).catch(e)) :
                            t();
                    });
                },
                on: function(e, t) {
                    var n = Q[e];
                    n && document.addEventListener(n, t);
                },
                off: function(e, t) {
                    var n = Q[e];
                    n && document.removeEventListener(n, t);
                },
            }),
            Object.defineProperties(J, {
                isFullscreen: {
                    get: function() {
                        return Boolean(document[Y.fullscreenElement]);
                    },
                },
                element: {
                    enumerable: !0,
                    get: function() {
                        return document[Y.fullscreenElement];
                    },
                },
                isEnabled: {
                    enumerable: !0,
                    get: function() {
                        return Boolean(document[Y.fullscreenEnabled]);
                    },
                },
            }),
            (ee = J),
            (function(e) {
                function n(e) {
                    "console" in window &&
                        console.error &&
                        console.error("There was an error creating an embed: ".concat(e));
                }
                var t = 0 < arguments.length && void 0 !== e ? e : document;
                [].slice
                    .call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
                    .forEach(function(t) {
                        try {
                            if (null !== t.getAttribute("data-vimeo-defer")) return;
                            var e = G(t);
                            H(b(e), e, t)
                                .then(function(e) {
                                    return B(e, t);
                                })
                                .catch(n);
                        } catch (e) {
                            n(e);
                        }
                    });
            })(),
            (function(e) {
                var r = 0 < arguments.length && void 0 !== e ? e : document;
                window.VimeoPlayerResizeEmbeds_ ||
                    ((window.VimeoPlayerResizeEmbeds_ = !0),
                        window.addEventListener("message", function(e) {
                            if (g(e.origin) && e.data && "spacechange" === e.data.event)
                                for (
                                    var t = r.querySelectorAll("iframe"), n = 0; n < t.length; n++
                                )
                                    if (t[n].contentWindow === e.source) {
                                        t[n].parentElement.style.paddingBottom = "".concat(
                                            e.data.data[0].bottom,
                                            "px"
                                        );
                                        break;
                                    }
                        }));
            })(),
            (function(e) {
                var a = 0 < arguments.length && void 0 !== e ? e : document;
                window.VimeoSeoMetadataAppended ||
                    ((window.VimeoSeoMetadataAppended = !0),
                        window.addEventListener("message", function(e) {
                            if (g(e.origin)) {
                                var t = D(e.data);
                                if (t && "ready" === t.event)
                                    for (
                                        var n = a.querySelectorAll("iframe"), r = 0; r < n.length; r++
                                    ) {
                                        var o = n[r],
                                            i = o.contentWindow === e.source;
                                        w(o.src) &&
                                            i &&
                                            new Player(o).callMethod(
                                                "appendVideoMetadata",
                                                window.location.href
                                            );
                                    }
                            }
                        }));
            })(),
            (function(e) {
                var a,
                    t = 0 < arguments.length && void 0 !== e ? e : document;
                window.VimeoCheckedUrlTimeParam ||
                    ((window.VimeoCheckedUrlTimeParam = !0),
                        (a = function(e) {
                            "console" in window &&
                                console.error &&
                                console.error("There was an error getting video Id: ".concat(e));
                        }),
                        window.addEventListener("message", function(n) {
                            if (g(n.origin)) {
                                var e = D(n.data);
                                if (e && "ready" === e.event)
                                    for (
                                        var o = t.querySelectorAll("iframe"), i = 0; i < o.length; i++
                                    )
                                        !(function() {
                                            var r,
                                                e = o[i],
                                                t = e.contentWindow === n.source;
                                            w(e.src) &&
                                                t &&
                                                (r = new Player(e))
                                                .getVideoId()
                                                .then(function(e) {
                                                    var t,
                                                        n = new RegExp(
                                                            "[?&]vimeo_t_".concat(e, "=([^&#]*)")
                                                        ).exec(window.location.href);
                                                    n &&
                                                        n[1] &&
                                                        ((t = decodeURI(n[1])), r.setCurrentTime(t));
                                                })
                                                .catch(a);
                                        })();
                            }
                        }));
            })()),
        Player
    );
});