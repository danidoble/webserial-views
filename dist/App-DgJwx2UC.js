import er, { useState as Oe, useEffect as Pe } from "react";
import { Devices as he, utils as Ge } from "@danidoble/webserial";
function rr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var be = { exports: {} }, ye = {};
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
function tr() {
  if (Ye) return ye;
  Ye = 1;
  var t = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function y(f, v, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), v.key !== void 0 && (u = "" + v.key), "key" in v) {
      c = {};
      for (var d in v)
        d !== "key" && (c[d] = v[d]);
    } else c = v;
    return v = c.ref, {
      $$typeof: t,
      type: f,
      key: u,
      ref: v !== void 0 ? v : null,
      props: c
    };
  }
  return ye.Fragment = x, ye.jsx = y, ye.jsxs = y, ye;
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
function nr() {
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
    function x(e) {
      return "" + e;
    }
    function y(e) {
      try {
        x(e);
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
        ), x(e);
      }
    }
    function f() {
    }
    function v() {
      if (p === 0) {
        T = console.log, h = console.info, g = console.warn, _ = console.error, O = console.group, j = console.groupCollapsed, U = console.groupEnd;
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
          log: o({}, e, { value: T }),
          info: o({}, e, { value: h }),
          warn: o({}, e, { value: g }),
          error: o({}, e, { value: _ }),
          group: o({}, e, { value: O }),
          groupCollapsed: o({}, e, { value: j }),
          groupEnd: o({}, e, { value: U })
        });
      }
      0 > p && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function u(e) {
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
        var w = z.DetermineComponentFrameRoot(), Z = w[0], pe = w[1];
        if (Z && pe) {
          var F = Z.split(`
`), ae = pe.split(`
`);
          for (w = Y = 0; Y < F.length && !F[Y].includes(
            "DetermineComponentFrameRoot"
          ); )
            Y++;
          for (; w < ae.length && !ae[w].includes(
            "DetermineComponentFrameRoot"
          ); )
            w++;
          if (Y === F.length || w === ae.length)
            for (Y = F.length - 1, w = ae.length - 1; 1 <= Y && 0 <= w && F[Y] !== ae[w]; )
              w--;
          for (; 1 <= Y && 0 <= w; Y--, w--)
            if (F[Y] !== ae[w]) {
              if (Y !== 1 || w !== 1)
                do
                  if (Y--, w--, 0 > w || F[Y] !== ae[w]) {
                    var ve = `
` + F[Y].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, ve), ve;
                  }
                while (1 <= Y && 0 <= w);
              break;
            }
        }
      } finally {
        ee = !1, J.H = C, c(), Error.prepareStackTrace = i;
      }
      return F = (F = e ? e.displayName || e.name : "") ? u(F) : "", typeof e == "function" && de.set(e, F), F;
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
      if (typeof e == "string") return u(e);
      switch (e) {
        case ne:
          return u("Suspense");
        case oe:
          return u("SuspenseList");
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
    function R() {
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
    function S(e, a) {
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
        var w = a.children;
        if (w !== void 0)
          if (C)
            if (m(w)) {
              for (C = 0; C < w.length; C++)
                $(w[C], e);
              Object.freeze && Object.freeze(w);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else $(w, e);
      } else
        w = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? C = "null" : m(e) ? C = "array" : e !== void 0 && e.$$typeof === I ? (C = "<" + (t(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          C,
          w
        );
      if (r.call(a, "key")) {
        w = t(e);
        var Z = Object.keys(a).filter(function(F) {
          return F !== "key";
        });
        C = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", $e[w + C] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          w,
          Z,
          w
        ), $e[w + C] = !0);
      }
      if (w = null, i !== void 0 && (y(i), w = "" + i), b(a) && (y(a.key), w = "" + a.key), "key" in a) {
        i = {};
        for (var pe in a)
          pe !== "key" && (i[pe] = a[pe]);
      } else i = a;
      return w && S(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(e, w, Y, z, R(), i);
    }
    function $(e, a) {
      if (typeof e == "object" && e && e.$$typeof !== Qe) {
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
        e && e._owner != null && e._owner !== R() && (i = null, typeof e._owner.tag == "number" ? i = t(e._owner.type) : typeof e._owner.name == "string" && (i = e._owner.name), i = " It was passed a child from " + i + ".");
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
      var a = "", i = R();
      return i && (i = t(i.type)) && (a = `

Check the render method of \`` + i + "`."), a || (e = t(e)) && (a = `

Check the top-level render call using <` + e + ">."), a;
    }
    var L = er, I = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), le = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), X = Symbol.iterator, fe = Symbol.for("react.client.reference"), J = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, r = Object.prototype.hasOwnProperty, o = Object.assign, E = Symbol.for("react.client.reference"), m = Array.isArray, p = 0, T, h, g, _, O, j, U;
    f.__reactDisabledLog = !0;
    var n, V, ee = !1, de = new (typeof WeakMap == "function" ? WeakMap : Map)(), Qe = Symbol.for("react.client.reference"), Ae, Ne = {}, $e = {}, Me = {};
    me.Fragment = H, me.jsx = function(e, a, i, C, z) {
      return q(e, a, i, !1, C, z);
    }, me.jsxs = function(e, a, i, C, z) {
      return q(e, a, i, !0, C, z);
    };
  }()), me;
}
var We;
function or() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? be.exports = tr() : be.exports = nr()), be.exports;
}
var l = or();
function sr() {
  const [t, x] = Oe([]);
  Pe(() => {
    const u = () => {
      y();
    };
    return he.instance.on("change", u), y(), () => {
      he.instance.off("change", u);
    };
  }, []);
  function y() {
    x(he.getList());
  }
  function f() {
    return v().length > 0;
  }
  function v() {
    return t.filter((u) => !u.isConnected);
  }
  function c(u) {
    u.connect().then(() => {
    }).catch((d) => {
      console.error(d);
    });
  }
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `ws-fixed ws-z-50 ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-bg-white/50 dark:ws-bg-neutral-900/50 ${f() ? "" : "ws-hidden"}`,
      children: /* @__PURE__ */ l.jsx("div", { className: "ws-relative ws-grid ws-place-items-center ws-h-screen ws-text-black dark:ws-text-white", children: /* @__PURE__ */ l.jsxs("div", { className: "ws-w-full ws-max-w-xl ws-mx-auto ws-text-center ws-p-4", children: [
        /* @__PURE__ */ l.jsx("h4", { className: "ws-text-xl sm:ws-text-3xl ws-font-semibold ws-uppercase ws-mb-6", children: "Webserial permission request" }),
        /* @__PURE__ */ l.jsx("div", { role: "alert", className: "ws-rounded-md ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-b-4 ws-border-sky-400 dark:ws-border-sky-600 ws-p-4", children: /* @__PURE__ */ l.jsxs("div", { className: "ws-flex", children: [
          /* @__PURE__ */ l.jsx("div", { className: "ws-flex-shrink-0", children: /* @__PURE__ */ l.jsx(
            "svg",
            {
              className: "ws-size-6 ws-text-gray-700 dark:ws-text-blue-100",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              children: /* @__PURE__ */ l.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ l.jsxs("div", { className: "ws-ml-3 ws-flex-1 ws-text-left", children: [
            /* @__PURE__ */ l.jsx("p", { className: "ws-text-base ws-font-bold ws-text-gray-800 dark:ws-text-white", children: "Note" }),
            /* @__PURE__ */ l.jsx("p", { className: "ws-text-sm ws-text-gray-700 dark:ws-text-white", children: "To access the serial port, you need to grant permission to the browser." })
          ] })
        ] }) }),
        /* @__PURE__ */ l.jsx("p", { className: "ws-my-6 ws-text-base", children: "Here appear the devices missing to work with the application." }),
        /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("ul", { className: "ws-text-left ws-grid ws-grid-cols-1 ws-gap-2", children: v().map((u) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs("button", { className: "ws-btn-permission", onClick: () => c(u), children: [
          u.typeDevice,
          " #",
          u.deviceNumber
        ] }) }, u)) }) }),
        /* @__PURE__ */ l.jsx("div", { className: "ws-mt-12 ws-mb-2 ws-text-xs ws-text-right", children: "If by some reason the devices are not appearing, please refresh the page." }),
        /* @__PURE__ */ l.jsx("div", { className: "ws-text-right", children: /* @__PURE__ */ l.jsx("button", { className: "ws-btn-reload", onClick: () => {
          location.reload();
        }, children: "Refresh" }) })
      ] }) })
    }
  );
}
function ar() {
  let t = location.protocol === "https:";
  const x = Ge.supportWebSerial();
  x && !t && (t = !0);
  function y() {
    return !t || !x;
  }
  function f() {
    location.href = location.href.replace(/^http:/, "https:");
  }
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `ws-fixed ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-z-[51] ws-p-2 ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-y-8 ws-border-red-600 dark:ws-border-rose-600 ${y() ? "" : "ws-hidden"}`,
      children: /* @__PURE__ */ l.jsx("div", { className: "ws-grid ws-place-items-center ws-size-full", children: /* @__PURE__ */ l.jsx("div", { className: "ws-w-full ws-max-w-xl", children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "ws-w-full ws-bg-white dark:ws-bg-neutral-950 ws-border-b-8 ws-border-red-600 dark:ws-border-rose-600 ws-rounded-lg ws-px-4 ws-py-8 ws-text-black dark:ws-text-white",
          children: [
            /* @__PURE__ */ l.jsx("div", { className: "ws-w-full ws-inline-flex ws-justify-center ws-text-red-600", children: /* @__PURE__ */ l.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "ws-size-24 ws-shrink-0 ws-stroke-current",
                fill: "none",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx("div", { className: "ws-text-center ws-text-2xl", children: t ? /* @__PURE__ */ l.jsxs("div", { className: "", children: [
              /* @__PURE__ */ l.jsx("p", { children: "Webserial is not available in this browser." }),
              /* @__PURE__ */ l.jsx("p", { className: "ws-mt-6 ws-text-sm", children: "Please check documentation for more information." }),
              /* @__PURE__ */ l.jsx("p", { className: "ws-mb-6 ws-text-sm", children: "This application will not work." })
            ] }) : /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("p", { children: "Webserial need a secure connection (https)" }),
              /* @__PURE__ */ l.jsx("p", { className: "ws-mt-2 ws-flex ws-justify-center", children: /* @__PURE__ */ l.jsx("button", { className: "ws-btn-link", onClick: () => {
                f();
              }, children: "Update connection" }) }),
              /* @__PURE__ */ l.jsx("p", { className: "ws-mt-6 ws-text-base", children: "Otherwise this application will not work." })
            ] }) })
          ]
        }
      ) }) })
    }
  ) });
}
var ge = { exports: {} }, Ee = { exports: {} }, k = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function ir() {
  if (qe) return k;
  qe = 1;
  var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, y = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, R = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, S = t ? Symbol.for("react.suspense") : 60113, N = t ? Symbol.for("react.suspense_list") : 60120, M = t ? Symbol.for("react.memo") : 60115, q = t ? Symbol.for("react.lazy") : 60116, $ = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, te = t ? Symbol.for("react.scope") : 60119;
  function L(s) {
    if (typeof s == "object" && s !== null) {
      var H = s.$$typeof;
      switch (H) {
        case x:
          switch (s = s.type, s) {
            case P:
            case R:
            case f:
            case c:
            case v:
            case S:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case d:
                case b:
                case q:
                case M:
                case u:
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
    return L(s) === R;
  }
  return k.AsyncMode = P, k.ConcurrentMode = R, k.ContextConsumer = d, k.ContextProvider = u, k.Element = x, k.ForwardRef = b, k.Fragment = f, k.Lazy = q, k.Memo = M, k.Portal = y, k.Profiler = c, k.StrictMode = v, k.Suspense = S, k.isAsyncMode = function(s) {
    return I(s) || L(s) === P;
  }, k.isConcurrentMode = I, k.isContextConsumer = function(s) {
    return L(s) === d;
  }, k.isContextProvider = function(s) {
    return L(s) === u;
  }, k.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === x;
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
    return L(s) === S;
  }, k.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === f || s === R || s === c || s === v || s === S || s === N || typeof s == "object" && s !== null && (s.$$typeof === q || s.$$typeof === M || s.$$typeof === u || s.$$typeof === d || s.$$typeof === b || s.$$typeof === W || s.$$typeof === D || s.$$typeof === te || s.$$typeof === $);
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
var Le;
function cr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, x = t ? Symbol.for("react.element") : 60103, y = t ? Symbol.for("react.portal") : 60106, f = t ? Symbol.for("react.fragment") : 60107, v = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, R = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, S = t ? Symbol.for("react.suspense") : 60113, N = t ? Symbol.for("react.suspense_list") : 60120, M = t ? Symbol.for("react.memo") : 60115, q = t ? Symbol.for("react.lazy") : 60116, $ = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, te = t ? Symbol.for("react.scope") : 60119;
    function L(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === f || n === R || n === c || n === v || n === S || n === N || typeof n == "object" && n !== null && (n.$$typeof === q || n.$$typeof === M || n.$$typeof === u || n.$$typeof === d || n.$$typeof === b || n.$$typeof === W || n.$$typeof === D || n.$$typeof === te || n.$$typeof === $);
    }
    function I(n) {
      if (typeof n == "object" && n !== null) {
        var V = n.$$typeof;
        switch (V) {
          case x:
            var ee = n.type;
            switch (ee) {
              case P:
              case R:
              case f:
              case c:
              case v:
              case S:
                return ee;
              default:
                var de = ee && ee.$$typeof;
                switch (de) {
                  case d:
                  case b:
                  case q:
                  case M:
                  case u:
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
    var s = P, H = R, ie = d, ce = u, ue = x, le = b, Q = f, ne = q, oe = M, G = y, se = c, B = v, X = S, fe = !1;
    function J(n) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(n) || I(n) === P;
    }
    function r(n) {
      return I(n) === R;
    }
    function o(n) {
      return I(n) === d;
    }
    function E(n) {
      return I(n) === u;
    }
    function m(n) {
      return typeof n == "object" && n !== null && n.$$typeof === x;
    }
    function p(n) {
      return I(n) === b;
    }
    function T(n) {
      return I(n) === f;
    }
    function h(n) {
      return I(n) === q;
    }
    function g(n) {
      return I(n) === M;
    }
    function _(n) {
      return I(n) === y;
    }
    function O(n) {
      return I(n) === c;
    }
    function j(n) {
      return I(n) === v;
    }
    function U(n) {
      return I(n) === S;
    }
    A.AsyncMode = s, A.ConcurrentMode = H, A.ContextConsumer = ie, A.ContextProvider = ce, A.Element = ue, A.ForwardRef = le, A.Fragment = Q, A.Lazy = ne, A.Memo = oe, A.Portal = G, A.Profiler = se, A.StrictMode = B, A.Suspense = X, A.isAsyncMode = J, A.isConcurrentMode = r, A.isContextConsumer = o, A.isContextProvider = E, A.isElement = m, A.isForwardRef = p, A.isFragment = T, A.isLazy = h, A.isMemo = g, A.isPortal = _, A.isProfiler = O, A.isStrictMode = j, A.isSuspense = U, A.isValidElementType = L, A.typeOf = I;
  }()), A;
}
var Ue;
function Xe() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? Ee.exports = ir() : Ee.exports = cr()), Ee.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, ze;
function ur() {
  if (ze) return xe;
  ze = 1;
  var t = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
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
      for (var u = {}, d = 0; d < 10; d++)
        u["_" + String.fromCharCode(d)] = d;
      var P = Object.getOwnPropertyNames(u).map(function(b) {
        return u[b];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        R[b] = b;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = v() ? Object.assign : function(c, u) {
    for (var d, P = f(c), R, b = 1; b < arguments.length; b++) {
      d = Object(arguments[b]);
      for (var S in d)
        x.call(d, S) && (P[S] = d[S]);
      if (t) {
        R = t(d);
        for (var N = 0; N < R.length; N++)
          y.call(d, R[N]) && (P[R[N]] = d[R[N]]);
      }
    }
    return P;
  }, xe;
}
var Te, De;
function ke() {
  if (De) return Te;
  De = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Te = t, Te;
}
var _e, Fe;
function Ze() {
  return Fe || (Fe = 1, _e = Function.call.bind(Object.prototype.hasOwnProperty)), _e;
}
var je, Ve;
function lr() {
  if (Ve) return je;
  Ve = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = /* @__PURE__ */ ke(), y = {}, f = /* @__PURE__ */ Ze();
    t = function(c) {
      var u = "Warning: " + c;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function v(c, u, d, P, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in c)
        if (f(c, b)) {
          var S;
          try {
            if (typeof c[b] != "function") {
              var N = Error(
                (P || "React class") + ": " + d + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw N.name = "Invariant Violation", N;
            }
            S = c[b](u, b, P, d, null, x);
          } catch (q) {
            S = q;
          }
          if (S && !(S instanceof Error) && t(
            (P || "React class") + ": type specification of " + d + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof S + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), S instanceof Error && !(S.message in y)) {
            y[S.message] = !0;
            var M = R ? R() : "";
            t(
              "Failed " + d + " type: " + S.message + (M ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, je = v, je;
}
var Re, Be;
function fr() {
  if (Be) return Re;
  Be = 1;
  var t = Xe(), x = ur(), y = /* @__PURE__ */ ke(), f = /* @__PURE__ */ Ze(), v = /* @__PURE__ */ lr(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(d) {
    var P = "Warning: " + d;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return Re = function(d, P) {
    var R = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function S(r) {
      var o = r && (R && r[R] || r[b]);
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
      function m(T, h, g, _, O, j, U) {
        if (_ = _ || N, j = j || g, U !== y) {
          if (P) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = _ + ":" + g;
            !o[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[V] = !0, E++);
          }
        }
        return h[g] == null ? T ? h[g] === null ? new $("The " + O + " `" + j + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new $("The " + O + " `" + j + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : r(h, g, _, O, j);
      }
      var p = m.bind(null, !1);
      return p.isRequired = m.bind(null, !0), p;
    }
    function D(r) {
      function o(E, m, p, T, h, g) {
        var _ = E[m], O = B(_);
        if (O !== r) {
          var j = X(_);
          return new $(
            "Invalid " + T + " `" + h + "` of type " + ("`" + j + "` supplied to `" + p + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return W(o);
    }
    function te() {
      return W(u);
    }
    function L(r) {
      function o(E, m, p, T, h) {
        if (typeof r != "function")
          return new $("Property `" + h + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var g = E[m];
        if (!Array.isArray(g)) {
          var _ = B(g);
          return new $("Invalid " + T + " `" + h + "` of type " + ("`" + _ + "` supplied to `" + p + "`, expected an array."));
        }
        for (var O = 0; O < g.length; O++) {
          var j = r(g, O, p, T, h + "[" + O + "]", y);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return W(o);
    }
    function I() {
      function r(o, E, m, p, T) {
        var h = o[E];
        if (!d(h)) {
          var g = B(h);
          return new $("Invalid " + p + " `" + T + "` of type " + ("`" + g + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(r);
    }
    function s() {
      function r(o, E, m, p, T) {
        var h = o[E];
        if (!t.isValidElementType(h)) {
          var g = B(h);
          return new $("Invalid " + p + " `" + T + "` of type " + ("`" + g + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(r);
    }
    function H(r) {
      function o(E, m, p, T, h) {
        if (!(E[m] instanceof r)) {
          var g = r.name || N, _ = J(E[m]);
          return new $("Invalid " + T + " `" + h + "` of type " + ("`" + _ + "` supplied to `" + p + "`, expected ") + ("instance of `" + g + "`."));
        }
        return null;
      }
      return W(o);
    }
    function ie(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), u;
      function o(E, m, p, T, h) {
        for (var g = E[m], _ = 0; _ < r.length; _++)
          if (q(g, r[_]))
            return null;
        var O = JSON.stringify(r, function(U, n) {
          var V = X(n);
          return V === "symbol" ? String(n) : n;
        });
        return new $("Invalid " + T + " `" + h + "` of value `" + String(g) + "` " + ("supplied to `" + p + "`, expected one of " + O + "."));
      }
      return W(o);
    }
    function ce(r) {
      function o(E, m, p, T, h) {
        if (typeof r != "function")
          return new $("Property `" + h + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var g = E[m], _ = B(g);
        if (_ !== "object")
          return new $("Invalid " + T + " `" + h + "` of type " + ("`" + _ + "` supplied to `" + p + "`, expected an object."));
        for (var O in g)
          if (f(g, O)) {
            var j = r(g, O, p, T, h + "." + O, y);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return W(o);
    }
    function ue(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var o = 0; o < r.length; o++) {
        var E = r[o];
        if (typeof E != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(E) + " at index " + o + "."
          ), u;
      }
      function m(p, T, h, g, _) {
        for (var O = [], j = 0; j < r.length; j++) {
          var U = r[j], n = U(p, T, h, g, _, y);
          if (n == null)
            return null;
          n.data && f(n.data, "expectedType") && O.push(n.data.expectedType);
        }
        var V = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new $("Invalid " + g + " `" + _ + "` supplied to " + ("`" + h + "`" + V + "."));
      }
      return W(m);
    }
    function le() {
      function r(o, E, m, p, T) {
        return G(o[E]) ? null : new $("Invalid " + p + " `" + T + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return W(r);
    }
    function Q(r, o, E, m, p) {
      return new $(
        (r || "React class") + ": " + o + " type `" + E + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function ne(r) {
      function o(E, m, p, T, h) {
        var g = E[m], _ = B(g);
        if (_ !== "object")
          return new $("Invalid " + T + " `" + h + "` of type `" + _ + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var O in r) {
          var j = r[O];
          if (typeof j != "function")
            return Q(p, T, h, O, X(j));
          var U = j(g, O, p, T, h + "." + O, y);
          if (U)
            return U;
        }
        return null;
      }
      return W(o);
    }
    function oe(r) {
      function o(E, m, p, T, h) {
        var g = E[m], _ = B(g);
        if (_ !== "object")
          return new $("Invalid " + T + " `" + h + "` of type `" + _ + "` " + ("supplied to `" + p + "`, expected `object`."));
        var O = x({}, E[m], r);
        for (var j in O) {
          var U = r[j];
          if (f(r, j) && typeof U != "function")
            return Q(p, T, h, j, X(U));
          if (!U)
            return new $(
              "Invalid " + T + " `" + h + "` key `" + j + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(E[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var n = U(g, j, p, T, h + "." + j, y);
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
          var o = S(r);
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
  }, Re;
}
var Se, He;
function dr() {
  if (He) return Se;
  He = 1;
  var t = /* @__PURE__ */ ke();
  function x() {
  }
  function y() {
  }
  return y.resetWarningCache = x, Se = function() {
    function f(u, d, P, R, b, S) {
      if (S !== t) {
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
      resetWarningCache: x
    };
    return c.PropTypes = c, c;
  }, Se;
}
var Je;
function pr() {
  if (Je) return ge.exports;
  if (Je = 1, process.env.NODE_ENV !== "production") {
    var t = Xe(), x = !0;
    ge.exports = /* @__PURE__ */ fr()(t.isElement, x);
  } else
    ge.exports = /* @__PURE__ */ dr()();
  return ge.exports;
}
var vr = /* @__PURE__ */ pr();
const Ce = /* @__PURE__ */ rr(vr);
function yr() {
  const [t, x] = Oe([]), [y, f] = Oe([]);
  let v = 0;
  Pe(() => {
    he.instance.on("change", () => {
      c();
    }), c();
  }, []);
  function c() {
    const u = he.getList(), d = ["serial:connected", "serial:disconnected", "serial:connecting"];
    for (const P of u) {
      const R = P.availableListeners.filter((b) => !b.listening && d.includes(b.type));
      if (R.length > 0)
        for (const b of R)
          P.on(b.type, () => {
            let S = "ws-alert-info", N = "Device connecting";
            b.type === "serial:connected" ? (S = "ws-alert-success", N = "Device connected") : b.type === "serial:disconnected" && (S = "ws-alert-error", N = "Device disconnected");
            const M = [...y];
            M.push({ message: N, type: S }), f([...M]), v && clearTimeout(v), v = setTimeout(() => {
              const q = [...y];
              q.shift(), f([...q]);
            }, 5e3);
          });
    }
    x(u);
  }
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx("div", { className: "ws-fixed ws-z-[60] ws-bottom-4 ws-right-4 ws-grid ws-gap-2", children: y.map((u, d) => /* @__PURE__ */ l.jsx(Ke, { message: u.message, type: u.type }, `alert-ws-${d}`)) }) });
}
Ke.propTypes = {
  message: Ce.string,
  type: Ce.string
};
function Ke({ message: t, type: x }) {
  return /* @__PURE__ */ l.jsxs("div", { role: "alert", className: `ws-alert ${x}`, children: [
    /* @__PURE__ */ l.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        className: "ws-h-6 ws-w-6 ws-shrink-0 ws-stroke-current",
        children: /* @__PURE__ */ l.jsx(
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
    /* @__PURE__ */ l.jsx("span", { children: t })
  ] });
}
mr.propTypes = {
  theme: Ce.oneOf(["system", "dark", "light"])
};
function mr({ theme: t = "system" } = { theme: "system" }) {
  Pe(() => {
    t === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark") : t === "dark" ? document.documentElement.classList.add("dark") : t === "light" && document.documentElement.classList.remove("dark");
  }, [t]);
  let x = location.protocol === "https:";
  const y = Ge.supportWebSerial();
  y && !x && (x = !0);
  function f() {
    return !x || !y;
  }
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(sr, {}),
    f() ? /* @__PURE__ */ l.jsx(ar, {}) : null,
    /* @__PURE__ */ l.jsx(yr, {})
  ] });
}
export {
  mr as A,
  l as j
};
