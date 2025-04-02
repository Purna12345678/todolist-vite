(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) o(m);
  new MutationObserver((m) => {
    for (const v of m)
      if (v.type === "childList")
        for (const S of v.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && o(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function h(m) {
    const v = {};
    return (
      m.integrity && (v.integrity = m.integrity),
      m.referrerPolicy && (v.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : m.crossOrigin === "anonymous"
        ? (v.credentials = "omit")
        : (v.credentials = "same-origin"),
      v
    );
  }
  function o(m) {
    if (m.ep) return;
    m.ep = !0;
    const v = h(m);
    fetch(m.href, v);
  }
})();
function Ld(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var tr = { exports: {} },
  ca = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function Um() {
  if (hd) return ca;
  hd = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function h(o, m, v) {
    var S = null;
    if (
      (v !== void 0 && (S = "" + v),
      m.key !== void 0 && (S = "" + m.key),
      "key" in m)
    ) {
      v = {};
      for (var B in m) B !== "key" && (v[B] = m[B]);
    } else v = m;
    return (
      (m = v.ref),
      { $$typeof: i, type: o, key: S, ref: m !== void 0 ? m : null, props: v }
    );
  }
  return (ca.Fragment = r), (ca.jsx = h), (ca.jsxs = h), ca;
}
var dd;
function Bm() {
  return dd || ((dd = 1), (tr.exports = Um())), tr.exports;
}
var mt = Bm(),
  er = { exports: {} };
function Dm(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var jd = { exports: {} },
  Qt = (jd.exports = {}),
  Ie,
  Pe;
function or() {
  throw new Error("setTimeout has not been defined");
}
function sr() {
  throw new Error("clearTimeout has not been defined");
}
(function () {
  try {
    typeof setTimeout == "function" ? (Ie = setTimeout) : (Ie = or);
  } catch {
    Ie = or;
  }
  try {
    typeof clearTimeout == "function" ? (Pe = clearTimeout) : (Pe = sr);
  } catch {
    Pe = sr;
  }
})();
function Yd(i) {
  if (Ie === setTimeout) return setTimeout(i, 0);
  if ((Ie === or || !Ie) && setTimeout)
    return (Ie = setTimeout), setTimeout(i, 0);
  try {
    return Ie(i, 0);
  } catch {
    try {
      return Ie.call(null, i, 0);
    } catch {
      return Ie.call(this, i, 0);
    }
  }
}
function zm(i) {
  if (Pe === clearTimeout) return clearTimeout(i);
  if ((Pe === sr || !Pe) && clearTimeout)
    return (Pe = clearTimeout), clearTimeout(i);
  try {
    return Pe(i);
  } catch {
    try {
      return Pe.call(null, i);
    } catch {
      return Pe.call(this, i);
    }
  }
}
var El = [],
  cu = !1,
  hn,
  _i = -1;
function Mm() {
  !cu ||
    !hn ||
    ((cu = !1),
    hn.length ? (El = hn.concat(El)) : (_i = -1),
    El.length && Gd());
}
function Gd() {
  if (!cu) {
    var i = Yd(Mm);
    cu = !0;
    for (var r = El.length; r; ) {
      for (hn = El, El = []; ++_i < r; ) hn && hn[_i].run();
      (_i = -1), (r = El.length);
    }
    (hn = null), (cu = !1), zm(i);
  }
}
Qt.nextTick = function (i) {
  var r = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var h = 1; h < arguments.length; h++) r[h - 1] = arguments[h];
  El.push(new Xd(i, r)), El.length === 1 && !cu && Yd(Gd);
};
function Xd(i, r) {
  (this.fun = i), (this.array = r);
}
Xd.prototype.run = function () {
  this.fun.apply(null, this.array);
};
Qt.title = "browser";
Qt.browser = !0;
Qt.env = {};
Qt.argv = [];
Qt.version = "";
Qt.versions = {};
function bl() {}
Qt.on = bl;
Qt.addListener = bl;
Qt.once = bl;
Qt.off = bl;
Qt.removeListener = bl;
Qt.removeAllListeners = bl;
Qt.emit = bl;
Qt.prependListener = bl;
Qt.prependOnceListener = bl;
Qt.listeners = function (i) {
  return [];
};
Qt.binding = function (i) {
  throw new Error("process.binding is not supported");
};
Qt.cwd = function () {
  return "/";
};
Qt.chdir = function (i) {
  throw new Error("process.chdir is not supported");
};
Qt.umask = function () {
  return 0;
};
var wm = jd.exports;
const Kl = Dm(wm);
var ot = {},
  yd;
function Nm() {
  if (yd) return ot;
  yd = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    h = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    j = Symbol.iterator;
  function J(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (j && T[j]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    X = Object.assign,
    k = {};
  function Y(T, G, K) {
    (this.props = T),
      (this.context = G),
      (this.refs = k),
      (this.updater = K || I);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (T, G) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, G, "setState");
    }),
    (Y.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function nt() {}
  nt.prototype = Y.prototype;
  function W(T, G, K) {
    (this.props = T),
      (this.context = G),
      (this.refs = k),
      (this.updater = K || I);
  }
  var rt = (W.prototype = new nt());
  (rt.constructor = W), X(rt, Y.prototype), (rt.isPureReactComponent = !0);
  var zt = Array.isArray,
    lt = { H: null, A: null, T: null, S: null, V: null },
    Mt = Object.prototype.hasOwnProperty;
  function qt(T, G, K, Z, V, at) {
    return (
      (K = at.ref),
      { $$typeof: i, type: T, key: G, ref: K !== void 0 ? K : null, props: at }
    );
  }
  function Bt(T, G) {
    return qt(T.type, G, void 0, void 0, void 0, T.props);
  }
  function ue(T) {
    return typeof T == "object" && T !== null && T.$$typeof === i;
  }
  function el(T) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (K) {
        return G[K];
      })
    );
  }
  var je = /\/+/g;
  function Ft(T, G) {
    return typeof T == "object" && T !== null && T.key != null
      ? el("" + T.key)
      : G.toString(36);
  }
  function ll() {}
  function nl(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(ll, ll)
            : ((T.status = "pending"),
              T.then(
                function (G) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = G));
                },
                function (G) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = G));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function kt(T, G, K, Z, V) {
    var at = typeof T;
    (at === "undefined" || at === "boolean") && (T = null);
    var it = !1;
    if (T === null) it = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          it = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case i:
            case r:
              it = !0;
              break;
            case p:
              return (it = T._init), kt(it(T._payload), G, K, Z, V);
          }
      }
    if (it)
      return (
        (V = V(T)),
        (it = Z === "" ? "." + Ft(T, 0) : Z),
        zt(V)
          ? ((K = ""),
            it != null && (K = it.replace(je, "$&/") + "/"),
            kt(V, G, K, "", function (Ye) {
              return Ye;
            }))
          : V != null &&
            (ue(V) &&
              (V = Bt(
                V,
                K +
                  (V.key == null || (T && T.key === V.key)
                    ? ""
                    : ("" + V.key).replace(je, "$&/") + "/") +
                  it
              )),
            G.push(V)),
        1
      );
    it = 0;
    var ae = Z === "" ? "." : Z + ":";
    if (zt(T))
      for (var xt = 0; xt < T.length; xt++)
        (Z = T[xt]), (at = ae + Ft(Z, xt)), (it += kt(Z, G, K, at, V));
    else if (((xt = J(T)), typeof xt == "function"))
      for (T = xt.call(T), xt = 0; !(Z = T.next()).done; )
        (Z = Z.value), (at = ae + Ft(Z, xt++)), (it += kt(Z, G, K, at, V));
    else if (at === "object") {
      if (typeof T.then == "function") return kt(nl(T), G, K, Z, V);
      throw (
        ((G = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return it;
  }
  function N(T, G, K) {
    if (T == null) return T;
    var Z = [],
      V = 0;
    return (
      kt(T, Z, "", "", function (at) {
        return G.call(K, at, V++);
      }),
      Z
    );
  }
  function Q(T) {
    if (T._status === -1) {
      var G = T._result;
      (G = G()),
        G.then(
          function (K) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = K));
          },
          function (K) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = K));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = G));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var G = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(G)) return;
          } else if (typeof Kl == "object" && typeof Kl.emit == "function") {
            Kl.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function Et() {}
  return (
    (ot.Children = {
      map: N,
      forEach: function (T, G, K) {
        N(
          T,
          function () {
            G.apply(this, arguments);
          },
          K
        );
      },
      count: function (T) {
        var G = 0;
        return (
          N(T, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (T) {
        return (
          N(T, function (G) {
            return G;
          }) || []
        );
      },
      only: function (T) {
        if (!ue(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (ot.Component = Y),
    (ot.Fragment = h),
    (ot.Profiler = m),
    (ot.PureComponent = W),
    (ot.StrictMode = o),
    (ot.Suspense = M),
    (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = lt),
    (ot.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return lt.H.useMemoCache(T);
      },
    }),
    (ot.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (ot.cloneElement = function (T, G, K) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var Z = X({}, T.props),
        V = T.key,
        at = void 0;
      if (G != null)
        for (it in (G.ref !== void 0 && (at = void 0),
        G.key !== void 0 && (V = "" + G.key),
        G))
          !Mt.call(G, it) ||
            it === "key" ||
            it === "__self" ||
            it === "__source" ||
            (it === "ref" && G.ref === void 0) ||
            (Z[it] = G[it]);
      var it = arguments.length - 2;
      if (it === 1) Z.children = K;
      else if (1 < it) {
        for (var ae = Array(it), xt = 0; xt < it; xt++)
          ae[xt] = arguments[xt + 2];
        Z.children = ae;
      }
      return qt(T.type, V, void 0, void 0, at, Z);
    }),
    (ot.createContext = function (T) {
      return (
        (T = {
          $$typeof: S,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: v, _context: T }),
        T
      );
    }),
    (ot.createElement = function (T, G, K) {
      var Z,
        V = {},
        at = null;
      if (G != null)
        for (Z in (G.key !== void 0 && (at = "" + G.key), G))
          Mt.call(G, Z) &&
            Z !== "key" &&
            Z !== "__self" &&
            Z !== "__source" &&
            (V[Z] = G[Z]);
      var it = arguments.length - 2;
      if (it === 1) V.children = K;
      else if (1 < it) {
        for (var ae = Array(it), xt = 0; xt < it; xt++)
          ae[xt] = arguments[xt + 2];
        V.children = ae;
      }
      if (T && T.defaultProps)
        for (Z in ((it = T.defaultProps), it))
          V[Z] === void 0 && (V[Z] = it[Z]);
      return qt(T, at, void 0, void 0, null, V);
    }),
    (ot.createRef = function () {
      return { current: null };
    }),
    (ot.forwardRef = function (T) {
      return { $$typeof: B, render: T };
    }),
    (ot.isValidElement = ue),
    (ot.lazy = function (T) {
      return { $$typeof: p, _payload: { _status: -1, _result: T }, _init: Q };
    }),
    (ot.memo = function (T, G) {
      return { $$typeof: b, type: T, compare: G === void 0 ? null : G };
    }),
    (ot.startTransition = function (T) {
      var G = lt.T,
        K = {};
      lt.T = K;
      try {
        var Z = T(),
          V = lt.S;
        V !== null && V(K, Z),
          typeof Z == "object" &&
            Z !== null &&
            typeof Z.then == "function" &&
            Z.then(Et, P);
      } catch (at) {
        P(at);
      } finally {
        lt.T = G;
      }
    }),
    (ot.unstable_useCacheRefresh = function () {
      return lt.H.useCacheRefresh();
    }),
    (ot.use = function (T) {
      return lt.H.use(T);
    }),
    (ot.useActionState = function (T, G, K) {
      return lt.H.useActionState(T, G, K);
    }),
    (ot.useCallback = function (T, G) {
      return lt.H.useCallback(T, G);
    }),
    (ot.useContext = function (T) {
      return lt.H.useContext(T);
    }),
    (ot.useDebugValue = function () {}),
    (ot.useDeferredValue = function (T, G) {
      return lt.H.useDeferredValue(T, G);
    }),
    (ot.useEffect = function (T, G, K) {
      var Z = lt.H;
      if (typeof K == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return Z.useEffect(T, G);
    }),
    (ot.useId = function () {
      return lt.H.useId();
    }),
    (ot.useImperativeHandle = function (T, G, K) {
      return lt.H.useImperativeHandle(T, G, K);
    }),
    (ot.useInsertionEffect = function (T, G) {
      return lt.H.useInsertionEffect(T, G);
    }),
    (ot.useLayoutEffect = function (T, G) {
      return lt.H.useLayoutEffect(T, G);
    }),
    (ot.useMemo = function (T, G) {
      return lt.H.useMemo(T, G);
    }),
    (ot.useOptimistic = function (T, G) {
      return lt.H.useOptimistic(T, G);
    }),
    (ot.useReducer = function (T, G, K) {
      return lt.H.useReducer(T, G, K);
    }),
    (ot.useRef = function (T) {
      return lt.H.useRef(T);
    }),
    (ot.useState = function (T) {
      return lt.H.useState(T);
    }),
    (ot.useSyncExternalStore = function (T, G, K) {
      return lt.H.useSyncExternalStore(T, G, K);
    }),
    (ot.useTransition = function () {
      return lt.H.useTransition();
    }),
    (ot.version = "19.1.0"),
    ot
  );
}
var md;
function Sr() {
  return md || ((md = 1), (er.exports = Nm())), er.exports;
}
var sa = Sr();
const hr = Ld(sa);
var lr = { exports: {} },
  fa = {},
  nr = { exports: {} },
  ur = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function Cm() {
  return (
    pd ||
      ((pd = 1),
      (function (i) {
        function r(N, Q) {
          var P = N.length;
          N.push(Q);
          t: for (; 0 < P; ) {
            var Et = (P - 1) >>> 1,
              T = N[Et];
            if (0 < m(T, Q)) (N[Et] = Q), (N[P] = T), (P = Et);
            else break t;
          }
        }
        function h(N) {
          return N.length === 0 ? null : N[0];
        }
        function o(N) {
          if (N.length === 0) return null;
          var Q = N[0],
            P = N.pop();
          if (P !== Q) {
            N[0] = P;
            t: for (var Et = 0, T = N.length, G = T >>> 1; Et < G; ) {
              var K = 2 * (Et + 1) - 1,
                Z = N[K],
                V = K + 1,
                at = N[V];
              if (0 > m(Z, P))
                V < T && 0 > m(at, Z)
                  ? ((N[Et] = at), (N[V] = P), (Et = V))
                  : ((N[Et] = Z), (N[K] = P), (Et = K));
              else if (V < T && 0 > m(at, P))
                (N[Et] = at), (N[V] = P), (Et = V);
              else break t;
            }
          }
          return Q;
        }
        function m(N, Q) {
          var P = N.sortIndex - Q.sortIndex;
          return P !== 0 ? P : N.id - Q.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          i.unstable_now = function () {
            return v.now();
          };
        } else {
          var S = Date,
            B = S.now();
          i.unstable_now = function () {
            return S.now() - B;
          };
        }
        var M = [],
          b = [],
          p = 1,
          j = null,
          J = 3,
          I = !1,
          X = !1,
          k = !1,
          Y = !1,
          nt = typeof setTimeout == "function" ? setTimeout : null,
          W = typeof clearTimeout == "function" ? clearTimeout : null,
          rt = typeof setImmediate < "u" ? setImmediate : null;
        function zt(N) {
          for (var Q = h(b); Q !== null; ) {
            if (Q.callback === null) o(b);
            else if (Q.startTime <= N)
              o(b), (Q.sortIndex = Q.expirationTime), r(M, Q);
            else break;
            Q = h(b);
          }
        }
        function lt(N) {
          if (((k = !1), zt(N), !X))
            if (h(M) !== null) (X = !0), Mt || ((Mt = !0), Ft());
            else {
              var Q = h(b);
              Q !== null && kt(lt, Q.startTime - N);
            }
        }
        var Mt = !1,
          qt = -1,
          Bt = 5,
          ue = -1;
        function el() {
          return Y ? !0 : !(i.unstable_now() - ue < Bt);
        }
        function je() {
          if (((Y = !1), Mt)) {
            var N = i.unstable_now();
            ue = N;
            var Q = !0;
            try {
              t: {
                (X = !1), k && ((k = !1), W(qt), (qt = -1)), (I = !0);
                var P = J;
                try {
                  e: {
                    for (
                      zt(N), j = h(M);
                      j !== null && !(j.expirationTime > N && el());

                    ) {
                      var Et = j.callback;
                      if (typeof Et == "function") {
                        (j.callback = null), (J = j.priorityLevel);
                        var T = Et(j.expirationTime <= N);
                        if (((N = i.unstable_now()), typeof T == "function")) {
                          (j.callback = T), zt(N), (Q = !0);
                          break e;
                        }
                        j === h(M) && o(M), zt(N);
                      } else o(M);
                      j = h(M);
                    }
                    if (j !== null) Q = !0;
                    else {
                      var G = h(b);
                      G !== null && kt(lt, G.startTime - N), (Q = !1);
                    }
                  }
                  break t;
                } finally {
                  (j = null), (J = P), (I = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? Ft() : (Mt = !1);
            }
          }
        }
        var Ft;
        if (typeof rt == "function")
          Ft = function () {
            rt(je);
          };
        else if (typeof MessageChannel < "u") {
          var ll = new MessageChannel(),
            nl = ll.port2;
          (ll.port1.onmessage = je),
            (Ft = function () {
              nl.postMessage(null);
            });
        } else
          Ft = function () {
            nt(je, 0);
          };
        function kt(N, Q) {
          qt = nt(function () {
            N(i.unstable_now());
          }, Q);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (i.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Bt = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (i.unstable_next = function (N) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = J;
            }
            var P = J;
            J = Q;
            try {
              return N();
            } finally {
              J = P;
            }
          }),
          (i.unstable_requestPaint = function () {
            Y = !0;
          }),
          (i.unstable_runWithPriority = function (N, Q) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var P = J;
            J = N;
            try {
              return Q();
            } finally {
              J = P;
            }
          }),
          (i.unstable_scheduleCallback = function (N, Q, P) {
            var Et = i.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? Et + P : Et))
                : (P = Et),
              N)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = P + T),
              (N = {
                id: p++,
                callback: Q,
                priorityLevel: N,
                startTime: P,
                expirationTime: T,
                sortIndex: -1,
              }),
              P > Et
                ? ((N.sortIndex = P),
                  r(b, N),
                  h(M) === null &&
                    N === h(b) &&
                    (k ? (W(qt), (qt = -1)) : (k = !0), kt(lt, P - Et)))
                : ((N.sortIndex = T),
                  r(M, N),
                  X || I || ((X = !0), Mt || ((Mt = !0), Ft()))),
              N
            );
          }),
          (i.unstable_shouldYield = el),
          (i.unstable_wrapCallback = function (N) {
            var Q = J;
            return function () {
              var P = J;
              J = Q;
              try {
                return N.apply(this, arguments);
              } finally {
                J = P;
              }
            };
          });
      })(ur)),
    ur
  );
}
var gd;
function Hm() {
  return gd || ((gd = 1), (nr.exports = Cm())), nr.exports;
}
var ar = { exports: {} },
  re = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function qm() {
  if (vd) return re;
  vd = 1;
  var i = Sr();
  function r(M) {
    var b = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        b += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      M +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h() {}
  var o = {
      d: {
        f: h,
        r: function () {
          throw Error(r(522));
        },
        D: h,
        C: h,
        L: h,
        m: h,
        X: h,
        S: h,
        M: h,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for("react.portal");
  function v(M, b, p) {
    var j =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: j == null ? null : "" + j,
      children: M,
      containerInfo: b,
      implementation: p,
    };
  }
  var S = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function B(M, b) {
    if (M === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (re.createPortal = function (M, b) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(r(299));
      return v(M, b, null, p);
    }),
    (re.flushSync = function (M) {
      var b = S.T,
        p = o.p;
      try {
        if (((S.T = null), (o.p = 2), M)) return M();
      } finally {
        (S.T = b), (o.p = p), o.d.f();
      }
    }),
    (re.preconnect = function (M, b) {
      typeof M == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        o.d.C(M, b));
    }),
    (re.prefetchDNS = function (M) {
      typeof M == "string" && o.d.D(M);
    }),
    (re.preinit = function (M, b) {
      if (typeof M == "string" && b && typeof b.as == "string") {
        var p = b.as,
          j = B(p, b.crossOrigin),
          J = typeof b.integrity == "string" ? b.integrity : void 0,
          I = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        p === "style"
          ? o.d.S(M, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: j,
              integrity: J,
              fetchPriority: I,
            })
          : p === "script" &&
            o.d.X(M, {
              crossOrigin: j,
              integrity: J,
              fetchPriority: I,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (re.preinitModule = function (M, b) {
      if (typeof M == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var p = B(b.as, b.crossOrigin);
            o.d.M(M, {
              crossOrigin: p,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && o.d.M(M);
    }),
    (re.preload = function (M, b) {
      if (
        typeof M == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var p = b.as,
          j = B(p, b.crossOrigin);
        o.d.L(M, p, {
          crossOrigin: j,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (re.preloadModule = function (M, b) {
      if (typeof M == "string")
        if (b) {
          var p = B(b.as, b.crossOrigin);
          o.d.m(M, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: p,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else o.d.m(M);
    }),
    (re.requestFormReset = function (M) {
      o.d.r(M);
    }),
    (re.unstable_batchedUpdates = function (M, b) {
      return M(b);
    }),
    (re.useFormState = function (M, b, p) {
      return S.H.useFormState(M, b, p);
    }),
    (re.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (re.version = "19.1.0"),
    re
  );
}
var Sd;
function Lm() {
  if (Sd) return ar.exports;
  Sd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (ar.exports = qm()), ar.exports;
}
var Ed;
function jm() {
  if (Ed) return fa;
  Ed = 1;
  var i = Hm(),
    r = Sr(),
    h = Lm();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function m(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function v(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function B(t) {
    if (v(t) !== t) throw Error(o(188));
  }
  function M(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = v(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var a = u.alternate;
      if (a === null) {
        if (((n = u.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === a.child) {
        for (a = u.child; a; ) {
          if (a === l) return B(u), t;
          if (a === n) return B(u), e;
          a = a.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== n.return) (l = u), (n = a);
      else {
        for (var s = !1, d = u.child; d; ) {
          if (d === l) {
            (s = !0), (l = u), (n = a);
            break;
          }
          if (d === n) {
            (s = !0), (n = u), (l = a);
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = a.child; d; ) {
            if (d === l) {
              (s = !0), (l = a), (n = u);
              break;
            }
            if (d === n) {
              (s = !0), (n = a), (l = u);
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (l.alternate !== n) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var p = Object.assign,
    j = Symbol.for("react.element"),
    J = Symbol.for("react.transitional.element"),
    I = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    nt = Symbol.for("react.provider"),
    W = Symbol.for("react.consumer"),
    rt = Symbol.for("react.context"),
    zt = Symbol.for("react.forward_ref"),
    lt = Symbol.for("react.suspense"),
    Mt = Symbol.for("react.suspense_list"),
    qt = Symbol.for("react.memo"),
    Bt = Symbol.for("react.lazy"),
    ue = Symbol.for("react.activity"),
    el = Symbol.for("react.memo_cache_sentinel"),
    je = Symbol.iterator;
  function Ft(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (je && t[je]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ll = Symbol.for("react.client.reference");
  function nl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ll ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case X:
        return "Fragment";
      case Y:
        return "Profiler";
      case k:
        return "StrictMode";
      case lt:
        return "Suspense";
      case Mt:
        return "SuspenseList";
      case ue:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case I:
          return "Portal";
        case rt:
          return (t.displayName || "Context") + ".Provider";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case zt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case qt:
          return (
            (e = t.displayName || null), e !== null ? e : nl(t.type) || "Memo"
          );
        case Bt:
          (e = t._payload), (t = t._init);
          try {
            return nl(t(e));
          } catch {}
      }
    return null;
  }
  var kt = Array.isArray,
    N = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    Et = [],
    T = -1;
  function G(t) {
    return { current: t };
  }
  function K(t) {
    0 > T || ((t.current = Et[T]), (Et[T] = null), T--);
  }
  function Z(t, e) {
    T++, (Et[T] = t.current), (t.current = e);
  }
  var V = G(null),
    at = G(null),
    it = G(null),
    ae = G(null);
  function xt(t, e) {
    switch ((Z(it, e), Z(at, t), Z(V, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Yh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Yh(e)), (t = Gh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    K(V), Z(V, t);
  }
  function Ye() {
    K(V), K(at), K(it);
  }
  function pn(t) {
    t.memoizedState !== null && Z(ae, t);
    var e = V.current,
      l = Gh(e, t.type);
    e !== l && (Z(at, t), Z(V, l));
  }
  function Ge(t) {
    at.current === t && (K(V), K(at)),
      ae.current === t && (K(ae), (la._currentValue = P));
  }
  var Jl = Object.prototype.hasOwnProperty,
    gn = i.unstable_scheduleCallback,
    ou = i.unstable_cancelCallback,
    ma = i.unstable_shouldYield,
    Tl = i.unstable_requestPaint,
    ie = i.unstable_now,
    Gi = i.unstable_getCurrentPriorityLevel,
    pa = i.unstable_ImmediatePriority,
    vn = i.unstable_UserBlockingPriority,
    Sn = i.unstable_NormalPriority,
    Xi = i.unstable_LowPriority,
    su = i.unstable_IdlePriority,
    En = i.log,
    Ue = i.unstable_setDisableYieldValue,
    ul = null,
    se = null;
  function te(t) {
    if (
      (typeof En == "function" && Ue(t),
      se && typeof se.setStrictMode == "function")
    )
      try {
        se.setStrictMode(ul, t);
      } catch {}
  }
  var he = Math.clz32 ? Math.clz32 : f,
    y = Math.log,
    c = Math.LN2;
  function f(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((y(t) / c) | 0)) | 0;
  }
  var g = 256,
    R = 4194304;
  function D(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function H(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var u = 0,
      a = t.suspendedLanes,
      s = t.pingedLanes;
    t = t.warmLanes;
    var d = n & 134217727;
    return (
      d !== 0
        ? ((n = d & ~a),
          n !== 0
            ? (u = D(n))
            : ((s &= d),
              s !== 0
                ? (u = D(s))
                : l || ((l = d & ~t), l !== 0 && (u = D(l)))))
        : ((d = n & ~a),
          d !== 0
            ? (u = D(d))
            : s !== 0
            ? (u = D(s))
            : l || ((l = n & ~t), l !== 0 && (u = D(l)))),
      u === 0
        ? 0
        : e !== 0 &&
          e !== u &&
          (e & a) === 0 &&
          ((a = u & -u),
          (l = e & -e),
          a >= l || (a === 32 && (l & 4194048) !== 0))
        ? e
        : u
    );
  }
  function ct(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Nt(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _t() {
    var t = g;
    return (g <<= 1), (g & 4194048) === 0 && (g = 256), t;
  }
  function wt() {
    var t = R;
    return (R <<= 1), (R & 62914560) === 0 && (R = 4194304), t;
  }
  function vt(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function hu(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function p0(t, e, l, n, u, a) {
    var s = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var d = t.entanglements,
      E = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var C = 31 - he(l),
        L = 1 << C;
      (d[C] = 0), (E[C] = -1);
      var U = _[C];
      if (U !== null)
        for (_[C] = null, C = 0; C < U.length; C++) {
          var z = U[C];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~L;
    }
    n !== 0 && Rr(t, n, 0),
      a !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= a & ~(s & ~e));
  }
  function Rr(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var n = 31 - he(e);
    (t.entangledLanes |= e),
      (t.entanglements[n] = t.entanglements[n] | 1073741824 | (l & 4194090));
  }
  function Or(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var n = 31 - he(l),
        u = 1 << n;
      (u & e) | (t[n] & e) && (t[n] |= e), (l &= ~u);
    }
  }
  function Qi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Zi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function xr() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : id(t.type));
  }
  function g0(t, e) {
    var l = Q.p;
    try {
      return (Q.p = t), e();
    } finally {
      Q.p = l;
    }
  }
  var Al = Math.random().toString(36).slice(2),
    ce = "__reactFiber$" + Al,
    ye = "__reactProps$" + Al,
    bn = "__reactContainer$" + Al,
    Vi = "__reactEvents$" + Al,
    v0 = "__reactListeners$" + Al,
    S0 = "__reactHandles$" + Al,
    _r = "__reactResources$" + Al,
    du = "__reactMarker$" + Al;
  function Ki(t) {
    delete t[ce], delete t[ye], delete t[Vi], delete t[v0], delete t[S0];
  }
  function Tn(t) {
    var e = t[ce];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[bn] || l[ce])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Vh(t); t !== null; ) {
            if ((l = t[ce])) return l;
            t = Vh(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function An(t) {
    if ((t = t[ce] || t[bn])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function yu(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Rn(t) {
    var e = t[_r];
    return (
      e ||
        (e = t[_r] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function $t(t) {
    t[du] = !0;
  }
  var Ur = new Set(),
    Br = {};
  function Fl(t, e) {
    On(t, e), On(t + "Capture", e);
  }
  function On(t, e) {
    for (Br[t] = e, t = 0; t < e.length; t++) Ur.add(e[t]);
  }
  var E0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Dr = {},
    zr = {};
  function b0(t) {
    return Jl.call(zr, t)
      ? !0
      : Jl.call(Dr, t)
      ? !1
      : E0.test(t)
      ? (zr[t] = !0)
      : ((Dr[t] = !0), !1);
  }
  function ga(t, e, l) {
    if (b0(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function va(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function al(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  var Ji, Mr;
  function xn(t) {
    if (Ji === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Ji = (e && e[1]) || ""),
          (Mr =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ji +
      t +
      Mr
    );
  }
  var Fi = !1;
  function ki(t, e) {
    if (!t || Fi) return "";
    Fi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (z) {
                  var U = z;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (z) {
                  U = z;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                U = z;
              }
              (L = t()) &&
                typeof L.catch == "function" &&
                L.catch(function () {});
            }
          } catch (z) {
            if (z && U && typeof z.stack == "string") return [z.stack, U.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var a = n.DetermineComponentFrameRoot(),
        s = a[0],
        d = a[1];
      if (s && d) {
        var E = s.split(`
`),
          _ = d.split(`
`);
        for (
          u = n = 0;
          n < E.length && !E[n].includes("DetermineComponentFrameRoot");

        )
          n++;
        for (; u < _.length && !_[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (n === E.length || u === _.length)
          for (
            n = E.length - 1, u = _.length - 1;
            1 <= n && 0 <= u && E[n] !== _[u];

          )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (E[n] !== _[u]) {
            if (n !== 1 || u !== 1)
              do
                if ((n--, u--, 0 > u || E[n] !== _[u])) {
                  var C =
                    `
` + E[n].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", t.displayName)),
                    C
                  );
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      (Fi = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? xn(l) : "";
  }
  function T0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return xn(t.type);
      case 16:
        return xn("Lazy");
      case 13:
        return xn("Suspense");
      case 19:
        return xn("SuspenseList");
      case 0:
      case 15:
        return ki(t.type, !1);
      case 11:
        return ki(t.type.render, !1);
      case 1:
        return ki(t.type, !0);
      case 31:
        return xn("Activity");
      default:
        return "";
    }
  }
  function wr(t) {
    try {
      var e = "";
      do (e += T0(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Be(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Nr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function A0(t) {
    var e = Nr(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      n = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        a = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (s) {
            (n = "" + s), a.call(this, s);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (s) {
            n = "" + s;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Sa(t) {
    t._valueTracker || (t._valueTracker = A0(t));
  }
  function Cr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      n = "";
    return (
      t && (n = Nr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = n),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Ea(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var R0 = /[\n"\\]/g;
  function De(t) {
    return t.replace(R0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function $i(t, e, l, n, u, a, s, d) {
    (t.name = ""),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.type = s)
        : t.removeAttribute("type"),
      e != null
        ? s === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Be(e))
          : t.value !== "" + Be(e) && (t.value = "" + Be(e))
        : (s !== "submit" && s !== "reset") || t.removeAttribute("value"),
      e != null
        ? Wi(t, s, Be(e))
        : l != null
        ? Wi(t, s, Be(l))
        : n != null && t.removeAttribute("value"),
      u == null && a != null && (t.defaultChecked = !!a),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.name = "" + Be(d))
        : t.removeAttribute("name");
  }
  function Hr(t, e, l, n, u, a, s, d) {
    if (
      (a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        typeof a != "boolean" &&
        (t.type = a),
      e != null || l != null)
    ) {
      if (!((a !== "submit" && a !== "reset") || e != null)) return;
      (l = l != null ? "" + Be(l) : ""),
        (e = e != null ? "" + Be(e) : l),
        d || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (n = n ?? u),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (t.checked = d ? t.checked : !!n),
      (t.defaultChecked = !!n),
      s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (t.name = s);
  }
  function Wi(t, e, l) {
    (e === "number" && Ea(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function _n(t, e, l, n) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        (u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Be(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          (t[u].selected = !0), n && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function qr(t, e, l) {
    if (
      e != null &&
      ((e = "" + Be(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Be(l) : "";
  }
  function Lr(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(o(92));
        if (kt(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), (e = l);
    }
    (l = Be(e)),
      (t.defaultValue = l),
      (n = t.textContent),
      n === l && n !== "" && n !== null && (t.value = n);
  }
  function Un(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var O0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jr(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? n
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : n
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || O0.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function Yr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (e != null && e.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? t.setProperty(n, "")
            : n === "float"
            ? (t.cssFloat = "")
            : (t[n] = ""));
      for (var u in e)
        (n = e[u]), e.hasOwnProperty(u) && l[u] !== n && jr(t, u, n);
    } else for (var a in e) e.hasOwnProperty(a) && jr(t, a, e[a]);
  }
  function Ii(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var x0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    _0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ba(t) {
    return _0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Pi = null;
  function tc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Bn = null,
    Dn = null;
  function Gr(t) {
    var e = An(t);
    if (e && (t = e.stateNode)) {
      var l = t[ye] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            ($i(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + De("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var u = n[ye] || null;
                if (!u) throw Error(o(90));
                $i(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (n = l[e]), n.form === t.form && Cr(n);
          }
          break t;
        case "textarea":
          qr(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && _n(t, !!l.multiple, e, !1);
      }
    }
  }
  var ec = !1;
  function Xr(t, e, l) {
    if (ec) return t(e, l);
    ec = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (
        ((ec = !1),
        (Bn !== null || Dn !== null) &&
          (ii(), Bn && ((e = Bn), (t = Dn), (Dn = Bn = null), Gr(e), t)))
      )
        for (e = 0; e < t.length; e++) Gr(t[e]);
    }
  }
  function mu(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ye] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
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
        (n = !n.disabled) ||
          ((t = t.type),
          (n = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !n);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(o(231, e, typeof l));
    return l;
  }
  var il = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lc = !1;
  if (il)
    try {
      var pu = {};
      Object.defineProperty(pu, "passive", {
        get: function () {
          lc = !0;
        },
      }),
        window.addEventListener("test", pu, pu),
        window.removeEventListener("test", pu, pu);
    } catch {
      lc = !1;
    }
  var Rl = null,
    nc = null,
    Ta = null;
  function Qr() {
    if (Ta) return Ta;
    var t,
      e = nc,
      l = e.length,
      n,
      u = "value" in Rl ? Rl.value : Rl.textContent,
      a = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var s = l - t;
    for (n = 1; n <= s && e[l - n] === u[a - n]; n++);
    return (Ta = u.slice(t, 1 < n ? 1 - n : void 0));
  }
  function Aa(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ra() {
    return !0;
  }
  function Zr() {
    return !1;
  }
  function me(t) {
    function e(l, n, u, a, s) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = s),
        (this.currentTarget = null);
      for (var d in t)
        t.hasOwnProperty(d) && ((l = t[d]), (this[d] = l ? l(a) : a[d]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Ra
          : Zr),
        (this.isPropagationStopped = Zr),
        this
      );
    }
    return (
      p(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ra));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ra));
        },
        persist: function () {},
        isPersistent: Ra,
      }),
      e
    );
  }
  var kl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Oa = me(kl),
    gu = p({}, kl, { view: 0, detail: 0 }),
    U0 = me(gu),
    uc,
    ac,
    vu,
    xa = p({}, gu, {
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
      getModifierState: cc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== vu &&
              (vu && t.type === "mousemove"
                ? ((uc = t.screenX - vu.screenX), (ac = t.screenY - vu.screenY))
                : (ac = uc = 0),
              (vu = t)),
            uc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ac;
      },
    }),
    Vr = me(xa),
    B0 = p({}, xa, { dataTransfer: 0 }),
    D0 = me(B0),
    z0 = p({}, gu, { relatedTarget: 0 }),
    ic = me(z0),
    M0 = p({}, kl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    w0 = me(M0),
    N0 = p({}, kl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    C0 = me(N0),
    H0 = p({}, kl, { data: 0 }),
    Kr = me(H0),
    q0 = {
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
    L0 = {
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
    j0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Y0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = j0[t])
      ? !!e[t]
      : !1;
  }
  function cc() {
    return Y0;
  }
  var G0 = p({}, gu, {
      key: function (t) {
        if (t.key) {
          var e = q0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Aa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? L0[t.keyCode] || "Unidentified"
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
      getModifierState: cc,
      charCode: function (t) {
        return t.type === "keypress" ? Aa(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Aa(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    X0 = me(G0),
    Q0 = p({}, xa, {
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
    Jr = me(Q0),
    Z0 = p({}, gu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cc,
    }),
    V0 = me(Z0),
    K0 = p({}, kl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J0 = me(K0),
    F0 = p({}, xa, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    k0 = me(F0),
    $0 = p({}, kl, { newState: 0, oldState: 0 }),
    W0 = me($0),
    I0 = [9, 13, 27, 32],
    fc = il && "CompositionEvent" in window,
    Su = null;
  il && "documentMode" in document && (Su = document.documentMode);
  var P0 = il && "TextEvent" in window && !Su,
    Fr = il && (!fc || (Su && 8 < Su && 11 >= Su)),
    kr = " ",
    $r = !1;
  function Wr(t, e) {
    switch (t) {
      case "keyup":
        return I0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ir(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var zn = !1;
  function ty(t, e) {
    switch (t) {
      case "compositionend":
        return Ir(e);
      case "keypress":
        return e.which !== 32 ? null : (($r = !0), kr);
      case "textInput":
        return (t = e.data), t === kr && $r ? null : t;
      default:
        return null;
    }
  }
  function ey(t, e) {
    if (zn)
      return t === "compositionend" || (!fc && Wr(t, e))
        ? ((t = Qr()), (Ta = nc = Rl = null), (zn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Fr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ly = {
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
  function Pr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ly[t.type] : e === "textarea";
  }
  function to(t, e, l, n) {
    Bn ? (Dn ? Dn.push(n) : (Dn = [n])) : (Bn = n),
      (e = hi(e, "onChange")),
      0 < e.length &&
        ((l = new Oa("onChange", "change", null, l, n)),
        t.push({ event: l, listeners: e }));
  }
  var Eu = null,
    bu = null;
  function ny(t) {
    Ch(t, 0);
  }
  function _a(t) {
    var e = yu(t);
    if (Cr(e)) return t;
  }
  function eo(t, e) {
    if (t === "change") return e;
  }
  var lo = !1;
  if (il) {
    var rc;
    if (il) {
      var oc = "oninput" in document;
      if (!oc) {
        var no = document.createElement("div");
        no.setAttribute("oninput", "return;"),
          (oc = typeof no.oninput == "function");
      }
      rc = oc;
    } else rc = !1;
    lo = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function uo() {
    Eu && (Eu.detachEvent("onpropertychange", ao), (bu = Eu = null));
  }
  function ao(t) {
    if (t.propertyName === "value" && _a(bu)) {
      var e = [];
      to(e, bu, t, tc(t)), Xr(ny, e);
    }
  }
  function uy(t, e, l) {
    t === "focusin"
      ? (uo(), (Eu = e), (bu = l), Eu.attachEvent("onpropertychange", ao))
      : t === "focusout" && uo();
  }
  function ay(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return _a(bu);
  }
  function iy(t, e) {
    if (t === "click") return _a(e);
  }
  function cy(t, e) {
    if (t === "input" || t === "change") return _a(e);
  }
  function fy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ee = typeof Object.is == "function" ? Object.is : fy;
  function Tu(t, e) {
    if (Ee(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Jl.call(e, u) || !Ee(t[u], e[u])) return !1;
    }
    return !0;
  }
  function io(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function co(t, e) {
    var l = io(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = t + l.textContent.length), t <= e && n >= e))
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = io(l);
    }
  }
  function fo(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? fo(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function ro(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ea(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Ea(t.document);
    }
    return e;
  }
  function sc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var ry = il && "documentMode" in document && 11 >= document.documentMode,
    Mn = null,
    hc = null,
    Au = null,
    dc = !1;
  function oo(t, e, l) {
    var n =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    dc ||
      Mn == null ||
      Mn !== Ea(n) ||
      ((n = Mn),
      "selectionStart" in n && sc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Au && Tu(Au, n)) ||
        ((Au = n),
        (n = hi(hc, "onSelect")),
        0 < n.length &&
          ((e = new Oa("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: n }),
          (e.target = Mn))));
  }
  function $l(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var wn = {
      animationend: $l("Animation", "AnimationEnd"),
      animationiteration: $l("Animation", "AnimationIteration"),
      animationstart: $l("Animation", "AnimationStart"),
      transitionrun: $l("Transition", "TransitionRun"),
      transitionstart: $l("Transition", "TransitionStart"),
      transitioncancel: $l("Transition", "TransitionCancel"),
      transitionend: $l("Transition", "TransitionEnd"),
    },
    yc = {},
    so = {};
  il &&
    ((so = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wn.animationend.animation,
      delete wn.animationiteration.animation,
      delete wn.animationstart.animation),
    "TransitionEvent" in window || delete wn.transitionend.transition);
  function Wl(t) {
    if (yc[t]) return yc[t];
    if (!wn[t]) return t;
    var e = wn[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in so) return (yc[t] = e[l]);
    return t;
  }
  var ho = Wl("animationend"),
    yo = Wl("animationiteration"),
    mo = Wl("animationstart"),
    oy = Wl("transitionrun"),
    sy = Wl("transitionstart"),
    hy = Wl("transitioncancel"),
    po = Wl("transitionend"),
    go = new Map(),
    mc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  mc.push("scrollEnd");
  function Xe(t, e) {
    go.set(t, e), Fl(e, [t]);
  }
  var vo = new WeakMap();
  function ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = vo.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: wr(e) }), vo.set(t, e), e);
    }
    return { value: t, source: e, stack: wr(e) };
  }
  var Me = [],
    Nn = 0,
    pc = 0;
  function Ua() {
    for (var t = Nn, e = (pc = Nn = 0); e < t; ) {
      var l = Me[e];
      Me[e++] = null;
      var n = Me[e];
      Me[e++] = null;
      var u = Me[e];
      Me[e++] = null;
      var a = Me[e];
      if (((Me[e++] = null), n !== null && u !== null)) {
        var s = n.pending;
        s === null ? (u.next = u) : ((u.next = s.next), (s.next = u)),
          (n.pending = u);
      }
      a !== 0 && So(l, u, a);
    }
  }
  function Ba(t, e, l, n) {
    (Me[Nn++] = t),
      (Me[Nn++] = e),
      (Me[Nn++] = l),
      (Me[Nn++] = n),
      (pc |= n),
      (t.lanes |= n),
      (t = t.alternate),
      t !== null && (t.lanes |= n);
  }
  function gc(t, e, l, n) {
    return Ba(t, e, l, n), Da(t);
  }
  function Cn(t, e) {
    return Ba(t, null, null, e), Da(t);
  }
  function So(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, a = t.return; a !== null; )
      (a.childLanes |= l),
        (n = a.alternate),
        n !== null && (n.childLanes |= l),
        a.tag === 22 &&
          ((t = a.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = a),
        (a = a.return);
    return t.tag === 3
      ? ((a = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - he(l)),
          (t = a.hiddenUpdates),
          (n = t[u]),
          n === null ? (t[u] = [e]) : n.push(e),
          (e.lane = l | 536870912)),
        a)
      : null;
  }
  function Da(t) {
    if (50 < Fu) throw ((Fu = 0), (Rf = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Hn = {};
  function dy(t, e, l, n) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function be(t, e, l, n) {
    return new dy(t, e, l, n);
  }
  function vc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function cl(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = be(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Eo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function za(t, e, l, n, u, a) {
    var s = 0;
    if (((n = t), typeof t == "function")) vc(t) && (s = 1);
    else if (typeof t == "string")
      s = mm(t, l, V.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case ue:
          return (t = be(31, l, e, u)), (t.elementType = ue), (t.lanes = a), t;
        case X:
          return Il(l.children, u, a, e);
        case k:
          (s = 8), (u |= 24);
          break;
        case Y:
          return (
            (t = be(12, l, e, u | 2)), (t.elementType = Y), (t.lanes = a), t
          );
        case lt:
          return (t = be(13, l, e, u)), (t.elementType = lt), (t.lanes = a), t;
        case Mt:
          return (t = be(19, l, e, u)), (t.elementType = Mt), (t.lanes = a), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case nt:
              case rt:
                s = 10;
                break t;
              case W:
                s = 9;
                break t;
              case zt:
                s = 11;
                break t;
              case qt:
                s = 14;
                break t;
              case Bt:
                (s = 16), (n = null);
                break t;
            }
          (s = 29),
            (l = Error(o(130, t === null ? "null" : typeof t, ""))),
            (n = null);
      }
    return (
      (e = be(s, l, e, u)), (e.elementType = t), (e.type = n), (e.lanes = a), e
    );
  }
  function Il(t, e, l, n) {
    return (t = be(7, t, n, e)), (t.lanes = l), t;
  }
  function Sc(t, e, l) {
    return (t = be(6, t, null, e)), (t.lanes = l), t;
  }
  function Ec(t, e, l) {
    return (
      (e = be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var qn = [],
    Ln = 0,
    Ma = null,
    wa = 0,
    we = [],
    Ne = 0,
    Pl = null,
    fl = 1,
    rl = "";
  function tn(t, e) {
    (qn[Ln++] = wa), (qn[Ln++] = Ma), (Ma = t), (wa = e);
  }
  function bo(t, e, l) {
    (we[Ne++] = fl), (we[Ne++] = rl), (we[Ne++] = Pl), (Pl = t);
    var n = fl;
    t = rl;
    var u = 32 - he(n) - 1;
    (n &= ~(1 << u)), (l += 1);
    var a = 32 - he(e) + u;
    if (30 < a) {
      var s = u - (u % 5);
      (a = (n & ((1 << s) - 1)).toString(32)),
        (n >>= s),
        (u -= s),
        (fl = (1 << (32 - he(e) + u)) | (l << u) | n),
        (rl = a + t);
    } else (fl = (1 << a) | (l << u) | n), (rl = t);
  }
  function bc(t) {
    t.return !== null && (tn(t, 1), bo(t, 1, 0));
  }
  function Tc(t) {
    for (; t === Ma; )
      (Ma = qn[--Ln]), (qn[Ln] = null), (wa = qn[--Ln]), (qn[Ln] = null);
    for (; t === Pl; )
      (Pl = we[--Ne]),
        (we[Ne] = null),
        (rl = we[--Ne]),
        (we[Ne] = null),
        (fl = we[--Ne]),
        (we[Ne] = null);
  }
  var de = null,
    jt = null,
    St = !1,
    en = null,
    Ke = !1,
    Ac = Error(o(519));
  function ln(t) {
    var e = Error(o(418, ""));
    throw (xu(ze(e, t)), Ac);
  }
  function To(t) {
    var e = t.stateNode,
      l = t.type,
      n = t.memoizedProps;
    switch (((e[ce] = t), (e[ye] = n), l)) {
      case "dialog":
        yt("cancel", e), yt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < $u.length; l++) yt($u[l], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", e), yt("load", e);
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        yt("invalid", e),
          Hr(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ),
          Sa(e);
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        yt("invalid", e), Lr(e, n.value, n.defaultValue, n.children), Sa(e);
    }
    (l = n.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      n.suppressHydrationWarning === !0 ||
      jh(e.textContent, l)
        ? (n.popover != null && (yt("beforetoggle", e), yt("toggle", e)),
          n.onScroll != null && yt("scroll", e),
          n.onScrollEnd != null && yt("scrollend", e),
          n.onClick != null && (e.onclick = di),
          (e = !0))
        : (e = !1),
      e || ln(t);
  }
  function Ao(t) {
    for (de = t.return; de; )
      switch (de.tag) {
        case 5:
        case 13:
          Ke = !1;
          return;
        case 27:
        case 3:
          Ke = !0;
          return;
        default:
          de = de.return;
      }
  }
  function Ru(t) {
    if (t !== de) return !1;
    if (!St) return Ao(t), (St = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || Yf(t.type, t.memoizedProps))),
        (l = !l)),
      l && jt && ln(t),
      Ao(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                jt = Ze(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        jt = null;
      }
    } else
      e === 27
        ? ((e = jt), Yl(t.type) ? ((t = Zf), (Zf = null), (jt = t)) : (jt = e))
        : (jt = de ? Ze(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ou() {
    (jt = de = null), (St = !1);
  }
  function Ro() {
    var t = en;
    return (
      t !== null &&
        (ve === null ? (ve = t) : ve.push.apply(ve, t), (en = null)),
      t
    );
  }
  function xu(t) {
    en === null ? (en = [t]) : en.push(t);
  }
  var Rc = G(null),
    nn = null,
    ol = null;
  function Ol(t, e, l) {
    Z(Rc, e._currentValue), (e._currentValue = l);
  }
  function sl(t) {
    (t._currentValue = Rc.current), K(Rc);
  }
  function Oc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
          : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function xc(t, e, l, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var a = u.dependencies;
      if (a !== null) {
        var s = u.child;
        a = a.firstContext;
        t: for (; a !== null; ) {
          var d = a;
          a = u;
          for (var E = 0; E < e.length; E++)
            if (d.context === e[E]) {
              (a.lanes |= l),
                (d = a.alternate),
                d !== null && (d.lanes |= l),
                Oc(a.return, l, t),
                n || (s = null);
              break t;
            }
          a = d.next;
        }
      } else if (u.tag === 18) {
        if (((s = u.return), s === null)) throw Error(o(341));
        (s.lanes |= l),
          (a = s.alternate),
          a !== null && (a.lanes |= l),
          Oc(s, l, t),
          (s = null);
      } else s = u.child;
      if (s !== null) s.return = u;
      else
        for (s = u; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (((u = s.sibling), u !== null)) {
            (u.return = s.return), (s = u);
            break;
          }
          s = s.return;
        }
      u = s;
    }
  }
  function _u(t, e, l, n) {
    t = null;
    for (var u = e, a = !1; u !== null; ) {
      if (!a) {
        if ((u.flags & 524288) !== 0) a = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var s = u.alternate;
        if (s === null) throw Error(o(387));
        if (((s = s.memoizedProps), s !== null)) {
          var d = u.type;
          Ee(u.pendingProps.value, s.value) ||
            (t !== null ? t.push(d) : (t = [d]));
        }
      } else if (u === ae.current) {
        if (((s = u.alternate), s === null)) throw Error(o(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(la) : (t = [la]));
      }
      u = u.return;
    }
    t !== null && xc(e, t, l, n), (e.flags |= 262144);
  }
  function Na(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ee(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function un(t) {
    (nn = t),
      (ol = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function fe(t) {
    return Oo(nn, t);
  }
  function Ca(t, e) {
    return nn === null && un(t), Oo(t, e);
  }
  function Oo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), ol === null)) {
      if (t === null) throw Error(o(308));
      (ol = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else ol = ol.next = e;
    return l;
  }
  var yy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  t.push(n);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    my = i.unstable_scheduleCallback,
    py = i.unstable_NormalPriority,
    Kt = {
      $$typeof: rt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _c() {
    return { controller: new yy(), data: new Map(), refCount: 0 };
  }
  function Uu(t) {
    t.refCount--,
      t.refCount === 0 &&
        my(py, function () {
          t.controller.abort();
        });
  }
  var Bu = null,
    Uc = 0,
    jn = 0,
    Yn = null;
  function gy(t, e) {
    if (Bu === null) {
      var l = (Bu = []);
      (Uc = 0),
        (jn = zf()),
        (Yn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        });
    }
    return Uc++, e.then(xo, xo), e;
  }
  function xo() {
    if (--Uc === 0 && Bu !== null) {
      Yn !== null && (Yn.status = "fulfilled");
      var t = Bu;
      (Bu = null), (jn = 0), (Yn = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function vy(t, e) {
    var l = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          (n.status = "fulfilled"), (n.value = e);
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (n.status = "rejected", n.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        }
      ),
      n
    );
  }
  var _o = N.S;
  N.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      gy(t, e),
      _o !== null && _o(t, e);
  };
  var an = G(null);
  function Bc() {
    var t = an.current;
    return t !== null ? t : Dt.pooledCache;
  }
  function Ha(t, e) {
    e === null ? Z(an, an.current) : Z(an, e.pool);
  }
  function Uo() {
    var t = Bc();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var Du = Error(o(460)),
    Bo = Error(o(474)),
    qa = Error(o(542)),
    Dc = { then: function () {} };
  function Do(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function La() {}
  function zo(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(La, La), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), wo(t), t);
      default:
        if (typeof e.status == "string") e.then(La, La);
        else {
          if (((t = Dt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (n) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = n);
                }
              },
              function (n) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = n);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), wo(t), t);
        }
        throw ((zu = e), Du);
    }
  }
  var zu = null;
  function Mo() {
    if (zu === null) throw Error(o(459));
    var t = zu;
    return (zu = null), t;
  }
  function wo(t) {
    if (t === Du || t === qa) throw Error(o(483));
  }
  var xl = !1;
  function zc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function _l(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (bt & 2) !== 0)) {
      var u = n.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (n.pending = e),
        (e = Da(t)),
        So(t, null, l),
        e
      );
    }
    return Ba(t, n, e, l), Da(t);
  }
  function Mu(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var n = e.lanes;
      (n &= t.pendingLanes), (l |= n), (e.lanes = l), Or(t, l);
    }
  }
  function wc(t, e) {
    var l = t.updateQueue,
      n = t.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var u = null,
        a = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          a === null ? (u = a = s) : (a = a.next = s), (l = l.next);
        } while (l !== null);
        a === null ? (u = a = e) : (a = a.next = e);
      } else u = a = e;
      (l = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: a,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var Nc = !1;
  function wu() {
    if (Nc) {
      var t = Yn;
      if (t !== null) throw t;
    }
  }
  function Nu(t, e, l, n) {
    Nc = !1;
    var u = t.updateQueue;
    xl = !1;
    var a = u.firstBaseUpdate,
      s = u.lastBaseUpdate,
      d = u.shared.pending;
    if (d !== null) {
      u.shared.pending = null;
      var E = d,
        _ = E.next;
      (E.next = null), s === null ? (a = _) : (s.next = _), (s = E);
      var C = t.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (d = C.lastBaseUpdate),
        d !== s &&
          (d === null ? (C.firstBaseUpdate = _) : (d.next = _),
          (C.lastBaseUpdate = E)));
    }
    if (a !== null) {
      var L = u.baseState;
      (s = 0), (C = _ = E = null), (d = a);
      do {
        var U = d.lane & -536870913,
          z = U !== d.lane;
        if (z ? (pt & U) === U : (n & U) === U) {
          U !== 0 && U === jn && (Nc = !0),
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var ut = t,
              tt = d;
            U = e;
            var Ot = l;
            switch (tt.tag) {
              case 1:
                if (((ut = tt.payload), typeof ut == "function")) {
                  L = ut.call(Ot, L, U);
                  break t;
                }
                L = ut;
                break t;
              case 3:
                ut.flags = (ut.flags & -65537) | 128;
              case 0:
                if (
                  ((ut = tt.payload),
                  (U = typeof ut == "function" ? ut.call(Ot, L, U) : ut),
                  U == null)
                )
                  break t;
                L = p({}, L, U);
                break t;
              case 2:
                xl = !0;
            }
          }
          (U = d.callback),
            U !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = u.callbacks),
              z === null ? (u.callbacks = [U]) : z.push(U));
        } else
          (z = {
            lane: U,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            C === null ? ((_ = C = z), (E = L)) : (C = C.next = z),
            (s |= U);
        if (((d = d.next), d === null)) {
          if (((d = u.shared.pending), d === null)) break;
          (z = d),
            (d = z.next),
            (z.next = null),
            (u.lastBaseUpdate = z),
            (u.shared.pending = null);
        }
      } while (!0);
      C === null && (E = L),
        (u.baseState = E),
        (u.firstBaseUpdate = _),
        (u.lastBaseUpdate = C),
        a === null && (u.shared.lanes = 0),
        (Hl |= s),
        (t.lanes = s),
        (t.memoizedState = L);
    }
  }
  function No(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Co(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) No(l[t], e);
  }
  var Gn = G(null),
    ja = G(0);
  function Ho(t, e) {
    (t = vl), Z(ja, t), Z(Gn, e), (vl = t | e.baseLanes);
  }
  function Cc() {
    Z(ja, vl), Z(Gn, Gn.current);
  }
  function Hc() {
    (vl = ja.current), K(Gn), K(ja);
  }
  var Bl = 0,
    st = null,
    At = null,
    Zt = null,
    Ya = !1,
    Xn = !1,
    cn = !1,
    Ga = 0,
    Cu = 0,
    Qn = null,
    Sy = 0;
  function Gt() {
    throw Error(o(321));
  }
  function qc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ee(t[l], e[l])) return !1;
    return !0;
  }
  function Lc(t, e, l, n, u, a) {
    return (
      (Bl = a),
      (st = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Ss : Es),
      (cn = !1),
      (a = l(n, u)),
      (cn = !1),
      Xn && (a = Lo(e, l, n, u)),
      qo(t),
      a
    );
  }
  function qo(t) {
    N.H = Ja;
    var e = At !== null && At.next !== null;
    if (((Bl = 0), (Zt = At = st = null), (Ya = !1), (Cu = 0), (Qn = null), e))
      throw Error(o(300));
    t === null ||
      Wt ||
      ((t = t.dependencies), t !== null && Na(t) && (Wt = !0));
  }
  function Lo(t, e, l, n) {
    st = t;
    var u = 0;
    do {
      if ((Xn && (Qn = null), (Cu = 0), (Xn = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (Zt = At = null), t.updateQueue != null)) {
        var a = t.updateQueue;
        (a.lastEffect = null),
          (a.events = null),
          (a.stores = null),
          a.memoCache != null && (a.memoCache.index = 0);
      }
      (N.H = xy), (a = e(l, n));
    } while (Xn);
    return a;
  }
  function Ey() {
    var t = N.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Hu(e) : e),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (st.flags |= 1024),
      e
    );
  }
  function jc() {
    var t = Ga !== 0;
    return (Ga = 0), t;
  }
  function Yc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function Gc(t) {
    if (Ya) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Ya = !1;
    }
    (Bl = 0), (Zt = At = st = null), (Xn = !1), (Cu = Ga = 0), (Qn = null);
  }
  function pe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Zt === null ? (st.memoizedState = Zt = t) : (Zt = Zt.next = t), Zt;
  }
  function Vt() {
    if (At === null) {
      var t = st.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = Zt === null ? st.memoizedState : Zt.next;
    if (e !== null) (Zt = e), (At = t);
    else {
      if (t === null)
        throw st.alternate === null ? Error(o(467)) : Error(o(310));
      (At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        Zt === null ? (st.memoizedState = Zt = t) : (Zt = Zt.next = t);
    }
    return Zt;
  }
  function Xc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hu(t) {
    var e = Cu;
    return (
      (Cu += 1),
      Qn === null && (Qn = []),
      (t = zo(Qn, t, e)),
      (e = st),
      (Zt === null ? e.memoizedState : Zt.next) === null &&
        ((e = e.alternate),
        (N.H = e === null || e.memoizedState === null ? Ss : Es)),
      t
    );
  }
  function Xa(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Hu(t);
      if (t.$$typeof === rt) return fe(t);
    }
    throw Error(o(438, String(t)));
  }
  function Qc(t) {
    var e = null,
      l = st.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var n = st.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (e = {
              data: n.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Xc()), (st.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = el;
    return e.index++, l;
  }
  function hl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Qa(t) {
    var e = Vt();
    return Zc(e, At, t);
  }
  function Zc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = l;
    var u = t.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (u !== null) {
        var s = u.next;
        (u.next = a.next), (a.next = s);
      }
      (e.baseQueue = u = a), (n.pending = null);
    }
    if (((a = t.baseState), u === null)) t.memoizedState = a;
    else {
      e = u.next;
      var d = (s = null),
        E = null,
        _ = e,
        C = !1;
      do {
        var L = _.lane & -536870913;
        if (L !== _.lane ? (pt & L) === L : (Bl & L) === L) {
          var U = _.revertLane;
          if (U === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              L === jn && (C = !0);
          else if ((Bl & U) === U) {
            (_ = _.next), U === jn && (C = !0);
            continue;
          } else
            (L = {
              lane: 0,
              revertLane: _.revertLane,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              E === null ? ((d = E = L), (s = a)) : (E = E.next = L),
              (st.lanes |= U),
              (Hl |= U);
          (L = _.action),
            cn && l(a, L),
            (a = _.hasEagerState ? _.eagerState : l(a, L));
        } else
          (U = {
            lane: L,
            revertLane: _.revertLane,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            E === null ? ((d = E = U), (s = a)) : (E = E.next = U),
            (st.lanes |= L),
            (Hl |= L);
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (
        (E === null ? (s = a) : (E.next = d),
        !Ee(a, t.memoizedState) && ((Wt = !0), C && ((l = Yn), l !== null)))
      )
        throw l;
      (t.memoizedState = a),
        (t.baseState = s),
        (t.baseQueue = E),
        (n.lastRenderedState = a);
    }
    return u === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Vc(t) {
    var e = Vt(),
      l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch,
      u = l.pending,
      a = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var s = (u = u.next);
      do (a = t(a, s.action)), (s = s.next);
      while (s !== u);
      Ee(a, e.memoizedState) || (Wt = !0),
        (e.memoizedState = a),
        e.baseQueue === null && (e.baseState = a),
        (l.lastRenderedState = a);
    }
    return [a, n];
  }
  function jo(t, e, l) {
    var n = st,
      u = Vt(),
      a = St;
    if (a) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = e();
    var s = !Ee((At || u).memoizedState, l);
    s && ((u.memoizedState = l), (Wt = !0)), (u = u.queue);
    var d = Xo.bind(null, n, u, t);
    if (
      (qu(2048, 8, d, [t]),
      u.getSnapshot !== e || s || (Zt !== null && Zt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Zn(9, Za(), Go.bind(null, n, u, l, e), null),
        Dt === null)
      )
        throw Error(o(349));
      a || (Bl & 124) !== 0 || Yo(n, e, l);
    }
    return l;
  }
  function Yo(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = st.updateQueue),
      e === null
        ? ((e = Xc()), (st.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function Go(t, e, l, n) {
    (e.value = l), (e.getSnapshot = n), Qo(e) && Zo(t);
  }
  function Xo(t, e, l) {
    return l(function () {
      Qo(e) && Zo(t);
    });
  }
  function Qo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ee(t, l);
    } catch {
      return !0;
    }
  }
  function Zo(t) {
    var e = Cn(t, 2);
    e !== null && xe(e, t, 2);
  }
  function Kc(t) {
    var e = pe();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), cn)) {
        te(!0);
        try {
          l();
        } finally {
          te(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hl,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Vo(t, e, l, n) {
    return (t.baseState = l), Zc(t, At, typeof n == "function" ? n : hl);
  }
  function by(t, e, l, n, u) {
    if (Ka(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var a = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (s) {
          a.listeners.push(s);
        },
      };
      N.T !== null ? l(!0) : (a.isTransition = !1),
        n(a),
        (l = e.pending),
        l === null
          ? ((a.next = e.pending = a), Ko(e, a))
          : ((a.next = l.next), (e.pending = l.next = a));
    }
  }
  function Ko(t, e) {
    var l = e.action,
      n = e.payload,
      u = t.state;
    if (e.isTransition) {
      var a = N.T,
        s = {};
      N.T = s;
      try {
        var d = l(u, n),
          E = N.S;
        E !== null && E(s, d), Jo(t, e, d);
      } catch (_) {
        Jc(t, e, _);
      } finally {
        N.T = a;
      }
    } else
      try {
        (a = l(u, n)), Jo(t, e, a);
      } catch (_) {
        Jc(t, e, _);
      }
  }
  function Jo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (n) {
            Fo(t, e, n);
          },
          function (n) {
            return Jc(t, e, n);
          }
        )
      : Fo(t, e, l);
  }
  function Fo(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      ko(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Ko(t, l)));
  }
  function Jc(t, e, l) {
    var n = t.pending;
    if (((t.pending = null), n !== null)) {
      n = n.next;
      do (e.status = "rejected"), (e.reason = l), ko(e), (e = e.next);
      while (e !== n);
    }
    t.action = null;
  }
  function ko(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function $o(t, e) {
    return e;
  }
  function Wo(t, e) {
    if (St) {
      var l = Dt.formState;
      if (l !== null) {
        t: {
          var n = st;
          if (St) {
            if (jt) {
              e: {
                for (var u = jt, a = Ke; u.nodeType !== 8; ) {
                  if (!a) {
                    u = null;
                    break e;
                  }
                  if (((u = Ze(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (a = u.data), (u = a === "F!" || a === "F" ? u : null);
              }
              if (u) {
                (jt = Ze(u.nextSibling)), (n = u.data === "F!");
                break t;
              }
            }
            ln(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return (
      (l = pe()),
      (l.memoizedState = l.baseState = e),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $o,
        lastRenderedState: e,
      }),
      (l.queue = n),
      (l = ps.bind(null, st, n)),
      (n.dispatch = l),
      (n = Kc(!1)),
      (a = Ic.bind(null, st, !1, n.queue)),
      (n = pe()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (n.queue = u),
      (l = by.bind(null, st, u, a, l)),
      (u.dispatch = l),
      (n.memoizedState = t),
      [e, l, !1]
    );
  }
  function Io(t) {
    var e = Vt();
    return Po(e, At, t);
  }
  function Po(t, e, l) {
    if (
      ((e = Zc(t, e, $o)[0]),
      (t = Qa(hl)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var n = Hu(e);
      } catch (s) {
        throw s === Du ? qa : s;
      }
    else n = e;
    e = Vt();
    var u = e.queue,
      a = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((st.flags |= 2048), Zn(9, Za(), Ty.bind(null, u, l), null)),
      [n, a, t]
    );
  }
  function Ty(t, e) {
    t.action = e;
  }
  function ts(t) {
    var e = Vt(),
      l = At;
    if (l !== null) return Po(e, l, t);
    Vt(), (e = e.memoizedState), (l = Vt());
    var n = l.queue.dispatch;
    return (l.memoizedState = t), [e, n, !1];
  }
  function Zn(t, e, l, n) {
    return (
      (t = { tag: t, create: l, deps: n, inst: e, next: null }),
      (e = st.updateQueue),
      e === null && ((e = Xc()), (st.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((n = l.next), (l.next = t), (t.next = n), (e.lastEffect = t)),
      t
    );
  }
  function Za() {
    return { destroy: void 0, resource: void 0 };
  }
  function es() {
    return Vt().memoizedState;
  }
  function Va(t, e, l, n) {
    var u = pe();
    (n = n === void 0 ? null : n),
      (st.flags |= t),
      (u.memoizedState = Zn(1 | e, Za(), l, n));
  }
  function qu(t, e, l, n) {
    var u = Vt();
    n = n === void 0 ? null : n;
    var a = u.memoizedState.inst;
    At !== null && n !== null && qc(n, At.memoizedState.deps)
      ? (u.memoizedState = Zn(e, a, l, n))
      : ((st.flags |= t), (u.memoizedState = Zn(1 | e, a, l, n)));
  }
  function ls(t, e) {
    Va(8390656, 8, t, e);
  }
  function ns(t, e) {
    qu(2048, 8, t, e);
  }
  function us(t, e) {
    return qu(4, 2, t, e);
  }
  function as(t, e) {
    return qu(4, 4, t, e);
  }
  function is(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function cs(t, e, l) {
    (l = l != null ? l.concat([t]) : null), qu(4, 4, is.bind(null, e, t), l);
  }
  function Fc() {}
  function fs(t, e) {
    var l = Vt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && qc(e, n[1]) ? n[0] : ((l.memoizedState = [t, e]), t);
  }
  function rs(t, e) {
    var l = Vt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && qc(e, n[1])) return n[0];
    if (((n = t()), cn)) {
      te(!0);
      try {
        t();
      } finally {
        te(!1);
      }
    }
    return (l.memoizedState = [n, e]), n;
  }
  function kc(t, e, l) {
    return l === void 0 || (Bl & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = hh()), (st.lanes |= t), (Hl |= t), l);
  }
  function os(t, e, l, n) {
    return Ee(l, e)
      ? l
      : Gn.current !== null
      ? ((t = kc(t, l, n)), Ee(t, e) || (Wt = !0), t)
      : (Bl & 42) === 0
      ? ((Wt = !0), (t.memoizedState = l))
      : ((t = hh()), (st.lanes |= t), (Hl |= t), e);
  }
  function ss(t, e, l, n, u) {
    var a = Q.p;
    Q.p = a !== 0 && 8 > a ? a : 8;
    var s = N.T,
      d = {};
    (N.T = d), Ic(t, !1, e, l);
    try {
      var E = u(),
        _ = N.S;
      if (
        (_ !== null && _(d, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var C = vy(E, n);
        Lu(t, e, C, Oe(t));
      } else Lu(t, e, n, Oe(t));
    } catch (L) {
      Lu(t, e, { then: function () {}, status: "rejected", reason: L }, Oe());
    } finally {
      (Q.p = a), (N.T = s);
    }
  }
  function Ay() {}
  function $c(t, e, l, n) {
    if (t.tag !== 5) throw Error(o(476));
    var u = hs(t).queue;
    ss(
      t,
      u,
      e,
      P,
      l === null
        ? Ay
        : function () {
            return ds(t), l(n);
          }
    );
  }
  function hs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hl,
        lastRenderedState: P,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ds(t) {
    var e = hs(t).next.queue;
    Lu(t, e, {}, Oe());
  }
  function Wc() {
    return fe(la);
  }
  function ys() {
    return Vt().memoizedState;
  }
  function ms() {
    return Vt().memoizedState;
  }
  function Ry(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Oe();
          t = _l(l);
          var n = Ul(e, t, l);
          n !== null && (xe(n, e, l), Mu(n, e, l)),
            (e = { cache: _c() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Oy(t, e, l) {
    var n = Oe();
    (l = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ka(t)
        ? gs(e, l)
        : ((l = gc(t, e, l, n)), l !== null && (xe(l, t, n), vs(l, e, n)));
  }
  function ps(t, e, l) {
    var n = Oe();
    Lu(t, e, l, n);
  }
  function Lu(t, e, l, n) {
    var u = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ka(t)) gs(e, u);
    else {
      var a = t.alternate;
      if (
        t.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = e.lastRenderedReducer), a !== null)
      )
        try {
          var s = e.lastRenderedState,
            d = a(s, l);
          if (((u.hasEagerState = !0), (u.eagerState = d), Ee(d, s)))
            return Ba(t, e, u, 0), Dt === null && Ua(), !1;
        } catch {
        } finally {
        }
      if (((l = gc(t, e, u, n)), l !== null))
        return xe(l, t, n), vs(l, e, n), !0;
    }
    return !1;
  }
  function Ic(t, e, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: zf(),
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ka(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = gc(t, l, n, 2)), e !== null && xe(e, t, 2);
  }
  function Ka(t) {
    var e = t.alternate;
    return t === st || (e !== null && e === st);
  }
  function gs(t, e) {
    Xn = Ya = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function vs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      (n &= t.pendingLanes), (l |= n), (e.lanes = l), Or(t, l);
    }
  }
  var Ja = {
      readContext: fe,
      use: Xa,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt,
    },
    Ss = {
      readContext: fe,
      use: Xa,
      useCallback: function (t, e) {
        return (pe().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: fe,
      useEffect: ls,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          Va(4194308, 4, is.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return Va(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Va(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = pe();
        e = e === void 0 ? null : e;
        var n = t();
        if (cn) {
          te(!0);
          try {
            t();
          } finally {
            te(!1);
          }
        }
        return (l.memoizedState = [n, e]), n;
      },
      useReducer: function (t, e, l) {
        var n = pe();
        if (l !== void 0) {
          var u = l(e);
          if (cn) {
            te(!0);
            try {
              l(e);
            } finally {
              te(!1);
            }
          }
        } else u = e;
        return (
          (n.memoizedState = n.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (n.queue = t),
          (t = t.dispatch = Oy.bind(null, st, t)),
          [n.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = pe();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Kc(t);
        var e = t.queue,
          l = ps.bind(null, st, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Fc,
      useDeferredValue: function (t, e) {
        var l = pe();
        return kc(l, t, e);
      },
      useTransition: function () {
        var t = Kc(!1);
        return (
          (t = ss.bind(null, st, t.queue, !0, !1)),
          (pe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var n = st,
          u = pe();
        if (St) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = e()), Dt === null)) throw Error(o(349));
          (pt & 124) !== 0 || Yo(n, e, l);
        }
        u.memoizedState = l;
        var a = { value: l, getSnapshot: e };
        return (
          (u.queue = a),
          ls(Xo.bind(null, n, a, t), [t]),
          (n.flags |= 2048),
          Zn(9, Za(), Go.bind(null, n, a, l, e), null),
          l
        );
      },
      useId: function () {
        var t = pe(),
          e = Dt.identifierPrefix;
        if (St) {
          var l = rl,
            n = fl;
          (l = (n & ~(1 << (32 - he(n) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = Ga++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = Sy++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Wc,
      useFormState: Wo,
      useActionState: Wo,
      useOptimistic: function (t) {
        var e = pe();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Ic.bind(null, st, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Qc,
      useCacheRefresh: function () {
        return (pe().memoizedState = Ry.bind(null, st));
      },
    },
    Es = {
      readContext: fe,
      use: Xa,
      useCallback: fs,
      useContext: fe,
      useEffect: ns,
      useImperativeHandle: cs,
      useInsertionEffect: us,
      useLayoutEffect: as,
      useMemo: rs,
      useReducer: Qa,
      useRef: es,
      useState: function () {
        return Qa(hl);
      },
      useDebugValue: Fc,
      useDeferredValue: function (t, e) {
        var l = Vt();
        return os(l, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Qa(hl)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : Hu(t), e];
      },
      useSyncExternalStore: jo,
      useId: ys,
      useHostTransitionStatus: Wc,
      useFormState: Io,
      useActionState: Io,
      useOptimistic: function (t, e) {
        var l = Vt();
        return Vo(l, At, t, e);
      },
      useMemoCache: Qc,
      useCacheRefresh: ms,
    },
    xy = {
      readContext: fe,
      use: Xa,
      useCallback: fs,
      useContext: fe,
      useEffect: ns,
      useImperativeHandle: cs,
      useInsertionEffect: us,
      useLayoutEffect: as,
      useMemo: rs,
      useReducer: Vc,
      useRef: es,
      useState: function () {
        return Vc(hl);
      },
      useDebugValue: Fc,
      useDeferredValue: function (t, e) {
        var l = Vt();
        return At === null ? kc(l, t, e) : os(l, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Vc(hl)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : Hu(t), e];
      },
      useSyncExternalStore: jo,
      useId: ys,
      useHostTransitionStatus: Wc,
      useFormState: ts,
      useActionState: ts,
      useOptimistic: function (t, e) {
        var l = Vt();
        return At !== null
          ? Vo(l, At, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: Qc,
      useCacheRefresh: ms,
    },
    Vn = null,
    ju = 0;
  function Fa(t) {
    var e = ju;
    return (ju += 1), Vn === null && (Vn = []), zo(Vn, t, e);
  }
  function Yu(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function ka(t, e) {
    throw e.$$typeof === j
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function bs(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Ts(t) {
    function e(O, A) {
      if (t) {
        var x = O.deletions;
        x === null ? ((O.deletions = [A]), (O.flags |= 16)) : x.push(A);
      }
    }
    function l(O, A) {
      if (!t) return null;
      for (; A !== null; ) e(O, A), (A = A.sibling);
      return null;
    }
    function n(O) {
      for (var A = new Map(); O !== null; )
        O.key !== null ? A.set(O.key, O) : A.set(O.index, O), (O = O.sibling);
      return A;
    }
    function u(O, A) {
      return (O = cl(O, A)), (O.index = 0), (O.sibling = null), O;
    }
    function a(O, A, x) {
      return (
        (O.index = x),
        t
          ? ((x = O.alternate),
            x !== null
              ? ((x = x.index), x < A ? ((O.flags |= 67108866), A) : x)
              : ((O.flags |= 67108866), A))
          : ((O.flags |= 1048576), A)
      );
    }
    function s(O) {
      return t && O.alternate === null && (O.flags |= 67108866), O;
    }
    function d(O, A, x, q) {
      return A === null || A.tag !== 6
        ? ((A = Sc(x, O.mode, q)), (A.return = O), A)
        : ((A = u(A, x)), (A.return = O), A);
    }
    function E(O, A, x, q) {
      var F = x.type;
      return F === X
        ? C(O, A, x.props.children, q, x.key)
        : A !== null &&
          (A.elementType === F ||
            (typeof F == "object" &&
              F !== null &&
              F.$$typeof === Bt &&
              bs(F) === A.type))
        ? ((A = u(A, x.props)), Yu(A, x), (A.return = O), A)
        : ((A = za(x.type, x.key, x.props, null, O.mode, q)),
          Yu(A, x),
          (A.return = O),
          A);
    }
    function _(O, A, x, q) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== x.containerInfo ||
        A.stateNode.implementation !== x.implementation
        ? ((A = Ec(x, O.mode, q)), (A.return = O), A)
        : ((A = u(A, x.children || [])), (A.return = O), A);
    }
    function C(O, A, x, q, F) {
      return A === null || A.tag !== 7
        ? ((A = Il(x, O.mode, q, F)), (A.return = O), A)
        : ((A = u(A, x)), (A.return = O), A);
    }
    function L(O, A, x) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = Sc("" + A, O.mode, x)), (A.return = O), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case J:
            return (
              (x = za(A.type, A.key, A.props, null, O.mode, x)),
              Yu(x, A),
              (x.return = O),
              x
            );
          case I:
            return (A = Ec(A, O.mode, x)), (A.return = O), A;
          case Bt:
            var q = A._init;
            return (A = q(A._payload)), L(O, A, x);
        }
        if (kt(A) || Ft(A))
          return (A = Il(A, O.mode, x, null)), (A.return = O), A;
        if (typeof A.then == "function") return L(O, Fa(A), x);
        if (A.$$typeof === rt) return L(O, Ca(O, A), x);
        ka(O, A);
      }
      return null;
    }
    function U(O, A, x, q) {
      var F = A !== null ? A.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return F !== null ? null : d(O, A, "" + x, q);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case J:
            return x.key === F ? E(O, A, x, q) : null;
          case I:
            return x.key === F ? _(O, A, x, q) : null;
          case Bt:
            return (F = x._init), (x = F(x._payload)), U(O, A, x, q);
        }
        if (kt(x) || Ft(x)) return F !== null ? null : C(O, A, x, q, null);
        if (typeof x.then == "function") return U(O, A, Fa(x), q);
        if (x.$$typeof === rt) return U(O, A, Ca(O, x), q);
        ka(O, x);
      }
      return null;
    }
    function z(O, A, x, q, F) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return (O = O.get(x) || null), d(A, O, "" + q, F);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case J:
            return (
              (O = O.get(q.key === null ? x : q.key) || null), E(A, O, q, F)
            );
          case I:
            return (
              (O = O.get(q.key === null ? x : q.key) || null), _(A, O, q, F)
            );
          case Bt:
            var ht = q._init;
            return (q = ht(q._payload)), z(O, A, x, q, F);
        }
        if (kt(q) || Ft(q)) return (O = O.get(x) || null), C(A, O, q, F, null);
        if (typeof q.then == "function") return z(O, A, x, Fa(q), F);
        if (q.$$typeof === rt) return z(O, A, x, Ca(A, q), F);
        ka(A, q);
      }
      return null;
    }
    function ut(O, A, x, q) {
      for (
        var F = null, ht = null, $ = A, et = (A = 0), Pt = null;
        $ !== null && et < x.length;
        et++
      ) {
        $.index > et ? ((Pt = $), ($ = null)) : (Pt = $.sibling);
        var gt = U(O, $, x[et], q);
        if (gt === null) {
          $ === null && ($ = Pt);
          break;
        }
        t && $ && gt.alternate === null && e(O, $),
          (A = a(gt, A, et)),
          ht === null ? (F = gt) : (ht.sibling = gt),
          (ht = gt),
          ($ = Pt);
      }
      if (et === x.length) return l(O, $), St && tn(O, et), F;
      if ($ === null) {
        for (; et < x.length; et++)
          ($ = L(O, x[et], q)),
            $ !== null &&
              ((A = a($, A, et)),
              ht === null ? (F = $) : (ht.sibling = $),
              (ht = $));
        return St && tn(O, et), F;
      }
      for ($ = n($); et < x.length; et++)
        (Pt = z($, O, et, x[et], q)),
          Pt !== null &&
            (t &&
              Pt.alternate !== null &&
              $.delete(Pt.key === null ? et : Pt.key),
            (A = a(Pt, A, et)),
            ht === null ? (F = Pt) : (ht.sibling = Pt),
            (ht = Pt));
      return (
        t &&
          $.forEach(function (Vl) {
            return e(O, Vl);
          }),
        St && tn(O, et),
        F
      );
    }
    function tt(O, A, x, q) {
      if (x == null) throw Error(o(151));
      for (
        var F = null, ht = null, $ = A, et = (A = 0), Pt = null, gt = x.next();
        $ !== null && !gt.done;
        et++, gt = x.next()
      ) {
        $.index > et ? ((Pt = $), ($ = null)) : (Pt = $.sibling);
        var Vl = U(O, $, gt.value, q);
        if (Vl === null) {
          $ === null && ($ = Pt);
          break;
        }
        t && $ && Vl.alternate === null && e(O, $),
          (A = a(Vl, A, et)),
          ht === null ? (F = Vl) : (ht.sibling = Vl),
          (ht = Vl),
          ($ = Pt);
      }
      if (gt.done) return l(O, $), St && tn(O, et), F;
      if ($ === null) {
        for (; !gt.done; et++, gt = x.next())
          (gt = L(O, gt.value, q)),
            gt !== null &&
              ((A = a(gt, A, et)),
              ht === null ? (F = gt) : (ht.sibling = gt),
              (ht = gt));
        return St && tn(O, et), F;
      }
      for ($ = n($); !gt.done; et++, gt = x.next())
        (gt = z($, O, et, gt.value, q)),
          gt !== null &&
            (t &&
              gt.alternate !== null &&
              $.delete(gt.key === null ? et : gt.key),
            (A = a(gt, A, et)),
            ht === null ? (F = gt) : (ht.sibling = gt),
            (ht = gt));
      return (
        t &&
          $.forEach(function (_m) {
            return e(O, _m);
          }),
        St && tn(O, et),
        F
      );
    }
    function Ot(O, A, x, q) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === X &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case J:
            t: {
              for (var F = x.key; A !== null; ) {
                if (A.key === F) {
                  if (((F = x.type), F === X)) {
                    if (A.tag === 7) {
                      l(O, A.sibling),
                        (q = u(A, x.props.children)),
                        (q.return = O),
                        (O = q);
                      break t;
                    }
                  } else if (
                    A.elementType === F ||
                    (typeof F == "object" &&
                      F !== null &&
                      F.$$typeof === Bt &&
                      bs(F) === A.type)
                  ) {
                    l(O, A.sibling),
                      (q = u(A, x.props)),
                      Yu(q, x),
                      (q.return = O),
                      (O = q);
                    break t;
                  }
                  l(O, A);
                  break;
                } else e(O, A);
                A = A.sibling;
              }
              x.type === X
                ? ((q = Il(x.props.children, O.mode, q, x.key)),
                  (q.return = O),
                  (O = q))
                : ((q = za(x.type, x.key, x.props, null, O.mode, q)),
                  Yu(q, x),
                  (q.return = O),
                  (O = q));
            }
            return s(O);
          case I:
            t: {
              for (F = x.key; A !== null; ) {
                if (A.key === F)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === x.containerInfo &&
                    A.stateNode.implementation === x.implementation
                  ) {
                    l(O, A.sibling),
                      (q = u(A, x.children || [])),
                      (q.return = O),
                      (O = q);
                    break t;
                  } else {
                    l(O, A);
                    break;
                  }
                else e(O, A);
                A = A.sibling;
              }
              (q = Ec(x, O.mode, q)), (q.return = O), (O = q);
            }
            return s(O);
          case Bt:
            return (F = x._init), (x = F(x._payload)), Ot(O, A, x, q);
        }
        if (kt(x)) return ut(O, A, x, q);
        if (Ft(x)) {
          if (((F = Ft(x)), typeof F != "function")) throw Error(o(150));
          return (x = F.call(x)), tt(O, A, x, q);
        }
        if (typeof x.then == "function") return Ot(O, A, Fa(x), q);
        if (x.$$typeof === rt) return Ot(O, A, Ca(O, x), q);
        ka(O, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          A !== null && A.tag === 6
            ? (l(O, A.sibling), (q = u(A, x)), (q.return = O), (O = q))
            : (l(O, A), (q = Sc(x, O.mode, q)), (q.return = O), (O = q)),
          s(O))
        : l(O, A);
    }
    return function (O, A, x, q) {
      try {
        ju = 0;
        var F = Ot(O, A, x, q);
        return (Vn = null), F;
      } catch ($) {
        if ($ === Du || $ === qa) throw $;
        var ht = be(29, $, null, O.mode);
        return (ht.lanes = q), (ht.return = O), ht;
      } finally {
      }
    };
  }
  var Kn = Ts(!0),
    As = Ts(!1),
    Ce = G(null),
    Je = null;
  function Dl(t) {
    var e = t.alternate;
    Z(Jt, Jt.current & 1),
      Z(Ce, t),
      Je === null &&
        (e === null || Gn.current !== null || e.memoizedState !== null) &&
        (Je = t);
  }
  function Rs(t) {
    if (t.tag === 22) {
      if ((Z(Jt, Jt.current), Z(Ce, t), Je === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Je = t);
      }
    } else zl();
  }
  function zl() {
    Z(Jt, Jt.current), Z(Ce, Ce.current);
  }
  function dl(t) {
    K(Ce), Je === t && (Je = null), K(Jt);
  }
  var Jt = G(0);
  function $a(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || Qf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Pc(t, e, l, n) {
    (e = t.memoizedState),
      (l = l(n, e)),
      (l = l == null ? e : p({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var tf = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var n = Oe(),
        u = _l(n);
      (u.payload = e),
        l != null && (u.callback = l),
        (e = Ul(t, u, n)),
        e !== null && (xe(e, t, n), Mu(e, t, n));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var n = Oe(),
        u = _l(n);
      (u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = Ul(t, u, n)),
        e !== null && (xe(e, t, n), Mu(e, t, n));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = Oe(),
        n = _l(l);
      (n.tag = 2),
        e != null && (n.callback = e),
        (e = Ul(t, n, l)),
        e !== null && (xe(e, t, l), Mu(e, t, l));
    },
  };
  function Os(t, e, l, n, u, a, s) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(n, a, s)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Tu(l, n) || !Tu(u, a)
        : !0
    );
  }
  function xs(t, e, l, n) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, n),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, n),
      e.state !== t && tf.enqueueReplaceState(e, e.state, null);
  }
  function fn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e) n !== "ref" && (l[n] = e[n]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = p({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  var Wa =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (typeof Kl == "object" && typeof Kl.emit == "function") {
            Kl.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function _s(t) {
    Wa(t);
  }
  function Us(t) {
    console.error(t);
  }
  function Bs(t) {
    Wa(t);
  }
  function Ia(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Ds(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ef(t, e, l) {
    return (
      (l = _l(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ia(t, e);
      }),
      l
    );
  }
  function zs(t) {
    return (t = _l(t)), (t.tag = 3), t;
  }
  function Ms(t, e, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var a = n.value;
      (t.payload = function () {
        return u(a);
      }),
        (t.callback = function () {
          Ds(e, l, n);
        });
    }
    var s = l.stateNode;
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (t.callback = function () {
        Ds(e, l, n),
          typeof u != "function" &&
            (ql === null ? (ql = new Set([this])) : ql.add(this));
        var d = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function _y(t, e, l, n, u) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && _u(e, l, u, !0),
        (l = Ce.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Je === null ? xf() : l.alternate === null && Yt === 0 && (Yt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              n === Dc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([n])) : e.add(n),
                  Uf(t, n, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Dc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([n])) : l.add(n)),
                  Uf(t, n, u)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return Uf(t, n, u), xf(), !1;
    }
    if (St)
      return (
        (e = Ce.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            n !== Ac && ((t = Error(o(422), { cause: n })), xu(ze(t, l))))
          : (n !== Ac && ((e = Error(o(423), { cause: n })), xu(ze(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (n = ze(n, l)),
            (u = ef(t.stateNode, n, u)),
            wc(t, u),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var a = Error(o(520), { cause: n });
    if (
      ((a = ze(a, l)),
      Ju === null ? (Ju = [a]) : Ju.push(a),
      Yt !== 4 && (Yt = 2),
      e === null)
    )
      return !0;
    (n = ze(n, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = ef(l.stateNode, n, t)),
            wc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (a = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (a !== null &&
                  typeof a.componentDidCatch == "function" &&
                  (ql === null || !ql.has(a)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = zs(u)),
              Ms(u, t, l, n),
              wc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ws = Error(o(461)),
    Wt = !1;
  function ee(t, e, l, n) {
    e.child = t === null ? As(e, null, l, n) : Kn(e, t.child, l, n);
  }
  function Ns(t, e, l, n, u) {
    l = l.render;
    var a = e.ref;
    if ("ref" in n) {
      var s = {};
      for (var d in n) d !== "ref" && (s[d] = n[d]);
    } else s = n;
    return (
      un(e),
      (n = Lc(t, e, l, s, a, u)),
      (d = jc()),
      t !== null && !Wt
        ? (Yc(t, e, u), yl(t, e, u))
        : (St && d && bc(e), (e.flags |= 1), ee(t, e, n, u), e.child)
    );
  }
  function Cs(t, e, l, n, u) {
    if (t === null) {
      var a = l.type;
      return typeof a == "function" &&
        !vc(a) &&
        a.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = a), Hs(t, e, a, n, u))
        : ((t = za(l.type, null, n, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((a = t.child), !of(t, u))) {
      var s = a.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Tu), l(s, n) && t.ref === e.ref)
      )
        return yl(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = cl(a, n)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hs(t, e, l, n, u) {
    if (t !== null) {
      var a = t.memoizedProps;
      if (Tu(a, n) && t.ref === e.ref)
        if (((Wt = !1), (e.pendingProps = n = a), of(t, u)))
          (t.flags & 131072) !== 0 && (Wt = !0);
        else return (e.lanes = t.lanes), yl(t, e, u);
    }
    return lf(t, e, l, n, u);
  }
  function qs(t, e, l) {
    var n = e.pendingProps,
      u = n.children,
      a = t !== null ? t.memoizedState : null;
    if (n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((n = a !== null ? a.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, a = 0; u !== null; )
            (a = a | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = a & ~n;
        } else (e.childLanes = 0), (e.child = null);
        return Ls(t, e, n, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ha(e, a !== null ? a.cachePool : null),
          a !== null ? Ho(e, a) : Cc(),
          Rs(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Ls(t, e, a !== null ? a.baseLanes | l : l, l)
        );
    } else
      a !== null
        ? (Ha(e, a.cachePool), Ho(e, a), zl(), (e.memoizedState = null))
        : (t !== null && Ha(e, null), Cc(), zl());
    return ee(t, e, u, l), e.child;
  }
  function Ls(t, e, l, n) {
    var u = Bc();
    return (
      (u = u === null ? null : { parent: Kt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && Ha(e, null),
      Cc(),
      Rs(e),
      t !== null && _u(t, e, n, !0),
      null
    );
  }
  function Pa(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function lf(t, e, l, n, u) {
    return (
      un(e),
      (l = Lc(t, e, l, n, void 0, u)),
      (n = jc()),
      t !== null && !Wt
        ? (Yc(t, e, u), yl(t, e, u))
        : (St && n && bc(e), (e.flags |= 1), ee(t, e, l, u), e.child)
    );
  }
  function js(t, e, l, n, u, a) {
    return (
      un(e),
      (e.updateQueue = null),
      (l = Lo(e, n, l, u)),
      qo(t),
      (n = jc()),
      t !== null && !Wt
        ? (Yc(t, e, a), yl(t, e, a))
        : (St && n && bc(e), (e.flags |= 1), ee(t, e, l, a), e.child)
    );
  }
  function Ys(t, e, l, n, u) {
    if ((un(e), e.stateNode === null)) {
      var a = Hn,
        s = l.contextType;
      typeof s == "object" && s !== null && (a = fe(s)),
        (a = new l(n, a)),
        (e.memoizedState =
          a.state !== null && a.state !== void 0 ? a.state : null),
        (a.updater = tf),
        (e.stateNode = a),
        (a._reactInternals = e),
        (a = e.stateNode),
        (a.props = n),
        (a.state = e.memoizedState),
        (a.refs = {}),
        zc(e),
        (s = l.contextType),
        (a.context = typeof s == "object" && s !== null ? fe(s) : Hn),
        (a.state = e.memoizedState),
        (s = l.getDerivedStateFromProps),
        typeof s == "function" && (Pc(e, l, s, n), (a.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function" ||
          (typeof a.UNSAFE_componentWillMount != "function" &&
            typeof a.componentWillMount != "function") ||
          ((s = a.state),
          typeof a.componentWillMount == "function" && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == "function" &&
            a.UNSAFE_componentWillMount(),
          s !== a.state && tf.enqueueReplaceState(a, a.state, null),
          Nu(e, n, a, u),
          wu(),
          (a.state = e.memoizedState)),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308),
        (n = !0);
    } else if (t === null) {
      a = e.stateNode;
      var d = e.memoizedProps,
        E = fn(l, d);
      a.props = E;
      var _ = a.context,
        C = l.contextType;
      (s = Hn), typeof C == "object" && C !== null && (s = fe(C));
      var L = l.getDerivedStateFromProps;
      (C =
        typeof L == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function"),
        (d = e.pendingProps !== d),
        C ||
          (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
            typeof a.componentWillReceiveProps != "function") ||
          ((d || _ !== s) && xs(e, a, n, s)),
        (xl = !1);
      var U = e.memoizedState;
      (a.state = U),
        Nu(e, n, a, u),
        wu(),
        (_ = e.memoizedState),
        d || U !== _ || xl
          ? (typeof L == "function" && (Pc(e, l, L, n), (_ = e.memoizedState)),
            (E = xl || Os(e, l, E, n, U, _, s))
              ? (C ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = n),
                (e.memoizedState = _)),
            (a.props = n),
            (a.state = _),
            (a.context = s),
            (n = E))
          : (typeof a.componentDidMount == "function" && (e.flags |= 4194308),
            (n = !1));
    } else {
      (a = e.stateNode),
        Mc(t, e),
        (s = e.memoizedProps),
        (C = fn(l, s)),
        (a.props = C),
        (L = e.pendingProps),
        (U = a.context),
        (_ = l.contextType),
        (E = Hn),
        typeof _ == "object" && _ !== null && (E = fe(_)),
        (d = l.getDerivedStateFromProps),
        (_ =
          typeof d == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function") ||
          (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
            typeof a.componentWillReceiveProps != "function") ||
          ((s !== L || U !== E) && xs(e, a, n, E)),
        (xl = !1),
        (U = e.memoizedState),
        (a.state = U),
        Nu(e, n, a, u),
        wu();
      var z = e.memoizedState;
      s !== L ||
      U !== z ||
      xl ||
      (t !== null && t.dependencies !== null && Na(t.dependencies))
        ? (typeof d == "function" && (Pc(e, l, d, n), (z = e.memoizedState)),
          (C =
            xl ||
            Os(e, l, C, n, U, z, E) ||
            (t !== null && t.dependencies !== null && Na(t.dependencies)))
            ? (_ ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(n, z, E),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(n, z, E)),
              typeof a.componentDidUpdate == "function" && (e.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (s === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (s === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = n),
              (e.memoizedState = z)),
          (a.props = n),
          (a.state = z),
          (a.context = E),
          (n = C))
        : (typeof a.componentDidUpdate != "function" ||
            (s === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 1024),
          (n = !1));
    }
    return (
      (a = n),
      Pa(t, e),
      (n = (e.flags & 128) !== 0),
      a || n
        ? ((a = e.stateNode),
          (l =
            n && typeof l.getDerivedStateFromError != "function"
              ? null
              : a.render()),
          (e.flags |= 1),
          t !== null && n
            ? ((e.child = Kn(e, t.child, null, u)),
              (e.child = Kn(e, null, l, u)))
            : ee(t, e, l, u),
          (e.memoizedState = a.state),
          (t = e.child))
        : (t = yl(t, e, u)),
      t
    );
  }
  function Gs(t, e, l, n) {
    return Ou(), (e.flags |= 256), ee(t, e, l, n), e.child;
  }
  var nf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function uf(t) {
    return { baseLanes: t, cachePool: Uo() };
  }
  function af(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= He), t;
  }
  function Xs(t, e, l) {
    var n = e.pendingProps,
      u = !1,
      a = (e.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s =
          t !== null && t.memoizedState === null ? !1 : (Jt.current & 2) !== 0),
      s && ((u = !0), (e.flags &= -129)),
      (s = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (St) {
        if ((u ? Dl(e) : zl(), St)) {
          var d = jt,
            E;
          if ((E = d)) {
            t: {
              for (E = d, d = Ke; E.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break t;
                }
                if (((E = Ze(E.nextSibling)), E === null)) {
                  d = null;
                  break t;
                }
              }
              d = E;
            }
            d !== null
              ? ((e.memoizedState = {
                  dehydrated: d,
                  treeContext: Pl !== null ? { id: fl, overflow: rl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = be(18, null, null, 0)),
                (E.stateNode = d),
                (E.return = e),
                (e.child = E),
                (de = e),
                (jt = null),
                (E = !0))
              : (E = !1);
          }
          E || ln(e);
        }
        if (
          ((d = e.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return Qf(d) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        dl(e);
      }
      return (
        (d = n.children),
        (n = n.fallback),
        u
          ? (zl(),
            (u = e.mode),
            (d = ti({ mode: "hidden", children: d }, u)),
            (n = Il(n, u, l, null)),
            (d.return = e),
            (n.return = e),
            (d.sibling = n),
            (e.child = d),
            (u = e.child),
            (u.memoizedState = uf(l)),
            (u.childLanes = af(t, s, l)),
            (e.memoizedState = nf),
            n)
          : (Dl(e), cf(e, d))
      );
    }
    if (
      ((E = t.memoizedState), E !== null && ((d = E.dehydrated), d !== null))
    ) {
      if (a)
        e.flags & 256
          ? (Dl(e), (e.flags &= -257), (e = ff(t, e, l)))
          : e.memoizedState !== null
          ? (zl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (zl(),
            (u = n.fallback),
            (d = e.mode),
            (n = ti({ mode: "visible", children: n.children }, d)),
            (u = Il(u, d, l, null)),
            (u.flags |= 2),
            (n.return = e),
            (u.return = e),
            (n.sibling = u),
            (e.child = n),
            Kn(e, t.child, null, l),
            (n = e.child),
            (n.memoizedState = uf(l)),
            (n.childLanes = af(t, s, l)),
            (e.memoizedState = nf),
            (e = u));
      else if ((Dl(e), Qf(d))) {
        if (((s = d.nextSibling && d.nextSibling.dataset), s)) var _ = s.dgst;
        (s = _),
          (n = Error(o(419))),
          (n.stack = ""),
          (n.digest = s),
          xu({ value: n, source: null, stack: null }),
          (e = ff(t, e, l));
      } else if (
        (Wt || _u(t, e, l, !1), (s = (l & t.childLanes) !== 0), Wt || s)
      ) {
        if (
          ((s = Dt),
          s !== null &&
            ((n = l & -l),
            (n = (n & 42) !== 0 ? 1 : Qi(n)),
            (n = (n & (s.suspendedLanes | l)) !== 0 ? 0 : n),
            n !== 0 && n !== E.retryLane))
        )
          throw ((E.retryLane = n), Cn(t, n), xe(s, t, n), ws);
        d.data === "$?" || xf(), (e = ff(t, e, l));
      } else
        d.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = E.treeContext),
            (jt = Ze(d.nextSibling)),
            (de = e),
            (St = !0),
            (en = null),
            (Ke = !1),
            t !== null &&
              ((we[Ne++] = fl),
              (we[Ne++] = rl),
              (we[Ne++] = Pl),
              (fl = t.id),
              (rl = t.overflow),
              (Pl = e)),
            (e = cf(e, n.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (zl(),
        (u = n.fallback),
        (d = e.mode),
        (E = t.child),
        (_ = E.sibling),
        (n = cl(E, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = E.subtreeFlags & 65011712),
        _ !== null ? (u = cl(_, u)) : ((u = Il(u, d, l, null)), (u.flags |= 2)),
        (u.return = e),
        (n.return = e),
        (n.sibling = u),
        (e.child = n),
        (n = u),
        (u = e.child),
        (d = t.child.memoizedState),
        d === null
          ? (d = uf(l))
          : ((E = d.cachePool),
            E !== null
              ? ((_ = Kt._currentValue),
                (E = E.parent !== _ ? { parent: _, pool: _ } : E))
              : (E = Uo()),
            (d = { baseLanes: d.baseLanes | l, cachePool: E })),
        (u.memoizedState = d),
        (u.childLanes = af(t, s, l)),
        (e.memoizedState = nf),
        n)
      : (Dl(e),
        (l = t.child),
        (t = l.sibling),
        (l = cl(l, { mode: "visible", children: n.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((s = e.deletions),
          s === null ? ((e.deletions = [t]), (e.flags |= 16)) : s.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function cf(t, e) {
    return (
      (e = ti({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ti(t, e) {
    return (
      (t = be(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function ff(t, e, l) {
    return (
      Kn(e, t.child, null, l),
      (t = cf(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Qs(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Oc(t.return, e, l);
  }
  function rf(t, e, l, n, u) {
    var a = t.memoizedState;
    a === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: u,
        })
      : ((a.isBackwards = e),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = n),
        (a.tail = l),
        (a.tailMode = u));
  }
  function Zs(t, e, l) {
    var n = e.pendingProps,
      u = n.revealOrder,
      a = n.tail;
    if ((ee(t, e, n.children, l), (n = Jt.current), (n & 2) !== 0))
      (n = (n & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Qs(t, l, e);
          else if (t.tag === 19) Qs(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      n &= 1;
    }
    switch ((Z(Jt, n), u)) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          (t = l.alternate),
            t !== null && $a(t) === null && (u = l),
            (l = l.sibling);
        (l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          rf(e, !1, u, l, a);
        break;
      case "backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && $a(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = l), (l = u), (u = t);
        }
        rf(e, !0, l, null, a);
        break;
      case "together":
        rf(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function yl(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Hl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((_u(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, l = cl(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = cl(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function of(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Na(t)));
  }
  function Uy(t, e, l) {
    switch (e.tag) {
      case 3:
        xt(e, e.stateNode.containerInfo),
          Ol(e, Kt, t.memoizedState.cache),
          Ou();
        break;
      case 27:
      case 5:
        pn(e);
        break;
      case 4:
        xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ol(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Dl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? Xs(t, e, l)
            : (Dl(e), (t = yl(t, e, l)), t !== null ? t.sibling : null);
        Dl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((n = (l & e.childLanes) !== 0),
          n || (_u(t, e, l, !1), (n = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (n) return Zs(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Z(Jt, Jt.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), qs(t, e, l);
      case 24:
        Ol(e, Kt, t.memoizedState.cache);
    }
    return yl(t, e, l);
  }
  function Vs(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Wt = !0;
      else {
        if (!of(t, l) && (e.flags & 128) === 0) return (Wt = !1), Uy(t, e, l);
        Wt = (t.flags & 131072) !== 0;
      }
    else (Wt = !1), St && (e.flags & 1048576) !== 0 && bo(e, wa, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var n = e.elementType,
            u = n._init;
          if (((n = u(n._payload)), (e.type = n), typeof n == "function"))
            vc(n)
              ? ((t = fn(n, t)), (e.tag = 1), (e = Ys(null, e, n, t, l)))
              : ((e.tag = 0), (e = lf(null, e, n, t, l)));
          else {
            if (n != null) {
              if (((u = n.$$typeof), u === zt)) {
                (e.tag = 11), (e = Ns(null, e, n, t, l));
                break t;
              } else if (u === qt) {
                (e.tag = 14), (e = Cs(null, e, n, t, l));
                break t;
              }
            }
            throw ((e = nl(n) || n), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return lf(t, e, e.type, e.pendingProps, l);
      case 1:
        return (n = e.type), (u = fn(n, e.pendingProps)), Ys(t, e, n, u, l);
      case 3:
        t: {
          if ((xt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          n = e.pendingProps;
          var a = e.memoizedState;
          (u = a.element), Mc(t, e), Nu(e, n, null, l);
          var s = e.memoizedState;
          if (
            ((n = s.cache),
            Ol(e, Kt, n),
            n !== a.cache && xc(e, [Kt], l, !0),
            wu(),
            (n = s.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: n, isDehydrated: !1, cache: s.cache }),
              (e.updateQueue.baseState = a),
              (e.memoizedState = a),
              e.flags & 256)
            ) {
              e = Gs(t, e, n, l);
              break t;
            } else if (n !== u) {
              (u = ze(Error(o(424)), e)), xu(u), (e = Gs(t, e, n, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                jt = Ze(t.firstChild),
                  de = e,
                  St = !0,
                  en = null,
                  Ke = !0,
                  l = As(e, null, n, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ou(), n === u)) {
              e = yl(t, e, l);
              break t;
            }
            ee(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Pa(t, e),
          t === null
            ? (l = kh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : St ||
                ((l = e.type),
                (t = e.pendingProps),
                (n = yi(it.current).createElement(l)),
                (n[ce] = e),
                (n[ye] = t),
                ne(n, l, t),
                $t(n),
                (e.stateNode = n))
            : (e.memoizedState = kh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          pn(e),
          t === null &&
            St &&
            ((n = e.stateNode = Kh(e.type, e.pendingProps, it.current)),
            (de = e),
            (Ke = !0),
            (u = jt),
            Yl(e.type) ? ((Zf = u), (jt = Ze(n.firstChild))) : (jt = u)),
          ee(t, e, e.pendingProps.children, l),
          Pa(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            St &&
            ((u = n = jt) &&
              ((n = lm(n, e.type, e.pendingProps, Ke)),
              n !== null
                ? ((e.stateNode = n),
                  (de = e),
                  (jt = Ze(n.firstChild)),
                  (Ke = !1),
                  (u = !0))
                : (u = !1)),
            u || ln(e)),
          pn(e),
          (u = e.type),
          (a = e.pendingProps),
          (s = t !== null ? t.memoizedProps : null),
          (n = a.children),
          Yf(u, a) ? (n = null) : s !== null && Yf(u, s) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Lc(t, e, Ey, null, null, l)), (la._currentValue = u)),
          Pa(t, e),
          ee(t, e, n, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            St &&
            ((t = l = jt) &&
              ((l = nm(l, e.pendingProps, Ke)),
              l !== null
                ? ((e.stateNode = l), (de = e), (jt = null), (t = !0))
                : (t = !1)),
            t || ln(e)),
          null
        );
      case 13:
        return Xs(t, e, l);
      case 4:
        return (
          xt(e, e.stateNode.containerInfo),
          (n = e.pendingProps),
          t === null ? (e.child = Kn(e, null, n, l)) : ee(t, e, n, l),
          e.child
        );
      case 11:
        return Ns(t, e, e.type, e.pendingProps, l);
      case 7:
        return ee(t, e, e.pendingProps, l), e.child;
      case 8:
        return ee(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return ee(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (n = e.pendingProps),
          Ol(e, e.type, n.value),
          ee(t, e, n.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (n = e.pendingProps.children),
          un(e),
          (u = fe(u)),
          (n = n(u)),
          (e.flags |= 1),
          ee(t, e, n, l),
          e.child
        );
      case 14:
        return Cs(t, e, e.type, e.pendingProps, l);
      case 15:
        return Hs(t, e, e.type, e.pendingProps, l);
      case 19:
        return Zs(t, e, l);
      case 31:
        return (
          (n = e.pendingProps),
          (l = e.mode),
          (n = { mode: n.mode, children: n.children }),
          t === null
            ? ((l = ti(n, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = cl(t.child, n)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return qs(t, e, l);
      case 24:
        return (
          un(e),
          (n = fe(Kt)),
          t === null
            ? ((u = Bc()),
              u === null &&
                ((u = Dt),
                (a = _c()),
                (u.pooledCache = a),
                a.refCount++,
                a !== null && (u.pooledCacheLanes |= l),
                (u = a)),
              (e.memoizedState = { parent: n, cache: u }),
              zc(e),
              Ol(e, Kt, u))
            : ((t.lanes & l) !== 0 && (Mc(t, e), Nu(e, null, null, l), wu()),
              (u = t.memoizedState),
              (a = e.memoizedState),
              u.parent !== n
                ? ((u = { parent: n, cache: n }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Ol(e, Kt, n))
                : ((n = a.cache),
                  Ol(e, Kt, n),
                  n !== u.cache && xc(e, [Kt], l, !0))),
          ee(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function ml(t) {
    t.flags |= 4;
  }
  function Ks(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !td(e))) {
      if (
        ((e = Ce.current),
        e !== null &&
          ((pt & 4194048) === pt
            ? Je !== null
            : ((pt & 62914560) !== pt && (pt & 536870912) === 0) || e !== Je))
      )
        throw ((zu = Dc), Bo);
      t.flags |= 8192;
    }
  }
  function ei(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? wt() : 536870912), (t.lanes |= e), ($n |= e));
  }
  function Gu(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), (l = l.sibling);
          n === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Lt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      n = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags & 65011712),
          (n |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags),
          (n |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= n), (t.childLanes = l), e;
  }
  function By(t, e, l) {
    var n = e.pendingProps;
    switch ((Tc(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Lt(e), null;
      case 1:
        return Lt(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          sl(Kt),
          Ye(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ru(e)
              ? ml(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ro())),
          Lt(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (ml(e),
              l !== null ? (Lt(e), Ks(e, l)) : (Lt(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (ml(e), Lt(e), Ks(e, l))
              : (Lt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== n && ml(e), Lt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ge(e), (l = it.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== n && ml(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(o(166));
            return Lt(e), null;
          }
          (t = V.current),
            Ru(e) ? To(e) : ((t = Kh(u, n, l)), (e.stateNode = t), ml(e));
        }
        return Lt(e), null;
      case 5:
        if ((Ge(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== n && ml(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(o(166));
            return Lt(e), null;
          }
          if (((t = V.current), Ru(e))) To(e);
          else {
            switch (((u = yi(it.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof n.is == "string"
                        ? u.createElement("select", { is: n.is })
                        : u.createElement("select")),
                      n.multiple
                        ? (t.multiple = !0)
                        : n.size && (t.size = n.size);
                    break;
                  default:
                    t =
                      typeof n.is == "string"
                        ? u.createElement(l, { is: n.is })
                        : u.createElement(l);
                }
            }
            (t[ce] = e), (t[ye] = n);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((ne(t, l, n), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!n.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && ml(e);
          }
        }
        return Lt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && ml(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = it.current), Ru(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (n = null),
              (u = de),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            (t[ce] = e),
              (t = !!(
                t.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                jh(t.nodeValue, l)
              )),
              t || ln(e);
          } else (t = yi(t).createTextNode(n)), (t[ce] = e), (e.stateNode = t);
        }
        return Lt(e), null;
      case 13:
        if (
          ((n = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ru(e)), n !== null && n.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[ce] = e;
            } else
              Ou(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Lt(e), (u = !1);
          } else
            (u = Ro()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (dl(e), e) : (dl(e), null);
        }
        if ((dl(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = n !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (n = e.child),
            (u = null),
            n.alternate !== null &&
              n.alternate.memoizedState !== null &&
              n.alternate.memoizedState.cachePool !== null &&
              (u = n.alternate.memoizedState.cachePool.pool);
          var a = null;
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (a = n.memoizedState.cachePool.pool),
            a !== u && (n.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          ei(e, e.updateQueue),
          Lt(e),
          null
        );
      case 4:
        return Ye(), t === null && Cf(e.stateNode.containerInfo), Lt(e), null;
      case 10:
        return sl(e.type), Lt(e), null;
      case 19:
        if ((K(Jt), (u = e.memoizedState), u === null)) return Lt(e), null;
        if (((n = (e.flags & 128) !== 0), (a = u.rendering), a === null))
          if (n) Gu(u, !1);
          else {
            if (Yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((a = $a(t)), a !== null)) {
                  for (
                    e.flags |= 128,
                      Gu(u, !1),
                      t = a.updateQueue,
                      e.updateQueue = t,
                      ei(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Eo(l, t), (l = l.sibling);
                  return Z(Jt, (Jt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              ie() > ui &&
              ((e.flags |= 128), (n = !0), Gu(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = $a(a)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ei(e, t),
                Gu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !a.alternate &&
                  !St)
              )
                return Lt(e), null;
            } else
              2 * ie() - u.renderingStartTime > ui &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), Gu(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((a.sibling = e.child), (e.child = a))
            : ((t = u.last),
              t !== null ? (t.sibling = a) : (e.child = a),
              (u.last = a));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = ie()),
            (e.sibling = null),
            (t = Jt.current),
            Z(Jt, n ? (t & 1) | 2 : t & 1),
            e)
          : (Lt(e), null);
      case 22:
      case 23:
        return (
          dl(e),
          Hc(),
          (n = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
            : n && (e.flags |= 8192),
          n
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Lt(e),
          (l = e.updateQueue),
          l !== null && ei(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (n = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          n !== l && (e.flags |= 2048),
          t !== null && K(an),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          sl(Kt),
          Lt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Dy(t, e) {
    switch ((Tc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          sl(Kt),
          Ye(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ge(e), null;
      case 13:
        if (
          (dl(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Ou();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return K(Jt), null;
      case 4:
        return Ye(), null;
      case 10:
        return sl(e.type), null;
      case 22:
      case 23:
        return (
          dl(e),
          Hc(),
          t !== null && K(an),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return sl(Kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Js(t, e) {
    switch ((Tc(e), e.tag)) {
      case 3:
        sl(Kt), Ye();
        break;
      case 26:
      case 27:
      case 5:
        Ge(e);
        break;
      case 4:
        Ye();
        break;
      case 13:
        dl(e);
        break;
      case 19:
        K(Jt);
        break;
      case 10:
        sl(e.type);
        break;
      case 22:
      case 23:
        dl(e), Hc(), t !== null && K(an);
        break;
      case 24:
        sl(Kt);
    }
  }
  function Xu(t, e) {
    try {
      var l = e.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var a = l.create,
              s = l.inst;
            (n = a()), (s.destroy = n);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (d) {
      Ut(e, e.return, d);
    }
  }
  function Ml(t, e, l) {
    try {
      var n = e.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        n = a;
        do {
          if ((n.tag & t) === t) {
            var s = n.inst,
              d = s.destroy;
            if (d !== void 0) {
              (s.destroy = void 0), (u = e);
              var E = l,
                _ = d;
              try {
                _();
              } catch (C) {
                Ut(u, E, C);
              }
            }
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (C) {
      Ut(e, e.return, C);
    }
  }
  function Fs(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Co(e, l);
      } catch (n) {
        Ut(t, t.return, n);
      }
    }
  }
  function ks(t, e, l) {
    (l.props = fn(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ut(t, e, n);
    }
  }
  function Qu(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(n)) : (l.current = n);
      }
    } catch (u) {
      Ut(t, e, u);
    }
  }
  function Fe(t, e) {
    var l = t.ref,
      n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Ut(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Ut(t, e, u);
        }
      else l.current = null;
  }
  function $s(t) {
    var e = t.type,
      l = t.memoizedProps,
      n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      Ut(t, t.return, u);
    }
  }
  function sf(t, e, l) {
    try {
      var n = t.stateNode;
      Wy(n, t.type, l, e), (n[ye] = e);
    } catch (u) {
      Ut(t, t.return, u);
    }
  }
  function Ws(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Yl(t.type)) ||
      t.tag === 4
    );
  }
  function hf(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ws(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Yl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function df(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = di));
    else if (
      n !== 4 &&
      (n === 27 && Yl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (df(t, e, l), t = t.sibling; t !== null; )
        df(t, e, l), (t = t.sibling);
  }
  function li(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      n !== 4 &&
      (n === 27 && Yl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (li(t, e, l), t = t.sibling; t !== null; )
        li(t, e, l), (t = t.sibling);
  }
  function Is(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var n = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ne(e, n, l), (e[ce] = t), (e[ye] = l);
    } catch (a) {
      Ut(t, t.return, a);
    }
  }
  var pl = !1,
    Xt = !1,
    yf = !1,
    Ps = typeof WeakSet == "function" ? WeakSet : Set,
    It = null;
  function zy(t, e) {
    if (((t = t.containerInfo), (Lf = Ei), (t = ro(t)), sc(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset,
              a = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, a.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0,
              d = -1,
              E = -1,
              _ = 0,
              C = 0,
              L = t,
              U = null;
            e: for (;;) {
              for (
                var z;
                L !== l || (u !== 0 && L.nodeType !== 3) || (d = s + u),
                  L !== a || (n !== 0 && L.nodeType !== 3) || (E = s + n),
                  L.nodeType === 3 && (s += L.nodeValue.length),
                  (z = L.firstChild) !== null;

              )
                (U = L), (L = z);
              for (;;) {
                if (L === t) break e;
                if (
                  (U === l && ++_ === u && (d = s),
                  U === a && ++C === n && (E = s),
                  (z = L.nextSibling) !== null)
                )
                  break;
                (L = U), (U = L.parentNode);
              }
              L = z;
            }
            l = d === -1 || E === -1 ? null : { start: d, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      jf = { focusedElem: t, selectionRange: l }, Ei = !1, It = e;
      It !== null;

    )
      if (
        ((e = It), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (It = t);
      else
        for (; It !== null; ) {
          switch (((e = It), (a = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && a !== null) {
                (t = void 0),
                  (l = e),
                  (u = a.memoizedProps),
                  (a = a.memoizedState),
                  (n = l.stateNode);
                try {
                  var ut = fn(l.type, u, l.elementType === l.type);
                  (t = n.getSnapshotBeforeUpdate(ut, a)),
                    (n.__reactInternalSnapshotBeforeUpdate = t);
                } catch (tt) {
                  Ut(l, l.return, tt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Xf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (It = t);
            break;
          }
          It = e.return;
        }
  }
  function th(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        wl(t, l), n & 4 && Xu(5, l);
        break;
      case 1:
        if ((wl(t, l), n & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (s) {
              Ut(l, l.return, s);
            }
          else {
            var u = fn(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              Ut(l, l.return, s);
            }
          }
        n & 64 && Fs(l), n & 512 && Qu(l, l.return);
        break;
      case 3:
        if ((wl(t, l), n & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Co(t, e);
          } catch (s) {
            Ut(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Is(l);
      case 26:
      case 5:
        wl(t, l), e === null && n & 4 && $s(l), n & 512 && Qu(l, l.return);
        break;
      case 12:
        wl(t, l);
        break;
      case 13:
        wl(t, l),
          n & 4 && nh(t, l),
          n & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Yy.bind(null, l)), um(t, l))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || pl), !n)) {
          (e = (e !== null && e.memoizedState !== null) || Xt), (u = pl);
          var a = Xt;
          (pl = n),
            (Xt = e) && !a ? Nl(t, l, (l.subtreeFlags & 8772) !== 0) : wl(t, l),
            (pl = u),
            (Xt = a);
        }
        break;
      case 30:
        break;
      default:
        wl(t, l);
    }
  }
  function eh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), eh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ki(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ct = null,
    ge = !1;
  function gl(t, e, l) {
    for (l = l.child; l !== null; ) lh(t, e, l), (l = l.sibling);
  }
  function lh(t, e, l) {
    if (se && typeof se.onCommitFiberUnmount == "function")
      try {
        se.onCommitFiberUnmount(ul, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Xt || Fe(l, e),
          gl(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Xt || Fe(l, e);
        var n = Ct,
          u = ge;
        Yl(l.type) && ((Ct = l.stateNode), (ge = !1)),
          gl(t, e, l),
          Iu(l.stateNode),
          (Ct = n),
          (ge = u);
        break;
      case 5:
        Xt || Fe(l, e);
      case 6:
        if (
          ((n = Ct),
          (u = ge),
          (Ct = null),
          gl(t, e, l),
          (Ct = n),
          (ge = u),
          Ct !== null)
        )
          if (ge)
            try {
              (Ct.nodeType === 9
                ? Ct.body
                : Ct.nodeName === "HTML"
                ? Ct.ownerDocument.body
                : Ct
              ).removeChild(l.stateNode);
            } catch (a) {
              Ut(l, e, a);
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (a) {
              Ut(l, e, a);
            }
        break;
      case 18:
        Ct !== null &&
          (ge
            ? ((t = Ct),
              Zh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              ia(t))
            : Zh(Ct, l.stateNode));
        break;
      case 4:
        (n = Ct),
          (u = ge),
          (Ct = l.stateNode.containerInfo),
          (ge = !0),
          gl(t, e, l),
          (Ct = n),
          (ge = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xt || Ml(2, l, e), Xt || Ml(4, l, e), gl(t, e, l);
        break;
      case 1:
        Xt ||
          (Fe(l, e),
          (n = l.stateNode),
          typeof n.componentWillUnmount == "function" && ks(l, e, n)),
          gl(t, e, l);
        break;
      case 21:
        gl(t, e, l);
        break;
      case 22:
        (Xt = (n = Xt) || l.memoizedState !== null), gl(t, e, l), (Xt = n);
        break;
      default:
        gl(t, e, l);
    }
  }
  function nh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ia(t);
      } catch (l) {
        Ut(e, e.return, l);
      }
  }
  function My(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ps()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ps()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function mf(t, e) {
    var l = My(t);
    e.forEach(function (n) {
      var u = Gy.bind(null, t, n);
      l.has(n) || (l.add(n), n.then(u, u));
    });
  }
  function Te(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n],
          a = t,
          s = e,
          d = s;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Yl(d.type)) {
                (Ct = d.stateNode), (ge = !1);
                break t;
              }
              break;
            case 5:
              (Ct = d.stateNode), (ge = !1);
              break t;
            case 3:
            case 4:
              (Ct = d.stateNode.containerInfo), (ge = !0);
              break t;
          }
          d = d.return;
        }
        if (Ct === null) throw Error(o(160));
        lh(a, s, u),
          (Ct = null),
          (ge = !1),
          (a = u.alternate),
          a !== null && (a.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) uh(e, t), (e = e.sibling);
  }
  var Qe = null;
  function uh(t, e) {
    var l = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Te(e, t),
          Ae(t),
          n & 4 && (Ml(3, t, t.return), Xu(3, t), Ml(5, t, t.return));
        break;
      case 1:
        Te(e, t),
          Ae(t),
          n & 512 && (Xt || l === null || Fe(l, l.return)),
          n & 64 &&
            pl &&
            ((t = t.updateQueue),
            t !== null &&
              ((n = t.callbacks),
              n !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? n : l.concat(n)))));
        break;
      case 26:
        var u = Qe;
        if (
          (Te(e, t),
          Ae(t),
          n & 512 && (Xt || l === null || Fe(l, l.return)),
          n & 4)
        ) {
          var a = l !== null ? l.memoizedState : null;
          if (((n = t.memoizedState), l === null))
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  (n = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (n) {
                    case "title":
                      (a = u.getElementsByTagName("title")[0]),
                        (!a ||
                          a[du] ||
                          a[ce] ||
                          a.namespaceURI === "http://www.w3.org/2000/svg" ||
                          a.hasAttribute("itemprop")) &&
                          ((a = u.createElement(n)),
                          u.head.insertBefore(
                            a,
                            u.querySelector("head > title")
                          )),
                        ne(a, n, l),
                        (a[ce] = t),
                        $t(a),
                        (n = a);
                      break t;
                    case "link":
                      var s = Ih("link", "href", u).get(n + (l.href || ""));
                      if (s) {
                        for (var d = 0; d < s.length; d++)
                          if (
                            ((a = s[d]),
                            a.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              a.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              a.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              a.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            s.splice(d, 1);
                            break e;
                          }
                      }
                      (a = u.createElement(n)),
                        ne(a, n, l),
                        u.head.appendChild(a);
                      break;
                    case "meta":
                      if (
                        (s = Ih("meta", "content", u).get(
                          n + (l.content || "")
                        ))
                      ) {
                        for (d = 0; d < s.length; d++)
                          if (
                            ((a = s[d]),
                            a.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              a.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              a.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              a.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              a.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            s.splice(d, 1);
                            break e;
                          }
                      }
                      (a = u.createElement(n)),
                        ne(a, n, l),
                        u.head.appendChild(a);
                      break;
                    default:
                      throw Error(o(468, n));
                  }
                  (a[ce] = t), $t(a), (n = a);
                }
                t.stateNode = n;
              } else Ph(u, t.type, t.stateNode);
            else t.stateNode = Wh(u, n, t.memoizedProps);
          else
            a !== n
              ? (a === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : a.count--,
                n === null
                  ? Ph(u, t.type, t.stateNode)
                  : Wh(u, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                sf(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Te(e, t),
          Ae(t),
          n & 512 && (Xt || l === null || Fe(l, l.return)),
          l !== null && n & 4 && sf(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Te(e, t),
          Ae(t),
          n & 512 && (Xt || l === null || Fe(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Un(u, "");
          } catch (z) {
            Ut(t, t.return, z);
          }
        }
        n & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), sf(t, u, l !== null ? l.memoizedProps : u)),
          n & 1024 && (yf = !0);
        break;
      case 6:
        if ((Te(e, t), Ae(t), n & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (n = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = n;
          } catch (z) {
            Ut(t, t.return, z);
          }
        }
        break;
      case 3:
        if (
          ((gi = null),
          (u = Qe),
          (Qe = mi(e.containerInfo)),
          Te(e, t),
          (Qe = u),
          Ae(t),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ia(e.containerInfo);
          } catch (z) {
            Ut(t, t.return, z);
          }
        yf && ((yf = !1), ah(t));
        break;
      case 4:
        (n = Qe),
          (Qe = mi(t.stateNode.containerInfo)),
          Te(e, t),
          Ae(t),
          (Qe = n);
        break;
      case 12:
        Te(e, t), Ae(t);
        break;
      case 13:
        Te(e, t),
          Ae(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (bf = ie()),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), mf(t, n)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var E = l !== null && l.memoizedState !== null,
          _ = pl,
          C = Xt;
        if (
          ((pl = _ || u),
          (Xt = C || E),
          Te(e, t),
          (Xt = C),
          (pl = _),
          Ae(t),
          n & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || E || pl || Xt || rn(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                E = l = e;
                try {
                  if (((a = E.stateNode), u))
                    (s = a.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none");
                  else {
                    d = E.stateNode;
                    var L = E.memoizedProps.style,
                      U =
                        L != null && L.hasOwnProperty("display")
                          ? L.display
                          : null;
                    d.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (z) {
                  Ut(E, E.return, z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = u ? "" : E.memoizedProps;
                } catch (z) {
                  Ut(E, E.return, z);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        n & 4 &&
          ((n = t.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), mf(t, l))));
        break;
      case 19:
        Te(e, t),
          Ae(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), mf(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Te(e, t), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Ws(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              a = hf(t);
            li(t, a, u);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (Un(s, ""), (l.flags &= -33));
            var d = hf(t);
            li(t, d, s);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo,
              _ = hf(t);
            df(t, _, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (C) {
        Ut(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ah(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ah(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function wl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) th(t, e.alternate, e), (e = e.sibling);
  }
  function rn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ml(4, e, e.return), rn(e);
          break;
        case 1:
          Fe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && ks(e, e.return, l),
            rn(e);
          break;
        case 27:
          Iu(e.stateNode);
        case 26:
        case 5:
          Fe(e, e.return), rn(e);
          break;
        case 22:
          e.memoizedState === null && rn(e);
          break;
        case 30:
          rn(e);
          break;
        default:
          rn(e);
      }
      t = t.sibling;
    }
  }
  function Nl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate,
        u = t,
        a = e,
        s = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Nl(u, a, l), Xu(4, a);
          break;
        case 1:
          if (
            (Nl(u, a, l),
            (n = a),
            (u = n.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (_) {
              Ut(n, n.return, _);
            }
          if (((n = a), (u = n.updateQueue), u !== null)) {
            var d = n.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  No(E[u], d);
            } catch (_) {
              Ut(n, n.return, _);
            }
          }
          l && s & 64 && Fs(a), Qu(a, a.return);
          break;
        case 27:
          Is(a);
        case 26:
        case 5:
          Nl(u, a, l), l && n === null && s & 4 && $s(a), Qu(a, a.return);
          break;
        case 12:
          Nl(u, a, l);
          break;
        case 13:
          Nl(u, a, l), l && s & 4 && nh(u, a);
          break;
        case 22:
          a.memoizedState === null && Nl(u, a, l), Qu(a, a.return);
          break;
        case 30:
          break;
        default:
          Nl(u, a, l);
      }
      e = e.sibling;
    }
  }
  function pf(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Uu(l));
  }
  function gf(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Uu(t));
  }
  function ke(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) ih(t, e, l, n), (e = e.sibling);
  }
  function ih(t, e, l, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ke(t, e, l, n), u & 2048 && Xu(9, e);
        break;
      case 1:
        ke(t, e, l, n);
        break;
      case 3:
        ke(t, e, l, n),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Uu(t)));
        break;
      case 12:
        if (u & 2048) {
          ke(t, e, l, n), (t = e.stateNode);
          try {
            var a = e.memoizedProps,
              s = a.id,
              d = a.onPostCommit;
            typeof d == "function" &&
              d(
                s,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Ut(e, e.return, E);
          }
        } else ke(t, e, l, n);
        break;
      case 13:
        ke(t, e, l, n);
        break;
      case 23:
        break;
      case 22:
        (a = e.stateNode),
          (s = e.alternate),
          e.memoizedState !== null
            ? a._visibility & 2
              ? ke(t, e, l, n)
              : Zu(t, e)
            : a._visibility & 2
            ? ke(t, e, l, n)
            : ((a._visibility |= 2),
              Jn(t, e, l, n, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && pf(s, e);
        break;
      case 24:
        ke(t, e, l, n), u & 2048 && gf(e.alternate, e);
        break;
      default:
        ke(t, e, l, n);
    }
  }
  function Jn(t, e, l, n, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var a = t,
        s = e,
        d = l,
        E = n,
        _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Jn(a, s, d, E, u), Xu(8, s);
          break;
        case 23:
          break;
        case 22:
          var C = s.stateNode;
          s.memoizedState !== null
            ? C._visibility & 2
              ? Jn(a, s, d, E, u)
              : Zu(a, s)
            : ((C._visibility |= 2), Jn(a, s, d, E, u)),
            u && _ & 2048 && pf(s.alternate, s);
          break;
        case 24:
          Jn(a, s, d, E, u), u && _ & 2048 && gf(s.alternate, s);
          break;
        default:
          Jn(a, s, d, E, u);
      }
      e = e.sibling;
    }
  }
  function Zu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          n = e,
          u = n.flags;
        switch (n.tag) {
          case 22:
            Zu(l, n), u & 2048 && pf(n.alternate, n);
            break;
          case 24:
            Zu(l, n), u & 2048 && gf(n.alternate, n);
            break;
          default:
            Zu(l, n);
        }
        e = e.sibling;
      }
  }
  var Vu = 8192;
  function Fn(t) {
    if (t.subtreeFlags & Vu)
      for (t = t.child; t !== null; ) ch(t), (t = t.sibling);
  }
  function ch(t) {
    switch (t.tag) {
      case 26:
        Fn(t),
          t.flags & Vu &&
            t.memoizedState !== null &&
            gm(Qe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Fn(t);
        break;
      case 3:
      case 4:
        var e = Qe;
        (Qe = mi(t.stateNode.containerInfo)), Fn(t), (Qe = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Vu), (Vu = 16777216), Fn(t), (Vu = e))
            : Fn(t));
        break;
      default:
        Fn(t);
    }
  }
  function fh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Ku(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          (It = n), oh(n, t);
        }
      fh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) rh(t), (t = t.sibling);
  }
  function rh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ku(t), t.flags & 2048 && Ml(9, t, t.return);
        break;
      case 3:
        Ku(t);
        break;
      case 12:
        Ku(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ni(t))
          : Ku(t);
        break;
      default:
        Ku(t);
    }
  }
  function ni(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          (It = n), oh(n, t);
        }
      fh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Ml(8, e, e.return), ni(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), ni(e));
          break;
        default:
          ni(e);
      }
      t = t.sibling;
    }
  }
  function oh(t, e) {
    for (; It !== null; ) {
      var l = It;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Uu(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) (n.return = l), (It = n);
      else
        t: for (l = t; It !== null; ) {
          n = It;
          var u = n.sibling,
            a = n.return;
          if ((eh(n), n === l)) {
            It = null;
            break t;
          }
          if (u !== null) {
            (u.return = a), (It = u);
            break t;
          }
          It = a;
        }
    }
  }
  var wy = {
      getCacheForType: function (t) {
        var e = fe(Kt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    Ny = typeof WeakMap == "function" ? WeakMap : Map,
    bt = 0,
    Dt = null,
    dt = null,
    pt = 0,
    Tt = 0,
    Re = null,
    Cl = !1,
    kn = !1,
    vf = !1,
    vl = 0,
    Yt = 0,
    Hl = 0,
    on = 0,
    Sf = 0,
    He = 0,
    $n = 0,
    Ju = null,
    ve = null,
    Ef = !1,
    bf = 0,
    ui = 1 / 0,
    ai = null,
    ql = null,
    le = 0,
    Ll = null,
    Wn = null,
    In = 0,
    Tf = 0,
    Af = null,
    sh = null,
    Fu = 0,
    Rf = null;
  function Oe() {
    if ((bt & 2) !== 0 && pt !== 0) return pt & -pt;
    if (N.T !== null) {
      var t = jn;
      return t !== 0 ? t : zf();
    }
    return xr();
  }
  function hh() {
    He === 0 && (He = (pt & 536870912) === 0 || St ? _t() : 536870912);
    var t = Ce.current;
    return t !== null && (t.flags |= 32), He;
  }
  function xe(t, e, l) {
    ((t === Dt && (Tt === 2 || Tt === 9)) || t.cancelPendingCommit !== null) &&
      (Pn(t, 0), jl(t, pt, He, !1)),
      hu(t, l),
      ((bt & 2) === 0 || t !== Dt) &&
        (t === Dt &&
          ((bt & 2) === 0 && (on |= l), Yt === 4 && jl(t, pt, He, !1)),
        $e(t));
  }
  function dh(t, e, l) {
    if ((bt & 6) !== 0) throw Error(o(327));
    var n = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ct(t, e),
      u = n ? qy(t, e) : _f(t, e, !0),
      a = n;
    do {
      if (u === 0) {
        kn && !n && jl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), a && !Cy(l))) {
          (u = _f(t, e, !1)), (a = !1);
          continue;
        }
        if (u === 2) {
          if (((a = e), t.errorRecoveryDisabledLanes & a)) var s = 0;
          else
            (s = t.pendingLanes & -536870913),
              (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            e = s;
            t: {
              var d = t;
              u = Ju;
              var E = d.current.memoizedState.isDehydrated;
              if ((E && (Pn(d, s).flags |= 256), (s = _f(d, s, !1)), s !== 2)) {
                if (vf && !E) {
                  (d.errorRecoveryDisabledLanes |= a), (on |= a), (u = 4);
                  break t;
                }
                (a = ve),
                  (ve = u),
                  a !== null && (ve === null ? (ve = a) : ve.push.apply(ve, a));
              }
              u = s;
            }
            if (((a = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Pn(t, 0), jl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((n = t), (a = u), a)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              jl(n, e, He, !Cl);
              break t;
            case 2:
              ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((u = bf + 300 - ie()), 10 < u)) {
            if ((jl(n, e, He, !Cl), H(n, 0, !0) !== 0)) break t;
            n.timeoutHandle = Xh(
              yh.bind(null, n, l, ve, ai, Ef, e, He, on, $n, Cl, a, 2, -0, 0),
              u
            );
            break t;
          }
          yh(n, l, ve, ai, Ef, e, He, on, $n, Cl, a, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    $e(t);
  }
  function yh(t, e, l, n, u, a, s, d, E, _, C, L, U, z) {
    if (
      ((t.timeoutHandle = -1),
      (L = e.subtreeFlags),
      (L & 8192 || (L & 16785408) === 16785408) &&
        ((ea = { stylesheets: null, count: 0, unsuspend: pm }),
        ch(e),
        (L = vm()),
        L !== null))
    ) {
      (t.cancelPendingCommit = L(
        bh.bind(null, t, e, a, l, n, u, s, d, E, C, 1, U, z)
      )),
        jl(t, a, s, !_);
      return;
    }
    bh(t, e, a, l, n, u, s, d, E);
  }
  function Cy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var u = l[n],
            a = u.getSnapshot;
          u = u.value;
          try {
            if (!Ee(a(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function jl(t, e, l, n) {
    (e &= ~Sf),
      (e &= ~on),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      n && (t.warmLanes |= e),
      (n = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var a = 31 - he(u),
        s = 1 << a;
      (n[a] = -1), (u &= ~s);
    }
    l !== 0 && Rr(t, l, e);
  }
  function ii() {
    return (bt & 6) === 0 ? (ku(0), !1) : !0;
  }
  function Of() {
    if (dt !== null) {
      if (Tt === 0) var t = dt.return;
      else (t = dt), (ol = nn = null), Gc(t), (Vn = null), (ju = 0), (t = dt);
      for (; t !== null; ) Js(t.alternate, t), (t = t.return);
      dt = null;
    }
  }
  function Pn(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Py(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Of(),
      (Dt = t),
      (dt = l = cl(t.current, null)),
      (pt = e),
      (Tt = 0),
      (Re = null),
      (Cl = !1),
      (kn = ct(t, e)),
      (vf = !1),
      ($n = He = Sf = on = Hl = Yt = 0),
      (ve = Ju = null),
      (Ef = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var u = 31 - he(n),
          a = 1 << u;
        (e |= t[u]), (n &= ~a);
      }
    return (vl = e), Ua(), l;
  }
  function mh(t, e) {
    (st = null),
      (N.H = Ja),
      e === Du || e === qa
        ? ((e = Mo()), (Tt = 3))
        : e === Bo
        ? ((e = Mo()), (Tt = 4))
        : (Tt =
            e === ws
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Re = e),
      dt === null && ((Yt = 1), Ia(t, ze(e, t.current)));
  }
  function ph() {
    var t = N.H;
    return (N.H = Ja), t === null ? Ja : t;
  }
  function gh() {
    var t = N.A;
    return (N.A = wy), t;
  }
  function xf() {
    (Yt = 4),
      Cl || ((pt & 4194048) !== pt && Ce.current !== null) || (kn = !0),
      ((Hl & 134217727) === 0 && (on & 134217727) === 0) ||
        Dt === null ||
        jl(Dt, pt, He, !1);
  }
  function _f(t, e, l) {
    var n = bt;
    bt |= 2;
    var u = ph(),
      a = gh();
    (Dt !== t || pt !== e) && ((ai = null), Pn(t, e)), (e = !1);
    var s = Yt;
    t: do
      try {
        if (Tt !== 0 && dt !== null) {
          var d = dt,
            E = Re;
          switch (Tt) {
            case 8:
              Of(), (s = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ce.current === null && (e = !0);
              var _ = Tt;
              if (((Tt = 0), (Re = null), tu(t, d, E, _), l && kn)) {
                s = 0;
                break t;
              }
              break;
            default:
              (_ = Tt), (Tt = 0), (Re = null), tu(t, d, E, _);
          }
        }
        Hy(), (s = Yt);
        break;
      } catch (C) {
        mh(t, C);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ol = nn = null),
      (bt = n),
      (N.H = u),
      (N.A = a),
      dt === null && ((Dt = null), (pt = 0), Ua()),
      s
    );
  }
  function Hy() {
    for (; dt !== null; ) vh(dt);
  }
  function qy(t, e) {
    var l = bt;
    bt |= 2;
    var n = ph(),
      u = gh();
    Dt !== t || pt !== e
      ? ((ai = null), (ui = ie() + 500), Pn(t, e))
      : (kn = ct(t, e));
    t: do
      try {
        if (Tt !== 0 && dt !== null) {
          e = dt;
          var a = Re;
          e: switch (Tt) {
            case 1:
              (Tt = 0), (Re = null), tu(t, e, a, 1);
              break;
            case 2:
            case 9:
              if (Do(a)) {
                (Tt = 0), (Re = null), Sh(e);
                break;
              }
              (e = function () {
                (Tt !== 2 && Tt !== 9) || Dt !== t || (Tt = 7), $e(t);
              }),
                a.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              Do(a)
                ? ((Tt = 0), (Re = null), Sh(e))
                : ((Tt = 0), (Re = null), tu(t, e, a, 7));
              break;
            case 5:
              var s = null;
              switch (dt.tag) {
                case 26:
                  s = dt.memoizedState;
                case 5:
                case 27:
                  var d = dt;
                  if (!s || td(s)) {
                    (Tt = 0), (Re = null);
                    var E = d.sibling;
                    if (E !== null) dt = E;
                    else {
                      var _ = d.return;
                      _ !== null ? ((dt = _), ci(_)) : (dt = null);
                    }
                    break e;
                  }
              }
              (Tt = 0), (Re = null), tu(t, e, a, 5);
              break;
            case 6:
              (Tt = 0), (Re = null), tu(t, e, a, 6);
              break;
            case 8:
              Of(), (Yt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        Ly();
        break;
      } catch (C) {
        mh(t, C);
      }
    while (!0);
    return (
      (ol = nn = null),
      (N.H = n),
      (N.A = u),
      (bt = l),
      dt !== null ? 0 : ((Dt = null), (pt = 0), Ua(), Yt)
    );
  }
  function Ly() {
    for (; dt !== null && !ma(); ) vh(dt);
  }
  function vh(t) {
    var e = Vs(t.alternate, t, vl);
    (t.memoizedProps = t.pendingProps), e === null ? ci(t) : (dt = e);
  }
  function Sh(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = js(l, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = js(l, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        Gc(e);
      default:
        Js(l, e), (e = dt = Eo(e, vl)), (e = Vs(l, e, vl));
    }
    (t.memoizedProps = t.pendingProps), e === null ? ci(t) : (dt = e);
  }
  function tu(t, e, l, n) {
    (ol = nn = null), Gc(e), (Vn = null), (ju = 0);
    var u = e.return;
    try {
      if (_y(t, u, e, l, pt)) {
        (Yt = 1), Ia(t, ze(l, t.current)), (dt = null);
        return;
      }
    } catch (a) {
      if (u !== null) throw ((dt = u), a);
      (Yt = 1), Ia(t, ze(l, t.current)), (dt = null);
      return;
    }
    e.flags & 32768
      ? (St || n === 1
          ? (t = !0)
          : kn || (pt & 536870912) !== 0
          ? (t = !1)
          : ((Cl = t = !0),
            (n === 2 || n === 9 || n === 3 || n === 6) &&
              ((n = Ce.current),
              n !== null && n.tag === 13 && (n.flags |= 16384))),
        Eh(e, t))
      : ci(e);
  }
  function ci(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Eh(e, Cl);
        return;
      }
      t = e.return;
      var l = By(e.alternate, e, vl);
      if (l !== null) {
        dt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        dt = e;
        return;
      }
      dt = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function Eh(t, e) {
    do {
      var l = Dy(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (dt = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        dt = t;
        return;
      }
      dt = t = l;
    } while (t !== null);
    (Yt = 6), (dt = null);
  }
  function bh(t, e, l, n, u, a, s, d, E) {
    t.cancelPendingCommit = null;
    do fi();
    while (le !== 0);
    if ((bt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((a = e.lanes | e.childLanes),
        (a |= pc),
        p0(t, l, a, s, d, E),
        t === Dt && ((dt = Dt = null), (pt = 0)),
        (Wn = e),
        (Ll = t),
        (In = l),
        (Tf = a),
        (Af = u),
        (sh = n),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Xy(Sn, function () {
              return xh(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (n = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || n)
      ) {
        (n = N.T), (N.T = null), (u = Q.p), (Q.p = 2), (s = bt), (bt |= 4);
        try {
          zy(t, e, l);
        } finally {
          (bt = s), (Q.p = u), (N.T = n);
        }
      }
      (le = 1), Th(), Ah(), Rh();
    }
  }
  function Th() {
    if (le === 1) {
      le = 0;
      var t = Ll,
        e = Wn,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = N.T), (N.T = null);
        var n = Q.p;
        Q.p = 2;
        var u = bt;
        bt |= 4;
        try {
          uh(e, t);
          var a = jf,
            s = ro(t.containerInfo),
            d = a.focusedElem,
            E = a.selectionRange;
          if (
            s !== d &&
            d &&
            d.ownerDocument &&
            fo(d.ownerDocument.documentElement, d)
          ) {
            if (E !== null && sc(d)) {
              var _ = E.start,
                C = E.end;
              if ((C === void 0 && (C = _), "selectionStart" in d))
                (d.selectionStart = _),
                  (d.selectionEnd = Math.min(C, d.value.length));
              else {
                var L = d.ownerDocument || document,
                  U = (L && L.defaultView) || window;
                if (U.getSelection) {
                  var z = U.getSelection(),
                    ut = d.textContent.length,
                    tt = Math.min(E.start, ut),
                    Ot = E.end === void 0 ? tt : Math.min(E.end, ut);
                  !z.extend && tt > Ot && ((s = Ot), (Ot = tt), (tt = s));
                  var O = co(d, tt),
                    A = co(d, Ot);
                  if (
                    O &&
                    A &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== O.node ||
                      z.anchorOffset !== O.offset ||
                      z.focusNode !== A.node ||
                      z.focusOffset !== A.offset)
                  ) {
                    var x = L.createRange();
                    x.setStart(O.node, O.offset),
                      z.removeAllRanges(),
                      tt > Ot
                        ? (z.addRange(x), z.extend(A.node, A.offset))
                        : (x.setEnd(A.node, A.offset), z.addRange(x));
                  }
                }
              }
            }
            for (L = [], z = d; (z = z.parentNode); )
              z.nodeType === 1 &&
                L.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < L.length;
              d++
            ) {
              var q = L[d];
              (q.element.scrollLeft = q.left), (q.element.scrollTop = q.top);
            }
          }
          (Ei = !!Lf), (jf = Lf = null);
        } finally {
          (bt = u), (Q.p = n), (N.T = l);
        }
      }
      (t.current = e), (le = 2);
    }
  }
  function Ah() {
    if (le === 2) {
      le = 0;
      var t = Ll,
        e = Wn,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = N.T), (N.T = null);
        var n = Q.p;
        Q.p = 2;
        var u = bt;
        bt |= 4;
        try {
          th(t, e.alternate, e);
        } finally {
          (bt = u), (Q.p = n), (N.T = l);
        }
      }
      le = 3;
    }
  }
  function Rh() {
    if (le === 4 || le === 3) {
      (le = 0), Tl();
      var t = Ll,
        e = Wn,
        l = In,
        n = sh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (le = 5)
        : ((le = 0), (Wn = Ll = null), Oh(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (ql = null),
        Zi(l),
        (e = e.stateNode),
        se && typeof se.onCommitFiberRoot == "function")
      )
        try {
          se.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        (e = N.T), (u = Q.p), (Q.p = 2), (N.T = null);
        try {
          for (var a = t.onRecoverableError, s = 0; s < n.length; s++) {
            var d = n[s];
            a(d.value, { componentStack: d.stack });
          }
        } finally {
          (N.T = e), (Q.p = u);
        }
      }
      (In & 3) !== 0 && fi(),
        $e(t),
        (u = t.pendingLanes),
        (l & 4194090) !== 0 && (u & 42) !== 0
          ? t === Rf
            ? Fu++
            : ((Fu = 0), (Rf = t))
          : (Fu = 0),
        ku(0);
    }
  }
  function Oh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Uu(e)));
  }
  function fi(t) {
    return Th(), Ah(), Rh(), xh();
  }
  function xh() {
    if (le !== 5) return !1;
    var t = Ll,
      e = Tf;
    Tf = 0;
    var l = Zi(In),
      n = N.T,
      u = Q.p;
    try {
      (Q.p = 32 > l ? 32 : l), (N.T = null), (l = Af), (Af = null);
      var a = Ll,
        s = In;
      if (((le = 0), (Wn = Ll = null), (In = 0), (bt & 6) !== 0))
        throw Error(o(331));
      var d = bt;
      if (
        ((bt |= 4),
        rh(a.current),
        ih(a, a.current, s, l),
        (bt = d),
        ku(0, !1),
        se && typeof se.onPostCommitFiberRoot == "function")
      )
        try {
          se.onPostCommitFiberRoot(ul, a);
        } catch {}
      return !0;
    } finally {
      (Q.p = u), (N.T = n), Oh(t, e);
    }
  }
  function _h(t, e, l) {
    (e = ze(l, e)),
      (e = ef(t.stateNode, e, 2)),
      (t = Ul(t, e, 2)),
      t !== null && (hu(t, 2), $e(t));
  }
  function Ut(t, e, l) {
    if (t.tag === 3) _h(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _h(e, t, l);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (ql === null || !ql.has(n)))
          ) {
            (t = ze(l, t)),
              (l = zs(2)),
              (n = Ul(e, l, 2)),
              n !== null && (Ms(l, n, e, t), hu(n, 2), $e(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Uf(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new Ny();
      var u = new Set();
      n.set(e, u);
    } else (u = n.get(e)), u === void 0 && ((u = new Set()), n.set(e, u));
    u.has(l) ||
      ((vf = !0), u.add(l), (t = jy.bind(null, t, e, l)), e.then(t, t));
  }
  function jy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Dt === t &&
        (pt & l) === l &&
        (Yt === 4 || (Yt === 3 && (pt & 62914560) === pt && 300 > ie() - bf)
          ? (bt & 2) === 0 && Pn(t, 0)
          : (Sf |= l),
        $n === pt && ($n = 0)),
      $e(t);
  }
  function Uh(t, e) {
    e === 0 && (e = wt()), (t = Cn(t, e)), t !== null && (hu(t, e), $e(t));
  }
  function Yy(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Uh(t, l);
  }
  function Gy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var n = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    n !== null && n.delete(e), Uh(t, l);
  }
  function Xy(t, e) {
    return gn(t, e);
  }
  var ri = null,
    eu = null,
    Bf = !1,
    oi = !1,
    Df = !1,
    sn = 0;
  function $e(t) {
    t !== eu &&
      t.next === null &&
      (eu === null ? (ri = eu = t) : (eu = eu.next = t)),
      (oi = !0),
      Bf || ((Bf = !0), Zy());
  }
  function ku(t, e) {
    if (!Df && oi) {
      Df = !0;
      do
        for (var l = !1, n = ri; n !== null; ) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var a = 0;
            else {
              var s = n.suspendedLanes,
                d = n.pingedLanes;
              (a = (1 << (31 - he(42 | t) + 1)) - 1),
                (a &= u & ~(s & ~d)),
                (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0);
            }
            a !== 0 && ((l = !0), Mh(n, a));
          } else
            (a = pt),
              (a = H(
                n,
                n === Dt ? a : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (a & 3) === 0 || ct(n, a) || ((l = !0), Mh(n, a));
          n = n.next;
        }
      while (l);
      Df = !1;
    }
  }
  function Qy() {
    Bh();
  }
  function Bh() {
    oi = Bf = !1;
    var t = 0;
    sn !== 0 && (Iy() && (t = sn), (sn = 0));
    for (var e = ie(), l = null, n = ri; n !== null; ) {
      var u = n.next,
        a = Dh(n, e);
      a === 0
        ? ((n.next = null),
          l === null ? (ri = u) : (l.next = u),
          u === null && (eu = l))
        : ((l = n), (t !== 0 || (a & 3) !== 0) && (oi = !0)),
        (n = u);
    }
    ku(t);
  }
  function Dh(t, e) {
    for (
      var l = t.suspendedLanes,
        n = t.pingedLanes,
        u = t.expirationTimes,
        a = t.pendingLanes & -62914561;
      0 < a;

    ) {
      var s = 31 - he(a),
        d = 1 << s,
        E = u[s];
      E === -1
        ? ((d & l) === 0 || (d & n) !== 0) && (u[s] = Nt(d, e))
        : E <= e && (t.expiredLanes |= d),
        (a &= ~d);
    }
    if (
      ((e = Dt),
      (l = pt),
      (l = H(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (n = t.callbackNode),
      l === 0 ||
        (t === e && (Tt === 2 || Tt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && ou(n),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || ct(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((n !== null && ou(n), Zi(l))) {
        case 2:
        case 8:
          l = vn;
          break;
        case 32:
          l = Sn;
          break;
        case 268435456:
          l = su;
          break;
        default:
          l = Sn;
      }
      return (
        (n = zh.bind(null, t)),
        (l = gn(l, n)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      n !== null && n !== null && ou(n),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function zh(t, e) {
    if (le !== 0 && le !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (fi() && t.callbackNode !== l) return null;
    var n = pt;
    return (
      (n = H(
        t,
        t === Dt ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      n === 0
        ? null
        : (dh(t, n, e),
          Dh(t, ie()),
          t.callbackNode != null && t.callbackNode === l
            ? zh.bind(null, t)
            : null)
    );
  }
  function Mh(t, e) {
    if (fi()) return null;
    dh(t, e, !0);
  }
  function Zy() {
    tm(function () {
      (bt & 6) !== 0 ? gn(pa, Qy) : Bh();
    });
  }
  function zf() {
    return sn === 0 && (sn = _t()), sn;
  }
  function wh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ba("" + t);
  }
  function Nh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Vy(t, e, l, n, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var a = wh((u[ye] || null).action),
        s = n.submitter;
      s &&
        ((e = (e = s[ye] || null)
          ? wh(e.formAction)
          : s.getAttribute("formAction")),
        e !== null && ((a = e), (s = null)));
      var d = new Oa("action", "action", null, n, u);
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (sn !== 0) {
                  var E = s ? Nh(u, s) : new FormData(u);
                  $c(
                    l,
                    { pending: !0, data: E, method: u.method, action: a },
                    null,
                    E
                  );
                }
              } else
                typeof a == "function" &&
                  (d.preventDefault(),
                  (E = s ? Nh(u, s) : new FormData(u)),
                  $c(
                    l,
                    { pending: !0, data: E, method: u.method, action: a },
                    a,
                    E
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Mf = 0; Mf < mc.length; Mf++) {
    var wf = mc[Mf],
      Ky = wf.toLowerCase(),
      Jy = wf[0].toUpperCase() + wf.slice(1);
    Xe(Ky, "on" + Jy);
  }
  Xe(ho, "onAnimationEnd"),
    Xe(yo, "onAnimationIteration"),
    Xe(mo, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(oy, "onTransitionRun"),
    Xe(sy, "onTransitionStart"),
    Xe(hy, "onTransitionCancel"),
    Xe(po, "onTransitionEnd"),
    On("onMouseEnter", ["mouseout", "mouseover"]),
    On("onMouseLeave", ["mouseout", "mouseover"]),
    On("onPointerEnter", ["pointerout", "pointerover"]),
    On("onPointerLeave", ["pointerout", "pointerover"]),
    Fl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Fl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Fl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Fl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Fl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Fl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var $u =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Fy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat($u)
    );
  function Ch(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l],
        u = n.event;
      n = n.listeners;
      t: {
        var a = void 0;
        if (e)
          for (var s = n.length - 1; 0 <= s; s--) {
            var d = n[s],
              E = d.instance,
              _ = d.currentTarget;
            if (((d = d.listener), E !== a && u.isPropagationStopped()))
              break t;
            (a = d), (u.currentTarget = _);
            try {
              a(u);
            } catch (C) {
              Wa(C);
            }
            (u.currentTarget = null), (a = E);
          }
        else
          for (s = 0; s < n.length; s++) {
            if (
              ((d = n[s]),
              (E = d.instance),
              (_ = d.currentTarget),
              (d = d.listener),
              E !== a && u.isPropagationStopped())
            )
              break t;
            (a = d), (u.currentTarget = _);
            try {
              a(u);
            } catch (C) {
              Wa(C);
            }
            (u.currentTarget = null), (a = E);
          }
      }
    }
  }
  function yt(t, e) {
    var l = e[Vi];
    l === void 0 && (l = e[Vi] = new Set());
    var n = t + "__bubble";
    l.has(n) || (Hh(e, t, 2, !1), l.add(n));
  }
  function Nf(t, e, l) {
    var n = 0;
    e && (n |= 4), Hh(l, t, n, e);
  }
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function Cf(t) {
    if (!t[si]) {
      (t[si] = !0),
        Ur.forEach(function (l) {
          l !== "selectionchange" && (Fy.has(l) || Nf(l, !1, t), Nf(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[si] || ((e[si] = !0), Nf("selectionchange", !1, e));
    }
  }
  function Hh(t, e, l, n) {
    switch (id(e)) {
      case 2:
        var u = bm;
        break;
      case 8:
        u = Tm;
        break;
      default:
        u = kf;
    }
    (l = u.bind(null, e, l, t)),
      (u = void 0),
      !lc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      n
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
        ? t.addEventListener(e, l, { passive: u })
        : t.addEventListener(e, l, !1);
  }
  function Hf(t, e, l, n, u) {
    var a = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (;;) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var d = n.stateNode.containerInfo;
          if (d === u) break;
          if (s === 4)
            for (s = n.return; s !== null; ) {
              var E = s.tag;
              if ((E === 3 || E === 4) && s.stateNode.containerInfo === u)
                return;
              s = s.return;
            }
          for (; d !== null; ) {
            if (((s = Tn(d)), s === null)) return;
            if (((E = s.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              n = a = s;
              continue t;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    Xr(function () {
      var _ = a,
        C = tc(l),
        L = [];
      t: {
        var U = go.get(t);
        if (U !== void 0) {
          var z = Oa,
            ut = t;
          switch (t) {
            case "keypress":
              if (Aa(l) === 0) break t;
            case "keydown":
            case "keyup":
              z = X0;
              break;
            case "focusin":
              (ut = "focus"), (z = ic);
              break;
            case "focusout":
              (ut = "blur"), (z = ic);
              break;
            case "beforeblur":
            case "afterblur":
              z = ic;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Vr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = D0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = V0;
              break;
            case ho:
            case yo:
            case mo:
              z = w0;
              break;
            case po:
              z = J0;
              break;
            case "scroll":
            case "scrollend":
              z = U0;
              break;
            case "wheel":
              z = k0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = C0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Jr;
              break;
            case "toggle":
            case "beforetoggle":
              z = W0;
          }
          var tt = (e & 4) !== 0,
            Ot = !tt && (t === "scroll" || t === "scrollend"),
            O = tt ? (U !== null ? U + "Capture" : null) : U;
          tt = [];
          for (var A = _, x; A !== null; ) {
            var q = A;
            if (
              ((x = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                x === null ||
                O === null ||
                ((q = mu(A, O)), q != null && tt.push(Wu(A, q, x))),
              Ot)
            )
              break;
            A = A.return;
          }
          0 < tt.length &&
            ((U = new z(U, ut, null, l, C)),
            L.push({ event: U, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            U &&
              l !== Pi &&
              (ut = l.relatedTarget || l.fromElement) &&
              (Tn(ut) || ut[bn]))
          )
            break t;
          if (
            (z || U) &&
            ((U =
              C.window === C
                ? C
                : (U = C.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            z
              ? ((ut = l.relatedTarget || l.toElement),
                (z = _),
                (ut = ut ? Tn(ut) : null),
                ut !== null &&
                  ((Ot = v(ut)),
                  (tt = ut.tag),
                  ut !== Ot || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (ut = null))
              : ((z = null), (ut = _)),
            z !== ut)
          ) {
            if (
              ((tt = Vr),
              (q = "onMouseLeave"),
              (O = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = Jr),
                (q = "onPointerLeave"),
                (O = "onPointerEnter"),
                (A = "pointer")),
              (Ot = z == null ? U : yu(z)),
              (x = ut == null ? U : yu(ut)),
              (U = new tt(q, A + "leave", z, l, C)),
              (U.target = Ot),
              (U.relatedTarget = x),
              (q = null),
              Tn(C) === _ &&
                ((tt = new tt(O, A + "enter", ut, l, C)),
                (tt.target = x),
                (tt.relatedTarget = Ot),
                (q = tt)),
              (Ot = q),
              z && ut)
            )
              e: {
                for (tt = z, O = ut, A = 0, x = tt; x; x = lu(x)) A++;
                for (x = 0, q = O; q; q = lu(q)) x++;
                for (; 0 < A - x; ) (tt = lu(tt)), A--;
                for (; 0 < x - A; ) (O = lu(O)), x--;
                for (; A--; ) {
                  if (tt === O || (O !== null && tt === O.alternate)) break e;
                  (tt = lu(tt)), (O = lu(O));
                }
                tt = null;
              }
            else tt = null;
            z !== null && qh(L, U, z, tt, !1),
              ut !== null && Ot !== null && qh(L, Ot, ut, tt, !0);
          }
        }
        t: {
          if (
            ((U = _ ? yu(_) : window),
            (z = U.nodeName && U.nodeName.toLowerCase()),
            z === "select" || (z === "input" && U.type === "file"))
          )
            var F = eo;
          else if (Pr(U))
            if (lo) F = cy;
            else {
              F = ay;
              var ht = uy;
            }
          else
            (z = U.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? _ && Ii(_.elementType) && (F = eo)
                : (F = iy);
          if (F && (F = F(t, _))) {
            to(L, F, l, C);
            break t;
          }
          ht && ht(t, U, _),
            t === "focusout" &&
              _ &&
              U.type === "number" &&
              _.memoizedProps.value != null &&
              Wi(U, "number", U.value);
        }
        switch (((ht = _ ? yu(_) : window), t)) {
          case "focusin":
            (Pr(ht) || ht.contentEditable === "true") &&
              ((Mn = ht), (hc = _), (Au = null));
            break;
          case "focusout":
            Au = hc = Mn = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (dc = !1), oo(L, l, C);
            break;
          case "selectionchange":
            if (ry) break;
          case "keydown":
          case "keyup":
            oo(L, l, C);
        }
        var $;
        if (fc)
          t: {
            switch (t) {
              case "compositionstart":
                var et = "onCompositionStart";
                break t;
              case "compositionend":
                et = "onCompositionEnd";
                break t;
              case "compositionupdate":
                et = "onCompositionUpdate";
                break t;
            }
            et = void 0;
          }
        else
          zn
            ? Wr(t, l) && (et = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (et = "onCompositionStart");
        et &&
          (Fr &&
            l.locale !== "ko" &&
            (zn || et !== "onCompositionStart"
              ? et === "onCompositionEnd" && zn && ($ = Qr())
              : ((Rl = C),
                (nc = "value" in Rl ? Rl.value : Rl.textContent),
                (zn = !0))),
          (ht = hi(_, et)),
          0 < ht.length &&
            ((et = new Kr(et, t, null, l, C)),
            L.push({ event: et, listeners: ht }),
            $ ? (et.data = $) : (($ = Ir(l)), $ !== null && (et.data = $)))),
          ($ = P0 ? ty(t, l) : ey(t, l)) &&
            ((et = hi(_, "onBeforeInput")),
            0 < et.length &&
              ((ht = new Kr("onBeforeInput", "beforeinput", null, l, C)),
              L.push({ event: ht, listeners: et }),
              (ht.data = $))),
          Vy(L, t, _, l, C);
      }
      Ch(L, e);
    });
  }
  function Wu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function hi(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var u = t,
        a = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          a === null ||
          ((u = mu(t, l)),
          u != null && n.unshift(Wu(t, u, a)),
          (u = mu(t, e)),
          u != null && n.push(Wu(t, u, a))),
        t.tag === 3)
      )
        return n;
      t = t.return;
    }
    return [];
  }
  function lu(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qh(t, e, l, n, u) {
    for (var a = e._reactName, s = []; l !== null && l !== n; ) {
      var d = l,
        E = d.alternate,
        _ = d.stateNode;
      if (((d = d.tag), E !== null && E === n)) break;
      (d !== 5 && d !== 26 && d !== 27) ||
        _ === null ||
        ((E = _),
        u
          ? ((_ = mu(l, a)), _ != null && s.unshift(Wu(l, _, E)))
          : u || ((_ = mu(l, a)), _ != null && s.push(Wu(l, _, E)))),
        (l = l.return);
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var ky = /\r\n?/g,
    $y = /\u0000|\uFFFD/g;
  function Lh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        ky,
        `
`
      )
      .replace($y, "");
  }
  function jh(t, e) {
    return (e = Lh(e)), Lh(t) === e;
  }
  function di() {}
  function Rt(t, e, l, n, u, a) {
    switch (l) {
      case "children":
        typeof n == "string"
          ? e === "body" || (e === "textarea" && n === "") || Un(t, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            e !== "body" &&
            Un(t, "" + n);
        break;
      case "className":
        va(t, "class", n);
        break;
      case "tabIndex":
        va(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        va(t, l, n);
        break;
      case "style":
        Yr(t, n, a);
        break;
      case "data":
        if (e !== "object") {
          va(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (n = ba("" + n)), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof a == "function" &&
            (l === "formAction"
              ? (e !== "input" && Rt(t, e, "name", u.name, u, null),
                Rt(t, e, "formEncType", u.formEncType, u, null),
                Rt(t, e, "formMethod", u.formMethod, u, null),
                Rt(t, e, "formTarget", u.formTarget, u, null))
              : (Rt(t, e, "encType", u.encType, u, null),
                Rt(t, e, "method", u.method, u, null),
                Rt(t, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (n = ba("" + n)), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = di);
        break;
      case "onScroll":
        n != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = ba("" + n)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(l, "" + n)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0
          ? t.setAttribute(l, "")
          : n !== !1 &&
            n != null &&
            typeof n != "function" &&
            typeof n != "symbol"
          ? t.setAttribute(l, n)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? t.setAttribute(l, n)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? t.removeAttribute(l)
          : t.setAttribute(l, n);
        break;
      case "popover":
        yt("beforetoggle", t), yt("toggle", t), ga(t, "popover", n);
        break;
      case "xlinkActuate":
        al(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        al(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        al(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        al(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        al(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        al(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        al(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        al(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        al(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        ga(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = x0.get(l) || l), ga(t, l, n));
    }
  }
  function qf(t, e, l, n, u, a) {
    switch (l) {
      case "style":
        Yr(t, n, a);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? Un(t, n)
          : (typeof n == "number" || typeof n == "bigint") && Un(t, "" + n);
        break;
      case "onScroll":
        n != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && yt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = di);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Br.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (a = t[ye] || null),
              (a = a != null ? a[l] : null),
              typeof a == "function" && t.removeEventListener(e, a, u),
              typeof n == "function")
            ) {
              typeof a != "function" &&
                a !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, n, u);
              break t;
            }
            l in t
              ? (t[l] = n)
              : n === !0
              ? t.setAttribute(l, "")
              : ga(t, l, n);
          }
    }
  }
  function ne(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        yt("error", t), yt("load", t);
        var n = !1,
          u = !1,
          a;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var s = l[a];
            if (s != null)
              switch (a) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Rt(t, e, a, s, l, null);
              }
          }
        u && Rt(t, e, "srcSet", l.srcSet, l, null),
          n && Rt(t, e, "src", l.src, l, null);
        return;
      case "input":
        yt("invalid", t);
        var d = (a = s = u = null),
          E = null,
          _ = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var C = l[n];
            if (C != null)
              switch (n) {
                case "name":
                  u = C;
                  break;
                case "type":
                  s = C;
                  break;
                case "checked":
                  E = C;
                  break;
                case "defaultChecked":
                  _ = C;
                  break;
                case "value":
                  a = C;
                  break;
                case "defaultValue":
                  d = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null) throw Error(o(137, e));
                  break;
                default:
                  Rt(t, e, n, C, l, null);
              }
          }
        Hr(t, a, d, E, _, s, u, !1), Sa(t);
        return;
      case "select":
        yt("invalid", t), (n = s = a = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((d = l[u]), d != null))
            switch (u) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "multiple":
                n = d;
              default:
                Rt(t, e, u, d, l, null);
            }
        (e = a),
          (l = s),
          (t.multiple = !!n),
          e != null ? _n(t, !!n, e, !1) : l != null && _n(t, !!n, l, !0);
        return;
      case "textarea":
        yt("invalid", t), (a = u = n = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((d = l[s]), d != null))
            switch (s) {
              case "value":
                n = d;
                break;
              case "defaultValue":
                u = d;
                break;
              case "children":
                a = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(o(91));
                break;
              default:
                Rt(t, e, s, d, l, null);
            }
        Lr(t, n, u, a), Sa(t);
        return;
      case "option":
        for (E in l)
          if (l.hasOwnProperty(E) && ((n = l[E]), n != null))
            switch (E) {
              case "selected":
                t.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                Rt(t, e, E, n, l, null);
            }
        return;
      case "dialog":
        yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $u.length; n++) yt($u[n], t);
        break;
      case "image":
        yt("error", t), yt("load", t);
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        yt("error", t), yt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in l)
          if (l.hasOwnProperty(_) && ((n = l[_]), n != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Rt(t, e, _, n, l, null);
            }
        return;
      default:
        if (Ii(e)) {
          for (C in l)
            l.hasOwnProperty(C) &&
              ((n = l[C]), n !== void 0 && qf(t, e, C, n, l, void 0));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((n = l[d]), n != null && Rt(t, e, d, n, l, null));
  }
  function Wy(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          a = null,
          s = null,
          d = null,
          E = null,
          _ = null,
          C = null;
        for (z in l) {
          var L = l[z];
          if (l.hasOwnProperty(z) && L != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = L;
              default:
                n.hasOwnProperty(z) || Rt(t, e, z, null, n, L);
            }
        }
        for (var U in n) {
          var z = n[U];
          if (((L = l[U]), n.hasOwnProperty(U) && (z != null || L != null)))
            switch (U) {
              case "type":
                a = z;
                break;
              case "name":
                u = z;
                break;
              case "checked":
                _ = z;
                break;
              case "defaultChecked":
                C = z;
                break;
              case "value":
                s = z;
                break;
              case "defaultValue":
                d = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(o(137, e));
                break;
              default:
                z !== L && Rt(t, e, U, z, n, L);
            }
        }
        $i(t, s, d, E, _, C, a, u);
        return;
      case "select":
        z = s = d = U = null;
        for (a in l)
          if (((E = l[a]), l.hasOwnProperty(a) && E != null))
            switch (a) {
              case "value":
                break;
              case "multiple":
                z = E;
              default:
                n.hasOwnProperty(a) || Rt(t, e, a, null, n, E);
            }
        for (u in n)
          if (
            ((a = n[u]),
            (E = l[u]),
            n.hasOwnProperty(u) && (a != null || E != null))
          )
            switch (u) {
              case "value":
                U = a;
                break;
              case "defaultValue":
                d = a;
                break;
              case "multiple":
                s = a;
              default:
                a !== E && Rt(t, e, u, a, n, E);
            }
        (e = d),
          (l = s),
          (n = z),
          U != null
            ? _n(t, !!l, U, !1)
            : !!n != !!l &&
              (e != null ? _n(t, !!l, e, !0) : _n(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = U = null;
        for (d in l)
          if (
            ((u = l[d]),
            l.hasOwnProperty(d) && u != null && !n.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Rt(t, e, d, null, n, u);
            }
        for (s in n)
          if (
            ((u = n[s]),
            (a = l[s]),
            n.hasOwnProperty(s) && (u != null || a != null))
          )
            switch (s) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                z = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== a && Rt(t, e, s, u, n, a);
            }
        qr(t, U, z);
        return;
      case "option":
        for (var ut in l)
          if (
            ((U = l[ut]),
            l.hasOwnProperty(ut) && U != null && !n.hasOwnProperty(ut))
          )
            switch (ut) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Rt(t, e, ut, null, n, U);
            }
        for (E in n)
          if (
            ((U = n[E]),
            (z = l[E]),
            n.hasOwnProperty(E) && U !== z && (U != null || z != null))
          )
            switch (E) {
              case "selected":
                t.selected =
                  U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Rt(t, e, E, U, n, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in l)
          (U = l[tt]),
            l.hasOwnProperty(tt) &&
              U != null &&
              !n.hasOwnProperty(tt) &&
              Rt(t, e, tt, null, n, U);
        for (_ in n)
          if (
            ((U = n[_]),
            (z = l[_]),
            n.hasOwnProperty(_) && U !== z && (U != null || z != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(o(137, e));
                break;
              default:
                Rt(t, e, _, U, n, z);
            }
        return;
      default:
        if (Ii(e)) {
          for (var Ot in l)
            (U = l[Ot]),
              l.hasOwnProperty(Ot) &&
                U !== void 0 &&
                !n.hasOwnProperty(Ot) &&
                qf(t, e, Ot, void 0, n, U);
          for (C in n)
            (U = n[C]),
              (z = l[C]),
              !n.hasOwnProperty(C) ||
                U === z ||
                (U === void 0 && z === void 0) ||
                qf(t, e, C, U, n, z);
          return;
        }
    }
    for (var O in l)
      (U = l[O]),
        l.hasOwnProperty(O) &&
          U != null &&
          !n.hasOwnProperty(O) &&
          Rt(t, e, O, null, n, U);
    for (L in n)
      (U = n[L]),
        (z = l[L]),
        !n.hasOwnProperty(L) ||
          U === z ||
          (U == null && z == null) ||
          Rt(t, e, L, U, n, z);
  }
  var Lf = null,
    jf = null;
  function yi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Yh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Yf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gf = null;
  function Iy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Gf
        ? !1
        : ((Gf = t), !0)
      : ((Gf = null), !1);
  }
  var Xh = typeof setTimeout == "function" ? setTimeout : void 0,
    Py = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qh = typeof Promise == "function" ? Promise : void 0,
    tm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qh < "u"
        ? function (t) {
            return Qh.resolve(null).then(t).catch(em);
          }
        : Xh;
  function em(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Yl(t) {
    return t === "head";
  }
  function Zh(t, e) {
    var l = e,
      n = 0,
      u = 0;
    do {
      var a = l.nextSibling;
      if ((t.removeChild(l), a && a.nodeType === 8))
        if (((l = a.data), l === "/$")) {
          if (0 < n && 8 > n) {
            l = n;
            var s = t.ownerDocument;
            if ((l & 1 && Iu(s.documentElement), l & 2 && Iu(s.body), l & 4))
              for (l = s.head, Iu(l), s = l.firstChild; s; ) {
                var d = s.nextSibling,
                  E = s.nodeName;
                s[du] ||
                  E === "SCRIPT" ||
                  E === "STYLE" ||
                  (E === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(s),
                  (s = d);
              }
          }
          if (u === 0) {
            t.removeChild(a), ia(e);
            return;
          }
          u--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? u++
            : (n = l.charCodeAt(0) - 48);
      else n = 0;
      l = a;
    } while (l);
    ia(e);
  }
  function Xf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xf(l), Ki(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function lm(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[du])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((a = t.getAttribute("rel")),
                a === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                a !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((a = t.getAttribute("src")),
                (a !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  a &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var a = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === a) return t;
      } else return t;
      if (((t = Ze(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function nm(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Qf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function um(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var n = function () {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), (t._reactRetry = n);
    }
  }
  function Ze(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Zf = null;
  function Vh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Kh(t, e, l) {
    switch (((e = yi(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Iu(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ki(t);
  }
  var qe = new Map(),
    Jh = new Set();
  function mi(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Sl = Q.d;
  Q.d = { f: am, r: im, D: cm, C: fm, L: rm, m: om, X: hm, S: sm, M: dm };
  function am() {
    var t = Sl.f(),
      e = ii();
    return t || e;
  }
  function im(t) {
    var e = An(t);
    e !== null && e.tag === 5 && e.type === "form" ? ds(e) : Sl.r(t);
  }
  var nu = typeof document > "u" ? null : document;
  function Fh(t, e, l) {
    var n = nu;
    if (n && typeof e == "string" && e) {
      var u = De(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        Jh.has(u) ||
          (Jh.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          n.querySelector(u) === null &&
            ((e = n.createElement("link")),
            ne(e, "link", t),
            $t(e),
            n.head.appendChild(e)));
    }
  }
  function cm(t) {
    Sl.D(t), Fh("dns-prefetch", t, null);
  }
  function fm(t, e) {
    Sl.C(t, e), Fh("preconnect", t, e);
  }
  function rm(t, e, l) {
    Sl.L(t, e, l);
    var n = nu;
    if (n && t && e) {
      var u = 'link[rel="preload"][as="' + De(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + De(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + De(l.imageSizes) + '"]'))
        : (u += '[href="' + De(t) + '"]');
      var a = u;
      switch (e) {
        case "style":
          a = uu(t);
          break;
        case "script":
          a = au(t);
      }
      qe.has(a) ||
        ((t = p(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        qe.set(a, t),
        n.querySelector(u) !== null ||
          (e === "style" && n.querySelector(Pu(a))) ||
          (e === "script" && n.querySelector(ta(a))) ||
          ((e = n.createElement("link")),
          ne(e, "link", t),
          $t(e),
          n.head.appendChild(e)));
    }
  }
  function om(t, e) {
    Sl.m(t, e);
    var l = nu;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + De(n) + '"][href="' + De(t) + '"]',
        a = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a = au(t);
      }
      if (
        !qe.has(a) &&
        ((t = p({ rel: "modulepreload", href: t }, e)),
        qe.set(a, t),
        l.querySelector(u) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ta(a))) return;
        }
        (n = l.createElement("link")),
          ne(n, "link", t),
          $t(n),
          l.head.appendChild(n);
      }
    }
  }
  function sm(t, e, l) {
    Sl.S(t, e, l);
    var n = nu;
    if (n && t) {
      var u = Rn(n).hoistableStyles,
        a = uu(t);
      e = e || "default";
      var s = u.get(a);
      if (!s) {
        var d = { loading: 0, preload: null };
        if ((s = n.querySelector(Pu(a)))) d.loading = 5;
        else {
          (t = p({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = qe.get(a)) && Vf(t, l);
          var E = (s = n.createElement("link"));
          $t(E),
            ne(E, "link", t),
            (E._p = new Promise(function (_, C) {
              (E.onload = _), (E.onerror = C);
            })),
            E.addEventListener("load", function () {
              d.loading |= 1;
            }),
            E.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            pi(s, e, n);
        }
        (s = { type: "stylesheet", instance: s, count: 1, state: d }),
          u.set(a, s);
      }
    }
  }
  function hm(t, e) {
    Sl.X(t, e);
    var l = nu;
    if (l && t) {
      var n = Rn(l).hoistableScripts,
        u = au(t),
        a = n.get(u);
      a ||
        ((a = l.querySelector(ta(u))),
        a ||
          ((t = p({ src: t, async: !0 }, e)),
          (e = qe.get(u)) && Kf(t, e),
          (a = l.createElement("script")),
          $t(a),
          ne(a, "link", t),
          l.head.appendChild(a)),
        (a = { type: "script", instance: a, count: 1, state: null }),
        n.set(u, a));
    }
  }
  function dm(t, e) {
    Sl.M(t, e);
    var l = nu;
    if (l && t) {
      var n = Rn(l).hoistableScripts,
        u = au(t),
        a = n.get(u);
      a ||
        ((a = l.querySelector(ta(u))),
        a ||
          ((t = p({ src: t, async: !0, type: "module" }, e)),
          (e = qe.get(u)) && Kf(t, e),
          (a = l.createElement("script")),
          $t(a),
          ne(a, "link", t),
          l.head.appendChild(a)),
        (a = { type: "script", instance: a, count: 1, state: null }),
        n.set(u, a));
    }
  }
  function kh(t, e, l, n) {
    var u = (u = it.current) ? mi(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = uu(l.href)),
            (l = Rn(u).hoistableStyles),
            (n = l.get(e)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = uu(l.href);
          var a = Rn(u).hoistableStyles,
            s = a.get(t);
          if (
            (s ||
              ((u = u.ownerDocument || u),
              (s = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              a.set(t, s),
              (a = u.querySelector(Pu(t))) &&
                !a._p &&
                ((s.instance = a), (s.state.loading = 5)),
              qe.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                qe.set(t, l),
                a || ym(u, t, l, s.state))),
            e && n === null)
          )
            throw Error(o(528, ""));
          return s;
        }
        if (e && n !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = au(l)),
              (l = Rn(u).hoistableScripts),
              (n = l.get(e)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function uu(t) {
    return 'href="' + De(t) + '"';
  }
  function Pu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function $h(t) {
    return p({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function ym(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (n.loading = 1)
      : ((e = t.createElement("link")),
        (n.preload = e),
        e.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        ne(e, "link", l),
        $t(e),
        t.head.appendChild(e));
  }
  function au(t) {
    return '[src="' + De(t) + '"]';
  }
  function ta(t) {
    return "script[async]" + t;
  }
  function Wh(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var n = t.querySelector('style[data-href~="' + De(l.href) + '"]');
          if (n) return (e.instance = n), $t(n), n;
          var u = p({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (t.ownerDocument || t).createElement("style")),
            $t(n),
            ne(n, "style", u),
            pi(n, l.precedence, t),
            (e.instance = n)
          );
        case "stylesheet":
          u = uu(l.href);
          var a = t.querySelector(Pu(u));
          if (a) return (e.state.loading |= 4), (e.instance = a), $t(a), a;
          (n = $h(l)),
            (u = qe.get(u)) && Vf(n, u),
            (a = (t.ownerDocument || t).createElement("link")),
            $t(a);
          var s = a;
          return (
            (s._p = new Promise(function (d, E) {
              (s.onload = d), (s.onerror = E);
            })),
            ne(a, "link", n),
            (e.state.loading |= 4),
            pi(a, l.precedence, t),
            (e.instance = a)
          );
        case "script":
          return (
            (a = au(l.src)),
            (u = t.querySelector(ta(a)))
              ? ((e.instance = u), $t(u), u)
              : ((n = l),
                (u = qe.get(a)) && ((n = p({}, l)), Kf(n, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                $t(u),
                ne(u, "link", n),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((n = e.instance), (e.state.loading |= 4), pi(n, l.precedence, t));
    return e.instance;
  }
  function pi(t, e, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = n.length ? n[n.length - 1] : null,
        a = u,
        s = 0;
      s < n.length;
      s++
    ) {
      var d = n[s];
      if (d.dataset.precedence === e) a = d;
      else if (a !== u) break;
    }
    a
      ? a.parentNode.insertBefore(t, a.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Vf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Kf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var gi = null;
  function Ih(t, e, l) {
    if (gi === null) {
      var n = new Map(),
        u = (gi = new Map());
      u.set(l, n);
    } else (u = gi), (n = u.get(l)), n || ((n = new Map()), u.set(l, n));
    if (n.has(t)) return n;
    for (
      n.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var a = l[u];
      if (
        !(
          a[du] ||
          a[ce] ||
          (t === "link" && a.getAttribute("rel") === "stylesheet")
        ) &&
        a.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var s = a.getAttribute(e) || "";
        s = t + s;
        var d = n.get(s);
        d ? d.push(a) : n.set(s, [a]);
      }
    }
    return n;
  }
  function Ph(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function mm(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function td(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ea = null;
  function pm() {}
  function gm(t, e, l) {
    if (ea === null) throw Error(o(475));
    var n = ea;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = uu(l.href),
          a = t.querySelector(Pu(u));
        if (a) {
          (t = a._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (n.count++, (n = vi.bind(n)), t.then(n, n)),
            (e.state.loading |= 4),
            (e.instance = a),
            $t(a);
          return;
        }
        (a = t.ownerDocument || t),
          (l = $h(l)),
          (u = qe.get(u)) && Vf(l, u),
          (a = a.createElement("link")),
          $t(a);
        var s = a;
        (s._p = new Promise(function (d, E) {
          (s.onload = d), (s.onerror = E);
        })),
          ne(a, "link", l),
          (e.instance = a);
      }
      n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (n.count++,
          (e = vi.bind(n)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function vm() {
    if (ea === null) throw Error(o(475));
    var t = ea;
    return (
      t.stylesheets && t.count === 0 && Jf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Jf(t, t.stylesheets), t.unsuspend)) {
                var n = t.unsuspend;
                (t.unsuspend = null), n();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function vi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Jf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Si = null;
  function Jf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Si = new Map()),
        e.forEach(Sm, t),
        (Si = null),
        vi.call(t));
  }
  function Sm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Si.get(t);
      if (l) var n = l.get(null);
      else {
        (l = new Map()), Si.set(t, l);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            a = 0;
          a < u.length;
          a++
        ) {
          var s = u[a];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
            (l.set(s.dataset.precedence, s), (n = s));
        }
        n && l.set(null, n);
      }
      (u = e.instance),
        (s = u.getAttribute("data-precedence")),
        (a = l.get(s) || n),
        a === n && l.set(null, u),
        l.set(s, u),
        this.count++,
        (n = vi.bind(this)),
        u.addEventListener("load", n),
        u.addEventListener("error", n),
        a
          ? a.parentNode.insertBefore(u, a.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var la = {
    $$typeof: rt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Em(t, e, l, n, u, a, s, d) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = vt(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vt(0)),
      (this.hiddenUpdates = vt(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = u),
      (this.onCaughtError = a),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map());
  }
  function ed(t, e, l, n, u, a, s, d, E, _, C, L) {
    return (
      (t = new Em(t, e, l, s, d, E, _, L)),
      (e = 1),
      a === !0 && (e |= 24),
      (a = be(3, null, null, e)),
      (t.current = a),
      (a.stateNode = t),
      (e = _c()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (a.memoizedState = { element: n, isDehydrated: l, cache: e }),
      zc(a),
      t
    );
  }
  function ld(t) {
    return t ? ((t = Hn), t) : Hn;
  }
  function nd(t, e, l, n, u, a) {
    (u = ld(u)),
      n.context === null ? (n.context = u) : (n.pendingContext = u),
      (n = _l(e)),
      (n.payload = { element: l }),
      (a = a === void 0 ? null : a),
      a !== null && (n.callback = a),
      (l = Ul(t, n, e)),
      l !== null && (xe(l, t, e), Mu(l, t, e));
  }
  function ud(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Ff(t, e) {
    ud(t, e), (t = t.alternate) && ud(t, e);
  }
  function ad(t) {
    if (t.tag === 13) {
      var e = Cn(t, 67108864);
      e !== null && xe(e, t, 67108864), Ff(t, 67108864);
    }
  }
  var Ei = !0;
  function bm(t, e, l, n) {
    var u = N.T;
    N.T = null;
    var a = Q.p;
    try {
      (Q.p = 2), kf(t, e, l, n);
    } finally {
      (Q.p = a), (N.T = u);
    }
  }
  function Tm(t, e, l, n) {
    var u = N.T;
    N.T = null;
    var a = Q.p;
    try {
      (Q.p = 8), kf(t, e, l, n);
    } finally {
      (Q.p = a), (N.T = u);
    }
  }
  function kf(t, e, l, n) {
    if (Ei) {
      var u = $f(n);
      if (u === null) Hf(t, e, n, bi, l), cd(t, n);
      else if (Rm(u, t, e, l, n)) n.stopPropagation();
      else if ((cd(t, n), e & 4 && -1 < Am.indexOf(t))) {
        for (; u !== null; ) {
          var a = An(u);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                  var s = D(a.pendingLanes);
                  if (s !== 0) {
                    var d = a;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var E = 1 << (31 - he(s));
                      (d.entanglements[1] |= E), (s &= ~E);
                    }
                    $e(a), (bt & 6) === 0 && ((ui = ie() + 500), ku(0));
                  }
                }
                break;
              case 13:
                (d = Cn(a, 2)), d !== null && xe(d, a, 2), ii(), Ff(a, 2);
            }
          if (((a = $f(n)), a === null && Hf(t, e, n, bi, l), a === u)) break;
          u = a;
        }
        u !== null && n.stopPropagation();
      } else Hf(t, e, n, null, l);
    }
  }
  function $f(t) {
    return (t = tc(t)), Wf(t);
  }
  var bi = null;
  function Wf(t) {
    if (((bi = null), (t = Tn(t)), t !== null)) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (bi = t), null;
  }
  function id(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Gi()) {
          case pa:
            return 2;
          case vn:
            return 8;
          case Sn:
          case Xi:
            return 32;
          case su:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var If = !1,
    Gl = null,
    Xl = null,
    Ql = null,
    na = new Map(),
    ua = new Map(),
    Zl = [],
    Am =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function cd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Gl = null;
        break;
      case "dragenter":
      case "dragleave":
        Xl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ql = null;
        break;
      case "pointerover":
      case "pointerout":
        na.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ua.delete(e.pointerId);
    }
  }
  function aa(t, e, l, n, u, a) {
    return t === null || t.nativeEvent !== a
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: a,
          targetContainers: [u],
        }),
        e !== null && ((e = An(e)), e !== null && ad(e)),
        t)
      : ((t.eventSystemFlags |= n),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Rm(t, e, l, n, u) {
    switch (e) {
      case "focusin":
        return (Gl = aa(Gl, t, e, l, n, u)), !0;
      case "dragenter":
        return (Xl = aa(Xl, t, e, l, n, u)), !0;
      case "mouseover":
        return (Ql = aa(Ql, t, e, l, n, u)), !0;
      case "pointerover":
        var a = u.pointerId;
        return na.set(a, aa(na.get(a) || null, t, e, l, n, u)), !0;
      case "gotpointercapture":
        return (
          (a = u.pointerId), ua.set(a, aa(ua.get(a) || null, t, e, l, n, u)), !0
        );
    }
    return !1;
  }
  function fd(t) {
    var e = Tn(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            (t.blockedOn = e),
              g0(t.priority, function () {
                if (l.tag === 13) {
                  var n = Oe();
                  n = Qi(n);
                  var u = Cn(l, n);
                  u !== null && xe(u, l, n), Ff(l, n);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ti(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = $f(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(l.type, l);
        (Pi = n), l.target.dispatchEvent(n), (Pi = null);
      } else return (e = An(l)), e !== null && ad(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function rd(t, e, l) {
    Ti(t) && l.delete(e);
  }
  function Om() {
    (If = !1),
      Gl !== null && Ti(Gl) && (Gl = null),
      Xl !== null && Ti(Xl) && (Xl = null),
      Ql !== null && Ti(Ql) && (Ql = null),
      na.forEach(rd),
      ua.forEach(rd);
  }
  function Ai(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      If ||
        ((If = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Om)));
  }
  var Ri = null;
  function od(t) {
    Ri !== t &&
      ((Ri = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Ri === t && (Ri = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            n = t[e + 1],
            u = t[e + 2];
          if (typeof n != "function") {
            if (Wf(n || l) === null) continue;
            break;
          }
          var a = An(l);
          a !== null &&
            (t.splice(e, 3),
            (e -= 3),
            $c(a, { pending: !0, data: u, method: l.method, action: n }, n, u));
        }
      }));
  }
  function ia(t) {
    function e(E) {
      return Ai(E, t);
    }
    Gl !== null && Ai(Gl, t),
      Xl !== null && Ai(Xl, t),
      Ql !== null && Ai(Ql, t),
      na.forEach(e),
      ua.forEach(e);
    for (var l = 0; l < Zl.length; l++) {
      var n = Zl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Zl.length && ((l = Zl[0]), l.blockedOn === null); )
      fd(l), l.blockedOn === null && Zl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var u = l[n],
          a = l[n + 1],
          s = u[ye] || null;
        if (typeof a == "function") s || od(l);
        else if (s) {
          var d = null;
          if (a && a.hasAttribute("formAction")) {
            if (((u = a), (s = a[ye] || null))) d = s.formAction;
            else if (Wf(u) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? (l[n + 1] = d) : (l.splice(n, 3), (n -= 3)),
            od(l);
        }
      }
  }
  function Pf(t) {
    this._internalRoot = t;
  }
  (Oi.prototype.render = Pf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var l = e.current,
        n = Oe();
      nd(l, n, t, e, null, null);
    }),
    (Oi.prototype.unmount = Pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          nd(t.current, 2, null, t, null, null), ii(), (e[bn] = null);
        }
      });
  function Oi(t) {
    this._internalRoot = t;
  }
  Oi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = xr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Zl.length && e !== 0 && e < Zl[l].priority; l++);
      Zl.splice(l, 0, t), l === 0 && fd(t);
    }
  };
  var sd = r.version;
  if (sd !== "19.1.0") throw Error(o(527, sd, "19.1.0"));
  Q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = M(e)),
      (t = t !== null ? b(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var xm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber)
      try {
        (ul = xi.inject(xm)), (se = xi);
      } catch {}
  }
  return (
    (fa.createRoot = function (t, e) {
      if (!m(t)) throw Error(o(299));
      var l = !1,
        n = "",
        u = _s,
        a = Us,
        s = Bs,
        d = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (a = e.onCaughtError),
          e.onRecoverableError !== void 0 && (s = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks)),
        (e = ed(t, 1, !1, null, null, l, n, u, a, s, d, null)),
        (t[bn] = e.current),
        Cf(t),
        new Pf(e)
      );
    }),
    (fa.hydrateRoot = function (t, e, l) {
      if (!m(t)) throw Error(o(299));
      var n = !1,
        u = "",
        a = _s,
        s = Us,
        d = Bs,
        E = null,
        _ = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (a = l.onUncaughtError),
          l.onCaughtError !== void 0 && (s = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (E = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (_ = l.formState)),
        (e = ed(t, 1, !0, e, l ?? null, n, u, a, s, d, E, _)),
        (e.context = ld(null)),
        (l = e.current),
        (n = Oe()),
        (n = Qi(n)),
        (u = _l(n)),
        (u.callback = null),
        Ul(l, u, n),
        (l = n),
        (e.current.lanes = l),
        hu(e, l),
        $e(e),
        (t[bn] = e.current),
        Cf(t),
        new Oi(e)
      );
    }),
    (fa.version = "19.1.0"),
    fa
  );
}
var bd;
function Ym() {
  if (bd) return lr.exports;
  bd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (lr.exports = jm()), lr.exports;
}
var Gm = Ym();
const Xm = Ld(Gm);
let Qm = () => mt.jsx("h1", { id: "title", children: "todos" });
const Zm = globalThis || void 0 || self;
function Qd(i, r) {
  return function () {
    return i.apply(r, arguments);
  };
}
const { toString: Vm } = Object.prototype,
  { getPrototypeOf: Er } = Object,
  wi = ((i) => (r) => {
    const h = Vm.call(r);
    return i[h] || (i[h] = h.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (i) => ((i = i.toLowerCase()), (r) => wi(r) === i),
  Ni = (i) => (r) => typeof r === i,
  { isArray: fu } = Array,
  ha = Ni("undefined");
function Km(i) {
  return (
    i !== null &&
    !ha(i) &&
    i.constructor !== null &&
    !ha(i.constructor) &&
    _e(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const Zd = Ve("ArrayBuffer");
function Jm(i) {
  let r;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(i))
      : (r = i && i.buffer && Zd(i.buffer)),
    r
  );
}
const Fm = Ni("string"),
  _e = Ni("function"),
  Vd = Ni("number"),
  Ci = (i) => i !== null && typeof i == "object",
  km = (i) => i === !0 || i === !1,
  Ui = (i) => {
    if (wi(i) !== "object") return !1;
    const r = Er(i);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Symbol.toStringTag in i) &&
      !(Symbol.iterator in i)
    );
  },
  $m = Ve("Date"),
  Wm = Ve("File"),
  Im = Ve("Blob"),
  Pm = Ve("FileList"),
  t1 = (i) => Ci(i) && _e(i.pipe),
  e1 = (i) => {
    let r;
    return (
      i &&
      ((typeof FormData == "function" && i instanceof FormData) ||
        (_e(i.append) &&
          ((r = wi(i)) === "formdata" ||
            (r === "object" &&
              _e(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  l1 = Ve("URLSearchParams"),
  [n1, u1, a1, i1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ve
  ),
  c1 = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function da(i, r, { allOwnKeys: h = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let o, m;
  if ((typeof i != "object" && (i = [i]), fu(i)))
    for (o = 0, m = i.length; o < m; o++) r.call(null, i[o], o, i);
  else {
    const v = h ? Object.getOwnPropertyNames(i) : Object.keys(i),
      S = v.length;
    let B;
    for (o = 0; o < S; o++) (B = v[o]), r.call(null, i[B], B, i);
  }
}
function Kd(i, r) {
  r = r.toLowerCase();
  const h = Object.keys(i);
  let o = h.length,
    m;
  for (; o-- > 0; ) if (((m = h[o]), r === m.toLowerCase())) return m;
  return null;
}
const dn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Zm,
  Jd = (i) => !ha(i) && i !== dn;
function dr() {
  const { caseless: i } = (Jd(this) && this) || {},
    r = {},
    h = (o, m) => {
      const v = (i && Kd(r, m)) || m;
      Ui(r[v]) && Ui(o)
        ? (r[v] = dr(r[v], o))
        : Ui(o)
        ? (r[v] = dr({}, o))
        : fu(o)
        ? (r[v] = o.slice())
        : (r[v] = o);
    };
  for (let o = 0, m = arguments.length; o < m; o++)
    arguments[o] && da(arguments[o], h);
  return r;
}
const f1 = (i, r, h, { allOwnKeys: o } = {}) => (
    da(
      r,
      (m, v) => {
        h && _e(m) ? (i[v] = Qd(m, h)) : (i[v] = m);
      },
      { allOwnKeys: o }
    ),
    i
  ),
  r1 = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  o1 = (i, r, h, o) => {
    (i.prototype = Object.create(r.prototype, o)),
      (i.prototype.constructor = i),
      Object.defineProperty(i, "super", { value: r.prototype }),
      h && Object.assign(i.prototype, h);
  },
  s1 = (i, r, h, o) => {
    let m, v, S;
    const B = {};
    if (((r = r || {}), i == null)) return r;
    do {
      for (m = Object.getOwnPropertyNames(i), v = m.length; v-- > 0; )
        (S = m[v]), (!o || o(S, i, r)) && !B[S] && ((r[S] = i[S]), (B[S] = !0));
      i = h !== !1 && Er(i);
    } while (i && (!h || h(i, r)) && i !== Object.prototype);
    return r;
  },
  h1 = (i, r, h) => {
    (i = String(i)),
      (h === void 0 || h > i.length) && (h = i.length),
      (h -= r.length);
    const o = i.indexOf(r, h);
    return o !== -1 && o === h;
  },
  d1 = (i) => {
    if (!i) return null;
    if (fu(i)) return i;
    let r = i.length;
    if (!Vd(r)) return null;
    const h = new Array(r);
    for (; r-- > 0; ) h[r] = i[r];
    return h;
  },
  y1 = (
    (i) => (r) =>
      i && r instanceof i
  )(typeof Uint8Array < "u" && Er(Uint8Array)),
  m1 = (i, r) => {
    const o = (i && i[Symbol.iterator]).call(i);
    let m;
    for (; (m = o.next()) && !m.done; ) {
      const v = m.value;
      r.call(i, v[0], v[1]);
    }
  },
  p1 = (i, r) => {
    let h;
    const o = [];
    for (; (h = i.exec(r)) !== null; ) o.push(h);
    return o;
  },
  g1 = Ve("HTMLFormElement"),
  v1 = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (h, o, m) {
      return o.toUpperCase() + m;
    }),
  Td = (
    ({ hasOwnProperty: i }) =>
    (r, h) =>
      i.call(r, h)
  )(Object.prototype),
  S1 = Ve("RegExp"),
  Fd = (i, r) => {
    const h = Object.getOwnPropertyDescriptors(i),
      o = {};
    da(h, (m, v) => {
      let S;
      (S = r(m, v, i)) !== !1 && (o[v] = S || m);
    }),
      Object.defineProperties(i, o);
  },
  E1 = (i) => {
    Fd(i, (r, h) => {
      if (_e(i) && ["arguments", "caller", "callee"].indexOf(h) !== -1)
        return !1;
      const o = i[h];
      if (_e(o)) {
        if (((r.enumerable = !1), "writable" in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + h + "'");
          });
      }
    });
  },
  b1 = (i, r) => {
    const h = {},
      o = (m) => {
        m.forEach((v) => {
          h[v] = !0;
        });
      };
    return fu(i) ? o(i) : o(String(i).split(r)), h;
  },
  T1 = () => {},
  A1 = (i, r) => (i != null && Number.isFinite((i = +i)) ? i : r);
function R1(i) {
  return !!(
    i &&
    _e(i.append) &&
    i[Symbol.toStringTag] === "FormData" &&
    i[Symbol.iterator]
  );
}
const O1 = (i) => {
    const r = new Array(10),
      h = (o, m) => {
        if (Ci(o)) {
          if (r.indexOf(o) >= 0) return;
          if (!("toJSON" in o)) {
            r[m] = o;
            const v = fu(o) ? [] : {};
            return (
              da(o, (S, B) => {
                const M = h(S, m + 1);
                !ha(M) && (v[B] = M);
              }),
              (r[m] = void 0),
              v
            );
          }
        }
        return o;
      };
    return h(i, 0);
  },
  x1 = Ve("AsyncFunction"),
  _1 = (i) => i && (Ci(i) || _e(i)) && _e(i.then) && _e(i.catch),
  kd = ((i, r) =>
    i
      ? setImmediate
      : r
      ? ((h, o) => (
          dn.addEventListener(
            "message",
            ({ source: m, data: v }) => {
              m === dn && v === h && o.length && o.shift()();
            },
            !1
          ),
          (m) => {
            o.push(m), dn.postMessage(h, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (h) => setTimeout(h))(
    typeof setImmediate == "function",
    _e(dn.postMessage)
  ),
  U1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(dn)
      : (typeof Kl < "u" && Kl.nextTick) || kd,
  w = {
    isArray: fu,
    isArrayBuffer: Zd,
    isBuffer: Km,
    isFormData: e1,
    isArrayBufferView: Jm,
    isString: Fm,
    isNumber: Vd,
    isBoolean: km,
    isObject: Ci,
    isPlainObject: Ui,
    isReadableStream: n1,
    isRequest: u1,
    isResponse: a1,
    isHeaders: i1,
    isUndefined: ha,
    isDate: $m,
    isFile: Wm,
    isBlob: Im,
    isRegExp: S1,
    isFunction: _e,
    isStream: t1,
    isURLSearchParams: l1,
    isTypedArray: y1,
    isFileList: Pm,
    forEach: da,
    merge: dr,
    extend: f1,
    trim: c1,
    stripBOM: r1,
    inherits: o1,
    toFlatObject: s1,
    kindOf: wi,
    kindOfTest: Ve,
    endsWith: h1,
    toArray: d1,
    forEachEntry: m1,
    matchAll: p1,
    isHTMLForm: g1,
    hasOwnProperty: Td,
    hasOwnProp: Td,
    reduceDescriptors: Fd,
    freezeMethods: E1,
    toObjectSet: b1,
    toCamelCase: v1,
    noop: T1,
    toFiniteNumber: A1,
    findKey: Kd,
    global: dn,
    isContextDefined: Jd,
    isSpecCompliantForm: R1,
    toJSONObject: O1,
    isAsyncFn: x1,
    isThenable: _1,
    setImmediate: kd,
    asap: U1,
  };
var $d = {},
  Hi = {};
Hi.byteLength = z1;
Hi.toByteArray = w1;
Hi.fromByteArray = H1;
var tl = [],
  Le = [],
  B1 = typeof Uint8Array < "u" ? Uint8Array : Array,
  ir = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var iu = 0, D1 = ir.length; iu < D1; ++iu)
  (tl[iu] = ir[iu]), (Le[ir.charCodeAt(iu)] = iu);
Le[45] = 62;
Le[95] = 63;
function Wd(i) {
  var r = i.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var h = i.indexOf("=");
  h === -1 && (h = r);
  var o = h === r ? 0 : 4 - (h % 4);
  return [h, o];
}
function z1(i) {
  var r = Wd(i),
    h = r[0],
    o = r[1];
  return ((h + o) * 3) / 4 - o;
}
function M1(i, r, h) {
  return ((r + h) * 3) / 4 - h;
}
function w1(i) {
  var r,
    h = Wd(i),
    o = h[0],
    m = h[1],
    v = new B1(M1(i, o, m)),
    S = 0,
    B = m > 0 ? o - 4 : o,
    M;
  for (M = 0; M < B; M += 4)
    (r =
      (Le[i.charCodeAt(M)] << 18) |
      (Le[i.charCodeAt(M + 1)] << 12) |
      (Le[i.charCodeAt(M + 2)] << 6) |
      Le[i.charCodeAt(M + 3)]),
      (v[S++] = (r >> 16) & 255),
      (v[S++] = (r >> 8) & 255),
      (v[S++] = r & 255);
  return (
    m === 2 &&
      ((r = (Le[i.charCodeAt(M)] << 2) | (Le[i.charCodeAt(M + 1)] >> 4)),
      (v[S++] = r & 255)),
    m === 1 &&
      ((r =
        (Le[i.charCodeAt(M)] << 10) |
        (Le[i.charCodeAt(M + 1)] << 4) |
        (Le[i.charCodeAt(M + 2)] >> 2)),
      (v[S++] = (r >> 8) & 255),
      (v[S++] = r & 255)),
    v
  );
}
function N1(i) {
  return (
    tl[(i >> 18) & 63] + tl[(i >> 12) & 63] + tl[(i >> 6) & 63] + tl[i & 63]
  );
}
function C1(i, r, h) {
  for (var o, m = [], v = r; v < h; v += 3)
    (o =
      ((i[v] << 16) & 16711680) + ((i[v + 1] << 8) & 65280) + (i[v + 2] & 255)),
      m.push(N1(o));
  return m.join("");
}
function H1(i) {
  for (
    var r, h = i.length, o = h % 3, m = [], v = 16383, S = 0, B = h - o;
    S < B;
    S += v
  )
    m.push(C1(i, S, S + v > B ? B : S + v));
  return (
    o === 1
      ? ((r = i[h - 1]), m.push(tl[r >> 2] + tl[(r << 4) & 63] + "=="))
      : o === 2 &&
        ((r = (i[h - 2] << 8) + i[h - 1]),
        m.push(tl[r >> 10] + tl[(r >> 4) & 63] + tl[(r << 2) & 63] + "=")),
    m.join("")
  );
}
var br = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ br.read =
  function (i, r, h, o, m) {
    var v,
      S,
      B = m * 8 - o - 1,
      M = (1 << B) - 1,
      b = M >> 1,
      p = -7,
      j = h ? m - 1 : 0,
      J = h ? -1 : 1,
      I = i[r + j];
    for (
      j += J, v = I & ((1 << -p) - 1), I >>= -p, p += B;
      p > 0;
      v = v * 256 + i[r + j], j += J, p -= 8
    );
    for (
      S = v & ((1 << -p) - 1), v >>= -p, p += o;
      p > 0;
      S = S * 256 + i[r + j], j += J, p -= 8
    );
    if (v === 0) v = 1 - b;
    else {
      if (v === M) return S ? NaN : (I ? -1 : 1) * (1 / 0);
      (S = S + Math.pow(2, o)), (v = v - b);
    }
    return (I ? -1 : 1) * S * Math.pow(2, v - o);
  };
br.write = function (i, r, h, o, m, v) {
  var S,
    B,
    M,
    b = v * 8 - m - 1,
    p = (1 << b) - 1,
    j = p >> 1,
    J = m === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    I = o ? 0 : v - 1,
    X = o ? 1 : -1,
    k = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
  for (
    r = Math.abs(r),
      isNaN(r) || r === 1 / 0
        ? ((B = isNaN(r) ? 1 : 0), (S = p))
        : ((S = Math.floor(Math.log(r) / Math.LN2)),
          r * (M = Math.pow(2, -S)) < 1 && (S--, (M *= 2)),
          S + j >= 1 ? (r += J / M) : (r += J * Math.pow(2, 1 - j)),
          r * M >= 2 && (S++, (M /= 2)),
          S + j >= p
            ? ((B = 0), (S = p))
            : S + j >= 1
            ? ((B = (r * M - 1) * Math.pow(2, m)), (S = S + j))
            : ((B = r * Math.pow(2, j - 1) * Math.pow(2, m)), (S = 0)));
    m >= 8;
    i[h + I] = B & 255, I += X, B /= 256, m -= 8
  );
  for (
    S = (S << m) | B, b += m;
    b > 0;
    i[h + I] = S & 255, I += X, S /= 256, b -= 8
  );
  i[h + I - X] |= k * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (i) {
  const r = Hi,
    h = br,
    o =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (i.Buffer = p), (i.SlowBuffer = lt), (i.INSPECT_MAX_BYTES = 50);
  const m = 2147483647;
  i.kMaxLength = m;
  const { Uint8Array: v, ArrayBuffer: S, SharedArrayBuffer: B } = globalThis;
  (p.TYPED_ARRAY_SUPPORT = M()),
    !p.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function M() {
    try {
      const y = new v(1),
        c = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(c, v.prototype),
        Object.setPrototypeOf(y, c),
        y.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(p.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (p.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(p.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (p.isBuffer(this)) return this.byteOffset;
      },
    });
  function b(y) {
    if (y > m)
      throw new RangeError(
        'The value "' + y + '" is invalid for option "size"'
      );
    const c = new v(y);
    return Object.setPrototypeOf(c, p.prototype), c;
  }
  function p(y, c, f) {
    if (typeof y == "number") {
      if (typeof c == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return X(y);
    }
    return j(y, c, f);
  }
  p.poolSize = 8192;
  function j(y, c, f) {
    if (typeof y == "string") return k(y, c);
    if (S.isView(y)) return nt(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof y
      );
    if (
      Ue(y, S) ||
      (y && Ue(y.buffer, S)) ||
      (typeof B < "u" && (Ue(y, B) || (y && Ue(y.buffer, B))))
    )
      return W(y, c, f);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = y.valueOf && y.valueOf();
    if (g != null && g !== y) return p.from(g, c, f);
    const R = rt(y);
    if (R) return R;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof y[Symbol.toPrimitive] == "function"
    )
      return p.from(y[Symbol.toPrimitive]("string"), c, f);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof y
    );
  }
  (p.from = function (y, c, f) {
    return j(y, c, f);
  }),
    Object.setPrototypeOf(p.prototype, v.prototype),
    Object.setPrototypeOf(p, v);
  function J(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError(
        'The value "' + y + '" is invalid for option "size"'
      );
  }
  function I(y, c, f) {
    return (
      J(y),
      y <= 0
        ? b(y)
        : c !== void 0
        ? typeof f == "string"
          ? b(y).fill(c, f)
          : b(y).fill(c)
        : b(y)
    );
  }
  p.alloc = function (y, c, f) {
    return I(y, c, f);
  };
  function X(y) {
    return J(y), b(y < 0 ? 0 : zt(y) | 0);
  }
  (p.allocUnsafe = function (y) {
    return X(y);
  }),
    (p.allocUnsafeSlow = function (y) {
      return X(y);
    });
  function k(y, c) {
    if (((typeof c != "string" || c === "") && (c = "utf8"), !p.isEncoding(c)))
      throw new TypeError("Unknown encoding: " + c);
    const f = Mt(y, c) | 0;
    let g = b(f);
    const R = g.write(y, c);
    return R !== f && (g = g.slice(0, R)), g;
  }
  function Y(y) {
    const c = y.length < 0 ? 0 : zt(y.length) | 0,
      f = b(c);
    for (let g = 0; g < c; g += 1) f[g] = y[g] & 255;
    return f;
  }
  function nt(y) {
    if (Ue(y, v)) {
      const c = new v(y);
      return W(c.buffer, c.byteOffset, c.byteLength);
    }
    return Y(y);
  }
  function W(y, c, f) {
    if (c < 0 || y.byteLength < c)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < c + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return (
      c === void 0 && f === void 0
        ? (g = new v(y))
        : f === void 0
        ? (g = new v(y, c))
        : (g = new v(y, c, f)),
      Object.setPrototypeOf(g, p.prototype),
      g
    );
  }
  function rt(y) {
    if (p.isBuffer(y)) {
      const c = zt(y.length) | 0,
        f = b(c);
      return f.length === 0 || y.copy(f, 0, 0, c), f;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || ul(y.length) ? b(0) : Y(y);
    if (y.type === "Buffer" && Array.isArray(y.data)) return Y(y.data);
  }
  function zt(y) {
    if (y >= m)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          m.toString(16) +
          " bytes"
      );
    return y | 0;
  }
  function lt(y) {
    return +y != y && (y = 0), p.alloc(+y);
  }
  (p.isBuffer = function (c) {
    return c != null && c._isBuffer === !0 && c !== p.prototype;
  }),
    (p.compare = function (c, f) {
      if (
        (Ue(c, v) && (c = p.from(c, c.offset, c.byteLength)),
        Ue(f, v) && (f = p.from(f, f.offset, f.byteLength)),
        !p.isBuffer(c) || !p.isBuffer(f))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (c === f) return 0;
      let g = c.length,
        R = f.length;
      for (let D = 0, H = Math.min(g, R); D < H; ++D)
        if (c[D] !== f[D]) {
          (g = c[D]), (R = f[D]);
          break;
        }
      return g < R ? -1 : R < g ? 1 : 0;
    }),
    (p.isEncoding = function (c) {
      switch (String(c).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (p.concat = function (c, f) {
      if (!Array.isArray(c))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (c.length === 0) return p.alloc(0);
      let g;
      if (f === void 0) for (f = 0, g = 0; g < c.length; ++g) f += c[g].length;
      const R = p.allocUnsafe(f);
      let D = 0;
      for (g = 0; g < c.length; ++g) {
        let H = c[g];
        if (Ue(H, v))
          D + H.length > R.length
            ? (p.isBuffer(H) || (H = p.from(H)), H.copy(R, D))
            : v.prototype.set.call(R, H, D);
        else if (p.isBuffer(H)) H.copy(R, D);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        D += H.length;
      }
      return R;
    });
  function Mt(y, c) {
    if (p.isBuffer(y)) return y.length;
    if (S.isView(y) || Ue(y, S)) return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof y
      );
    const f = y.length,
      g = arguments.length > 2 && arguments[2] === !0;
    if (!g && f === 0) return 0;
    let R = !1;
    for (;;)
      switch (c) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return vn(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return su(y).length;
        default:
          if (R) return g ? -1 : vn(y).length;
          (c = ("" + c).toLowerCase()), (R = !0);
      }
  }
  p.byteLength = Mt;
  function qt(y, c, f) {
    let g = !1;
    if (
      ((c === void 0 || c < 0) && (c = 0),
      c > this.length ||
        ((f === void 0 || f > this.length) && (f = this.length), f <= 0) ||
        ((f >>>= 0), (c >>>= 0), f <= c))
    )
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return K(this, c, f);
        case "utf8":
        case "utf-8":
          return Q(this, c, f);
        case "ascii":
          return T(this, c, f);
        case "latin1":
        case "binary":
          return G(this, c, f);
        case "base64":
          return N(this, c, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Z(this, c, f);
        default:
          if (g) throw new TypeError("Unknown encoding: " + y);
          (y = (y + "").toLowerCase()), (g = !0);
      }
  }
  p.prototype._isBuffer = !0;
  function Bt(y, c, f) {
    const g = y[c];
    (y[c] = y[f]), (y[f] = g);
  }
  (p.prototype.swap16 = function () {
    const c = this.length;
    if (c % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let f = 0; f < c; f += 2) Bt(this, f, f + 1);
    return this;
  }),
    (p.prototype.swap32 = function () {
      const c = this.length;
      if (c % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let f = 0; f < c; f += 4) Bt(this, f, f + 3), Bt(this, f + 1, f + 2);
      return this;
    }),
    (p.prototype.swap64 = function () {
      const c = this.length;
      if (c % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let f = 0; f < c; f += 8)
        Bt(this, f, f + 7),
          Bt(this, f + 1, f + 6),
          Bt(this, f + 2, f + 5),
          Bt(this, f + 3, f + 4);
      return this;
    }),
    (p.prototype.toString = function () {
      const c = this.length;
      return c === 0
        ? ""
        : arguments.length === 0
        ? Q(this, 0, c)
        : qt.apply(this, arguments);
    }),
    (p.prototype.toLocaleString = p.prototype.toString),
    (p.prototype.equals = function (c) {
      if (!p.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
      return this === c ? !0 : p.compare(this, c) === 0;
    }),
    (p.prototype.inspect = function () {
      let c = "";
      const f = i.INSPECT_MAX_BYTES;
      return (
        (c = this.toString("hex", 0, f)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > f && (c += " ... "),
        "<Buffer " + c + ">"
      );
    }),
    o && (p.prototype[o] = p.prototype.inspect),
    (p.prototype.compare = function (c, f, g, R, D) {
      if ((Ue(c, v) && (c = p.from(c, c.offset, c.byteLength)), !p.isBuffer(c)))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof c
        );
      if (
        (f === void 0 && (f = 0),
        g === void 0 && (g = c ? c.length : 0),
        R === void 0 && (R = 0),
        D === void 0 && (D = this.length),
        f < 0 || g > c.length || R < 0 || D > this.length)
      )
        throw new RangeError("out of range index");
      if (R >= D && f >= g) return 0;
      if (R >= D) return -1;
      if (f >= g) return 1;
      if (((f >>>= 0), (g >>>= 0), (R >>>= 0), (D >>>= 0), this === c))
        return 0;
      let H = D - R,
        ct = g - f;
      const Nt = Math.min(H, ct),
        _t = this.slice(R, D),
        wt = c.slice(f, g);
      for (let vt = 0; vt < Nt; ++vt)
        if (_t[vt] !== wt[vt]) {
          (H = _t[vt]), (ct = wt[vt]);
          break;
        }
      return H < ct ? -1 : ct < H ? 1 : 0;
    });
  function ue(y, c, f, g, R) {
    if (y.length === 0) return -1;
    if (
      (typeof f == "string"
        ? ((g = f), (f = 0))
        : f > 2147483647
        ? (f = 2147483647)
        : f < -2147483648 && (f = -2147483648),
      (f = +f),
      ul(f) && (f = R ? 0 : y.length - 1),
      f < 0 && (f = y.length + f),
      f >= y.length)
    ) {
      if (R) return -1;
      f = y.length - 1;
    } else if (f < 0)
      if (R) f = 0;
      else return -1;
    if ((typeof c == "string" && (c = p.from(c, g)), p.isBuffer(c)))
      return c.length === 0 ? -1 : el(y, c, f, g, R);
    if (typeof c == "number")
      return (
        (c = c & 255),
        typeof v.prototype.indexOf == "function"
          ? R
            ? v.prototype.indexOf.call(y, c, f)
            : v.prototype.lastIndexOf.call(y, c, f)
          : el(y, [c], f, g, R)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function el(y, c, f, g, R) {
    let D = 1,
      H = y.length,
      ct = c.length;
    if (
      g !== void 0 &&
      ((g = String(g).toLowerCase()),
      g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")
    ) {
      if (y.length < 2 || c.length < 2) return -1;
      (D = 2), (H /= 2), (ct /= 2), (f /= 2);
    }
    function Nt(wt, vt) {
      return D === 1 ? wt[vt] : wt.readUInt16BE(vt * D);
    }
    let _t;
    if (R) {
      let wt = -1;
      for (_t = f; _t < H; _t++)
        if (Nt(y, _t) === Nt(c, wt === -1 ? 0 : _t - wt)) {
          if ((wt === -1 && (wt = _t), _t - wt + 1 === ct)) return wt * D;
        } else wt !== -1 && (_t -= _t - wt), (wt = -1);
    } else
      for (f + ct > H && (f = H - ct), _t = f; _t >= 0; _t--) {
        let wt = !0;
        for (let vt = 0; vt < ct; vt++)
          if (Nt(y, _t + vt) !== Nt(c, vt)) {
            wt = !1;
            break;
          }
        if (wt) return _t;
      }
    return -1;
  }
  (p.prototype.includes = function (c, f, g) {
    return this.indexOf(c, f, g) !== -1;
  }),
    (p.prototype.indexOf = function (c, f, g) {
      return ue(this, c, f, g, !0);
    }),
    (p.prototype.lastIndexOf = function (c, f, g) {
      return ue(this, c, f, g, !1);
    });
  function je(y, c, f, g) {
    f = Number(f) || 0;
    const R = y.length - f;
    g ? ((g = Number(g)), g > R && (g = R)) : (g = R);
    const D = c.length;
    g > D / 2 && (g = D / 2);
    let H;
    for (H = 0; H < g; ++H) {
      const ct = parseInt(c.substr(H * 2, 2), 16);
      if (ul(ct)) return H;
      y[f + H] = ct;
    }
    return H;
  }
  function Ft(y, c, f, g) {
    return En(vn(c, y.length - f), y, f, g);
  }
  function ll(y, c, f, g) {
    return En(Sn(c), y, f, g);
  }
  function nl(y, c, f, g) {
    return En(su(c), y, f, g);
  }
  function kt(y, c, f, g) {
    return En(Xi(c, y.length - f), y, f, g);
  }
  (p.prototype.write = function (c, f, g, R) {
    if (f === void 0) (R = "utf8"), (g = this.length), (f = 0);
    else if (g === void 0 && typeof f == "string")
      (R = f), (g = this.length), (f = 0);
    else if (isFinite(f))
      (f = f >>> 0),
        isFinite(g)
          ? ((g = g >>> 0), R === void 0 && (R = "utf8"))
          : ((R = g), (g = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const D = this.length - f;
    if (
      ((g === void 0 || g > D) && (g = D),
      (c.length > 0 && (g < 0 || f < 0)) || f > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let H = !1;
    for (;;)
      switch (R) {
        case "hex":
          return je(this, c, f, g);
        case "utf8":
        case "utf-8":
          return Ft(this, c, f, g);
        case "ascii":
        case "latin1":
        case "binary":
          return ll(this, c, f, g);
        case "base64":
          return nl(this, c, f, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return kt(this, c, f, g);
        default:
          if (H) throw new TypeError("Unknown encoding: " + R);
          (R = ("" + R).toLowerCase()), (H = !0);
      }
  }),
    (p.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function N(y, c, f) {
    return c === 0 && f === y.length
      ? r.fromByteArray(y)
      : r.fromByteArray(y.slice(c, f));
  }
  function Q(y, c, f) {
    f = Math.min(y.length, f);
    const g = [];
    let R = c;
    for (; R < f; ) {
      const D = y[R];
      let H = null,
        ct = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (R + ct <= f) {
        let Nt, _t, wt, vt;
        switch (ct) {
          case 1:
            D < 128 && (H = D);
            break;
          case 2:
            (Nt = y[R + 1]),
              (Nt & 192) === 128 &&
                ((vt = ((D & 31) << 6) | (Nt & 63)), vt > 127 && (H = vt));
            break;
          case 3:
            (Nt = y[R + 1]),
              (_t = y[R + 2]),
              (Nt & 192) === 128 &&
                (_t & 192) === 128 &&
                ((vt = ((D & 15) << 12) | ((Nt & 63) << 6) | (_t & 63)),
                vt > 2047 && (vt < 55296 || vt > 57343) && (H = vt));
            break;
          case 4:
            (Nt = y[R + 1]),
              (_t = y[R + 2]),
              (wt = y[R + 3]),
              (Nt & 192) === 128 &&
                (_t & 192) === 128 &&
                (wt & 192) === 128 &&
                ((vt =
                  ((D & 15) << 18) |
                  ((Nt & 63) << 12) |
                  ((_t & 63) << 6) |
                  (wt & 63)),
                vt > 65535 && vt < 1114112 && (H = vt));
        }
      }
      H === null
        ? ((H = 65533), (ct = 1))
        : H > 65535 &&
          ((H -= 65536),
          g.push(((H >>> 10) & 1023) | 55296),
          (H = 56320 | (H & 1023))),
        g.push(H),
        (R += ct);
    }
    return Et(g);
  }
  const P = 4096;
  function Et(y) {
    const c = y.length;
    if (c <= P) return String.fromCharCode.apply(String, y);
    let f = "",
      g = 0;
    for (; g < c; )
      f += String.fromCharCode.apply(String, y.slice(g, (g += P)));
    return f;
  }
  function T(y, c, f) {
    let g = "";
    f = Math.min(y.length, f);
    for (let R = c; R < f; ++R) g += String.fromCharCode(y[R] & 127);
    return g;
  }
  function G(y, c, f) {
    let g = "";
    f = Math.min(y.length, f);
    for (let R = c; R < f; ++R) g += String.fromCharCode(y[R]);
    return g;
  }
  function K(y, c, f) {
    const g = y.length;
    (!c || c < 0) && (c = 0), (!f || f < 0 || f > g) && (f = g);
    let R = "";
    for (let D = c; D < f; ++D) R += se[y[D]];
    return R;
  }
  function Z(y, c, f) {
    const g = y.slice(c, f);
    let R = "";
    for (let D = 0; D < g.length - 1; D += 2)
      R += String.fromCharCode(g[D] + g[D + 1] * 256);
    return R;
  }
  p.prototype.slice = function (c, f) {
    const g = this.length;
    (c = ~~c),
      (f = f === void 0 ? g : ~~f),
      c < 0 ? ((c += g), c < 0 && (c = 0)) : c > g && (c = g),
      f < 0 ? ((f += g), f < 0 && (f = 0)) : f > g && (f = g),
      f < c && (f = c);
    const R = this.subarray(c, f);
    return Object.setPrototypeOf(R, p.prototype), R;
  };
  function V(y, c, f) {
    if (y % 1 !== 0 || y < 0) throw new RangeError("offset is not uint");
    if (y + c > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (p.prototype.readUintLE = p.prototype.readUIntLE =
    function (c, f, g) {
      (c = c >>> 0), (f = f >>> 0), g || V(c, f, this.length);
      let R = this[c],
        D = 1,
        H = 0;
      for (; ++H < f && (D *= 256); ) R += this[c + H] * D;
      return R;
    }),
    (p.prototype.readUintBE = p.prototype.readUIntBE =
      function (c, f, g) {
        (c = c >>> 0), (f = f >>> 0), g || V(c, f, this.length);
        let R = this[c + --f],
          D = 1;
        for (; f > 0 && (D *= 256); ) R += this[c + --f] * D;
        return R;
      }),
    (p.prototype.readUint8 = p.prototype.readUInt8 =
      function (c, f) {
        return (c = c >>> 0), f || V(c, 1, this.length), this[c];
      }),
    (p.prototype.readUint16LE = p.prototype.readUInt16LE =
      function (c, f) {
        return (
          (c = c >>> 0), f || V(c, 2, this.length), this[c] | (this[c + 1] << 8)
        );
      }),
    (p.prototype.readUint16BE = p.prototype.readUInt16BE =
      function (c, f) {
        return (
          (c = c >>> 0), f || V(c, 2, this.length), (this[c] << 8) | this[c + 1]
        );
      }),
    (p.prototype.readUint32LE = p.prototype.readUInt32LE =
      function (c, f) {
        return (
          (c = c >>> 0),
          f || V(c, 4, this.length),
          (this[c] | (this[c + 1] << 8) | (this[c + 2] << 16)) +
            this[c + 3] * 16777216
        );
      }),
    (p.prototype.readUint32BE = p.prototype.readUInt32BE =
      function (c, f) {
        return (
          (c = c >>> 0),
          f || V(c, 4, this.length),
          this[c] * 16777216 +
            ((this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3])
        );
      }),
    (p.prototype.readBigUInt64LE = te(function (c) {
      (c = c >>> 0), Tl(c, "offset");
      const f = this[c],
        g = this[c + 7];
      (f === void 0 || g === void 0) && ie(c, this.length - 8);
      const R =
          f + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24,
        D = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + g * 2 ** 24;
      return BigInt(R) + (BigInt(D) << BigInt(32));
    })),
    (p.prototype.readBigUInt64BE = te(function (c) {
      (c = c >>> 0), Tl(c, "offset");
      const f = this[c],
        g = this[c + 7];
      (f === void 0 || g === void 0) && ie(c, this.length - 8);
      const R =
          f * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c],
        D = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + g;
      return (BigInt(R) << BigInt(32)) + BigInt(D);
    })),
    (p.prototype.readIntLE = function (c, f, g) {
      (c = c >>> 0), (f = f >>> 0), g || V(c, f, this.length);
      let R = this[c],
        D = 1,
        H = 0;
      for (; ++H < f && (D *= 256); ) R += this[c + H] * D;
      return (D *= 128), R >= D && (R -= Math.pow(2, 8 * f)), R;
    }),
    (p.prototype.readIntBE = function (c, f, g) {
      (c = c >>> 0), (f = f >>> 0), g || V(c, f, this.length);
      let R = f,
        D = 1,
        H = this[c + --R];
      for (; R > 0 && (D *= 256); ) H += this[c + --R] * D;
      return (D *= 128), H >= D && (H -= Math.pow(2, 8 * f)), H;
    }),
    (p.prototype.readInt8 = function (c, f) {
      return (
        (c = c >>> 0),
        f || V(c, 1, this.length),
        this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
      );
    }),
    (p.prototype.readInt16LE = function (c, f) {
      (c = c >>> 0), f || V(c, 2, this.length);
      const g = this[c] | (this[c + 1] << 8);
      return g & 32768 ? g | 4294901760 : g;
    }),
    (p.prototype.readInt16BE = function (c, f) {
      (c = c >>> 0), f || V(c, 2, this.length);
      const g = this[c + 1] | (this[c] << 8);
      return g & 32768 ? g | 4294901760 : g;
    }),
    (p.prototype.readInt32LE = function (c, f) {
      return (
        (c = c >>> 0),
        f || V(c, 4, this.length),
        this[c] | (this[c + 1] << 8) | (this[c + 2] << 16) | (this[c + 3] << 24)
      );
    }),
    (p.prototype.readInt32BE = function (c, f) {
      return (
        (c = c >>> 0),
        f || V(c, 4, this.length),
        (this[c] << 24) | (this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3]
      );
    }),
    (p.prototype.readBigInt64LE = te(function (c) {
      (c = c >>> 0), Tl(c, "offset");
      const f = this[c],
        g = this[c + 7];
      (f === void 0 || g === void 0) && ie(c, this.length - 8);
      const R =
        this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (g << 24);
      return (
        (BigInt(R) << BigInt(32)) +
        BigInt(
          f + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24
        )
      );
    })),
    (p.prototype.readBigInt64BE = te(function (c) {
      (c = c >>> 0), Tl(c, "offset");
      const f = this[c],
        g = this[c + 7];
      (f === void 0 || g === void 0) && ie(c, this.length - 8);
      const R =
        (f << 24) + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
      return (
        (BigInt(R) << BigInt(32)) +
        BigInt(
          this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + g
        )
      );
    })),
    (p.prototype.readFloatLE = function (c, f) {
      return (
        (c = c >>> 0), f || V(c, 4, this.length), h.read(this, c, !0, 23, 4)
      );
    }),
    (p.prototype.readFloatBE = function (c, f) {
      return (
        (c = c >>> 0), f || V(c, 4, this.length), h.read(this, c, !1, 23, 4)
      );
    }),
    (p.prototype.readDoubleLE = function (c, f) {
      return (
        (c = c >>> 0), f || V(c, 8, this.length), h.read(this, c, !0, 52, 8)
      );
    }),
    (p.prototype.readDoubleBE = function (c, f) {
      return (
        (c = c >>> 0), f || V(c, 8, this.length), h.read(this, c, !1, 52, 8)
      );
    });
  function at(y, c, f, g, R, D) {
    if (!p.isBuffer(y))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > R || c < D)
      throw new RangeError('"value" argument is out of bounds');
    if (f + g > y.length) throw new RangeError("Index out of range");
  }
  (p.prototype.writeUintLE = p.prototype.writeUIntLE =
    function (c, f, g, R) {
      if (((c = +c), (f = f >>> 0), (g = g >>> 0), !R)) {
        const ct = Math.pow(2, 8 * g) - 1;
        at(this, c, f, g, ct, 0);
      }
      let D = 1,
        H = 0;
      for (this[f] = c & 255; ++H < g && (D *= 256); )
        this[f + H] = (c / D) & 255;
      return f + g;
    }),
    (p.prototype.writeUintBE = p.prototype.writeUIntBE =
      function (c, f, g, R) {
        if (((c = +c), (f = f >>> 0), (g = g >>> 0), !R)) {
          const ct = Math.pow(2, 8 * g) - 1;
          at(this, c, f, g, ct, 0);
        }
        let D = g - 1,
          H = 1;
        for (this[f + D] = c & 255; --D >= 0 && (H *= 256); )
          this[f + D] = (c / H) & 255;
        return f + g;
      }),
    (p.prototype.writeUint8 = p.prototype.writeUInt8 =
      function (c, f, g) {
        return (
          (c = +c),
          (f = f >>> 0),
          g || at(this, c, f, 1, 255, 0),
          (this[f] = c & 255),
          f + 1
        );
      }),
    (p.prototype.writeUint16LE = p.prototype.writeUInt16LE =
      function (c, f, g) {
        return (
          (c = +c),
          (f = f >>> 0),
          g || at(this, c, f, 2, 65535, 0),
          (this[f] = c & 255),
          (this[f + 1] = c >>> 8),
          f + 2
        );
      }),
    (p.prototype.writeUint16BE = p.prototype.writeUInt16BE =
      function (c, f, g) {
        return (
          (c = +c),
          (f = f >>> 0),
          g || at(this, c, f, 2, 65535, 0),
          (this[f] = c >>> 8),
          (this[f + 1] = c & 255),
          f + 2
        );
      }),
    (p.prototype.writeUint32LE = p.prototype.writeUInt32LE =
      function (c, f, g) {
        return (
          (c = +c),
          (f = f >>> 0),
          g || at(this, c, f, 4, 4294967295, 0),
          (this[f + 3] = c >>> 24),
          (this[f + 2] = c >>> 16),
          (this[f + 1] = c >>> 8),
          (this[f] = c & 255),
          f + 4
        );
      }),
    (p.prototype.writeUint32BE = p.prototype.writeUInt32BE =
      function (c, f, g) {
        return (
          (c = +c),
          (f = f >>> 0),
          g || at(this, c, f, 4, 4294967295, 0),
          (this[f] = c >>> 24),
          (this[f + 1] = c >>> 16),
          (this[f + 2] = c >>> 8),
          (this[f + 3] = c & 255),
          f + 4
        );
      });
  function it(y, c, f, g, R) {
    ma(c, g, R, y, f, 7);
    let D = Number(c & BigInt(4294967295));
    (y[f++] = D),
      (D = D >> 8),
      (y[f++] = D),
      (D = D >> 8),
      (y[f++] = D),
      (D = D >> 8),
      (y[f++] = D);
    let H = Number((c >> BigInt(32)) & BigInt(4294967295));
    return (
      (y[f++] = H),
      (H = H >> 8),
      (y[f++] = H),
      (H = H >> 8),
      (y[f++] = H),
      (H = H >> 8),
      (y[f++] = H),
      f
    );
  }
  function ae(y, c, f, g, R) {
    ma(c, g, R, y, f, 7);
    let D = Number(c & BigInt(4294967295));
    (y[f + 7] = D),
      (D = D >> 8),
      (y[f + 6] = D),
      (D = D >> 8),
      (y[f + 5] = D),
      (D = D >> 8),
      (y[f + 4] = D);
    let H = Number((c >> BigInt(32)) & BigInt(4294967295));
    return (
      (y[f + 3] = H),
      (H = H >> 8),
      (y[f + 2] = H),
      (H = H >> 8),
      (y[f + 1] = H),
      (H = H >> 8),
      (y[f] = H),
      f + 8
    );
  }
  (p.prototype.writeBigUInt64LE = te(function (c, f = 0) {
    return it(this, c, f, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
    (p.prototype.writeBigUInt64BE = te(function (c, f = 0) {
      return ae(this, c, f, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
    (p.prototype.writeIntLE = function (c, f, g, R) {
      if (((c = +c), (f = f >>> 0), !R)) {
        const Nt = Math.pow(2, 8 * g - 1);
        at(this, c, f, g, Nt - 1, -Nt);
      }
      let D = 0,
        H = 1,
        ct = 0;
      for (this[f] = c & 255; ++D < g && (H *= 256); )
        c < 0 && ct === 0 && this[f + D - 1] !== 0 && (ct = 1),
          (this[f + D] = (((c / H) >> 0) - ct) & 255);
      return f + g;
    }),
    (p.prototype.writeIntBE = function (c, f, g, R) {
      if (((c = +c), (f = f >>> 0), !R)) {
        const Nt = Math.pow(2, 8 * g - 1);
        at(this, c, f, g, Nt - 1, -Nt);
      }
      let D = g - 1,
        H = 1,
        ct = 0;
      for (this[f + D] = c & 255; --D >= 0 && (H *= 256); )
        c < 0 && ct === 0 && this[f + D + 1] !== 0 && (ct = 1),
          (this[f + D] = (((c / H) >> 0) - ct) & 255);
      return f + g;
    }),
    (p.prototype.writeInt8 = function (c, f, g) {
      return (
        (c = +c),
        (f = f >>> 0),
        g || at(this, c, f, 1, 127, -128),
        c < 0 && (c = 255 + c + 1),
        (this[f] = c & 255),
        f + 1
      );
    }),
    (p.prototype.writeInt16LE = function (c, f, g) {
      return (
        (c = +c),
        (f = f >>> 0),
        g || at(this, c, f, 2, 32767, -32768),
        (this[f] = c & 255),
        (this[f + 1] = c >>> 8),
        f + 2
      );
    }),
    (p.prototype.writeInt16BE = function (c, f, g) {
      return (
        (c = +c),
        (f = f >>> 0),
        g || at(this, c, f, 2, 32767, -32768),
        (this[f] = c >>> 8),
        (this[f + 1] = c & 255),
        f + 2
      );
    }),
    (p.prototype.writeInt32LE = function (c, f, g) {
      return (
        (c = +c),
        (f = f >>> 0),
        g || at(this, c, f, 4, 2147483647, -2147483648),
        (this[f] = c & 255),
        (this[f + 1] = c >>> 8),
        (this[f + 2] = c >>> 16),
        (this[f + 3] = c >>> 24),
        f + 4
      );
    }),
    (p.prototype.writeInt32BE = function (c, f, g) {
      return (
        (c = +c),
        (f = f >>> 0),
        g || at(this, c, f, 4, 2147483647, -2147483648),
        c < 0 && (c = 4294967295 + c + 1),
        (this[f] = c >>> 24),
        (this[f + 1] = c >>> 16),
        (this[f + 2] = c >>> 8),
        (this[f + 3] = c & 255),
        f + 4
      );
    }),
    (p.prototype.writeBigInt64LE = te(function (c, f = 0) {
      return it(
        this,
        c,
        f,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    })),
    (p.prototype.writeBigInt64BE = te(function (c, f = 0) {
      return ae(
        this,
        c,
        f,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }));
  function xt(y, c, f, g, R, D) {
    if (f + g > y.length) throw new RangeError("Index out of range");
    if (f < 0) throw new RangeError("Index out of range");
  }
  function Ye(y, c, f, g, R) {
    return (
      (c = +c),
      (f = f >>> 0),
      R || xt(y, c, f, 4),
      h.write(y, c, f, g, 23, 4),
      f + 4
    );
  }
  (p.prototype.writeFloatLE = function (c, f, g) {
    return Ye(this, c, f, !0, g);
  }),
    (p.prototype.writeFloatBE = function (c, f, g) {
      return Ye(this, c, f, !1, g);
    });
  function pn(y, c, f, g, R) {
    return (
      (c = +c),
      (f = f >>> 0),
      R || xt(y, c, f, 8),
      h.write(y, c, f, g, 52, 8),
      f + 8
    );
  }
  (p.prototype.writeDoubleLE = function (c, f, g) {
    return pn(this, c, f, !0, g);
  }),
    (p.prototype.writeDoubleBE = function (c, f, g) {
      return pn(this, c, f, !1, g);
    }),
    (p.prototype.copy = function (c, f, g, R) {
      if (!p.isBuffer(c)) throw new TypeError("argument should be a Buffer");
      if (
        (g || (g = 0),
        !R && R !== 0 && (R = this.length),
        f >= c.length && (f = c.length),
        f || (f = 0),
        R > 0 && R < g && (R = g),
        R === g || c.length === 0 || this.length === 0)
      )
        return 0;
      if (f < 0) throw new RangeError("targetStart out of bounds");
      if (g < 0 || g >= this.length) throw new RangeError("Index out of range");
      if (R < 0) throw new RangeError("sourceEnd out of bounds");
      R > this.length && (R = this.length),
        c.length - f < R - g && (R = c.length - f + g);
      const D = R - g;
      return (
        this === c && typeof v.prototype.copyWithin == "function"
          ? this.copyWithin(f, g, R)
          : v.prototype.set.call(c, this.subarray(g, R), f),
        D
      );
    }),
    (p.prototype.fill = function (c, f, g, R) {
      if (typeof c == "string") {
        if (
          (typeof f == "string"
            ? ((R = f), (f = 0), (g = this.length))
            : typeof g == "string" && ((R = g), (g = this.length)),
          R !== void 0 && typeof R != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof R == "string" && !p.isEncoding(R))
          throw new TypeError("Unknown encoding: " + R);
        if (c.length === 1) {
          const H = c.charCodeAt(0);
          ((R === "utf8" && H < 128) || R === "latin1") && (c = H);
        }
      } else
        typeof c == "number"
          ? (c = c & 255)
          : typeof c == "boolean" && (c = Number(c));
      if (f < 0 || this.length < f || this.length < g)
        throw new RangeError("Out of range index");
      if (g <= f) return this;
      (f = f >>> 0), (g = g === void 0 ? this.length : g >>> 0), c || (c = 0);
      let D;
      if (typeof c == "number") for (D = f; D < g; ++D) this[D] = c;
      else {
        const H = p.isBuffer(c) ? c : p.from(c, R),
          ct = H.length;
        if (ct === 0)
          throw new TypeError(
            'The value "' + c + '" is invalid for argument "value"'
          );
        for (D = 0; D < g - f; ++D) this[D + f] = H[D % ct];
      }
      return this;
    });
  const Ge = {};
  function Jl(y, c, f) {
    Ge[y] = class extends f {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: c.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${y}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return y;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    };
  }
  Jl(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (y) {
      return y
        ? `${y} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ),
    Jl(
      "ERR_INVALID_ARG_TYPE",
      function (y, c) {
        return `The "${y}" argument must be of type number. Received type ${typeof c}`;
      },
      TypeError
    ),
    Jl(
      "ERR_OUT_OF_RANGE",
      function (y, c, f) {
        let g = `The value of "${y}" is out of range.`,
          R = f;
        return (
          Number.isInteger(f) && Math.abs(f) > 2 ** 32
            ? (R = gn(String(f)))
            : typeof f == "bigint" &&
              ((R = String(f)),
              (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) &&
                (R = gn(R)),
              (R += "n")),
          (g += ` It must be ${c}. Received ${R}`),
          g
        );
      },
      RangeError
    );
  function gn(y) {
    let c = "",
      f = y.length;
    const g = y[0] === "-" ? 1 : 0;
    for (; f >= g + 4; f -= 3) c = `_${y.slice(f - 3, f)}${c}`;
    return `${y.slice(0, f)}${c}`;
  }
  function ou(y, c, f) {
    Tl(c, "offset"),
      (y[c] === void 0 || y[c + f] === void 0) && ie(c, y.length - (f + 1));
  }
  function ma(y, c, f, g, R, D) {
    if (y > f || y < c) {
      const H = typeof c == "bigint" ? "n" : "";
      let ct;
      throw (
        (c === 0 || c === BigInt(0)
          ? (ct = `>= 0${H} and < 2${H} ** ${(D + 1) * 8}${H}`)
          : (ct = `>= -(2${H} ** ${(D + 1) * 8 - 1}${H}) and < 2 ** ${
              (D + 1) * 8 - 1
            }${H}`),
        new Ge.ERR_OUT_OF_RANGE("value", ct, y))
      );
    }
    ou(g, R, D);
  }
  function Tl(y, c) {
    if (typeof y != "number") throw new Ge.ERR_INVALID_ARG_TYPE(c, "number", y);
  }
  function ie(y, c, f) {
    throw Math.floor(y) !== y
      ? (Tl(y, f), new Ge.ERR_OUT_OF_RANGE("offset", "an integer", y))
      : c < 0
      ? new Ge.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Ge.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${c}`, y);
  }
  const Gi = /[^+/0-9A-Za-z-_]/g;
  function pa(y) {
    if (((y = y.split("=")[0]), (y = y.trim().replace(Gi, "")), y.length < 2))
      return "";
    for (; y.length % 4 !== 0; ) y = y + "=";
    return y;
  }
  function vn(y, c) {
    c = c || 1 / 0;
    let f;
    const g = y.length;
    let R = null;
    const D = [];
    for (let H = 0; H < g; ++H) {
      if (((f = y.charCodeAt(H)), f > 55295 && f < 57344)) {
        if (!R) {
          if (f > 56319) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (H + 1 === g) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          R = f;
          continue;
        }
        if (f < 56320) {
          (c -= 3) > -1 && D.push(239, 191, 189), (R = f);
          continue;
        }
        f = (((R - 55296) << 10) | (f - 56320)) + 65536;
      } else R && (c -= 3) > -1 && D.push(239, 191, 189);
      if (((R = null), f < 128)) {
        if ((c -= 1) < 0) break;
        D.push(f);
      } else if (f < 2048) {
        if ((c -= 2) < 0) break;
        D.push((f >> 6) | 192, (f & 63) | 128);
      } else if (f < 65536) {
        if ((c -= 3) < 0) break;
        D.push((f >> 12) | 224, ((f >> 6) & 63) | 128, (f & 63) | 128);
      } else if (f < 1114112) {
        if ((c -= 4) < 0) break;
        D.push(
          (f >> 18) | 240,
          ((f >> 12) & 63) | 128,
          ((f >> 6) & 63) | 128,
          (f & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return D;
  }
  function Sn(y) {
    const c = [];
    for (let f = 0; f < y.length; ++f) c.push(y.charCodeAt(f) & 255);
    return c;
  }
  function Xi(y, c) {
    let f, g, R;
    const D = [];
    for (let H = 0; H < y.length && !((c -= 2) < 0); ++H)
      (f = y.charCodeAt(H)), (g = f >> 8), (R = f % 256), D.push(R), D.push(g);
    return D;
  }
  function su(y) {
    return r.toByteArray(pa(y));
  }
  function En(y, c, f, g) {
    let R;
    for (R = 0; R < g && !(R + f >= c.length || R >= y.length); ++R)
      c[R + f] = y[R];
    return R;
  }
  function Ue(y, c) {
    return (
      y instanceof c ||
      (y != null &&
        y.constructor != null &&
        y.constructor.name != null &&
        y.constructor.name === c.name)
    );
  }
  function ul(y) {
    return y !== y;
  }
  const se = (function () {
    const y = "0123456789abcdef",
      c = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const g = f * 16;
      for (let R = 0; R < 16; ++R) c[g + R] = y[f] + y[R];
    }
    return c;
  })();
  function te(y) {
    return typeof BigInt > "u" ? he : y;
  }
  function he() {
    throw new Error("BigInt not supported");
  }
})($d);
const q1 = $d.Buffer;
function ft(i, r, h, o, m) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = i),
    (this.name = "AxiosError"),
    r && (this.code = r),
    h && (this.config = h),
    o && (this.request = o),
    m && ((this.response = m), (this.status = m.status ? m.status : null));
}
w.inherits(ft, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: w.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Id = ft.prototype,
  Pd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((i) => {
  Pd[i] = { value: i };
});
Object.defineProperties(ft, Pd);
Object.defineProperty(Id, "isAxiosError", { value: !0 });
ft.from = (i, r, h, o, m, v) => {
  const S = Object.create(Id);
  return (
    w.toFlatObject(
      i,
      S,
      function (M) {
        return M !== Error.prototype;
      },
      (B) => B !== "isAxiosError"
    ),
    ft.call(S, i.message, r, h, o, m),
    (S.cause = i),
    (S.name = i.name),
    v && Object.assign(S, v),
    S
  );
};
const L1 = null;
function yr(i) {
  return w.isPlainObject(i) || w.isArray(i);
}
function t0(i) {
  return w.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Ad(i, r, h) {
  return i
    ? i
        .concat(r)
        .map(function (m, v) {
          return (m = t0(m)), !h && v ? "[" + m + "]" : m;
        })
        .join(h ? "." : "")
    : r;
}
function j1(i) {
  return w.isArray(i) && !i.some(yr);
}
const Y1 = w.toFlatObject(w, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function qi(i, r, h) {
  if (!w.isObject(i)) throw new TypeError("target must be an object");
  (r = r || new FormData()),
    (h = w.toFlatObject(
      h,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (k, Y) {
        return !w.isUndefined(Y[k]);
      }
    ));
  const o = h.metaTokens,
    m = h.visitor || p,
    v = h.dots,
    S = h.indexes,
    M = (h.Blob || (typeof Blob < "u" && Blob)) && w.isSpecCompliantForm(r);
  if (!w.isFunction(m)) throw new TypeError("visitor must be a function");
  function b(X) {
    if (X === null) return "";
    if (w.isDate(X)) return X.toISOString();
    if (!M && w.isBlob(X))
      throw new ft("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(X) || w.isTypedArray(X)
      ? M && typeof Blob == "function"
        ? new Blob([X])
        : q1.from(X)
      : X;
  }
  function p(X, k, Y) {
    let nt = X;
    if (X && !Y && typeof X == "object") {
      if (w.endsWith(k, "{}"))
        (k = o ? k : k.slice(0, -2)), (X = JSON.stringify(X));
      else if (
        (w.isArray(X) && j1(X)) ||
        ((w.isFileList(X) || w.endsWith(k, "[]")) && (nt = w.toArray(X)))
      )
        return (
          (k = t0(k)),
          nt.forEach(function (rt, zt) {
            !(w.isUndefined(rt) || rt === null) &&
              r.append(
                S === !0 ? Ad([k], zt, v) : S === null ? k : k + "[]",
                b(rt)
              );
          }),
          !1
        );
    }
    return yr(X) ? !0 : (r.append(Ad(Y, k, v), b(X)), !1);
  }
  const j = [],
    J = Object.assign(Y1, {
      defaultVisitor: p,
      convertValue: b,
      isVisitable: yr,
    });
  function I(X, k) {
    if (!w.isUndefined(X)) {
      if (j.indexOf(X) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      j.push(X),
        w.forEach(X, function (nt, W) {
          (!(w.isUndefined(nt) || nt === null) &&
            m.call(r, nt, w.isString(W) ? W.trim() : W, k, J)) === !0 &&
            I(nt, k ? k.concat(W) : [W]);
        }),
        j.pop();
    }
  }
  if (!w.isObject(i)) throw new TypeError("data must be an object");
  return I(i), r;
}
function Rd(i) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (o) {
    return r[o];
  });
}
function Tr(i, r) {
  (this._pairs = []), i && qi(i, this, r);
}
const e0 = Tr.prototype;
e0.append = function (r, h) {
  this._pairs.push([r, h]);
};
e0.toString = function (r) {
  const h = r
    ? function (o) {
        return r.call(this, o, Rd);
      }
    : Rd;
  return this._pairs
    .map(function (m) {
      return h(m[0]) + "=" + h(m[1]);
    }, "")
    .join("&");
};
function G1(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function l0(i, r, h) {
  if (!r) return i;
  const o = (h && h.encode) || G1;
  w.isFunction(h) && (h = { serialize: h });
  const m = h && h.serialize;
  let v;
  if (
    (m
      ? (v = m(r, h))
      : (v = w.isURLSearchParams(r) ? r.toString() : new Tr(r, h).toString(o)),
    v)
  ) {
    const S = i.indexOf("#");
    S !== -1 && (i = i.slice(0, S)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + v);
  }
  return i;
}
class Od {
  constructor() {
    this.handlers = [];
  }
  use(r, h, o) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: h,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    w.forEach(this.handlers, function (o) {
      o !== null && r(o);
    });
  }
}
const n0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  X1 = typeof URLSearchParams < "u" ? URLSearchParams : Tr,
  Q1 = typeof FormData < "u" ? FormData : null,
  Z1 = typeof Blob < "u" ? Blob : null,
  V1 = {
    isBrowser: !0,
    classes: { URLSearchParams: X1, FormData: Q1, Blob: Z1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ar = typeof window < "u" && typeof document < "u",
  mr = (typeof navigator == "object" && navigator) || void 0,
  K1 =
    Ar &&
    (!mr || ["ReactNative", "NativeScript", "NS"].indexOf(mr.product) < 0),
  J1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  F1 = (Ar && window.location.href) || "http://localhost",
  k1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ar,
        hasStandardBrowserEnv: K1,
        hasStandardBrowserWebWorkerEnv: J1,
        navigator: mr,
        origin: F1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oe = { ...k1, ...V1 };
function $1(i, r) {
  return qi(
    i,
    new oe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (h, o, m, v) {
          return oe.isNode && w.isBuffer(h)
            ? (this.append(o, h.toString("base64")), !1)
            : v.defaultVisitor.apply(this, arguments);
        },
      },
      r
    )
  );
}
function W1(i) {
  return w
    .matchAll(/\w+|\[(\w*)]/g, i)
    .map((r) => (r[0] === "[]" ? "" : r[1] || r[0]));
}
function I1(i) {
  const r = {},
    h = Object.keys(i);
  let o;
  const m = h.length;
  let v;
  for (o = 0; o < m; o++) (v = h[o]), (r[v] = i[v]);
  return r;
}
function u0(i) {
  function r(h, o, m, v) {
    let S = h[v++];
    if (S === "__proto__") return !0;
    const B = Number.isFinite(+S),
      M = v >= h.length;
    return (
      (S = !S && w.isArray(m) ? m.length : S),
      M
        ? (w.hasOwnProp(m, S) ? (m[S] = [m[S], o]) : (m[S] = o), !B)
        : ((!m[S] || !w.isObject(m[S])) && (m[S] = []),
          r(h, o, m[S], v) && w.isArray(m[S]) && (m[S] = I1(m[S])),
          !B)
    );
  }
  if (w.isFormData(i) && w.isFunction(i.entries)) {
    const h = {};
    return (
      w.forEachEntry(i, (o, m) => {
        r(W1(o), m, h, 0);
      }),
      h
    );
  }
  return null;
}
function P1(i, r, h) {
  if (w.isString(i))
    try {
      return (r || JSON.parse)(i), w.trim(i);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (h || JSON.stringify)(i);
}
const ya = {
  transitional: n0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (r, h) {
      const o = h.getContentType() || "",
        m = o.indexOf("application/json") > -1,
        v = w.isObject(r);
      if ((v && w.isHTMLForm(r) && (r = new FormData(r)), w.isFormData(r)))
        return m ? JSON.stringify(u0(r)) : r;
      if (
        w.isArrayBuffer(r) ||
        w.isBuffer(r) ||
        w.isStream(r) ||
        w.isFile(r) ||
        w.isBlob(r) ||
        w.isReadableStream(r)
      )
        return r;
      if (w.isArrayBufferView(r)) return r.buffer;
      if (w.isURLSearchParams(r))
        return (
          h.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          r.toString()
        );
      let B;
      if (v) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return $1(r, this.formSerializer).toString();
        if ((B = w.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
          const M = this.env && this.env.FormData;
          return qi(
            B ? { "files[]": r } : r,
            M && new M(),
            this.formSerializer
          );
        }
      }
      return v || m ? (h.setContentType("application/json", !1), P1(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const h = this.transitional || ya.transitional,
        o = h && h.forcedJSONParsing,
        m = this.responseType === "json";
      if (w.isResponse(r) || w.isReadableStream(r)) return r;
      if (r && w.isString(r) && ((o && !this.responseType) || m)) {
        const S = !(h && h.silentJSONParsing) && m;
        try {
          return JSON.parse(r);
        } catch (B) {
          if (S)
            throw B.name === "SyntaxError"
              ? ft.from(B, ft.ERR_BAD_RESPONSE, this, null, this.response)
              : B;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: oe.classes.FormData, Blob: oe.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  ya.headers[i] = {};
});
const tp = w.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ep = (i) => {
    const r = {};
    let h, o, m;
    return (
      i &&
        i
          .split(
            `
`
          )
          .forEach(function (S) {
            (m = S.indexOf(":")),
              (h = S.substring(0, m).trim().toLowerCase()),
              (o = S.substring(m + 1).trim()),
              !(!h || (r[h] && tp[h])) &&
                (h === "set-cookie"
                  ? r[h]
                    ? r[h].push(o)
                    : (r[h] = [o])
                  : (r[h] = r[h] ? r[h] + ", " + o : o));
          }),
      r
    );
  },
  xd = Symbol("internals");
function ra(i) {
  return i && String(i).trim().toLowerCase();
}
function Bi(i) {
  return i === !1 || i == null ? i : w.isArray(i) ? i.map(Bi) : String(i);
}
function lp(i) {
  const r = Object.create(null),
    h = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = h.exec(i)); ) r[o[1]] = o[2];
  return r;
}
const np = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function cr(i, r, h, o, m) {
  if (w.isFunction(o)) return o.call(this, r, h);
  if ((m && (r = h), !!w.isString(r))) {
    if (w.isString(o)) return r.indexOf(o) !== -1;
    if (w.isRegExp(o)) return o.test(r);
  }
}
function up(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, h, o) => h.toUpperCase() + o);
}
function ap(i, r) {
  const h = w.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(i, o + h, {
      value: function (m, v, S) {
        return this[o].call(this, r, m, v, S);
      },
      configurable: !0,
    });
  });
}
let Se = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, h, o) {
    const m = this;
    function v(B, M, b) {
      const p = ra(M);
      if (!p) throw new Error("header name must be a non-empty string");
      const j = w.findKey(m, p);
      (!j || m[j] === void 0 || b === !0 || (b === void 0 && m[j] !== !1)) &&
        (m[j || M] = Bi(B));
    }
    const S = (B, M) => w.forEach(B, (b, p) => v(b, p, M));
    if (w.isPlainObject(r) || r instanceof this.constructor) S(r, h);
    else if (w.isString(r) && (r = r.trim()) && !np(r)) S(ep(r), h);
    else if (w.isHeaders(r)) for (const [B, M] of r.entries()) v(M, B, o);
    else r != null && v(h, r, o);
    return this;
  }
  get(r, h) {
    if (((r = ra(r)), r)) {
      const o = w.findKey(this, r);
      if (o) {
        const m = this[o];
        if (!h) return m;
        if (h === !0) return lp(m);
        if (w.isFunction(h)) return h.call(this, m, o);
        if (w.isRegExp(h)) return h.exec(m);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, h) {
    if (((r = ra(r)), r)) {
      const o = w.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!h || cr(this, this[o], o, h)));
    }
    return !1;
  }
  delete(r, h) {
    const o = this;
    let m = !1;
    function v(S) {
      if (((S = ra(S)), S)) {
        const B = w.findKey(o, S);
        B && (!h || cr(o, o[B], B, h)) && (delete o[B], (m = !0));
      }
    }
    return w.isArray(r) ? r.forEach(v) : v(r), m;
  }
  clear(r) {
    const h = Object.keys(this);
    let o = h.length,
      m = !1;
    for (; o--; ) {
      const v = h[o];
      (!r || cr(this, this[v], v, r, !0)) && (delete this[v], (m = !0));
    }
    return m;
  }
  normalize(r) {
    const h = this,
      o = {};
    return (
      w.forEach(this, (m, v) => {
        const S = w.findKey(o, v);
        if (S) {
          (h[S] = Bi(m)), delete h[v];
          return;
        }
        const B = r ? up(v) : String(v).trim();
        B !== v && delete h[v], (h[B] = Bi(m)), (o[B] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const h = Object.create(null);
    return (
      w.forEach(this, (o, m) => {
        o != null && o !== !1 && (h[m] = r && w.isArray(o) ? o.join(", ") : o);
      }),
      h
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, h]) => r + ": " + h).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...h) {
    const o = new this(r);
    return h.forEach((m) => o.set(m)), o;
  }
  static accessor(r) {
    const o = (this[xd] = this[xd] = { accessors: {} }).accessors,
      m = this.prototype;
    function v(S) {
      const B = ra(S);
      o[B] || (ap(m, S), (o[B] = !0));
    }
    return w.isArray(r) ? r.forEach(v) : v(r), this;
  }
};
Se.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
w.reduceDescriptors(Se.prototype, ({ value: i }, r) => {
  let h = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => i,
    set(o) {
      this[h] = o;
    },
  };
});
w.freezeMethods(Se);
function fr(i, r) {
  const h = this || ya,
    o = r || h,
    m = Se.from(o.headers);
  let v = o.data;
  return (
    w.forEach(i, function (B) {
      v = B.call(h, v, m.normalize(), r ? r.status : void 0);
    }),
    m.normalize(),
    v
  );
}
function a0(i) {
  return !!(i && i.__CANCEL__);
}
function ru(i, r, h) {
  ft.call(this, i ?? "canceled", ft.ERR_CANCELED, r, h),
    (this.name = "CanceledError");
}
w.inherits(ru, ft, { __CANCEL__: !0 });
function i0(i, r, h) {
  const o = h.config.validateStatus;
  !h.status || !o || o(h.status)
    ? i(h)
    : r(
        new ft(
          "Request failed with status code " + h.status,
          [ft.ERR_BAD_REQUEST, ft.ERR_BAD_RESPONSE][
            Math.floor(h.status / 100) - 4
          ],
          h.config,
          h.request,
          h
        )
      );
}
function ip(i) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (r && r[1]) || "";
}
function cp(i, r) {
  i = i || 10;
  const h = new Array(i),
    o = new Array(i);
  let m = 0,
    v = 0,
    S;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (M) {
      const b = Date.now(),
        p = o[v];
      S || (S = b), (h[m] = M), (o[m] = b);
      let j = v,
        J = 0;
      for (; j !== m; ) (J += h[j++]), (j = j % i);
      if (((m = (m + 1) % i), m === v && (v = (v + 1) % i), b - S < r)) return;
      const I = p && b - p;
      return I ? Math.round((J * 1e3) / I) : void 0;
    }
  );
}
function fp(i, r) {
  let h = 0,
    o = 1e3 / r,
    m,
    v;
  const S = (b, p = Date.now()) => {
    (h = p), (m = null), v && (clearTimeout(v), (v = null)), i.apply(null, b);
  };
  return [
    (...b) => {
      const p = Date.now(),
        j = p - h;
      j >= o
        ? S(b, p)
        : ((m = b),
          v ||
            (v = setTimeout(() => {
              (v = null), S(m);
            }, o - j)));
    },
    () => m && S(m),
  ];
}
const zi = (i, r, h = 3) => {
    let o = 0;
    const m = cp(50, 250);
    return fp((v) => {
      const S = v.loaded,
        B = v.lengthComputable ? v.total : void 0,
        M = S - o,
        b = m(M),
        p = S <= B;
      o = S;
      const j = {
        loaded: S,
        total: B,
        progress: B ? S / B : void 0,
        bytes: M,
        rate: b || void 0,
        estimated: b && B && p ? (B - S) / b : void 0,
        event: v,
        lengthComputable: B != null,
        [r ? "download" : "upload"]: !0,
      };
      i(j);
    }, h);
  },
  _d = (i, r) => {
    const h = i != null;
    return [(o) => r[0]({ lengthComputable: h, total: i, loaded: o }), r[1]];
  },
  Ud =
    (i) =>
    (...r) =>
      w.asap(() => i(...r)),
  rp = oe.hasStandardBrowserEnv
    ? ((i, r) => (h) => (
        (h = new URL(h, oe.origin)),
        i.protocol === h.protocol &&
          i.host === h.host &&
          (r || i.port === h.port)
      ))(
        new URL(oe.origin),
        oe.navigator && /(msie|trident)/i.test(oe.navigator.userAgent)
      )
    : () => !0,
  op = oe.hasStandardBrowserEnv
    ? {
        write(i, r, h, o, m, v) {
          const S = [i + "=" + encodeURIComponent(r)];
          w.isNumber(h) && S.push("expires=" + new Date(h).toGMTString()),
            w.isString(o) && S.push("path=" + o),
            w.isString(m) && S.push("domain=" + m),
            v === !0 && S.push("secure"),
            (document.cookie = S.join("; "));
        },
        read(i) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function sp(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function hp(i, r) {
  return r ? i.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : i;
}
function c0(i, r, h) {
  let o = !sp(r);
  return i && (o || h == !1) ? hp(i, r) : r;
}
const Bd = (i) => (i instanceof Se ? { ...i } : i);
function mn(i, r) {
  r = r || {};
  const h = {};
  function o(b, p, j, J) {
    return w.isPlainObject(b) && w.isPlainObject(p)
      ? w.merge.call({ caseless: J }, b, p)
      : w.isPlainObject(p)
      ? w.merge({}, p)
      : w.isArray(p)
      ? p.slice()
      : p;
  }
  function m(b, p, j, J) {
    if (w.isUndefined(p)) {
      if (!w.isUndefined(b)) return o(void 0, b, j, J);
    } else return o(b, p, j, J);
  }
  function v(b, p) {
    if (!w.isUndefined(p)) return o(void 0, p);
  }
  function S(b, p) {
    if (w.isUndefined(p)) {
      if (!w.isUndefined(b)) return o(void 0, b);
    } else return o(void 0, p);
  }
  function B(b, p, j) {
    if (j in r) return o(b, p);
    if (j in i) return o(void 0, b);
  }
  const M = {
    url: v,
    method: v,
    data: v,
    baseURL: S,
    transformRequest: S,
    transformResponse: S,
    paramsSerializer: S,
    timeout: S,
    timeoutMessage: S,
    withCredentials: S,
    withXSRFToken: S,
    adapter: S,
    responseType: S,
    xsrfCookieName: S,
    xsrfHeaderName: S,
    onUploadProgress: S,
    onDownloadProgress: S,
    decompress: S,
    maxContentLength: S,
    maxBodyLength: S,
    beforeRedirect: S,
    transport: S,
    httpAgent: S,
    httpsAgent: S,
    cancelToken: S,
    socketPath: S,
    responseEncoding: S,
    validateStatus: B,
    headers: (b, p, j) => m(Bd(b), Bd(p), j, !0),
  };
  return (
    w.forEach(Object.keys(Object.assign({}, i, r)), function (p) {
      const j = M[p] || m,
        J = j(i[p], r[p], p);
      (w.isUndefined(J) && j !== B) || (h[p] = J);
    }),
    h
  );
}
const f0 = (i) => {
    const r = mn({}, i);
    let {
      data: h,
      withXSRFToken: o,
      xsrfHeaderName: m,
      xsrfCookieName: v,
      headers: S,
      auth: B,
    } = r;
    (r.headers = S = Se.from(S)),
      (r.url = l0(
        c0(r.baseURL, r.url, r.allowAbsoluteUrls),
        i.params,
        i.paramsSerializer
      )),
      B &&
        S.set(
          "Authorization",
          "Basic " +
            btoa(
              (B.username || "") +
                ":" +
                (B.password ? unescape(encodeURIComponent(B.password)) : "")
            )
        );
    let M;
    if (w.isFormData(h)) {
      if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
        S.setContentType(void 0);
      else if ((M = S.getContentType()) !== !1) {
        const [b, ...p] = M
          ? M.split(";")
              .map((j) => j.trim())
              .filter(Boolean)
          : [];
        S.setContentType([b || "multipart/form-data", ...p].join("; "));
      }
    }
    if (
      oe.hasStandardBrowserEnv &&
      (o && w.isFunction(o) && (o = o(r)), o || (o !== !1 && rp(r.url)))
    ) {
      const b = m && v && op.read(v);
      b && S.set(m, b);
    }
    return r;
  },
  dp = typeof XMLHttpRequest < "u",
  yp =
    dp &&
    function (i) {
      return new Promise(function (h, o) {
        const m = f0(i);
        let v = m.data;
        const S = Se.from(m.headers).normalize();
        let { responseType: B, onUploadProgress: M, onDownloadProgress: b } = m,
          p,
          j,
          J,
          I,
          X;
        function k() {
          I && I(),
            X && X(),
            m.cancelToken && m.cancelToken.unsubscribe(p),
            m.signal && m.signal.removeEventListener("abort", p);
        }
        let Y = new XMLHttpRequest();
        Y.open(m.method.toUpperCase(), m.url, !0), (Y.timeout = m.timeout);
        function nt() {
          if (!Y) return;
          const rt = Se.from(
              "getAllResponseHeaders" in Y && Y.getAllResponseHeaders()
            ),
            lt = {
              data:
                !B || B === "text" || B === "json"
                  ? Y.responseText
                  : Y.response,
              status: Y.status,
              statusText: Y.statusText,
              headers: rt,
              config: i,
              request: Y,
            };
          i0(
            function (qt) {
              h(qt), k();
            },
            function (qt) {
              o(qt), k();
            },
            lt
          ),
            (Y = null);
        }
        "onloadend" in Y
          ? (Y.onloadend = nt)
          : (Y.onreadystatechange = function () {
              !Y ||
                Y.readyState !== 4 ||
                (Y.status === 0 &&
                  !(Y.responseURL && Y.responseURL.indexOf("file:") === 0)) ||
                setTimeout(nt);
            }),
          (Y.onabort = function () {
            Y &&
              (o(new ft("Request aborted", ft.ECONNABORTED, i, Y)), (Y = null));
          }),
          (Y.onerror = function () {
            o(new ft("Network Error", ft.ERR_NETWORK, i, Y)), (Y = null);
          }),
          (Y.ontimeout = function () {
            let zt = m.timeout
              ? "timeout of " + m.timeout + "ms exceeded"
              : "timeout exceeded";
            const lt = m.transitional || n0;
            m.timeoutErrorMessage && (zt = m.timeoutErrorMessage),
              o(
                new ft(
                  zt,
                  lt.clarifyTimeoutError ? ft.ETIMEDOUT : ft.ECONNABORTED,
                  i,
                  Y
                )
              ),
              (Y = null);
          }),
          v === void 0 && S.setContentType(null),
          "setRequestHeader" in Y &&
            w.forEach(S.toJSON(), function (zt, lt) {
              Y.setRequestHeader(lt, zt);
            }),
          w.isUndefined(m.withCredentials) ||
            (Y.withCredentials = !!m.withCredentials),
          B && B !== "json" && (Y.responseType = m.responseType),
          b && (([J, X] = zi(b, !0)), Y.addEventListener("progress", J)),
          M &&
            Y.upload &&
            (([j, I] = zi(M)),
            Y.upload.addEventListener("progress", j),
            Y.upload.addEventListener("loadend", I)),
          (m.cancelToken || m.signal) &&
            ((p = (rt) => {
              Y &&
                (o(!rt || rt.type ? new ru(null, i, Y) : rt),
                Y.abort(),
                (Y = null));
            }),
            m.cancelToken && m.cancelToken.subscribe(p),
            m.signal &&
              (m.signal.aborted ? p() : m.signal.addEventListener("abort", p)));
        const W = ip(m.url);
        if (W && oe.protocols.indexOf(W) === -1) {
          o(new ft("Unsupported protocol " + W + ":", ft.ERR_BAD_REQUEST, i));
          return;
        }
        Y.send(v || null);
      });
    },
  mp = (i, r) => {
    const { length: h } = (i = i ? i.filter(Boolean) : []);
    if (r || h) {
      let o = new AbortController(),
        m;
      const v = function (b) {
        if (!m) {
          (m = !0), B();
          const p = b instanceof Error ? b : this.reason;
          o.abort(
            p instanceof ft ? p : new ru(p instanceof Error ? p.message : p)
          );
        }
      };
      let S =
        r &&
        setTimeout(() => {
          (S = null), v(new ft(`timeout ${r} of ms exceeded`, ft.ETIMEDOUT));
        }, r);
      const B = () => {
        i &&
          (S && clearTimeout(S),
          (S = null),
          i.forEach((b) => {
            b.unsubscribe
              ? b.unsubscribe(v)
              : b.removeEventListener("abort", v);
          }),
          (i = null));
      };
      i.forEach((b) => b.addEventListener("abort", v));
      const { signal: M } = o;
      return (M.unsubscribe = () => w.asap(B)), M;
    }
  },
  pp = function* (i, r) {
    let h = i.byteLength;
    if (h < r) {
      yield i;
      return;
    }
    let o = 0,
      m;
    for (; o < h; ) (m = o + r), yield i.slice(o, m), (o = m);
  },
  gp = async function* (i, r) {
    for await (const h of vp(i)) yield* pp(h, r);
  },
  vp = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const r = i.getReader();
    try {
      for (;;) {
        const { done: h, value: o } = await r.read();
        if (h) break;
        yield o;
      }
    } finally {
      await r.cancel();
    }
  },
  Dd = (i, r, h, o) => {
    const m = gp(i, r);
    let v = 0,
      S,
      B = (M) => {
        S || ((S = !0), o && o(M));
      };
    return new ReadableStream(
      {
        async pull(M) {
          try {
            const { done: b, value: p } = await m.next();
            if (b) {
              B(), M.close();
              return;
            }
            let j = p.byteLength;
            if (h) {
              let J = (v += j);
              h(J);
            }
            M.enqueue(new Uint8Array(p));
          } catch (b) {
            throw (B(b), b);
          }
        },
        cancel(M) {
          return B(M), m.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Li =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  r0 = Li && typeof ReadableStream == "function",
  Sp =
    Li &&
    (typeof TextEncoder == "function"
      ? (
          (i) => (r) =>
            i.encode(r)
        )(new TextEncoder())
      : async (i) => new Uint8Array(await new Response(i).arrayBuffer())),
  o0 = (i, ...r) => {
    try {
      return !!i(...r);
    } catch {
      return !1;
    }
  },
  Ep =
    r0 &&
    o0(() => {
      let i = !1;
      const r = new Request(oe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (i = !0), "half";
        },
      }).headers.has("Content-Type");
      return i && !r;
    }),
  zd = 64 * 1024,
  pr = r0 && o0(() => w.isReadableStream(new Response("").body)),
  Mi = { stream: pr && ((i) => i.body) };
Li &&
  ((i) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
      !Mi[r] &&
        (Mi[r] = w.isFunction(i[r])
          ? (h) => h[r]()
          : (h, o) => {
              throw new ft(
                `Response type '${r}' is not supported`,
                ft.ERR_NOT_SUPPORT,
                o
              );
            });
    });
  })(new Response());
const bp = async (i) => {
    if (i == null) return 0;
    if (w.isBlob(i)) return i.size;
    if (w.isSpecCompliantForm(i))
      return (
        await new Request(oe.origin, { method: "POST", body: i }).arrayBuffer()
      ).byteLength;
    if (w.isArrayBufferView(i) || w.isArrayBuffer(i)) return i.byteLength;
    if ((w.isURLSearchParams(i) && (i = i + ""), w.isString(i)))
      return (await Sp(i)).byteLength;
  },
  Tp = async (i, r) => {
    const h = w.toFiniteNumber(i.getContentLength());
    return h ?? bp(r);
  },
  Ap =
    Li &&
    (async (i) => {
      let {
        url: r,
        method: h,
        data: o,
        signal: m,
        cancelToken: v,
        timeout: S,
        onDownloadProgress: B,
        onUploadProgress: M,
        responseType: b,
        headers: p,
        withCredentials: j = "same-origin",
        fetchOptions: J,
      } = f0(i);
      b = b ? (b + "").toLowerCase() : "text";
      let I = mp([m, v && v.toAbortSignal()], S),
        X;
      const k =
        I &&
        I.unsubscribe &&
        (() => {
          I.unsubscribe();
        });
      let Y;
      try {
        if (
          M &&
          Ep &&
          h !== "get" &&
          h !== "head" &&
          (Y = await Tp(p, o)) !== 0
        ) {
          let lt = new Request(r, { method: "POST", body: o, duplex: "half" }),
            Mt;
          if (
            (w.isFormData(o) &&
              (Mt = lt.headers.get("content-type")) &&
              p.setContentType(Mt),
            lt.body)
          ) {
            const [qt, Bt] = _d(Y, zi(Ud(M)));
            o = Dd(lt.body, zd, qt, Bt);
          }
        }
        w.isString(j) || (j = j ? "include" : "omit");
        const nt = "credentials" in Request.prototype;
        X = new Request(r, {
          ...J,
          signal: I,
          method: h.toUpperCase(),
          headers: p.normalize().toJSON(),
          body: o,
          duplex: "half",
          credentials: nt ? j : void 0,
        });
        let W = await fetch(X);
        const rt = pr && (b === "stream" || b === "response");
        if (pr && (B || (rt && k))) {
          const lt = {};
          ["status", "statusText", "headers"].forEach((ue) => {
            lt[ue] = W[ue];
          });
          const Mt = w.toFiniteNumber(W.headers.get("content-length")),
            [qt, Bt] = (B && _d(Mt, zi(Ud(B), !0))) || [];
          W = new Response(
            Dd(W.body, zd, qt, () => {
              Bt && Bt(), k && k();
            }),
            lt
          );
        }
        b = b || "text";
        let zt = await Mi[w.findKey(Mi, b) || "text"](W, i);
        return (
          !rt && k && k(),
          await new Promise((lt, Mt) => {
            i0(lt, Mt, {
              data: zt,
              headers: Se.from(W.headers),
              status: W.status,
              statusText: W.statusText,
              config: i,
              request: X,
            });
          })
        );
      } catch (nt) {
        throw (
          (k && k(),
          nt && nt.name === "TypeError" && /fetch/i.test(nt.message)
            ? Object.assign(new ft("Network Error", ft.ERR_NETWORK, i, X), {
                cause: nt.cause || nt,
              })
            : ft.from(nt, nt && nt.code, i, X))
        );
      }
    }),
  gr = { http: L1, xhr: yp, fetch: Ap };
w.forEach(gr, (i, r) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: r });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: r });
  }
});
const Md = (i) => `- ${i}`,
  Rp = (i) => w.isFunction(i) || i === null || i === !1,
  s0 = {
    getAdapter: (i) => {
      i = w.isArray(i) ? i : [i];
      const { length: r } = i;
      let h, o;
      const m = {};
      for (let v = 0; v < r; v++) {
        h = i[v];
        let S;
        if (
          ((o = h),
          !Rp(h) && ((o = gr[(S = String(h)).toLowerCase()]), o === void 0))
        )
          throw new ft(`Unknown adapter '${S}'`);
        if (o) break;
        m[S || "#" + v] = o;
      }
      if (!o) {
        const v = Object.entries(m).map(
          ([B, M]) =>
            `adapter ${B} ` +
            (M === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let S = r
          ? v.length > 1
            ? `since :
` +
              v.map(Md).join(`
`)
            : " " + Md(v[0])
          : "as no adapter specified";
        throw new ft(
          "There is no suitable adapter to dispatch the request " + S,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: gr,
  };
function rr(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new ru(null, i);
}
function wd(i) {
  return (
    rr(i),
    (i.headers = Se.from(i.headers)),
    (i.data = fr.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    s0
      .getAdapter(i.adapter || ya.adapter)(i)
      .then(
        function (o) {
          return (
            rr(i),
            (o.data = fr.call(i, i.transformResponse, o)),
            (o.headers = Se.from(o.headers)),
            o
          );
        },
        function (o) {
          return (
            a0(o) ||
              (rr(i),
              o &&
                o.response &&
                ((o.response.data = fr.call(
                  i,
                  i.transformResponse,
                  o.response
                )),
                (o.response.headers = Se.from(o.response.headers)))),
            Promise.reject(o)
          );
        }
      )
  );
}
const h0 = "1.8.4",
  ji = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, r) => {
    ji[i] = function (o) {
      return typeof o === i || "a" + (r < 1 ? "n " : " ") + i;
    };
  }
);
const Nd = {};
ji.transitional = function (r, h, o) {
  function m(v, S) {
    return (
      "[Axios v" +
      h0 +
      "] Transitional option '" +
      v +
      "'" +
      S +
      (o ? ". " + o : "")
    );
  }
  return (v, S, B) => {
    if (r === !1)
      throw new ft(
        m(S, " has been removed" + (h ? " in " + h : "")),
        ft.ERR_DEPRECATED
      );
    return (
      h &&
        !Nd[S] &&
        ((Nd[S] = !0),
        console.warn(
          m(
            S,
            " has been deprecated since v" +
              h +
              " and will be removed in the near future"
          )
        )),
      r ? r(v, S, B) : !0
    );
  };
};
ji.spelling = function (r) {
  return (h, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function Op(i, r, h) {
  if (typeof i != "object")
    throw new ft("options must be an object", ft.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(i);
  let m = o.length;
  for (; m-- > 0; ) {
    const v = o[m],
      S = r[v];
    if (S) {
      const B = i[v],
        M = B === void 0 || S(B, v, i);
      if (M !== !0)
        throw new ft("option " + v + " must be " + M, ft.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (h !== !0) throw new ft("Unknown option " + v, ft.ERR_BAD_OPTION);
  }
}
const Di = { assertOptions: Op, validators: ji },
  We = Di.validators;
let yn = class {
  constructor(r) {
    (this.defaults = r),
      (this.interceptors = { request: new Od(), response: new Od() });
  }
  async request(r, h) {
    try {
      return await this._request(r, h);
    } catch (o) {
      if (o instanceof Error) {
        let m = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(m)
          : (m = new Error());
        const v = m.stack ? m.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack
            ? v &&
              !String(o.stack).endsWith(v.replace(/^.+\n.+\n/, "")) &&
              (o.stack +=
                `
` + v)
            : (o.stack = v);
        } catch {}
      }
      throw o;
    }
  }
  _request(r, h) {
    typeof r == "string" ? ((h = h || {}), (h.url = r)) : (h = r || {}),
      (h = mn(this.defaults, h));
    const { transitional: o, paramsSerializer: m, headers: v } = h;
    o !== void 0 &&
      Di.assertOptions(
        o,
        {
          silentJSONParsing: We.transitional(We.boolean),
          forcedJSONParsing: We.transitional(We.boolean),
          clarifyTimeoutError: We.transitional(We.boolean),
        },
        !1
      ),
      m != null &&
        (w.isFunction(m)
          ? (h.paramsSerializer = { serialize: m })
          : Di.assertOptions(
              m,
              { encode: We.function, serialize: We.function },
              !0
            )),
      h.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (h.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (h.allowAbsoluteUrls = !0)),
      Di.assertOptions(
        h,
        {
          baseUrl: We.spelling("baseURL"),
          withXsrfToken: We.spelling("withXSRFToken"),
        },
        !0
      ),
      (h.method = (h.method || this.defaults.method || "get").toLowerCase());
    let S = v && w.merge(v.common, v[h.method]);
    v &&
      w.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (X) => {
          delete v[X];
        }
      ),
      (h.headers = Se.concat(S, v));
    const B = [];
    let M = !0;
    this.interceptors.request.forEach(function (k) {
      (typeof k.runWhen == "function" && k.runWhen(h) === !1) ||
        ((M = M && k.synchronous), B.unshift(k.fulfilled, k.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function (k) {
      b.push(k.fulfilled, k.rejected);
    });
    let p,
      j = 0,
      J;
    if (!M) {
      const X = [wd.bind(this), void 0];
      for (
        X.unshift.apply(X, B),
          X.push.apply(X, b),
          J = X.length,
          p = Promise.resolve(h);
        j < J;

      )
        p = p.then(X[j++], X[j++]);
      return p;
    }
    J = B.length;
    let I = h;
    for (j = 0; j < J; ) {
      const X = B[j++],
        k = B[j++];
      try {
        I = X(I);
      } catch (Y) {
        k.call(this, Y);
        break;
      }
    }
    try {
      p = wd.call(this, I);
    } catch (X) {
      return Promise.reject(X);
    }
    for (j = 0, J = b.length; j < J; ) p = p.then(b[j++], b[j++]);
    return p;
  }
  getUri(r) {
    r = mn(this.defaults, r);
    const h = c0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return l0(h, r.params, r.paramsSerializer);
  }
};
w.forEach(["delete", "get", "head", "options"], function (r) {
  yn.prototype[r] = function (h, o) {
    return this.request(
      mn(o || {}, { method: r, url: h, data: (o || {}).data })
    );
  };
});
w.forEach(["post", "put", "patch"], function (r) {
  function h(o) {
    return function (v, S, B) {
      return this.request(
        mn(B || {}, {
          method: r,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: v,
          data: S,
        })
      );
    };
  }
  (yn.prototype[r] = h()), (yn.prototype[r + "Form"] = h(!0));
});
let xp = class d0 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let h;
    this.promise = new Promise(function (v) {
      h = v;
    });
    const o = this;
    this.promise.then((m) => {
      if (!o._listeners) return;
      let v = o._listeners.length;
      for (; v-- > 0; ) o._listeners[v](m);
      o._listeners = null;
    }),
      (this.promise.then = (m) => {
        let v;
        const S = new Promise((B) => {
          o.subscribe(B), (v = B);
        }).then(m);
        return (
          (S.cancel = function () {
            o.unsubscribe(v);
          }),
          S
        );
      }),
      r(function (v, S, B) {
        o.reason || ((o.reason = new ru(v, S, B)), h(o.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const h = this._listeners.indexOf(r);
    h !== -1 && this._listeners.splice(h, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      h = (o) => {
        r.abort(o);
      };
    return (
      this.subscribe(h),
      (r.signal.unsubscribe = () => this.unsubscribe(h)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new d0(function (m) {
        r = m;
      }),
      cancel: r,
    };
  }
};
function _p(i) {
  return function (h) {
    return i.apply(null, h);
  };
}
function Up(i) {
  return w.isObject(i) && i.isAxiosError === !0;
}
const vr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(vr).forEach(([i, r]) => {
  vr[r] = i;
});
function y0(i) {
  const r = new yn(i),
    h = Qd(yn.prototype.request, r);
  return (
    w.extend(h, yn.prototype, r, { allOwnKeys: !0 }),
    w.extend(h, r, null, { allOwnKeys: !0 }),
    (h.create = function (m) {
      return y0(mn(i, m));
    }),
    h
  );
}
const Ht = y0(ya);
Ht.Axios = yn;
Ht.CanceledError = ru;
Ht.CancelToken = xp;
Ht.isCancel = a0;
Ht.VERSION = h0;
Ht.toFormData = qi;
Ht.AxiosError = ft;
Ht.Cancel = Ht.CanceledError;
Ht.all = function (r) {
  return Promise.all(r);
};
Ht.spread = _p;
Ht.isAxiosError = Up;
Ht.mergeConfig = mn;
Ht.AxiosHeaders = Se;
Ht.formToJSON = (i) => u0(w.isHTMLForm(i) ? new FormData(i) : i);
Ht.getAdapter = s0.getAdapter;
Ht.HttpStatusCode = vr;
Ht.default = Ht;
const {
    Axios: Kp,
    AxiosError: Jp,
    CanceledError: Fp,
    isCancel: kp,
    CancelToken: $p,
    VERSION: Wp,
    all: Ip,
    Cancel: Pp,
    isAxiosError: tg,
    spread: eg,
    toFormData: lg,
    AxiosHeaders: ng,
    HttpStatusCode: ug,
    formToJSON: ag,
    getAdapter: ig,
    mergeConfig: cg,
  } = Ht,
  Yi = "https://jsonplaceholder.typicode.com/todos",
  Bp = async () =>
    (await Ht.get(Yi)).data
      .slice(0, 10)
      .map((h) => ({ id: h.id, title: h.title, compleated: h.compleated })),
  Dp = async (i) => (await Ht.post(Yi, i)).data,
  Cd = async (i) => {
    await Ht.delete(`${Yi}/${i}`);
  },
  zp = async (i, r) => {
    try {
      return (await Ht.patch(`${Yi}/${i}`, r)).data;
    } catch (h) {
      throw (console.error("Update failed:", h), h);
    }
  },
  Hd = ({ value: i, onChange: r, onKeyDown: h, placeholder: o }) =>
    mt.jsx("input", {
      className: "input",
      type: "text",
      value: i,
      onChange: r,
      onKeyDown: h,
      placeholder: o,
    }),
  oa = ({ text: i, onClick: r, variant: h = "primary", disabled: o = !1 }) =>
    mt.jsx("button", {
      className: `btn ${h}`,
      onClick: r,
      disabled: o,
      children: i,
    }),
  Mp = ({
    item: i,
    toggleSelection: r,
    removeItem: h,
    editItem: o,
    highlight: m = !1,
  }) => {
    const [v, S] = hr.useState(!1),
      [B, M] = hr.useState(i.title);
    return mt.jsxs("div", {
      className: "listitem1",
      children: [
        mt.jsx("input", {
          type: "checkbox",
          className: "item-checkbox",
          checked: i.compleated,
          onChange: () => r(i.id),
        }),
        v
          ? mt.jsx("input", {
              type: "text",
              value: B,
              onChange: (b) => M(b.target.value),
              onBlur: () => {
                o(i.id, B), S(!1);
              },
              onKeyDown: (b) => {
                b.key === "Enter" && (o(i.id, b.currentTarget.value), S(!1));
              },
              autoFocus: !0,
            })
          : mt.jsx("span", {
              className: `listitem ${i.compleated ? "strikethrough" : ""}`,
              onDoubleClick: () => S(!0),
              children: i.title,
            }),
        mt.jsx("button", {
          className: "remove-this",
          onClick: () => h(i.id),
          children: "X",
        }),
      ],
    });
  },
  wp = () => {
    const i = localStorage.getItem("todoList");
    return i ? JSON.parse(i) : [];
  },
  Np = () => {
    const [i, r] = sa.useState(wp),
      [h, o] = sa.useState(""),
      [m, v] = sa.useState(""),
      S = async () => {
        try {
          const Y = await Bp();
          r((nt) => [...nt, ...Y]),
            localStorage.setItem("todoList", JSON.stringify([...i, ...Y]));
        } catch (Y) {
          console.error("Error fetching API data:", Y);
        }
      };
    sa.useEffect(() => {
      localStorage.setItem("todoList", JSON.stringify(i));
    }, [i]);
    const B = (Y) => {
        o(Y.target.value);
      },
      M = (Y) => {
        if (Y.key === "Enter" && h.trim() !== "") {
          const nt = { id: 201 + i.length, title: h.trim(), compleated: !1 },
            W = [...i, nt];
          Dp(nt), r(W), o(""), v("");
        }
      },
      b = (Y) => {
        v(Y.target.value);
      },
      p =
        m.trim() === ""
          ? i
          : i.filter((Y) => {
              const nt = Y.title.toLowerCase().includes(m.toLowerCase());
              return (
                console.log(Y.title.toLowerCase().includes(m.toLowerCase())), nt
              );
            }),
      j = (Y) => {
        r((nt) =>
          nt.map((W) => (W.id === Y ? { ...W, compleated: !W.compleated } : W))
        );
      },
      J = () => {
        const Y = i.filter((W) => !W.compleated);
        i.filter((W) => W.compleated).forEach((W) => Cd(W.id)), r(Y);
      },
      I = () => {
        const Y = i.every((W) => W.compleated),
          nt = i.map((W) => ({ ...W, compleated: !Y }));
        r(nt);
      },
      X = (Y) => {
        const nt = i.filter((W) => W.id !== Y);
        Cd(Y), r(nt);
      },
      k = (Y, nt) => {
        zp(Y, { title: nt });
        const W = i.map((rt) => (rt.id === Y ? { ...rt, title: nt } : rt));
        r(W);
      };
    return mt.jsxs("div", {
      className: "box1",
      children: [
        mt.jsxs("div", {
          className: "input-container",
          children: [
            mt.jsx("input", {
              className: "select-all",
              type: "checkbox",
              onChange: I,
              checked: i.length > 0 && i.every((Y) => Y.compleated),
            }),
            mt.jsx(Hd, {
              value: h,
              onChange: B,
              onKeyDown: M,
              placeholder: "Add new task...",
            }),
          ],
        }),
        mt.jsxs("div", {
          className: "search-container",
          children: [
            mt.jsx(Hd, {
              placeholder: "Search tasks...",
              value: m,
              onChange: b,
            }),
            mt.jsx(oa, { text: "Add API", onClick: S }),
          ],
        }),
        mt.jsx("div", {
          children: p.map((Y) =>
            mt.jsx(
              Mp,
              {
                item: Y,
                toggleSelection: j,
                removeItem: X,
                editItem: k,
                highlight: m.trim() !== "",
              },
              Y.id
            )
          ),
        }),
        i.length > 0 &&
          mt.jsxs("div", {
            id: "footer1",
            children: [
              mt.jsxs("p", {
                id: "count",
                children: [i.length, " items left"],
              }),
              mt.jsx(oa, { text: "All" }),
              mt.jsx(oa, { text: "Active" }),
              mt.jsx(oa, { text: "Completed" }),
              i.some((Y) => Y.compleated) &&
                mt.jsx(oa, {
                  text: "Clear completed",
                  variant: "danger",
                  onClick: J,
                }),
            ],
          }),
      ],
    });
  },
  Cp = () =>
    mt.jsxs("div", {
      children: [
        mt.jsx("p", { id: "p1", children: "Double-click to edit a todo" }),
        mt.jsx("p", { id: "p1", children: "Created by Purnachandra Yadav PV" }),
        mt.jsx("p", { id: "p1", children: "Part of Opteamix" }),
      ],
    });
let Hp = () =>
  mt.jsxs("div", {
    children: [
      mt.jsx(Qm, {}),
      mt.jsx("div", { children: mt.jsx(Np, {}) }),
      mt.jsx(Cp, {}),
    ],
  });
const qp = () => mt.jsx(Hp, {}),
  Lp = "modulepreload",
  jp = function (i) {
    return "/" + i;
  },
  qd = {},
  Yp = function (r, h, o) {
    let m = Promise.resolve();
    if (h && h.length > 0) {
      document.getElementsByTagName("link");
      const S = document.querySelector("meta[property=csp-nonce]"),
        B =
          (S == null ? void 0 : S.nonce) ||
          (S == null ? void 0 : S.getAttribute("nonce"));
      m = Promise.allSettled(
        h.map((M) => {
          if (((M = jp(M)), M in qd)) return;
          qd[M] = !0;
          const b = M.endsWith(".css"),
            p = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${M}"]${p}`)) return;
          const j = document.createElement("link");
          if (
            ((j.rel = b ? "stylesheet" : Lp),
            b || (j.as = "script"),
            (j.crossOrigin = ""),
            (j.href = M),
            B && j.setAttribute("nonce", B),
            document.head.appendChild(j),
            b)
          )
            return new Promise((J, I) => {
              j.addEventListener("load", J),
                j.addEventListener("error", () =>
                  I(new Error(`Unable to preload CSS for ${M}`))
                );
            });
        })
      );
    }
    function v(S) {
      const B = new Event("vite:preloadError", { cancelable: !0 });
      if (((B.payload = S), window.dispatchEvent(B), !B.defaultPrevented))
        throw S;
    }
    return m.then((S) => {
      for (const B of S || []) B.status === "rejected" && v(B.reason);
      return r().catch(v);
    });
  },
  Gp = (i) => {
    i &&
      i instanceof Function &&
      Yp(async () => {
        const {
          getCLS: r,
          getFID: h,
          getFCP: o,
          getLCP: m,
          getTTFB: v,
        } = await import("./web-vitals-CFX8QzIp.js");
        return { getCLS: r, getFID: h, getFCP: o, getLCP: m, getTTFB: v };
      }, []).then(
        ({ getCLS: r, getFID: h, getFCP: o, getLCP: m, getTTFB: v }) => {
          r(i), h(i), o(i), m(i), v(i);
        }
      );
  },
  m0 = document.getElementById("root");
if (!m0) throw new Error("Root element not found");
const Xp = Xm.createRoot(m0);
Xp.render(mt.jsx(hr.StrictMode, { children: mt.jsx(qp, {}) }));
Gp(console.log);
