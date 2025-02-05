import Ke, { useState as Se, useEffect as Pe } from "react";
import { Devices as be, utils as He } from "@danidoble/webserial";
function Qe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Re = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function er() {
  if (Ye) return ye;
  Ye = 1;
  var t = Symbol.for("react.transitional.element"), j = Symbol.for("react.fragment");
  function y(f, v, c) {
    var l = null;
    if (c !== void 0 && (l = "" + c), v.key !== void 0 && (l = "" + v.key), "key" in v) {
      c = {};
      for (var d in v)
        d !== "key" && (c[d] = v[d]);
    } else c = v;
    return v = c.ref, {
      $$typeof: t,
      type: f,
      key: l,
      ref: v !== void 0 ? v : null,
      props: c
    };
  }
  return ye.Fragment = j, ye.jsx = y, ye.jsxs = y, ye;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function rr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === fe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case H:
          return "Fragment";
        case s:
          return "Portal";
        case ce:
          return "Profiler";
        case ie:
          return "StrictMode";
        case ne:
          return "Suspense";
        case oe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case le:
            return (e.displayName || "Context") + ".Provider";
          case ue:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case G:
            return a = e.displayName || null, a !== null ? a : t(e.type) || "Memo";
          case se:
            a = e._payload, e = e._init;
            try {
              return t(e(a));
            } catch {
            }
        }
      return null;
    }
    function j(e) {
      return "" + e;
    }
    function y(e) {
      try {
        j(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var i = a.error, C = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), j(e);
      }
    }
    function f() {
    }
    function v() {
      if (p === 0) {
        x = console.log, w = console.info, g = console.warn, T = console.error, O = console.group, _ = console.groupCollapsed, U = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: f,
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
      p++;
    }
    function c() {
      if (p--, p === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: o({}, e, { value: x }),
          info: o({}, e, { value: w }),
          warn: o({}, e, { value: g }),
          error: o({}, e, { value: T }),
          group: o({}, e, { value: O }),
          groupCollapsed: o({}, e, { value: _ }),
          groupEnd: o({}, e, { value: U })
        });
      }
      0 > p && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(e) {
      if (n === void 0)
        try {
          throw Error();
        } catch (i) {
          var a = i.stack.trim().match(/\n( *(at )?)/);
          n = a && a[1] || "", V = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + n + e + V;
    }
    function d(e, a) {
      if (!e || ee) return "";
      var i = de.get(e);
      if (i !== void 0) return i;
      ee = !0, i = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var C = null;
      C = J.H, J.H = null, v();
      try {
        var z = {
          DetermineComponentFrameRoot: function() {
            try {
              if (a) {
                var re = function() {
                  throw Error();
                };
                if (Object.defineProperty(re.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(re, []);
                  } catch (K) {
                    var we = K;
                  }
                  Reflect.construct(e, [], re);
                } else {
                  try {
                    re.call();
                  } catch (K) {
                    we = K;
                  }
                  e.call(re.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (K) {
                  we = K;
                }
                (re = e()) && typeof re.catch == "function" && re.catch(function() {
                });
              }
            } catch (K) {
              if (K && we && typeof K.stack == "string")
                return [K.stack, we.stack];
            }
            return [null, null];
          }
        };
        z.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var Y = Object.getOwnPropertyDescriptor(
          z.DetermineComponentFrameRoot,
          "name"
        );
        Y && Y.configurable && Object.defineProperty(
          z.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var h = z.DetermineComponentFrameRoot(), Z = h[0], pe = h[1];
        if (Z && pe) {
          var F = Z.split(`
`), ae = pe.split(`
`);
          for (h = Y = 0; Y < F.length && !F[Y].includes(
            "DetermineComponentFrameRoot"
          ); )
            Y++;
          for (; h < ae.length && !ae[h].includes(
            "DetermineComponentFrameRoot"
          ); )
            h++;
          if (Y === F.length || h === ae.length)
            for (Y = F.length - 1, h = ae.length - 1; 1 <= Y && 0 <= h && F[Y] !== ae[h]; )
              h--;
          for (; 1 <= Y && 0 <= h; Y--, h--)
            if (F[Y] !== ae[h]) {
              if (Y !== 1 || h !== 1)
                do
                  if (Y--, h--, 0 > h || F[Y] !== ae[h]) {
                    var ve = `
` + F[Y].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, ve), ve;
                  }
                while (1 <= Y && 0 <= h);
              break;
            }
        }
      } finally {
        ee = !1, J.H = C, c(), Error.prepareStackTrace = i;
      }
      return F = (F = e ? e.displayName || e.name : "") ? l(F) : "", typeof e == "function" && de.set(e, F), F;
    }
    function P(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var a = e.prototype;
        return d(
          e,
          !(!a || !a.isReactComponent)
        );
      }
      if (typeof e == "string") return l(e);
      switch (e) {
        case ne:
          return l("Suspense");
        case oe:
          return l("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return e = d(e.render, !1), e;
          case G:
            return P(e.type);
          case se:
            a = e._payload, e = e._init;
            try {
              return P(e(a));
            } catch {
            }
        }
      return "";
    }
    function S() {
      var e = J.A;
      return e === null ? null : e.getOwner();
    }
    function b(e) {
      if (r.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, a) {
      function i() {
        Ae || (Ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function N() {
      var e = t(this.type);
      return Ne[e] || (Ne[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, a, i, C, z, Y) {
      return i = Y.ref, e = {
        $$typeof: I,
        type: e,
        key: a,
        props: Y,
        _owner: z
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: N
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function q(e, a, i, C, z, Y) {
      if (typeof e == "string" || typeof e == "function" || e === H || e === ce || e === ie || e === ne || e === oe || e === B || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === G || e.$$typeof === le || e.$$typeof === ue || e.$$typeof === Q || e.$$typeof === E || e.getModuleId !== void 0)) {
        var h = a.children;
        if (h !== void 0)
          if (C)
            if (m(h)) {
              for (C = 0; C < h.length; C++)
                $(h[C], e);
              Object.freeze && Object.freeze(h);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else $(h, e);
      } else
        h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? C = "null" : m(e) ? C = "array" : e !== void 0 && e.$$typeof === I ? (C = "<" + (t(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          C,
          h
        );
      if (r.call(a, "key")) {
        h = t(e);
        var Z = Object.keys(a).filter(function(F) {
          return F !== "key";
        });
        C = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", $e[h + C] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          h,
          Z,
          h
        ), $e[h + C] = !0);
      }
      if (h = null, i !== void 0 && (y(i), h = "" + i), b(a) && (y(a.key), h = "" + a.key), "key" in a) {
        i = {};
        for (var pe in a)
          pe !== "key" && (i[pe] = a[pe]);
      } else i = a;
      return h && R(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(e, h, Y, z, S(), i);
    }
    function $(e, a) {
      if (typeof e == "object" && e && e.$$typeof !== Ze) {
        if (m(e))
          for (var i = 0; i < e.length; i++) {
            var C = e[i];
            W(C) && D(C, a);
          }
        else if (W(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? i = null : (i = X && e[X] || e["@@iterator"], i = typeof i == "function" ? i : null), typeof i == "function" && i !== e.entries && (i = i.call(e), i !== e))
          for (; !(e = i.next()).done; )
            W(e.value) && D(e.value, a);
      }
    }
    function W(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    function D(e, a) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, a = te(a), !Me[a])) {
        Me[a] = !0;
        var i = "";
        e && e._owner != null && e._owner !== S() && (i = null, typeof e._owner.tag == "number" ? i = t(e._owner.type) : typeof e._owner.name == "string" && (i = e._owner.name), i = " It was passed a child from " + i + ".");
        var C = J.getCurrentStack;
        J.getCurrentStack = function() {
          var z = P(e.type);
          return C && (z += C() || ""), z;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          a,
          i
        ), J.getCurrentStack = C;
      }
    }
    function te(e) {
      var a = "", i = S();
      return i && (i = t(i.type)) && (a = `

Check the render method of \`` + i + "`."), a || (e = t(e)) && (a = `

Check the top-level render call using <` + e + ">."), a;
    }
    var L = Ke, I = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), le = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), X = Symbol.iterator, fe = Symbol.for("react.client.reference"), J = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, r = Object.prototype.hasOwnProperty, o = Object.assign, E = Symbol.for("react.client.reference"), m = Array.isArray, p = 0, x, w, g, T, O, _, U;
    f.__reactDisabledLog = !0;
    var n, V, ee = !1, de = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ze = Symbol.for("react.client.reference"), Ae, Ne = {}, $e = {}, Me = {};
    me.Fragment = H, me.jsx = function(e, a, i, C, z) {
      return q(e, a, i, !1, C, z);
    }, me.jsxs = function(e, a, i, C, z) {
      return q(e, a, i, !0, C, z);
    };
  }()), me;
}
process.env.NODE_ENV === "production" ? Re.exports = er() : Re.exports = rr();
var u = Re.exports;
function tr() {
  const [t, j] = Se([]);
  be.instance.on("change", () => {
    y();
  }), Pe(() => {
    y();
  }, []);
  function y() {
    j(be.getList());
  }
  function f() {
    return v().length > 0;
  }
  function v() {
    return t.filter((l) => !l.isConnected);
  }
  function c(l) {
    l.connect().then(() => {
    }).catch((d) => {
      console.error(d);
    });
  }
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `ws-fixed ws-z-50 ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-bg-white/50 dark:ws-bg-neutral-900/50 ${f() ? "" : "ws-hidden"}`,
      children: /* @__PURE__ */ u.jsx("div", { className: "ws-relative ws-grid ws-place-items-center ws-h-screen ws-text-black dark:ws-text-white", children: /* @__PURE__ */ u.jsxs("div", { className: "ws-w-full ws-max-w-xl ws-mx-auto ws-text-center ws-p-4", children: [
        /* @__PURE__ */ u.jsx("h4", { className: "ws-text-xl sm:ws-text-3xl ws-font-semibold ws-uppercase ws-mb-6", children: "Webserial permission request" }),
        /* @__PURE__ */ u.jsx("div", { role: "alert", className: "ws-rounded-md ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-b-4 ws-border-sky-400 dark:ws-border-sky-600 ws-p-4", children: /* @__PURE__ */ u.jsxs("div", { className: "ws-flex", children: [
          /* @__PURE__ */ u.jsx("div", { className: "ws-flex-shrink-0", children: /* @__PURE__ */ u.jsx(
            "svg",
            {
              className: "ws-size-6 ws-text-gray-700 dark:ws-text-blue-100",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ u.jsxs("div", { className: "ws-ml-3 ws-flex-1 ws-text-left", children: [
            /* @__PURE__ */ u.jsx("p", { className: "ws-text-base ws-font-bold ws-text-gray-800 dark:ws-text-white", children: "Note" }),
            /* @__PURE__ */ u.jsx("p", { className: "ws-text-sm ws-text-gray-700 dark:ws-text-white", children: "To access the serial port, you need to grant permission to the browser." })
          ] })
        ] }) }),
        /* @__PURE__ */ u.jsx("p", { className: "ws-my-6 ws-text-base", children: "Here appear the devices missing to work with the application." }),
        /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx("ul", { className: "ws-text-left ws-grid ws-grid-cols-1 ws-gap-2", children: v().map((l) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsxs("button", { className: "ws-btn-permission", onClick: () => c(l), children: [
          l.typeDevice,
          " #",
          l.deviceNumber
        ] }) }, l)) }) }),
        /* @__PURE__ */ u.jsx("div", { className: "ws-mt-12 ws-mb-2 ws-text-xs ws-text-right", children: "If by some reason the devices are not appearing, please refresh the page." }),
        /* @__PURE__ */ u.jsx("div", { className: "ws-text-right", children: /* @__PURE__ */ u.jsx("button", { className: "ws-btn-reload", onClick: () => {
          location.reload();
        }, children: "Refresh" }) })
      ] }) })
    }
  );
}
function nr() {
  let t = location.protocol === "https:";
  const j = He.supportWebSerial();
  j && !t && (t = !0);
  function y() {
    return !t || !j;
  }
  function f() {
    location.href = location.href.replace(/^http:/, "https:");
  }
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `ws-fixed ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-z-[51] ws-p-2 ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-y-8 ws-border-red-600 dark:ws-border-rose-600 ${y() ? "" : "ws-hidden"}`,
      children: /* @__PURE__ */ u.jsx("div", { className: "ws-grid ws-place-items-center ws-size-full", children: /* @__PURE__ */ u.jsx("div", { className: "ws-w-full ws-max-w-xl", children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: "ws-w-full ws-bg-white dark:ws-bg-neutral-950 ws-border-b-8 ws-border-red-600 dark:ws-border-rose-600 ws-rounded-lg ws-px-4 ws-py-8 ws-text-black dark:ws-text-white",
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "ws-w-full ws-inline-flex ws-justify-center ws-text-red-600", children: /* @__PURE__ */ u.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "ws-size-24 ws-shrink-0 ws-stroke-current",
                fill: "none",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ u.jsx(
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
            /* @__PURE__ */ u.jsx("div", { className: "ws-text-center ws-text-2xl", children: t ? /* @__PURE__ */ u.jsxs("div", { className: "", children: [
              /* @__PURE__ */ u.jsx("p", { children: "Webserial is not available in this browser." }),
              /* @__PURE__ */ u.jsx("p", { className: "ws-mt-6 ws-text-sm", children: "Please check documentation for more information." }),
              /* @__PURE__ */ u.jsx("p", { className: "ws-mb-6 ws-text-sm", children: "This application will not work." })
            ] }) : /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("p", { children: "Webserial need a secure connection (https)" }),
              /* @__PURE__ */ u.jsx("p", { className: "ws-mt-2 ws-flex ws-justify-center", children: /* @__PURE__ */ u.jsx("button", { className: "ws-btn-link", onClick: () => {
                f();
              }, children: "Update connection" }) }),
              /* @__PURE__ */ u.jsx("p", { className: "ws-mt-6 ws-text-base", children: "Otherwise this application will not work." })
            ] }) })
          ]
        }
      ) }) })
    }
  ) });
}
var Oe = { exports: {} }, he = { exports: {} }, k = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function or() {
  if (We) return k;
  We = 1;
  var t = typeof Symbol == "function" && Symbol.for, j = t ? Symbol.for("react.element") : 60103, y = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, N = t ? Symbol.for("react.suspense_list") : 60120, M = t ? Symbol.for("react.memo") : 60115, q = t ? Symbol.for("react.lazy") : 60116, $ = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, te = t ? Symbol.for("react.scope") : 60119;
  function L(s) {
    if (typeof s == "object" && s !== null) {
      var H = s.$$typeof;
      switch (H) {
        case j:
          switch (s = s.type, s) {
            case P:
            case S:
            case f:
            case c:
            case v:
            case R:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case d:
                case b:
                case q:
                case M:
                case l:
                  return s;
                default:
                  return H;
              }
          }
        case y:
          return H;
      }
    }
  }
  function I(s) {
    return L(s) === S;
  }
  return k.AsyncMode = P, k.ConcurrentMode = S, k.ContextConsumer = d, k.ContextProvider = l, k.Element = j, k.ForwardRef = b, k.Fragment = f, k.Lazy = q, k.Memo = M, k.Portal = y, k.Profiler = c, k.StrictMode = v, k.Suspense = R, k.isAsyncMode = function(s) {
    return I(s) || L(s) === P;
  }, k.isConcurrentMode = I, k.isContextConsumer = function(s) {
    return L(s) === d;
  }, k.isContextProvider = function(s) {
    return L(s) === l;
  }, k.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === j;
  }, k.isForwardRef = function(s) {
    return L(s) === b;
  }, k.isFragment = function(s) {
    return L(s) === f;
  }, k.isLazy = function(s) {
    return L(s) === q;
  }, k.isMemo = function(s) {
    return L(s) === M;
  }, k.isPortal = function(s) {
    return L(s) === y;
  }, k.isProfiler = function(s) {
    return L(s) === c;
  }, k.isStrictMode = function(s) {
    return L(s) === v;
  }, k.isSuspense = function(s) {
    return L(s) === R;
  }, k.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === f || s === S || s === c || s === v || s === R || s === N || typeof s == "object" && s !== null && (s.$$typeof === q || s.$$typeof === M || s.$$typeof === l || s.$$typeof === d || s.$$typeof === b || s.$$typeof === W || s.$$typeof === D || s.$$typeof === te || s.$$typeof === $);
  }, k.typeOf = L, k;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function sr() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, j = t ? Symbol.for("react.element") : 60103, y = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, S = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, N = t ? Symbol.for("react.suspense_list") : 60120, M = t ? Symbol.for("react.memo") : 60115, q = t ? Symbol.for("react.lazy") : 60116, $ = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, te = t ? Symbol.for("react.scope") : 60119;
    function L(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === f || n === S || n === c || n === v || n === R || n === N || typeof n == "object" && n !== null && (n.$$typeof === q || n.$$typeof === M || n.$$typeof === l || n.$$typeof === d || n.$$typeof === b || n.$$typeof === W || n.$$typeof === D || n.$$typeof === te || n.$$typeof === $);
    }
    function I(n) {
      if (typeof n == "object" && n !== null) {
        var V = n.$$typeof;
        switch (V) {
          case j:
            var ee = n.type;
            switch (ee) {
              case P:
              case S:
              case f:
              case c:
              case v:
              case R:
                return ee;
              default:
                var de = ee && ee.$$typeof;
                switch (de) {
                  case d:
                  case b:
                  case q:
                  case M:
                  case l:
                    return de;
                  default:
                    return V;
                }
            }
          case y:
            return V;
        }
      }
    }
    var s = P, H = S, ie = d, ce = l, ue = j, le = b, Q = f, ne = q, oe = M, G = y, se = c, B = v, X = R, fe = !1;
    function J(n) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(n) || I(n) === P;
    }
    function r(n) {
      return I(n) === S;
    }
    function o(n) {
      return I(n) === d;
    }
    function E(n) {
      return I(n) === l;
    }
    function m(n) {
      return typeof n == "object" && n !== null && n.$$typeof === j;
    }
    function p(n) {
      return I(n) === b;
    }
    function x(n) {
      return I(n) === f;
    }
    function w(n) {
      return I(n) === q;
    }
    function g(n) {
      return I(n) === M;
    }
    function T(n) {
      return I(n) === y;
    }
    function O(n) {
      return I(n) === c;
    }
    function _(n) {
      return I(n) === v;
    }
    function U(n) {
      return I(n) === R;
    }
    A.AsyncMode = s, A.ConcurrentMode = H, A.ContextConsumer = ie, A.ContextProvider = ce, A.Element = ue, A.ForwardRef = le, A.Fragment = Q, A.Lazy = ne, A.Memo = oe, A.Portal = G, A.Profiler = se, A.StrictMode = B, A.Suspense = X, A.isAsyncMode = J, A.isConcurrentMode = r, A.isContextConsumer = o, A.isContextProvider = E, A.isElement = m, A.isForwardRef = p, A.isFragment = x, A.isLazy = w, A.isMemo = g, A.isPortal = T, A.isProfiler = O, A.isStrictMode = _, A.isSuspense = U, A.isValidElementType = L, A.typeOf = I;
  }()), A;
}
var Le;
function Je() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? he.exports = or() : he.exports = sr()), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ge, Ue;
function ar() {
  if (Ue) return ge;
  Ue = 1;
  var t = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function f(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var l = {}, d = 0; d < 10; d++)
        l["_" + String.fromCharCode(d)] = d;
      var P = Object.getOwnPropertyNames(l).map(function(b) {
        return l[b];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        S[b] = b;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ge = v() ? Object.assign : function(c, l) {
    for (var d, P = f(c), S, b = 1; b < arguments.length; b++) {
      d = Object(arguments[b]);
      for (var R in d)
        j.call(d, R) && (P[R] = d[R]);
      if (t) {
        S = t(d);
        for (var N = 0; N < S.length; N++)
          y.call(d, S[N]) && (P[S[N]] = d[S[N]]);
      }
    }
    return P;
  }, ge;
}
var Ee, ze;
function ke() {
  if (ze) return Ee;
  ze = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ee = t, Ee;
}
var xe, De;
function Ge() {
  return De || (De = 1, xe = Function.call.bind(Object.prototype.hasOwnProperty)), xe;
}
var Te, Fe;
function ir() {
  if (Fe) return Te;
  Fe = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var j = ke(), y = {}, f = Ge();
    t = function(c) {
      var l = "Warning: " + c;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function v(c, l, d, P, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in c)
        if (f(c, b)) {
          var R;
          try {
            if (typeof c[b] != "function") {
              var N = Error(
                (P || "React class") + ": " + d + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw N.name = "Invariant Violation", N;
            }
            R = c[b](l, b, P, d, null, j);
          } catch (q) {
            R = q;
          }
          if (R && !(R instanceof Error) && t(
            (P || "React class") + ": type specification of " + d + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in y)) {
            y[R.message] = !0;
            var M = S ? S() : "";
            t(
              "Failed " + d + " type: " + R.message + (M ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, Te = v, Te;
}
var _e, Ve;
function cr() {
  if (Ve) return _e;
  Ve = 1;
  var t = Je(), j = ar(), y = ke(), f = Ge(), v = ir(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(d) {
    var P = "Warning: " + d;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return _e = function(d, P) {
    var S = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function R(r) {
      var o = r && (S && r[S] || r[b]);
      if (typeof o == "function")
        return o;
    }
    var N = "<<anonymous>>", M = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: te(),
      arrayOf: L,
      element: I(),
      elementType: s(),
      instanceOf: H,
      node: le(),
      objectOf: ce,
      oneOf: ie,
      oneOfType: ue,
      shape: ne,
      exact: oe
    };
    function q(r, o) {
      return r === o ? r !== 0 || 1 / r === 1 / o : r !== r && o !== o;
    }
    function $(r, o) {
      this.message = r, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    $.prototype = Error.prototype;
    function W(r) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, E = 0;
      function m(x, w, g, T, O, _, U) {
        if (T = T || N, _ = _ || g, U !== y) {
          if (P) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = T + ":" + g;
            !o[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + _ + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[V] = !0, E++);
          }
        }
        return w[g] == null ? x ? w[g] === null ? new $("The " + O + " `" + _ + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new $("The " + O + " `" + _ + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : r(w, g, T, O, _);
      }
      var p = m.bind(null, !1);
      return p.isRequired = m.bind(null, !0), p;
    }
    function D(r) {
      function o(E, m, p, x, w, g) {
        var T = E[m], O = B(T);
        if (O !== r) {
          var _ = X(T);
          return new $(
            "Invalid " + x + " `" + w + "` of type " + ("`" + _ + "` supplied to `" + p + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return W(o);
    }
    function te() {
      return W(l);
    }
    function L(r) {
      function o(E, m, p, x, w) {
        if (typeof r != "function")
          return new $("Property `" + w + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var g = E[m];
        if (!Array.isArray(g)) {
          var T = B(g);
          return new $("Invalid " + x + " `" + w + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected an array."));
        }
        for (var O = 0; O < g.length; O++) {
          var _ = r(g, O, p, x, w + "[" + O + "]", y);
          if (_ instanceof Error)
            return _;
        }
        return null;
      }
      return W(o);
    }
    function I() {
      function r(o, E, m, p, x) {
        var w = o[E];
        if (!d(w)) {
          var g = B(w);
          return new $("Invalid " + p + " `" + x + "` of type " + ("`" + g + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(r);
    }
    function s() {
      function r(o, E, m, p, x) {
        var w = o[E];
        if (!t.isValidElementType(w)) {
          var g = B(w);
          return new $("Invalid " + p + " `" + x + "` of type " + ("`" + g + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(r);
    }
    function H(r) {
      function o(E, m, p, x, w) {
        if (!(E[m] instanceof r)) {
          var g = r.name || N, T = J(E[m]);
          return new $("Invalid " + x + " `" + w + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("instance of `" + g + "`."));
        }
        return null;
      }
      return W(o);
    }
    function ie(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), l;
      function o(E, m, p, x, w) {
        for (var g = E[m], T = 0; T < r.length; T++)
          if (q(g, r[T]))
            return null;
        var O = JSON.stringify(r, function(U, n) {
          var V = X(n);
          return V === "symbol" ? String(n) : n;
        });
        return new $("Invalid " + x + " `" + w + "` of value `" + String(g) + "` " + ("supplied to `" + p + "`, expected one of " + O + "."));
      }
      return W(o);
    }
    function ce(r) {
      function o(E, m, p, x, w) {
        if (typeof r != "function")
          return new $("Property `" + w + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var g = E[m], T = B(g);
        if (T !== "object")
          return new $("Invalid " + x + " `" + w + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected an object."));
        for (var O in g)
          if (f(g, O)) {
            var _ = r(g, O, p, x, w + "." + O, y);
            if (_ instanceof Error)
              return _;
          }
        return null;
      }
      return W(o);
    }
    function ue(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var o = 0; o < r.length; o++) {
        var E = r[o];
        if (typeof E != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(E) + " at index " + o + "."
          ), l;
      }
      function m(p, x, w, g, T) {
        for (var O = [], _ = 0; _ < r.length; _++) {
          var U = r[_], n = U(p, x, w, g, T, y);
          if (n == null)
            return null;
          n.data && f(n.data, "expectedType") && O.push(n.data.expectedType);
        }
        var V = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new $("Invalid " + g + " `" + T + "` supplied to " + ("`" + w + "`" + V + "."));
      }
      return W(m);
    }
    function le() {
      function r(o, E, m, p, x) {
        return G(o[E]) ? null : new $("Invalid " + p + " `" + x + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return W(r);
    }
    function Q(r, o, E, m, p) {
      return new $(
        (r || "React class") + ": " + o + " type `" + E + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function ne(r) {
      function o(E, m, p, x, w) {
        var g = E[m], T = B(g);
        if (T !== "object")
          return new $("Invalid " + x + " `" + w + "` of type `" + T + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var O in r) {
          var _ = r[O];
          if (typeof _ != "function")
            return Q(p, x, w, O, X(_));
          var U = _(g, O, p, x, w + "." + O, y);
          if (U)
            return U;
        }
        return null;
      }
      return W(o);
    }
    function oe(r) {
      function o(E, m, p, x, w) {
        var g = E[m], T = B(g);
        if (T !== "object")
          return new $("Invalid " + x + " `" + w + "` of type `" + T + "` " + ("supplied to `" + p + "`, expected `object`."));
        var O = j({}, E[m], r);
        for (var _ in O) {
          var U = r[_];
          if (f(r, _) && typeof U != "function")
            return Q(p, x, w, _, X(U));
          if (!U)
            return new $(
              "Invalid " + x + " `" + w + "` key `" + _ + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(E[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var n = U(g, _, p, x, w + "." + _, y);
          if (n)
            return n;
        }
        return null;
      }
      return W(o);
    }
    function G(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(G);
          if (r === null || d(r))
            return !0;
          var o = R(r);
          if (o) {
            var E = o.call(r), m;
            if (o !== r.entries) {
              for (; !(m = E.next()).done; )
                if (!G(m.value))
                  return !1;
            } else
              for (; !(m = E.next()).done; ) {
                var p = m.value;
                if (p && !G(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(r, o) {
      return r === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function B(r) {
      var o = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : se(o, r) ? "symbol" : o;
    }
    function X(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var o = B(r);
      if (o === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function fe(r) {
      var o = X(r);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function J(r) {
      return !r.constructor || !r.constructor.name ? N : r.constructor.name;
    }
    return M.checkPropTypes = v, M.resetWarningCache = v.resetWarningCache, M.PropTypes = M, M;
  }, _e;
}
var je, Be;
function ur() {
  if (Be) return je;
  Be = 1;
  var t = ke();
  function j() {
  }
  function y() {
  }
  return y.resetWarningCache = j, je = function() {
    function f(l, d, P, S, b, R) {
      if (R !== t) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    f.isRequired = f;
    function v() {
      return f;
    }
    var c = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: v,
      element: f,
      elementType: f,
      instanceOf: v,
      node: f,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: y,
      resetWarningCache: j
    };
    return c.PropTypes = c, c;
  }, je;
}
if (process.env.NODE_ENV !== "production") {
  var lr = Je(), fr = !0;
  Oe.exports = cr()(lr.isElement, fr);
} else
  Oe.exports = ur()();
var dr = Oe.exports;
const Ce = /* @__PURE__ */ Qe(dr);
function pr() {
  const [t, j] = Se([]), [y, f] = Se([]);
  let v = 0;
  Pe(() => {
    be.instance.on("change", () => {
      c();
    }), c();
  }, []);
  function c() {
    const l = be.getList(), d = ["serial:connected", "serial:disconnected", "serial:connecting"];
    for (const P of l) {
      const S = P.availableListeners.filter((b) => !b.listening && d.includes(b.type));
      if (S.length > 0)
        for (const b of S)
          P.on(b.type, () => {
            let R = "ws-alert-info", N = "Device connecting";
            b.type === "serial:connected" ? (R = "ws-alert-success", N = "Device connected") : b.type === "serial:disconnected" && (R = "ws-alert-error", N = "Device disconnected");
            const M = [...y];
            M.push({ message: N, type: R }), f([...M]), v && clearTimeout(v), v = setTimeout(() => {
              const q = [...y];
              q.shift(), f([...q]);
            }, 5e3);
          });
    }
    j(l);
  }
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "ws-fixed ws-z-[60] ws-bottom-4 ws-right-4 ws-grid ws-gap-2", children: y.map((l, d) => /* @__PURE__ */ u.jsx(Xe, { message: l.message, type: l.type }, `alert-ws-${d}`)) }) });
}
Xe.propTypes = {
  message: Ce.string,
  type: Ce.string
};
function Xe({ message: t, type: j }) {
  return /* @__PURE__ */ u.jsxs("div", { role: "alert", className: `ws-alert ${j}`, children: [
    /* @__PURE__ */ u.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        className: "ws-h-6 ws-w-6 ws-shrink-0 ws-stroke-current",
        children: /* @__PURE__ */ u.jsx(
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
    /* @__PURE__ */ u.jsx("span", { children: t })
  ] });
}
vr.propTypes = {
  theme: Ce.oneOf(["system", "dark", "light"])
};
function vr({ theme: t = "system" } = { theme: "system" }) {
  Pe(() => {
    t === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark") : t === "dark" ? document.documentElement.classList.add("dark") : t === "light" && document.documentElement.classList.remove("dark");
  }, [t]);
  let j = location.protocol === "https:";
  const y = He.supportWebSerial();
  y && !j && (j = !0);
  function f() {
    return !j || !y;
  }
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(tr, {}),
    f() ? /* @__PURE__ */ u.jsx(nr, {}) : null,
    /* @__PURE__ */ u.jsx(pr, {})
  ] });
}
export {
  vr as A,
  u as j
};
