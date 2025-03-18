import Vm, { useState as TE, useEffect as RE, StrictMode as g_ } from "react";
import { Devices as Hp, utils as DR } from "@danidoble/webserial";
function S_(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var Am = { exports: {} }, jp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function E_() {
  if (iR) return jp;
  iR = 1;
  var L = Vm, ee = Symbol.for("react.element"), x = Symbol.for("react.fragment"), ve = Object.prototype.hasOwnProperty, Se = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(ge, G, q) {
    var se, H = {}, te = null, X = null;
    q !== void 0 && (te = "" + q), G.key !== void 0 && (te = "" + G.key), G.ref !== void 0 && (X = G.ref);
    for (se in G) ve.call(G, se) && !fe.hasOwnProperty(se) && (H[se] = G[se]);
    if (ge && ge.defaultProps) for (se in G = ge.defaultProps, G) H[se] === void 0 && (H[se] = G[se]);
    return { $$typeof: ee, type: ge, key: te, ref: X, props: H, _owner: Se.current };
  }
  return jp.Fragment = x, jp.jsx = y, jp.jsxs = y, jp;
}
var Fp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function C_() {
  return lR || (lR = 1, process.env.NODE_ENV !== "production" && function() {
    var L = Vm, ee = Symbol.for("react.element"), x = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), Se = Symbol.for("react.strict_mode"), fe = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), ge = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), Me = Symbol.iterator, Ne = "@@iterator";
    function qe(E) {
      if (E === null || typeof E != "object")
        return null;
      var B = Me && E[Me] || E[Ne];
      return typeof B == "function" ? B : null;
    }
    var gt = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ut(E) {
      {
        for (var B = arguments.length, ie = new Array(B > 1 ? B - 1 : 0), He = 1; He < B; He++)
          ie[He - 1] = arguments[He];
        xe("error", E, ie);
      }
    }
    function xe(E, B, ie) {
      {
        var He = gt.ReactDebugCurrentFrame, tt = He.getStackAddendum();
        tt !== "" && (B += "%s", ie = ie.concat([tt]));
        var Ke = ie.map(function(ot) {
          return String(ot);
        });
        Ke.unshift("Warning: " + B), Function.prototype.apply.call(console[E], console, Ke);
      }
    }
    var Ye = !1, P = !1, ht = !1, Ge = !1, ln = !1, _t;
    _t = Symbol.for("react.module.reference");
    function Qt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === ve || E === fe || ln || E === Se || E === q || E === se || Ge || E === X || Ye || P || ht || typeof E == "object" && E !== null && (E.$$typeof === te || E.$$typeof === H || E.$$typeof === y || E.$$typeof === ge || E.$$typeof === G || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === _t || E.getModuleId !== void 0));
    }
    function Ht(E, B, ie) {
      var He = E.displayName;
      if (He)
        return He;
      var tt = B.displayName || B.name || "";
      return tt !== "" ? ie + "(" + tt + ")" : ie;
    }
    function St(E) {
      return E.displayName || "Context";
    }
    function Ue(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && ut("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case ve:
          return "Fragment";
        case x:
          return "Portal";
        case fe:
          return "Profiler";
        case Se:
          return "StrictMode";
        case q:
          return "Suspense";
        case se:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case ge:
            var B = E;
            return St(B) + ".Consumer";
          case y:
            var ie = E;
            return St(ie._context) + ".Provider";
          case G:
            return Ht(E, E.render, "ForwardRef");
          case H:
            var He = E.displayName || null;
            return He !== null ? He : Ue(E.type) || "Memo";
          case te: {
            var tt = E, Ke = tt._payload, ot = tt._init;
            try {
              return Ue(ot(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xt = Object.assign, Bt = 0, vt, vn, K, Re, k, W, pe;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function Te() {
      {
        if (Bt === 0) {
          vt = console.log, vn = console.info, K = console.warn, Re = console.error, k = console.group, W = console.groupCollapsed, pe = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        Bt++;
      }
    }
    function et() {
      {
        if (Bt--, Bt === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xt({}, E, {
              value: vt
            }),
            info: xt({}, E, {
              value: vn
            }),
            warn: xt({}, E, {
              value: K
            }),
            error: xt({}, E, {
              value: Re
            }),
            group: xt({}, E, {
              value: k
            }),
            groupCollapsed: xt({}, E, {
              value: W
            }),
            groupEnd: xt({}, E, {
              value: pe
            })
          });
        }
        Bt < 0 && ut("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = gt.ReactCurrentDispatcher, ke;
    function Pe(E, B, ie) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (tt) {
            var He = tt.stack.trim().match(/\n( *(at )?)/);
            ke = He && He[1] || "";
          }
        return `
` + ke + E;
      }
    }
    var Xe = !1, Ie;
    {
      var mt = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new mt();
    }
    function Z(E, B) {
      if (!E || Xe)
        return "";
      {
        var ie = Ie.get(E);
        if (ie !== void 0)
          return ie;
      }
      var He;
      Xe = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = be.current, be.current = null, Te();
      try {
        if (B) {
          var ot = function() {
            throw Error();
          };
          if (Object.defineProperty(ot.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ot, []);
            } catch (nt) {
              He = nt;
            }
            Reflect.construct(E, [], ot);
          } else {
            try {
              ot.call();
            } catch (nt) {
              He = nt;
            }
            E.call(ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            He = nt;
          }
          E();
        }
      } catch (nt) {
        if (nt && He && typeof nt.stack == "string") {
          for (var lt = nt.stack.split(`
`), bn = He.stack.split(`
`), Gt = lt.length - 1, Zt = bn.length - 1; Gt >= 1 && Zt >= 0 && lt[Gt] !== bn[Zt]; )
            Zt--;
          for (; Gt >= 1 && Zt >= 0; Gt--, Zt--)
            if (lt[Gt] !== bn[Zt]) {
              if (Gt !== 1 || Zt !== 1)
                do
                  if (Gt--, Zt--, Zt < 0 || lt[Gt] !== bn[Zt]) {
                    var ar = `
` + lt[Gt].replace(" at new ", " at ");
                    return E.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", E.displayName)), typeof E == "function" && Ie.set(E, ar), ar;
                  }
                while (Gt >= 1 && Zt >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, be.current = Ke, et(), Error.prepareStackTrace = tt;
      }
      var ii = E ? E.displayName || E.name : "", li = ii ? Pe(ii) : "";
      return typeof E == "function" && Ie.set(E, li), li;
    }
    function jt(E, B, ie) {
      return Z(E, !1);
    }
    function hn(E) {
      var B = E.prototype;
      return !!(B && B.isReactComponent);
    }
    function mn(E, B, ie) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Z(E, hn(E));
      if (typeof E == "string")
        return Pe(E);
      switch (E) {
        case q:
          return Pe("Suspense");
        case se:
          return Pe("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case G:
            return jt(E.render);
          case H:
            return mn(E.type, B, ie);
          case te: {
            var He = E, tt = He._payload, Ke = He._init;
            try {
              return mn(Ke(tt), B, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, ei = {}, zi = gt.ReactDebugCurrentFrame;
    function Ma(E) {
      if (E) {
        var B = E._owner, ie = mn(E.type, E._source, B ? B.type : null);
        zi.setExtraStackFrame(ie);
      } else
        zi.setExtraStackFrame(null);
    }
    function ti(E, B, ie, He, tt) {
      {
        var Ke = Function.call.bind(Gn);
        for (var ot in E)
          if (Ke(E, ot)) {
            var lt = void 0;
            try {
              if (typeof E[ot] != "function") {
                var bn = Error((He || "React class") + ": " + ie + " type `" + ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bn.name = "Invariant Violation", bn;
              }
              lt = E[ot](B, ot, He, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Gt) {
              lt = Gt;
            }
            lt && !(lt instanceof Error) && (Ma(tt), ut("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", He || "React class", ie, ot, typeof lt), Ma(null)), lt instanceof Error && !(lt.message in ei) && (ei[lt.message] = !0, Ma(tt), ut("Failed %s type: %s", ie, lt.message), Ma(null));
          }
      }
    }
    var rr = Array.isArray;
    function Xn(E) {
      return rr(E);
    }
    function jr(E) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ie = B && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ie;
      }
    }
    function Ui(E) {
      try {
        return Kn(E), !1;
      } catch {
        return !0;
      }
    }
    function Kn(E) {
      return "" + E;
    }
    function Fr(E) {
      if (Ui(E))
        return ut("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(E)), Kn(E);
    }
    var La = gt.ReactCurrentOwner, ni = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ai, J;
    function Oe(E) {
      if (Gn.call(E, "ref")) {
        var B = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function it(E) {
      if (Gn.call(E, "key")) {
        var B = Object.getOwnPropertyDescriptor(E, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function kt(E, B) {
      typeof E.ref == "string" && La.current;
    }
    function Wt(E, B) {
      {
        var ie = function() {
          Ai || (Ai = !0, ut("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ie.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function Zn(E, B) {
      {
        var ie = function() {
          J || (J = !0, ut("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ie.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var nn = function(E, B, ie, He, tt, Ke, ot) {
      var lt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: ee,
        // Built-in properties that belong on the element
        type: E,
        key: B,
        ref: ie,
        props: ot,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return lt._store = {}, Object.defineProperty(lt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.defineProperty(lt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
    };
    function Jn(E, B, ie, He, tt) {
      {
        var Ke, ot = {}, lt = null, bn = null;
        ie !== void 0 && (Fr(ie), lt = "" + ie), it(B) && (Fr(B.key), lt = "" + B.key), Oe(B) && (bn = B.ref, kt(B, tt));
        for (Ke in B)
          Gn.call(B, Ke) && !ni.hasOwnProperty(Ke) && (ot[Ke] = B[Ke]);
        if (E && E.defaultProps) {
          var Gt = E.defaultProps;
          for (Ke in Gt)
            ot[Ke] === void 0 && (ot[Ke] = Gt[Ke]);
        }
        if (lt || bn) {
          var Zt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          lt && Wt(ot, Zt), bn && Zn(ot, Zt);
        }
        return nn(E, lt, bn, tt, He, La.current, ot);
      }
    }
    var qt = gt.ReactCurrentOwner, $t = gt.ReactDebugCurrentFrame;
    function Pt(E) {
      if (E) {
        var B = E._owner, ie = mn(E.type, E._source, B ? B.type : null);
        $t.setExtraStackFrame(ie);
      } else
        $t.setExtraStackFrame(null);
    }
    var Na;
    Na = !1;
    function Kr(E) {
      return typeof E == "object" && E !== null && E.$$typeof === ee;
    }
    function Sl() {
      {
        if (qt.current) {
          var E = Ue(qt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function xs(E) {
      return "";
    }
    var ro = {};
    function ao(E) {
      {
        var B = Sl();
        if (!B) {
          var ie = typeof E == "string" ? E : E.displayName || E.name;
          ie && (B = `

Check the top-level render call using <` + ie + ">.");
        }
        return B;
      }
    }
    function fu(E, B) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ie = ao(B);
        if (ro[ie])
          return;
        ro[ie] = !0;
        var He = "";
        E && E._owner && E._owner !== qt.current && (He = " It was passed a child from " + Ue(E._owner.type) + "."), Pt(E), ut('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, He), Pt(null);
      }
    }
    function du(E, B) {
      {
        if (typeof E != "object")
          return;
        if (Xn(E))
          for (var ie = 0; ie < E.length; ie++) {
            var He = E[ie];
            Kr(He) && fu(He, B);
          }
        else if (Kr(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var tt = qe(E);
          if (typeof tt == "function" && tt !== E.entries)
            for (var Ke = tt.call(E), ot; !(ot = Ke.next()).done; )
              Kr(ot.value) && fu(ot.value, B);
        }
      }
    }
    function io(E) {
      {
        var B = E.type;
        if (B == null || typeof B == "string")
          return;
        var ie;
        if (typeof B == "function")
          ie = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === G || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === H))
          ie = B.propTypes;
        else
          return;
        if (ie) {
          var He = Ue(B);
          ti(ie, E.props, "prop", He, E);
        } else if (B.PropTypes !== void 0 && !Na) {
          Na = !0;
          var tt = Ue(B);
          ut("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && ut("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ri(E) {
      {
        for (var B = Object.keys(E.props), ie = 0; ie < B.length; ie++) {
          var He = B[ie];
          if (He !== "children" && He !== "key") {
            Pt(E), ut("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", He), Pt(null);
            break;
          }
        }
        E.ref !== null && (Pt(E), ut("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var ga = {};
    function Sr(E, B, ie, He, tt, Ke) {
      {
        var ot = Qt(E);
        if (!ot) {
          var lt = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (lt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bn = xs();
          bn ? lt += bn : lt += Sl();
          var Gt;
          E === null ? Gt = "null" : Xn(E) ? Gt = "array" : E !== void 0 && E.$$typeof === ee ? (Gt = "<" + (Ue(E.type) || "Unknown") + " />", lt = " Did you accidentally export a JSX literal instead of a component?") : Gt = typeof E, ut("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Gt, lt);
        }
        var Zt = Jn(E, B, ie, tt, Ke);
        if (Zt == null)
          return Zt;
        if (ot) {
          var ar = B.children;
          if (ar !== void 0)
            if (He)
              if (Xn(ar)) {
                for (var ii = 0; ii < ar.length; ii++)
                  du(ar[ii], E);
                Object.freeze && Object.freeze(ar);
              } else
                ut("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              du(ar, E);
        }
        if (Gn.call(B, "key")) {
          var li = Ue(E), nt = Object.keys(B).filter(function(lo) {
            return lo !== "key";
          }), rt = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ga[li + rt]) {
            var ui = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            ut(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, li, ui, li), ga[li + rt] = !0;
          }
        }
        return E === ve ? ri(Zt) : io(Zt), Zt;
      }
    }
    function ji(E, B, ie) {
      return Sr(E, B, ie, !0);
    }
    function ai(E, B, ie) {
      return Sr(E, B, ie, !1);
    }
    var Fi = ai, Hi = ji;
    Fp.Fragment = ve, Fp.jsx = Fi, Fp.jsxs = Hi;
  }()), Fp;
}
var uR;
function T_() {
  return uR || (uR = 1, process.env.NODE_ENV === "production" ? Am.exports = E_() : Am.exports = C_()), Am.exports;
}
var je = T_(), Ef = {}, jm = { exports: {} }, ma = {}, Fm = { exports: {} }, vE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function R_() {
  return oR || (oR = 1, function(L) {
    function ee(K, Re) {
      var k = K.length;
      K.push(Re);
      e: for (; 0 < k; ) {
        var W = k - 1 >>> 1, pe = K[W];
        if (0 < Se(pe, Re)) K[W] = Re, K[k] = pe, k = W;
        else break e;
      }
    }
    function x(K) {
      return K.length === 0 ? null : K[0];
    }
    function ve(K) {
      if (K.length === 0) return null;
      var Re = K[0], k = K.pop();
      if (k !== Re) {
        K[0] = k;
        e: for (var W = 0, pe = K.length, Fe = pe >>> 1; W < Fe; ) {
          var Te = 2 * (W + 1) - 1, et = K[Te], be = Te + 1, ke = K[be];
          if (0 > Se(et, k)) be < pe && 0 > Se(ke, et) ? (K[W] = ke, K[be] = k, W = be) : (K[W] = et, K[Te] = k, W = Te);
          else if (be < pe && 0 > Se(ke, k)) K[W] = ke, K[be] = k, W = be;
          else break e;
        }
      }
      return Re;
    }
    function Se(K, Re) {
      var k = K.sortIndex - Re.sortIndex;
      return k !== 0 ? k : K.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var fe = performance;
      L.unstable_now = function() {
        return fe.now();
      };
    } else {
      var y = Date, ge = y.now();
      L.unstable_now = function() {
        return y.now() - ge;
      };
    }
    var G = [], q = [], se = 1, H = null, te = 3, X = !1, Me = !1, Ne = !1, qe = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, ut = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function xe(K) {
      for (var Re = x(q); Re !== null; ) {
        if (Re.callback === null) ve(q);
        else if (Re.startTime <= K) ve(q), Re.sortIndex = Re.expirationTime, ee(G, Re);
        else break;
        Re = x(q);
      }
    }
    function Ye(K) {
      if (Ne = !1, xe(K), !Me) if (x(G) !== null) Me = !0, vt(P);
      else {
        var Re = x(q);
        Re !== null && vn(Ye, Re.startTime - K);
      }
    }
    function P(K, Re) {
      Me = !1, Ne && (Ne = !1, gt(ln), ln = -1), X = !0;
      var k = te;
      try {
        for (xe(Re), H = x(G); H !== null && (!(H.expirationTime > Re) || K && !Ht()); ) {
          var W = H.callback;
          if (typeof W == "function") {
            H.callback = null, te = H.priorityLevel;
            var pe = W(H.expirationTime <= Re);
            Re = L.unstable_now(), typeof pe == "function" ? H.callback = pe : H === x(G) && ve(G), xe(Re);
          } else ve(G);
          H = x(G);
        }
        if (H !== null) var Fe = !0;
        else {
          var Te = x(q);
          Te !== null && vn(Ye, Te.startTime - Re), Fe = !1;
        }
        return Fe;
      } finally {
        H = null, te = k, X = !1;
      }
    }
    var ht = !1, Ge = null, ln = -1, _t = 5, Qt = -1;
    function Ht() {
      return !(L.unstable_now() - Qt < _t);
    }
    function St() {
      if (Ge !== null) {
        var K = L.unstable_now();
        Qt = K;
        var Re = !0;
        try {
          Re = Ge(!0, K);
        } finally {
          Re ? Ue() : (ht = !1, Ge = null);
        }
      } else ht = !1;
    }
    var Ue;
    if (typeof ut == "function") Ue = function() {
      ut(St);
    };
    else if (typeof MessageChannel < "u") {
      var xt = new MessageChannel(), Bt = xt.port2;
      xt.port1.onmessage = St, Ue = function() {
        Bt.postMessage(null);
      };
    } else Ue = function() {
      qe(St, 0);
    };
    function vt(K) {
      Ge = K, ht || (ht = !0, Ue());
    }
    function vn(K, Re) {
      ln = qe(function() {
        K(L.unstable_now());
      }, Re);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, L.unstable_continueExecution = function() {
      Me || X || (Me = !0, vt(P));
    }, L.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _t = 0 < K ? Math.floor(1e3 / K) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, L.unstable_getFirstCallbackNode = function() {
      return x(G);
    }, L.unstable_next = function(K) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = te;
      }
      var k = te;
      te = Re;
      try {
        return K();
      } finally {
        te = k;
      }
    }, L.unstable_pauseExecution = function() {
    }, L.unstable_requestPaint = function() {
    }, L.unstable_runWithPriority = function(K, Re) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var k = te;
      te = K;
      try {
        return Re();
      } finally {
        te = k;
      }
    }, L.unstable_scheduleCallback = function(K, Re, k) {
      var W = L.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? W + k : W) : k = W, K) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = k + pe, K = { id: se++, callback: Re, priorityLevel: K, startTime: k, expirationTime: pe, sortIndex: -1 }, k > W ? (K.sortIndex = k, ee(q, K), x(G) === null && K === x(q) && (Ne ? (gt(ln), ln = -1) : Ne = !0, vn(Ye, k - W))) : (K.sortIndex = pe, ee(G, K), Me || X || (Me = !0, vt(P))), K;
    }, L.unstable_shouldYield = Ht, L.unstable_wrapCallback = function(K) {
      var Re = te;
      return function() {
        var k = te;
        te = Re;
        try {
          return K.apply(this, arguments);
        } finally {
          te = k;
        }
      };
    };
  }(vE)), vE;
}
var hE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function w_() {
  return sR || (sR = 1, function(L) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ee = !1, x = 5;
      function ve(J, Oe) {
        var it = J.length;
        J.push(Oe), y(J, Oe, it);
      }
      function Se(J) {
        return J.length === 0 ? null : J[0];
      }
      function fe(J) {
        if (J.length === 0)
          return null;
        var Oe = J[0], it = J.pop();
        return it !== Oe && (J[0] = it, ge(J, it, 0)), Oe;
      }
      function y(J, Oe, it) {
        for (var kt = it; kt > 0; ) {
          var Wt = kt - 1 >>> 1, Zn = J[Wt];
          if (G(Zn, Oe) > 0)
            J[Wt] = Oe, J[kt] = Zn, kt = Wt;
          else
            return;
        }
      }
      function ge(J, Oe, it) {
        for (var kt = it, Wt = J.length, Zn = Wt >>> 1; kt < Zn; ) {
          var nn = (kt + 1) * 2 - 1, Jn = J[nn], qt = nn + 1, $t = J[qt];
          if (G(Jn, Oe) < 0)
            qt < Wt && G($t, Jn) < 0 ? (J[kt] = $t, J[qt] = Oe, kt = qt) : (J[kt] = Jn, J[nn] = Oe, kt = nn);
          else if (qt < Wt && G($t, Oe) < 0)
            J[kt] = $t, J[qt] = Oe, kt = qt;
          else
            return;
        }
      }
      function G(J, Oe) {
        var it = J.sortIndex - Oe.sortIndex;
        return it !== 0 ? it : J.id - Oe.id;
      }
      var q = 1, se = 2, H = 3, te = 4, X = 5;
      function Me(J, Oe) {
      }
      var Ne = typeof performance == "object" && typeof performance.now == "function";
      if (Ne) {
        var qe = performance;
        L.unstable_now = function() {
          return qe.now();
        };
      } else {
        var gt = Date, ut = gt.now();
        L.unstable_now = function() {
          return gt.now() - ut;
        };
      }
      var xe = 1073741823, Ye = -1, P = 250, ht = 5e3, Ge = 1e4, ln = xe, _t = [], Qt = [], Ht = 1, St = null, Ue = H, xt = !1, Bt = !1, vt = !1, vn = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function k(J) {
        for (var Oe = Se(Qt); Oe !== null; ) {
          if (Oe.callback === null)
            fe(Qt);
          else if (Oe.startTime <= J)
            fe(Qt), Oe.sortIndex = Oe.expirationTime, ve(_t, Oe);
          else
            return;
          Oe = Se(Qt);
        }
      }
      function W(J) {
        if (vt = !1, k(J), !Bt)
          if (Se(_t) !== null)
            Bt = !0, Kn(pe);
          else {
            var Oe = Se(Qt);
            Oe !== null && Fr(W, Oe.startTime - J);
          }
      }
      function pe(J, Oe) {
        Bt = !1, vt && (vt = !1, La()), xt = !0;
        var it = Ue;
        try {
          var kt;
          if (!ee) return Fe(J, Oe);
        } finally {
          St = null, Ue = it, xt = !1;
        }
      }
      function Fe(J, Oe) {
        var it = Oe;
        for (k(it), St = Se(_t); St !== null && !(St.expirationTime > it && (!J || zi())); ) {
          var kt = St.callback;
          if (typeof kt == "function") {
            St.callback = null, Ue = St.priorityLevel;
            var Wt = St.expirationTime <= it, Zn = kt(Wt);
            it = L.unstable_now(), typeof Zn == "function" ? St.callback = Zn : St === Se(_t) && fe(_t), k(it);
          } else
            fe(_t);
          St = Se(_t);
        }
        if (St !== null)
          return !0;
        var nn = Se(Qt);
        return nn !== null && Fr(W, nn.startTime - it), !1;
      }
      function Te(J, Oe) {
        switch (J) {
          case q:
          case se:
          case H:
          case te:
          case X:
            break;
          default:
            J = H;
        }
        var it = Ue;
        Ue = J;
        try {
          return Oe();
        } finally {
          Ue = it;
        }
      }
      function et(J) {
        var Oe;
        switch (Ue) {
          case q:
          case se:
          case H:
            Oe = H;
            break;
          default:
            Oe = Ue;
            break;
        }
        var it = Ue;
        Ue = Oe;
        try {
          return J();
        } finally {
          Ue = it;
        }
      }
      function be(J) {
        var Oe = Ue;
        return function() {
          var it = Ue;
          Ue = Oe;
          try {
            return J.apply(this, arguments);
          } finally {
            Ue = it;
          }
        };
      }
      function ke(J, Oe, it) {
        var kt = L.unstable_now(), Wt;
        if (typeof it == "object" && it !== null) {
          var Zn = it.delay;
          typeof Zn == "number" && Zn > 0 ? Wt = kt + Zn : Wt = kt;
        } else
          Wt = kt;
        var nn;
        switch (J) {
          case q:
            nn = Ye;
            break;
          case se:
            nn = P;
            break;
          case X:
            nn = ln;
            break;
          case te:
            nn = Ge;
            break;
          case H:
          default:
            nn = ht;
            break;
        }
        var Jn = Wt + nn, qt = {
          id: Ht++,
          callback: Oe,
          priorityLevel: J,
          startTime: Wt,
          expirationTime: Jn,
          sortIndex: -1
        };
        return Wt > kt ? (qt.sortIndex = Wt, ve(Qt, qt), Se(_t) === null && qt === Se(Qt) && (vt ? La() : vt = !0, Fr(W, Wt - kt))) : (qt.sortIndex = Jn, ve(_t, qt), !Bt && !xt && (Bt = !0, Kn(pe))), qt;
      }
      function Pe() {
      }
      function Xe() {
        !Bt && !xt && (Bt = !0, Kn(pe));
      }
      function Ie() {
        return Se(_t);
      }
      function mt(J) {
        J.callback = null;
      }
      function Z() {
        return Ue;
      }
      var jt = !1, hn = null, mn = -1, Gn = x, ei = -1;
      function zi() {
        var J = L.unstable_now() - ei;
        return !(J < Gn);
      }
      function Ma() {
      }
      function ti(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Gn = Math.floor(1e3 / J) : Gn = x;
      }
      var rr = function() {
        if (hn !== null) {
          var J = L.unstable_now();
          ei = J;
          var Oe = !0, it = !0;
          try {
            it = hn(Oe, J);
          } finally {
            it ? Xn() : (jt = !1, hn = null);
          }
        } else
          jt = !1;
      }, Xn;
      if (typeof Re == "function")
        Xn = function() {
          Re(rr);
        };
      else if (typeof MessageChannel < "u") {
        var jr = new MessageChannel(), Ui = jr.port2;
        jr.port1.onmessage = rr, Xn = function() {
          Ui.postMessage(null);
        };
      } else
        Xn = function() {
          vn(rr, 0);
        };
      function Kn(J) {
        hn = J, jt || (jt = !0, Xn());
      }
      function Fr(J, Oe) {
        mn = vn(function() {
          J(L.unstable_now());
        }, Oe);
      }
      function La() {
        K(mn), mn = -1;
      }
      var ni = Ma, Ai = null;
      L.unstable_IdlePriority = X, L.unstable_ImmediatePriority = q, L.unstable_LowPriority = te, L.unstable_NormalPriority = H, L.unstable_Profiling = Ai, L.unstable_UserBlockingPriority = se, L.unstable_cancelCallback = mt, L.unstable_continueExecution = Xe, L.unstable_forceFrameRate = ti, L.unstable_getCurrentPriorityLevel = Z, L.unstable_getFirstCallbackNode = Ie, L.unstable_next = et, L.unstable_pauseExecution = Pe, L.unstable_requestPaint = ni, L.unstable_runWithPriority = Te, L.unstable_scheduleCallback = ke, L.unstable_shouldYield = zi, L.unstable_wrapCallback = be, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(hE)), hE;
}
var cR;
function _R() {
  return cR || (cR = 1, process.env.NODE_ENV === "production" ? Fm.exports = R_() : Fm.exports = w_()), Fm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function x_() {
  if (fR) return ma;
  fR = 1;
  var L = Vm, ee = _R();
  function x(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ve = /* @__PURE__ */ new Set(), Se = {};
  function fe(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (Se[n] = r, n = 0; n < r.length; n++) ve.add(r[n]);
  }
  var ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), G = Object.prototype.hasOwnProperty, q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, se = {}, H = {};
  function te(n) {
    return G.call(H, n) ? !0 : G.call(se, n) ? !1 : q.test(n) ? H[n] = !0 : (se[n] = !0, !1);
  }
  function X(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Me(n, r, l, o) {
    if (r === null || typeof r > "u" || X(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Ne(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var qe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    qe[n] = new Ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    qe[r] = new Ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    qe[n] = new Ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    qe[n] = new Ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    qe[n] = new Ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    qe[n] = new Ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    qe[n] = new Ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    qe[n] = new Ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    qe[n] = new Ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var gt = /[\-:]([a-z])/g;
  function ut(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      gt,
      ut
    );
    qe[r] = new Ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(gt, ut);
    qe[r] = new Ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(gt, ut);
    qe[r] = new Ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    qe[n] = new Ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), qe.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    qe[n] = new Ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function xe(n, r, l, o) {
    var c = qe.hasOwnProperty(r) ? qe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Me(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ye = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), ht = Symbol.for("react.portal"), Ge = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), _t = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), Ht = Symbol.for("react.context"), St = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), xt = Symbol.for("react.suspense_list"), Bt = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), vn = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, W;
  function pe(n) {
    if (W === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      W = r && r[1] || "";
    }
    return `
` + W + n;
  }
  var Fe = !1;
  function Te(n, r) {
    if (!n || Fe) return "";
    Fe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (N) {
          var o = N;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (N) {
          o = N;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (N) {
          o = N;
        }
        n();
      }
    } catch (N) {
      if (N && o && typeof N.stack == "string") {
        for (var c = N.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; ) S--;
        for (; 1 <= h && 0 <= S; h--, S--) if (c[h] !== d[S]) {
          if (h !== 1 || S !== 1)
            do
              if (h--, S--, 0 > S || c[h] !== d[S]) {
                var C = `
` + c[h].replace(" at new ", " at ");
                return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
              }
            while (1 <= h && 0 <= S);
          break;
        }
      }
    } finally {
      Fe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? pe(n) : "";
  }
  function et(n) {
    switch (n.tag) {
      case 5:
        return pe(n.type);
      case 16:
        return pe("Lazy");
      case 13:
        return pe("Suspense");
      case 19:
        return pe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Te(n.type, !1), n;
      case 11:
        return n = Te(n.type.render, !1), n;
      case 1:
        return n = Te(n.type, !0), n;
      default:
        return "";
    }
  }
  function be(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ge:
        return "Fragment";
      case ht:
        return "Portal";
      case _t:
        return "Profiler";
      case ln:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case xt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ht:
        return (n.displayName || "Context") + ".Consumer";
      case Qt:
        return (n._context.displayName || "Context") + ".Provider";
      case St:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Bt:
        return r = n.displayName || null, r !== null ? r : be(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return be(n(r));
        } catch {
        }
    }
    return null;
  }
  function ke(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return be(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Pe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Xe(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ie(n) {
    var r = Xe(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function mt(n) {
    n._valueTracker || (n._valueTracker = Ie(n));
  }
  function Z(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Xe(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function jt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function hn(n, r) {
    var l = r.checked;
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function mn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Pe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && xe(n, "checked", r, !1);
  }
  function ei(n, r) {
    Gn(n, r);
    var l = Pe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ma(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ma(n, r.type, Pe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function zi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ma(n, r, l) {
    (r !== "number" || jt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ti = Array.isArray;
  function rr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Pe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Xn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(x(91));
    return k({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function jr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(x(92));
        if (ti(l)) {
          if (1 < l.length) throw Error(x(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Pe(l) };
  }
  function Ui(n, r) {
    var l = Pe(r.value), o = Pe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Kn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Fr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function La(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Fr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ni, Ai = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ni = ni || document.createElement("div"), ni.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ni.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function J(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Oe = {
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
    strokeWidth: !0
  }, it = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Oe).forEach(function(n) {
    it.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Oe[r] = Oe[n];
    });
  });
  function kt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Oe.hasOwnProperty(n) && Oe[n] ? ("" + r).trim() : r + "px";
  }
  function Wt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = kt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Zn = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function nn(n, r) {
    if (r) {
      if (Zn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(x(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(x(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(x(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(x(62));
    }
  }
  function Jn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var qt = null;
  function $t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Pt = null, Na = null, Kr = null;
  function Sl(n) {
    if (n = De(n)) {
      if (typeof Pt != "function") throw Error(x(280));
      var r = n.stateNode;
      r && (r = un(r), Pt(n.stateNode, n.type, r));
    }
  }
  function xs(n) {
    Na ? Kr ? Kr.push(n) : Kr = [n] : Na = n;
  }
  function ro() {
    if (Na) {
      var n = Na, r = Kr;
      if (Kr = Na = null, Sl(n), r) for (n = 0; n < r.length; n++) Sl(r[n]);
    }
  }
  function ao(n, r) {
    return n(r);
  }
  function fu() {
  }
  var du = !1;
  function io(n, r, l) {
    if (du) return n(r, l);
    du = !0;
    try {
      return ao(n, r, l);
    } finally {
      du = !1, (Na !== null || Kr !== null) && (fu(), ro());
    }
  }
  function ri(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = un(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(x(231, r, typeof l));
    return l;
  }
  var ga = !1;
  if (ge) try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", { get: function() {
      ga = !0;
    } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
  } catch {
    ga = !1;
  }
  function ji(n, r, l, o, c, d, h, S, C) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, N);
    } catch ($) {
      this.onError($);
    }
  }
  var ai = !1, Fi = null, Hi = !1, E = null, B = { onError: function(n) {
    ai = !0, Fi = n;
  } };
  function ie(n, r, l, o, c, d, h, S, C) {
    ai = !1, Fi = null, ji.apply(B, arguments);
  }
  function He(n, r, l, o, c, d, h, S, C) {
    if (ie.apply(this, arguments), ai) {
      if (ai) {
        var N = Fi;
        ai = !1, Fi = null;
      } else throw Error(x(198));
      Hi || (Hi = !0, E = N);
    }
  }
  function tt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ke(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ot(n) {
    if (tt(n) !== n) throw Error(x(188));
  }
  function lt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = tt(n), r === null) throw Error(x(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ot(c), n;
          if (d === o) return ot(c), r;
          d = d.sibling;
        }
        throw Error(x(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h) throw Error(x(189));
        }
      }
      if (l.alternate !== o) throw Error(x(190));
    }
    if (l.tag !== 3) throw Error(x(188));
    return l.stateNode.current === l ? n : r;
  }
  function bn(n) {
    return n = lt(n), n !== null ? Gt(n) : null;
  }
  function Gt(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Gt(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Zt = ee.unstable_scheduleCallback, ar = ee.unstable_cancelCallback, ii = ee.unstable_shouldYield, li = ee.unstable_requestPaint, nt = ee.unstable_now, rt = ee.unstable_getCurrentPriorityLevel, ui = ee.unstable_ImmediatePriority, lo = ee.unstable_UserBlockingPriority, uo = ee.unstable_NormalPriority, Pp = ee.unstable_LowPriority, Cf = ee.unstable_IdlePriority, oo = null, Sa = null;
  function Vp(n) {
    if (Sa && typeof Sa.onCommitFiberRoot == "function") try {
      Sa.onCommitFiberRoot(oo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Zr = Math.clz32 ? Math.clz32 : Tf, Bm = Math.log, $m = Math.LN2;
  function Tf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Bm(n) / $m | 0) | 0;
  }
  var pu = 64, Ea = 4194304;
  function El(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Cl(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = El(S) : (d &= h, d !== 0 && (o = El(d)));
    } else h = l & ~c, h !== 0 ? o = El(h) : d !== 0 && (o = El(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Zr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ym(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Rf(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Zr(d), S = 1 << h, C = c[h];
      C === -1 ? ((S & l) === 0 || (S & o) !== 0) && (c[h] = Ym(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function wf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function bs() {
    var n = pu;
    return pu <<= 1, (pu & 4194240) === 0 && (pu = 64), n;
  }
  function xf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Tl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Zr(r), n[r] = l;
  }
  function Im(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Zr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ds(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Zr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function bf(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Mt, Df, _f, Ze, kf, ir = !1, Pi = [], Jr = null, Vi = null, rn = null, Yt = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), Un = [], ea = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function oi(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Jr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vi = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Yt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        so.delete(r.pointerId);
    }
  }
  function co(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = De(r), r !== null && Df(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Of(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Jr = co(Jr, n, r, l, o, c), !0;
      case "dragenter":
        return Vi = co(Vi, n, r, l, o, c), !0;
      case "mouseover":
        return rn = co(rn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Yt.set(d, co(Yt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, so.set(d, co(so.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Mf(n) {
    var r = Ll(n.target);
    if (r !== null) {
      var l = tt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ke(l), r !== null) {
            n.blockedOn = r, kf(n.priority, function() {
              _f(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function fo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ks(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        qt = o, l.target.dispatchEvent(o), qt = null;
      } else return r = De(l), r !== null && Df(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Bp(n, r, l) {
    fo(n) && l.delete(r);
  }
  function Qm() {
    ir = !1, Jr !== null && fo(Jr) && (Jr = null), Vi !== null && fo(Vi) && (Vi = null), rn !== null && fo(rn) && (rn = null), Yt.forEach(Bp), so.forEach(Bp);
  }
  function po(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, ee.unstable_scheduleCallback(ee.unstable_NormalPriority, Qm)));
  }
  function Bi(n) {
    function r(c) {
      return po(c, n);
    }
    if (0 < Pi.length) {
      po(Pi[0], n);
      for (var l = 1; l < Pi.length; l++) {
        var o = Pi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Jr !== null && po(Jr, n), Vi !== null && po(Vi, n), rn !== null && po(rn, n), Yt.forEach(r), so.forEach(r), l = 0; l < Un.length; l++) o = Un[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Un.length && (l = Un[0], l.blockedOn === null); ) Mf(l), l.blockedOn === null && Un.shift();
  }
  var Rl = Ye.ReactCurrentBatchConfig, wl = !0;
  function $p(n, r, l, o) {
    var c = Ot, d = Rl.transition;
    Rl.transition = null;
    try {
      Ot = 1, _s(n, r, l, o);
    } finally {
      Ot = c, Rl.transition = d;
    }
  }
  function Yp(n, r, l, o) {
    var c = Ot, d = Rl.transition;
    Rl.transition = null;
    try {
      Ot = 4, _s(n, r, l, o);
    } finally {
      Ot = c, Rl.transition = d;
    }
  }
  function _s(n, r, l, o) {
    if (wl) {
      var c = ks(n, r, l, o);
      if (c === null) Ws(n, r, o, vo, l), oi(n, o);
      else if (Of(c, n, r, l, o)) o.stopPropagation();
      else if (oi(n, o), r & 4 && -1 < ea.indexOf(n)) {
        for (; c !== null; ) {
          var d = De(c);
          if (d !== null && Mt(d), d = ks(n, r, l, o), d === null && Ws(n, r, o, vo, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ws(n, r, o, null, l);
    }
  }
  var vo = null;
  function ks(n, r, l, o) {
    if (vo = null, n = $t(o), n = Ll(n), n !== null) if (r = tt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ke(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vo = n, null;
  }
  function Os(n) {
    switch (n) {
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
        switch (rt()) {
          case ui:
            return 1;
          case lo:
            return 4;
          case uo:
          case Pp:
            return 16;
          case Cf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var si = null, Ms = null, vu = null;
  function Lf() {
    if (vu) return vu;
    var n, r = Ms, l = r.length, o, c = "value" in si ? si.value : si.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return vu = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Ls(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ns() {
    return !0;
  }
  function zs() {
    return !1;
  }
  function Er(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n) n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ns : zs, this.isPropagationStopped = zs, this;
    }
    return k(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ns);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ns);
    }, persist: function() {
    }, isPersistent: Ns }), r;
  }
  var xl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Us = Er(xl), hu = k({}, xl, { view: 0, detail: 0 }), Wm = Er(hu), Nf, An, bl, ho = k({}, hu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== bl && (bl && n.type === "mousemove" ? (Nf = n.screenX - bl.screenX, An = n.screenY - bl.screenY) : An = Nf = 0, bl = n), Nf);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : An;
  } }), zf = Er(ho), qm = k({}, ho, { dataTransfer: 0 }), mu = Er(qm), Uf = k({}, hu, { relatedTarget: 0 }), As = Er(Uf), Gm = k({}, xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xm = Er(Gm), Km = k({}, xl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ip = Er(Km), Af = k({}, xl, { data: 0 }), jf = Er(Af), Qp = {
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
    MozPrintableKey: "Unidentified"
  }, Wp = {
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
    224: "Meta"
  }, Zm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ci(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zm[n]) ? !!r[n] : !1;
  }
  function Ff() {
    return ci;
  }
  var Hf = k({}, hu, { key: function(n) {
    if (n.key) {
      var r = Qp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Ls(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Wp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(n) {
    return n.type === "keypress" ? Ls(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ls(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Pf = Er(Hf), Vf = k({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qp = Er(Vf), js = k({}, hu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), Gp = Er(js), Cr = k({}, xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), fi = Er(Cr), yn = k({}, ho, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), di = Er(yn), Bf = [9, 13, 27, 32], yu = ge && "CompositionEvent" in window, mo = null;
  ge && "documentMode" in document && (mo = document.documentMode);
  var yo = ge && "TextEvent" in window && !mo, Xp = ge && (!yu || mo && 8 < mo && 11 >= mo), Kp = " ", Fs = !1;
  function Zp(n, r) {
    switch (n) {
      case "keyup":
        return Bf.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var gu = !1;
  function ev(n, r) {
    switch (n) {
      case "compositionend":
        return Jp(r);
      case "keypress":
        return r.which !== 32 ? null : (Fs = !0, Kp);
      case "textInput":
        return n = r.data, n === Kp && Fs ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (gu) return n === "compositionend" || !yu && Zp(n, r) ? (n = Lf(), vu = Ms = si = null, gu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Xp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function tv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ey[n.type] : r === "textarea";
  }
  function $f(n, r, l, o) {
    xs(o), r = Ro(r, "onChange"), 0 < r.length && (l = new Us("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var za = null, Dl = null;
  function nv(n) {
    Ol(n, 0);
  }
  function go(n) {
    var r = Ta(n);
    if (Z(r)) return n;
  }
  function ty(n, r) {
    if (n === "change") return r;
  }
  var rv = !1;
  if (ge) {
    var Yf;
    if (ge) {
      var If = "oninput" in document;
      if (!If) {
        var av = document.createElement("div");
        av.setAttribute("oninput", "return;"), If = typeof av.oninput == "function";
      }
      Yf = If;
    } else Yf = !1;
    rv = Yf && (!document.documentMode || 9 < document.documentMode);
  }
  function iv() {
    za && (za.detachEvent("onpropertychange", lv), Dl = za = null);
  }
  function lv(n) {
    if (n.propertyName === "value" && go(Dl)) {
      var r = [];
      $f(r, Dl, n, $t(n)), io(nv, r);
    }
  }
  function ny(n, r, l) {
    n === "focusin" ? (iv(), za = r, Dl = l, za.attachEvent("onpropertychange", lv)) : n === "focusout" && iv();
  }
  function uv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return go(Dl);
  }
  function ry(n, r) {
    if (n === "click") return go(r);
  }
  function ov(n, r) {
    if (n === "input" || n === "change") return go(r);
  }
  function ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ca = typeof Object.is == "function" ? Object.is : ay;
  function So(n, r) {
    if (Ca(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!G.call(r, c) || !Ca(n[c], r[c])) return !1;
    }
    return !0;
  }
  function sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Hs(n, r) {
    var l = sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = sv(l);
    }
  }
  function $i(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? $i(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Eo() {
    for (var n = window, r = jt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = jt(n.document);
    }
    return r;
  }
  function Ps(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Su(n) {
    var r = Eo(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && $i(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ps(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Hs(l, d);
          var h = Hs(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var iy = ge && "documentMode" in document && 11 >= document.documentMode, Eu = null, Qf = null, Co = null, Wf = !1;
  function qf(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wf || Eu == null || Eu !== jt(o) || (o = Eu, "selectionStart" in o && Ps(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && So(Co, o) || (Co = o, o = Ro(Qf, "onSelect"), 0 < o.length && (r = new Us("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Eu)));
  }
  function Vs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var _l = { animationend: Vs("Animation", "AnimationEnd"), animationiteration: Vs("Animation", "AnimationIteration"), animationstart: Vs("Animation", "AnimationStart"), transitionend: Vs("Transition", "TransitionEnd") }, jn = {}, Gf = {};
  ge && (Gf = document.createElement("div").style, "AnimationEvent" in window || (delete _l.animationend.animation, delete _l.animationiteration.animation, delete _l.animationstart.animation), "TransitionEvent" in window || delete _l.transitionend.transition);
  function Bs(n) {
    if (jn[n]) return jn[n];
    if (!_l[n]) return n;
    var r = _l[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Gf) return jn[n] = r[l];
    return n;
  }
  var cv = Bs("animationend"), fv = Bs("animationiteration"), dv = Bs("animationstart"), pv = Bs("transitionend"), Xf = /* @__PURE__ */ new Map(), $s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ta(n, r) {
    Xf.set(n, r), fe(r, [n]);
  }
  for (var Kf = 0; Kf < $s.length; Kf++) {
    var kl = $s[Kf], ly = kl.toLowerCase(), uy = kl[0].toUpperCase() + kl.slice(1);
    ta(ly, "on" + uy);
  }
  ta(cv, "onAnimationEnd"), ta(fv, "onAnimationIteration"), ta(dv, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(pv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), fe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), fe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), fe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), fe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), fe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), fe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zf = new Set("cancel close invalid load scroll toggle".split(" ").concat(To));
  function Ys(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, He(o, r, void 0, n), n.currentTarget = null;
  }
  function Ol(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var S = o[h], C = S.instance, N = S.currentTarget;
          if (S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Ys(c, S, N), d = C;
        }
        else for (h = 0; h < o.length; h++) {
          if (S = o[h], C = S.instance, N = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Ys(c, S, N), d = C;
        }
      }
    }
    if (Hi) throw n = E, Hi = !1, E = null, n;
  }
  function bt(n, r) {
    var l = r[bo];
    l === void 0 && (l = r[bo] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (vv(r, n, 2, !1), l.add(o));
  }
  function Is(n, r, l) {
    var o = 0;
    r && (o |= 4), vv(l, n, o, r);
  }
  var Qs = "_reactListening" + Math.random().toString(36).slice(2);
  function Cu(n) {
    if (!n[Qs]) {
      n[Qs] = !0, ve.forEach(function(l) {
        l !== "selectionchange" && (Zf.has(l) || Is(l, !1, n), Is(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qs] || (r[Qs] = !0, Is("selectionchange", !1, r));
    }
  }
  function vv(n, r, l, o) {
    switch (Os(r)) {
      case 1:
        var c = $p;
        break;
      case 4:
        c = Yp;
        break;
      default:
        c = _s;
    }
    l = c.bind(null, r, l, n), c = void 0, !ga || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ws(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var S = o.stateNode.containerInfo;
        if (S === c || S.nodeType === 8 && S.parentNode === c) break;
        if (h === 4) for (h = o.return; h !== null; ) {
          var C = h.tag;
          if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c)) return;
          h = h.return;
        }
        for (; S !== null; ) {
          if (h = Ll(S), h === null) return;
          if (C = h.tag, C === 5 || C === 6) {
            o = d = h;
            continue e;
          }
          S = S.parentNode;
        }
      }
      o = o.return;
    }
    io(function() {
      var N = d, $ = $t(l), I = [];
      e: {
        var V = Xf.get(n);
        if (V !== void 0) {
          var ue = Us, he = n;
          switch (n) {
            case "keypress":
              if (Ls(l) === 0) break e;
            case "keydown":
            case "keyup":
              ue = Pf;
              break;
            case "focusin":
              he = "focus", ue = As;
              break;
            case "focusout":
              he = "blur", ue = As;
              break;
            case "beforeblur":
            case "afterblur":
              ue = As;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ue = zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = mu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = Gp;
              break;
            case cv:
            case fv:
            case dv:
              ue = Xm;
              break;
            case pv:
              ue = fi;
              break;
            case "scroll":
              ue = Wm;
              break;
            case "wheel":
              ue = di;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = Ip;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = qp;
          }
          var Ee = (r & 4) !== 0, dn = !Ee && n === "scroll", b = Ee ? V !== null ? V + "Capture" : null : V;
          Ee = [];
          for (var R = N, O; R !== null; ) {
            O = R;
            var Y = O.stateNode;
            if (O.tag === 5 && Y !== null && (O = Y, b !== null && (Y = ri(R, b), Y != null && Ee.push(Tu(R, Y, O)))), dn) break;
            R = R.return;
          }
          0 < Ee.length && (V = new ue(V, he, null, l, $), I.push({ event: V, listeners: Ee }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (V = n === "mouseover" || n === "pointerover", ue = n === "mouseout" || n === "pointerout", V && l !== qt && (he = l.relatedTarget || l.fromElement) && (Ll(he) || he[pi])) break e;
          if ((ue || V) && (V = $.window === $ ? $ : (V = $.ownerDocument) ? V.defaultView || V.parentWindow : window, ue ? (he = l.relatedTarget || l.toElement, ue = N, he = he ? Ll(he) : null, he !== null && (dn = tt(he), he !== dn || he.tag !== 5 && he.tag !== 6) && (he = null)) : (ue = null, he = N), ue !== he)) {
            if (Ee = zf, Y = "onMouseLeave", b = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = qp, Y = "onPointerLeave", b = "onPointerEnter", R = "pointer"), dn = ue == null ? V : Ta(ue), O = he == null ? V : Ta(he), V = new Ee(Y, R + "leave", ue, l, $), V.target = dn, V.relatedTarget = O, Y = null, Ll($) === N && (Ee = new Ee(b, R + "enter", he, l, $), Ee.target = O, Ee.relatedTarget = dn, Y = Ee), dn = Y, ue && he) t: {
              for (Ee = ue, b = he, R = 0, O = Ee; O; O = Yi(O)) R++;
              for (O = 0, Y = b; Y; Y = Yi(Y)) O++;
              for (; 0 < R - O; ) Ee = Yi(Ee), R--;
              for (; 0 < O - R; ) b = Yi(b), O--;
              for (; R--; ) {
                if (Ee === b || b !== null && Ee === b.alternate) break t;
                Ee = Yi(Ee), b = Yi(b);
              }
              Ee = null;
            }
            else Ee = null;
            ue !== null && hv(I, V, ue, Ee, !1), he !== null && dn !== null && hv(I, dn, he, Ee, !0);
          }
        }
        e: {
          if (V = N ? Ta(N) : window, ue = V.nodeName && V.nodeName.toLowerCase(), ue === "select" || ue === "input" && V.type === "file") var me = ty;
          else if (tv(V)) if (rv) me = ov;
          else {
            me = uv;
            var ze = ny;
          }
          else (ue = V.nodeName) && ue.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (me = ry);
          if (me && (me = me(n, N))) {
            $f(I, me, l, $);
            break e;
          }
          ze && ze(n, V, N), n === "focusout" && (ze = V._wrapperState) && ze.controlled && V.type === "number" && Ma(V, "number", V.value);
        }
        switch (ze = N ? Ta(N) : window, n) {
          case "focusin":
            (tv(ze) || ze.contentEditable === "true") && (Eu = ze, Qf = N, Co = null);
            break;
          case "focusout":
            Co = Qf = Eu = null;
            break;
          case "mousedown":
            Wf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wf = !1, qf(I, l, $);
            break;
          case "selectionchange":
            if (iy) break;
          case "keydown":
          case "keyup":
            qf(I, l, $);
        }
        var Ae;
        if (yu) e: {
          switch (n) {
            case "compositionstart":
              var $e = "onCompositionStart";
              break e;
            case "compositionend":
              $e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $e = "onCompositionUpdate";
              break e;
          }
          $e = void 0;
        }
        else gu ? Zp(n, l) && ($e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && ($e = "onCompositionStart");
        $e && (Xp && l.locale !== "ko" && (gu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && gu && (Ae = Lf()) : (si = $, Ms = "value" in si ? si.value : si.textContent, gu = !0)), ze = Ro(N, $e), 0 < ze.length && ($e = new jf($e, n, null, l, $), I.push({ event: $e, listeners: ze }), Ae ? $e.data = Ae : (Ae = Jp(l), Ae !== null && ($e.data = Ae)))), (Ae = yo ? ev(n, l) : Jm(n, l)) && (N = Ro(N, "onBeforeInput"), 0 < N.length && ($ = new jf("onBeforeInput", "beforeinput", null, l, $), I.push({ event: $, listeners: N }), $.data = Ae));
      }
      Ol(I, r);
    });
  }
  function Tu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ro(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ri(n, l), d != null && o.unshift(Tu(n, d, c)), d = ri(n, r), d != null && o.push(Tu(n, d, c))), n = n.return;
    }
    return o;
  }
  function Yi(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function hv(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, N = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 && N !== null && (S = N, c ? (C = ri(l, d), C != null && h.unshift(Tu(l, C, S))) : c || (C = ri(l, d), C != null && h.push(Tu(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var mv = /\r\n?/g, oy = /\u0000|\uFFFD/g;
  function yv(n) {
    return (typeof n == "string" ? n : "" + n).replace(mv, `
`).replace(oy, "");
  }
  function qs(n, r, l) {
    if (r = yv(r), yv(n) !== r && l) throw Error(x(425));
  }
  function Ii() {
  }
  var wo = null, Ml = null;
  function Gs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Xs = typeof setTimeout == "function" ? setTimeout : void 0, Jf = typeof clearTimeout == "function" ? clearTimeout : void 0, gv = typeof Promise == "function" ? Promise : void 0, Ru = typeof queueMicrotask == "function" ? queueMicrotask : typeof gv < "u" ? function(n) {
    return gv.resolve(null).then(n).catch(Ks);
  } : Xs;
  function Ks(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wu(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Bi(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Bi(r);
  }
  function Ua(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Sv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Qi = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + Qi, xo = "__reactProps$" + Qi, pi = "__reactContainer$" + Qi, bo = "__reactEvents$" + Qi, xu = "__reactListeners$" + Qi, sy = "__reactHandles$" + Qi;
  function Ll(n) {
    var r = n[Aa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[pi] || l[Aa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Sv(n); n !== null; ) {
          if (l = n[Aa]) return l;
          n = Sv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function De(n) {
    return n = n[Aa] || n[pi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ta(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(x(33));
  }
  function un(n) {
    return n[xo] || null;
  }
  var ct = [], na = -1;
  function Ra(n) {
    return { current: n };
  }
  function Vt(n) {
    0 > na || (n.current = ct[na], ct[na] = null, na--);
  }
  function we(n, r) {
    na++, ct[na] = n.current, n.current = r;
  }
  var Tr = {}, an = Ra(Tr), Dn = Ra(!1), Rr = Tr;
  function ra(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Tr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function gn(n) {
    return n = n.childContextTypes, n != null;
  }
  function bu() {
    Vt(Dn), Vt(an);
  }
  function Ev(n, r, l) {
    if (an.current !== Tr) throw Error(x(168));
    we(an, r), we(Dn, l);
  }
  function Do(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(x(108, ke(n) || "Unknown", c));
    return k({}, l, o);
  }
  function wr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Tr, Rr = an.current, we(an, n), we(Dn, Dn.current), !0;
  }
  function Zs(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(x(169));
    l ? (n = Do(n, r, Rr), o.__reactInternalMemoizedMergedChildContext = n, Vt(Dn), Vt(an), we(an, n)) : Vt(Dn), we(Dn, l);
  }
  var ja = null, Du = !1, vi = !1;
  function Js(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  function Wi(n) {
    Du = !0, Js(n);
  }
  function Fa() {
    if (!vi && ja !== null) {
      vi = !0;
      var n = 0, r = Ot;
      try {
        var l = ja;
        for (Ot = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ja = null, Du = !1;
      } catch (c) {
        throw ja !== null && (ja = ja.slice(n + 1)), Zt(ui, Fa), c;
      } finally {
        Ot = r, vi = !1;
      }
    }
    return null;
  }
  var qi = [], Gi = 0, Xi = null, hi = 0, Sn = [], aa = 0, Hr = null, Ha = 1, Pa = "";
  function Nl(n, r) {
    qi[Gi++] = hi, qi[Gi++] = Xi, Xi = n, hi = r;
  }
  function Cv(n, r, l) {
    Sn[aa++] = Ha, Sn[aa++] = Pa, Sn[aa++] = Hr, Hr = n;
    var o = Ha;
    n = Pa;
    var c = 32 - Zr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Zr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, Ha = 1 << 32 - Zr(r) + c | l << c | o, Pa = d + n;
    } else Ha = 1 << d | l << c | o, Pa = n;
  }
  function ec(n) {
    n.return !== null && (Nl(n, 1), Cv(n, 1, 0));
  }
  function tc(n) {
    for (; n === Xi; ) Xi = qi[--Gi], qi[Gi] = null, hi = qi[--Gi], qi[Gi] = null;
    for (; n === Hr; ) Hr = Sn[--aa], Sn[aa] = null, Pa = Sn[--aa], Sn[aa] = null, Ha = Sn[--aa], Sn[aa] = null;
  }
  var xr = null, br = null, Xt = !1, ia = null;
  function ed(n, r) {
    var l = ca(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Tv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, xr = n, br = Ua(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, xr = n, br = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Hr !== null ? { id: Ha, overflow: Pa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ca(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, xr = n, br = null, !0) : !1;
      default:
        return !1;
    }
  }
  function td(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function nd(n) {
    if (Xt) {
      var r = br;
      if (r) {
        var l = r;
        if (!Tv(n, r)) {
          if (td(n)) throw Error(x(418));
          r = Ua(l.nextSibling);
          var o = xr;
          r && Tv(n, r) ? ed(o, l) : (n.flags = n.flags & -4097 | 2, Xt = !1, xr = n);
        }
      } else {
        if (td(n)) throw Error(x(418));
        n.flags = n.flags & -4097 | 2, Xt = !1, xr = n;
      }
    }
  }
  function _n(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    xr = n;
  }
  function nc(n) {
    if (n !== xr) return !1;
    if (!Xt) return _n(n), Xt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Gs(n.type, n.memoizedProps)), r && (r = br)) {
      if (td(n)) throw _o(), Error(x(418));
      for (; r; ) ed(n, r), r = Ua(r.nextSibling);
    }
    if (_n(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(x(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                br = Ua(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        br = null;
      }
    } else br = xr ? Ua(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _o() {
    for (var n = br; n; ) n = Ua(n.nextSibling);
  }
  function Ki() {
    br = xr = null, Xt = !1;
  }
  function mi(n) {
    ia === null ? ia = [n] : ia.push(n);
  }
  var cy = Ye.ReactCurrentBatchConfig;
  function zl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(x(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(x(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(x(284));
      if (!l._owner) throw Error(x(290, n));
    }
    return n;
  }
  function rc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(x(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Rv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ul(n) {
    function r(b, R) {
      if (n) {
        var O = b.deletions;
        O === null ? (b.deletions = [R], b.flags |= 16) : O.push(R);
      }
    }
    function l(b, R) {
      if (!n) return null;
      for (; R !== null; ) r(b, R), R = R.sibling;
      return null;
    }
    function o(b, R) {
      for (b = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? b.set(R.key, R) : b.set(R.index, R), R = R.sibling;
      return b;
    }
    function c(b, R) {
      return b = il(b, R), b.index = 0, b.sibling = null, b;
    }
    function d(b, R, O) {
      return b.index = O, n ? (O = b.alternate, O !== null ? (O = O.index, O < R ? (b.flags |= 2, R) : O) : (b.flags |= 2, R)) : (b.flags |= 1048576, R);
    }
    function h(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function S(b, R, O, Y) {
      return R === null || R.tag !== 6 ? (R = Nd(O, b.mode, Y), R.return = b, R) : (R = c(R, O), R.return = b, R);
    }
    function C(b, R, O, Y) {
      var me = O.type;
      return me === Ge ? $(b, R, O.props.children, Y, O.key) : R !== null && (R.elementType === me || typeof me == "object" && me !== null && me.$$typeof === vt && Rv(me) === R.type) ? (Y = c(R, O.props), Y.ref = zl(b, R, O), Y.return = b, Y) : (Y = as(O.type, O.key, O.props, null, b.mode, Y), Y.ref = zl(b, R, O), Y.return = b, Y);
    }
    function N(b, R, O, Y) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== O.containerInfo || R.stateNode.implementation !== O.implementation ? (R = Ac(O, b.mode, Y), R.return = b, R) : (R = c(R, O.children || []), R.return = b, R);
    }
    function $(b, R, O, Y, me) {
      return R === null || R.tag !== 7 ? (R = Ti(O, b.mode, Y, me), R.return = b, R) : (R = c(R, O), R.return = b, R);
    }
    function I(b, R, O) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = Nd("" + R, b.mode, O), R.return = b, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case P:
            return O = as(R.type, R.key, R.props, null, b.mode, O), O.ref = zl(b, null, R), O.return = b, O;
          case ht:
            return R = Ac(R, b.mode, O), R.return = b, R;
          case vt:
            var Y = R._init;
            return I(b, Y(R._payload), O);
        }
        if (ti(R) || Re(R)) return R = Ti(R, b.mode, O, null), R.return = b, R;
        rc(b, R);
      }
      return null;
    }
    function V(b, R, O, Y) {
      var me = R !== null ? R.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return me !== null ? null : S(b, R, "" + O, Y);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case P:
            return O.key === me ? C(b, R, O, Y) : null;
          case ht:
            return O.key === me ? N(b, R, O, Y) : null;
          case vt:
            return me = O._init, V(
              b,
              R,
              me(O._payload),
              Y
            );
        }
        if (ti(O) || Re(O)) return me !== null ? null : $(b, R, O, Y, null);
        rc(b, O);
      }
      return null;
    }
    function ue(b, R, O, Y, me) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return b = b.get(O) || null, S(R, b, "" + Y, me);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case P:
            return b = b.get(Y.key === null ? O : Y.key) || null, C(R, b, Y, me);
          case ht:
            return b = b.get(Y.key === null ? O : Y.key) || null, N(R, b, Y, me);
          case vt:
            var ze = Y._init;
            return ue(b, R, O, ze(Y._payload), me);
        }
        if (ti(Y) || Re(Y)) return b = b.get(O) || null, $(R, b, Y, me, null);
        rc(R, Y);
      }
      return null;
    }
    function he(b, R, O, Y) {
      for (var me = null, ze = null, Ae = R, $e = R = 0, Nn = null; Ae !== null && $e < O.length; $e++) {
        Ae.index > $e ? (Nn = Ae, Ae = null) : Nn = Ae.sibling;
        var Tt = V(b, Ae, O[$e], Y);
        if (Tt === null) {
          Ae === null && (Ae = Nn);
          break;
        }
        n && Ae && Tt.alternate === null && r(b, Ae), R = d(Tt, R, $e), ze === null ? me = Tt : ze.sibling = Tt, ze = Tt, Ae = Nn;
      }
      if ($e === O.length) return l(b, Ae), Xt && Nl(b, $e), me;
      if (Ae === null) {
        for (; $e < O.length; $e++) Ae = I(b, O[$e], Y), Ae !== null && (R = d(Ae, R, $e), ze === null ? me = Ae : ze.sibling = Ae, ze = Ae);
        return Xt && Nl(b, $e), me;
      }
      for (Ae = o(b, Ae); $e < O.length; $e++) Nn = ue(Ae, b, $e, O[$e], Y), Nn !== null && (n && Nn.alternate !== null && Ae.delete(Nn.key === null ? $e : Nn.key), R = d(Nn, R, $e), ze === null ? me = Nn : ze.sibling = Nn, ze = Nn);
      return n && Ae.forEach(function(ol) {
        return r(b, ol);
      }), Xt && Nl(b, $e), me;
    }
    function Ee(b, R, O, Y) {
      var me = Re(O);
      if (typeof me != "function") throw Error(x(150));
      if (O = me.call(O), O == null) throw Error(x(151));
      for (var ze = me = null, Ae = R, $e = R = 0, Nn = null, Tt = O.next(); Ae !== null && !Tt.done; $e++, Tt = O.next()) {
        Ae.index > $e ? (Nn = Ae, Ae = null) : Nn = Ae.sibling;
        var ol = V(b, Ae, Tt.value, Y);
        if (ol === null) {
          Ae === null && (Ae = Nn);
          break;
        }
        n && Ae && ol.alternate === null && r(b, Ae), R = d(ol, R, $e), ze === null ? me = ol : ze.sibling = ol, ze = ol, Ae = Nn;
      }
      if (Tt.done) return l(
        b,
        Ae
      ), Xt && Nl(b, $e), me;
      if (Ae === null) {
        for (; !Tt.done; $e++, Tt = O.next()) Tt = I(b, Tt.value, Y), Tt !== null && (R = d(Tt, R, $e), ze === null ? me = Tt : ze.sibling = Tt, ze = Tt);
        return Xt && Nl(b, $e), me;
      }
      for (Ae = o(b, Ae); !Tt.done; $e++, Tt = O.next()) Tt = ue(Ae, b, $e, Tt.value, Y), Tt !== null && (n && Tt.alternate !== null && Ae.delete(Tt.key === null ? $e : Tt.key), R = d(Tt, R, $e), ze === null ? me = Tt : ze.sibling = Tt, ze = Tt);
      return n && Ae.forEach(function(ih) {
        return r(b, ih);
      }), Xt && Nl(b, $e), me;
    }
    function dn(b, R, O, Y) {
      if (typeof O == "object" && O !== null && O.type === Ge && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case P:
            e: {
              for (var me = O.key, ze = R; ze !== null; ) {
                if (ze.key === me) {
                  if (me = O.type, me === Ge) {
                    if (ze.tag === 7) {
                      l(b, ze.sibling), R = c(ze, O.props.children), R.return = b, b = R;
                      break e;
                    }
                  } else if (ze.elementType === me || typeof me == "object" && me !== null && me.$$typeof === vt && Rv(me) === ze.type) {
                    l(b, ze.sibling), R = c(ze, O.props), R.ref = zl(b, ze, O), R.return = b, b = R;
                    break e;
                  }
                  l(b, ze);
                  break;
                } else r(b, ze);
                ze = ze.sibling;
              }
              O.type === Ge ? (R = Ti(O.props.children, b.mode, Y, O.key), R.return = b, b = R) : (Y = as(O.type, O.key, O.props, null, b.mode, Y), Y.ref = zl(b, R, O), Y.return = b, b = Y);
            }
            return h(b);
          case ht:
            e: {
              for (ze = O.key; R !== null; ) {
                if (R.key === ze) if (R.tag === 4 && R.stateNode.containerInfo === O.containerInfo && R.stateNode.implementation === O.implementation) {
                  l(b, R.sibling), R = c(R, O.children || []), R.return = b, b = R;
                  break e;
                } else {
                  l(b, R);
                  break;
                }
                else r(b, R);
                R = R.sibling;
              }
              R = Ac(O, b.mode, Y), R.return = b, b = R;
            }
            return h(b);
          case vt:
            return ze = O._init, dn(b, R, ze(O._payload), Y);
        }
        if (ti(O)) return he(b, R, O, Y);
        if (Re(O)) return Ee(b, R, O, Y);
        rc(b, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, R !== null && R.tag === 6 ? (l(b, R.sibling), R = c(R, O), R.return = b, b = R) : (l(b, R), R = Nd(O, b.mode, Y), R.return = b, b = R), h(b)) : l(b, R);
    }
    return dn;
  }
  var on = Ul(!0), re = Ul(!1), Pr = Ra(null), Dr = null, _u = null, rd = null;
  function ad() {
    rd = _u = Dr = null;
  }
  function id(n) {
    var r = Pr.current;
    Vt(Pr), n._currentValue = r;
  }
  function ld(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Jt(n, r) {
    Dr = n, rd = _u = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Cn = !0), n.firstContext = null);
  }
  function la(n) {
    var r = n._currentValue;
    if (rd !== n) if (n = { context: n, memoizedValue: r, next: null }, _u === null) {
      if (Dr === null) throw Error(x(308));
      _u = n, Dr.dependencies = { lanes: 0, firstContext: n };
    } else _u = _u.next = n;
    return r;
  }
  var Al = null;
  function ud(n) {
    Al === null ? Al = [n] : Al.push(n);
  }
  function od(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, ud(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Vr(n, o);
  }
  function Vr(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Br = !1;
  function sd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function yi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Zi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ft & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Vr(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, ud(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Vr(n, l);
  }
  function ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ds(n, l);
    }
  }
  function xv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ko(n, r, l, o) {
    var c = n.updateQueue;
    Br = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, N = C.next;
      C.next = null, h === null ? d = N : h.next = N, h = C;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, S = $.lastBaseUpdate, S !== h && (S === null ? $.firstBaseUpdate = N : S.next = N, $.lastBaseUpdate = C));
    }
    if (d !== null) {
      var I = c.baseState;
      h = 0, $ = N = C = null, S = d;
      do {
        var V = S.lane, ue = S.eventTime;
        if ((o & V) === V) {
          $ !== null && ($ = $.next = {
            eventTime: ue,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var he = n, Ee = S;
            switch (V = r, ue = l, Ee.tag) {
              case 1:
                if (he = Ee.payload, typeof he == "function") {
                  I = he.call(ue, I, V);
                  break e;
                }
                I = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = Ee.payload, V = typeof he == "function" ? he.call(ue, I, V) : he, V == null) break e;
                I = k({}, I, V);
                break e;
              case 2:
                Br = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, V = c.effects, V === null ? c.effects = [S] : V.push(S));
        } else ue = { eventTime: ue, lane: V, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, $ === null ? (N = $ = ue, C = I) : $ = $.next = ue, h |= V;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          V = S, S = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (C = I), c.baseState = C, c.firstBaseUpdate = N, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ia |= h, n.lanes = h, n.memoizedState = I;
    }
  }
  function cd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(x(191, c));
        c.call(o);
      }
    }
  }
  var Oo = {}, Va = Ra(Oo), Mo = Ra(Oo), Lo = Ra(Oo);
  function jl(n) {
    if (n === Oo) throw Error(x(174));
    return n;
  }
  function fd(n, r) {
    switch (we(Lo, r), we(Mo, n), we(Va, Oo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : La(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = La(r, n);
    }
    Vt(Va), we(Va, r);
  }
  function Fl() {
    Vt(Va), Vt(Mo), Vt(Lo);
  }
  function bv(n) {
    jl(Lo.current);
    var r = jl(Va.current), l = La(r, n.type);
    r !== l && (we(Mo, n), we(Va, l));
  }
  function ic(n) {
    Mo.current === n && (Vt(Va), Vt(Mo));
  }
  var en = Ra(0);
  function lc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var No = [];
  function _e() {
    for (var n = 0; n < No.length; n++) No[n]._workInProgressVersionPrimary = null;
    No.length = 0;
  }
  var at = Ye.ReactCurrentDispatcher, Et = Ye.ReactCurrentBatchConfig, Lt = 0, Ct = null, En = null, Mn = null, uc = !1, zo = !1, Hl = 0, F = 0;
  function yt() {
    throw Error(x(321));
  }
  function Ve(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ca(n[l], r[l])) return !1;
    return !0;
  }
  function Ji(n, r, l, o, c, d) {
    if (Lt = d, Ct = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, at.current = n === null || n.memoizedState === null ? Tc : Po, n = l(o, c), zo) {
      d = 0;
      do {
        if (zo = !1, Hl = 0, 25 <= d) throw Error(x(301));
        d += 1, Mn = En = null, r.updateQueue = null, at.current = Rc, n = l(o, c);
      } while (zo);
    }
    if (at.current = Yl, r = En !== null && En.next !== null, Lt = 0, Mn = En = Ct = null, uc = !1, r) throw Error(x(300));
    return n;
  }
  function wa() {
    var n = Hl !== 0;
    return Hl = 0, n;
  }
  function er() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Mn === null ? Ct.memoizedState = Mn = n : Mn = Mn.next = n, Mn;
  }
  function sn() {
    if (En === null) {
      var n = Ct.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = En.next;
    var r = Mn === null ? Ct.memoizedState : Mn.next;
    if (r !== null) Mn = r, En = n;
    else {
      if (n === null) throw Error(x(310));
      En = n, n = { memoizedState: En.memoizedState, baseState: En.baseState, baseQueue: En.baseQueue, queue: En.queue, next: null }, Mn === null ? Ct.memoizedState = Mn = n : Mn = Mn.next = n;
    }
    return Mn;
  }
  function gi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function el(n) {
    var r = sn(), l = r.queue;
    if (l === null) throw Error(x(311));
    l.lastRenderedReducer = n;
    var o = En, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, N = d;
      do {
        var $ = N.lane;
        if ((Lt & $) === $) C !== null && (C = C.next = { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }), o = N.hasEagerState ? N.eagerState : n(o, N.action);
        else {
          var I = {
            lane: $,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          };
          C === null ? (S = C = I, h = o) : C = C.next = I, Ct.lanes |= $, Ia |= $;
        }
        N = N.next;
      } while (N !== null && N !== d);
      C === null ? h = o : C.next = S, Ca(o, r.memoizedState) || (Cn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ct.lanes |= d, Ia |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Pl(n) {
    var r = sn(), l = r.queue;
    if (l === null) throw Error(x(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Ca(d, r.memoizedState) || (Cn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function oc() {
  }
  function sc(n, r) {
    var l = Ct, o = sn(), c = r(), d = !Ca(o.memoizedState, c);
    if (d && (o.memoizedState = c, Cn = !0), o = o.queue, Uo(dc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Mn !== null && Mn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Vl(9, fc.bind(null, l, o, c, r), void 0, null), kn === null) throw Error(x(349));
      (Lt & 30) !== 0 || cc(l, r, c);
    }
    return c;
  }
  function cc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ct.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ct.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function fc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, pc(r) && vc(n);
  }
  function dc(n, r, l) {
    return l(function() {
      pc(r) && vc(n);
    });
  }
  function pc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ca(n, l);
    } catch {
      return !0;
    }
  }
  function vc(n) {
    var r = Vr(n, 1);
    r !== null && sr(r, n, 1, -1);
  }
  function hc(n) {
    var r = er();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gi, lastRenderedState: n }, r.queue = n, n = n.dispatch = $l.bind(null, Ct, n), [r.memoizedState, n];
  }
  function Vl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ct.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ct.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function mc() {
    return sn().memoizedState;
  }
  function ku(n, r, l, o) {
    var c = er();
    Ct.flags |= n, c.memoizedState = Vl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Ou(n, r, l, o) {
    var c = sn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (En !== null) {
      var h = En.memoizedState;
      if (d = h.destroy, o !== null && Ve(o, h.deps)) {
        c.memoizedState = Vl(r, l, d, o);
        return;
      }
    }
    Ct.flags |= n, c.memoizedState = Vl(1 | r, l, d, o);
  }
  function yc(n, r) {
    return ku(8390656, 8, n, r);
  }
  function Uo(n, r) {
    return Ou(2048, 8, n, r);
  }
  function gc(n, r) {
    return Ou(4, 2, n, r);
  }
  function Ao(n, r) {
    return Ou(4, 4, n, r);
  }
  function Bl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Sc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ou(4, 4, Bl.bind(null, r, n), l);
  }
  function jo() {
  }
  function Ec(n, r) {
    var l = sn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ve(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Cc(n, r) {
    var l = sn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ve(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function dd(n, r, l) {
    return (Lt & 21) === 0 ? (n.baseState && (n.baseState = !1, Cn = !0), n.memoizedState = l) : (Ca(l, r) || (l = bs(), Ct.lanes |= l, Ia |= l, n.baseState = !0), r);
  }
  function Fo(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Et.transition;
    Et.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, Et.transition = o;
    }
  }
  function pd() {
    return sn().memoizedState;
  }
  function Ho(n, r, l) {
    var o = Qa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, $r(n)) Dv(r, l);
    else if (l = od(n, r, l, o), l !== null) {
      var c = wn();
      sr(l, n, o, c), Ft(l, r, o);
    }
  }
  function $l(n, r, l) {
    var o = Qa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if ($r(n)) Dv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, S = d(h, l);
        if (c.hasEagerState = !0, c.eagerState = S, Ca(S, h)) {
          var C = r.interleaved;
          C === null ? (c.next = c, ud(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = od(n, r, c, o), l !== null && (c = wn(), sr(l, n, o, c), Ft(l, r, o));
    }
  }
  function $r(n) {
    var r = n.alternate;
    return n === Ct || r !== null && r === Ct;
  }
  function Dv(n, r) {
    zo = uc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ft(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ds(n, l);
    }
  }
  var Yl = { readContext: la, useCallback: yt, useContext: yt, useEffect: yt, useImperativeHandle: yt, useInsertionEffect: yt, useLayoutEffect: yt, useMemo: yt, useReducer: yt, useRef: yt, useState: yt, useDebugValue: yt, useDeferredValue: yt, useTransition: yt, useMutableSource: yt, useSyncExternalStore: yt, useId: yt, unstable_isNewReconciler: !1 }, Tc = { readContext: la, useCallback: function(n, r) {
    return er().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: la, useEffect: yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ku(
      4194308,
      4,
      Bl.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ku(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ku(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = er();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = er();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ho.bind(null, Ct, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = er();
    return n = { current: n }, r.memoizedState = n;
  }, useState: hc, useDebugValue: jo, useDeferredValue: function(n) {
    return er().memoizedState = n;
  }, useTransition: function() {
    var n = hc(!1), r = n[0];
    return n = Fo.bind(null, n[1]), er().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ct, c = er();
    if (Xt) {
      if (l === void 0) throw Error(x(407));
      l = l();
    } else {
      if (l = r(), kn === null) throw Error(x(349));
      (Lt & 30) !== 0 || cc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, yc(dc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Vl(9, fc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = er(), r = kn.identifierPrefix;
    if (Xt) {
      var l = Pa, o = Ha;
      l = (o & ~(1 << 32 - Zr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Hl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = F++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Po = {
    readContext: la,
    useCallback: Ec,
    useContext: la,
    useEffect: Uo,
    useImperativeHandle: Sc,
    useInsertionEffect: gc,
    useLayoutEffect: Ao,
    useMemo: Cc,
    useReducer: el,
    useRef: mc,
    useState: function() {
      return el(gi);
    },
    useDebugValue: jo,
    useDeferredValue: function(n) {
      var r = sn();
      return dd(r, En.memoizedState, n);
    },
    useTransition: function() {
      var n = el(gi)[0], r = sn().memoizedState;
      return [n, r];
    },
    useMutableSource: oc,
    useSyncExternalStore: sc,
    useId: pd,
    unstable_isNewReconciler: !1
  }, Rc = { readContext: la, useCallback: Ec, useContext: la, useEffect: Uo, useImperativeHandle: Sc, useInsertionEffect: gc, useLayoutEffect: Ao, useMemo: Cc, useReducer: Pl, useRef: mc, useState: function() {
    return Pl(gi);
  }, useDebugValue: jo, useDeferredValue: function(n) {
    var r = sn();
    return En === null ? r.memoizedState = n : dd(r, En.memoizedState, n);
  }, useTransition: function() {
    var n = Pl(gi)[0], r = sn().memoizedState;
    return [n, r];
  }, useMutableSource: oc, useSyncExternalStore: sc, useId: pd, unstable_isNewReconciler: !1 };
  function xa(n, r) {
    if (n && n.defaultProps) {
      r = k({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function vd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : k({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? tt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = Qa(n), d = yi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Zi(n, d, c), r !== null && (sr(r, n, c, o), ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = Qa(n), d = yi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Zi(n, d, c), r !== null && (sr(r, n, c, o), ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = wn(), o = Qa(n), c = yi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Zi(n, c, o), r !== null && (sr(r, n, o, l), ac(r, n, o));
  } };
  function _v(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function xc(n, r, l) {
    var o = !1, c = Tr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = la(d) : (c = gn(r) ? Rr : an.current, o = r.contextTypes, d = (o = o != null) ? ra(n, c) : Tr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = wc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && wc.enqueueReplaceState(r, r.state, null);
  }
  function Vo(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, sd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = la(d) : (d = gn(r) ? Rr : an.current, c.context = ra(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (vd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && wc.enqueueReplaceState(c, c.state, null), ko(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Il(n, r) {
    try {
      var l = "", o = r;
      do
        l += et(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function hd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function md(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var bc = typeof WeakMap == "function" ? WeakMap : Map;
  function Ov(n, r, l) {
    l = yi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Au || (Au = !0, ql = o), md(n, r);
    }, l;
  }
  function yd(n, r, l) {
    l = yi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        md(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      md(n, r), typeof o != "function" && (rl === null ? rl = /* @__PURE__ */ new Set([this]) : rl.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function gd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new bc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = yy.bind(null, n, r, l), r.then(n, n));
  }
  function Mv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function tl(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = yi(-1, 1), r.tag = 2, Zi(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Bo = Ye.ReactCurrentOwner, Cn = !1;
  function Fn(n, r, l, o) {
    r.child = n === null ? re(r, null, l, o) : on(r, n.child, l, o);
  }
  function _r(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Jt(r, c), o = Ji(n, r, l, o, d, c), l = wa(), n !== null && !Cn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, oa(n, r, c)) : (Xt && l && ec(r), r.flags |= 1, Fn(n, r, o, c), r.child);
  }
  function Ql(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Ld(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Je(n, r, d, o, c)) : (n = as(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref) return oa(n, r, c);
    }
    return r.flags |= 1, n = il(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Je(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref) if (Cn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Cn = !0);
      else return r.lanes = n.lanes, oa(n, r, c);
    }
    return Lv(n, r, l, o, c);
  }
  function $o(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(Nu, Yr), Yr |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, we(Nu, Yr), Yr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, we(Nu, Yr), Yr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, we(Nu, Yr), Yr |= o;
    return Fn(n, r, c, l), r.child;
  }
  function Sd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Lv(n, r, l, o, c) {
    var d = gn(l) ? Rr : an.current;
    return d = ra(r, d), Jt(r, c), l = Ji(n, r, l, o, d, c), o = wa(), n !== null && !Cn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, oa(n, r, c)) : (Xt && o && ec(r), r.flags |= 1, Fn(n, r, l, c), r.child);
  }
  function Nv(n, r, l, o, c) {
    if (gn(l)) {
      var d = !0;
      wr(r);
    } else d = !1;
    if (Jt(r, c), r.stateNode === null) ua(n, r), xc(r, l, o), Vo(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, N = l.contextType;
      typeof N == "object" && N !== null ? N = la(N) : (N = gn(l) ? Rr : an.current, N = ra(r, N));
      var $ = l.getDerivedStateFromProps, I = typeof $ == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      I || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== N) && kv(r, h, o, N), Br = !1;
      var V = r.memoizedState;
      h.state = V, ko(r, o, h, c), C = r.memoizedState, S !== o || V !== C || Dn.current || Br ? (typeof $ == "function" && (vd(r, l, $, o), C = r.memoizedState), (S = Br || _v(r, l, S, o, V, C, N)) ? (I || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = N, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, wv(n, r), S = r.memoizedProps, N = r.type === r.elementType ? S : xa(r.type, S), h.props = N, I = r.pendingProps, V = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = la(C) : (C = gn(l) ? Rr : an.current, C = ra(r, C));
      var ue = l.getDerivedStateFromProps;
      ($ = typeof ue == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== I || V !== C) && kv(r, h, o, C), Br = !1, V = r.memoizedState, h.state = V, ko(r, o, h, c);
      var he = r.memoizedState;
      S !== I || V !== he || Dn.current || Br ? (typeof ue == "function" && (vd(r, l, ue, o), he = r.memoizedState), (N = Br || _v(r, l, N, o, V, he, C) || !1) ? ($ || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, he, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, he, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = he), h.props = o, h.state = he, h.context = C, o = N) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && V === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Yo(n, r, l, o, d, c);
  }
  function Yo(n, r, l, o, c, d) {
    Sd(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && Zs(r, l, !1), oa(n, r, d);
    o = r.stateNode, Bo.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = on(r, n.child, null, d), r.child = on(r, null, S, d)) : Fn(n, r, S, d), r.memoizedState = o.state, c && Zs(r, l, !0), r.child;
  }
  function Mu(n) {
    var r = n.stateNode;
    r.pendingContext ? Ev(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ev(n, r.context, !1), fd(n, r.containerInfo);
  }
  function zv(n, r, l, o, c) {
    return Ki(), mi(c), r.flags |= 256, Fn(n, r, l, o), r.child;
  }
  var Dc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ed(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _c(n, r, l) {
    var o = r.pendingProps, c = en.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), we(en, c & 1), n === null)
      return nd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = ll(h, o, 0, null), n = Ti(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ed(l), r.memoizedState = Dc, n) : Cd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return Uv(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return (h & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = il(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = il(S, d) : (d = Ti(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Ed(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Dc, o;
    }
    return d = n.child, n = d.sibling, o = il(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Cd(n, r) {
    return r = ll({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Io(n, r, l, o) {
    return o !== null && mi(o), on(r, n.child, null, l), n = Cd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Uv(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = hd(Error(x(422))), Io(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = ll({ mode: "visible", children: o.children }, c, 0, null), d = Ti(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && on(r, n.child, null, h), r.child.memoizedState = Ed(h), r.memoizedState = Dc, d);
    if ((r.mode & 1) === 0) return Io(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(x(419)), o = hd(d, o, void 0), Io(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Cn || S) {
      if (o = kn, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | h)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Vr(n, c), sr(o, n, c, -1));
      }
      return Md(), o = hd(Error(x(421))), Io(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, br = Ua(c.nextSibling), xr = r, Xt = !0, ia = null, n !== null && (Sn[aa++] = Ha, Sn[aa++] = Pa, Sn[aa++] = Hr, Ha = n.id, Pa = n.overflow, Hr = r), r = Cd(r, o.children), r.flags |= 4096, r);
  }
  function Td(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), ld(n.return, r, l);
  }
  function lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ba(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Fn(n, r, o.children, l), o = en.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Td(n, l, r);
        else if (n.tag === 19) Td(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (we(en, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && lc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        lr(r, !0, l, null, d);
        break;
      case "together":
        lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ua(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function oa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ia |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(x(153));
    if (r.child !== null) {
      for (n = r.child, l = il(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = il(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qo(n, r, l) {
    switch (r.tag) {
      case 3:
        Mu(r), Ki();
        break;
      case 5:
        bv(r);
        break;
      case 1:
        gn(r.type) && wr(r);
        break;
      case 4:
        fd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        we(Pr, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (we(en, en.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? _c(n, r, l) : (we(en, en.current & 1), n = oa(n, r, l), n !== null ? n.sibling : null);
        we(en, en.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return Ba(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), we(en, en.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, $o(n, r, l);
    }
    return oa(n, r, l);
  }
  var sa, Tn, Av, jv;
  sa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Tn = function() {
  }, Av = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, jl(Va.current);
      var d = null;
      switch (l) {
        case "input":
          c = hn(n, c), o = hn(n, o), d = [];
          break;
        case "select":
          c = k({}, c, { value: void 0 }), o = k({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Xn(n, c), o = Xn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ii);
      }
      nn(l, o);
      var h;
      l = null;
      for (N in c) if (!o.hasOwnProperty(N) && c.hasOwnProperty(N) && c[N] != null) if (N === "style") {
        var S = c[N];
        for (h in S) S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else N !== "dangerouslySetInnerHTML" && N !== "children" && N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && N !== "autoFocus" && (Se.hasOwnProperty(N) ? d || (d = []) : (d = d || []).push(N, null));
      for (N in o) {
        var C = o[N];
        if (S = c != null ? c[N] : void 0, o.hasOwnProperty(N) && C !== S && (C != null || S != null)) if (N === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          N,
          l
        )), l = C;
        else N === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(N, C)) : N === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(N, "" + C) : N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && (Se.hasOwnProperty(N) ? (C != null && N === "onScroll" && bt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(N, C));
      }
      l && (d = d || []).push("style", l);
      var N = d;
      (r.updateQueue = N) && (r.flags |= 4);
    }
  }, jv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Wo(n, r) {
    if (!Xt) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Ln(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Fv(n, r, l) {
    var o = r.pendingProps;
    switch (tc(r), r.tag) {
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
        return Ln(r), null;
      case 1:
        return gn(r.type) && bu(), Ln(r), null;
      case 3:
        return o = r.stateNode, Fl(), Vt(Dn), Vt(an), _e(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ia !== null && (Gl(ia), ia = null))), Tn(n, r), Ln(r), null;
      case 5:
        ic(r);
        var c = jl(Lo.current);
        if (l = r.type, n !== null && r.stateNode != null) Av(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(x(166));
            return Ln(r), null;
          }
          if (n = jl(Va.current), nc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Aa] = r, o[xo] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                bt("cancel", o), bt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                bt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < To.length; c++) bt(To[c], o);
                break;
              case "source":
                bt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                bt(
                  "error",
                  o
                ), bt("load", o);
                break;
              case "details":
                bt("toggle", o);
                break;
              case "input":
                mn(o, d), bt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, bt("invalid", o);
                break;
              case "textarea":
                jr(o, d), bt("invalid", o);
            }
            nn(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var S = d[h];
              h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && qs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && qs(
                o.textContent,
                S,
                n
              ), c = ["children", "" + S]) : Se.hasOwnProperty(h) && S != null && h === "onScroll" && bt("scroll", o);
            }
            switch (l) {
              case "input":
                mt(o), zi(o, d, !0);
                break;
              case "textarea":
                mt(o), Kn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ii);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Fr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Aa] = r, n[xo] = o, sa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Jn(l, o), l) {
                case "dialog":
                  bt("cancel", n), bt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  bt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < To.length; c++) bt(To[c], n);
                  c = o;
                  break;
                case "source":
                  bt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  bt(
                    "error",
                    n
                  ), bt("load", n), c = o;
                  break;
                case "details":
                  bt("toggle", n), c = o;
                  break;
                case "input":
                  mn(n, o), c = hn(n, o), bt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = k({}, o, { value: void 0 }), bt("invalid", n);
                  break;
                case "textarea":
                  jr(n, o), c = Xn(n, o), bt("invalid", n);
                  break;
                default:
                  c = o;
              }
              nn(l, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var C = S[d];
                d === "style" ? Wt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Ai(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && J(n, C) : typeof C == "number" && J(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Se.hasOwnProperty(d) ? C != null && d === "onScroll" && bt("scroll", n) : C != null && xe(n, d, C, h));
              }
              switch (l) {
                case "input":
                  mt(n), zi(n, o, !1);
                  break;
                case "textarea":
                  mt(n), Kn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Pe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? rr(n, !!o.multiple, d, !1) : o.defaultValue != null && rr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ii);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Ln(r), null;
      case 6:
        if (n && r.stateNode != null) jv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(x(166));
          if (l = jl(Lo.current), jl(Va.current), nc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Aa] = r, (d = o.nodeValue !== l) && (n = xr, n !== null)) switch (n.tag) {
              case 3:
                qs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && qs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Aa] = r, r.stateNode = o;
        }
        return Ln(r), null;
      case 13:
        if (Vt(en), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Xt && br !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) _o(), Ki(), r.flags |= 98560, d = !1;
          else if (d = nc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(x(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(x(317));
              d[Aa] = r;
            } else Ki(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Ln(r), d = !1;
          } else ia !== null && (Gl(ia), ia = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (en.current & 1) !== 0 ? fn === 0 && (fn = 3) : Md())), r.updateQueue !== null && (r.flags |= 4), Ln(r), null);
      case 4:
        return Fl(), Tn(n, r), n === null && Cu(r.stateNode.containerInfo), Ln(r), null;
      case 10:
        return id(r.type._context), Ln(r), null;
      case 17:
        return gn(r.type) && bu(), Ln(r), null;
      case 19:
        if (Vt(en), d = r.memoizedState, d === null) return Ln(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) Wo(d, !1);
        else {
          if (fn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (h = lc(n), h !== null) {
              for (r.flags |= 128, Wo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return we(en, en.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && nt() > Uu && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = lc(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Wo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Xt) return Ln(r), null;
          } else 2 * nt() - d.renderingStartTime > Uu && l !== 1073741824 && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = nt(), r.sibling = null, l = en.current, we(en, o ? l & 1 | 2 : l & 1), r) : (Ln(r), null);
      case 22:
      case 23:
        return Od(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Yr & 1073741824) !== 0 && (Ln(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Ln(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(x(156, r.tag));
  }
  function kc(n, r) {
    switch (tc(r), r.tag) {
      case 1:
        return gn(r.type) && bu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Fl(), Vt(Dn), Vt(an), _e(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ic(r), null;
      case 13:
        if (Vt(en), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(x(340));
          Ki();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Vt(en), null;
      case 4:
        return Fl(), null;
      case 10:
        return id(r.type._context), null;
      case 22:
      case 23:
        return Od(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var qo = !1, tr = !1, fy = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function Lu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Kt(n, r, o);
    }
    else l.current = null;
  }
  function Oc(n, r, l) {
    try {
      l();
    } catch (o) {
      Kt(n, r, o);
    }
  }
  var Hv = !1;
  function Pv(n, r) {
    if (wo = wl, n = Eo(), Ps(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var h = 0, S = -1, C = -1, N = 0, $ = 0, I = n, V = null;
          t: for (; ; ) {
            for (var ue; I !== l || c !== 0 && I.nodeType !== 3 || (S = h + c), I !== d || o !== 0 && I.nodeType !== 3 || (C = h + o), I.nodeType === 3 && (h += I.nodeValue.length), (ue = I.firstChild) !== null; )
              V = I, I = ue;
            for (; ; ) {
              if (I === n) break t;
              if (V === l && ++N === c && (S = h), V === d && ++$ === o && (C = h), (ue = I.nextSibling) !== null) break;
              I = V, V = I.parentNode;
            }
            I = ue;
          }
          l = S === -1 || C === -1 ? null : { start: S, end: C };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ml = { focusedElem: n, selectionRange: l }, wl = !1, de = r; de !== null; ) if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, de = n;
    else for (; de !== null; ) {
      r = de;
      try {
        var he = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (he !== null) {
              var Ee = he.memoizedProps, dn = he.memoizedState, b = r.stateNode, R = b.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : xa(r.type, Ee), dn);
              b.__reactInternalSnapshotBeforeUpdate = R;
            }
            break;
          case 3:
            var O = r.stateNode.containerInfo;
            O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(x(163));
        }
      } catch (Y) {
        Kt(r, r.return, Y);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, de = n;
        break;
      }
      de = r.return;
    }
    return he = Hv, Hv = !1, he;
  }
  function Go(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Oc(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Xo(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Mc(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Mc(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[xo], delete r[bo], delete r[xu], delete r[sy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ko(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Si(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ko(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function $a(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ii));
    else if (o !== 4 && (n = n.child, n !== null)) for ($a(n, r, l), n = n.sibling; n !== null; ) $a(n, r, l), n = n.sibling;
  }
  function Ya(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ya(n, r, l), n = n.sibling; n !== null; ) Ya(n, r, l), n = n.sibling;
  }
  var cn = null, ur = !1;
  function or(n, r, l) {
    for (l = l.child; l !== null; ) Vv(n, r, l), l = l.sibling;
  }
  function Vv(n, r, l) {
    if (Sa && typeof Sa.onCommitFiberUnmount == "function") try {
      Sa.onCommitFiberUnmount(oo, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        tr || Lu(l, r);
      case 6:
        var o = cn, c = ur;
        cn = null, or(n, r, l), cn = o, ur = c, cn !== null && (ur ? (n = cn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : cn.removeChild(l.stateNode));
        break;
      case 18:
        cn !== null && (ur ? (n = cn, l = l.stateNode, n.nodeType === 8 ? wu(n.parentNode, l) : n.nodeType === 1 && wu(n, l), Bi(n)) : wu(cn, l.stateNode));
        break;
      case 4:
        o = cn, c = ur, cn = l.stateNode.containerInfo, ur = !0, or(n, r, l), cn = o, ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Oc(l, r, h), c = c.next;
          } while (c !== o);
        }
        or(n, r, l);
        break;
      case 1:
        if (!tr && (Lu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (S) {
          Kt(l, r, S);
        }
        or(n, r, l);
        break;
      case 21:
        or(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (tr = (o = tr) || l.memoizedState !== null, or(n, r, l), tr = o) : or(n, r, l);
        break;
      default:
        or(n, r, l);
    }
  }
  function Bv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new fy()), r.forEach(function(o) {
        var c = Kv.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ba(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, h = r, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              cn = S.stateNode, ur = !1;
              break e;
            case 3:
              cn = S.stateNode.containerInfo, ur = !0;
              break e;
            case 4:
              cn = S.stateNode.containerInfo, ur = !0;
              break e;
          }
          S = S.return;
        }
        if (cn === null) throw Error(x(160));
        Vv(d, h, c), cn = null, ur = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (N) {
        Kt(c, r, N);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) wd(r, n), r = r.sibling;
  }
  function wd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ba(r, n), kr(n), o & 4) {
          try {
            Go(3, n, n.return), Xo(3, n);
          } catch (Ee) {
            Kt(n, n.return, Ee);
          }
          try {
            Go(5, n, n.return);
          } catch (Ee) {
            Kt(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ba(r, n), kr(n), o & 512 && l !== null && Lu(l, l.return);
        break;
      case 5:
        if (ba(r, n), kr(n), o & 512 && l !== null && Lu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            J(c, "");
          } catch (Ee) {
            Kt(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            S === "input" && d.type === "radio" && d.name != null && Gn(c, d), Jn(S, h);
            var N = Jn(S, d);
            for (h = 0; h < C.length; h += 2) {
              var $ = C[h], I = C[h + 1];
              $ === "style" ? Wt(c, I) : $ === "dangerouslySetInnerHTML" ? Ai(c, I) : $ === "children" ? J(c, I) : xe(c, $, I, N);
            }
            switch (S) {
              case "input":
                ei(c, d);
                break;
              case "textarea":
                Ui(c, d);
                break;
              case "select":
                var V = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ue = d.value;
                ue != null ? rr(c, !!d.multiple, ue, !1) : V !== !!d.multiple && (d.defaultValue != null ? rr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : rr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[xo] = d;
          } catch (Ee) {
            Kt(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ba(r, n), kr(n), o & 4) {
          if (n.stateNode === null) throw Error(x(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            Kt(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ba(r, n), kr(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Bi(r.containerInfo);
        } catch (Ee) {
          Kt(n, n.return, Ee);
        }
        break;
      case 4:
        ba(r, n), kr(n);
        break;
      case 13:
        ba(r, n), kr(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Dd = nt())), o & 4 && Bv(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (tr = (N = tr) || $, ba(r, n), tr = N) : ba(r, n), kr(n), o & 8192) {
          if (N = n.memoizedState !== null, (n.stateNode.isHidden = N) && !$ && (n.mode & 1) !== 0) for (de = n, $ = n.child; $ !== null; ) {
            for (I = de = $; de !== null; ) {
              switch (V = de, ue = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Go(4, V, V.return);
                  break;
                case 1:
                  Lu(V, V.return);
                  var he = V.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    o = V, l = V.return;
                    try {
                      r = o, he.props = r.memoizedProps, he.state = r.memoizedState, he.componentWillUnmount();
                    } catch (Ee) {
                      Kt(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  Lu(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Zo(I);
                    continue;
                  }
              }
              ue !== null ? (ue.return = V, de = ue) : Zo(I);
            }
            $ = $.sibling;
          }
          e: for ($ = null, I = n; ; ) {
            if (I.tag === 5) {
              if ($ === null) {
                $ = I;
                try {
                  c = I.stateNode, N ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = I.stateNode, C = I.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = kt("display", h));
                } catch (Ee) {
                  Kt(n, n.return, Ee);
                }
              }
            } else if (I.tag === 6) {
              if ($ === null) try {
                I.stateNode.nodeValue = N ? "" : I.memoizedProps;
              } catch (Ee) {
                Kt(n, n.return, Ee);
              }
            } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === n) && I.child !== null) {
              I.child.return = I, I = I.child;
              continue;
            }
            if (I === n) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === n) break e;
              $ === I && ($ = null), I = I.return;
            }
            $ === I && ($ = null), I.sibling.return = I.return, I = I.sibling;
          }
        }
        break;
      case 19:
        ba(r, n), kr(n), o & 4 && Bv(n);
        break;
      case 21:
        break;
      default:
        ba(
          r,
          n
        ), kr(n);
    }
  }
  function kr(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ko(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(x(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (J(c, ""), o.flags &= -33);
            var d = Si(n);
            Ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Si(n);
            $a(n, S, h);
            break;
          default:
            throw Error(x(161));
        }
      } catch (C) {
        Kt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function dy(n, r, l) {
    de = n, xd(n);
  }
  function xd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || qo;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || tr;
          S = qo;
          var N = tr;
          if (qo = h, (tr = C) && !N) for (de = c; de !== null; ) h = de, C = h.child, h.tag === 22 && h.memoizedState !== null ? bd(c) : C !== null ? (C.return = h, de = C) : bd(c);
          for (; d !== null; ) de = d, xd(d), d = d.sibling;
          de = c, qo = S, tr = N;
        }
        $v(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, de = d) : $v(n);
    }
  }
  function $v(n) {
    for (; de !== null; ) {
      var r = de;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              tr || Xo(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : xa(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && cd(r, d, o);
              break;
            case 3:
              var h = r.updateQueue;
              if (h !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                cd(r, h, l);
              }
              break;
            case 5:
              var S = r.stateNode;
              if (l === null && r.flags & 4) {
                l = S;
                var C = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && l.focus();
                    break;
                  case "img":
                    C.src && (l.src = C.src);
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
              if (r.memoizedState === null) {
                var N = r.alternate;
                if (N !== null) {
                  var $ = N.memoizedState;
                  if ($ !== null) {
                    var I = $.dehydrated;
                    I !== null && Bi(I);
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
              throw Error(x(163));
          }
          tr || r.flags & 512 && Rd(r);
        } catch (V) {
          Kt(r, r.return, V);
        }
      }
      if (r === n) {
        de = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Zo(n) {
    for (; de !== null; ) {
      var r = de;
      if (r === n) {
        de = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function bd(n) {
    for (; de !== null; ) {
      var r = de;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Xo(4, r);
            } catch (C) {
              Kt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Kt(r, c, C);
              }
            }
            var d = r.return;
            try {
              Rd(r);
            } catch (C) {
              Kt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Rd(r);
            } catch (C) {
              Kt(r, h, C);
            }
        }
      } catch (C) {
        Kt(r, r.return, C);
      }
      if (r === n) {
        de = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, de = S;
        break;
      }
      de = r.return;
    }
  }
  var py = Math.ceil, nl = Ye.ReactCurrentDispatcher, Wl = Ye.ReactCurrentOwner, Hn = Ye.ReactCurrentBatchConfig, ft = 0, kn = null, Rn = null, Pn = 0, Yr = 0, Nu = Ra(0), fn = 0, Jo = null, Ia = 0, zu = 0, Lc = 0, es = null, Or = null, Dd = 0, Uu = 1 / 0, Ir = null, Au = !1, ql = null, rl = null, Nc = !1, Ei = null, ts = 0, al = 0, ju = null, ns = -1, nr = 0;
  function wn() {
    return (ft & 6) !== 0 ? nt() : ns !== -1 ? ns : ns = nt();
  }
  function Qa(n) {
    return (n.mode & 1) === 0 ? 1 : (ft & 2) !== 0 && Pn !== 0 ? Pn & -Pn : cy.transition !== null ? (nr === 0 && (nr = bs()), nr) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Os(n.type)), n);
  }
  function sr(n, r, l, o) {
    if (50 < al) throw al = 0, ju = null, Error(x(185));
    Tl(n, l, o), ((ft & 2) === 0 || n !== kn) && (n === kn && ((ft & 2) === 0 && (zu |= l), fn === 4 && Da(n, Pn)), Mr(n, o), l === 1 && ft === 0 && (r.mode & 1) === 0 && (Uu = nt() + 500, Du && Fa()));
  }
  function Mr(n, r) {
    var l = n.callbackNode;
    Rf(n, r);
    var o = Cl(n, n === kn ? Pn : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? Wi(_d.bind(null, n)) : Js(_d.bind(null, n)), Ru(function() {
        (ft & 6) === 0 && Fa();
      }), l = null;
      else {
        switch (bf(o)) {
          case 1:
            l = ui;
            break;
          case 4:
            l = lo;
            break;
          case 16:
            l = uo;
            break;
          case 536870912:
            l = Cf;
            break;
          default:
            l = uo;
        }
        l = Jv(l, zc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function zc(n, r) {
    if (ns = -1, nr = 0, (ft & 6) !== 0) throw Error(x(327));
    var l = n.callbackNode;
    if (Fu() && n.callbackNode !== l) return null;
    var o = Cl(n, n === kn ? Pn : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = Uc(n, o);
    else {
      r = o;
      var c = ft;
      ft |= 2;
      var d = Iv();
      (kn !== n || Pn !== r) && (Ir = null, Uu = nt() + 500, Ci(n, r));
      do
        try {
          Qv();
          break;
        } catch (S) {
          Yv(n, S);
        }
      while (!0);
      ad(), nl.current = d, ft = c, Rn !== null ? r = 0 : (kn = null, Pn = 0, r = fn);
    }
    if (r !== 0) {
      if (r === 2 && (c = wf(n), c !== 0 && (o = c, r = rs(n, c))), r === 1) throw l = Jo, Ci(n, 0), Da(n, o), Mr(n, nt()), l;
      if (r === 6) Da(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !vy(c) && (r = Uc(n, o), r === 2 && (d = wf(n), d !== 0 && (o = d, r = rs(n, d))), r === 1)) throw l = Jo, Ci(n, 0), Da(n, o), Mr(n, nt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(x(345));
          case 2:
            Kl(n, Or, Ir);
            break;
          case 3:
            if (Da(n, o), (o & 130023424) === o && (r = Dd + 500 - nt(), 10 < r)) {
              if (Cl(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Xs(Kl.bind(null, n, Or, Ir), r);
              break;
            }
            Kl(n, Or, Ir);
            break;
          case 4:
            if (Da(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Zr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = nt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * py(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Xs(Kl.bind(null, n, Or, Ir), o);
              break;
            }
            Kl(n, Or, Ir);
            break;
          case 5:
            Kl(n, Or, Ir);
            break;
          default:
            throw Error(x(329));
        }
      }
    }
    return Mr(n, nt()), n.callbackNode === l ? zc.bind(null, n) : null;
  }
  function rs(n, r) {
    var l = es;
    return n.current.memoizedState.isDehydrated && (Ci(n, r).flags |= 256), n = Uc(n, r), n !== 2 && (r = Or, Or = l, r !== null && Gl(r)), n;
  }
  function Gl(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function vy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ca(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Da(n, r) {
    for (r &= ~Lc, r &= ~zu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Zr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function _d(n) {
    if ((ft & 6) !== 0) throw Error(x(327));
    Fu();
    var r = Cl(n, 0);
    if ((r & 1) === 0) return Mr(n, nt()), null;
    var l = Uc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = wf(n);
      o !== 0 && (r = o, l = rs(n, o));
    }
    if (l === 1) throw l = Jo, Ci(n, 0), Da(n, r), Mr(n, nt()), l;
    if (l === 6) throw Error(x(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Kl(n, Or, Ir), Mr(n, nt()), null;
  }
  function kd(n, r) {
    var l = ft;
    ft |= 1;
    try {
      return n(r);
    } finally {
      ft = l, ft === 0 && (Uu = nt() + 500, Du && Fa());
    }
  }
  function Xl(n) {
    Ei !== null && Ei.tag === 0 && (ft & 6) === 0 && Fu();
    var r = ft;
    ft |= 1;
    var l = Hn.transition, o = Ot;
    try {
      if (Hn.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = o, Hn.transition = l, ft = r, (ft & 6) === 0 && Fa();
    }
  }
  function Od() {
    Yr = Nu.current, Vt(Nu);
  }
  function Ci(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Jf(l)), Rn !== null) for (l = Rn.return; l !== null; ) {
      var o = l;
      switch (tc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && bu();
          break;
        case 3:
          Fl(), Vt(Dn), Vt(an), _e();
          break;
        case 5:
          ic(o);
          break;
        case 4:
          Fl();
          break;
        case 13:
          Vt(en);
          break;
        case 19:
          Vt(en);
          break;
        case 10:
          id(o.type._context);
          break;
        case 22:
        case 23:
          Od();
      }
      l = l.return;
    }
    if (kn = n, Rn = n = il(n.current, null), Pn = Yr = r, fn = 0, Jo = null, Lc = zu = Ia = 0, Or = es = null, Al !== null) {
      for (r = 0; r < Al.length; r++) if (l = Al[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        l.pending = o;
      }
      Al = null;
    }
    return n;
  }
  function Yv(n, r) {
    do {
      var l = Rn;
      try {
        if (ad(), at.current = Yl, uc) {
          for (var o = Ct.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          uc = !1;
        }
        if (Lt = 0, Mn = En = Ct = null, zo = !1, Hl = 0, Wl.current = null, l === null || l.return === null) {
          fn = 1, Jo = r, Rn = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Pn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var N = C, $ = S, I = $.tag;
            if (($.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var V = $.alternate;
              V ? ($.updateQueue = V.updateQueue, $.memoizedState = V.memoizedState, $.lanes = V.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var ue = Mv(h);
            if (ue !== null) {
              ue.flags &= -257, tl(ue, h, S, d, r), ue.mode & 1 && gd(d, N, r), r = ue, C = N;
              var he = r.updateQueue;
              if (he === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(C), r.updateQueue = Ee;
              } else he.add(C);
              break e;
            } else {
              if ((r & 1) === 0) {
                gd(d, N, r), Md();
                break e;
              }
              C = Error(x(426));
            }
          } else if (Xt && S.mode & 1) {
            var dn = Mv(h);
            if (dn !== null) {
              (dn.flags & 65536) === 0 && (dn.flags |= 256), tl(dn, h, S, d, r), mi(Il(C, S));
              break e;
            }
          }
          d = C = Il(C, S), fn !== 4 && (fn = 2), es === null ? es = [d] : es.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var b = Ov(d, C, r);
                xv(d, b);
                break e;
              case 1:
                S = C;
                var R = d.type, O = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (rl === null || !rl.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Y = yd(d, S, r);
                  xv(d, Y);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        qv(l);
      } catch (me) {
        r = me, Rn === l && l !== null && (Rn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Iv() {
    var n = nl.current;
    return nl.current = Yl, n === null ? Yl : n;
  }
  function Md() {
    (fn === 0 || fn === 3 || fn === 2) && (fn = 4), kn === null || (Ia & 268435455) === 0 && (zu & 268435455) === 0 || Da(kn, Pn);
  }
  function Uc(n, r) {
    var l = ft;
    ft |= 2;
    var o = Iv();
    (kn !== n || Pn !== r) && (Ir = null, Ci(n, r));
    do
      try {
        hy();
        break;
      } catch (c) {
        Yv(n, c);
      }
    while (!0);
    if (ad(), ft = l, nl.current = o, Rn !== null) throw Error(x(261));
    return kn = null, Pn = 0, fn;
  }
  function hy() {
    for (; Rn !== null; ) Wv(Rn);
  }
  function Qv() {
    for (; Rn !== null && !ii(); ) Wv(Rn);
  }
  function Wv(n) {
    var r = Zv(n.alternate, n, Yr);
    n.memoizedProps = n.pendingProps, r === null ? qv(n) : Rn = r, Wl.current = null;
  }
  function qv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = Fv(l, r, Yr), l !== null) {
          Rn = l;
          return;
        }
      } else {
        if (l = kc(l, r), l !== null) {
          l.flags &= 32767, Rn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          fn = 6, Rn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Rn = r;
        return;
      }
      Rn = r = n;
    } while (r !== null);
    fn === 0 && (fn = 5);
  }
  function Kl(n, r, l) {
    var o = Ot, c = Hn.transition;
    try {
      Hn.transition = null, Ot = 1, my(n, r, l, o);
    } finally {
      Hn.transition = c, Ot = o;
    }
    return null;
  }
  function my(n, r, l, o) {
    do
      Fu();
    while (Ei !== null);
    if ((ft & 6) !== 0) throw Error(x(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(x(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Im(n, d), n === kn && (Rn = kn = null, Pn = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Nc || (Nc = !0, Jv(uo, function() {
      return Fu(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = Hn.transition, Hn.transition = null;
      var h = Ot;
      Ot = 1;
      var S = ft;
      ft |= 4, Wl.current = null, Pv(n, l), wd(l, n), Su(Ml), wl = !!wo, Ml = wo = null, n.current = l, dy(l), li(), ft = S, Ot = h, Hn.transition = d;
    } else n.current = l;
    if (Nc && (Nc = !1, Ei = n, ts = c), d = n.pendingLanes, d === 0 && (rl = null), Vp(l.stateNode), Mr(n, nt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Au) throw Au = !1, n = ql, ql = null, n;
    return (ts & 1) !== 0 && n.tag !== 0 && Fu(), d = n.pendingLanes, (d & 1) !== 0 ? n === ju ? al++ : (al = 0, ju = n) : al = 0, Fa(), null;
  }
  function Fu() {
    if (Ei !== null) {
      var n = bf(ts), r = Hn.transition, l = Ot;
      try {
        if (Hn.transition = null, Ot = 16 > n ? 16 : n, Ei === null) var o = !1;
        else {
          if (n = Ei, Ei = null, ts = 0, (ft & 6) !== 0) throw Error(x(331));
          var c = ft;
          for (ft |= 4, de = n.current; de !== null; ) {
            var d = de, h = d.child;
            if ((de.flags & 16) !== 0) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var N = S[C];
                  for (de = N; de !== null; ) {
                    var $ = de;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Go(8, $, d);
                    }
                    var I = $.child;
                    if (I !== null) I.return = $, de = I;
                    else for (; de !== null; ) {
                      $ = de;
                      var V = $.sibling, ue = $.return;
                      if (Mc($), $ === N) {
                        de = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = ue, de = V;
                        break;
                      }
                      de = ue;
                    }
                  }
                }
                var he = d.alternate;
                if (he !== null) {
                  var Ee = he.child;
                  if (Ee !== null) {
                    he.child = null;
                    do {
                      var dn = Ee.sibling;
                      Ee.sibling = null, Ee = dn;
                    } while (Ee !== null);
                  }
                }
                de = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && h !== null) h.return = d, de = h;
            else e: for (; de !== null; ) {
              if (d = de, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Go(9, d, d.return);
              }
              var b = d.sibling;
              if (b !== null) {
                b.return = d.return, de = b;
                break e;
              }
              de = d.return;
            }
          }
          var R = n.current;
          for (de = R; de !== null; ) {
            h = de;
            var O = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && O !== null) O.return = h, de = O;
            else e: for (h = R; de !== null; ) {
              if (S = de, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xo(9, S);
                }
              } catch (me) {
                Kt(S, S.return, me);
              }
              if (S === h) {
                de = null;
                break e;
              }
              var Y = S.sibling;
              if (Y !== null) {
                Y.return = S.return, de = Y;
                break e;
              }
              de = S.return;
            }
          }
          if (ft = c, Fa(), Sa && typeof Sa.onPostCommitFiberRoot == "function") try {
            Sa.onPostCommitFiberRoot(oo, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ot = l, Hn.transition = r;
      }
    }
    return !1;
  }
  function Gv(n, r, l) {
    r = Il(l, r), r = Ov(n, r, 1), n = Zi(n, r, 1), r = wn(), n !== null && (Tl(n, 1, r), Mr(n, r));
  }
  function Kt(n, r, l) {
    if (n.tag === 3) Gv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Gv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (rl === null || !rl.has(o))) {
          n = Il(l, n), n = yd(r, n, 1), r = Zi(r, n, 1), n = wn(), r !== null && (Tl(r, 1, n), Mr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function yy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = wn(), n.pingedLanes |= n.suspendedLanes & l, kn === n && (Pn & l) === l && (fn === 4 || fn === 3 && (Pn & 130023424) === Pn && 500 > nt() - Dd ? Ci(n, 0) : Lc |= l), Mr(n, r);
  }
  function Xv(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ea, Ea <<= 1, (Ea & 130023424) === 0 && (Ea = 4194304)));
    var l = wn();
    n = Vr(n, r), n !== null && (Tl(n, r, l), Mr(n, l));
  }
  function gy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Xv(n, l);
  }
  function Kv(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(x(314));
    }
    o !== null && o.delete(r), Xv(n, l);
  }
  var Zv;
  Zv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Dn.current) Cn = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Cn = !1, Qo(n, r, l);
      Cn = (n.flags & 131072) !== 0;
    }
    else Cn = !1, Xt && (r.flags & 1048576) !== 0 && Cv(r, hi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ua(n, r), n = r.pendingProps;
        var c = ra(r, an.current);
        Jt(r, l), c = Ji(null, r, o, n, c, l);
        var d = wa();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, gn(o) ? (d = !0, wr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, sd(r), c.updater = wc, r.stateNode = c, c._reactInternals = r, Vo(r, o, n, l), r = Yo(null, r, o, !0, d, l)) : (r.tag = 0, Xt && d && ec(r), Fn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ey(o), n = xa(o, n), c) {
            case 0:
              r = Lv(null, r, o, n, l);
              break e;
            case 1:
              r = Nv(null, r, o, n, l);
              break e;
            case 11:
              r = _r(null, r, o, n, l);
              break e;
            case 14:
              r = Ql(null, r, o, xa(o.type, n), l);
              break e;
          }
          throw Error(x(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xa(o, c), Lv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xa(o, c), Nv(n, r, o, c, l);
      case 3:
        e: {
          if (Mu(r), n === null) throw Error(x(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, wv(n, r), ko(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Il(Error(x(423)), r), r = zv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Il(Error(x(424)), r), r = zv(n, r, o, l, c);
            break e;
          } else for (br = Ua(r.stateNode.containerInfo.firstChild), xr = r, Xt = !0, ia = null, l = re(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ki(), o === c) {
              r = oa(n, r, l);
              break e;
            }
            Fn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bv(r), n === null && nd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Gs(o, c) ? h = null : d !== null && Gs(o, d) && (r.flags |= 32), Sd(n, r), Fn(n, r, h, l), r.child;
      case 6:
        return n === null && nd(r), null;
      case 13:
        return _c(n, r, l);
      case 4:
        return fd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = on(r, null, o, l) : Fn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xa(o, c), _r(n, r, o, c, l);
      case 7:
        return Fn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Fn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Fn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, we(Pr, o._currentValue), o._currentValue = h, d !== null) if (Ca(d.value, h)) {
            if (d.children === c.children && !Dn.current) {
              r = oa(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var S = d.dependencies;
            if (S !== null) {
              h = d.child;
              for (var C = S.firstContext; C !== null; ) {
                if (C.context === o) {
                  if (d.tag === 1) {
                    C = yi(-1, l & -l), C.tag = 2;
                    var N = d.updateQueue;
                    if (N !== null) {
                      N = N.shared;
                      var $ = N.pending;
                      $ === null ? C.next = C : (C.next = $.next, $.next = C), N.pending = C;
                    }
                  }
                  d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), ld(
                    d.return,
                    l,
                    r
                  ), S.lanes |= l;
                  break;
                }
                C = C.next;
              }
            } else if (d.tag === 10) h = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (h = d.return, h === null) throw Error(x(341));
              h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), ld(h, l, r), h = d.sibling;
            } else h = d.child;
            if (h !== null) h.return = d;
            else for (h = d; h !== null; ) {
              if (h === r) {
                h = null;
                break;
              }
              if (d = h.sibling, d !== null) {
                d.return = h.return, h = d;
                break;
              }
              h = h.return;
            }
            d = h;
          }
          Fn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Jt(r, l), c = la(c), o = o(c), r.flags |= 1, Fn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = xa(o, r.pendingProps), c = xa(o.type, c), Ql(n, r, o, c, l);
      case 15:
        return Je(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : xa(o, c), ua(n, r), r.tag = 1, gn(o) ? (n = !0, wr(r)) : n = !1, Jt(r, l), xc(r, o, c), Vo(r, o, c, l), Yo(null, r, o, !0, n, l);
      case 19:
        return Ba(n, r, l);
      case 22:
        return $o(n, r, l);
    }
    throw Error(x(156, r.tag));
  };
  function Jv(n, r) {
    return Zt(n, r);
  }
  function Sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ca(n, r, l, o) {
    return new Sy(n, r, l, o);
  }
  function Ld(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ey(n) {
    if (typeof n == "function") return Ld(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === St) return 11;
      if (n === Bt) return 14;
    }
    return 2;
  }
  function il(n, r) {
    var l = n.alternate;
    return l === null ? (l = ca(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function as(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Ld(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case Ge:
        return Ti(l.children, c, d, r);
      case ln:
        h = 8, c |= 8;
        break;
      case _t:
        return n = ca(12, l, r, c | 2), n.elementType = _t, n.lanes = d, n;
      case Ue:
        return n = ca(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
      case xt:
        return n = ca(19, l, r, c), n.elementType = xt, n.lanes = d, n;
      case vn:
        return ll(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Qt:
            h = 10;
            break e;
          case Ht:
            h = 9;
            break e;
          case St:
            h = 11;
            break e;
          case Bt:
            h = 14;
            break e;
          case vt:
            h = 16, o = null;
            break e;
        }
        throw Error(x(130, n == null ? n : typeof n, ""));
    }
    return r = ca(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ti(n, r, l, o) {
    return n = ca(7, n, o, r), n.lanes = l, n;
  }
  function ll(n, r, l, o) {
    return n = ca(22, n, o, r), n.elementType = vn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Nd(n, r, l) {
    return n = ca(6, n, null, r), n.lanes = l, n;
  }
  function Ac(n, r, l) {
    return r = ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function eh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xf(0), this.expirationTimes = xf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function jc(n, r, l, o, c, d, h, S, C) {
    return n = new eh(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ca(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, sd(d), n;
  }
  function Cy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ht, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function zd(n) {
    if (!n) return Tr;
    n = n._reactInternals;
    e: {
      if (tt(n) !== n || n.tag !== 1) throw Error(x(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (gn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(x(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (gn(l)) return Do(n, l, r);
    }
    return r;
  }
  function th(n, r, l, o, c, d, h, S, C) {
    return n = jc(l, o, !0, n, c, d, h, S, C), n.context = zd(null), l = n.current, o = wn(), c = Qa(l), d = yi(o, c), d.callback = r ?? null, Zi(l, d, c), n.current.lanes = c, Tl(n, c, o), Mr(n, o), n;
  }
  function Fc(n, r, l, o) {
    var c = r.current, d = wn(), h = Qa(c);
    return l = zd(l), r.context === null ? r.context = l : r.pendingContext = l, r = yi(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Zi(c, r, h), n !== null && (sr(n, c, h, d), ac(n, c, h)), h;
  }
  function Hc(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ud(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Pc(n, r) {
    Ud(n, r), (n = n.alternate) && Ud(n, r);
  }
  function nh() {
    return null;
  }
  var Zl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ad(n) {
    this._internalRoot = n;
  }
  Vc.prototype.render = Ad.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(x(409));
    Fc(n, r, null, null);
  }, Vc.prototype.unmount = Ad.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xl(function() {
        Fc(null, n, null, null);
      }), r[pi] = null;
    }
  };
  function Vc(n) {
    this._internalRoot = n;
  }
  Vc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ze();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Un.length && r !== 0 && r < Un[l].priority; l++) ;
      Un.splice(l, 0, n), l === 0 && Mf(n);
    }
  };
  function jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Bc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function rh() {
  }
  function Ty(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var N = Hc(h);
          d.call(N);
        };
      }
      var h = th(r, o, n, 0, null, !1, !1, "", rh);
      return n._reactRootContainer = h, n[pi] = h.current, Cu(n.nodeType === 8 ? n.parentNode : n), Xl(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var N = Hc(C);
        S.call(N);
      };
    }
    var C = jc(n, 0, !1, null, null, !1, !1, "", rh);
    return n._reactRootContainer = C, n[pi] = C.current, Cu(n.nodeType === 8 ? n.parentNode : n), Xl(function() {
      Fc(r, C, l, o);
    }), C;
  }
  function is(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = Hc(h);
          S.call(C);
        };
      }
      Fc(r, h, n, c);
    } else h = Ty(l, r, n, c, o);
    return Hc(h);
  }
  Mt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = El(r.pendingLanes);
          l !== 0 && (Ds(r, l | 1), Mr(r, nt()), (ft & 6) === 0 && (Uu = nt() + 500, Fa()));
        }
        break;
      case 13:
        Xl(function() {
          var o = Vr(n, 1);
          if (o !== null) {
            var c = wn();
            sr(o, n, 1, c);
          }
        }), Pc(n, 1);
    }
  }, Df = function(n) {
    if (n.tag === 13) {
      var r = Vr(n, 134217728);
      if (r !== null) {
        var l = wn();
        sr(r, n, 134217728, l);
      }
      Pc(n, 134217728);
    }
  }, _f = function(n) {
    if (n.tag === 13) {
      var r = Qa(n), l = Vr(n, r);
      if (l !== null) {
        var o = wn();
        sr(l, n, r, o);
      }
      Pc(n, r);
    }
  }, Ze = function() {
    return Ot;
  }, kf = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, Pt = function(n, r, l) {
    switch (r) {
      case "input":
        if (ei(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = un(o);
              if (!c) throw Error(x(90));
              Z(o), ei(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ui(n, l);
        break;
      case "select":
        r = l.value, r != null && rr(n, !!l.multiple, r, !1);
    }
  }, ao = kd, fu = Xl;
  var Ry = { usingClientEntryPoint: !1, Events: [De, Ta, un, xs, ro, kd] }, ls = { findFiberByHostInstance: Ll, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ah = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = bn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ls.findFiberByHostInstance || nh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ul.isDisabled && ul.supportsFiber) try {
      oo = ul.inject(ah), Sa = ul;
    } catch {
    }
  }
  return ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, ma.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!jd(r)) throw Error(x(200));
    return Cy(n, r, null, l);
  }, ma.createRoot = function(n, r) {
    if (!jd(n)) throw Error(x(299));
    var l = !1, o = "", c = Zl;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = jc(n, 1, !1, null, null, l, !1, o, c), n[pi] = r.current, Cu(n.nodeType === 8 ? n.parentNode : n), new Ad(r);
  }, ma.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(x(188)) : (n = Object.keys(n).join(","), Error(x(268, n)));
    return n = bn(r), n = n === null ? null : n.stateNode, n;
  }, ma.flushSync = function(n) {
    return Xl(n);
  }, ma.hydrate = function(n, r, l) {
    if (!Bc(r)) throw Error(x(200));
    return is(null, n, r, !0, l);
  }, ma.hydrateRoot = function(n, r, l) {
    if (!jd(n)) throw Error(x(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Zl;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = th(r, null, n, 1, l ?? null, c, !1, d, h), n[pi] = r.current, Cu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Vc(r);
  }, ma.render = function(n, r, l) {
    if (!Bc(r)) throw Error(x(200));
    return is(null, n, r, !1, l);
  }, ma.unmountComponentAtNode = function(n) {
    if (!Bc(n)) throw Error(x(40));
    return n._reactRootContainer ? (Xl(function() {
      is(null, null, n, !1, function() {
        n._reactRootContainer = null, n[pi] = null;
      });
    }), !0) : !1;
  }, ma.unstable_batchedUpdates = kd, ma.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Bc(l)) throw Error(x(200));
    if (n == null || n._reactInternals === void 0) throw Error(x(38));
    return is(n, r, l, !1, o);
  }, ma.version = "18.3.1-next-f1338f8080-20240426", ma;
}
var ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dR;
function b_() {
  return dR || (dR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var L = Vm, ee = _R(), x = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = !1;
    function Se(e) {
      ve = e;
    }
    function fe(e) {
      if (!ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ge("warn", e, a);
      }
    }
    function y(e) {
      if (!ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ge("error", e, a);
      }
    }
    function ge(e, t, a) {
      {
        var i = x.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var G = 0, q = 1, se = 2, H = 3, te = 4, X = 5, Me = 6, Ne = 7, qe = 8, gt = 9, ut = 10, xe = 11, Ye = 12, P = 13, ht = 14, Ge = 15, ln = 16, _t = 17, Qt = 18, Ht = 19, St = 21, Ue = 22, xt = 23, Bt = 24, vt = 25, vn = !0, K = !1, Re = !1, k = !1, W = !1, pe = !0, Fe = !0, Te = !0, et = !0, be = /* @__PURE__ */ new Set(), ke = {}, Pe = {};
    function Xe(e, t) {
      Ie(e, t), Ie(e + "Capture", t);
    }
    function Ie(e, t) {
      ke[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ke[e] = t;
      {
        var a = e.toLowerCase();
        Pe[a] = e, e === "onDoubleClick" && (Pe.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        be.add(t[i]);
    }
    var mt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Z = Object.prototype.hasOwnProperty;
    function jt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function hn(e) {
      try {
        return mn(e), !1;
      } catch {
        return !0;
      }
    }
    function mn(e) {
      return "" + e;
    }
    function Gn(e, t) {
      if (hn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), mn(e);
    }
    function ei(e) {
      if (hn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jt(e)), mn(e);
    }
    function zi(e, t) {
      if (hn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), mn(e);
    }
    function Ma(e, t) {
      if (hn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jt(e)), mn(e);
    }
    function ti(e) {
      if (hn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jt(e)), mn(e);
    }
    function rr(e) {
      if (hn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jt(e)), mn(e);
    }
    var Xn = 0, jr = 1, Ui = 2, Kn = 3, Fr = 4, La = 5, ni = 6, Ai = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = Ai + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + Ai + "][" + J + "]*$"), it = {}, kt = {};
    function Wt(e) {
      return Z.call(kt, e) ? !0 : Z.call(it, e) ? !1 : Oe.test(e) ? (kt[e] = !0, !0) : (it[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Zn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function nn(e, t, a, i) {
      if (a !== null && a.type === Xn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jn(e, t, a, i) {
      if (t === null || typeof t > "u" || nn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Kn:
            return !t;
          case Fr:
            return t === !1;
          case La:
            return isNaN(t);
          case ni:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function qt(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ui || t === Kn || t === Fr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, Na = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Na.forEach(function(e) {
      Pt[e] = new $t(
        e,
        Xn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Pt[t] = new $t(
        t,
        jr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Pt[e] = new $t(
        e,
        Ui,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Pt[e] = new $t(
        e,
        Ui,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Pt[e] = new $t(
        e,
        Kn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new $t(
        e,
        Kn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new $t(
        e,
        Fr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new $t(
        e,
        ni,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Pt[e] = new $t(
        e,
        La,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Kr = /[\-\:]([a-z])/g, Sl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Kr, Sl);
      Pt[t] = new $t(
        t,
        jr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Kr, Sl);
      Pt[t] = new $t(
        t,
        jr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Kr, Sl);
      Pt[t] = new $t(
        t,
        jr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new $t(
        e,
        jr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xs = "xlinkHref";
    Pt[xs] = new $t(
      "xlinkHref",
      jr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new $t(
        e,
        jr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ro = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ao = !1;
    function fu(e) {
      !ao && ro.test(e) && (ao = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function du(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Gn(a, t), i.sanitizeURL && fu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Fr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Jn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Jn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Kn)
            return a;
          f = e.getAttribute(s);
        }
        return Jn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function io(e, t, a, i) {
      {
        if (!Wt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Gn(a, t), u === "" + a ? a : u;
      }
    }
    function ri(e, t, a, i) {
      var u = qt(t);
      if (!Zn(t, u, i)) {
        if (Jn(t, a, u, i) && (a = null), i || u === null) {
          if (Wt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Gn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Kn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var w = u.type, T;
          w === Kn || w === Fr && a === !0 ? T = "" : (Gn(a, m), T = "" + a, u.sanitizeURL && fu(T.toString())), g ? e.setAttributeNS(g, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var ga = Symbol.for("react.element"), Sr = Symbol.for("react.portal"), ji = Symbol.for("react.fragment"), ai = Symbol.for("react.strict_mode"), Fi = Symbol.for("react.profiler"), Hi = Symbol.for("react.provider"), E = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), He = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), ot = Symbol.for("react.scope"), lt = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), Gt = Symbol.for("react.legacy_hidden"), Zt = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), ii = Symbol.iterator, li = "@@iterator";
    function nt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ii && e[ii] || e[li];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, ui = 0, lo, uo, Pp, Cf, oo, Sa, Vp;
    function Zr() {
    }
    Zr.__reactDisabledLog = !0;
    function Bm() {
      {
        if (ui === 0) {
          lo = console.log, uo = console.info, Pp = console.warn, Cf = console.error, oo = console.group, Sa = console.groupCollapsed, Vp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Zr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ui++;
      }
    }
    function $m() {
      {
        if (ui--, ui === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: lo
            }),
            info: rt({}, e, {
              value: uo
            }),
            warn: rt({}, e, {
              value: Pp
            }),
            error: rt({}, e, {
              value: Cf
            }),
            group: rt({}, e, {
              value: oo
            }),
            groupCollapsed: rt({}, e, {
              value: Sa
            }),
            groupEnd: rt({}, e, {
              value: Vp
            })
          });
        }
        ui < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tf = x.ReactCurrentDispatcher, pu;
    function Ea(e, t, a) {
      {
        if (pu === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            pu = i && i[1] || "";
          }
        return `
` + pu + e;
      }
    }
    var El = !1, Cl;
    {
      var Ym = typeof WeakMap == "function" ? WeakMap : Map;
      Cl = new Ym();
    }
    function Rf(e, t) {
      if (!e || El)
        return "";
      {
        var a = Cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      El = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Tf.current, Tf.current = null, Bm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, g = v.length - 1; m >= 1 && g >= 0 && p[m] !== v[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (p[m] !== v[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || p[m] !== v[g]) {
                    var w = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Cl.set(e, w), w;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        El = !1, Tf.current = s, $m(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", M = T ? Ea(T) : "";
      return typeof e == "function" && Cl.set(e, M), M;
    }
    function wf(e, t, a) {
      return Rf(e, !0);
    }
    function bs(e, t, a) {
      return Rf(e, !1);
    }
    function xf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Tl(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Rf(e, xf(e));
      if (typeof e == "string")
        return Ea(e);
      switch (e) {
        case ie:
          return Ea("Suspense");
        case He:
          return Ea("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return bs(e.render);
          case tt:
            return Tl(e.type, t, a);
          case Ke: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Tl(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Im(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case X:
          return Ea(e.type);
        case ln:
          return Ea("Lazy");
        case P:
          return Ea("Suspense");
        case Ht:
          return Ea("SuspenseList");
        case G:
        case se:
        case Ge:
          return bs(e.type);
        case xe:
          return bs(e.type.render);
        case q:
          return wf(e.type);
        default:
          return "";
      }
    }
    function Ds(e) {
      try {
        var t = "", a = e;
        do
          t += Im(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ot(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function bf(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ji:
          return "Fragment";
        case Sr:
          return "Portal";
        case Fi:
          return "Profiler";
        case ai:
          return "StrictMode";
        case ie:
          return "Suspense";
        case He:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return bf(t) + ".Consumer";
          case Hi:
            var a = e;
            return bf(a._context) + ".Provider";
          case B:
            return Ot(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case Ke: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Df(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function _f(e) {
      return e.displayName || "Context";
    }
    function Ze(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Bt:
          return "Cache";
        case gt:
          var i = a;
          return _f(i) + ".Consumer";
        case ut:
          var u = a;
          return _f(u._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case xe:
          return Df(a, a.render, "ForwardRef");
        case Ne:
          return "Fragment";
        case X:
          return a;
        case te:
          return "Portal";
        case H:
          return "Root";
        case Me:
          return "Text";
        case ln:
          return Mt(a);
        case qe:
          return a === ai ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case Ye:
          return "Profiler";
        case St:
          return "Scope";
        case P:
          return "Suspense";
        case Ht:
          return "SuspenseList";
        case vt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case q:
        case G:
        case _t:
        case se:
        case ht:
        case Ge:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var kf = x.ReactDebugCurrentFrame, ir = null, Pi = !1;
    function Jr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Ze(e);
      }
      return null;
    }
    function Vi() {
      return ir === null ? "" : Ds(ir);
    }
    function rn() {
      kf.getCurrentStack = null, ir = null, Pi = !1;
    }
    function Yt(e) {
      kf.getCurrentStack = e === null ? null : Vi, ir = e, Pi = !1;
    }
    function so() {
      return ir;
    }
    function Un(e) {
      Pi = e;
    }
    function ea(e) {
      return "" + e;
    }
    function oi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return rr(e), e;
        default:
          return "";
      }
    }
    var co = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Of(e, t) {
      co[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Mf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fo(e) {
      return e._valueTracker;
    }
    function Bp(e) {
      e._valueTracker = null;
    }
    function Qm(e) {
      var t = "";
      return e && (Mf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function po(e) {
      var t = Mf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      rr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            rr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            rr(p), i = "" + p;
          },
          stopTracking: function() {
            Bp(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Bi(e) {
      fo(e) || (e._valueTracker = po(e));
    }
    function Rl(e) {
      if (!e)
        return !1;
      var t = fo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qm(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var $p = !1, Yp = !1, _s = !1, vo = !1;
    function ks(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Os(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function si(e, t) {
      Of("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Yp && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component", t.type), Yp = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$p && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component", t.type), $p = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: oi(t.value != null ? t.value : i),
        controlled: ks(t)
      };
    }
    function Ms(e, t) {
      var a = e, i = t.checked;
      i != null && ri(a, "checked", i, !1);
    }
    function vu(e, t) {
      var a = e;
      {
        var i = ks(t);
        !a._wrapperState.controlled && i && !vo && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vo = !0), a._wrapperState.controlled && !i && !_s && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _s = !0);
      }
      Ms(e, t);
      var u = oi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = ea(u)) : a.value !== ea(u) && (a.value = ea(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? zs(a, t.type, u) : t.hasOwnProperty("defaultValue") && zs(a, t.type, oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Lf(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = ea(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ls(e, t) {
      var a = e;
      vu(a, t), Ns(a, t);
    }
    function Ns(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Rl(f), vu(f, p);
          }
        }
      }
    }
    function zs(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ea(e._wrapperState.initialValue) : e.defaultValue !== ea(a) && (e.defaultValue = ea(a)));
    }
    var Er = !1, xl = !1, Us = !1;
    function hu(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? L.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xl || (xl = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Us || (Us = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Er && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Er = !0);
    }
    function Wm(e, t) {
      t.value != null && e.setAttribute("value", ea(oi(t.value)));
    }
    var Nf = Array.isArray;
    function An(e) {
      return Nf(e);
    }
    var bl;
    bl = !1;
    function ho() {
      var e = Jr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var zf = ["value", "defaultValue"];
    function qm(e) {
      {
        Of("select", e);
        for (var t = 0; t < zf.length; t++) {
          var a = zf[t];
          if (e[a] != null) {
            var i = An(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ho()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ho());
          }
        }
      }
    }
    function mu(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = ea(oi(a)), w = null, T = 0; T < u.length; T++) {
          if (u[T].value === g) {
            u[T].selected = !0, i && (u[T].defaultSelected = !0);
            return;
          }
          w === null && !u[T].disabled && (w = u[T]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function Uf(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function As(e, t) {
      var a = e;
      qm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bl && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bl = !0);
    }
    function Gm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? mu(a, !!t.multiple, i, !1) : t.defaultValue != null && mu(a, !!t.multiple, t.defaultValue, !0);
    }
    function Xm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? mu(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? mu(a, !!t.multiple, t.defaultValue, !0) : mu(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Km(e, t) {
      var a = e, i = t.value;
      i != null && mu(a, !!t.multiple, i, !1);
    }
    var Ip = !1;
    function Af(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ea(a._wrapperState.initialValue)
      });
      return i;
    }
    function jf(e, t) {
      var a = e;
      Of("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ip && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component"), Ip = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (An(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: oi(i)
      };
    }
    function Qp(e, t) {
      var a = e, i = oi(t.value), u = oi(t.defaultValue);
      if (i != null) {
        var s = ea(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = ea(u));
    }
    function Wp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Zm(e, t) {
      Qp(e, t);
    }
    var ci = "http://www.w3.org/1999/xhtml", Ff = "http://www.w3.org/1998/Math/MathML", Hf = "http://www.w3.org/2000/svg";
    function Pf(e) {
      switch (e) {
        case "svg":
          return Hf;
        case "math":
          return Ff;
        default:
          return ci;
      }
    }
    function Vf(e, t) {
      return e == null || e === ci ? Pf(t) : e === Hf && t === "foreignObject" ? ci : e;
    }
    var qp = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, js, Gp = qp(function(e, t) {
      if (e.namespaceURI === Hf && !("innerHTML" in e)) {
        js = js || document.createElement("div"), js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = js.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Cr = 1, fi = 3, yn = 8, di = 9, Bf = 11, yu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === fi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, mo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, yo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Xp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Kp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(yo).forEach(function(e) {
      Kp.forEach(function(t) {
        yo[Xp(t, e)] = yo[e];
      });
    });
    function Fs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(yo.hasOwnProperty(e) && yo[e]) ? t + "px" : (Ma(t, e), ("" + t).trim());
    }
    var Zp = /([A-Z])/g, Jp = /^ms-/;
    function gu(e) {
      return e.replace(Zp, "-$1").toLowerCase().replace(Jp, "-ms-");
    }
    var ev = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, ey = /^-ms-/, tv = /-(.)/g, $f = /;\s*$/, za = {}, Dl = {}, nv = !1, go = !1, ty = function(e) {
        return e.replace(tv, function(t, a) {
          return a.toUpperCase();
        });
      }, rv = function(e) {
        za.hasOwnProperty(e) && za[e] || (za[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ty(e.replace(ey, "ms-"))
        ));
      }, Yf = function(e) {
        za.hasOwnProperty(e) && za[e] || (za[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, If = function(e, t) {
        Dl.hasOwnProperty(t) && Dl[t] || (Dl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace($f, "")));
      }, av = function(e, t) {
        nv || (nv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, iv = function(e, t) {
        go || (go = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ev = function(e, t) {
        e.indexOf("-") > -1 ? rv(e) : Jm.test(e) ? Yf(e) : $f.test(t) && If(e, t), typeof t == "number" && (isNaN(t) ? av(e, t) : isFinite(t) || iv(e, t));
      };
    }
    var lv = ev;
    function ny(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : gu(i)) + ":", t += Fs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || lv(i, t[i]);
          var s = Fs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ov(e) {
      var t = {};
      for (var a in e)
        for (var i = mo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ay(e, t) {
      {
        if (!t)
          return;
        var a = ov(e), i = ov(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ry(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Ca = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, So = rt({
      menuitem: !0
    }, Ca), sv = "__html";
    function Hs(e, t) {
      if (t) {
        if (So[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function $i(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var Eo = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ps = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Su = {}, iy = new RegExp("^(aria)-[" + J + "]*$"), Eu = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function Qf(e, t) {
      {
        if (Z.call(Su, t) && Su[t])
          return !0;
        if (Eu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ps.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Su[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Su[t] = !0, !0;
        }
        if (iy.test(t)) {
          var u = t.toLowerCase(), s = Ps.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Su[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Su[t] = !0, !0;
        }
      }
      return !0;
    }
    function Co(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Qf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Wf(e, t) {
      $i(e, t) || Co(e, t);
    }
    var qf = !1;
    function Vs(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !qf && (qf = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _l = function() {
    };
    {
      var jn = {}, Gf = /^on./, Bs = /^on[^A-Z]/, cv = new RegExp("^(aria)-[" + J + "]*$"), fv = new RegExp("^(aria)[A-Z][" + J + "]*$");
      _l = function(e, t, a, i) {
        if (Z.call(jn, t) && jn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), jn[t] = !0, !0;
          if (Gf.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), jn[t] = !0, !0;
        } else if (Gf.test(t))
          return Bs.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jn[t] = !0, !0;
        if (cv.test(t) || fv.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jn[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), jn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jn[t] = !0, !0;
        var v = qt(t), m = v !== null && v.type === Xn;
        if (Eo.hasOwnProperty(u)) {
          var g = Eo[u];
          if (g !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, g), jn[t] = !0, !0;
        } else if (!m && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), jn[t] = !0, !0;
        return typeof a == "boolean" && nn(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), jn[t] = !0, !0) : m ? !0 : nn(t, a, v, !1) ? (jn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Kn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), jn[t] = !0), !0);
      };
    }
    var dv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = _l(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function pv(e, t, a) {
      $i(e, t) || dv(e, t, a);
    }
    var Xf = 1, $s = 2, ta = 4, Kf = Xf | $s | ta, kl = null;
    function ly(e) {
      kl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), kl = e;
    }
    function uy() {
      kl === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), kl = null;
    }
    function To(e) {
      return e === kl;
    }
    function Zf(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === fi ? t.parentNode : t;
    }
    var Ys = null, Ol = null, bt = null;
    function Is(e) {
      var t = Vu(e);
      if (t) {
        if (typeof Ys != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          Ys(t.stateNode, t.type, i);
        }
      }
    }
    function Qs(e) {
      Ys = e;
    }
    function Cu(e) {
      Ol ? bt ? bt.push(e) : bt = [e] : Ol = e;
    }
    function vv() {
      return Ol !== null || bt !== null;
    }
    function Ws() {
      if (Ol) {
        var e = Ol, t = bt;
        if (Ol = null, bt = null, Is(e), t)
          for (var a = 0; a < t.length; a++)
            Is(t[a]);
      }
    }
    var Tu = function(e, t) {
      return e(t);
    }, Ro = function() {
    }, Yi = !1;
    function hv() {
      var e = vv();
      e && (Ro(), Ws());
    }
    function mv(e, t, a) {
      if (Yi)
        return e(t, a);
      Yi = !0;
      try {
        return Tu(e, t, a);
      } finally {
        Yi = !1, hv();
      }
    }
    function oy(e, t, a) {
      Tu = e, Ro = a;
    }
    function yv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function qs(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && yv(t));
        default:
          return !1;
      }
    }
    function Ii(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var u = i[t];
      if (qs(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var wo = !1;
    if (mt)
      try {
        var Ml = {};
        Object.defineProperty(Ml, "passive", {
          get: function() {
            wo = !0;
          }
        }), window.addEventListener("test", Ml, Ml), window.removeEventListener("test", Ml, Ml);
      } catch {
        wo = !1;
      }
    function Gs(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (g) {
        this.onError(g);
      }
    }
    var Xs = Gs;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Jf = document.createElement("react");
      Xs = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), w = !1, T = !0, M = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function U() {
          Jf.removeEventListener(A, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Le() {
          w = !0, U(), a.apply(i, ae), T = !1;
        }
        var Ce, pt = !1, st = !1;
        function D(_) {
          if (Ce = _.error, pt = !0, Ce === null && _.colno === 0 && _.lineno === 0 && (st = !0), _.defaultPrevented && Ce != null && typeof Ce == "object")
            try {
              Ce._suppressLogging = !0;
            } catch {
            }
        }
        var A = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Jf.addEventListener(A, Le, !1), g.initEvent(A, !1, !1), Jf.dispatchEvent(g), z && Object.defineProperty(window, "event", z), w && T && (pt ? st && (Ce = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ce = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ce)), window.removeEventListener("error", D), !w)
          return U(), Gs.apply(this, arguments);
      };
    }
    var gv = Xs, Ru = !1, Ks = null, wu = !1, Ua = null, Sv = {
      onError: function(e) {
        Ru = !0, Ks = e;
      }
    };
    function Qi(e, t, a, i, u, s, f, p, v) {
      Ru = !1, Ks = null, gv.apply(Sv, arguments);
    }
    function Aa(e, t, a, i, u, s, f, p, v) {
      if (Qi.apply(this, arguments), Ru) {
        var m = bo();
        wu || (wu = !0, Ua = m);
      }
    }
    function xo() {
      if (wu) {
        var e = Ua;
        throw wu = !1, Ua = null, e;
      }
    }
    function pi() {
      return Ru;
    }
    function bo() {
      if (Ru) {
        var e = Ks;
        return Ru = !1, Ks = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xu(e) {
      return e._reactInternals;
    }
    function sy(e) {
      return e._reactInternals !== void 0;
    }
    function Ll(e, t) {
      e._reactInternals = t;
    }
    var De = (
      /*                      */
      0
    ), Ta = (
      /*                */
      1
    ), un = (
      /*                    */
      2
    ), ct = (
      /*                       */
      4
    ), na = (
      /*                */
      16
    ), Ra = (
      /*                 */
      32
    ), Vt = (
      /*                     */
      64
    ), we = (
      /*                   */
      128
    ), Tr = (
      /*            */
      256
    ), an = (
      /*                          */
      512
    ), Dn = (
      /*                     */
      1024
    ), Rr = (
      /*                      */
      2048
    ), ra = (
      /*                    */
      4096
    ), gn = (
      /*                   */
      8192
    ), bu = (
      /*             */
      16384
    ), Ev = (
      /*               */
      32767
    ), Do = (
      /*                   */
      32768
    ), wr = (
      /*                */
      65536
    ), Zs = (
      /* */
      131072
    ), ja = (
      /*                       */
      1048576
    ), Du = (
      /*                    */
      2097152
    ), vi = (
      /*                 */
      4194304
    ), Js = (
      /*                */
      8388608
    ), Wi = (
      /*               */
      16777216
    ), Fa = (
      /*              */
      33554432
    ), qi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ct | Dn | 0
    ), Gi = un | ct | na | Ra | an | ra | gn, Xi = ct | Vt | an | gn, hi = Rr | na, Sn = vi | Js | Du, aa = x.ReactCurrentOwner;
    function Hr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (un | ra)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === H ? a : null;
    }
    function Ha(e) {
      if (e.tag === P) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Pa(e) {
      return e.tag === H ? e.stateNode.containerInfo : null;
    }
    function Nl(e) {
      return Hr(e) === e;
    }
    function Cv(e) {
      {
        var t = aa.current;
        if (t !== null && t.tag === q) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ze(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = xu(e);
      return u ? Hr(u) === u : !1;
    }
    function ec(e) {
      if (Hr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function tc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Hr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ec(s), e;
            if (v === u)
              return ec(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, g = s.child; g; ) {
            if (g === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              m = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!m) {
            for (g = f.child; g; ) {
              if (g === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                m = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== H)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function xr(e) {
      var t = tc(e);
      return t !== null ? br(t) : null;
    }
    function br(e) {
      if (e.tag === X || e.tag === Me)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = br(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Xt(e) {
      var t = tc(e);
      return t !== null ? ia(t) : null;
    }
    function ia(e) {
      if (e.tag === X || e.tag === Me)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== te) {
          var a = ia(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var ed = ee.unstable_scheduleCallback, Tv = ee.unstable_cancelCallback, td = ee.unstable_shouldYield, nd = ee.unstable_requestPaint, _n = ee.unstable_now, nc = ee.unstable_getCurrentPriorityLevel, _o = ee.unstable_ImmediatePriority, Ki = ee.unstable_UserBlockingPriority, mi = ee.unstable_NormalPriority, cy = ee.unstable_LowPriority, zl = ee.unstable_IdlePriority, rc = ee.unstable_yieldValue, Rv = ee.unstable_setDisableYieldValue, Ul = null, on = null, re = null, Pr = !1, Dr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function _u(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Fe && (e = rt({}, e, {
          getLaneLabelMap: Al,
          injectProfilingHooks: la
        })), Ul = t.inject(e), on = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function rd(e, t) {
      if (on && typeof on.onScheduleFiberRoot == "function")
        try {
          on.onScheduleFiberRoot(Ul, e, t);
        } catch (a) {
          Pr || (Pr = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function ad(e, t) {
      if (on && typeof on.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & we) === we;
          if (Te) {
            var i;
            switch (t) {
              case lr:
                i = _o;
                break;
              case Ba:
                i = Ki;
                break;
              case ua:
                i = mi;
                break;
              case oa:
                i = zl;
                break;
              default:
                i = mi;
                break;
            }
            on.onCommitFiberRoot(Ul, e, i, a);
          }
        } catch (u) {
          Pr || (Pr = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function id(e) {
      if (on && typeof on.onPostCommitFiberRoot == "function")
        try {
          on.onPostCommitFiberRoot(Ul, e);
        } catch (t) {
          Pr || (Pr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ld(e) {
      if (on && typeof on.onCommitFiberUnmount == "function")
        try {
          on.onCommitFiberUnmount(Ul, e);
        } catch (t) {
          Pr || (Pr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Jt(e) {
      if (typeof rc == "function" && (Rv(e), Se(e)), on && typeof on.setStrictMode == "function")
        try {
          on.setStrictMode(Ul, e);
        } catch (t) {
          Pr || (Pr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function la(e) {
      re = e;
    }
    function Al() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hl; a++) {
          var i = Dv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function ud(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function od() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function Vr(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function Br() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function sd(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function wv() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function yi(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function Zi() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function ac(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function xv() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function ko(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function cd() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function Oo(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function Va(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function Mo(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function Lo() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function jl(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function fd() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function Fl(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function bv() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function ic() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function en(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function lc(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function No(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var _e = (
      /*                         */
      0
    ), at = (
      /*                 */
      1
    ), Et = (
      /*                    */
      2
    ), Lt = (
      /*               */
      8
    ), Ct = (
      /*              */
      16
    ), En = Math.clz32 ? Math.clz32 : zo, Mn = Math.log, uc = Math.LN2;
    function zo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Mn(t) / uc | 0) | 0;
    }
    var Hl = 31, F = (
      /*                        */
      0
    ), yt = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), Ji = (
      /*    */
      2
    ), wa = (
      /*             */
      4
    ), er = (
      /*            */
      8
    ), sn = (
      /*                     */
      16
    ), gi = (
      /*                */
      32
    ), el = (
      /*                       */
      4194240
    ), Pl = (
      /*                        */
      64
    ), oc = (
      /*                        */
      128
    ), sc = (
      /*                        */
      256
    ), cc = (
      /*                        */
      512
    ), fc = (
      /*                        */
      1024
    ), dc = (
      /*                        */
      2048
    ), pc = (
      /*                        */
      4096
    ), vc = (
      /*                        */
      8192
    ), hc = (
      /*                        */
      16384
    ), Vl = (
      /*                       */
      32768
    ), mc = (
      /*                       */
      65536
    ), ku = (
      /*                       */
      131072
    ), Ou = (
      /*                       */
      262144
    ), yc = (
      /*                       */
      524288
    ), Uo = (
      /*                       */
      1048576
    ), gc = (
      /*                       */
      2097152
    ), Ao = (
      /*                            */
      130023424
    ), Bl = (
      /*                             */
      4194304
    ), Sc = (
      /*                             */
      8388608
    ), jo = (
      /*                             */
      16777216
    ), Ec = (
      /*                             */
      33554432
    ), Cc = (
      /*                             */
      67108864
    ), dd = Bl, Fo = (
      /*          */
      134217728
    ), pd = (
      /*                          */
      268435455
    ), Ho = (
      /*               */
      268435456
    ), $l = (
      /*                        */
      536870912
    ), $r = (
      /*                   */
      1073741824
    );
    function Dv(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & Ji)
          return "InputContinuousHydration";
        if (e & wa)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & sn)
          return "Default";
        if (e & gi)
          return "TransitionHydration";
        if (e & el)
          return "Transition";
        if (e & Ao)
          return "Retry";
        if (e & Fo)
          return "SelectiveHydration";
        if (e & Ho)
          return "IdleHydration";
        if (e & $l)
          return "Idle";
        if (e & $r)
          return "Offscreen";
      }
    }
    var Ft = -1, Yl = Pl, Tc = Bl;
    function Po(e) {
      switch (tl(e)) {
        case Ve:
          return Ve;
        case Ji:
          return Ji;
        case wa:
          return wa;
        case er:
          return er;
        case sn:
          return sn;
        case gi:
          return gi;
        case Pl:
        case oc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case Vl:
        case mc:
        case ku:
        case Ou:
        case yc:
        case Uo:
        case gc:
          return e & el;
        case Bl:
        case Sc:
        case jo:
        case Ec:
        case Cc:
          return e & Ao;
        case Fo:
          return Fo;
        case Ho:
          return Ho;
        case $l:
          return $l;
        case $r:
          return $r;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Rc(e, t) {
      var a = e.pendingLanes;
      if (a === F)
        return F;
      var i = F, u = e.suspendedLanes, s = e.pingedLanes, f = a & pd;
      if (f !== F) {
        var p = f & ~u;
        if (p !== F)
          i = Po(p);
        else {
          var v = f & s;
          v !== F && (i = Po(v));
        }
      } else {
        var m = a & ~u;
        m !== F ? i = Po(m) : s !== F && (i = Po(s));
      }
      if (i === F)
        return F;
      if (t !== F && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === F) {
        var g = tl(i), w = tl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === sn && (w & el) !== F
        )
          return t;
      }
      (i & wa) !== F && (i |= a & sn);
      var T = e.entangledLanes;
      if (T !== F)
        for (var M = e.entanglements, z = i & T; z > 0; ) {
          var U = Cn(z), ae = 1 << U;
          i |= M[U], z &= ~ae;
        }
      return i;
    }
    function xa(e, t) {
      for (var a = e.eventTimes, i = Ft; t > 0; ) {
        var u = Cn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function vd(e, t) {
      switch (e) {
        case Ve:
        case Ji:
        case wa:
          return t + 250;
        case er:
        case sn:
        case gi:
        case Pl:
        case oc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case Vl:
        case mc:
        case ku:
        case Ou:
        case yc:
        case Uo:
        case gc:
          return t + 5e3;
        case Bl:
        case Sc:
        case jo:
        case Ec:
        case Cc:
          return Ft;
        case Fo:
        case Ho:
        case $l:
        case $r:
          return Ft;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Ft;
      }
    }
    function wc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Cn(f), v = 1 << p, m = s[p];
        m === Ft ? ((v & i) === F || (v & u) !== F) && (s[p] = vd(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function _v(e) {
      return Po(e.pendingLanes);
    }
    function xc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== F ? t : t & $r ? $r : F;
    }
    function kv(e) {
      return (e & Ve) !== F;
    }
    function Vo(e) {
      return (e & pd) !== F;
    }
    function Il(e) {
      return (e & Ao) === e;
    }
    function hd(e) {
      var t = Ve | wa | sn;
      return (e & t) === F;
    }
    function md(e) {
      return (e & el) === e;
    }
    function bc(e, t) {
      var a = Ji | wa | er | sn;
      return (t & a) !== F;
    }
    function Ov(e, t) {
      return (t & e.expiredLanes) !== F;
    }
    function yd(e) {
      return (e & el) !== F;
    }
    function gd() {
      var e = Yl;
      return Yl <<= 1, (Yl & el) === F && (Yl = Pl), e;
    }
    function Mv() {
      var e = Tc;
      return Tc <<= 1, (Tc & Ao) === F && (Tc = Bl), e;
    }
    function tl(e) {
      return e & -e;
    }
    function Bo(e) {
      return tl(e);
    }
    function Cn(e) {
      return 31 - En(e);
    }
    function Fn(e) {
      return Cn(e);
    }
    function _r(e, t) {
      return (e & t) !== F;
    }
    function Ql(e, t) {
      return (e & t) === t;
    }
    function Je(e, t) {
      return e | t;
    }
    function $o(e, t) {
      return e & ~t;
    }
    function Sd(e, t) {
      return e & t;
    }
    function Lv(e) {
      return e;
    }
    function Nv(e, t) {
      return e !== yt && e < t ? e : t;
    }
    function Yo(e) {
      for (var t = [], a = 0; a < Hl; a++)
        t.push(e);
      return t;
    }
    function Mu(e, t, a) {
      e.pendingLanes |= t, t !== $l && (e.suspendedLanes = F, e.pingedLanes = F);
      var i = e.eventTimes, u = Fn(t);
      i[u] = a;
    }
    function zv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Cn(i), s = 1 << u;
        a[u] = Ft, i &= ~s;
      }
    }
    function Dc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ed(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = F, e.pingedLanes = F, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Cn(f), v = 1 << p;
        i[p] = F, u[p] = Ft, s[p] = Ft, f &= ~v;
      }
    }
    function _c(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Cn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Cd(e, t) {
      var a = tl(t), i;
      switch (a) {
        case wa:
          i = Ji;
          break;
        case sn:
          i = er;
          break;
        case Pl:
        case oc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case Vl:
        case mc:
        case ku:
        case Ou:
        case yc:
        case Uo:
        case gc:
        case Bl:
        case Sc:
        case jo:
        case Ec:
        case Cc:
          i = gi;
          break;
        case $l:
          i = Ho;
          break;
        default:
          i = yt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== yt ? yt : i;
    }
    function Io(e, t, a) {
      if (Dr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Fn(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Uv(e, t) {
      if (Dr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Fn(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Td(e, t) {
      return null;
    }
    var lr = Ve, Ba = wa, ua = sn, oa = $l, Qo = yt;
    function sa() {
      return Qo;
    }
    function Tn(e) {
      Qo = e;
    }
    function Av(e, t) {
      var a = Qo;
      try {
        return Qo = e, t();
      } finally {
        Qo = a;
      }
    }
    function jv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wo(e, t) {
      return e > t ? e : t;
    }
    function Ln(e, t) {
      return e !== 0 && e < t;
    }
    function Fv(e) {
      var t = tl(e);
      return Ln(lr, t) ? Ln(Ba, t) ? Vo(t) ? ua : oa : Ba : lr;
    }
    function kc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var qo;
    function tr(e) {
      qo = e;
    }
    function fy(e) {
      qo(e);
    }
    var de;
    function Lu(e) {
      de = e;
    }
    var Oc;
    function Hv(e) {
      Oc = e;
    }
    var Pv;
    function Go(e) {
      Pv = e;
    }
    var Xo;
    function Rd(e) {
      Xo = e;
    }
    var Mc = !1, Ko = [], Si = null, $a = null, Ya = null, cn = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), or = [], Vv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Bv(e) {
      return Vv.indexOf(e) > -1;
    }
    function ba(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function wd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Si = null;
          break;
        case "dragenter":
        case "dragleave":
          $a = null;
          break;
        case "mouseover":
        case "mouseout":
          Ya = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          cn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ur.delete(i);
          break;
        }
      }
    }
    function kr(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ba(t, a, i, u, s);
        if (t !== null) {
          var p = Vu(t);
          p !== null && de(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function dy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Si = kr(Si, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return $a = kr($a, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Ya = kr(Ya, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return cn.set(m, kr(cn.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, w = g.pointerId;
          return ur.set(w, kr(ur.get(w) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function xd(e) {
      var t = ss(e.target);
      if (t !== null) {
        var a = Hr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === P) {
            var u = Ha(a);
            if (u !== null) {
              e.blockedOn = u, Xo(e.priority, function() {
                Oc(a);
              });
              return;
            }
          } else if (i === H) {
            var s = a.stateNode;
            if (kc(s)) {
              e.blockedOn = Pa(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function $v(e) {
      for (var t = Pv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < or.length && Ln(t, or[i].priority); i++)
        ;
      or.splice(i, 0, a), i === 0 && xd(a);
    }
    function Zo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = zu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ly(s), u.target.dispatchEvent(s), uy();
        } else {
          var f = Vu(i);
          return f !== null && de(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function bd(e, t, a) {
      Zo(e) && a.delete(t);
    }
    function py() {
      Mc = !1, Si !== null && Zo(Si) && (Si = null), $a !== null && Zo($a) && ($a = null), Ya !== null && Zo(Ya) && (Ya = null), cn.forEach(bd), ur.forEach(bd);
    }
    function nl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Mc || (Mc = !0, ee.unstable_scheduleCallback(ee.unstable_NormalPriority, py)));
    }
    function Wl(e) {
      if (Ko.length > 0) {
        nl(Ko[0], e);
        for (var t = 1; t < Ko.length; t++) {
          var a = Ko[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Si !== null && nl(Si, e), $a !== null && nl($a, e), Ya !== null && nl(Ya, e);
      var i = function(p) {
        return nl(p, e);
      };
      cn.forEach(i), ur.forEach(i);
      for (var u = 0; u < or.length; u++) {
        var s = or[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; or.length > 0; ) {
        var f = or[0];
        if (f.blockedOn !== null)
          break;
        xd(f), f.blockedOn === null && or.shift();
      }
    }
    var Hn = x.ReactCurrentBatchConfig, ft = !0;
    function kn(e) {
      ft = !!e;
    }
    function Rn() {
      return ft;
    }
    function Pn(e, t, a) {
      var i = Lc(t), u;
      switch (i) {
        case lr:
          u = Yr;
          break;
        case Ba:
          u = Nu;
          break;
        case ua:
        default:
          u = fn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Yr(e, t, a, i) {
      var u = sa(), s = Hn.transition;
      Hn.transition = null;
      try {
        Tn(lr), fn(e, t, a, i);
      } finally {
        Tn(u), Hn.transition = s;
      }
    }
    function Nu(e, t, a, i) {
      var u = sa(), s = Hn.transition;
      Hn.transition = null;
      try {
        Tn(Ba), fn(e, t, a, i);
      } finally {
        Tn(u), Hn.transition = s;
      }
    }
    function fn(e, t, a, i) {
      ft && Jo(e, t, a, i);
    }
    function Jo(e, t, a, i) {
      var u = zu(e, t, a, i);
      if (u === null) {
        Oy(e, t, i, Ia, a), wd(e, i);
        return;
      }
      if (dy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (wd(e, i), t & ta && Bv(e)) {
        for (; u !== null; ) {
          var s = Vu(u);
          s !== null && fy(s);
          var f = zu(e, t, a, i);
          if (f === null && Oy(e, t, i, Ia, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var Ia = null;
    function zu(e, t, a, i) {
      Ia = null;
      var u = Zf(i), s = ss(u);
      if (s !== null) {
        var f = Hr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === P) {
            var v = Ha(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === H) {
            var m = f.stateNode;
            if (kc(m))
              return Pa(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ia = s, null;
    }
    function Lc(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return lr;
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
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ba;
        case "message": {
          var t = nc();
          switch (t) {
            case _o:
              return lr;
            case Ki:
              return Ba;
            case mi:
            case cy:
              return ua;
            case zl:
              return oa;
            default:
              return ua;
          }
        }
        default:
          return ua;
      }
    }
    function es(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Or(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Dd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Uu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ir = null, Au = null, ql = null;
    function rl(e) {
      return Ir = e, Au = ts(), !0;
    }
    function Nc() {
      Ir = null, Au = null, ql = null;
    }
    function Ei() {
      if (ql)
        return ql;
      var e, t = Au, a = t.length, i, u = ts(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ql = u.slice(e, p), ql;
    }
    function ts() {
      return "value" in Ir ? Ir.value : Ir.textContent;
    }
    function al(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ju() {
      return !0;
    }
    function ns() {
      return !1;
    }
    function nr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = ju : this.isDefaultPrevented = ns, this.isPropagationStopped = ns, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ju);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ju);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ju
      }), t;
    }
    var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Qa = nr(wn), sr = rt({}, wn, {
      view: 0,
      detail: 0
    }), Mr = nr(sr), zc, rs, Gl;
    function vy(e) {
      e !== Gl && (Gl && e.type === "mousemove" ? (zc = e.screenX - Gl.screenX, rs = e.screenY - Gl.screenY) : (zc = 0, rs = 0), Gl = e);
    }
    var Da = rt({}, sr, {
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
      getModifierState: Kt,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (vy(e), zc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rs;
      }
    }), _d = nr(Da), kd = rt({}, Da, {
      dataTransfer: 0
    }), Xl = nr(kd), Od = rt({}, sr, {
      relatedTarget: 0
    }), Ci = nr(Od), Yv = rt({}, wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Iv = nr(Yv), Md = rt({}, wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Uc = nr(Md), hy = rt({}, wn, {
      data: 0
    }), Qv = nr(hy), Wv = Qv, qv = {
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
      MozPrintableKey: "Unidentified"
    }, Kl = {
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
      224: "Meta"
    };
    function my(e) {
      if (e.key) {
        var t = qv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = al(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Kl[e.keyCode] || "Unidentified" : "";
    }
    var Fu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Gv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Fu[e];
      return i ? !!a[i] : !1;
    }
    function Kt(e) {
      return Gv;
    }
    var yy = rt({}, sr, {
      key: my,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kt,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? al(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Xv = nr(yy), gy = rt({}, Da, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Kv = nr(gy), Zv = rt({}, sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kt
    }), Jv = nr(Zv), Sy = rt({}, wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ca = nr(Sy), Ld = rt({}, Da, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ey = nr(Ld), il = [9, 13, 27, 32], as = 229, Ti = mt && "CompositionEvent" in window, ll = null;
    mt && "documentMode" in document && (ll = document.documentMode);
    var Nd = mt && "TextEvent" in window && !ll, Ac = mt && (!Ti || ll && ll > 8 && ll <= 11), eh = 32, jc = String.fromCharCode(eh);
    function Cy() {
      Xe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Xe("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Xe("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Xe("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zd = !1;
    function th(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Fc(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Hc(e, t) {
      return e === "keydown" && t.keyCode === as;
    }
    function Ud(e, t) {
      switch (e) {
        case "keyup":
          return il.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== as;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function nh(e) {
      return e.locale === "ko";
    }
    var Zl = !1;
    function Ad(e, t, a, i, u) {
      var s, f;
      if (Ti ? s = Fc(t) : Zl ? Ud(t, i) && (s = "onCompositionEnd") : Hc(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ac && !nh(i) && (!Zl && s === "onCompositionStart" ? Zl = rl(u) : s === "onCompositionEnd" && Zl && (f = Ei()));
      var p = sh(a, s);
      if (p.length > 0) {
        var v = new Qv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Pc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Vc(e, t) {
      switch (e) {
        case "compositionend":
          return Pc(t);
        case "keypress":
          var a = t.which;
          return a !== eh ? null : (zd = !0, jc);
        case "textInput":
          var i = t.data;
          return i === jc && zd ? null : i;
        default:
          return null;
      }
    }
    function jd(e, t) {
      if (Zl) {
        if (e === "compositionend" || !Ti && Ud(e, t)) {
          var a = Ei();
          return Nc(), Zl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!th(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ac && !nh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Bc(e, t, a, i, u) {
      var s;
      if (Nd ? s = Vc(t, i) : s = jd(t, i), !s)
        return null;
      var f = sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Wv("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function rh(e, t, a, i, u, s, f) {
      Ad(e, t, a, i, u), Bc(e, t, a, i, u);
    }
    var Ty = {
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
      week: !0
    };
    function is(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ty[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ry(e) {
      if (!mt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function ls() {
      Xe("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function ah(e, t, a, i) {
      Cu(i);
      var u = sh(t, "onChange");
      if (u.length > 0) {
        var s = new Qa("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var ul = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      ah(t, n, e, Zf(e)), mv(o, t);
    }
    function o(e) {
      AE(e, 0);
    }
    function c(e) {
      var t = qc(e);
      if (Rl(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var h = !1;
    mt && (h = Ry("input") && (!document.documentMode || document.documentMode > 9));
    function S(e, t) {
      ul = e, n = t, ul.attachEvent("onpropertychange", N);
    }
    function C() {
      ul && (ul.detachEvent("onpropertychange", N), ul = null, n = null);
    }
    function N(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function $(e, t, a) {
      e === "focusin" ? (C(), S(t, a)) : e === "focusout" && C();
    }
    function I(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function V(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ue(e, t) {
      if (e === "click")
        return c(t);
    }
    function he(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || zs(e, "number", e.value);
    }
    function dn(e, t, a, i, u, s, f) {
      var p = a ? qc(a) : window, v, m;
      if (r(p) ? v = d : is(p) ? h ? v = he : (v = I, m = $) : V(p) && (v = ue), v) {
        var g = v(t, a);
        if (g) {
          ah(e, g, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && Ee(p);
    }
    function b() {
      Ie("onMouseEnter", ["mouseout", "mouseover"]), Ie("onMouseLeave", ["mouseout", "mouseover"]), Ie("onPointerEnter", ["pointerout", "pointerover"]), Ie("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function R(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !To(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ss(m) || Kd(m)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var w = u.ownerDocument;
          w ? g = w.defaultView || w.parentWindow : g = window;
        }
        var T, M;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (T = a, M = z ? ss(z) : null, M !== null) {
            var U = Hr(M);
            (M !== U || M.tag !== X && M.tag !== Me) && (M = null);
          }
        } else
          T = null, M = a;
        if (T !== M) {
          var ae = _d, Le = "onMouseLeave", Ce = "onMouseEnter", pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Kv, Le = "onPointerLeave", Ce = "onPointerEnter", pt = "pointer");
          var st = T == null ? g : qc(T), D = M == null ? g : qc(M), A = new ae(Le, pt + "leave", T, i, u);
          A.target = st, A.relatedTarget = D;
          var _ = null, Q = ss(u);
          if (Q === a) {
            var ce = new ae(Ce, pt + "enter", M, i, u);
            ce.target = D, ce.relatedTarget = st, _ = ce;
          }
          XR(e, A, _, T, M);
        }
      }
    }
    function O(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Y = typeof Object.is == "function" ? Object.is : O;
    function me(e, t) {
      if (Y(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Z.call(t, s) || !Y(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ae(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function $e(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === fi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze(Ae(a));
      }
    }
    function Nn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Tt(e, u, s, f, p);
    }
    function Tt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, g = e, w = null;
      e: for (; ; ) {
        for (var T = null; g === t && (a === 0 || g.nodeType === fi) && (f = s + a), g === i && (u === 0 || g.nodeType === fi) && (p = s + u), g.nodeType === fi && (s += g.nodeValue.length), (T = g.firstChild) !== null; )
          w = g, g = T;
        for (; ; ) {
          if (g === e)
            break e;
          if (w === t && ++v === a && (f = s), w === i && ++m === u && (p = s), (T = g.nextSibling) !== null)
            break;
          g = w, w = g.parentNode;
        }
        g = T;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function ol(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = $e(e, f), g = $e(e, p);
        if (m && g) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var w = a.createRange();
          w.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(g.node, g.offset)) : (w.setEnd(g.node, g.offset), u.addRange(w));
        }
      }
    }
    function ih(e) {
      return e && e.nodeType === fi;
    }
    function xE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : ih(e) ? !1 : ih(t) ? xE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function LR(e) {
      return e && e.ownerDocument && xE(e.ownerDocument.documentElement, e);
    }
    function NR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function bE() {
      for (var e = window, t = wl(); t instanceof e.HTMLIFrameElement; ) {
        if (NR(t))
          e = t.contentWindow;
        else
          return t;
        t = wl(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function zR() {
      var e = bE();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? AR(e) : null
      };
    }
    function UR(e) {
      var t = bE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && LR(a)) {
        i !== null && wy(a) && jR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Cr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function AR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Nn(e), t || {
        start: 0,
        end: 0
      };
    }
    function jR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ol(e, t);
    }
    var FR = mt && "documentMode" in document && document.documentMode <= 11;
    function HR() {
      Xe("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var $c = null, xy = null, Fd = null, by = !1;
    function PR(e) {
      if ("selectionStart" in e && wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function VR(e) {
      return e.window === e ? e.document : e.nodeType === di ? e : e.ownerDocument;
    }
    function DE(e, t, a) {
      var i = VR(a);
      if (!(by || $c == null || $c !== wl(i))) {
        var u = PR($c);
        if (!Fd || !me(Fd, u)) {
          Fd = u;
          var s = sh(xy, "onSelect");
          if (s.length > 0) {
            var f = new Qa("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = $c;
          }
        }
      }
    }
    function BR(e, t, a, i, u, s, f) {
      var p = a ? qc(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (is(p) || p.contentEditable === "true") && ($c = p, xy = a, Fd = null);
          break;
        case "focusout":
          $c = null, xy = null, Fd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, DE(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (FR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          DE(e, i, u);
      }
    }
    function lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Yc = {
      animationend: lh("Animation", "AnimationEnd"),
      animationiteration: lh("Animation", "AnimationIteration"),
      animationstart: lh("Animation", "AnimationStart"),
      transitionend: lh("Transition", "TransitionEnd")
    }, Dy = {}, _E = {};
    mt && (_E = document.createElement("div").style, "AnimationEvent" in window || (delete Yc.animationend.animation, delete Yc.animationiteration.animation, delete Yc.animationstart.animation), "TransitionEvent" in window || delete Yc.transitionend.transition);
    function uh(e) {
      if (Dy[e])
        return Dy[e];
      if (!Yc[e])
        return e;
      var t = Yc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _E)
          return Dy[e] = t[a];
      return e;
    }
    var kE = uh("animationend"), OE = uh("animationiteration"), ME = uh("animationstart"), LE = uh("transitionend"), NE = /* @__PURE__ */ new Map(), zE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hu(e, t) {
      NE.set(e, t), Xe(t, [e]);
    }
    function $R() {
      for (var e = 0; e < zE.length; e++) {
        var t = zE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Hu(a, "on" + i);
      }
      Hu(kE, "onAnimationEnd"), Hu(OE, "onAnimationIteration"), Hu(ME, "onAnimationStart"), Hu("dblclick", "onDoubleClick"), Hu("focusin", "onFocus"), Hu("focusout", "onBlur"), Hu(LE, "onTransitionEnd");
    }
    function YR(e, t, a, i, u, s, f) {
      var p = NE.get(t);
      if (p !== void 0) {
        var v = Qa, m = t;
        switch (t) {
          case "keypress":
            if (al(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = Xv;
            break;
          case "focusin":
            m = "focus", v = Ci;
            break;
          case "focusout":
            m = "blur", v = Ci;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ci;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = _d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Jv;
            break;
          case kE:
          case OE:
          case ME:
            v = Iv;
            break;
          case LE:
            v = ca;
            break;
          case "scroll":
            v = Mr;
            break;
          case "wheel":
            v = Ey;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Uc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Kv;
            break;
        }
        var g = (s & ta) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = qR(a, p, i.type, g, w);
          if (T.length > 0) {
            var M = new v(p, m, null, i, u);
            e.push({
              event: M,
              listeners: T
            });
          }
        }
      }
    }
    $R(), b(), ls(), HR(), Cy();
    function IR(e, t, a, i, u, s, f) {
      YR(e, t, a, i, u, s);
      var p = (s & Kf) === 0;
      p && (R(e, t, a, i, u), dn(e, t, a, i, u), BR(e, t, a, i, u), rh(e, t, a, i, u));
    }
    var Hd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hd));
    function UE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Aa(i, t, void 0, e), e.currentTarget = null;
    }
    function QR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          UE(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var g = t[m], w = g.instance, T = g.currentTarget, M = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          UE(e, M, T), i = w;
        }
    }
    function AE(e, t) {
      for (var a = (t & ta) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        QR(s, f, a);
      }
      xo();
    }
    function WR(e, t, a, i, u) {
      var s = Zf(a), f = [];
      IR(f, e, i, a, s, t), AE(f, t);
    }
    function tn(e, t) {
      _y.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = R1(t), u = KR(e);
      i.has(u) || (jE(t, e, $s, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ta), jE(a, e, i, t);
    }
    var oh = "_reactListening" + Math.random().toString(36).slice(2);
    function Pd(e) {
      if (!e[oh]) {
        e[oh] = !0, be.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === di ? e : e.ownerDocument;
        t !== null && (t[oh] || (t[oh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function jE(e, t, a, i, u) {
      var s = Pn(e, t, a), f = void 0;
      wo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Dd(e, t, s, f) : Or(e, t, s) : f !== void 0 ? Uu(e, t, s, f) : es(e, t, s);
    }
    function FE(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function Oy(e, t, a, i, u) {
      var s = i;
      if ((t & Xf) === 0 && (t & $s) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === H || v === te) {
              var m = p.stateNode.containerInfo;
              if (FE(m, f))
                break;
              if (v === te)
                for (var g = p.return; g !== null; ) {
                  var w = g.tag;
                  if (w === H || w === te) {
                    var T = g.stateNode.containerInfo;
                    if (FE(T, f))
                      return;
                  }
                  g = g.return;
                }
              for (; m !== null; ) {
                var M = ss(m);
                if (M === null)
                  return;
                var z = M.tag;
                if (z === X || z === Me) {
                  p = s = M;
                  continue e;
                }
                m = m.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      mv(function() {
        return WR(e, t, a, s);
      });
    }
    function Vd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function qR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, g = null; m !== null; ) {
        var w = m, T = w.stateNode, M = w.tag;
        if (M === X && T !== null && (g = T, p !== null)) {
          var z = Ii(m, p);
          z != null && v.push(Vd(m, z, g));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === X && f !== null) {
          var v = f, m = Ii(u, a);
          m != null && i.unshift(Vd(u, m, v));
          var g = Ii(u, t);
          g != null && i.push(Vd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ic(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== X);
      return e || null;
    }
    function GR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ic(s))
        u++;
      for (var f = 0, p = i; p; p = Ic(p))
        f++;
      for (; u - f > 0; )
        a = Ic(a), u--;
      for (; f - u > 0; )
        i = Ic(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ic(a), i = Ic(i);
      }
      return null;
    }
    function HE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, g = v.stateNode, w = v.tag;
        if (m !== null && m === i)
          break;
        if (w === X && g !== null) {
          var T = g;
          if (u) {
            var M = Ii(p, s);
            M != null && f.unshift(Vd(p, M, T));
          } else if (!u) {
            var z = Ii(p, s);
            z != null && f.push(Vd(p, z, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function XR(e, t, a, i, u) {
      var s = i && u ? GR(i, u) : null;
      i !== null && HE(e, t, i, s, !1), u !== null && a !== null && HE(e, a, u, s, !0);
    }
    function KR(e, t) {
      return e + "__bubble";
    }
    var fa = !1, Bd = "dangerouslySetInnerHTML", ch = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", PE = "autoFocus", us = "children", os = "style", fh = "__html", My, dh, $d, VE, ph, BE, $E;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, dh = function(e, t) {
      Wf(e, t), Vs(e, t), pv(e, t, {
        registrationNameDependencies: ke,
        possibleRegistrationNames: Pe
      });
    }, BE = mt && !document.documentMode, $d = function(e, t, a) {
      if (!fa) {
        var i = vh(a), u = vh(t);
        u !== i && (fa = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, VE = function(e) {
      if (!fa) {
        fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, ph = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, $E = function(e, t) {
      var a = e.namespaceURI === ci ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var ZR = /\r\n?/g, JR = /\u0000|\uFFFD/g;
    function vh(e) {
      ti(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ZR, `
`).replace(JR, "");
    }
    function hh(e, t, a, i) {
      var u = vh(t), s = vh(e);
      if (s !== u && (i && (fa || (fa = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && vn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function YE(e) {
      return e.nodeType === di ? e : e.ownerDocument;
    }
    function ew() {
    }
    function mh(e) {
      e.onclick = ew;
    }
    function tw(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === os)
            f && Object.freeze(f), uv(t, f);
          else if (s === Bd) {
            var p = f ? f[fh] : void 0;
            p != null && Gp(t, p);
          } else if (s === us)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && yu(t, f);
            } else typeof f == "number" && yu(t, "" + f);
          else s === ch || s === Pu || s === PE || (ke.hasOwnProperty(s) ? f != null && (typeof f != "function" && ph(s, f), s === "onScroll" && tn("scroll", t)) : f != null && ri(t, s, f, u));
        }
    }
    function nw(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === os ? uv(e, f) : s === Bd ? Gp(e, f) : s === us ? yu(e, f) : ri(e, s, f, i);
      }
    }
    function rw(e, t, a, i) {
      var u, s = YE(a), f, p = i;
      if (p === ci && (p = Pf(e)), p === ci) {
        if (u = $i(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ci && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Z.call(My, e) && (My[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function aw(e, t) {
      return YE(t).createTextNode(e);
    }
    function iw(e, t, a, i) {
      var u = $i(t, a);
      dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          tn("cancel", e), tn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Hd.length; f++)
            tn(Hd[f], e);
          s = a;
          break;
        case "source":
          tn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e), s = a;
          break;
        case "details":
          tn("toggle", e), s = a;
          break;
        case "input":
          si(e, a), s = Os(e, a), tn("invalid", e);
          break;
        case "option":
          hu(e, a), s = a;
          break;
        case "select":
          As(e, a), s = Uf(e, a), tn("invalid", e);
          break;
        case "textarea":
          jf(e, a), s = Af(e, a), tn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Hs(t, s), tw(t, e, i, s, u), t) {
        case "input":
          Bi(e), Lf(e, a, !1);
          break;
        case "textarea":
          Bi(e), Wp(e);
          break;
        case "option":
          Wm(e, a);
          break;
        case "select":
          Gm(e, a);
          break;
        default:
          typeof s.onClick == "function" && mh(e);
          break;
      }
    }
    function lw(e, t, a, i, u) {
      dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Os(e, a), p = Os(e, i), s = [];
          break;
        case "select":
          f = Uf(e, a), p = Uf(e, i), s = [];
          break;
        case "textarea":
          f = Af(e, a), p = Af(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && mh(e);
          break;
      }
      Hs(t, p);
      var v, m, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === os) {
            var w = f[v];
            for (m in w)
              w.hasOwnProperty(m) && (g || (g = {}), g[m] = "");
          } else v === Bd || v === us || v === ch || v === Pu || v === PE || (ke.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === M || T == null && M == null))
          if (v === os)
            if (T && Object.freeze(T), M) {
              for (m in M)
                M.hasOwnProperty(m) && (!T || !T.hasOwnProperty(m)) && (g || (g = {}), g[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && M[m] !== T[m] && (g || (g = {}), g[m] = T[m]);
            } else
              g || (s || (s = []), s.push(v, g)), g = T;
          else if (v === Bd) {
            var z = T ? T[fh] : void 0, U = M ? M[fh] : void 0;
            z != null && U !== z && (s = s || []).push(v, z);
          } else v === us ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === ch || v === Pu || (ke.hasOwnProperty(v) ? (T != null && (typeof T != "function" && ph(v, T), v === "onScroll" && tn("scroll", e)), !s && M !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return g && (ay(g, p[os]), (s = s || []).push(os, g)), s;
    }
    function uw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Ms(e, u);
      var s = $i(a, i), f = $i(a, u);
      switch (nw(e, t, s, f), a) {
        case "input":
          vu(e, u);
          break;
        case "textarea":
          Qp(e, u);
          break;
        case "select":
          Xm(e, u);
          break;
      }
    }
    function ow(e) {
      {
        var t = e.toLowerCase();
        return Eo.hasOwnProperty(t) && Eo[t] || null;
      }
    }
    function sw(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = $i(t, a), dh(t, a), t) {
        case "dialog":
          tn("cancel", e), tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Hd.length; m++)
            tn(Hd[m], e);
          break;
        case "source":
          tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e);
          break;
        case "details":
          tn("toggle", e);
          break;
        case "input":
          si(e, a), tn("invalid", e);
          break;
        case "option":
          hu(e, a);
          break;
        case "select":
          As(e, a), tn("invalid", e);
          break;
        case "textarea":
          jf(e, a), tn("invalid", e);
          break;
      }
      Hs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, w = 0; w < g.length; w++) {
          var T = g[w].name.toLowerCase();
          switch (T) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[w].name);
          }
        }
      }
      var M = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var U = a[z];
          if (z === us)
            typeof U == "string" ? e.textContent !== U && (a[Pu] !== !0 && hh(e.textContent, U, s, f), M = [us, U]) : typeof U == "number" && e.textContent !== "" + U && (a[Pu] !== !0 && hh(e.textContent, U, s, f), M = [us, "" + U]);
          else if (ke.hasOwnProperty(z))
            U != null && (typeof U != "function" && ph(z, U), z === "onScroll" && tn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Le = qt(z);
            if (a[Pu] !== !0) {
              if (!(z === ch || z === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === Bd) {
                  var Ce = e.innerHTML, pt = U ? U[fh] : void 0;
                  if (pt != null) {
                    var st = $E(e, pt);
                    st !== Ce && $d(z, Ce, st);
                  }
                } else if (z === os) {
                  if (v.delete(z), BE) {
                    var D = ny(U);
                    ae = e.getAttribute("style"), D !== ae && $d(z, ae, D);
                  }
                } else if (p)
                  v.delete(z.toLowerCase()), ae = io(e, z, U), U !== ae && $d(z, ae, U);
                else if (!Zn(z, Le, p) && !Jn(z, U, Le, p)) {
                  var A = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ae = du(e, z, U, Le);
                  else {
                    var _ = i;
                    if (_ === ci && (_ = Pf(t)), _ === ci)
                      v.delete(z.toLowerCase());
                    else {
                      var Q = ow(z);
                      Q !== null && Q !== z && (A = !0, v.delete(Q)), v.delete(z);
                    }
                    ae = io(e, z, U);
                  }
                  var ce = W;
                  !ce && U !== ae && !A && $d(z, ae, U);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Pu] !== !0 && VE(v), t) {
        case "input":
          Bi(e), Lf(e, a, !0);
          break;
        case "textarea":
          Bi(e), Wp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && mh(e);
          break;
      }
      return M;
    }
    function cw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (fa)
          return;
        fa = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (fa)
          return;
        fa = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (fa)
          return;
        fa = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (t === "" || fa)
          return;
        fa = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function fw(e, t, a) {
      switch (t) {
        case "input":
          Ls(e, a);
          return;
        case "textarea":
          Zm(e, a);
          return;
        case "select":
          Km(e, a);
          return;
      }
    }
    var Yd = function() {
    }, Id = function() {
    };
    {
      var dw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], IE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], pw = IE.concat(["button"]), vw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], QE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Id = function(e, t) {
        var a = rt({}, e || QE), i = {
          tag: t
        };
        return IE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), pw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), dw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var hw = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return vw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, mw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, WE = {};
      Yd = function(e, t, a) {
        a = a || QE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = hw(e, u) ? null : i, f = s ? null : mw(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!WE[m]) {
            WE[m] = !0;
            var g = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var T = "";
              v === "table" && e === "tr" && (T += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, w, T);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var yh = "suppressHydrationWarning", gh = "$", Sh = "/$", Qd = "$?", Wd = "$!", yw = "style", Ay = null, jy = null;
    function gw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case di:
        case Bf: {
          t = i === di ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Vf(null, "");
          break;
        }
        default: {
          var s = i === yn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Vf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Id(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function Sw(e, t, a) {
      {
        var i = e, u = Vf(i.namespace, t), s = Id(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function B_(e) {
      return e;
    }
    function Ew(e) {
      Ay = Rn(), jy = zR();
      var t = null;
      return kn(!1), t;
    }
    function Cw(e) {
      UR(jy), kn(Ay), Ay = null, jy = null;
    }
    function Tw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Yd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Id(f.ancestorInfo, e);
          Yd(null, p, v);
        }
        s = f.namespace;
      }
      var m = rw(e, t, a, s);
      return Xd(u, m), Iy(m, t), m;
    }
    function Rw(e, t) {
      e.appendChild(t);
    }
    function ww(e, t, a, i, u) {
      switch (iw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function xw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Id(f.ancestorInfo, t);
          Yd(null, p, v);
        }
      }
      return lw(e, t, a, i);
    }
    function Fy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function bw(e, t, a, i) {
      {
        var u = a;
        Yd(null, e, u.ancestorInfo);
      }
      var s = aw(e, t);
      return Xd(i, s), s;
    }
    function Dw() {
      var e = window.event;
      return e === void 0 ? ua : Lc(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, _w = typeof clearTimeout == "function" ? clearTimeout : void 0, Py = -1, qE = typeof Promise == "function" ? Promise : void 0, kw = typeof queueMicrotask == "function" ? queueMicrotask : typeof qE < "u" ? function(e) {
      return qE.resolve(null).then(e).catch(Ow);
    } : Hy;
    function Ow(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Mw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Lw(e, t, a, i, u, s) {
      uw(e, t, a, i, u), Iy(e, u);
    }
    function GE(e) {
      yu(e, "");
    }
    function Nw(e, t, a) {
      e.nodeValue = a;
    }
    function zw(e, t) {
      e.appendChild(t);
    }
    function Uw(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && mh(a);
    }
    function Aw(e, t, a) {
      e.insertBefore(t, a);
    }
    function jw(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Fw(e, t) {
      e.removeChild(t);
    }
    function Hw(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === yn) {
          var s = u.data;
          if (s === Sh)
            if (i === 0) {
              e.removeChild(u), Wl(t);
              return;
            } else
              i--;
          else (s === gh || s === Qd || s === Wd) && i++;
        }
        a = u;
      } while (a);
      Wl(t);
    }
    function Pw(e, t) {
      e.nodeType === yn ? Vy(e.parentNode, t) : e.nodeType === Cr && Vy(e, t), Wl(e);
    }
    function Vw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Bw(e) {
      e.nodeValue = "";
    }
    function $w(e, t) {
      e = e;
      var a = t[yw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Fs("display", i);
    }
    function Yw(e, t) {
      e.nodeValue = t;
    }
    function Iw(e) {
      e.nodeType === Cr ? e.textContent = "" : e.nodeType === di && e.documentElement && e.removeChild(e.documentElement);
    }
    function Qw(e, t, a) {
      return e.nodeType !== Cr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Ww(e, t) {
      return t === "" || e.nodeType !== fi ? null : e;
    }
    function qw(e) {
      return e.nodeType !== yn ? null : e;
    }
    function XE(e) {
      return e.data === Qd;
    }
    function By(e) {
      return e.data === Wd;
    }
    function Gw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Xw(e, t) {
      e._reactRetry = t;
    }
    function Eh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Cr || t === fi)
          break;
        if (t === yn) {
          var a = e.data;
          if (a === gh || a === Wd || a === Qd)
            break;
          if (a === Sh)
            return null;
        }
      }
      return e;
    }
    function qd(e) {
      return Eh(e.nextSibling);
    }
    function Kw(e) {
      return Eh(e.firstChild);
    }
    function Zw(e) {
      return Eh(e.firstChild);
    }
    function Jw(e) {
      return Eh(e.nextSibling);
    }
    function e1(e, t, a, i, u, s, f) {
      Xd(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & at) !== _e;
      return sw(e, t, a, p, i, m, f);
    }
    function t1(e, t, a, i) {
      return Xd(a, e), a.mode & at, cw(e, t);
    }
    function n1(e, t) {
      Xd(t, e);
    }
    function r1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var i = t.data;
          if (i === Sh) {
            if (a === 0)
              return qd(t);
            a--;
          } else (i === gh || i === Wd || i === Qd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function KE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var i = t.data;
          if (i === gh || i === Wd || i === Qd) {
            if (a === 0)
              return t;
            a--;
          } else i === Sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function a1(e) {
      Wl(e);
    }
    function i1(e) {
      Wl(e);
    }
    function l1(e) {
      return e !== "head" && e !== "body";
    }
    function u1(e, t, a, i) {
      var u = !0;
      hh(t.nodeValue, a, i, u);
    }
    function o1(e, t, a, i, u, s) {
      if (t[yh] !== !0) {
        var f = !0;
        hh(i.nodeValue, u, s, f);
      }
    }
    function s1(e, t) {
      t.nodeType === Cr ? Ly(e, t) : t.nodeType === yn || Ny(e, t);
    }
    function c1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Cr ? Ly(a, t) : t.nodeType === yn || Ny(a, t));
      }
    }
    function f1(e, t, a, i, u) {
      (u || t[yh] !== !0) && (i.nodeType === Cr ? Ly(a, i) : i.nodeType === yn || Ny(a, i));
    }
    function d1(e, t, a) {
      zy(e, t);
    }
    function p1(e, t) {
      Uy(e, t);
    }
    function v1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function h1(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function m1(e, t, a, i, u, s) {
      (s || t[yh] !== !0) && zy(a, i);
    }
    function y1(e, t, a, i, u) {
      (u || t[yh] !== !0) && Uy(a, i);
    }
    function g1(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function S1(e) {
      Pd(e);
    }
    var Qc = Math.random().toString(36).slice(2), Wc = "__reactFiber$" + Qc, $y = "__reactProps$" + Qc, Gd = "__reactContainer$" + Qc, Yy = "__reactEvents$" + Qc, E1 = "__reactListeners$" + Qc, C1 = "__reactHandles$" + Qc;
    function T1(e) {
      delete e[Wc], delete e[$y], delete e[Yy], delete e[E1], delete e[C1];
    }
    function Xd(e, t) {
      t[Wc] = e;
    }
    function Ch(e, t) {
      t[Gd] = e;
    }
    function ZE(e) {
      e[Gd] = null;
    }
    function Kd(e) {
      return !!e[Gd];
    }
    function ss(e) {
      var t = e[Wc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Gd] || a[Wc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = KE(e); u !== null; ) {
              var s = u[Wc];
              if (s)
                return s;
              u = KE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Vu(e) {
      var t = e[Wc] || e[Gd];
      return t && (t.tag === X || t.tag === Me || t.tag === P || t.tag === H) ? t : null;
    }
    function qc(e) {
      if (e.tag === X || e.tag === Me)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[$y] || null;
    }
    function Iy(e, t) {
      e[$y] = t;
    }
    function R1(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var JE = {}, eC = x.ReactDebugCurrentFrame;
    function Rh(e) {
      if (e) {
        var t = e._owner, a = Tl(e.type, e._source, t ? t.type : null);
        eC.setExtraStackFrame(a);
      } else
        eC.setExtraStackFrame(null);
    }
    function Ri(e, t, a, i, u) {
      {
        var s = Function.call.bind(Z);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (Rh(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Rh(null)), p instanceof Error && !(p.message in JE) && (JE[p.message] = !0, Rh(u), y("Failed %s type: %s", a, p.message), Rh(null));
          }
      }
    }
    var Qy = [], wh;
    wh = [];
    var Jl = -1;
    function Bu(e) {
      return {
        current: e
      };
    }
    function Lr(e, t) {
      if (Jl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== wh[Jl] && y("Unexpected Fiber popped."), e.current = Qy[Jl], Qy[Jl] = null, wh[Jl] = null, Jl--;
    }
    function Nr(e, t, a) {
      Jl++, Qy[Jl] = e.current, wh[Jl] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var _a = {};
    Object.freeze(_a);
    var eu = Bu(_a), sl = Bu(!1), qy = _a;
    function Gc(e, t, a) {
      return a && cl(t) ? qy : eu.current;
    }
    function tC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Xc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return _a;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ze(e) || "Unknown";
          Ri(i, s, "context", p);
        }
        return u && tC(e, t, s), s;
      }
    }
    function xh() {
      return sl.current;
    }
    function cl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function bh(e) {
      Lr(sl, e), Lr(eu, e);
    }
    function Gy(e) {
      Lr(sl, e), Lr(eu, e);
    }
    function nC(e, t, a) {
      {
        if (eu.current !== _a)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Nr(eu, t, e), Nr(sl, a, e);
      }
    }
    function rC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ze(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ze(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ze(e) || "Unknown";
          Ri(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || _a;
        return qy = eu.current, Nr(eu, a, e), Nr(sl, sl.current, e), !0;
      }
    }
    function aC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = rC(e, t, qy);
          i.__reactInternalMemoizedMergedChildContext = u, Lr(sl, e), Lr(eu, e), Nr(eu, u, e), Nr(sl, a, e);
        } else
          Lr(sl, e), Nr(sl, a, e);
      }
    }
    function w1(e) {
      {
        if (!Nl(e) || e.tag !== q)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case H:
              return t.stateNode.context;
            case q: {
              var a = t.type;
              if (cl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var $u = 0, _h = 1, tu = null, Xy = !1, Ky = !1;
    function iC(e) {
      tu === null ? tu = [e] : tu.push(e);
    }
    function x1(e) {
      Xy = !0, iC(e);
    }
    function lC() {
      Xy && Yu();
    }
    function Yu() {
      if (!Ky && tu !== null) {
        Ky = !0;
        var e = 0, t = sa();
        try {
          var a = !0, i = tu;
          for (Tn(lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          tu = null, Xy = !1;
        } catch (s) {
          throw tu !== null && (tu = tu.slice(e + 1)), ed(_o, Yu), s;
        } finally {
          Tn(t), Ky = !1;
        }
      }
      return null;
    }
    var Kc = [], Zc = 0, kh = null, Oh = 0, Wa = [], qa = 0, cs = null, nu = 1, ru = "";
    function b1(e) {
      return ds(), (e.flags & ja) !== De;
    }
    function D1(e) {
      return ds(), Oh;
    }
    function _1() {
      var e = ru, t = nu, a = t & ~k1(t);
      return a.toString(32) + e;
    }
    function fs(e, t) {
      ds(), Kc[Zc++] = Oh, Kc[Zc++] = kh, kh = e, Oh = t;
    }
    function uC(e, t, a) {
      ds(), Wa[qa++] = nu, Wa[qa++] = ru, Wa[qa++] = cs, cs = e;
      var i = nu, u = ru, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var m = s - s % 5, g = (1 << m) - 1, w = (f & g).toString(32), T = f >> m, M = s - m, z = Mh(t) + M, U = p << M, ae = U | T, Le = w + u;
        nu = 1 << z | ae, ru = Le;
      } else {
        var Ce = p << s, pt = Ce | f, st = u;
        nu = 1 << v | pt, ru = st;
      }
    }
    function Zy(e) {
      ds();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        fs(e, a), uC(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - En(e);
    }
    function k1(e) {
      return 1 << Mh(e) - 1;
    }
    function Jy(e) {
      for (; e === kh; )
        kh = Kc[--Zc], Kc[Zc] = null, Oh = Kc[--Zc], Kc[Zc] = null;
      for (; e === cs; )
        cs = Wa[--qa], Wa[qa] = null, ru = Wa[--qa], Wa[qa] = null, nu = Wa[--qa], Wa[qa] = null;
    }
    function O1() {
      return ds(), cs !== null ? {
        id: nu,
        overflow: ru
      } : null;
    }
    function M1(e, t) {
      ds(), Wa[qa++] = nu, Wa[qa++] = ru, Wa[qa++] = cs, nu = t.id, ru = t.overflow, cs = e;
    }
    function ds() {
      fr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var cr = null, Ga = null, wi = !1, ps = !1, Iu = null;
    function L1() {
      wi && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function oC() {
      ps = !0;
    }
    function N1() {
      return ps;
    }
    function z1(e) {
      var t = e.stateNode.containerInfo;
      return Ga = Zw(t), cr = e, wi = !0, Iu = null, ps = !1, !0;
    }
    function U1(e, t, a) {
      return Ga = Jw(t), cr = e, wi = !0, Iu = null, ps = !1, a !== null && M1(e, a), !0;
    }
    function sC(e, t) {
      switch (e.tag) {
        case H: {
          s1(e.stateNode.containerInfo, t);
          break;
        }
        case X: {
          var a = (e.mode & at) !== _e;
          f1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case P: {
          var i = e.memoizedState;
          i.dehydrated !== null && c1(i.dehydrated, t);
          break;
        }
      }
    }
    function cC(e, t) {
      sC(e, t);
      var a = HD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= na) : i.push(a);
    }
    function eg(e, t) {
      {
        if (ps)
          return;
        switch (e.tag) {
          case H: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case X:
                var i = t.type;
                t.pendingProps, d1(a, i);
                break;
              case Me:
                var u = t.pendingProps;
                p1(a, u);
                break;
            }
            break;
          }
          case X: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case X: {
                var v = t.type, m = t.pendingProps, g = (e.mode & at) !== _e;
                m1(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Me: {
                var w = t.pendingProps, T = (e.mode & at) !== _e;
                y1(
                  s,
                  f,
                  p,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
            }
            break;
          }
          case P: {
            var M = e.memoizedState, z = M.dehydrated;
            if (z !== null) switch (t.tag) {
              case X:
                var U = t.type;
                t.pendingProps, v1(z, U);
                break;
              case Me:
                var ae = t.pendingProps;
                h1(z, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function fC(e, t) {
      t.flags = t.flags & -4097 | un, eg(e, t);
    }
    function dC(e, t) {
      switch (e.tag) {
        case X: {
          var a = e.type;
          e.pendingProps;
          var i = Qw(t, a);
          return i !== null ? (e.stateNode = i, cr = e, Ga = Kw(i), !0) : !1;
        }
        case Me: {
          var u = e.pendingProps, s = Ww(t, u);
          return s !== null ? (e.stateNode = s, cr = e, Ga = null, !0) : !1;
        }
        case P: {
          var f = qw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: O1(),
              retryLane: $r
            };
            e.memoizedState = p;
            var v = PD(f);
            return v.return = e, e.child = v, cr = e, Ga = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & at) !== _e && (e.flags & we) === De;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (wi) {
        var t = Ga;
        if (!t) {
          tg(e) && (eg(cr, e), ng()), fC(cr, e), wi = !1, cr = e;
          return;
        }
        var a = t;
        if (!dC(e, t)) {
          tg(e) && (eg(cr, e), ng()), t = qd(a);
          var i = cr;
          if (!t || !dC(e, t)) {
            fC(cr, e), wi = !1, cr = e;
            return;
          }
          cC(i, a);
        }
      }
    }
    function A1(e, t, a) {
      var i = e.stateNode, u = !ps, s = e1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function j1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = t1(t, a, e);
      if (i) {
        var u = cr;
        if (u !== null)
          switch (u.tag) {
            case H: {
              var s = u.stateNode.containerInfo, f = (u.mode & at) !== _e;
              u1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case X: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, g = (u.mode & at) !== _e;
              o1(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function F1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      n1(a, e);
    }
    function H1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return r1(a);
    }
    function pC(e) {
      for (var t = e.return; t !== null && t.tag !== X && t.tag !== H && t.tag !== P; )
        t = t.return;
      cr = t;
    }
    function Lh(e) {
      if (e !== cr)
        return !1;
      if (!wi)
        return pC(e), wi = !0, !1;
      if (e.tag !== H && (e.tag !== X || l1(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = Ga;
        if (t)
          if (tg(e))
            vC(e), ng();
          else
            for (; t; )
              cC(e, t), t = qd(t);
      }
      return pC(e), e.tag === P ? Ga = H1(e) : Ga = cr ? qd(e.stateNode) : null, !0;
    }
    function P1() {
      return wi && Ga !== null;
    }
    function vC(e) {
      for (var t = Ga; t; )
        sC(e, t), t = qd(t);
    }
    function Jc() {
      cr = null, Ga = null, wi = !1, ps = !1;
    }
    function hC() {
      Iu !== null && (oT(Iu), Iu = null);
    }
    function fr() {
      return wi;
    }
    function ag(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    var V1 = x.ReactCurrentBatchConfig, B1 = null;
    function $1() {
      return V1.transition;
    }
    var xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Y1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Lt && (t = a), a = a.return;
        return t;
      }, vs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Zd = [], Jd = [], ep = [], tp = [], np = [], rp = [], hs = /* @__PURE__ */ new Set();
      xi.recordUnsafeLifecycleWarnings = function(e, t) {
        hs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Zd.push(e), e.mode & Lt && typeof t.UNSAFE_componentWillMount == "function" && Jd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ep.push(e), e.mode & Lt && typeof t.UNSAFE_componentWillReceiveProps == "function" && tp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && np.push(e), e.mode & Lt && typeof t.UNSAFE_componentWillUpdate == "function" && rp.push(e));
      }, xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Zd.length > 0 && (Zd.forEach(function(T) {
          e.add(Ze(T) || "Component"), hs.add(T.type);
        }), Zd = []);
        var t = /* @__PURE__ */ new Set();
        Jd.length > 0 && (Jd.forEach(function(T) {
          t.add(Ze(T) || "Component"), hs.add(T.type);
        }), Jd = []);
        var a = /* @__PURE__ */ new Set();
        ep.length > 0 && (ep.forEach(function(T) {
          a.add(Ze(T) || "Component"), hs.add(T.type);
        }), ep = []);
        var i = /* @__PURE__ */ new Set();
        tp.length > 0 && (tp.forEach(function(T) {
          i.add(Ze(T) || "Component"), hs.add(T.type);
        }), tp = []);
        var u = /* @__PURE__ */ new Set();
        np.length > 0 && (np.forEach(function(T) {
          u.add(Ze(T) || "Component"), hs.add(T.type);
        }), np = []);
        var s = /* @__PURE__ */ new Set();
        if (rp.length > 0 && (rp.forEach(function(T) {
          s.add(Ze(T) || "Component"), hs.add(T.type);
        }), rp = []), t.size > 0) {
          var f = vs(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = vs(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = vs(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = vs(e);
          fe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var g = vs(a);
          fe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = vs(u);
          fe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Nh = /* @__PURE__ */ new Map(), mC = /* @__PURE__ */ new Set();
      xi.recordLegacyContextWarning = function(e, t) {
        var a = Y1(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!mC.has(e.type)) {
          var i = Nh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Nh.set(a, i)), i.push(e));
        }
      }, xi.flushLegacyContextWarning = function() {
        Nh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ze(s) || "Component"), mC.add(s.type);
            });
            var u = vs(i);
            try {
              Yt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              rn();
            }
          }
        });
      }, xi.discardPendingWarnings = function() {
        Zd = [], Jd = [], ep = [], tp = [], np = [], rp = [], Nh = /* @__PURE__ */ new Map();
      };
    }
    var ig, lg, ug, og, sg, yC = function(e, t) {
    };
    ig = !1, lg = !1, ug = {}, og = {}, sg = {}, yC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ze(t) || "Component";
        og[a] || (og[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function I1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ap(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Lt || pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== q) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !I1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ze(e) || "Component";
          ug[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ug[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== q)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          zi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var g = function(w) {
            var T = v.refs;
            w === null ? delete T[m] : T[m] = w;
          };
          return g._stringRef = m, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function zh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Uh(e) {
      {
        var t = Ze(e) || "Component";
        if (sg[t])
          return;
        sg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function gC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function SC(e) {
      function t(D, A) {
        if (e) {
          var _ = D.deletions;
          _ === null ? (D.deletions = [A], D.flags |= na) : _.push(A);
        }
      }
      function a(D, A) {
        if (!e)
          return null;
        for (var _ = A; _ !== null; )
          t(D, _), _ = _.sibling;
        return null;
      }
      function i(D, A) {
        for (var _ = /* @__PURE__ */ new Map(), Q = A; Q !== null; )
          Q.key !== null ? _.set(Q.key, Q) : _.set(Q.index, Q), Q = Q.sibling;
        return _;
      }
      function u(D, A) {
        var _ = ws(D, A);
        return _.index = 0, _.sibling = null, _;
      }
      function s(D, A, _) {
        if (D.index = _, !e)
          return D.flags |= ja, A;
        var Q = D.alternate;
        if (Q !== null) {
          var ce = Q.index;
          return ce < A ? (D.flags |= un, A) : ce;
        } else
          return D.flags |= un, A;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= un), D;
      }
      function p(D, A, _, Q) {
        if (A === null || A.tag !== Me) {
          var ce = aE(_, D.mode, Q);
          return ce.return = D, ce;
        } else {
          var le = u(A, _);
          return le.return = D, le;
        }
      }
      function v(D, A, _, Q) {
        var ce = _.type;
        if (ce === ji)
          return g(D, A, _.props.children, Q, _.key);
        if (A !== null && (A.elementType === ce || // Keep this check inline so it only runs on the false path:
        wT(A, _) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ce == "object" && ce !== null && ce.$$typeof === Ke && gC(ce) === A.type)) {
          var le = u(A, _.props);
          return le.ref = ap(D, A, _), le.return = D, le._debugSource = _._source, le._debugOwner = _._owner, le;
        }
        var Be = rE(_, D.mode, Q);
        return Be.ref = ap(D, A, _), Be.return = D, Be;
      }
      function m(D, A, _, Q) {
        if (A === null || A.tag !== te || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation) {
          var ce = iE(_, D.mode, Q);
          return ce.return = D, ce;
        } else {
          var le = u(A, _.children || []);
          return le.return = D, le;
        }
      }
      function g(D, A, _, Q, ce) {
        if (A === null || A.tag !== Ne) {
          var le = no(_, D.mode, Q, ce);
          return le.return = D, le;
        } else {
          var Be = u(A, _);
          return Be.return = D, Be;
        }
      }
      function w(D, A, _) {
        if (typeof A == "string" && A !== "" || typeof A == "number") {
          var Q = aE("" + A, D.mode, _);
          return Q.return = D, Q;
        }
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ga: {
              var ce = rE(A, D.mode, _);
              return ce.ref = ap(D, null, A), ce.return = D, ce;
            }
            case Sr: {
              var le = iE(A, D.mode, _);
              return le.return = D, le;
            }
            case Ke: {
              var Be = A._payload, We = A._init;
              return w(D, We(Be), _);
            }
          }
          if (An(A) || nt(A)) {
            var zt = no(A, D.mode, _, null);
            return zt.return = D, zt;
          }
          zh(D, A);
        }
        return typeof A == "function" && Uh(D), null;
      }
      function T(D, A, _, Q) {
        var ce = A !== null ? A.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
          return ce !== null ? null : p(D, A, "" + _, Q);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case ga:
              return _.key === ce ? v(D, A, _, Q) : null;
            case Sr:
              return _.key === ce ? m(D, A, _, Q) : null;
            case Ke: {
              var le = _._payload, Be = _._init;
              return T(D, A, Be(le), Q);
            }
          }
          if (An(_) || nt(_))
            return ce !== null ? null : g(D, A, _, Q, null);
          zh(D, _);
        }
        return typeof _ == "function" && Uh(D), null;
      }
      function M(D, A, _, Q, ce) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var le = D.get(_) || null;
          return p(A, le, "" + Q, ce);
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case ga: {
              var Be = D.get(Q.key === null ? _ : Q.key) || null;
              return v(A, Be, Q, ce);
            }
            case Sr: {
              var We = D.get(Q.key === null ? _ : Q.key) || null;
              return m(A, We, Q, ce);
            }
            case Ke:
              var zt = Q._payload, Rt = Q._init;
              return M(D, A, _, Rt(zt), ce);
          }
          if (An(Q) || nt(Q)) {
            var On = D.get(_) || null;
            return g(A, On, Q, ce, null);
          }
          zh(A, Q);
        }
        return typeof Q == "function" && Uh(A), null;
      }
      function z(D, A, _) {
        {
          if (typeof D != "object" || D === null)
            return A;
          switch (D.$$typeof) {
            case ga:
            case Sr:
              yC(D, _);
              var Q = D.key;
              if (typeof Q != "string")
                break;
              if (A === null) {
                A = /* @__PURE__ */ new Set(), A.add(Q);
                break;
              }
              if (!A.has(Q)) {
                A.add(Q);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Q);
              break;
            case Ke:
              var ce = D._payload, le = D._init;
              z(le(ce), A, _);
              break;
          }
        }
        return A;
      }
      function U(D, A, _, Q) {
        for (var ce = null, le = 0; le < _.length; le++) {
          var Be = _[le];
          ce = z(Be, ce, D);
        }
        for (var We = null, zt = null, Rt = A, On = 0, wt = 0, xn = null; Rt !== null && wt < _.length; wt++) {
          Rt.index > wt ? (xn = Rt, Rt = null) : xn = Rt.sibling;
          var Ur = T(D, Rt, _[wt], Q);
          if (Ur === null) {
            Rt === null && (Rt = xn);
            break;
          }
          e && Rt && Ur.alternate === null && t(D, Rt), On = s(Ur, On, wt), zt === null ? We = Ur : zt.sibling = Ur, zt = Ur, Rt = xn;
        }
        if (wt === _.length) {
          if (a(D, Rt), fr()) {
            var gr = wt;
            fs(D, gr);
          }
          return We;
        }
        if (Rt === null) {
          for (; wt < _.length; wt++) {
            var Oa = w(D, _[wt], Q);
            Oa !== null && (On = s(Oa, On, wt), zt === null ? We = Oa : zt.sibling = Oa, zt = Oa);
          }
          if (fr()) {
            var Gr = wt;
            fs(D, Gr);
          }
          return We;
        }
        for (var Xr = i(D, Rt); wt < _.length; wt++) {
          var Ar = M(Xr, D, wt, _[wt], Q);
          Ar !== null && (e && Ar.alternate !== null && Xr.delete(Ar.key === null ? wt : Ar.key), On = s(Ar, On, wt), zt === null ? We = Ar : zt.sibling = Ar, zt = Ar);
        }
        if (e && Xr.forEach(function(Sf) {
          return t(D, Sf);
        }), fr()) {
          var cu = wt;
          fs(D, cu);
        }
        return We;
      }
      function ae(D, A, _, Q) {
        var ce = nt(_);
        if (typeof ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          _[Symbol.toStringTag] === "Generator" && (lg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lg = !0), _.entries === ce && (ig || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ig = !0);
          var le = ce.call(_);
          if (le)
            for (var Be = null, We = le.next(); !We.done; We = le.next()) {
              var zt = We.value;
              Be = z(zt, Be, D);
            }
        }
        var Rt = ce.call(_);
        if (Rt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var On = null, wt = null, xn = A, Ur = 0, gr = 0, Oa = null, Gr = Rt.next(); xn !== null && !Gr.done; gr++, Gr = Rt.next()) {
          xn.index > gr ? (Oa = xn, xn = null) : Oa = xn.sibling;
          var Xr = T(D, xn, Gr.value, Q);
          if (Xr === null) {
            xn === null && (xn = Oa);
            break;
          }
          e && xn && Xr.alternate === null && t(D, xn), Ur = s(Xr, Ur, gr), wt === null ? On = Xr : wt.sibling = Xr, wt = Xr, xn = Oa;
        }
        if (Gr.done) {
          if (a(D, xn), fr()) {
            var Ar = gr;
            fs(D, Ar);
          }
          return On;
        }
        if (xn === null) {
          for (; !Gr.done; gr++, Gr = Rt.next()) {
            var cu = w(D, Gr.value, Q);
            cu !== null && (Ur = s(cu, Ur, gr), wt === null ? On = cu : wt.sibling = cu, wt = cu);
          }
          if (fr()) {
            var Sf = gr;
            fs(D, Sf);
          }
          return On;
        }
        for (var Ap = i(D, xn); !Gr.done; gr++, Gr = Rt.next()) {
          var gl = M(Ap, D, gr, Gr.value, Q);
          gl !== null && (e && gl.alternate !== null && Ap.delete(gl.key === null ? gr : gl.key), Ur = s(gl, Ur, gr), wt === null ? On = gl : wt.sibling = gl, wt = gl);
        }
        if (e && Ap.forEach(function(y_) {
          return t(D, y_);
        }), fr()) {
          var m_ = gr;
          fs(D, m_);
        }
        return On;
      }
      function Le(D, A, _, Q) {
        if (A !== null && A.tag === Me) {
          a(D, A.sibling);
          var ce = u(A, _);
          return ce.return = D, ce;
        }
        a(D, A);
        var le = aE(_, D.mode, Q);
        return le.return = D, le;
      }
      function Ce(D, A, _, Q) {
        for (var ce = _.key, le = A; le !== null; ) {
          if (le.key === ce) {
            var Be = _.type;
            if (Be === ji) {
              if (le.tag === Ne) {
                a(D, le.sibling);
                var We = u(le, _.props.children);
                return We.return = D, We._debugSource = _._source, We._debugOwner = _._owner, We;
              }
            } else if (le.elementType === Be || // Keep this check inline so it only runs on the false path:
            wT(le, _) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === Ke && gC(Be) === le.type) {
              a(D, le.sibling);
              var zt = u(le, _.props);
              return zt.ref = ap(D, le, _), zt.return = D, zt._debugSource = _._source, zt._debugOwner = _._owner, zt;
            }
            a(D, le);
            break;
          } else
            t(D, le);
          le = le.sibling;
        }
        if (_.type === ji) {
          var Rt = no(_.props.children, D.mode, Q, _.key);
          return Rt.return = D, Rt;
        } else {
          var On = rE(_, D.mode, Q);
          return On.ref = ap(D, A, _), On.return = D, On;
        }
      }
      function pt(D, A, _, Q) {
        for (var ce = _.key, le = A; le !== null; ) {
          if (le.key === ce)
            if (le.tag === te && le.stateNode.containerInfo === _.containerInfo && le.stateNode.implementation === _.implementation) {
              a(D, le.sibling);
              var Be = u(le, _.children || []);
              return Be.return = D, Be;
            } else {
              a(D, le);
              break;
            }
          else
            t(D, le);
          le = le.sibling;
        }
        var We = iE(_, D.mode, Q);
        return We.return = D, We;
      }
      function st(D, A, _, Q) {
        var ce = typeof _ == "object" && _ !== null && _.type === ji && _.key === null;
        if (ce && (_ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case ga:
              return f(Ce(D, A, _, Q));
            case Sr:
              return f(pt(D, A, _, Q));
            case Ke:
              var le = _._payload, Be = _._init;
              return st(D, A, Be(le), Q);
          }
          if (An(_))
            return U(D, A, _, Q);
          if (nt(_))
            return ae(D, A, _, Q);
          zh(D, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" ? f(Le(D, A, "" + _, Q)) : (typeof _ == "function" && Uh(D), a(D, A));
      }
      return st;
    }
    var ef = SC(!0), EC = SC(!1);
    function Q1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ws(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ws(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function W1(e, t) {
      for (var a = e.child; a !== null; )
        zD(a, t), a = a.sibling;
    }
    var cg = Bu(null), fg;
    fg = {};
    var Ah = null, tf = null, dg = null, jh = !1;
    function Fh() {
      Ah = null, tf = null, dg = null, jh = !1;
    }
    function CC() {
      jh = !0;
    }
    function TC() {
      jh = !1;
    }
    function RC(e, t, a) {
      Nr(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      Lr(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ql(i.childLanes, t) ? u !== null && !Ql(u.childLanes, t) && (u.childLanes = Je(u.childLanes, t)) : (i.childLanes = Je(i.childLanes, t), u !== null && (u.childLanes = Je(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function q1(e, t, a) {
      G1(e, t, a);
    }
    function G1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === q) {
                var p = Bo(a), v = au(Ft, p);
                v.tag = Ph;
                var m = i.updateQueue;
                if (m !== null) {
                  var g = m.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = Je(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Je(T.lanes, a)), vg(i.return, a, e), s.lanes = Je(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ut)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Je(M.lanes, a);
          var z = M.alternate;
          z !== null && (z.lanes = Je(z.lanes, a)), vg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var U = u.sibling;
            if (U !== null) {
              U.return = u.return, u = U;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function nf(e, t) {
      Ah = e, tf = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (_r(a.lanes, t) && Sp(), a.firstContext = null);
      }
    }
    function zn(e) {
      jh && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (tf === null) {
          if (Ah === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          tf = a, Ah.dependencies = {
            lanes: F,
            firstContext: a
          };
        } else
          tf = tf.next = a;
      }
      return t;
    }
    var ms = null;
    function hg(e) {
      ms === null ? ms = [e] : ms.push(e);
    }
    function X1() {
      if (ms !== null) {
        for (var e = 0; e < ms.length; e++) {
          var t = ms[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ms = null;
      }
    }
    function wC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Hh(e, i);
    }
    function K1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Z1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Hh(e, i);
    }
    function da(e, t) {
      return Hh(e, t);
    }
    var J1 = Hh;
    function Hh(e, t) {
      e.lanes = Je(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Je(a.lanes, t)), a === null && (e.flags & (un | ra)) !== De && ET(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Je(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Je(a.childLanes, t) : (u.flags & (un | ra)) !== De && ET(e), i = u, u = u.return;
      if (i.tag === H) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var xC = 0, bC = 1, Ph = 2, mg = 3, Vh = !1, yg, Bh;
    yg = !1, Bh = null;
    function gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: F
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function DC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function au(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: xC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Qu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Bh === u && !yg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = !0), Kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, J1(e, a);
      } else
        return Z1(e, u, t, a);
    }
    function $h(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (yd(a)) {
          var s = u.lanes;
          s = Sd(s, e.pendingLanes);
          var f = Je(s, a);
          u.lanes = f, _c(e, f);
        }
      }
    }
    function Sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function ex(e, t, a, i, u, s) {
      switch (a.tag) {
        case bC: {
          var f = a.payload;
          if (typeof f == "function") {
            CC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Lt) {
                Jt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              TC();
            }
            return p;
          }
          return f;
        }
        case mg:
          e.flags = e.flags & -65537 | we;
        // Intentional fallthrough
        case xC: {
          var v = a.payload, m;
          if (typeof v == "function") {
            CC(), m = v.call(s, i, u);
            {
              if (e.mode & Lt) {
                Jt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              TC();
            }
          } else
            m = v;
          return m == null ? i : rt({}, i, m);
        }
        case Ph:
          return Vh = !0, i;
      }
      return i;
    }
    function Yh(e, t, a, i) {
      var u = e.updateQueue;
      Vh = !1, Bh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var g = e.alternate;
        if (g !== null) {
          var w = g.updateQueue, T = w.lastBaseUpdate;
          T !== f && (T === null ? w.firstBaseUpdate = m : T.next = m, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, z = F, U = null, ae = null, Le = null, Ce = s;
        do {
          var pt = Ce.lane, st = Ce.eventTime;
          if (Ql(i, pt)) {
            if (Le !== null) {
              var A = {
                eventTime: st,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yt,
                tag: Ce.tag,
                payload: Ce.payload,
                callback: Ce.callback,
                next: null
              };
              Le = Le.next = A;
            }
            M = ex(e, u, Ce, M, t, a);
            var _ = Ce.callback;
            if (_ !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ce.lane !== yt) {
              e.flags |= Vt;
              var Q = u.effects;
              Q === null ? u.effects = [Ce] : Q.push(Ce);
            }
          } else {
            var D = {
              eventTime: st,
              lane: pt,
              tag: Ce.tag,
              payload: Ce.payload,
              callback: Ce.callback,
              next: null
            };
            Le === null ? (ae = Le = D, U = M) : Le = Le.next = D, z = Je(z, pt);
          }
          if (Ce = Ce.next, Ce === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ce = p, le = ce.next;
            ce.next = null, Ce = le, u.lastBaseUpdate = ce, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (U = M), u.baseState = U, u.firstBaseUpdate = ae, u.lastBaseUpdate = Le;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var We = Be;
          do
            z = Je(z, We.lane), We = We.next;
          while (We !== Be);
        } else s === null && (u.shared.lanes = F);
        Mp(z), e.lanes = z, e.memoizedState = M;
      }
      Bh = null;
    }
    function tx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function _C() {
      Vh = !1;
    }
    function Ih() {
      return Vh;
    }
    function kC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, tx(f, a));
        }
    }
    var ip = {}, Wu = Bu(ip), lp = Bu(ip), Qh = Bu(ip);
    function Wh(e) {
      if (e === ip)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OC() {
      var e = Wh(Qh.current);
      return e;
    }
    function Eg(e, t) {
      Nr(Qh, t, e), Nr(lp, e, e), Nr(Wu, ip, e);
      var a = gw(t);
      Lr(Wu, e), Nr(Wu, a, e);
    }
    function rf(e) {
      Lr(Wu, e), Lr(lp, e), Lr(Qh, e);
    }
    function Cg() {
      var e = Wh(Wu.current);
      return e;
    }
    function MC(e) {
      Wh(Qh.current);
      var t = Wh(Wu.current), a = Sw(t, e.type);
      t !== a && (Nr(lp, e, e), Nr(Wu, a, e));
    }
    function Tg(e) {
      lp.current === e && (Lr(Wu, e), Lr(lp, e));
    }
    var nx = 0, LC = 1, NC = 1, up = 2, bi = Bu(nx);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function af(e) {
      return e & LC;
    }
    function wg(e, t) {
      return e & LC | t;
    }
    function rx(e, t) {
      return e | t;
    }
    function qu(e, t) {
      Nr(bi, t, e);
    }
    function lf(e) {
      Lr(bi, e);
    }
    function ax(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === P) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || XE(i) || By(i))
              return t;
          }
        } else if (t.tag === Ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & we) !== De;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var pa = (
      /*   */
      0
    ), Vn = (
      /* */
      1
    ), fl = (
      /*  */
      2
    ), Bn = (
      /*    */
      4
    ), dr = (
      /*   */
      8
    ), xg = [];
    function bg() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function ix(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var oe = x.ReactCurrentDispatcher, op = x.ReactCurrentBatchConfig, Dg, uf;
    Dg = /* @__PURE__ */ new Set();
    var ys = F, Nt = null, $n = null, Yn = null, Gh = !1, sp = !1, cp = 0, lx = 0, ux = 25, j = null, Xa = null, Gu = -1, _g = !1;
    function Dt() {
      {
        var e = j;
        Xa === null ? Xa = [e] : Xa.push(e);
      }
    }
    function ne() {
      {
        var e = j;
        Xa !== null && (Gu++, Xa[Gu] !== e && ox(e));
      }
    }
    function of(e) {
      e != null && !An(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", j, typeof e);
    }
    function ox(e) {
      {
        var t = Ze(Nt);
        if (!Dg.has(t) && (Dg.add(t), Xa !== null)) {
          for (var a = "", i = 30, u = 0; u <= Gu; u++) {
            for (var s = Xa[u], f = u === Gu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function zr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", j), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, j, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Y(e[a], t[a]))
          return !1;
      return !0;
    }
    function sf(e, t, a, i, u, s) {
      ys = s, Nt = t, Xa = e !== null ? e._debugHookTypes : null, Gu = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = F, e !== null && e.memoizedState !== null ? oe.current = t0 : Xa !== null ? oe.current = e0 : oe.current = JC;
      var f = a(i, u);
      if (sp) {
        var p = 0;
        do {
          if (sp = !1, cp = 0, p >= ux)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, $n = null, Yn = null, t.updateQueue = null, Gu = -1, oe.current = n0, f = a(i, u);
        } while (sp);
      }
      oe.current = om, t._debugHookTypes = Xa;
      var v = $n !== null && $n.next !== null;
      if (ys = F, Nt = null, $n = null, Yn = null, j = null, Xa = null, Gu = -1, e !== null && (e.flags & Sn) !== (t.flags & Sn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & at) !== _e && y("Internal React error: Expected static flag was missing. Please notify the React team."), Gh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function cf() {
      var e = cp !== 0;
      return cp = 0, e;
    }
    function zC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ct) !== _e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = $o(e.lanes, a);
    }
    function UC() {
      if (oe.current = om, Gh) {
        for (var e = Nt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Gh = !1;
      }
      ys = F, Nt = null, $n = null, Yn = null, Xa = null, Gu = -1, j = null, qC = !1, sp = !1, cp = 0;
    }
    function dl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Yn === null ? Nt.memoizedState = Yn = e : Yn = Yn.next = e, Yn;
    }
    function Ka() {
      var e;
      if ($n === null) {
        var t = Nt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = $n.next;
      var a;
      if (Yn === null ? a = Nt.memoizedState : a = Yn.next, a !== null)
        Yn = a, a = Yn.next, $n = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        $n = e;
        var i = {
          memoizedState: $n.memoizedState,
          baseState: $n.baseState,
          baseQueue: $n.baseQueue,
          queue: $n.queue,
          next: null
        };
        Yn === null ? Nt.memoizedState = Yn = i : Yn = Yn.next = i;
      }
      return Yn;
    }
    function AC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Og(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Mg(e, t, a) {
      var i = dl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = dx.bind(null, Nt, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = Ka(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = $n, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, w = s.baseState, T = null, M = null, z = null, U = g;
        do {
          var ae = U.lane;
          if (Ql(ys, ae)) {
            if (z !== null) {
              var Ce = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yt,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null
              };
              z = z.next = Ce;
            }
            if (U.hasEagerState)
              w = U.eagerState;
            else {
              var pt = U.action;
              w = e(w, pt);
            }
          } else {
            var Le = {
              lane: ae,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            };
            z === null ? (M = z = Le, T = w) : z = z.next = Le, Nt.lanes = Je(Nt.lanes, ae), Mp(ae);
          }
          U = U.next;
        } while (U !== null && U !== g);
        z === null ? T = w : z.next = M, Y(w, i.memoizedState) || Sp(), i.memoizedState = w, i.baseState = T, i.baseQueue = z, u.lastRenderedState = w;
      }
      var st = u.interleaved;
      if (st !== null) {
        var D = st;
        do {
          var A = D.lane;
          Nt.lanes = Je(Nt.lanes, A), Mp(A), D = D.next;
        } while (D !== st);
      } else f === null && (u.lanes = F);
      var _ = u.dispatch;
      return [i.memoizedState, _];
    }
    function Ng(e, t, a) {
      var i = Ka(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var g = m.action;
          p = e(p, g), m = m.next;
        } while (m !== v);
        Y(p, i.memoizedState) || Sp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function $_(e, t, a) {
    }
    function Y_(e, t, a) {
    }
    function zg(e, t, a) {
      var i = Nt, u = dl(), s, f = fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), uf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), uf = !0);
      } else {
        if (s = t(), !uf) {
          var p = t();
          Y(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), uf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        bc(v, ys) || jC(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, em(HC.bind(null, i, m, e), [e]), i.flags |= Rr, fp(Vn | dr, FC.bind(null, i, m, s, t), void 0, null), s;
    }
    function Xh(e, t, a) {
      var i = Nt, u = Ka(), s = t();
      if (!uf) {
        var f = t();
        Y(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), uf = !0);
      }
      var p = u.memoizedState, v = !Y(p, s);
      v && (u.memoizedState = s, Sp());
      var m = u.queue;
      if (pp(HC.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Yn !== null && Yn.memoizedState.tag & Vn) {
        i.flags |= Rr, fp(Vn | dr, FC.bind(null, i, m, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        bc(g, ys) || jC(i, t, s);
      }
      return s;
    }
    function jC(e, t, a) {
      e.flags |= bu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Nt.updateQueue;
      if (u === null)
        u = AC(), Nt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function FC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, PC(t) && VC(e);
    }
    function HC(e, t, a) {
      var i = function() {
        PC(t) && VC(e);
      };
      return a(i);
    }
    function PC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Y(a, i);
      } catch {
        return !0;
      }
    }
    function VC(e) {
      var t = da(e, Ve);
      t !== null && qn(t, e, Ve, Ft);
    }
    function Kh(e) {
      var t = dl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: Og,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = px.bind(null, Nt, a);
      return [t.memoizedState, i];
    }
    function Ug(e) {
      return Lg(Og);
    }
    function Ag(e) {
      return Ng(Og);
    }
    function fp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Nt.updateQueue;
      if (s === null)
        s = AC(), Nt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function jg(e) {
      var t = dl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = Ka();
      return t.memoizedState;
    }
    function dp(e, t, a, i) {
      var u = dl(), s = i === void 0 ? null : i;
      Nt.flags |= e, u.memoizedState = fp(Vn | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = Ka(), s = i === void 0 ? null : i, f = void 0;
      if ($n !== null) {
        var p = $n.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = fp(t, a, f, s);
            return;
          }
        }
      }
      Nt.flags |= e, u.memoizedState = fp(Vn | t, a, f, s);
    }
    function em(e, t) {
      return (Nt.mode & Ct) !== _e ? dp(Fa | Rr | Js, dr, e, t) : dp(Rr | Js, dr, e, t);
    }
    function pp(e, t) {
      return Jh(Rr, dr, e, t);
    }
    function Fg(e, t) {
      return dp(ct, fl, e, t);
    }
    function tm(e, t) {
      return Jh(ct, fl, e, t);
    }
    function Hg(e, t) {
      var a = ct;
      return a |= vi, (Nt.mode & Ct) !== _e && (a |= Wi), dp(a, Bn, e, t);
    }
    function nm(e, t) {
      return Jh(ct, Bn, e, t);
    }
    function BC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Pg(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ct;
      return u |= vi, (Nt.mode & Ct) !== _e && (u |= Wi), dp(u, Bn, BC.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh(ct, Bn, BC.bind(null, t, e), i);
    }
    function sx(e, t) {
    }
    var am = sx;
    function Vg(e, t) {
      var a = dl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = Ka(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = dl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = Ka(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $g(e) {
      var t = dl();
      return t.memoizedState = e, e;
    }
    function $C(e) {
      var t = Ka(), a = $n, i = a.memoizedState;
      return IC(t, i, e);
    }
    function YC(e) {
      var t = Ka();
      if ($n === null)
        return t.memoizedState = e, e;
      var a = $n.memoizedState;
      return IC(t, a, e);
    }
    function IC(e, t, a) {
      var i = !hd(ys);
      if (i) {
        if (!Y(a, t)) {
          var u = gd();
          Nt.lanes = Je(Nt.lanes, u), Mp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Sp()), e.memoizedState = a, a;
    }
    function cx(e, t, a) {
      var i = sa();
      Tn(jv(i, Ba)), e(!0);
      var u = op.transition;
      op.transition = {};
      var s = op.transition;
      op.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), op.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && fe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Yg() {
      var e = Kh(!1), t = e[0], a = e[1], i = cx.bind(null, a), u = dl();
      return u.memoizedState = i, [t, i];
    }
    function QC() {
      var e = Ug(), t = e[0], a = Ka(), i = a.memoizedState;
      return [t, i];
    }
    function WC() {
      var e = Ag(), t = e[0], a = Ka(), i = a.memoizedState;
      return [t, i];
    }
    var qC = !1;
    function fx() {
      return qC;
    }
    function Ig() {
      var e = dl(), t = Dm(), a = t.identifierPrefix, i;
      if (fr()) {
        var u = _1();
        i = ":" + a + "R" + u;
        var s = cp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = lx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = Ka(), t = e.memoizedState;
      return t;
    }
    function dx(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = eo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        XC(t, u);
      else {
        var s = wC(e, t, u, i);
        if (s !== null) {
          var f = qr();
          qn(s, e, i, f), KC(s, t, i);
        }
      }
      ZC(e, i);
    }
    function px(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = eo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        XC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === F && (s === null || s.lanes === F)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = oe.current, oe.current = Di;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, Y(m, v)) {
                K1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              oe.current = p;
            }
          }
        }
        var g = wC(e, t, u, i);
        if (g !== null) {
          var w = qr();
          qn(g, e, i, w), KC(g, t, i);
        }
      }
      ZC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === Nt || t !== null && t === Nt;
    }
    function XC(e, t) {
      sp = Gh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KC(e, t, a) {
      if (yd(a)) {
        var i = t.lanes;
        i = Sd(i, e.pendingLanes);
        var u = Je(i, a);
        t.lanes = u, _c(e, u);
      }
    }
    function ZC(e, t, a) {
      No(e, t);
    }
    var om = {
      readContext: zn,
      useCallback: zr,
      useContext: zr,
      useEffect: zr,
      useImperativeHandle: zr,
      useInsertionEffect: zr,
      useLayoutEffect: zr,
      useMemo: zr,
      useReducer: zr,
      useRef: zr,
      useState: zr,
      useDebugValue: zr,
      useDeferredValue: zr,
      useTransition: zr,
      useMutableSource: zr,
      useSyncExternalStore: zr,
      useId: zr,
      unstable_isNewReconciler: K
    }, JC = null, e0 = null, t0 = null, n0 = null, pl = null, Di = null, sm = null;
    {
      var Qg = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JC = {
        readContext: function(e) {
          return zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Dt(), of(t), Vg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Dt(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Dt(), of(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Dt(), of(a), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Dt(), of(t), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Dt(), of(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Dt(), of(t);
          var a = oe.current;
          oe.current = pl;
          try {
            return Bg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Dt();
          var i = oe.current;
          oe.current = pl;
          try {
            return Mg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Dt(), jg(e);
        },
        useState: function(e) {
          j = "useState", Dt();
          var t = oe.current;
          oe.current = pl;
          try {
            return Kh(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Dt(), $g(e);
        },
        useTransition: function() {
          return j = "useTransition", Dt(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Dt(), zg(e, t, a);
        },
        useId: function() {
          return j = "useId", Dt(), Ig();
        },
        unstable_isNewReconciler: K
      }, e0 = {
        readContext: function(e) {
          return zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", ne(), Vg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", ne(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", ne(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", ne(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", ne(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", ne(), Hg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", ne();
          var a = oe.current;
          oe.current = pl;
          try {
            return Bg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", ne();
          var i = oe.current;
          oe.current = pl;
          try {
            return Mg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", ne(), jg(e);
        },
        useState: function(e) {
          j = "useState", ne();
          var t = oe.current;
          oe.current = pl;
          try {
            return Kh(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", ne(), $g(e);
        },
        useTransition: function() {
          return j = "useTransition", ne(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", ne(), zg(e, t, a);
        },
        useId: function() {
          return j = "useId", ne(), Ig();
        },
        unstable_isNewReconciler: K
      }, t0 = {
        readContext: function(e) {
          return zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", ne(), im(e, t);
        },
        useContext: function(e) {
          return j = "useContext", ne(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", ne(), pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", ne();
          var a = oe.current;
          oe.current = Di;
          try {
            return lm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", ne();
          var i = oe.current;
          oe.current = Di;
          try {
            return Lg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", ne(), Zh();
        },
        useState: function(e) {
          j = "useState", ne();
          var t = oe.current;
          oe.current = Di;
          try {
            return Ug(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", ne(), am();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", ne(), $C(e);
        },
        useTransition: function() {
          return j = "useTransition", ne(), QC();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", ne(), Xh(e, t);
        },
        useId: function() {
          return j = "useId", ne(), um();
        },
        unstable_isNewReconciler: K
      }, n0 = {
        readContext: function(e) {
          return zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", ne(), im(e, t);
        },
        useContext: function(e) {
          return j = "useContext", ne(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", ne(), pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", ne();
          var a = oe.current;
          oe.current = sm;
          try {
            return lm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", ne();
          var i = oe.current;
          oe.current = sm;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", ne(), Zh();
        },
        useState: function(e) {
          j = "useState", ne();
          var t = oe.current;
          oe.current = sm;
          try {
            return Ag(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", ne(), am();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", ne(), YC(e);
        },
        useTransition: function() {
          return j = "useTransition", ne(), WC();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", ne(), Xh(e, t);
        },
        useId: function() {
          return j = "useId", ne(), um();
        },
        unstable_isNewReconciler: K
      }, pl = {
        readContext: function(e) {
          return Qg(), zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Qe(), Dt(), Vg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Qe(), Dt(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Qe(), Dt(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Qe(), Dt(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Qe(), Dt(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Qe(), Dt(), Hg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Qe(), Dt();
          var a = oe.current;
          oe.current = pl;
          try {
            return Bg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Qe(), Dt();
          var i = oe.current;
          oe.current = pl;
          try {
            return Mg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Qe(), Dt(), jg(e);
        },
        useState: function(e) {
          j = "useState", Qe(), Dt();
          var t = oe.current;
          oe.current = pl;
          try {
            return Kh(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Qe(), Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Qe(), Dt(), $g(e);
        },
        useTransition: function() {
          return j = "useTransition", Qe(), Dt(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Qe(), Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Qe(), Dt(), zg(e, t, a);
        },
        useId: function() {
          return j = "useId", Qe(), Dt(), Ig();
        },
        unstable_isNewReconciler: K
      }, Di = {
        readContext: function(e) {
          return Qg(), zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Qe(), ne(), im(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Qe(), ne(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Qe(), ne(), pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Qe(), ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Qe(), ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Qe(), ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Qe(), ne();
          var a = oe.current;
          oe.current = Di;
          try {
            return lm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Qe(), ne();
          var i = oe.current;
          oe.current = Di;
          try {
            return Lg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Qe(), ne(), Zh();
        },
        useState: function(e) {
          j = "useState", Qe(), ne();
          var t = oe.current;
          oe.current = Di;
          try {
            return Ug(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Qe(), ne(), am();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Qe(), ne(), $C(e);
        },
        useTransition: function() {
          return j = "useTransition", Qe(), ne(), QC();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Qe(), ne(), Xh(e, t);
        },
        useId: function() {
          return j = "useId", Qe(), ne(), um();
        },
        unstable_isNewReconciler: K
      }, sm = {
        readContext: function(e) {
          return Qg(), zn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Qe(), ne(), im(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Qe(), ne(), zn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Qe(), ne(), pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Qe(), ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Qe(), ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Qe(), ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Qe(), ne();
          var a = oe.current;
          oe.current = Di;
          try {
            return lm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Qe(), ne();
          var i = oe.current;
          oe.current = Di;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Qe(), ne(), Zh();
        },
        useState: function(e) {
          j = "useState", Qe(), ne();
          var t = oe.current;
          oe.current = Di;
          try {
            return Ag(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Qe(), ne(), am();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Qe(), ne(), YC(e);
        },
        useTransition: function() {
          return j = "useTransition", Qe(), ne(), WC();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Qe(), ne(), Xh(e, t);
        },
        useId: function() {
          return j = "useId", Qe(), ne(), um();
        },
        unstable_isNewReconciler: K
      };
    }
    var Xu = ee.unstable_now, r0 = 0, cm = -1, vp = -1, fm = -1, Wg = !1, dm = !1;
    function a0() {
      return Wg;
    }
    function vx() {
      dm = !0;
    }
    function hx() {
      Wg = !1, dm = !1;
    }
    function mx() {
      Wg = dm, dm = !1;
    }
    function i0() {
      return r0;
    }
    function l0() {
      r0 = Xu();
    }
    function qg(e) {
      vp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function u0(e) {
      vp = -1;
    }
    function pm(e, t) {
      if (vp >= 0) {
        var a = Xu() - vp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), vp = -1;
      }
    }
    function vl(e) {
      if (cm >= 0) {
        var t = Xu() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ye:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (fm >= 0) {
        var t = Xu() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case H:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ye:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function hl() {
      cm = Xu();
    }
    function Xg() {
      fm = Xu();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function _i(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Zg = {}, Jg, eS, tS, nS, rS, o0, vm, aS, iS, lS, hp;
    {
      Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), hp = /* @__PURE__ */ new Set();
      var s0 = /* @__PURE__ */ new Set();
      vm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          s0.has(a) || (s0.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, o0 = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          rS.has(a) || (rS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Zg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Zg);
    }
    function uS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Lt) {
          Jt(!0);
          try {
            s = a(i, u);
          } finally {
            Jt(!1);
          }
        }
        o0(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === F) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var oS = {
      isMounted: Cv,
      enqueueSetState: function(e, t, a) {
        var i = xu(e), u = qr(), s = eo(i), f = au(u, s);
        f.payload = t, a != null && (vm(a, "setState"), f.callback = a);
        var p = Qu(i, f, s);
        p !== null && (qn(p, i, s, u), $h(p, i, s)), No(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = xu(e), u = qr(), s = eo(i), f = au(u, s);
        f.tag = bC, f.payload = t, a != null && (vm(a, "replaceState"), f.callback = a);
        var p = Qu(i, f, s);
        p !== null && (qn(p, i, s, u), $h(p, i, s)), No(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = xu(e), i = qr(), u = eo(a), s = au(i, u);
        s.tag = Ph, t != null && (vm(t, "forceUpdate"), s.callback = t);
        var f = Qu(a, s, u);
        f !== null && (qn(f, a, u, i), $h(f, a, u)), lc(a, u);
      }
    };
    function c0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Lt) {
            Jt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Jt(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !me(a, i) || !me(u, s) : !0;
    }
    function yx(e, t, a) {
      var i = e.stateNode;
      {
        var u = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !hp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Lt) === _e && (hp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !hp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Lt) === _e && (hp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !iS.has(t) && (iS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !tS.has(t) && (tS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || An(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function f0(e, t) {
      t.updater = oS, e.stateNode = t, Ll(t, e), t._reactInternalInstance = Zg;
    }
    function d0(e, t, a) {
      var i = !1, u = _a, s = _a, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === E && f._context === void 0
        );
        if (!p && !lS.has(t)) {
          lS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Hi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = zn(f);
      else {
        u = Gc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Xc(e, u) : _a;
      }
      var g = new t(a, s);
      if (e.mode & Lt) {
        Jt(!0);
        try {
          g = new t(a, s);
        } finally {
          Jt(!1);
        }
      }
      var w = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      f0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var T = Mt(t) || "Component";
          eS.has(T) || (eS.add(T), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, g.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, z = null, U = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? U = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (U = "UNSAFE_componentWillUpdate"), M !== null || z !== null || U !== null) {
            var ae = Mt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            nS.has(ae) || (nS.add(ae), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Le, M !== null ? `
  ` + M : "", z !== null ? `
  ` + z : "", U !== null ? `
  ` + U : ""));
          }
        }
      }
      return i && tC(e, u, s), g;
    }
    function gx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function p0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ze(e) || "Component";
          Jg.has(s) || (Jg.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function sS(e, t, a, i) {
      yx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = zn(s);
      else {
        var f = Gc(e, t, !0);
        u.context = Xc(e, f);
      }
      {
        if (u.state === a) {
          var p = Mt(t) || "Component";
          aS.has(p) || (aS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Lt && xi.recordLegacyContextWarning(e, u), xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (uS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (gx(e, u), Yh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = ct;
        m |= vi, (e.mode & Ct) !== _e && (m |= Wi), e.flags |= m;
      }
    }
    function Sx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = _a;
      if (typeof p == "object" && p !== null)
        v = zn(p);
      else {
        var m = Gc(e, t, !0);
        v = Xc(e, m);
      }
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && p0(e, u, a, v), _C();
      var T = e.memoizedState, M = u.state = T;
      if (Yh(e, a, u, i), M = e.memoizedState, s === a && T === M && !xh() && !Ih()) {
        if (typeof u.componentDidMount == "function") {
          var z = ct;
          z |= vi, (e.mode & Ct) !== _e && (z |= Wi), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (uS(e, t, g, a), M = e.memoizedState);
      var U = Ih() || c0(e, t, s, a, T, M, v);
      if (U) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = ct;
          ae |= vi, (e.mode & Ct) !== _e && (ae |= Wi), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = ct;
          Le |= vi, (e.mode & Ct) !== _e && (Le |= Wi), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, U;
    }
    function Ex(e, t, a, i, u) {
      var s = t.stateNode;
      DC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : _i(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, g = a.contextType, w = _a;
      if (typeof g == "object" && g !== null)
        w = zn(g);
      else {
        var T = Gc(t, a, !0);
        w = Xc(t, T);
      }
      var M = a.getDerivedStateFromProps, z = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== w) && p0(t, s, i, w), _C();
      var U = t.memoizedState, ae = s.state = U;
      if (Yh(t, i, s, u), ae = t.memoizedState, f === v && U === ae && !xh() && !Ih())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= Dn), !1;
      typeof M == "function" && (uS(t, a, M, i), ae = t.memoizedState);
      var Le = Ih() || c0(t, a, p, i, U, ae, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Le ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, w)), typeof s.componentDidUpdate == "function" && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Dn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= Dn), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = w, Le;
    }
    function gs(e, t) {
      return {
        value: e,
        source: t,
        stack: Ds(t),
        digest: null
      };
    }
    function cS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Cx(e, t) {
      return !0;
    }
    function fS(e, t) {
      try {
        var a = Cx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === q)
            return;
          console.error(i);
        }
        var p = u ? Ze(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === H)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ze(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var w = v + `
` + f + `

` + ("" + m);
        console.error(w);
      } catch (T) {
        setTimeout(function() {
          throw T;
        });
      }
    }
    var Tx = typeof WeakMap == "function" ? WeakMap : Map;
    function v0(e, t, a) {
      var i = au(Ft, a);
      i.tag = mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        vD(u), fS(e, t);
      }, i;
    }
    function dS(e, t, a) {
      var i = au(Ft, a);
      i.tag = mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          xT(e), fS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        xT(e), fS(e, t), typeof u != "function" && dD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (_r(e.lanes, Ve) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ze(e) || "Unknown"));
      }), i;
    }
    function h0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Tx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = hD.bind(null, e, t, a);
        Dr && Lp(e, a), t.then(s, s);
      }
    }
    function Rx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function wx(e, t) {
      var a = e.tag;
      if ((e.mode & at) === _e && (a === G || a === xe || a === Ge)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function m0(e) {
      var t = e;
      do {
        if (t.tag === P && ax(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function y0(e, t, a, i, u) {
      if ((e.mode & at) === _e) {
        if (e === t)
          e.flags |= wr;
        else {
          if (e.flags |= we, a.flags |= Zs, a.flags &= -52805, a.tag === q) {
            var s = a.alternate;
            if (s === null)
              a.tag = _t;
            else {
              var f = au(Ft, Ve);
              f.tag = Ph, Qu(a, f, Ve);
            }
          }
          a.lanes = Je(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= wr, e.lanes = u, e;
    }
    function xx(e, t, a, i, u) {
      if (a.flags |= Do, Dr && Lp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        wx(a), fr() && a.mode & at && oC();
        var f = m0(t);
        if (f !== null) {
          f.flags &= -257, y0(f, t, a, e, u), f.mode & at && h0(e, s, u), Rx(f, e, s);
          return;
        } else {
          if (!kv(u)) {
            h0(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (fr() && a.mode & at) {
        oC();
        var v = m0(t);
        if (v !== null) {
          (v.flags & wr) === De && (v.flags |= Tr), y0(v, t, a, e, u), ag(gs(i, a));
          return;
        }
      }
      i = gs(i, a), aD(i);
      var m = t;
      do {
        switch (m.tag) {
          case H: {
            var g = i;
            m.flags |= wr;
            var w = Bo(u);
            m.lanes = Je(m.lanes, w);
            var T = v0(m, g, w);
            Sg(m, T);
            return;
          }
          case q:
            var M = i, z = m.type, U = m.stateNode;
            if ((m.flags & we) === De && (typeof z.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && !mT(U))) {
              m.flags |= wr;
              var ae = Bo(u);
              m.lanes = Je(m.lanes, ae);
              var Le = dS(m, M, ae);
              Sg(m, Le);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function bx() {
      return null;
    }
    var mp = x.ReactCurrentOwner, ki = !1, pS, yp, vS, hS, mS, Ss, yS, hm, gp;
    pS = {}, yp = {}, vS = {}, hS = {}, mS = {}, Ss = !1, yS = {}, hm = {}, gp = {};
    function Qr(e, t, a, i) {
      e === null ? t.child = EC(t, null, a, i) : t.child = ef(t, e.child, a, i);
    }
    function Dx(e, t, a, i) {
      t.child = ef(t, e.child, null, i), t.child = ef(t, null, a, i);
    }
    function g0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ri(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      nf(t, u), Vr(t);
      {
        if (mp.current = t, Un(!0), v = sf(e, t, f, i, p, u), m = cf(), t.mode & Lt) {
          Jt(!0);
          try {
            v = sf(e, t, f, i, p, u), m = cf();
          } finally {
            Jt(!1);
          }
        }
        Un(!1);
      }
      return Br(), e !== null && !ki ? (zC(e, t, u), iu(e, t, u)) : (fr() && m && Zy(t), t.flags |= Ta, Qr(e, t, v, u), t.child);
    }
    function S0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (LD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = gf(s), t.tag = Ge, t.type = f, ES(t, s), E0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ri(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          ), a.defaultProps !== void 0) {
            var v = Mt(s) || "Unknown";
            gp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), gp[v] = !0);
          }
        }
        var m = nE(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var g = a.type, w = g.propTypes;
        w && Ri(
          w,
          i,
          // Resolved props
          "prop",
          Mt(g)
        );
      }
      var T = e.child, M = bS(e, u);
      if (!M) {
        var z = T.memoizedProps, U = a.compare;
        if (U = U !== null ? U : me, U(z, i) && e.ref === t.ref)
          return iu(e, t, u);
      }
      t.flags |= Ta;
      var ae = ws(T, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function E0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Ri(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (me(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ki = !1, t.pendingProps = i = g, bS(e, u))
            (e.flags & Zs) !== De && (ki = !0);
          else return t.lanes = e.lanes, iu(e, t, u);
      }
      return gS(e, t, a, i, u);
    }
    function C0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & at) === _e) {
          var f = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, _m(t, a);
        } else if (_r(a, $r)) {
          var w = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var T = s !== null ? s.baseLanes : a;
          _m(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Je(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = $r;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, _m(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Je(s.baseLanes, a), t.memoizedState = null) : M = a, _m(t, M);
      }
      return Qr(e, t, u, a), t.child;
    }
    function _x(e, t, a) {
      var i = t.pendingProps;
      return Qr(e, t, i, a), t.child;
    }
    function kx(e, t, a) {
      var i = t.pendingProps.children;
      return Qr(e, t, i, a), t.child;
    }
    function Ox(e, t, a) {
      {
        t.flags |= ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Qr(e, t, s, a), t.child;
    }
    function T0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= an, t.flags |= Du);
    }
    function gS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ri(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = Gc(t, a, !0);
        f = Xc(t, p);
      }
      var v, m;
      nf(t, u), Vr(t);
      {
        if (mp.current = t, Un(!0), v = sf(e, t, a, i, f, u), m = cf(), t.mode & Lt) {
          Jt(!0);
          try {
            v = sf(e, t, a, i, f, u), m = cf();
          } finally {
            Jt(!1);
          }
        }
        Un(!1);
      }
      return Br(), e !== null && !ki ? (zC(e, t, u), iu(e, t, u)) : (fr() && m && Zy(t), t.flags |= Ta, Qr(e, t, v, u), t.child);
    }
    function R0(e, t, a, i, u) {
      {
        switch (WD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= we, t.flags |= wr;
            var m = new Error("Simulated error coming from DevTools"), g = Bo(u);
            t.lanes = Je(t.lanes, g);
            var w = dS(t, gs(m, t), g);
            Sg(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && Ri(
            T,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var M;
      cl(a) ? (M = !0, Dh(t)) : M = !1, nf(t, u);
      var z = t.stateNode, U;
      z === null ? (ym(e, t), d0(t, a, i), sS(t, a, i, u), U = !0) : e === null ? U = Sx(t, a, i, u) : U = Ex(e, t, a, i, u);
      var ae = SS(e, t, a, U, M, u);
      {
        var Le = t.stateNode;
        U && Le.props !== i && (Ss || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(t) || "a component"), Ss = !0);
      }
      return ae;
    }
    function SS(e, t, a, i, u, s) {
      T0(e, t);
      var f = (t.flags & we) !== De;
      if (!i && !f)
        return u && aC(t, a, !1), iu(e, t, s);
      var p = t.stateNode;
      mp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, u0();
      else {
        Vr(t);
        {
          if (Un(!0), v = p.render(), t.mode & Lt) {
            Jt(!0);
            try {
              p.render();
            } finally {
              Jt(!1);
            }
          }
          Un(!1);
        }
        Br();
      }
      return t.flags |= Ta, e !== null && f ? Dx(e, t, v, s) : Qr(e, t, v, s), t.memoizedState = p.state, u && aC(t, a, !0), t.child;
    }
    function w0(e) {
      var t = e.stateNode;
      t.pendingContext ? nC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nC(e, t.context, !1), Eg(e, t.containerInfo);
    }
    function Mx(e, t, a) {
      if (w0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      DC(e, t), Yh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & Tr) {
          var g = gs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return x0(e, t, p, a, g);
        } else if (p !== s) {
          var w = gs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return x0(e, t, p, a, w);
        } else {
          z1(t);
          var T = EC(t, null, p, a);
          t.child = T;
          for (var M = T; M; )
            M.flags = M.flags & -3 | ra, M = M.sibling;
        }
      } else {
        if (Jc(), p === s)
          return iu(e, t, a);
        Qr(e, t, p, a);
      }
      return t.child;
    }
    function x0(e, t, a, i, u) {
      return Jc(), ag(u), t.flags |= Tr, Qr(e, t, a, i), t.child;
    }
    function Lx(e, t, a) {
      MC(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Fy(i, u);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= Ra), T0(e, t), Qr(e, t, f, a), t.child;
    }
    function Nx(e, t) {
      return e === null && rg(t), null;
    }
    function zx(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = ND(v), g = _i(v, u), w;
      switch (m) {
        case G:
          return ES(t, v), t.type = v = gf(v), w = gS(null, t, v, g, i), w;
        case q:
          return t.type = v = XS(v), w = R0(null, t, v, g, i), w;
        case xe:
          return t.type = v = KS(v), w = g0(null, t, v, g, i), w;
        case ht: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && Ri(
              T,
              g,
              // Resolved for outer only
              "prop",
              Mt(v)
            );
          }
          return w = S0(
            null,
            t,
            v,
            _i(v.type, g),
            // The inner type can have defaults too
            i
          ), w;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ke && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function Ux(e, t, a, i, u) {
      ym(e, t), t.tag = q;
      var s;
      return cl(a) ? (s = !0, Dh(t)) : s = !1, nf(t, u), d0(t, a, i), sS(t, a, i, u), SS(null, t, a, !0, s, u);
    }
    function Ax(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s;
      {
        var f = Gc(t, a, !1);
        s = Xc(t, f);
      }
      nf(t, i);
      var p, v;
      Vr(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = Mt(a) || "Unknown";
          pS[m] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), pS[m] = !0);
        }
        t.mode & Lt && xi.recordLegacyContextWarning(t, null), Un(!0), mp.current = t, p = sf(null, t, a, u, s, i), v = cf(), Un(!1);
      }
      if (Br(), t.flags |= Ta, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Mt(a) || "Unknown";
        yp[g] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), yp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = Mt(a) || "Unknown";
          yp[w] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), yp[w] = !0);
        }
        t.tag = q, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return cl(a) ? (T = !0, Dh(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gg(t), f0(t, p), sS(t, a, u, i), SS(null, t, a, !0, T, i);
      } else {
        if (t.tag = G, t.mode & Lt) {
          Jt(!0);
          try {
            p = sf(null, t, a, u, s, i), v = cf();
          } finally {
            Jt(!1);
          }
        }
        return fr() && v && Zy(t), Qr(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Jr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), mS[u] || (mS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Mt(t) || "Unknown";
          gp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), gp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Mt(t) || "Unknown";
          hS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), hS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Mt(t) || "Unknown";
          vS[v] || (y("%s: Function components do not support contextType.", v), vS[v] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: yt
    };
    function TS(e) {
      return {
        baseLanes: e,
        cachePool: bx(),
        transitions: null
      };
    }
    function jx(e, t) {
      var a = null;
      return {
        baseLanes: Je(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Fx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Rg(e, up);
    }
    function Hx(e, t) {
      return $o(e.childLanes, t);
    }
    function b0(e, t, a) {
      var i = t.pendingProps;
      qD(t) && (t.flags |= we);
      var u = bi.current, s = !1, f = (t.flags & we) !== De;
      if (f || Fx(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = rx(u, NC)), u = af(u), qu(t, u), e === null) {
        rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Yx(t, v);
        }
        var m = i.children, g = i.fallback;
        if (s) {
          var w = Px(t, m, g, a), T = t.child;
          return T.memoizedState = TS(a), t.memoizedState = CS, w;
        } else
          return RS(t, m);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var z = M.dehydrated;
          if (z !== null)
            return Ix(e, t, f, i, z, M, a);
        }
        if (s) {
          var U = i.fallback, ae = i.children, Le = Bx(e, t, ae, U, a), Ce = t.child, pt = e.child.memoizedState;
          return Ce.memoizedState = pt === null ? TS(a) : jx(pt, a), Ce.childLanes = Hx(e, a), t.memoizedState = CS, Le;
        } else {
          var st = i.children, D = Vx(e, t, st, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Px(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & at) === _e && s !== null ? (p = s, p.childLanes = F, p.pendingProps = f, e.mode & Et && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = no(a, u, i, null)) : (p = wS(f, u), v = no(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return DT(e, t, F, null);
    }
    function D0(e, t) {
      return ws(e, t);
    }
    function Vx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = D0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & at) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= na) : p.push(s);
      }
      return t.child = f, f;
    }
    function Bx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & at) === _e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        m = g, m.childLanes = F, m.pendingProps = v, t.mode & Et && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = D0(f, v), m.subtreeFlags = f.subtreeFlags & Sn;
      var w;
      return p !== null ? w = ws(p, i) : (w = no(i, s, u, null), w.flags |= un), w.return = t, m.return = t, m.sibling = w, t.child = m, w;
    }
    function mm(e, t, a, i) {
      i !== null && ag(i), ef(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= un, t.memoizedState = null, f;
    }
    function $x(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = no(i, s, u, null);
      return v.flags |= un, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & at) !== _e && ef(t, e.child, null, u), v;
    }
    function Yx(e, t, a) {
      return (e.mode & at) === _e ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : By(t) ? e.lanes = er : e.lanes = $r, null;
    }
    function Ix(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tr) {
          t.flags &= -257;
          var D = cS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return mm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= we, null;
          var A = i.children, _ = i.fallback, Q = $x(e, t, A, _, f), ce = t.child;
          return ce.memoizedState = TS(f), t.memoizedState = CS, Q;
        }
      else {
        if (L1(), (t.mode & at) === _e)
          return mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (By(u)) {
          var p, v, m;
          {
            var g = Gw(u);
            p = g.digest, v = g.message, m = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = cS(w, p, m);
          return mm(e, t, f, T);
        }
        var M = _r(f, e.childLanes);
        if (ki || M) {
          var z = Dm();
          if (z !== null) {
            var U = Cd(z, f);
            if (U !== yt && U !== s.retryLane) {
              s.retryLane = U;
              var ae = Ft;
              da(e, U), qn(z, e, U, ae);
            }
          }
          IS();
          var Le = cS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return mm(e, t, f, Le);
        } else if (XE(u)) {
          t.flags |= we, t.child = e.child;
          var Ce = mD.bind(null, e);
          return Xw(u, Ce), null;
        } else {
          U1(t, u, s.treeContext);
          var pt = i.children, st = RS(t, pt);
          return st.flags |= ra, st;
        }
      }
    }
    function _0(e, t, a) {
      e.lanes = Je(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Je(i.lanes, t)), vg(e.return, t, a);
    }
    function Qx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === P) {
          var u = i.memoizedState;
          u !== null && _0(i, a, e);
        } else if (i.tag === Ht)
          _0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Wx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yS[e])
        if (yS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Gx(e, t) {
      e !== void 0 && !hm[e] && (e !== "collapsed" && e !== "hidden" ? (hm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (hm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function k0(e, t) {
      {
        var a = An(e), i = !a && typeof nt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Xx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (An(e)) {
          for (var a = 0; a < e.length; a++)
            if (!k0(e[a], a))
              return;
        } else {
          var i = nt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!k0(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function O0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      qx(u), Gx(s, u), Xx(f, u), Qr(e, t, f, a);
      var p = bi.current, v = Rg(p, up);
      if (v)
        p = wg(p, up), t.flags |= we;
      else {
        var m = e !== null && (e.flags & we) !== De;
        m && Qx(t, t.child, a), p = af(p);
      }
      if (qu(t, p), (t.mode & at) === _e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Wx(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), xS(
              t,
              !1,
              // isBackwards
              w,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var T = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var z = M.alternate;
              if (z !== null && qh(z) === null) {
                t.child = M;
                break;
              }
              var U = M.sibling;
              M.sibling = T, T = M, M = U;
            }
            xS(
              t,
              !0,
              // isBackwards
              T,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            xS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Kx(e, t, a) {
      Eg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = ef(t, null, i, a) : Qr(e, t, i, a), t.child;
    }
    var M0 = !1;
    function Zx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || M0 || (M0 = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ri(v, s, "prop", "Context.Provider");
      }
      if (RC(t, u, p), f !== null) {
        var m = f.value;
        if (Y(m, p)) {
          if (f.children === s.children && !xh())
            return iu(e, t, a);
        } else
          q1(t, u, a);
      }
      var g = s.children;
      return Qr(e, t, g, a), t.child;
    }
    var L0 = !1;
    function Jx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (L0 || (L0 = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), nf(t, a);
      var f = zn(i);
      Vr(t);
      var p;
      return mp.current = t, Un(!0), p = s(f), Un(!1), Br(), t.flags |= Ta, Qr(e, t, p, a), t.child;
    }
    function Sp() {
      ki = !0;
    }
    function ym(e, t) {
      (t.mode & at) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= un);
    }
    function iu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), u0(), Mp(t.lanes), _r(a, t.childLanes) ? (Q1(e, t), t.child) : null;
    }
    function eb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= na) : s.push(e), a.flags |= un, a;
      }
    }
    function bS(e, t) {
      var a = e.lanes;
      return !!_r(a, t);
    }
    function tb(e, t, a) {
      switch (t.tag) {
        case H:
          w0(t), t.stateNode, Jc();
          break;
        case X:
          MC(t);
          break;
        case q: {
          var i = t.type;
          cl(i) && Dh(t);
          break;
        }
        case te:
          Eg(t, t.stateNode.containerInfo);
          break;
        case ut: {
          var u = t.memoizedProps.value, s = t.type._context;
          RC(t, s, u);
          break;
        }
        case Ye:
          {
            var f = _r(a, t.childLanes);
            f && (t.flags |= ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case P: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return qu(t, af(bi.current)), t.flags |= we, null;
            var m = t.child, g = m.childLanes;
            if (_r(a, g))
              return b0(e, t, a);
            qu(t, af(bi.current));
            var w = iu(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            qu(t, af(bi.current));
          break;
        }
        case Ht: {
          var T = (e.flags & we) !== De, M = _r(a, t.childLanes);
          if (T) {
            if (M)
              return O0(e, t, a);
            t.flags |= we;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), qu(t, bi.current), M)
            break;
          return null;
        }
        case Ue:
        case xt:
          return t.lanes = F, C0(e, t, a);
      }
      return iu(e, t, a);
    }
    function N0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return eb(e, t, nE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || xh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ki = !0;
        else {
          var s = bS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & we) === De)
            return ki = !1, tb(e, t, a);
          (e.flags & Zs) !== De ? ki = !0 : ki = !1;
        }
      } else if (ki = !1, fr() && b1(t)) {
        var f = t.index, p = D1();
        uC(t, p, f);
      }
      switch (t.lanes = F, t.tag) {
        case se:
          return Ax(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return zx(e, t, v, a);
        }
        case G: {
          var m = t.type, g = t.pendingProps, w = t.elementType === m ? g : _i(m, g);
          return gS(e, t, m, w, a);
        }
        case q: {
          var T = t.type, M = t.pendingProps, z = t.elementType === T ? M : _i(T, M);
          return R0(e, t, T, z, a);
        }
        case H:
          return Mx(e, t, a);
        case X:
          return Lx(e, t, a);
        case Me:
          return Nx(e, t);
        case P:
          return b0(e, t, a);
        case te:
          return Kx(e, t, a);
        case xe: {
          var U = t.type, ae = t.pendingProps, Le = t.elementType === U ? ae : _i(U, ae);
          return g0(e, t, U, Le, a);
        }
        case Ne:
          return _x(e, t, a);
        case qe:
          return kx(e, t, a);
        case Ye:
          return Ox(e, t, a);
        case ut:
          return Zx(e, t, a);
        case gt:
          return Jx(e, t, a);
        case ht: {
          var Ce = t.type, pt = t.pendingProps, st = _i(Ce, pt);
          if (t.type !== t.elementType) {
            var D = Ce.propTypes;
            D && Ri(
              D,
              st,
              // Resolved for outer only
              "prop",
              Mt(Ce)
            );
          }
          return st = _i(Ce.type, st), S0(e, t, Ce, st, a);
        }
        case Ge:
          return E0(e, t, t.type, t.pendingProps, a);
        case _t: {
          var A = t.type, _ = t.pendingProps, Q = t.elementType === A ? _ : _i(A, _);
          return Ux(e, t, A, Q, a);
        }
        case Ht:
          return O0(e, t, a);
        case St:
          break;
        case Ue:
          return C0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ff(e) {
      e.flags |= ct;
    }
    function z0(e) {
      e.flags |= an, e.flags |= Du;
    }
    var U0, DS, A0, j0;
    U0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === X || u.tag === Me)
          Rw(e, u.stateNode);
        else if (u.tag !== te) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, DS = function(e, t) {
    }, A0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = xw(f, a, s, i, u, p);
        t.updateQueue = v, v && ff(t);
      }
    }, j0 = function(e, t, a, i) {
      a !== i && ff(t);
    };
    function Ep(e, t) {
      if (!fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = F, i = De;
      if (t) {
        if ((e.mode & Et) !== _e) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Je(a, Je(m.lanes, m.childLanes)), i |= m.subtreeFlags & Sn, i |= m.flags & Sn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Je(a, Je(g.lanes, g.childLanes)), i |= g.subtreeFlags & Sn, i |= g.flags & Sn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Et) !== _e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Je(a, Je(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Je(a, Je(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function nb(e, t, a) {
      if (P1() && (t.mode & at) !== _e && (t.flags & we) === De)
        return vC(t), Jc(), t.flags |= Tr | Do | wr, !1;
      var i = Lh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (F1(t), pr(t), (t.mode & Et) !== _e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Jc(), (t.flags & we) === De && (t.memoizedState = null), t.flags |= ct, pr(t), (t.mode & Et) !== _e) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return hC(), !0;
    }
    function F0(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case se:
        case ln:
        case Ge:
        case G:
        case xe:
        case Ne:
        case qe:
        case Ye:
        case gt:
        case ht:
          return pr(t), null;
        case q: {
          var u = t.type;
          return cl(u) && bh(t), pr(t), null;
        }
        case H: {
          var s = t.stateNode;
          if (rf(t), Gy(t), bg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Lh(t);
            if (f)
              ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tr) !== De) && (t.flags |= Dn, hC());
            }
          }
          return DS(e, t), pr(t), null;
        }
        case X: {
          Tg(t);
          var v = OC(), m = t.type;
          if (e !== null && t.stateNode != null)
            A0(e, t, m, i, v), e.ref !== t.ref && z0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return pr(t), null;
            }
            var g = Cg(), w = Lh(t);
            if (w)
              A1(t, v, g) && ff(t);
            else {
              var T = Tw(m, i, v, g, t);
              U0(T, t, !1, !1), t.stateNode = T, ww(T, m, i, v) && ff(t);
            }
            t.ref !== null && z0(t);
          }
          return pr(t), null;
        }
        case Me: {
          var M = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            j0(e, t, z, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var U = OC(), ae = Cg(), Le = Lh(t);
            Le ? j1(t) && ff(t) : t.stateNode = bw(M, U, ae, t);
          }
          return pr(t), null;
        }
        case P: {
          lf(t);
          var Ce = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var pt = nb(e, t, Ce);
            if (!pt)
              return t.flags & wr ? t : null;
          }
          if ((t.flags & we) !== De)
            return t.lanes = a, (t.mode & Et) !== _e && Kg(t), t;
          var st = Ce !== null, D = e !== null && e.memoizedState !== null;
          if (st !== D && st) {
            var A = t.child;
            if (A.flags |= gn, (t.mode & at) !== _e) {
              var _ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              _ || Rg(bi.current, NC) ? rD() : IS();
            }
          }
          var Q = t.updateQueue;
          if (Q !== null && (t.flags |= ct), pr(t), (t.mode & Et) !== _e && st) {
            var ce = t.child;
            ce !== null && (t.treeBaseDuration -= ce.treeBaseDuration);
          }
          return null;
        }
        case te:
          return rf(t), DS(e, t), e === null && S1(t.stateNode.containerInfo), pr(t), null;
        case ut:
          var le = t.type._context;
          return pg(le, t), pr(t), null;
        case _t: {
          var Be = t.type;
          return cl(Be) && bh(t), pr(t), null;
        }
        case Ht: {
          lf(t);
          var We = t.memoizedState;
          if (We === null)
            return pr(t), null;
          var zt = (t.flags & we) !== De, Rt = We.rendering;
          if (Rt === null)
            if (zt)
              Ep(We, !1);
            else {
              var On = iD() && (e === null || (e.flags & we) === De);
              if (!On)
                for (var wt = t.child; wt !== null; ) {
                  var xn = qh(wt);
                  if (xn !== null) {
                    zt = !0, t.flags |= we, Ep(We, !1);
                    var Ur = xn.updateQueue;
                    return Ur !== null && (t.updateQueue = Ur, t.flags |= ct), t.subtreeFlags = De, W1(t, a), qu(t, wg(bi.current, up)), t.child;
                  }
                  wt = wt.sibling;
                }
              We.tail !== null && _n() > iT() && (t.flags |= we, zt = !0, Ep(We, !1), t.lanes = dd);
            }
          else {
            if (!zt) {
              var gr = qh(Rt);
              if (gr !== null) {
                t.flags |= we, zt = !0;
                var Oa = gr.updateQueue;
                if (Oa !== null && (t.updateQueue = Oa, t.flags |= ct), Ep(We, !0), We.tail === null && We.tailMode === "hidden" && !Rt.alternate && !fr())
                  return pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              _n() * 2 - We.renderingStartTime > iT() && a !== $r && (t.flags |= we, zt = !0, Ep(We, !1), t.lanes = dd);
            }
            if (We.isBackwards)
              Rt.sibling = t.child, t.child = Rt;
            else {
              var Gr = We.last;
              Gr !== null ? Gr.sibling = Rt : t.child = Rt, We.last = Rt;
            }
          }
          if (We.tail !== null) {
            var Xr = We.tail;
            We.rendering = Xr, We.tail = Xr.sibling, We.renderingStartTime = _n(), Xr.sibling = null;
            var Ar = bi.current;
            return zt ? Ar = wg(Ar, up) : Ar = af(Ar), qu(t, Ar), Xr;
          }
          return pr(t), null;
        }
        case St:
          break;
        case Ue:
        case xt: {
          YS(t);
          var cu = t.memoizedState, Sf = cu !== null;
          if (e !== null) {
            var Ap = e.memoizedState, gl = Ap !== null;
            gl !== Sf && (t.flags |= gn);
          }
          return !Sf || (t.mode & at) === _e ? pr(t) : _r(yl, $r) && (pr(t), t.subtreeFlags & (un | ct) && (t.flags |= gn)), null;
        }
        case Bt:
          return null;
        case vt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function rb(e, t, a) {
      switch (Jy(t), t.tag) {
        case q: {
          var i = t.type;
          cl(i) && bh(t);
          var u = t.flags;
          return u & wr ? (t.flags = u & -65537 | we, (t.mode & Et) !== _e && Kg(t), t) : null;
        }
        case H: {
          t.stateNode, rf(t), Gy(t), bg();
          var s = t.flags;
          return (s & wr) !== De && (s & we) === De ? (t.flags = s & -65537 | we, t) : null;
        }
        case X:
          return Tg(t), null;
        case P: {
          lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Jc();
          }
          var p = t.flags;
          return p & wr ? (t.flags = p & -65537 | we, (t.mode & Et) !== _e && Kg(t), t) : null;
        }
        case Ht:
          return lf(t), null;
        case te:
          return rf(t), null;
        case ut:
          var v = t.type._context;
          return pg(v, t), null;
        case Ue:
        case xt:
          return YS(t), null;
        case Bt:
          return null;
        default:
          return null;
      }
    }
    function H0(e, t, a) {
      switch (Jy(t), t.tag) {
        case q: {
          var i = t.type.childContextTypes;
          i != null && bh(t);
          break;
        }
        case H: {
          t.stateNode, rf(t), Gy(t), bg();
          break;
        }
        case X: {
          Tg(t);
          break;
        }
        case te:
          rf(t);
          break;
        case P:
          lf(t);
          break;
        case Ht:
          lf(t);
          break;
        case ut:
          var u = t.type._context;
          pg(u, t);
          break;
        case Ue:
        case xt:
          YS(t);
          break;
      }
    }
    var P0 = null;
    P0 = /* @__PURE__ */ new Set();
    var gm = !1, vr = !1, ab = typeof WeakSet == "function" ? WeakSet : Set, ye = null, df = null, pf = null;
    function ib(e) {
      Qi(null, function() {
        throw e;
      }), bo();
    }
    var lb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Et)
        try {
          hl(), t.componentWillUnmount();
        } finally {
          vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function V0(e, t) {
      try {
        Ku(Bn, e);
      } catch (a) {
        It(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        lb(e, a);
      } catch (i) {
        It(e, t, i);
      }
    }
    function ub(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        It(e, t, i);
      }
    }
    function B0(e, t) {
      try {
        Y0(e);
      } catch (a) {
        It(e, t, a);
      }
    }
    function vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Te && et && e.mode & Et)
              try {
                hl(), i = a(null);
              } finally {
                vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            It(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          a.current = null;
    }
    function Sm(e, t, a) {
      try {
        a();
      } catch (i) {
        It(e, t, i);
      }
    }
    var $0 = !1;
    function ob(e, t) {
      Ew(e.containerInfo), ye = t, sb();
      var a = $0;
      return $0 = !1, a;
    }
    function sb() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        (e.subtreeFlags & qi) !== De && t !== null ? (t.return = e, ye = t) : cb();
      }
    }
    function cb() {
      for (; ye !== null; ) {
        var e = ye;
        Yt(e);
        try {
          fb(e);
        } catch (a) {
          It(e, e.return, a);
        }
        rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function fb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Dn) !== De) {
        switch (Yt(e), e.tag) {
          case G:
          case xe:
          case Ge:
            break;
          case q: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ss && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : _i(e.type, i), u);
              {
                var p = P0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ze(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case H: {
            {
              var v = e.stateNode;
              Iw(v.containerInfo);
            }
            break;
          }
          case X:
          case Me:
          case te:
          case _t:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        rn();
      }
    }
    function Oi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & dr) !== pa ? yi(t) : (e & Bn) !== pa && ko(t), (e & fl) !== pa && Np(!0), Sm(t, a, p), (e & fl) !== pa && Np(!1), (e & dr) !== pa ? Zi() : (e & Bn) !== pa && cd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ku(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & dr) !== pa ? sd(t) : (e & Bn) !== pa && ac(t);
            var f = s.create;
            (e & fl) !== pa && Np(!0), s.destroy = f(), (e & fl) !== pa && Np(!1), (e & dr) !== pa ? wv() : (e & Bn) !== pa && xv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Bn) !== De ? v = "useLayoutEffect" : (s.tag & fl) !== De ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function db(e, t) {
      if ((t.flags & ct) !== De)
        switch (t.tag) {
          case Ye: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = i0(), p = t.alternate === null ? "mount" : "update";
            a0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case H:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case Ye:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function pb(e, t, a, i) {
      if ((a.flags & Xi) !== De)
        switch (a.tag) {
          case G:
          case xe:
          case Ge: {
            if (!vr)
              if (a.mode & Et)
                try {
                  hl(), Ku(Bn | Vn, a);
                } finally {
                  vl(a);
                }
              else
                Ku(Bn | Vn, a);
            break;
          }
          case q: {
            var u = a.stateNode;
            if (a.flags & ct && !vr)
              if (t === null)
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Et)
                  try {
                    hl(), u.componentDidMount();
                  } finally {
                    vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : _i(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Et)
                  try {
                    hl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), kC(a, p, u));
            break;
          }
          case H: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case X:
                    m = a.child.stateNode;
                    break;
                  case q:
                    m = a.child.stateNode;
                    break;
                }
              kC(a, v, m);
            }
            break;
          }
          case X: {
            var g = a.stateNode;
            if (t === null && a.flags & ct) {
              var w = a.type, T = a.memoizedProps;
              Mw(g, w, T);
            }
            break;
          }
          case Me:
            break;
          case te:
            break;
          case Ye: {
            {
              var M = a.memoizedProps, z = M.onCommit, U = M.onRender, ae = a.stateNode.effectDuration, Le = i0(), Ce = t === null ? "mount" : "update";
              a0() && (Ce = "nested-update"), typeof U == "function" && U(a.memoizedProps.id, Ce, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof z == "function" && z(a.memoizedProps.id, Ce, ae, Le), cD(a);
                var pt = a.return;
                e: for (; pt !== null; ) {
                  switch (pt.tag) {
                    case H:
                      var st = pt.stateNode;
                      st.effectDuration += ae;
                      break e;
                    case Ye:
                      var D = pt.stateNode;
                      D.effectDuration += ae;
                      break e;
                  }
                  pt = pt.return;
                }
              }
            }
            break;
          }
          case P: {
            Cb(e, a);
            break;
          }
          case Ht:
          case _t:
          case St:
          case Ue:
          case xt:
          case vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      vr || a.flags & an && Y0(a);
    }
    function vb(e) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge: {
          if (e.mode & Et)
            try {
              hl(), V0(e, e.return);
            } finally {
              vl(e);
            }
          else
            V0(e, e.return);
          break;
        }
        case q: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ub(e, e.return, t), B0(e, e.return);
          break;
        }
        case X: {
          B0(e, e.return);
          break;
        }
      }
    }
    function hb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === X) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Vw(u) : $w(i.stateNode, i.memoizedProps);
            } catch (f) {
              It(e, e.return, f);
            }
          }
        } else if (i.tag === Me) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Bw(s) : Yw(s, i.memoizedProps);
            } catch (f) {
              It(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === xt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Y0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case X:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Et)
            try {
              hl(), u = t(i);
            } finally {
              vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ze(e)), t.current = i;
      }
    }
    function mb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function I0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, I0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === X) {
          var a = e.stateNode;
          a !== null && T1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function yb(e) {
      for (var t = e.return; t !== null; ) {
        if (Q0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Q0(e) {
      return e.tag === X || e.tag === H || e.tag === te;
    }
    function W0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Q0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== X && t.tag !== Me && t.tag !== Qt; ) {
          if (t.flags & un || t.child === null || t.tag === te)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & un))
          return t.stateNode;
      }
    }
    function gb(e) {
      var t = yb(e);
      switch (t.tag) {
        case X: {
          var a = t.stateNode;
          t.flags & Ra && (GE(a), t.flags &= -33);
          var i = W0(e);
          OS(e, i, a);
          break;
        }
        case H:
        case te: {
          var u = t.stateNode.containerInfo, s = W0(e);
          kS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === X || i === Me;
      if (u) {
        var s = e.stateNode;
        t ? jw(a, s, t) : Uw(a, s);
      } else if (i !== te) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === X || i === Me;
      if (u) {
        var s = e.stateNode;
        t ? Aw(a, s, t) : zw(a, s);
      } else if (i !== te) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    var hr = null, Mi = !1;
    function Sb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case X: {
              hr = i.stateNode, Mi = !1;
              break e;
            }
            case H: {
              hr = i.stateNode.containerInfo, Mi = !0;
              break e;
            }
            case te: {
              hr = i.stateNode.containerInfo, Mi = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        q0(e, t, a), hr = null, Mi = !1;
      }
      mb(a);
    }
    function Zu(e, t, a) {
      for (var i = a.child; i !== null; )
        q0(e, t, i), i = i.sibling;
    }
    function q0(e, t, a) {
      switch (ld(a), a.tag) {
        case X:
          vr || vf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Me: {
          {
            var i = hr, u = Mi;
            hr = null, Zu(e, t, a), hr = i, Mi = u, hr !== null && (Mi ? Hw(hr, a.stateNode) : Fw(hr, a.stateNode));
          }
          return;
        }
        case Qt: {
          hr !== null && (Mi ? Pw(hr, a.stateNode) : Vy(hr, a.stateNode));
          return;
        }
        case te: {
          {
            var s = hr, f = Mi;
            hr = a.stateNode.containerInfo, Mi = !0, Zu(e, t, a), hr = s, Mi = f;
          }
          return;
        }
        case G:
        case xe:
        case ht:
        case Ge: {
          if (!vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, g = m;
                do {
                  var w = g, T = w.destroy, M = w.tag;
                  T !== void 0 && ((M & fl) !== pa ? Sm(a, t, T) : (M & Bn) !== pa && (ko(a), a.mode & Et ? (hl(), Sm(a, t, T), vl(a)) : Sm(a, t, T), cd())), g = g.next;
                } while (g !== m);
              }
            }
          }
          Zu(e, t, a);
          return;
        }
        case q: {
          if (!vr) {
            vf(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && _S(a, t, z);
          }
          Zu(e, t, a);
          return;
        }
        case St: {
          Zu(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & at
          ) {
            var U = vr;
            vr = U || a.memoizedState !== null, Zu(e, t, a), vr = U;
          } else
            Zu(e, t, a);
          break;
        }
        default: {
          Zu(e, t, a);
          return;
        }
      }
    }
    function Eb(e) {
      e.memoizedState;
    }
    function Cb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && i1(s);
          }
        }
      }
    }
    function G0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ab()), t.forEach(function(i) {
          var u = yD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Dr)
              if (df !== null && pf !== null)
                Lp(pf, df);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Tb(e, t, a) {
      df = a, pf = e, Yt(t), X0(t, e), Yt(t), df = null, pf = null;
    }
    function Li(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Sb(e, t, s);
          } catch (v) {
            It(s, t, v);
          }
        }
      var f = so();
      if (t.subtreeFlags & Gi)
        for (var p = t.child; p !== null; )
          Yt(p), X0(p, e), p = p.sibling;
      Yt(f);
    }
    function X0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case G:
        case xe:
        case ht:
        case Ge: {
          if (Li(t, e), ml(e), u & ct) {
            try {
              Oi(fl | Vn, e, e.return), Ku(fl | Vn, e);
            } catch (Be) {
              It(e, e.return, Be);
            }
            if (e.mode & Et) {
              try {
                hl(), Oi(Bn | Vn, e, e.return);
              } catch (Be) {
                It(e, e.return, Be);
              }
              vl(e);
            } else
              try {
                Oi(Bn | Vn, e, e.return);
              } catch (Be) {
                It(e, e.return, Be);
              }
          }
          return;
        }
        case q: {
          Li(t, e), ml(e), u & an && i !== null && vf(i, i.return);
          return;
        }
        case X: {
          Li(t, e), ml(e), u & an && i !== null && vf(i, i.return);
          {
            if (e.flags & Ra) {
              var s = e.stateNode;
              try {
                GE(s);
              } catch (Be) {
                It(e, e.return, Be);
              }
            }
            if (u & ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    Lw(f, g, m, v, p, e);
                  } catch (Be) {
                    It(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case Me: {
          if (Li(t, e), ml(e), u & ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, T = e.memoizedProps, M = i !== null ? i.memoizedProps : T;
            try {
              Nw(w, M, T);
            } catch (Be) {
              It(e, e.return, Be);
            }
          }
          return;
        }
        case H: {
          if (Li(t, e), ml(e), u & ct && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                a1(t.containerInfo);
              } catch (Be) {
                It(e, e.return, Be);
              }
          }
          return;
        }
        case te: {
          Li(t, e), ml(e);
          return;
        }
        case P: {
          Li(t, e), ml(e);
          var U = e.child;
          if (U.flags & gn) {
            var ae = U.stateNode, Le = U.memoizedState, Ce = Le !== null;
            if (ae.isHidden = Ce, Ce) {
              var pt = U.alternate !== null && U.alternate.memoizedState !== null;
              pt || nD();
            }
          }
          if (u & ct) {
            try {
              Eb(e);
            } catch (Be) {
              It(e, e.return, Be);
            }
            G0(e);
          }
          return;
        }
        case Ue: {
          var st = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & at
          ) {
            var D = vr;
            vr = D || st, Li(t, e), vr = D;
          } else
            Li(t, e);
          if (ml(e), u & gn) {
            var A = e.stateNode, _ = e.memoizedState, Q = _ !== null, ce = e;
            if (A.isHidden = Q, Q && !st && (ce.mode & at) !== _e) {
              ye = ce;
              for (var le = ce.child; le !== null; )
                ye = le, wb(le), le = le.sibling;
            }
            hb(ce, Q);
          }
          return;
        }
        case Ht: {
          Li(t, e), ml(e), u & ct && G0(e);
          return;
        }
        case St:
          return;
        default: {
          Li(t, e), ml(e);
          return;
        }
      }
    }
    function ml(e) {
      var t = e.flags;
      if (t & un) {
        try {
          gb(e);
        } catch (a) {
          It(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & ra && (e.flags &= -4097);
    }
    function Rb(e, t, a) {
      df = a, pf = t, ye = e, K0(e, t, a), df = null, pf = null;
    }
    function K0(e, t, a) {
      for (var i = (e.mode & at) !== _e; ye !== null; ) {
        var u = ye, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || gm;
          if (p) {
            MS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, g = m || vr, w = gm, T = vr;
            gm = p, vr = g, vr && !T && (ye = u, xb(u));
            for (var M = s; M !== null; )
              ye = M, K0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            ye = u, gm = w, vr = T, MS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Xi) !== De && s !== null ? (s.return = u, ye = s) : MS(e, t, a);
      }
    }
    function MS(e, t, a) {
      for (; ye !== null; ) {
        var i = ye;
        if ((i.flags & Xi) !== De) {
          var u = i.alternate;
          Yt(i);
          try {
            pb(t, u, i, a);
          } catch (f) {
            It(i, i.return, f);
          }
          rn();
        }
        if (i === e) {
          ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ye = s;
          return;
        }
        ye = i.return;
      }
    }
    function wb(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        switch (t.tag) {
          case G:
          case xe:
          case ht:
          case Ge: {
            if (t.mode & Et)
              try {
                hl(), Oi(Bn, t, t.return);
              } finally {
                vl(t);
              }
            else
              Oi(Bn, t, t.return);
            break;
          }
          case q: {
            vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case X: {
            vf(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              Z0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ye = a) : Z0(e);
      }
    }
    function Z0(e) {
      for (; ye !== null; ) {
        var t = ye;
        if (t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function xb(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            J0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ye = a) : J0(e);
      }
    }
    function J0(e) {
      for (; ye !== null; ) {
        var t = ye;
        Yt(t);
        try {
          vb(t);
        } catch (i) {
          It(t, t.return, i);
        }
        if (rn(), t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function bb(e, t, a, i) {
      ye = t, Db(t, e, a, i);
    }
    function Db(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye, s = u.child;
        (u.subtreeFlags & hi) !== De && s !== null ? (s.return = u, ye = s) : _b(e, t, a, i);
      }
    }
    function _b(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye;
        if ((u.flags & Rr) !== De) {
          Yt(u);
          try {
            kb(t, u, a, i);
          } catch (f) {
            It(u, u.return, f);
          }
          rn();
        }
        if (u === e) {
          ye = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ye = s;
          return;
        }
        ye = u.return;
      }
    }
    function kb(e, t, a, i) {
      switch (t.tag) {
        case G:
        case xe:
        case Ge: {
          if (t.mode & Et) {
            Xg();
            try {
              Ku(dr | Vn, t);
            } finally {
              Gg(t);
            }
          } else
            Ku(dr | Vn, t);
          break;
        }
      }
    }
    function Ob(e) {
      ye = e, Mb();
    }
    function Mb() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        if ((ye.flags & na) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ye = u, zb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ye = e;
          }
        }
        (e.subtreeFlags & hi) !== De && t !== null ? (t.return = e, ye = t) : Lb();
      }
    }
    function Lb() {
      for (; ye !== null; ) {
        var e = ye;
        (e.flags & Rr) !== De && (Yt(e), Nb(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function Nb(e) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge: {
          e.mode & Et ? (Xg(), Oi(dr | Vn, e, e.return), Gg(e)) : Oi(dr | Vn, e, e.return);
          break;
        }
      }
    }
    function zb(e, t) {
      for (; ye !== null; ) {
        var a = ye;
        Yt(a), Ab(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, ye = i) : Ub(e);
      }
    }
    function Ub(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.sibling, i = t.return;
        if (I0(t), t === e) {
          ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, ye = a;
          return;
        }
        ye = i;
      }
    }
    function Ab(e, t) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge: {
          e.mode & Et ? (Xg(), Oi(dr, e, t), Gg(e)) : Oi(dr, e, t);
          break;
        }
      }
    }
    function jb(e) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge: {
          try {
            Ku(Bn | Vn, e);
          } catch (a) {
            It(e, e.return, a);
          }
          break;
        }
        case q: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            It(e, e.return, a);
          }
          break;
        }
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge: {
          try {
            Ku(dr | Vn, e);
          } catch (t) {
            It(e, e.return, t);
          }
          break;
        }
      }
    }
    function Hb(e) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge: {
          try {
            Oi(Bn | Vn, e, e.return);
          } catch (a) {
            It(e, e.return, a);
          }
          break;
        }
        case q: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function Pb(e) {
      switch (e.tag) {
        case G:
        case xe:
        case Ge:
          try {
            Oi(dr | Vn, e, e.return);
          } catch (t) {
            It(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Cp = Symbol.for;
      Cp("selector.component"), Cp("selector.has_pseudo_class"), Cp("selector.role"), Cp("selector.test_id"), Cp("selector.text");
    }
    var Vb = [];
    function Bb() {
      Vb.forEach(function(e) {
        return e();
      });
    }
    var $b = x.ReactCurrentActQueue;
    function Yb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function eT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && $b.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ib = Math.ceil, LS = x.ReactCurrentDispatcher, NS = x.ReactCurrentOwner, mr = x.ReactCurrentBatchConfig, Ni = x.ReactCurrentActQueue, In = (
      /*             */
      0
    ), tT = (
      /*               */
      1
    ), yr = (
      /*                */
      2
    ), Za = (
      /*                */
      4
    ), lu = 0, Tp = 1, Es = 2, Em = 3, Rp = 4, nT = 5, zS = 6, dt = In, Wr = null, pn = null, Qn = F, yl = F, US = Bu(F), Wn = lu, wp = null, Cm = F, xp = F, Tm = F, bp = null, va = null, AS = 0, rT = 500, aT = 1 / 0, Qb = 500, uu = null;
    function Dp() {
      aT = _n() + Qb;
    }
    function iT() {
      return aT;
    }
    var Rm = !1, jS = null, hf = null, Cs = !1, Ju = null, _p = F, FS = [], HS = null, Wb = 50, kp = 0, PS = null, VS = !1, wm = !1, qb = 50, mf = 0, xm = null, Op = Ft, bm = F, lT = !1;
    function Dm() {
      return Wr;
    }
    function qr() {
      return (dt & (yr | Za)) !== In ? _n() : (Op !== Ft || (Op = _n()), Op);
    }
    function eo(e) {
      var t = e.mode;
      if ((t & at) === _e)
        return Ve;
      if ((dt & yr) !== In && Qn !== F)
        return Bo(Qn);
      var a = $1() !== B1;
      if (a) {
        if (mr.transition !== null) {
          var i = mr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return bm === yt && (bm = gd()), bm;
      }
      var u = sa();
      if (u !== yt)
        return u;
      var s = Dw();
      return s;
    }
    function Gb(e) {
      var t = e.mode;
      return (t & at) === _e ? Ve : Mv();
    }
    function qn(e, t, a, i) {
      SD(), lT && y("useInsertionEffect must not schedule updates."), VS && (wm = !0), Mu(e, a, i), (dt & yr) !== F && e === Wr ? TD(t) : (Dr && Io(e, t, a), RD(t), e === Wr && ((dt & yr) === In && (xp = Je(xp, a)), Wn === Rp && to(e, Qn)), ha(e, i), a === Ve && dt === In && (t.mode & at) === _e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ni.isBatchingLegacy && (Dp(), lC()));
    }
    function Xb(e, t, a) {
      var i = e.current;
      i.lanes = t, Mu(e, t, a), ha(e, a);
    }
    function Kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (dt & yr) !== In
      );
    }
    function ha(e, t) {
      var a = e.callbackNode;
      wc(e, t);
      var i = Rc(e, e === Wr ? Qn : F);
      if (i === F) {
        a !== null && TT(a), e.callbackNode = null, e.callbackPriority = yt;
        return;
      }
      var u = tl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ni.current !== null && a !== qS)) {
        a == null && s !== Ve && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && TT(a);
      var f;
      if (u === Ve)
        e.tag === $u ? (Ni.isBatchingLegacy !== null && (Ni.didScheduleLegacyUpdate = !0), x1(sT.bind(null, e))) : iC(sT.bind(null, e)), Ni.current !== null ? Ni.current.push(Yu) : kw(function() {
          (dt & (yr | Za)) === In && Yu();
        }), f = null;
      else {
        var p;
        switch (Fv(i)) {
          case lr:
            p = _o;
            break;
          case Ba:
            p = Ki;
            break;
          case ua:
            p = mi;
            break;
          case oa:
            p = zl;
            break;
          default:
            p = mi;
            break;
        }
        f = GS(p, uT.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function uT(e, t) {
      if (hx(), Op = Ft, bm = F, (dt & (yr | Za)) !== In)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = su();
      if (i && e.callbackNode !== a)
        return null;
      var u = Rc(e, e === Wr ? Qn : F);
      if (u === F)
        return null;
      var s = !bc(e, u) && !Ov(e, u) && !t, f = s ? uD(e, u) : km(e, u);
      if (f !== lu) {
        if (f === Es) {
          var p = xc(e);
          p !== F && (u = p, f = BS(e, p));
        }
        if (f === Tp) {
          var v = wp;
          throw Ts(e, F), to(e, u), ha(e, _n()), v;
        }
        if (f === zS)
          to(e, u);
        else {
          var m = !bc(e, u), g = e.current.alternate;
          if (m && !Jb(g)) {
            if (f = km(e, u), f === Es) {
              var w = xc(e);
              w !== F && (u = w, f = BS(e, w));
            }
            if (f === Tp) {
              var T = wp;
              throw Ts(e, F), to(e, u), ha(e, _n()), T;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Zb(e, f, u);
        }
      }
      return ha(e, _n()), e.callbackNode === a ? uT.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = bp;
      if (kc(e)) {
        var i = Ts(e, t);
        i.flags |= Tr, g1(e.containerInfo);
      }
      var u = km(e, t);
      if (u !== Es) {
        var s = va;
        va = a, s !== null && oT(s);
      }
      return u;
    }
    function oT(e) {
      va === null ? va = e : va.push.apply(va, e);
    }
    function Zb(e, t, a) {
      switch (t) {
        case lu:
        case Tp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Es: {
          Rs(e, va, uu);
          break;
        }
        case Em: {
          if (to(e, a), Il(a) && // do not delay if we're inside an act() scope
          !RT()) {
            var i = AS + rT - _n();
            if (i > 10) {
              var u = Rc(e, F);
              if (u !== F)
                break;
              var s = e.suspendedLanes;
              if (!Ql(s, a)) {
                qr(), Dc(e, s);
                break;
              }
              e.timeoutHandle = Hy(Rs.bind(null, e, va, uu), i);
              break;
            }
          }
          Rs(e, va, uu);
          break;
        }
        case Rp: {
          if (to(e, a), md(a))
            break;
          if (!RT()) {
            var f = xa(e, a), p = f, v = _n() - p, m = gD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Hy(Rs.bind(null, e, va, uu), m);
              break;
            }
          }
          Rs(e, va, uu);
          break;
        }
        case nT: {
          Rs(e, va, uu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Jb(e) {
      for (var t = e; ; ) {
        if (t.flags & bu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Y(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & bu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function to(e, t) {
      t = $o(t, Tm), t = $o(t, xp), zv(e, t);
    }
    function sT(e) {
      if (mx(), (dt & (yr | Za)) !== In)
        throw new Error("Should not already be working.");
      su();
      var t = Rc(e, F);
      if (!_r(t, Ve))
        return ha(e, _n()), null;
      var a = km(e, t);
      if (e.tag !== $u && a === Es) {
        var i = xc(e);
        i !== F && (t = i, a = BS(e, i));
      }
      if (a === Tp) {
        var u = wp;
        throw Ts(e, F), to(e, t), ha(e, _n()), u;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Rs(e, va, uu), ha(e, _n()), null;
    }
    function eD(e, t) {
      t !== F && (_c(e, Je(t, Ve)), ha(e, _n()), (dt & (yr | Za)) === In && (Dp(), Yu()));
    }
    function $S(e, t) {
      var a = dt;
      dt |= tT;
      try {
        return e(t);
      } finally {
        dt = a, dt === In && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ni.isBatchingLegacy && (Dp(), lC());
      }
    }
    function tD(e, t, a, i, u) {
      var s = sa(), f = mr.transition;
      try {
        return mr.transition = null, Tn(lr), e(t, a, i, u);
      } finally {
        Tn(s), mr.transition = f, dt === In && Dp();
      }
    }
    function ou(e) {
      Ju !== null && Ju.tag === $u && (dt & (yr | Za)) === In && su();
      var t = dt;
      dt |= tT;
      var a = mr.transition, i = sa();
      try {
        return mr.transition = null, Tn(lr), e ? e() : void 0;
      } finally {
        Tn(i), mr.transition = a, dt = t, (dt & (yr | Za)) === In && Yu();
      }
    }
    function cT() {
      return (dt & (yr | Za)) !== In;
    }
    function _m(e, t) {
      Nr(US, yl, e), yl = Je(yl, t);
    }
    function YS(e) {
      yl = US.current, Lr(US, e);
    }
    function Ts(e, t) {
      e.finishedWork = null, e.finishedLanes = F;
      var a = e.timeoutHandle;
      if (a !== Py && (e.timeoutHandle = Py, _w(a)), pn !== null)
        for (var i = pn.return; i !== null; ) {
          var u = i.alternate;
          H0(u, i), i = i.return;
        }
      Wr = e;
      var s = ws(e.current, null);
      return pn = s, Qn = yl = t, Wn = lu, wp = null, Cm = F, xp = F, Tm = F, bp = null, va = null, X1(), xi.discardPendingWarnings(), s;
    }
    function fT(e, t) {
      do {
        var a = pn;
        try {
          if (Fh(), UC(), rn(), NS.current = null, a === null || a.return === null) {
            Wn = Tp, wp = t, pn = null;
            return;
          }
          if (Te && a.mode & Et && pm(a, !0), Fe)
            if (Br(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Va(a, i, Qn);
            } else
              Oo(a, t, Qn);
          xx(e, a.return, a, t, Qn), hT(a);
        } catch (u) {
          t = u, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
          continue;
        }
        return;
      } while (!0);
    }
    function dT() {
      var e = LS.current;
      return LS.current = om, e === null ? om : e;
    }
    function pT(e) {
      LS.current = e;
    }
    function nD() {
      AS = _n();
    }
    function Mp(e) {
      Cm = Je(e, Cm);
    }
    function rD() {
      Wn === lu && (Wn = Em);
    }
    function IS() {
      (Wn === lu || Wn === Em || Wn === Es) && (Wn = Rp), Wr !== null && (Vo(Cm) || Vo(xp)) && to(Wr, Qn);
    }
    function aD(e) {
      Wn !== Rp && (Wn = Es), bp === null ? bp = [e] : bp.push(e);
    }
    function iD() {
      return Wn === lu;
    }
    function km(e, t) {
      var a = dt;
      dt |= yr;
      var i = dT();
      if (Wr !== e || Qn !== t) {
        if (Dr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, Qn), u.clear()), Uv(e, t);
        }
        uu = Td(), Ts(e, t);
      }
      Fl(t);
      do
        try {
          lD();
          break;
        } catch (s) {
          fT(e, s);
        }
      while (!0);
      if (Fh(), dt = a, pT(i), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ic(), Wr = null, Qn = F, Wn;
    }
    function lD() {
      for (; pn !== null; )
        vT(pn);
    }
    function uD(e, t) {
      var a = dt;
      dt |= yr;
      var i = dT();
      if (Wr !== e || Qn !== t) {
        if (Dr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, Qn), u.clear()), Uv(e, t);
        }
        uu = Td(), Dp(), Ts(e, t);
      }
      Fl(t);
      do
        try {
          oD();
          break;
        } catch (s) {
          fT(e, s);
        }
      while (!0);
      return Fh(), pT(i), dt = a, pn !== null ? (bv(), lu) : (ic(), Wr = null, Qn = F, Wn);
    }
    function oD() {
      for (; pn !== null && !td(); )
        vT(pn);
    }
    function vT(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & Et) !== _e ? (qg(e), a = QS(t, e, yl), pm(e, !0)) : a = QS(t, e, yl), rn(), e.memoizedProps = e.pendingProps, a === null ? hT(e) : pn = a, NS.current = null;
    }
    function hT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Do) === De) {
          Yt(t);
          var u = void 0;
          if ((t.mode & Et) === _e ? u = F0(a, t, yl) : (qg(t), u = F0(a, t, yl), pm(t, !1)), rn(), u !== null) {
            pn = u;
            return;
          }
        } else {
          var s = rb(a, t);
          if (s !== null) {
            s.flags &= Ev, pn = s;
            return;
          }
          if ((t.mode & Et) !== _e) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Do, i.subtreeFlags = De, i.deletions = null;
          else {
            Wn = zS, pn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          pn = v;
          return;
        }
        t = i, pn = t;
      } while (t !== null);
      Wn === lu && (Wn = nT);
    }
    function Rs(e, t, a) {
      var i = sa(), u = mr.transition;
      try {
        mr.transition = null, Tn(lr), sD(e, t, a, i);
      } finally {
        mr.transition = u, Tn(i);
      }
      return null;
    }
    function sD(e, t, a, i) {
      do
        su();
      while (Ju !== null);
      if (ED(), (dt & (yr | Za)) !== In)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (ud(s), u === null)
        return od(), null;
      if (s === F && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = F, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = yt;
      var f = Je(u.lanes, u.childLanes);
      Ed(e, f), e === Wr && (Wr = null, pn = null, Qn = F), ((u.subtreeFlags & hi) !== De || (u.flags & hi) !== De) && (Cs || (Cs = !0, HS = a, GS(mi, function() {
        return su(), null;
      })));
      var p = (u.subtreeFlags & (qi | Gi | Xi | hi)) !== De, v = (u.flags & (qi | Gi | Xi | hi)) !== De;
      if (p || v) {
        var m = mr.transition;
        mr.transition = null;
        var g = sa();
        Tn(lr);
        var w = dt;
        dt |= Za, NS.current = null, ob(e, u), l0(), Tb(e, u, s), Cw(e.containerInfo), e.current = u, Mo(s), Rb(u, e, s), Lo(), nd(), dt = w, Tn(g), mr.transition = m;
      } else
        e.current = u, l0();
      var T = Cs;
      if (Cs ? (Cs = !1, Ju = e, _p = s) : (mf = 0, xm = null), f = e.pendingLanes, f === F && (hf = null), T || ST(e.current, !1), ad(u.stateNode, i), Dr && e.memoizedUpdaters.clear(), Bb(), ha(e, _n()), t !== null)
        for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
          var U = t[z], ae = U.stack, Le = U.digest;
          M(U.value, {
            componentStack: ae,
            digest: Le
          });
        }
      if (Rm) {
        Rm = !1;
        var Ce = jS;
        throw jS = null, Ce;
      }
      return _r(_p, Ve) && e.tag !== $u && su(), f = e.pendingLanes, _r(f, Ve) ? (vx(), e === PS ? kp++ : (kp = 0, PS = e)) : kp = 0, Yu(), od(), null;
    }
    function su() {
      if (Ju !== null) {
        var e = Fv(_p), t = Wo(ua, e), a = mr.transition, i = sa();
        try {
          return mr.transition = null, Tn(t), fD();
        } finally {
          Tn(i), mr.transition = a;
        }
      }
      return !1;
    }
    function cD(e) {
      FS.push(e), Cs || (Cs = !0, GS(mi, function() {
        return su(), null;
      }));
    }
    function fD() {
      if (Ju === null)
        return !1;
      var e = HS;
      HS = null;
      var t = Ju, a = _p;
      if (Ju = null, _p = F, (dt & (yr | Za)) !== In)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, wm = !1, jl(a);
      var i = dt;
      dt |= Za, Ob(t.current), bb(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          db(t, f);
        }
      }
      fd(), ST(t.current, !0), dt = i, Yu(), wm ? t === xm ? mf++ : (mf = 0, xm = t) : mf = 0, VS = !1, wm = !1, id(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function mT(e) {
      return hf !== null && hf.has(e);
    }
    function dD(e) {
      hf === null ? hf = /* @__PURE__ */ new Set([e]) : hf.add(e);
    }
    function pD(e) {
      Rm || (Rm = !0, jS = e);
    }
    var vD = pD;
    function yT(e, t, a) {
      var i = gs(a, t), u = v0(e, i, Ve), s = Qu(e, u, Ve), f = qr();
      s !== null && (Mu(s, Ve, f), ha(s, f));
    }
    function It(e, t, a) {
      if (ib(a), Np(!1), e.tag === H) {
        yT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === H) {
          yT(i, e, a);
          return;
        } else if (i.tag === q) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !mT(s)) {
            var f = gs(a, e), p = dS(i, f, Ve), v = Qu(i, p, Ve), m = qr();
            v !== null && (Mu(v, Ve, m), ha(v, m));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function hD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = qr();
      Dc(e, a), wD(e), Wr === e && Ql(Qn, a) && (Wn === Rp || Wn === Em && Il(Qn) && _n() - AS < rT ? Ts(e, F) : Tm = Je(Tm, a)), ha(e, u);
    }
    function gT(e, t) {
      t === yt && (t = Gb(e));
      var a = qr(), i = da(e, t);
      i !== null && (Mu(i, t, a), ha(i, a));
    }
    function mD(e) {
      var t = e.memoizedState, a = yt;
      t !== null && (a = t.retryLane), gT(e, a);
    }
    function yD(e, t) {
      var a = yt, i;
      switch (e.tag) {
        case P:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ht:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), gT(e, a);
    }
    function gD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ib(e / 1960) * 1960;
    }
    function SD() {
      if (kp > Wb)
        throw kp = 0, PS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      mf > qb && (mf = 0, xm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ED() {
      xi.flushLegacyContextWarning(), xi.flushPendingUnsafeLifecycleWarnings();
    }
    function ST(e, t) {
      Yt(e), Om(e, Wi, Hb), t && Om(e, Fa, Pb), Om(e, Wi, jb), t && Om(e, Fa, Fb), rn();
    }
    function Om(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function ET(e) {
      {
        if ((dt & yr) !== In || !(e.mode & at))
          return;
        var t = e.tag;
        if (t !== se && t !== H && t !== q && t !== G && t !== xe && t !== ht && t !== Ge)
          return;
        var a = Ze(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Yt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : rn();
        }
      }
    }
    var QS;
    {
      var CD = null;
      QS = function(e, t, a) {
        var i = _T(CD, t);
        try {
          return N0(e, t, a);
        } catch (s) {
          if (N1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fh(), UC(), H0(e, t), _T(t, i), t.mode & Et && qg(t), Qi(null, N0, null, e, t, a), pi()) {
            var u = bo();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var CT = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function TD(e) {
      if (Pi && !fx())
        switch (e.tag) {
          case G:
          case xe:
          case Ge: {
            var t = pn && Ze(pn) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = Ze(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case q: {
            CT || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), CT = !0);
            break;
          }
        }
    }
    function Lp(e, t) {
      if (Dr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Io(e, i, t);
        });
      }
    }
    var qS = {};
    function GS(e, t) {
      {
        var a = Ni.current;
        return a !== null ? (a.push(t), qS) : ed(e, t);
      }
    }
    function TT(e) {
      if (e !== qS)
        return Tv(e);
    }
    function RT() {
      return Ni.current !== null;
    }
    function RD(e) {
      {
        if (e.mode & at) {
          if (!eT())
            return;
        } else if (!Yb() || dt !== In || e.tag !== G && e.tag !== xe && e.tag !== Ge)
          return;
        if (Ni.current === null) {
          var t = ir;
          try {
            Yt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ze(e));
          } finally {
            t ? Yt(e) : rn();
          }
        }
      }
    }
    function wD(e) {
      e.tag !== $u && eT() && Ni.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Np(e) {
      lT = e;
    }
    var Ja = null, yf = null, xD = function(e) {
      Ja = e;
    };
    function gf(e) {
      {
        if (Ja === null)
          return e;
        var t = Ja(e);
        return t === void 0 ? e : t.current;
      }
    }
    function XS(e) {
      return gf(e);
    }
    function KS(e) {
      {
        if (Ja === null)
          return e;
        var t = Ja(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = gf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: B,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function wT(e, t) {
      {
        if (Ja === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case q: {
            typeof i == "function" && (u = !0);
            break;
          }
          case G: {
            (typeof i == "function" || s === Ke) && (u = !0);
            break;
          }
          case xe: {
            (s === B || s === Ke) && (u = !0);
            break;
          }
          case ht:
          case Ge: {
            (s === tt || s === Ke) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ja(a);
          if (f !== void 0 && f === Ja(i))
            return !0;
        }
        return !1;
      }
    }
    function xT(e) {
      {
        if (Ja === null || typeof WeakSet != "function")
          return;
        yf === null && (yf = /* @__PURE__ */ new WeakSet()), yf.add(e);
      }
    }
    var bD = function(e, t) {
      {
        if (Ja === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        su(), ou(function() {
          ZS(e.current, i, a);
        });
      }
    }, DD = function(e, t) {
      {
        if (e.context !== _a)
          return;
        su(), ou(function() {
          zp(t, e, null, null);
        });
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case G:
          case Ge:
          case q:
            v = p;
            break;
          case xe:
            v = p.render;
            break;
        }
        if (Ja === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, g = !1;
        if (v !== null) {
          var w = Ja(v);
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === q ? g = !0 : m = !0));
        }
        if (yf !== null && (yf.has(e) || i !== null && yf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || m) {
          var T = da(e, Ve);
          T !== null && qn(T, e, Ve, Ft);
        }
        u !== null && !g && ZS(u, t, a), s !== null && ZS(s, t, a);
      }
    }
    var _D = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case G:
          case Ge:
          case q:
            p = f;
            break;
          case xe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? kD(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function kD(e, t) {
      {
        var a = OD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case X:
              t.add(i.stateNode);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
            case H:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function OD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === X)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var eE;
    {
      eE = !1;
      try {
        var bT = Object.preventExtensions({});
      } catch {
        eE = !0;
      }
    }
    function MD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = F, this.childLanes = F, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !eE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ka = function(e, t, a, i) {
      return new MD(e, t, a, i);
    };
    function tE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function LD(e) {
      return typeof e == "function" && !tE(e) && e.defaultProps === void 0;
    }
    function ND(e) {
      if (typeof e == "function")
        return tE(e) ? q : G;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return xe;
        if (t === tt)
          return ht;
      }
      return se;
    }
    function ws(e, t) {
      var a = e.alternate;
      a === null ? (a = ka(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Sn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case se:
        case G:
        case Ge:
          a.type = gf(e.type);
          break;
        case q:
          a.type = XS(e.type);
          break;
        case xe:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function zD(e, t) {
      e.flags &= Sn | un;
      var a = e.alternate;
      if (a === null)
        e.childLanes = F, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function UD(e, t, a) {
      var i;
      return e === _h ? (i = at, t === !0 && (i |= Lt, i |= Ct)) : i = _e, Dr && (i |= Et), ka(H, null, null, i);
    }
    function nE(e, t, a, i, u, s) {
      var f = se, p = e;
      if (typeof e == "function")
        tE(e) ? (f = q, p = XS(p)) : p = gf(p);
      else if (typeof e == "string")
        f = X;
      else
        e: switch (e) {
          case ji:
            return no(a.children, u, s, t);
          case ai:
            f = qe, u |= Lt, (u & at) !== _e && (u |= Ct);
            break;
          case Fi:
            return AD(a, u, s, t);
          case ie:
            return jD(a, u, s, t);
          case He:
            return FD(a, u, s, t);
          case bn:
            return DT(a, u, s, t);
          case Gt:
          // eslint-disable-next-line no-fallthrough
          case ot:
          // eslint-disable-next-line no-fallthrough
          case Zt:
          // eslint-disable-next-line no-fallthrough
          case ar:
          // eslint-disable-next-line no-fallthrough
          case lt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Hi:
                  f = ut;
                  break e;
                case E:
                  f = gt;
                  break e;
                case B:
                  f = xe, p = KS(p);
                  break e;
                case tt:
                  f = ht;
                  break e;
                case Ke:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Ze(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ka(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function rE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = nE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function no(e, t, a, i) {
      var u = ka(Ne, e, i, t);
      return u.lanes = a, u;
    }
    function AD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ka(Ye, e, i, t | Et);
      return u.elementType = Fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function jD(e, t, a, i) {
      var u = ka(P, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function FD(e, t, a, i) {
      var u = ka(Ht, e, i, t);
      return u.elementType = He, u.lanes = a, u;
    }
    function DT(e, t, a, i) {
      var u = ka(Ue, e, i, t);
      u.elementType = bn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function aE(e, t, a) {
      var i = ka(Me, e, null, t);
      return i.lanes = a, i;
    }
    function HD() {
      var e = ka(X, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function PD(e) {
      var t = ka(Qt, null, null, _e);
      return t.stateNode = e, t;
    }
    function iE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ka(te, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function _T(e, t) {
      return e === null && (e = ka(se, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function VD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Py, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = yt, this.eventTimes = Yo(F), this.expirationTimes = Yo(Ft), this.pendingLanes = F, this.suspendedLanes = F, this.pingedLanes = F, this.expiredLanes = F, this.mutableReadLanes = F, this.finishedLanes = F, this.entangledLanes = F, this.entanglements = Yo(F), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Hl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case _h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case $u:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function kT(e, t, a, i, u, s, f, p, v, m) {
      var g = new VD(e, t, a, p, v), w = UD(t, s);
      g.current = w, w.stateNode = g;
      {
        var T = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = T;
      }
      return gg(w), g;
    }
    var lE = "18.3.1";
    function BD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ei(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Sr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var uE, oE;
    uE = !1, oE = {};
    function OT(e) {
      if (!e)
        return _a;
      var t = xu(e), a = w1(t);
      if (t.tag === q) {
        var i = t.type;
        if (cl(i))
          return rC(t, i, a);
      }
      return a;
    }
    function $D(e, t) {
      {
        var a = xu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = xr(a);
        if (u === null)
          return null;
        if (u.mode & Lt) {
          var s = Ze(a) || "Component";
          if (!oE[s]) {
            oE[s] = !0;
            var f = ir;
            try {
              Yt(u), a.mode & Lt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Yt(f) : rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function MT(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return kT(e, t, v, m, a, i, u, s, f);
    }
    function LT(e, t, a, i, u, s, f, p, v, m) {
      var g = !0, w = kT(a, i, g, e, u, s, f, p, v);
      w.context = OT(null);
      var T = w.current, M = qr(), z = eo(T), U = au(M, z);
      return U.callback = t ?? null, Qu(T, U, z), Xb(w, z, M), w;
    }
    function zp(e, t, a, i) {
      rd(t, e);
      var u = t.current, s = qr(), f = eo(u);
      en(f);
      var p = OT(a);
      t.context === null ? t.context = p : t.pendingContext = p, Pi && ir !== null && !uE && (uE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ze(ir) || "Unknown"));
      var v = au(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Qu(u, v, f);
      return m !== null && (qn(m, u, f, s), $h(m, u, f)), f;
    }
    function Lm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case X:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function YD(e) {
      switch (e.tag) {
        case H: {
          var t = e.stateNode;
          if (kc(t)) {
            var a = _v(t);
            eD(t, a);
          }
          break;
        }
        case P: {
          ou(function() {
            var u = da(e, Ve);
            if (u !== null) {
              var s = qr();
              qn(u, e, Ve, s);
            }
          });
          var i = Ve;
          sE(e, i);
          break;
        }
      }
    }
    function NT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nv(a.retryLane, t));
    }
    function sE(e, t) {
      NT(e, t);
      var a = e.alternate;
      a && NT(a, t);
    }
    function ID(e) {
      if (e.tag === P) {
        var t = Fo, a = da(e, t);
        if (a !== null) {
          var i = qr();
          qn(a, e, t, i);
        }
        sE(e, t);
      }
    }
    function QD(e) {
      if (e.tag === P) {
        var t = eo(e), a = da(e, t);
        if (a !== null) {
          var i = qr();
          qn(a, e, t, i);
        }
        sE(e, t);
      }
    }
    function zT(e) {
      var t = Xt(e);
      return t === null ? null : t.stateNode;
    }
    var UT = function(e) {
      return null;
    };
    function WD(e) {
      return UT(e);
    }
    var AT = function(e) {
      return !1;
    };
    function qD(e) {
      return AT(e);
    }
    var jT = null, FT = null, HT = null, PT = null, VT = null, BT = null, $T = null, YT = null, IT = null;
    {
      var QT = function(e, t, a) {
        var i = t[a], u = An(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (An(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = QT(e[i], t, a + 1), u);
      }, WT = function(e, t) {
        return QT(e, t, 0);
      }, qT = function(e, t, a, i) {
        var u = t[i], s = An(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], An(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = qT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, GT = function(e, t, a) {
        if (t.length !== a.length) {
          fe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              fe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return qT(e, t, a, 0);
      }, XT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = An(e) ? e.slice() : rt({}, e);
        return s[u] = XT(e[u], t, a + 1, i), s;
      }, KT = function(e, t, a) {
        return XT(e, t, 0, a);
      }, cE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      jT = function(e, t, a, i) {
        var u = cE(e, t);
        if (u !== null) {
          var s = KT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = da(e, Ve);
          f !== null && qn(f, e, Ve, Ft);
        }
      }, FT = function(e, t, a) {
        var i = cE(e, t);
        if (i !== null) {
          var u = WT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = da(e, Ve);
          s !== null && qn(s, e, Ve, Ft);
        }
      }, HT = function(e, t, a, i) {
        var u = cE(e, t);
        if (u !== null) {
          var s = GT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = da(e, Ve);
          f !== null && qn(f, e, Ve, Ft);
        }
      }, PT = function(e, t, a) {
        e.pendingProps = KT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = da(e, Ve);
        i !== null && qn(i, e, Ve, Ft);
      }, VT = function(e, t) {
        e.pendingProps = WT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = da(e, Ve);
        a !== null && qn(a, e, Ve, Ft);
      }, BT = function(e, t, a) {
        e.pendingProps = GT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = da(e, Ve);
        i !== null && qn(i, e, Ve, Ft);
      }, $T = function(e) {
        var t = da(e, Ve);
        t !== null && qn(t, e, Ve, Ft);
      }, YT = function(e) {
        UT = e;
      }, IT = function(e) {
        AT = e;
      };
    }
    function GD(e) {
      var t = xr(e);
      return t === null ? null : t.stateNode;
    }
    function XD(e) {
      return null;
    }
    function KD() {
      return ir;
    }
    function ZD(e) {
      var t = e.findFiberByHostInstance, a = x.ReactCurrentDispatcher;
      return _u({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: jT,
        overrideHookStateDeletePath: FT,
        overrideHookStateRenamePath: HT,
        overrideProps: PT,
        overridePropsDeletePath: VT,
        overridePropsRenamePath: BT,
        setErrorHandler: YT,
        setSuspenseHandler: IT,
        scheduleUpdate: $T,
        currentDispatcherRef: a,
        findHostInstanceByFiber: GD,
        findFiberByHostInstance: t || XD,
        // React Refresh
        findHostInstancesForRefresh: _D,
        scheduleRefresh: bD,
        scheduleRoot: DD,
        setRefreshHandler: xD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: KD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: lE
      });
    }
    var ZT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function fE(e) {
      this._internalRoot = e;
    }
    Nm.prototype.render = fE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : zm(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== yn) {
          var i = zT(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      zp(e, t, null, null);
    }, Nm.prototype.unmount = fE.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cT() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ou(function() {
          zp(null, e, null, null);
        }), ZE(t);
      }
    };
    function JD(e, t) {
      if (!zm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      JT(e);
      var a = !1, i = !1, u = "", s = ZT;
      t != null && (t.hydrate ? fe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ga && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = MT(e, _h, null, a, i, u, s);
      Ch(f.current, e);
      var p = e.nodeType === yn ? e.parentNode : e;
      return Pd(p), new fE(f);
    }
    function Nm(e) {
      this._internalRoot = e;
    }
    function e_(e) {
      e && $v(e);
    }
    Nm.prototype.unstable_scheduleHydration = e_;
    function t_(e, t, a) {
      if (!zm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      JT(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = ZT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = LT(t, null, e, _h, i, s, f, p, v);
      if (Ch(m.current, e), Pd(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          ix(m, w);
        }
      return new Nm(m);
    }
    function zm(e) {
      return !!(e && (e.nodeType === Cr || e.nodeType === di || e.nodeType === Bf));
    }
    function Up(e) {
      return !!(e && (e.nodeType === Cr || e.nodeType === di || e.nodeType === Bf || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function JT(e) {
      e.nodeType === Cr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Kd(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var n_ = x.ReactCurrentOwner, eR;
    eR = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = zT(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = dE(e), u = !!(i && Vu(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Cr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function dE(e) {
      return e ? e.nodeType === di ? e.documentElement : e.firstChild : null;
    }
    function tR() {
    }
    function r_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = Lm(f);
            s.call(T);
          };
        }
        var f = LT(
          t,
          i,
          e,
          $u,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          tR
        );
        e._reactRootContainer = f, Ch(f.current, e);
        var p = e.nodeType === yn ? e.parentNode : e;
        return Pd(p), ou(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var T = Lm(g);
            m.call(T);
          };
        }
        var g = MT(
          e,
          $u,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          tR
        );
        e._reactRootContainer = g, Ch(g.current, e);
        var w = e.nodeType === yn ? e.parentNode : e;
        return Pd(w), ou(function() {
          zp(t, g, a, i);
        }), g;
      }
    }
    function a_(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Um(e, t, a, i, u) {
      eR(a), a_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = r_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Lm(f);
            p.call(v);
          };
        }
        zp(t, f, e, u);
      }
      return Lm(f);
    }
    var nR = !1;
    function i_(e) {
      {
        nR || (nR = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = n_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Cr ? e : $D(e, "findDOMNode");
    }
    function l_(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Kd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Um(null, e, t, !0, a);
    }
    function u_(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Kd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Um(null, e, t, !1, a);
    }
    function o_(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !sy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Um(e, t, a, !1, i);
    }
    var rR = !1;
    function s_(e) {
      if (rR || (rR = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Up(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Kd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = dE(e), i = a && !Vu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ou(function() {
          Um(null, null, e, !1, function() {
            e._reactRootContainer = null, ZE(e);
          });
        }), !0;
      } else {
        {
          var u = dE(e), s = !!(u && Vu(u)), f = e.nodeType === Cr && Up(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    tr(YD), Lu(ID), Hv(QD), Go(sa), Rd(Av), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Qs(fw), oy($S, tD, ou);
    function c_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zm(t))
        throw new Error("Target container is not a DOM element.");
      return BD(e, t, null, a);
    }
    function f_(e, t, a, i) {
      return o_(e, t, a, i);
    }
    var pE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Vu, qc, Th, Cu, Ws, $S]
    };
    function d_(e, t) {
      return pE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), JD(e, t);
    }
    function p_(e, t, a) {
      return pE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), t_(e, t, a);
    }
    function v_(e) {
      return cT() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ou(e);
    }
    var h_ = ZD({
      findFiberByHostInstance: ss,
      bundleType: 1,
      version: lE,
      rendererPackageName: "react-dom"
    });
    if (!h_ && mt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var aR = window.location.protocol;
      /^(https?|file):$/.test(aR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (aR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pE, ya.createPortal = c_, ya.createRoot = d_, ya.findDOMNode = i_, ya.flushSync = v_, ya.hydrate = l_, ya.hydrateRoot = p_, ya.render = u_, ya.unmountComponentAtNode = s_, ya.unstable_batchedUpdates = $S, ya.unstable_renderSubtreeIntoContainer = f_, ya.version = lE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ya;
}
var pR;
function D_() {
  if (pR) return jm.exports;
  pR = 1;
  function L() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (ee) {
        console.error(ee);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (L(), jm.exports = x_()) : jm.exports = b_(), jm.exports;
}
var vR;
function __() {
  if (vR) return Ef;
  vR = 1;
  var L = D_();
  if (process.env.NODE_ENV === "production")
    Ef.createRoot = L.createRoot, Ef.hydrateRoot = L.hydrateRoot;
  else {
    var ee = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ef.createRoot = function(x, ve) {
      ee.usingClientEntryPoint = !0;
      try {
        return L.createRoot(x, ve);
      } finally {
        ee.usingClientEntryPoint = !1;
      }
    }, Ef.hydrateRoot = function(x, ve, Se) {
      ee.usingClientEntryPoint = !0;
      try {
        return L.hydrateRoot(x, ve, Se);
      } finally {
        ee.usingClientEntryPoint = !1;
      }
    };
  }
  return Ef;
}
var k_ = __();
function O_() {
  const [L, ee] = TE([]);
  RE(() => {
    const y = () => {
      x();
    };
    return Hp.instance.on("change", y), x(), () => {
      Hp.instance.off("change", y);
    };
  }, []);
  function x() {
    ee(Hp.getList());
  }
  function ve() {
    return Se().length > 0;
  }
  function Se() {
    return L.filter((y) => !y.isConnected);
  }
  function fe(y) {
    y.connect().then(() => {
    }).catch((ge) => {
      console.error(ge);
    });
  }
  return /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `ws-fixed ws-z-50 ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-bg-white/50 dark:ws-bg-neutral-900/50 ${ve() ? "" : "ws-hidden"}`,
      children: /* @__PURE__ */ je.jsx("div", { className: "ws-relative ws-grid ws-place-items-center ws-h-screen ws-text-black dark:ws-text-white", children: /* @__PURE__ */ je.jsxs("div", { className: "ws-w-full ws-max-w-xl ws-mx-auto ws-text-center ws-p-4", children: [
        /* @__PURE__ */ je.jsx("h4", { className: "ws-text-xl sm:ws-text-3xl ws-font-semibold ws-uppercase ws-mb-6", children: "Webserial permission request" }),
        /* @__PURE__ */ je.jsx(
          "div",
          {
            role: "alert",
            className: "ws-rounded-md ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-b-4 ws-border-sky-400 dark:ws-border-sky-600 ws-p-4",
            children: /* @__PURE__ */ je.jsxs("div", { className: "ws-flex", children: [
              /* @__PURE__ */ je.jsx("div", { className: "ws-flex-shrink-0", children: /* @__PURE__ */ je.jsx(
                "svg",
                {
                  className: "ws-size-6 ws-text-gray-700 dark:ws-text-blue-100",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ je.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ je.jsxs("div", { className: "ws-ml-3 ws-flex-1 ws-text-left", children: [
                /* @__PURE__ */ je.jsx("p", { className: "ws-text-base ws-font-bold ws-text-gray-800 dark:ws-text-white", children: "Note" }),
                /* @__PURE__ */ je.jsx("p", { className: "ws-text-sm ws-text-gray-700 dark:ws-text-white", children: "To access the serial port, you need to grant permission to the browser." })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ je.jsx("p", { className: "ws-my-6 ws-text-base", children: "Here appear the devices missing to work with the application." }),
        /* @__PURE__ */ je.jsx("div", { children: /* @__PURE__ */ je.jsx("ul", { className: "ws-text-left ws-grid ws-grid-cols-1 ws-gap-2", children: Se().map((y) => /* @__PURE__ */ je.jsx("li", { children: /* @__PURE__ */ je.jsxs(
          "button",
          {
            className: "ws-btn-permission",
            onClick: () => fe(y),
            children: [
              y.typeDevice,
              " #",
              y.deviceNumber
            ]
          }
        ) }, y)) }) }),
        /* @__PURE__ */ je.jsx("div", { className: "ws-mt-12 ws-mb-2 ws-text-xs ws-text-right", children: "If by some reason the devices are not appearing, please refresh the page." }),
        /* @__PURE__ */ je.jsx("div", { className: "ws-text-right", children: /* @__PURE__ */ je.jsx(
          "button",
          {
            className: "ws-btn-reload",
            onClick: () => {
              location.reload();
            },
            children: "Refresh"
          }
        ) })
      ] }) })
    }
  );
}
function M_() {
  let L = location.protocol === "https:";
  const ee = DR.supportWebSerial();
  ee && !L && (L = !0);
  function x() {
    return !L || !ee;
  }
  function ve() {
    location.href = location.href.replace(/^http:/, "https:");
  }
  return /* @__PURE__ */ je.jsx(je.Fragment, { children: /* @__PURE__ */ je.jsx(
    "div",
    {
      className: `ws-fixed ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-z-[51] ws-p-2 ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-y-8 ws-border-red-600 dark:ws-border-rose-600 ${x() ? "" : "ws-hidden"}`,
      children: /* @__PURE__ */ je.jsx("div", { className: "ws-grid ws-place-items-center ws-size-full", children: /* @__PURE__ */ je.jsx("div", { className: "ws-w-full ws-max-w-xl", children: /* @__PURE__ */ je.jsxs(
        "div",
        {
          className: "ws-w-full ws-bg-white dark:ws-bg-neutral-950 ws-border-b-8 ws-border-red-600 dark:ws-border-rose-600 ws-rounded-lg ws-px-4 ws-py-8 ws-text-black dark:ws-text-white",
          children: [
            /* @__PURE__ */ je.jsx("div", { className: "ws-w-full ws-inline-flex ws-justify-center ws-text-red-600", children: /* @__PURE__ */ je.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "ws-size-24 ws-shrink-0 ws-stroke-current",
                fill: "none",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ je.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ je.jsx("div", { className: "ws-text-center ws-text-2xl", children: L ? /* @__PURE__ */ je.jsxs("div", { className: "", children: [
              /* @__PURE__ */ je.jsx("p", { children: "Webserial is not available in this browser." }),
              /* @__PURE__ */ je.jsx("p", { className: "ws-mt-6 ws-text-sm", children: "Please check documentation for more information." }),
              /* @__PURE__ */ je.jsx("p", { className: "ws-mb-6 ws-text-sm", children: "This application will not work." })
            ] }) : /* @__PURE__ */ je.jsxs("div", { children: [
              /* @__PURE__ */ je.jsx("p", { children: "Webserial need a secure connection (https)" }),
              /* @__PURE__ */ je.jsx("p", { className: "ws-mt-2 ws-flex ws-justify-center", children: /* @__PURE__ */ je.jsx("button", { className: "ws-btn-link", onClick: () => {
                ve();
              }, children: "Update connection" }) }),
              /* @__PURE__ */ je.jsx("p", { className: "ws-mt-6 ws-text-base", children: "Otherwise this application will not work." })
            ] }) })
          ]
        }
      ) }) })
    }
  ) });
}
var Hm = { exports: {} }, Pm = { exports: {} }, Ut = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hR;
function L_() {
  if (hR) return Ut;
  hR = 1;
  var L = typeof Symbol == "function" && Symbol.for, ee = L ? Symbol.for("react.element") : 60103, x = L ? Symbol.for("react.portal") : 60106, ve = L ? Symbol.for("react.fragment") : 60107, Se = L ? Symbol.for("react.strict_mode") : 60108, fe = L ? Symbol.for("react.profiler") : 60114, y = L ? Symbol.for("react.provider") : 60109, ge = L ? Symbol.for("react.context") : 60110, G = L ? Symbol.for("react.async_mode") : 60111, q = L ? Symbol.for("react.concurrent_mode") : 60111, se = L ? Symbol.for("react.forward_ref") : 60112, H = L ? Symbol.for("react.suspense") : 60113, te = L ? Symbol.for("react.suspense_list") : 60120, X = L ? Symbol.for("react.memo") : 60115, Me = L ? Symbol.for("react.lazy") : 60116, Ne = L ? Symbol.for("react.block") : 60121, qe = L ? Symbol.for("react.fundamental") : 60117, gt = L ? Symbol.for("react.responder") : 60118, ut = L ? Symbol.for("react.scope") : 60119;
  function xe(P) {
    if (typeof P == "object" && P !== null) {
      var ht = P.$$typeof;
      switch (ht) {
        case ee:
          switch (P = P.type, P) {
            case G:
            case q:
            case ve:
            case fe:
            case Se:
            case H:
              return P;
            default:
              switch (P = P && P.$$typeof, P) {
                case ge:
                case se:
                case Me:
                case X:
                case y:
                  return P;
                default:
                  return ht;
              }
          }
        case x:
          return ht;
      }
    }
  }
  function Ye(P) {
    return xe(P) === q;
  }
  return Ut.AsyncMode = G, Ut.ConcurrentMode = q, Ut.ContextConsumer = ge, Ut.ContextProvider = y, Ut.Element = ee, Ut.ForwardRef = se, Ut.Fragment = ve, Ut.Lazy = Me, Ut.Memo = X, Ut.Portal = x, Ut.Profiler = fe, Ut.StrictMode = Se, Ut.Suspense = H, Ut.isAsyncMode = function(P) {
    return Ye(P) || xe(P) === G;
  }, Ut.isConcurrentMode = Ye, Ut.isContextConsumer = function(P) {
    return xe(P) === ge;
  }, Ut.isContextProvider = function(P) {
    return xe(P) === y;
  }, Ut.isElement = function(P) {
    return typeof P == "object" && P !== null && P.$$typeof === ee;
  }, Ut.isForwardRef = function(P) {
    return xe(P) === se;
  }, Ut.isFragment = function(P) {
    return xe(P) === ve;
  }, Ut.isLazy = function(P) {
    return xe(P) === Me;
  }, Ut.isMemo = function(P) {
    return xe(P) === X;
  }, Ut.isPortal = function(P) {
    return xe(P) === x;
  }, Ut.isProfiler = function(P) {
    return xe(P) === fe;
  }, Ut.isStrictMode = function(P) {
    return xe(P) === Se;
  }, Ut.isSuspense = function(P) {
    return xe(P) === H;
  }, Ut.isValidElementType = function(P) {
    return typeof P == "string" || typeof P == "function" || P === ve || P === q || P === fe || P === Se || P === H || P === te || typeof P == "object" && P !== null && (P.$$typeof === Me || P.$$typeof === X || P.$$typeof === y || P.$$typeof === ge || P.$$typeof === se || P.$$typeof === qe || P.$$typeof === gt || P.$$typeof === ut || P.$$typeof === Ne);
  }, Ut.typeOf = xe, Ut;
}
var At = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mR;
function N_() {
  return mR || (mR = 1, process.env.NODE_ENV !== "production" && function() {
    var L = typeof Symbol == "function" && Symbol.for, ee = L ? Symbol.for("react.element") : 60103, x = L ? Symbol.for("react.portal") : 60106, ve = L ? Symbol.for("react.fragment") : 60107, Se = L ? Symbol.for("react.strict_mode") : 60108, fe = L ? Symbol.for("react.profiler") : 60114, y = L ? Symbol.for("react.provider") : 60109, ge = L ? Symbol.for("react.context") : 60110, G = L ? Symbol.for("react.async_mode") : 60111, q = L ? Symbol.for("react.concurrent_mode") : 60111, se = L ? Symbol.for("react.forward_ref") : 60112, H = L ? Symbol.for("react.suspense") : 60113, te = L ? Symbol.for("react.suspense_list") : 60120, X = L ? Symbol.for("react.memo") : 60115, Me = L ? Symbol.for("react.lazy") : 60116, Ne = L ? Symbol.for("react.block") : 60121, qe = L ? Symbol.for("react.fundamental") : 60117, gt = L ? Symbol.for("react.responder") : 60118, ut = L ? Symbol.for("react.scope") : 60119;
    function xe(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === ve || Z === q || Z === fe || Z === Se || Z === H || Z === te || typeof Z == "object" && Z !== null && (Z.$$typeof === Me || Z.$$typeof === X || Z.$$typeof === y || Z.$$typeof === ge || Z.$$typeof === se || Z.$$typeof === qe || Z.$$typeof === gt || Z.$$typeof === ut || Z.$$typeof === Ne);
    }
    function Ye(Z) {
      if (typeof Z == "object" && Z !== null) {
        var jt = Z.$$typeof;
        switch (jt) {
          case ee:
            var hn = Z.type;
            switch (hn) {
              case G:
              case q:
              case ve:
              case fe:
              case Se:
              case H:
                return hn;
              default:
                var mn = hn && hn.$$typeof;
                switch (mn) {
                  case ge:
                  case se:
                  case Me:
                  case X:
                  case y:
                    return mn;
                  default:
                    return jt;
                }
            }
          case x:
            return jt;
        }
      }
    }
    var P = G, ht = q, Ge = ge, ln = y, _t = ee, Qt = se, Ht = ve, St = Me, Ue = X, xt = x, Bt = fe, vt = Se, vn = H, K = !1;
    function Re(Z) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(Z) || Ye(Z) === G;
    }
    function k(Z) {
      return Ye(Z) === q;
    }
    function W(Z) {
      return Ye(Z) === ge;
    }
    function pe(Z) {
      return Ye(Z) === y;
    }
    function Fe(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === ee;
    }
    function Te(Z) {
      return Ye(Z) === se;
    }
    function et(Z) {
      return Ye(Z) === ve;
    }
    function be(Z) {
      return Ye(Z) === Me;
    }
    function ke(Z) {
      return Ye(Z) === X;
    }
    function Pe(Z) {
      return Ye(Z) === x;
    }
    function Xe(Z) {
      return Ye(Z) === fe;
    }
    function Ie(Z) {
      return Ye(Z) === Se;
    }
    function mt(Z) {
      return Ye(Z) === H;
    }
    At.AsyncMode = P, At.ConcurrentMode = ht, At.ContextConsumer = Ge, At.ContextProvider = ln, At.Element = _t, At.ForwardRef = Qt, At.Fragment = Ht, At.Lazy = St, At.Memo = Ue, At.Portal = xt, At.Profiler = Bt, At.StrictMode = vt, At.Suspense = vn, At.isAsyncMode = Re, At.isConcurrentMode = k, At.isContextConsumer = W, At.isContextProvider = pe, At.isElement = Fe, At.isForwardRef = Te, At.isFragment = et, At.isLazy = be, At.isMemo = ke, At.isPortal = Pe, At.isProfiler = Xe, At.isStrictMode = Ie, At.isSuspense = mt, At.isValidElementType = xe, At.typeOf = Ye;
  }()), At;
}
var yR;
function kR() {
  return yR || (yR = 1, process.env.NODE_ENV === "production" ? Pm.exports = L_() : Pm.exports = N_()), Pm.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mE, gR;
function z_() {
  if (gR) return mE;
  gR = 1;
  var L = Object.getOwnPropertySymbols, ee = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
  function ve(fe) {
    if (fe == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(fe);
  }
  function Se() {
    try {
      if (!Object.assign)
        return !1;
      var fe = new String("abc");
      if (fe[5] = "de", Object.getOwnPropertyNames(fe)[0] === "5")
        return !1;
      for (var y = {}, ge = 0; ge < 10; ge++)
        y["_" + String.fromCharCode(ge)] = ge;
      var G = Object.getOwnPropertyNames(y).map(function(se) {
        return y[se];
      });
      if (G.join("") !== "0123456789")
        return !1;
      var q = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(se) {
        q[se] = se;
      }), Object.keys(Object.assign({}, q)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return mE = Se() ? Object.assign : function(fe, y) {
    for (var ge, G = ve(fe), q, se = 1; se < arguments.length; se++) {
      ge = Object(arguments[se]);
      for (var H in ge)
        ee.call(ge, H) && (G[H] = ge[H]);
      if (L) {
        q = L(ge);
        for (var te = 0; te < q.length; te++)
          x.call(ge, q[te]) && (G[q[te]] = ge[q[te]]);
      }
    }
    return G;
  }, mE;
}
var yE, SR;
function wE() {
  if (SR) return yE;
  SR = 1;
  var L = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yE = L, yE;
}
var gE, ER;
function OR() {
  return ER || (ER = 1, gE = Function.call.bind(Object.prototype.hasOwnProperty)), gE;
}
var SE, CR;
function U_() {
  if (CR) return SE;
  CR = 1;
  var L = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var ee = /* @__PURE__ */ wE(), x = {}, ve = /* @__PURE__ */ OR();
    L = function(fe) {
      var y = "Warning: " + fe;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function Se(fe, y, ge, G, q) {
    if (process.env.NODE_ENV !== "production") {
      for (var se in fe)
        if (ve(fe, se)) {
          var H;
          try {
            if (typeof fe[se] != "function") {
              var te = Error(
                (G || "React class") + ": " + ge + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof fe[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw te.name = "Invariant Violation", te;
            }
            H = fe[se](y, se, G, ge, null, ee);
          } catch (Me) {
            H = Me;
          }
          if (H && !(H instanceof Error) && L(
            (G || "React class") + ": type specification of " + ge + " `" + se + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof H + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), H instanceof Error && !(H.message in x)) {
            x[H.message] = !0;
            var X = q ? q() : "";
            L(
              "Failed " + ge + " type: " + H.message + (X ?? "")
            );
          }
        }
    }
  }
  return Se.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (x = {});
  }, SE = Se, SE;
}
var EE, TR;
function A_() {
  if (TR) return EE;
  TR = 1;
  var L = kR(), ee = z_(), x = /* @__PURE__ */ wE(), ve = /* @__PURE__ */ OR(), Se = /* @__PURE__ */ U_(), fe = function() {
  };
  process.env.NODE_ENV !== "production" && (fe = function(ge) {
    var G = "Warning: " + ge;
    typeof console < "u" && console.error(G);
    try {
      throw new Error(G);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return EE = function(ge, G) {
    var q = typeof Symbol == "function" && Symbol.iterator, se = "@@iterator";
    function H(k) {
      var W = k && (q && k[q] || k[se]);
      if (typeof W == "function")
        return W;
    }
    var te = "<<anonymous>>", X = {
      array: gt("array"),
      bigint: gt("bigint"),
      bool: gt("boolean"),
      func: gt("function"),
      number: gt("number"),
      object: gt("object"),
      string: gt("string"),
      symbol: gt("symbol"),
      any: ut(),
      arrayOf: xe,
      element: Ye(),
      elementType: P(),
      instanceOf: ht,
      node: Qt(),
      objectOf: ln,
      oneOf: Ge,
      oneOfType: _t,
      shape: St,
      exact: Ue
    };
    function Me(k, W) {
      return k === W ? k !== 0 || 1 / k === 1 / W : k !== k && W !== W;
    }
    function Ne(k, W) {
      this.message = k, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    Ne.prototype = Error.prototype;
    function qe(k) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, pe = 0;
      function Fe(et, be, ke, Pe, Xe, Ie, mt) {
        if (Pe = Pe || te, Ie = Ie || ke, mt !== x) {
          if (G) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var jt = Pe + ":" + ke;
            !W[jt] && // Avoid spamming the console because they are often not actionable except for lib authors
            pe < 3 && (fe(
              "You are manually calling a React.PropTypes validation function for the `" + Ie + "` prop on `" + Pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[jt] = !0, pe++);
          }
        }
        return be[ke] == null ? et ? be[ke] === null ? new Ne("The " + Xe + " `" + Ie + "` is marked as required " + ("in `" + Pe + "`, but its value is `null`.")) : new Ne("The " + Xe + " `" + Ie + "` is marked as required in " + ("`" + Pe + "`, but its value is `undefined`.")) : null : k(be, ke, Pe, Xe, Ie);
      }
      var Te = Fe.bind(null, !1);
      return Te.isRequired = Fe.bind(null, !0), Te;
    }
    function gt(k) {
      function W(pe, Fe, Te, et, be, ke) {
        var Pe = pe[Fe], Xe = vt(Pe);
        if (Xe !== k) {
          var Ie = vn(Pe);
          return new Ne(
            "Invalid " + et + " `" + be + "` of type " + ("`" + Ie + "` supplied to `" + Te + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return qe(W);
    }
    function ut() {
      return qe(y);
    }
    function xe(k) {
      function W(pe, Fe, Te, et, be) {
        if (typeof k != "function")
          return new Ne("Property `" + be + "` of component `" + Te + "` has invalid PropType notation inside arrayOf.");
        var ke = pe[Fe];
        if (!Array.isArray(ke)) {
          var Pe = vt(ke);
          return new Ne("Invalid " + et + " `" + be + "` of type " + ("`" + Pe + "` supplied to `" + Te + "`, expected an array."));
        }
        for (var Xe = 0; Xe < ke.length; Xe++) {
          var Ie = k(ke, Xe, Te, et, be + "[" + Xe + "]", x);
          if (Ie instanceof Error)
            return Ie;
        }
        return null;
      }
      return qe(W);
    }
    function Ye() {
      function k(W, pe, Fe, Te, et) {
        var be = W[pe];
        if (!ge(be)) {
          var ke = vt(be);
          return new Ne("Invalid " + Te + " `" + et + "` of type " + ("`" + ke + "` supplied to `" + Fe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return qe(k);
    }
    function P() {
      function k(W, pe, Fe, Te, et) {
        var be = W[pe];
        if (!L.isValidElementType(be)) {
          var ke = vt(be);
          return new Ne("Invalid " + Te + " `" + et + "` of type " + ("`" + ke + "` supplied to `" + Fe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return qe(k);
    }
    function ht(k) {
      function W(pe, Fe, Te, et, be) {
        if (!(pe[Fe] instanceof k)) {
          var ke = k.name || te, Pe = Re(pe[Fe]);
          return new Ne("Invalid " + et + " `" + be + "` of type " + ("`" + Pe + "` supplied to `" + Te + "`, expected ") + ("instance of `" + ke + "`."));
        }
        return null;
      }
      return qe(W);
    }
    function Ge(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? fe(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : fe("Invalid argument supplied to oneOf, expected an array.")), y;
      function W(pe, Fe, Te, et, be) {
        for (var ke = pe[Fe], Pe = 0; Pe < k.length; Pe++)
          if (Me(ke, k[Pe]))
            return null;
        var Xe = JSON.stringify(k, function(mt, Z) {
          var jt = vn(Z);
          return jt === "symbol" ? String(Z) : Z;
        });
        return new Ne("Invalid " + et + " `" + be + "` of value `" + String(ke) + "` " + ("supplied to `" + Te + "`, expected one of " + Xe + "."));
      }
      return qe(W);
    }
    function ln(k) {
      function W(pe, Fe, Te, et, be) {
        if (typeof k != "function")
          return new Ne("Property `" + be + "` of component `" + Te + "` has invalid PropType notation inside objectOf.");
        var ke = pe[Fe], Pe = vt(ke);
        if (Pe !== "object")
          return new Ne("Invalid " + et + " `" + be + "` of type " + ("`" + Pe + "` supplied to `" + Te + "`, expected an object."));
        for (var Xe in ke)
          if (ve(ke, Xe)) {
            var Ie = k(ke, Xe, Te, et, be + "." + Xe, x);
            if (Ie instanceof Error)
              return Ie;
          }
        return null;
      }
      return qe(W);
    }
    function _t(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && fe("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var W = 0; W < k.length; W++) {
        var pe = k[W];
        if (typeof pe != "function")
          return fe(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(pe) + " at index " + W + "."
          ), y;
      }
      function Fe(Te, et, be, ke, Pe) {
        for (var Xe = [], Ie = 0; Ie < k.length; Ie++) {
          var mt = k[Ie], Z = mt(Te, et, be, ke, Pe, x);
          if (Z == null)
            return null;
          Z.data && ve(Z.data, "expectedType") && Xe.push(Z.data.expectedType);
        }
        var jt = Xe.length > 0 ? ", expected one of type [" + Xe.join(", ") + "]" : "";
        return new Ne("Invalid " + ke + " `" + Pe + "` supplied to " + ("`" + be + "`" + jt + "."));
      }
      return qe(Fe);
    }
    function Qt() {
      function k(W, pe, Fe, Te, et) {
        return xt(W[pe]) ? null : new Ne("Invalid " + Te + " `" + et + "` supplied to " + ("`" + Fe + "`, expected a ReactNode."));
      }
      return qe(k);
    }
    function Ht(k, W, pe, Fe, Te) {
      return new Ne(
        (k || "React class") + ": " + W + " type `" + pe + "." + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Te + "`."
      );
    }
    function St(k) {
      function W(pe, Fe, Te, et, be) {
        var ke = pe[Fe], Pe = vt(ke);
        if (Pe !== "object")
          return new Ne("Invalid " + et + " `" + be + "` of type `" + Pe + "` " + ("supplied to `" + Te + "`, expected `object`."));
        for (var Xe in k) {
          var Ie = k[Xe];
          if (typeof Ie != "function")
            return Ht(Te, et, be, Xe, vn(Ie));
          var mt = Ie(ke, Xe, Te, et, be + "." + Xe, x);
          if (mt)
            return mt;
        }
        return null;
      }
      return qe(W);
    }
    function Ue(k) {
      function W(pe, Fe, Te, et, be) {
        var ke = pe[Fe], Pe = vt(ke);
        if (Pe !== "object")
          return new Ne("Invalid " + et + " `" + be + "` of type `" + Pe + "` " + ("supplied to `" + Te + "`, expected `object`."));
        var Xe = ee({}, pe[Fe], k);
        for (var Ie in Xe) {
          var mt = k[Ie];
          if (ve(k, Ie) && typeof mt != "function")
            return Ht(Te, et, be, Ie, vn(mt));
          if (!mt)
            return new Ne(
              "Invalid " + et + " `" + be + "` key `" + Ie + "` supplied to `" + Te + "`.\nBad object: " + JSON.stringify(pe[Fe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var Z = mt(ke, Ie, Te, et, be + "." + Ie, x);
          if (Z)
            return Z;
        }
        return null;
      }
      return qe(W);
    }
    function xt(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(xt);
          if (k === null || ge(k))
            return !0;
          var W = H(k);
          if (W) {
            var pe = W.call(k), Fe;
            if (W !== k.entries) {
              for (; !(Fe = pe.next()).done; )
                if (!xt(Fe.value))
                  return !1;
            } else
              for (; !(Fe = pe.next()).done; ) {
                var Te = Fe.value;
                if (Te && !xt(Te[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Bt(k, W) {
      return k === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function vt(k) {
      var W = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : Bt(W, k) ? "symbol" : W;
    }
    function vn(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var W = vt(k);
      if (W === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function K(k) {
      var W = vn(k);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function Re(k) {
      return !k.constructor || !k.constructor.name ? te : k.constructor.name;
    }
    return X.checkPropTypes = Se, X.resetWarningCache = Se.resetWarningCache, X.PropTypes = X, X;
  }, EE;
}
var CE, RR;
function j_() {
  if (RR) return CE;
  RR = 1;
  var L = /* @__PURE__ */ wE();
  function ee() {
  }
  function x() {
  }
  return x.resetWarningCache = ee, CE = function() {
    function ve(y, ge, G, q, se, H) {
      if (H !== L) {
        var te = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw te.name = "Invariant Violation", te;
      }
    }
    ve.isRequired = ve;
    function Se() {
      return ve;
    }
    var fe = {
      array: ve,
      bigint: ve,
      bool: ve,
      func: ve,
      number: ve,
      object: ve,
      string: ve,
      symbol: ve,
      any: ve,
      arrayOf: Se,
      element: ve,
      elementType: ve,
      instanceOf: Se,
      node: ve,
      objectOf: Se,
      oneOf: Se,
      oneOfType: Se,
      shape: Se,
      exact: Se,
      checkPropTypes: x,
      resetWarningCache: ee
    };
    return fe.PropTypes = fe, fe;
  }, CE;
}
var wR;
function F_() {
  if (wR) return Hm.exports;
  if (wR = 1, process.env.NODE_ENV !== "production") {
    var L = kR(), ee = !0;
    Hm.exports = /* @__PURE__ */ A_()(L.isElement, ee);
  } else
    Hm.exports = /* @__PURE__ */ j_()();
  return Hm.exports;
}
var H_ = /* @__PURE__ */ F_();
const xR = /* @__PURE__ */ S_(H_);
function P_() {
  const [L, ee] = TE([]), [x, ve] = TE([]);
  let Se = 0;
  RE(() => {
    Hp.instance.on("change", () => {
      fe();
    }), fe();
  }, []);
  function fe() {
    const y = Hp.getList(), ge = ["serial:connected", "serial:disconnected", "serial:connecting"];
    for (const G of y) {
      const q = G.availableListeners.filter((se) => !se.listening && ge.includes(se.type));
      if (q.length > 0)
        for (const se of q)
          G.on(se.type, () => {
            let H = "ws-alert-info", te = "Device connecting";
            se.type === "serial:connected" ? (H = "ws-alert-success", te = "Device connected") : se.type === "serial:disconnected" && (H = "ws-alert-error", te = "Device disconnected");
            const X = [...x];
            X.push({ message: te, type: H }), ve([...X]), Se && clearTimeout(Se), Se = setTimeout(() => {
              const Me = [...x];
              Me.shift(), ve([...Me]);
            }, 5e3);
          });
    }
    ee(y);
  }
  return /* @__PURE__ */ je.jsx(je.Fragment, { children: /* @__PURE__ */ je.jsx("div", { className: "ws-fixed ws-z-[60] ws-bottom-4 ws-right-4 ws-grid ws-gap-2", children: x.map((y, ge) => /* @__PURE__ */ je.jsx(MR, { message: y.message, type: y.type }, `alert-ws-${ge}`)) }) });
}
MR.propTypes = {
  message: xR.string,
  type: xR.string
};
function MR({ message: L, type: ee }) {
  return /* @__PURE__ */ je.jsxs("div", { role: "alert", className: `ws-alert ${ee}`, children: [
    /* @__PURE__ */ je.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        className: "ws-h-6 ws-w-6 ws-shrink-0 ws-stroke-current",
        children: /* @__PURE__ */ je.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          }
        )
      }
    ),
    /* @__PURE__ */ je.jsx("span", { children: L })
  ] });
}
function V_() {
  RE(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, []);
  let L = location.protocol === "https:";
  const ee = DR.supportWebSerial();
  ee && !L && (L = !0);
  function x() {
    return !L || !ee;
  }
  return /* @__PURE__ */ je.jsxs(je.Fragment, { children: [
    /* @__PURE__ */ je.jsx(O_, {}),
    x() ? /* @__PURE__ */ je.jsx(M_, {}) : null,
    /* @__PURE__ */ je.jsx(P_, {})
  ] });
}
const bR = "v4";
if (typeof document < "u") {
  let L = document.getElementById(`webserial-${bR}`);
  L || (L = document.createElement("div"), L.id = `webserial-${bR}`, L.classList.add("ws-container"), document.body.append(L)), k_.createRoot(L).render(
    /* @__PURE__ */ je.jsx(g_, { children: /* @__PURE__ */ je.jsx(V_, {}) })
  );
}
