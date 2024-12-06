(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Jm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var id = { exports: {} },
  Vo = {},
  od = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = Symbol.for("react.element"),
  bm = Symbol.for("react.portal"),
  eg = Symbol.for("react.fragment"),
  tg = Symbol.for("react.strict_mode"),
  ng = Symbol.for("react.profiler"),
  rg = Symbol.for("react.provider"),
  ig = Symbol.for("react.context"),
  og = Symbol.for("react.forward_ref"),
  sg = Symbol.for("react.suspense"),
  lg = Symbol.for("react.memo"),
  ag = Symbol.for("react.lazy"),
  Cu = Symbol.iterator;
function ug(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cu && e[Cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ld = Object.assign,
  ad = {};
function qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ad),
    (this.updater = n || sd);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ud() {}
ud.prototype = qn.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ad),
    (this.updater = n || sd);
}
var bl = (Jl.prototype = new ud());
bl.constructor = Jl;
ld(bl, qn.prototype);
bl.isPureReactComponent = !0;
var Eu = Array.isArray,
  cd = Object.prototype.hasOwnProperty,
  ea = { current: null },
  fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function dd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      cd.call(t, r) && !fd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: qr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ea.current,
  };
}
function cg(e, t) {
  return {
    $$typeof: qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function fg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Au = /\/+/g;
function ns(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fg("" + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qr:
          case bm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ns(s, 0) : r),
      Eu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Au, "$&/") + "/"),
          Ni(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ta(i) &&
            (i = cg(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Au, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Eu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + ns(o, l);
      s += Ni(o, t, n, a, i);
    }
  else if (((a = ug(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + ns(o, l++)), (s += Ni(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function dg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Di = { transition: null },
  hg = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Di,
    ReactCurrentOwner: ea,
  };
function hd() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = qn;
j.Fragment = eg;
j.Profiler = ng;
j.PureComponent = Jl;
j.StrictMode = tg;
j.Suspense = sg;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg;
j.act = hd;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ld({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = ea.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      cd.call(t, a) &&
        !fd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: qr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: ig,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rg, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = dd;
j.createFactory = function (e) {
  var t = dd.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: og, render: e };
};
j.isValidElement = ta;
j.lazy = function (e) {
  return { $$typeof: ag, _payload: { _status: -1, _result: e }, _init: dg };
};
j.memo = function (e, t) {
  return { $$typeof: lg, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
j.unstable_act = hd;
j.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
j.useContext = function (e) {
  return xe.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
j.useId = function () {
  return xe.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return xe.current.useRef(e);
};
j.useState = function (e) {
  return xe.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return xe.current.useTransition();
};
j.version = "18.3.1";
od.exports = j;
var A = od.exports;
const Lt = Jm(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pg = A,
  mg = Symbol.for("react.element"),
  gg = Symbol.for("react.fragment"),
  vg = Object.prototype.hasOwnProperty,
  yg = pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xg = { key: !0, ref: !0, __self: !0, __source: !0 };
function pd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) vg.call(t, r) && !xg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: mg,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: yg.current,
  };
}
Vo.Fragment = gg;
Vo.jsx = pd;
Vo.jsxs = pd;
id.exports = Vo;
var w = id.exports,
  md = { exports: {} },
  Re = {},
  gd = { exports: {} },
  vd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, N) {
    var D = E.length;
    E.push(N);
    e: for (; 0 < D; ) {
      var X = (D - 1) >>> 1,
        ie = E[X];
      if (0 < i(ie, N)) (E[X] = N), (E[D] = ie), (D = X);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var N = E[0],
      D = E.pop();
    if (D !== N) {
      E[0] = D;
      e: for (var X = 0, ie = E.length, ai = ie >>> 1; X < ai; ) {
        var Qt = 2 * (X + 1) - 1,
          ts = E[Qt],
          Xt = Qt + 1,
          ui = E[Xt];
        if (0 > i(ts, D))
          Xt < ie && 0 > i(ui, ts)
            ? ((E[X] = ui), (E[Xt] = D), (X = Xt))
            : ((E[X] = ts), (E[Qt] = D), (X = Qt));
        else if (Xt < ie && 0 > i(ui, D)) (E[X] = ui), (E[Xt] = D), (X = Xt);
        else break e;
      }
    }
    return N;
  }
  function i(E, N) {
    var D = E.sortIndex - N.sortIndex;
    return D !== 0 ? D : E.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    y = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= E)
        r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function x(E) {
    if (((y = !1), m(E), !v))
      if (n(a) !== null) (v = !0), li(S);
      else {
        var N = n(u);
        N !== null && b(x, N.startTime - E);
      }
  }
  function S(E, N) {
    (v = !1), y && ((y = !1), p(k), (k = -1)), (g = !0);
    var D = d;
    try {
      for (
        m(N), f = n(a);
        f !== null && (!(f.expirationTime > N) || (E && !re()));

      ) {
        var X = f.callback;
        if (typeof X == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var ie = X(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof ie == "function" ? (f.callback = ie) : f === n(a) && r(a),
            m(N);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ai = !0;
      else {
        var Qt = n(u);
        Qt !== null && b(x, Qt.startTime - N), (ai = !1);
      }
      return ai;
    } finally {
      (f = null), (d = D), (g = !1);
    }
  }
  var C = !1,
    M = null,
    k = -1,
    _ = 5,
    R = -1;
  function re() {
    return !(e.unstable_now() - R < _);
  }
  function yt() {
    if (M !== null) {
      var E = e.unstable_now();
      R = E;
      var N = !0;
      try {
        N = M(!0, E);
      } finally {
        N ? Yt() : ((C = !1), (M = null));
      }
    } else C = !1;
  }
  var Yt;
  if (typeof h == "function")
    Yt = function () {
      h(yt);
    };
  else if (typeof MessageChannel < "u") {
    var tr = new MessageChannel(),
      ku = tr.port2;
    (tr.port1.onmessage = yt),
      (Yt = function () {
        ku.postMessage(null);
      });
  } else
    Yt = function () {
      T(yt, 0);
    };
  function li(E) {
    (M = E), C || ((C = !0), Yt());
  }
  function b(E, N) {
    k = T(function () {
      E(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), li(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var D = d;
      d = N;
      try {
        return E();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = d;
      d = E;
      try {
        return N();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (E, N, D) {
      var X = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? X + D : X))
          : (D = X),
        E)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = D + ie),
        (E = {
          id: c++,
          callback: N,
          priorityLevel: E,
          startTime: D,
          expirationTime: ie,
          sortIndex: -1,
        }),
        D > X
          ? ((E.sortIndex = D),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (y ? (p(k), (k = -1)) : (y = !0), b(x, D - X)))
          : ((E.sortIndex = ie), t(a, E), v || g || ((v = !0), li(S))),
        E
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (E) {
      var N = d;
      return function () {
        var D = d;
        d = N;
        try {
          return E.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(vd);
gd.exports = vd;
var wg = gd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg = A,
  Le = wg;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yd = new Set(),
  Rr = {};
function mn(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) yd.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hs = Object.prototype.hasOwnProperty,
  Pg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Lu = {};
function Tg(e) {
  return Hs.call(Lu, e)
    ? !0
    : Hs.call(Mu, e)
    ? !1
    : Pg.test(e)
    ? (Lu[e] = !0)
    : ((Mu[e] = !0), !1);
}
function kg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cg(e, t, n, r) {
  if (t === null || typeof t > "u" || kg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var na = /[\-:]([a-z])/g;
function ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    fe[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(na, ra);
  fe[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ia(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cg(t, n, i, r) && (n = null),
    r || i === null
      ? Tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fi = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  oa = Symbol.for("react.strict_mode"),
  Ws = Symbol.for("react.profiler"),
  xd = Symbol.for("react.provider"),
  wd = Symbol.for("react.context"),
  sa = Symbol.for("react.forward_ref"),
  Ks = Symbol.for("react.suspense"),
  Gs = Symbol.for("react.suspense_list"),
  la = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  Sd = Symbol.for("react.offscreen"),
  Vu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  rs;
function dr(e) {
  if (rs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      rs = (t && t[1]) || "";
    }
  return (
    `
` +
    rs +
    e
  );
}
var is = !1;
function os(e, t) {
  if (!e || is) return "";
  is = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (is = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Eg(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = os(e.type, !1)), e;
    case 11:
      return (e = os(e.type.render, !1)), e;
    case 1:
      return (e = os(e.type, !0)), e;
    default:
      return "";
  }
}
function Ys(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case xn:
      return "Portal";
    case Ws:
      return "Profiler";
    case oa:
      return "StrictMode";
    case Ks:
      return "Suspense";
    case Gs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wd:
        return (e.displayName || "Context") + ".Consumer";
      case xd:
        return (e._context.displayName || "Context") + ".Provider";
      case sa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case la:
        return (
          (t = e.displayName || null), t !== null ? t : Ys(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Ys(e(t));
        } catch {}
    }
  return null;
}
function Ag(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ys(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mg(e) {
  var t = Pd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function di(e) {
  e._valueTracker || (e._valueTracker = Mg(e));
}
function Td(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qs(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function kd(e, t) {
  (t = t.checked), t != null && ia(e, "checked", t, !1);
}
function Xs(e, t) {
  kd(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zs(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zs(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hr = Array.isArray;
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function qs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Du(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Cd(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ju(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ed(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Js(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ed(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hi,
  Ad = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        hi = hi || document.createElement("div"),
          hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lg = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
  Lg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
  });
});
function Md(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yr.hasOwnProperty(e) && yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ld(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Md(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Vg = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function bs(e, t) {
  if (t) {
    if (Vg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function el(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var tl = null;
function aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nl = null,
  Fn = null,
  zn = null;
function _u(e) {
  if ((e = ei(e))) {
    if (typeof nl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = _o(t)), nl(e.stateNode, e.type, t));
  }
}
function Vd(e) {
  Fn ? (zn ? zn.push(e) : (zn = [e])) : (Fn = e);
}
function Rd() {
  if (Fn) {
    var e = Fn,
      t = zn;
    if (((zn = Fn = null), _u(e), t)) for (e = 0; e < t.length; e++) _u(t[e]);
  }
}
function Nd(e, t) {
  return e(t);
}
function Dd() {}
var ss = !1;
function jd(e, t, n) {
  if (ss) return e(t, n);
  ss = !0;
  try {
    return Nd(e, t, n);
  } finally {
    (ss = !1), (Fn !== null || zn !== null) && (Dd(), Rd());
  }
}
function Dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var rl = !1;
if (ht)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        rl = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    rl = !1;
  }
function Rg(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1,
  qi = null,
  Ji = !1,
  il = null,
  Ng = {
    onError: function (e) {
      (xr = !0), (qi = e);
    },
  };
function Dg(e, t, n, r, i, o, s, l, a) {
  (xr = !1), (qi = null), Rg.apply(Ng, arguments);
}
function jg(e, t, n, r, i, o, s, l, a) {
  if ((Dg.apply(this, arguments), xr)) {
    if (xr) {
      var u = qi;
      (xr = !1), (qi = null);
    } else throw Error(P(198));
    Ji || ((Ji = !0), (il = u));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _d(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ou(e) {
  if (gn(e) !== e) throw Error(P(188));
}
function _g(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ou(i), e;
        if (o === r) return Ou(i), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Od(e) {
  return (e = _g(e)), e !== null ? Fd(e) : null;
}
function Fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zd = Le.unstable_scheduleCallback,
  Fu = Le.unstable_cancelCallback,
  Og = Le.unstable_shouldYield,
  Fg = Le.unstable_requestPaint,
  q = Le.unstable_now,
  zg = Le.unstable_getCurrentPriorityLevel,
  ua = Le.unstable_ImmediatePriority,
  Id = Le.unstable_UserBlockingPriority,
  bi = Le.unstable_NormalPriority,
  Ig = Le.unstable_LowPriority,
  Bd = Le.unstable_IdlePriority,
  Ro = null,
  Je = null;
function Bg(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(Ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Hg,
  Ug = Math.log,
  $g = Math.LN2;
function Hg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ug(e) / $g) | 0)) | 0;
}
var pi = 64,
  mi = 4194304;
function pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = pr(l)) : ((o &= s), o !== 0 && (r = pr(o)));
  } else (s = n & ~i), s !== 0 ? (r = pr(s)) : o !== 0 && (r = pr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Wg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ke(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Wg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ud() {
  var e = pi;
  return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
}
function ls(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function Gg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function $d(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hd,
  fa,
  Wd,
  Kd,
  Gd,
  sl = !1,
  gi = [],
  Vt = null,
  Rt = null,
  Nt = null,
  jr = new Map(),
  _r = new Map(),
  kt = [],
  Yg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ei(t)), t !== null && fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Qg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Vt = ir(Vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = ir(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nt = ir(Nt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return jr.set(o, ir(jr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), _r.set(o, ir(_r.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Yd(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _d(n)), t !== null)) {
          (e.blockedOn = t),
            Gd(e.priority, function () {
              Wd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ji(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (tl = r), n.target.dispatchEvent(r), (tl = null);
    } else return (t = ei(n)), t !== null && fa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Iu(e, t, n) {
  ji(e) && n.delete(t);
}
function Xg() {
  (sl = !1),
    Vt !== null && ji(Vt) && (Vt = null),
    Rt !== null && ji(Rt) && (Rt = null),
    Nt !== null && ji(Nt) && (Nt = null),
    jr.forEach(Iu),
    _r.forEach(Iu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sl ||
      ((sl = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Xg)));
}
function Or(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < gi.length) {
    or(gi[0], e);
    for (var n = 1; n < gi.length; n++) {
      var r = gi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && or(Vt, e),
      Rt !== null && or(Rt, e),
      Nt !== null && or(Nt, e),
      jr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    Yd(n), n.blockedOn === null && kt.shift();
}
var In = vt.ReactCurrentBatchConfig,
  to = !0;
function Zg(e, t, n, r) {
  var i = z,
    o = In.transition;
  In.transition = null;
  try {
    (z = 1), da(e, t, n, r);
  } finally {
    (z = i), (In.transition = o);
  }
}
function qg(e, t, n, r) {
  var i = z,
    o = In.transition;
  In.transition = null;
  try {
    (z = 4), da(e, t, n, r);
  } finally {
    (z = i), (In.transition = o);
  }
}
function da(e, t, n, r) {
  if (to) {
    var i = ll(e, t, n, r);
    if (i === null) vs(e, t, r, no, n), zu(e, r);
    else if (Qg(i, e, t, n, r)) r.stopPropagation();
    else if ((zu(e, r), t & 4 && -1 < Yg.indexOf(e))) {
      for (; i !== null; ) {
        var o = ei(i);
        if (
          (o !== null && Hd(o),
          (o = ll(e, t, n, r)),
          o === null && vs(e, t, r, no, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var no = null;
function ll(e, t, n, r) {
  if (((no = null), (e = aa(r)), (e = tn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _d(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (no = e), null;
}
function Qd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zg()) {
        case ua:
          return 1;
        case Id:
          return 4;
        case bi:
        case Ig:
          return 16;
        case Bd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  ha = null,
  _i = null;
function Xd() {
  if (_i) return _i;
  var e,
    t = ha,
    n = t.length,
    r,
    i = "value" in Et ? Et.value : Et.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (_i = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vi() {
  return !0;
}
function Bu() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vi
        : Bu),
      (this.isPropagationStopped = Bu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vi));
      },
      persist: function () {},
      isPersistent: vi,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pa = Ne(Jn),
  br = Y({}, Jn, { view: 0, detail: 0 }),
  Jg = Ne(br),
  as,
  us,
  sr,
  No = Y({}, br, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((as = e.screenX - sr.screenX), (us = e.screenY - sr.screenY))
              : (us = as = 0),
            (sr = e)),
          as);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : us;
    },
  }),
  Uu = Ne(No),
  bg = Y({}, No, { dataTransfer: 0 }),
  e0 = Ne(bg),
  t0 = Y({}, br, { relatedTarget: 0 }),
  cs = Ne(t0),
  n0 = Y({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  r0 = Ne(n0),
  i0 = Y({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  o0 = Ne(i0),
  s0 = Y({}, Jn, { data: 0 }),
  $u = Ne(s0),
  l0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  a0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  u0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function c0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
}
function ma() {
  return c0;
}
var f0 = Y({}, br, {
    key: function (e) {
      if (e.key) {
        var t = l0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? a0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function (e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  d0 = Ne(f0),
  h0 = Y({}, No, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Hu = Ne(h0),
  p0 = Y({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma,
  }),
  m0 = Ne(p0),
  g0 = Y({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v0 = Ne(g0),
  y0 = Y({}, No, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  x0 = Ne(y0),
  w0 = [9, 13, 27, 32],
  ga = ht && "CompositionEvent" in window,
  wr = null;
ht && "documentMode" in document && (wr = document.documentMode);
var S0 = ht && "TextEvent" in window && !wr,
  Zd = ht && (!ga || (wr && 8 < wr && 11 >= wr)),
  Wu = " ",
  Ku = !1;
function qd(e, t) {
  switch (e) {
    case "keyup":
      return w0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function P0(e, t) {
  switch (e) {
    case "compositionend":
      return Jd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ku = !0), Wu);
    case "textInput":
      return (e = t.data), e === Wu && Ku ? null : e;
    default:
      return null;
  }
}
function T0(e, t) {
  if (Sn)
    return e === "compositionend" || (!ga && qd(e, t))
      ? ((e = Xd()), (_i = ha = Et = null), (Sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var k0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!k0[e.type] : t === "textarea";
}
function bd(e, t, n, r) {
  Vd(r),
    (t = ro(t, "onChange")),
    0 < t.length &&
      ((n = new pa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Sr = null,
  Fr = null;
function C0(e) {
  ch(e, 0);
}
function Do(e) {
  var t = kn(e);
  if (Td(t)) return e;
}
function E0(e, t) {
  if (e === "change") return t;
}
var eh = !1;
if (ht) {
  var fs;
  if (ht) {
    var ds = "oninput" in document;
    if (!ds) {
      var Yu = document.createElement("div");
      Yu.setAttribute("oninput", "return;"),
        (ds = typeof Yu.oninput == "function");
    }
    fs = ds;
  } else fs = !1;
  eh = fs && (!document.documentMode || 9 < document.documentMode);
}
function Qu() {
  Sr && (Sr.detachEvent("onpropertychange", th), (Fr = Sr = null));
}
function th(e) {
  if (e.propertyName === "value" && Do(Fr)) {
    var t = [];
    bd(t, Fr, e, aa(e)), jd(C0, t);
  }
}
function A0(e, t, n) {
  e === "focusin"
    ? (Qu(), (Sr = t), (Fr = n), Sr.attachEvent("onpropertychange", th))
    : e === "focusout" && Qu();
}
function M0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Do(Fr);
}
function L0(e, t) {
  if (e === "click") return Do(t);
}
function V0(e, t) {
  if (e === "input" || e === "change") return Do(t);
}
function R0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : R0;
function zr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Hs.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zu(e, t) {
  var n = Xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xu(n);
  }
}
function nh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rh() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function N0(e) {
  var t = rh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && va(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Zu(n, o));
        var s = Zu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var D0 = ht && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  al = null,
  Pr = null,
  ul = !1;
function qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ul ||
    Pn == null ||
    Pn !== Zi(r) ||
    ((r = Pn),
    "selectionStart" in r && va(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && zr(Pr, r)) ||
      ((Pr = r),
      (r = ro(al, "onSelect")),
      0 < r.length &&
        ((t = new pa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: yi("Animation", "AnimationEnd"),
    animationiteration: yi("Animation", "AnimationIteration"),
    animationstart: yi("Animation", "AnimationStart"),
    transitionend: yi("Transition", "TransitionEnd"),
  },
  hs = {},
  ih = {};
ht &&
  ((ih = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function jo(e) {
  if (hs[e]) return hs[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ih) return (hs[e] = t[n]);
  return e;
}
var oh = jo("animationend"),
  sh = jo("animationiteration"),
  lh = jo("animationstart"),
  ah = jo("transitionend"),
  uh = new Map(),
  Ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function $t(e, t) {
  uh.set(e, t), mn(t, [e]);
}
for (var ps = 0; ps < Ju.length; ps++) {
  var ms = Ju[ps],
    j0 = ms.toLowerCase(),
    _0 = ms[0].toUpperCase() + ms.slice(1);
  $t(j0, "on" + _0);
}
$t(oh, "onAnimationEnd");
$t(sh, "onAnimationIteration");
$t(lh, "onAnimationStart");
$t("dblclick", "onDoubleClick");
$t("focusin", "onFocus");
$t("focusout", "onBlur");
$t(ah, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  O0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function bu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), jg(r, t, void 0, e), (e.currentTarget = null);
}
function ch(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          bu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          bu(i, l, u), (o = a);
        }
    }
  }
  if (Ji) throw ((e = il), (Ji = !1), (il = null), e);
}
function B(e, t) {
  var n = t[pl];
  n === void 0 && (n = t[pl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fh(t, e, 2, !1), n.add(r));
}
function gs(e, t, n) {
  var r = 0;
  t && (r |= 4), fh(n, e, r, t);
}
var xi = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[xi]) {
    (e[xi] = !0),
      yd.forEach(function (n) {
        n !== "selectionchange" && (O0.has(n) || gs(n, !1, e), gs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xi] || ((t[xi] = !0), gs("selectionchange", !1, t));
  }
}
function fh(e, t, n, r) {
  switch (Qd(t)) {
    case 1:
      var i = Zg;
      break;
    case 4:
      i = qg;
      break;
    default:
      i = da;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !rl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = tn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  jd(function () {
    var u = o,
      c = aa(n),
      f = [];
    e: {
      var d = uh.get(e);
      if (d !== void 0) {
        var g = pa,
          v = e;
        switch (e) {
          case "keypress":
            if (Oi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = d0;
            break;
          case "focusin":
            (v = "focus"), (g = cs);
            break;
          case "focusout":
            (v = "blur"), (g = cs);
            break;
          case "beforeblur":
          case "afterblur":
            g = cs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = e0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = m0;
            break;
          case oh:
          case sh:
          case lh:
            g = r0;
            break;
          case ah:
            g = v0;
            break;
          case "scroll":
            g = Jg;
            break;
          case "wheel":
            g = x0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Hu;
        }
        var y = (t & 4) !== 0,
          T = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = Dr(h, p)), x != null && y.push(Br(h, x, m)))),
            T)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== tl &&
            (v = n.relatedTarget || n.fromElement) &&
            (tn(v) || v[pt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? tn(v) : null),
              v !== null &&
                ((T = gn(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Uu),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Hu),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (T = g == null ? d : kn(g)),
            (m = v == null ? d : kn(v)),
            (d = new y(x, h + "leave", g, n, c)),
            (d.target = T),
            (d.relatedTarget = m),
            (x = null),
            tn(c) === u &&
              ((y = new y(p, h + "enter", v, n, c)),
              (y.target = m),
              (y.relatedTarget = T),
              (x = y)),
            (T = x),
            g && v)
          )
            t: {
              for (y = g, p = v, h = 0, m = y; m; m = yn(m)) h++;
              for (m = 0, x = p; x; x = yn(x)) m++;
              for (; 0 < h - m; ) (y = yn(y)), h--;
              for (; 0 < m - h; ) (p = yn(p)), m--;
              for (; h--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = yn(y)), (p = yn(p));
              }
              y = null;
            }
          else y = null;
          g !== null && ec(f, d, g, y, !1),
            v !== null && T !== null && ec(f, T, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? kn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = E0;
        else if (Gu(d))
          if (eh) S = V0;
          else {
            S = M0;
            var C = A0;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = L0);
        if (S && (S = S(e, u))) {
          bd(f, S, n, c);
          break e;
        }
        C && C(e, d, u),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Zs(d, "number", d.value);
      }
      switch (((C = u ? kn(u) : window), e)) {
        case "focusin":
          (Gu(C) || C.contentEditable === "true") &&
            ((Pn = C), (al = u), (Pr = null));
          break;
        case "focusout":
          Pr = al = Pn = null;
          break;
        case "mousedown":
          ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ul = !1), qu(f, n, c);
          break;
        case "selectionchange":
          if (D0) break;
        case "keydown":
        case "keyup":
          qu(f, n, c);
      }
      var M;
      if (ga)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Sn
          ? qd(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Zd &&
          n.locale !== "ko" &&
          (Sn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Sn && (M = Xd())
            : ((Et = c),
              (ha = "value" in Et ? Et.value : Et.textContent),
              (Sn = !0))),
        (C = ro(u, k)),
        0 < C.length &&
          ((k = new $u(k, e, null, n, c)),
          f.push({ event: k, listeners: C }),
          M ? (k.data = M) : ((M = Jd(n)), M !== null && (k.data = M)))),
        (M = S0 ? P0(e, n) : T0(e, n)) &&
          ((u = ro(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new $u("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = M)));
    }
    ch(f, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ro(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Dr(e, n)),
      o != null && r.unshift(Br(e, o, i)),
      (o = Dr(e, t)),
      o != null && r.push(Br(e, o, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Dr(n, o)), a != null && s.unshift(Br(n, a, l)))
        : i || ((a = Dr(n, o)), a != null && s.push(Br(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var F0 = /\r\n?/g,
  z0 = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      F0,
      `
`
    )
    .replace(z0, "");
}
function wi(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(P(425));
}
function io() {}
var cl = null,
  fl = null;
function dl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var hl = typeof setTimeout == "function" ? setTimeout : void 0,
  I0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nc = typeof Promise == "function" ? Promise : void 0,
  B0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nc < "u"
      ? function (e) {
          return nc.resolve(null).then(e).catch(U0);
        }
      : hl;
function U0(e) {
  setTimeout(function () {
    throw e;
  });
}
function ys(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Or(t);
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bn = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + bn,
  Ur = "__reactProps$" + bn,
  pt = "__reactContainer$" + bn,
  pl = "__reactEvents$" + bn,
  $0 = "__reactListeners$" + bn,
  H0 = "__reactHandles$" + bn;
function tn(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pt] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ei(e) {
  return (
    (e = e[Ze] || e[pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function _o(e) {
  return e[Ur] || null;
}
var ml = [],
  Cn = -1;
function Ht(e) {
  return { current: e };
}
function $(e) {
  0 > Cn || ((e.current = ml[Cn]), (ml[Cn] = null), Cn--);
}
function I(e, t) {
  Cn++, (ml[Cn] = e.current), (e.current = t);
}
var It = {},
  ge = Ht(It),
  Te = Ht(!1),
  un = It;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function oo() {
  $(Te), $(ge);
}
function ic(e, t, n) {
  if (ge.current !== It) throw Error(P(168));
  I(ge, t), I(Te, n);
}
function dh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, Ag(e) || "Unknown", i));
  return Y({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
    (un = ge.current),
    I(ge, e),
    I(Te, Te.current),
    !0
  );
}
function oc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = dh(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Te),
      $(ge),
      I(ge, e))
    : $(Te),
    I(Te, n);
}
var it = null,
  Oo = !1,
  xs = !1;
function hh(e) {
  it === null ? (it = [e]) : it.push(e);
}
function W0(e) {
  (Oo = !0), hh(e);
}
function Wt() {
  if (!xs && it !== null) {
    xs = !0;
    var e = 0,
      t = z;
    try {
      var n = it;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (it = null), (Oo = !1);
    } catch (i) {
      throw (it !== null && (it = it.slice(e + 1)), zd(ua, Wt), i);
    } finally {
      (z = t), (xs = !1);
    }
  }
  return null;
}
var En = [],
  An = 0,
  lo = null,
  ao = 0,
  _e = [],
  Oe = 0,
  cn = null,
  ot = 1,
  st = "";
function qt(e, t) {
  (En[An++] = ao), (En[An++] = lo), (lo = e), (ao = t);
}
function ph(e, t, n) {
  (_e[Oe++] = ot), (_e[Oe++] = st), (_e[Oe++] = cn), (cn = e);
  var r = ot;
  e = st;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ke(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ot = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (st = o + e);
  } else (ot = (1 << o) | (n << i) | r), (st = e);
}
function ya(e) {
  e.return !== null && (qt(e, 1), ph(e, 1, 0));
}
function xa(e) {
  for (; e === lo; )
    (lo = En[--An]), (En[An] = null), (ao = En[--An]), (En[An] = null);
  for (; e === cn; )
    (cn = _e[--Oe]),
      (_e[Oe] = null),
      (st = _e[--Oe]),
      (_e[Oe] = null),
      (ot = _e[--Oe]),
      (_e[Oe] = null);
}
var Me = null,
  Ae = null,
  H = !1,
  We = null;
function mh(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (Ae = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: ot, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Me = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vl(e) {
  if (H) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!sc(e, t)) {
        if (gl(e)) throw Error(P(418));
        t = Dt(n.nextSibling);
        var r = Me;
        t && sc(e, t)
          ? mh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Me = e));
      }
    } else {
      if (gl(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Me = e);
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function Si(e) {
  if (e !== Me) return !1;
  if (!H) return lc(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !dl(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (gl(e)) throw (gh(), Error(P(418)));
    for (; t; ) mh(e, t), (t = Dt(t.nextSibling));
  }
  if ((lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Me ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function gh() {
  for (var e = Ae; e; ) e = Dt(e.nextSibling);
}
function Wn() {
  (Ae = Me = null), (H = !1);
}
function wa(e) {
  We === null ? (We = [e]) : We.push(e);
}
var K0 = vt.ReactCurrentBatchConfig;
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ac(e) {
  var t = e._init;
  return t(e._payload);
}
function vh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ft(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = Es(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, x) {
    var S = m.type;
    return S === wn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Pt &&
            ac(S) === h.type))
      ? ((x = i(h, m.props)), (x.ref = lr(p, h, m)), (x.return = p), x)
      : ((x = Hi(m.type, m.key, m.props, null, p.mode, x)),
        (x.ref = lr(p, h, m)),
        (x.return = p),
        x);
  }
  function u(p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = As(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = ln(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Es("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case fi:
          return (
            (m = Hi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = lr(p, null, h)),
            (m.return = p),
            m
          );
        case xn:
          return (h = As(h, p.mode, m)), (h.return = p), h;
        case Pt:
          var x = h._init;
          return f(p, x(h._payload), m);
      }
      if (hr(h) || nr(h))
        return (h = ln(h, p.mode, m, null)), (h.return = p), h;
      Pi(p, h);
    }
    return null;
  }
  function d(p, h, m, x) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : l(p, h, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fi:
          return m.key === S ? a(p, h, m, x) : null;
        case xn:
          return m.key === S ? u(p, h, m, x) : null;
        case Pt:
          return (S = m._init), d(p, h, S(m._payload), x);
      }
      if (hr(m) || nr(m)) return S !== null ? null : c(p, h, m, x, null);
      Pi(p, m);
    }
    return null;
  }
  function g(p, h, m, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(m) || null), l(h, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case fi:
          return (p = p.get(x.key === null ? m : x.key) || null), a(h, p, x, S);
        case xn:
          return (p = p.get(x.key === null ? m : x.key) || null), u(h, p, x, S);
        case Pt:
          var C = x._init;
          return g(p, h, m, C(x._payload), S);
      }
      if (hr(x) || nr(x)) return (p = p.get(m) || null), c(h, p, x, S, null);
      Pi(h, x);
    }
    return null;
  }
  function v(p, h, m, x) {
    for (
      var S = null, C = null, M = h, k = (h = 0), _ = null;
      M !== null && k < m.length;
      k++
    ) {
      M.index > k ? ((_ = M), (M = null)) : (_ = M.sibling);
      var R = d(p, M, m[k], x);
      if (R === null) {
        M === null && (M = _);
        break;
      }
      e && M && R.alternate === null && t(p, M),
        (h = o(R, h, k)),
        C === null ? (S = R) : (C.sibling = R),
        (C = R),
        (M = _);
    }
    if (k === m.length) return n(p, M), H && qt(p, k), S;
    if (M === null) {
      for (; k < m.length; k++)
        (M = f(p, m[k], x)),
          M !== null &&
            ((h = o(M, h, k)), C === null ? (S = M) : (C.sibling = M), (C = M));
      return H && qt(p, k), S;
    }
    for (M = r(p, M); k < m.length; k++)
      (_ = g(M, p, k, m[k], x)),
        _ !== null &&
          (e && _.alternate !== null && M.delete(_.key === null ? k : _.key),
          (h = o(_, h, k)),
          C === null ? (S = _) : (C.sibling = _),
          (C = _));
    return (
      e &&
        M.forEach(function (re) {
          return t(p, re);
        }),
      H && qt(p, k),
      S
    );
  }
  function y(p, h, m, x) {
    var S = nr(m);
    if (typeof S != "function") throw Error(P(150));
    if (((m = S.call(m)), m == null)) throw Error(P(151));
    for (
      var C = (S = null), M = h, k = (h = 0), _ = null, R = m.next();
      M !== null && !R.done;
      k++, R = m.next()
    ) {
      M.index > k ? ((_ = M), (M = null)) : (_ = M.sibling);
      var re = d(p, M, R.value, x);
      if (re === null) {
        M === null && (M = _);
        break;
      }
      e && M && re.alternate === null && t(p, M),
        (h = o(re, h, k)),
        C === null ? (S = re) : (C.sibling = re),
        (C = re),
        (M = _);
    }
    if (R.done) return n(p, M), H && qt(p, k), S;
    if (M === null) {
      for (; !R.done; k++, R = m.next())
        (R = f(p, R.value, x)),
          R !== null &&
            ((h = o(R, h, k)), C === null ? (S = R) : (C.sibling = R), (C = R));
      return H && qt(p, k), S;
    }
    for (M = r(p, M); !R.done; k++, R = m.next())
      (R = g(M, p, k, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && M.delete(R.key === null ? k : R.key),
          (h = o(R, h, k)),
          C === null ? (S = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        M.forEach(function (yt) {
          return t(p, yt);
        }),
      H && qt(p, k),
      S
    );
  }
  function T(p, h, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === wn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case fi:
          e: {
            for (var S = m.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = m.type), S === wn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Pt &&
                    ac(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, m.props)),
                    (h.ref = lr(p, C, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === wn
              ? ((h = ln(m.props.children, p.mode, x, m.key)),
                (h.return = p),
                (p = h))
              : ((x = Hi(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = lr(p, h, m)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case xn:
          e: {
            for (C = m.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = As(m, p.mode, x)), (h.return = p), (p = h);
          }
          return s(p);
        case Pt:
          return (C = m._init), T(p, h, C(m._payload), x);
      }
      if (hr(m)) return v(p, h, m, x);
      if (nr(m)) return y(p, h, m, x);
      Pi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Es(m, p.mode, x)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return T;
}
var Kn = vh(!0),
  yh = vh(!1),
  uo = Ht(null),
  co = null,
  Mn = null,
  Sa = null;
function Pa() {
  Sa = Mn = co = null;
}
function Ta(e) {
  var t = uo.current;
  $(uo), (e._currentValue = t);
}
function yl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bn(e, t) {
  (co = e),
    (Sa = Mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (Sa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mn === null)) {
      if (co === null) throw Error(P(308));
      (Mn = e), (co.dependencies = { lanes: 0, firstContext: e });
    } else Mn = Mn.next = e;
  return t;
}
var nn = null;
function ka(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function xh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ka(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    mt(e, r)
  );
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function Ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function at(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      mt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ka(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    mt(e, n)
  );
}
function Fi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
function uc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fo(e, t, n, r) {
  var i = e.updateQueue;
  Tt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            y = l;
          switch (((d = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(g, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(g, f, d) : v),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Tt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (dn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function cc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var ti = {},
  be = Ht(ti),
  $r = Ht(ti),
  Hr = Ht(ti);
function rn(e) {
  if (e === ti) throw Error(P(174));
  return e;
}
function Ea(e, t) {
  switch ((I(Hr, t), I($r, e), I(be, ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Js(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Js(t, e));
  }
  $(be), I(be, t);
}
function Gn() {
  $(be), $($r), $(Hr);
}
function Sh(e) {
  rn(Hr.current);
  var t = rn(be.current),
    n = Js(t, e.type);
  t !== n && (I($r, e), I(be, n));
}
function Aa(e) {
  $r.current === e && ($(be), $($r));
}
var W = Ht(0);
function ho(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ws = [];
function Ma() {
  for (var e = 0; e < ws.length; e++)
    ws[e]._workInProgressVersionPrimary = null;
  ws.length = 0;
}
var zi = vt.ReactCurrentDispatcher,
  Ss = vt.ReactCurrentBatchConfig,
  fn = 0,
  G = null,
  te = null,
  oe = null,
  po = !1,
  Tr = !1,
  Wr = 0,
  G0 = 0;
function de() {
  throw Error(P(321));
}
function La(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function Va(e, t, n, r, i, o) {
  if (
    ((fn = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zi.current = e === null || e.memoizedState === null ? Z0 : q0),
    (e = n(r, i)),
    Tr)
  ) {
    o = 0;
    do {
      if (((Tr = !1), (Wr = 0), 25 <= o)) throw Error(P(301));
      (o += 1),
        (oe = te = null),
        (t.updateQueue = null),
        (zi.current = J0),
        (e = n(r, i));
    } while (Tr);
  }
  if (
    ((zi.current = mo),
    (t = te !== null && te.next !== null),
    (fn = 0),
    (oe = te = G = null),
    (po = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Ra() {
  var e = Wr !== 0;
  return (Wr = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Be() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) (oe = t), (te = e);
  else {
    if (e === null) throw Error(P(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ps(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((fn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (G.lanes |= c),
          (dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ye(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (G.lanes |= o), (dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ts(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ye(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ph() {}
function Th(e, t) {
  var n = G,
    r = Be(),
    i = t(),
    o = !Ye(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Na(Eh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Ch.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(P(349));
    fn & 30 || kh(n, t, i);
  }
  return i;
}
function kh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ch(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ah(t) && Mh(e);
}
function Eh(e, t, n) {
  return n(function () {
    Ah(t) && Mh(e);
  });
}
function Ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Mh(e) {
  var t = mt(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function fc(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = X0.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Lh() {
  return Be().memoizedState;
}
function Ii(e, t, n, r) {
  var i = Xe();
  (G.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fo(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (((o = s.destroy), r !== null && La(r, s.deps))) {
      i.memoizedState = Gr(t, n, o, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Gr(1 | t, n, o, r));
}
function dc(e, t) {
  return Ii(8390656, 8, e, t);
}
function Na(e, t) {
  return Fo(2048, 8, e, t);
}
function Vh(e, t) {
  return Fo(4, 2, e, t);
}
function Rh(e, t) {
  return Fo(4, 4, e, t);
}
function Nh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Dh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fo(4, 4, Nh.bind(null, t, e), n)
  );
}
function Da() {}
function jh(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _h(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Oh(e, t, n) {
  return fn & 21
    ? (Ye(n, t) || ((n = Ud()), (G.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Y0(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ss.transition;
  Ss.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (Ss.transition = r);
  }
}
function Fh() {
  return Be().memoizedState;
}
function Q0(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zh(e))
  )
    Ih(t, n);
  else if (((n = xh(e, t, n, r)), n !== null)) {
    var i = ye();
    Ge(n, e, r, i), Bh(n, t, r);
  }
}
function X0(e, t, n) {
  var r = Ot(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zh(e)) Ih(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ye(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ka(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = xh(e, t, i, r)),
      n !== null && ((i = ye()), Ge(n, e, r, i), Bh(n, t, r));
  }
}
function zh(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Ih(e, t) {
  Tr = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Bh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
var mo = {
    readContext: Ie,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Z0 = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: dc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ii(4194308, 4, Nh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Q0.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fc,
    useDebugValue: Da,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = fc(!1),
        t = e[0];
      return (e = Y0.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Xe();
      if (H) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(P(349));
        fn & 30 || kh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        dc(Eh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gr(9, Ch.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = le.identifierPrefix;
      if (H) {
        var n = st,
          r = ot;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = G0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: Ie,
    useCallback: jh,
    useContext: Ie,
    useEffect: Na,
    useImperativeHandle: Dh,
    useInsertionEffect: Vh,
    useLayoutEffect: Rh,
    useMemo: _h,
    useReducer: Ps,
    useRef: Lh,
    useState: function () {
      return Ps(Kr);
    },
    useDebugValue: Da,
    useDeferredValue: function (e) {
      var t = Be();
      return Oh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Ps(Kr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ph,
    useSyncExternalStore: Th,
    useId: Fh,
    unstable_isNewReconciler: !1,
  },
  J0 = {
    readContext: Ie,
    useCallback: jh,
    useContext: Ie,
    useEffect: Na,
    useImperativeHandle: Dh,
    useInsertionEffect: Vh,
    useLayoutEffect: Rh,
    useMemo: _h,
    useReducer: Ts,
    useRef: Lh,
    useState: function () {
      return Ts(Kr);
    },
    useDebugValue: Da,
    useDeferredValue: function (e) {
      var t = Be();
      return te === null ? (t.memoizedState = e) : Oh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Ts(Kr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ph,
    useSyncExternalStore: Th,
    useId: Fh,
    unstable_isNewReconciler: !1,
  };
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Ot(e),
      o = at(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (Ge(t, e, i, r), Fi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Ot(e),
      o = at(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (Ge(t, e, i, r), Fi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Ot(e),
      i = at(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (Ge(t, e, r, n), Fi(t, e, r));
  },
};
function hc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, o)
      : !0
  );
}
function Uh(e, t, n) {
  var r = !1,
    i = It,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((i = ke(t) ? un : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Hn(e, i) : It)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function pc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zo.enqueueReplaceState(t, t.state, null);
}
function wl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ca(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ie(o))
    : ((o = ke(t) ? un : ge.current), (i.context = Hn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (xl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zo.enqueueReplaceState(i, i.state, null),
      fo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Eg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ks(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var b0 = typeof WeakMap == "function" ? WeakMap : Map;
function $h(e, t, n) {
  (n = at(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (Rl = r)), Sl(e, t);
    }),
    n
  );
}
function Hh(e, t, n) {
  (n = at(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Sl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Sl(e, t),
          typeof r != "function" &&
            (_t === null ? (_t = new Set([this])) : _t.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function mc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new b0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = hv.bind(null, e, t, n)), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = at(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ev = vt.ReactCurrentOwner,
  Pe = !1;
function ve(e, t, n, r) {
  t.child = e === null ? yh(t, null, n, r) : Kn(t, e.child, n, r);
}
function yc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Bn(t, i),
    (r = Va(e, t, n, r, o, i)),
    (n = Ra()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gt(e, t, i))
      : (H && n && ya(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function xc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ua(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Wh(e, t, o, r, i))
      : ((e = Hi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
    )
      return gt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), gt(e, t, i);
  }
  return Pl(e, t, n, r, i);
}
function Kh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Vn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Vn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(Vn, Ee),
        (Ee |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Vn, Ee),
      (Ee |= r);
  return ve(e, t, i, n), t.child;
}
function Gh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pl(e, t, n, r, i) {
  var o = ke(n) ? un : ge.current;
  return (
    (o = Hn(t, o)),
    Bn(t, i),
    (n = Va(e, t, n, r, o, i)),
    (r = Ra()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gt(e, t, i))
      : (H && r && ya(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function wc(e, t, n, r, i) {
  if (ke(n)) {
    var o = !0;
    so(t);
  } else o = !1;
  if ((Bn(t, i), t.stateNode === null))
    Bi(e, t), Uh(t, n, r), wl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ie(u))
      : ((u = ke(n) ? un : ge.current), (u = Hn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && pc(t, s, r, u)),
      (Tt = !1);
    var d = t.memoizedState;
    (s.state = d),
      fo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Te.current || Tt
        ? (typeof c == "function" && (xl(t, n, c, r), (a = t.memoizedState)),
          (l = Tt || hc(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      wh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : $e(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ie(a))
        : ((a = ke(n) ? un : ge.current), (a = Hn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && pc(t, s, r, a)),
      (Tt = !1),
      (d = t.memoizedState),
      (s.state = d),
      fo(t, r, s, i);
    var v = t.memoizedState;
    l !== f || d !== v || Te.current || Tt
      ? (typeof g == "function" && (xl(t, n, g, r), (v = t.memoizedState)),
        (u = Tt || hc(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Tl(e, t, n, r, o, i);
}
function Tl(e, t, n, r, i, o) {
  Gh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && oc(t, n, !1), gt(e, t, o);
  (r = t.stateNode), (ev.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Kn(t, e.child, null, o)), (t.child = Kn(t, null, l, o)))
      : ve(e, t, l, o),
    (t.memoizedState = r.state),
    i && oc(t, n, !0),
    t.child
  );
}
function Yh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ic(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ic(e, t.context, !1),
    Ea(e, t.containerInfo);
}
function Sc(e, t, n, r, i) {
  return Wn(), wa(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var kl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qh(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    I(W, i & 1),
    e === null)
  )
    return (
      vl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Uo(s, r, 0, null)),
              (e = ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Cl(n)),
              (t.memoizedState = kl),
              e)
            : ja(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return tv(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ft(l, o)) : ((o = ln(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Cl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = kl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ft(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ja(e, t) {
  return (
    (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && wa(r),
    Kn(t, e.child, null, n),
    (e = ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ks(Error(P(422)))), Ti(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Uo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = ln(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Kn(t, e.child, null, s),
        (t.child.memoizedState = Cl(s)),
        (t.memoizedState = kl),
        o);
  if (!(t.mode & 1)) return Ti(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(P(419))), (r = ks(o, r, void 0)), Ti(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Pe || l)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), mt(e, i), Ge(r, e, i, -1));
    }
    return Ba(), (r = ks(Error(P(421)))), Ti(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = Dt(i.nextSibling)),
      (Me = t),
      (H = !0),
      (We = null),
      e !== null &&
        ((_e[Oe++] = ot),
        (_e[Oe++] = st),
        (_e[Oe++] = cn),
        (ot = e.id),
        (st = e.overflow),
        (cn = t)),
      (t = ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yl(e.return, t, n);
}
function Cs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Xh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ve(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pc(e, n, t);
        else if (e.tag === 19) Pc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ho(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Cs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ho(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Cs(t, !0, n, null, o);
        break;
      case "together":
        Cs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nv(e, t, n) {
  switch (t.tag) {
    case 3:
      Yh(t), Wn();
      break;
    case 5:
      Sh(t);
      break;
    case 1:
      ke(t.type) && so(t);
      break;
    case 4:
      Ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      I(uo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qh(e, t, n)
          : (I(W, W.current & 1),
            (e = gt(e, t, n)),
            e !== null ? e.sibling : null);
      I(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Kh(e, t, n);
  }
  return gt(e, t, n);
}
var Zh, El, qh, Jh;
Zh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
El = function () {};
qh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(be.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Qs(e, i)), (r = Qs(e, r)), (o = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = qs(e, i)), (r = qs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    bs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Rr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && B("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Jh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rv(e, t, n) {
  var r = t.pendingProps;
  switch ((xa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return ke(t.type) && oo(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        $(Te),
        $(ge),
        Ma(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Si(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (jl(We), (We = null)))),
        El(e, t),
        he(t),
        null
      );
    case 5:
      Aa(t);
      var i = rn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return he(t), null;
        }
        if (((e = rn(be.current)), Si(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ze] = t), (r[Ur] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < mr.length; i++) B(mr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Ru(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              Du(r, o), B("invalid", r);
          }
          bs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Rr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              di(r), Nu(r, o, !0);
              break;
            case "textarea":
              di(r), ju(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = io);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ed(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ze] = t),
            (e[Ur] = r),
            Zh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = el(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mr.length; i++) B(mr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                Ru(e, r), (i = Qs(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                Du(e, r), (i = qs(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            bs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Ld(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ad(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Nr(e, a)
                    : typeof a == "number" && Nr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && B("scroll", e)
                      : a != null && ia(e, o, a, s));
              }
            switch (n) {
              case "input":
                di(e), Nu(e, r, !1);
                break;
              case "textarea":
                di(e), ju(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? On(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Jh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = rn(Hr.current)), rn(be.current), Si(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (o = r.nodeValue !== n) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                wi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        ($(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Ae !== null && t.mode & 1 && !(t.flags & 128))
          gh(), Wn(), (t.flags |= 98560), (o = !1);
        else if (((o = Si(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(P(317));
            o[Ze] = t;
          } else
            Wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (o = !1);
        } else We !== null && (jl(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ne === 0 && (ne = 3) : Ba())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Gn(), El(e, t), e === null && Ir(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return Ta(t.type._context), he(t), null;
    case 17:
      return ke(t.type) && oo(), he(t), null;
    case 19:
      if (($(W), (o = t.memoizedState), o === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ho(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            q() > Qn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ho(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return he(t), null;
          } else
            2 * q() - o.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = W.current),
          I(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function iv(e, t) {
  switch ((xa(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        $(Te),
        $(ge),
        Ma(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Aa(t), null;
    case 13:
      if (($(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        Wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(W), null;
    case 4:
      return Gn(), null;
    case 10:
      return Ta(t.type._context), null;
    case 22:
    case 23:
      return Ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ki = !1,
  me = !1,
  ov = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Al(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Tc = !1;
function sv(e, t) {
  if (((cl = to), (e = rh()), va(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fl = { focusedElem: e, selectionRange: n }, to = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    T = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : $e(t.type, y),
                      T
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (x) {
          Q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (v = Tc), (Tc = !1), v;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Al(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Io(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ml(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[Ur], delete t[pl], delete t[$0], delete t[H0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ep(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), (e = e.sibling);
}
function Vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), (e = e.sibling);
}
var ae = null,
  He = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) tp(e, t, n), (n = n.sibling);
}
function tp(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(Ro, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Ln(n, t);
    case 6:
      var r = ae,
        i = He;
      (ae = null),
        xt(e, t, n),
        (ae = r),
        (He = i),
        ae !== null &&
          (He
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (He
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? ys(e.parentNode, n)
              : e.nodeType === 1 && ys(e, n),
            Or(e))
          : ys(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = He),
        (ae = n.stateNode.containerInfo),
        (He = !0),
        xt(e, t, n),
        (ae = r),
        (He = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Al(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Q(n, t, l);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), xt(e, t, n), (me = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ov()),
      t.forEach(function (r) {
        var i = mv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (He = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (He = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(P(160));
        tp(o, s, i), (ae = null), (He = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) np(t, e), (t = t.sibling);
}
function np(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Qe(e), r & 4)) {
        try {
          kr(3, e, e.return), Io(3, e);
        } catch (y) {
          Q(e, e.return, y);
        }
        try {
          kr(5, e, e.return);
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 1:
      Ue(t, e), Qe(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Qe(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && kd(i, o),
              el(l, s);
            var u = el(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Ld(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Ad(i, f)
                : c === "children"
                ? Nr(i, f)
                : ia(i, c, f, u);
            }
            switch (l) {
              case "input":
                Xs(i, o);
                break;
              case "textarea":
                Cd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? On(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? On(i, !!o.multiple, o.defaultValue, !0)
                      : On(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ur] = o;
          } catch (y) {
            Q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Or(t.containerInfo);
        } catch (y) {
          Q(e, e.return, y);
        }
      break;
    case 4:
      Ue(t, e), Qe(e);
      break;
    case 13:
      Ue(t, e),
        Qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fa = q())),
        r & 4 && Cc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ue(t, e), (me = u)) : Ue(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, d, d.return);
                  break;
                case 1:
                  Ln(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      Q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ln(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Ac(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (L = g)) : Ac(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Md("display", s)));
              } catch (y) {
                Q(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                Q(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Qe(e), r & 4 && Cc(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ep(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var o = kc(e);
          Vl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = kc(e);
          Ll(e, l, s);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lv(e, t, n) {
  (L = e), rp(e);
}
function rp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ki;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = ki;
        var u = me;
        if (((ki = s), (me = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Mc(i)
                : a !== null
                ? ((a.return = s), (L = a))
                : Mc(i);
        for (; o !== null; ) (L = o), rp(o), (o = o.sibling);
        (L = i), (ki = l), (me = u);
      }
      Ec(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : Ec(e);
  }
}
function Ec(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Io(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && cc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Or(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        me || (t.flags & 512 && Ml(t));
      } catch (d) {
        Q(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Ac(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Mc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Io(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var o = t.return;
          try {
            Ml(t);
          } catch (a) {
            Q(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ml(t);
          } catch (a) {
            Q(t, s, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var av = Math.ceil,
  go = vt.ReactCurrentDispatcher,
  _a = vt.ReactCurrentOwner,
  ze = vt.ReactCurrentBatchConfig,
  F = 0,
  le = null,
  J = null,
  ue = 0,
  Ee = 0,
  Vn = Ht(0),
  ne = 0,
  Yr = null,
  dn = 0,
  Bo = 0,
  Oa = 0,
  Cr = null,
  Se = null,
  Fa = 0,
  Qn = 1 / 0,
  rt = null,
  vo = !1,
  Rl = null,
  _t = null,
  Ci = !1,
  At = null,
  yo = 0,
  Er = 0,
  Nl = null,
  Ui = -1,
  $i = 0;
function ye() {
  return F & 6 ? q() : Ui !== -1 ? Ui : (Ui = q());
}
function Ot(e) {
  return e.mode & 1
    ? F & 2 && ue !== 0
      ? ue & -ue
      : K0.transition !== null
      ? ($i === 0 && ($i = Ud()), $i)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qd(e.type))),
        e)
    : 1;
}
function Ge(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (Nl = null), Error(P(185)));
  Jr(e, n, r),
    (!(F & 2) || e !== le) &&
      (e === le && (!(F & 2) && (Bo |= n), ne === 4 && Ct(e, ue)),
      Ce(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Qn = q() + 500), Oo && Wt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Kg(e, t);
  var r = eo(e, e === le ? ue : 0);
  if (r === 0)
    n !== null && Fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fu(n), t === 1))
      e.tag === 0 ? W0(Lc.bind(null, e)) : hh(Lc.bind(null, e)),
        B0(function () {
          !(F & 6) && Wt();
        }),
        (n = null);
    else {
      switch ($d(r)) {
        case 1:
          n = ua;
          break;
        case 4:
          n = Id;
          break;
        case 16:
          n = bi;
          break;
        case 536870912:
          n = Bd;
          break;
        default:
          n = bi;
      }
      n = fp(n, ip.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ip(e, t) {
  if (((Ui = -1), ($i = 0), F & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = eo(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xo(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = sp();
    (le !== e || ue !== t) && ((rt = null), (Qn = q() + 500), sn(e, t));
    do
      try {
        fv();
        break;
      } catch (l) {
        op(e, l);
      }
    while (!0);
    Pa(),
      (go.current = o),
      (F = i),
      J !== null ? (t = 0) : ((le = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ol(e)), i !== 0 && ((r = i), (t = Dl(e, i)))), t === 1)
    )
      throw ((n = Yr), sn(e, 0), Ct(e, r), Ce(e, q()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !uv(i) &&
          ((t = xo(e, r)),
          t === 2 && ((o = ol(e)), o !== 0 && ((r = o), (t = Dl(e, o)))),
          t === 1))
      )
        throw ((n = Yr), sn(e, 0), Ct(e, r), Ce(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Jt(e, Se, rt);
          break;
        case 3:
          if (
            (Ct(e, r), (r & 130023424) === r && ((t = Fa + 500 - q()), 10 < t))
          ) {
            if (eo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = hl(Jt.bind(null, e, Se, rt), t);
            break;
          }
          Jt(e, Se, rt);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ke(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * av(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hl(Jt.bind(null, e, Se, rt), r);
            break;
          }
          Jt(e, Se, rt);
          break;
        case 5:
          Jt(e, Se, rt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ce(e, q()), e.callbackNode === n ? ip.bind(null, e) : null;
}
function Dl(e, t) {
  var n = Cr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = xo(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && jl(t)),
    e
  );
}
function jl(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function uv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ct(e, t) {
  for (
    t &= ~Oa,
      t &= ~Bo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Lc(e) {
  if (F & 6) throw Error(P(327));
  Un();
  var t = eo(e, 0);
  if (!(t & 1)) return Ce(e, q()), null;
  var n = xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ol(e);
    r !== 0 && ((t = r), (n = Dl(e, r)));
  }
  if (n === 1) throw ((n = Yr), sn(e, 0), Ct(e, t), Ce(e, q()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, Se, rt),
    Ce(e, q()),
    null
  );
}
function za(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Qn = q() + 500), Oo && Wt());
  }
}
function hn(e) {
  At !== null && At.tag === 0 && !(F & 6) && Un();
  var t = F;
  F |= 1;
  var n = ze.transition,
    r = z;
  try {
    if (((ze.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (ze.transition = n), (F = t), !(F & 6) && Wt();
  }
}
function Ia() {
  (Ee = Vn.current), $(Vn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), I0(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((xa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          Gn(), $(Te), $(ge), Ma();
          break;
        case 5:
          Aa(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          $(W);
          break;
        case 19:
          $(W);
          break;
        case 10:
          Ta(r.type._context);
          break;
        case 22:
        case 23:
          Ia();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (J = e = Ft(e.current, null)),
    (ue = Ee = t),
    (ne = 0),
    (Yr = null),
    (Oa = Bo = dn = 0),
    (Se = Cr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function op(e, t) {
  do {
    var n = J;
    try {
      if ((Pa(), (zi.current = mo), po)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (
        ((fn = 0),
        (oe = te = G = null),
        (Tr = !1),
        (Wr = 0),
        (_a.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Yr = t), (J = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = gc(s);
          if (g !== null) {
            (g.flags &= -257),
              vc(g, s, l, o, t),
              g.mode & 1 && mc(o, u, t),
              (t = g),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              mc(o, u, t), Ba();
              break e;
            }
            a = Error(P(426));
          }
        } else if (H && l.mode & 1) {
          var T = gc(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              vc(T, s, l, o, t),
              wa(Yn(a, l));
            break e;
          }
        }
        (o = a = Yn(a, l)),
          ne !== 4 && (ne = 2),
          Cr === null ? (Cr = [o]) : Cr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = $h(o, a, t);
              uc(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (_t === null || !_t.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Hh(o, l, t);
                uc(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ap(n);
    } catch (S) {
      (t = S), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sp() {
  var e = go.current;
  return (go.current = mo), e === null ? mo : e;
}
function Ba() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(dn & 268435455) && !(Bo & 268435455)) || Ct(le, ue);
}
function xo(e, t) {
  var n = F;
  F |= 2;
  var r = sp();
  (le !== e || ue !== t) && ((rt = null), sn(e, t));
  do
    try {
      cv();
      break;
    } catch (i) {
      op(e, i);
    }
  while (!0);
  if ((Pa(), (F = n), (go.current = r), J !== null)) throw Error(P(261));
  return (le = null), (ue = 0), ne;
}
function cv() {
  for (; J !== null; ) lp(J);
}
function fv() {
  for (; J !== null && !Og(); ) lp(J);
}
function lp(e) {
  var t = cp(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? ap(e) : (J = t),
    (_a.current = null);
}
function ap(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = iv(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (J = null);
        return;
      }
    } else if (((n = rv(n, t, Ee)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Jt(e, t, n) {
  var r = z,
    i = ze.transition;
  try {
    (ze.transition = null), (z = 1), dv(e, t, n, r);
  } finally {
    (ze.transition = i), (z = r);
  }
  return null;
}
function dv(e, t, n, r) {
  do Un();
  while (At !== null);
  if (F & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Gg(e, o),
    e === le && ((J = le = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ci ||
      ((Ci = !0),
      fp(bi, function () {
        return Un(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var s = z;
    z = 1;
    var l = F;
    (F |= 4),
      (_a.current = null),
      sv(e, n),
      np(n, e),
      N0(fl),
      (to = !!cl),
      (fl = cl = null),
      (e.current = n),
      lv(n),
      Fg(),
      (F = l),
      (z = s),
      (ze.transition = o);
  } else e.current = n;
  if (
    (Ci && ((Ci = !1), (At = e), (yo = i)),
    (o = e.pendingLanes),
    o === 0 && (_t = null),
    Bg(n.stateNode),
    Ce(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (vo) throw ((vo = !1), (e = Rl), (Rl = null), e);
  return (
    yo & 1 && e.tag !== 0 && Un(),
    (o = e.pendingLanes),
    o & 1 ? (e === Nl ? Er++ : ((Er = 0), (Nl = e))) : (Er = 0),
    Wt(),
    null
  );
}
function Un() {
  if (At !== null) {
    var e = $d(yo),
      t = ze.transition,
      n = z;
    try {
      if (((ze.transition = null), (z = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (yo = 0), F & 6)) throw Error(P(331));
        var i = F;
        for (F |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        g = c.return;
                      if ((bh(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (L = d);
                        break;
                      }
                      L = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var T = y.sibling;
                    (y.sibling = null), (y = T);
                  } while (y !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (L = p);
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (L = m);
          else
            e: for (s = h; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(9, l);
                  }
                } catch (S) {
                  Q(l, l.return, S);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (L = x);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((F = i), Wt(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(Ro, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (ze.transition = t);
    }
  }
  return !1;
}
function Vc(e, t, n) {
  (t = Yn(n, t)),
    (t = $h(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = ye()),
    e !== null && (Jr(e, 1, t), Ce(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_t === null || !_t.has(r)))
        ) {
          (e = Yn(n, e)),
            (e = Hh(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = ye()),
            t !== null && (Jr(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > q() - Fa)
        ? sn(e, 0)
        : (Oa |= n)),
    Ce(e, t);
}
function up(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = mi), (mi <<= 1), !(mi & 130023424) && (mi = 4194304))
      : (t = 1));
  var n = ye();
  (e = mt(e, t)), e !== null && (Jr(e, t, n), Ce(e, n));
}
function pv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), up(e, n);
}
function mv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), up(e, n);
}
var cp;
cp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), nv(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), H && t.flags & 1048576 && ph(t, ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bi(e, t), (e = t.pendingProps);
      var i = Hn(t, ge.current);
      Bn(t, n), (i = Va(null, t, r, e, i, n));
      var o = Ra();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((o = !0), so(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ca(t),
            (i.updater = zo),
            (t.stateNode = i),
            (i._reactInternals = t),
            wl(t, r, e, n),
            (t = Tl(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && ya(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = vv(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = Pl(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Pl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        wc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Yh(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          wh(e, t),
          fo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Yn(Error(P(423)), t)), (t = Sc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Yn(Error(P(424)), t)), (t = Sc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Dt(t.stateNode.containerInfo.firstChild),
                Me = t,
                H = !0,
                We = null,
                n = yh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wn(), r === i)) {
            t = gt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sh(t),
        e === null && vl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        dl(r, i) ? (s = null) : o !== null && dl(r, o) && (t.flags |= 32),
        Gh(e, t),
        ve(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && vl(t), null;
    case 13:
      return Qh(e, t, n);
    case 4:
      return (
        Ea(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        yc(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          I(uo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ye(o.value, s)) {
            if (o.children === i.children && !Te.current) {
              t = gt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = at(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      yl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(P(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  yl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (i = Ie(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        xc(e, t, r, i, n)
      );
    case 15:
      return Wh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Bi(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), so(t)) : (e = !1),
        Bn(t, n),
        Uh(t, r, i),
        wl(t, r, i, n),
        Tl(null, t, r, !0, e, n)
      );
    case 19:
      return Xh(e, t, n);
    case 22:
      return Kh(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function fp(e, t) {
  return zd(e, t);
}
function gv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new gv(e, t, n, r);
}
function Ua(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vv(e) {
  if (typeof e == "function") return Ua(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sa)) return 11;
    if (e === la) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ua(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wn:
        return ln(n.children, i, o, t);
      case oa:
        (s = 8), (i |= 8);
        break;
      case Ws:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = Ws), (e.lanes = o), e
        );
      case Ks:
        return (e = Fe(13, n, t, i)), (e.elementType = Ks), (e.lanes = o), e;
      case Gs:
        return (e = Fe(19, n, t, i)), (e.elementType = Gs), (e.lanes = o), e;
      case Sd:
        return Uo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xd:
              s = 10;
              break e;
            case wd:
              s = 9;
              break e;
            case sa:
              s = 11;
              break e;
            case la:
              s = 14;
              break e;
            case Pt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function ln(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Uo(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Sd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Es(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function As(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ls(0)),
    (this.expirationTimes = ls(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ls(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function $a(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new yv(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Fe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ca(o),
    e
  );
}
function xv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function dp(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return dh(e, n, t);
  }
  return t;
}
function hp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = $a(n, r, !0, e, i, o, s, l, a)),
    (e.context = dp(null)),
    (n = e.current),
    (r = ye()),
    (i = Ot(n)),
    (o = at(r, i)),
    (o.callback = t ?? null),
    jt(n, o, i),
    (e.current.lanes = i),
    Jr(e, i, r),
    Ce(e, r),
    e
  );
}
function $o(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = Ot(i);
  return (
    (n = dp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = at(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, s)),
    e !== null && (Ge(e, i, s, o), Fi(e, i, s)),
    s
  );
}
function wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ha(e, t) {
  Rc(e, t), (e = e.alternate) && Rc(e, t);
}
function wv() {
  return null;
}
var pp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wa(e) {
  this._internalRoot = e;
}
Ho.prototype.render = Wa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  $o(e, t, null, null);
};
Ho.prototype.unmount = Wa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      $o(null, e, null, null);
    }),
      (t[pt] = null);
  }
};
function Ho(e) {
  this._internalRoot = e;
}
Ho.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Kd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && Yd(e);
  }
};
function Ka(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nc() {}
function Sv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = wo(s);
        o.call(u);
      };
    }
    var s = hp(t, r, e, 0, null, !1, !1, "", Nc);
    return (
      (e._reactRootContainer = s),
      (e[pt] = s.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = wo(a);
      l.call(u);
    };
  }
  var a = $a(e, 0, !1, null, null, !1, !1, "", Nc);
  return (
    (e._reactRootContainer = a),
    (e[pt] = a.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      $o(t, a, n, r);
    }),
    a
  );
}
function Ko(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = wo(s);
        l.call(a);
      };
    }
    $o(t, s, e, i);
  } else s = Sv(n, t, e, i, r);
  return wo(s);
}
Hd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (ca(t, n | 1), Ce(t, q()), !(F & 6) && ((Qn = q() + 500), Wt()));
      }
      break;
    case 13:
      hn(function () {
        var r = mt(e, 1);
        if (r !== null) {
          var i = ye();
          Ge(r, e, 1, i);
        }
      }),
        Ha(e, 1);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ge(t, e, 134217728, n);
    }
    Ha(e, 134217728);
  }
};
Wd = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = mt(e, t);
    if (n !== null) {
      var r = ye();
      Ge(n, e, t, r);
    }
    Ha(e, t);
  }
};
Kd = function () {
  return z;
};
Gd = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
nl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _o(r);
            if (!i) throw Error(P(90));
            Td(r), Xs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Cd(e, n);
      break;
    case "select":
      (t = n.value), t != null && On(e, !!n.multiple, t, !1);
  }
};
Nd = za;
Dd = hn;
var Pv = { usingClientEntryPoint: !1, Events: [ei, kn, _o, Vd, Rd, za] },
  ur = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Tv = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Od(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || wv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      (Ro = Ei.inject(Tv)), (Je = Ei);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pv;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ka(t)) throw Error(P(200));
  return xv(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!Ka(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = pp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, r, i)),
    (e[pt] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new Wa(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Od(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return hn(e);
};
Re.hydrate = function (e, t, n) {
  if (!Wo(t)) throw Error(P(200));
  return Ko(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!Ka(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = pp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = hp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[pt] = t.current),
    Ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ho(t);
};
Re.render = function (e, t, n) {
  if (!Wo(t)) throw Error(P(200));
  return Ko(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!Wo(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (hn(function () {
        Ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pt] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = za;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wo(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Ko(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (e) {
      console.error(e);
    }
}
mp(), (md.exports = Re);
var kv = md.exports,
  gp,
  Dc = kv;
(gp = Dc.createRoot), Dc.hydrateRoot;
var vp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  jc = Lt.createContext && Lt.createContext(vp),
  Cv = ["attr", "size", "title"];
function Ev(e, t) {
  if (e == null) return {};
  var n = Av(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Av(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function So() {
  return (
    (So = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    So.apply(this, arguments)
  );
}
function _c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _c(Object(n), !0).forEach(function (r) {
          Mv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : _c(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Mv(e, t, n) {
  return (
    (t = Lv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Lv(e) {
  var t = Vv(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vv(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yp(e) {
  return (
    e &&
    e.map((t, n) =>
      Lt.createElement(t.tag, Po({ key: n }, t.attr), yp(t.child))
    )
  );
}
function Kt(e) {
  return (t) =>
    Lt.createElement(Rv, So({ attr: Po({}, e.attr) }, t), yp(e.child));
}
function Rv(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = Ev(e, Cv),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Lt.createElement(
        "svg",
        So(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: a,
            style: Po(Po({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Lt.createElement("title", null, o),
        e.children
      )
    );
  };
  return jc !== void 0
    ? Lt.createElement(jc.Consumer, null, (n) => t(n))
    : t(vp);
}
function xp(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16",
        },
        child: [],
      },
    ],
  })(e);
}
function Nv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Go(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const _l = (e) => Array.isArray(e);
function wp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Qr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Oc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ga(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Oc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Oc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Yo(e, t, n) {
  const r = e.getProps();
  return Ga(r, t, n !== void 0 ? n : r.custom, e);
}
const Ya = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qa = ["initial", ...Ya],
  ni = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vn = new Set(ni),
  ut = (e) => e * 1e3,
  ct = (e) => e / 1e3,
  Dv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  jv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  _v = { type: "keyframes", duration: 0.8 },
  Ov = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Fv = (e, { keyframes: t }) =>
    t.length > 2
      ? _v
      : vn.has(e)
      ? e.startsWith("scale")
        ? jv(t[1])
        : Dv
      : Ov;
function Xa(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const zv = { skipAnimations: !1, useManualTiming: !1 },
  Iv = (e) => e !== null;
function Qo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Iv),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const ce = (e) => e;
function Bv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    o.has(u) && (a.schedule(u), e()), u(s);
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const Ai = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Uv = 40;
function Sp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Ai.reduce((p, h) => ((p[h] = Bv(o)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Uv), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: Ai.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (x, S = !1, C = !1) => (n || v(), m.schedule(x, S, C))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ai.length; h++) s[Ai[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: O,
    cancel: nt,
    state: ee,
    steps: Ms,
  } = Sp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ce, !0),
  Pp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  $v = 1e-7,
  Hv = 12;
function Wv(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Pp(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > $v && ++l < Hv);
  return s;
}
function ri(e, t, n, r) {
  if (e === t && n === r) return ce;
  const i = (o) => Wv(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Pp(i(o), t, r));
}
const Tp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  kp = (e) => (t) => 1 - e(1 - t),
  Cp = ri(0.33, 1.53, 0.69, 0.99),
  Za = kp(Cp),
  Ep = Tp(Za),
  Ap = (e) =>
    (e *= 2) < 1 ? 0.5 * Za(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  qa = (e) => 1 - Math.sin(Math.acos(e)),
  Mp = kp(qa),
  Lp = Tp(qa),
  Vp = (e) => /^0[^.\s]+$/u.test(e);
function Kv(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Vp(e)
    : !0;
}
let Gv = ce,
  Ol = ce;
const Rp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Np = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Dp = Np("--"),
  Yv = Np("var(--"),
  Ja = (e) => (Yv(e) ? Qv.test(e.split("/*")[0].trim()) : !1),
  Qv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Xv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zv(e) {
  const t = Xv.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function jp(e, t, n = 1) {
  const [r, i] = Zv(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Rp(s) ? parseFloat(s) : s;
  }
  return Ja(i) ? jp(i, t, n + 1) : i;
}
const Bt = (e, t, n) => (n > t ? t : n < e ? e : n),
  er = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Xr = { ...er, transform: (e) => Bt(0, 1, e) },
  Mi = { ...er, default: 1 },
  ii = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wt = ii("deg"),
  et = ii("%"),
  V = ii("px"),
  qv = ii("vh"),
  Jv = ii("vw"),
  Fc = {
    ...et,
    parse: (e) => et.parse(e) / 100,
    transform: (e) => et.transform(e * 100),
  },
  bv = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  zc = (e) => e === er || e === V,
  Ic = (e, t) => parseFloat(e.split(", ")[t]),
  Bc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Ic(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Ic(o[1], e) : 0;
      }
    },
  ey = new Set(["x", "y", "z"]),
  ty = ni.filter((e) => !ey.has(e));
function ny(e) {
  const t = [];
  return (
    ty.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Xn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Bc(4, 13),
  y: Bc(5, 14),
};
Xn.translateX = Xn.x;
Xn.translateY = Xn.y;
const _p = (e) => (t) => t.test(e),
  ry = { test: (e) => e === "auto", parse: (e) => e },
  Op = [er, V, et, wt, Jv, qv, ry],
  Uc = (e) => Op.find(_p(e)),
  an = new Set();
let Fl = !1,
  zl = !1;
function Fp() {
  if (zl) {
    const e = Array.from(an).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = ny(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var l;
            (l = r.getValue(o)) === null || l === void 0 || l.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (zl = !1), (Fl = !1), an.forEach((e) => e.complete()), an.clear();
}
function zp() {
  an.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (zl = !0);
  });
}
function iy() {
  zp(), Fp();
}
class ba {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (an.add(this), Fl || ((Fl = !0), O.read(zp), O.resolveKeyframes(Fp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      an.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), an.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ar = (e) => Math.round(e * 1e5) / 1e5,
  eu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function oy(e) {
  return e == null;
}
const sy =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  tu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && sy.test(n) && n.startsWith(e)) ||
      (t && !oy(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Ip = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, l] = r.match(eu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  ly = (e) => Bt(0, 255, e),
  Ls = { ...er, transform: (e) => Math.round(ly(e)) },
  on = {
    test: tu("rgb", "red"),
    parse: Ip("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ls.transform(e) +
      ", " +
      Ls.transform(t) +
      ", " +
      Ls.transform(n) +
      ", " +
      Ar(Xr.transform(r)) +
      ")",
  };
function ay(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Il = { test: tu("#"), parse: ay, transform: on.transform },
  Rn = {
    test: tu("hsl", "hue"),
    parse: Ip("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      et.transform(Ar(t)) +
      ", " +
      et.transform(Ar(n)) +
      ", " +
      Ar(Xr.transform(r)) +
      ")",
  },
  pe = {
    test: (e) => on.test(e) || Il.test(e) || Rn.test(e),
    parse: (e) =>
      on.test(e) ? on.parse(e) : Rn.test(e) ? Rn.parse(e) : Il.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? on.transform(e)
        : Rn.transform(e),
  },
  uy =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function cy(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(eu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(uy)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Bp = "number",
  Up = "color",
  fy = "var",
  dy = "var(",
  $c = "${}",
  hy =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const l = t
    .replace(
      hy,
      (a) => (
        pe.test(a)
          ? (r.color.push(o), i.push(Up), n.push(pe.parse(a)))
          : a.startsWith(dy)
          ? (r.var.push(o), i.push(fy), n.push(a))
          : (r.number.push(o), i.push(Bp), n.push(parseFloat(a))),
        ++o,
        $c
      )
    )
    .split($c);
  return { values: n, split: l, indexes: r, types: i };
}
function $p(e) {
  return Zr(e).values;
}
function Hp(e) {
  const { split: t, types: n } = Zr(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === Bp
          ? (o += Ar(i[s]))
          : l === Up
          ? (o += pe.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const py = (e) => (typeof e == "number" ? 0 : e);
function my(e) {
  const t = $p(e);
  return Hp(e)(t.map(py));
}
const Ut = {
    test: cy,
    parse: $p,
    createTransformer: Hp,
    getAnimatableNone: my,
  },
  gy = new Set(["brightness", "contrast", "saturate", "opacity"]);
function vy(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(eu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = gy.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const yy = /\b([a-z-]*)\(.*?\)/gu,
  Bl = {
    ...Ut,
    getAnimatableNone: (e) => {
      const t = e.match(yy);
      return t ? t.map(vy).join(" ") : e;
    },
  },
  xy = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
  },
  wy = {
    rotate: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: Mi,
    scaleX: Mi,
    scaleY: Mi,
    scaleZ: Mi,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Xr,
    originX: Fc,
    originY: Fc,
    originZ: V,
  },
  Hc = { ...er, transform: Math.round },
  nu = {
    ...xy,
    ...wy,
    zIndex: Hc,
    size: V,
    fillOpacity: Xr,
    strokeOpacity: Xr,
    numOctaves: Hc,
  },
  Sy = {
    ...nu,
    color: pe,
    backgroundColor: pe,
    outlineColor: pe,
    fill: pe,
    stroke: pe,
    borderColor: pe,
    borderTopColor: pe,
    borderRightColor: pe,
    borderBottomColor: pe,
    borderLeftColor: pe,
    filter: Bl,
    WebkitFilter: Bl,
  },
  ru = (e) => Sy[e];
function Wp(e, t) {
  let n = ru(e);
  return (
    n !== Bl && (n = Ut), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Py = new Set(["auto", "none", "0"]);
function Ty(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !Py.has(o) && Zr(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Wp(n, i);
}
class Kp extends ba {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), Ja(u))) {
        const c = jp(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !bv.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Uc(i),
      l = Uc(o);
    if (s !== l)
      if (zc(s) && zc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Kv(t[i]) && r.push(i);
    r.length && Ty(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Xn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      l = i[s];
    (i[s] = Xn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function iu(e) {
  return typeof e == "function";
}
let Wi;
function ky() {
  Wi = void 0;
}
const tt = {
    now: () => (
      Wi === void 0 &&
        tt.set(
          ee.isProcessing || zv.useManualTiming
            ? ee.timestamp
            : performance.now()
        ),
      Wi
    ),
    set: (e) => {
      (Wi = e), queueMicrotask(ky);
    },
  },
  Wc = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Ut.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function Cy(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ey(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Wc(i, t),
    l = Wc(o, t);
  return !s || !l ? !1 : Cy(e) || ((n === "spring" || iu(n)) && r);
}
const Ay = 40;
class Gp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = tt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Ay
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && iy(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = tt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Ey(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        a == null || a(Qo(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function ou(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const My = 5;
function Yp(e, t, n) {
  const r = Math.max(t - My, 0);
  return ou(n - e(r), t - r);
}
const Vs = 0.001,
  Ly = 0.01,
  Vy = 10,
  Ry = 0.05,
  Ny = 1;
function Dy({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Bt(Ry, Ny, s)),
    (e = Bt(Ly, Vy, ct(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = Ul(u, s),
            v = Math.exp(-f);
          return Vs - (d / g) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            y = Ul(Math.pow(u, 2), s);
          return ((-i(u) + Vs > 0 ? -1 : 1) * ((d - g) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Vs + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = _y(i, o, l);
  if (((e = ut(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const jy = 12;
function _y(e, t, n) {
  let r = n;
  for (let i = 1; i < jy; i++) r = r - e(r) / t(r);
  return r;
}
function Ul(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Oy = ["duration", "bounce"],
  Fy = ["stiffness", "damping", "mass"];
function Kc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function zy(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Kc(e, Fy) && Kc(e, Oy)) {
    const n = Dy(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Qp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = zy({ ...r, velocity: -ct(r.velocity || 0) }),
    g = f || 0,
    v = a / (2 * Math.sqrt(l * u)),
    y = o - i,
    T = ct(Math.sqrt(l / u)),
    p = Math.abs(y) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const m = Ul(T, v);
    h = (x) => {
      const S = Math.exp(-v * T * x);
      return (
        o - S * (((g + v * T * y) / m) * Math.sin(m * x) + y * Math.cos(m * x))
      );
    };
  } else if (v === 1) h = (m) => o - Math.exp(-T * m) * (y + (g + T * y) * m);
  else {
    const m = T * Math.sqrt(v * v - 1);
    h = (x) => {
      const S = Math.exp(-v * T * x),
        C = Math.min(m * x, 300);
      return (
        o - (S * ((g + v * T * y) * Math.sinh(C) + m * y * Math.cosh(C))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const x = h(m);
      if (d) s.done = m >= c;
      else {
        let S = 0;
        v < 1 && (S = m === 0 ? ut(g) : Yp(h, m, x));
        const C = Math.abs(S) <= n,
          M = Math.abs(o - x) <= t;
        s.done = C && M;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Gc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    v = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
        ? l
        : a;
  let y = n * t;
  const T = f + y,
    p = s === void 0 ? T : s(T);
  p !== T && (y = p - f);
  const h = (k) => -y * Math.exp(-k / r),
    m = (k) => p + h(k),
    x = (k) => {
      const _ = h(k),
        R = m(k);
      (d.done = Math.abs(_) <= u), (d.value = d.done ? p : R);
    };
  let S, C;
  const M = (k) => {
    g(d.value) &&
      ((S = k),
      (C = Qp({
        keyframes: [d.value, v(d.value)],
        velocity: Yp(m, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let _ = !1;
        return (
          !C && S === void 0 && ((_ = !0), x(k), M(k)),
          S !== void 0 && k >= S ? C.next(k - S) : (!_ && x(k), d)
        );
      },
    }
  );
}
const Iy = ri(0.42, 0, 1, 1),
  By = ri(0, 0, 0.58, 1),
  Xp = ri(0.42, 0, 0.58, 1),
  Uy = (e) => Array.isArray(e) && typeof e[0] != "number",
  su = (e) => Array.isArray(e) && typeof e[0] == "number",
  Yc = {
    linear: ce,
    easeIn: Iy,
    easeInOut: Xp,
    easeOut: By,
    circIn: qa,
    circInOut: Lp,
    circOut: Mp,
    backIn: Za,
    backInOut: Ep,
    backOut: Cp,
    anticipate: Ap,
  },
  Qc = (e) => {
    if (su(e)) {
      Ol(e.length === 4);
      const [t, n, r, i] = e;
      return ri(t, n, r, i);
    } else if (typeof e == "string") return Ol(Yc[e] !== void 0), Yc[e];
    return e;
  },
  $y = (e, t) => (n) => t(e(n)),
  ft = (...e) => e.reduce($y),
  pn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  K = (e, t, n) => e + (t - e) * n;
function Rs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Hy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Rs(a, l, e + 1 / 3)), (o = Rs(a, l, e)), (s = Rs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function To(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ns = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Wy = [Il, on, Rn],
  Ky = (e) => Wy.find((t) => t.test(e));
function Xc(e) {
  const t = Ky(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Rn && (n = Hy(n)), n;
}
const Zc = (e, t) => {
    const n = Xc(e),
      r = Xc(t);
    if (!n || !r) return To(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Ns(n.red, r.red, o)),
      (i.green = Ns(n.green, r.green, o)),
      (i.blue = Ns(n.blue, r.blue, o)),
      (i.alpha = K(n.alpha, r.alpha, o)),
      on.transform(i)
    );
  },
  $l = new Set(["none", "hidden"]);
function Gy(e, t) {
  return $l.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Yy(e, t) {
  return (n) => K(e, t, n);
}
function lu(e) {
  return typeof e == "number"
    ? Yy
    : typeof e == "string"
    ? Ja(e)
      ? To
      : pe.test(e)
      ? Zc
      : Zy
    : Array.isArray(e)
    ? Zp
    : typeof e == "object"
    ? pe.test(e)
      ? Zc
      : Qy
    : To;
}
function Zp(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => lu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function Qy(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = lu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function Xy(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = a), i[s]++;
  }
  return r;
}
const Zy = (e, t) => {
  const n = Ut.createTransformer(t),
    r = Zr(e),
    i = Zr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? ($l.has(e) && !i.values.length) || ($l.has(t) && !r.values.length)
      ? Gy(e, t)
      : ft(Zp(Xy(r, i), i.values), n)
    : To(e, t);
};
function qp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? K(e, t, n)
    : lu(e)(e, t);
}
function qy(e, t, n) {
  const r = [],
    i = n || qp,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || ce : t;
      l = ft(a, l);
    }
    r.push(l);
  }
  return r;
}
function Jp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Ol(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = qy(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = pn(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Bt(e[0], e[o - 1], u)) : a;
}
function Jy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = pn(0, t, r);
    e.push(K(n, 1, i));
  }
}
function bp(e) {
  const t = [0];
  return Jy(t, e.length - 1), t;
}
function by(e, t) {
  return e.map((n) => n * t);
}
function e1(e, t) {
  return e.map(() => t || Xp).splice(0, e.length - 1);
}
function ko({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Uy(r) ? r.map(Qc) : Qc(r),
    o = { done: !1, value: t[0] },
    s = by(n && n.length === t.length ? n : bp(t), e),
    l = Jp(s, t, { ease: Array.isArray(i) ? i : e1(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
const qc = 2e4;
function t1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < qc; ) (t += n), (r = e.next(t));
  return t >= qc ? 1 / 0 : t;
}
const n1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => O.update(t, !0),
      stop: () => nt(t),
      now: () => (ee.isProcessing ? ee.timestamp : tt.now()),
    };
  },
  r1 = { decay: Gc, inertia: Gc, tween: ko, keyframes: ko, spring: Qp },
  i1 = (e) => e / 100;
class Xo extends Gp {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || ba,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new s(o, l, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      l = iu(n) ? n : r1[n] || ko;
    let a, u;
    l !== ko &&
      typeof t[0] != "number" &&
      ((a = ft(i1, qp(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = t1(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: v,
      repeatDelay: y,
      onUpdate: T,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      x = o;
    if (g) {
      const k = Math.min(this.currentTime, c) / f;
      let _ = Math.floor(k),
        R = k % 1;
      !R && k >= 1 && (R = 1),
        R === 1 && _--,
        (_ = Math.min(_, g + 1)),
        !!(_ % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), y && (R -= y / f))
            : v === "mirror" && (x = s)),
        (m = Bt(0, 1, R) * f);
    }
    const S = h ? { done: !1, value: a[0] } : x.next(m);
    l && (S.value = l(S.value));
    let { done: C } = S;
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const M =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      M && i !== void 0 && (S.value = Qo(a, this.options, i)),
      T && T(S.value),
      M && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ct(t.calculatedDuration) : 0;
  }
  get time() {
    return ct(this.currentTime);
  }
  set time(t) {
    (t = ut(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ct(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = n1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
function o1(e) {
  return new Xo(e);
}
const s1 = new Set(["opacity", "clipPath", "filter", "transform"]),
  l1 = 10,
  a1 = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / l1), 2);
    for (let i = 0; i < r; i++) n += e(pn(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function au(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const u1 = { linearEasing: void 0 };
function c1(e, t) {
  const n = au(e);
  return () => {
    var r;
    return (r = u1[t]) !== null && r !== void 0 ? r : n();
  };
}
const Co = c1(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function em(e) {
  return !!(
    (typeof e == "function" && Co()) ||
    !e ||
    (typeof e == "string" && (e in Hl || Co())) ||
    su(e) ||
    (Array.isArray(e) && e.every(em))
  );
}
const gr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Hl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gr([0, 0.65, 0.55, 1]),
    circOut: gr([0.55, 0, 1, 0.45]),
    backIn: gr([0.31, 0.01, 0.66, -0.59]),
    backOut: gr([0.33, 1.53, 0.69, 0.99]),
  };
function tm(e, t) {
  if (e)
    return typeof e == "function" && Co()
      ? a1(e, t)
      : su(e)
      ? gr(e)
      : Array.isArray(e)
      ? e.map((n) => tm(n, t) || Hl.easeOut)
      : Hl[e];
}
function f1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = tm(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Jc(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const d1 = au(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Eo = 10,
  h1 = 2e4;
function p1(e) {
  return iu(e.type) || e.type === "spring" || !em(e.ease);
}
function m1(e, t) {
  const n = new Xo({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < h1; ) (r = n.sample(o)), i.push(r.value), (o += Eo);
  return { times: void 0, keyframes: i, duration: o - Eo, ease: "linear" };
}
const nm = { anticipate: Ap, backInOut: Ep, circInOut: Lp };
function g1(e) {
  return e in nm;
}
class bc extends Gp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Kp(
      o,
      (s, l) => this.onKeyframesResolved(s, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && Co() && g1(s) && (s = nm[s]), p1(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: v,
          element: y,
          ...T
        } = this.options,
        p = m1(t, T);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (l = "keyframes");
    }
    const f = f1(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Jc(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Qo(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ct(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ct(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ut(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ce;
      const { animation: r } = n;
      Jc(r, t);
    }
    return ce;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        v = new Xo({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: l,
          isGenerator: !0,
        }),
        y = ut(this.time);
      u.setWithVelocity(v.sample(y - Eo).value, v.sample(y).value, Eo);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l,
    } = t;
    return (
      d1() &&
      r &&
      s1.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      l !== "inertia"
    );
  }
}
const rm = au(() => window.ScrollTimeline !== void 0);
class v1 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      rm() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function y1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const uu =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const l = Xa(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - ut(a);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), l.onUpdate && l.onUpdate(d);
        },
        onComplete: () => {
          s(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      y1(l) || (c = { ...c, ...Fv(e, c) }),
        c.duration && (c.duration = ut(c.duration)),
        c.repeatDelay && (c.repeatDelay = ut(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !o && t.get() !== void 0)
      ) {
        const d = Qo(c.keyframes, l);
        if (d !== void 0)
          return (
            O.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new v1([])
          );
      }
      return !o && bc.supports(c) ? new bc(c) : new Xo(c);
    },
  x1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  w1 = (e) => (_l(e) ? e[e.length - 1] || 0 : e);
function cu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class du {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return cu(this.subscriptions, t), () => fu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ef = 30,
  S1 = (e) => !isNaN(parseFloat(e));
class P1 {
  constructor(t, n = {}) {
    (this.version = "11.11.10"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = tt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = tt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = S1(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new du());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            O.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = tt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > ef
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ef);
    return ou(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function qe(e, t) {
  return new P1(e, t);
}
function T1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qe(n));
}
function k1(e, t) {
  const n = Yo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = w1(o[s]);
    T1(e, s, l);
  }
}
const hu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  C1 = "framerAppearId",
  im = "data-" + hu(C1);
function om(e) {
  return e.props[im];
}
const se = (e) => !!(e && e.getVelocity);
function E1(e) {
  return !!(se(e) && e.add);
}
function Wl(e, t) {
  const n = e.getValue("willChange");
  if (E1(n)) return n.add(t);
}
function A1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function sm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      g = a[f];
    if (g === void 0 || (c && A1(c, f))) continue;
    const v = { delay: n, ...Xa(s || {}, f) };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const p = om(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, O);
        h !== null && ((v.startTime = h), (y = !0));
      }
    }
    Wl(e, f),
      d.start(
        uu(f, d, g, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : v, e, y)
      );
    const T = d.animation;
    T && u.push(T);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        O.update(() => {
          l && k1(e, l);
        });
      }),
    u
  );
}
function Kl(e, t, n = {}) {
  var r;
  const i = Yo(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(sm(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return M1(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => c());
  } else return Promise.all([s(), l(n.delay)]);
}
function M1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(L1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Kl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function L1(e, t) {
  return e.sortNodePosition(t);
}
function V1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Kl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Kl(e, t, n);
  else {
    const i = typeof t == "function" ? Yo(e, t, n.custom) : t;
    r = Promise.all(sm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const R1 = Qa.length;
function lm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? lm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < R1; n++) {
    const r = Qa[n],
      i = e.props[r];
    (Qr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const N1 = [...Ya].reverse(),
  D1 = Ya.length;
function j1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => V1(e, n, r)));
}
function _1(e) {
  let t = j1(e),
    n = tf(),
    r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Yo(
      e,
      c,
      a === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: g, transitionEnd: v, ...y } = d;
      u = { ...u, ...y, ...v };
    }
    return u;
  };
  function o(a) {
    t = a(e);
  }
  function s(a) {
    const { props: u } = e,
      c = lm(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      v = 1 / 0;
    for (let T = 0; T < D1; T++) {
      const p = N1[T],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        x = Qr(m),
        S = p === a ? h.isActive : null;
      S === !1 && (v = T);
      let C = m === c[p] && m !== u[p] && x;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Go(m) ||
          typeof m == "boolean")
      )
        continue;
      const M = O1(h.prevProp, m);
      let k = M || (p === a && h.isActive && !C && x) || (T > v && x),
        _ = !1;
      const R = Array.isArray(m) ? m : [m];
      let re = R.reduce(i(p), {});
      S === !1 && (re = {});
      const { prevResolvedValues: yt = {} } = h,
        Yt = { ...yt, ...re },
        tr = (b) => {
          (k = !0),
            d.has(b) && ((_ = !0), d.delete(b)),
            (h.needsAnimating[b] = !0);
          const E = e.getValue(b);
          E && (E.liveStyle = !1);
        };
      for (const b in Yt) {
        const E = re[b],
          N = yt[b];
        if (g.hasOwnProperty(b)) continue;
        let D = !1;
        _l(E) && _l(N) ? (D = !wp(E, N)) : (D = E !== N),
          D
            ? E != null
              ? tr(b)
              : d.add(b)
            : E !== void 0 && d.has(b)
            ? tr(b)
            : (h.protectedKeys[b] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = re),
        h.isActive && (g = { ...g, ...re }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(C && M) || _) &&
          f.push(...R.map((b) => ({ animation: b, options: { type: p } })));
    }
    if (d.size) {
      const T = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (T[p] = h ?? null);
      }),
        f.push({ animation: T });
    }
    let y = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u);
      }),
      (n[a].isActive = u);
    const f = s(a);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = tf()), (r = !0);
    },
  };
}
function O1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function tf() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt(),
  };
}
class Gt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class F1 extends Gt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = _1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Go(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let z1 = 0;
class I1 extends Gt {
  constructor() {
    super(...arguments), (this.id = z1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const B1 = { animation: { Feature: F1 }, exit: { Feature: I1 } },
  am = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Zo(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const U1 = (e) => (t) => am(t) && e(t, Zo(t));
function lt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function dt(e, t, n, r) {
  return lt(e, t, U1(n), r);
}
const nf = (e, t) => Math.abs(e - t);
function $1(e, t) {
  const n = nf(e.x, t.x),
    r = nf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class um {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = js(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = $1(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: v } = f,
          { timestamp: y } = ee;
        this.history.push({ ...v, timestamp: y });
        const { onStart: T, onMove: p } = this.handlers;
        d ||
          (T && T(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Ds(d, this.transformPagePoint)),
          O.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = js(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ds(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, T), v && v(f, T);
      }),
      !am(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Zo(t),
      l = Ds(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ee;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, js(l, this.history)),
      (this.removeListeners = ft(
        dt(this.contextWindow, "pointermove", this.handlePointerMove),
        dt(this.contextWindow, "pointerup", this.handlePointerUp),
        dt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nt(this.updatePoint);
  }
}
function Ds(e, t) {
  return t ? { point: t(e.point) } : e;
}
function rf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function js({ point: e }, t) {
  return {
    point: e,
    delta: rf(e, cm(t)),
    offset: rf(e, H1(t)),
    velocity: W1(t, 0.1),
  };
}
function H1(e) {
  return e[0];
}
function cm(e) {
  return e[e.length - 1];
}
function W1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = cm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ct(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function fm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const of = fm("dragHorizontal"),
  sf = fm("dragVertical");
function dm(e) {
  let t = !1;
  if (e === "y") t = sf();
  else if (e === "x") t = of();
  else {
    const n = of(),
      r = sf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function hm() {
  const e = dm(!0);
  return e ? (e(), !1) : !0;
}
function Nn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const pm = 1e-4,
  K1 = 1 - pm,
  G1 = 1 + pm,
  mm = 0.01,
  Y1 = 0 - mm,
  Q1 = 0 + mm;
function Ve(e) {
  return e.max - e.min;
}
function X1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function lf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Ve(n) / Ve(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= K1 && e.scale <= G1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Y1 && e.translate <= Q1) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Mr(e, t, n, r) {
  lf(e.x, t.x, n.x, r ? r.originX : void 0),
    lf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function af(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ve(t));
}
function Z1(e, t, n) {
  af(e.x, t.x, n.x), af(e.y, t.y, n.y);
}
function uf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ve(t));
}
function Lr(e, t, n) {
  uf(e.x, t.x, n.x), uf(e.y, t.y, n.y);
}
function q1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function J1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: cf(e.x, n, i), y: cf(e.y, t, r) };
}
function ff(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function b1(e, t) {
  return { x: ff(e.x, t.x), y: ff(e.y, t.y) };
}
function ex(e, t) {
  let n = 0.5;
  const r = Ve(e),
    i = Ve(t);
  return (
    i > r
      ? (n = pn(t.min, t.max - r, e.min))
      : r > i && (n = pn(e.min, e.max - i, t.min)),
    Bt(0, 1, n)
  );
}
function tx(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Gl = 0.35;
function nx(e = Gl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Gl),
    { x: df(e, "left", "right"), y: df(e, "top", "bottom") }
  );
}
function df(e, t, n) {
  return { min: hf(e, t), max: hf(e, n) };
}
function hf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const pf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Dn = () => ({ x: pf(), y: pf() }),
  mf = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: mf(), y: mf() });
function je(e) {
  return [e("x"), e("y")];
}
function gm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function rx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ix(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _s(e) {
  return e === void 0 || e === 1;
}
function Yl({ scale: e, scaleX: t, scaleY: n }) {
  return !_s(e) || !_s(t) || !_s(n);
}
function bt(e) {
  return (
    Yl(e) ||
    vm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function vm(e) {
  return gf(e.x) || gf(e.y);
}
function gf(e) {
  return e && e !== "0%";
}
function Ao(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function vf(e, t, n, r, i) {
  return i !== void 0 && (e = Ao(e, i, r)), Ao(e, n, r) + t;
}
function Ql(e, t = 0, n = 1, r, i) {
  (e.min = vf(e.min, t, n, r, i)), (e.max = vf(e.max, t, n, r, i));
}
function ym(e, { x: t, y: n }) {
  Ql(e.x, t.translate, t.scale, t.originPoint),
    Ql(e.y, n.translate, n.scale, n.originPoint);
}
const yf = 0.999999999999,
  xf = 1.0000000000001;
function ox(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const { visualElement: a } = o.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        _n(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), ym(e, s)),
      r && bt(o.latestValues) && _n(e, o.latestValues));
  }
  t.x < xf && t.x > yf && (t.x = 1), t.y < xf && t.y > yf && (t.y = 1);
}
function jn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function wf(e, t, n, r, i = 0.5) {
  const o = K(e.min, e.max, i);
  Ql(e, t, n, o, r);
}
function _n(e, t) {
  wf(e.x, t.x, t.scaleX, t.scale, t.originX),
    wf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function xm(e, t) {
  return gm(ix(e.getBoundingClientRect(), t));
}
function sx(e, t, n) {
  const r = xm(e, n),
    { scroll: i } = t;
  return i && (jn(r.x, i.offset.x), jn(r.y, i.offset.y)), r;
}
const wm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  lx = new WeakMap();
class ax {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Zo(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: v } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = dm(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          je((T) => {
            let p = this.getAxisMotionValue(T).get() || 0;
            if (et.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[T];
                m && (p = Ve(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[T] = p;
          }),
          v && O.postRender(() => v(c, f)),
          Wl(this.visualElement, "transform");
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: T } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = ux(T)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, T),
          this.updateAxis("y", f.point, T),
          this.visualElement.render(),
          y && y(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        je((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new um(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: wm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && O.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Li(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = q1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Nn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = J1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = nx(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        je((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = tx(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Nn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = sx(r, i.root, this.visualElement.getTransformPagePoint());
    let s = b1(i.layout.layoutBox, o);
    if (n) {
      const l = n(rx(s));
      (this.hasMutatedConstraints = !!l), l && (s = gm(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = je((c) => {
        if (!Li(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Wl(this.visualElement, t), r.start(uu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    je((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    je((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    je((n) => {
      const { drag: r } = this.getProps();
      if (!Li(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - K(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Nn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    je((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = ex({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      je((s) => {
        if (!Li(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(K(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    lx.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = dt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Nn(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      O.read(r);
    const s = lt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (je((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Gl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Li(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ux(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class cx extends Gt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ce),
      (this.removeListeners = ce),
      (this.controls = new ax(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ce);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Sf = (e) => (t, n) => {
  e && O.postRender(() => e(t, n));
};
class fx extends Gt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ce);
  }
  onPointerDown(t) {
    this.session = new um(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Sf(t),
      onStart: Sf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && O.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = dt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const qo = A.createContext(null);
function dx() {
  const e = A.useContext(qo);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = A.useId();
  A.useEffect(() => r(i), []);
  const o = A.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const pu = A.createContext({}),
  Sm = A.createContext({}),
  Ki = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Pf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const cr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = Pf(e, t.target.x),
        r = Pf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  hx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ut.parse(e);
      if (i.length > 5) return r;
      const o = Ut.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = K(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  Mo = {};
function px(e) {
  Object.assign(Mo, e);
}
const { schedule: mu, cancel: sP } = Sp(queueMicrotask, !1);
class mx extends A.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    px(gx),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ki.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              O.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      mu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Pm(e) {
  const [t, n] = dx(),
    r = A.useContext(pu);
  return w.jsx(mx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A.useContext(Sm),
    isPresent: t,
    safeToRemove: n,
  });
}
const gx = {
    borderRadius: {
      ...cr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: cr,
    borderTopRightRadius: cr,
    borderBottomLeftRadius: cr,
    borderBottomRightRadius: cr,
    boxShadow: hx,
  },
  Tm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  vx = Tm.length,
  Tf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  kf = (e) => typeof e == "number" || V.test(e);
function yx(e, t, n, r, i, o) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, xx(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, wx(r))))
    : o &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < vx; s++) {
    const l = `border${Tm[s]}Radius`;
    let a = Cf(t, l),
      u = Cf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || kf(a) === kf(u)
        ? ((e[l] = Math.max(K(Tf(a), Tf(u), r), 0)),
          (et.test(u) || et.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function Cf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const xx = km(0, 0.5, Mp),
  wx = km(0.5, 0.95, ce);
function km(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(pn(e, t, r)));
}
function Ef(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function De(e, t) {
  Ef(e.x, t.x), Ef(e.y, t.y);
}
function Af(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Mf(e, t, n, r, i) {
  return (
    (e -= t), (e = Ao(e, 1 / n, r)), i !== void 0 && (e = Ao(e, 1 / i, r)), e
  );
}
function Sx(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (et.test(t) &&
      ((t = parseFloat(t)), (t = K(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = K(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = Mf(e.min, t, n, l, i)),
    (e.max = Mf(e.max, t, n, l, i));
}
function Lf(e, t, [n, r, i], o, s) {
  Sx(e, t[n], t[r], t[i], t.scale, o, s);
}
const Px = ["x", "scaleX", "originX"],
  Tx = ["y", "scaleY", "originY"];
function Vf(e, t, n, r) {
  Lf(e.x, t, Px, n ? n.x : void 0, r ? r.x : void 0),
    Lf(e.y, t, Tx, n ? n.y : void 0, r ? r.y : void 0);
}
function Rf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Cm(e) {
  return Rf(e.x) && Rf(e.y);
}
function Nf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function kx(e, t) {
  return Nf(e.x, t.x) && Nf(e.y, t.y);
}
function Df(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Em(e, t) {
  return Df(e.x, t.x) && Df(e.y, t.y);
}
function jf(e) {
  return Ve(e.x) / Ve(e.y);
}
function _f(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Cx {
  constructor() {
    this.members = [];
  }
  add(t) {
    cu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (fu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ex(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Ax = (e, t) => e.depth - t.depth;
class Mx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    cu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    fu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Ax),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Gi(e) {
  const t = se(e) ? e.get() : e;
  return x1(t) ? t.toValue() : t;
}
function Lx(e, t) {
  const n = tt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (nt(r), e(o - t));
    };
  return O.read(r, !0), () => nt(r);
}
function Vx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Rx(e, t, n) {
  const r = se(e) ? e : qe(e);
  return r.start(uu("", r, t, n)), r.animation;
}
const en = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  vr = typeof window < "u" && window.MotionDebug !== void 0,
  Os = ["", "X", "Y", "Z"],
  Nx = { visibility: "hidden" },
  Of = 1e3;
let Dx = 0;
function Fs(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Am(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = om(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", O, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Am(r);
}
function Mm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = Dx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            vr &&
              (en.totalNodes =
                en.resolvedTargetDeltas =
                en.recalculatedProjection =
                  0),
            this.nodes.forEach(Ox),
            this.nodes.forEach(Ux),
            this.nodes.forEach($x),
            this.nodes.forEach(Fx),
            vr && window.MotionDebug.record(en);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Mx());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new du()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Vx(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Lx(d, 250)),
            Ki.hasAnimatedSinceResize &&
              ((Ki.hasAnimatedSinceResize = !1), this.nodes.forEach(zf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || Yx,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Em(this.targetLayout, v) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const x = { ...Xa(y, "layout"), onPlay: T, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || zf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        nt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Hx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Am(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ff);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ix),
        (this.isUpdating = !1),
        this.nodes.forEach(Bx),
        this.nodes.forEach(jx),
        this.nodes.forEach(_x),
        this.clearAllSnapshots();
      const l = tt.now();
      (ee.delta = Bt(0, 1e3 / 60, l - ee.timestamp)),
        (ee.timestamp = l),
        (ee.isProcessing = !0),
        Ms.update.process(ee),
        Ms.preRender.process(ee),
        Ms.render.process(ee),
        (ee.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), mu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(zx), this.sharedNodes.forEach(Wx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        O.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      O.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Cm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || bt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        Qx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l) return Z();
      const a = l.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(Xx)
        )
      ) {
        const { scroll: c } = this.root;
        c && (jn(a.x, c.offset.x), jn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Z();
      if (
        (De(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && De(a, s), jn(a.x, f.offset.x), jn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(s, l = !1) {
      const a = Z();
      De(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          _n(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bt(c.latestValues) && _n(a, c.latestValues);
      }
      return bt(this.latestValues) && _n(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = Z();
      De(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !bt(u.latestValues)) continue;
        Yl(u.latestValues) && u.updateSnapshot();
        const c = Z(),
          f = u.measurePageBox();
        De(c, f),
          Vf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && Vf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              Lr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              De(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Z1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : De(this.target, this.layout.layoutBox),
                ym(this.target, this.targetDelta))
              : De(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                Lr(this.relativeTargetOrigin, this.target, g.target),
                De(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vr && en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yl(this.parent.latestValues) ||
          vm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ee.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      De(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      ox(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Z()));
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Af(this.prevProjectionDelta.x, this.projectionDelta.x),
          Af(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !_f(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !_f(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        vr && en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        s)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Dn()),
        (this.projectionDelta = Dn()),
        (this.projectionDeltaWithTransform = Dn());
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Dn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = Z(),
        g = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = g !== v,
        T = this.getStack(),
        p = !T || T.members.length <= 1,
        h = !!(y && !p && this.options.crossfade === !0 && !this.path.some(Gx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        If(f.x, s.x, S),
          If(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Lr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Kx(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && kx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = Z()),
            De(m, this.relativeTarget)),
          y &&
            ((this.animationValues = c), yx(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (nt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = O.update(() => {
          (Ki.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Rx(0, Of, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Of),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Lm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || Z();
          const f = Ve(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ve(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        De(l, a),
          _n(l, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Cx()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Fs("z", s, u, this.animationValues);
      for (let c = 0; c < Os.length; c++)
        Fs(`rotate${Os[c]}`, s, u, this.animationValues),
          Fs(`skew${Os[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Nx;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Gi(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = Gi(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !bt(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ex(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y: v } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const y in Mo) {
        if (d[y] === void 0) continue;
        const { correct: T, applyTo: p } = Mo[y],
          h = u.transform === "none" ? d[y] : T(d[y], f);
        if (p) {
          const m = p.length;
          for (let x = 0; x < m; x++) u[p[x]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Gi(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Ff),
        this.root.sharedNodes.clear();
    }
  };
}
function jx(e) {
  e.updateLayout();
}
function _x(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? je((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ve(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Lm(o, n.layoutBox, r) &&
        je((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ve(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = Dn();
    Mr(l, r, n.layoutBox);
    const a = Dn();
    s ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const u = !Cm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const v = Z();
          Lr(v, n.layoutBox, d.layoutBox);
          const y = Z();
          Lr(y, r, g.layoutBox),
            Em(v, y) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Ox(e) {
  vr && en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Fx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function zx(e) {
  e.clearSnapshot();
}
function Ff(e) {
  e.clearMeasurements();
}
function Ix(e) {
  e.isLayoutDirty = !1;
}
function Bx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function zf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Ux(e) {
  e.resolveTargetDelta();
}
function $x(e) {
  e.calcProjection();
}
function Hx(e) {
  e.resetSkewAndRotation();
}
function Wx(e) {
  e.removeLeadSnapshot();
}
function If(e, t, n) {
  (e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Bf(e, t, n, r) {
  (e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function Kx(e, t, n, r) {
  Bf(e.x, t.x, n.x, r), Bf(e.y, t.y, n.y, r);
}
function Gx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Yx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Uf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  $f = Uf("applewebkit/") && !Uf("chrome/") ? Math.round : ce;
function Hf(e) {
  (e.min = $f(e.min)), (e.max = $f(e.max));
}
function Qx(e) {
  Hf(e.x), Hf(e.y);
}
function Lm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !X1(jf(t), jf(n), 0.2))
  );
}
function Xx(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Zx = Mm({
    attachResizeListener: (e, t) => lt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  zs = { current: void 0 },
  Vm = Mm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!zs.current) {
        const e = new Zx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (zs.current = e);
      }
      return zs.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  qx = {
    pan: { Feature: fx },
    drag: { Feature: cx, ProjectionNode: Vm, MeasureLayout: Pm },
  };
function Wf(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || hm()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && O.postRender(() => a(o, s));
    };
  return dt(e.current, n, i, { passive: !e.getProps()[r] });
}
class Jx extends Gt {
  mount() {
    this.unmount = ft(Wf(this.node, !0), Wf(this.node, !1));
  }
  unmount() {}
}
class bx extends Gt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ft(
      lt(this.node.current, "focus", () => this.onFocus()),
      lt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Rm = (e, t) => (t ? (e === t ? !0 : Rm(e, t.parentElement)) : !1);
function Is(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Zo(n));
}
class ew extends Gt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ce),
      (this.removeEndListeners = ce),
      (this.removeAccessibleListeners = ce),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = dt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Rm(this.node.current, l.target) ? c : u;
              d && O.update(() => d(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = dt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = ft(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Is("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && O.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = lt(this.node.current, "keyup", s)),
              Is("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = lt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Is("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = lt(this.node.current, "blur", r);
        this.removeAccessibleListeners = ft(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && O.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !hm()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && O.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = dt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = lt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = ft(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Xl = new WeakMap(),
  Bs = new WeakMap(),
  tw = (e) => {
    const t = Xl.get(e.target);
    t && t(e);
  },
  nw = (e) => {
    e.forEach(tw);
  };
function rw({ root: e, ...t }) {
  const n = e || document;
  Bs.has(n) || Bs.set(n, {});
  const r = Bs.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(nw, { root: e, ...t })), r[i];
}
function iw(e, t, n) {
  const r = rw(t);
  return (
    Xl.set(e, n),
    r.observe(e),
    () => {
      Xl.delete(e), r.unobserve(e);
    }
  );
}
const ow = { some: 0, all: 1 };
class sw extends Gt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : ow[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return iw(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(lw(t, n)) && this.startObserver();
  }
  unmount() {}
}
function lw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const aw = {
    inView: { Feature: sw },
    tap: { Feature: ew },
    focus: { Feature: bx },
    hover: { Feature: Jx },
  },
  uw = { layout: { ProjectionNode: Vm, MeasureLayout: Pm } },
  oi = A.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Jo = A.createContext({}),
  gu = typeof window < "u",
  bo = gu ? A.useLayoutEffect : A.useEffect,
  Nm = A.createContext({ strict: !1 });
function cw(e, t, n, r, i) {
  var o, s;
  const { visualElement: l } = A.useContext(Jo),
    a = A.useContext(Nm),
    u = A.useContext(qo),
    c = A.useContext(oi).reducedMotion,
    f = A.useRef();
  (r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    g = A.useContext(Sm);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    fw(f.current, n, i, g),
    A.useInsertionEffect(() => {
      d && d.update(n, u);
    });
  const v = n[im],
    y = A.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    bo(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        mu.render(d.render),
        y.current && d.animationState && d.animationState.animateChanges());
    }),
    A.useEffect(() => {
      d &&
        (!y.current && d.animationState && d.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) === null ||
              T === void 0 ||
              T.call(window, v);
          }),
          (y.current = !1)));
    }),
    d
  );
}
function fw(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Dm(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (l && Nn(l)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function Dm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Dm(e.parent);
}
function dw(e, t, n) {
  return A.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Nn(n) && (n.current = r));
    },
    [t]
  );
}
function es(e) {
  return Go(e.animate) || Qa.some((t) => Qr(e[t]));
}
function jm(e) {
  return !!(es(e) || e.variants);
}
function hw(e, t) {
  if (es(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Qr(n) ? n : void 0,
      animate: Qr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function pw(e) {
  const { initial: t, animate: n } = hw(e, A.useContext(Jo));
  return A.useMemo(() => ({ initial: t, animate: n }), [Kf(t), Kf(n)]);
}
function Kf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Gf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Zn = {};
for (const e in Gf) Zn[e] = { isEnabled: (t) => Gf[e].some((n) => !!t[n]) };
function mw(e) {
  for (const t in e) Zn[t] = { ...Zn[t], ...e[t] };
}
const gw = Symbol.for("motionComponentSymbol");
function vw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && mw(e);
  function o(l, a) {
    let u;
    const c = { ...A.useContext(oi), ...l, layoutId: yw(l) },
      { isStatic: f } = c,
      d = pw(l),
      g = r(l, f);
    if (!f && gu) {
      xw();
      const v = ww(c);
      (u = v.MeasureLayout),
        (d.visualElement = cw(i, g, c, t, v.ProjectionNode));
    }
    return w.jsxs(Jo.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? w.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, l, dw(g, d.visualElement, a), g, f, d.visualElement),
      ],
    });
  }
  const s = A.forwardRef(o);
  return (s[gw] = i), s;
}
function yw({ layoutId: e }) {
  const t = A.useContext(pu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function xw(e, t) {
  A.useContext(Nm).strict;
}
function ww(e) {
  const { drag: t, layout: n } = Zn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Sw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Sw.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function _m(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Om = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Fm(e, t, n, r) {
  _m(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Om.has(i) ? i : hu(i), t.attrs[i]);
}
function zm(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Mo[e] || e === "opacity"))
  );
}
function yu(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (se(i[s]) ||
      (t.style && se(t.style[s])) ||
      zm(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function Im(e, t, n) {
  const r = yu(e, t, n);
  for (const i in e)
    if (se(e[i]) || se(t[i])) {
      const o =
        ni.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function si(e) {
  const t = A.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Pw(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: Tw(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Bm = (e) => (t, n) => {
  const r = A.useContext(Jo),
    i = A.useContext(qo),
    o = () => Pw(e, t, r, i);
  return n ? o() : si(o);
};
function Tw(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Gi(o[d]);
  let { initial: s, animate: l } = e;
  const a = es(e),
    u = jm(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  if (f && typeof f != "boolean" && !Go(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const v = Ga(e, d[g]);
      if (v) {
        const { transitionEnd: y, transition: T, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[h] = m);
        }
        for (const h in y) i[h] = y[h];
      }
    }
  }
  return i;
}
const xu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Um = () => ({ ...xu(), attrs: {} }),
  $m = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  kw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Cw = ni.length;
function Ew(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < Cw; o++) {
    const s = ni[o],
      l = e[s];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (s.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = $m(l, nu[s]);
      if (!a) {
        i = !1;
        const c = kw[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function wu(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (vn.has(a)) {
      s = !0;
      continue;
    } else if (Dp(a)) {
      i[a] = u;
      continue;
    } else {
      const c = $m(u, nu[a]);
      a.startsWith("origin") ? ((l = !0), (o[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = Ew(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function Yf(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function Aw(e, t, n) {
  const r = Yf(t, e.x, e.width),
    i = Yf(n, e.y, e.height);
  return `${r} ${i}`;
}
const Mw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Lw = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Vw(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Mw : Lw;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t),
    l = V.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Su(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f
) {
  if ((wu(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: v } = e;
  d.transform && (v && (g.transform = d.transform), delete d.transform),
    v &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = Aw(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && Vw(d, s, l, a, !1);
}
const Pu = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  Rw = {
    useVisualState: Bm({
      scrapeMotionValuesFromProps: Im,
      createRenderState: Um,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        O.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          O.render(() => {
            Su(n, r, Pu(t.tagName), e.transformTemplate), Fm(t, n);
          });
      },
    }),
  },
  Nw = {
    useVisualState: Bm({
      scrapeMotionValuesFromProps: yu,
      createRenderState: xu,
    }),
  };
function Hm(e, t, n) {
  for (const r in t) !se(t[r]) && !zm(r, n) && (e[r] = t[r]);
}
function Dw({ transformTemplate: e }, t) {
  return A.useMemo(() => {
    const n = xu();
    return wu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function jw(e, t) {
  const n = e.style || {},
    r = {};
  return Hm(r, n, e), Object.assign(r, Dw(e, t)), r;
}
function _w(e, t) {
  const n = {},
    r = jw(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Ow = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Lo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Ow.has(e)
  );
}
let Wm = (e) => !Lo(e);
function Fw(e) {
  e && (Wm = (t) => (t.startsWith("on") ? !Lo(t) : e(t)));
}
try {
  Fw(require("@emotion/is-prop-valid").default);
} catch {}
function zw(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Wm(i) ||
        (n === !0 && Lo(i)) ||
        (!t && !Lo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Iw(e, t, n, r) {
  const i = A.useMemo(() => {
    const o = Um();
    return (
      Su(o, t, Pu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Hm(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Bw(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (vu(n) ? Iw : _w)(r, o, s, n),
      u = zw(r, typeof n == "string", e),
      c = n !== A.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = A.useMemo(() => (se(f) ? f.get() : f), [f]);
    return A.createElement(n, { ...c, children: d });
  };
}
function Uw(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(vu(r) ? Rw : Nw),
      preloadedFeatures: e,
      useRender: Bw(i),
      createVisualElement: t,
      Component: r,
    };
    return vw(s);
  };
}
const Zl = { current: null },
  Km = { current: !1 };
function $w() {
  if (((Km.current = !0), !!gu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Zl.current = e.matches);
      e.addListener(t), t();
    } else Zl.current = !1;
}
function Hw(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (se(i)) e.addValue(r, i);
    else if (se(o)) e.addValue(r, qe(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, qe(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Qf = new WeakMap(),
  Ww = [...Op, pe, Ut],
  Kw = (e) => Ww.find(_p(e)),
  Xf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class Gw {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ba),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = tt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), O.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = es(n)),
      (this.isVariantNode = jm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in f) {
      const g = f[d];
      a[d] !== void 0 && se(g) && g.set(a[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Qf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Km.current || $w(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Zl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Qf.delete(this.current),
      this.projection && this.projection.unmount(),
      nt(this.notifyUpdate),
      nt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = vn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && O.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Zn) {
      const n = Zn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Xf.length; r++) {
      const i = Xf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = Hw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = qe(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Rp(i) || Vp(i))
          ? (i = parseFloat(i))
          : !Kw(i) && Ut.test(n) && (i = Wp(t, n)),
        this.setBaseTarget(t, se(i) ? i.get() : i)),
      se(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Ga(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !se(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new du()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Gm extends Gw {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Kp);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Yw(e) {
  return window.getComputedStyle(e);
}
class Qw extends Gm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = _m);
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = ru(n);
      return (r && r.default) || 0;
    } else {
      const r = Yw(t),
        i = (Dp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return xm(t, n);
  }
  build(t, n, r) {
    wu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return yu(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    se(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Xw extends Gm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Z);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = ru(n);
      return (r && r.default) || 0;
    }
    return (n = Om.has(n) ? n : hu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Im(t, n, r);
  }
  build(t, n, r) {
    Su(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Fm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Pu(t.tagName)), super.mount(t);
  }
}
const Zw = (e, t) =>
    vu(e) ? new Xw(t) : new Qw(t, { allowProjection: e !== A.Fragment }),
  qw = Uw({ ...B1, ...aw, ...qx, ...uw }, Zw),
  U = Nv(qw);
class Jw extends A.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function bw({ children: e, isPresent: t }) {
  const n = A.useId(),
    r = A.useRef(null),
    i = A.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = A.useContext(oi);
  return (
    A.useInsertionEffect(() => {
      const { width: s, height: l, top: a, left: u } = i.current;
      if (t || !r.current || !s || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    w.jsx(Jw, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: A.cloneElement(e, { ref: r }),
    })
  );
}
const eS = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = si(tS),
    a = A.useId(),
    u = A.useCallback(
      (f) => {
        l.set(f, !0);
        for (const d of l.values()) if (!d) return;
        r && r();
      },
      [l, r]
    ),
    c = A.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (l.set(f, !1), () => l.delete(f)),
      }),
      o ? [Math.random(), u] : [n, u]
    );
  return (
    A.useMemo(() => {
      l.forEach((f, d) => l.set(d, !1));
    }, [n]),
    A.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = w.jsx(bw, { isPresent: n, children: e })),
    w.jsx(qo.Provider, { value: c, children: e })
  );
};
function tS() {
  return new Map();
}
const Vi = (e) => e.key || "";
function Zf(e) {
  const t = [];
  return (
    A.Children.forEach(e, (n) => {
      A.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ym = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  const l = A.useMemo(() => Zf(e), [e]),
    a = l.map(Vi),
    u = A.useRef(!0),
    c = A.useRef(l),
    f = si(() => new Map()),
    [d, g] = A.useState(l),
    [v, y] = A.useState(l);
  bo(() => {
    (u.current = !1), (c.current = l);
    for (let h = 0; h < v.length; h++) {
      const m = Vi(v[h]);
      a.includes(m) ? f.delete(m) : f.get(m) !== !0 && f.set(m, !1);
    }
  }, [v, a.length, a.join("-")]);
  const T = [];
  if (l !== d) {
    let h = [...l];
    for (let m = 0; m < v.length; m++) {
      const x = v[m],
        S = Vi(x);
      a.includes(S) || (h.splice(m, 0, x), T.push(x));
    }
    s === "wait" && T.length && (h = T), y(Zf(h)), g(l);
    return;
  }
  const { forceRender: p } = A.useContext(pu);
  return w.jsx(w.Fragment, {
    children: v.map((h) => {
      const m = Vi(h),
        x = l === v || a.includes(m),
        S = () => {
          if (f.has(m)) f.set(m, !0);
          else return;
          let C = !0;
          f.forEach((M) => {
            M || (C = !1);
          }),
            C && (p == null || p(), y(c.current), i && i());
        };
      return w.jsx(
        eS,
        {
          isPresent: x,
          initial: !u.current || r ? void 0 : !1,
          custom: x ? void 0 : n,
          presenceAffectsLayout: o,
          mode: s,
          onExitComplete: x ? void 0 : S,
          children: h,
        },
        m
      );
    }),
  });
};
function nS(e) {
  const t = si(() => qe(e)),
    { isStatic: n } = A.useContext(oi);
  if (n) {
    const [, r] = A.useState(e);
    A.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function qf(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function rS(e, t = {}) {
  const { isStatic: n } = A.useContext(oi),
    r = A.useRef(null),
    i = nS(se(e) ? qf(e.get()) : e),
    o = A.useRef(i.get()),
    s = A.useRef(() => {}),
    l = () => {
      const u = r.current;
      u && u.time === 0 && u.sample(ee.delta),
        a(),
        (r.current = o1({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    a = () => {
      r.current && r.current.stop();
    };
  return (
    A.useInsertionEffect(
      () =>
        i.attach(
          (u, c) =>
            n ? c(u) : ((o.current = u), (s.current = c), O.update(l), i.get()),
          a
        ),
      [JSON.stringify(t)]
    ),
    bo(() => {
      if (se(e)) return e.on("change", (u) => i.set(qf(u)));
    }, [i]),
    i
  );
}
function iS(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const Yi = new WeakMap();
let St;
function oS(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function sS({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Yi.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return oS(e, n);
        },
      });
    });
}
function lS(e) {
  e.forEach(sS);
}
function aS() {
  typeof ResizeObserver > "u" || (St = new ResizeObserver(lS));
}
function uS(e, t) {
  St || aS();
  const n = iS(e);
  return (
    n.forEach((r) => {
      let i = Yi.get(r);
      i || ((i = new Set()), Yi.set(r, i)),
        i.add(t),
        St == null || St.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = Yi.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || St == null || St.unobserve(r);
      });
    }
  );
}
const Qi = new Set();
let Vr;
function cS() {
  (Vr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Qi.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Vr);
}
function fS(e) {
  return (
    Qi.add(e),
    Vr || cS(),
    () => {
      Qi.delete(e), !Qi.size && Vr && (Vr = void 0);
    }
  );
}
function dS(e, t) {
  return typeof e == "function" ? fS(e) : uS(e, t);
}
const hS = 50,
  Jf = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  pS = () => ({ time: 0, x: Jf(), y: Jf() }),
  mS = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function bf(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = mS[t],
    l = i.current,
    a = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = pn(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > hS ? 0 : ou(i.current - l, u);
}
function gS(e, t, n) {
  bf(e, "x", t, n), bf(e, "y", t, n), (t.time = n);
}
function vS(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        l = r.parentNode;
      for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
      r = s;
    } else break;
  return n;
}
const yS = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  ql = { start: 0, center: 0.5, end: 1 };
function ed(e, t, n = 0) {
  let r = 0;
  if ((e in ql && (e = ql[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const xS = [0, 0];
function wS(e, t, n, r) {
  let i = Array.isArray(e) ? e : xS,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, ql[e] ? e : "0"])),
    (o = ed(i[0], n, r)),
    (s = ed(i[1], t)),
    o - s
  );
}
const SS = { x: 0, y: 0 };
function PS(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function TS(e, t, n) {
  const { offset: r = yS.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    l = i !== e ? vS(i, e) : SS,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : PS(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const g = wS(r[d], u[s], a[s], l[o]);
    !c && g !== t[o].interpolatorOffsets[d] && (c = !0), (t[o].offset[d] = g);
  }
  c &&
    ((t[o].interpolate = Jp(t[o].offset, bp(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function kS(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function CS(e, t, n, r = {}) {
  return {
    measure: () => kS(e, r.target, n),
    update: (i) => {
      gS(e, n, i), (r.offset || r.target) && TS(e, n, r);
    },
    notify: () => t(n),
  };
}
const fr = new WeakMap(),
  td = new WeakMap(),
  Us = new WeakMap(),
  nd = (e) => (e === document.documentElement ? window : e);
function Tu(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Us.get(t);
  r || ((r = new Set()), Us.set(t, r));
  const i = pS(),
    o = CS(t, e, i, n);
  if ((r.add(o), !fr.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(ee.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        O.read(l, !1, !0), O.read(a, !1, !0), O.update(u, !1, !0);
      };
    fr.set(t, c);
    const f = nd(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && td.set(t, dS(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const s = fr.get(t);
  return (
    O.read(s, !1, !0),
    () => {
      var l;
      nt(s);
      const a = Us.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = fr.get(t);
      fr.delete(t),
        u &&
          (nd(t).removeEventListener("scroll", u),
          (l = td.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function Qm(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      s = (i === null ? 0 : i.value) / 100;
    n !== s && e(s), (n = s);
  };
  return O.update(r, !0), () => nt(r);
}
function ES({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = Tu(
      (o) => {
        r.value = o[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
const $s = new Map();
function Xm({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), $s.has(t) || $s.set(t, {});
  const r = $s.get(t);
  return (
    r[n] ||
      (r[n] = rm()
        ? new ScrollTimeline({ source: t, axis: n })
        : ES({ source: t, axis: n })),
    r[n]
  );
}
function AS(e) {
  return e.length === 2;
}
function Zm(e) {
  return e && (e.target || e.offset);
}
function MS(e, t) {
  return AS(e) || Zm(t)
    ? Tu((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Qm(e, Xm(t));
}
function LS(e, t) {
  if (Zm(t))
    return (
      e.pause(),
      Tu((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = Xm(t);
    return e.attachTimeline(
      n,
      (r) => (
        r.pause(),
        Qm((i) => {
          r.time = r.duration * i;
        }, n)
      )
    );
  }
}
function VS(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? MS(e, r) : LS(e, r);
}
function rd(e, t) {
  Gv(!!(!t || t.current));
}
const RS = () => ({
  scrollX: qe(0),
  scrollY: qe(0),
  scrollXProgress: qe(0),
  scrollYProgress: qe(0),
});
function NS({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = si(RS);
  return (
    (n ? bo : A.useEffect)(
      () => (
        rd("target", t),
        rd("container", e),
        VS(
          (s, { x: l, y: a }) => {
            i.scrollX.set(l.current),
              i.scrollXProgress.set(l.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const DS = "/assets/fruit-plate-DRbIgdOk.png",
  jS = "/assets/leaf-CCkW9aP6.png",
  Mt = (e) => ({
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: e } },
  }),
  Xi = (e) => ({
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: e } },
  }),
  Ri = (e) => ({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: e } },
  });
function _S() {
  return w.jsx("section", {
    className: "overflow-x-hidden overflow-y-hidden",
    children: w.jsxs(U.div, {
      className:
        "container grid grid-cols-1 md:grid-cols-2 min-h-[650px]  relative ",
      children: [
        w.jsx("div", {
          className:
            " flex flex-col justify-center py-14 md:py-0 relative z-10",
          children: w.jsxs("div", {
            className:
              "text-center md:text-left space-y-5 lg-max-w-[400px] capitalize",
            children: [
              w.jsxs(U.h1, {
                variants: Ri(0.6),
                initial: "hidden",
                animate: "visible",
                className:
                  "text-5xl  lg:text-6xl leading-relaxed xl-leading-loose font-averia font-bold",
                children: [
                  "Healthy",
                  w.jsx("br", {}),
                  " fresh ",
                  w.jsx("span", {
                    className: "text-secondary",
                    children: "Fruits",
                  }),
                ],
              }),
              w.jsx(U.p, {
                variants: Ri(0.9),
                initial: "hidden",
                animate: "visible",
                className: "text-2xl tracking-wide",
                children: "Order Now For Fresh Healthy Life",
              }),
              w.jsx(U.p, {
                variants: Ri(1.2),
                initial: "hidden",
                animate: "visible",
                className: "text-gray-400",
                children:
                  "Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order",
              }),
              w.jsx(U.div, {
                variants: Ri(1.5),
                initial: "hidden",
                animate: "visible",
                className: "flex justify-center md:justify-start",
                children: w.jsxs("button", {
                  className: "primary-btn flex     items-center gap-2",
                  children: [w.jsx(xp, {}), "Order Now"],
                }),
              }),
            ],
          }),
        }),
        w.jsx(U.div, {
          initial: { rotate: 0 },
          animate: { rotate: 360 },
          transition: {
            duration: 15,
            delay: 0.4,
            repeatType: "reverse",
            ease: "linear",
            repeat: 1 / 0,
          },
          className: "flex justify-center items-center",
          children: w.jsx("img", {
            className: " w-[550px] object-cover  drop-shadow",
            src: DS,
            alt: "hero image",
          }),
        }),
        w.jsx("div", {
          className:
            "absolute top-14  right-1/2   md:top-0  rotate-[40deg]   blur-sm  opacity-80",
          children: w.jsx(U.img, {
            initial: { opacity: 0, y: -200, rotate: 70 },
            animate: { opacity: 100, y: 0, rotate: 0 },
            transition: { duration: 1, delay: 0.8 },
            className: " md:max-w-[300px]   ",
            src: jS,
            alt: "leaf image",
          }),
        }),
      ],
    }),
  });
}
const OS = "/assets/apple-dU8UKi7U.png",
  FS = "/assets/avocado-CLmYh0bp.png",
  zS = "/assets/cherry-K8SpylM9.png",
  IS = "/assets/orange-SYYSet8r.png",
  BS = [
    { id: 1, title: "Apple", image: OS, delay: 0.6, price: "$1.00" },
    { id: 2, title: "Avocado", image: FS, delay: 0.9, price: "$5.00" },
    { id: 3, title: "Cherry", image: zS, delay: 1.2, price: "$2.00" },
    { id: 4, title: "Orange", image: IS, delay: 1.5, price: "$3.00" },
  ];
function US() {
  return w.jsx("section", {
    className: "",
    children: w.jsxs("div", {
      className: "container pt-12 pb-20",
      children: [
        w.jsx(U.h1, {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          className: "text-2xl font-bold text-left pb-10 uppercase",
          children: "Our Menu",
        }),
        w.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6",
          children: w.jsx(Ym, {
            children: BS.map((e) =>
              w.jsxs(
                U.div,
                {
                  variants: Xi(e.delay),
                  initial: "hidden",
                  whileInView: "visible",
                  whileHover: { scale: 1.1 },
                  className:
                    "bg-white px-4 py-2 cursor-pointer shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row items-center justify-around gap-2 rounded-3xl",
                  children: [
                    w.jsx("img", {
                      src: e.image,
                      alt: e.title,
                      className:
                        "w-[60px] mb-4 scale-110 transform -translate-y-6",
                      "aria-label": e.title,
                    }),
                    w.jsxs("div", {
                      children: [
                        w.jsx("h1", {
                          className: "text-lg font-semibold",
                          children: e.title,
                        }),
                        w.jsx("p", {
                          className: "text-lg font-semibold text-secondary",
                          children: e.price,
                        }),
                      ],
                    }),
                  ],
                },
                e.id
              )
            ),
          }),
        }),
      ],
    }),
  });
}
function $S(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function qm(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function HS(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
        child: [],
      },
    ],
  })(e);
}
function WS(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function KS({ open: e }) {
  return w.jsx(w.Fragment, {
    children: w.jsx(Ym, {
      children:
        e &&
        w.jsx(U.div, {
          initial: { opacity: 0, y: -100 },
          animate: { opacity: 100, y: 0 },
          transition: { duration: 0.7, ease: "easeInOut" },
          exit: { opacity: 0, x: 100 },
          className:
            "absolute top-0 left-0 w-full h-screen  mt-20 px-3  z-50  ",
          children: w.jsx("div", {
            className: "bg-primary text-white p-2 rounded-md py-3 ",
            children: w.jsxs("ul", {
              className: "flex items-center gap-6 flex-col capitalize ",
              children: [
                w.jsx("li", {
                  className:
                    "hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white",
                  children: "Home",
                }),
                w.jsx("li", {
                  className:
                    "hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white",
                  children: "Product",
                }),
                w.jsx("li", {
                  className:
                    "hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white",
                  children: "About",
                }),
                w.jsx("li", {
                  className:
                    "hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white",
                  children: "Shop",
                }),
                w.jsx("li", {
                  className:
                    "hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white",
                  children: "Contact",
                }),
              ],
            }),
          }),
        }),
    }),
  });
}
const GS = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Product", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contact", link: "#" },
];
function YS() {
  const [e, t] = Lt.useState(!1);
  return w.jsxs("nav", {
    children: [
      w.jsxs(U.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.5 },
        className: "container flex justify-between items-center py-4 md:pt-4",
        children: [
          w.jsxs("div", {
            className:
              "logo flex items-center gap-2 text-2xl font-bold uppercase",
            children: [
              w.jsx("p", { className: "text-primary", children: "Fruits" }),
              w.jsx("p", { className: "text-secondary", children: "Store" }),
              w.jsx(qm, { className: "text-green-500" }),
            ],
          }),
          w.jsx("div", {
            className: "menu hidden md:block  ",
            children: w.jsxs("ul", {
              className: "flex items-center gap-6 text-gray-500",
              children: [
                GS.map((n) =>
                  w.jsx(
                    "li",
                    {
                      children: w.jsx("a", {
                        className:
                          "hover:text-primary font-semibold py-1 px-3 hover:shadow-[0_3px_0_-1px_#ef4444] inline-block ",
                        href: n.link,
                        children: n.title,
                      }),
                    },
                    n.id
                  )
                ),
                w.jsx("button", {
                  className:
                    "text-2xl duration-200 hover:bg-primary hover:text-white p-2  rounded-full",
                  children: w.jsx(WS, {}),
                }),
              ],
            }),
          }),
          w.jsx("div", {
            className: "md:hidden",
            children: w.jsx(HS, {
              className: "text-4xl",
              onClick: () => t(!e),
            }),
          }),
        ],
      }),
      w.jsx(KS, { open: e }),
    ],
  });
}
const QS = "/assets/fruits-splash-BeZYLA1d.png";
function XS() {
  return w.jsx("section", {
    className: "bg-secondary/10",
    children: w.jsxs("div", {
      className:
        "container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14",
      children: [
        w.jsx("div", {
          className: "flex justify-center items-center",
          children: w.jsx(U.img, {
            initial: { opacity: 0, scale: 0.5 },
            whileInView: { opacity: 1, scale: 1 },
            transition: {
              type: "spring",
              duration: 1,
              stiffness: 200,
              delay: 0.2,
            },
            viewport: { once: !0 },
            src: QS,
            alt: "banner",
            className:
              "w-[300px] md-max-w-[400px] h-full object-cover drop-shadow",
          }),
        }),
        w.jsx("div", {
          className: "flex flex-col justify-center ",
          children: w.jsxs("div", {
            className: "text-center md:text-left space-y-4 lg:max-w-[400px] ",
            children: [
              w.jsx(U.h1, {
                variants: Mt(0.5),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                className: "text-3xl lg:text-6xl font-bold uppercase ",
                children: "Brand Info",
              }),
              w.jsx(U.p, {
                variants: Mt(0.7),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                children:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum explicabo et optio odit magnam cumque sit velit aperiam totam!",
              }),
              w.jsx(U.p, {
                variants: Mt(0.9),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus vel laudantium, aliquam quisquam provident facilis tempora dolorem aspernatur nam tenetur, cupiditate dolore culpa quidem quia magni ea. Dolor, sint.",
              }),
              w.jsx(U.div, {
                variants: Mt(1.1),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                className: "flex justify-center md:justify-start",
                children: w.jsx("button", {
                  className: "primary-btn",
                  children: "Learn More",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const ZS = "/assets/fruit-plate2-BK55XwYa.png";
function qS() {
  return w.jsx("section", {
    className: " ",
    children: w.jsxs("div", {
      className:
        "container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24",
      children: [
        w.jsx("div", {
          className: "flex flex-col justify-center ",
          children: w.jsxs("div", {
            className: "text-center md:text-left space-y-4 lg:max-w-[400px] ",
            children: [
              w.jsx(U.h1, {
                variants: Mt(0.5),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                className: "text-3xl lg:text-6xl font-bold uppercase ",
                children: "Online Fruit Store",
              }),
              w.jsx(U.p, {
                variants: Mt(0.7),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                children:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum explicabo et optio odit magnam cumque sit velit aperiam totam!",
              }),
              w.jsx(U.p, {
                variants: Mt(0.9),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus vel laudantium, aliquam quisquam provident facilis tempora dolorem aspernatur nam tenetur, cupiditate dolore culpa quidem quia magni ea. Dolor, sint.",
              }),
              w.jsx(U.div, {
                variants: Mt(1.1),
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                className: "flex justify-center md:justify-start",
                children: w.jsx("button", {
                  className: "primary-btn",
                  children: "Download App",
                }),
              }),
            ],
          }),
        }),
        w.jsx("div", {
          className: "flex justify-center items-center",
          children: w.jsx(U.img, {
            initial: { opacity: 0, x: 200, rotate: 75 },
            whileInView: { opacity: 1, x: 0, rotate: 0 },
            transition: { duration: 1, delay: 0.2 },
            src: ZS,
            alt: "banner",
            className:
              "w-[300px] md-max-w-[400px] h-full object-cover drop-shadow",
          }),
        }),
      ],
    }),
  });
}
const JS = "/assets/banner-bg-z4y1lx0D.jpg",
  bS = {
    backgroundImage: `url(${JS})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
function eP() {
  return w.jsx("section", {
    className: "container mb-12",
    children: w.jsxs("div", {
      style: bS,
      className:
        "container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-20 rounded-3xl ",
      children: [
        w.jsx("div", {}),
        w.jsx("div", {
          className: "flex flex-col justify-center ",
          children: w.jsxs("div", {
            className:
              "text-center md:text-left space-y-4 lg:max-w-[500px] sm:m-auto ",
            children: [
              w.jsx(U.h1, {
                variants: Xi(0.5),
                initial: "hidden",
                whileInView: "visible",
                className: "text-2xl lg:text-6xl font-bold uppercase w-full ",
                children: "Get Fresh Fruits Today",
              }),
              w.jsx(U.p, {
                variants: Xi(0.7),
                initial: "hidden",
                whileInView: "visible",
                children:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum explicabo et optio odit magnam cumque sit velit aperiam totam!",
              }),
              w.jsx(U.div, {
                variants: Xi(0.9),
                initial: "hidden",
                whileInView: "visible",
                className: "flex justify-center md:justify-start",
                children: w.jsxs("button", {
                  className:
                    "primary-btn flex justify-center items-center gap-3",
                  children: [w.jsx(xp, {}), "Order Now"],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function tP(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Instagram" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z",
                },
                child: [],
              },
              {
                tag: "circle",
                attr: { cx: "17.2", cy: "6.83", r: "1.075" },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(e);
}
function nP(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Youtube" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M19.437,19.937H4.562a2.5,2.5,0,0,1-2.5-2.5V6.563a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5V17.437A2.5,2.5,0,0,1,19.437,19.937ZM4.562,5.063a1.5,1.5,0,0,0-1.5,1.5V17.437a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M14.568,11.149,10.6,8.432a1.032,1.032,0,0,0-1.614.851v5.434a1.032,1.032,0,0,0,1.614.851l3.972-2.717A1.031,1.031,0,0,0,14.568,11.149Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(e);
}
function rP(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function iP() {
  return w.jsx("footer", {
    className: " bg-primary/10 ",
    children: w.jsxs("div", {
      className: "container py-12 flex justify-between items-center",
      children: [
        w.jsxs("div", {
          className:
            "logo flex items-center gap-2 text-2xl font-bold uppercase",
          children: [
            w.jsx("p", { className: "text-primary", children: "Fruits" }),
            w.jsx("p", { className: "text-secondary", children: "Store" }),
            w.jsx(qm, { className: "text-green-500" }),
          ],
        }),
        w.jsxs("div", {
          className:
            "flex items-center justify-between  gap-2 md:gap-4 text-3xl ",
          children: [
            w.jsx(tP, {
              className:
                "hover:-translate-y-2 hover:scale-110 hover:text-[#FF0FAD] cursor-pointer text-gray-500  hover:font-semibold transition 1s",
            }),
            w.jsx($S, {
              className:
                "hover:-translate-y-2 hover:scale-110 cursor-pointer text-gray-500 hover:text-[#136AFF] hover:font-semibold transition 1s",
            }),
            w.jsx(nP, {
              className:
                "hover:-translate-y-2 hover:scale-110 cursor-pointer text-gray-500 hover:text-[#FF0C0F] hover:font-semibold transition 1s",
            }),
            w.jsx(rP, {
              className:
                "hover:-translate-y-2 hover:scale-110 cursor-pointer text-gray-500 hover:text-[#080808] hover:font-semibold transition 1s",
            }),
          ],
        }),
      ],
    }),
  });
}
function oP() {
  const { scrollYProgress: e } = NS(),
    t = rS(e, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(U.div, {
        style: {
          scaleX: t,
          top: 0,
          left: 0,
          right: 0,
          position: "fixed",
          transformOrigin: "0%",
          height: "10px",
          zIndex: "9999",
        },
        className: "bg-gradient-to-r  from-primary to-secondary   ",
      }),
      w.jsxs("main", {
        className: "overflow-x-hidden ",
        children: [
          w.jsx(YS, {}),
          w.jsx(_S, {}),
          w.jsx(US, {}),
          w.jsx(XS, {}),
          w.jsx(qS, {}),
          w.jsx(eP, {}),
          w.jsx(iP, {}),
        ],
      }),
    ],
  });
}
gp(document.getElementById("root")).render(
  w.jsx(A.StrictMode, { children: w.jsx(oP, {}) })
);
