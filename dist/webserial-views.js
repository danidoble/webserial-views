import Am, { useState as S0, useEffect as x0, StrictMode as S_ } from "react";
import { Devices as Um, utils as E_ } from "webserial";
function C_(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
var E0 = { exports: {} }, Dp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function T_() {
  if (uT) return Dp;
  uT = 1;
  var z = Am, fe = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, Ue = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(ye, q, W) {
    var ue, $ = {}, J = null, K = null;
    W !== void 0 && (J = "" + W), q.key !== void 0 && (J = "" + q.key), q.ref !== void 0 && (K = q.ref);
    for (ue in q) Se.call(q, ue) && !ae.hasOwnProperty(ue) && ($[ue] = q[ue]);
    if (ye && ye.defaultProps) for (ue in q = ye.defaultProps, q) $[ue] === void 0 && ($[ue] = q[ue]);
    return { $$typeof: fe, type: ye, key: J, ref: K, props: $, _owner: Ue.current };
  }
  return Dp.Fragment = _, Dp.jsx = y, Dp.jsxs = y, Dp;
}
var _p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function R_() {
  return oT || (oT = 1, process.env.NODE_ENV !== "production" && function() {
    var z = Am, fe = Symbol.for("react.element"), _ = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), Ue = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), ye = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), xe = Symbol.iterator, Ae = "@@iterator";
    function Xe(E) {
      if (E === null || typeof E != "object")
        return null;
      var B = xe && E[xe] || E[Ae];
      return typeof B == "function" ? B : null;
    }
    var Tt = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function it(E) {
      {
        for (var B = arguments.length, ee = new Array(B > 1 ? B - 1 : 0), De = 1; De < B; De++)
          ee[De - 1] = arguments[De];
        ke("error", E, ee);
      }
    }
    function ke(E, B, ee) {
      {
        var De = Tt.ReactDebugCurrentFrame, pt = De.getStackAddendum();
        pt !== "" && (B += "%s", ee = ee.concat([pt]));
        var mt = ee.map(function(Pe) {
          return String(Pe);
        });
        mt.unshift("Warning: " + B), Function.prototype.apply.call(console[E], console, mt);
      }
    }
    var We = !1, P = !1, yt = !1, Ke = !1, sn = !1, yn;
    yn = Symbol.for("react.module.reference");
    function Ht(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Se || E === ae || sn || E === Ue || E === W || E === ue || Ke || E === K || We || P || yt || typeof E == "object" && E !== null && (E.$$typeof === J || E.$$typeof === $ || E.$$typeof === y || E.$$typeof === ye || E.$$typeof === q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === yn || E.getModuleId !== void 0));
    }
    function gt(E, B, ee) {
      var De = E.displayName;
      if (De)
        return De;
      var pt = B.displayName || B.name || "";
      return pt !== "" ? ee + "(" + pt + ")" : ee;
    }
    function cn(E) {
      return E.displayName || "Context";
    }
    function He(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && it("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Se:
          return "Fragment";
        case _:
          return "Portal";
        case ae:
          return "Profiler";
        case Ue:
          return "StrictMode";
        case W:
          return "Suspense";
        case ue:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case ye:
            var B = E;
            return cn(B) + ".Consumer";
          case y:
            var ee = E;
            return cn(ee._context) + ".Provider";
          case q:
            return gt(E, E.render, "ForwardRef");
          case $:
            var De = E.displayName || null;
            return De !== null ? De : He(E.type) || "Memo";
          case J: {
            var pt = E, mt = pt._payload, Pe = pt._init;
            try {
              return He(Pe(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, rn = 0, dt, Kt, X, we, k, Q, de;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Oe() {
      {
        if (rn === 0) {
          dt = console.log, Kt = console.info, X = console.warn, we = console.error, k = console.group, Q = console.groupCollapsed, de = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
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
        rn++;
      }
    }
    function nt() {
      {
        if (rn--, rn === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, E, {
              value: dt
            }),
            info: tt({}, E, {
              value: Kt
            }),
            warn: tt({}, E, {
              value: X
            }),
            error: tt({}, E, {
              value: we
            }),
            group: tt({}, E, {
              value: k
            }),
            groupCollapsed: tt({}, E, {
              value: Q
            }),
            groupEnd: tt({}, E, {
              value: de
            })
          });
        }
        rn < 0 && it("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = Tt.ReactCurrentDispatcher, Be;
    function $e(E, B, ee) {
      {
        if (Be === void 0)
          try {
            throw Error();
          } catch (pt) {
            var De = pt.stack.trim().match(/\n( *(at )?)/);
            Be = De && De[1] || "";
          }
        return `
` + Be + E;
      }
    }
    var Ze = !1, rt;
    {
      var Dt = typeof WeakMap == "function" ? WeakMap : Map;
      rt = new Dt();
    }
    function Z(E, B) {
      if (!E || Ze)
        return "";
      {
        var ee = rt.get(E);
        if (ee !== void 0)
          return ee;
      }
      var De;
      Ze = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = be.current, be.current = null, Oe();
      try {
        if (B) {
          var Pe = function() {
            throw Error();
          };
          if (Object.defineProperty(Pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pe, []);
            } catch (er) {
              De = er;
            }
            Reflect.construct(E, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (er) {
              De = er;
            }
            E.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (er) {
            De = er;
          }
          E();
        }
      } catch (er) {
        if (er && De && typeof er.stack == "string") {
          for (var ut = er.stack.split(`
`), Nn = De.stack.split(`
`), $t = ut.length - 1, Jt = Nn.length - 1; $t >= 1 && Jt >= 0 && ut[$t] !== Nn[Jt]; )
            Jt--;
          for (; $t >= 1 && Jt >= 0; $t--, Jt--)
            if (ut[$t] !== Nn[Jt]) {
              if ($t !== 1 || Jt !== 1)
                do
                  if ($t--, Jt--, Jt < 0 || ut[$t] !== Nn[Jt]) {
                    var gr = `
` + ut[$t].replace(" at new ", " at ");
                    return E.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", E.displayName)), typeof E == "function" && rt.set(E, gr), gr;
                  }
                while ($t >= 1 && Jt >= 0);
              break;
            }
        }
      } finally {
        Ze = !1, be.current = mt, nt(), Error.prepareStackTrace = pt;
      }
      var Ni = E ? E.displayName || E.name : "", xt = Ni ? $e(Ni) : "";
      return typeof E == "function" && rt.set(E, xt), xt;
    }
    function _t(E, B, ee) {
      return Z(E, !1);
    }
    function fn(E) {
      var B = E.prototype;
      return !!(B && B.isReactComponent);
    }
    function gn(E, B, ee) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Z(E, fn(E));
      if (typeof E == "string")
        return $e(E);
      switch (E) {
        case W:
          return $e("Suspense");
        case ue:
          return $e("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case q:
            return _t(E.render);
          case $:
            return gn(E.type, B, ee);
          case J: {
            var De = E, pt = De._payload, mt = De._init;
            try {
              return gn(mt(pt), B, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Vn = Object.prototype.hasOwnProperty, Jn = {}, Jr = Tt.ReactDebugCurrentFrame;
    function xa(E) {
      if (E) {
        var B = E._owner, ee = gn(E.type, E._source, B ? B.type : null);
        Jr.setExtraStackFrame(ee);
      } else
        Jr.setExtraStackFrame(null);
    }
    function ri(E, B, ee, De, pt) {
      {
        var mt = Function.call.bind(Vn);
        for (var Pe in E)
          if (mt(E, Pe)) {
            var ut = void 0;
            try {
              if (typeof E[Pe] != "function") {
                var Nn = Error((De || "React class") + ": " + ee + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              ut = E[Pe](B, Pe, De, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($t) {
              ut = $t;
            }
            ut && !(ut instanceof Error) && (xa(pt), it("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", De || "React class", ee, Pe, typeof ut), xa(null)), ut instanceof Error && !(ut.message in Jn) && (Jn[ut.message] = !0, xa(pt), it("Failed %s type: %s", ee, ut.message), xa(null));
          }
      }
    }
    var Ha = Array.isArray;
    function wa(E) {
      return Ha(E);
    }
    function Ur(E) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ee = B && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ee;
      }
    }
    function Pa(E) {
      try {
        return Ar(E), !1;
      } catch {
        return !0;
      }
    }
    function Ar(E) {
      return "" + E;
    }
    function ba(E) {
      if (Pa(E))
        return it("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ur(E)), Ar(E);
    }
    var Sn = Tt.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mi, Da, re;
    re = {};
    function Me(E) {
      if (Vn.call(E, "ref")) {
        var B = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function lt(E) {
      if (Vn.call(E, "key")) {
        var B = Object.getOwnPropertyDescriptor(E, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function kt(E, B) {
      if (typeof E.ref == "string" && Sn.current && B && Sn.current.stateNode !== B) {
        var ee = He(Sn.current.type);
        re[ee] || (it('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', He(Sn.current.type), E.ref), re[ee] = !0);
      }
    }
    function Zt(E, B) {
      {
        var ee = function() {
          Mi || (Mi = !0, it("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ee.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function Ln(E, B) {
      {
        var ee = function() {
          Da || (Da = !0, it("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ee.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var dn = function(E, B, ee, De, pt, mt, Pe) {
      var ut = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: fe,
        // Built-in properties that belong on the element
        type: E,
        key: B,
        ref: ee,
        props: Pe,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return ut._store = {}, Object.defineProperty(ut._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ut, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.defineProperty(ut, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function yr(E, B, ee, De, pt) {
      {
        var mt, Pe = {}, ut = null, Nn = null;
        ee !== void 0 && (ba(ee), ut = "" + ee), lt(B) && (ba(B.key), ut = "" + B.key), Me(B) && (Nn = B.ref, kt(B, pt));
        for (mt in B)
          Vn.call(B, mt) && !jr.hasOwnProperty(mt) && (Pe[mt] = B[mt]);
        if (E && E.defaultProps) {
          var $t = E.defaultProps;
          for (mt in $t)
            Pe[mt] === void 0 && (Pe[mt] = $t[mt]);
        }
        if (ut || Nn) {
          var Jt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ut && Zt(Pe, Jt), Nn && Ln(Pe, Jt);
        }
        return dn(E, ut, Nn, pt, De, Sn.current, Pe);
      }
    }
    var Pt = Tt.ReactCurrentOwner, Fr = Tt.ReactDebugCurrentFrame;
    function jt(E) {
      if (E) {
        var B = E._owner, ee = gn(E.type, E._source, B ? B.type : null);
        Fr.setExtraStackFrame(ee);
      } else
        Fr.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function Kl(E) {
      return typeof E == "object" && E !== null && E.$$typeof === fe;
    }
    function ol() {
      {
        if (Pt.current) {
          var E = He(Pt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Zl(E) {
      return "";
    }
    var lo = {};
    function gs(E) {
      {
        var B = ol();
        if (!B) {
          var ee = typeof E == "string" ? E : E.displayName || E.name;
          ee && (B = `

Check the top-level render call using <` + ee + ">.");
        }
        return B;
      }
    }
    function sl(E, B) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ee = gs(B);
        if (lo[ee])
          return;
        lo[ee] = !0;
        var De = "";
        E && E._owner && E._owner !== Pt.current && (De = " It was passed a child from " + He(E._owner.type) + "."), jt(E), it('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, De), jt(null);
      }
    }
    function Jl(E, B) {
      {
        if (typeof E != "object")
          return;
        if (wa(E))
          for (var ee = 0; ee < E.length; ee++) {
            var De = E[ee];
            Kl(De) && sl(De, B);
          }
        else if (Kl(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var pt = Xe(E);
          if (typeof pt == "function" && pt !== E.entries)
            for (var mt = pt.call(E), Pe; !(Pe = mt.next()).done; )
              Kl(Pe.value) && sl(Pe.value, B);
        }
      }
    }
    function cl(E) {
      {
        var B = E.type;
        if (B == null || typeof B == "string")
          return;
        var ee;
        if (typeof B == "function")
          ee = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === $))
          ee = B.propTypes;
        else
          return;
        if (ee) {
          var De = He(B);
          ri(ee, E.props, "prop", De, E);
        } else if (B.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var pt = He(B);
          it("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && it("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function eu(E) {
      {
        for (var B = Object.keys(E.props), ee = 0; ee < B.length; ee++) {
          var De = B[ee];
          if (De !== "children" && De !== "key") {
            jt(E), it("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", De), jt(null);
            break;
          }
        }
        E.ref !== null && (jt(E), it("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    var Va = {};
    function ai(E, B, ee, De, pt, mt) {
      {
        var Pe = Ht(E);
        if (!Pe) {
          var ut = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = Zl();
          Nn ? ut += Nn : ut += ol();
          var $t;
          E === null ? $t = "null" : wa(E) ? $t = "array" : E !== void 0 && E.$$typeof === fe ? ($t = "<" + (He(E.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : $t = typeof E, it("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $t, ut);
        }
        var Jt = yr(E, B, ee, pt, mt);
        if (Jt == null)
          return Jt;
        if (Pe) {
          var gr = B.children;
          if (gr !== void 0)
            if (De)
              if (wa(gr)) {
                for (var Ni = 0; Ni < gr.length; Ni++)
                  Jl(gr[Ni], E);
                Object.freeze && Object.freeze(gr);
              } else
                it("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jl(gr, E);
        }
        if (Vn.call(B, "key")) {
          var xt = He(E), er = Object.keys(B).filter(function(Ba) {
            return Ba !== "key";
          }), Pr = er.length > 0 ? "{key: someKey, " + er.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Va[xt + Pr]) {
            var ot = er.length > 0 ? "{" + er.join(": ..., ") + ": ...}" : "{}";
            it(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, xt, ot, xt), Va[xt + Pr] = !0;
          }
        }
        return E === Se ? eu(Jt) : cl(Jt), Jt;
      }
    }
    function Hr(E, B, ee) {
      return ai(E, B, ee, !0);
    }
    function _a(E, B, ee) {
      return ai(E, B, ee, !1);
    }
    var Li = _a, fl = Hr;
    _p.Fragment = Se, _p.jsx = Li, _p.jsxs = fl;
  }()), _p;
}
process.env.NODE_ENV === "production" ? E0.exports = T_() : E0.exports = R_();
var Ve = E0.exports, C0 = { exports: {} }, Ta = {}, Lm = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sT;
function x_() {
  return sT || (sT = 1, function(z) {
    function fe(X, we) {
      var k = X.length;
      X.push(we);
      e: for (; 0 < k; ) {
        var Q = k - 1 >>> 1, de = X[Q];
        if (0 < Ue(de, we)) X[Q] = we, X[k] = de, k = Q;
        else break e;
      }
    }
    function _(X) {
      return X.length === 0 ? null : X[0];
    }
    function Se(X) {
      if (X.length === 0) return null;
      var we = X[0], k = X.pop();
      if (k !== we) {
        X[0] = k;
        e: for (var Q = 0, de = X.length, Ne = de >>> 1; Q < Ne; ) {
          var Oe = 2 * (Q + 1) - 1, nt = X[Oe], be = Oe + 1, Be = X[be];
          if (0 > Ue(nt, k)) be < de && 0 > Ue(Be, nt) ? (X[Q] = Be, X[be] = k, Q = be) : (X[Q] = nt, X[Oe] = k, Q = Oe);
          else if (be < de && 0 > Ue(Be, k)) X[Q] = Be, X[be] = k, Q = be;
          else break e;
        }
      }
      return we;
    }
    function Ue(X, we) {
      var k = X.sortIndex - we.sortIndex;
      return k !== 0 ? k : X.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ae = performance;
      z.unstable_now = function() {
        return ae.now();
      };
    } else {
      var y = Date, ye = y.now();
      z.unstable_now = function() {
        return y.now() - ye;
      };
    }
    var q = [], W = [], ue = 1, $ = null, J = 3, K = !1, xe = !1, Ae = !1, Xe = typeof setTimeout == "function" ? setTimeout : null, Tt = typeof clearTimeout == "function" ? clearTimeout : null, it = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ke(X) {
      for (var we = _(W); we !== null; ) {
        if (we.callback === null) Se(W);
        else if (we.startTime <= X) Se(W), we.sortIndex = we.expirationTime, fe(q, we);
        else break;
        we = _(W);
      }
    }
    function We(X) {
      if (Ae = !1, ke(X), !xe) if (_(q) !== null) xe = !0, dt(P);
      else {
        var we = _(W);
        we !== null && Kt(We, we.startTime - X);
      }
    }
    function P(X, we) {
      xe = !1, Ae && (Ae = !1, Tt(sn), sn = -1), K = !0;
      var k = J;
      try {
        for (ke(we), $ = _(q); $ !== null && (!($.expirationTime > we) || X && !gt()); ) {
          var Q = $.callback;
          if (typeof Q == "function") {
            $.callback = null, J = $.priorityLevel;
            var de = Q($.expirationTime <= we);
            we = z.unstable_now(), typeof de == "function" ? $.callback = de : $ === _(q) && Se(q), ke(we);
          } else Se(q);
          $ = _(q);
        }
        if ($ !== null) var Ne = !0;
        else {
          var Oe = _(W);
          Oe !== null && Kt(We, Oe.startTime - we), Ne = !1;
        }
        return Ne;
      } finally {
        $ = null, J = k, K = !1;
      }
    }
    var yt = !1, Ke = null, sn = -1, yn = 5, Ht = -1;
    function gt() {
      return !(z.unstable_now() - Ht < yn);
    }
    function cn() {
      if (Ke !== null) {
        var X = z.unstable_now();
        Ht = X;
        var we = !0;
        try {
          we = Ke(!0, X);
        } finally {
          we ? He() : (yt = !1, Ke = null);
        }
      } else yt = !1;
    }
    var He;
    if (typeof it == "function") He = function() {
      it(cn);
    };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), rn = tt.port2;
      tt.port1.onmessage = cn, He = function() {
        rn.postMessage(null);
      };
    } else He = function() {
      Xe(cn, 0);
    };
    function dt(X) {
      Ke = X, yt || (yt = !0, He());
    }
    function Kt(X, we) {
      sn = Xe(function() {
        X(z.unstable_now());
      }, we);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, z.unstable_continueExecution = function() {
      xe || K || (xe = !0, dt(P));
    }, z.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : yn = 0 < X ? Math.floor(1e3 / X) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, z.unstable_getFirstCallbackNode = function() {
      return _(q);
    }, z.unstable_next = function(X) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = J;
      }
      var k = J;
      J = we;
      try {
        return X();
      } finally {
        J = k;
      }
    }, z.unstable_pauseExecution = function() {
    }, z.unstable_requestPaint = function() {
    }, z.unstable_runWithPriority = function(X, we) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var k = J;
      J = X;
      try {
        return we();
      } finally {
        J = k;
      }
    }, z.unstable_scheduleCallback = function(X, we, k) {
      var Q = z.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? Q + k : Q) : k = Q, X) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return de = k + de, X = { id: ue++, callback: we, priorityLevel: X, startTime: k, expirationTime: de, sortIndex: -1 }, k > Q ? (X.sortIndex = k, fe(W, X), _(q) === null && X === _(W) && (Ae ? (Tt(sn), sn = -1) : Ae = !0, Kt(We, k - Q))) : (X.sortIndex = de, fe(q, X), xe || K || (xe = !0, dt(P))), X;
    }, z.unstable_shouldYield = gt, z.unstable_wrapCallback = function(X) {
      var we = J;
      return function() {
        var k = J;
        J = we;
        try {
          return X.apply(this, arguments);
        } finally {
          J = k;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function w_() {
  return cT || (cT = 1, function(z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var fe = !1, _ = !1, Se = 5;
      function Ue(re, Me) {
        var lt = re.length;
        re.push(Me), ye(re, Me, lt);
      }
      function ae(re) {
        return re.length === 0 ? null : re[0];
      }
      function y(re) {
        if (re.length === 0)
          return null;
        var Me = re[0], lt = re.pop();
        return lt !== Me && (re[0] = lt, q(re, lt, 0)), Me;
      }
      function ye(re, Me, lt) {
        for (var kt = lt; kt > 0; ) {
          var Zt = kt - 1 >>> 1, Ln = re[Zt];
          if (W(Ln, Me) > 0)
            re[Zt] = Me, re[kt] = Ln, kt = Zt;
          else
            return;
        }
      }
      function q(re, Me, lt) {
        for (var kt = lt, Zt = re.length, Ln = Zt >>> 1; kt < Ln; ) {
          var dn = (kt + 1) * 2 - 1, yr = re[dn], Pt = dn + 1, Fr = re[Pt];
          if (W(yr, Me) < 0)
            Pt < Zt && W(Fr, yr) < 0 ? (re[kt] = Fr, re[Pt] = Me, kt = Pt) : (re[kt] = yr, re[dn] = Me, kt = dn);
          else if (Pt < Zt && W(Fr, Me) < 0)
            re[kt] = Fr, re[Pt] = Me, kt = Pt;
          else
            return;
        }
      }
      function W(re, Me) {
        var lt = re.sortIndex - Me.sortIndex;
        return lt !== 0 ? lt : re.id - Me.id;
      }
      var ue = 1, $ = 2, J = 3, K = 4, xe = 5;
      function Ae(re, Me) {
      }
      var Xe = typeof performance == "object" && typeof performance.now == "function";
      if (Xe) {
        var Tt = performance;
        z.unstable_now = function() {
          return Tt.now();
        };
      } else {
        var it = Date, ke = it.now();
        z.unstable_now = function() {
          return it.now() - ke;
        };
      }
      var We = 1073741823, P = -1, yt = 250, Ke = 5e3, sn = 1e4, yn = We, Ht = [], gt = [], cn = 1, He = null, tt = J, rn = !1, dt = !1, Kt = !1, X = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Q(re) {
        for (var Me = ae(gt); Me !== null; ) {
          if (Me.callback === null)
            y(gt);
          else if (Me.startTime <= re)
            y(gt), Me.sortIndex = Me.expirationTime, Ue(Ht, Me);
          else
            return;
          Me = ae(gt);
        }
      }
      function de(re) {
        if (Kt = !1, Q(re), !dt)
          if (ae(Ht) !== null)
            dt = !0, ba(Ne);
          else {
            var Me = ae(gt);
            Me !== null && Sn(de, Me.startTime - re);
          }
      }
      function Ne(re, Me) {
        dt = !1, Kt && (Kt = !1, jr()), rn = !0;
        var lt = tt;
        try {
          var kt;
          if (!_) return Oe(re, Me);
        } finally {
          He = null, tt = lt, rn = !1;
        }
      }
      function Oe(re, Me) {
        var lt = Me;
        for (Q(lt), He = ae(Ht); He !== null && !fe && !(He.expirationTime > lt && (!re || xa())); ) {
          var kt = He.callback;
          if (typeof kt == "function") {
            He.callback = null, tt = He.priorityLevel;
            var Zt = He.expirationTime <= lt, Ln = kt(Zt);
            lt = z.unstable_now(), typeof Ln == "function" ? He.callback = Ln : He === ae(Ht) && y(Ht), Q(lt);
          } else
            y(Ht);
          He = ae(Ht);
        }
        if (He !== null)
          return !0;
        var dn = ae(gt);
        return dn !== null && Sn(de, dn.startTime - lt), !1;
      }
      function nt(re, Me) {
        switch (re) {
          case ue:
          case $:
          case J:
          case K:
          case xe:
            break;
          default:
            re = J;
        }
        var lt = tt;
        tt = re;
        try {
          return Me();
        } finally {
          tt = lt;
        }
      }
      function be(re) {
        var Me;
        switch (tt) {
          case ue:
          case $:
          case J:
            Me = J;
            break;
          default:
            Me = tt;
            break;
        }
        var lt = tt;
        tt = Me;
        try {
          return re();
        } finally {
          tt = lt;
        }
      }
      function Be(re) {
        var Me = tt;
        return function() {
          var lt = tt;
          tt = Me;
          try {
            return re.apply(this, arguments);
          } finally {
            tt = lt;
          }
        };
      }
      function $e(re, Me, lt) {
        var kt = z.unstable_now(), Zt;
        if (typeof lt == "object" && lt !== null) {
          var Ln = lt.delay;
          typeof Ln == "number" && Ln > 0 ? Zt = kt + Ln : Zt = kt;
        } else
          Zt = kt;
        var dn;
        switch (re) {
          case ue:
            dn = P;
            break;
          case $:
            dn = yt;
            break;
          case xe:
            dn = yn;
            break;
          case K:
            dn = sn;
            break;
          case J:
          default:
            dn = Ke;
            break;
        }
        var yr = Zt + dn, Pt = {
          id: cn++,
          callback: Me,
          priorityLevel: re,
          startTime: Zt,
          expirationTime: yr,
          sortIndex: -1
        };
        return Zt > kt ? (Pt.sortIndex = Zt, Ue(gt, Pt), ae(Ht) === null && Pt === ae(gt) && (Kt ? jr() : Kt = !0, Sn(de, Zt - kt))) : (Pt.sortIndex = yr, Ue(Ht, Pt), !dt && !rn && (dt = !0, ba(Ne))), Pt;
      }
      function Ze() {
      }
      function rt() {
        !dt && !rn && (dt = !0, ba(Ne));
      }
      function Dt() {
        return ae(Ht);
      }
      function Z(re) {
        re.callback = null;
      }
      function _t() {
        return tt;
      }
      var fn = !1, gn = null, Vn = -1, Jn = Se, Jr = -1;
      function xa() {
        var re = z.unstable_now() - Jr;
        return !(re < Jn);
      }
      function ri() {
      }
      function Ha(re) {
        if (re < 0 || re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        re > 0 ? Jn = Math.floor(1e3 / re) : Jn = Se;
      }
      var wa = function() {
        if (gn !== null) {
          var re = z.unstable_now();
          Jr = re;
          var Me = !0, lt = !0;
          try {
            lt = gn(Me, re);
          } finally {
            lt ? Ur() : (fn = !1, gn = null);
          }
        } else
          fn = !1;
      }, Ur;
      if (typeof k == "function")
        Ur = function() {
          k(wa);
        };
      else if (typeof MessageChannel < "u") {
        var Pa = new MessageChannel(), Ar = Pa.port2;
        Pa.port1.onmessage = wa, Ur = function() {
          Ar.postMessage(null);
        };
      } else
        Ur = function() {
          X(wa, 0);
        };
      function ba(re) {
        gn = re, fn || (fn = !0, Ur());
      }
      function Sn(re, Me) {
        Vn = X(function() {
          re(z.unstable_now());
        }, Me);
      }
      function jr() {
        we(Vn), Vn = -1;
      }
      var Mi = ri, Da = null;
      z.unstable_IdlePriority = xe, z.unstable_ImmediatePriority = ue, z.unstable_LowPriority = K, z.unstable_NormalPriority = J, z.unstable_Profiling = Da, z.unstable_UserBlockingPriority = $, z.unstable_cancelCallback = Z, z.unstable_continueExecution = rt, z.unstable_forceFrameRate = Ha, z.unstable_getCurrentPriorityLevel = _t, z.unstable_getFirstCallbackNode = Dt, z.unstable_next = be, z.unstable_pauseExecution = Ze, z.unstable_requestPaint = Mi, z.unstable_runWithPriority = nt, z.unstable_scheduleCallback = $e, z.unstable_shouldYield = xa, z.unstable_wrapCallback = Be, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var fT;
function bT() {
  return fT || (fT = 1, process.env.NODE_ENV === "production" ? Lm.exports = x_() : Lm.exports = w_()), Lm.exports;
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
var dT;
function b_() {
  if (dT) return Ta;
  dT = 1;
  var z = Am, fe = bT();
  function _(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Se = /* @__PURE__ */ new Set(), Ue = {};
  function ae(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (Ue[n] = r, n = 0; n < r.length; n++) Se.add(r[n]);
  }
  var ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), q = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ue = {}, $ = {};
  function J(n) {
    return q.call($, n) ? !0 : q.call(ue, n) ? !1 : W.test(n) ? $[n] = !0 : (ue[n] = !0, !1);
  }
  function K(n, r, l, o) {
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
  function xe(n, r, l, o) {
    if (r === null || typeof r > "u" || K(n, r, l, o)) return !0;
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
  function Ae(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var Xe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Xe[n] = new Ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Xe[r] = new Ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Xe[n] = new Ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Xe[n] = new Ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Xe[n] = new Ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Xe[n] = new Ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Xe[n] = new Ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Xe[n] = new Ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Xe[n] = new Ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Tt = /[\-:]([a-z])/g;
  function it(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Tt,
      it
    );
    Xe[r] = new Ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Tt, it);
    Xe[r] = new Ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Tt, it);
    Xe[r] = new Ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Xe[n] = new Ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Xe.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Xe[n] = new Ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ke(n, r, l, o) {
    var c = Xe.hasOwnProperty(r) ? Xe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (xe(r, l, c, o) && (l = null), o || c === null ? J(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var We = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), yt = Symbol.for("react.portal"), Ke = Symbol.for("react.fragment"), sn = Symbol.for("react.strict_mode"), yn = Symbol.for("react.profiler"), Ht = Symbol.for("react.provider"), gt = Symbol.for("react.context"), cn = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), rn = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), Kt = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, Q;
  function de(n) {
    if (Q === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      Q = r && r[1] || "";
    }
    return `
` + Q + n;
  }
  var Ne = !1;
  function Oe(n, r) {
    if (!n || Ne) return "";
    Ne = !0;
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
        } catch (L) {
          var o = L;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (L) {
          o = L;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        n();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (var c = L.stack.split(`
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
      Ne = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? de(n) : "";
  }
  function nt(n) {
    switch (n.tag) {
      case 5:
        return de(n.type);
      case 16:
        return de("Lazy");
      case 13:
        return de("Suspense");
      case 19:
        return de("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Oe(n.type, !1), n;
      case 11:
        return n = Oe(n.type.render, !1), n;
      case 1:
        return n = Oe(n.type, !0), n;
      default:
        return "";
    }
  }
  function be(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ke:
        return "Fragment";
      case yt:
        return "Portal";
      case yn:
        return "Profiler";
      case sn:
        return "StrictMode";
      case He:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case gt:
        return (n.displayName || "Context") + ".Consumer";
      case Ht:
        return (n._context.displayName || "Context") + ".Provider";
      case cn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case rn:
        return r = n.displayName || null, r !== null ? r : be(n.type) || "Memo";
      case dt:
        r = n._payload, n = n._init;
        try {
          return be(n(r));
        } catch {
        }
    }
    return null;
  }
  function Be(n) {
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
        return r === sn ? "StrictMode" : "Mode";
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
  function $e(n) {
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
  function Ze(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function rt(n) {
    var r = Ze(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function Dt(n) {
    n._valueTracker || (n._valueTracker = rt(n));
  }
  function Z(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ze(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function _t(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function fn(n, r) {
    var l = r.checked;
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function gn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = $e(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && ke(n, "checked", r, !1);
  }
  function Jn(n, r) {
    Vn(n, r);
    var l = $e(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? xa(n, r.type, l) : r.hasOwnProperty("defaultValue") && xa(n, r.type, $e(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Jr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function xa(n, r, l) {
    (r !== "number" || _t(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ri = Array.isArray;
  function Ha(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + $e(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function wa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(_(91));
    return k({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ur(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(_(92));
        if (ri(l)) {
          if (1 < l.length) throw Error(_(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: $e(l) };
  }
  function Pa(n, r) {
    var l = $e(r.value), o = $e(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ar(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ba(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ba(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var jr, Mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (jr = jr || document.createElement("div"), jr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = jr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var re = {
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
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(re).forEach(function(n) {
    Me.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), re[r] = re[n];
    });
  });
  function lt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || re.hasOwnProperty(n) && re[n] ? ("" + r).trim() : r + "px";
  }
  function kt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = lt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Zt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ln(n, r) {
    if (r) {
      if (Zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(_(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(_(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(_(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(_(62));
    }
  }
  function dn(n, r) {
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
  var yr = null;
  function Pt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Fr = null, jt = null, Vt = null;
  function Kl(n) {
    if (n = ko(n)) {
      if (typeof Fr != "function") throw Error(_(280));
      var r = n.stateNode;
      r && (r = Le(r), Fr(n.stateNode, n.type, r));
    }
  }
  function ol(n) {
    jt ? Vt ? Vt.push(n) : Vt = [n] : jt = n;
  }
  function Zl() {
    if (jt) {
      var n = jt, r = Vt;
      if (Vt = jt = null, Kl(n), r) for (n = 0; n < r.length; n++) Kl(r[n]);
    }
  }
  function lo(n, r) {
    return n(r);
  }
  function gs() {
  }
  var sl = !1;
  function Jl(n, r, l) {
    if (sl) return n(r, l);
    sl = !0;
    try {
      return lo(n, r, l);
    } finally {
      sl = !1, (jt !== null || Vt !== null) && (gs(), Zl());
    }
  }
  function cl(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Le(l);
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
    if (l && typeof l != "function") throw Error(_(231, r, typeof l));
    return l;
  }
  var eu = !1;
  if (ye) try {
    var Va = {};
    Object.defineProperty(Va, "passive", { get: function() {
      eu = !0;
    } }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
  } catch {
    eu = !1;
  }
  function ai(n, r, l, o, c, d, h, S, C) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, L);
    } catch (V) {
      this.onError(V);
    }
  }
  var Hr = !1, _a = null, Li = !1, fl = null, E = { onError: function(n) {
    Hr = !0, _a = n;
  } };
  function B(n, r, l, o, c, d, h, S, C) {
    Hr = !1, _a = null, ai.apply(E, arguments);
  }
  function ee(n, r, l, o, c, d, h, S, C) {
    if (B.apply(this, arguments), Hr) {
      if (Hr) {
        var L = _a;
        Hr = !1, _a = null;
      } else throw Error(_(198));
      Li || (Li = !0, fl = L);
    }
  }
  function De(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function mt(n) {
    if (De(n) !== n) throw Error(_(188));
  }
  function Pe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = De(n), r === null) throw Error(_(188));
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
          if (d === l) return mt(c), n;
          if (d === o) return mt(c), r;
          d = d.sibling;
        }
        throw Error(_(188));
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
          if (!h) throw Error(_(189));
        }
      }
      if (l.alternate !== o) throw Error(_(190));
    }
    if (l.tag !== 3) throw Error(_(188));
    return l.stateNode.current === l ? n : r;
  }
  function ut(n) {
    return n = Pe(n), n !== null ? Nn(n) : null;
  }
  function Nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var $t = fe.unstable_scheduleCallback, Jt = fe.unstable_cancelCallback, gr = fe.unstable_shouldYield, Ni = fe.unstable_requestPaint, xt = fe.unstable_now, er = fe.unstable_getCurrentPriorityLevel, Pr = fe.unstable_ImmediatePriority, ot = fe.unstable_UserBlockingPriority, Ba = fe.unstable_NormalPriority, kp = fe.unstable_LowPriority, mf = fe.unstable_IdlePriority, uo = null, ka = null;
  function Op(n) {
    if (ka && typeof ka.onCommitFiberRoot == "function") try {
      ka.onCommitFiberRoot(uo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var ea = Math.clz32 ? Math.clz32 : jm, Mp = Math.log, Lp = Math.LN2;
  function jm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Mp(n) / Lp | 0) | 0;
  }
  var Ss = 64, tu = 4194304;
  function dl(n) {
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
  function Oa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = dl(S) : (d &= h, d !== 0 && (o = dl(d)));
    } else h = l & ~c, h !== 0 ? o = dl(h) : d !== 0 && (o = dl(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - ea(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function yf(n, r) {
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
  function Es(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - ea(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = yf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function gf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Cs() {
    var n = Ss;
    return Ss <<= 1, !(Ss & 4194240) && (Ss = 64), n;
  }
  function Sf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function pl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ea(r), n[r] = l;
  }
  function Fm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - ea(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function oo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - ea(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function Ef(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Np, Ts, Mt, zp, Cf, Je = !1, so = [], En = null, ta = null, na = null, co = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), Lt = [], Hm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ma(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        co.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(r.pointerId);
    }
  }
  function tr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ko(r), r !== null && Ts(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function zi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return En = tr(En, n, r, l, o, c), !0;
      case "dragenter":
        return ta = tr(ta, n, r, l, o, c), !0;
      case "mouseover":
        return na = tr(na, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return co.set(d, tr(co.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, wn.set(d, tr(wn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Up(n) {
    var r = aa(n.target);
    if (r !== null) {
      var l = De(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, Cf(n.priority, function() {
              Mt(l);
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
  function nu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ws(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        yr = o, l.target.dispatchEvent(o), yr = null;
      } else return r = ko(l), r !== null && Ts(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Tf(n, r, l) {
    nu(n) && l.delete(r);
  }
  function Ap() {
    Je = !1, En !== null && nu(En) && (En = null), ta !== null && nu(ta) && (ta = null), na !== null && nu(na) && (na = null), co.forEach(Tf), wn.forEach(Tf);
  }
  function fo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Je || (Je = !0, fe.unstable_scheduleCallback(fe.unstable_NormalPriority, Ap)));
  }
  function po(n) {
    function r(c) {
      return fo(c, n);
    }
    if (0 < so.length) {
      fo(so[0], n);
      for (var l = 1; l < so.length; l++) {
        var o = so[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (En !== null && fo(En, n), ta !== null && fo(ta, n), na !== null && fo(na, n), co.forEach(r), wn.forEach(r), l = 0; l < Lt.length; l++) o = Lt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Lt.length && (l = Lt[0], l.blockedOn === null); ) Up(l), l.blockedOn === null && Lt.shift();
  }
  var ru = We.ReactCurrentBatchConfig, vl = !0;
  function jp(n, r, l, o) {
    var c = Ot, d = ru.transition;
    ru.transition = null;
    try {
      Ot = 1, xs(n, r, l, o);
    } finally {
      Ot = c, ru.transition = d;
    }
  }
  function Rs(n, r, l, o) {
    var c = Ot, d = ru.transition;
    ru.transition = null;
    try {
      Ot = 4, xs(n, r, l, o);
    } finally {
      Ot = c, ru.transition = d;
    }
  }
  function xs(n, r, l, o) {
    if (vl) {
      var c = ws(n, r, l, o);
      if (c === null) js(n, r, o, vo, l), Ma(n, o);
      else if (zi(c, n, r, l, o)) o.stopPropagation();
      else if (Ma(n, o), r & 4 && -1 < Hm.indexOf(n)) {
        for (; c !== null; ) {
          var d = ko(c);
          if (d !== null && Np(d), d = ws(n, r, l, o), d === null && js(n, r, o, vo, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else js(n, r, o, null, l);
    }
  }
  var vo = null;
  function ws(n, r, l, o) {
    if (vo = null, n = Pt(o), n = aa(n), n !== null) if (r = De(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = pt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vo = n, null;
  }
  function Rf(n) {
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
        switch (er()) {
          case Pr:
            return 1;
          case ot:
            return 4;
          case Ba:
          case kp:
            return 16;
          case mf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, ho = null, mo = null;
  function xf() {
    if (mo) return mo;
    var n, r = ho, l = r.length, o, c = "value" in ii ? ii.value : ii.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return mo = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function au(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function yo() {
    return !0;
  }
  function Fp() {
    return !1;
  }
  function Vr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n) n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? yo : Fp, this.isPropagationStopped = Fp, this;
    }
    return k(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = yo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = yo);
    }, persist: function() {
    }, isPersistent: yo }), r;
  }
  var Ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bs = Vr(Ui), iu = k({}, Ui, { view: 0, detail: 0 }), Hp = Vr(iu), Ds, wf, go, zn = k({}, iu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== go && (go && n.type === "mousemove" ? (Ds = n.screenX - go.screenX, wf = n.screenY - go.screenY) : wf = Ds = 0, go = n), Ds);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : wf;
  } }), _s = Vr(zn), Pp = k({}, zn, { dataTransfer: 0 }), Vp = Vr(Pp), Pm = k({}, iu, { relatedTarget: 0 }), Ai = Vr(Pm), bf = k({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = Vr(bf), Vm = k({}, Ui, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Bm = Vr(Vm), $m = k({}, Ui, { data: 0 }), Df = Vr($m), _f = {
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
  }, $p = {
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
  }, Yp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ip(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yp[n]) ? !!r[n] : !1;
  }
  function kf() {
    return Ip;
  }
  var li = k({}, iu, { key: function(n) {
    if (n.key) {
      var r = _f[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = au(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $p[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kf, charCode: function(n) {
    return n.type === "keypress" ? au(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? au(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ym = Vr(li), Of = k({}, zn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ks = Vr(Of), Mf = k({}, iu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kf }), Im = Vr(Mf), Os = k({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qp = Vr(Os), Sr = k({}, zn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ui = Vr(Sr), Cn = [9, 13, 27, 32], La = ye && "CompositionEvent" in window, hl = null;
  ye && "documentMode" in document && (hl = document.documentMode);
  var Ms = ye && "TextEvent" in window && !hl, Wp = ye && (!La || hl && 8 < hl && 11 >= hl), lu = " ", Gp = !1;
  function qp(n, r) {
    switch (n) {
      case "keyup":
        return Cn.indexOf(r.keyCode) !== -1;
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
  function Ls(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uu = !1;
  function Qm(n, r) {
    switch (n) {
      case "compositionend":
        return Ls(r);
      case "keypress":
        return r.which !== 32 ? null : (Gp = !0, lu);
      case "textInput":
        return n = r.data, n === lu && Gp ? null : n;
      default:
        return null;
    }
  }
  function Wm(n, r) {
    if (uu) return n === "compositionend" || !La && qp(n, r) ? (n = xf(), mo = ho = ii = null, uu = !1, n) : null;
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
        return Wp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xp[n.type] : r === "textarea";
  }
  function Zp(n, r, l, o) {
    ol(o), r = bo(r, "onChange"), 0 < r.length && (l = new bs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var So = null, ou = null;
  function su(n) {
    As(n, 0);
  }
  function cu(n) {
    var r = du(n);
    if (Z(r)) return n;
  }
  function Jp(n, r) {
    if (n === "change") return r;
  }
  var Lf = !1;
  if (ye) {
    var Nf;
    if (ye) {
      var zf = "oninput" in document;
      if (!zf) {
        var ev = document.createElement("div");
        ev.setAttribute("oninput", "return;"), zf = typeof ev.oninput == "function";
      }
      Nf = zf;
    } else Nf = !1;
    Lf = Nf && (!document.documentMode || 9 < document.documentMode);
  }
  function tv() {
    So && (So.detachEvent("onpropertychange", nv), ou = So = null);
  }
  function nv(n) {
    if (n.propertyName === "value" && cu(ou)) {
      var r = [];
      Zp(r, ou, n, Pt(n)), Jl(su, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (tv(), So = r, ou = l, So.attachEvent("onpropertychange", nv)) : n === "focusout" && tv();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return cu(ou);
  }
  function Xm(n, r) {
    if (n === "click") return cu(r);
  }
  function rv(n, r) {
    if (n === "input" || n === "change") return cu(r);
  }
  function Km(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ra = typeof Object.is == "function" ? Object.is : Km;
  function Eo(n, r) {
    if (ra(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!q.call(r, c) || !ra(n[c], r[c])) return !1;
    }
    return !0;
  }
  function av(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function iv(n, r) {
    var l = av(n);
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
      l = av(l);
    }
  }
  function lv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? lv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ns() {
    for (var n = window, r = _t(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = _t(n.document);
    }
    return r;
  }
  function oi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function zs(n) {
    var r = Ns(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && lv(l.ownerDocument.documentElement, l)) {
      if (o !== null && oi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = iv(l, d);
          var h = iv(
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
  var uv = ye && "documentMode" in document && 11 >= document.documentMode, Na = null, Uf = null, Co = null, Af = !1;
  function ov(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Af || Na == null || Na !== _t(o) || (o = Na, "selectionStart" in o && oi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && Eo(Co, o) || (Co = o, o = bo(Uf, "onSelect"), 0 < o.length && (r = new bs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Na)));
  }
  function Us(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ml = { animationend: Us("Animation", "AnimationEnd"), animationiteration: Us("Animation", "AnimationIteration"), animationstart: Us("Animation", "AnimationStart"), transitionend: Us("Transition", "TransitionEnd") }, jf = {}, Ff = {};
  ye && (Ff = document.createElement("div").style, "AnimationEvent" in window || (delete ml.animationend.animation, delete ml.animationiteration.animation, delete ml.animationstart.animation), "TransitionEvent" in window || delete ml.transitionend.transition);
  function Un(n) {
    if (jf[n]) return jf[n];
    if (!ml[n]) return n;
    var r = ml[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Ff) return jf[n] = r[l];
    return n;
  }
  var Hf = Un("animationend"), sv = Un("animationiteration"), cv = Un("animationstart"), fv = Un("transitionend"), dv = /* @__PURE__ */ new Map(), pv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function si(n, r) {
    dv.set(n, r), ae(r, [n]);
  }
  for (var To = 0; To < pv.length; To++) {
    var yl = pv[To], Zm = yl.toLowerCase(), Ro = yl[0].toUpperCase() + yl.slice(1);
    si(Zm, "on" + Ro);
  }
  si(Hf, "onAnimationEnd"), si(sv, "onAnimationIteration"), si(cv, "onAnimationStart"), si("dblclick", "onDoubleClick"), si("focusin", "onFocus"), si("focusout", "onBlur"), si(fv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
  function vv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ee(o, r, void 0, n), n.currentTarget = null;
  }
  function As(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var S = o[h], C = S.instance, L = S.currentTarget;
          if (S = S.listener, C !== d && c.isPropagationStopped()) break e;
          vv(c, S, L), d = C;
        }
        else for (h = 0; h < o.length; h++) {
          if (S = o[h], C = S.instance, L = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped()) break e;
          vv(c, S, L), d = C;
        }
      }
    }
    if (Li) throw n = fl, Li = !1, fl = null, n;
  }
  function Ft(n, r) {
    var l = r[Qf];
    l === void 0 && (l = r[Qf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (hv(r, n, 2, !1), l.add(o));
  }
  function ji(n, r, l) {
    var o = 0;
    r && (o |= 4), hv(l, n, o, r);
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function fu(n) {
    if (!n[ci]) {
      n[ci] = !0, Se.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || ji(l, !1, n), ji(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ci] || (r[ci] = !0, ji("selectionchange", !1, r));
    }
  }
  function hv(n, r, l, o) {
    switch (Rf(r)) {
      case 1:
        var c = jp;
        break;
      case 4:
        c = Rs;
        break;
      default:
        c = xs;
    }
    l = c.bind(null, r, l, n), c = void 0, !eu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function js(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
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
          if (h = aa(S), h === null) return;
          if (C = h.tag, C === 5 || C === 6) {
            o = d = h;
            continue e;
          }
          S = S.parentNode;
        }
      }
      o = o.return;
    }
    Jl(function() {
      var L = d, V = Pt(l), Y = [];
      e: {
        var H = dv.get(n);
        if (H !== void 0) {
          var oe = bs, ve = n;
          switch (n) {
            case "keypress":
              if (au(l) === 0) break e;
            case "keydown":
            case "keyup":
              oe = Ym;
              break;
            case "focusin":
              ve = "focus", oe = Ai;
              break;
            case "focusout":
              ve = "blur", oe = Ai;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Ai;
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
              oe = _s;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Vp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = Im;
              break;
            case Hf:
            case sv:
            case cv:
              oe = Bp;
              break;
            case fv:
              oe = Qp;
              break;
            case "scroll":
              oe = Hp;
              break;
            case "wheel":
              oe = ui;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = Bm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = ks;
          }
          var ge = (r & 4) !== 0, hn = !ge && n === "scroll", w = ge ? H !== null ? H + "Capture" : null : H;
          ge = [];
          for (var R = L, O; R !== null; ) {
            O = R;
            var G = O.stateNode;
            if (O.tag === 5 && G !== null && (O = G, w !== null && (G = cl(R, w), G != null && ge.push(wo(R, G, O)))), hn) break;
            R = R.return;
          }
          0 < ge.length && (H = new oe(H, ve, null, l, V), Y.push({ event: H, listeners: ge }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (H = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", H && l !== yr && (ve = l.relatedTarget || l.fromElement) && (aa(ve) || ve[fi])) break e;
          if ((oe || H) && (H = V.window === V ? V : (H = V.ownerDocument) ? H.defaultView || H.parentWindow : window, oe ? (ve = l.relatedTarget || l.toElement, oe = L, ve = ve ? aa(ve) : null, ve !== null && (hn = De(ve), ve !== hn || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (oe = null, ve = L), oe !== ve)) {
            if (ge = _s, G = "onMouseLeave", w = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (ge = ks, G = "onPointerLeave", w = "onPointerEnter", R = "pointer"), hn = oe == null ? H : du(oe), O = ve == null ? H : du(ve), H = new ge(G, R + "leave", oe, l, V), H.target = hn, H.relatedTarget = O, G = null, aa(V) === L && (ge = new ge(w, R + "enter", ve, l, V), ge.target = O, ge.relatedTarget = hn, G = ge), hn = G, oe && ve) t: {
              for (ge = oe, w = ve, R = 0, O = ge; O; O = gl(O)) R++;
              for (O = 0, G = w; G; G = gl(G)) O++;
              for (; 0 < R - O; ) ge = gl(ge), R--;
              for (; 0 < O - R; ) w = gl(w), O--;
              for (; R--; ) {
                if (ge === w || w !== null && ge === w.alternate) break t;
                ge = gl(ge), w = gl(w);
              }
              ge = null;
            }
            else ge = null;
            oe !== null && Pf(Y, H, oe, ge, !1), ve !== null && hn !== null && Pf(Y, hn, ve, ge, !0);
          }
        }
        e: {
          if (H = L ? du(L) : window, oe = H.nodeName && H.nodeName.toLowerCase(), oe === "select" || oe === "input" && H.type === "file") var Ce = Jp;
          else if (Kp(H)) if (Lf) Ce = rv;
          else {
            Ce = qm;
            var je = Gm;
          }
          else (oe = H.nodeName) && oe.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (Ce = Xm);
          if (Ce && (Ce = Ce(n, L))) {
            Zp(Y, Ce, l, V);
            break e;
          }
          je && je(n, H, L), n === "focusout" && (je = H._wrapperState) && je.controlled && H.type === "number" && xa(H, "number", H.value);
        }
        switch (je = L ? du(L) : window, n) {
          case "focusin":
            (Kp(je) || je.contentEditable === "true") && (Na = je, Uf = L, Co = null);
            break;
          case "focusout":
            Co = Uf = Na = null;
            break;
          case "mousedown":
            Af = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Af = !1, ov(Y, l, V);
            break;
          case "selectionchange":
            if (uv) break;
          case "keydown":
          case "keyup":
            ov(Y, l, V);
        }
        var he;
        if (La) e: {
          switch (n) {
            case "compositionstart":
              var Fe = "onCompositionStart";
              break e;
            case "compositionend":
              Fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Fe = "onCompositionUpdate";
              break e;
          }
          Fe = void 0;
        }
        else uu ? qp(n, l) && (Fe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Fe = "onCompositionStart");
        Fe && (Wp && l.locale !== "ko" && (uu || Fe !== "onCompositionStart" ? Fe === "onCompositionEnd" && uu && (he = xf()) : (ii = V, ho = "value" in ii ? ii.value : ii.textContent, uu = !0)), je = bo(L, Fe), 0 < je.length && (Fe = new Df(Fe, n, null, l, V), Y.push({ event: Fe, listeners: je }), he ? Fe.data = he : (he = Ls(l), he !== null && (Fe.data = he)))), (he = Ms ? Qm(n, l) : Wm(n, l)) && (L = bo(L, "onBeforeInput"), 0 < L.length && (V = new Df("onBeforeInput", "beforeinput", null, l, V), Y.push({ event: V, listeners: L }), V.data = he));
      }
      As(Y, r);
    });
  }
  function wo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function bo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = cl(n, l), d != null && o.unshift(wo(n, d, c)), d = cl(n, r), d != null && o.push(wo(n, d, c))), n = n.return;
    }
    return o;
  }
  function gl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Pf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, L = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 && L !== null && (S = L, c ? (C = cl(l, d), C != null && h.unshift(wo(l, C, S))) : c || (C = cl(l, d), C != null && h.push(wo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Vf = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function Bf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vf, `
`).replace(ey, "");
  }
  function Fs(n, r, l) {
    if (r = Bf(r), Bf(n) !== r && l) throw Error(_(425));
  }
  function Hs() {
  }
  var $f = null, Sl = null;
  function Do(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var El = typeof setTimeout == "function" ? setTimeout : void 0, mv = typeof clearTimeout == "function" ? clearTimeout : void 0, Yf = typeof Promise == "function" ? Promise : void 0, If = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yf < "u" ? function(n) {
    return Yf.resolve(null).then(n).catch(ty);
  } : El;
  function ty(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Fi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), po(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    po(r);
  }
  function za(n) {
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
  function _o(n) {
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
  var Hi = Math.random().toString(36).slice(2), $a = "__reactFiber$" + Hi, Cl = "__reactProps$" + Hi, fi = "__reactContainer$" + Hi, Qf = "__reactEvents$" + Hi, ny = "__reactListeners$" + Hi, Wf = "__reactHandles$" + Hi;
  function aa(n) {
    var r = n[$a];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[fi] || l[$a]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = _o(n); n !== null; ) {
          if (l = n[$a]) return l;
          n = _o(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ko(n) {
    return n = n[$a] || n[fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function du(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(_(33));
  }
  function Le(n) {
    return n[Cl] || null;
  }
  var Pi = [], Yt = -1;
  function at(n) {
    return { current: n };
  }
  function Rt(n) {
    0 > Yt || (n.current = Pi[Yt], Pi[Yt] = null, Yt--);
  }
  function wt(n, r) {
    Yt++, Pi[Yt] = n.current, n.current = r;
  }
  var Ya = {}, Ie = at(Ya), an = at(!1), Er = Ya;
  function ia(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ya;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Gt(n) {
    return n = n.childContextTypes, n != null;
  }
  function la() {
    Rt(an), Rt(Ie);
  }
  function Vi(n, r, l) {
    if (Ie.current !== Ya) throw Error(_(168));
    wt(Ie, r), wt(an, l);
  }
  function Oo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(_(108, Be(n) || "Unknown", c));
    return k({}, l, o);
  }
  function Ps(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ya, Er = Ie.current, wt(Ie, n), wt(an, an.current), !0;
  }
  function yv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(_(169));
    l ? (n = Oo(n, r, Er), o.__reactInternalMemoizedMergedChildContext = n, Rt(an), Rt(Ie), wt(Ie, n)) : Rt(an), wt(an, l);
  }
  var Br = null, An = !1, Mo = !1;
  function Gf(n) {
    Br === null ? Br = [n] : Br.push(n);
  }
  function qf(n) {
    An = !0, Gf(n);
  }
  function Cr() {
    if (!Mo && Br !== null) {
      Mo = !0;
      var n = 0, r = Ot;
      try {
        var l = Br;
        for (Ot = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Br = null, An = !1;
      } catch (c) {
        throw Br !== null && (Br = Br.slice(n + 1)), $t(Pr, Cr), c;
      } finally {
        Ot = r, Mo = !1;
      }
    }
    return null;
  }
  var Bi = [], Tr = 0, Tl = null, pu = 0, Rr = [], nr = 0, ua = null, Bn = 1, di = "";
  function $r(n, r) {
    Bi[Tr++] = pu, Bi[Tr++] = Tl, Tl = n, pu = r;
  }
  function Xf(n, r, l) {
    Rr[nr++] = Bn, Rr[nr++] = di, Rr[nr++] = ua, ua = n;
    var o = Bn;
    n = di;
    var c = 32 - ea(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - ea(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, Bn = 1 << 32 - ea(r) + c | l << c | o, di = d + n;
    } else Bn = 1 << d | l << c | o, di = n;
  }
  function Vs(n) {
    n.return !== null && ($r(n, 1), Xf(n, 1, 0));
  }
  function Kf(n) {
    for (; n === Tl; ) Tl = Bi[--Tr], Bi[Tr] = null, pu = Bi[--Tr], Bi[Tr] = null;
    for (; n === ua; ) ua = Rr[--nr], Rr[nr] = null, di = Rr[--nr], Rr[nr] = null, Bn = Rr[--nr], Rr[nr] = null;
  }
  var Yr = null, xr = null, It = !1, oa = null;
  function Zf(n, r) {
    var l = ma(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function gv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Yr = n, xr = za(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Yr = n, xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ua !== null ? { id: Bn, overflow: di } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ma(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Yr = n, xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Bs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function $s(n) {
    if (It) {
      var r = xr;
      if (r) {
        var l = r;
        if (!gv(n, r)) {
          if (Bs(n)) throw Error(_(418));
          r = za(l.nextSibling);
          var o = Yr;
          r && gv(n, r) ? Zf(o, l) : (n.flags = n.flags & -4097 | 2, It = !1, Yr = n);
        }
      } else {
        if (Bs(n)) throw Error(_(418));
        n.flags = n.flags & -4097 | 2, It = !1, Yr = n;
      }
    }
  }
  function Sv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Yr = n;
  }
  function Ys(n) {
    if (n !== Yr) return !1;
    if (!It) return Sv(n), It = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Do(n.type, n.memoizedProps)), r && (r = xr)) {
      if (Bs(n)) throw Ev(), Error(_(418));
      for (; r; ) Zf(n, r), r = za(r.nextSibling);
    }
    if (Sv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(_(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                xr = za(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        xr = null;
      }
    } else xr = Yr ? za(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ev() {
    for (var n = xr; n; ) n = za(n.nextSibling);
  }
  function en() {
    xr = Yr = null, It = !1;
  }
  function Jf(n) {
    oa === null ? oa = [n] : oa.push(n);
  }
  var Is = We.ReactCurrentBatchConfig;
  function Rl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(_(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(_(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(_(284));
      if (!l._owner) throw Error(_(290, n));
    }
    return n;
  }
  function Ia(n, r) {
    throw n = Object.prototype.toString.call(r), Error(_(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Cv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Qs(n) {
    function r(w, R) {
      if (n) {
        var O = w.deletions;
        O === null ? (w.deletions = [R], w.flags |= 16) : O.push(R);
      }
    }
    function l(w, R) {
      if (!n) return null;
      for (; R !== null; ) r(w, R), R = R.sibling;
      return null;
    }
    function o(w, R) {
      for (w = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? w.set(R.key, R) : w.set(R.index, R), R = R.sibling;
      return w;
    }
    function c(w, R) {
      return w = Xi(w, R), w.index = 0, w.sibling = null, w;
    }
    function d(w, R, O) {
      return w.index = O, n ? (O = w.alternate, O !== null ? (O = O.index, O < R ? (w.flags |= 2, R) : O) : (w.flags |= 2, R)) : (w.flags |= 1048576, R);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, R, O, G) {
      return R === null || R.tag !== 6 ? (R = Nc(O, w.mode, G), R.return = w, R) : (R = c(R, O), R.return = w, R);
    }
    function C(w, R, O, G) {
      var Ce = O.type;
      return Ce === Ke ? V(w, R, O.props.children, G, O.key) : R !== null && (R.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === dt && Cv(Ce) === R.type) ? (G = c(R, O.props), G.ref = Rl(w, R, O), G.return = w, G) : (G = Mc(O.type, O.key, O.props, null, w.mode, G), G.ref = Rl(w, R, O), G.return = w, G);
    }
    function L(w, R, O, G) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== O.containerInfo || R.stateNode.implementation !== O.implementation ? (R = qo(O, w.mode, G), R.return = w, R) : (R = c(R, O.children || []), R.return = w, R);
    }
    function V(w, R, O, G, Ce) {
      return R === null || R.tag !== 7 ? (R = Fl(O, w.mode, G, Ce), R.return = w, R) : (R = c(R, O), R.return = w, R);
    }
    function Y(w, R, O) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = Nc("" + R, w.mode, O), R.return = w, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case P:
            return O = Mc(R.type, R.key, R.props, null, w.mode, O), O.ref = Rl(w, null, R), O.return = w, O;
          case yt:
            return R = qo(R, w.mode, O), R.return = w, R;
          case dt:
            var G = R._init;
            return Y(w, G(R._payload), O);
        }
        if (ri(R) || we(R)) return R = Fl(R, w.mode, O, null), R.return = w, R;
        Ia(w, R);
      }
      return null;
    }
    function H(w, R, O, G) {
      var Ce = R !== null ? R.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return Ce !== null ? null : S(w, R, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case P:
            return O.key === Ce ? C(w, R, O, G) : null;
          case yt:
            return O.key === Ce ? L(w, R, O, G) : null;
          case dt:
            return Ce = O._init, H(
              w,
              R,
              Ce(O._payload),
              G
            );
        }
        if (ri(O) || we(O)) return Ce !== null ? null : V(w, R, O, G, null);
        Ia(w, O);
      }
      return null;
    }
    function oe(w, R, O, G, Ce) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return w = w.get(O) || null, S(R, w, "" + G, Ce);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case P:
            return w = w.get(G.key === null ? O : G.key) || null, C(R, w, G, Ce);
          case yt:
            return w = w.get(G.key === null ? O : G.key) || null, L(R, w, G, Ce);
          case dt:
            var je = G._init;
            return oe(w, R, O, je(G._payload), Ce);
        }
        if (ri(G) || we(G)) return w = w.get(O) || null, V(R, w, G, Ce, null);
        Ia(R, G);
      }
      return null;
    }
    function ve(w, R, O, G) {
      for (var Ce = null, je = null, he = R, Fe = R = 0, On = null; he !== null && Fe < O.length; Fe++) {
        he.index > Fe ? (On = he, he = null) : On = he.sibling;
        var St = H(w, he, O[Fe], G);
        if (St === null) {
          he === null && (he = On);
          break;
        }
        n && he && St.alternate === null && r(w, he), R = d(St, R, Fe), je === null ? Ce = St : je.sibling = St, je = St, he = On;
      }
      if (Fe === O.length) return l(w, he), It && $r(w, Fe), Ce;
      if (he === null) {
        for (; Fe < O.length; Fe++) he = Y(w, O[Fe], G), he !== null && (R = d(he, R, Fe), je === null ? Ce = he : je.sibling = he, je = he);
        return It && $r(w, Fe), Ce;
      }
      for (he = o(w, he); Fe < O.length; Fe++) On = oe(he, w, Fe, O[Fe], G), On !== null && (n && On.alternate !== null && he.delete(On.key === null ? Fe : On.key), R = d(On, R, Fe), je === null ? Ce = On : je.sibling = On, je = On);
      return n && he.forEach(function(Si) {
        return r(w, Si);
      }), It && $r(w, Fe), Ce;
    }
    function ge(w, R, O, G) {
      var Ce = we(O);
      if (typeof Ce != "function") throw Error(_(150));
      if (O = Ce.call(O), O == null) throw Error(_(151));
      for (var je = Ce = null, he = R, Fe = R = 0, On = null, St = O.next(); he !== null && !St.done; Fe++, St = O.next()) {
        he.index > Fe ? (On = he, he = null) : On = he.sibling;
        var Si = H(w, he, St.value, G);
        if (Si === null) {
          he === null && (he = On);
          break;
        }
        n && he && Si.alternate === null && r(w, he), R = d(Si, R, Fe), je === null ? Ce = Si : je.sibling = Si, je = Si, he = On;
      }
      if (St.done) return l(
        w,
        he
      ), It && $r(w, Fe), Ce;
      if (he === null) {
        for (; !St.done; Fe++, St = O.next()) St = Y(w, St.value, G), St !== null && (R = d(St, R, Fe), je === null ? Ce = St : je.sibling = St, je = St);
        return It && $r(w, Fe), Ce;
      }
      for (he = o(w, he); !St.done; Fe++, St = O.next()) St = oe(he, w, Fe, St.value, G), St !== null && (n && St.alternate !== null && he.delete(St.key === null ? Fe : St.key), R = d(St, R, Fe), je === null ? Ce = St : je.sibling = St, je = St);
      return n && he.forEach(function(Ey) {
        return r(w, Ey);
      }), It && $r(w, Fe), Ce;
    }
    function hn(w, R, O, G) {
      if (typeof O == "object" && O !== null && O.type === Ke && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case P:
            e: {
              for (var Ce = O.key, je = R; je !== null; ) {
                if (je.key === Ce) {
                  if (Ce = O.type, Ce === Ke) {
                    if (je.tag === 7) {
                      l(w, je.sibling), R = c(je, O.props.children), R.return = w, w = R;
                      break e;
                    }
                  } else if (je.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === dt && Cv(Ce) === je.type) {
                    l(w, je.sibling), R = c(je, O.props), R.ref = Rl(w, je, O), R.return = w, w = R;
                    break e;
                  }
                  l(w, je);
                  break;
                } else r(w, je);
                je = je.sibling;
              }
              O.type === Ke ? (R = Fl(O.props.children, w.mode, G, O.key), R.return = w, w = R) : (G = Mc(O.type, O.key, O.props, null, w.mode, G), G.ref = Rl(w, R, O), G.return = w, w = G);
            }
            return h(w);
          case yt:
            e: {
              for (je = O.key; R !== null; ) {
                if (R.key === je) if (R.tag === 4 && R.stateNode.containerInfo === O.containerInfo && R.stateNode.implementation === O.implementation) {
                  l(w, R.sibling), R = c(R, O.children || []), R.return = w, w = R;
                  break e;
                } else {
                  l(w, R);
                  break;
                }
                else r(w, R);
                R = R.sibling;
              }
              R = qo(O, w.mode, G), R.return = w, w = R;
            }
            return h(w);
          case dt:
            return je = O._init, hn(w, R, je(O._payload), G);
        }
        if (ri(O)) return ve(w, R, O, G);
        if (we(O)) return ge(w, R, O, G);
        Ia(w, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, R !== null && R.tag === 6 ? (l(w, R.sibling), R = c(R, O), R.return = w, w = R) : (l(w, R), R = Nc(O, w.mode, G), R.return = w, w = R), h(w)) : l(w, R);
    }
    return hn;
  }
  var vu = Qs(!0), Tv = Qs(!1), pi = at(null), bn = null, te = null, sa = null;
  function Ir() {
    sa = te = bn = null;
  }
  function ed(n) {
    var r = pi.current;
    Rt(pi), n._currentValue = r;
  }
  function td(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function hu(n, r) {
    bn = n, sa = te = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Dr = !0), n.firstContext = null);
  }
  function ca(n) {
    var r = n._currentValue;
    if (sa !== n) if (n = { context: n, memoizedValue: r, next: null }, te === null) {
      if (bn === null) throw Error(_(308));
      te = n, bn.dependencies = { lanes: 0, firstContext: n };
    } else te = te.next = n;
    return r;
  }
  var xl = null;
  function Tn(n) {
    xl === null ? xl = [n] : xl.push(n);
  }
  function Rv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Tn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, vi(n, o);
  }
  function vi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $i = !1;
  function Ws(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function mu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function wr(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, vi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Tn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, vi(n, l);
  }
  function Gs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, oo(n, l);
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
  function qs(n, r, l, o) {
    var c = n.updateQueue;
    $i = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, L = C.next;
      C.next = null, h === null ? d = L : h.next = L, h = C;
      var V = n.alternate;
      V !== null && (V = V.updateQueue, S = V.lastBaseUpdate, S !== h && (S === null ? V.firstBaseUpdate = L : S.next = L, V.lastBaseUpdate = C));
    }
    if (d !== null) {
      var Y = c.baseState;
      h = 0, V = L = C = null, S = d;
      do {
        var H = S.lane, oe = S.eventTime;
        if ((o & H) === H) {
          V !== null && (V = V.next = {
            eventTime: oe,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ve = n, ge = S;
            switch (H = r, oe = l, ge.tag) {
              case 1:
                if (ve = ge.payload, typeof ve == "function") {
                  Y = ve.call(oe, Y, H);
                  break e;
                }
                Y = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ge.payload, H = typeof ve == "function" ? ve.call(oe, Y, H) : ve, H == null) break e;
                Y = k({}, Y, H);
                break e;
              case 2:
                $i = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, H = c.effects, H === null ? c.effects = [S] : H.push(S));
        } else oe = { eventTime: oe, lane: H, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, V === null ? (L = V = oe, C = Y) : V = V.next = oe, h |= H;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          H = S, S = H.next, H.next = null, c.lastBaseUpdate = H, c.shared.pending = null;
        }
      } while (!0);
      if (V === null && (C = Y), c.baseState = C, c.firstBaseUpdate = L, c.lastBaseUpdate = V, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      zl |= h, n.lanes = h, n.memoizedState = Y;
    }
  }
  function wv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(_(191, c));
        c.call(o);
      }
    }
  }
  var Lo = {}, Ua = at(Lo), yu = at(Lo), No = at(Lo);
  function wl(n) {
    if (n === Lo) throw Error(_(174));
    return n;
  }
  function nd(n, r) {
    switch (wt(No, r), wt(yu, n), wt(Ua, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sn(r, n);
    }
    Rt(Ua), wt(Ua, r);
  }
  function gu() {
    Rt(Ua), Rt(yu), Rt(No);
  }
  function bv(n) {
    wl(No.current);
    var r = wl(Ua.current), l = Sn(r, n.type);
    r !== l && (wt(yu, n), wt(Ua, l));
  }
  function rd(n) {
    yu.current === n && (Rt(Ua), Rt(yu));
  }
  var qt = at(0);
  function Xs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
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
  var Ks = [];
  function ad() {
    for (var n = 0; n < Ks.length; n++) Ks[n]._workInProgressVersionPrimary = null;
    Ks.length = 0;
  }
  var Zs = We.ReactCurrentDispatcher, zo = We.ReactCurrentBatchConfig, Ee = 0, Te = null, Qe = null, st = null, Qr = !1, Su = !1, Uo = 0, ry = 0;
  function rr() {
    throw Error(_(321));
  }
  function Ao(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ra(n[l], r[l])) return !1;
    return !0;
  }
  function F(n, r, l, o, c, d) {
    if (Ee = d, Te = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Zs.current = n === null || n.memoizedState === null ? ay : Bt, n = l(o, c), Su) {
      d = 0;
      do {
        if (Su = !1, Uo = 0, 25 <= d) throw Error(_(301));
        d += 1, st = Qe = null, r.updateQueue = null, Zs.current = pc, n = l(o, c);
      } while (Su);
    }
    if (Zs.current = ar, r = Qe !== null && Qe.next !== null, Ee = 0, st = Qe = Te = null, Qr = !1, r) throw Error(_(300));
    return n;
  }
  function Rn() {
    var n = Uo !== 0;
    return Uo = 0, n;
  }
  function _e() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return st === null ? Te.memoizedState = st = n : st = st.next = n, st;
  }
  function $n() {
    if (Qe === null) {
      var n = Te.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Qe.next;
    var r = st === null ? Te.memoizedState : st.next;
    if (r !== null) st = r, Qe = n;
    else {
      if (n === null) throw Error(_(310));
      Qe = n, n = { memoizedState: Qe.memoizedState, baseState: Qe.baseState, baseQueue: Qe.baseQueue, queue: Qe.queue, next: null }, st === null ? Te.memoizedState = st = n : st = st.next = n;
    }
    return st;
  }
  function Wr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function hi(n) {
    var r = $n(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = Qe, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, L = d;
      do {
        var V = L.lane;
        if ((Ee & V) === V) C !== null && (C = C.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : n(o, L.action);
        else {
          var Y = {
            lane: V,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          C === null ? (S = C = Y, h = o) : C = C.next = Y, Te.lanes |= V, zl |= V;
        }
        L = L.next;
      } while (L !== null && L !== d);
      C === null ? h = o : C.next = S, ra(o, r.memoizedState) || (Dr = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Te.lanes |= d, zl |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function fa(n) {
    var r = $n(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      ra(d, r.memoizedState) || (Dr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Eu() {
  }
  function bl(n, r) {
    var l = Te, o = $n(), c = r(), d = !ra(o.memoizedState, c);
    if (d && (o.memoizedState = c, Dr = !0), o = o.queue, jo(ec.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || st !== null && st.memoizedState.tag & 1) {
      if (l.flags |= 2048, Dl(9, Js.bind(null, l, o, c, r), void 0, null), un === null) throw Error(_(349));
      Ee & 30 || Cu(l, r, c);
    }
    return c;
  }
  function Cu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Te.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Te.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Js(n, r, l, o) {
    r.value = l, r.getSnapshot = o, tc(r) && nc(n);
  }
  function ec(n, r, l) {
    return l(function() {
      tc(r) && nc(n);
    });
  }
  function tc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ra(n, l);
    } catch {
      return !0;
    }
  }
  function nc(n) {
    var r = vi(n, 1);
    r !== null && tn(r, n, 1, -1);
  }
  function rc(n) {
    var r = _e();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fo.bind(null, Te, n), [r.memoizedState, n];
  }
  function Dl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Te.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Te.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function ac() {
    return $n().memoizedState;
  }
  function Tu(n, r, l, o) {
    var c = _e();
    Te.flags |= n, c.memoizedState = Dl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Ru(n, r, l, o) {
    var c = $n();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Qe !== null) {
      var h = Qe.memoizedState;
      if (d = h.destroy, o !== null && Ao(o, h.deps)) {
        c.memoizedState = Dl(r, l, d, o);
        return;
      }
    }
    Te.flags |= n, c.memoizedState = Dl(1 | r, l, d, o);
  }
  function ic(n, r) {
    return Tu(8390656, 8, n, r);
  }
  function jo(n, r) {
    return Ru(2048, 8, n, r);
  }
  function lc(n, r) {
    return Ru(4, 2, n, r);
  }
  function uc(n, r) {
    return Ru(4, 4, n, r);
  }
  function oc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function sc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ru(4, 4, oc.bind(null, r, n), l);
  }
  function xu() {
  }
  function _l(n, r) {
    var l = $n();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ao(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function cc(n, r) {
    var l = $n();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ao(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function fc(n, r, l) {
    return Ee & 21 ? (ra(l, r) || (l = Cs(), Te.lanes |= l, zl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Dr = !0), n.memoizedState = l);
  }
  function id(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = zo.transition;
    zo.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, zo.transition = o;
    }
  }
  function dc() {
    return $n().memoizedState;
  }
  function Dv(n, r, l) {
    var o = gi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ld(n)) wu(r, l);
    else if (l = Rv(n, r, l, o), l !== null) {
      var c = Hn();
      tn(l, n, o, c), Ii(l, r, o);
    }
  }
  function Fo(n, r, l) {
    var o = gi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ld(n)) wu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, S = d(h, l);
        if (c.hasEagerState = !0, c.eagerState = S, ra(S, h)) {
          var C = r.interleaved;
          C === null ? (c.next = c, Tn(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rv(n, r, c, o), l !== null && (c = Hn(), tn(l, n, o, c), Ii(l, r, o));
    }
  }
  function ld(n) {
    var r = n.alternate;
    return n === Te || r !== null && r === Te;
  }
  function wu(n, r) {
    Su = Qr = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ii(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, oo(n, l);
    }
  }
  var ar = { readContext: ca, useCallback: rr, useContext: rr, useEffect: rr, useImperativeHandle: rr, useInsertionEffect: rr, useLayoutEffect: rr, useMemo: rr, useReducer: rr, useRef: rr, useState: rr, useDebugValue: rr, useDeferredValue: rr, useTransition: rr, useMutableSource: rr, useSyncExternalStore: rr, useId: rr, unstable_isNewReconciler: !1 }, ay = { readContext: ca, useCallback: function(n, r) {
    return _e().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ca, useEffect: ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(
      4194308,
      4,
      oc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Tu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = _e();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = _e();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Dv.bind(null, Te, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = _e();
    return n = { current: n }, r.memoizedState = n;
  }, useState: rc, useDebugValue: xu, useDeferredValue: function(n) {
    return _e().memoizedState = n;
  }, useTransition: function() {
    var n = rc(!1), r = n[0];
    return n = id.bind(null, n[1]), _e().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Te, c = _e();
    if (It) {
      if (l === void 0) throw Error(_(407));
      l = l();
    } else {
      if (l = r(), un === null) throw Error(_(349));
      Ee & 30 || Cu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, ic(ec.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Dl(9, Js.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = _e(), r = un.identifierPrefix;
    if (It) {
      var l = di, o = Bn;
      l = (o & ~(1 << 32 - ea(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Uo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ry++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Bt = {
    readContext: ca,
    useCallback: _l,
    useContext: ca,
    useEffect: jo,
    useImperativeHandle: sc,
    useInsertionEffect: lc,
    useLayoutEffect: uc,
    useMemo: cc,
    useReducer: hi,
    useRef: ac,
    useState: function() {
      return hi(Wr);
    },
    useDebugValue: xu,
    useDeferredValue: function(n) {
      var r = $n();
      return fc(r, Qe.memoizedState, n);
    },
    useTransition: function() {
      var n = hi(Wr)[0], r = $n().memoizedState;
      return [n, r];
    },
    useMutableSource: Eu,
    useSyncExternalStore: bl,
    useId: dc,
    unstable_isNewReconciler: !1
  }, pc = { readContext: ca, useCallback: _l, useContext: ca, useEffect: jo, useImperativeHandle: sc, useInsertionEffect: lc, useLayoutEffect: uc, useMemo: cc, useReducer: fa, useRef: ac, useState: function() {
    return fa(Wr);
  }, useDebugValue: xu, useDeferredValue: function(n) {
    var r = $n();
    return Qe === null ? r.memoizedState = n : fc(r, Qe.memoizedState, n);
  }, useTransition: function() {
    var n = fa(Wr)[0], r = $n().memoizedState;
    return [n, r];
  }, useMutableSource: Eu, useSyncExternalStore: bl, useId: dc, unstable_isNewReconciler: !1 };
  function br(n, r) {
    if (n && n.defaultProps) {
      r = k({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kl(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : k({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ol = { isMounted: function(n) {
    return (n = n._reactInternals) ? De(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = gi(n), d = wr(o, c);
    d.payload = r, l != null && (d.callback = l), r = Yi(n, d, c), r !== null && (tn(r, n, c, o), Gs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = gi(n), d = wr(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Yi(n, d, c), r !== null && (tn(r, n, c, o), Gs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = gi(n), c = wr(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Yi(n, c, o), r !== null && (tn(r, n, o, l), Gs(r, n, o));
  } };
  function _v(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Eo(l, o) || !Eo(c, d) : !0;
  }
  function kv(n, r, l) {
    var o = !1, c = Ya, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ca(d) : (c = Gt(r) ? Er : Ie.current, o = r.contextTypes, d = (o = o != null) ? ia(n, c) : Ya), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ol, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Ov(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ol.enqueueReplaceState(r, r.state, null);
  }
  function ud(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Ws(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ca(d) : (d = Gt(r) ? Er : Ie.current, c.context = ia(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kl(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ol.enqueueReplaceState(c, c.state, null), qs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Qi(n, r) {
    try {
      var l = "", o = r;
      do
        l += nt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function od(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ho(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Mv = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
    l = wr(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wc || (wc = !0, yd = o), Ho(n, r);
    }, l;
  }
  function Nv(n, r, l) {
    l = wr(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ho(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ho(n, r), typeof o != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Po(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Mv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function zv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function sd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = wr(-1, 1), r.tag = 2, Yi(l, r, 1))), l.lanes |= 1), n);
  }
  var Uv = We.ReactCurrentOwner, Dr = !1;
  function pn(n, r, l, o) {
    r.child = n === null ? Tv(r, null, l, o) : vu(r, n.child, l, o);
  }
  function bu(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return hu(r, c), o = F(n, r, l, o, d, c), l = Rn(), n !== null && !Dr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, vn(n, r, c)) : (It && l && Vs(r), r.flags |= 1, pn(n, r, o, c), r.child);
  }
  function Wi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Td(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, vc(n, r, d, o, c)) : (n = Mc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Eo, l(h, o) && n.ref === r.ref) return vn(n, r, c);
    }
    return r.flags |= 1, n = Xi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function vc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Eo(d, o) && n.ref === r.ref) if (Dr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Dr = !0);
      else return r.lanes = n.lanes, vn(n, r, c);
    }
    return et(n, r, l, o, c);
  }
  function _r(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, wt(Au, kr), kr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, wt(Au, kr), kr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, wt(Au, kr), kr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, wt(Au, kr), kr |= o;
    return pn(n, r, c, l), r.child;
  }
  function Ml(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function et(n, r, l, o, c) {
    var d = Gt(l) ? Er : Ie.current;
    return d = ia(r, d), hu(r, c), l = F(n, r, l, o, d, c), o = Rn(), n !== null && !Dr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, vn(n, r, c)) : (It && o && Vs(r), r.flags |= 1, pn(n, r, l, c), r.child);
  }
  function Vo(n, r, l, o, c) {
    if (Gt(l)) {
      var d = !0;
      Ps(r);
    } else d = !1;
    if (hu(r, c), r.stateNode === null) $o(n, r), kv(r, l, o), ud(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, L = l.contextType;
      typeof L == "object" && L !== null ? L = ca(L) : (L = Gt(l) ? Er : Ie.current, L = ia(r, L));
      var V = l.getDerivedStateFromProps, Y = typeof V == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Y || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== L) && Ov(r, h, o, L), $i = !1;
      var H = r.memoizedState;
      h.state = H, qs(r, o, h, c), C = r.memoizedState, S !== o || H !== C || an.current || $i ? (typeof V == "function" && (kl(r, l, V, o), C = r.memoizedState), (S = $i || _v(r, l, S, o, H, C, L)) ? (Y || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = L, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, mu(n, r), S = r.memoizedProps, L = r.type === r.elementType ? S : br(r.type, S), h.props = L, Y = r.pendingProps, H = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = ca(C) : (C = Gt(l) ? Er : Ie.current, C = ia(r, C));
      var oe = l.getDerivedStateFromProps;
      (V = typeof oe == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== Y || H !== C) && Ov(r, h, o, C), $i = !1, H = r.memoizedState, h.state = H, qs(r, o, h, c);
      var ve = r.memoizedState;
      S !== Y || H !== ve || an.current || $i ? (typeof oe == "function" && (kl(r, l, oe, o), ve = r.memoizedState), (L = $i || _v(r, l, L, o, H, ve, C) || !1) ? (V || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ve, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ve, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ve), h.props = o, h.state = ve, h.context = C, o = L) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return hc(n, r, l, o, d, c);
  }
  function hc(n, r, l, o, c, d) {
    Ml(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && yv(r, l, !1), vn(n, r, d);
    o = r.stateNode, Uv.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = vu(r, n.child, null, d), r.child = vu(r, null, S, d)) : pn(n, r, S, d), r.memoizedState = o.state, c && yv(r, l, !0), r.child;
  }
  function iy(n) {
    var r = n.stateNode;
    r.pendingContext ? Vi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vi(n, r.context, !1), nd(n, r.containerInfo);
  }
  function Av(n, r, l, o, c) {
    return en(), Jf(c), r.flags |= 256, pn(n, r, l, o), r.child;
  }
  var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ll(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function jv(n, r, l) {
    var o = r.pendingProps, c = qt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), wt(qt, c & 1), n === null)
      return $s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Lc(h, o, 0, null), n = Fl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ll(l), r.memoizedState = Bo, n) : mc(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return cd(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Xi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Xi(S, d) : (d = Fl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Ll(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Bo, o;
    }
    return d = n.child, n = d.sibling, o = Xi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function mc(n, r) {
    return r = Lc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function yc(n, r, l, o) {
    return o !== null && Jf(o), vu(r, n.child, null, l), n = mc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function cd(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = od(Error(_(422))), yc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Lc({ mode: "visible", children: o.children }, c, 0, null), d = Fl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && vu(r, n.child, null, h), r.child.memoizedState = Ll(h), r.memoizedState = Bo, d);
    if (!(r.mode & 1)) return yc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(_(419)), o = od(d, o, void 0), yc(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Dr || S) {
      if (o = un, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, vi(n, c), tn(o, n, c, -1));
      }
      return Go(), o = od(Error(_(421))), yc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Cd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, xr = za(c.nextSibling), Yr = r, It = !0, oa = null, n !== null && (Rr[nr++] = Bn, Rr[nr++] = di, Rr[nr++] = ua, Bn = n.id, di = n.overflow, ua = r), r = mc(r, o.children), r.flags |= 4096, r);
  }
  function Fv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), td(n.return, r, l);
  }
  function gc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function fd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (pn(n, r, o.children, l), o = qt.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fv(n, l, r);
        else if (n.tag === 19) Fv(n, l, r);
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
    if (wt(qt, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Xs(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), gc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Xs(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        gc(r, !0, l, null, d);
        break;
      case "together":
        gc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function $o(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function vn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), zl |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(_(153));
    if (r.child !== null) {
      for (n = r.child, l = Xi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Xi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function mi(n, r, l) {
    switch (r.tag) {
      case 3:
        iy(r), en();
        break;
      case 5:
        bv(r);
        break;
      case 1:
        Gt(r.type) && Ps(r);
        break;
      case 4:
        nd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        wt(pi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (wt(qt, qt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? jv(n, r, l) : (wt(qt, qt.current & 1), n = vn(n, r, l), n !== null ? n.sibling : null);
        wt(qt, qt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return fd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), wt(qt, qt.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _r(n, r, l);
    }
    return vn(n, r, l);
  }
  var Qa, Du, _u, da;
  Qa = function(n, r) {
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
  }, Du = function() {
  }, _u = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, wl(Ua.current);
      var d = null;
      switch (l) {
        case "input":
          c = fn(n, c), o = fn(n, o), d = [];
          break;
        case "select":
          c = k({}, c, { value: void 0 }), o = k({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = wa(n, c), o = wa(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Hs);
      }
      Ln(l, o);
      var h;
      l = null;
      for (L in c) if (!o.hasOwnProperty(L) && c.hasOwnProperty(L) && c[L] != null) if (L === "style") {
        var S = c[L];
        for (h in S) S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (Ue.hasOwnProperty(L) ? d || (d = []) : (d = d || []).push(L, null));
      for (L in o) {
        var C = o[L];
        if (S = c != null ? c[L] : void 0, o.hasOwnProperty(L) && C !== S && (C != null || S != null)) if (L === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          L,
          l
        )), l = C;
        else L === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(L, C)) : L === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(L, "" + C) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (Ue.hasOwnProperty(L) ? (C != null && L === "onScroll" && Ft("scroll", n), d || S === C || (d = [])) : (d = d || []).push(L, C));
      }
      l && (d = d || []).push("style", l);
      var L = d;
      (r.updateQueue = L) && (r.flags |= 4);
    }
  }, da = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ln(n, r) {
    if (!It) switch (n.tailMode) {
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
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ly(n, r, l) {
    var o = r.pendingProps;
    switch (Kf(r), r.tag) {
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
        return ir(r), null;
      case 1:
        return Gt(r.type) && la(), ir(r), null;
      case 3:
        return o = r.stateNode, gu(), Rt(an), Rt(Ie), ad(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ys(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, oa !== null && (gd(oa), oa = null))), Du(n, r), ir(r), null;
      case 5:
        rd(r);
        var c = wl(No.current);
        if (l = r.type, n !== null && r.stateNode != null) _u(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(_(166));
            return ir(r), null;
          }
          if (n = wl(Ua.current), Ys(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[$a] = r, o[Cl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ft("cancel", o), Ft("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ft("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < xo.length; c++) Ft(xo[c], o);
                break;
              case "source":
                Ft("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ft(
                  "error",
                  o
                ), Ft("load", o);
                break;
              case "details":
                Ft("toggle", o);
                break;
              case "input":
                gn(o, d), Ft("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ft("invalid", o);
                break;
              case "textarea":
                Ur(o, d), Ft("invalid", o);
            }
            Ln(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var S = d[h];
              h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && Fs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && Fs(
                o.textContent,
                S,
                n
              ), c = ["children", "" + S]) : Ue.hasOwnProperty(h) && S != null && h === "onScroll" && Ft("scroll", o);
            }
            switch (l) {
              case "input":
                Dt(o), Jr(o, d, !0);
                break;
              case "textarea":
                Dt(o), Ar(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Hs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ba(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[$a] = r, n[Cl] = o, Qa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = dn(l, o), l) {
                case "dialog":
                  Ft("cancel", n), Ft("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ft("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < xo.length; c++) Ft(xo[c], n);
                  c = o;
                  break;
                case "source":
                  Ft("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ft(
                    "error",
                    n
                  ), Ft("load", n), c = o;
                  break;
                case "details":
                  Ft("toggle", n), c = o;
                  break;
                case "input":
                  gn(n, o), c = fn(n, o), Ft("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = k({}, o, { value: void 0 }), Ft("invalid", n);
                  break;
                case "textarea":
                  Ur(n, o), c = wa(n, o), Ft("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ln(l, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var C = S[d];
                d === "style" ? kt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Mi(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && Da(n, C) : typeof C == "number" && Da(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ue.hasOwnProperty(d) ? C != null && d === "onScroll" && Ft("scroll", n) : C != null && ke(n, d, C, h));
              }
              switch (l) {
                case "input":
                  Dt(n), Jr(n, o, !1);
                  break;
                case "textarea":
                  Dt(n), Ar(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + $e(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Ha(n, !!o.multiple, d, !1) : o.defaultValue != null && Ha(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Hs);
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
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null) da(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(_(166));
          if (l = wl(No.current), wl(Ua.current), Ys(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[$a] = r, (d = o.nodeValue !== l) && (n = Yr, n !== null)) switch (n.tag) {
              case 3:
                Fs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Fs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[$a] = r, r.stateNode = o;
        }
        return ir(r), null;
      case 13:
        if (Rt(qt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (It && xr !== null && r.mode & 1 && !(r.flags & 128)) Ev(), en(), r.flags |= 98560, d = !1;
          else if (d = Ys(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(_(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(_(317));
              d[$a] = r;
            } else en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ir(r), d = !1;
          } else oa !== null && (gd(oa), oa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || qt.current & 1 ? _n === 0 && (_n = 3) : Go())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return gu(), Du(n, r), n === null && fu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return ed(r.type._context), ir(r), null;
      case 17:
        return Gt(r.type) && la(), ir(r), null;
      case 19:
        if (Rt(qt), d = r.memoizedState, d === null) return ir(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) ln(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (h = Xs(n), h !== null) {
              for (r.flags |= 128, ln(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return wt(qt, qt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && xt() > Fu && (r.flags |= 128, o = !0, ln(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Xs(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ln(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !It) return ir(r), null;
          } else 2 * xt() - d.renderingStartTime > Fu && l !== 1073741824 && (r.flags |= 128, o = !0, ln(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = xt(), r.sibling = null, l = qt.current, wt(qt, o ? l & 1 | 2 : l & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return kc(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? kr & 1073741824 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, r.tag));
  }
  function uy(n, r) {
    switch (Kf(r), r.tag) {
      case 1:
        return Gt(r.type) && la(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return gu(), Rt(an), Rt(Ie), ad(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rd(r), null;
      case 13:
        if (Rt(qt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(_(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Rt(qt), null;
      case 4:
        return gu(), null;
      case 10:
        return ed(r.type._context), null;
      case 22:
      case 23:
        return kc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ku = !1, Yn = !1, Sc = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function Ou(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      on(n, r, o);
    }
    else l.current = null;
  }
  function dd(n, r, l) {
    try {
      l();
    } catch (o) {
      on(n, r, o);
    }
  }
  var Ec = !1;
  function oy(n, r) {
    if ($f = vl, n = Ns(), oi(n)) {
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
          var h = 0, S = -1, C = -1, L = 0, V = 0, Y = n, H = null;
          t: for (; ; ) {
            for (var oe; Y !== l || c !== 0 && Y.nodeType !== 3 || (S = h + c), Y !== d || o !== 0 && Y.nodeType !== 3 || (C = h + o), Y.nodeType === 3 && (h += Y.nodeValue.length), (oe = Y.firstChild) !== null; )
              H = Y, Y = oe;
            for (; ; ) {
              if (Y === n) break t;
              if (H === l && ++L === c && (S = h), H === d && ++V === o && (C = h), (oe = Y.nextSibling) !== null) break;
              Y = H, H = Y.parentNode;
            }
            Y = oe;
          }
          l = S === -1 || C === -1 ? null : { start: S, end: C };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Sl = { focusedElem: n, selectionRange: l }, vl = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
    else for (; pe !== null; ) {
      r = pe;
      try {
        var ve = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ge = ve.memoizedProps, hn = ve.memoizedState, w = r.stateNode, R = w.getSnapshotBeforeUpdate(r.elementType === r.type ? ge : br(r.type, ge), hn);
              w.__reactInternalSnapshotBeforeUpdate = R;
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
            throw Error(_(163));
        }
      } catch (G) {
        on(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, pe = n;
        break;
      }
      pe = r.return;
    }
    return ve = Ec, Ec = !1, ve;
  }
  function Mu(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && dd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Cc(n, r) {
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
  function Tc(n) {
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
  function Hv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[$a], delete r[Cl], delete r[Qf], delete r[ny], delete r[Wf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function pd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Pv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || pd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Hs));
    else if (o !== 4 && (n = n.child, n !== null)) for (Yo(n, r, l), n = n.sibling; n !== null; ) Yo(n, r, l), n = n.sibling;
  }
  function Lu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Lu(n, r, l), n = n.sibling; n !== null; ) Lu(n, r, l), n = n.sibling;
  }
  var Xt = null, jn = !1;
  function ur(n, r, l) {
    for (l = l.child; l !== null; ) Nu(n, r, l), l = l.sibling;
  }
  function Nu(n, r, l) {
    if (ka && typeof ka.onCommitFiberUnmount == "function") try {
      ka.onCommitFiberUnmount(uo, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Yn || Ou(l, r);
      case 6:
        var o = Xt, c = jn;
        Xt = null, ur(n, r, l), Xt = o, jn = c, Xt !== null && (jn ? (n = Xt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Xt.removeChild(l.stateNode));
        break;
      case 18:
        Xt !== null && (jn ? (n = Xt, l = l.stateNode, n.nodeType === 8 ? Fi(n.parentNode, l) : n.nodeType === 1 && Fi(n, l), po(n)) : Fi(Xt, l.stateNode));
        break;
      case 4:
        o = Xt, c = jn, Xt = l.stateNode.containerInfo, jn = !0, ur(n, r, l), Xt = o, jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Yn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && dd(l, r, h), c = c.next;
          } while (c !== o);
        }
        ur(n, r, l);
        break;
      case 1:
        if (!Yn && (Ou(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (S) {
          on(l, r, S);
        }
        ur(n, r, l);
        break;
      case 21:
        ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Yn = (o = Yn) || l.memoizedState !== null, ur(n, r, l), Yn = o) : ur(n, r, l);
        break;
      default:
        ur(n, r, l);
    }
  }
  function zu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Sc()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Fn(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, h = r, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              Xt = S.stateNode, jn = !1;
              break e;
            case 3:
              Xt = S.stateNode.containerInfo, jn = !0;
              break e;
            case 4:
              Xt = S.stateNode.containerInfo, jn = !0;
              break e;
          }
          S = S.return;
        }
        if (Xt === null) throw Error(_(160));
        Nu(d, h, c), Xt = null, jn = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (L) {
        on(c, r, L);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Vv(r, n), r = r.sibling;
  }
  function Vv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Fn(r, n), Wa(n), o & 4) {
          try {
            Mu(3, n, n.return), Cc(3, n);
          } catch (ge) {
            on(n, n.return, ge);
          }
          try {
            Mu(5, n, n.return);
          } catch (ge) {
            on(n, n.return, ge);
          }
        }
        break;
      case 1:
        Fn(r, n), Wa(n), o & 512 && l !== null && Ou(l, l.return);
        break;
      case 5:
        if (Fn(r, n), Wa(n), o & 512 && l !== null && Ou(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Da(c, "");
          } catch (ge) {
            on(n, n.return, ge);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            S === "input" && d.type === "radio" && d.name != null && Vn(c, d), dn(S, h);
            var L = dn(S, d);
            for (h = 0; h < C.length; h += 2) {
              var V = C[h], Y = C[h + 1];
              V === "style" ? kt(c, Y) : V === "dangerouslySetInnerHTML" ? Mi(c, Y) : V === "children" ? Da(c, Y) : ke(c, V, Y, L);
            }
            switch (S) {
              case "input":
                Jn(c, d);
                break;
              case "textarea":
                Pa(c, d);
                break;
              case "select":
                var H = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var oe = d.value;
                oe != null ? Ha(c, !!d.multiple, oe, !1) : H !== !!d.multiple && (d.defaultValue != null ? Ha(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Ha(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Cl] = d;
          } catch (ge) {
            on(n, n.return, ge);
          }
        }
        break;
      case 6:
        if (Fn(r, n), Wa(n), o & 4) {
          if (n.stateNode === null) throw Error(_(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ge) {
            on(n, n.return, ge);
          }
        }
        break;
      case 3:
        if (Fn(r, n), Wa(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          po(r.containerInfo);
        } catch (ge) {
          on(n, n.return, ge);
        }
        break;
      case 4:
        Fn(r, n), Wa(n);
        break;
      case 13:
        Fn(r, n), Wa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (xc = xt())), o & 4 && zu(n);
        break;
      case 22:
        if (V = l !== null && l.memoizedState !== null, n.mode & 1 ? (Yn = (L = Yn) || V, Fn(r, n), Yn = L) : Fn(r, n), Wa(n), o & 8192) {
          if (L = n.memoizedState !== null, (n.stateNode.isHidden = L) && !V && n.mode & 1) for (pe = n, V = n.child; V !== null; ) {
            for (Y = pe = V; pe !== null; ) {
              switch (H = pe, oe = H.child, H.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mu(4, H, H.return);
                  break;
                case 1:
                  Ou(H, H.return);
                  var ve = H.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    o = H, l = H.return;
                    try {
                      r = o, ve.props = r.memoizedProps, ve.state = r.memoizedState, ve.componentWillUnmount();
                    } catch (ge) {
                      on(o, l, ge);
                    }
                  }
                  break;
                case 5:
                  Ou(H, H.return);
                  break;
                case 22:
                  if (H.memoizedState !== null) {
                    Bv(Y);
                    continue;
                  }
              }
              oe !== null ? (oe.return = H, pe = oe) : Bv(Y);
            }
            V = V.sibling;
          }
          e: for (V = null, Y = n; ; ) {
            if (Y.tag === 5) {
              if (V === null) {
                V = Y;
                try {
                  c = Y.stateNode, L ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = Y.stateNode, C = Y.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = lt("display", h));
                } catch (ge) {
                  on(n, n.return, ge);
                }
              }
            } else if (Y.tag === 6) {
              if (V === null) try {
                Y.stateNode.nodeValue = L ? "" : Y.memoizedProps;
              } catch (ge) {
                on(n, n.return, ge);
              }
            } else if ((Y.tag !== 22 && Y.tag !== 23 || Y.memoizedState === null || Y === n) && Y.child !== null) {
              Y.child.return = Y, Y = Y.child;
              continue;
            }
            if (Y === n) break e;
            for (; Y.sibling === null; ) {
              if (Y.return === null || Y.return === n) break e;
              V === Y && (V = null), Y = Y.return;
            }
            V === Y && (V = null), Y.sibling.return = Y.return, Y = Y.sibling;
          }
        }
        break;
      case 19:
        Fn(r, n), Wa(n), o & 4 && zu(n);
        break;
      case 21:
        break;
      default:
        Fn(
          r,
          n
        ), Wa(n);
    }
  }
  function Wa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (pd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(_(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Da(c, ""), o.flags &= -33);
            var d = Pv(n);
            Lu(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Pv(n);
            Yo(n, S, h);
            break;
          default:
            throw Error(_(161));
        }
      } catch (C) {
        on(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    pe = n, vd(n);
  }
  function vd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || ku;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || Yn;
          S = ku;
          var L = Yn;
          if (ku = h, (Yn = C) && !L) for (pe = c; pe !== null; ) h = pe, C = h.child, h.tag === 22 && h.memoizedState !== null ? hd(c) : C !== null ? (C.return = h, pe = C) : hd(c);
          for (; d !== null; ) pe = d, vd(d), d = d.sibling;
          pe = c, ku = S, Yn = L;
        }
        Uu(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : Uu(n);
    }
  }
  function Uu(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Yn || Cc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Yn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : br(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wv(r, d, o);
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
                wv(r, h, l);
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
                var L = r.alternate;
                if (L !== null) {
                  var V = L.memoizedState;
                  if (V !== null) {
                    var Y = V.dehydrated;
                    Y !== null && po(Y);
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
              throw Error(_(163));
          }
          Yn || r.flags & 512 && Tc(r);
        } catch (H) {
          on(r, r.return, H);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Bv(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function hd(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Cc(4, r);
            } catch (C) {
              on(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                on(r, c, C);
              }
            }
            var d = r.return;
            try {
              Tc(r);
            } catch (C) {
              on(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Tc(r);
            } catch (C) {
              on(r, h, C);
            }
        }
      } catch (C) {
        on(r, r.return, C);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, pe = S;
        break;
      }
      pe = r.return;
    }
  }
  var cy = Math.ceil, Nl = We.ReactCurrentDispatcher, Rc = We.ReactCurrentOwner, pa = We.ReactCurrentBatchConfig, ct = 0, un = null, Qt = null, Dn = 0, kr = 0, Au = at(0), _n = 0, Io = null, zl = 0, ju = 0, md = 0, Gi = null, lr = null, xc = 0, Fu = 1 / 0, yi = null, wc = !1, yd = null, va = null, Hu = !1, ha = null, bc = 0, Qo = 0, Dc = null, Wo = -1, Ul = 0;
  function Hn() {
    return ct & 6 ? xt() : Wo !== -1 ? Wo : Wo = xt();
  }
  function gi(n) {
    return n.mode & 1 ? ct & 2 && Dn !== 0 ? Dn & -Dn : Is.transition !== null ? (Ul === 0 && (Ul = Cs()), Ul) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Rf(n.type)), n) : 1;
  }
  function tn(n, r, l, o) {
    if (50 < Qo) throw Qo = 0, Dc = null, Error(_(185));
    pl(n, l, o), (!(ct & 2) || n !== un) && (n === un && (!(ct & 2) && (ju |= l), _n === 4 && Ga(n, Dn)), kn(n, o), l === 1 && ct === 0 && !(r.mode & 1) && (Fu = xt() + 500, An && Cr()));
  }
  function kn(n, r) {
    var l = n.callbackNode;
    Es(n, r);
    var o = Oa(n, n === un ? Dn : 0);
    if (o === 0) l !== null && Jt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Jt(l), r === 1) n.tag === 0 ? qf(Pu.bind(null, n)) : Gf(Pu.bind(null, n)), If(function() {
        !(ct & 6) && Cr();
      }), l = null;
      else {
        switch (Ef(o)) {
          case 1:
            l = Pr;
            break;
          case 4:
            l = ot;
            break;
          case 16:
            l = Ba;
            break;
          case 536870912:
            l = mf;
            break;
          default:
            l = Ba;
        }
        l = Xv(l, _c.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function _c(n, r) {
    if (Wo = -1, Ul = 0, ct & 6) throw Error(_(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l) return null;
    var o = Oa(n, n === un ? Dn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Oc(n, o);
    else {
      r = o;
      var c = ct;
      ct |= 2;
      var d = Yv();
      (un !== n || Dn !== r) && (yi = null, Fu = xt() + 500, jl(n, r));
      do
        try {
          dy();
          break;
        } catch (S) {
          $v(n, S);
        }
      while (!0);
      Ir(), Nl.current = d, ct = c, Qt !== null ? r = 0 : (un = null, Dn = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gf(n), c !== 0 && (o = c, r = Al(n, c))), r === 1) throw l = Io, jl(n, 0), Ga(n, o), kn(n, xt()), l;
      if (r === 6) Ga(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Sd(c) && (r = Oc(n, o), r === 2 && (d = gf(n), d !== 0 && (o = d, r = Al(n, d))), r === 1)) throw l = Io, jl(n, 0), Ga(n, o), kn(n, xt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            qi(n, lr, yi);
            break;
          case 3:
            if (Ga(n, o), (o & 130023424) === o && (r = xc + 500 - xt(), 10 < r)) {
              if (Oa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = El(qi.bind(null, n, lr, yi), r);
              break;
            }
            qi(n, lr, yi);
            break;
          case 4:
            if (Ga(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - ea(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = xt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = El(qi.bind(null, n, lr, yi), o);
              break;
            }
            qi(n, lr, yi);
            break;
          case 5:
            qi(n, lr, yi);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return kn(n, xt()), n.callbackNode === l ? _c.bind(null, n) : null;
  }
  function Al(n, r) {
    var l = Gi;
    return n.current.memoizedState.isDehydrated && (jl(n, r).flags |= 256), n = Oc(n, r), n !== 2 && (r = lr, lr = l, r !== null && gd(r)), n;
  }
  function gd(n) {
    lr === null ? lr = n : lr.push.apply(lr, n);
  }
  function Sd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ra(d(), c)) return !1;
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
  function Ga(n, r) {
    for (r &= ~md, r &= ~ju, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - ea(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Pu(n) {
    if (ct & 6) throw Error(_(327));
    Vu();
    var r = Oa(n, 0);
    if (!(r & 1)) return kn(n, xt()), null;
    var l = Oc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gf(n);
      o !== 0 && (r = o, l = Al(n, o));
    }
    if (l === 1) throw l = Io, jl(n, 0), Ga(n, r), kn(n, xt()), l;
    if (l === 6) throw Error(_(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, qi(n, lr, yi), kn(n, xt()), null;
  }
  function Ed(n, r) {
    var l = ct;
    ct |= 1;
    try {
      return n(r);
    } finally {
      ct = l, ct === 0 && (Fu = xt() + 500, An && Cr());
    }
  }
  function qa(n) {
    ha !== null && ha.tag === 0 && !(ct & 6) && Vu();
    var r = ct;
    ct |= 1;
    var l = pa.transition, o = Ot;
    try {
      if (pa.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = o, pa.transition = l, ct = r, !(ct & 6) && Cr();
    }
  }
  function kc() {
    kr = Au.current, Rt(Au);
  }
  function jl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, mv(l)), Qt !== null) for (l = Qt.return; l !== null; ) {
      var o = l;
      switch (Kf(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && la();
          break;
        case 3:
          gu(), Rt(an), Rt(Ie), ad();
          break;
        case 5:
          rd(o);
          break;
        case 4:
          gu();
          break;
        case 13:
          Rt(qt);
          break;
        case 19:
          Rt(qt);
          break;
        case 10:
          ed(o.type._context);
          break;
        case 22:
        case 23:
          kc();
      }
      l = l.return;
    }
    if (un = n, Qt = n = Xi(n.current, null), Dn = kr = r, _n = 0, Io = null, md = ju = zl = 0, lr = Gi = null, xl !== null) {
      for (r = 0; r < xl.length; r++) if (l = xl[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        l.pending = o;
      }
      xl = null;
    }
    return n;
  }
  function $v(n, r) {
    do {
      var l = Qt;
      try {
        if (Ir(), Zs.current = ar, Qr) {
          for (var o = Te.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Qr = !1;
        }
        if (Ee = 0, st = Qe = Te = null, Su = !1, Uo = 0, Rc.current = null, l === null || l.return === null) {
          _n = 1, Io = r, Qt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Dn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var L = C, V = S, Y = V.tag;
            if (!(V.mode & 1) && (Y === 0 || Y === 11 || Y === 15)) {
              var H = V.alternate;
              H ? (V.updateQueue = H.updateQueue, V.memoizedState = H.memoizedState, V.lanes = H.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var oe = zv(h);
            if (oe !== null) {
              oe.flags &= -257, sd(oe, h, S, d, r), oe.mode & 1 && Po(d, L, r), r = oe, C = L;
              var ve = r.updateQueue;
              if (ve === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(C), r.updateQueue = ge;
              } else ve.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Po(d, L, r), Go();
                break e;
              }
              C = Error(_(426));
            }
          } else if (It && S.mode & 1) {
            var hn = zv(h);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), sd(hn, h, S, d, r), Jf(Qi(C, S));
              break e;
            }
          }
          d = C = Qi(C, S), _n !== 4 && (_n = 2), Gi === null ? Gi = [d] : Gi.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = Lv(d, C, r);
                xv(d, w);
                break e;
              case 1:
                S = C;
                var R = d.type, O = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (va === null || !va.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Nv(d, S, r);
                  xv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Qv(l);
      } catch (Ce) {
        r = Ce, Qt === l && l !== null && (Qt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yv() {
    var n = Nl.current;
    return Nl.current = ar, n === null ? ar : n;
  }
  function Go() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), un === null || !(zl & 268435455) && !(ju & 268435455) || Ga(un, Dn);
  }
  function Oc(n, r) {
    var l = ct;
    ct |= 2;
    var o = Yv();
    (un !== n || Dn !== r) && (yi = null, jl(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        $v(n, c);
      }
    while (!0);
    if (Ir(), ct = l, Nl.current = o, Qt !== null) throw Error(_(261));
    return un = null, Dn = 0, _n;
  }
  function fy() {
    for (; Qt !== null; ) Iv(Qt);
  }
  function dy() {
    for (; Qt !== null && !gr(); ) Iv(Qt);
  }
  function Iv(n) {
    var r = qv(n.alternate, n, kr);
    n.memoizedProps = n.pendingProps, r === null ? Qv(n) : Qt = r, Rc.current = null;
  }
  function Qv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uy(l, r), l !== null) {
          l.flags &= 32767, Qt = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Qt = null;
          return;
        }
      } else if (l = ly(l, r, kr), l !== null) {
        Qt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Qt = r;
        return;
      }
      Qt = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function qi(n, r, l) {
    var o = Ot, c = pa.transition;
    try {
      pa.transition = null, Ot = 1, py(n, r, l, o);
    } finally {
      pa.transition = c, Ot = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Vu();
    while (ha !== null);
    if (ct & 6) throw Error(_(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(_(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Fm(n, d), n === un && (Qt = un = null, Dn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Hu || (Hu = !0, Xv(Ba, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = pa.transition, pa.transition = null;
      var h = Ot;
      Ot = 1;
      var S = ct;
      ct |= 4, Rc.current = null, oy(n, l), Vv(l, n), zs(Sl), vl = !!$f, Sl = $f = null, n.current = l, sy(l), Ni(), ct = S, Ot = h, pa.transition = d;
    } else n.current = l;
    if (Hu && (Hu = !1, ha = n, bc = c), d = n.pendingLanes, d === 0 && (va = null), Op(l.stateNode), kn(n, xt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wc) throw wc = !1, n = yd, yd = null, n;
    return bc & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === Dc ? Qo++ : (Qo = 0, Dc = n) : Qo = 0, Cr(), null;
  }
  function Vu() {
    if (ha !== null) {
      var n = Ef(bc), r = pa.transition, l = Ot;
      try {
        if (pa.transition = null, Ot = 16 > n ? 16 : n, ha === null) var o = !1;
        else {
          if (n = ha, ha = null, bc = 0, ct & 6) throw Error(_(331));
          var c = ct;
          for (ct |= 4, pe = n.current; pe !== null; ) {
            var d = pe, h = d.child;
            if (pe.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var L = S[C];
                  for (pe = L; pe !== null; ) {
                    var V = pe;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mu(8, V, d);
                    }
                    var Y = V.child;
                    if (Y !== null) Y.return = V, pe = Y;
                    else for (; pe !== null; ) {
                      V = pe;
                      var H = V.sibling, oe = V.return;
                      if (Hv(V), V === L) {
                        pe = null;
                        break;
                      }
                      if (H !== null) {
                        H.return = oe, pe = H;
                        break;
                      }
                      pe = oe;
                    }
                  }
                }
                var ve = d.alternate;
                if (ve !== null) {
                  var ge = ve.child;
                  if (ge !== null) {
                    ve.child = null;
                    do {
                      var hn = ge.sibling;
                      ge.sibling = null, ge = hn;
                    } while (ge !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) h.return = d, pe = h;
            else e: for (; pe !== null; ) {
              if (d = pe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Mu(9, d, d.return);
              }
              var w = d.sibling;
              if (w !== null) {
                w.return = d.return, pe = w;
                break e;
              }
              pe = d.return;
            }
          }
          var R = n.current;
          for (pe = R; pe !== null; ) {
            h = pe;
            var O = h.child;
            if (h.subtreeFlags & 2064 && O !== null) O.return = h, pe = O;
            else e: for (h = R; pe !== null; ) {
              if (S = pe, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cc(9, S);
                }
              } catch (Ce) {
                on(S, S.return, Ce);
              }
              if (S === h) {
                pe = null;
                break e;
              }
              var G = S.sibling;
              if (G !== null) {
                G.return = S.return, pe = G;
                break e;
              }
              pe = S.return;
            }
          }
          if (ct = c, Cr(), ka && typeof ka.onPostCommitFiberRoot == "function") try {
            ka.onPostCommitFiberRoot(uo, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ot = l, pa.transition = r;
      }
    }
    return !1;
  }
  function Wv(n, r, l) {
    r = Qi(l, r), r = Lv(n, r, 1), n = Yi(n, r, 1), r = Hn(), n !== null && (pl(n, 1, r), kn(n, r));
  }
  function on(n, r, l) {
    if (n.tag === 3) Wv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Wv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (va === null || !va.has(o))) {
          n = Qi(l, n), n = Nv(r, n, 1), r = Yi(r, n, 1), n = Hn(), r !== null && (pl(r, 1, n), kn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, un === n && (Dn & l) === l && (_n === 4 || _n === 3 && (Dn & 130023424) === Dn && 500 > xt() - xc ? jl(n, 0) : md |= l), kn(n, r);
  }
  function Gv(n, r) {
    r === 0 && (n.mode & 1 ? (r = tu, tu <<= 1, !(tu & 130023424) && (tu = 4194304)) : r = 1);
    var l = Hn();
    n = vi(n, r), n !== null && (pl(n, r, l), kn(n, l));
  }
  function Cd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Gv(n, l);
  }
  function hy(n, r) {
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
        throw Error(_(314));
    }
    o !== null && o.delete(r), Gv(n, l);
  }
  var qv;
  qv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || an.current) Dr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Dr = !1, mi(n, r, l);
      Dr = !!(n.flags & 131072);
    }
    else Dr = !1, It && r.flags & 1048576 && Xf(r, pu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        $o(n, r), n = r.pendingProps;
        var c = ia(r, Ie.current);
        hu(r, l), c = F(null, r, o, n, c, l);
        var d = Rn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Gt(o) ? (d = !0, Ps(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ws(r), c.updater = Ol, r.stateNode = c, c._reactInternals = r, ud(r, o, n, l), r = hc(null, r, o, !0, d, l)) : (r.tag = 0, It && d && Vs(r), pn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch ($o(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = br(o, n), c) {
            case 0:
              r = et(null, r, o, n, l);
              break e;
            case 1:
              r = Vo(null, r, o, n, l);
              break e;
            case 11:
              r = bu(null, r, o, n, l);
              break e;
            case 14:
              r = Wi(null, r, o, br(o.type, n), l);
              break e;
          }
          throw Error(_(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : br(o, c), et(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : br(o, c), Vo(n, r, o, c, l);
      case 3:
        e: {
          if (iy(r), n === null) throw Error(_(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, mu(n, r), qs(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Qi(Error(_(423)), r), r = Av(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Qi(Error(_(424)), r), r = Av(n, r, o, l, c);
            break e;
          } else for (xr = za(r.stateNode.containerInfo.firstChild), Yr = r, It = !0, oa = null, l = Tv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (en(), o === c) {
              r = vn(n, r, l);
              break e;
            }
            pn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bv(r), n === null && $s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Do(o, c) ? h = null : d !== null && Do(o, d) && (r.flags |= 32), Ml(n, r), pn(n, r, h, l), r.child;
      case 6:
        return n === null && $s(r), null;
      case 13:
        return jv(n, r, l);
      case 4:
        return nd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = vu(r, null, o, l) : pn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : br(o, c), bu(n, r, o, c, l);
      case 7:
        return pn(n, r, r.pendingProps, l), r.child;
      case 8:
        return pn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return pn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, wt(pi, o._currentValue), o._currentValue = h, d !== null) if (ra(d.value, h)) {
            if (d.children === c.children && !an.current) {
              r = vn(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var S = d.dependencies;
            if (S !== null) {
              h = d.child;
              for (var C = S.firstContext; C !== null; ) {
                if (C.context === o) {
                  if (d.tag === 1) {
                    C = wr(-1, l & -l), C.tag = 2;
                    var L = d.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var V = L.pending;
                      V === null ? C.next = C : (C.next = V.next, V.next = C), L.pending = C;
                    }
                  }
                  d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), td(
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
              if (h = d.return, h === null) throw Error(_(341));
              h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), td(h, l, r), h = d.sibling;
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
          pn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, hu(r, l), c = ca(c), o = o(c), r.flags |= 1, pn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = br(o, r.pendingProps), c = br(o.type, c), Wi(n, r, o, c, l);
      case 15:
        return vc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : br(o, c), $o(n, r), r.tag = 1, Gt(o) ? (n = !0, Ps(r)) : n = !1, hu(r, l), kv(r, o, c), ud(r, o, c, l), hc(null, r, o, !0, n, l);
      case 19:
        return fd(n, r, l);
      case 22:
        return _r(n, r, l);
    }
    throw Error(_(156, r.tag));
  };
  function Xv(n, r) {
    return $t(n, r);
  }
  function Kv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ma(n, r, l, o) {
    return new Kv(n, r, l, o);
  }
  function Td(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Td(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === cn) return 11;
      if (n === rn) return 14;
    }
    return 2;
  }
  function Xi(n, r) {
    var l = n.alternate;
    return l === null ? (l = ma(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Mc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Td(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case Ke:
        return Fl(l.children, c, d, r);
      case sn:
        h = 8, c |= 8;
        break;
      case yn:
        return n = ma(12, l, r, c | 2), n.elementType = yn, n.lanes = d, n;
      case He:
        return n = ma(13, l, r, c), n.elementType = He, n.lanes = d, n;
      case tt:
        return n = ma(19, l, r, c), n.elementType = tt, n.lanes = d, n;
      case Kt:
        return Lc(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ht:
            h = 10;
            break e;
          case gt:
            h = 9;
            break e;
          case cn:
            h = 11;
            break e;
          case rn:
            h = 14;
            break e;
          case dt:
            h = 16, o = null;
            break e;
        }
        throw Error(_(130, n == null ? n : typeof n, ""));
    }
    return r = ma(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Fl(n, r, l, o) {
    return n = ma(7, n, o, r), n.lanes = l, n;
  }
  function Lc(n, r, l, o) {
    return n = ma(22, n, o, r), n.elementType = Kt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Nc(n, r, l) {
    return n = ma(6, n, null, r), n.lanes = l, n;
  }
  function qo(n, r, l) {
    return r = ma(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Xo(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sf(0), this.expirationTimes = Sf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rd(n, r, l, o, c, d, h, S, C) {
    return n = new Xo(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ma(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ws(d), n;
  }
  function Zv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: yt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function xd(n) {
    if (!n) return Ya;
    n = n._reactInternals;
    e: {
      if (De(n) !== n || n.tag !== 1) throw Error(_(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Gt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(_(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Gt(l)) return Oo(n, l, r);
    }
    return r;
  }
  function wd(n, r, l, o, c, d, h, S, C) {
    return n = Rd(l, o, !0, n, c, d, h, S, C), n.context = xd(null), l = n.current, o = Hn(), c = gi(l), d = wr(o, c), d.callback = r ?? null, Yi(l, d, c), n.current.lanes = c, pl(n, c, o), kn(n, o), n;
  }
  function zc(n, r, l, o) {
    var c = r.current, d = Hn(), h = gi(c);
    return l = xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = wr(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Yi(c, r, h), n !== null && (tn(n, c, h, d), Gs(n, c, h)), h;
  }
  function Ko(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function bd(n, r) {
    Jv(n, r), (n = n.alternate) && Jv(n, r);
  }
  function yy() {
    return null;
  }
  var Dd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Uc(n) {
    this._internalRoot = n;
  }
  Zo.prototype.render = Uc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(_(409));
    zc(n, r, null, null);
  }, Zo.prototype.unmount = Uc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      qa(function() {
        zc(null, n, null, null);
      }), r[fi] = null;
    }
  };
  function Zo(n) {
    this._internalRoot = n;
  }
  Zo.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = zp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Lt.length && r !== 0 && r < Lt[l].priority; l++) ;
      Lt.splice(l, 0, n), l === 0 && Up(n);
    }
  };
  function Ki(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ac(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function eh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var L = Ko(h);
          d.call(L);
        };
      }
      var h = wd(r, o, n, 0, null, !1, !1, "", eh);
      return n._reactRootContainer = h, n[fi] = h.current, fu(n.nodeType === 8 ? n.parentNode : n), qa(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var L = Ko(C);
        S.call(L);
      };
    }
    var C = Rd(n, 0, !1, null, null, !1, !1, "", eh);
    return n._reactRootContainer = C, n[fi] = C.current, fu(n.nodeType === 8 ? n.parentNode : n), qa(function() {
      zc(r, C, l, o);
    }), C;
  }
  function jc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = Ko(h);
          S.call(C);
        };
      }
      zc(r, h, n, c);
    } else h = gy(l, r, n, c, o);
    return Ko(h);
  }
  Np = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = dl(r.pendingLanes);
          l !== 0 && (oo(r, l | 1), kn(r, xt()), !(ct & 6) && (Fu = xt() + 500, Cr()));
        }
        break;
      case 13:
        qa(function() {
          var o = vi(n, 1);
          if (o !== null) {
            var c = Hn();
            tn(o, n, 1, c);
          }
        }), bd(n, 1);
    }
  }, Ts = function(n) {
    if (n.tag === 13) {
      var r = vi(n, 134217728);
      if (r !== null) {
        var l = Hn();
        tn(r, n, 134217728, l);
      }
      bd(n, 134217728);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = gi(n), l = vi(n, r);
      if (l !== null) {
        var o = Hn();
        tn(l, n, r, o);
      }
      bd(n, r);
    }
  }, zp = function() {
    return Ot;
  }, Cf = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, Fr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Jn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Le(o);
              if (!c) throw Error(_(90));
              Z(o), Jn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Pa(n, l);
        break;
      case "select":
        r = l.value, r != null && Ha(n, !!l.multiple, r, !1);
    }
  }, lo = Ed, gs = qa;
  var Sy = { usingClientEntryPoint: !1, Events: [ko, du, Le, ol, Zl, Ed] }, Jo = { findFiberByHostInstance: aa, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, th = { bundleType: Jo.bundleType, version: Jo.version, rendererPackageName: Jo.rendererPackageName, rendererConfig: Jo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: We.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ut(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Jo.findFiberByHostInstance || yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber) try {
      uo = Fc.inject(th), ka = Fc;
    } catch {
    }
  }
  return Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ta.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(r)) throw Error(_(200));
    return Zv(n, r, null, l);
  }, Ta.createRoot = function(n, r) {
    if (!Ki(n)) throw Error(_(299));
    var l = !1, o = "", c = Dd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rd(n, 1, !1, null, null, l, !1, o, c), n[fi] = r.current, fu(n.nodeType === 8 ? n.parentNode : n), new Uc(r);
  }, Ta.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(_(188)) : (n = Object.keys(n).join(","), Error(_(268, n)));
    return n = ut(r), n = n === null ? null : n.stateNode, n;
  }, Ta.flushSync = function(n) {
    return qa(n);
  }, Ta.hydrate = function(n, r, l) {
    if (!Ac(r)) throw Error(_(200));
    return jc(null, n, r, !0, l);
  }, Ta.hydrateRoot = function(n, r, l) {
    if (!Ki(n)) throw Error(_(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Dd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = wd(r, null, n, 1, l ?? null, c, !1, d, h), n[fi] = r.current, fu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Zo(r);
  }, Ta.render = function(n, r, l) {
    if (!Ac(r)) throw Error(_(200));
    return jc(null, n, r, !1, l);
  }, Ta.unmountComponentAtNode = function(n) {
    if (!Ac(n)) throw Error(_(40));
    return n._reactRootContainer ? (qa(function() {
      jc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[fi] = null;
      });
    }), !0) : !1;
  }, Ta.unstable_batchedUpdates = Ed, Ta.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ac(l)) throw Error(_(200));
    if (n == null || n._reactInternals === void 0) throw Error(_(38));
    return jc(n, r, l, !1, o);
  }, Ta.version = "18.3.1-next-f1338f8080-20240426", Ta;
}
var Ra = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function D_() {
  return pT || (pT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var z = Am, fe = bT(), _ = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Se = !1;
    function Ue(e) {
      Se = e;
    }
    function ae(e) {
      if (!Se) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ye("warn", e, a);
      }
    }
    function y(e) {
      if (!Se) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ye("error", e, a);
      }
    }
    function ye(e, t, a) {
      {
        var i = _.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var q = 0, W = 1, ue = 2, $ = 3, J = 4, K = 5, xe = 6, Ae = 7, Xe = 8, Tt = 9, it = 10, ke = 11, We = 12, P = 13, yt = 14, Ke = 15, sn = 16, yn = 17, Ht = 18, gt = 19, cn = 21, He = 22, tt = 23, rn = 24, dt = 25, Kt = !0, X = !1, we = !1, k = !1, Q = !1, de = !0, Ne = !1, Oe = !0, nt = !0, be = !0, Be = !0, $e = /* @__PURE__ */ new Set(), Ze = {}, rt = {};
    function Dt(e, t) {
      Z(e, t), Z(e + "Capture", t);
    }
    function Z(e, t) {
      Ze[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ze[e] = t;
      {
        var a = e.toLowerCase();
        rt[a] = e, e === "onDoubleClick" && (rt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        $e.add(t[i]);
    }
    var _t = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fn = Object.prototype.hasOwnProperty;
    function gn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Vn(e) {
      try {
        return Jn(e), !1;
      } catch {
        return !0;
      }
    }
    function Jn(e) {
      return "" + e;
    }
    function Jr(e, t) {
      if (Vn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, gn(e)), Jn(e);
    }
    function xa(e) {
      if (Vn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gn(e)), Jn(e);
    }
    function ri(e, t) {
      if (Vn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, gn(e)), Jn(e);
    }
    function Ha(e, t) {
      if (Vn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, gn(e)), Jn(e);
    }
    function wa(e) {
      if (Vn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", gn(e)), Jn(e);
    }
    function Ur(e) {
      if (Vn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", gn(e)), Jn(e);
    }
    var Pa = 0, Ar = 1, ba = 2, Sn = 3, jr = 4, Mi = 5, Da = 6, re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Me = re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + re + "][" + Me + "]*$"), kt = {}, Zt = {};
    function Ln(e) {
      return fn.call(Zt, e) ? !0 : fn.call(kt, e) ? !1 : lt.test(e) ? (Zt[e] = !0, !0) : (kt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === Pa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function yr(e, t, a, i) {
      if (a !== null && a.type === Pa)
        return !1;
      switch (typeof t) {
        case "function":
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
    function Pt(e, t, a, i) {
      if (t === null || typeof t > "u" || yr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Sn:
            return !t;
          case jr:
            return t === !1;
          case Mi:
            return isNaN(t);
          case Da:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Fr(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function jt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ba || t === Sn || t === jr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, Kl = [
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
    Kl.forEach(function(e) {
      Vt[e] = new jt(
        e,
        Pa,
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
      Vt[t] = new jt(
        t,
        Ar,
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
      Vt[e] = new jt(
        e,
        ba,
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
      Vt[e] = new jt(
        e,
        ba,
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
      Vt[e] = new jt(
        e,
        Sn,
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
      Vt[e] = new jt(
        e,
        Sn,
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
      Vt[e] = new jt(
        e,
        jr,
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
      Vt[e] = new jt(
        e,
        Da,
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
      Vt[e] = new jt(
        e,
        Mi,
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
    var ol = /[\-\:]([a-z])/g, Zl = function(e) {
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
      var t = e.replace(ol, Zl);
      Vt[t] = new jt(
        t,
        Ar,
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
      var t = e.replace(ol, Zl);
      Vt[t] = new jt(
        t,
        Ar,
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
      var t = e.replace(ol, Zl);
      Vt[t] = new jt(
        t,
        Ar,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        Ar,
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
    var lo = "xlinkHref";
    Vt[lo] = new jt(
      "xlinkHref",
      Ar,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new jt(
        e,
        Ar,
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
    var gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, sl = !1;
    function Jl(e) {
      !sl && gs.test(e) && (sl = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function cl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Jr(a, t), i.sanitizeURL && Jl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === jr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Pt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Pt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Sn)
            return a;
          f = e.getAttribute(s);
        }
        return Pt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function eu(e, t, a, i) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Jr(a, t), u === "" + a ? a : u;
      }
    }
    function Va(e, t, a, i) {
      var u = Fr(t);
      if (!dn(t, u, i)) {
        if (Pt(t, a, u, i) && (a = null), i || u === null) {
          if (Ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Jr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Sn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var x = u.type, T;
          x === Sn || x === jr && a === !0 ? T = "" : (Jr(a, m), T = "" + a, u.sanitizeURL && Jl(T.toString())), g ? e.setAttributeNS(g, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var ai = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), _a = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), B = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), pt = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), ut = Symbol.for("react.scope"), Nn = Symbol.for("react.debug_trace_mode"), $t = Symbol.for("react.offscreen"), Jt = Symbol.for("react.legacy_hidden"), gr = Symbol.for("react.cache"), Ni = Symbol.for("react.tracing_marker"), xt = Symbol.iterator, er = "@@iterator";
    function Pr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = xt && e[xt] || e[er];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, Ba = 0, kp, mf, uo, ka, Op, ea, Mp;
    function Lp() {
    }
    Lp.__reactDisabledLog = !0;
    function jm() {
      {
        if (Ba === 0) {
          kp = console.log, mf = console.info, uo = console.warn, ka = console.error, Op = console.group, ea = console.groupCollapsed, Mp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Lp,
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
        Ba++;
      }
    }
    function Ss() {
      {
        if (Ba--, Ba === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: kp
            }),
            info: ot({}, e, {
              value: mf
            }),
            warn: ot({}, e, {
              value: uo
            }),
            error: ot({}, e, {
              value: ka
            }),
            group: ot({}, e, {
              value: Op
            }),
            groupCollapsed: ot({}, e, {
              value: ea
            }),
            groupEnd: ot({}, e, {
              value: Mp
            })
          });
        }
        Ba < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tu = _.ReactCurrentDispatcher, dl;
    function Oa(e, t, a) {
      {
        if (dl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            dl = i && i[1] || "";
          }
        return `
` + dl + e;
      }
    }
    var yf = !1, Es;
    {
      var gf = typeof WeakMap == "function" ? WeakMap : Map;
      Es = new gf();
    }
    function Cs(e, t) {
      if (!e || yf)
        return "";
      {
        var a = Es.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      yf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = tu.current, tu.current = null, jm();
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
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, g = v.length - 1; m >= 1 && g >= 0 && p[m] !== v[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (p[m] !== v[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || p[m] !== v[g]) {
                    var x = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Es.set(e, x), x;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        yf = !1, tu.current = s, Ss(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", M = T ? Oa(T) : "";
      return typeof e == "function" && Es.set(e, M), M;
    }
    function Sf(e, t, a) {
      return Cs(e, !0);
    }
    function pl(e, t, a) {
      return Cs(e, !1);
    }
    function Fm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function oo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Cs(e, Fm(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case De:
          return Oa("Suspense");
        case pt:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            return pl(e.render);
          case mt:
            return oo(e.type, t, a);
          case Pe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return oo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ot(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return Oa(e.type);
        case sn:
          return Oa("Lazy");
        case P:
          return Oa("Suspense");
        case gt:
          return Oa("SuspenseList");
        case q:
        case ue:
        case Ke:
          return pl(e.type);
        case ke:
          return pl(e.type.render);
        case W:
          return Sf(e.type);
        default:
          return "";
      }
    }
    function Ef(e) {
      try {
        var t = "", a = e;
        do
          t += Ot(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Np(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ts(e) {
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
        case _a:
          return "Fragment";
        case Hr:
          return "Portal";
        case fl:
          return "Profiler";
        case Li:
          return "StrictMode";
        case De:
          return "Suspense";
        case pt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            var t = e;
            return Ts(t) + ".Consumer";
          case E:
            var a = e;
            return Ts(a._context) + ".Provider";
          case ee:
            return Np(e, e.render, "ForwardRef");
          case mt:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case Pe: {
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
    function zp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Cf(e) {
      return e.displayName || "Context";
    }
    function Je(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case rn:
          return "Cache";
        case Tt:
          var i = a;
          return Cf(i) + ".Consumer";
        case it:
          var u = a;
          return Cf(u._context) + ".Provider";
        case Ht:
          return "DehydratedFragment";
        case ke:
          return zp(a, a.render, "ForwardRef");
        case Ae:
          return "Fragment";
        case K:
          return a;
        case J:
          return "Portal";
        case $:
          return "Root";
        case xe:
          return "Text";
        case sn:
          return Mt(a);
        case Xe:
          return a === Li ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case We:
          return "Profiler";
        case cn:
          return "Scope";
        case P:
          return "Suspense";
        case gt:
          return "SuspenseList";
        case dt:
          return "TracingMarker";
        case W:
        case q:
        case yn:
        case ue:
        case yt:
        case Ke:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var so = _.ReactDebugCurrentFrame, En = null, ta = !1;
    function na() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return Je(e);
      }
      return null;
    }
    function co() {
      return En === null ? "" : Ef(En);
    }
    function wn() {
      so.getCurrentStack = null, En = null, ta = !1;
    }
    function Lt(e) {
      so.getCurrentStack = e === null ? null : co, En = e, ta = !1;
    }
    function Hm() {
      return En;
    }
    function Ma(e) {
      ta = e;
    }
    function tr(e) {
      return "" + e;
    }
    function zi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ur(e), e;
        default:
          return "";
      }
    }
    var Up = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function nu(e, t) {
      Up[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ap(e) {
      return e._valueTracker;
    }
    function fo(e) {
      e._valueTracker = null;
    }
    function po(e) {
      var t = "";
      return e && (Tf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ru(e) {
      var t = Tf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Ur(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Ur(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Ur(p), i = "" + p;
          },
          stopTracking: function() {
            fo(e), delete e[t];
          }
        };
        return f;
      }
    }
    function vl(e) {
      Ap(e) || (e._valueTracker = ru(e));
    }
    function jp(e) {
      if (!e)
        return !1;
      var t = Ap(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = po(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Rs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var xs = !1, vo = !1, ws = !1, Rf = !1;
    function ii(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ho(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function mo(e, t) {
      nu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !vo && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", na() || "A component", t.type), vo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xs && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", na() || "A component", t.type), xs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: zi(t.value != null ? t.value : i),
        controlled: ii(t)
      };
    }
    function xf(e, t) {
      var a = e, i = t.checked;
      i != null && Va(a, "checked", i, !1);
    }
    function au(e, t) {
      var a = e;
      {
        var i = ii(t);
        !a._wrapperState.controlled && i && !Rf && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rf = !0), a._wrapperState.controlled && !i && !ws && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ws = !0);
      }
      xf(e, t);
      var u = zi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = tr(u)) : a.value !== tr(u) && (a.value = tr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ui(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ui(a, t.type, zi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function yo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Fp(e, t) {
      var a = e;
      au(a, t), Vr(a, t);
    }
    function Vr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Jr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = gh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            jp(f), au(f, p);
          }
        }
      }
    }
    function Ui(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Rs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = tr(e._wrapperState.initialValue) : e.defaultValue !== tr(a) && (e.defaultValue = tr(a)));
    }
    var bs = !1, iu = !1, Hp = !1;
    function Ds(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || iu || (iu = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Hp || (Hp = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !bs && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), bs = !0);
    }
    function wf(e, t) {
      t.value != null && e.setAttribute("value", tr(zi(t.value)));
    }
    var go = Array.isArray;
    function zn(e) {
      return go(e);
    }
    var _s;
    _s = !1;
    function Pp() {
      var e = na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vp = ["value", "defaultValue"];
    function Pm(e) {
      {
        nu("select", e);
        for (var t = 0; t < Vp.length; t++) {
          var a = Vp[t];
          if (e[a] != null) {
            var i = zn(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Pp()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Pp());
          }
        }
      }
    }
    function Ai(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = tr(zi(a)), x = null, T = 0; T < u.length; T++) {
          if (u[T].value === g) {
            u[T].selected = !0, i && (u[T].defaultSelected = !0);
            return;
          }
          x === null && !u[T].disabled && (x = u[T]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function bf(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Bp(e, t) {
      var a = e;
      Pm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_s && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _s = !0);
    }
    function Vm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ai(a, !!t.multiple, i, !1) : t.defaultValue != null && Ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function Bm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ai(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ai(a, !!t.multiple, t.defaultValue, !0) : Ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function $m(e, t) {
      var a = e, i = t.value;
      i != null && Ai(a, !!t.multiple, i, !1);
    }
    var Df = !1;
    function _f(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function $p(e, t) {
      var a = e;
      nu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Df && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", na() || "A component"), Df = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (zn(u)) {
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
        initialValue: zi(i)
      };
    }
    function Yp(e, t) {
      var a = e, i = zi(t.value), u = zi(t.defaultValue);
      if (i != null) {
        var s = tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = tr(u));
    }
    function Ip(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function kf(e, t) {
      Yp(e, t);
    }
    var li = "http://www.w3.org/1999/xhtml", Ym = "http://www.w3.org/1998/Math/MathML", Of = "http://www.w3.org/2000/svg";
    function ks(e) {
      switch (e) {
        case "svg":
          return Of;
        case "math":
          return Ym;
        default:
          return li;
      }
    }
    function Mf(e, t) {
      return e == null || e === li ? ks(t) : e === Of && t === "foreignObject" ? li : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Os, Qp = Im(function(e, t) {
      if (e.namespaceURI === Of && !("innerHTML" in e)) {
        Os = Os || document.createElement("div"), Os.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Os.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Sr = 1, ui = 3, Cn = 8, La = 9, hl = 11, Ms = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ui) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Wp = {
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
    }, lu = {
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
    function Gp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(lu).forEach(function(e) {
      qp.forEach(function(t) {
        lu[Gp(t, e)] = lu[e];
      });
    });
    function Ls(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(lu.hasOwnProperty(e) && lu[e]) ? t + "px" : (Ha(t, e), ("" + t).trim());
    }
    var uu = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(uu, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var Xp = function() {
    };
    {
      var Kp = /^(?:webkit|moz|o)[A-Z]/, Zp = /^-ms-/, So = /-(.)/g, ou = /;\s*$/, su = {}, cu = {}, Jp = !1, Lf = !1, Nf = function(e) {
        return e.replace(So, function(t, a) {
          return a.toUpperCase();
        });
      }, zf = function(e) {
        su.hasOwnProperty(e) && su[e] || (su[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Nf(e.replace(Zp, "ms-"))
        ));
      }, ev = function(e) {
        su.hasOwnProperty(e) && su[e] || (su[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, tv = function(e, t) {
        cu.hasOwnProperty(t) && cu[t] || (cu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ou, "")));
      }, nv = function(e, t) {
        Jp || (Jp = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        Lf || (Lf = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xp = function(e, t) {
        e.indexOf("-") > -1 ? zf(e) : Kp.test(e) ? ev(e) : ou.test(t) && tv(e, t), typeof t == "number" && (isNaN(t) ? nv(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var qm = Xp;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += Ls(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function rv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || qm(i, t[i]);
          var s = Ls(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Km(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ra(e) {
      var t = {};
      for (var a in e)
        for (var i = Wp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Eo(e, t) {
      {
        if (!t)
          return;
        var a = ra(e), i = ra(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Km(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var av = {
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
    }, iv = ot({
      menuitem: !0
    }, av), lv = "__html";
    function Ns(e, t) {
      if (t) {
        if (iv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(lv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function oi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var zs = {
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
    }, uv = {
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
    }, Na = {}, Uf = new RegExp("^(aria)-[" + Me + "]*$"), Co = new RegExp("^(aria)[A-Z][" + Me + "]*$");
    function Af(e, t) {
      {
        if (fn.call(Na, t) && Na[t])
          return !0;
        if (Co.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = uv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Na[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Na[t] = !0, !0;
        }
        if (Uf.test(t)) {
          var u = t.toLowerCase(), s = uv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Na[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Na[t] = !0, !0;
        }
      }
      return !0;
    }
    function ov(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Af(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Us(e, t) {
      oi(e, t) || ov(e, t);
    }
    var ml = !1;
    function jf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ml && (ml = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ff = function() {
    };
    {
      var Un = {}, Hf = /^on./, sv = /^on[^A-Z]/, cv = new RegExp("^(aria)-[" + Me + "]*$"), fv = new RegExp("^(aria)[A-Z][" + Me + "]*$");
      Ff = function(e, t, a, i) {
        if (fn.call(Un, t) && Un[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Un[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Un[t] = !0, !0;
          if (Hf.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Un[t] = !0, !0;
        } else if (Hf.test(t))
          return sv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Un[t] = !0, !0;
        if (cv.test(t) || fv.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Un[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Un[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Un[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Un[t] = !0, !0;
        var v = Fr(t), m = v !== null && v.type === Pa;
        if (zs.hasOwnProperty(u)) {
          var g = zs[u];
          if (g !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Un[t] = !0, !0;
        } else if (!m && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Un[t] = !0, !0;
        return typeof a == "boolean" && yr(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Un[t] = !0, !0) : m ? !0 : yr(t, a, v, !1) ? (Un[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Sn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Un[t] = !0), !0);
      };
    }
    var dv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Ff(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function pv(e, t, a) {
      oi(e, t) || dv(e, t, a);
    }
    var si = 1, To = 2, yl = 4, Zm = si | To | yl, Ro = null;
    function xo(e) {
      Ro !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ro = e;
    }
    function Jm() {
      Ro === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ro = null;
    }
    function vv(e) {
      return e === Ro;
    }
    function As(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ui ? t.parentNode : t;
    }
    var Ft = null, ji = null, ci = null;
    function fu(e) {
      var t = Yu(e);
      if (t) {
        if (typeof Ft != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = gh(a);
          Ft(t.stateNode, t.type, i);
        }
      }
    }
    function hv(e) {
      Ft = e;
    }
    function js(e) {
      ji ? ci ? ci.push(e) : ci = [e] : ji = e;
    }
    function wo() {
      return ji !== null || ci !== null;
    }
    function bo() {
      if (ji) {
        var e = ji, t = ci;
        if (ji = null, ci = null, fu(e), t)
          for (var a = 0; a < t.length; a++)
            fu(t[a]);
      }
    }
    var gl = function(e, t) {
      return e(t);
    }, Pf = function() {
    }, Vf = !1;
    function ey() {
      var e = wo();
      e && (Pf(), bo());
    }
    function Bf(e, t, a) {
      if (Vf)
        return e(t, a);
      Vf = !0;
      try {
        return gl(e, t, a);
      } finally {
        Vf = !1, ey();
      }
    }
    function Fs(e, t, a) {
      gl = e, Pf = a;
    }
    function Hs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function $f(e, t, a) {
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
          return !!(a.disabled && Hs(t));
        default:
          return !1;
      }
    }
    function Sl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = gh(a);
      if (i === null)
        return null;
      var u = i[t];
      if ($f(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Do = !1;
    if (_t)
      try {
        var El = {};
        Object.defineProperty(El, "passive", {
          get: function() {
            Do = !0;
          }
        }), window.addEventListener("test", El, El), window.removeEventListener("test", El, El);
      } catch {
        Do = !1;
      }
    function mv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (g) {
        this.onError(g);
      }
    }
    var Yf = mv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var If = document.createElement("react");
      Yf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, T = !0, M = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function U() {
          If.removeEventListener(A, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ie = Array.prototype.slice.call(arguments, 3);
        function ze() {
          x = !0, U(), a.apply(i, ie), T = !1;
        }
        var Re, ht = !1, ft = !1;
        function b(D) {
          if (Re = D.error, ht = !0, Re === null && D.colno === 0 && D.lineno === 0 && (ft = !0), D.defaultPrevented && Re != null && typeof Re == "object")
            try {
              Re._suppressLogging = !0;
            } catch {
            }
        }
        var A = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", b), If.addEventListener(A, ze, !1), g.initEvent(A, !1, !1), If.dispatchEvent(g), N && Object.defineProperty(window, "event", N), x && T && (ht ? ft && (Re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Re)), window.removeEventListener("error", b), !x)
          return U(), mv.apply(this, arguments);
      };
    }
    var ty = Yf, Fi = !1, za = null, _o = !1, Hi = null, $a = {
      onError: function(e) {
        Fi = !0, za = e;
      }
    };
    function Cl(e, t, a, i, u, s, f, p, v) {
      Fi = !1, za = null, ty.apply($a, arguments);
    }
    function fi(e, t, a, i, u, s, f, p, v) {
      if (Cl.apply(this, arguments), Fi) {
        var m = Wf();
        _o || (_o = !0, Hi = m);
      }
    }
    function Qf() {
      if (_o) {
        var e = Hi;
        throw _o = !1, Hi = null, e;
      }
    }
    function ny() {
      return Fi;
    }
    function Wf() {
      if (Fi) {
        var e = za;
        return Fi = !1, za = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function aa(e) {
      return e._reactInternals;
    }
    function ko(e) {
      return e._reactInternals !== void 0;
    }
    function du(e, t) {
      e._reactInternals = t;
    }
    var Le = (
      /*                      */
      0
    ), Pi = (
      /*                */
      1
    ), Yt = (
      /*                    */
      2
    ), at = (
      /*                       */
      4
    ), Rt = (
      /*                */
      16
    ), wt = (
      /*                 */
      32
    ), Ya = (
      /*                     */
      64
    ), Ie = (
      /*                   */
      128
    ), an = (
      /*            */
      256
    ), Er = (
      /*                          */
      512
    ), ia = (
      /*                     */
      1024
    ), Gt = (
      /*                      */
      2048
    ), la = (
      /*                    */
      4096
    ), Vi = (
      /*                   */
      8192
    ), Oo = (
      /*             */
      16384
    ), Ps = Gt | at | Ya | Er | ia | Oo, yv = (
      /*               */
      32767
    ), Br = (
      /*                   */
      32768
    ), An = (
      /*                */
      65536
    ), Mo = (
      /* */
      131072
    ), Gf = (
      /*                       */
      1048576
    ), qf = (
      /*                    */
      2097152
    ), Cr = (
      /*                 */
      4194304
    ), Bi = (
      /*                */
      8388608
    ), Tr = (
      /*               */
      16777216
    ), Tl = (
      /*              */
      33554432
    ), pu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      at | ia | 0
    ), Rr = Yt | at | Rt | wt | Er | la | Vi, nr = at | Ya | Er | Vi, ua = Gt | Rt, Bn = Cr | Bi | qf, di = _.ReactCurrentOwner;
    function $r(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Yt | la)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function Xf(e) {
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
    function Vs(e) {
      return e.tag === $ ? e.stateNode.containerInfo : null;
    }
    function Kf(e) {
      return $r(e) === e;
    }
    function Yr(e) {
      {
        var t = di.current;
        if (t !== null && t.tag === W) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Je(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = aa(e);
      return u ? $r(u) === u : !1;
    }
    function xr(e) {
      if ($r(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function It(e) {
      var t = e.alternate;
      if (!t) {
        var a = $r(e);
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
              return xr(s), e;
            if (v === u)
              return xr(s), t;
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
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function oa(e) {
      var t = It(e);
      return t !== null ? Zf(t) : null;
    }
    function Zf(e) {
      if (e.tag === K || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Zf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function gv(e) {
      var t = It(e);
      return t !== null ? Bs(t) : null;
    }
    function Bs(e) {
      if (e.tag === K || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== J) {
          var a = Bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var $s = fe.unstable_scheduleCallback, Sv = fe.unstable_cancelCallback, Ys = fe.unstable_shouldYield, Ev = fe.unstable_requestPaint, en = fe.unstable_now, Jf = fe.unstable_getCurrentPriorityLevel, Is = fe.unstable_ImmediatePriority, Rl = fe.unstable_UserBlockingPriority, Ia = fe.unstable_NormalPriority, Cv = fe.unstable_LowPriority, Qs = fe.unstable_IdlePriority, vu = fe.unstable_yieldValue, Tv = fe.unstable_setDisableYieldValue, pi = null, bn = null, te = null, sa = !1, Ir = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ed(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        nt && (e = ot({}, e, {
          getLaneLabelMap: vi,
          injectProfilingHooks: Rv
        })), pi = t.inject(e), bn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function td(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(pi, e, t);
        } catch (a) {
          sa || (sa = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function hu(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ie) === Ie;
          if (be) {
            var i;
            switch (t) {
              case vn:
                i = Is;
                break;
              case mi:
                i = Rl;
                break;
              case Qa:
                i = Ia;
                break;
              case Du:
                i = Qs;
                break;
              default:
                i = Ia;
                break;
            }
            bn.onCommitFiberRoot(pi, e, i, a);
          }
        } catch (u) {
          sa || (sa = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function ca(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(pi, e);
        } catch (t) {
          sa || (sa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function xl(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(pi, e);
        } catch (t) {
          sa || (sa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof vu == "function" && (Tv(e), Ue(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(pi, e);
        } catch (t) {
          sa || (sa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Rv(e) {
      te = e;
    }
    function vi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ao; a++) {
          var i = ay(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $i(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Ws() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function mu(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function wr() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Yi(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Gs() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function xv(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function qs() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function wv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function Lo() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Ua(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function yu() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function No(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function wl(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function nd(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function gu() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function bv(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function rd() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function qt(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function Xs() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function Ks() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function ad(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function Zs(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function zo(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Ee = (
      /*                         */
      0
    ), Te = (
      /*                 */
      1
    ), Qe = (
      /*                    */
      2
    ), st = (
      /*               */
      8
    ), Qr = (
      /*              */
      16
    ), Su = Math.clz32 ? Math.clz32 : rr, Uo = Math.log, ry = Math.LN2;
    function rr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Uo(t) / ry | 0) | 0;
    }
    var Ao = 31, F = (
      /*                        */
      0
    ), Rn = (
      /*                          */
      0
    ), _e = (
      /*                        */
      1
    ), $n = (
      /*    */
      2
    ), Wr = (
      /*             */
      4
    ), hi = (
      /*            */
      8
    ), fa = (
      /*                     */
      16
    ), Eu = (
      /*                */
      32
    ), bl = (
      /*                       */
      4194240
    ), Cu = (
      /*                        */
      64
    ), Js = (
      /*                        */
      128
    ), ec = (
      /*                        */
      256
    ), tc = (
      /*                        */
      512
    ), nc = (
      /*                        */
      1024
    ), rc = (
      /*                        */
      2048
    ), Dl = (
      /*                        */
      4096
    ), ac = (
      /*                        */
      8192
    ), Tu = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), ic = (
      /*                       */
      65536
    ), jo = (
      /*                       */
      131072
    ), lc = (
      /*                       */
      262144
    ), uc = (
      /*                       */
      524288
    ), oc = (
      /*                       */
      1048576
    ), sc = (
      /*                       */
      2097152
    ), xu = (
      /*                            */
      130023424
    ), _l = (
      /*                             */
      4194304
    ), cc = (
      /*                             */
      8388608
    ), fc = (
      /*                             */
      16777216
    ), id = (
      /*                             */
      33554432
    ), dc = (
      /*                             */
      67108864
    ), Dv = _l, Fo = (
      /*          */
      134217728
    ), ld = (
      /*                          */
      268435455
    ), wu = (
      /*               */
      268435456
    ), Ii = (
      /*                        */
      536870912
    ), ar = (
      /*                   */
      1073741824
    );
    function ay(e) {
      {
        if (e & _e)
          return "Sync";
        if (e & $n)
          return "InputContinuousHydration";
        if (e & Wr)
          return "InputContinuous";
        if (e & hi)
          return "DefaultHydration";
        if (e & fa)
          return "Default";
        if (e & Eu)
          return "TransitionHydration";
        if (e & bl)
          return "Transition";
        if (e & xu)
          return "Retry";
        if (e & Fo)
          return "SelectiveHydration";
        if (e & wu)
          return "IdleHydration";
        if (e & Ii)
          return "Idle";
        if (e & ar)
          return "Offscreen";
      }
    }
    var Bt = -1, pc = Cu, br = _l;
    function kl(e) {
      switch (pn(e)) {
        case _e:
          return _e;
        case $n:
          return $n;
        case Wr:
          return Wr;
        case hi:
          return hi;
        case fa:
          return fa;
        case Eu:
          return Eu;
        case Cu:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case Dl:
        case ac:
        case Tu:
        case Ru:
        case ic:
        case jo:
        case lc:
        case uc:
        case oc:
        case sc:
          return e & bl;
        case _l:
        case cc:
        case fc:
        case id:
        case dc:
          return e & xu;
        case Fo:
          return Fo;
        case wu:
          return wu;
        case Ii:
          return Ii;
        case ar:
          return ar;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ol(e, t) {
      var a = e.pendingLanes;
      if (a === F)
        return F;
      var i = F, u = e.suspendedLanes, s = e.pingedLanes, f = a & ld;
      if (f !== F) {
        var p = f & ~u;
        if (p !== F)
          i = kl(p);
        else {
          var v = f & s;
          v !== F && (i = kl(v));
        }
      } else {
        var m = a & ~u;
        m !== F ? i = kl(m) : s !== F && (i = kl(s));
      }
      if (i === F)
        return F;
      if (t !== F && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === F) {
        var g = pn(i), x = pn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === fa && (x & bl) !== F
        )
          return t;
      }
      (i & Wr) !== F && (i |= a & fa);
      var T = e.entangledLanes;
      if (T !== F)
        for (var M = e.entanglements, N = i & T; N > 0; ) {
          var U = Wi(N), ie = 1 << U;
          i |= M[U], N &= ~ie;
        }
      return i;
    }
    function _v(e, t) {
      for (var a = e.eventTimes, i = Bt; t > 0; ) {
        var u = Wi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kv(e, t) {
      switch (e) {
        case _e:
        case $n:
        case Wr:
          return t + 250;
        case hi:
        case fa:
        case Eu:
        case Cu:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case Dl:
        case ac:
        case Tu:
        case Ru:
        case ic:
        case jo:
        case lc:
        case uc:
        case oc:
        case sc:
          return t + 5e3;
        case _l:
        case cc:
        case fc:
        case id:
        case dc:
          return Bt;
        case Fo:
        case wu:
        case Ii:
        case ar:
          return Bt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Bt;
      }
    }
    function Ov(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p, m = s[p];
        m === Bt ? ((v & i) === F || (v & u) !== F) && (s[p] = kv(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ud(e) {
      return kl(e.pendingLanes);
    }
    function Qi(e) {
      var t = e.pendingLanes & ~ar;
      return t !== F ? t : t & ar ? ar : F;
    }
    function od(e) {
      return (e & _e) !== F;
    }
    function Ho(e) {
      return (e & ld) !== F;
    }
    function Mv(e) {
      return (e & xu) === e;
    }
    function Lv(e) {
      var t = _e | Wr | fa;
      return (e & t) === F;
    }
    function Nv(e) {
      return (e & bl) === e;
    }
    function Po(e, t) {
      var a = $n | Wr | hi | fa;
      return (t & a) !== F;
    }
    function zv(e, t) {
      return (t & e.expiredLanes) !== F;
    }
    function sd(e) {
      return (e & bl) !== F;
    }
    function Uv() {
      var e = pc;
      return pc <<= 1, (pc & bl) === F && (pc = Cu), e;
    }
    function Dr() {
      var e = br;
      return br <<= 1, (br & xu) === F && (br = _l), e;
    }
    function pn(e) {
      return e & -e;
    }
    function bu(e) {
      return pn(e);
    }
    function Wi(e) {
      return 31 - Su(e);
    }
    function vc(e) {
      return Wi(e);
    }
    function _r(e, t) {
      return (e & t) !== F;
    }
    function Ml(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      return e & ~t;
    }
    function hc(e, t) {
      return e & t;
    }
    function iy(e) {
      return e;
    }
    function Av(e, t) {
      return e !== Rn && e < t ? e : t;
    }
    function Bo(e) {
      for (var t = [], a = 0; a < Ao; a++)
        t.push(e);
      return t;
    }
    function Ll(e, t, a) {
      e.pendingLanes |= t, t !== Ii && (e.suspendedLanes = F, e.pingedLanes = F);
      var i = e.eventTimes, u = vc(t);
      i[u] = a;
    }
    function jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Wi(i), s = 1 << u;
        a[u] = Bt, i &= ~s;
      }
    }
    function mc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function yc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = F, e.pingedLanes = F, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p;
        i[p] = F, u[p] = Bt, s[p] = Bt, f &= ~v;
      }
    }
    function cd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Wi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Fv(e, t) {
      var a = pn(t), i;
      switch (a) {
        case Wr:
          i = $n;
          break;
        case fa:
          i = hi;
          break;
        case Cu:
        case Js:
        case ec:
        case tc:
        case nc:
        case rc:
        case Dl:
        case ac:
        case Tu:
        case Ru:
        case ic:
        case jo:
        case lc:
        case uc:
        case oc:
        case sc:
        case _l:
        case cc:
        case fc:
        case id:
        case dc:
          i = Eu;
          break;
        case Ii:
          i = wu;
          break;
        default:
          i = Rn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Rn ? Rn : i;
    }
    function gc(e, t, a) {
      if (Ir)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function fd(e, t) {
      if (Ir)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function $o(e, t) {
      return null;
    }
    var vn = _e, mi = Wr, Qa = fa, Du = Ii, _u = Rn;
    function da() {
      return _u;
    }
    function ln(e) {
      _u = e;
    }
    function ir(e, t) {
      var a = _u;
      try {
        return _u = e, t();
      } finally {
        _u = a;
      }
    }
    function ly(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
      return e > t ? e : t;
    }
    function ku(e, t) {
      return e !== 0 && e < t;
    }
    function Yn(e) {
      var t = pn(e);
      return ku(vn, t) ? ku(mi, t) ? Ho(t) ? Qa : Du : mi : vn;
    }
    function Sc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var pe;
    function Ou(e) {
      pe = e;
    }
    function dd(e) {
      pe(e);
    }
    var Ec;
    function oy(e) {
      Ec = e;
    }
    var Mu;
    function Cc(e) {
      Mu = e;
    }
    var Tc;
    function Hv(e) {
      Tc = e;
    }
    var pd;
    function Pv(e) {
      pd = e;
    }
    var Yo = !1, Lu = [], Xt = null, jn = null, ur = null, Nu = /* @__PURE__ */ new Map(), zu = /* @__PURE__ */ new Map(), Fn = [], Vv = [
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
    function Wa(e) {
      return Vv.indexOf(e) > -1;
    }
    function sy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function vd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xt = null;
          break;
        case "dragenter":
        case "dragleave":
          jn = null;
          break;
        case "mouseover":
        case "mouseout":
          ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Nu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zu.delete(i);
          break;
        }
      }
    }
    function Uu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = sy(t, a, i, u, s);
        if (t !== null) {
          var p = Yu(t);
          p !== null && Ec(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Bv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Xt = Uu(Xt, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return jn = Uu(jn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ur = Uu(ur, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Nu.set(m, Uu(Nu.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return zu.set(x, Uu(zu.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function hd(e) {
      var t = ns(e.target);
      if (t !== null) {
        var a = $r(t);
        if (a !== null) {
          var i = a.tag;
          if (i === P) {
            var u = Xf(a);
            if (u !== null) {
              e.blockedOn = u, pd(e.priority, function() {
                Mu(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (Sc(s)) {
              e.blockedOn = Vs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function cy(e) {
      for (var t = Tc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fn.length && ku(t, Fn[i].priority); i++)
        ;
      Fn.splice(i, 0, a), i === 0 && hd(a);
    }
    function Nl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = lr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          xo(s), u.target.dispatchEvent(s), Jm();
        } else {
          var f = Yu(i);
          return f !== null && Ec(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Rc(e, t, a) {
      Nl(e) && a.delete(t);
    }
    function pa() {
      Yo = !1, Xt !== null && Nl(Xt) && (Xt = null), jn !== null && Nl(jn) && (jn = null), ur !== null && Nl(ur) && (ur = null), Nu.forEach(Rc), zu.forEach(Rc);
    }
    function ct(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yo || (Yo = !0, fe.unstable_scheduleCallback(fe.unstable_NormalPriority, pa)));
    }
    function un(e) {
      if (Lu.length > 0) {
        ct(Lu[0], e);
        for (var t = 1; t < Lu.length; t++) {
          var a = Lu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xt !== null && ct(Xt, e), jn !== null && ct(jn, e), ur !== null && ct(ur, e);
      var i = function(p) {
        return ct(p, e);
      };
      Nu.forEach(i), zu.forEach(i);
      for (var u = 0; u < Fn.length; u++) {
        var s = Fn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fn.length > 0; ) {
        var f = Fn[0];
        if (f.blockedOn !== null)
          break;
        hd(f), f.blockedOn === null && Fn.shift();
      }
    }
    var Qt = _.ReactCurrentBatchConfig, Dn = !0;
    function kr(e) {
      Dn = !!e;
    }
    function Au() {
      return Dn;
    }
    function _n(e, t, a) {
      var i = xc(t), u;
      switch (i) {
        case vn:
          u = Io;
          break;
        case mi:
          u = zl;
          break;
        case Qa:
        default:
          u = ju;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Io(e, t, a, i) {
      var u = da(), s = Qt.transition;
      Qt.transition = null;
      try {
        ln(vn), ju(e, t, a, i);
      } finally {
        ln(u), Qt.transition = s;
      }
    }
    function zl(e, t, a, i) {
      var u = da(), s = Qt.transition;
      Qt.transition = null;
      try {
        ln(mi), ju(e, t, a, i);
      } finally {
        ln(u), Qt.transition = s;
      }
    }
    function ju(e, t, a, i) {
      Dn && md(e, t, a, i);
    }
    function md(e, t, a, i) {
      var u = lr(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, Gi, a), vd(e, i);
        return;
      }
      if (Bv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (vd(e, i), t & yl && Wa(e)) {
        for (; u !== null; ) {
          var s = Yu(u);
          s !== null && dd(s);
          var f = lr(e, t, a, i);
          if (f === null && Dy(e, t, i, Gi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Gi = null;
    function lr(e, t, a, i) {
      Gi = null;
      var u = As(i), s = ns(u);
      if (s !== null) {
        var f = $r(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === P) {
            var v = Xf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === $) {
            var m = f.stateNode;
            if (Sc(m))
              return Vs(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Gi = s, null;
    }
    function xc(e) {
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
          return vn;
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
          return mi;
        case "message": {
          var t = Jf();
          switch (t) {
            case Is:
              return vn;
            case Rl:
              return mi;
            case Ia:
            case Cv:
              return Qa;
            case Qs:
              return Du;
            default:
              return Qa;
          }
        }
        default:
          return Qa;
      }
    }
    function Fu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function yi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function wc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function yd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var va = null, Hu = null, ha = null;
    function bc(e) {
      return va = e, Hu = Wo(), !0;
    }
    function Qo() {
      va = null, Hu = null, ha = null;
    }
    function Dc() {
      if (ha)
        return ha;
      var e, t = Hu, a = t.length, i, u = Wo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ha = u.slice(e, p), ha;
    }
    function Wo() {
      return "value" in va ? va.value : va.textContent;
    }
    function Ul(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Hn() {
      return !0;
    }
    function gi() {
      return !1;
    }
    function tn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Hn : this.isDefaultPrevented = gi, this.isPropagationStopped = gi, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Hn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Hn);
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
        isPersistent: Hn
      }), t;
    }
    var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, _c = tn(kn), Al = ot({}, kn, {
      view: 0,
      detail: 0
    }), gd = tn(Al), Sd, Ga, Pu;
    function Ed(e) {
      e !== Pu && (Pu && e.type === "mousemove" ? (Sd = e.screenX - Pu.screenX, Ga = e.screenY - Pu.screenY) : (Sd = 0, Ga = 0), Pu = e);
    }
    var qa = ot({}, Al, {
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
      getModifierState: Cd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ed(e), Sd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ga;
      }
    }), kc = tn(qa), jl = ot({}, qa, {
      dataTransfer: 0
    }), $v = tn(jl), Yv = ot({}, Al, {
      relatedTarget: 0
    }), Go = tn(Yv), Oc = ot({}, kn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), fy = tn(Oc), dy = ot({}, kn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Iv = tn(dy), Qv = ot({}, kn, {
      data: 0
    }), qi = tn(Qv), py = qi, Vu = {
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
    }, Wv = {
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
    function on(e) {
      if (e.key) {
        var t = Vu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ul(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Wv[e.keyCode] || "Unidentified" : "";
    }
    var vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Gv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = vy[e];
      return i ? !!a[i] : !1;
    }
    function Cd(e) {
      return Gv;
    }
    var hy = ot({}, Al, {
      key: on,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ul(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qv = tn(hy), Xv = ot({}, qa, {
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
    }), Kv = tn(Xv), ma = ot({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cd
    }), Td = tn(ma), my = ot({}, kn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xi = tn(my), Mc = ot({}, qa, {
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
    }), Fl = tn(Mc), Lc = [9, 13, 27, 32], Nc = 229, qo = _t && "CompositionEvent" in window, Xo = null;
    _t && "documentMode" in document && (Xo = document.documentMode);
    var Rd = _t && "TextEvent" in window && !Xo, Zv = _t && (!qo || Xo && Xo > 8 && Xo <= 11), xd = 32, wd = String.fromCharCode(xd);
    function zc() {
      Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ko = !1;
    function Jv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function bd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yy(e, t) {
      return e === "keydown" && t.keyCode === Nc;
    }
    function Dd(e, t) {
      switch (e) {
        case "keyup":
          return Lc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Nc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Uc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Zo(e) {
      return e.locale === "ko";
    }
    var Ki = !1;
    function Ac(e, t, a, i, u) {
      var s, f;
      if (qo ? s = bd(t) : Ki ? Dd(t, i) && (s = "onCompositionEnd") : yy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Zv && !Zo(i) && (!Ki && s === "onCompositionStart" ? Ki = bc(u) : s === "onCompositionEnd" && Ki && (f = Dc()));
      var p = ih(a, s);
      if (p.length > 0) {
        var v = new qi(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Uc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function eh(e, t) {
      switch (e) {
        case "compositionend":
          return Uc(t);
        case "keypress":
          var a = t.which;
          return a !== xd ? null : (Ko = !0, wd);
        case "textInput":
          var i = t.data;
          return i === wd && Ko ? null : i;
        default:
          return null;
      }
    }
    function gy(e, t) {
      if (Ki) {
        if (e === "compositionend" || !qo && Dd(e, t)) {
          var a = Dc();
          return Qo(), Ki = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Jv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Zv && !Zo(t) ? null : t.data;
        default:
          return null;
      }
    }
    function jc(e, t, a, i, u) {
      var s;
      if (Rd ? s = eh(t, i) : s = gy(t, i), !s)
        return null;
      var f = ih(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new py("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sy(e, t, a, i, u, s, f) {
      Ac(e, t, a, i, u), jc(e, t, a, i, u);
    }
    var Jo = {
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
    function th(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Jo[e.type] : t === "textarea";
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
    function Fc(e) {
      if (!_t)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      js(i);
      var u = ih(t, "onChange");
      if (u.length > 0) {
        var s = new _c("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, As(e)), Bf(h, t);
    }
    function h(e) {
      F0(e, 0);
    }
    function S(e) {
      var t = Yc(e);
      if (jp(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var L = !1;
    _t && (L = Fc("input") && (!document.documentMode || document.documentMode > 9));
    function V(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", H);
    }
    function Y() {
      l && (l.detachEvent("onpropertychange", H), l = null, o = null);
    }
    function H(e) {
      e.propertyName === "value" && S(o) && d(e);
    }
    function oe(e, t, a) {
      e === "focusin" ? (Y(), V(t, a)) : e === "focusout" && Y();
    }
    function ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(o);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function hn(e, t) {
      if (e === "click")
        return S(t);
    }
    function w(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function R(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ui(e, "number", e.value);
    }
    function O(e, t, a, i, u, s, f) {
      var p = a ? Yc(a) : window, v, m;
      if (c(p) ? v = C : th(p) ? L ? v = w : (v = ve, m = oe) : ge(p) && (v = hn), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && R(p);
    }
    function G() {
      Z("onMouseEnter", ["mouseout", "mouseover"]), Z("onMouseLeave", ["mouseout", "mouseover"]), Z("onPointerEnter", ["pointerout", "pointerover"]), Z("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ce(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !vv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ns(m) || Vd(m)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var T, M;
        if (v) {
          var N = i.relatedTarget || i.toElement;
          if (T = a, M = N ? ns(N) : null, M !== null) {
            var U = $r(M);
            (M !== U || M.tag !== K && M.tag !== xe) && (M = null);
          }
        } else
          T = null, M = a;
        if (T !== M) {
          var ie = kc, ze = "onMouseLeave", Re = "onMouseEnter", ht = "mouse";
          (t === "pointerout" || t === "pointerover") && (ie = Kv, ze = "onPointerLeave", Re = "onPointerEnter", ht = "pointer");
          var ft = T == null ? g : Yc(T), b = M == null ? g : Yc(M), A = new ie(ze, ht + "leave", T, i, u);
          A.target = ft, A.relatedTarget = b;
          var D = null, I = ns(u);
          if (I === a) {
            var ce = new ie(Re, ht + "enter", M, i, u);
            ce.target = b, ce.relatedTarget = ft, D = ce;
          }
          KT(e, A, D, T, M);
        }
      }
    }
    function je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var he = typeof Object.is == "function" ? Object.is : je;
    function Fe(e, t) {
      if (he(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!fn.call(t, s) || !he(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function On(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function St(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Si(e, t) {
      for (var a = On(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ui) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = On(St(a));
      }
    }
    function Ey(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return MT(e, u, s, f, p);
    }
    function MT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, g = e, x = null;
      e: for (; ; ) {
        for (var T = null; g === t && (a === 0 || g.nodeType === ui) && (f = s + a), g === i && (u === 0 || g.nodeType === ui) && (p = s + u), g.nodeType === ui && (s += g.nodeValue.length), (T = g.firstChild) !== null; )
          x = g, g = T;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++m === u && (p = s), (T = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = T;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function LT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Si(e, f), g = Si(e, p);
        if (m && g) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function b0(e) {
      return e && e.nodeType === ui;
    }
    function D0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : b0(e) ? !1 : b0(t) ? D0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function NT(e) {
      return e && e.ownerDocument && D0(e.ownerDocument.documentElement, e);
    }
    function zT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function _0() {
      for (var e = window, t = Rs(); t instanceof e.HTMLIFrameElement; ) {
        if (zT(t))
          e = t.contentWindow;
        else
          return t;
        t = Rs(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function UT() {
      var e = _0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? jT(e) : null
      };
    }
    function AT(e) {
      var t = _0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && NT(a)) {
        i !== null && Cy(a) && FT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Sr && u.push({
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
    function jT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ey(e), t || {
        start: 0,
        end: 0
      };
    }
    function FT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : LT(e, t);
    }
    var HT = _t && "documentMode" in document && document.documentMode <= 11;
    function PT() {
      Dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Hc = null, Ty = null, _d = null, Ry = !1;
    function VT(e) {
      if ("selectionStart" in e && Cy(e))
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
    function BT(e) {
      return e.window === e ? e.document : e.nodeType === La ? e : e.ownerDocument;
    }
    function k0(e, t, a) {
      var i = BT(a);
      if (!(Ry || Hc == null || Hc !== Rs(i))) {
        var u = VT(Hc);
        if (!_d || !Fe(_d, u)) {
          _d = u;
          var s = ih(Ty, "onSelect");
          if (s.length > 0) {
            var f = new _c("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Hc;
          }
        }
      }
    }
    function $T(e, t, a, i, u, s, f) {
      var p = a ? Yc(a) : window;
      switch (t) {
        case "focusin":
          (th(p) || p.contentEditable === "true") && (Hc = p, Ty = a, _d = null);
          break;
        case "focusout":
          Hc = null, Ty = null, _d = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, k0(e, i, u);
          break;
        case "selectionchange":
          if (HT)
            break;
        case "keydown":
        case "keyup":
          k0(e, i, u);
      }
    }
    function nh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Pc = {
      animationend: nh("Animation", "AnimationEnd"),
      animationiteration: nh("Animation", "AnimationIteration"),
      animationstart: nh("Animation", "AnimationStart"),
      transitionend: nh("Transition", "TransitionEnd")
    }, xy = {}, O0 = {};
    _t && (O0 = document.createElement("div").style, "AnimationEvent" in window || (delete Pc.animationend.animation, delete Pc.animationiteration.animation, delete Pc.animationstart.animation), "TransitionEvent" in window || delete Pc.transitionend.transition);
    function rh(e) {
      if (xy[e])
        return xy[e];
      if (!Pc[e])
        return e;
      var t = Pc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in O0)
          return xy[e] = t[a];
      return e;
    }
    var M0 = rh("animationend"), L0 = rh("animationiteration"), N0 = rh("animationstart"), z0 = rh("transitionend"), U0 = /* @__PURE__ */ new Map(), A0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      U0.set(e, t), Dt(t, [e]);
    }
    function YT() {
      for (var e = 0; e < A0.length; e++) {
        var t = A0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(M0, "onAnimationEnd"), Bu(L0, "onAnimationIteration"), Bu(N0, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(z0, "onTransitionEnd");
    }
    function IT(e, t, a, i, u, s, f) {
      var p = U0.get(t);
      if (p !== void 0) {
        var v = _c, m = t;
        switch (t) {
          case "keypress":
            if (Ul(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = qv;
            break;
          case "focusin":
            m = "focus", v = Go;
            break;
          case "focusout":
            m = "blur", v = Go;
            break;
          case "beforeblur":
          case "afterblur":
            v = Go;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = kc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = $v;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Td;
            break;
          case M0:
          case L0:
          case N0:
            v = fy;
            break;
          case z0:
            v = Xi;
            break;
          case "scroll":
            v = gd;
            break;
          case "wheel":
            v = Fl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Iv;
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
        var g = (s & yl) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = qT(a, p, i.type, g, x);
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
    YT(), G(), n(), PT(), zc();
    function QT(e, t, a, i, u, s, f) {
      IT(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (Ce(e, t, a, i, u), O(e, t, a, i, u), $T(e, t, a, i, u), Sy(e, t, a, i, u));
    }
    var kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(kd));
    function j0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, fi(i, t, void 0, e), e.currentTarget = null;
    }
    function WT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          j0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var g = t[m], x = g.instance, T = g.currentTarget, M = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          j0(e, M, T), i = x;
        }
    }
    function F0(e, t) {
      for (var a = (t & yl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        WT(s, f, a);
      }
      Qf();
    }
    function GT(e, t, a, i, u) {
      var s = As(a), f = [];
      QT(f, e, i, a, s, t), F0(f, t);
    }
    function nn(e, t) {
      wy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = xx(t), u = ZT(e);
      i.has(u) || (H0(t, e, To, a), i.add(u));
    }
    function by(e, t, a) {
      wy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= yl), H0(a, e, i, t);
    }
    var ah = "_reactListening" + Math.random().toString(36).slice(2);
    function Od(e) {
      if (!e[ah]) {
        e[ah] = !0, $e.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === La ? e : e.ownerDocument;
        t !== null && (t[ah] || (t[ah] = !0, by("selectionchange", !1, t)));
      }
    }
    function H0(e, t, a, i, u) {
      var s = _n(e, t, a), f = void 0;
      Do && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? wc(e, t, s, f) : yi(e, t, s) : f !== void 0 ? yd(e, t, s, f) : Fu(e, t, s);
    }
    function P0(e, t) {
      return e === t || e.nodeType === Cn && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & si) && !(t & To)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === $ || v === J) {
              var m = p.stateNode.containerInfo;
              if (P0(m, f))
                break;
              if (v === J)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === $ || x === J) {
                    var T = g.stateNode.containerInfo;
                    if (P0(T, f))
                      return;
                  }
                  g = g.return;
                }
              for (; m !== null; ) {
                var M = ns(m);
                if (M === null)
                  return;
                var N = M.tag;
                if (N === K || N === xe) {
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
      Bf(function() {
        return GT(e, t, a, s);
      });
    }
    function Md(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function qT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, g = null; m !== null; ) {
        var x = m, T = x.stateNode, M = x.tag;
        if (M === K && T !== null && (g = T, p !== null)) {
          var N = Sl(m, p);
          N != null && v.push(Md(m, N, g));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function ih(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === K && f !== null) {
          var v = f, m = Sl(u, a);
          m != null && i.unshift(Md(u, m, v));
          var g = Sl(u, t);
          g != null && i.push(Md(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Vc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function XT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Vc(s))
        u++;
      for (var f = 0, p = i; p; p = Vc(p))
        f++;
      for (; u - f > 0; )
        a = Vc(a), u--;
      for (; f - u > 0; )
        i = Vc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Vc(a), i = Vc(i);
      }
      return null;
    }
    function V0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, g = v.stateNode, x = v.tag;
        if (m !== null && m === i)
          break;
        if (x === K && g !== null) {
          var T = g;
          if (u) {
            var M = Sl(p, s);
            M != null && f.unshift(Md(p, M, T));
          } else if (!u) {
            var N = Sl(p, s);
            N != null && f.push(Md(p, N, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function KT(e, t, a, i, u) {
      var s = i && u ? XT(i, u) : null;
      i !== null && V0(e, t, i, s, !1), u !== null && a !== null && V0(e, a, u, s, !0);
    }
    function ZT(e, t) {
      return e + "__bubble";
    }
    var ya = !1, Ld = "dangerouslySetInnerHTML", lh = "suppressContentEditableWarning", $u = "suppressHydrationWarning", B0 = "autoFocus", es = "children", ts = "style", uh = "__html", _y, oh, Nd, $0, sh, Y0, I0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, oh = function(e, t) {
      Us(e, t), jf(e, t), pv(e, t, {
        registrationNameDependencies: Ze,
        possibleRegistrationNames: rt
      });
    }, Y0 = _t && !document.documentMode, Nd = function(e, t, a) {
      if (!ya) {
        var i = ch(a), u = ch(t);
        u !== i && (ya = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, $0 = function(e) {
      if (!ya) {
        ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, sh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, I0 = function(e, t) {
      var a = e.namespaceURI === li ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var JT = /\r\n?/g, eR = /\u0000|\uFFFD/g;
    function ch(e) {
      wa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(JT, `
`).replace(eR, "");
    }
    function fh(e, t, a, i) {
      var u = ch(t), s = ch(e);
      if (s !== u && (i && (ya || (ya = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Kt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Q0(e) {
      return e.nodeType === La ? e : e.ownerDocument;
    }
    function tR() {
    }
    function dh(e) {
      e.onclick = tR;
    }
    function nR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ts)
            f && Object.freeze(f), rv(t, f);
          else if (s === Ld) {
            var p = f ? f[uh] : void 0;
            p != null && Qp(t, p);
          } else if (s === es)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Ms(t, f);
            } else typeof f == "number" && Ms(t, "" + f);
          else s === lh || s === $u || s === B0 || (Ze.hasOwnProperty(s) ? f != null && (typeof f != "function" && sh(s, f), s === "onScroll" && nn("scroll", t)) : f != null && Va(t, s, f, u));
        }
    }
    function rR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ts ? rv(e, f) : s === Ld ? Qp(e, f) : s === es ? Ms(e, f) : Va(e, s, f, i);
      }
    }
    function aR(e, t, a, i) {
      var u, s = Q0(a), f, p = i;
      if (p === li && (p = ks(e)), p === li) {
        if (u = oi(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === li && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !fn.call(_y, e) && (_y[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function iR(e, t) {
      return Q0(t).createTextNode(e);
    }
    function lR(e, t, a, i) {
      var u = oi(t, a);
      oh(t, a);
      var s;
      switch (t) {
        case "dialog":
          nn("cancel", e), nn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          nn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < kd.length; f++)
            nn(kd[f], e);
          s = a;
          break;
        case "source":
          nn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          nn("error", e), nn("load", e), s = a;
          break;
        case "details":
          nn("toggle", e), s = a;
          break;
        case "input":
          mo(e, a), s = ho(e, a), nn("invalid", e);
          break;
        case "option":
          Ds(e, a), s = a;
          break;
        case "select":
          Bp(e, a), s = bf(e, a), nn("invalid", e);
          break;
        case "textarea":
          $p(e, a), s = _f(e, a), nn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ns(t, s), nR(t, e, i, s, u), t) {
        case "input":
          vl(e), yo(e, a, !1);
          break;
        case "textarea":
          vl(e), Ip(e);
          break;
        case "option":
          wf(e, a);
          break;
        case "select":
          Vm(e, a);
          break;
        default:
          typeof s.onClick == "function" && dh(e);
          break;
      }
    }
    function uR(e, t, a, i, u) {
      oh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ho(e, a), p = ho(e, i), s = [];
          break;
        case "select":
          f = bf(e, a), p = bf(e, i), s = [];
          break;
        case "textarea":
          f = _f(e, a), p = _f(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && dh(e);
          break;
      }
      Ns(t, p);
      var v, m, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === ts) {
            var x = f[v];
            for (m in x)
              x.hasOwnProperty(m) && (g || (g = {}), g[m] = "");
          } else v === Ld || v === es || v === lh || v === $u || v === B0 || (Ze.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === M || T == null && M == null))
          if (v === ts)
            if (T && Object.freeze(T), M) {
              for (m in M)
                M.hasOwnProperty(m) && (!T || !T.hasOwnProperty(m)) && (g || (g = {}), g[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && M[m] !== T[m] && (g || (g = {}), g[m] = T[m]);
            } else
              g || (s || (s = []), s.push(v, g)), g = T;
          else if (v === Ld) {
            var N = T ? T[uh] : void 0, U = M ? M[uh] : void 0;
            N != null && U !== N && (s = s || []).push(v, N);
          } else v === es ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === lh || v === $u || (Ze.hasOwnProperty(v) ? (T != null && (typeof T != "function" && sh(v, T), v === "onScroll" && nn("scroll", e)), !s && M !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return g && (Eo(g, p[ts]), (s = s || []).push(ts, g)), s;
    }
    function oR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && xf(e, u);
      var s = oi(a, i), f = oi(a, u);
      switch (rR(e, t, s, f), a) {
        case "input":
          au(e, u);
          break;
        case "textarea":
          Yp(e, u);
          break;
        case "select":
          Bm(e, u);
          break;
      }
    }
    function sR(e) {
      {
        var t = e.toLowerCase();
        return zs.hasOwnProperty(t) && zs[t] || null;
      }
    }
    function cR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = oi(t, a), oh(t, a), t) {
        case "dialog":
          nn("cancel", e), nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          nn("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < kd.length; m++)
            nn(kd[m], e);
          break;
        case "source":
          nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          nn("error", e), nn("load", e);
          break;
        case "details":
          nn("toggle", e);
          break;
        case "input":
          mo(e, a), nn("invalid", e);
          break;
        case "option":
          Ds(e, a);
          break;
        case "select":
          Bp(e, a), nn("invalid", e);
          break;
        case "textarea":
          $p(e, a), nn("invalid", e);
          break;
      }
      Ns(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var T = g[x].name.toLowerCase();
          switch (T) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var M = null;
      for (var N in a)
        if (a.hasOwnProperty(N)) {
          var U = a[N];
          if (N === es)
            typeof U == "string" ? e.textContent !== U && (a[$u] !== !0 && fh(e.textContent, U, s, f), M = [es, U]) : typeof U == "number" && e.textContent !== "" + U && (a[$u] !== !0 && fh(e.textContent, U, s, f), M = [es, "" + U]);
          else if (Ze.hasOwnProperty(N))
            U != null && (typeof U != "function" && sh(N, U), N === "onScroll" && nn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ie = void 0, ze = p && Ne ? null : Fr(N);
            if (a[$u] !== !0) {
              if (!(N === lh || N === $u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              N === "value" || N === "checked" || N === "selected")) {
                if (N === Ld) {
                  var Re = e.innerHTML, ht = U ? U[uh] : void 0;
                  if (ht != null) {
                    var ft = I0(e, ht);
                    ft !== Re && Nd(N, Re, ft);
                  }
                } else if (N === ts) {
                  if (v.delete(N), Y0) {
                    var b = Xm(U);
                    ie = e.getAttribute("style"), b !== ie && Nd(N, ie, b);
                  }
                } else if (p && !Ne)
                  v.delete(N.toLowerCase()), ie = eu(e, N, U), U !== ie && Nd(N, ie, U);
                else if (!dn(N, ze, p) && !Pt(N, U, ze, p)) {
                  var A = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), ie = cl(e, N, U, ze);
                  else {
                    var D = i;
                    if (D === li && (D = ks(t)), D === li)
                      v.delete(N.toLowerCase());
                    else {
                      var I = sR(N);
                      I !== null && I !== N && (A = !0, v.delete(I)), v.delete(N);
                    }
                    ie = eu(e, N, U);
                  }
                  var ce = Ne;
                  !ce && U !== ie && !A && Nd(N, ie, U);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[$u] !== !0 && $0(v), t) {
        case "input":
          vl(e), yo(e, a, !0);
          break;
        case "textarea":
          vl(e), Ip(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && dh(e);
          break;
      }
      return M;
    }
    function fR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (ya)
          return;
        ya = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (ya)
          return;
        ya = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (ya)
          return;
        ya = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || ya)
          return;
        ya = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function dR(e, t, a) {
      switch (t) {
        case "input":
          Fp(e, a);
          return;
        case "textarea":
          kf(e, a);
          return;
        case "select":
          $m(e, a);
          return;
      }
    }
    var zd = function() {
    }, Ud = function() {
    };
    {
      var pR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], W0 = [
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
      ], vR = W0.concat(["button"]), hR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], G0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ud = function(e, t) {
        var a = ot({}, e || G0), i = {
          tag: t
        };
        return W0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), vR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), pR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var mR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
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
            return hR.indexOf(t) === -1;
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
      }, yR = function(e, t) {
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
      }, q0 = {};
      zd = function(e, t, a) {
        a = a || G0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = mR(e, u) ? null : i, f = s ? null : yR(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!q0[m]) {
            q0[m] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var T = "";
              v === "table" && e === "tr" && (T += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, T);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var ph = "suppressHydrationWarning", vh = "$", hh = "/$", Ad = "$?", jd = "$!", gR = "style", Ny = null, zy = null;
    function SR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case La:
        case hl: {
          t = i === La ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Mf(null, "");
          break;
        }
        default: {
          var s = i === Cn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Mf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Ud(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ER(e, t, a) {
      {
        var i = e, u = Mf(i.namespace, t), s = Ud(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function B_(e) {
      return e;
    }
    function CR(e) {
      Ny = Au(), zy = UT();
      var t = null;
      return kr(!1), t;
    }
    function TR(e) {
      AT(zy), kr(Ny), Ny = null, zy = null;
    }
    function RR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (zd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Ud(f.ancestorInfo, e);
          zd(null, p, v);
        }
        s = f.namespace;
      }
      var m = aR(e, t, a, s);
      return Pd(u, m), By(m, t), m;
    }
    function xR(e, t) {
      e.appendChild(t);
    }
    function wR(e, t, a, i, u) {
      switch (lR(e, t, a, i), t) {
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
    function bR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Ud(f.ancestorInfo, t);
          zd(null, p, v);
        }
      }
      return uR(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function DR(e, t, a, i) {
      {
        var u = a;
        zd(null, e, u.ancestorInfo);
      }
      var s = iR(e, t);
      return Pd(i, s), s;
    }
    function _R() {
      var e = window.event;
      return e === void 0 ? Qa : xc(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, kR = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, X0 = typeof Promise == "function" ? Promise : void 0, OR = typeof queueMicrotask == "function" ? queueMicrotask : typeof X0 < "u" ? function(e) {
      return X0.resolve(null).then(e).catch(MR);
    } : Ay;
    function MR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function LR(e, t, a, i) {
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
    function NR(e, t, a, i, u, s) {
      oR(e, t, a, i, u), By(e, u);
    }
    function K0(e) {
      Ms(e, "");
    }
    function zR(e, t, a) {
      e.nodeValue = a;
    }
    function UR(e, t) {
      e.appendChild(t);
    }
    function AR(e, t) {
      var a;
      e.nodeType === Cn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && dh(a);
    }
    function jR(e, t, a) {
      e.insertBefore(t, a);
    }
    function FR(e, t, a) {
      e.nodeType === Cn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function HR(e, t) {
      e.removeChild(t);
    }
    function PR(e, t) {
      e.nodeType === Cn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Cn) {
          var s = u.data;
          if (s === hh)
            if (i === 0) {
              e.removeChild(u), un(t);
              return;
            } else
              i--;
          else (s === vh || s === Ad || s === jd) && i++;
        }
        a = u;
      } while (a);
      un(t);
    }
    function VR(e, t) {
      e.nodeType === Cn ? Fy(e.parentNode, t) : e.nodeType === Sr && Fy(e, t), un(e);
    }
    function BR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function $R(e) {
      e.nodeValue = "";
    }
    function YR(e, t) {
      e = e;
      var a = t[gR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ls("display", i);
    }
    function IR(e, t) {
      e.nodeValue = t;
    }
    function QR(e) {
      e.nodeType === Sr ? e.textContent = "" : e.nodeType === La && e.documentElement && e.removeChild(e.documentElement);
    }
    function WR(e, t, a) {
      return e.nodeType !== Sr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function GR(e, t) {
      return t === "" || e.nodeType !== ui ? null : e;
    }
    function qR(e) {
      return e.nodeType !== Cn ? null : e;
    }
    function Z0(e) {
      return e.data === Ad;
    }
    function Hy(e) {
      return e.data === jd;
    }
    function XR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function KR(e, t) {
      e._reactRetry = t;
    }
    function mh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Sr || t === ui)
          break;
        if (t === Cn) {
          var a = e.data;
          if (a === vh || a === jd || a === Ad)
            break;
          if (a === hh)
            return null;
        }
      }
      return e;
    }
    function Fd(e) {
      return mh(e.nextSibling);
    }
    function ZR(e) {
      return mh(e.firstChild);
    }
    function JR(e) {
      return mh(e.firstChild);
    }
    function ex(e) {
      return mh(e.nextSibling);
    }
    function tx(e, t, a, i, u, s, f) {
      Pd(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & Te) !== Ee;
      return cR(e, t, a, p, i, m, f);
    }
    function nx(e, t, a, i) {
      return Pd(a, e), a.mode & Te, fR(e, t);
    }
    function rx(e, t) {
      Pd(t, e);
    }
    function ax(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
          var i = t.data;
          if (i === hh) {
            if (a === 0)
              return Fd(t);
            a--;
          } else (i === vh || i === jd || i === Ad) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function J0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
          var i = t.data;
          if (i === vh || i === jd || i === Ad) {
            if (a === 0)
              return t;
            a--;
          } else i === hh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ix(e) {
      un(e);
    }
    function lx(e) {
      un(e);
    }
    function ux(e) {
      return e !== "head" && e !== "body";
    }
    function ox(e, t, a, i) {
      var u = !0;
      fh(t.nodeValue, a, i, u);
    }
    function sx(e, t, a, i, u, s) {
      if (t[ph] !== !0) {
        var f = !0;
        fh(i.nodeValue, u, s, f);
      }
    }
    function cx(e, t) {
      t.nodeType === Sr ? ky(e, t) : t.nodeType === Cn || Oy(e, t);
    }
    function fx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Sr ? ky(a, t) : t.nodeType === Cn || Oy(a, t));
      }
    }
    function dx(e, t, a, i, u) {
      (u || t[ph] !== !0) && (i.nodeType === Sr ? ky(a, i) : i.nodeType === Cn || Oy(a, i));
    }
    function px(e, t, a) {
      My(e, t);
    }
    function vx(e, t) {
      Ly(e, t);
    }
    function hx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function mx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function yx(e, t, a, i, u, s) {
      (s || t[ph] !== !0) && My(a, i);
    }
    function gx(e, t, a, i, u) {
      (u || t[ph] !== !0) && Ly(a, i);
    }
    function Sx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Ex(e) {
      Od(e);
    }
    var Bc = Math.random().toString(36).slice(2), $c = "__reactFiber$" + Bc, Py = "__reactProps$" + Bc, Hd = "__reactContainer$" + Bc, Vy = "__reactEvents$" + Bc, Cx = "__reactListeners$" + Bc, Tx = "__reactHandles$" + Bc;
    function Rx(e) {
      delete e[$c], delete e[Py], delete e[Vy], delete e[Cx], delete e[Tx];
    }
    function Pd(e, t) {
      t[$c] = e;
    }
    function yh(e, t) {
      t[Hd] = e;
    }
    function eE(e) {
      e[Hd] = null;
    }
    function Vd(e) {
      return !!e[Hd];
    }
    function ns(e) {
      var t = e[$c];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Hd] || a[$c], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = J0(e); u !== null; ) {
              var s = u[$c];
              if (s)
                return s;
              u = J0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[$c] || e[Hd];
      return t && (t.tag === K || t.tag === xe || t.tag === P || t.tag === $) ? t : null;
    }
    function Yc(e) {
      if (e.tag === K || e.tag === xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function gh(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function xx(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var tE = {}, nE = _.ReactDebugCurrentFrame;
    function Sh(e) {
      if (e) {
        var t = e._owner, a = oo(e.type, e._source, t ? t.type : null);
        nE.setExtraStackFrame(a);
      } else
        nE.setExtraStackFrame(null);
    }
    function Ei(e, t, a, i, u) {
      {
        var s = Function.call.bind(fn);
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
            p && !(p instanceof Error) && (Sh(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Sh(null)), p instanceof Error && !(p.message in tE) && (tE[p.message] = !0, Sh(u), y("Failed %s type: %s", a, p.message), Sh(null));
          }
      }
    }
    var $y = [], Eh;
    Eh = [];
    var Hl = -1;
    function Iu(e) {
      return {
        current: e
      };
    }
    function Or(e, t) {
      if (Hl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Eh[Hl] && y("Unexpected Fiber popped."), e.current = $y[Hl], $y[Hl] = null, Eh[Hl] = null, Hl--;
    }
    function Mr(e, t, a) {
      Hl++, $y[Hl] = e.current, Eh[Hl] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var Aa = {};
    Object.freeze(Aa);
    var Pl = Iu(Aa), Zi = Iu(!1), Iy = Aa;
    function Ic(e, t, a) {
      return a && Ji(t) ? Iy : Pl.current;
    }
    function rE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Qc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Aa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Je(e) || "Unknown";
          Ei(i, s, "context", p);
        }
        return u && rE(e, t, s), s;
      }
    }
    function Ch() {
      return Zi.current;
    }
    function Ji(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Th(e) {
      Or(Zi, e), Or(Pl, e);
    }
    function Qy(e) {
      Or(Zi, e), Or(Pl, e);
    }
    function aE(e, t, a) {
      {
        if (Pl.current !== Aa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Mr(Pl, t, e), Mr(Zi, a, e);
      }
    }
    function iE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Je(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Je(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Je(e) || "Unknown";
          Ei(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function Rh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Aa;
        return Iy = Pl.current, Mr(Pl, a, e), Mr(Zi, Zi.current, e), !0;
      }
    }
    function lE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = iE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, Or(Zi, e), Or(Pl, e), Mr(Pl, u, e), Mr(Zi, a, e);
        } else
          Or(Zi, e), Mr(Zi, a, e);
      }
    }
    function wx(e) {
      {
        if (!Kf(e) || e.tag !== W)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case W: {
              var a = t.type;
              if (Ji(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, xh = 1, Vl = null, Wy = !1, Gy = !1;
    function uE(e) {
      Vl === null ? Vl = [e] : Vl.push(e);
    }
    function bx(e) {
      Wy = !0, uE(e);
    }
    function oE() {
      Wy && Wu();
    }
    function Wu() {
      if (!Gy && Vl !== null) {
        Gy = !0;
        var e = 0, t = da();
        try {
          var a = !0, i = Vl;
          for (ln(vn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Vl = null, Wy = !1;
        } catch (s) {
          throw Vl !== null && (Vl = Vl.slice(e + 1)), $s(Is, Wu), s;
        } finally {
          ln(t), Gy = !1;
        }
      }
      return null;
    }
    var Wc = [], Gc = 0, wh = null, bh = 0, Xa = [], Ka = 0, rs = null, Bl = 1, $l = "";
    function Dx(e) {
      return is(), (e.flags & Gf) !== Le;
    }
    function _x(e) {
      return is(), bh;
    }
    function kx() {
      var e = $l, t = Bl, a = t & ~Ox(t);
      return a.toString(32) + e;
    }
    function as(e, t) {
      is(), Wc[Gc++] = bh, Wc[Gc++] = wh, wh = e, bh = t;
    }
    function sE(e, t, a) {
      is(), Xa[Ka++] = Bl, Xa[Ka++] = $l, Xa[Ka++] = rs, rs = e;
      var i = Bl, u = $l, s = Dh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Dh(t) + s;
      if (v > 30) {
        var m = s - s % 5, g = (1 << m) - 1, x = (f & g).toString(32), T = f >> m, M = s - m, N = Dh(t) + M, U = p << M, ie = U | T, ze = x + u;
        Bl = 1 << N | ie, $l = ze;
      } else {
        var Re = p << s, ht = Re | f, ft = u;
        Bl = 1 << v | ht, $l = ft;
      }
    }
    function qy(e) {
      is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        as(e, a), sE(e, a, i);
      }
    }
    function Dh(e) {
      return 32 - Su(e);
    }
    function Ox(e) {
      return 1 << Dh(e) - 1;
    }
    function Xy(e) {
      for (; e === wh; )
        wh = Wc[--Gc], Wc[Gc] = null, bh = Wc[--Gc], Wc[Gc] = null;
      for (; e === rs; )
        rs = Xa[--Ka], Xa[Ka] = null, $l = Xa[--Ka], Xa[Ka] = null, Bl = Xa[--Ka], Xa[Ka] = null;
    }
    function Mx() {
      return is(), rs !== null ? {
        id: Bl,
        overflow: $l
      } : null;
    }
    function Lx(e, t) {
      is(), Xa[Ka++] = Bl, Xa[Ka++] = $l, Xa[Ka++] = rs, Bl = t.id, $l = t.overflow, rs = e;
    }
    function is() {
      sr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var or = null, Za = null, Ci = !1, ls = !1, Gu = null;
    function Nx() {
      Ci && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function cE() {
      ls = !0;
    }
    function zx() {
      return ls;
    }
    function Ux(e) {
      var t = e.stateNode.containerInfo;
      return Za = JR(t), or = e, Ci = !0, Gu = null, ls = !1, !0;
    }
    function Ax(e, t, a) {
      return Za = ex(t), or = e, Ci = !0, Gu = null, ls = !1, a !== null && Lx(e, a), !0;
    }
    function fE(e, t) {
      switch (e.tag) {
        case $: {
          cx(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & Te) !== Ee;
          dx(
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
          i.dehydrated !== null && fx(i.dehydrated, t);
          break;
        }
      }
    }
    function dE(e, t) {
      fE(e, t);
      var a = PD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Rt) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (ls)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, px(a, i);
                break;
              case xe:
                var u = t.pendingProps;
                vx(a, u);
                break;
            }
            break;
          }
          case K: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case K: {
                var v = t.type, m = t.pendingProps, g = (e.mode & Te) !== Ee;
                yx(
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
              case xe: {
                var x = t.pendingProps, T = (e.mode & Te) !== Ee;
                gx(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
            }
            break;
          }
          case P: {
            var M = e.memoizedState, N = M.dehydrated;
            if (N !== null) switch (t.tag) {
              case K:
                var U = t.type;
                t.pendingProps, hx(N, U);
                break;
              case xe:
                var ie = t.pendingProps;
                mx(N, ie);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function pE(e, t) {
      t.flags = t.flags & ~la | Yt, Ky(e, t);
    }
    function vE(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = WR(t, a);
          return i !== null ? (e.stateNode = i, or = e, Za = ZR(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = GR(t, u);
          return s !== null ? (e.stateNode = s, or = e, Za = null, !0) : !1;
        }
        case P: {
          var f = qR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Mx(),
              retryLane: ar
            };
            e.memoizedState = p;
            var v = VD(f);
            return v.return = e, e.child = v, or = e, Za = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & Te) !== Ee && (e.flags & Ie) === Le;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Ci) {
        var t = Za;
        if (!t) {
          Zy(e) && (Ky(or, e), Jy()), pE(or, e), Ci = !1, or = e;
          return;
        }
        var a = t;
        if (!vE(e, t)) {
          Zy(e) && (Ky(or, e), Jy()), t = Fd(a);
          var i = or;
          if (!t || !vE(e, t)) {
            pE(or, e), Ci = !1, or = e;
            return;
          }
          dE(i, a);
        }
      }
    }
    function jx(e, t, a) {
      var i = e.stateNode, u = !ls, s = tx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Fx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = nx(t, a, e);
      if (i) {
        var u = or;
        if (u !== null)
          switch (u.tag) {
            case $: {
              var s = u.stateNode.containerInfo, f = (u.mode & Te) !== Ee;
              ox(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case K: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, g = (u.mode & Te) !== Ee;
              sx(
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
    function Hx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      rx(a, e);
    }
    function Px(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ax(a);
    }
    function hE(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== $ && t.tag !== P; )
        t = t.return;
      or = t;
    }
    function _h(e) {
      if (e !== or)
        return !1;
      if (!Ci)
        return hE(e), Ci = !0, !1;
      if (e.tag !== $ && (e.tag !== K || ux(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Za;
        if (t)
          if (Zy(e))
            mE(e), Jy();
          else
            for (; t; )
              dE(e, t), t = Fd(t);
      }
      return hE(e), e.tag === P ? Za = Px(e) : Za = or ? Fd(e.stateNode) : null, !0;
    }
    function Vx() {
      return Ci && Za !== null;
    }
    function mE(e) {
      for (var t = Za; t; )
        fE(e, t), t = Fd(t);
    }
    function qc() {
      or = null, Za = null, Ci = !1, ls = !1;
    }
    function yE() {
      Gu !== null && (c1(Gu), Gu = null);
    }
    function sr() {
      return Ci;
    }
    function tg(e) {
      Gu === null ? Gu = [e] : Gu.push(e);
    }
    var Bx = _.ReactCurrentBatchConfig, $x = null;
    function Yx() {
      return Bx.transition;
    }
    var Ti = {
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
      var Ix = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & st && (t = a), a = a.return;
        return t;
      }, us = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Bd = [], $d = [], Yd = [], Id = [], Qd = [], Wd = [], os = /* @__PURE__ */ new Set();
      Ti.recordUnsafeLifecycleWarnings = function(e, t) {
        os.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & st && typeof t.UNSAFE_componentWillMount == "function" && $d.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Yd.push(e), e.mode & st && typeof t.UNSAFE_componentWillReceiveProps == "function" && Id.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & st && typeof t.UNSAFE_componentWillUpdate == "function" && Wd.push(e));
      }, Ti.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(T) {
          e.add(Je(T) || "Component"), os.add(T.type);
        }), Bd = []);
        var t = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(T) {
          t.add(Je(T) || "Component"), os.add(T.type);
        }), $d = []);
        var a = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(T) {
          a.add(Je(T) || "Component"), os.add(T.type);
        }), Yd = []);
        var i = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(T) {
          i.add(Je(T) || "Component"), os.add(T.type);
        }), Id = []);
        var u = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(T) {
          u.add(Je(T) || "Component"), os.add(T.type);
        }), Qd = []);
        var s = /* @__PURE__ */ new Set();
        if (Wd.length > 0 && (Wd.forEach(function(T) {
          s.add(Je(T) || "Component"), os.add(T.type);
        }), Wd = []), t.size > 0) {
          var f = us(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = us(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = us(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = us(e);
          ae(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var g = us(a);
          ae(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = us(u);
          ae(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var kh = /* @__PURE__ */ new Map(), gE = /* @__PURE__ */ new Set();
      Ti.recordLegacyContextWarning = function(e, t) {
        var a = Ix(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!gE.has(e.type)) {
          var i = kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], kh.set(a, i)), i.push(e));
        }
      }, Ti.flushLegacyContextWarning = function() {
        kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Je(s) || "Component"), gE.add(s.type);
            });
            var u = us(i);
            try {
              Lt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              wn();
            }
          }
        });
      }, Ti.discardPendingWarnings = function() {
        Bd = [], $d = [], Yd = [], Id = [], Qd = [], Wd = [], kh = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, SE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, SE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Je(t) || "Component";
        ig[a] || (ig[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Qx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Gd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & st || Oe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== W) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Qx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Je(e) || "Component";
          ag[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== W)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ri(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var g = function(x) {
            var T = v.refs;
            x === null ? delete T[m] : T[m] = x;
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
    function Oh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Mh(e) {
      {
        var t = Je(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function EE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function CE(e) {
      function t(b, A) {
        if (e) {
          var D = b.deletions;
          D === null ? (b.deletions = [A], b.flags |= Rt) : D.push(A);
        }
      }
      function a(b, A) {
        if (!e)
          return null;
        for (var D = A; D !== null; )
          t(b, D), D = D.sibling;
        return null;
      }
      function i(b, A) {
        for (var D = /* @__PURE__ */ new Map(), I = A; I !== null; )
          I.key !== null ? D.set(I.key, I) : D.set(I.index, I), I = I.sibling;
        return D;
      }
      function u(b, A) {
        var D = ys(b, A);
        return D.index = 0, D.sibling = null, D;
      }
      function s(b, A, D) {
        if (b.index = D, !e)
          return b.flags |= Gf, A;
        var I = b.alternate;
        if (I !== null) {
          var ce = I.index;
          return ce < A ? (b.flags |= Yt, A) : ce;
        } else
          return b.flags |= Yt, A;
      }
      function f(b) {
        return e && b.alternate === null && (b.flags |= Yt), b;
      }
      function p(b, A, D, I) {
        if (A === null || A.tag !== xe) {
          var ce = t0(D, b.mode, I);
          return ce.return = b, ce;
        } else {
          var le = u(A, D);
          return le.return = b, le;
        }
      }
      function v(b, A, D, I) {
        var ce = D.type;
        if (ce === _a)
          return g(b, A, D.props.children, I, D.key);
        if (A !== null && (A.elementType === ce || // Keep this check inline so it only runs on the false path:
        b1(A, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ce == "object" && ce !== null && ce.$$typeof === Pe && EE(ce) === A.type)) {
          var le = u(A, D.props);
          return le.ref = Gd(b, A, D), le.return = b, le._debugSource = D._source, le._debugOwner = D._owner, le;
        }
        var Ye = e0(D, b.mode, I);
        return Ye.ref = Gd(b, A, D), Ye.return = b, Ye;
      }
      function m(b, A, D, I) {
        if (A === null || A.tag !== J || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation) {
          var ce = n0(D, b.mode, I);
          return ce.return = b, ce;
        } else {
          var le = u(A, D.children || []);
          return le.return = b, le;
        }
      }
      function g(b, A, D, I, ce) {
        if (A === null || A.tag !== Ae) {
          var le = io(D, b.mode, I, ce);
          return le.return = b, le;
        } else {
          var Ye = u(A, D);
          return Ye.return = b, Ye;
        }
      }
      function x(b, A, D) {
        if (typeof A == "string" && A !== "" || typeof A == "number") {
          var I = t0("" + A, b.mode, D);
          return I.return = b, I;
        }
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case ai: {
              var ce = e0(A, b.mode, D);
              return ce.ref = Gd(b, null, A), ce.return = b, ce;
            }
            case Hr: {
              var le = n0(A, b.mode, D);
              return le.return = b, le;
            }
            case Pe: {
              var Ye = A._payload, qe = A._init;
              return x(b, qe(Ye), D);
            }
          }
          if (zn(A) || Pr(A)) {
            var zt = io(A, b.mode, D, null);
            return zt.return = b, zt;
          }
          Oh(b, A);
        }
        return typeof A == "function" && Mh(b), null;
      }
      function T(b, A, D, I) {
        var ce = A !== null ? A.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return ce !== null ? null : p(b, A, "" + D, I);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ai:
              return D.key === ce ? v(b, A, D, I) : null;
            case Hr:
              return D.key === ce ? m(b, A, D, I) : null;
            case Pe: {
              var le = D._payload, Ye = D._init;
              return T(b, A, Ye(le), I);
            }
          }
          if (zn(D) || Pr(D))
            return ce !== null ? null : g(b, A, D, I, null);
          Oh(b, D);
        }
        return typeof D == "function" && Mh(b), null;
      }
      function M(b, A, D, I, ce) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var le = b.get(D) || null;
          return p(A, le, "" + I, ce);
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case ai: {
              var Ye = b.get(I.key === null ? D : I.key) || null;
              return v(A, Ye, I, ce);
            }
            case Hr: {
              var qe = b.get(I.key === null ? D : I.key) || null;
              return m(A, qe, I, ce);
            }
            case Pe:
              var zt = I._payload, Et = I._init;
              return M(b, A, D, Et(zt), ce);
          }
          if (zn(I) || Pr(I)) {
            var Mn = b.get(D) || null;
            return g(A, Mn, I, ce, null);
          }
          Oh(A, I);
        }
        return typeof I == "function" && Mh(A), null;
      }
      function N(b, A, D) {
        {
          if (typeof b != "object" || b === null)
            return A;
          switch (b.$$typeof) {
            case ai:
            case Hr:
              SE(b, D);
              var I = b.key;
              if (typeof I != "string")
                break;
              if (A === null) {
                A = /* @__PURE__ */ new Set(), A.add(I);
                break;
              }
              if (!A.has(I)) {
                A.add(I);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", I);
              break;
            case Pe:
              var ce = b._payload, le = b._init;
              N(le(ce), A, D);
              break;
          }
        }
        return A;
      }
      function U(b, A, D, I) {
        for (var ce = null, le = 0; le < D.length; le++) {
          var Ye = D[le];
          ce = N(Ye, ce, b);
        }
        for (var qe = null, zt = null, Et = A, Mn = 0, Ct = 0, xn = null; Et !== null && Ct < D.length; Ct++) {
          Et.index > Ct ? (xn = Et, Et = null) : xn = Et.sibling;
          var Nr = T(b, Et, D[Ct], I);
          if (Nr === null) {
            Et === null && (Et = xn);
            break;
          }
          e && Et && Nr.alternate === null && t(b, Et), Mn = s(Nr, Mn, Ct), zt === null ? qe = Nr : zt.sibling = Nr, zt = Nr, Et = xn;
        }
        if (Ct === D.length) {
          if (a(b, Et), sr()) {
            var mr = Ct;
            as(b, mr);
          }
          return qe;
        }
        if (Et === null) {
          for (; Ct < D.length; Ct++) {
            var Fa = x(b, D[Ct], I);
            Fa !== null && (Mn = s(Fa, Mn, Ct), zt === null ? qe = Fa : zt.sibling = Fa, zt = Fa);
          }
          if (sr()) {
            var Kr = Ct;
            as(b, Kr);
          }
          return qe;
        }
        for (var Zr = i(b, Et); Ct < D.length; Ct++) {
          var zr = M(Zr, b, Ct, D[Ct], I);
          zr !== null && (e && zr.alternate !== null && Zr.delete(zr.key === null ? Ct : zr.key), Mn = s(zr, Mn, Ct), zt === null ? qe = zr : zt.sibling = zr, zt = zr);
        }
        if (e && Zr.forEach(function(hf) {
          return t(b, hf);
        }), sr()) {
          var Xl = Ct;
          as(b, Xl);
        }
        return qe;
      }
      function ie(b, A, D, I) {
        var ce = Pr(D);
        if (typeof ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (rg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), D.entries === ce && (ng || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var le = ce.call(D);
          if (le)
            for (var Ye = null, qe = le.next(); !qe.done; qe = le.next()) {
              var zt = qe.value;
              Ye = N(zt, Ye, b);
            }
        }
        var Et = ce.call(D);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Mn = null, Ct = null, xn = A, Nr = 0, mr = 0, Fa = null, Kr = Et.next(); xn !== null && !Kr.done; mr++, Kr = Et.next()) {
          xn.index > mr ? (Fa = xn, xn = null) : Fa = xn.sibling;
          var Zr = T(b, xn, Kr.value, I);
          if (Zr === null) {
            xn === null && (xn = Fa);
            break;
          }
          e && xn && Zr.alternate === null && t(b, xn), Nr = s(Zr, Nr, mr), Ct === null ? Mn = Zr : Ct.sibling = Zr, Ct = Zr, xn = Fa;
        }
        if (Kr.done) {
          if (a(b, xn), sr()) {
            var zr = mr;
            as(b, zr);
          }
          return Mn;
        }
        if (xn === null) {
          for (; !Kr.done; mr++, Kr = Et.next()) {
            var Xl = x(b, Kr.value, I);
            Xl !== null && (Nr = s(Xl, Nr, mr), Ct === null ? Mn = Xl : Ct.sibling = Xl, Ct = Xl);
          }
          if (sr()) {
            var hf = mr;
            as(b, hf);
          }
          return Mn;
        }
        for (var bp = i(b, xn); !Kr.done; mr++, Kr = Et.next()) {
          var ul = M(bp, b, mr, Kr.value, I);
          ul !== null && (e && ul.alternate !== null && bp.delete(ul.key === null ? mr : ul.key), Nr = s(ul, Nr, mr), Ct === null ? Mn = ul : Ct.sibling = ul, Ct = ul);
        }
        if (e && bp.forEach(function(g_) {
          return t(b, g_);
        }), sr()) {
          var y_ = mr;
          as(b, y_);
        }
        return Mn;
      }
      function ze(b, A, D, I) {
        if (A !== null && A.tag === xe) {
          a(b, A.sibling);
          var ce = u(A, D);
          return ce.return = b, ce;
        }
        a(b, A);
        var le = t0(D, b.mode, I);
        return le.return = b, le;
      }
      function Re(b, A, D, I) {
        for (var ce = D.key, le = A; le !== null; ) {
          if (le.key === ce) {
            var Ye = D.type;
            if (Ye === _a) {
              if (le.tag === Ae) {
                a(b, le.sibling);
                var qe = u(le, D.props.children);
                return qe.return = b, qe._debugSource = D._source, qe._debugOwner = D._owner, qe;
              }
            } else if (le.elementType === Ye || // Keep this check inline so it only runs on the false path:
            b1(le, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ye == "object" && Ye !== null && Ye.$$typeof === Pe && EE(Ye) === le.type) {
              a(b, le.sibling);
              var zt = u(le, D.props);
              return zt.ref = Gd(b, le, D), zt.return = b, zt._debugSource = D._source, zt._debugOwner = D._owner, zt;
            }
            a(b, le);
            break;
          } else
            t(b, le);
          le = le.sibling;
        }
        if (D.type === _a) {
          var Et = io(D.props.children, b.mode, I, D.key);
          return Et.return = b, Et;
        } else {
          var Mn = e0(D, b.mode, I);
          return Mn.ref = Gd(b, A, D), Mn.return = b, Mn;
        }
      }
      function ht(b, A, D, I) {
        for (var ce = D.key, le = A; le !== null; ) {
          if (le.key === ce)
            if (le.tag === J && le.stateNode.containerInfo === D.containerInfo && le.stateNode.implementation === D.implementation) {
              a(b, le.sibling);
              var Ye = u(le, D.children || []);
              return Ye.return = b, Ye;
            } else {
              a(b, le);
              break;
            }
          else
            t(b, le);
          le = le.sibling;
        }
        var qe = n0(D, b.mode, I);
        return qe.return = b, qe;
      }
      function ft(b, A, D, I) {
        var ce = typeof D == "object" && D !== null && D.type === _a && D.key === null;
        if (ce && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ai:
              return f(Re(b, A, D, I));
            case Hr:
              return f(ht(b, A, D, I));
            case Pe:
              var le = D._payload, Ye = D._init;
              return ft(b, A, Ye(le), I);
          }
          if (zn(D))
            return U(b, A, D, I);
          if (Pr(D))
            return ie(b, A, D, I);
          Oh(b, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(ze(b, A, "" + D, I)) : (typeof D == "function" && Mh(b), a(b, A));
      }
      return ft;
    }
    var Xc = CE(!0), TE = CE(!1);
    function Wx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ys(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ys(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Gx(e, t) {
      for (var a = e.child; a !== null; )
        UD(a, t), a = a.sibling;
    }
    var ug = Iu(null), og;
    og = {};
    var Lh = null, Kc = null, sg = null, Nh = !1;
    function zh() {
      Lh = null, Kc = null, sg = null, Nh = !1;
    }
    function RE() {
      Nh = !0;
    }
    function xE() {
      Nh = !1;
    }
    function wE(e, t, a) {
      Mr(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      Or(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ml(i.childLanes, t) ? u !== null && !Ml(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qx(e, t, a) {
      Xx(e, t, a);
    }
    function Xx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === W) {
                var p = bu(a), v = Yl(Bt, p);
                v.tag = Ah;
                var m = i.updateQueue;
                if (m !== null) {
                  var g = m.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = et(T.lanes, a)), fg(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === it)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ht) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = et(M.lanes, a);
          var N = M.alternate;
          N !== null && (N.lanes = et(N.lanes, a)), fg(M, a, e), u = i.sibling;
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
    function Zc(e, t) {
      Lh = e, Kc = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (_r(a.lanes, t) && sp(), a.firstContext = null);
      }
    }
    function Pn(e) {
      Nh && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Kc === null) {
          if (Lh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Kc = a, Lh.dependencies = {
            lanes: F,
            firstContext: a
          };
        } else
          Kc = Kc.next = a;
      }
      return t;
    }
    var ss = null;
    function dg(e) {
      ss === null ? ss = [e] : ss.push(e);
    }
    function Kx() {
      if (ss !== null) {
        for (var e = 0; e < ss.length; e++) {
          var t = ss[e], a = t.interleaved;
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
        ss = null;
      }
    }
    function bE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function Zx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Jx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function ga(e, t) {
      return Uh(e, t);
    }
    var ew = Uh;
    function Uh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (Yt | la)) !== Le && T1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (Yt | la)) !== Le && T1(e), i = u, u = u.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var DE = 0, _E = 1, Ah = 2, pg = 3, jh = !1, vg, Fh;
    vg = !1, Fh = null;
    function hg(e) {
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
    function kE(e, t) {
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
    function Yl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: DE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function qu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Fh === u && !vg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), Zb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, ew(e, a);
      } else
        return Jx(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (sd(a)) {
          var s = u.lanes;
          s = hc(s, e.pendingLanes);
          var f = et(s, a);
          u.lanes = f, cd(e, f);
        }
      }
    }
    function mg(e, t) {
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
    function tw(e, t, a, i, u, s) {
      switch (a.tag) {
        case _E: {
          var f = a.payload;
          if (typeof f == "function") {
            RE();
            var p = f.call(s, i, u);
            {
              if (e.mode & st) {
                Tn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              xE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~An | Ie;
        case DE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            RE(), m = v.call(s, i, u);
            {
              if (e.mode & st) {
                Tn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              xE();
            }
          } else
            m = v;
          return m == null ? i : ot({}, i, m);
        }
        case Ah:
          return jh = !0, i;
      }
      return i;
    }
    function Ph(e, t, a, i) {
      var u = e.updateQueue;
      jh = !1, Fh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, T = x.lastBaseUpdate;
          T !== f && (T === null ? x.firstBaseUpdate = m : T.next = m, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, N = F, U = null, ie = null, ze = null, Re = s;
        do {
          var ht = Re.lane, ft = Re.eventTime;
          if (Ml(i, ht)) {
            if (ze !== null) {
              var A = {
                eventTime: ft,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rn,
                tag: Re.tag,
                payload: Re.payload,
                callback: Re.callback,
                next: null
              };
              ze = ze.next = A;
            }
            M = tw(e, u, Re, M, t, a);
            var D = Re.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            Re.lane !== Rn) {
              e.flags |= Ya;
              var I = u.effects;
              I === null ? u.effects = [Re] : I.push(Re);
            }
          } else {
            var b = {
              eventTime: ft,
              lane: ht,
              tag: Re.tag,
              payload: Re.payload,
              callback: Re.callback,
              next: null
            };
            ze === null ? (ie = ze = b, U = M) : ze = ze.next = b, N = et(N, ht);
          }
          if (Re = Re.next, Re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ce = p, le = ce.next;
            ce.next = null, Re = le, u.lastBaseUpdate = ce, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (U = M), u.baseState = U, u.firstBaseUpdate = ie, u.lastBaseUpdate = ze;
        var Ye = u.shared.interleaved;
        if (Ye !== null) {
          var qe = Ye;
          do
            N = et(N, qe.lane), qe = qe.next;
          while (qe !== Ye);
        } else s === null && (u.shared.lanes = F);
        Cp(N), e.lanes = N, e.memoizedState = M;
      }
      Fh = null;
    }
    function nw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function OE() {
      jh = !1;
    }
    function Vh() {
      return jh;
    }
    function ME(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, nw(f, a));
        }
    }
    var qd = {}, Xu = Iu(qd), Xd = Iu(qd), Bh = Iu(qd);
    function $h(e) {
      if (e === qd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LE() {
      var e = $h(Bh.current);
      return e;
    }
    function yg(e, t) {
      Mr(Bh, t, e), Mr(Xd, e, e), Mr(Xu, qd, e);
      var a = SR(t);
      Or(Xu, e), Mr(Xu, a, e);
    }
    function Jc(e) {
      Or(Xu, e), Or(Xd, e), Or(Bh, e);
    }
    function gg() {
      var e = $h(Xu.current);
      return e;
    }
    function NE(e) {
      $h(Bh.current);
      var t = $h(Xu.current), a = ER(t, e.type);
      t !== a && (Mr(Xd, e, e), Mr(Xu, a, e));
    }
    function Sg(e) {
      Xd.current === e && (Or(Xu, e), Or(Xd, e));
    }
    var rw = 0, zE = 1, UE = 1, Kd = 2, Ri = Iu(rw);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function ef(e) {
      return e & zE;
    }
    function Cg(e, t) {
      return e & zE | t;
    }
    function aw(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      Mr(Ri, t, e);
    }
    function tf(e) {
      Or(Ri, e);
    }
    function iw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === P) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Z0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === gt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ie) !== Le;
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
    var Sa = (
      /*   */
      0
    ), In = (
      /* */
      1
    ), el = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), cr = (
      /*   */
      8
    ), Tg = [];
    function Rg() {
      for (var e = 0; e < Tg.length; e++) {
        var t = Tg[e];
        t._workInProgressVersionPrimary = null;
      }
      Tg.length = 0;
    }
    function lw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var se = _.ReactCurrentDispatcher, Zd = _.ReactCurrentBatchConfig, xg, nf;
    xg = /* @__PURE__ */ new Set();
    var cs = F, Nt = null, Wn = null, Gn = null, Ih = !1, Jd = !1, ep = 0, uw = 0, ow = 25, j = null, Ja = null, Zu = -1, wg = !1;
    function bt() {
      {
        var e = j;
        Ja === null ? Ja = [e] : Ja.push(e);
      }
    }
    function ne() {
      {
        var e = j;
        Ja !== null && (Zu++, Ja[Zu] !== e && sw(e));
      }
    }
    function rf(e) {
      e != null && !zn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", j, typeof e);
    }
    function sw(e) {
      {
        var t = Je(Nt);
        if (!xg.has(t) && (xg.add(t), Ja !== null)) {
          for (var a = "", i = 30, u = 0; u <= Zu; u++) {
            for (var s = Ja[u], f = u === Zu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Lr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", j), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, j, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function af(e, t, a, i, u, s) {
      cs = s, Nt = t, Ja = e !== null ? e._debugHookTypes : null, Zu = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = F, e !== null && e.memoizedState !== null ? se.current = rC : Ja !== null ? se.current = nC : se.current = tC;
      var f = a(i, u);
      if (Jd) {
        var p = 0;
        do {
          if (Jd = !1, ep = 0, p >= ow)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, Wn = null, Gn = null, t.updateQueue = null, Zu = -1, se.current = aC, f = a(i, u);
        } while (Jd);
      }
      se.current = am, t._debugHookTypes = Ja;
      var v = Wn !== null && Wn.next !== null;
      if (cs = F, Nt = null, Wn = null, Gn = null, j = null, Ja = null, Zu = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Te) !== Ee && y("Internal React error: Expected static flag was missing. Please notify the React team."), Ih = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function lf() {
      var e = ep !== 0;
      return ep = 0, e;
    }
    function AE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Qr) !== Ee ? t.flags &= ~(Tl | Tr | Gt | at) : t.flags &= ~(Gt | at), e.lanes = Vo(e.lanes, a);
    }
    function jE() {
      if (se.current = am, Ih) {
        for (var e = Nt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ih = !1;
      }
      cs = F, Nt = null, Wn = null, Gn = null, Ja = null, Zu = -1, j = null, XE = !1, Jd = !1, ep = 0;
    }
    function tl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Gn === null ? Nt.memoizedState = Gn = e : Gn = Gn.next = e, Gn;
    }
    function ei() {
      var e;
      if (Wn === null) {
        var t = Nt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Wn.next;
      var a;
      if (Gn === null ? a = Nt.memoizedState : a = Gn.next, a !== null)
        Gn = a, a = Gn.next, Wn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Wn = e;
        var i = {
          memoizedState: Wn.memoizedState,
          baseState: Wn.baseState,
          baseQueue: Wn.baseQueue,
          queue: Wn.queue,
          next: null
        };
        Gn === null ? Nt.memoizedState = Gn = i : Gn = Gn.next = i;
      }
      return Gn;
    }
    function FE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = tl(), u;
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
      var f = s.dispatch = pw.bind(null, Nt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = ei(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Wn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, T = null, M = null, N = null, U = g;
        do {
          var ie = U.lane;
          if (Ml(cs, ie)) {
            if (N !== null) {
              var Re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rn,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null
              };
              N = N.next = Re;
            }
            if (U.hasEagerState)
              x = U.eagerState;
            else {
              var ht = U.action;
              x = e(x, ht);
            }
          } else {
            var ze = {
              lane: ie,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            };
            N === null ? (M = N = ze, T = x) : N = N.next = ze, Nt.lanes = et(Nt.lanes, ie), Cp(ie);
          }
          U = U.next;
        } while (U !== null && U !== g);
        N === null ? T = x : N.next = M, he(x, i.memoizedState) || sp(), i.memoizedState = x, i.baseState = T, i.baseQueue = N, u.lastRenderedState = x;
      }
      var ft = u.interleaved;
      if (ft !== null) {
        var b = ft;
        do {
          var A = b.lane;
          Nt.lanes = et(Nt.lanes, A), Cp(A), b = b.next;
        } while (b !== ft);
      } else f === null && (u.lanes = F);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Og(e, t, a) {
      var i = ei(), u = i.queue;
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
        he(p, i.memoizedState) || sp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function $_(e, t, a) {
    }
    function Y_(e, t, a) {
    }
    function Mg(e, t, a) {
      var i = Nt, u = tl(), s, f = sr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), nf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), nf = !0);
      } else {
        if (s = t(), !nf) {
          var p = t();
          he(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), nf = !0);
        }
        var v = Rm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Po(v, cs) || HE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Xh(VE.bind(null, i, m, e), [e]), i.flags |= Gt, tp(In | cr, PE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = Nt, u = ei(), s = t();
      if (!nf) {
        var f = t();
        he(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), nf = !0);
      }
      var p = u.memoizedState, v = !he(p, s);
      v && (u.memoizedState = s, sp());
      var m = u.queue;
      if (rp(VE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Gn !== null && Gn.memoizedState.tag & In) {
        i.flags |= Gt, tp(In | cr, PE.bind(null, i, m, s, t), void 0, null);
        var g = Rm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Po(g, cs) || HE(i, t, s);
      }
      return s;
    }
    function HE(e, t, a) {
      e.flags |= Oo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Nt.updateQueue;
      if (u === null)
        u = FE(), Nt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function PE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, BE(t) && $E(e);
    }
    function VE(e, t, a) {
      var i = function() {
        BE(t) && $E(e);
      };
      return a(i);
    }
    function BE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !he(a, i);
      } catch {
        return !0;
      }
    }
    function $E(e) {
      var t = ga(e, _e);
      t !== null && Zn(t, e, _e, Bt);
    }
    function Wh(e) {
      var t = tl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: F,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = vw.bind(null, Nt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(Dg);
    }
    function Ng(e) {
      return Og(Dg);
    }
    function tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Nt.updateQueue;
      if (s === null)
        s = FE(), Nt.updateQueue = s, s.lastEffect = u.next = u;
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
    function zg(e) {
      var t = tl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gh(e) {
      var t = ei();
      return t.memoizedState;
    }
    function np(e, t, a, i) {
      var u = tl(), s = i === void 0 ? null : i;
      Nt.flags |= e, u.memoizedState = tp(In | t, a, void 0, s);
    }
    function qh(e, t, a, i) {
      var u = ei(), s = i === void 0 ? null : i, f = void 0;
      if (Wn !== null) {
        var p = Wn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = tp(t, a, f, s);
            return;
          }
        }
      }
      Nt.flags |= e, u.memoizedState = tp(In | t, a, f, s);
    }
    function Xh(e, t) {
      return (Nt.mode & Qr) !== Ee ? np(Tl | Gt | Bi, cr, e, t) : np(Gt | Bi, cr, e, t);
    }
    function rp(e, t) {
      return qh(Gt, cr, e, t);
    }
    function Ug(e, t) {
      return np(at, el, e, t);
    }
    function Kh(e, t) {
      return qh(at, el, e, t);
    }
    function Ag(e, t) {
      var a = at;
      return a |= Cr, (Nt.mode & Qr) !== Ee && (a |= Tr), np(a, Qn, e, t);
    }
    function Zh(e, t) {
      return qh(at, Qn, e, t);
    }
    function YE(e, t) {
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
    function jg(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = at;
      return u |= Cr, (Nt.mode & Qr) !== Ee && (u |= Tr), np(u, Qn, YE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return qh(at, Qn, YE.bind(null, t, e), i);
    }
    function cw(e, t) {
    }
    var em = cw;
    function Fg(e, t) {
      var a = tl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = ei(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = tl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = ei(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Pg(e) {
      var t = tl();
      return t.memoizedState = e, e;
    }
    function IE(e) {
      var t = ei(), a = Wn, i = a.memoizedState;
      return WE(t, i, e);
    }
    function QE(e) {
      var t = ei();
      if (Wn === null)
        return t.memoizedState = e, e;
      var a = Wn.memoizedState;
      return WE(t, a, e);
    }
    function WE(e, t, a) {
      var i = !Lv(cs);
      if (i) {
        if (!he(a, t)) {
          var u = Uv();
          Nt.lanes = et(Nt.lanes, u), Cp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, sp()), e.memoizedState = a, a;
    }
    function fw(e, t, a) {
      var i = da();
      ln(ly(i, mi)), e(!0);
      var u = Zd.transition;
      Zd.transition = {};
      var s = Zd.transition;
      Zd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (ln(i), Zd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ae("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = Wh(!1), t = e[0], a = e[1], i = fw.bind(null, a), u = tl();
      return u.memoizedState = i, [t, i];
    }
    function GE() {
      var e = Lg(), t = e[0], a = ei(), i = a.memoizedState;
      return [t, i];
    }
    function qE() {
      var e = Ng(), t = e[0], a = ei(), i = a.memoizedState;
      return [t, i];
    }
    var XE = !1;
    function dw() {
      return XE;
    }
    function Bg() {
      var e = tl(), t = Rm(), a = t.identifierPrefix, i;
      if (sr()) {
        var u = kx();
        i = ":" + a + "R" + u;
        var s = ep++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = uw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = ei(), t = e.memoizedState;
      return t;
    }
    function pw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ro(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        ZE(t, u);
      else {
        var s = bE(e, t, u, i);
        if (s !== null) {
          var f = Xr();
          Zn(s, e, i, f), JE(s, t, i);
        }
      }
      eC(e, i);
    }
    function vw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ro(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        ZE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === F && (s === null || s.lanes === F)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = se.current, se.current = xi;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, he(m, v)) {
                Zx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              se.current = p;
            }
          }
        }
        var g = bE(e, t, u, i);
        if (g !== null) {
          var x = Xr();
          Zn(g, e, i, x), JE(g, t, i);
        }
      }
      eC(e, i);
    }
    function KE(e) {
      var t = e.alternate;
      return e === Nt || t !== null && t === Nt;
    }
    function ZE(e, t) {
      Jd = Ih = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function JE(e, t, a) {
      if (sd(a)) {
        var i = t.lanes;
        i = hc(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, cd(e, u);
      }
    }
    function eC(e, t, a) {
      zo(e, t);
    }
    var am = {
      readContext: Pn,
      useCallback: Lr,
      useContext: Lr,
      useEffect: Lr,
      useImperativeHandle: Lr,
      useInsertionEffect: Lr,
      useLayoutEffect: Lr,
      useMemo: Lr,
      useReducer: Lr,
      useRef: Lr,
      useState: Lr,
      useDebugValue: Lr,
      useDeferredValue: Lr,
      useTransition: Lr,
      useMutableSource: Lr,
      useSyncExternalStore: Lr,
      useId: Lr,
      unstable_isNewReconciler: X
    }, tC = null, nC = null, rC = null, aC = null, nl = null, xi = null, im = null;
    {
      var $g = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      tC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", bt(), rf(t), Fg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", bt(), rf(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", bt(), rf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", bt(), rf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", bt(), rf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", bt(), rf(t);
          var a = se.current;
          se.current = nl;
          try {
            return Hg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", bt();
          var i = se.current;
          se.current = nl;
          try {
            return _g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", bt(), zg(e);
        },
        useState: function(e) {
          j = "useState", bt();
          var t = se.current;
          se.current = nl;
          try {
            return Wh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", bt(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", bt(), Pg(e);
        },
        useTransition: function() {
          return j = "useTransition", bt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", bt(), Mg(e, t, a);
        },
        useId: function() {
          return j = "useId", bt(), Bg();
        },
        unstable_isNewReconciler: X
      }, nC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", ne(), Fg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", ne(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", ne(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", ne(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", ne(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", ne(), Ag(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", ne();
          var a = se.current;
          se.current = nl;
          try {
            return Hg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", ne();
          var i = se.current;
          se.current = nl;
          try {
            return _g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", ne(), zg(e);
        },
        useState: function(e) {
          j = "useState", ne();
          var t = se.current;
          se.current = nl;
          try {
            return Wh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", ne(), Pg(e);
        },
        useTransition: function() {
          return j = "useTransition", ne(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", ne(), Mg(e, t, a);
        },
        useId: function() {
          return j = "useId", ne(), Bg();
        },
        unstable_isNewReconciler: X
      }, rC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", ne(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", ne(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", ne(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", ne(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", ne(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", ne(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", ne();
          var a = se.current;
          se.current = xi;
          try {
            return nm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", ne();
          var i = se.current;
          se.current = xi;
          try {
            return kg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", ne(), Gh();
        },
        useState: function(e) {
          j = "useState", ne();
          var t = se.current;
          se.current = xi;
          try {
            return Lg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", ne(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", ne(), IE(e);
        },
        useTransition: function() {
          return j = "useTransition", ne(), GE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", ne(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", ne(), rm();
        },
        unstable_isNewReconciler: X
      }, aC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", ne(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", ne(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", ne(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", ne(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", ne(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", ne(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", ne();
          var a = se.current;
          se.current = im;
          try {
            return nm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", ne();
          var i = se.current;
          se.current = im;
          try {
            return Og(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", ne(), Gh();
        },
        useState: function(e) {
          j = "useState", ne();
          var t = se.current;
          se.current = im;
          try {
            return Ng(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", ne(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", ne(), QE(e);
        },
        useTransition: function() {
          return j = "useTransition", ne(), qE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", ne(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", ne(), rm();
        },
        unstable_isNewReconciler: X
      }, nl = {
        readContext: function(e) {
          return $g(), Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ge(), bt(), Fg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ge(), bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ge(), bt(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ge(), bt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ge(), bt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ge(), bt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ge(), bt();
          var a = se.current;
          se.current = nl;
          try {
            return Hg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ge(), bt();
          var i = se.current;
          se.current = nl;
          try {
            return _g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ge(), bt(), zg(e);
        },
        useState: function(e) {
          j = "useState", Ge(), bt();
          var t = se.current;
          se.current = nl;
          try {
            return Wh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ge(), bt(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ge(), bt(), Pg(e);
        },
        useTransition: function() {
          return j = "useTransition", Ge(), bt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ge(), bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ge(), bt(), Mg(e, t, a);
        },
        useId: function() {
          return j = "useId", Ge(), bt(), Bg();
        },
        unstable_isNewReconciler: X
      }, xi = {
        readContext: function(e) {
          return $g(), Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ge(), ne(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ge(), ne(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ge(), ne(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ge(), ne(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ge(), ne(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ge(), ne(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ge(), ne();
          var a = se.current;
          se.current = xi;
          try {
            return nm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ge(), ne();
          var i = se.current;
          se.current = xi;
          try {
            return kg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ge(), ne(), Gh();
        },
        useState: function(e) {
          j = "useState", Ge(), ne();
          var t = se.current;
          se.current = xi;
          try {
            return Lg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ge(), ne(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ge(), ne(), IE(e);
        },
        useTransition: function() {
          return j = "useTransition", Ge(), ne(), GE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ge(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ge(), ne(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", Ge(), ne(), rm();
        },
        unstable_isNewReconciler: X
      }, im = {
        readContext: function(e) {
          return $g(), Pn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ge(), ne(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ge(), ne(), Pn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ge(), ne(), rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ge(), ne(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ge(), ne(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ge(), ne(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ge(), ne();
          var a = se.current;
          se.current = xi;
          try {
            return nm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ge(), ne();
          var i = se.current;
          se.current = xi;
          try {
            return Og(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ge(), ne(), Gh();
        },
        useState: function(e) {
          j = "useState", Ge(), ne();
          var t = se.current;
          se.current = xi;
          try {
            return Ng(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ge(), ne(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ge(), ne(), QE(e);
        },
        useTransition: function() {
          return j = "useTransition", Ge(), ne(), qE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ge(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ge(), ne(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", Ge(), ne(), rm();
        },
        unstable_isNewReconciler: X
      };
    }
    var Ju = fe.unstable_now, iC = 0, lm = -1, ap = -1, um = -1, Yg = !1, om = !1;
    function lC() {
      return Yg;
    }
    function hw() {
      om = !0;
    }
    function mw() {
      Yg = !1, om = !1;
    }
    function yw() {
      Yg = om, om = !1;
    }
    function uC() {
      return iC;
    }
    function oC() {
      iC = Ju();
    }
    function Ig(e) {
      ap = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function sC(e) {
      ap = -1;
    }
    function sm(e, t) {
      if (ap >= 0) {
        var a = Ju() - ap;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ap = -1;
      }
    }
    function rl(e) {
      if (lm >= 0) {
        var t = Ju() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case We:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (um >= 0) {
        var t = Ju() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case We:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function al() {
      lm = Ju();
    }
    function Wg() {
      um = Ju();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function wi(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Zg, Jg, eS, cC, cm, tS, nS, rS, ip;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), ip = /* @__PURE__ */ new Set();
      var fC = /* @__PURE__ */ new Set();
      cm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          fC.has(a) || (fC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cC = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          eS.has(a) || (eS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & st) {
          Tn(!0);
          try {
            s = a(i, u);
          } finally {
            Tn(!1);
          }
        }
        cC(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === F) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: Yr,
      enqueueSetState: function(e, t, a) {
        var i = aa(e), u = Xr(), s = ro(i), f = Yl(u, s);
        f.payload = t, a != null && (cm(a, "setState"), f.callback = a);
        var p = qu(i, f, s);
        p !== null && (Zn(p, i, s, u), Hh(p, i, s)), zo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = aa(e), u = Xr(), s = ro(i), f = Yl(u, s);
        f.tag = _E, f.payload = t, a != null && (cm(a, "replaceState"), f.callback = a);
        var p = qu(i, f, s);
        p !== null && (Zn(p, i, s, u), Hh(p, i, s)), zo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = aa(e), i = Xr(), u = ro(a), s = Yl(i, u);
        s.tag = Ah, t != null && (cm(t, "forceUpdate"), s.callback = t);
        var f = qu(a, s, u);
        f !== null && (Zn(f, a, u, i), Hh(f, a, u)), Zs(a, u);
      }
    };
    function dC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & st) {
            Tn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Tn(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(a, i) || !Fe(u, s) : !0;
    }
    function gw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ip.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Ee && (ip.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ip.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Ee && (ip.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || zn(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function pC(e, t) {
      t.updater = iS, e.stateNode = t, du(t, e), t._reactInternalInstance = qg;
    }
    function vC(e, t, a) {
      var i = !1, u = Aa, s = Aa, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === B && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === E ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Pn(f);
      else {
        u = Ic(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Qc(e, u) : Aa;
      }
      var g = new t(a, s);
      if (e.mode & st) {
        Tn(!0);
        try {
          g = new t(a, s);
        } finally {
          Tn(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      pC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var T = Mt(t) || "Component";
          Kg.has(T) || (Kg.add(T), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, g.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, N = null, U = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? U = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (U = "UNSAFE_componentWillUpdate"), M !== null || N !== null || U !== null) {
            var ie = Mt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(ie) || (Jg.add(ie), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ie, ze, M !== null ? `
  ` + M : "", N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : ""));
          }
        }
      }
      return i && rE(e, u, s), g;
    }
    function Sw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Je(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function hC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Je(e) || "Component";
          Xg.has(s) || (Xg.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      gw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Pn(s);
      else {
        var f = Ic(e, t, !0);
        u.context = Qc(e, f);
      }
      {
        if (u.state === a) {
          var p = Mt(t) || "Component";
          tS.has(p) || (tS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & st && Ti.recordLegacyContextWarning(e, u), Ti.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Sw(e, u), Ph(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = at;
        m |= Cr, (e.mode & Qr) !== Ee && (m |= Tr), e.flags |= m;
      }
    }
    function Ew(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Aa;
      if (typeof p == "object" && p !== null)
        v = Pn(p);
      else {
        var m = Ic(e, t, !0);
        v = Qc(e, m);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && hC(e, u, a, v), OE();
      var T = e.memoizedState, M = u.state = T;
      if (Ph(e, a, u, i), M = e.memoizedState, s === a && T === M && !Ch() && !Vh()) {
        if (typeof u.componentDidMount == "function") {
          var N = at;
          N |= Cr, (e.mode & Qr) !== Ee && (N |= Tr), e.flags |= N;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), M = e.memoizedState);
      var U = Vh() || dC(e, t, s, a, T, M, v);
      if (U) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ie = at;
          ie |= Cr, (e.mode & Qr) !== Ee && (ie |= Tr), e.flags |= ie;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = at;
          ze |= Cr, (e.mode & Qr) !== Ee && (ze |= Tr), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, U;
    }
    function Cw(e, t, a, i, u) {
      var s = t.stateNode;
      kE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : wi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, g = a.contextType, x = Aa;
      if (typeof g == "object" && g !== null)
        x = Pn(g);
      else {
        var T = Ic(t, a, !0);
        x = Qc(t, T);
      }
      var M = a.getDerivedStateFromProps, N = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== x) && hC(t, s, i, x), OE();
      var U = t.memoizedState, ie = s.state = U;
      if (Ph(t, i, s, u), ie = t.memoizedState, f === v && U === ie && !Ch() && !Vh() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= ia), !1;
      typeof M == "function" && (aS(t, a, M, i), ie = t.memoizedState);
      var ze = Vh() || dC(t, a, p, i, U, ie, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return ze ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ie, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ie, x)), typeof s.componentDidUpdate == "function" && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ia)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || U !== e.memoizedState) && (t.flags |= ia), t.memoizedProps = i, t.memoizedState = ie), s.props = i, s.state = ie, s.context = x, ze;
    }
    function fs(e, t) {
      return {
        value: e,
        source: t,
        stack: Ef(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Tw(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Tw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === W)
            return;
          console.error(i);
        }
        var p = u ? Je(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === $)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Je(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + m);
        console.error(x);
      } catch (T) {
        setTimeout(function() {
          throw T;
        });
      }
    }
    var Rw = typeof WeakMap == "function" ? WeakMap : Map;
    function mC(e, t, a) {
      var i = Yl(Bt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        hD(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Yl(Bt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          D1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        D1(e), oS(e, t), typeof u != "function" && pD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (_r(e.lanes, _e) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Je(e) || "Unknown"));
      }), i;
    }
    function yC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Rw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = mD.bind(null, e, t, a);
        Ir && Tp(e, a), t.then(s, s);
      }
    }
    function xw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ww(e, t) {
      var a = e.tag;
      if ((e.mode & Te) === Ee && (a === q || a === ke || a === Ke)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function gC(e) {
      var t = e;
      do {
        if (t.tag === P && iw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function SC(e, t, a, i, u) {
      if ((e.mode & Te) === Ee) {
        if (e === t)
          e.flags |= An;
        else {
          if (e.flags |= Ie, a.flags |= Mo, a.flags &= ~(Ps | Br), a.tag === W) {
            var s = a.alternate;
            if (s === null)
              a.tag = yn;
            else {
              var f = Yl(Bt, _e);
              f.tag = Ah, qu(a, f, _e);
            }
          }
          a.lanes = et(a.lanes, _e);
        }
        return e;
      }
      return e.flags |= An, e.lanes = u, e;
    }
    function bw(e, t, a, i, u) {
      if (a.flags |= Br, Ir && Tp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ww(a), sr() && a.mode & Te && cE();
        var f = gC(t);
        if (f !== null) {
          f.flags &= ~an, SC(f, t, a, e, u), f.mode & Te && yC(e, s, u), xw(f, e, s);
          return;
        } else {
          if (!od(u)) {
            yC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (sr() && a.mode & Te) {
        cE();
        var v = gC(t);
        if (v !== null) {
          (v.flags & An) === Le && (v.flags |= an), SC(v, t, a, e, u), tg(fs(i, a));
          return;
        }
      }
      i = fs(i, a), iD(i);
      var m = t;
      do {
        switch (m.tag) {
          case $: {
            var g = i;
            m.flags |= An;
            var x = bu(u);
            m.lanes = et(m.lanes, x);
            var T = mC(m, g, x);
            mg(m, T);
            return;
          }
          case W:
            var M = i, N = m.type, U = m.stateNode;
            if ((m.flags & Ie) === Le && (typeof N.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && !g1(U))) {
              m.flags |= An;
              var ie = bu(u);
              m.lanes = et(m.lanes, ie);
              var ze = sS(m, M, ie);
              mg(m, ze);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Dw() {
      return null;
    }
    var lp = _.ReactCurrentOwner, bi = !1, cS, up, fS, dS, pS, ds, vS, fm, op;
    cS = {}, up = {}, fS = {}, dS = {}, pS = {}, ds = !1, vS = {}, fm = {}, op = {};
    function Gr(e, t, a, i) {
      e === null ? t.child = TE(t, null, a, i) : t.child = Xc(t, e.child, a, i);
    }
    function _w(e, t, a, i) {
      t.child = Xc(t, e.child, null, i), t.child = Xc(t, null, a, i);
    }
    function EC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ei(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Zc(t, u), mu(t);
      {
        if (lp.current = t, Ma(!0), v = af(e, t, f, i, p, u), m = lf(), t.mode & st) {
          Tn(!0);
          try {
            v = af(e, t, f, i, p, u), m = lf();
          } finally {
            Tn(!1);
          }
        }
        Ma(!1);
      }
      return wr(), e !== null && !bi ? (AE(e, t, u), Il(e, t, u)) : (sr() && m && qy(t), t.flags |= Pi, Gr(e, t, v, u), t.child);
    }
    function CC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ND(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = vf(s), t.tag = Ke, t.type = f, yS(t, s), TC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ei(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          ), a.defaultProps !== void 0) {
            var v = Mt(s) || "Unknown";
            op[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), op[v] = !0);
          }
        }
        var m = JS(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Ei(
          x,
          i,
          // Resolved props
          "prop",
          Mt(g)
        );
      }
      var T = e.child, M = RS(e, u);
      if (!M) {
        var N = T.memoizedProps, U = a.compare;
        if (U = U !== null ? U : Fe, U(N, i) && e.ref === t.ref)
          return Il(e, t, u);
      }
      t.flags |= Pi;
      var ie = ys(T, i);
      return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
    }
    function TC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Pe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Ei(
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
        if (Fe(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (bi = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & Mo) !== Le && (bi = !0);
          else return t.lanes = e.lanes, Il(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Te) === Ee) {
          var f = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, xm(t, a);
        } else if (_r(a, ar)) {
          var x = {
            baseLanes: F,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var T = s !== null ? s.baseLanes : a;
          xm(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = et(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = ar;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, xm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = et(s.baseLanes, a), t.memoizedState = null) : M = a, xm(t, M);
      }
      return Gr(e, t, u, a), t.child;
    }
    function kw(e, t, a) {
      var i = t.pendingProps;
      return Gr(e, t, i, a), t.child;
    }
    function Ow(e, t, a) {
      var i = t.pendingProps.children;
      return Gr(e, t, i, a), t.child;
    }
    function Mw(e, t, a) {
      {
        t.flags |= at;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Gr(e, t, s, a), t.child;
    }
    function xC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Er, t.flags |= qf);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ei(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = Ic(t, a, !0);
        f = Qc(t, p);
      }
      var v, m;
      Zc(t, u), mu(t);
      {
        if (lp.current = t, Ma(!0), v = af(e, t, a, i, f, u), m = lf(), t.mode & st) {
          Tn(!0);
          try {
            v = af(e, t, a, i, f, u), m = lf();
          } finally {
            Tn(!1);
          }
        }
        Ma(!1);
      }
      return wr(), e !== null && !bi ? (AE(e, t, u), Il(e, t, u)) : (sr() && m && qy(t), t.flags |= Pi, Gr(e, t, v, u), t.child);
    }
    function wC(e, t, a, i, u) {
      {
        switch (GD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ie, t.flags |= An;
            var m = new Error("Simulated error coming from DevTools"), g = bu(u);
            t.lanes = et(t.lanes, g);
            var x = sS(t, fs(m, t), g);
            mg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && Ei(
            T,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var M;
      Ji(a) ? (M = !0, Rh(t)) : M = !1, Zc(t, u);
      var N = t.stateNode, U;
      N === null ? (pm(e, t), vC(t, a, i), lS(t, a, i, u), U = !0) : e === null ? U = Ew(t, a, i, u) : U = Cw(e, t, a, i, u);
      var ie = mS(e, t, a, U, M, u);
      {
        var ze = t.stateNode;
        U && ze.props !== i && (ds || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Je(t) || "a component"), ds = !0);
      }
      return ie;
    }
    function mS(e, t, a, i, u, s) {
      xC(e, t);
      var f = (t.flags & Ie) !== Le;
      if (!i && !f)
        return u && lE(t, a, !1), Il(e, t, s);
      var p = t.stateNode;
      lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, sC();
      else {
        mu(t);
        {
          if (Ma(!0), v = p.render(), t.mode & st) {
            Tn(!0);
            try {
              p.render();
            } finally {
              Tn(!1);
            }
          }
          Ma(!1);
        }
        wr();
      }
      return t.flags |= Pi, e !== null && f ? _w(e, t, v, s) : Gr(e, t, v, s), t.memoizedState = p.state, u && lE(t, a, !0), t.child;
    }
    function bC(e) {
      var t = e.stateNode;
      t.pendingContext ? aE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && aE(e, t.context, !1), yg(e, t.containerInfo);
    }
    function Lw(e, t, a) {
      if (bC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      kE(e, t), Ph(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & an) {
          var g = fs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return DC(e, t, p, a, g);
        } else if (p !== s) {
          var x = fs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return DC(e, t, p, a, x);
        } else {
          Ux(t);
          var T = TE(t, null, p, a);
          t.child = T;
          for (var M = T; M; )
            M.flags = M.flags & ~Yt | la, M = M.sibling;
        }
      } else {
        if (qc(), p === s)
          return Il(e, t, a);
        Gr(e, t, p, a);
      }
      return t.child;
    }
    function DC(e, t, a, i, u) {
      return qc(), tg(u), t.flags |= an, Gr(e, t, a, i), t.child;
    }
    function Nw(e, t, a) {
      NE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= wt), xC(e, t), Gr(e, t, f, a), t.child;
    }
    function zw(e, t) {
      return e === null && eg(t), null;
    }
    function Uw(e, t, a, i) {
      pm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = zD(v), g = wi(v, u), x;
      switch (m) {
        case q:
          return yS(t, v), t.type = v = vf(v), x = hS(null, t, v, g, i), x;
        case W:
          return t.type = v = WS(v), x = wC(null, t, v, g, i), x;
        case ke:
          return t.type = v = GS(v), x = EC(null, t, v, g, i), x;
        case yt: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && Ei(
              T,
              g,
              // Resolved for outer only
              "prop",
              Mt(v)
            );
          }
          return x = CC(
            null,
            t,
            v,
            wi(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Pe && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function Aw(e, t, a, i, u) {
      pm(e, t), t.tag = W;
      var s;
      return Ji(a) ? (s = !0, Rh(t)) : s = !1, Zc(t, u), vC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function jw(e, t, a, i) {
      pm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Ic(t, a, !1);
        s = Qc(t, f);
      }
      Zc(t, i);
      var p, v;
      mu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = Mt(a) || "Unknown";
          cS[m] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), cS[m] = !0);
        }
        t.mode & st && Ti.recordLegacyContextWarning(t, null), Ma(!0), lp.current = t, p = af(null, t, a, u, s, i), v = lf(), Ma(!1);
      }
      if (wr(), t.flags |= Pi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Mt(a) || "Unknown";
        up[g] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), up[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Mt(a) || "Unknown";
          up[x] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), up[x] = !0);
        }
        t.tag = W, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return Ji(a) ? (T = !0, Rh(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), pC(t, p), lS(t, a, u, i), mS(null, t, a, !0, T, i);
      } else {
        if (t.tag = q, t.mode & st) {
          Tn(!0);
          try {
            p = af(null, t, a, u, s, i), v = lf();
          } finally {
            Tn(!1);
          }
        }
        return sr() && v && qy(t), Gr(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = na();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Mt(t) || "Unknown";
          op[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), op[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Mt(t) || "Unknown";
          dS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Mt(t) || "Unknown";
          fS[v] || (y("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Rn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: Dw(),
        transitions: null
      };
    }
    function Fw(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Hw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Kd);
    }
    function Pw(e, t) {
      return Vo(e.childLanes, t);
    }
    function _C(e, t, a) {
      var i = t.pendingProps;
      qD(t) && (t.flags |= Ie);
      var u = Ri.current, s = !1, f = (t.flags & Ie) !== Le;
      if (f || Hw(u, e) ? (s = !0, t.flags &= ~Ie) : (e === null || e.memoizedState !== null) && (u = aw(u, UE)), u = ef(u), Ku(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Iw(t, v);
        }
        var m = i.children, g = i.fallback;
        if (s) {
          var x = Vw(t, m, g, a), T = t.child;
          return T.memoizedState = SS(a), t.memoizedState = gS, x;
        } else
          return ES(t, m);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var N = M.dehydrated;
          if (N !== null)
            return Qw(e, t, f, i, N, M, a);
        }
        if (s) {
          var U = i.fallback, ie = i.children, ze = $w(e, t, ie, U, a), Re = t.child, ht = e.child.memoizedState;
          return Re.memoizedState = ht === null ? SS(a) : Fw(ht, a), Re.childLanes = Pw(e, a), t.memoizedState = gS, ze;
        } else {
          var ft = i.children, b = Bw(e, t, ft, a);
          return t.memoizedState = null, b;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Vw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Te) === Ee && s !== null ? (p = s, p.childLanes = F, p.pendingProps = f, e.mode & Qe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = io(a, u, i, null)) : (p = CS(f, u), v = io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return k1(e, t, F, null);
    }
    function kC(e, t) {
      return ys(e, t);
    }
    function Bw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = kC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Te) === Ee && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Rt) : p.push(s);
      }
      return t.child = f, f;
    }
    function $w(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Te) === Ee && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        m = g, m.childLanes = F, m.pendingProps = v, t.mode & Qe && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = kC(f, v), m.subtreeFlags = f.subtreeFlags & Bn;
      var x;
      return p !== null ? x = ys(p, i) : (x = io(i, s, u, null), x.flags |= Yt), x.return = t, m.return = t, m.sibling = x, t.child = m, x;
    }
    function dm(e, t, a, i) {
      i !== null && tg(i), Xc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= Yt, t.memoizedState = null, f;
    }
    function Yw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = io(i, s, u, null);
      return v.flags |= Yt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Te) !== Ee && Xc(t, e.child, null, u), v;
    }
    function Iw(e, t, a) {
      return (e.mode & Te) === Ee ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = _e) : Hy(t) ? e.lanes = hi : e.lanes = ar, null;
    }
    function Qw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & an) {
          t.flags &= ~an;
          var b = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return dm(e, t, f, b);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ie, null;
          var A = i.children, D = i.fallback, I = Yw(e, t, A, D, f), ce = t.child;
          return ce.memoizedState = SS(f), t.memoizedState = gS, I;
        }
      else {
        if (Nx(), (t.mode & Te) === Ee)
          return dm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, m;
          {
            var g = XR(u);
            p = g.digest, v = g.message, m = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = uS(x, p, m);
          return dm(e, t, f, T);
        }
        var M = _r(f, e.childLanes);
        if (bi || M) {
          var N = Rm();
          if (N !== null) {
            var U = Fv(N, f);
            if (U !== Rn && U !== s.retryLane) {
              s.retryLane = U;
              var ie = Bt;
              ga(e, U), Zn(N, e, U, ie);
            }
          }
          BS();
          var ze = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return dm(e, t, f, ze);
        } else if (Z0(u)) {
          t.flags |= Ie, t.child = e.child;
          var Re = yD.bind(null, e);
          return KR(u, Re), null;
        } else {
          Ax(t, u, s.treeContext);
          var ht = i.children, ft = ES(t, ht);
          return ft.flags |= la, ft;
        }
      }
    }
    function OC(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), fg(e.return, t, a);
    }
    function Ww(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === P) {
          var u = i.memoizedState;
          u !== null && OC(i, a, e);
        } else if (i.tag === gt)
          OC(i, a, e);
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
    function Gw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
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
    function Xw(e, t) {
      e !== void 0 && !fm[e] && (e !== "collapsed" && e !== "hidden" ? (fm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (fm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function MC(e, t) {
      {
        var a = zn(e), i = !a && typeof Pr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Kw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!MC(e[a], a))
              return;
        } else {
          var i = Pr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!MC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function TS(e, t, a, i, u) {
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
    function LC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      qw(u), Xw(s, u), Kw(f, u), Gr(e, t, f, a);
      var p = Ri.current, v = Eg(p, Kd);
      if (v)
        p = Cg(p, Kd), t.flags |= Ie;
      else {
        var m = e !== null && (e.flags & Ie) !== Le;
        m && Ww(t, t.child, a), p = ef(p);
      }
      if (Ku(t, p), (t.mode & Te) === Ee)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Gw(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), TS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var T = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var N = M.alternate;
              if (N !== null && Yh(N) === null) {
                t.child = M;
                break;
              }
              var U = M.sibling;
              M.sibling = T, T = M, M = U;
            }
            TS(
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
            TS(
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
    function Zw(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Xc(t, null, i, a) : Gr(e, t, i, a), t.child;
    }
    var NC = !1;
    function Jw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || NC || (NC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ei(v, s, "prop", "Context.Provider");
      }
      if (wE(t, u, p), f !== null) {
        var m = f.value;
        if (he(m, p)) {
          if (f.children === s.children && !Ch())
            return Il(e, t, a);
        } else
          qx(t, u, a);
      }
      var g = s.children;
      return Gr(e, t, g, a), t.child;
    }
    var zC = !1;
    function eb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (zC || (zC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var f = Pn(i);
      mu(t);
      var p;
      return lp.current = t, Ma(!0), p = s(f), Ma(!1), wr(), t.flags |= Pi, Gr(e, t, p, a), t.child;
    }
    function sp() {
      bi = !0;
    }
    function pm(e, t) {
      (t.mode & Te) === Ee && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Yt);
    }
    function Il(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), sC(), Cp(t.lanes), _r(a, t.childLanes) ? (Wx(e, t), t.child) : null;
    }
    function tb(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Rt) : s.push(e), a.flags |= Yt, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!_r(a, t);
    }
    function nb(e, t, a) {
      switch (t.tag) {
        case $:
          bC(t), t.stateNode, qc();
          break;
        case K:
          NE(t);
          break;
        case W: {
          var i = t.type;
          Ji(i) && Rh(t);
          break;
        }
        case J:
          yg(t, t.stateNode.containerInfo);
          break;
        case it: {
          var u = t.memoizedProps.value, s = t.type._context;
          wE(t, s, u);
          break;
        }
        case We:
          {
            var f = _r(a, t.childLanes);
            f && (t.flags |= at);
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
              return Ku(t, ef(Ri.current)), t.flags |= Ie, null;
            var m = t.child, g = m.childLanes;
            if (_r(a, g))
              return _C(e, t, a);
            Ku(t, ef(Ri.current));
            var x = Il(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Ku(t, ef(Ri.current));
          break;
        }
        case gt: {
          var T = (e.flags & Ie) !== Le, M = _r(a, t.childLanes);
          if (T) {
            if (M)
              return LC(e, t, a);
            t.flags |= Ie;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), Ku(t, Ri.current), M)
            break;
          return null;
        }
        case He:
        case tt:
          return t.lanes = F, RC(e, t, a);
      }
      return Il(e, t, a);
    }
    function UC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return tb(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ch() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          bi = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ie) === Le)
            return bi = !1, nb(e, t, a);
          (e.flags & Mo) !== Le ? bi = !0 : bi = !1;
        }
      } else if (bi = !1, sr() && Dx(t)) {
        var f = t.index, p = _x();
        sE(t, p, f);
      }
      switch (t.lanes = F, t.tag) {
        case ue:
          return jw(e, t, t.type, a);
        case sn: {
          var v = t.elementType;
          return Uw(e, t, v, a);
        }
        case q: {
          var m = t.type, g = t.pendingProps, x = t.elementType === m ? g : wi(m, g);
          return hS(e, t, m, x, a);
        }
        case W: {
          var T = t.type, M = t.pendingProps, N = t.elementType === T ? M : wi(T, M);
          return wC(e, t, T, N, a);
        }
        case $:
          return Lw(e, t, a);
        case K:
          return Nw(e, t, a);
        case xe:
          return zw(e, t);
        case P:
          return _C(e, t, a);
        case J:
          return Zw(e, t, a);
        case ke: {
          var U = t.type, ie = t.pendingProps, ze = t.elementType === U ? ie : wi(U, ie);
          return EC(e, t, U, ze, a);
        }
        case Ae:
          return kw(e, t, a);
        case Xe:
          return Ow(e, t, a);
        case We:
          return Mw(e, t, a);
        case it:
          return Jw(e, t, a);
        case Tt:
          return eb(e, t, a);
        case yt: {
          var Re = t.type, ht = t.pendingProps, ft = wi(Re, ht);
          if (t.type !== t.elementType) {
            var b = Re.propTypes;
            b && Ei(
              b,
              ft,
              // Resolved for outer only
              "prop",
              Mt(Re)
            );
          }
          return ft = wi(Re.type, ft), CC(e, t, Re, ft, a);
        }
        case Ke:
          return TC(e, t, t.type, t.pendingProps, a);
        case yn: {
          var A = t.type, D = t.pendingProps, I = t.elementType === A ? D : wi(A, D);
          return Aw(e, t, A, I, a);
        }
        case gt:
          return LC(e, t, a);
        case cn:
          break;
        case He:
          return RC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function uf(e) {
      e.flags |= at;
    }
    function AC(e) {
      e.flags |= Er, e.flags |= qf;
    }
    var jC, xS, FC, HC;
    jC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === K || u.tag === xe)
          xR(e, u.stateNode);
        else if (u.tag !== J) {
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
    }, xS = function(e, t) {
    }, FC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = bR(f, a, s, i, u, p);
        t.updateQueue = v, v && uf(t);
      }
    }, HC = function(e, t, a, i) {
      a !== i && uf(t);
    };
    function cp(e, t) {
      if (!sr())
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
    function fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = F, i = Le;
      if (t) {
        if ((e.mode & Qe) !== Ee) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = et(a, et(m.lanes, m.childLanes)), i |= m.subtreeFlags & Bn, i |= m.flags & Bn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & Bn, i |= g.flags & Bn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Qe) !== Ee) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function rb(e, t, a) {
      if (Vx() && (t.mode & Te) !== Ee && (t.flags & Ie) === Le)
        return mE(t), qc(), t.flags |= an | Br | An, !1;
      var i = _h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Hx(t), fr(t), (t.mode & Qe) !== Ee) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (qc(), (t.flags & Ie) === Le && (t.memoizedState = null), t.flags |= at, fr(t), (t.mode & Qe) !== Ee) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return yE(), !0;
    }
    function PC(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case ue:
        case sn:
        case Ke:
        case q:
        case ke:
        case Ae:
        case Xe:
        case We:
        case Tt:
        case yt:
          return fr(t), null;
        case W: {
          var u = t.type;
          return Ji(u) && Th(t), fr(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (Jc(t), Qy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = _h(t);
            if (f)
              uf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & an) !== Le) && (t.flags |= ia, yE());
            }
          }
          return xS(e, t), fr(t), null;
        }
        case K: {
          Sg(t);
          var v = LE(), m = t.type;
          if (e !== null && t.stateNode != null)
            FC(e, t, m, i, v), e.ref !== t.ref && AC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return fr(t), null;
            }
            var g = gg(), x = _h(t);
            if (x)
              jx(t, v, g) && uf(t);
            else {
              var T = RR(m, i, v, g, t);
              jC(T, t, !1, !1), t.stateNode = T, wR(T, m, i, v) && uf(t);
            }
            t.ref !== null && AC(t);
          }
          return fr(t), null;
        }
        case xe: {
          var M = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            HC(e, t, N, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var U = LE(), ie = gg(), ze = _h(t);
            ze ? Fx(t) && uf(t) : t.stateNode = DR(M, U, ie, t);
          }
          return fr(t), null;
        }
        case P: {
          tf(t);
          var Re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ht = rb(e, t, Re);
            if (!ht)
              return t.flags & An ? t : null;
          }
          if ((t.flags & Ie) !== Le)
            return t.lanes = a, (t.mode & Qe) !== Ee && Gg(t), t;
          var ft = Re !== null, b = e !== null && e.memoizedState !== null;
          if (ft !== b && ft) {
            var A = t.child;
            if (A.flags |= Vi, (t.mode & Te) !== Ee) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Q);
              D || Eg(Ri.current, UE) ? aD() : BS();
            }
          }
          var I = t.updateQueue;
          if (I !== null && (t.flags |= at), fr(t), (t.mode & Qe) !== Ee && ft) {
            var ce = t.child;
            ce !== null && (t.treeBaseDuration -= ce.treeBaseDuration);
          }
          return null;
        }
        case J:
          return Jc(t), xS(e, t), e === null && Ex(t.stateNode.containerInfo), fr(t), null;
        case it:
          var le = t.type._context;
          return cg(le, t), fr(t), null;
        case yn: {
          var Ye = t.type;
          return Ji(Ye) && Th(t), fr(t), null;
        }
        case gt: {
          tf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return fr(t), null;
          var zt = (t.flags & Ie) !== Le, Et = qe.rendering;
          if (Et === null)
            if (zt)
              cp(qe, !1);
            else {
              var Mn = lD() && (e === null || (e.flags & Ie) === Le);
              if (!Mn)
                for (var Ct = t.child; Ct !== null; ) {
                  var xn = Yh(Ct);
                  if (xn !== null) {
                    zt = !0, t.flags |= Ie, cp(qe, !1);
                    var Nr = xn.updateQueue;
                    return Nr !== null && (t.updateQueue = Nr, t.flags |= at), t.subtreeFlags = Le, Gx(t, a), Ku(t, Cg(Ri.current, Kd)), t.child;
                  }
                  Ct = Ct.sibling;
                }
              qe.tail !== null && en() > u1() && (t.flags |= Ie, zt = !0, cp(qe, !1), t.lanes = Dv);
            }
          else {
            if (!zt) {
              var mr = Yh(Et);
              if (mr !== null) {
                t.flags |= Ie, zt = !0;
                var Fa = mr.updateQueue;
                if (Fa !== null && (t.updateQueue = Fa, t.flags |= at), cp(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Et.alternate && !sr())
                  return fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              en() * 2 - qe.renderingStartTime > u1() && a !== ar && (t.flags |= Ie, zt = !0, cp(qe, !1), t.lanes = Dv);
            }
            if (qe.isBackwards)
              Et.sibling = t.child, t.child = Et;
            else {
              var Kr = qe.last;
              Kr !== null ? Kr.sibling = Et : t.child = Et, qe.last = Et;
            }
          }
          if (qe.tail !== null) {
            var Zr = qe.tail;
            qe.rendering = Zr, qe.tail = Zr.sibling, qe.renderingStartTime = en(), Zr.sibling = null;
            var zr = Ri.current;
            return zt ? zr = Cg(zr, Kd) : zr = ef(zr), Ku(t, zr), Zr;
          }
          return fr(t), null;
        }
        case cn:
          break;
        case He:
        case tt: {
          VS(t);
          var Xl = t.memoizedState, hf = Xl !== null;
          if (e !== null) {
            var bp = e.memoizedState, ul = bp !== null;
            ul !== hf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !k && (t.flags |= Vi);
          }
          return !hf || (t.mode & Te) === Ee ? fr(t) : _r(ll, ar) && (fr(t), t.subtreeFlags & (Yt | at) && (t.flags |= Vi)), null;
        }
        case rn:
          return null;
        case dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ab(e, t, a) {
      switch (Xy(t), t.tag) {
        case W: {
          var i = t.type;
          Ji(i) && Th(t);
          var u = t.flags;
          return u & An ? (t.flags = u & ~An | Ie, (t.mode & Qe) !== Ee && Gg(t), t) : null;
        }
        case $: {
          t.stateNode, Jc(t), Qy(t), Rg();
          var s = t.flags;
          return (s & An) !== Le && (s & Ie) === Le ? (t.flags = s & ~An | Ie, t) : null;
        }
        case K:
          return Sg(t), null;
        case P: {
          tf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            qc();
          }
          var p = t.flags;
          return p & An ? (t.flags = p & ~An | Ie, (t.mode & Qe) !== Ee && Gg(t), t) : null;
        }
        case gt:
          return tf(t), null;
        case J:
          return Jc(t), null;
        case it:
          var v = t.type._context;
          return cg(v, t), null;
        case He:
        case tt:
          return VS(t), null;
        case rn:
          return null;
        default:
          return null;
      }
    }
    function VC(e, t, a) {
      switch (Xy(t), t.tag) {
        case W: {
          var i = t.type.childContextTypes;
          i != null && Th(t);
          break;
        }
        case $: {
          t.stateNode, Jc(t), Qy(t), Rg();
          break;
        }
        case K: {
          Sg(t);
          break;
        }
        case J:
          Jc(t);
          break;
        case P:
          tf(t);
          break;
        case gt:
          tf(t);
          break;
        case it:
          var u = t.type._context;
          cg(u, t);
          break;
        case He:
        case tt:
          VS(t);
          break;
      }
    }
    var BC = null;
    BC = /* @__PURE__ */ new Set();
    var vm = !1, dr = !1, ib = typeof WeakSet == "function" ? WeakSet : Set, me = null, of = null, sf = null;
    function lb(e) {
      Cl(null, function() {
        throw e;
      }), Wf();
    }
    var ub = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Qe)
        try {
          al(), t.componentWillUnmount();
        } finally {
          rl(e);
        }
      else
        t.componentWillUnmount();
    };
    function $C(e, t) {
      try {
        eo(Qn, e);
      } catch (a) {
        Wt(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        ub(e, a);
      } catch (i) {
        Wt(e, t, i);
      }
    }
    function ob(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Wt(e, t, i);
      }
    }
    function YC(e, t) {
      try {
        QC(e);
      } catch (a) {
        Wt(e, t, a);
      }
    }
    function cf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (be && Be && e.mode & Qe)
              try {
                al(), i = a(null);
              } finally {
                rl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Wt(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          a.current = null;
    }
    function hm(e, t, a) {
      try {
        a();
      } catch (i) {
        Wt(e, t, i);
      }
    }
    var IC = !1;
    function sb(e, t) {
      CR(e.containerInfo), me = t, cb();
      var a = IC;
      return IC = !1, a;
    }
    function cb() {
      for (; me !== null; ) {
        var e = me, t = e.child;
        (e.subtreeFlags & pu) !== Le && t !== null ? (t.return = e, me = t) : fb();
      }
    }
    function fb() {
      for (; me !== null; ) {
        var e = me;
        Lt(e);
        try {
          db(e);
        } catch (a) {
          Wt(e, e.return, a);
        }
        wn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, me = t;
          return;
        }
        me = e.return;
      }
    }
    function db(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ia) !== Le) {
        switch (Lt(e), e.tag) {
          case q:
          case ke:
          case Ke:
            break;
          case W: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ds && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : wi(e.type, i), u);
              {
                var p = BC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Je(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var v = e.stateNode;
              QR(v.containerInfo);
            }
            break;
          }
          case K:
          case xe:
          case J:
          case yn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        wn();
      }
    }
    function Di(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & cr) !== Sa ? xv(t) : (e & Qn) !== Sa && Ua(t), (e & el) !== Sa && Rp(!0), hm(t, a, p), (e & el) !== Sa && Rp(!1), (e & cr) !== Sa ? qs() : (e & Qn) !== Sa && yu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function eo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & cr) !== Sa ? Yi(t) : (e & Qn) !== Sa && wv(t);
            var f = s.create;
            (e & el) !== Sa && Rp(!0), s.destroy = f(), (e & el) !== Sa && Rp(!1), (e & cr) !== Sa ? Gs() : (e & Qn) !== Sa && Lo();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Qn) !== Le ? v = "useLayoutEffect" : (s.tag & el) !== Le ? v = "useInsertionEffect" : v = "useEffect";
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
    function pb(e, t) {
      if ((t.flags & at) !== Le)
        switch (t.tag) {
          case We: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = uC(), p = t.alternate === null ? "mount" : "update";
            lC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case $:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case We:
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
    function vb(e, t, a, i) {
      if ((a.flags & nr) !== Le)
        switch (a.tag) {
          case q:
          case ke:
          case Ke: {
            if (!dr)
              if (a.mode & Qe)
                try {
                  al(), eo(Qn | In, a);
                } finally {
                  rl(a);
                }
              else
                eo(Qn | In, a);
            break;
          }
          case W: {
            var u = a.stateNode;
            if (a.flags & at && !dr)
              if (t === null)
                if (a.type === a.elementType && !ds && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & Qe)
                  try {
                    al(), u.componentDidMount();
                  } finally {
                    rl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : wi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ds && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & Qe)
                  try {
                    al(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    rl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ds && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), ME(a, p, u));
            break;
          }
          case $: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    m = a.child.stateNode;
                    break;
                  case W:
                    m = a.child.stateNode;
                    break;
                }
              ME(a, v, m);
            }
            break;
          }
          case K: {
            var g = a.stateNode;
            if (t === null && a.flags & at) {
              var x = a.type, T = a.memoizedProps;
              LR(g, x, T);
            }
            break;
          }
          case xe:
            break;
          case J:
            break;
          case We: {
            {
              var M = a.memoizedProps, N = M.onCommit, U = M.onRender, ie = a.stateNode.effectDuration, ze = uC(), Re = t === null ? "mount" : "update";
              lC() && (Re = "nested-update"), typeof U == "function" && U(a.memoizedProps.id, Re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof N == "function" && N(a.memoizedProps.id, Re, ie, ze), fD(a);
                var ht = a.return;
                e: for (; ht !== null; ) {
                  switch (ht.tag) {
                    case $:
                      var ft = ht.stateNode;
                      ft.effectDuration += ie;
                      break e;
                    case We:
                      var b = ht.stateNode;
                      b.effectDuration += ie;
                      break e;
                  }
                  ht = ht.return;
                }
              }
            }
            break;
          }
          case P: {
            Tb(e, a);
            break;
          }
          case gt:
          case yn:
          case cn:
          case He:
          case tt:
          case dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      dr || a.flags & Er && QC(a);
    }
    function hb(e) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke: {
          if (e.mode & Qe)
            try {
              al(), $C(e, e.return);
            } finally {
              rl(e);
            }
          else
            $C(e, e.return);
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ob(e, e.return, t), YC(e, e.return);
          break;
        }
        case K: {
          YC(e, e.return);
          break;
        }
      }
    }
    function mb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? BR(u) : YR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Wt(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? $R(s) : IR(s, i.memoizedProps);
            } catch (f) {
              Wt(e, e.return, f);
            }
        } else if (!((i.tag === He || i.tag === tt) && i.memoizedState !== null && i !== e)) {
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
    function QC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Qe)
            try {
              al(), u = t(i);
            } finally {
              rl(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Je(e)), t.current = i;
      }
    }
    function yb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function WC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, WC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && Rx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function gb(e) {
      for (var t = e.return; t !== null; ) {
        if (GC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function GC(e) {
      return e.tag === K || e.tag === $ || e.tag === J;
    }
    function qC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || GC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== xe && t.tag !== Ht; ) {
          if (t.flags & Yt || t.child === null || t.tag === J)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Yt))
          return t.stateNode;
      }
    }
    function Sb(e) {
      var t = gb(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & wt && (K0(a), t.flags &= ~wt);
          var i = qC(e);
          DS(e, i, a);
          break;
        }
        case $:
        case J: {
          var u = t.stateNode.containerInfo, s = qC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === K || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? FR(a, s, t) : AR(a, s);
      } else if (i !== J) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === K || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? jR(a, s, t) : UR(a, s);
      } else if (i !== J) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var pr = null, _i = !1;
    function Eb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case K: {
              pr = i.stateNode, _i = !1;
              break e;
            }
            case $: {
              pr = i.stateNode.containerInfo, _i = !0;
              break e;
            }
            case J: {
              pr = i.stateNode.containerInfo, _i = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        XC(e, t, a), pr = null, _i = !1;
      }
      yb(a);
    }
    function to(e, t, a) {
      for (var i = a.child; i !== null; )
        XC(e, t, i), i = i.sibling;
    }
    function XC(e, t, a) {
      switch (xl(a), a.tag) {
        case K:
          dr || cf(a, t);
        case xe: {
          {
            var i = pr, u = _i;
            pr = null, to(e, t, a), pr = i, _i = u, pr !== null && (_i ? PR(pr, a.stateNode) : HR(pr, a.stateNode));
          }
          return;
        }
        case Ht: {
          pr !== null && (_i ? VR(pr, a.stateNode) : Fy(pr, a.stateNode));
          return;
        }
        case J: {
          {
            var s = pr, f = _i;
            pr = a.stateNode.containerInfo, _i = !0, to(e, t, a), pr = s, _i = f;
          }
          return;
        }
        case q:
        case ke:
        case yt:
        case Ke: {
          if (!dr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, g = m;
                do {
                  var x = g, T = x.destroy, M = x.tag;
                  T !== void 0 && ((M & el) !== Sa ? hm(a, t, T) : (M & Qn) !== Sa && (Ua(a), a.mode & Qe ? (al(), hm(a, t, T), rl(a)) : hm(a, t, T), yu())), g = g.next;
                } while (g !== m);
              }
            }
          }
          to(e, t, a);
          return;
        }
        case W: {
          if (!dr) {
            cf(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && wS(a, t, N);
          }
          to(e, t, a);
          return;
        }
        case cn: {
          to(e, t, a);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            a.mode & Te
          ) {
            var U = dr;
            dr = U || a.memoizedState !== null, to(e, t, a), dr = U;
          } else
            to(e, t, a);
          break;
        }
        default: {
          to(e, t, a);
          return;
        }
      }
    }
    function Cb(e) {
      e.memoizedState;
    }
    function Tb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && lx(s);
          }
        }
      }
    }
    function KC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ib()), t.forEach(function(i) {
          var u = gD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ir)
              if (of !== null && sf !== null)
                Tp(sf, of);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Rb(e, t, a) {
      of = a, sf = e, Lt(t), ZC(t, e), Lt(t), of = null, sf = null;
    }
    function ki(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Eb(e, t, s);
          } catch (v) {
            Wt(s, t, v);
          }
        }
      var f = Hm();
      if (t.subtreeFlags & Rr)
        for (var p = t.child; p !== null; )
          Lt(p), ZC(p, e), p = p.sibling;
      Lt(f);
    }
    function ZC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case q:
        case ke:
        case yt:
        case Ke: {
          if (ki(t, e), il(e), u & at) {
            try {
              Di(el | In, e, e.return), eo(el | In, e);
            } catch (Ye) {
              Wt(e, e.return, Ye);
            }
            if (e.mode & Qe) {
              try {
                al(), Di(Qn | In, e, e.return);
              } catch (Ye) {
                Wt(e, e.return, Ye);
              }
              rl(e);
            } else
              try {
                Di(Qn | In, e, e.return);
              } catch (Ye) {
                Wt(e, e.return, Ye);
              }
          }
          return;
        }
        case W: {
          ki(t, e), il(e), u & Er && i !== null && cf(i, i.return);
          return;
        }
        case K: {
          ki(t, e), il(e), u & Er && i !== null && cf(i, i.return);
          {
            if (e.flags & wt) {
              var s = e.stateNode;
              try {
                K0(s);
              } catch (Ye) {
                Wt(e, e.return, Ye);
              }
            }
            if (u & at) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    NR(f, g, m, v, p, e);
                  } catch (Ye) {
                    Wt(e, e.return, Ye);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (ki(t, e), il(e), u & at) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, T = e.memoizedProps, M = i !== null ? i.memoizedProps : T;
            try {
              zR(x, M, T);
            } catch (Ye) {
              Wt(e, e.return, Ye);
            }
          }
          return;
        }
        case $: {
          if (ki(t, e), il(e), u & at && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                ix(t.containerInfo);
              } catch (Ye) {
                Wt(e, e.return, Ye);
              }
          }
          return;
        }
        case J: {
          ki(t, e), il(e);
          return;
        }
        case P: {
          ki(t, e), il(e);
          var U = e.child;
          if (U.flags & Vi) {
            var ie = U.stateNode, ze = U.memoizedState, Re = ze !== null;
            if (ie.isHidden = Re, Re) {
              var ht = U.alternate !== null && U.alternate.memoizedState !== null;
              ht || rD();
            }
          }
          if (u & at) {
            try {
              Cb(e);
            } catch (Ye) {
              Wt(e, e.return, Ye);
            }
            KC(e);
          }
          return;
        }
        case He: {
          var ft = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Te
          ) {
            var b = dr;
            dr = b || ft, ki(t, e), dr = b;
          } else
            ki(t, e);
          if (il(e), u & Vi) {
            var A = e.stateNode, D = e.memoizedState, I = D !== null, ce = e;
            if (A.isHidden = I, I && !ft && (ce.mode & Te) !== Ee) {
              me = ce;
              for (var le = ce.child; le !== null; )
                me = le, wb(le), le = le.sibling;
            }
            mb(ce, I);
          }
          return;
        }
        case gt: {
          ki(t, e), il(e), u & at && KC(e);
          return;
        }
        case cn:
          return;
        default: {
          ki(t, e), il(e);
          return;
        }
      }
    }
    function il(e) {
      var t = e.flags;
      if (t & Yt) {
        try {
          Sb(e);
        } catch (a) {
          Wt(e, e.return, a);
        }
        e.flags &= ~Yt;
      }
      t & la && (e.flags &= ~la);
    }
    function xb(e, t, a) {
      of = a, sf = t, me = e, JC(e, t, a), of = null, sf = null;
    }
    function JC(e, t, a) {
      for (var i = (e.mode & Te) !== Ee; me !== null; ) {
        var u = me, s = u.child;
        if (u.tag === He && i) {
          var f = u.memoizedState !== null, p = f || vm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, g = m || dr, x = vm, T = dr;
            vm = p, dr = g, dr && !T && (me = u, bb(u));
            for (var M = s; M !== null; )
              me = M, JC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            me = u, vm = x, dr = T, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & nr) !== Le && s !== null ? (s.return = u, me = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; me !== null; ) {
        var i = me;
        if ((i.flags & nr) !== Le) {
          var u = i.alternate;
          Lt(i);
          try {
            vb(t, u, i, a);
          } catch (f) {
            Wt(i, i.return, f);
          }
          wn();
        }
        if (i === e) {
          me = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, me = s;
          return;
        }
        me = i.return;
      }
    }
    function wb(e) {
      for (; me !== null; ) {
        var t = me, a = t.child;
        switch (t.tag) {
          case q:
          case ke:
          case yt:
          case Ke: {
            if (t.mode & Qe)
              try {
                al(), Di(Qn, t, t.return);
              } finally {
                rl(t);
              }
            else
              Di(Qn, t, t.return);
            break;
          }
          case W: {
            cf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case K: {
            cf(t, t.return);
            break;
          }
          case He: {
            var u = t.memoizedState !== null;
            if (u) {
              e1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, me = a) : e1(e);
      }
    }
    function e1(e) {
      for (; me !== null; ) {
        var t = me;
        if (t === e) {
          me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, me = a;
          return;
        }
        me = t.return;
      }
    }
    function bb(e) {
      for (; me !== null; ) {
        var t = me, a = t.child;
        if (t.tag === He) {
          var i = t.memoizedState !== null;
          if (i) {
            t1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, me = a) : t1(e);
      }
    }
    function t1(e) {
      for (; me !== null; ) {
        var t = me;
        Lt(t);
        try {
          hb(t);
        } catch (i) {
          Wt(t, t.return, i);
        }
        if (wn(), t === e) {
          me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, me = a;
          return;
        }
        me = t.return;
      }
    }
    function Db(e, t, a, i) {
      me = t, _b(t, e, a, i);
    }
    function _b(e, t, a, i) {
      for (; me !== null; ) {
        var u = me, s = u.child;
        (u.subtreeFlags & ua) !== Le && s !== null ? (s.return = u, me = s) : kb(e, t, a, i);
      }
    }
    function kb(e, t, a, i) {
      for (; me !== null; ) {
        var u = me;
        if ((u.flags & Gt) !== Le) {
          Lt(u);
          try {
            Ob(t, u, a, i);
          } catch (f) {
            Wt(u, u.return, f);
          }
          wn();
        }
        if (u === e) {
          me = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, me = s;
          return;
        }
        me = u.return;
      }
    }
    function Ob(e, t, a, i) {
      switch (t.tag) {
        case q:
        case ke:
        case Ke: {
          if (t.mode & Qe) {
            Wg();
            try {
              eo(cr | In, t);
            } finally {
              Qg(t);
            }
          } else
            eo(cr | In, t);
          break;
        }
      }
    }
    function Mb(e) {
      me = e, Lb();
    }
    function Lb() {
      for (; me !== null; ) {
        var e = me, t = e.child;
        if ((me.flags & Rt) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              me = u, Ub(u, e);
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
            me = e;
          }
        }
        (e.subtreeFlags & ua) !== Le && t !== null ? (t.return = e, me = t) : Nb();
      }
    }
    function Nb() {
      for (; me !== null; ) {
        var e = me;
        (e.flags & Gt) !== Le && (Lt(e), zb(e), wn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, me = t;
          return;
        }
        me = e.return;
      }
    }
    function zb(e) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke: {
          e.mode & Qe ? (Wg(), Di(cr | In, e, e.return), Qg(e)) : Di(cr | In, e, e.return);
          break;
        }
      }
    }
    function Ub(e, t) {
      for (; me !== null; ) {
        var a = me;
        Lt(a), jb(a, t), wn();
        var i = a.child;
        i !== null ? (i.return = a, me = i) : Ab(e);
      }
    }
    function Ab(e) {
      for (; me !== null; ) {
        var t = me, a = t.sibling, i = t.return;
        if (WC(t), t === e) {
          me = null;
          return;
        }
        if (a !== null) {
          a.return = i, me = a;
          return;
        }
        me = i;
      }
    }
    function jb(e, t) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke: {
          e.mode & Qe ? (Wg(), Di(cr, e, t), Qg(e)) : Di(cr, e, t);
          break;
        }
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke: {
          try {
            eo(Qn | In, e);
          } catch (a) {
            Wt(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Wt(e, e.return, a);
          }
          break;
        }
      }
    }
    function Hb(e) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke: {
          try {
            eo(cr | In, e);
          } catch (t) {
            Wt(e, e.return, t);
          }
          break;
        }
      }
    }
    function Pb(e) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke: {
          try {
            Di(Qn | In, e, e.return);
          } catch (a) {
            Wt(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function Vb(e) {
      switch (e.tag) {
        case q:
        case ke:
        case Ke:
          try {
            Di(cr | In, e, e.return);
          } catch (t) {
            Wt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var fp = Symbol.for;
      fp("selector.component"), fp("selector.has_pseudo_class"), fp("selector.role"), fp("selector.test_id"), fp("selector.text");
    }
    var Bb = [];
    function $b() {
      Bb.forEach(function(e) {
        return e();
      });
    }
    var Yb = _.ReactCurrentActQueue;
    function Ib(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function n1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Yb.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Qb = Math.ceil, kS = _.ReactCurrentDispatcher, OS = _.ReactCurrentOwner, vr = _.ReactCurrentBatchConfig, Oi = _.ReactCurrentActQueue, qn = (
      /*             */
      0
    ), r1 = (
      /*               */
      1
    ), hr = (
      /*                */
      2
    ), ti = (
      /*                */
      4
    ), Ql = 0, dp = 1, ps = 2, mm = 3, pp = 4, a1 = 5, MS = 6, vt = qn, qr = null, mn = null, Xn = F, ll = F, LS = Iu(F), Kn = Ql, vp = null, ym = F, hp = F, gm = F, mp = null, Ea = null, NS = 0, i1 = 500, l1 = 1 / 0, Wb = 500, Wl = null;
    function yp() {
      l1 = en() + Wb;
    }
    function u1() {
      return l1;
    }
    var Sm = !1, zS = null, ff = null, vs = !1, no = null, gp = F, US = [], AS = null, Gb = 50, Sp = 0, jS = null, FS = !1, Em = !1, qb = 50, df = 0, Cm = null, Ep = Bt, Tm = F, o1 = !1;
    function Rm() {
      return qr;
    }
    function Xr() {
      return (vt & (hr | ti)) !== qn ? en() : (Ep !== Bt || (Ep = en()), Ep);
    }
    function ro(e) {
      var t = e.mode;
      if ((t & Te) === Ee)
        return _e;
      if ((vt & hr) !== qn && Xn !== F)
        return bu(Xn);
      var a = Yx() !== $x;
      if (a) {
        if (vr.transition !== null) {
          var i = vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Tm === Rn && (Tm = Uv()), Tm;
      }
      var u = da();
      if (u !== Rn)
        return u;
      var s = _R();
      return s;
    }
    function Xb(e) {
      var t = e.mode;
      return (t & Te) === Ee ? _e : Dr();
    }
    function Zn(e, t, a, i) {
      ED(), o1 && y("useInsertionEffect must not schedule updates."), FS && (Em = !0), Ll(e, a, i), (vt & hr) !== F && e === qr ? RD(t) : (Ir && gc(e, t, a), xD(t), e === qr && ((vt & hr) === qn && (hp = et(hp, a)), Kn === pp && ao(e, Xn)), Ca(e, i), a === _e && vt === qn && (t.mode & Te) === Ee && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Oi.isBatchingLegacy && (yp(), oE()));
    }
    function Kb(e, t, a) {
      var i = e.current;
      i.lanes = t, Ll(e, t, a), Ca(e, a);
    }
    function Zb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (vt & hr) !== qn
      );
    }
    function Ca(e, t) {
      var a = e.callbackNode;
      Ov(e, t);
      var i = Ol(e, e === qr ? Xn : F);
      if (i === F) {
        a !== null && x1(a), e.callbackNode = null, e.callbackPriority = Rn;
        return;
      }
      var u = pn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Oi.current !== null && a !== IS)) {
        a == null && s !== _e && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && x1(a);
      var f;
      if (u === _e)
        e.tag === Qu ? (Oi.isBatchingLegacy !== null && (Oi.didScheduleLegacyUpdate = !0), bx(f1.bind(null, e))) : uE(f1.bind(null, e)), Oi.current !== null ? Oi.current.push(Wu) : OR(function() {
          (vt & (hr | ti)) === qn && Wu();
        }), f = null;
      else {
        var p;
        switch (Yn(i)) {
          case vn:
            p = Is;
            break;
          case mi:
            p = Rl;
            break;
          case Qa:
            p = Ia;
            break;
          case Du:
            p = Qs;
            break;
          default:
            p = Ia;
            break;
        }
        f = QS(p, s1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function s1(e, t) {
      if (mw(), Ep = Bt, Tm = F, (vt & (hr | ti)) !== qn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ql();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ol(e, e === qr ? Xn : F);
      if (u === F)
        return null;
      var s = !Po(e, u) && !zv(e, u) && !t, f = s ? oD(e, u) : wm(e, u);
      if (f !== Ql) {
        if (f === ps) {
          var p = Qi(e);
          p !== F && (u = p, f = HS(e, p));
        }
        if (f === dp) {
          var v = vp;
          throw hs(e, F), ao(e, u), Ca(e, en()), v;
        }
        if (f === MS)
          ao(e, u);
        else {
          var m = !Po(e, u), g = e.current.alternate;
          if (m && !eD(g)) {
            if (f = wm(e, u), f === ps) {
              var x = Qi(e);
              x !== F && (u = x, f = HS(e, x));
            }
            if (f === dp) {
              var T = vp;
              throw hs(e, F), ao(e, u), Ca(e, en()), T;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Jb(e, f, u);
        }
      }
      return Ca(e, en()), e.callbackNode === a ? s1.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = mp;
      if (Sc(e)) {
        var i = hs(e, t);
        i.flags |= an, Sx(e.containerInfo);
      }
      var u = wm(e, t);
      if (u !== ps) {
        var s = Ea;
        Ea = a, s !== null && c1(s);
      }
      return u;
    }
    function c1(e) {
      Ea === null ? Ea = e : Ea.push.apply(Ea, e);
    }
    function Jb(e, t, a) {
      switch (t) {
        case Ql:
        case dp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ps: {
          ms(e, Ea, Wl);
          break;
        }
        case mm: {
          if (ao(e, a), Mv(a) && // do not delay if we're inside an act() scope
          !w1()) {
            var i = NS + i1 - en();
            if (i > 10) {
              var u = Ol(e, F);
              if (u !== F)
                break;
              var s = e.suspendedLanes;
              if (!Ml(s, a)) {
                Xr(), mc(e, s);
                break;
              }
              e.timeoutHandle = Ay(ms.bind(null, e, Ea, Wl), i);
              break;
            }
          }
          ms(e, Ea, Wl);
          break;
        }
        case pp: {
          if (ao(e, a), Nv(a))
            break;
          if (!w1()) {
            var f = _v(e, a), p = f, v = en() - p, m = SD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Ay(ms.bind(null, e, Ea, Wl), m);
              break;
            }
          }
          ms(e, Ea, Wl);
          break;
        }
        case a1: {
          ms(e, Ea, Wl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function eD(e) {
      for (var t = e; ; ) {
        if (t.flags & Oo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!he(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Oo && v !== null) {
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
    function ao(e, t) {
      t = Vo(t, gm), t = Vo(t, hp), jv(e, t);
    }
    function f1(e) {
      if (yw(), (vt & (hr | ti)) !== qn)
        throw new Error("Should not already be working.");
      ql();
      var t = Ol(e, F);
      if (!_r(t, _e))
        return Ca(e, en()), null;
      var a = wm(e, t);
      if (e.tag !== Qu && a === ps) {
        var i = Qi(e);
        i !== F && (t = i, a = HS(e, i));
      }
      if (a === dp) {
        var u = vp;
        throw hs(e, F), ao(e, t), Ca(e, en()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ms(e, Ea, Wl), Ca(e, en()), null;
    }
    function tD(e, t) {
      t !== F && (cd(e, et(t, _e)), Ca(e, en()), (vt & (hr | ti)) === qn && (yp(), Wu()));
    }
    function PS(e, t) {
      var a = vt;
      vt |= r1;
      try {
        return e(t);
      } finally {
        vt = a, vt === qn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Oi.isBatchingLegacy && (yp(), oE());
      }
    }
    function nD(e, t, a, i, u) {
      var s = da(), f = vr.transition;
      try {
        return vr.transition = null, ln(vn), e(t, a, i, u);
      } finally {
        ln(s), vr.transition = f, vt === qn && yp();
      }
    }
    function Gl(e) {
      no !== null && no.tag === Qu && (vt & (hr | ti)) === qn && ql();
      var t = vt;
      vt |= r1;
      var a = vr.transition, i = da();
      try {
        return vr.transition = null, ln(vn), e ? e() : void 0;
      } finally {
        ln(i), vr.transition = a, vt = t, (vt & (hr | ti)) === qn && Wu();
      }
    }
    function d1() {
      return (vt & (hr | ti)) !== qn;
    }
    function xm(e, t) {
      Mr(LS, ll, e), ll = et(ll, t);
    }
    function VS(e) {
      ll = LS.current, Or(LS, e);
    }
    function hs(e, t) {
      e.finishedWork = null, e.finishedLanes = F;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, kR(a)), mn !== null)
        for (var i = mn.return; i !== null; ) {
          var u = i.alternate;
          VC(u, i), i = i.return;
        }
      qr = e;
      var s = ys(e.current, null);
      return mn = s, Xn = ll = t, Kn = Ql, vp = null, ym = F, hp = F, gm = F, mp = null, Ea = null, Kx(), Ti.discardPendingWarnings(), s;
    }
    function p1(e, t) {
      do {
        var a = mn;
        try {
          if (zh(), jE(), wn(), OS.current = null, a === null || a.return === null) {
            Kn = dp, vp = t, mn = null;
            return;
          }
          if (be && a.mode & Qe && sm(a, !0), nt)
            if (wr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wl(a, i, Xn);
            } else
              No(a, t, Xn);
          bw(e, a.return, a, t, Xn), y1(a);
        } catch (u) {
          t = u, mn === a && a !== null ? (a = a.return, mn = a) : a = mn;
          continue;
        }
        return;
      } while (!0);
    }
    function v1() {
      var e = kS.current;
      return kS.current = am, e === null ? am : e;
    }
    function h1(e) {
      kS.current = e;
    }
    function rD() {
      NS = en();
    }
    function Cp(e) {
      ym = et(e, ym);
    }
    function aD() {
      Kn === Ql && (Kn = mm);
    }
    function BS() {
      (Kn === Ql || Kn === mm || Kn === ps) && (Kn = pp), qr !== null && (Ho(ym) || Ho(hp)) && ao(qr, Xn);
    }
    function iD(e) {
      Kn !== pp && (Kn = ps), mp === null ? mp = [e] : mp.push(e);
    }
    function lD() {
      return Kn === Ql;
    }
    function wm(e, t) {
      var a = vt;
      vt |= hr;
      var i = v1();
      if (qr !== e || Xn !== t) {
        if (Ir) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Tp(e, Xn), u.clear()), fd(e, t);
        }
        Wl = $o(), hs(e, t);
      }
      qt(t);
      do
        try {
          uD();
          break;
        } catch (s) {
          p1(e, s);
        }
      while (!0);
      if (zh(), vt = a, h1(i), mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ks(), qr = null, Xn = F, Kn;
    }
    function uD() {
      for (; mn !== null; )
        m1(mn);
    }
    function oD(e, t) {
      var a = vt;
      vt |= hr;
      var i = v1();
      if (qr !== e || Xn !== t) {
        if (Ir) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Tp(e, Xn), u.clear()), fd(e, t);
        }
        Wl = $o(), yp(), hs(e, t);
      }
      qt(t);
      do
        try {
          sD();
          break;
        } catch (s) {
          p1(e, s);
        }
      while (!0);
      return zh(), h1(i), vt = a, mn !== null ? (Xs(), Ql) : (Ks(), qr = null, Xn = F, Kn);
    }
    function sD() {
      for (; mn !== null && !Ys(); )
        m1(mn);
    }
    function m1(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & Qe) !== Ee ? (Ig(e), a = $S(t, e, ll), sm(e, !0)) : a = $S(t, e, ll), wn(), e.memoizedProps = e.pendingProps, a === null ? y1(e) : mn = a, OS.current = null;
    }
    function y1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Br) === Le) {
          Lt(t);
          var u = void 0;
          if ((t.mode & Qe) === Ee ? u = PC(a, t, ll) : (Ig(t), u = PC(a, t, ll), sm(t, !1)), wn(), u !== null) {
            mn = u;
            return;
          }
        } else {
          var s = ab(a, t);
          if (s !== null) {
            s.flags &= yv, mn = s;
            return;
          }
          if ((t.mode & Qe) !== Ee) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Br, i.subtreeFlags = Le, i.deletions = null;
          else {
            Kn = MS, mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          mn = v;
          return;
        }
        t = i, mn = t;
      } while (t !== null);
      Kn === Ql && (Kn = a1);
    }
    function ms(e, t, a) {
      var i = da(), u = vr.transition;
      try {
        vr.transition = null, ln(vn), cD(e, t, a, i);
      } finally {
        vr.transition = u, ln(i);
      }
      return null;
    }
    function cD(e, t, a, i) {
      do
        ql();
      while (no !== null);
      if (CD(), (vt & (hr | ti)) !== qn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if ($i(s), u === null)
        return Ws(), null;
      if (s === F && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = F, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Rn;
      var f = et(u.lanes, u.childLanes);
      yc(e, f), e === qr && (qr = null, mn = null, Xn = F), ((u.subtreeFlags & ua) !== Le || (u.flags & ua) !== Le) && (vs || (vs = !0, AS = a, QS(Ia, function() {
        return ql(), null;
      })));
      var p = (u.subtreeFlags & (pu | Rr | nr | ua)) !== Le, v = (u.flags & (pu | Rr | nr | ua)) !== Le;
      if (p || v) {
        var m = vr.transition;
        vr.transition = null;
        var g = da();
        ln(vn);
        var x = vt;
        vt |= ti, OS.current = null, sb(e, u), oC(), Rb(e, u, s), TR(e.containerInfo), e.current = u, nd(s), xb(u, e, s), gu(), Ev(), vt = x, ln(g), vr.transition = m;
      } else
        e.current = u, oC();
      var T = vs;
      if (vs ? (vs = !1, no = e, gp = s) : (df = 0, Cm = null), f = e.pendingLanes, f === F && (ff = null), T || C1(e.current, !1), hu(u.stateNode, i), Ir && e.memoizedUpdaters.clear(), $b(), Ca(e, en()), t !== null)
        for (var M = e.onRecoverableError, N = 0; N < t.length; N++) {
          var U = t[N], ie = U.stack, ze = U.digest;
          M(U.value, {
            componentStack: ie,
            digest: ze
          });
        }
      if (Sm) {
        Sm = !1;
        var Re = zS;
        throw zS = null, Re;
      }
      return _r(gp, _e) && e.tag !== Qu && ql(), f = e.pendingLanes, _r(f, _e) ? (hw(), e === jS ? Sp++ : (Sp = 0, jS = e)) : Sp = 0, Wu(), Ws(), null;
    }
    function ql() {
      if (no !== null) {
        var e = Yn(gp), t = uy(Qa, e), a = vr.transition, i = da();
        try {
          return vr.transition = null, ln(t), dD();
        } finally {
          ln(i), vr.transition = a;
        }
      }
      return !1;
    }
    function fD(e) {
      US.push(e), vs || (vs = !0, QS(Ia, function() {
        return ql(), null;
      }));
    }
    function dD() {
      if (no === null)
        return !1;
      var e = AS;
      AS = null;
      var t = no, a = gp;
      if (no = null, gp = F, (vt & (hr | ti)) !== qn)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, Em = !1, bv(a);
      var i = vt;
      vt |= ti, Mb(t.current), Db(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          pb(t, f);
        }
      }
      rd(), C1(t.current, !0), vt = i, Wu(), Em ? t === Cm ? df++ : (df = 0, Cm = t) : df = 0, FS = !1, Em = !1, ca(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function g1(e) {
      return ff !== null && ff.has(e);
    }
    function pD(e) {
      ff === null ? ff = /* @__PURE__ */ new Set([e]) : ff.add(e);
    }
    function vD(e) {
      Sm || (Sm = !0, zS = e);
    }
    var hD = vD;
    function S1(e, t, a) {
      var i = fs(a, t), u = mC(e, i, _e), s = qu(e, u, _e), f = Xr();
      s !== null && (Ll(s, _e, f), Ca(s, f));
    }
    function Wt(e, t, a) {
      if (lb(a), Rp(!1), e.tag === $) {
        S1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          S1(i, e, a);
          return;
        } else if (i.tag === W) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !g1(s)) {
            var f = fs(a, e), p = sS(i, f, _e), v = qu(i, p, _e), m = Xr();
            v !== null && (Ll(v, _e, m), Ca(v, m));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function mD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Xr();
      mc(e, a), wD(e), qr === e && Ml(Xn, a) && (Kn === pp || Kn === mm && Mv(Xn) && en() - NS < i1 ? hs(e, F) : gm = et(gm, a)), Ca(e, u);
    }
    function E1(e, t) {
      t === Rn && (t = Xb(e));
      var a = Xr(), i = ga(e, t);
      i !== null && (Ll(i, t, a), Ca(i, a));
    }
    function yD(e) {
      var t = e.memoizedState, a = Rn;
      t !== null && (a = t.retryLane), E1(e, a);
    }
    function gD(e, t) {
      var a = Rn, i;
      switch (e.tag) {
        case P:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case gt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), E1(e, a);
    }
    function SD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Qb(e / 1960) * 1960;
    }
    function ED() {
      if (Sp > Gb)
        throw Sp = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      df > qb && (df = 0, Cm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function CD() {
      Ti.flushLegacyContextWarning(), Ti.flushPendingUnsafeLifecycleWarnings();
    }
    function C1(e, t) {
      Lt(e), bm(e, Tr, Pb), t && bm(e, Tl, Vb), bm(e, Tr, Fb), t && bm(e, Tl, Hb), wn();
    }
    function bm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Dm = null;
    function T1(e) {
      {
        if ((vt & hr) !== qn || !(e.mode & Te))
          return;
        var t = e.tag;
        if (t !== ue && t !== $ && t !== W && t !== q && t !== ke && t !== yt && t !== Ke)
          return;
        var a = Je(e) || "ReactComponent";
        if (Dm !== null) {
          if (Dm.has(a))
            return;
          Dm.add(a);
        } else
          Dm = /* @__PURE__ */ new Set([a]);
        var i = En;
        try {
          Lt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Lt(e) : wn();
        }
      }
    }
    var $S;
    {
      var TD = null;
      $S = function(e, t, a) {
        var i = O1(TD, t);
        try {
          return UC(e, t, a);
        } catch (s) {
          if (zx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (zh(), jE(), VC(e, t), O1(t, i), t.mode & Qe && Ig(t), Cl(null, UC, null, e, t, a), ny()) {
            var u = Wf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var R1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function RD(e) {
      if (ta && !dw())
        switch (e.tag) {
          case q:
          case ke:
          case Ke: {
            var t = mn && Je(mn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Je(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case W: {
            R1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), R1 = !0);
            break;
          }
        }
    }
    function Tp(e, t) {
      if (Ir) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          gc(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = Oi.current;
        return a !== null ? (a.push(t), IS) : $s(e, t);
      }
    }
    function x1(e) {
      if (e !== IS)
        return Sv(e);
    }
    function w1() {
      return Oi.current !== null;
    }
    function xD(e) {
      {
        if (e.mode & Te) {
          if (!n1())
            return;
        } else if (!Ib() || vt !== qn || e.tag !== q && e.tag !== ke && e.tag !== Ke)
          return;
        if (Oi.current === null) {
          var t = En;
          try {
            Lt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Je(e));
          } finally {
            t ? Lt(e) : wn();
          }
        }
      }
    }
    function wD(e) {
      e.tag !== Qu && n1() && Oi.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Rp(e) {
      o1 = e;
    }
    var ni = null, pf = null, bD = function(e) {
      ni = e;
    };
    function vf(e) {
      {
        if (ni === null)
          return e;
        var t = ni(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return vf(e);
    }
    function GS(e) {
      {
        if (ni === null)
          return e;
        var t = ni(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ee,
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
    function b1(e, t) {
      {
        if (ni === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case W: {
            typeof i == "function" && (u = !0);
            break;
          }
          case q: {
            (typeof i == "function" || s === Pe) && (u = !0);
            break;
          }
          case ke: {
            (s === ee || s === Pe) && (u = !0);
            break;
          }
          case yt:
          case Ke: {
            (s === mt || s === Pe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ni(a);
          if (f !== void 0 && f === ni(i))
            return !0;
        }
        return !1;
      }
    }
    function D1(e) {
      {
        if (ni === null || typeof WeakSet != "function")
          return;
        pf === null && (pf = /* @__PURE__ */ new WeakSet()), pf.add(e);
      }
    }
    var DD = function(e, t) {
      {
        if (ni === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ql(), Gl(function() {
          qS(e.current, i, a);
        });
      }
    }, _D = function(e, t) {
      {
        if (e.context !== Aa)
          return;
        ql(), Gl(function() {
          xp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case q:
          case Ke:
          case W:
            v = p;
            break;
          case ke:
            v = p.render;
            break;
        }
        if (ni === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, g = !1;
        if (v !== null) {
          var x = ni(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === W ? g = !0 : m = !0));
        }
        if (pf !== null && (pf.has(e) || i !== null && pf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || m) {
          var T = ga(e, _e);
          T !== null && Zn(T, e, _e, Bt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var kD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case q:
          case Ke:
          case W:
            p = f;
            break;
          case ke:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? OD(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function OD(e, t) {
      {
        var a = MD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function MD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
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
    var KS;
    {
      KS = !1;
      try {
        var _1 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function LD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = F, this.childLanes = F, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ja = function(e, t, a, i) {
      return new LD(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ND(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function zD(e) {
      if (typeof e == "function")
        return ZS(e) ? W : q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ee)
          return ke;
        if (t === mt)
          return yt;
      }
      return ue;
    }
    function ys(e, t) {
      var a = e.alternate;
      a === null ? (a = ja(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ue:
        case q:
        case Ke:
          a.type = vf(e.type);
          break;
        case W:
          a.type = WS(e.type);
          break;
        case ke:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function UD(e, t) {
      e.flags &= Bn | Yt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = F, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function AD(e, t, a) {
      var i;
      return e === xh ? (i = Te, t === !0 && (i |= st, i |= Qr)) : i = Ee, Ir && (i |= Qe), ja($, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = ue, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = W, p = WS(p)) : p = vf(p);
      else if (typeof e == "string")
        f = K;
      else
        e: switch (e) {
          case _a:
            return io(a.children, u, s, t);
          case Li:
            f = Xe, u |= st, (u & Te) !== Ee && (u |= Qr);
            break;
          case fl:
            return jD(a, u, s, t);
          case De:
            return FD(a, u, s, t);
          case pt:
            return HD(a, u, s, t);
          case $t:
            return k1(a, u, s, t);
          case Jt:
          case ut:
          case gr:
          case Ni:
          case Nn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case E:
                  f = it;
                  break e;
                case B:
                  f = Tt;
                  break e;
                case ee:
                  f = ke, p = GS(p);
                  break e;
                case mt:
                  f = yt;
                  break e;
                case Pe:
                  f = sn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Je(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ja(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function io(e, t, a, i) {
      var u = ja(Ae, e, i, t);
      return u.lanes = a, u;
    }
    function jD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ja(We, e, i, t | Qe);
      return u.elementType = fl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function FD(e, t, a, i) {
      var u = ja(P, e, i, t);
      return u.elementType = De, u.lanes = a, u;
    }
    function HD(e, t, a, i) {
      var u = ja(gt, e, i, t);
      return u.elementType = pt, u.lanes = a, u;
    }
    function k1(e, t, a, i) {
      var u = ja(He, e, i, t);
      u.elementType = $t, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = ja(xe, e, null, t);
      return i.lanes = a, i;
    }
    function PD() {
      var e = ja(K, null, null, Ee);
      return e.elementType = "DELETED", e;
    }
    function VD(e) {
      var t = ja(Ht, null, null, Ee);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ja(J, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function O1(e, t) {
      return e === null && (e = ja(ue, null, null, Ee)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function BD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Rn, this.eventTimes = Bo(F), this.expirationTimes = Bo(Bt), this.pendingLanes = F, this.suspendedLanes = F, this.pingedLanes = F, this.expiredLanes = F, this.mutableReadLanes = F, this.finishedLanes = F, this.entangledLanes = F, this.entanglements = Bo(F), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ao; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function M1(e, t, a, i, u, s, f, p, v, m) {
      var g = new BD(e, t, a, p, v), x = AD(t, s);
      g.current = x, x.stateNode = g;
      {
        var T = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = T;
      }
      return hg(x), g;
    }
    var r0 = "18.3.1";
    function $D(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return xa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function L1(e) {
      if (!e)
        return Aa;
      var t = aa(e), a = wx(t);
      if (t.tag === W) {
        var i = t.type;
        if (Ji(i))
          return iE(t, i, a);
      }
      return a;
    }
    function YD(e, t) {
      {
        var a = aa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = oa(a);
        if (u === null)
          return null;
        if (u.mode & st) {
          var s = Je(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = En;
            try {
              Lt(u), a.mode & st ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Lt(f) : wn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function N1(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return M1(e, t, v, m, a, i, u, s, f);
    }
    function z1(e, t, a, i, u, s, f, p, v, m) {
      var g = !0, x = M1(a, i, g, e, u, s, f, p, v);
      x.context = L1(null);
      var T = x.current, M = Xr(), N = ro(T), U = Yl(M, N);
      return U.callback = t ?? null, qu(T, U, N), Kb(x, N, M), x;
    }
    function xp(e, t, a, i) {
      td(t, e);
      var u = t.current, s = Xr(), f = ro(u);
      ad(f);
      var p = L1(a);
      t.context === null ? t.context = p : t.pendingContext = p, ta && En !== null && !a0 && (a0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Je(En) || "Unknown"));
      var v = Yl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = qu(u, v, f);
      return m !== null && (Zn(m, u, f, s), Hh(m, u, f)), f;
    }
    function _m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ID(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (Sc(t)) {
            var a = ud(t);
            tD(t, a);
          }
          break;
        }
        case P: {
          Gl(function() {
            var u = ga(e, _e);
            if (u !== null) {
              var s = Xr();
              Zn(u, e, _e, s);
            }
          });
          var i = _e;
          l0(e, i);
          break;
        }
      }
    }
    function U1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Av(a.retryLane, t));
    }
    function l0(e, t) {
      U1(e, t);
      var a = e.alternate;
      a && U1(a, t);
    }
    function QD(e) {
      if (e.tag === P) {
        var t = Fo, a = ga(e, t);
        if (a !== null) {
          var i = Xr();
          Zn(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function WD(e) {
      if (e.tag === P) {
        var t = ro(e), a = ga(e, t);
        if (a !== null) {
          var i = Xr();
          Zn(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function A1(e) {
      var t = gv(e);
      return t === null ? null : t.stateNode;
    }
    var j1 = function(e) {
      return null;
    };
    function GD(e) {
      return j1(e);
    }
    var F1 = function(e) {
      return !1;
    };
    function qD(e) {
      return F1(e);
    }
    var H1 = null, P1 = null, V1 = null, B1 = null, $1 = null, Y1 = null, I1 = null, Q1 = null, W1 = null;
    {
      var G1 = function(e, t, a) {
        var i = t[a], u = zn(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (zn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = G1(e[i], t, a + 1), u);
      }, q1 = function(e, t) {
        return G1(e, t, 0);
      }, X1 = function(e, t, a, i) {
        var u = t[i], s = zn(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], zn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = X1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, K1 = function(e, t, a) {
        if (t.length !== a.length) {
          ae("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ae("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return X1(e, t, a, 0);
      }, Z1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = zn(e) ? e.slice() : ot({}, e);
        return s[u] = Z1(e[u], t, a + 1, i), s;
      }, J1 = function(e, t, a) {
        return Z1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      H1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = J1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = ga(e, _e);
          f !== null && Zn(f, e, _e, Bt);
        }
      }, P1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = q1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = ga(e, _e);
          s !== null && Zn(s, e, _e, Bt);
        }
      }, V1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = K1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = ga(e, _e);
          f !== null && Zn(f, e, _e, Bt);
        }
      }, B1 = function(e, t, a) {
        e.pendingProps = J1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ga(e, _e);
        i !== null && Zn(i, e, _e, Bt);
      }, $1 = function(e, t) {
        e.pendingProps = q1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ga(e, _e);
        a !== null && Zn(a, e, _e, Bt);
      }, Y1 = function(e, t, a) {
        e.pendingProps = K1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ga(e, _e);
        i !== null && Zn(i, e, _e, Bt);
      }, I1 = function(e) {
        var t = ga(e, _e);
        t !== null && Zn(t, e, _e, Bt);
      }, Q1 = function(e) {
        j1 = e;
      }, W1 = function(e) {
        F1 = e;
      };
    }
    function XD(e) {
      var t = oa(e);
      return t === null ? null : t.stateNode;
    }
    function KD(e) {
      return null;
    }
    function ZD() {
      return En;
    }
    function JD(e) {
      var t = e.findFiberByHostInstance, a = _.ReactCurrentDispatcher;
      return ed({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: H1,
        overrideHookStateDeletePath: P1,
        overrideHookStateRenamePath: V1,
        overrideProps: B1,
        overridePropsDeletePath: $1,
        overridePropsRenamePath: Y1,
        setErrorHandler: Q1,
        setSuspenseHandler: W1,
        scheduleUpdate: I1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: XD,
        findFiberByHostInstance: t || KD,
        // React Refresh
        findHostInstancesForRefresh: kD,
        scheduleRefresh: DD,
        scheduleRoot: _D,
        setRefreshHandler: bD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ZD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var eT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    km.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Om(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Cn) {
          var i = A1(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      xp(e, t, null, null);
    }, km.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        d1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Gl(function() {
          xp(null, e, null, null);
        }), eE(t);
      }
    };
    function e_(e, t) {
      if (!Om(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      tT(e);
      var a = !1, i = !1, u = "", s = eT;
      t != null && (t.hydrate ? ae("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ai && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = N1(e, xh, null, a, i, u, s);
      yh(f.current, e);
      var p = e.nodeType === Cn ? e.parentNode : e;
      return Od(p), new o0(f);
    }
    function km(e) {
      this._internalRoot = e;
    }
    function t_(e) {
      e && cy(e);
    }
    km.prototype.unstable_scheduleHydration = t_;
    function n_(e, t, a) {
      if (!Om(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      tT(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = eT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = z1(t, null, e, xh, i, s, f, p, v);
      if (yh(m.current, e), Od(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          lw(m, x);
        }
      return new km(m);
    }
    function Om(e) {
      return !!(e && (e.nodeType === Sr || e.nodeType === La || e.nodeType === hl || !de));
    }
    function wp(e) {
      return !!(e && (e.nodeType === Sr || e.nodeType === La || e.nodeType === hl || e.nodeType === Cn && e.nodeValue === " react-mount-point-unstable "));
    }
    function tT(e) {
      e.nodeType === Sr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Vd(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var r_ = _.ReactCurrentOwner, nT;
    nT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Cn) {
        var t = A1(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && Yu(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Sr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === La ? e.documentElement : e.firstChild : null;
    }
    function rT() {
    }
    function a_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = _m(f);
            s.call(T);
          };
        }
        var f = z1(
          t,
          i,
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rT
        );
        e._reactRootContainer = f, yh(f.current, e);
        var p = e.nodeType === Cn ? e.parentNode : e;
        return Od(p), Gl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var T = _m(g);
            m.call(T);
          };
        }
        var g = N1(
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rT
        );
        e._reactRootContainer = g, yh(g.current, e);
        var x = e.nodeType === Cn ? e.parentNode : e;
        return Od(x), Gl(function() {
          xp(t, g, a, i);
        }), g;
      }
    }
    function i_(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Mm(e, t, a, i, u) {
      nT(a), i_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = a_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = _m(f);
            p.call(v);
          };
        }
        xp(t, f, e, u);
      }
      return _m(f);
    }
    var aT = !1;
    function l_(e) {
      {
        aT || (aT = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = r_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Sr ? e : YD(e, "findDOMNode");
    }
    function u_(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Mm(null, e, t, !0, a);
    }
    function o_(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Vd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Mm(null, e, t, !1, a);
    }
    function s_(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ko(e))
        throw new Error("parentComponent must be a valid React Component");
      return Mm(e, t, a, !1, i);
    }
    var iT = !1;
    function c_(e) {
      if (iT || (iT = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Vd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !Yu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Gl(function() {
          Mm(null, null, e, !1, function() {
            e._reactRootContainer = null, eE(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && Yu(u)), f = e.nodeType === Sr && wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ou(ID), oy(QD), Cc(WD), Hv(da), Pv(ir), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), hv(dR), Fs(PS, nD, Gl);
    function f_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Om(t))
        throw new Error("Target container is not a DOM element.");
      return $D(e, t, null, a);
    }
    function d_(e, t, a, i) {
      return s_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, Yc, gh, js, bo, PS]
    };
    function p_(e, t) {
      return c0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), e_(e, t);
    }
    function v_(e, t, a) {
      return c0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), n_(e, t, a);
    }
    function h_(e) {
      return d1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Gl(e);
    }
    var m_ = JD({
      findFiberByHostInstance: ns,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!m_ && _t && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var lT = window.location.protocol;
      /^(https?|file):$/.test(lT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (lT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Ra.createPortal = f_, Ra.createRoot = p_, Ra.findDOMNode = l_, Ra.flushSync = h_, Ra.hydrate = u_, Ra.hydrateRoot = v_, Ra.render = o_, Ra.unmountComponentAtNode = c_, Ra.unstable_batchedUpdates = PS, Ra.unstable_renderSubtreeIntoContainer = d_, Ra.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ra;
}
function DT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DT);
    } catch (z) {
      console.error(z);
    }
  }
}
process.env.NODE_ENV === "production" ? (DT(), C0.exports = b_()) : C0.exports = D_();
var __ = C0.exports, T0, Nm = __;
if (process.env.NODE_ENV === "production")
  T0 = Nm.createRoot, Nm.hydrateRoot;
else {
  var vT = Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  T0 = function(z, fe) {
    vT.usingClientEntryPoint = !0;
    try {
      return Nm.createRoot(z, fe);
    } finally {
      vT.usingClientEntryPoint = !1;
    }
  };
}
function k_() {
  const [z, fe] = S0([]);
  Um.instance.on("change", () => {
    _();
  }), x0(() => {
    _();
  }, []);
  function _() {
    fe(Um.getList());
  }
  function Se() {
    return Ue().length > 0;
  }
  function Ue() {
    return z.filter((y) => !y.isConnected);
  }
  function ae(y) {
    y.connect().then(() => {
    }).catch((ye) => {
      console.error(ye);
    });
  }
  return /* @__PURE__ */ Ve.jsx("div", { className: `fixed z-50 inset-0 backdrop-blur overflow-auto ${Se() ? "" : "hidden"}`, children: /* @__PURE__ */ Ve.jsx("div", { className: "relative grid place-items-center h-screen", children: /* @__PURE__ */ Ve.jsxs("div", { className: "w-full max-w-xl mx-auto text-center p-4", children: [
    /* @__PURE__ */ Ve.jsx("h4", { className: "text-xl sm:text-3xl font-semibold uppercase mb-6", children: "Webserial permission request" }),
    /* @__PURE__ */ Ve.jsxs("div", { role: "alert", className: "mt-2 alert shadow-lg", children: [
      /* @__PURE__ */ Ve.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          className: "stroke-info h-6 w-6 shrink-0",
          children: /* @__PURE__ */ Ve.jsx(
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
      /* @__PURE__ */ Ve.jsxs("div", { children: [
        /* @__PURE__ */ Ve.jsx("h3", { className: "font-bold", children: "Note" }),
        /* @__PURE__ */ Ve.jsx("div", { className: "text-xs", children: "To access the serial port, you need to grant permission to the browser." })
      ] })
    ] }),
    /* @__PURE__ */ Ve.jsx("p", { className: "my-6 text-sm", children: "Here appear the devices missing to work with the application." }),
    /* @__PURE__ */ Ve.jsx("div", { children: /* @__PURE__ */ Ve.jsx("ul", { className: "text-left grid grid-cols-1 gap-2", children: Ue().map((y) => /* @__PURE__ */ Ve.jsx("li", { children: /* @__PURE__ */ Ve.jsxs("button", { className: "btn btn-outline btn-neutral capitalize w-full", onClick: () => ae(y), children: [
      y.typeDevice,
      " #",
      y.deviceNumber
    ] }) }, y)) }) }),
    /* @__PURE__ */ Ve.jsx("div", { className: "mt-12 mb-2 text-xs text-right", children: "If by some reason the devices are not appearing, please refresh the page." }),
    /* @__PURE__ */ Ve.jsx("div", { className: "text-right", children: /* @__PURE__ */ Ve.jsx("button", { className: "btn btn-sm btn-outline btn-primary", onClick: () => {
      location.reload();
    }, children: "Refresh" }) })
  ] }) }) });
}
function O_() {
  let z = location.protocol === "https:";
  const fe = E_.supportWebSerial();
  fe && !z && (z = !0);
  function _() {
    return !z || !fe;
  }
  function Se() {
    location.href = location.href.replace(/^http:/, "https:");
  }
  return /* @__PURE__ */ Ve.jsx(Ve.Fragment, { children: /* @__PURE__ */ Ve.jsx(
    "div",
    {
      className: `fixed inset-0 backdrop-blur overflow-auto z-[51] p-2 bg-rose-700/10 ${_() ? "" : "hidden"}`,
      children: /* @__PURE__ */ Ve.jsx("div", { className: "grid place-items-center size-full", children: /* @__PURE__ */ Ve.jsx("div", { className: "w-full max-w-xl", children: /* @__PURE__ */ Ve.jsxs("div", { className: "w-full bg-rose-800 rounded-lg px-4 py-8 text-white", children: [
        /* @__PURE__ */ Ve.jsx("div", { className: "w-full inline-flex justify-center", children: /* @__PURE__ */ Ve.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "size-24 shrink-0 stroke-current",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ Ve.jsx(
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
        /* @__PURE__ */ Ve.jsx("div", { className: "text-center text-2xl", children: z ? /* @__PURE__ */ Ve.jsxs("div", { className: "", children: [
          /* @__PURE__ */ Ve.jsx("p", { children: "Webserial is not available in this browser." }),
          /* @__PURE__ */ Ve.jsx("p", { className: "mt-6 text-sm", children: "Please check documentation for more information." }),
          /* @__PURE__ */ Ve.jsx("p", { className: "mb-6 text-sm", children: "This application will not work." })
        ] }) : /* @__PURE__ */ Ve.jsxs("div", { children: [
          /* @__PURE__ */ Ve.jsx("p", { children: "Webserial need a secure connection (https)" }),
          /* @__PURE__ */ Ve.jsxs("p", { className: "inline-flex justify-center items-center mt-2", children: [
            "→",
            /* @__PURE__ */ Ve.jsx("button", { className: "btn btn-sm btn-ghost text-xl", onClick: () => {
              Se();
            }, children: "Update connection" }),
            "←"
          ] }),
          /* @__PURE__ */ Ve.jsx("p", { className: "mt-6 text-base", children: "Otherwise this application will not work." })
        ] }) })
      ] }) }) })
    }
  ) });
}
var R0 = { exports: {} }, zm = { exports: {} }, Ut = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT;
function M_() {
  if (hT) return Ut;
  hT = 1;
  var z = typeof Symbol == "function" && Symbol.for, fe = z ? Symbol.for("react.element") : 60103, _ = z ? Symbol.for("react.portal") : 60106, Se = z ? Symbol.for("react.fragment") : 60107, Ue = z ? Symbol.for("react.strict_mode") : 60108, ae = z ? Symbol.for("react.profiler") : 60114, y = z ? Symbol.for("react.provider") : 60109, ye = z ? Symbol.for("react.context") : 60110, q = z ? Symbol.for("react.async_mode") : 60111, W = z ? Symbol.for("react.concurrent_mode") : 60111, ue = z ? Symbol.for("react.forward_ref") : 60112, $ = z ? Symbol.for("react.suspense") : 60113, J = z ? Symbol.for("react.suspense_list") : 60120, K = z ? Symbol.for("react.memo") : 60115, xe = z ? Symbol.for("react.lazy") : 60116, Ae = z ? Symbol.for("react.block") : 60121, Xe = z ? Symbol.for("react.fundamental") : 60117, Tt = z ? Symbol.for("react.responder") : 60118, it = z ? Symbol.for("react.scope") : 60119;
  function ke(P) {
    if (typeof P == "object" && P !== null) {
      var yt = P.$$typeof;
      switch (yt) {
        case fe:
          switch (P = P.type, P) {
            case q:
            case W:
            case Se:
            case ae:
            case Ue:
            case $:
              return P;
            default:
              switch (P = P && P.$$typeof, P) {
                case ye:
                case ue:
                case xe:
                case K:
                case y:
                  return P;
                default:
                  return yt;
              }
          }
        case _:
          return yt;
      }
    }
  }
  function We(P) {
    return ke(P) === W;
  }
  return Ut.AsyncMode = q, Ut.ConcurrentMode = W, Ut.ContextConsumer = ye, Ut.ContextProvider = y, Ut.Element = fe, Ut.ForwardRef = ue, Ut.Fragment = Se, Ut.Lazy = xe, Ut.Memo = K, Ut.Portal = _, Ut.Profiler = ae, Ut.StrictMode = Ue, Ut.Suspense = $, Ut.isAsyncMode = function(P) {
    return We(P) || ke(P) === q;
  }, Ut.isConcurrentMode = We, Ut.isContextConsumer = function(P) {
    return ke(P) === ye;
  }, Ut.isContextProvider = function(P) {
    return ke(P) === y;
  }, Ut.isElement = function(P) {
    return typeof P == "object" && P !== null && P.$$typeof === fe;
  }, Ut.isForwardRef = function(P) {
    return ke(P) === ue;
  }, Ut.isFragment = function(P) {
    return ke(P) === Se;
  }, Ut.isLazy = function(P) {
    return ke(P) === xe;
  }, Ut.isMemo = function(P) {
    return ke(P) === K;
  }, Ut.isPortal = function(P) {
    return ke(P) === _;
  }, Ut.isProfiler = function(P) {
    return ke(P) === ae;
  }, Ut.isStrictMode = function(P) {
    return ke(P) === Ue;
  }, Ut.isSuspense = function(P) {
    return ke(P) === $;
  }, Ut.isValidElementType = function(P) {
    return typeof P == "string" || typeof P == "function" || P === Se || P === W || P === ae || P === Ue || P === $ || P === J || typeof P == "object" && P !== null && (P.$$typeof === xe || P.$$typeof === K || P.$$typeof === y || P.$$typeof === ye || P.$$typeof === ue || P.$$typeof === Xe || P.$$typeof === Tt || P.$$typeof === it || P.$$typeof === Ae);
  }, Ut.typeOf = ke, Ut;
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
var mT;
function L_() {
  return mT || (mT = 1, process.env.NODE_ENV !== "production" && function() {
    var z = typeof Symbol == "function" && Symbol.for, fe = z ? Symbol.for("react.element") : 60103, _ = z ? Symbol.for("react.portal") : 60106, Se = z ? Symbol.for("react.fragment") : 60107, Ue = z ? Symbol.for("react.strict_mode") : 60108, ae = z ? Symbol.for("react.profiler") : 60114, y = z ? Symbol.for("react.provider") : 60109, ye = z ? Symbol.for("react.context") : 60110, q = z ? Symbol.for("react.async_mode") : 60111, W = z ? Symbol.for("react.concurrent_mode") : 60111, ue = z ? Symbol.for("react.forward_ref") : 60112, $ = z ? Symbol.for("react.suspense") : 60113, J = z ? Symbol.for("react.suspense_list") : 60120, K = z ? Symbol.for("react.memo") : 60115, xe = z ? Symbol.for("react.lazy") : 60116, Ae = z ? Symbol.for("react.block") : 60121, Xe = z ? Symbol.for("react.fundamental") : 60117, Tt = z ? Symbol.for("react.responder") : 60118, it = z ? Symbol.for("react.scope") : 60119;
    function ke(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === Se || Z === W || Z === ae || Z === Ue || Z === $ || Z === J || typeof Z == "object" && Z !== null && (Z.$$typeof === xe || Z.$$typeof === K || Z.$$typeof === y || Z.$$typeof === ye || Z.$$typeof === ue || Z.$$typeof === Xe || Z.$$typeof === Tt || Z.$$typeof === it || Z.$$typeof === Ae);
    }
    function We(Z) {
      if (typeof Z == "object" && Z !== null) {
        var _t = Z.$$typeof;
        switch (_t) {
          case fe:
            var fn = Z.type;
            switch (fn) {
              case q:
              case W:
              case Se:
              case ae:
              case Ue:
              case $:
                return fn;
              default:
                var gn = fn && fn.$$typeof;
                switch (gn) {
                  case ye:
                  case ue:
                  case xe:
                  case K:
                  case y:
                    return gn;
                  default:
                    return _t;
                }
            }
          case _:
            return _t;
        }
      }
    }
    var P = q, yt = W, Ke = ye, sn = y, yn = fe, Ht = ue, gt = Se, cn = xe, He = K, tt = _, rn = ae, dt = Ue, Kt = $, X = !1;
    function we(Z) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(Z) || We(Z) === q;
    }
    function k(Z) {
      return We(Z) === W;
    }
    function Q(Z) {
      return We(Z) === ye;
    }
    function de(Z) {
      return We(Z) === y;
    }
    function Ne(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === fe;
    }
    function Oe(Z) {
      return We(Z) === ue;
    }
    function nt(Z) {
      return We(Z) === Se;
    }
    function be(Z) {
      return We(Z) === xe;
    }
    function Be(Z) {
      return We(Z) === K;
    }
    function $e(Z) {
      return We(Z) === _;
    }
    function Ze(Z) {
      return We(Z) === ae;
    }
    function rt(Z) {
      return We(Z) === Ue;
    }
    function Dt(Z) {
      return We(Z) === $;
    }
    At.AsyncMode = P, At.ConcurrentMode = yt, At.ContextConsumer = Ke, At.ContextProvider = sn, At.Element = yn, At.ForwardRef = Ht, At.Fragment = gt, At.Lazy = cn, At.Memo = He, At.Portal = tt, At.Profiler = rn, At.StrictMode = dt, At.Suspense = Kt, At.isAsyncMode = we, At.isConcurrentMode = k, At.isContextConsumer = Q, At.isContextProvider = de, At.isElement = Ne, At.isForwardRef = Oe, At.isFragment = nt, At.isLazy = be, At.isMemo = Be, At.isPortal = $e, At.isProfiler = Ze, At.isStrictMode = rt, At.isSuspense = Dt, At.isValidElementType = ke, At.typeOf = We;
  }()), At;
}
var yT;
function _T() {
  return yT || (yT = 1, process.env.NODE_ENV === "production" ? zm.exports = M_() : zm.exports = L_()), zm.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var p0, gT;
function N_() {
  if (gT) return p0;
  gT = 1;
  var z = Object.getOwnPropertySymbols, fe = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
  function Se(ae) {
    if (ae == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(ae);
  }
  function Ue() {
    try {
      if (!Object.assign)
        return !1;
      var ae = new String("abc");
      if (ae[5] = "de", Object.getOwnPropertyNames(ae)[0] === "5")
        return !1;
      for (var y = {}, ye = 0; ye < 10; ye++)
        y["_" + String.fromCharCode(ye)] = ye;
      var q = Object.getOwnPropertyNames(y).map(function(ue) {
        return y[ue];
      });
      if (q.join("") !== "0123456789")
        return !1;
      var W = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(ue) {
        W[ue] = ue;
      }), Object.keys(Object.assign({}, W)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return p0 = Ue() ? Object.assign : function(ae, y) {
    for (var ye, q = Se(ae), W, ue = 1; ue < arguments.length; ue++) {
      ye = Object(arguments[ue]);
      for (var $ in ye)
        fe.call(ye, $) && (q[$] = ye[$]);
      if (z) {
        W = z(ye);
        for (var J = 0; J < W.length; J++)
          _.call(ye, W[J]) && (q[W[J]] = ye[W[J]]);
      }
    }
    return q;
  }, p0;
}
var v0, ST;
function w0() {
  if (ST) return v0;
  ST = 1;
  var z = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return v0 = z, v0;
}
var h0, ET;
function kT() {
  return ET || (ET = 1, h0 = Function.call.bind(Object.prototype.hasOwnProperty)), h0;
}
var m0, CT;
function z_() {
  if (CT) return m0;
  CT = 1;
  var z = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var fe = w0(), _ = {}, Se = kT();
    z = function(ae) {
      var y = "Warning: " + ae;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function Ue(ae, y, ye, q, W) {
    if (process.env.NODE_ENV !== "production") {
      for (var ue in ae)
        if (Se(ae, ue)) {
          var $;
          try {
            if (typeof ae[ue] != "function") {
              var J = Error(
                (q || "React class") + ": " + ye + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof ae[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw J.name = "Invariant Violation", J;
            }
            $ = ae[ue](y, ue, q, ye, null, fe);
          } catch (xe) {
            $ = xe;
          }
          if ($ && !($ instanceof Error) && z(
            (q || "React class") + ": type specification of " + ye + " `" + ue + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof $ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), $ instanceof Error && !($.message in _)) {
            _[$.message] = !0;
            var K = W ? W() : "";
            z(
              "Failed " + ye + " type: " + $.message + (K ?? "")
            );
          }
        }
    }
  }
  return Ue.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (_ = {});
  }, m0 = Ue, m0;
}
var y0, TT;
function U_() {
  if (TT) return y0;
  TT = 1;
  var z = _T(), fe = N_(), _ = w0(), Se = kT(), Ue = z_(), ae = function() {
  };
  process.env.NODE_ENV !== "production" && (ae = function(ye) {
    var q = "Warning: " + ye;
    typeof console < "u" && console.error(q);
    try {
      throw new Error(q);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return y0 = function(ye, q) {
    var W = typeof Symbol == "function" && Symbol.iterator, ue = "@@iterator";
    function $(k) {
      var Q = k && (W && k[W] || k[ue]);
      if (typeof Q == "function")
        return Q;
    }
    var J = "<<anonymous>>", K = {
      array: Tt("array"),
      bigint: Tt("bigint"),
      bool: Tt("boolean"),
      func: Tt("function"),
      number: Tt("number"),
      object: Tt("object"),
      string: Tt("string"),
      symbol: Tt("symbol"),
      any: it(),
      arrayOf: ke,
      element: We(),
      elementType: P(),
      instanceOf: yt,
      node: Ht(),
      objectOf: sn,
      oneOf: Ke,
      oneOfType: yn,
      shape: cn,
      exact: He
    };
    function xe(k, Q) {
      return k === Q ? k !== 0 || 1 / k === 1 / Q : k !== k && Q !== Q;
    }
    function Ae(k, Q) {
      this.message = k, this.data = Q && typeof Q == "object" ? Q : {}, this.stack = "";
    }
    Ae.prototype = Error.prototype;
    function Xe(k) {
      if (process.env.NODE_ENV !== "production")
        var Q = {}, de = 0;
      function Ne(nt, be, Be, $e, Ze, rt, Dt) {
        if ($e = $e || J, rt = rt || Be, Dt !== _) {
          if (q) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _t = $e + ":" + Be;
            !Q[_t] && // Avoid spamming the console because they are often not actionable except for lib authors
            de < 3 && (ae(
              "You are manually calling a React.PropTypes validation function for the `" + rt + "` prop on `" + $e + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Q[_t] = !0, de++);
          }
        }
        return be[Be] == null ? nt ? be[Be] === null ? new Ae("The " + Ze + " `" + rt + "` is marked as required " + ("in `" + $e + "`, but its value is `null`.")) : new Ae("The " + Ze + " `" + rt + "` is marked as required in " + ("`" + $e + "`, but its value is `undefined`.")) : null : k(be, Be, $e, Ze, rt);
      }
      var Oe = Ne.bind(null, !1);
      return Oe.isRequired = Ne.bind(null, !0), Oe;
    }
    function Tt(k) {
      function Q(de, Ne, Oe, nt, be, Be) {
        var $e = de[Ne], Ze = dt($e);
        if (Ze !== k) {
          var rt = Kt($e);
          return new Ae(
            "Invalid " + nt + " `" + be + "` of type " + ("`" + rt + "` supplied to `" + Oe + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return Xe(Q);
    }
    function it() {
      return Xe(y);
    }
    function ke(k) {
      function Q(de, Ne, Oe, nt, be) {
        if (typeof k != "function")
          return new Ae("Property `" + be + "` of component `" + Oe + "` has invalid PropType notation inside arrayOf.");
        var Be = de[Ne];
        if (!Array.isArray(Be)) {
          var $e = dt(Be);
          return new Ae("Invalid " + nt + " `" + be + "` of type " + ("`" + $e + "` supplied to `" + Oe + "`, expected an array."));
        }
        for (var Ze = 0; Ze < Be.length; Ze++) {
          var rt = k(Be, Ze, Oe, nt, be + "[" + Ze + "]", _);
          if (rt instanceof Error)
            return rt;
        }
        return null;
      }
      return Xe(Q);
    }
    function We() {
      function k(Q, de, Ne, Oe, nt) {
        var be = Q[de];
        if (!ye(be)) {
          var Be = dt(be);
          return new Ae("Invalid " + Oe + " `" + nt + "` of type " + ("`" + Be + "` supplied to `" + Ne + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Xe(k);
    }
    function P() {
      function k(Q, de, Ne, Oe, nt) {
        var be = Q[de];
        if (!z.isValidElementType(be)) {
          var Be = dt(be);
          return new Ae("Invalid " + Oe + " `" + nt + "` of type " + ("`" + Be + "` supplied to `" + Ne + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Xe(k);
    }
    function yt(k) {
      function Q(de, Ne, Oe, nt, be) {
        if (!(de[Ne] instanceof k)) {
          var Be = k.name || J, $e = we(de[Ne]);
          return new Ae("Invalid " + nt + " `" + be + "` of type " + ("`" + $e + "` supplied to `" + Oe + "`, expected ") + ("instance of `" + Be + "`."));
        }
        return null;
      }
      return Xe(Q);
    }
    function Ke(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? ae(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : ae("Invalid argument supplied to oneOf, expected an array.")), y;
      function Q(de, Ne, Oe, nt, be) {
        for (var Be = de[Ne], $e = 0; $e < k.length; $e++)
          if (xe(Be, k[$e]))
            return null;
        var Ze = JSON.stringify(k, function(Dt, Z) {
          var _t = Kt(Z);
          return _t === "symbol" ? String(Z) : Z;
        });
        return new Ae("Invalid " + nt + " `" + be + "` of value `" + String(Be) + "` " + ("supplied to `" + Oe + "`, expected one of " + Ze + "."));
      }
      return Xe(Q);
    }
    function sn(k) {
      function Q(de, Ne, Oe, nt, be) {
        if (typeof k != "function")
          return new Ae("Property `" + be + "` of component `" + Oe + "` has invalid PropType notation inside objectOf.");
        var Be = de[Ne], $e = dt(Be);
        if ($e !== "object")
          return new Ae("Invalid " + nt + " `" + be + "` of type " + ("`" + $e + "` supplied to `" + Oe + "`, expected an object."));
        for (var Ze in Be)
          if (Se(Be, Ze)) {
            var rt = k(Be, Ze, Oe, nt, be + "." + Ze, _);
            if (rt instanceof Error)
              return rt;
          }
        return null;
      }
      return Xe(Q);
    }
    function yn(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && ae("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var Q = 0; Q < k.length; Q++) {
        var de = k[Q];
        if (typeof de != "function")
          return ae(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(de) + " at index " + Q + "."
          ), y;
      }
      function Ne(Oe, nt, be, Be, $e) {
        for (var Ze = [], rt = 0; rt < k.length; rt++) {
          var Dt = k[rt], Z = Dt(Oe, nt, be, Be, $e, _);
          if (Z == null)
            return null;
          Z.data && Se(Z.data, "expectedType") && Ze.push(Z.data.expectedType);
        }
        var _t = Ze.length > 0 ? ", expected one of type [" + Ze.join(", ") + "]" : "";
        return new Ae("Invalid " + Be + " `" + $e + "` supplied to " + ("`" + be + "`" + _t + "."));
      }
      return Xe(Ne);
    }
    function Ht() {
      function k(Q, de, Ne, Oe, nt) {
        return tt(Q[de]) ? null : new Ae("Invalid " + Oe + " `" + nt + "` supplied to " + ("`" + Ne + "`, expected a ReactNode."));
      }
      return Xe(k);
    }
    function gt(k, Q, de, Ne, Oe) {
      return new Ae(
        (k || "React class") + ": " + Q + " type `" + de + "." + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Oe + "`."
      );
    }
    function cn(k) {
      function Q(de, Ne, Oe, nt, be) {
        var Be = de[Ne], $e = dt(Be);
        if ($e !== "object")
          return new Ae("Invalid " + nt + " `" + be + "` of type `" + $e + "` " + ("supplied to `" + Oe + "`, expected `object`."));
        for (var Ze in k) {
          var rt = k[Ze];
          if (typeof rt != "function")
            return gt(Oe, nt, be, Ze, Kt(rt));
          var Dt = rt(Be, Ze, Oe, nt, be + "." + Ze, _);
          if (Dt)
            return Dt;
        }
        return null;
      }
      return Xe(Q);
    }
    function He(k) {
      function Q(de, Ne, Oe, nt, be) {
        var Be = de[Ne], $e = dt(Be);
        if ($e !== "object")
          return new Ae("Invalid " + nt + " `" + be + "` of type `" + $e + "` " + ("supplied to `" + Oe + "`, expected `object`."));
        var Ze = fe({}, de[Ne], k);
        for (var rt in Ze) {
          var Dt = k[rt];
          if (Se(k, rt) && typeof Dt != "function")
            return gt(Oe, nt, be, rt, Kt(Dt));
          if (!Dt)
            return new Ae(
              "Invalid " + nt + " `" + be + "` key `" + rt + "` supplied to `" + Oe + "`.\nBad object: " + JSON.stringify(de[Ne], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var Z = Dt(Be, rt, Oe, nt, be + "." + rt, _);
          if (Z)
            return Z;
        }
        return null;
      }
      return Xe(Q);
    }
    function tt(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(tt);
          if (k === null || ye(k))
            return !0;
          var Q = $(k);
          if (Q) {
            var de = Q.call(k), Ne;
            if (Q !== k.entries) {
              for (; !(Ne = de.next()).done; )
                if (!tt(Ne.value))
                  return !1;
            } else
              for (; !(Ne = de.next()).done; ) {
                var Oe = Ne.value;
                if (Oe && !tt(Oe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function rn(k, Q) {
      return k === "symbol" ? !0 : Q ? Q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Q instanceof Symbol : !1;
    }
    function dt(k) {
      var Q = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : rn(Q, k) ? "symbol" : Q;
    }
    function Kt(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var Q = dt(k);
      if (Q === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return Q;
    }
    function X(k) {
      var Q = Kt(k);
      switch (Q) {
        case "array":
        case "object":
          return "an " + Q;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Q;
        default:
          return Q;
      }
    }
    function we(k) {
      return !k.constructor || !k.constructor.name ? J : k.constructor.name;
    }
    return K.checkPropTypes = Ue, K.resetWarningCache = Ue.resetWarningCache, K.PropTypes = K, K;
  }, y0;
}
var g0, RT;
function A_() {
  if (RT) return g0;
  RT = 1;
  var z = w0();
  function fe() {
  }
  function _() {
  }
  return _.resetWarningCache = fe, g0 = function() {
    function Se(y, ye, q, W, ue, $) {
      if ($ !== z) {
        var J = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw J.name = "Invariant Violation", J;
      }
    }
    Se.isRequired = Se;
    function Ue() {
      return Se;
    }
    var ae = {
      array: Se,
      bigint: Se,
      bool: Se,
      func: Se,
      number: Se,
      object: Se,
      string: Se,
      symbol: Se,
      any: Se,
      arrayOf: Ue,
      element: Se,
      elementType: Se,
      instanceOf: Ue,
      node: Se,
      objectOf: Ue,
      oneOf: Ue,
      oneOfType: Ue,
      shape: Ue,
      exact: Ue,
      checkPropTypes: _,
      resetWarningCache: fe
    };
    return ae.PropTypes = ae, ae;
  }, g0;
}
if (process.env.NODE_ENV !== "production") {
  var j_ = _T(), F_ = !0;
  R0.exports = U_()(j_.isElement, F_);
} else
  R0.exports = A_()();
var H_ = R0.exports;
const xT = /* @__PURE__ */ C_(H_);
function P_() {
  const [z, fe] = S0([]), [_, Se] = S0([]);
  let Ue = 0;
  x0(() => {
    Um.instance.on("change", () => {
      ae();
    }), ae();
  }, []);
  function ae() {
    const y = Um.getList(), ye = ["serial:connected", "serial:disconnected", "serial:connecting"];
    for (const q of y) {
      const W = q.availableListeners.filter((ue) => !ue.listening && ye.includes(ue.type));
      if (W.length > 0)
        for (const ue of W)
          q.on(ue.type, () => {
            const $ = ue.type === "serial:connected" ? "alert-success" : ue.type === "serial:disconnected" ? "alert-error" : "alert-info", J = ue.type === "serial:connected" ? "Device connected" : ue.type === "serial:disconnected" ? "Device disconnected" : "Device connecting", K = [..._];
            K.push({ message: J, type: $ }), Se([...K]), Ue && clearTimeout(Ue), Ue = setTimeout(() => {
              const xe = [..._];
              xe.shift(), Se([...xe]);
            }, 5e3);
          });
    }
    fe(y);
  }
  return /* @__PURE__ */ Ve.jsx(Ve.Fragment, { children: /* @__PURE__ */ Ve.jsx("div", { className: "fixed z-[60] bottom-4 right-4 grid gap-2", children: _.map((y, ye) => /* @__PURE__ */ Ve.jsx(OT, { message: y.message, type: y.type }, `alert-ws-${ye}`)) }) });
}
OT.propTypes = {
  message: xT.string,
  type: xT.string
};
function OT({ message: z, type: fe }) {
  return /* @__PURE__ */ Ve.jsxs("div", { role: "alert", className: `alert ${fe}`, children: [
    /* @__PURE__ */ Ve.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        className: "h-6 w-6 shrink-0 stroke-current",
        children: /* @__PURE__ */ Ve.jsx(
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
    /* @__PURE__ */ Ve.jsx("span", { children: z })
  ] });
}
function V_() {
  return x0(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("data-theme", "sunset") : document.documentElement.setAttribute("data-theme", "emerald");
  }, []), /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
    /* @__PURE__ */ Ve.jsx(k_, {}),
    /* @__PURE__ */ Ve.jsx(O_, {}),
    /* @__PURE__ */ Ve.jsx(P_, {})
  ] });
}
const wT = "v4";
if (typeof document < "u") {
  let z = document.getElementById(`webserial-${wT}`);
  z || (z = document.createElement("div"), z.id = `webserial-${wT}`, document.body.append(z)), T0(z).render(
    /* @__PURE__ */ Ve.jsx(S_, { children: /* @__PURE__ */ Ve.jsx(V_, {}) })
  );
}
