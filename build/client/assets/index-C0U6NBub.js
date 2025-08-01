function Ta(L, $) {
  for (var m = 0; m < $.length; m++) {
    const pe = $[m];
    if (typeof pe != "string" && !Array.isArray(pe)) {
      for (const ue in pe)
        if (ue !== "default" && !(ue in L)) {
          const me = Object.getOwnPropertyDescriptor(pe, ue);
          me &&
            Object.defineProperty(
              L,
              ue,
              me.get ? me : { enumerable: !0, get: () => pe[ue] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(L, Symbol.toStringTag, { value: "Module" }),
  );
}
function La(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default")
    ? L.default
    : L;
}
var ko = { exports: {} },
  hr = {},
  Eo = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ka;
function Lc() {
  if (ka) return D;
  ka = 1;
  var L = Symbol.for("react.element"),
    $ = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    pe = Symbol.for("react.strict_mode"),
    ue = Symbol.for("react.profiler"),
    me = Symbol.for("react.provider"),
    Ne = Symbol.for("react.context"),
    ae = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    _e = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    q = Symbol.iterator;
  function X(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (q && f[q]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var He = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    G = {};
  function H(f, h, O) {
    ((this.props = f),
      (this.context = h),
      (this.refs = G),
      (this.updater = O || He));
  }
  ((H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (f, h) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, h, "setState");
    }),
    (H.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function vt() {}
  vt.prototype = H.prototype;
  function it(f, h, O) {
    ((this.props = f),
      (this.context = h),
      (this.refs = G),
      (this.updater = O || He));
  }
  var Je = (it.prototype = new vt());
  ((Je.constructor = it), $e(Je, H.prototype), (Je.isPureReactComponent = !0));
  var ge = Array.isArray,
    qe = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(f, h, O) {
    var M,
      F = {},
      j = null,
      W = null;
    if (h != null)
      for (M in (h.ref !== void 0 && (W = h.ref),
      h.key !== void 0 && (j = "" + h.key),
      h))
        qe.call(h, M) && !ze.hasOwnProperty(M) && (F[M] = h[M]);
    var A = arguments.length - 2;
    if (A === 1) F.children = O;
    else if (1 < A) {
      for (var Z = Array(A), je = 0; je < A; je++) Z[je] = arguments[je + 2];
      F.children = Z;
    }
    if (f && f.defaultProps)
      for (M in ((A = f.defaultProps), A)) F[M] === void 0 && (F[M] = A[M]);
    return {
      $$typeof: L,
      type: f,
      key: j,
      ref: W,
      props: F,
      _owner: Ce.current,
    };
  }
  function xt(f, h) {
    return {
      $$typeof: L,
      type: f.type,
      key: h,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function ht(f) {
    return typeof f == "object" && f !== null && f.$$typeof === L;
  }
  function Qt(f) {
    var h = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (O) {
        return h[O];
      })
    );
  }
  var st = /\/+/g;
  function Fe(f, h) {
    return typeof f == "object" && f !== null && f.key != null
      ? Qt("" + f.key)
      : h.toString(36);
  }
  function be(f, h, O, M, F) {
    var j = typeof f;
    (j === "undefined" || j === "boolean") && (f = null);
    var W = !1;
    if (f === null) W = !0;
    else
      switch (j) {
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case L:
            case $:
              W = !0;
          }
      }
    if (W)
      return (
        (W = f),
        (F = F(W)),
        (f = M === "" ? "." + Fe(W, 0) : M),
        ge(F)
          ? ((O = ""),
            f != null && (O = f.replace(st, "$&/") + "/"),
            be(F, h, O, "", function (je) {
              return je;
            }))
          : F != null &&
            (ht(F) &&
              (F = xt(
                F,
                O +
                  (!F.key || (W && W.key === F.key)
                    ? ""
                    : ("" + F.key).replace(st, "$&/") + "/") +
                  f,
              )),
            h.push(F)),
        1
      );
    if (((W = 0), (M = M === "" ? "." : M + ":"), ge(f)))
      for (var A = 0; A < f.length; A++) {
        j = f[A];
        var Z = M + Fe(j, A);
        W += be(j, h, O, Z, F);
      }
    else if (((Z = X(f)), typeof Z == "function"))
      for (f = Z.call(f), A = 0; !(j = f.next()).done; )
        ((j = j.value), (Z = M + Fe(j, A++)), (W += be(j, h, O, Z, F)));
    else if (j === "object")
      throw (
        (h = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (h === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : h) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return W;
  }
  function at(f, h, O) {
    if (f == null) return f;
    var M = [],
      F = 0;
    return (
      be(f, M, "", "", function (j) {
        return h.call(O, j, F++);
      }),
      M
    );
  }
  function Te(f) {
    if (f._status === -1) {
      var h = f._result;
      ((h = h()),
        h.then(
          function (O) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = O));
          },
          function (O) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = O));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = h)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var te = { current: null },
    S = { transition: null },
    T = {
      ReactCurrentDispatcher: te,
      ReactCurrentBatchConfig: S,
      ReactCurrentOwner: Ce,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (D.Children = {
      map: at,
      forEach: function (f, h, O) {
        at(
          f,
          function () {
            h.apply(this, arguments);
          },
          O,
        );
      },
      count: function (f) {
        var h = 0;
        return (
          at(f, function () {
            h++;
          }),
          h
        );
      },
      toArray: function (f) {
        return (
          at(f, function (h) {
            return h;
          }) || []
        );
      },
      only: function (f) {
        if (!ht(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    }),
    (D.Component = H),
    (D.Fragment = m),
    (D.Profiler = ue),
    (D.PureComponent = it),
    (D.StrictMode = pe),
    (D.Suspense = B),
    (D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (D.act = _),
    (D.cloneElement = function (f, h, O) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            ".",
        );
      var M = $e({}, f.props),
        F = f.key,
        j = f.ref,
        W = f._owner;
      if (h != null) {
        if (
          (h.ref !== void 0 && ((j = h.ref), (W = Ce.current)),
          h.key !== void 0 && (F = "" + h.key),
          f.type && f.type.defaultProps)
        )
          var A = f.type.defaultProps;
        for (Z in h)
          qe.call(h, Z) &&
            !ze.hasOwnProperty(Z) &&
            (M[Z] = h[Z] === void 0 && A !== void 0 ? A[Z] : h[Z]);
      }
      var Z = arguments.length - 2;
      if (Z === 1) M.children = O;
      else if (1 < Z) {
        A = Array(Z);
        for (var je = 0; je < Z; je++) A[je] = arguments[je + 2];
        M.children = A;
      }
      return { $$typeof: L, type: f.type, key: F, ref: j, props: M, _owner: W };
    }),
    (D.createContext = function (f) {
      return (
        (f = {
          $$typeof: Ne,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: me, _context: f }),
        (f.Consumer = f)
      );
    }),
    (D.createElement = We),
    (D.createFactory = function (f) {
      var h = We.bind(null, f);
      return ((h.type = f), h);
    }),
    (D.createRef = function () {
      return { current: null };
    }),
    (D.forwardRef = function (f) {
      return { $$typeof: ae, render: f };
    }),
    (D.isValidElement = ht),
    (D.lazy = function (f) {
      return { $$typeof: ye, _payload: { _status: -1, _result: f }, _init: Te };
    }),
    (D.memo = function (f, h) {
      return { $$typeof: _e, type: f, compare: h === void 0 ? null : h };
    }),
    (D.startTransition = function (f) {
      var h = S.transition;
      S.transition = {};
      try {
        f();
      } finally {
        S.transition = h;
      }
    }),
    (D.unstable_act = _),
    (D.useCallback = function (f, h) {
      return te.current.useCallback(f, h);
    }),
    (D.useContext = function (f) {
      return te.current.useContext(f);
    }),
    (D.useDebugValue = function () {}),
    (D.useDeferredValue = function (f) {
      return te.current.useDeferredValue(f);
    }),
    (D.useEffect = function (f, h) {
      return te.current.useEffect(f, h);
    }),
    (D.useId = function () {
      return te.current.useId();
    }),
    (D.useImperativeHandle = function (f, h, O) {
      return te.current.useImperativeHandle(f, h, O);
    }),
    (D.useInsertionEffect = function (f, h) {
      return te.current.useInsertionEffect(f, h);
    }),
    (D.useLayoutEffect = function (f, h) {
      return te.current.useLayoutEffect(f, h);
    }),
    (D.useMemo = function (f, h) {
      return te.current.useMemo(f, h);
    }),
    (D.useReducer = function (f, h, O) {
      return te.current.useReducer(f, h, O);
    }),
    (D.useRef = function (f) {
      return te.current.useRef(f);
    }),
    (D.useState = function (f) {
      return te.current.useState(f);
    }),
    (D.useSyncExternalStore = function (f, h, O) {
      return te.current.useSyncExternalStore(f, h, O);
    }),
    (D.useTransition = function () {
      return te.current.useTransition();
    }),
    (D.version = "18.3.1"),
    D
  );
}
var Ea;
function Po() {
  return (Ea || ((Ea = 1), (Eo.exports = Lc())), Eo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Rc() {
  if (_a) return hr;
  _a = 1;
  var L = Po(),
    $ = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    pe = Object.prototype.hasOwnProperty,
    ue = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(ae, B, _e) {
    var ye,
      q = {},
      X = null,
      He = null;
    (_e !== void 0 && (X = "" + _e),
      B.key !== void 0 && (X = "" + B.key),
      B.ref !== void 0 && (He = B.ref));
    for (ye in B) pe.call(B, ye) && !me.hasOwnProperty(ye) && (q[ye] = B[ye]);
    if (ae && ae.defaultProps)
      for (ye in ((B = ae.defaultProps), B))
        q[ye] === void 0 && (q[ye] = B[ye]);
    return {
      $$typeof: $,
      type: ae,
      key: X,
      ref: He,
      props: q,
      _owner: ue.current,
    };
  }
  return ((hr.Fragment = m), (hr.jsx = Ne), (hr.jsxs = Ne), hr);
}
var Ca;
function Oc() {
  return (Ca || ((Ca = 1), (ko.exports = Rc())), ko.exports);
}
var Ac = Oc(),
  Ra = Po();
const Dc = La(Ra),
  Vc = Ta({ __proto__: null, default: Dc }, [Ra]);
var _o = { exports: {} },
  Ie = {},
  Co = { exports: {} },
  xo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa;
function Mc() {
  return (
    xa ||
      ((xa = 1),
      (function (L) {
        function $(S, T) {
          var _ = S.length;
          S.push(T);
          e: for (; 0 < _; ) {
            var f = (_ - 1) >>> 1,
              h = S[f];
            if (0 < ue(h, T)) ((S[f] = T), (S[_] = h), (_ = f));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function pe(S) {
          if (S.length === 0) return null;
          var T = S[0],
            _ = S.pop();
          if (_ !== T) {
            S[0] = _;
            e: for (var f = 0, h = S.length, O = h >>> 1; f < O; ) {
              var M = 2 * (f + 1) - 1,
                F = S[M],
                j = M + 1,
                W = S[j];
              if (0 > ue(F, _))
                j < h && 0 > ue(W, F)
                  ? ((S[f] = W), (S[j] = _), (f = j))
                  : ((S[f] = F), (S[M] = _), (f = M));
              else if (j < h && 0 > ue(W, _)) ((S[f] = W), (S[j] = _), (f = j));
              else break e;
            }
          }
          return T;
        }
        function ue(S, T) {
          var _ = S.sortIndex - T.sortIndex;
          return _ !== 0 ? _ : S.id - T.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var me = performance;
          L.unstable_now = function () {
            return me.now();
          };
        } else {
          var Ne = Date,
            ae = Ne.now();
          L.unstable_now = function () {
            return Ne.now() - ae;
          };
        }
        var B = [],
          _e = [],
          ye = 1,
          q = null,
          X = 3,
          He = !1,
          $e = !1,
          G = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          vt = typeof clearTimeout == "function" ? clearTimeout : null,
          it = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Je(S) {
          for (var T = m(_e); T !== null; ) {
            if (T.callback === null) pe(_e);
            else if (T.startTime <= S)
              (pe(_e), (T.sortIndex = T.expirationTime), $(B, T));
            else break;
            T = m(_e);
          }
        }
        function ge(S) {
          if (((G = !1), Je(S), !$e))
            if (m(B) !== null) (($e = !0), Te(qe));
            else {
              var T = m(_e);
              T !== null && te(ge, T.startTime - S);
            }
        }
        function qe(S, T) {
          (($e = !1), G && ((G = !1), vt(We), (We = -1)), (He = !0));
          var _ = X;
          try {
            for (
              Je(T), q = m(B);
              q !== null && (!(q.expirationTime > T) || (S && !Qt()));

            ) {
              var f = q.callback;
              if (typeof f == "function") {
                ((q.callback = null), (X = q.priorityLevel));
                var h = f(q.expirationTime <= T);
                ((T = L.unstable_now()),
                  typeof h == "function"
                    ? (q.callback = h)
                    : q === m(B) && pe(B),
                  Je(T));
              } else pe(B);
              q = m(B);
            }
            if (q !== null) var O = !0;
            else {
              var M = m(_e);
              (M !== null && te(ge, M.startTime - T), (O = !1));
            }
            return O;
          } finally {
            ((q = null), (X = _), (He = !1));
          }
        }
        var Ce = !1,
          ze = null,
          We = -1,
          xt = 5,
          ht = -1;
        function Qt() {
          return !(L.unstable_now() - ht < xt);
        }
        function st() {
          if (ze !== null) {
            var S = L.unstable_now();
            ht = S;
            var T = !0;
            try {
              T = ze(!0, S);
            } finally {
              T ? Fe() : ((Ce = !1), (ze = null));
            }
          } else Ce = !1;
        }
        var Fe;
        if (typeof it == "function")
          Fe = function () {
            it(st);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            at = be.port2;
          ((be.port1.onmessage = st),
            (Fe = function () {
              at.postMessage(null);
            }));
        } else
          Fe = function () {
            H(st, 0);
          };
        function Te(S) {
          ((ze = S), Ce || ((Ce = !0), Fe()));
        }
        function te(S, T) {
          We = H(function () {
            S(L.unstable_now());
          }, T);
        }
        ((L.unstable_IdlePriority = 5),
          (L.unstable_ImmediatePriority = 1),
          (L.unstable_LowPriority = 4),
          (L.unstable_NormalPriority = 3),
          (L.unstable_Profiling = null),
          (L.unstable_UserBlockingPriority = 2),
          (L.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (L.unstable_continueExecution = function () {
            $e || He || (($e = !0), Te(qe));
          }),
          (L.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (xt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (L.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (L.unstable_getFirstCallbackNode = function () {
            return m(B);
          }),
          (L.unstable_next = function (S) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = X;
            }
            var _ = X;
            X = T;
            try {
              return S();
            } finally {
              X = _;
            }
          }),
          (L.unstable_pauseExecution = function () {}),
          (L.unstable_requestPaint = function () {}),
          (L.unstable_runWithPriority = function (S, T) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var _ = X;
            X = S;
            try {
              return T();
            } finally {
              X = _;
            }
          }),
          (L.unstable_scheduleCallback = function (S, T, _) {
            var f = L.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? f + _ : f))
                : (_ = f),
              S)
            ) {
              case 1:
                var h = -1;
                break;
              case 2:
                h = 250;
                break;
              case 5:
                h = 1073741823;
                break;
              case 4:
                h = 1e4;
                break;
              default:
                h = 5e3;
            }
            return (
              (h = _ + h),
              (S = {
                id: ye++,
                callback: T,
                priorityLevel: S,
                startTime: _,
                expirationTime: h,
                sortIndex: -1,
              }),
              _ > f
                ? ((S.sortIndex = _),
                  $(_e, S),
                  m(B) === null &&
                    S === m(_e) &&
                    (G ? (vt(We), (We = -1)) : (G = !0), te(ge, _ - f)))
                : ((S.sortIndex = h), $(B, S), $e || He || (($e = !0), Te(qe))),
              S
            );
          }),
          (L.unstable_shouldYield = Qt),
          (L.unstable_wrapCallback = function (S) {
            var T = X;
            return function () {
              var _ = X;
              X = T;
              try {
                return S.apply(this, arguments);
              } finally {
                X = _;
              }
            };
          }));
      })(xo)),
    xo
  );
}
var Pa;
function Ic() {
  return (Pa || ((Pa = 1), (Co.exports = Mc())), Co.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Fc() {
  if (Na) return Ie;
  Na = 1;
  var L = Po(),
    $ = Ic();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
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
  var pe = new Set(),
    ue = {};
  function me(e, t) {
    (Ne(e, t), Ne(e + "Capture", t));
  }
  function Ne(e, t) {
    for (ue[e] = t, e = 0; e < t.length; e++) pe.add(t[e]);
  }
  var ae = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    B = Object.prototype.hasOwnProperty,
    _e =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ye = {},
    q = {};
  function X(e) {
    return B.call(q, e)
      ? !0
      : B.call(ye, e)
        ? !1
        : _e.test(e)
          ? (q[e] = !0)
          : ((ye[e] = !0), !1);
  }
  function He(e, t, n, r) {
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
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $e(e, t, n, r) {
    if (t === null || typeof t > "u" || He(e, t, n, r)) return !0;
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
  function G(e, t, n, r, l, u, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = o));
  }
  var H = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      H[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      H[t] = new G(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        H[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      H[e] = new G(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        H[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      H[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      H[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      H[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      H[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var vt = /[\-:]([a-z])/g;
  function it(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(vt, it);
      H[t] = new G(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(vt, it);
        H[t] = new G(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(vt, it);
      H[t] = new G(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      H[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (H.xlinkHref = new G(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      H[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function Je(e, t, n, r) {
    var l = H.hasOwnProperty(t) ? H[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      ($e(t, n, l, r) && (n = null),
      r || l === null
        ? X(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ge = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    qe = Symbol.for("react.element"),
    Ce = Symbol.for("react.portal"),
    ze = Symbol.for("react.fragment"),
    We = Symbol.for("react.strict_mode"),
    xt = Symbol.for("react.profiler"),
    ht = Symbol.for("react.provider"),
    Qt = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    at = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    te = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    f;
  function h(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var O = !1;
  function M(e, t) {
    if (!e || O) return "";
    O = !0;
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
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (p) {
            r = p;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            o = l.length - 1,
            i = u.length - 1;
          1 <= o && 0 <= i && l[o] !== u[i];

        )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (l[o] !== u[i]) {
            if (o !== 1 || i !== 1)
              do
                if ((o--, i--, 0 > i || l[o] !== u[i])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      ((O = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? h(e) : "";
  }
  function F(e) {
    switch (e.tag) {
      case 5:
        return h(e.type);
      case 16:
        return h("Lazy");
      case 13:
        return h("Suspense");
      case 19:
        return h("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = M(e.type, !1)), e);
      case 11:
        return ((e = M(e.type.render, !1)), e);
      case 1:
        return ((e = M(e.type, !0)), e);
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case Ce:
        return "Portal";
      case xt:
        return "Profiler";
      case We:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Qt:
          return (e.displayName || "Context") + ".Consumer";
        case ht:
          return (e._context.displayName || "Context") + ".Provider";
        case st:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case at:
          return (
            (t = e.displayName || null),
            t !== null ? t : j(e.type) || "Memo"
          );
        case Te:
          ((t = e._payload), (e = e._init));
          try {
            return j(e(t));
          } catch {}
      }
    return null;
  }
  function W(e) {
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
        return j(t);
      case 8:
        return t === We ? "StrictMode" : "Mode";
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
  function A(e) {
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
  function Z(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function je(e) {
    var t = Z(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), u.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function yr(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function No(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Z(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function gr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Nl(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function zo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = A(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function To(e, t) {
    ((t = t.checked), t != null && Je(e, "checked", t, !1));
  }
  function zl(e, t) {
    To(e, t);
    var n = A(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Tl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Tl(e, t.type, A(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Lo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Tl(e, t, n) {
    (t !== "number" || gr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Rn = Array.isArray;
  function un(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + A(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ll(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ro(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Rn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: A(n) };
  }
  function Oo(e, t) {
    var n = A(t.value),
      r = A(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Do(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Mo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Mo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var wr,
    Io = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          wr = wr || document.createElement("div"),
            wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = wr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
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
    Da = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    Da.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]));
    });
  });
  function Fo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function jo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Fo(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ma = _(
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
    },
  );
  function Ol(e, t) {
    if (t) {
      if (Ma[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Dl(e, t) {
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
  var Ml = null;
  function Il(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Fl = null,
    on = null,
    sn = null;
  function Uo(e) {
    if ((e = tr(e))) {
      if (typeof Fl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Hr(t)), Fl(e.stateNode, e.type, t));
    }
  }
  function Ao(e) {
    on ? (sn ? sn.push(e) : (sn = [e])) : (on = e);
  }
  function Vo() {
    if (on) {
      var e = on,
        t = sn;
      if (((sn = on = null), Uo(e), t)) for (e = 0; e < t.length; e++) Uo(t[e]);
    }
  }
  function Bo(e, t) {
    return e(t);
  }
  function Ho() {}
  var jl = !1;
  function $o(e, t, n) {
    if (jl) return e(t, n);
    jl = !0;
    try {
      return Bo(e, t, n);
    } finally {
      ((jl = !1), (on !== null || sn !== null) && (Ho(), Vo()));
    }
  }
  function Mn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Hr(n);
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Ul = !1;
  if (ae)
    try {
      var In = {};
      (Object.defineProperty(In, "passive", {
        get: function () {
          Ul = !0;
        },
      }),
        window.addEventListener("test", In, In),
        window.removeEventListener("test", In, In));
    } catch {
      Ul = !1;
    }
  function Ia(e, t, n, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Fn = !1,
    Sr = null,
    kr = !1,
    Al = null,
    Fa = {
      onError: function (e) {
        ((Fn = !0), (Sr = e));
      },
    };
  function ja(e, t, n, r, l, u, o, i, s) {
    ((Fn = !1), (Sr = null), Ia.apply(Fa, arguments));
  }
  function Ua(e, t, n, r, l, u, o, i, s) {
    if ((ja.apply(this, arguments), Fn)) {
      if (Fn) {
        var p = Sr;
        ((Fn = !1), (Sr = null));
      } else throw Error(m(198));
      kr || ((kr = !0), (Al = p));
    }
  }
  function Kt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Wo(e) {
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
  function Qo(e) {
    if (Kt(e) !== e) throw Error(m(188));
  }
  function Aa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Kt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return (Qo(l), e);
          if (u === r) return (Qo(l), t);
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = u));
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === n) {
            ((o = !0), (n = l), (r = u));
            break;
          }
          if (i === r) {
            ((o = !0), (r = l), (n = u));
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === n) {
              ((o = !0), (n = u), (r = l));
              break;
            }
            if (i === r) {
              ((o = !0), (r = u), (n = l));
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ko(e) {
    return ((e = Aa(e)), e !== null ? Yo(e) : null);
  }
  function Yo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Yo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Xo = $.unstable_scheduleCallback,
    Go = $.unstable_cancelCallback,
    Va = $.unstable_shouldYield,
    Ba = $.unstable_requestPaint,
    re = $.unstable_now,
    Ha = $.unstable_getCurrentPriorityLevel,
    Vl = $.unstable_ImmediatePriority,
    Zo = $.unstable_UserBlockingPriority,
    Er = $.unstable_NormalPriority,
    $a = $.unstable_LowPriority,
    Jo = $.unstable_IdlePriority,
    _r = null,
    ft = null;
  function Wa(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
      try {
        ft.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var et = Math.clz32 ? Math.clz32 : Ya,
    Qa = Math.log,
    Ka = Math.LN2;
  function Ya(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Qa(e) / Ka) | 0)) | 0);
  }
  var Cr = 64,
    xr = 4194304;
  function jn(e) {
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
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? (r = jn(i)) : ((u &= o), u !== 0 && (r = jn(u)));
    } else ((o = n & ~l), o !== 0 ? (r = jn(o)) : u !== 0 && (r = jn(u)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - et(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Xa(e, t) {
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
  function Ga(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var o = 31 - et(u),
        i = 1 << o,
        s = l[o];
      (s === -1
        ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = Xa(i, t))
        : s <= t && (e.expiredLanes |= i),
        (u &= ~i));
    }
  }
  function Bl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function qo() {
    var e = Cr;
    return ((Cr <<= 1), (Cr & 4194240) === 0 && (Cr = 64), e);
  }
  function Hl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Un(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - et(t)),
      (e[t] = n));
  }
  function Za(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - et(n),
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function $l(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - et(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var V = 0;
  function bo(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ei,
    Wl,
    ti,
    ni,
    ri,
    Ql = !1,
    Nr = [],
    Pt = null,
    Nt = null,
    zt = null,
    An = new Map(),
    Vn = new Map(),
    Tt = [],
    Ja =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function li(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        Nt = null;
        break;
      case "mouseover":
      case "mouseout":
        zt = null;
        break;
      case "pointerover":
      case "pointerout":
        An.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(t.pointerId);
    }
  }
  function Bn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = tr(t)), t !== null && Wl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function qa(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = Bn(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Nt = Bn(Nt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((zt = Bn(zt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (An.set(u, Bn(An.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (u = l.pointerId),
          Vn.set(u, Bn(Vn.get(u) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function ui(e) {
    var t = Yt(e.target);
    if (t !== null) {
      var n = Kt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Wo(n)), t !== null)) {
            ((e.blockedOn = t),
              ri(e.priority, function () {
                ti(n);
              }));
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
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ml = r), n.target.dispatchEvent(r), (Ml = null));
      } else return ((t = tr(n)), t !== null && Wl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function oi(e, t, n) {
    zr(e) && n.delete(t);
  }
  function ba() {
    ((Ql = !1),
      Pt !== null && zr(Pt) && (Pt = null),
      Nt !== null && zr(Nt) && (Nt = null),
      zt !== null && zr(zt) && (zt = null),
      An.forEach(oi),
      Vn.forEach(oi));
  }
  function Hn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ql ||
        ((Ql = !0),
        $.unstable_scheduleCallback($.unstable_NormalPriority, ba)));
  }
  function $n(e) {
    function t(l) {
      return Hn(l, e);
    }
    if (0 < Nr.length) {
      Hn(Nr[0], e);
      for (var n = 1; n < Nr.length; n++) {
        var r = Nr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && Hn(Pt, e),
        Nt !== null && Hn(Nt, e),
        zt !== null && Hn(zt, e),
        An.forEach(t),
        Vn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
      (ui(n), n.blockedOn === null && Tt.shift());
  }
  var an = ge.ReactCurrentBatchConfig,
    Tr = !0;
  function ef(e, t, n, r) {
    var l = V,
      u = an.transition;
    an.transition = null;
    try {
      ((V = 1), Kl(e, t, n, r));
    } finally {
      ((V = l), (an.transition = u));
    }
  }
  function tf(e, t, n, r) {
    var l = V,
      u = an.transition;
    an.transition = null;
    try {
      ((V = 4), Kl(e, t, n, r));
    } finally {
      ((V = l), (an.transition = u));
    }
  }
  function Kl(e, t, n, r) {
    if (Tr) {
      var l = Yl(e, t, n, r);
      if (l === null) (fu(e, t, r, Lr, n), li(e, r));
      else if (qa(l, e, t, n, r)) r.stopPropagation();
      else if ((li(e, r), t & 4 && -1 < Ja.indexOf(e))) {
        for (; l !== null; ) {
          var u = tr(l);
          if (
            (u !== null && ei(u),
            (u = Yl(e, t, n, r)),
            u === null && fu(e, t, r, Lr, n),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else fu(e, t, r, null, n);
    }
  }
  var Lr = null;
  function Yl(e, t, n, r) {
    if (((Lr = null), (e = Il(r)), (e = Yt(e)), e !== null))
      if (((t = Kt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Wo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Lr = e), null);
  }
  function ii(e) {
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
        switch (Ha()) {
          case Vl:
            return 1;
          case Zo:
            return 4;
          case Er:
          case $a:
            return 16;
          case Jo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lt = null,
    Xl = null,
    Rr = null;
  function si() {
    if (Rr) return Rr;
    var e,
      t = Xl,
      n = t.length,
      r,
      l = "value" in Lt ? Lt.value : Lt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++);
    return (Rr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Or(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function ai() {
    return !1;
  }
  function Ue(e) {
    function t(n, r, l, u, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = o),
        (this.currentTarget = null));
      for (var i in e)
        e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(u) : u[i]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Dr
          : ai),
        (this.isPropagationStopped = ai),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      t
    );
  }
  var fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gl = Ue(fn),
    Wn = _({}, fn, { view: 0, detail: 0 }),
    nf = Ue(Wn),
    Zl,
    Jl,
    Qn,
    Mr = _({}, Wn, {
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
      getModifierState: bl,
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
          : (e !== Qn &&
              (Qn && e.type === "mousemove"
                ? ((Zl = e.screenX - Qn.screenX), (Jl = e.screenY - Qn.screenY))
                : (Jl = Zl = 0),
              (Qn = e)),
            Zl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Jl;
      },
    }),
    fi = Ue(Mr),
    rf = _({}, Mr, { dataTransfer: 0 }),
    lf = Ue(rf),
    uf = _({}, Wn, { relatedTarget: 0 }),
    ql = Ue(uf),
    of = _({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sf = Ue(of),
    af = _({}, fn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ff = Ue(af),
    cf = _({}, fn, { data: 0 }),
    ci = Ue(cf),
    df = {
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
    pf = {
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
    mf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = mf[e])
        ? !!t[e]
        : !1;
  }
  function bl() {
    return vf;
  }
  var hf = _({}, Wn, {
      key: function (e) {
        if (e.key) {
          var t = df[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? pf[e.keyCode] || "Unidentified"
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
      getModifierState: bl,
      charCode: function (e) {
        return e.type === "keypress" ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Or(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    yf = Ue(hf),
    gf = _({}, Mr, {
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
    di = Ue(gf),
    wf = _({}, Wn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bl,
    }),
    Sf = Ue(wf),
    kf = _({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ef = Ue(kf),
    _f = _({}, Mr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    Cf = Ue(_f),
    xf = [9, 13, 27, 32],
    eu = ae && "CompositionEvent" in window,
    Kn = null;
  ae && "documentMode" in document && (Kn = document.documentMode);
  var Pf = ae && "TextEvent" in window && !Kn,
    pi = ae && (!eu || (Kn && 8 < Kn && 11 >= Kn)),
    mi = " ",
    vi = !1;
  function hi(e, t) {
    switch (e) {
      case "keyup":
        return xf.indexOf(t.keyCode) !== -1;
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
  function yi(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var cn = !1;
  function Nf(e, t) {
    switch (e) {
      case "compositionend":
        return yi(t);
      case "keypress":
        return t.which !== 32 ? null : ((vi = !0), mi);
      case "textInput":
        return ((e = t.data), e === mi && vi ? null : e);
      default:
        return null;
    }
  }
  function zf(e, t) {
    if (cn)
      return e === "compositionend" || (!eu && hi(e, t))
        ? ((e = si()), (Rr = Xl = Lt = null), (cn = !1), e)
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
        return pi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tf = {
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
  function gi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tf[e.type] : t === "textarea";
  }
  function wi(e, t, n, r) {
    (Ao(r),
      (t = Ar(t, "onChange")),
      0 < t.length &&
        ((n = new Gl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Yn = null,
    Xn = null;
  function Lf(e) {
    ji(e, 0);
  }
  function Ir(e) {
    var t = hn(e);
    if (No(t)) return e;
  }
  function Rf(e, t) {
    if (e === "change") return t;
  }
  var Si = !1;
  if (ae) {
    var tu;
    if (ae) {
      var nu = "oninput" in document;
      if (!nu) {
        var ki = document.createElement("div");
        (ki.setAttribute("oninput", "return;"),
          (nu = typeof ki.oninput == "function"));
      }
      tu = nu;
    } else tu = !1;
    Si = tu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ei() {
    Yn && (Yn.detachEvent("onpropertychange", _i), (Xn = Yn = null));
  }
  function _i(e) {
    if (e.propertyName === "value" && Ir(Xn)) {
      var t = [];
      (wi(t, Xn, e, Il(e)), $o(Lf, t));
    }
  }
  function Of(e, t, n) {
    e === "focusin"
      ? (Ei(), (Yn = t), (Xn = n), Yn.attachEvent("onpropertychange", _i))
      : e === "focusout" && Ei();
  }
  function Df(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ir(Xn);
  }
  function Mf(e, t) {
    if (e === "click") return Ir(t);
  }
  function If(e, t) {
    if (e === "input" || e === "change") return Ir(t);
  }
  function Ff(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var tt = typeof Object.is == "function" ? Object.is : Ff;
  function Gn(e, t) {
    if (tt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!B.call(t, l) || !tt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ci(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xi(e, t) {
    var n = Ci(e);
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
      n = Ci(n);
    }
  }
  function Pi(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Pi(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ni() {
    for (var e = window, t = gr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = gr(e.document);
    }
    return t;
  }
  function ru(e) {
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
  function jf(e) {
    var t = Ni(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Pi(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ru(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(r.start, l);
          ((r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = xi(n, u)));
          var o = xi(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Uf = ae && "documentMode" in document && 11 >= document.documentMode,
    dn = null,
    lu = null,
    Zn = null,
    uu = !1;
  function zi(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uu ||
      dn == null ||
      dn !== gr(r) ||
      ((r = dn),
      "selectionStart" in r && ru(r)
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
      (Zn && Gn(Zn, r)) ||
        ((Zn = r),
        (r = Ar(lu, "onSelect")),
        0 < r.length &&
          ((t = new Gl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = dn))));
  }
  function Fr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var pn = {
      animationend: Fr("Animation", "AnimationEnd"),
      animationiteration: Fr("Animation", "AnimationIteration"),
      animationstart: Fr("Animation", "AnimationStart"),
      transitionend: Fr("Transition", "TransitionEnd"),
    },
    ou = {},
    Ti = {};
  ae &&
    ((Ti = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete pn.animationend.animation,
      delete pn.animationiteration.animation,
      delete pn.animationstart.animation),
    "TransitionEvent" in window || delete pn.transitionend.transition);
  function jr(e) {
    if (ou[e]) return ou[e];
    if (!pn[e]) return e;
    var t = pn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ti) return (ou[e] = t[n]);
    return e;
  }
  var Li = jr("animationend"),
    Ri = jr("animationiteration"),
    Oi = jr("animationstart"),
    Di = jr("transitionend"),
    Mi = new Map(),
    Ii =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rt(e, t) {
    (Mi.set(e, t), me(t, [e]));
  }
  for (var iu = 0; iu < Ii.length; iu++) {
    var su = Ii[iu],
      Af = su.toLowerCase(),
      Vf = su[0].toUpperCase() + su.slice(1);
    Rt(Af, "on" + Vf);
  }
  (Rt(Li, "onAnimationEnd"),
    Rt(Ri, "onAnimationIteration"),
    Rt(Oi, "onAnimationStart"),
    Rt("dblclick", "onDoubleClick"),
    Rt("focusin", "onFocus"),
    Rt("focusout", "onBlur"),
    Rt(Di, "onTransitionEnd"),
    Ne("onMouseEnter", ["mouseout", "mouseover"]),
    Ne("onMouseLeave", ["mouseout", "mouseover"]),
    Ne("onPointerEnter", ["pointerout", "pointerover"]),
    Ne("onPointerLeave", ["pointerout", "pointerover"]),
    me(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    me(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    me("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    me(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    me(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    me(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Jn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Bf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Jn),
    );
  function Fi(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ua(r, t, void 0, e), (e.currentTarget = null));
  }
  function ji(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o],
              s = i.instance,
              p = i.currentTarget;
            if (((i = i.listener), s !== u && l.isPropagationStopped()))
              break e;
            (Fi(l, i, p), (u = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((i = r[o]),
              (s = i.instance),
              (p = i.currentTarget),
              (i = i.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            (Fi(l, i, p), (u = s));
          }
      }
    }
    if (kr) throw ((e = Al), (kr = !1), (Al = null), e);
  }
  function K(e, t) {
    var n = t[hu];
    n === void 0 && (n = t[hu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ui(t, e, 2, !1), n.add(r));
  }
  function au(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ui(n, e, r, t));
  }
  var Ur = "_reactListening" + Math.random().toString(36).slice(2);
  function qn(e) {
    if (!e[Ur]) {
      ((e[Ur] = !0),
        pe.forEach(function (n) {
          n !== "selectionchange" && (Bf.has(n) || au(n, !1, e), au(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ur] || ((t[Ur] = !0), au("selectionchange", !1, t));
    }
  }
  function Ui(e, t, n, r) {
    switch (ii(t)) {
      case 1:
        var l = ef;
        break;
      case 4:
        l = tf;
        break;
      default:
        l = Kl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ul ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function fu(e, t, n, r, l) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; i !== null; ) {
            if (((o = Yt(i)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = u = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    $o(function () {
      var p = u,
        y = Il(n),
        g = [];
      e: {
        var v = Mi.get(e);
        if (v !== void 0) {
          var k = Gl,
            C = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = yf;
              break;
            case "focusin":
              ((C = "focus"), (k = ql));
              break;
            case "focusout":
              ((C = "blur"), (k = ql));
              break;
            case "beforeblur":
            case "afterblur":
              k = ql;
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
              k = fi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = lf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Sf;
              break;
            case Li:
            case Ri:
            case Oi:
              k = sf;
              break;
            case Di:
              k = Ef;
              break;
            case "scroll":
              k = nf;
              break;
            case "wheel":
              k = Cf;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = ff;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = di;
          }
          var x = (t & 4) !== 0,
            le = !x && e === "scroll",
            c = x ? (v !== null ? v + "Capture" : null) : v;
          x = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                c !== null &&
                  ((w = Mn(a, c)), w != null && x.push(bn(a, w, d)))),
              le)
            )
              break;
            a = a.return;
          }
          0 < x.length &&
            ((v = new k(v, C, null, n, y)), g.push({ event: v, listeners: x }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            v &&
              n !== Ml &&
              (C = n.relatedTarget || n.fromElement) &&
              (Yt(C) || C[yt]))
          )
            break e;
          if (
            (k || v) &&
            ((v =
              y.window === y
                ? y
                : (v = y.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            k
              ? ((C = n.relatedTarget || n.toElement),
                (k = p),
                (C = C ? Yt(C) : null),
                C !== null &&
                  ((le = Kt(C)), C !== le || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((k = null), (C = p)),
            k !== C)
          ) {
            if (
              ((x = fi),
              (w = "onMouseLeave"),
              (c = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((x = di),
                (w = "onPointerLeave"),
                (c = "onPointerEnter"),
                (a = "pointer")),
              (le = k == null ? v : hn(k)),
              (d = C == null ? v : hn(C)),
              (v = new x(w, a + "leave", k, n, y)),
              (v.target = le),
              (v.relatedTarget = d),
              (w = null),
              Yt(y) === p &&
                ((x = new x(c, a + "enter", C, n, y)),
                (x.target = d),
                (x.relatedTarget = le),
                (w = x)),
              (le = w),
              k && C)
            )
              t: {
                for (x = k, c = C, a = 0, d = x; d; d = mn(d)) a++;
                for (d = 0, w = c; w; w = mn(w)) d++;
                for (; 0 < a - d; ) ((x = mn(x)), a--);
                for (; 0 < d - a; ) ((c = mn(c)), d--);
                for (; a--; ) {
                  if (x === c || (c !== null && x === c.alternate)) break t;
                  ((x = mn(x)), (c = mn(c)));
                }
                x = null;
              }
            else x = null;
            (k !== null && Ai(g, v, k, x, !1),
              C !== null && le !== null && Ai(g, le, C, x, !0));
          }
        }
        e: {
          if (
            ((v = p ? hn(p) : window),
            (k = v.nodeName && v.nodeName.toLowerCase()),
            k === "select" || (k === "input" && v.type === "file"))
          )
            var P = Rf;
          else if (gi(v))
            if (Si) P = If;
            else {
              P = Df;
              var N = Of;
            }
          else
            (k = v.nodeName) &&
              k.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (P = Mf);
          if (P && (P = P(e, p))) {
            wi(g, P, n, y);
            break e;
          }
          (N && N(e, v, p),
            e === "focusout" &&
              (N = v._wrapperState) &&
              N.controlled &&
              v.type === "number" &&
              Tl(v, "number", v.value));
        }
        switch (((N = p ? hn(p) : window), e)) {
          case "focusin":
            (gi(N) || N.contentEditable === "true") &&
              ((dn = N), (lu = p), (Zn = null));
            break;
          case "focusout":
            Zn = lu = dn = null;
            break;
          case "mousedown":
            uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((uu = !1), zi(g, n, y));
            break;
          case "selectionchange":
            if (Uf) break;
          case "keydown":
          case "keyup":
            zi(g, n, y);
        }
        var z;
        if (eu)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          cn
            ? hi(e, n) && (R = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (R = "onCompositionStart");
        (R &&
          (pi &&
            n.locale !== "ko" &&
            (cn || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && cn && (z = si())
              : ((Lt = y),
                (Xl = "value" in Lt ? Lt.value : Lt.textContent),
                (cn = !0))),
          (N = Ar(p, R)),
          0 < N.length &&
            ((R = new ci(R, e, null, n, y)),
            g.push({ event: R, listeners: N }),
            z ? (R.data = z) : ((z = yi(n)), z !== null && (R.data = z)))),
          (z = Pf ? Nf(e, n) : zf(e, n)) &&
            ((p = Ar(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new ci("onBeforeInput", "beforeinput", null, n, y)),
              g.push({ event: y, listeners: p }),
              (y.data = z))));
      }
      ji(g, t);
    });
  }
  function bn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ar(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Mn(e, n)),
        u != null && r.unshift(bn(e, u, l)),
        (u = Mn(e, t)),
        u != null && r.push(bn(e, u, l))),
        (e = e.return));
    }
    return r;
  }
  function mn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ai(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var i = n,
        s = i.alternate,
        p = i.stateNode;
      if (s !== null && s === r) break;
      (i.tag === 5 &&
        p !== null &&
        ((i = p),
        l
          ? ((s = Mn(n, u)), s != null && o.unshift(bn(n, s, i)))
          : l || ((s = Mn(n, u)), s != null && o.push(bn(n, s, i)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Hf = /\r\n?/g,
    $f = /\u0000|\uFFFD/g;
  function Vi(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Hf,
        `
`,
      )
      .replace($f, "");
  }
  function Vr(e, t, n) {
    if (((t = Vi(t)), Vi(e) !== t && n)) throw Error(m(425));
  }
  function Br() {}
  var cu = null,
    du = null;
  function pu(e, t) {
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
  var mu = typeof setTimeout == "function" ? setTimeout : void 0,
    Wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bi = typeof Promise == "function" ? Promise : void 0,
    Qf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bi < "u"
          ? function (e) {
              return Bi.resolve(null).then(e).catch(Kf);
            }
          : mu;
  function Kf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function vu(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), $n(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    $n(t);
  }
  function Ot(e) {
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
  function Hi(e) {
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
  var vn = Math.random().toString(36).slice(2),
    ct = "__reactFiber$" + vn,
    er = "__reactProps$" + vn,
    yt = "__reactContainer$" + vn,
    hu = "__reactEvents$" + vn,
    Yf = "__reactListeners$" + vn,
    Xf = "__reactHandles$" + vn;
  function Yt(e) {
    var t = e[ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[yt] || n[ct])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Hi(e); e !== null; ) {
            if ((n = e[ct])) return n;
            e = Hi(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function tr(e) {
    return (
      (e = e[ct] || e[yt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function hn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Hr(e) {
    return e[er] || null;
  }
  var yu = [],
    yn = -1;
  function Dt(e) {
    return { current: e };
  }
  function Y(e) {
    0 > yn || ((e.current = yu[yn]), (yu[yn] = null), yn--);
  }
  function Q(e, t) {
    (yn++, (yu[yn] = e.current), (e.current = t));
  }
  var Mt = {},
    we = Dt(Mt),
    Le = Dt(!1),
    Xt = Mt;
  function gn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function $r() {
    (Y(Le), Y(we));
  }
  function $i(e, t, n) {
    if (we.current !== Mt) throw Error(m(168));
    (Q(we, t), Q(Le, n));
  }
  function Wi(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, W(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Wr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Mt),
      (Xt = we.current),
      Q(we, e),
      Q(Le, Le.current),
      !0
    );
  }
  function Qi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Wi(e, t, Xt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Y(Le),
        Y(we),
        Q(we, e))
      : Y(Le),
      Q(Le, n));
  }
  var gt = null,
    Qr = !1,
    gu = !1;
  function Ki(e) {
    gt === null ? (gt = [e]) : gt.push(e);
  }
  function Gf(e) {
    ((Qr = !0), Ki(e));
  }
  function It() {
    if (!gu && gt !== null) {
      gu = !0;
      var e = 0,
        t = V;
      try {
        var n = gt;
        for (V = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((gt = null), (Qr = !1));
      } catch (l) {
        throw (gt !== null && (gt = gt.slice(e + 1)), Xo(Vl, It), l);
      } finally {
        ((V = t), (gu = !1));
      }
    }
    return null;
  }
  var wn = [],
    Sn = 0,
    Kr = null,
    Yr = 0,
    Qe = [],
    Ke = 0,
    Gt = null,
    wt = 1,
    St = "";
  function Zt(e, t) {
    ((wn[Sn++] = Yr), (wn[Sn++] = Kr), (Kr = e), (Yr = t));
  }
  function Yi(e, t, n) {
    ((Qe[Ke++] = wt), (Qe[Ke++] = St), (Qe[Ke++] = Gt), (Gt = e));
    var r = wt;
    e = St;
    var l = 32 - et(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - et(t) + l;
    if (30 < u) {
      var o = l - (l % 5);
      ((u = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (wt = (1 << (32 - et(t) + l)) | (n << l) | r),
        (St = u + e));
    } else ((wt = (1 << u) | (n << l) | r), (St = e));
  }
  function wu(e) {
    e.return !== null && (Zt(e, 1), Yi(e, 1, 0));
  }
  function Su(e) {
    for (; e === Kr; )
      ((Kr = wn[--Sn]), (wn[Sn] = null), (Yr = wn[--Sn]), (wn[Sn] = null));
    for (; e === Gt; )
      ((Gt = Qe[--Ke]),
        (Qe[Ke] = null),
        (St = Qe[--Ke]),
        (Qe[Ke] = null),
        (wt = Qe[--Ke]),
        (Qe[Ke] = null));
  }
  var Ae = null,
    Ve = null,
    J = !1,
    nt = null;
  function Xi(e, t) {
    var n = Ze(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Gi(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ae = e), (Ve = Ot(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ae = e), (Ve = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Gt !== null ? { id: wt, overflow: St } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ze(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ae = e),
              (Ve = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ku(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Eu(e) {
    if (J) {
      var t = Ve;
      if (t) {
        var n = t;
        if (!Gi(e, t)) {
          if (ku(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = Ae;
          t && Gi(e, t)
            ? Xi(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ae = e));
        }
      } else {
        if (ku(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ae = e));
      }
    }
  }
  function Zi(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ae = e;
  }
  function Xr(e) {
    if (e !== Ae) return !1;
    if (!J) return (Zi(e), (J = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !pu(e.type, e.memoizedProps))),
      t && (t = Ve))
    ) {
      if (ku(e)) throw (Ji(), Error(m(418)));
      for (; t; ) (Xi(e, t), (t = Ot(t.nextSibling)));
    }
    if ((Zi(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ve = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ji() {
    for (var e = Ve; e; ) e = Ot(e.nextSibling);
  }
  function kn() {
    ((Ve = Ae = null), (J = !1));
  }
  function _u(e) {
    nt === null ? (nt = [e]) : nt.push(e);
  }
  var Zf = ge.ReactCurrentBatchConfig;
  function nr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (o) {
              var i = l.refs;
              o === null ? delete i[u] : (i[u] = o);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Gr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function qi(e) {
    var t = e._init;
    return t(e._payload);
  }
  function bi(e) {
    function t(c, a) {
      if (e) {
        var d = c.deletions;
        d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
      }
    }
    function n(c, a) {
      if (!e) return null;
      for (; a !== null; ) (t(c, a), (a = a.sibling));
      return null;
    }
    function r(c, a) {
      for (c = new Map(); a !== null; )
        (a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling));
      return c;
    }
    function l(c, a) {
      return ((c = $t(c, a)), (c.index = 0), (c.sibling = null), c);
    }
    function u(c, a, d) {
      return (
        (c.index = d),
        e
          ? ((d = c.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
              : ((c.flags |= 2), a))
          : ((c.flags |= 1048576), a)
      );
    }
    function o(c) {
      return (e && c.alternate === null && (c.flags |= 2), c);
    }
    function i(c, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = vo(d, c.mode, w)), (a.return = c), a)
        : ((a = l(a, d)), (a.return = c), a);
    }
    function s(c, a, d, w) {
      var P = d.type;
      return P === ze
        ? y(c, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === P ||
              (typeof P == "object" &&
                P !== null &&
                P.$$typeof === Te &&
                qi(P) === a.type))
          ? ((w = l(a, d.props)), (w.ref = nr(c, a, d)), (w.return = c), w)
          : ((w = wl(d.type, d.key, d.props, null, c.mode, w)),
            (w.ref = nr(c, a, d)),
            (w.return = c),
            w);
    }
    function p(c, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = ho(d, c.mode, w)), (a.return = c), a)
        : ((a = l(a, d.children || [])), (a.return = c), a);
    }
    function y(c, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = ln(d, c.mode, w, P)), (a.return = c), a)
        : ((a = l(a, d)), (a.return = c), a);
    }
    function g(c, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = vo("" + a, c.mode, d)), (a.return = c), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case qe:
            return (
              (d = wl(a.type, a.key, a.props, null, c.mode, d)),
              (d.ref = nr(c, null, a)),
              (d.return = c),
              d
            );
          case Ce:
            return ((a = ho(a, c.mode, d)), (a.return = c), a);
          case Te:
            var w = a._init;
            return g(c, w(a._payload), d);
        }
        if (Rn(a) || T(a))
          return ((a = ln(a, c.mode, d, null)), (a.return = c), a);
        Gr(c, a);
      }
      return null;
    }
    function v(c, a, d, w) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : i(c, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === P ? s(c, a, d, w) : null;
          case Ce:
            return d.key === P ? p(c, a, d, w) : null;
          case Te:
            return ((P = d._init), v(c, a, P(d._payload), w));
        }
        if (Rn(d) || T(d)) return P !== null ? null : y(c, a, d, w, null);
        Gr(c, d);
      }
      return null;
    }
    function k(c, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((c = c.get(d) || null), i(a, c, "" + w, P));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case qe:
            return (
              (c = c.get(w.key === null ? d : w.key) || null),
              s(a, c, w, P)
            );
          case Ce:
            return (
              (c = c.get(w.key === null ? d : w.key) || null),
              p(a, c, w, P)
            );
          case Te:
            var N = w._init;
            return k(c, a, d, N(w._payload), P);
        }
        if (Rn(w) || T(w)) return ((c = c.get(d) || null), y(a, c, w, P, null));
        Gr(a, w);
      }
      return null;
    }
    function C(c, a, d, w) {
      for (
        var P = null, N = null, z = a, R = (a = 0), de = null;
        z !== null && R < d.length;
        R++
      ) {
        z.index > R ? ((de = z), (z = null)) : (de = z.sibling);
        var U = v(c, z, d[R], w);
        if (U === null) {
          z === null && (z = de);
          break;
        }
        (e && z && U.alternate === null && t(c, z),
          (a = u(U, a, R)),
          N === null ? (P = U) : (N.sibling = U),
          (N = U),
          (z = de));
      }
      if (R === d.length) return (n(c, z), J && Zt(c, R), P);
      if (z === null) {
        for (; R < d.length; R++)
          ((z = g(c, d[R], w)),
            z !== null &&
              ((a = u(z, a, R)),
              N === null ? (P = z) : (N.sibling = z),
              (N = z)));
        return (J && Zt(c, R), P);
      }
      for (z = r(c, z); R < d.length; R++)
        ((de = k(z, c, R, d[R], w)),
          de !== null &&
            (e &&
              de.alternate !== null &&
              z.delete(de.key === null ? R : de.key),
            (a = u(de, a, R)),
            N === null ? (P = de) : (N.sibling = de),
            (N = de)));
      return (
        e &&
          z.forEach(function (Wt) {
            return t(c, Wt);
          }),
        J && Zt(c, R),
        P
      );
    }
    function x(c, a, d, w) {
      var P = T(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var N = (P = null), z = a, R = (a = 0), de = null, U = d.next();
        z !== null && !U.done;
        R++, U = d.next()
      ) {
        z.index > R ? ((de = z), (z = null)) : (de = z.sibling);
        var Wt = v(c, z, U.value, w);
        if (Wt === null) {
          z === null && (z = de);
          break;
        }
        (e && z && Wt.alternate === null && t(c, z),
          (a = u(Wt, a, R)),
          N === null ? (P = Wt) : (N.sibling = Wt),
          (N = Wt),
          (z = de));
      }
      if (U.done) return (n(c, z), J && Zt(c, R), P);
      if (z === null) {
        for (; !U.done; R++, U = d.next())
          ((U = g(c, U.value, w)),
            U !== null &&
              ((a = u(U, a, R)),
              N === null ? (P = U) : (N.sibling = U),
              (N = U)));
        return (J && Zt(c, R), P);
      }
      for (z = r(c, z); !U.done; R++, U = d.next())
        ((U = k(z, c, R, U.value, w)),
          U !== null &&
            (e && U.alternate !== null && z.delete(U.key === null ? R : U.key),
            (a = u(U, a, R)),
            N === null ? (P = U) : (N.sibling = U),
            (N = U)));
      return (
        e &&
          z.forEach(function (Tc) {
            return t(c, Tc);
          }),
        J && Zt(c, R),
        P
      );
    }
    function le(c, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === ze &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var P = d.key, N = a; N !== null; ) {
                if (N.key === P) {
                  if (((P = d.type), P === ze)) {
                    if (N.tag === 7) {
                      (n(c, N.sibling),
                        (a = l(N, d.props.children)),
                        (a.return = c),
                        (c = a));
                      break e;
                    }
                  } else if (
                    N.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Te &&
                      qi(P) === N.type)
                  ) {
                    (n(c, N.sibling),
                      (a = l(N, d.props)),
                      (a.ref = nr(c, N, d)),
                      (a.return = c),
                      (c = a));
                    break e;
                  }
                  n(c, N);
                  break;
                } else t(c, N);
                N = N.sibling;
              }
              d.type === ze
                ? ((a = ln(d.props.children, c.mode, w, d.key)),
                  (a.return = c),
                  (c = a))
                : ((w = wl(d.type, d.key, d.props, null, c.mode, w)),
                  (w.ref = nr(c, a, d)),
                  (w.return = c),
                  (c = w));
            }
            return o(c);
          case Ce:
            e: {
              for (N = d.key; a !== null; ) {
                if (a.key === N)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    (n(c, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = c),
                      (c = a));
                    break e;
                  } else {
                    n(c, a);
                    break;
                  }
                else t(c, a);
                a = a.sibling;
              }
              ((a = ho(d, c.mode, w)), (a.return = c), (c = a));
            }
            return o(c);
          case Te:
            return ((N = d._init), le(c, a, N(d._payload), w));
        }
        if (Rn(d)) return C(c, a, d, w);
        if (T(d)) return x(c, a, d, w);
        Gr(c, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
            : (n(c, a), (a = vo(d, c.mode, w)), (a.return = c), (c = a)),
          o(c))
        : n(c, a);
    }
    return le;
  }
  var En = bi(!0),
    es = bi(!1),
    Zr = Dt(null),
    Jr = null,
    _n = null,
    Cu = null;
  function xu() {
    Cu = _n = Jr = null;
  }
  function Pu(e) {
    var t = Zr.current;
    (Y(Zr), (e._currentValue = t));
  }
  function Nu(e, t, n) {
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
  function Cn(e, t) {
    ((Jr = e),
      (Cu = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Ye(e) {
    var t = e._currentValue;
    if (Cu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (Jr === null) throw Error(m(308));
        ((_n = e), (Jr.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var Jt = null;
  function zu(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  function ts(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), zu(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      kt(e, r)
    );
  }
  function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ft = !1;
  function Tu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ns(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Et(e, t) {
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
    if (((r = r.shared), (I & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        kt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), zu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      kt(e, n)
    );
  }
  function qr(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), $l(e, n));
    }
  }
  function rs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (u === null ? (l = u = o) : (u = u.next = o), (n = n.next));
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function br(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var u = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        p = s.next;
      ((s.next = null), o === null ? (u = p) : (o.next = p), (o = s));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (i = y.lastBaseUpdate),
        i !== o &&
          (i === null ? (y.firstBaseUpdate = p) : (i.next = p),
          (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      ((o = 0), (y = p = s = null), (i = u));
      do {
        var v = i.lane,
          k = i.eventTime;
        if ((r & v) === v) {
          y !== null &&
            (y = y.next =
              {
                eventTime: k,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var C = e,
              x = i;
            switch (((v = t), (k = n), x.tag)) {
              case 1:
                if (((C = x.payload), typeof C == "function")) {
                  g = C.call(k, g, v);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = x.payload),
                  (v = typeof C == "function" ? C.call(k, g, v) : C),
                  v == null)
                )
                  break e;
                g = _({}, g, v);
                break e;
              case 2:
                Ft = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [i]) : v.push(i));
        } else
          ((k = {
            eventTime: k,
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            y === null ? ((p = y = k), (s = g)) : (y = y.next = k),
            (o |= v));
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          ((v = i),
            (i = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((en |= o), (e.lanes = o), (e.memoizedState = g));
    }
  }
  function ls(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var rr = {},
    dt = Dt(rr),
    lr = Dt(rr),
    ur = Dt(rr);
  function qt(e) {
    if (e === rr) throw Error(m(174));
    return e;
  }
  function Lu(e, t) {
    switch ((Q(ur, t), Q(lr, e), Q(dt, rr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Rl(t, e)));
    }
    (Y(dt), Q(dt, t));
  }
  function xn() {
    (Y(dt), Y(lr), Y(ur));
  }
  function us(e) {
    qt(ur.current);
    var t = qt(dt.current),
      n = Rl(t, e.type);
    t !== n && (Q(lr, e), Q(dt, n));
  }
  function Ru(e) {
    lr.current === e && (Y(dt), Y(lr));
  }
  var b = Dt(0);
  function el(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ou = [];
  function Du() {
    for (var e = 0; e < Ou.length; e++)
      Ou[e]._workInProgressVersionPrimary = null;
    Ou.length = 0;
  }
  var tl = ge.ReactCurrentDispatcher,
    Mu = ge.ReactCurrentBatchConfig,
    bt = 0,
    ee = null,
    ie = null,
    fe = null,
    nl = !1,
    or = !1,
    ir = 0,
    Jf = 0;
  function Se() {
    throw Error(m(321));
  }
  function Iu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!tt(e[n], t[n])) return !1;
    return !0;
  }
  function Fu(e, t, n, r, l, u) {
    if (
      ((bt = u),
      (ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (tl.current = e === null || e.memoizedState === null ? tc : nc),
      (e = n(r, l)),
      or)
    ) {
      u = 0;
      do {
        if (((or = !1), (ir = 0), 25 <= u)) throw Error(m(301));
        ((u += 1),
          (fe = ie = null),
          (t.updateQueue = null),
          (tl.current = rc),
          (e = n(r, l)));
      } while (or);
    }
    if (
      ((tl.current = ul),
      (t = ie !== null && ie.next !== null),
      (bt = 0),
      (fe = ie = ee = null),
      (nl = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function ju() {
    var e = ir !== 0;
    return ((ir = 0), e);
  }
  function pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e), fe);
  }
  function Xe() {
    if (ie === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ie.next;
    var t = fe === null ? ee.memoizedState : fe.next;
    if (t !== null) ((fe = t), (ie = e));
    else {
      if (e === null) throw Error(m(310));
      ((ie = e),
        (e = {
          memoizedState: ie.memoizedState,
          baseState: ie.baseState,
          baseQueue: ie.baseQueue,
          queue: ie.queue,
          next: null,
        }),
        fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e));
    }
    return fe;
  }
  function sr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Uu(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = ie,
      l = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = u.next), (u.next = o));
      }
      ((r.baseQueue = l = u), (n.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (r = r.baseState));
      var i = (o = null),
        s = null,
        p = u;
      do {
        var y = p.lane;
        if ((bt & y) === y)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action)));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((i = s = g), (o = r)) : (s = s.next = g),
            (ee.lanes |= y),
            (en |= y));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (o = r) : (s.next = i),
        tt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (ee.lanes |= u), (en |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Au(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((u = e(u, o.action)), (o = o.next));
      while (o !== l);
      (tt(u, t.memoizedState) || (Oe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function os() {}
  function is(e, t) {
    var n = ee,
      r = Xe(),
      l = t(),
      u = !tt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Vu(fs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (fe !== null && fe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ar(9, as.bind(null, n, r, l, t), void 0, null),
        ce === null)
      )
        throw Error(m(349));
      (bt & 30) !== 0 || ss(n, t, l);
    }
    return l;
  }
  function ss(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ee.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function as(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), cs(t) && ds(e));
  }
  function fs(e, t, n) {
    return n(function () {
      cs(t) && ds(e);
    });
  }
  function cs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !tt(e, n);
    } catch {
      return !0;
    }
  }
  function ds(e) {
    var t = kt(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function ps(e) {
    var t = pt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ec.bind(null, ee, e)),
      [t.memoizedState, e]
    );
  }
  function ar(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ee.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ms() {
    return Xe().memoizedState;
  }
  function rl(e, t, n, r) {
    var l = pt();
    ((ee.flags |= e),
      (l.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ll(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ie !== null) {
      var o = ie.memoizedState;
      if (((u = o.destroy), r !== null && Iu(r, o.deps))) {
        l.memoizedState = ar(t, n, u, r);
        return;
      }
    }
    ((ee.flags |= e), (l.memoizedState = ar(1 | t, n, u, r)));
  }
  function vs(e, t) {
    return rl(8390656, 8, e, t);
  }
  function Vu(e, t) {
    return ll(2048, 8, e, t);
  }
  function hs(e, t) {
    return ll(4, 2, e, t);
  }
  function ys(e, t) {
    return ll(4, 4, e, t);
  }
  function gs(e, t) {
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
  function ws(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      ll(4, 4, gs.bind(null, t, e), n)
    );
  }
  function Bu() {}
  function Ss(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Iu(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ks(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Iu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Es(e, t, n) {
    return (bt & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (tt(n, t) ||
          ((n = qo()), (ee.lanes |= n), (en |= n), (e.baseState = !0)),
        t);
  }
  function qf(e, t) {
    var n = V;
    ((V = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Mu.transition;
    Mu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((V = n), (Mu.transition = r));
    }
  }
  function _s() {
    return Xe().memoizedState;
  }
  function bf(e, t, n) {
    var r = Bt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Cs(e))
    )
      xs(t, n);
    else if (((n = ts(e, t, n, r)), n !== null)) {
      var l = Pe();
      (ot(n, e, r, l), Ps(n, t, r));
    }
  }
  function ec(e, t, n) {
    var r = Bt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Cs(e)) xs(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var o = t.lastRenderedState,
            i = u(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = i), tt(i, o))) {
            var s = t.interleaved;
            (s === null
              ? ((l.next = l), zu(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ts(e, t, l, r)),
        n !== null && ((l = Pe()), ot(n, e, r, l), Ps(n, t, r)));
    }
  }
  function Cs(e) {
    var t = e.alternate;
    return e === ee || (t !== null && t === ee);
  }
  function xs(e, t) {
    or = nl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ps(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), $l(e, n));
    }
  }
  var ul = {
      readContext: Ye,
      useCallback: Se,
      useContext: Se,
      useEffect: Se,
      useImperativeHandle: Se,
      useInsertionEffect: Se,
      useLayoutEffect: Se,
      useMemo: Se,
      useReducer: Se,
      useRef: Se,
      useState: Se,
      useDebugValue: Se,
      useDeferredValue: Se,
      useTransition: Se,
      useMutableSource: Se,
      useSyncExternalStore: Se,
      useId: Se,
      unstable_isNewReconciler: !1,
    },
    tc = {
      readContext: Ye,
      useCallback: function (e, t) {
        return ((pt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ye,
      useEffect: vs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          rl(4194308, 4, gs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return rl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return rl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = pt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = pt();
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
          (e = e.dispatch = bf.bind(null, ee, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = pt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ps,
      useDebugValue: Bu,
      useDeferredValue: function (e) {
        return (pt().memoizedState = e);
      },
      useTransition: function () {
        var e = ps(!1),
          t = e[0];
        return ((e = qf.bind(null, e[1])), (pt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ee,
          l = pt();
        if (J) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ce === null)) throw Error(m(349));
          (bt & 30) !== 0 || ss(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          vs(fs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          ar(9, as.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = pt(),
          t = ce.identifierPrefix;
        if (J) {
          var n = St,
            r = wt;
          ((n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ir++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Jf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    nc = {
      readContext: Ye,
      useCallback: Ss,
      useContext: Ye,
      useEffect: Vu,
      useImperativeHandle: ws,
      useInsertionEffect: hs,
      useLayoutEffect: ys,
      useMemo: ks,
      useReducer: Uu,
      useRef: ms,
      useState: function () {
        return Uu(sr);
      },
      useDebugValue: Bu,
      useDeferredValue: function (e) {
        var t = Xe();
        return Es(t, ie.memoizedState, e);
      },
      useTransition: function () {
        var e = Uu(sr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: os,
      useSyncExternalStore: is,
      useId: _s,
      unstable_isNewReconciler: !1,
    },
    rc = {
      readContext: Ye,
      useCallback: Ss,
      useContext: Ye,
      useEffect: Vu,
      useImperativeHandle: ws,
      useInsertionEffect: hs,
      useLayoutEffect: ys,
      useMemo: ks,
      useReducer: Au,
      useRef: ms,
      useState: function () {
        return Au(sr);
      },
      useDebugValue: Bu,
      useDeferredValue: function (e) {
        var t = Xe();
        return ie === null ? (t.memoizedState = e) : Es(t, ie.memoizedState, e);
      },
      useTransition: function () {
        var e = Au(sr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: os,
      useSyncExternalStore: is,
      useId: _s,
      unstable_isNewReconciler: !1,
    };
  function rt(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Hu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ol = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Kt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Bt(e),
        u = Et(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = jt(e, u, l)),
        t !== null && (ot(t, e, l, r), qr(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Bt(e),
        u = Et(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = jt(e, u, l)),
        t !== null && (ot(t, e, l, r), qr(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Bt(e),
        l = Et(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = jt(e, l, r)),
        t !== null && (ot(t, e, r, n), qr(t, e, r)));
    },
  };
  function Ns(e, t, n, r, l, u, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Gn(n, r) || !Gn(l, u)
          : !0
    );
  }
  function zs(e, t, n) {
    var r = !1,
      l = Mt,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ye(u))
        : ((l = Re(t) ? Xt : we.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? gn(e, l) : Mt)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ol),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Ts(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ol.enqueueReplaceState(t, t.state, null));
  }
  function $u(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Tu(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Ye(u))
      : ((u = Re(t) ? Xt : we.current), (l.context = gn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Hu(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && ol.enqueueReplaceState(l, l.state, null),
        br(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += F(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Wu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Qu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var lc = typeof WeakMap == "function" ? WeakMap : Map;
  function Ls(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (pl || ((pl = !0), (oo = r)), Qu(e, t));
      }),
      n
    );
  }
  function Rs(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Qu(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Qu(e, t),
            typeof r != "function" &&
              (At === null ? (At = new Set([this])) : At.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Os(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new lc();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = gc.bind(null, e, t, n)), t.then(e, e));
  }
  function Ds(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ms(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Et(-1, 1)), (t.tag = 2), jt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var uc = ge.ReactCurrentOwner,
    Oe = !1;
  function xe(e, t, n, r) {
    t.child = e === null ? es(t, null, n, r) : En(t, e.child, n, r);
  }
  function Is(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Cn(t, l),
      (r = Fu(e, t, n, r, u, l)),
      (n = ju()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (J && n && wu(t), (t.flags |= 1), xe(e, t, r, l), t.child)
    );
  }
  function Fs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !mo(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), js(e, t, u, r, l))
        : ((e = wl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var o = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Gn), n(o, r) && e.ref === t.ref)
      )
        return _t(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = $t(u, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function js(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Gn(u, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return Ku(e, t, n, r, l);
  }
  function Us(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Q(zn, Be),
          (Be |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Q(zn, Be),
            (Be |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : n),
          Q(zn, Be),
          (Be |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Q(zn, Be),
        (Be |= r));
    return (xe(e, t, l, n), t.child);
  }
  function As(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ku(e, t, n, r, l) {
    var u = Re(n) ? Xt : we.current;
    return (
      (u = gn(t, u)),
      Cn(t, l),
      (n = Fu(e, t, n, r, u, l)),
      (r = ju()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (J && r && wu(t), (t.flags |= 1), xe(e, t, n, l), t.child)
    );
  }
  function Vs(e, t, n, r, l) {
    if (Re(n)) {
      var u = !0;
      Wr(t);
    } else u = !1;
    if ((Cn(t, l), t.stateNode === null))
      (sl(e, t), zs(t, n, r), $u(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        i = t.memoizedProps;
      o.props = i;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ye(p))
        : ((p = Re(n) ? Xt : we.current), (p = gn(t, p)));
      var y = n.getDerivedStateFromProps,
        g =
          typeof y == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      (g ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((i !== r || s !== p) && Ts(t, o, r, p)),
        (Ft = !1));
      var v = t.memoizedState;
      ((o.state = v),
        br(t, r, o, l),
        (s = t.memoizedState),
        i !== r || v !== s || Le.current || Ft
          ? (typeof y == "function" && (Hu(t, n, y, r), (s = t.memoizedState)),
            (i = Ft || Ns(t, n, i, r, v, s, p))
              ? (g ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = p),
            (r = i))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        ns(e, t),
        (i = t.memoizedProps),
        (p = t.type === t.elementType ? i : rt(t.type, i)),
        (o.props = p),
        (g = t.pendingProps),
        (v = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ye(s))
          : ((s = Re(n) ? Xt : we.current), (s = gn(t, s))));
      var k = n.getDerivedStateFromProps;
      ((y =
        typeof k == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((i !== g || v !== s) && Ts(t, o, r, s)),
        (Ft = !1),
        (v = t.memoizedState),
        (o.state = v),
        br(t, r, o, l));
      var C = t.memoizedState;
      i !== g || v !== C || Le.current || Ft
        ? (typeof k == "function" && (Hu(t, n, k, r), (C = t.memoizedState)),
          (p = Ft || Ns(t, n, p, r, v, C, s) || !1)
            ? (y ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, C, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, C, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (i === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = C)),
          (o.props = r),
          (o.state = C),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (i === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Yu(e, t, n, r, u, l);
  }
  function Yu(e, t, n, r, l, u) {
    As(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Qi(t, n, !1), _t(e, t, u));
    ((r = t.stateNode), (uc.current = t));
    var i =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = En(t, e.child, null, u)), (t.child = En(t, null, i, u)))
        : xe(e, t, i, u),
      (t.memoizedState = r.state),
      l && Qi(t, n, !0),
      t.child
    );
  }
  function Bs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? $i(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && $i(e, t.context, !1),
      Lu(e, t.containerInfo));
  }
  function Hs(e, t, n, r, l) {
    return (kn(), _u(l), (t.flags |= 256), xe(e, t, n, r), t.child);
  }
  var Xu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function $s(e, t, n) {
    var r = t.pendingProps,
      l = b.current,
      u = !1,
      o = (t.flags & 128) !== 0,
      i;
    if (
      ((i = o) ||
        (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      i
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Q(b, l & 1),
      e === null)
    )
      return (
        Eu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = o))
                  : (u = Sl(o, r, 0, null)),
                (e = ln(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Gu(n)),
                (t.memoizedState = Xu),
                e)
              : Zu(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
      return oc(e, t, o, r, i, l, n);
    if (u) {
      ((u = r.fallback), (o = t.mode), (l = e.child), (i = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = $t(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        i !== null ? (u = $t(i, u)) : ((u = ln(u, o, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? Gu(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (u.memoizedState = o),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Xu),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = $t(u, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
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
  function Zu(e, t) {
    return (
      (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function il(e, t, n, r) {
    return (
      r !== null && _u(r),
      En(t, e.child, null, n),
      (e = Zu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function oc(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Wu(Error(m(422)))), il(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = ln(u, l, o, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, o),
            (t.child.memoizedState = Gu(o)),
            (t.memoizedState = Xu),
            u);
    if ((t.mode & 1) === 0) return il(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
      return (
        (r = i),
        (u = Error(m(419))),
        (r = Wu(u, r, void 0)),
        il(e, t, o, r)
      );
    }
    if (((i = (o & e.childLanes) !== 0), Oe || i)) {
      if (((r = ce), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), kt(e, l), ot(r, e, l, -1)));
      }
      return (po(), (r = Wu(Error(m(421)))), il(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = wc.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (Ve = Ot(l.nextSibling)),
        (Ae = t),
        (J = !0),
        (nt = null),
        e !== null &&
          ((Qe[Ke++] = wt),
          (Qe[Ke++] = St),
          (Qe[Ke++] = Gt),
          (wt = e.id),
          (St = e.overflow),
          (Gt = t)),
        (t = Zu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ws(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Nu(e.return, t, n));
  }
  function Ju(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Qs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((xe(e, t, r.children, n), (r = b.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ws(e, n, t);
          else if (e.tag === 19) Ws(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((Q(b, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && el(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Ju(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && el(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ju(t, !0, n, null, u);
          break;
        case "together":
          Ju(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function sl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (en |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = $t(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function ic(e, t, n) {
    switch (t.tag) {
      case 3:
        (Bs(t), kn());
        break;
      case 5:
        us(t);
        break;
      case 1:
        Re(t.type) && Wr(t);
        break;
      case 4:
        Lu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (Q(Zr, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Q(b, b.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? $s(e, t, n)
              : (Q(b, b.current & 1),
                (e = _t(e, t, n)),
                e !== null ? e.sibling : null);
        Q(b, b.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Qs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Q(b, b.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Us(e, t, n));
    }
    return _t(e, t, n);
  }
  var Ks, qu, Ys, Xs;
  ((Ks = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (qu = function () {}),
    (Ys = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), qt(dt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Nl(e, l)), (r = Nl(e, r)), (u = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (u = []));
            break;
          case "textarea":
            ((l = Ll(e, l)), (r = Ll(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Br);
        }
        Ol(n, r);
        var o;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var i = l[p];
              for (o in i) i.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (ue.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((i = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== i && (s != null || i != null))
          )
            if (p === "style")
              if (i) {
                for (o in i)
                  !i.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s)
                  s.hasOwnProperty(o) &&
                    i[o] !== s[o] &&
                    (n || (n = {}), (n[o] = s[o]));
              } else (n || (u || (u = []), u.push(p, n)), (n = s));
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (i = i ? i.__html : void 0),
                  s != null && i !== s && (u = u || []).push(p, s))
                : p === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (u = u || []).push(p, "" + s)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (ue.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && K("scroll", e),
                        u || i === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (Xs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function fr(e, t) {
    if (!J)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function sc(e, t, n) {
    var r = t.pendingProps;
    switch ((Su(t), t.tag)) {
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
        return (ke(t), null);
      case 1:
        return (Re(t.type) && $r(), ke(t), null);
      case 3:
        return (
          (r = t.stateNode),
          xn(),
          Y(Le),
          Y(we),
          Du(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Xr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), nt !== null && (ao(nt), (nt = null)))),
          qu(e, t),
          ke(t),
          null
        );
      case 5:
        Ru(t);
        var l = qt(ur.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ys(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (ke(t), null);
          }
          if (((e = qt(dt.current)), Xr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[ct] = t), (r[er] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (K("cancel", r), K("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jn.length; l++) K(Jn[l], r);
                break;
              case "source":
                K("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (K("error", r), K("load", r));
                break;
              case "details":
                K("toggle", r);
                break;
              case "input":
                (zo(r, u), K("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }),
                  K("invalid", r));
                break;
              case "textarea":
                (Ro(r, u), K("invalid", r));
            }
            (Ol(n, u), (l = null));
            for (var o in u)
              if (u.hasOwnProperty(o)) {
                var i = u[o];
                o === "children"
                  ? typeof i == "string"
                    ? r.textContent !== i &&
                      (u.suppressHydrationWarning !== !0 &&
                        Vr(r.textContent, i, e),
                      (l = ["children", i]))
                    : typeof i == "number" &&
                      r.textContent !== "" + i &&
                      (u.suppressHydrationWarning !== !0 &&
                        Vr(r.textContent, i, e),
                      (l = ["children", "" + i]))
                  : ue.hasOwnProperty(o) &&
                    i != null &&
                    o === "onScroll" &&
                    K("scroll", r);
              }
            switch (n) {
              case "input":
                (yr(r), Lo(r, u, !0));
                break;
              case "textarea":
                (yr(r), Do(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Br);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Mo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[ct] = t),
              (e[er] = r),
              Ks(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Dl(n, r)), n)) {
                case "dialog":
                  (K("cancel", e), K("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (K("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Jn.length; l++) K(Jn[l], e);
                  l = r;
                  break;
                case "source":
                  (K("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (K("error", e), K("load", e), (l = r));
                  break;
                case "details":
                  (K("toggle", e), (l = r));
                  break;
                case "input":
                  (zo(e, r), (l = Nl(e, r)), K("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    K("invalid", e));
                  break;
                case "textarea":
                  (Ro(e, r), (l = Ll(e, r)), K("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ol(n, l), (i = l));
              for (u in i)
                if (i.hasOwnProperty(u)) {
                  var s = i[u];
                  u === "style"
                    ? jo(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Io(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && On(e, s)
                          : typeof s == "number" && On(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (ue.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && K("scroll", e)
                            : s != null && Je(e, u, s, o));
                }
              switch (n) {
                case "input":
                  (yr(e), Lo(e, r, !1));
                  break;
                case "textarea":
                  (yr(e), Do(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + A(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? un(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        un(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Br);
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
        return (ke(t), null);
      case 6:
        if (e && t.stateNode != null) Xs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = qt(ur.current)), qt(dt.current), Xr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[ct] = t),
              (u = r.nodeValue !== n) && ((e = Ae), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Vr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Vr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[ct] = t),
              (t.stateNode = r));
        }
        return (ke(t), null);
      case 13:
        if (
          (Y(b),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (J && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Ji(), kn(), (t.flags |= 98560), (u = !1));
          else if (((u = Xr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[ct] = t;
            } else
              (kn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ke(t), (u = !1));
          } else (nt !== null && (ao(nt), (nt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (b.current & 1) !== 0
                  ? se === 0 && (se = 3)
                  : po())),
            t.updateQueue !== null && (t.flags |= 4),
            ke(t),
            null);
      case 4:
        return (
          xn(),
          qu(e, t),
          e === null && qn(t.stateNode.containerInfo),
          ke(t),
          null
        );
      case 10:
        return (Pu(t.type._context), ke(t), null);
      case 17:
        return (Re(t.type) && $r(), ke(t), null);
      case 19:
        if ((Y(b), (u = t.memoizedState), u === null)) return (ke(t), null);
        if (((r = (t.flags & 128) !== 0), (o = u.rendering), o === null))
          if (r) fr(u, !1);
          else {
            if (se !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = el(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      fr(u, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    ((u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (o = u.alternate),
                      o === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = o.childLanes),
                          (u.lanes = o.lanes),
                          (u.child = o.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = o.memoizedProps),
                          (u.memoizedState = o.memoizedState),
                          (u.updateQueue = o.updateQueue),
                          (u.type = o.type),
                          (e = o.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (Q(b, (b.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              re() > Tn &&
              ((t.flags |= 128), (r = !0), fr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = el(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                fr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !o.alternate &&
                  !J)
              )
                return (ke(t), null);
            } else
              2 * re() - u.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), fr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = u.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (u.last = o));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = re()),
            (t.sibling = null),
            (n = b.current),
            Q(b, r ? (n & 1) | 2 : n & 1),
            t)
          : (ke(t), null);
      case 22:
      case 23:
        return (
          co(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Be & 1073741824) !== 0 &&
              (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ke(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function ac(e, t) {
    switch ((Su(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && $r(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          xn(),
          Y(Le),
          Y(we),
          Du(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Ru(t), null);
      case 13:
        if (
          (Y(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          kn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Y(b), null);
      case 4:
        return (xn(), null);
      case 10:
        return (Pu(t.type._context), null);
      case 22:
      case 23:
        return (co(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var al = !1,
    Ee = !1,
    fc = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Nn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ne(e, t, r);
        }
      else n.current = null;
  }
  function bu(e, t, n) {
    try {
      n();
    } catch (r) {
      ne(e, t, r);
    }
  }
  var Gs = !1;
  function cc(e, t) {
    if (((cu = Tr), (e = Ni()), ru(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              i = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              v = null;
            t: for (;;) {
              for (
                var k;
                g !== n || (l !== 0 && g.nodeType !== 3) || (i = o + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = o + r),
                  g.nodeType === 3 && (o += g.nodeValue.length),
                  (k = g.firstChild) !== null;

              )
                ((v = g), (g = k));
              for (;;) {
                if (g === e) break t;
                if (
                  (v === n && ++p === l && (i = o),
                  v === u && ++y === r && (s = o),
                  (k = g.nextSibling) !== null)
                )
                  break;
                ((g = v), (v = g.parentNode));
              }
              g = k;
            }
            n = i === -1 || s === -1 ? null : { start: i, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      du = { focusedElem: e, selectionRange: n }, Tr = !1, E = t;
      E !== null;

    )
      if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (E = e));
      else
        for (; E !== null; ) {
          t = E;
          try {
            var C = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var x = C.memoizedProps,
                      le = C.memoizedState,
                      c = t.stateNode,
                      a = c.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? x : rt(t.type, x),
                        le,
                      );
                    c.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            ne(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (E = e));
            break;
          }
          E = t.return;
        }
    return ((C = Gs), (Gs = !1), C);
  }
  function cr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && bu(t, n, u));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, t) {
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
  function eo(e) {
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
  function Zs(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Zs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[ct],
          delete t[er],
          delete t[hu],
          delete t[Yf],
          delete t[Xf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Js(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Js(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function to(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Br)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (to(e, t, n), e = e.sibling; e !== null; )
        (to(e, t, n), (e = e.sibling));
  }
  function no(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (no(e, t, n), e = e.sibling; e !== null; )
        (no(e, t, n), (e = e.sibling));
  }
  var ve = null,
    lt = !1;
  function Ut(e, t, n) {
    for (n = n.child; n !== null; ) (bs(e, t, n), (n = n.sibling));
  }
  function bs(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(_r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ee || Nn(n, t);
      case 6:
        var r = ve,
          l = lt;
        ((ve = null),
          Ut(e, t, n),
          (ve = r),
          (lt = l),
          ve !== null &&
            (lt
              ? ((e = ve),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ve.removeChild(n.stateNode)));
        break;
      case 18:
        ve !== null &&
          (lt
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8
                ? vu(e.parentNode, n)
                : e.nodeType === 1 && vu(e, n),
              $n(e))
            : vu(ve, n.stateNode));
        break;
      case 4:
        ((r = ve),
          (l = lt),
          (ve = n.stateNode.containerInfo),
          (lt = !0),
          Ut(e, t, n),
          (ve = r),
          (lt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ee &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              o = u.destroy;
            ((u = u.tag),
              o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && bu(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Ut(e, t, n);
        break;
      case 1:
        if (
          !Ee &&
          (Nn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (i) {
            ne(n, t, i);
          }
        Ut(e, t, n);
        break;
      case 21:
        Ut(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ee = (r = Ee) || n.memoizedState !== null), Ut(e, t, n), (Ee = r))
          : Ut(e, t, n);
        break;
      default:
        Ut(e, t, n);
    }
  }
  function ea(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new fc()),
        t.forEach(function (r) {
          var l = Sc.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var u = e,
            o = t,
            i = o;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                ((ve = i.stateNode), (lt = !1));
                break e;
              case 3:
                ((ve = i.stateNode.containerInfo), (lt = !0));
                break e;
              case 4:
                ((ve = i.stateNode.containerInfo), (lt = !0));
                break e;
            }
            i = i.return;
          }
          if (ve === null) throw Error(m(160));
          (bs(u, o, l), (ve = null), (lt = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ne(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ta(t, e), (t = t.sibling));
  }
  function ta(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), mt(e), r & 4)) {
          try {
            (cr(3, e, e.return), fl(3, e));
          } catch (x) {
            ne(e, e.return, x);
          }
          try {
            cr(5, e, e.return);
          } catch (x) {
            ne(e, e.return, x);
          }
        }
        break;
      case 1:
        (ut(t, e), mt(e), r & 512 && n !== null && Nn(n, n.return));
        break;
      case 5:
        if (
          (ut(t, e),
          mt(e),
          r & 512 && n !== null && Nn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (x) {
            ne(e, e.return, x);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            o = n !== null ? n.memoizedProps : u,
            i = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (i === "input" &&
                u.type === "radio" &&
                u.name != null &&
                To(l, u),
                Dl(i, o));
              var p = Dl(i, u);
              for (o = 0; o < s.length; o += 2) {
                var y = s[o],
                  g = s[o + 1];
                y === "style"
                  ? jo(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? Io(l, g)
                    : y === "children"
                      ? On(l, g)
                      : Je(l, y, g, p);
              }
              switch (i) {
                case "input":
                  zl(l, u);
                  break;
                case "textarea":
                  Oo(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null
                    ? un(l, !!u.multiple, k, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? un(l, !!u.multiple, u.defaultValue, !0)
                        : un(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[er] = u;
            } catch (x) {
              ne(e, e.return, x);
            }
        }
        break;
      case 6:
        if ((ut(t, e), mt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (x) {
            ne(e, e.return, x);
          }
        }
        break;
      case 3:
        if (
          (ut(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            $n(t.containerInfo);
          } catch (x) {
            ne(e, e.return, x);
          }
        break;
      case 4:
        (ut(t, e), mt(e));
        break;
      case 13:
        (ut(t, e),
          mt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (uo = re())),
          r & 4 && ea(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ee = (p = Ee) || y), ut(t, e), (Ee = p)) : ut(t, e),
          mt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (((v = E), (k = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    cr(4, v, v.return);
                    break;
                  case 1:
                    Nn(v, v.return);
                    var C = v.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (C.props = t.memoizedProps),
                          (C.state = t.memoizedState),
                          C.componentWillUnmount());
                      } catch (x) {
                        ne(r, n, x);
                      }
                    }
                    break;
                  case 5:
                    Nn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      la(g);
                      continue;
                    }
                }
                k !== null ? ((k.return = v), (E = k)) : la(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  ((l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((i = g.stateNode),
                        (s = g.memoizedProps.style),
                        (o =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (i.style.display = Fo("display", o))));
                } catch (x) {
                  ne(e, e.return, x);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (x) {
                  ne(e, e.return, x);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              ((g.child.return = g), (g = g.child));
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              (y === g && (y = null), (g = g.return));
            }
            (y === g && (y = null),
              (g.sibling.return = g.return),
              (g = g.sibling));
          }
        }
        break;
      case 19:
        (ut(t, e), mt(e), r & 4 && ea(e));
        break;
      case 21:
        break;
      default:
        (ut(t, e), mt(e));
    }
  }
  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Js(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), (r.flags &= -33));
            var u = qs(e);
            no(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              i = qs(e);
            to(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ne(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dc(e, t, n) {
    ((E = e), na(e));
  }
  function na(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || al;
        if (!o) {
          var i = l.alternate,
            s = (i !== null && i.memoizedState !== null) || Ee;
          i = al;
          var p = Ee;
          if (((al = o), (Ee = s) && !p))
            for (E = l; E !== null; )
              ((o = E),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? ua(l)
                  : s !== null
                    ? ((s.return = o), (E = s))
                    : ua(l));
          for (; u !== null; ) ((E = u), na(u), (u = u.sibling));
          ((E = l), (al = i), (Ee = p));
        }
        ra(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = l), (E = u))
          : ra(e);
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ee || fl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ee)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : rt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var u = t.updateQueue;
                u !== null && ls(t, u, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ls(t, o, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = i;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
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
                  var p = t.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && $n(g);
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
                throw Error(m(163));
            }
          Ee || (t.flags & 512 && eo(t));
        } catch (v) {
          ne(t, t.return, v);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function ua(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              fl(4, t);
            } catch (s) {
              ne(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ne(t, l, s);
              }
            }
            var u = t.return;
            try {
              eo(t);
            } catch (s) {
              ne(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              eo(t);
            } catch (s) {
              ne(t, o, s);
            }
        }
      } catch (s) {
        ne(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), (E = i));
        break;
      }
      E = t.return;
    }
  }
  var pc = Math.ceil,
    cl = ge.ReactCurrentDispatcher,
    ro = ge.ReactCurrentOwner,
    Ge = ge.ReactCurrentBatchConfig,
    I = 0,
    ce = null,
    oe = null,
    he = 0,
    Be = 0,
    zn = Dt(0),
    se = 0,
    dr = null,
    en = 0,
    dl = 0,
    lo = 0,
    pr = null,
    De = null,
    uo = 0,
    Tn = 1 / 0,
    Ct = null,
    pl = !1,
    oo = null,
    At = null,
    ml = !1,
    Vt = null,
    vl = 0,
    mr = 0,
    io = null,
    hl = -1,
    yl = 0;
  function Pe() {
    return (I & 6) !== 0 ? re() : hl !== -1 ? hl : (hl = re());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (I & 2) !== 0 && he !== 0
        ? he & -he
        : Zf.transition !== null
          ? (yl === 0 && (yl = qo()), yl)
          : ((e = V),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ii(e.type))),
            e);
  }
  function ot(e, t, n, r) {
    if (50 < mr) throw ((mr = 0), (io = null), Error(m(185)));
    (Un(e, n, r),
      ((I & 2) === 0 || e !== ce) &&
        (e === ce && ((I & 2) === 0 && (dl |= n), se === 4 && Ht(e, he)),
        Me(e, r),
        n === 1 &&
          I === 0 &&
          (t.mode & 1) === 0 &&
          ((Tn = re() + 500), Qr && It())));
  }
  function Me(e, t) {
    var n = e.callbackNode;
    Ga(e, t);
    var r = Pr(e, e === ce ? he : 0);
    if (r === 0)
      (n !== null && Go(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Go(n), t === 1))
        (e.tag === 0 ? Gf(ia.bind(null, e)) : Ki(ia.bind(null, e)),
          Qf(function () {
            (I & 6) === 0 && It();
          }),
          (n = null));
      else {
        switch (bo(r)) {
          case 1:
            n = Vl;
            break;
          case 4:
            n = Zo;
            break;
          case 16:
            n = Er;
            break;
          case 536870912:
            n = Jo;
            break;
          default:
            n = Er;
        }
        n = va(n, oa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function oa(e, t) {
    if (((hl = -1), (yl = 0), (I & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = Pr(e, e === ce ? he : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = gl(e, r);
    else {
      t = r;
      var l = I;
      I |= 2;
      var u = aa();
      (ce !== e || he !== t) && ((Ct = null), (Tn = re() + 500), nn(e, t));
      do
        try {
          hc();
          break;
        } catch (i) {
          sa(e, i);
        }
      while (!0);
      (xu(),
        (cl.current = u),
        (I = l),
        oe !== null ? (t = 0) : ((ce = null), (he = 0), (t = se)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Bl(e)), l !== 0 && ((r = l), (t = so(e, l)))),
        t === 1)
      )
        throw ((n = dr), nn(e, 0), Ht(e, r), Me(e, re()), n);
      if (t === 6) Ht(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !mc(l) &&
            ((t = gl(e, r)),
            t === 2 && ((u = Bl(e)), u !== 0 && ((r = u), (t = so(e, u)))),
            t === 1))
        )
          throw ((n = dr), nn(e, 0), Ht(e, r), Me(e, re()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            rn(e, De, Ct);
            break;
          case 3:
            if (
              (Ht(e, r),
              (r & 130023424) === r && ((t = uo + 500 - re()), 10 < t))
            ) {
              if (Pr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = mu(rn.bind(null, e, De, Ct), t);
              break;
            }
            rn(e, De, Ct);
            break;
          case 4:
            if ((Ht(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - et(r);
              ((u = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~u));
            }
            if (
              ((r = l),
              (r = re() - r),
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
                            : 1960 * pc(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = mu(rn.bind(null, e, De, Ct), r);
              break;
            }
            rn(e, De, Ct);
            break;
          case 5:
            rn(e, De, Ct);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Me(e, re()), e.callbackNode === n ? oa.bind(null, e) : null);
  }
  function so(e, t) {
    var n = pr;
    return (
      e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
      (e = gl(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && ao(t)),
      e
    );
  }
  function ao(e) {
    De === null ? (De = e) : De.push.apply(De, e);
  }
  function mc(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!tt(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Ht(e, t) {
    for (
      t &= ~lo,
        t &= ~dl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - et(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ia(e) {
    if ((I & 6) !== 0) throw Error(m(327));
    Ln();
    var t = Pr(e, 0);
    if ((t & 1) === 0) return (Me(e, re()), null);
    var n = gl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Bl(e);
      r !== 0 && ((t = r), (n = so(e, r)));
    }
    if (n === 1) throw ((n = dr), nn(e, 0), Ht(e, t), Me(e, re()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      rn(e, De, Ct),
      Me(e, re()),
      null
    );
  }
  function fo(e, t) {
    var n = I;
    I |= 1;
    try {
      return e(t);
    } finally {
      ((I = n), I === 0 && ((Tn = re() + 500), Qr && It()));
    }
  }
  function tn(e) {
    Vt !== null && Vt.tag === 0 && (I & 6) === 0 && Ln();
    var t = I;
    I |= 1;
    var n = Ge.transition,
      r = V;
    try {
      if (((Ge.transition = null), (V = 1), e)) return e();
    } finally {
      ((V = r), (Ge.transition = n), (I = t), (I & 6) === 0 && It());
    }
  }
  function co() {
    ((Be = zn.current), Y(zn));
  }
  function nn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Wf(n)), oe !== null))
      for (n = oe.return; n !== null; ) {
        var r = n;
        switch ((Su(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && $r());
            break;
          case 3:
            (xn(), Y(Le), Y(we), Du());
            break;
          case 5:
            Ru(r);
            break;
          case 4:
            xn();
            break;
          case 13:
            Y(b);
            break;
          case 19:
            Y(b);
            break;
          case 10:
            Pu(r.type._context);
            break;
          case 22:
          case 23:
            co();
        }
        n = n.return;
      }
    if (
      ((ce = e),
      (oe = e = $t(e.current, null)),
      (he = Be = t),
      (se = 0),
      (dr = null),
      (lo = dl = en = 0),
      (De = pr = null),
      Jt !== null)
    ) {
      for (t = 0; t < Jt.length; t++)
        if (((n = Jt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var o = u.next;
            ((u.next = l), (r.next = o));
          }
          n.pending = r;
        }
      Jt = null;
    }
    return e;
  }
  function sa(e, t) {
    do {
      var n = oe;
      try {
        if ((xu(), (tl.current = ul), nl)) {
          for (var r = ee.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          nl = !1;
        }
        if (
          ((bt = 0),
          (fe = ie = ee = null),
          (or = !1),
          (ir = 0),
          (ro.current = null),
          n === null || n.return === null)
        ) {
          ((se = 1), (dr = t), (oe = null));
          break;
        }
        e: {
          var u = e,
            o = n.return,
            i = n,
            s = t;
          if (
            ((t = he),
            (i.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = i,
              g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var v = y.alternate;
              v
                ? ((y.updateQueue = v.updateQueue),
                  (y.memoizedState = v.memoizedState),
                  (y.lanes = v.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var k = Ds(o);
            if (k !== null) {
              ((k.flags &= -257),
                Ms(k, o, i, u, t),
                k.mode & 1 && Os(u, p, t),
                (t = k),
                (s = p));
              var C = t.updateQueue;
              if (C === null) {
                var x = new Set();
                (x.add(s), (t.updateQueue = x));
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Os(u, p, t), po());
                break e;
              }
              s = Error(m(426));
            }
          } else if (J && i.mode & 1) {
            var le = Ds(o);
            if (le !== null) {
              ((le.flags & 65536) === 0 && (le.flags |= 256),
                Ms(le, o, i, u, t),
                _u(Pn(s, i)));
              break e;
            }
          }
          ((u = s = Pn(s, i)),
            se !== 4 && (se = 2),
            pr === null ? (pr = [u]) : pr.push(u),
            (u = o));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var c = Ls(u, s, t);
                rs(u, c);
                break e;
              case 1:
                i = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (At === null || !At.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var w = Rs(u, i, t);
                  rs(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ca(n);
      } catch (P) {
        ((t = P), oe === n && n !== null && (oe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function aa() {
    var e = cl.current;
    return ((cl.current = ul), e === null ? ul : e);
  }
  function po() {
    ((se === 0 || se === 3 || se === 2) && (se = 4),
      ce === null ||
        ((en & 268435455) === 0 && (dl & 268435455) === 0) ||
        Ht(ce, he));
  }
  function gl(e, t) {
    var n = I;
    I |= 2;
    var r = aa();
    (ce !== e || he !== t) && ((Ct = null), nn(e, t));
    do
      try {
        vc();
        break;
      } catch (l) {
        sa(e, l);
      }
    while (!0);
    if ((xu(), (I = n), (cl.current = r), oe !== null)) throw Error(m(261));
    return ((ce = null), (he = 0), se);
  }
  function vc() {
    for (; oe !== null; ) fa(oe);
  }
  function hc() {
    for (; oe !== null && !Va(); ) fa(oe);
  }
  function fa(e) {
    var t = ma(e.alternate, e, Be);
    ((e.memoizedProps = e.pendingProps),
      t === null ? ca(e) : (oe = t),
      (ro.current = null));
  }
  function ca(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = sc(n, t, Be)), n !== null)) {
          oe = n;
          return;
        }
      } else {
        if (((n = ac(n, t)), n !== null)) {
          ((n.flags &= 32767), (oe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((se = 6), (oe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        oe = t;
        return;
      }
      oe = t = e;
    } while (t !== null);
    se === 0 && (se = 5);
  }
  function rn(e, t, n) {
    var r = V,
      l = Ge.transition;
    try {
      ((Ge.transition = null), (V = 1), yc(e, t, n, r));
    } finally {
      ((Ge.transition = l), (V = r));
    }
    return null;
  }
  function yc(e, t, n, r) {
    do Ln();
    while (Vt !== null);
    if ((I & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (Za(e, u),
      e === ce && ((oe = ce = null), (he = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        ml ||
        ((ml = !0),
        va(Er, function () {
          return (Ln(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Ge.transition), (Ge.transition = null));
      var o = V;
      V = 1;
      var i = I;
      ((I |= 4),
        (ro.current = null),
        cc(e, n),
        ta(n, e),
        jf(du),
        (Tr = !!cu),
        (du = cu = null),
        (e.current = n),
        dc(n),
        Ba(),
        (I = i),
        (V = o),
        (Ge.transition = u));
    } else e.current = n;
    if (
      (ml && ((ml = !1), (Vt = e), (vl = l)),
      (u = e.pendingLanes),
      u === 0 && (At = null),
      Wa(n.stateNode),
      Me(e, re()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (pl) throw ((pl = !1), (e = oo), (oo = null), e);
    return (
      (vl & 1) !== 0 && e.tag !== 0 && Ln(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === io ? mr++ : ((mr = 0), (io = e))) : (mr = 0),
      It(),
      null
    );
  }
  function Ln() {
    if (Vt !== null) {
      var e = bo(vl),
        t = Ge.transition,
        n = V;
      try {
        if (((Ge.transition = null), (V = 16 > e ? 16 : e), Vt === null))
          var r = !1;
        else {
          if (((e = Vt), (Vt = null), (vl = 0), (I & 6) !== 0))
            throw Error(m(331));
          var l = I;
          for (I |= 4, E = e.current; E !== null; ) {
            var u = E,
              o = u.child;
            if ((E.flags & 16) !== 0) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) ((g.return = y), (E = g));
                    else
                      for (; E !== null; ) {
                        y = E;
                        var v = y.sibling,
                          k = y.return;
                        if ((Zs(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = k), (E = v));
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var x = C.child;
                  if (x !== null) {
                    C.child = null;
                    do {
                      var le = x.sibling;
                      ((x.sibling = null), (x = le));
                    } while (x !== null);
                  }
                }
                E = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && o !== null)
              ((o.return = u), (E = o));
            else
              e: for (; E !== null; ) {
                if (((u = E), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cr(9, u, u.return);
                  }
                var c = u.sibling;
                if (c !== null) {
                  ((c.return = u.return), (E = c));
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            o = E;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null)
              ((d.return = o), (E = d));
            else
              e: for (o = a; E !== null; ) {
                if (((i = E), (i.flags & 2048) !== 0))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fl(9, i);
                    }
                  } catch (P) {
                    ne(i, i.return, P);
                  }
                if (i === o) {
                  E = null;
                  break e;
                }
                var w = i.sibling;
                if (w !== null) {
                  ((w.return = i.return), (E = w));
                  break e;
                }
                E = i.return;
              }
          }
          if (
            ((I = l), It(), ft && typeof ft.onPostCommitFiberRoot == "function")
          )
            try {
              ft.onPostCommitFiberRoot(_r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((V = n), (Ge.transition = t));
      }
    }
    return !1;
  }
  function da(e, t, n) {
    ((t = Pn(n, t)),
      (t = Ls(e, t, 1)),
      (e = jt(e, t, 1)),
      (t = Pe()),
      e !== null && (Un(e, 1, t), Me(e, t)));
  }
  function ne(e, t, n) {
    if (e.tag === 3) da(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          da(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (At === null || !At.has(r)))
          ) {
            ((e = Pn(n, e)),
              (e = Rs(t, e, 1)),
              (t = jt(t, e, 1)),
              (e = Pe()),
              t !== null && (Un(t, 1, e), Me(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function gc(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ce === e &&
        (he & n) === n &&
        (se === 4 || (se === 3 && (he & 130023424) === he && 500 > re() - uo)
          ? nn(e, 0)
          : (lo |= n)),
      Me(e, t));
  }
  function pa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = xr), (xr <<= 1), (xr & 130023424) === 0 && (xr = 4194304)));
    var n = Pe();
    ((e = kt(e, t)), e !== null && (Un(e, t, n), Me(e, n)));
  }
  function wc(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), pa(e, n));
  }
  function Sc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    (r !== null && r.delete(t), pa(e, n));
  }
  var ma;
  ma = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Le.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Oe = !1), ic(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), J && (t.flags & 1048576) !== 0 && Yi(t, Yr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (sl(e, t), (e = t.pendingProps));
        var l = gn(t, we.current);
        (Cn(t, n), (l = Fu(null, t, r, e, l, n)));
        var u = ju();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((u = !0), Wr(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Tu(t),
              (l.updater = ol),
              (t.stateNode = l),
              (l._reactInternals = t),
              $u(t, r, e, n),
              (t = Yu(null, t, r, !0, u, n)))
            : ((t.tag = 0), J && u && wu(t), xe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (sl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Ec(r)),
            (e = rt(r, e)),
            l)
          ) {
            case 0:
              t = Ku(null, t, r, e, n);
              break e;
            case 1:
              t = Vs(null, t, r, e, n);
              break e;
            case 11:
              t = Is(null, t, r, e, n);
              break e;
            case 14:
              t = Fs(null, t, r, rt(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : rt(r, l)),
          Ku(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : rt(r, l)),
          Vs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Bs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            ns(e, t),
            br(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((l = Pn(Error(m(423)), t)), (t = Hs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Pn(Error(m(424)), t)), (t = Hs(e, t, r, n, l)));
              break e;
            } else
              for (
                Ve = Ot(t.stateNode.containerInfo.firstChild),
                  Ae = t,
                  J = !0,
                  nt = null,
                  n = es(t, null, r, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((kn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          us(t),
          e === null && Eu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (o = l.children),
          pu(r, l) ? (o = null) : u !== null && pu(r, u) && (t.flags |= 32),
          As(e, t),
          xe(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && Eu(t), null);
      case 13:
        return $s(e, t, n);
      case 4:
        return (
          Lu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : xe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : rt(r, l)),
          Is(e, t, r, l, n)
        );
      case 7:
        return (xe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (xe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (xe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (o = l.value),
            Q(Zr, r._currentValue),
            (r._currentValue = o),
            u !== null)
          )
            if (tt(u.value, o)) {
              if (u.children === l.children && !Le.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var i = u.dependencies;
                if (i !== null) {
                  o = u.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        ((s = Et(-1, n & -n)), (s.tag = 2));
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          (y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((u.lanes |= n),
                        (s = u.alternate),
                        s !== null && (s.lanes |= n),
                        Nu(u.return, n, t),
                        (i.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((o = u.return), o === null)) throw Error(m(341));
                  ((o.lanes |= n),
                    (i = o.alternate),
                    i !== null && (i.lanes |= n),
                    Nu(o, n, t),
                    (o = u.sibling));
                } else o = u.child;
                if (o !== null) o.return = u;
                else
                  for (o = u; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((u = o.sibling), u !== null)) {
                      ((u.return = o.return), (o = u));
                      break;
                    }
                    o = o.return;
                  }
                u = o;
              }
          (xe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Cn(t, n),
          (l = Ye(l)),
          (r = r(l)),
          (t.flags |= 1),
          xe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = rt(r, t.pendingProps)),
          (l = rt(r.type, l)),
          Fs(e, t, r, l, n)
        );
      case 15:
        return js(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : rt(r, l)),
          sl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Wr(t)) : (e = !1),
          Cn(t, n),
          zs(t, r, l),
          $u(t, r, l, n),
          Yu(null, t, r, !0, e, n)
        );
      case 19:
        return Qs(e, t, n);
      case 22:
        return Us(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function va(e, t) {
    return Xo(e, t);
  }
  function kc(e, t, n, r) {
    ((this.tag = e),
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
      (this.alternate = null));
  }
  function Ze(e, t, n, r) {
    return new kc(e, t, n, r);
  }
  function mo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ec(e) {
    if (typeof e == "function") return mo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === st)) return 11;
      if (e === at) return 14;
    }
    return 2;
  }
  function $t(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ze(e.tag, t, e.key, e.mode)),
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
  function wl(e, t, n, r, l, u) {
    var o = 2;
    if (((r = e), typeof e == "function")) mo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case ze:
          return ln(n.children, l, u, t);
        case We:
          ((o = 8), (l |= 8));
          break;
        case xt:
          return (
            (e = Ze(12, n, t, l | 2)),
            (e.elementType = xt),
            (e.lanes = u),
            e
          );
        case Fe:
          return (
            (e = Ze(13, n, t, l)),
            (e.elementType = Fe),
            (e.lanes = u),
            e
          );
        case be:
          return (
            (e = Ze(19, n, t, l)),
            (e.elementType = be),
            (e.lanes = u),
            e
          );
        case te:
          return Sl(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ht:
                o = 10;
                break e;
              case Qt:
                o = 9;
                break e;
              case st:
                o = 11;
                break e;
              case at:
                o = 14;
                break e;
              case Te:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ze(o, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = u),
      t
    );
  }
  function ln(e, t, n, r) {
    return ((e = Ze(7, e, r, t)), (e.lanes = n), e);
  }
  function Sl(e, t, n, r) {
    return (
      (e = Ze(22, e, r, t)),
      (e.elementType = te),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function vo(e, t, n) {
    return ((e = Ze(6, e, null, t)), (e.lanes = n), e);
  }
  function ho(e, t, n) {
    return (
      (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function _c(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Hl(0)),
      (this.expirationTimes = Hl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Hl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function yo(e, t, n, r, l, u, o, i, s) {
    return (
      (e = new _c(e, t, n, i, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = Ze(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Tu(u),
      e
    );
  }
  function Cc(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ha(e) {
    if (!e) return Mt;
    e = e._reactInternals;
    e: {
      if (Kt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Re(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return Wi(e, n, t);
    }
    return t;
  }
  function ya(e, t, n, r, l, u, o, i, s) {
    return (
      (e = yo(n, r, !0, e, l, u, o, i, s)),
      (e.context = ha(null)),
      (n = e.current),
      (r = Pe()),
      (l = Bt(n)),
      (u = Et(r, l)),
      (u.callback = t ?? null),
      jt(n, u, l),
      (e.current.lanes = l),
      Un(e, l, r),
      Me(e, r),
      e
    );
  }
  function kl(e, t, n, r) {
    var l = t.current,
      u = Pe(),
      o = Bt(l);
    return (
      (n = ha(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(u, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = jt(l, t, o)),
      e !== null && (ot(e, l, o, u), qr(e, l, o)),
      o
    );
  }
  function El(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ga(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function go(e, t) {
    (ga(e, t), (e = e.alternate) && ga(e, t));
  }
  function xc() {
    return null;
  }
  var wa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function wo(e) {
    this._internalRoot = e;
  }
  ((_l.prototype.render = wo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      kl(e, t, null, null);
    }),
    (_l.prototype.unmount = wo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (tn(function () {
            kl(null, e, null, null);
          }),
            (t[yt] = null));
        }
      }));
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ni();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && ui(e));
    }
  };
  function So(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Cl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Sa() {}
  function Pc(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = El(o);
          u.call(p);
        };
      }
      var o = ya(t, r, e, 0, null, !1, !1, "", Sa);
      return (
        (e._reactRootContainer = o),
        (e[yt] = o.current),
        qn(e.nodeType === 8 ? e.parentNode : e),
        tn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var p = El(s);
        i.call(p);
      };
    }
    var s = yo(e, 0, !1, null, null, !1, !1, "", Sa);
    return (
      (e._reactRootContainer = s),
      (e[yt] = s.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      tn(function () {
        kl(t, s, n, r);
      }),
      s
    );
  }
  function xl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function () {
          var s = El(o);
          i.call(s);
        };
      }
      kl(t, o, e, l);
    } else o = Pc(n, t, e, l, r);
    return El(o);
  }
  ((ei = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = jn(t.pendingLanes);
          n !== 0 &&
            ($l(t, n | 1),
            Me(t, re()),
            (I & 6) === 0 && ((Tn = re() + 500), It()));
        }
        break;
      case 13:
        (tn(function () {
          var r = kt(e, 1);
          if (r !== null) {
            var l = Pe();
            ot(r, e, 1, l);
          }
        }),
          go(e, 1));
    }
  }),
    (Wl = function (e) {
      if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
          var n = Pe();
          ot(t, e, 134217728, n);
        }
        go(e, 134217728);
      }
    }),
    (ti = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = kt(e, t);
        if (n !== null) {
          var r = Pe();
          ot(n, e, t, r);
        }
        go(e, t);
      }
    }),
    (ni = function () {
      return V;
    }),
    (ri = function (e, t) {
      var n = V;
      try {
        return ((V = e), t());
      } finally {
        V = n;
      }
    }),
    (Fl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Hr(r);
                if (!l) throw Error(m(90));
                (No(r), zl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Oo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && un(e, !!n.multiple, t, !1));
      }
    }),
    (Bo = fo),
    (Ho = tn));
  var Nc = { usingClientEntryPoint: !1, Events: [tr, hn, Hr, Ao, Vo, fo] },
    vr = {
      findFiberBySHOPIFY_APP_URLInstance: Yt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    zc = {
      bundleType: vr.bundleType,
      version: vr.version,
      rendererPackageName: vr.rendererPackageName,
      rendererConfig: vr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ge.ReactCurrentDispatcher,
      findSHOPIFY_APP_URLInstanceByFiber: function (e) {
        return ((e = Ko(e)), e === null ? null : e.stateNode);
      },
      findFiberBySHOPIFY_APP_URLInstance:
        vr.findFiberBySHOPIFY_APP_URLInstance || xc,
      findSHOPIFY_APP_URLInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        ((_r = Pl.inject(zc)), (ft = Pl));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc),
    (Ie.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!So(t)) throw Error(m(200));
      return Cc(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!So(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = wa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = yo(e, 1, !1, null, null, n, !1, r, l)),
        (e[yt] = t.current),
        qn(e.nodeType === 8 ? e.parentNode : e),
        new wo(t)
      );
    }),
    (Ie.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Ko(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return tn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Cl(t)) throw Error(m(200));
      return xl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!So(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        o = wa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = ya(t, null, e, 1, n ?? null, l, !1, u, o)),
        (e[yt] = t.current),
        qn(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new _l(t);
    }),
    (Ie.render = function (e, t, n) {
      if (!Cl(t)) throw Error(m(200));
      return xl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!Cl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (tn(function () {
            xl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[yt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = fo),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Cl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return xl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var za;
function jc() {
  if (za) return _o.exports;
  za = 1;
  function L() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch ($) {
        console.error($);
      }
  }
  return (L(), (_o.exports = Fc()), _o.exports);
}
var Oa = jc();
const Uc = La(Oa),
  Bc = Ta({ __proto__: null, default: Uc }, [Oa]);
export {
  Dc as R,
  jc as a,
  Vc as b,
  Bc as c,
  Oa as d,
  La as g,
  Ac as j,
  Ra as r,
};
