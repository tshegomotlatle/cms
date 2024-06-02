import { jsxs as A, jsx as m, Fragment as jl } from "react/jsx-runtime";
import * as x from "react";
import Mn, { useState as V, useEffect as Zt, Component as zl, createRef as Wl, PureComponent as Vl } from "react";
import { flushSync as Gl, createPortal as ql } from "react-dom";
function fs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: $l } = Object.prototype, { getPrototypeOf: ir } = Object, Xt = /* @__PURE__ */ ((t) => (e) => {
  const n = $l.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), le = (t) => (t = t.toLowerCase(), (e) => Xt(e) === t), Jt = (t) => (e) => typeof e === t, { isArray: Ye } = Array, rt = Jt("undefined");
function Ql(t) {
  return t !== null && !rt(t) && t.constructor !== null && !rt(t.constructor) && te(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const hs = le("ArrayBuffer");
function Yl(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && hs(t.buffer), e;
}
const Zl = Jt("string"), te = Jt("function"), ps = Jt("number"), Kt = (t) => t !== null && typeof t == "object", Xl = (t) => t === !0 || t === !1, wt = (t) => {
  if (Xt(t) !== "object")
    return !1;
  const e = ir(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Jl = le("Date"), Kl = le("File"), ea = le("Blob"), ta = le("FileList"), na = (t) => Kt(t) && te(t.pipe), ra = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || te(t.append) && ((e = Xt(t)) === "formdata" || // detect form-data instance
  e === "object" && te(t.toString) && t.toString() === "[object FormData]"));
}, ia = le("URLSearchParams"), sa = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lt(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), Ye(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let l;
    for (r = 0; r < o; r++)
      l = s[r], e.call(null, t[l], l, t);
  }
}
function gs(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, vs = (t) => !rt(t) && t !== ms;
function On() {
  const { caseless: t } = vs(this) && this || {}, e = {}, n = (r, i) => {
    const s = t && gs(e, i) || i;
    wt(e[s]) && wt(r) ? e[s] = On(e[s], r) : wt(r) ? e[s] = On({}, r) : Ye(r) ? e[s] = r.slice() : e[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && lt(arguments[r], n);
  return e;
}
const oa = (t, e, n, { allOwnKeys: r } = {}) => (lt(e, (i, s) => {
  n && te(i) ? t[s] = fs(i, n) : t[s] = i;
}, { allOwnKeys: r }), t), la = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), aa = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, ca = (t, e, n, r) => {
  let i, s, o;
  const l = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!r || r(o, t, e)) && !l[o] && (e[o] = t[o], l[o] = !0);
    t = n !== !1 && ir(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, da = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, ua = (t) => {
  if (!t)
    return null;
  if (Ye(t))
    return t;
  let e = t.length;
  if (!ps(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, fa = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && ir(Uint8Array)), ha = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, pa = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, ga = le("HTMLFormElement"), ma = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Vr = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), va = le("RegExp"), bs = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  lt(n, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (r[s] = o || i);
  }), Object.defineProperties(t, r);
}, ba = (t) => {
  bs(t, (e, n) => {
    if (te(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (te(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ya = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ye(t) ? r(t) : r(String(t).split(e)), n;
}, Ea = () => {
}, Sa = (t, e) => (t = +t, Number.isFinite(t) ? t : e), hn = "abcdefghijklmnopqrstuvwxyz", Gr = "0123456789", ys = {
  DIGIT: Gr,
  ALPHA: hn,
  ALPHA_DIGIT: hn + hn.toUpperCase() + Gr
}, Aa = (t = 16, e = ys.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Ca(t) {
  return !!(t && te(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const wa = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (Kt(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[i] = r;
        const s = Ye(r) ? [] : {};
        return lt(r, (o, l) => {
          const a = n(o, i + 1);
          !rt(a) && (s[l] = a);
        }), e[i] = void 0, s;
      }
    }
    return r;
  };
  return n(t, 0);
}, Da = le("AsyncFunction"), Ra = (t) => t && (Kt(t) || te(t)) && te(t.then) && te(t.catch), S = {
  isArray: Ye,
  isArrayBuffer: hs,
  isBuffer: Ql,
  isFormData: ra,
  isArrayBufferView: Yl,
  isString: Zl,
  isNumber: ps,
  isBoolean: Xl,
  isObject: Kt,
  isPlainObject: wt,
  isUndefined: rt,
  isDate: Jl,
  isFile: Kl,
  isBlob: ea,
  isRegExp: va,
  isFunction: te,
  isStream: na,
  isURLSearchParams: ia,
  isTypedArray: fa,
  isFileList: ta,
  forEach: lt,
  merge: On,
  extend: oa,
  trim: sa,
  stripBOM: la,
  inherits: aa,
  toFlatObject: ca,
  kindOf: Xt,
  kindOfTest: le,
  endsWith: da,
  toArray: ua,
  forEachEntry: ha,
  matchAll: pa,
  isHTMLForm: ga,
  hasOwnProperty: Vr,
  hasOwnProp: Vr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bs,
  freezeMethods: ba,
  toObjectSet: ya,
  toCamelCase: ma,
  noop: Ea,
  toFiniteNumber: Sa,
  findKey: gs,
  global: ms,
  isContextDefined: vs,
  ALPHABET: ys,
  generateString: Aa,
  isSpecCompliantForm: Ca,
  toJSONObject: wa,
  isAsyncFn: Da,
  isThenable: Ra
};
function O(t, e, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
S.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Es = O.prototype, Ss = {};
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Ss[t] = { value: t };
});
Object.defineProperties(O, Ss);
Object.defineProperty(Es, "isAxiosError", { value: !0 });
O.from = (t, e, n, r, i, s) => {
  const o = Object.create(Es);
  return S.toFlatObject(t, o, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), O.call(o, t.message, e, n, r, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o;
};
const _a = null;
function Pn(t) {
  return S.isPlainObject(t) || S.isArray(t);
}
function As(t) {
  return S.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function qr(t, e, n) {
  return t ? t.concat(e).map(function(i, s) {
    return i = As(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function Ta(t) {
  return S.isArray(t) && !t.some(Pn);
}
const Na = S.toFlatObject(S, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function en(t, e, n) {
  if (!S.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !S.isUndefined(b[g]);
  });
  const r = n.metaTokens, i = n.visitor || c, s = n.dots, o = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(e);
  if (!S.isFunction(i))
    throw new TypeError("visitor must be a function");
  function d(v) {
    if (v === null)
      return "";
    if (S.isDate(v))
      return v.toISOString();
    if (!a && S.isBlob(v))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(v) || S.isTypedArray(v) ? a && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, g, b) {
    let E = v;
    if (v && !b && typeof v == "object") {
      if (S.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), v = JSON.stringify(v);
      else if (S.isArray(v) && Ta(v) || (S.isFileList(v) || S.endsWith(g, "[]")) && (E = S.toArray(v)))
        return g = As(g), E.forEach(function(w, T) {
          !(S.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? qr([g], T, s) : o === null ? g : g + "[]",
            d(w)
          );
        }), !1;
    }
    return Pn(v) ? !0 : (e.append(qr(b, g, s), d(v)), !1);
  }
  const u = [], h = Object.assign(Na, {
    defaultVisitor: c,
    convertValue: d,
    isVisitable: Pn
  });
  function f(v, g) {
    if (!S.isUndefined(v)) {
      if (u.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      u.push(v), S.forEach(v, function(E, C) {
        (!(S.isUndefined(E) || E === null) && i.call(
          e,
          E,
          S.isString(C) ? C.trim() : C,
          g,
          h
        )) === !0 && f(E, g ? g.concat(C) : [C]);
      }), u.pop();
    }
  }
  if (!S.isObject(t))
    throw new TypeError("data must be an object");
  return f(t), e;
}
function $r(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function sr(t, e) {
  this._pairs = [], t && en(t, this, e);
}
const Cs = sr.prototype;
Cs.append = function(e, n) {
  this._pairs.push([e, n]);
};
Cs.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, $r);
  } : $r;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function xa(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ws(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || xa, i = n && n.serialize;
  let s;
  if (i ? s = i(e, n) : s = S.isURLSearchParams(e) ? e.toString() : new sr(e, n).toString(r), s) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Qr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    S.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Ds = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ia = typeof URLSearchParams < "u" ? URLSearchParams : sr, ka = typeof FormData < "u" ? FormData : null, Ma = typeof Blob < "u" ? Blob : null, Oa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ia,
    FormData: ka,
    Blob: Ma
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Rs = typeof window < "u" && typeof document < "u", Pa = ((t) => Rs && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Ba = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Rs,
  hasStandardBrowserEnv: Pa,
  hasStandardBrowserWebWorkerEnv: Ba
}, Symbol.toStringTag, { value: "Module" })), se = {
  ...Ha,
  ...Oa
};
function La(t, e) {
  return en(t, new se.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return se.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Ua(t) {
  return S.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Fa(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function _s(t) {
  function e(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__")
      return !0;
    const l = Number.isFinite(+o), a = s >= n.length;
    return o = !o && S.isArray(i) ? i.length : o, a ? (S.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !l) : ((!i[o] || !S.isObject(i[o])) && (i[o] = []), e(n, r, i[o], s) && S.isArray(i[o]) && (i[o] = Fa(i[o])), !l);
  }
  if (S.isFormData(t) && S.isFunction(t.entries)) {
    const n = {};
    return S.forEachEntry(t, (r, i) => {
      e(Ua(r), i, n, 0);
    }), n;
  }
  return null;
}
function ja(t, e, n) {
  if (S.isString(t))
    try {
      return (e || JSON.parse)(t), S.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const or = {
  transitional: Ds,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = S.isObject(e);
    if (s && S.isHTMLForm(e) && (e = new FormData(e)), S.isFormData(e))
      return i ? JSON.stringify(_s(e)) : e;
    if (S.isArrayBuffer(e) || S.isBuffer(e) || S.isStream(e) || S.isFile(e) || S.isBlob(e))
      return e;
    if (S.isArrayBufferView(e))
      return e.buffer;
    if (S.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return La(e, this.formSerializer).toString();
      if ((l = S.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return en(
          l ? { "files[]": e } : e,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), ja(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || or.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (e && S.isString(e) && (r && !this.responseType || i)) {
      const o = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? O.from(l, O.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: se.classes.FormData,
    Blob: se.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  or.headers[t] = {};
});
const lr = or, za = S.toObjectSet([
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
  "user-agent"
]), Wa = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || e[n] && za[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Yr = Symbol("internals");
function Xe(t) {
  return t && String(t).trim().toLowerCase();
}
function Dt(t) {
  return t === !1 || t == null ? t : S.isArray(t) ? t.map(Dt) : String(t);
}
function Va(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Ga = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function pn(t, e, n, r, i) {
  if (S.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!S.isString(e)) {
    if (S.isString(r))
      return e.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(e);
  }
}
function qa(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function $a(t, e) {
  const n = S.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0
    });
  });
}
class tn {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(l, a, d) {
      const c = Xe(a);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const u = S.findKey(i, c);
      (!u || i[u] === void 0 || d === !0 || d === void 0 && i[u] !== !1) && (i[u || a] = Dt(l));
    }
    const o = (l, a) => S.forEach(l, (d, c) => s(d, c, a));
    return S.isPlainObject(e) || e instanceof this.constructor ? o(e, n) : S.isString(e) && (e = e.trim()) && !Ga(e) ? o(Wa(e), n) : e != null && s(n, e, r), this;
  }
  get(e, n) {
    if (e = Xe(e), e) {
      const r = S.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return Va(i);
        if (S.isFunction(n))
          return n.call(this, i, r);
        if (S.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Xe(e), e) {
      const r = S.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || pn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (o = Xe(o), o) {
        const l = S.findKey(r, o);
        l && (!n || pn(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return S.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || pn(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return S.forEach(this, (i, s) => {
      const o = S.findKey(r, s);
      if (o) {
        n[o] = Dt(i), delete n[s];
        return;
      }
      const l = e ? qa(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Dt(i), r[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && S.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[Yr] = this[Yr] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const l = Xe(o);
      r[l] || ($a(i, o), r[l] = !0);
    }
    return S.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
tn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(tn.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(tn);
const de = tn;
function gn(t, e) {
  const n = this || lr, r = e || n, i = de.from(r.headers);
  let s = r.data;
  return S.forEach(t, function(l) {
    s = l.call(n, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function Ts(t) {
  return !!(t && t.__CANCEL__);
}
function at(t, e, n) {
  O.call(this, t ?? "canceled", O.ERR_CANCELED, e, n), this.name = "CanceledError";
}
S.inherits(at, O, {
  __CANCEL__: !0
});
function Qa(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new O(
    "Request failed with status code " + n.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ya = se.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, s) {
      const o = [t + "=" + encodeURIComponent(e)];
      S.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), S.isString(r) && o.push("path=" + r), S.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Za(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Xa(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ns(t, e) {
  return t && !Za(e) ? Xa(t, e) : e;
}
const Ja = se.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(s) {
      let o = s;
      return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(o) {
      const l = S.isString(o) ? i(o) : o;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Ka(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ec(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(a) {
    const d = Date.now(), c = r[s];
    o || (o = d), n[i] = a, r[i] = d;
    let u = s, h = 0;
    for (; u !== i; )
      h += n[u++], u = u % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), d - o < e)
      return;
    const f = c && d - c;
    return f ? Math.round(h * 1e3 / f) : void 0;
  };
}
function Zr(t, e) {
  let n = 0;
  const r = ec(50, 250);
  return (i) => {
    const s = i.loaded, o = i.lengthComputable ? i.total : void 0, l = s - n, a = r(l), d = s <= o;
    n = s;
    const c = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && o && d ? (o - s) / a : void 0,
      event: i
    };
    c[e ? "download" : "upload"] = !0, t(c);
  };
}
const tc = typeof XMLHttpRequest < "u", nc = tc && function(t) {
  return new Promise(function(n, r) {
    let i = t.data;
    const s = de.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: l } = t, a;
    function d() {
      t.cancelToken && t.cancelToken.unsubscribe(a), t.signal && t.signal.removeEventListener("abort", a);
    }
    let c;
    if (S.isFormData(i)) {
      if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((c = s.getContentType()) !== !1) {
        const [g, ...b] = c ? c.split(";").map((E) => E.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...b].join("; "));
      }
    }
    let u = new XMLHttpRequest();
    if (t.auth) {
      const g = t.auth.username || "", b = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + b));
    }
    const h = Ns(t.baseURL, t.url);
    u.open(t.method.toUpperCase(), ws(h, t.params, t.paramsSerializer), !0), u.timeout = t.timeout;
    function f() {
      if (!u)
        return;
      const g = de.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), E = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: t,
        request: u
      };
      Qa(function(w) {
        n(w), d();
      }, function(w) {
        r(w), d();
      }, E), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new O("Request aborted", O.ECONNABORTED, t, u)), u = null);
    }, u.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, t, u)), u = null;
    }, u.ontimeout = function() {
      let b = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const E = t.transitional || Ds;
      t.timeoutErrorMessage && (b = t.timeoutErrorMessage), r(new O(
        b,
        E.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        t,
        u
      )), u = null;
    }, se.hasStandardBrowserEnv && (l && S.isFunction(l) && (l = l(t)), l || l !== !1 && Ja(h))) {
      const g = t.xsrfHeaderName && t.xsrfCookieName && Ya.read(t.xsrfCookieName);
      g && s.set(t.xsrfHeaderName, g);
    }
    i === void 0 && s.setContentType(null), "setRequestHeader" in u && S.forEach(s.toJSON(), function(b, E) {
      u.setRequestHeader(E, b);
    }), S.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), o && o !== "json" && (u.responseType = t.responseType), typeof t.onDownloadProgress == "function" && u.addEventListener("progress", Zr(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Zr(t.onUploadProgress)), (t.cancelToken || t.signal) && (a = (g) => {
      u && (r(!g || g.type ? new at(null, t, u) : g), u.abort(), u = null);
    }, t.cancelToken && t.cancelToken.subscribe(a), t.signal && (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
    const v = Ka(h);
    if (v && se.protocols.indexOf(v) === -1) {
      r(new O("Unsupported protocol " + v + ":", O.ERR_BAD_REQUEST, t));
      return;
    }
    u.send(i || null);
  });
}, Bn = {
  http: _a,
  xhr: nc
};
S.forEach(Bn, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Xr = (t) => `- ${t}`, rc = (t) => S.isFunction(t) || t === null || t === !1, xs = {
  getAdapter: (t) => {
    t = S.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const i = {};
    for (let s = 0; s < e; s++) {
      n = t[s];
      let o;
      if (r = n, !rc(n) && (r = Bn[(o = String(n)).toLowerCase()], r === void 0))
        throw new O(`Unknown adapter '${o}'`);
      if (r)
        break;
      i[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? s.length > 1 ? `since :
` + s.map(Xr).join(`
`) : " " + Xr(s[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Bn
};
function mn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new at(null, t);
}
function Jr(t) {
  return mn(t), t.headers = de.from(t.headers), t.data = gn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), xs.getAdapter(t.adapter || lr.adapter)(t).then(function(r) {
    return mn(t), r.data = gn.call(
      t,
      t.transformResponse,
      r
    ), r.headers = de.from(r.headers), r;
  }, function(r) {
    return Ts(r) || (mn(t), r && r.response && (r.response.data = gn.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = de.from(r.response.headers))), Promise.reject(r);
  });
}
const Kr = (t) => t instanceof de ? { ...t } : t;
function Ve(t, e) {
  e = e || {};
  const n = {};
  function r(d, c, u) {
    return S.isPlainObject(d) && S.isPlainObject(c) ? S.merge.call({ caseless: u }, d, c) : S.isPlainObject(c) ? S.merge({}, c) : S.isArray(c) ? c.slice() : c;
  }
  function i(d, c, u) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(d))
        return r(void 0, d, u);
    } else
      return r(d, c, u);
  }
  function s(d, c) {
    if (!S.isUndefined(c))
      return r(void 0, c);
  }
  function o(d, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, c);
  }
  function l(d, c, u) {
    if (u in e)
      return r(d, c);
    if (u in t)
      return r(void 0, d);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (d, c) => i(Kr(d), Kr(c), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, t, e)), function(c) {
    const u = a[c] || i, h = u(t[c], e[c], c);
    S.isUndefined(h) && u !== l || (n[c] = h);
  }), n;
}
const Is = "1.6.8", ar = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ar[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ei = {};
ar.transitional = function(e, n, r) {
  function i(s, o) {
    return "[Axios v" + Is + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, l) => {
    if (e === !1)
      throw new O(
        i(o, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED
      );
    return n && !ei[o] && (ei[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, o, l) : !0;
  };
};
function ic(t, e, n) {
  if (typeof t != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], o = e[s];
    if (o) {
      const l = t[s], a = l === void 0 || o(l, s, t);
      if (a !== !0)
        throw new O("option " + s + " must be " + a, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const Hn = {
  assertOptions: ic,
  validators: ar
}, me = Hn.validators;
class kt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Qr(),
      response: new Qr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ve(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && Hn.assertOptions(r, {
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), i != null && (S.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Hn.assertOptions(i, {
      encode: me.function,
      serialize: me.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && S.merge(
      s.common,
      s[n.method]
    );
    s && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete s[v];
      }
    ), n.headers = de.concat(o, s);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (a = a && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(g) {
      d.push(g.fulfilled, g.rejected);
    });
    let c, u = 0, h;
    if (!a) {
      const v = [Jr.bind(this), void 0];
      for (v.unshift.apply(v, l), v.push.apply(v, d), h = v.length, c = Promise.resolve(n); u < h; )
        c = c.then(v[u++], v[u++]);
      return c;
    }
    h = l.length;
    let f = n;
    for (u = 0; u < h; ) {
      const v = l[u++], g = l[u++];
      try {
        f = v(f);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      c = Jr.call(this, f);
    } catch (v) {
      return Promise.reject(v);
    }
    for (u = 0, h = d.length; u < h; )
      c = c.then(d[u++], d[u++]);
    return c;
  }
  getUri(e) {
    e = Ve(this.defaults, e);
    const n = Ns(e.baseURL, e.url);
    return ws(n, e.params, e.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(e) {
  kt.prototype[e] = function(n, r) {
    return this.request(Ve(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(s, o, l) {
      return this.request(Ve(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  kt.prototype[e] = n(), kt.prototype[e + "Form"] = n(!0);
});
const Rt = kt;
class cr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, e(function(s, o, l) {
      r.reason || (r.reason = new at(s, o, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new cr(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const sc = cr;
function oc(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function lc(t) {
  return S.isObject(t) && t.isAxiosError === !0;
}
const Ln = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(Ln).forEach(([t, e]) => {
  Ln[e] = t;
});
const ac = Ln;
function ks(t) {
  const e = new Rt(t), n = fs(Rt.prototype.request, e);
  return S.extend(n, Rt.prototype, e, { allOwnKeys: !0 }), S.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return ks(Ve(t, i));
  }, n;
}
const k = ks(lr);
k.Axios = Rt;
k.CanceledError = at;
k.CancelToken = sc;
k.isCancel = Ts;
k.VERSION = Is;
k.toFormData = en;
k.AxiosError = O;
k.Cancel = k.CanceledError;
k.all = function(e) {
  return Promise.all(e);
};
k.spread = oc;
k.isAxiosError = lc;
k.mergeConfig = Ve;
k.AxiosHeaders = de;
k.formToJSON = (t) => _s(S.isHTMLForm(t) ? new FormData(t) : t);
k.getAdapter = xs.getAdapter;
k.HttpStatusCode = ac;
k.default = k;
class Ms {
}
const cc = "_table_1vova_11", dc = "_date_1vova_15", uc = "_particulars_1vova_19", fc = "_amount_1vova_23", hc = "_container_1vova_27", pc = "_invoice_1vova_1", gc = "_courtCasesHeader_1vova_40", mc = "_sort_1vova_46", vc = "_addCase_1vova_56", bc = "_filter_1vova_61", yc = "_search_1vova_66", Ec = "_sortButton_1vova_1", Sc = "_filterButton_1vova_1", Ac = "_addButton_1vova_1", Cc = "_addInvoiceButton_1vova_122", wc = "_signatureLine_1vova_150", Dc = "_contactNumbers_1vova_163", Rc = "_personalInformation_1vova_168", _c = "_divider_1vova_175", Tc = "_recipentContainer_1vova_180", N = {
  "invoice-container": "_invoice-container_1vova_1",
  table: cc,
  date: dc,
  particulars: uc,
  amount: fc,
  container: hc,
  "invoice-menu": "_invoice-menu_1vova_32",
  invoice: pc,
  courtCasesHeader: gc,
  sort: mc,
  addCase: vc,
  filter: bc,
  search: yc,
  sortButton: Ec,
  filterButton: Sc,
  addButton: Ac,
  "invoice-menus": "_invoice-menus_1vova_112",
  addInvoiceButton: Cc,
  "add-invoice-container": "_add-invoice-container_1vova_131",
  "add-invoice-button-container": "_add-invoice-button-container_1vova_135",
  "container-footer": "_container-footer_1vova_141",
  signatureLine: wc,
  "container-header": "_container-header_1vova_155",
  contactNumbers: Dc,
  personalInformation: Rc,
  divider: _c,
  recipentContainer: Tc
};
class Nc {
}
class Ke extends Error {
}
Ke.prototype.name = "InvalidTokenError";
function xc(t) {
  return decodeURIComponent(atob(t).replace(/(.)/g, (e, n) => {
    let r = n.charCodeAt(0).toString(16).toUpperCase();
    return r.length < 2 && (r = "0" + r), "%" + r;
  }));
}
function Ic(t) {
  let e = t.replace(/-/g, "+").replace(/_/g, "/");
  switch (e.length % 4) {
    case 0:
      break;
    case 2:
      e += "==";
      break;
    case 3:
      e += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return xc(e);
  } catch {
    return atob(e);
  }
}
function nn(t, e) {
  if (typeof t != "string")
    throw new Ke("Invalid token specified: must be a string");
  e || (e = {});
  const n = e.header === !0 ? 0 : 1, r = t.split(".")[n];
  if (typeof r != "string")
    throw new Ke(`Invalid token specified: missing part #${n + 1}`);
  let i;
  try {
    i = Ic(r);
  } catch (s) {
    throw new Ke(`Invalid token specified: invalid base64 for part #${n + 1} (${s.message})`);
  }
  try {
    return JSON.parse(i);
  } catch (s) {
    throw new Ke(`Invalid token specified: invalid json for part #${n + 1} (${s.message})`);
  }
}
function kc() {
  const [t, e] = V([]), [n, r] = V(new Ms()), [i, s] = V(new Nc()), [o, l] = V([]), [a, d] = V(!1);
  let c = 0;
  Zt(() => {
    k.post("/court-cases/getAllCases", {
      accessToken: sessionStorage.getItem("access_token") || ""
    }).then((_) => {
      e(_.data);
    });
  }, []);
  const u = (_) => {
    s({
      ...i,
      date: new Date(_.target.value)
    });
  }, h = (_) => {
    s({
      ...i,
      caseNumber: _.target.value
    });
  }, f = (_) => {
    s({
      ...i,
      name: _.target.value
    });
  }, v = (_) => {
    s({
      ...i,
      hours: parseFloat(_.target.value)
    });
  }, g = (_) => {
    s({
      ...i,
      costPerHour: parseFloat(_.target.value)
    });
  }, b = () => {
    d(!a);
  }, E = (_) => {
    console.log(_ == null ? void 0 : _.target.value);
  }, C = () => /* @__PURE__ */ A("div", { className: N["container-footer"], children: [
    /* @__PURE__ */ A("div", { className: N.signature, children: [
      /* @__PURE__ */ m("div", { children: "Yours Faithfully" }),
      /* @__PURE__ */ A("div", { className: "mt-5", children: [
        /* @__PURE__ */ m("div", { className: N.signatureLine }),
        /* @__PURE__ */ A("div", { className: N.information, children: [
          "Adv T.P Motlatle ",
          /* @__PURE__ */ m("br", {}),
          "Date: ",
          (/* @__PURE__ */ new Date()).toLocaleDateString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A("div", { className: N.bankingDetails, children: [
      "Banking Details ",
      /* @__PURE__ */ m("br", {}),
      "Account Name: Adv TP Motlatle ",
      /* @__PURE__ */ m("br", {}),
      "Bank: FNB ",
      /* @__PURE__ */ m("br", {}),
      "Branch Code: 260 147 ",
      /* @__PURE__ */ m("br", {}),
      "Account No: 62655759185"
    ] })
  ] }), w = async (_) => {
    console.log(_);
    const Q = {
      accessToken: sessionStorage.getItem("access_token") || "",
      caseNumber: _
    };
    await k.post("/invoices/getInvoiceByCaseNumber", Q).then(async (He) => {
      console.log(He), l(He.data), await T(_);
    }).catch((He) => {
      console.log(He);
    });
  }, T = async (_) => {
    await k.post("/court-cases/getCaseByCaseNumber", {
      caseNumber: _,
      accessToken: sessionStorage.getItem("access_token") || ""
    }).then((Q) => {
      console.log(Q), r(Q.data);
    });
  }, F = () => /* @__PURE__ */ m("div", { children: t == null ? void 0 : t.map((_) => /* @__PURE__ */ A(
    "div",
    {
      className: N["invoice-menus"],
      onClick: () => {
        w(_.caseNumber);
      },
      children: [
        _.caseNumber,
        " - ",
        _.plaintiff,
        " vs",
        " ",
        _.defendant
      ]
    }
  )) }), P = () => /* @__PURE__ */ A("div", { className: N["add-invoice-container"], children: [
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "lawyer", children: "Date" }),
      /* @__PURE__ */ m(
        "input",
        {
          id: "startDate",
          className: "form-control mt-2",
          type: "date",
          onChange: u
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "caseNumber", children: "Case Number" }),
      /* @__PURE__ */ A(
        "select",
        {
          className: "form-control mt-2",
          onChange: h,
          children: [
            /* @__PURE__ */ m("option", { defaultChecked: !0, children: "---Select a Case Number---" }),
            t == null ? void 0 : t.map((_, Q) => /* @__PURE__ */ A("option", { value: _.caseNumber, children: [
              _.caseNumber,
              " - ",
              _.plaintiff,
              " vs",
              " ",
              _.defendant
            ] }, Q))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "defendant", children: "Description" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "description",
          placeholder: "Enter description",
          onChange: f
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "defendant", children: "Hours worked" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "hours",
          placeholder: "Enter hours worked",
          onChange: v
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "defendant", children: "Fee Per Hour" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "fee",
          placeholder: "Enter fee",
          onChange: g
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: N["add-invoice-button-container"], children: [
      /* @__PURE__ */ m("button", { className: "btn btn-outline-dark", onClick: I, children: "Add Invoice Item" }),
      /* @__PURE__ */ m("button", { className: "btn btn-outline-dark", onClick: b, children: "Cancel" })
    ] })
  ] }), H = () => a ? P() : F(), I = async () => {
    const _ = nn(
      sessionStorage.getItem("access_token") || ""
    );
    i.userId = _.userId, await k.post("/invoices/add", i).then((Q) => {
      console.log(Q);
    });
  }, ee = (_) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
    currencyDisplay: "narrowSymbol"
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(_), De = (_, Q, He, Fl) => /* @__PURE__ */ A("div", { className: N["container-header"], children: [
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ m("h1", { children: "ADV. T.P Motlatle" }),
      /* @__PURE__ */ m("h6", { children: "Date of admission as an Attorney: 19th May 1993" }),
      /* @__PURE__ */ m("h6", { children: "Date of admission as an Advocate: 25th February 2016" })
    ] }),
    /* @__PURE__ */ A("div", { className: N.personalInformation, children: [
      /* @__PURE__ */ A("div", { className: N.address, children: [
        "25 Spirngbok Street ",
        /* @__PURE__ */ m("br", {}),
        "Groblersdal ",
        /* @__PURE__ */ m("br", {}),
        "0470"
      ] }),
      /* @__PURE__ */ m("div", { className: N.email, children: "tumelom@lantic.net" }),
      /* @__PURE__ */ A("div", { className: N.contactNumbers, children: [
        /* @__PURE__ */ A("div", { children: [
          /* @__PURE__ */ m("b", { children: "Tel: " }),
          " 015 291 2116 ",
          /* @__PURE__ */ m("br", {})
        ] }),
        /* @__PURE__ */ A("div", { children: [
          /* @__PURE__ */ m("b", { children: "Fax: " }),
          " 086 616 9792 ",
          /* @__PURE__ */ m("br", {})
        ] }),
        /* @__PURE__ */ A("div", { children: [
          /* @__PURE__ */ m("b", { children: "Mobile: " }),
          " 082 803 4402"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m("div", { children: "Invoice No: 003/2022" }),
    /* @__PURE__ */ m("div", { className: N.divider }),
    /* @__PURE__ */ A("div", { className: N.recipentContainer, children: [
      /* @__PURE__ */ A("div", { className: N.recipient, children: [
        "TO: ",
        Q
      ] }),
      /* @__PURE__ */ A("div", { className: N.reference, children: [
        "REF:",
        He
      ] })
    ] }),
    /* @__PURE__ */ m("div", { className: N.divider }),
    /* @__PURE__ */ m("div", { className: N.recipentContainer, children: /* @__PURE__ */ A("h3", { children: [
      "RE: ",
      _,
      " / ",
      Fl
    ] }) }),
    /* @__PURE__ */ m("div", { className: N.divider })
  ] });
  return /* @__PURE__ */ A("div", { className: N.container, children: [
    /* @__PURE__ */ A("div", { className: N["invoice-menu"], children: [
      /* @__PURE__ */ A("div", { className: N.courtCasesHeader, children: [
        /* @__PURE__ */ m("div", { className: N.search, children: /* @__PURE__ */ m(
          "input",
          {
            type: "text",
            className: N.searchInput,
            name: "searchInput",
            onChange: E,
            placeholder: "Search cases"
          }
        ) }),
        /* @__PURE__ */ m("div", { className: N.addCase, children: /* @__PURE__ */ m(
          "div",
          {
            className: N.addInvoiceButton,
            onClick: b,
            children: /* @__PURE__ */ m(
              "span",
              {
                className: "material-symbols-outlined",
                id: N.addButton,
                children: "add"
              }
            )
          }
        ) }),
        /* @__PURE__ */ m("div", { className: N.filter, children: /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            id: N.filterButton,
            children: "filter_alt"
          }
        ) }),
        /* @__PURE__ */ m("div", { className: N.sort, children: /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            id: N.sortButton,
            children: "sort"
          }
        ) })
      ] }),
      H()
    ] }),
    /* @__PURE__ */ m("div", { className: N.invoice, children: /* @__PURE__ */ A("div", { className: N["invoice-container"], children: [
      De(
        n == null ? void 0 : n.defendant,
        n == null ? void 0 : n.plaintiff,
        n.caseNumber,
        n.type
      ),
      /* @__PURE__ */ m("div", { className: N.table, children: /* @__PURE__ */ A("table", { className: "table", children: [
        /* @__PURE__ */ m("thead", { children: /* @__PURE__ */ A("tr", { children: [
          /* @__PURE__ */ m("th", { scope: "col", children: "#" }),
          /* @__PURE__ */ m("th", { scope: "col", className: N.date, children: "Date" }),
          /* @__PURE__ */ m("th", { scope: "col", className: N.particulars, children: "Particulars" }),
          /* @__PURE__ */ m("th", { scope: "col", className: N.amount, children: "Fee/Amount" })
        ] }) }),
        /* @__PURE__ */ A("tbody", { children: [
          o.map((_, Q) => (c += _.hours * _.costPerHour, /* @__PURE__ */ A("tr", { children: [
            /* @__PURE__ */ m("th", { scope: "row", children: Q + 1 }),
            /* @__PURE__ */ m("td", { children: _.date.toString().split("T")[0] }),
            /* @__PURE__ */ A("td", { children: [
              _.name,
              " ",
              /* @__PURE__ */ m("br", {}),
              _.hours,
              " hours @",
              " ",
              ee(_.costPerHour),
              " p/h"
            ] }),
            /* @__PURE__ */ m("td", { children: ee(_.hours * _.costPerHour) })
          ] }))),
          /* @__PURE__ */ A("tr", { children: [
            /* @__PURE__ */ m("td", { colSpan: 3, children: "Total" }),
            /* @__PURE__ */ m("td", { children: ee(c) })
          ] })
        ] })
      ] }) }),
      C()
    ] }) })
  ] });
}
const Mc = {};
function Oc(t) {
  const [e, n] = V(null), [r, i] = V(""), [s, o] = V(""), [l, a] = V([]);
  Zt(() => {
    const f = nn(
      sessionStorage.getItem("access_token") || ""
    );
    k.post("api/court-cases/getAllCases", {
      userId: f.userId
    }).then((v) => {
      a(v.data);
    });
  }, []);
  const d = (f) => {
    i(f == null ? void 0 : f.target.value);
  }, c = (f) => {
    o(f.target.value);
  }, u = (f) => {
    n(f == null ? void 0 : f.target.files[0]);
  }, h = async () => {
    if (e != null && r !== "") {
      const f = e.name.split(".")[e.name.split(".").length - 1], v = `${r}.${f}`, g = new FormData();
      g.append("file", e, v), g.append("caseNumber", s), k.post("api/documents/UploadDocuments", g).then(
        (b) => {
          console.log(b);
        }
      );
    }
  };
  return /* @__PURE__ */ A("div", { children: [
    /* @__PURE__ */ m("div", { className: "mb-2", children: /* @__PURE__ */ m("select", { onChange: c, children: l.map((f, v) => /* @__PURE__ */ A("option", { value: f.caseNumber, children: [
      f.caseNumber,
      " - ",
      f.defendant,
      " vs",
      " ",
      f.plaintiff
    ] }, v)) }) }),
    /* @__PURE__ */ m("div", { className: Mc.container, children: /* @__PURE__ */ m(
      "input",
      {
        type: "file",
        name: "fileUpload",
        accept: "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*",
        id: "fileUpload",
        onChange: u
      }
    ) }),
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ A("section", { children: [
        "File details:",
        /* @__PURE__ */ m(
          "input",
          {
            type: "text",
            id: "fileName",
            onChange: d,
            name: "files[]",
            multiple: !0
          }
        )
      ] }),
      /* @__PURE__ */ m("div", { children: e == null ? void 0 : e.name })
    ] }),
    /* @__PURE__ */ m("button", { type: "submit", onClick: h, children: "Upload" })
  ] });
}
var rn, D, Os, Ps, Ge, Te, ti, Bs, Hs, Mt = {}, Ls = [], Pc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function be(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Us(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function p(t, e, n) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? rn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return _t(t, o, r, i, null);
}
function _t(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Os };
  return i == null && D.vnode != null && D.vnode(s), s;
}
function Y() {
  return { current: null };
}
function U(t) {
  return t.children;
}
function Bc(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || Ot(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || Ot(t, s, e[s], n[s], r);
}
function ni(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Pc.test(e) ? n : n + "px";
}
function Ot(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || ni(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || ni(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? ii : ri, s) : t.removeEventListener(e, s ? ii : ri, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function ri(t) {
  Ge = !0;
  try {
    return this.l[t.type + !1](D.event ? D.event(t) : t);
  } finally {
    Ge = !1;
  }
}
function ii(t) {
  Ge = !0;
  try {
    return this.l[t.type + !0](D.event ? D.event(t) : t);
  } finally {
    Ge = !1;
  }
}
function X(t, e) {
  this.props = t, this.context = e;
}
function it(t, e) {
  if (e == null)
    return t.__ ? it(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? it(t) : null;
}
function Fs(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Fs(t);
  }
}
function Hc(t) {
  Ge ? setTimeout(t) : Bs(t);
}
function Un(t) {
  (!t.__d && (t.__d = !0) && Te.push(t) && !Pt.__r++ || ti !== D.debounceRendering) && ((ti = D.debounceRendering) || Hc)(Pt);
}
function Pt() {
  var t, e, n, r, i, s, o, l;
  for (Te.sort(function(a, d) {
    return a.__v.__b - d.__v.__b;
  }); t = Te.shift(); )
    t.__d && (e = Te.length, r = void 0, i = void 0, o = (s = (n = t).__v).__e, (l = n.__P) && (r = [], (i = be({}, s)).__v = s.__v + 1, dr(l, s, i, n.__n, l.ownerSVGElement !== void 0, s.__h != null ? [o] : null, r, o ?? it(s), s.__h), Gs(r, s), s.__e != o && Fs(s)), Te.length > e && Te.sort(function(a, d) {
      return a.__v.__b - d.__v.__b;
    }));
  Pt.__r = 0;
}
function js(t, e, n, r, i, s, o, l, a, d) {
  var c, u, h, f, v, g, b, E = r && r.__k || Ls, C = E.length;
  for (n.__k = [], c = 0; c < e.length; c++)
    if ((f = n.__k[c] = (f = e[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? _t(null, f, null, null, f) : Array.isArray(f) ? _t(U, { children: f }, null, null, null) : f.__b > 0 ? _t(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (h = E[c]) === null || h && f.key == h.key && f.type === h.type)
        E[c] = void 0;
      else
        for (u = 0; u < C; u++) {
          if ((h = E[u]) && f.key == h.key && f.type === h.type) {
            E[u] = void 0;
            break;
          }
          h = null;
        }
      dr(t, f, h = h || Mt, i, s, o, l, a, d), v = f.__e, (u = f.ref) && h.ref != u && (b || (b = []), h.ref && b.push(h.ref, null, f), b.push(u, f.__c || v, f)), v != null ? (g == null && (g = v), typeof f.type == "function" && f.__k === h.__k ? f.__d = a = zs(f, a, t) : a = Ws(t, f, h, E, v, a), typeof n.type == "function" && (n.__d = a)) : a && h.__e == a && a.parentNode != t && (a = it(h));
    }
  for (n.__e = g, c = C; c--; )
    E[c] != null && (typeof n.type == "function" && E[c].__e != null && E[c].__e == n.__d && (n.__d = Vs(r).nextSibling), $s(E[c], E[c]));
  if (b)
    for (c = 0; c < b.length; c++)
      qs(b[c], b[++c], b[++c]);
}
function zs(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? zs(r, e, n) : Ws(n, r, r, i, r.__e, e));
  return e;
}
function Bt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Bt(n, e);
  }) : e.push(t)), e;
}
function Ws(t, e, n, r, i, s) {
  var o, l, a;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (n == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (l = s, a = 0; (l = l.nextSibling) && a < r.length; a += 1)
          if (l == i)
            break e;
        t.insertBefore(i, s), o = s;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function Vs(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = Vs(n)))
        return r;
  }
  return null;
}
function dr(t, e, n, r, i, s, o, l, a) {
  var d, c, u, h, f, v, g, b, E, C, w, T, F, P, H, I = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, l = e.__e = n.__e, e.__h = null, s = [l]), (d = D.__b) && d(e);
  try {
    e:
      if (typeof I == "function") {
        if (b = e.props, E = (d = I.contextType) && r[d.__c], C = d ? E ? E.props.value : d.__ : r, n.__c ? g = (c = e.__c = n.__c).__ = c.__E : ("prototype" in I && I.prototype.render ? e.__c = c = new I(b, C) : (e.__c = c = new X(b, C), c.constructor = I, c.render = Uc), E && E.sub(c), c.props = b, c.state || (c.state = {}), c.context = C, c.__n = r, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), I.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = be({}, c.__s)), be(c.__s, I.getDerivedStateFromProps(b, c.__s))), h = c.props, f = c.state, c.__v = e, u)
          I.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (I.getDerivedStateFromProps == null && b !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, C), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, C) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (c.props = b, c.state = c.__s, c.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(ee) {
              ee && (ee.__ = e);
            }), w = 0; w < c._sb.length; w++)
              c.__h.push(c._sb[w]);
            c._sb = [], c.__h.length && o.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, C), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(h, f, v);
          });
        }
        if (c.context = C, c.props = b, c.__P = t, T = D.__r, F = 0, "prototype" in I && I.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(e), d = c.render(c.props, c.state, c.context), P = 0; P < c._sb.length; P++)
            c.__h.push(c._sb[P]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(e), d = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++F < 25);
        c.state = c.__s, c.getChildContext != null && (r = be(be({}, r), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (v = c.getSnapshotBeforeUpdate(h, f)), H = d != null && d.type === U && d.key == null ? d.props.children : d, js(t, Array.isArray(H) ? H : [H], e, n, r, i, s, o, l, a), c.base = e.__e, e.__h = null, c.__h.length && o.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Lc(n.__e, e, n, r, i, s, o, a);
    (d = D.diffed) && d(e);
  } catch (ee) {
    e.__v = null, (a || s != null) && (e.__e = l, e.__h = !!a, s[s.indexOf(l)] = null), D.__e(ee, e, n);
  }
}
function Gs(t, e) {
  D.__c && D.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      D.__e(r, n.__v);
    }
  });
}
function Lc(t, e, n, r, i, s, o, l) {
  var a, d, c, u = n.props, h = e.props, f = e.type, v = 0;
  if (f === "svg" && (i = !0), s != null) {
    for (; v < s.length; v++)
      if ((a = s[v]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        t = a, s[v] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(h);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), s = null, l = !1;
  }
  if (f === null)
    u === h || l && t.data === h || (t.data = h);
  else {
    if (s = s && rn.call(t.childNodes), d = (u = n.props || Mt).dangerouslySetInnerHTML, c = h.dangerouslySetInnerHTML, !l) {
      if (s != null)
        for (u = {}, v = 0; v < t.attributes.length; v++)
          u[t.attributes[v].name] = t.attributes[v].value;
      (c || d) && (c && (d && c.__html == d.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (Bc(t, h, u, i, l), c)
      e.__k = [];
    else if (v = e.props.children, js(t, Array.isArray(v) ? v : [v], e, n, r, i && f !== "foreignObject", s, o, s ? s[0] : n.__k && it(n, 0), l), s != null)
      for (v = s.length; v--; )
        s[v] != null && Us(s[v]);
    l || ("value" in h && (v = h.value) !== void 0 && (v !== t.value || f === "progress" && !v || f === "option" && v !== u.value) && Ot(t, "value", v, u.value, !1), "checked" in h && (v = h.checked) !== void 0 && v !== t.checked && Ot(t, "checked", v, u.checked, !1));
  }
  return t;
}
function qs(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    D.__e(r, n);
  }
}
function $s(t, e, n) {
  var r, i;
  if (D.unmount && D.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || qs(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        D.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && $s(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || Us(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Uc(t, e, n) {
  return this.constructor(t, n);
}
function st(t, e, n) {
  var r, i, s;
  D.__ && D.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], dr(e, t = (!r && n || e).__k = p(U, null, [t]), i || Mt, Mt, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? rn.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r), Gs(s, t);
}
function Fc(t, e) {
  var n = { __c: e = "__cC" + Hs++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(l) {
        l.__e = !0, Un(l);
      });
    }, this.sub = function(o) {
      i.push(o);
      var l = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), l && l.call(o);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
rn = Ls.slice, D = { __e: function(t, e, n, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Os = 0, Ps = function(t) {
  return t != null && t.constructor === void 0;
}, Ge = !1, X.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = be({}, this.state), typeof t == "function" && (t = t(be({}, n), this.props)), t && be(n, t), t != null && this.__v && (e && this._sb.push(e), Un(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Un(this));
}, X.prototype.render = U, Te = [], Bs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Pt.__r = 0, Hs = 0;
var ie, vn, si, Qs = [], bn = [], oi = D.__b, li = D.__r, ai = D.diffed, ci = D.__c, di = D.unmount;
function jc() {
  for (var t; t = Qs.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Tt), t.__H.__h.forEach(Fn), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], D.__e(e, t.__v);
      }
}
D.__b = function(t) {
  ie = null, oi && oi(t);
}, D.__r = function(t) {
  li && li(t);
  var e = (ie = t.__c).__H;
  e && (vn === ie ? (e.__h = [], ie.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = bn, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Tt), e.__h.forEach(Fn), e.__h = [])), vn = ie;
}, D.diffed = function(t) {
  ai && ai(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Qs.push(e) !== 1 && si === D.requestAnimationFrame || ((si = D.requestAnimationFrame) || zc)(jc)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== bn && (n.__ = n.__V), n.i = void 0, n.__V = bn;
  })), vn = ie = null;
}, D.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Tt), n.__h = n.__h.filter(function(r) {
        return !r.__ || Fn(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], D.__e(r, n.__v);
    }
  }), ci && ci(t, e);
}, D.unmount = function(t) {
  di && di(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Tt(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && D.__e(e, n.__v));
};
var ui = typeof requestAnimationFrame == "function";
function zc(t) {
  var e, n = function() {
    clearTimeout(r), ui && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  ui && (e = requestAnimationFrame(n));
}
function Tt(t) {
  var e = ie, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), ie = e;
}
function Fn(t) {
  var e = ie;
  t.__c = t.__(), ie = e;
}
function Wc(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fi(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function hi(t) {
  this.props = t;
}
(hi.prototype = new X()).isPureReactComponent = !0, hi.prototype.shouldComponentUpdate = function(t, e) {
  return fi(this.props, t) || fi(this.state, e);
};
var pi = D.__b;
D.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), pi && pi(t);
};
var Vc = D.__e;
D.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  Vc(t, e, n, r);
};
var gi = D.unmount;
function Ys(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Wc({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Ys(r, e, n);
  })), t;
}
function Zs(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Zs(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function yn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Xs(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function gt() {
  this.u = null, this.o = null;
}
D.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), gi && gi(t);
}, (yn.prototype = new X()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Xs(r.__v), s = !1, o = function() {
    s || (s = !0, n.__R = null, i ? i(l) : l());
  };
  n.__R = o;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var d = r.state.__a;
        r.__v.__k[0] = Zs(d, d.__c.__P, d.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, a = e.__h === !0;
  r.__u++ || a || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(o, o);
}, yn.prototype.componentWillUnmount = function() {
  this.t = [];
}, yn.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Ys(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && p(U, null, t.fallback);
  return i && (i.__h = null), [p(U, null, e.__a ? null : t.children), i];
};
var mi = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function Gc(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function qc(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    st(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), st(p(Gc, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function $c(t, e) {
  var n = p(qc, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(gt.prototype = new X()).__a = function(t) {
  var e = this, n = Xs(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), mi(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, gt.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Bt(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, gt.prototype.componentDidUpdate = gt.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    mi(t, n, e);
  });
};
var Qc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Yc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Zc = typeof document < "u", Xc = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
X.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(X.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var vi = D.event;
function Jc() {
}
function Kc() {
  return this.cancelBubble;
}
function ed() {
  return this.defaultPrevented;
}
D.event = function(t) {
  return vi && (t = vi(t)), t.persist = Jc, t.isPropagationStopped = Kc, t.isDefaultPrevented = ed, t.nativeEvent = t;
};
var bi = { configurable: !0, get: function() {
  return this.class;
} }, yi = D.vnode;
D.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var o = n[s];
      Zc && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && o == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !Xc(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && Yc.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Bt(n.children).forEach(function(l) {
      l.props.selected = r.value.indexOf(l.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = Bt(n.children).forEach(function(l) {
      l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
    })), t.props = r, n.class != n.className && (bi.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", bi));
  }
  t.$$typeof = Qc, yi && yi(t);
};
var Ei = D.__r;
D.__r = function(t) {
  Ei && Ei(t), t.__c;
};
const Js = [], jn = /* @__PURE__ */ new Map();
function ur(t) {
  Js.push(t), jn.forEach((e) => {
    eo(e, t);
  });
}
function td(t) {
  t.isConnected && // sometimes true if SSR system simulates DOM
  t.getRootNode && Ks(t.getRootNode());
}
function Ks(t) {
  let e = jn.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = rd();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, i);
    }
    jn.set(t, e), nd(e);
  }
}
function nd(t) {
  for (const e of Js)
    eo(t, e);
}
function eo(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && n.insertRule(i + "}", r + s);
  });
}
let En;
function rd() {
  return En === void 0 && (En = id()), En;
}
function id() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Ks(document);
var sd = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
ur(sd);
class fr {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      // NOT OPTIMAL! TODO: look at debounce
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: r } = this;
    e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
function hr(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function q(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (od(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function od(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function ld(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let o = 0; o < s.length; o += 1)
      r.push(s[o]);
  }
  return r;
}
const ad = /(top|left|right|bottom|width|height)$/i;
function et(t, e) {
  for (let n in e)
    to(t, n, e[n]);
}
function to(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && ad.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function no(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let Si = 0;
function sn() {
  return Si += 1, "fc-dom-" + Si;
}
function on(t) {
  t.preventDefault();
}
function cd(t, e) {
  return (n) => {
    let r = q(n.target, t);
    r && e.call(r, n, r);
  };
}
function ro(t, e, n, r) {
  let i = cd(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function dd(t, e, n, r) {
  let i;
  return ro(t, "mouseover", e, (s, o) => {
    if (o !== i) {
      i = o, n(s, o);
      let l = (a) => {
        i = null, r(a, o), o.removeEventListener("mouseleave", l);
      };
      o.addEventListener("mouseleave", l);
    }
  });
}
const Ai = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function ud(t, e) {
  let n = (r) => {
    e(r), Ai.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  Ai.forEach((r) => {
    t.addEventListener(r, n);
  });
}
function io(t) {
  return Object.assign({ onClick: t }, so(t));
}
function so(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let Ci = 0;
function Oe() {
  return Ci += 1, String(Ci);
}
function pr() {
  document.body.classList.add("fc-not-allowed");
}
function gr() {
  document.body.classList.remove("fc-not-allowed");
}
function fd(t) {
  t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", on);
}
function hd(t) {
  t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", on);
}
function pd(t) {
  t.addEventListener("contextmenu", on);
}
function gd(t) {
  t.removeEventListener("contextmenu", on);
}
function md(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function vd(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = bd(t, e, n[r]), i)
      return i;
  return 0;
}
function bd(t, e, n) {
  return n.func ? n.func(t, e) : yd(t[n.field], e[n.field]) * (n.order || 1);
}
function yd(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function Fe(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function tt(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function Ed(t, e) {
  return t - e;
}
function Nt(t) {
  return t % 1 === 0;
}
function Sd(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const wi = ["years", "months", "days", "milliseconds"], Ad = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function M(t, e) {
  return typeof t == "string" ? Cd(t) : typeof t == "object" && t ? Di(t) : typeof t == "number" ? Di({ [e || "milliseconds"]: t }) : null;
}
function Cd(t) {
  let e = Ad.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function Di(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function wd(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function zn(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function Dd(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function Rd(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function _d(t) {
  return je(t) / 365;
}
function Td(t) {
  return je(t) / 30;
}
function je(t) {
  return ne(t) / 864e5;
}
function ne(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function mr(t, e) {
  let n = null;
  for (let r = 0; r < wi.length; r += 1) {
    let i = wi[r];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!Nt(s) || n !== null && n !== s)
        return null;
      n = s;
    } else if (t[i])
      return null;
  }
  return n;
}
function Wn(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function Ae(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, i;
  if (r !== e.length)
    return !1;
  for (i = 0; i < r; i += 1)
    if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const Nd = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Ri(t, e) {
  let n = ye(t);
  return n[2] += e * 7, Z(n);
}
function $(t, e) {
  let n = ye(t);
  return n[2] += e, Z(n);
}
function Ce(t, e) {
  let n = ye(t);
  return n[6] += e, Z(n);
}
function xd(t, e) {
  return Pe(t, e) / 7;
}
function Pe(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Id(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function kd(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Md(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function Od(t, e) {
  let n = L(t), r = L(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Pe(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function Pd(t, e) {
  let n = Ht(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Ht(t, e) {
  return Ee(t) === Ee(e) ? Math.round(Pe(t, e)) : null;
}
function L(t) {
  return Z([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Bd(t) {
  return Z([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function Hd(t) {
  return Z([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function Ld(t) {
  return Z([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function Ud(t, e, n) {
  let r = t.getUTCFullYear(), i = Sn(t, r, e, n);
  if (i < 1)
    return Sn(t, r - 1, e, n);
  let s = Sn(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function Sn(t, e, n, r) {
  let i = Z([e, 0, 1 + Fd(e, n, r)]), s = L(t), o = Math.round(Pe(i, s));
  return Math.floor(o / 7) + 1;
}
function Fd(t, e, n) {
  let r = 7 + e - n;
  return -((7 + Z([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function _i(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function Ti(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function ye(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function Z(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function oo(t) {
  return !isNaN(t.valueOf());
}
function Ee(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function lo(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", br(e, !0)))), r;
}
function vr(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function jd(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function zd(t) {
  return Fe(t.getUTCHours(), 2) + ":" + Fe(t.getUTCMinutes(), 2) + ":" + Fe(t.getUTCSeconds(), 2);
}
function br(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + Fe(i, 2)}:${Fe(s, 2)}` : `GMT${n}${i}${s ? `:${Fe(s, 2)}` : ""}`;
}
function R(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!Ae(r, s)) {
      n && n(i);
      let o = t.apply(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
function xt(t, e, n) {
  let r, i;
  return (s) => {
    if (!r)
      i = t.call(this, s);
    else if (!oe(r, s)) {
      n && n(i);
      let o = t.call(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
const Ni = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, Lt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, mt = /\s*([ap])\.?m\.?/i, Wd = /,/g, Vd = /\s+/g, Gd = /\u200e/g, qd = /UTC|GMT/;
class $d {
  constructor(e) {
    let n = {}, r = {}, i = 0;
    for (let s in e)
      s in Ni ? (r[s] = e[s], i = Math.max(Ni[s], i)) : (n[s] = e[s], s in Lt && (i = Math.max(Lt[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = i, this.buildFormattingFunc = R(xi);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: o } = this, l = Kd(e.marker, n.marker, r.calendarSystem);
    if (!l)
      return this.format(e, r);
    let a = l;
    a > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (a = 1);
    let d = this.format(e, r), c = this.format(n, r);
    if (d === c)
      return d;
    let u = eu(s, a), h = xi(u, o, r), f = h(e), v = h(n), g = tu(d, f, c, v), b = o.separator || i || r.defaultSeparator || "";
    return g ? g.before + f + b + v + g.after : d + b + c;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function xi(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => br(i.timeZoneOffset) : r === 0 && e.week ? (i) => Jd(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Qd(t, e, n);
}
function Qd(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), Yd(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: o } = s, l;
    i && !o.getUTCMinutes() ? l = i : l = r;
    let a = l.format(o);
    return Zd(a, s, t, e, n);
  };
}
function Yd(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Zd(t, e, n, r, i) {
  return t = t.replace(Gd, ""), n.timeZoneName === "short" && (t = Xd(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    br(e.timeZoneOffset)
  ))), r.omitCommas && (t = t.replace(Wd, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(mt, "").trim() : r.meridiem === "narrow" ? t = t.replace(mt, (s, o) => o.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(mt, (s, o) => `${o.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(mt, (s) => s.toLocaleLowerCase())), t = t.replace(Vd, " "), t = t.trim(), t;
}
function Xd(t, e) {
  let n = !1;
  return t = t.replace(qd, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function Jd(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function Kd(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : Ee(t) !== Ee(e) ? 1 : 0;
}
function eu(t, e) {
  let n = {};
  for (let r in t)
    (!(r in Lt) || // not a date part prop (like timeZone)
    Lt[r] <= e) && (n[r] = t[r]);
  return n;
}
function tu(t, e, n, r) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let o = t.substr(0, s);
    i = s + e.length;
    let l = t.substr(i), a = 0;
    for (; a < n.length; ) {
      let d = n.indexOf(r, a);
      if (d === -1)
        break;
      let c = n.substr(0, d);
      a = d + r.length;
      let u = n.substr(a);
      if (o === c && l === u)
        return {
          before: o,
          after: l
        };
    }
  }
  return null;
}
function Ii(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Ut(t, e, n, r) {
  let i = Ii(t, n.calendarSystem), s = e ? Ii(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class nu {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, Ut(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, Ut(e, n, r, i));
  }
}
class ru {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(Ut(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func(Ut(e, n, r, i));
  }
}
function z(t) {
  return typeof t == "object" && t ? new $d(t) : typeof t == "string" ? new nu(t) : typeof t == "function" ? new ru(t) : null;
}
const ki = {
  navLinkDayClick: y,
  navLinkWeekClick: y,
  duration: M,
  bootstrapFontAwesome: y,
  buttonIcons: y,
  customButtons: y,
  defaultAllDayEventDuration: M,
  defaultTimedEventDuration: M,
  nextDayThreshold: M,
  scrollTime: M,
  scrollTimeReset: Boolean,
  slotMinTime: M,
  slotMaxTime: M,
  dayPopoverFormat: z,
  slotDuration: M,
  snapDuration: M,
  headerToolbar: y,
  footerToolbar: y,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: z,
  dayHeaderClassNames: y,
  dayHeaderContent: y,
  dayHeaderDidMount: y,
  dayHeaderWillUnmount: y,
  dayCellClassNames: y,
  dayCellContent: y,
  dayCellDidMount: y,
  dayCellWillUnmount: y,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: y,
  weekNumbers: Boolean,
  weekNumberClassNames: y,
  weekNumberContent: y,
  weekNumberDidMount: y,
  weekNumberWillUnmount: y,
  editable: Boolean,
  viewClassNames: y,
  viewDidMount: y,
  viewWillUnmount: y,
  nowIndicator: Boolean,
  nowIndicatorClassNames: y,
  nowIndicatorContent: y,
  nowIndicatorDidMount: y,
  nowIndicatorWillUnmount: y,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: y,
  locale: y,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: y,
  eventOrder: md,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: y,
  contentHeight: y,
  direction: String,
  weekNumberFormat: z,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: y,
  initialDate: y,
  now: y,
  eventDataTransform: y,
  stickyHeaderDates: y,
  stickyFooterScrollbar: y,
  viewHeight: y,
  defaultAllDay: Boolean,
  eventSourceFailure: y,
  eventSourceSuccess: y,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: y,
  eventConstraint: y,
  eventAllow: y,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: y,
  eventContent: y,
  eventDidMount: y,
  eventWillUnmount: y,
  selectConstraint: y,
  selectOverlap: y,
  selectAllow: y,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: y,
  slotLaneClassNames: y,
  slotLaneContent: y,
  slotLaneDidMount: y,
  slotLaneWillUnmount: y,
  slotLabelClassNames: y,
  slotLabelContent: y,
  slotLabelDidMount: y,
  slotLabelWillUnmount: y,
  dayMaxEvents: y,
  dayMaxEventRows: y,
  dayMinWidth: Number,
  slotLabelInterval: M,
  allDayText: String,
  allDayClassNames: y,
  allDayContent: y,
  allDayDidMount: y,
  allDayWillUnmount: y,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: z,
  rerenderDelay: Number,
  moreLinkText: y,
  moreLinkHint: y,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: y,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: M,
  hiddenDays: y,
  fixedWeekCount: Boolean,
  validRange: y,
  visibleRange: y,
  titleFormat: y,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: y,
  navLinkHint: y,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: y,
  moreLinkClassNames: y,
  moreLinkContent: y,
  moreLinkDidMount: y,
  moreLinkWillUnmount: y,
  monthStartFormat: z,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: y,
  customRenderingMetaMap: y,
  customRenderingReplaces: Boolean
}, nt = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" }
}, Mi = {
  datesSet: y,
  eventsSet: y,
  eventAdd: y,
  eventChange: y,
  eventRemove: y,
  windowResize: y,
  eventClick: y,
  eventMouseEnter: y,
  eventMouseLeave: y,
  select: y,
  unselect: y,
  loading: y,
  // internal
  _unmount: y,
  _beforeprint: y,
  _afterprint: y,
  _noEventDrop: y,
  _noEventResize: y,
  _resize: y,
  _scrollRequest: y
}, Oi = {
  buttonText: y,
  buttonHints: y,
  views: y,
  plugins: y,
  initialEvents: y,
  events: y,
  eventSources: y
}, Re = {
  headerToolbar: _e,
  footerToolbar: _e,
  buttonText: _e,
  buttonHints: _e,
  buttonIcons: _e,
  dateIncrement: _e,
  plugins: vt,
  events: vt,
  eventSources: vt,
  resources: vt
};
function _e(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? oe(t, e) : t === e;
}
function vt(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? Ae(t, e) : t === e;
}
const iu = {
  type: String,
  component: y,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: y,
  usesMinMaxTime: Boolean,
  classNames: y,
  content: y,
  didMount: y,
  willUnmount: y
};
function An(t) {
  return Er(t, Re);
}
function yr(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function y(t) {
  return t;
}
const { hasOwnProperty: Ft } = Object.prototype;
function Er(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === _e) {
        let i = [];
        for (let s = t.length - 1; s >= 0; s -= 1) {
          let o = t[s][r];
          if (typeof o == "object" && o)
            i.unshift(o);
          else if (o !== void 0) {
            n[r] = o;
            break;
          }
        }
        i.length && (n[r] = Er(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function Ie(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function fe(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function ao(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Sr(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function oe(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Ft.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Ft.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const su = /^on[A-Z]/;
function ou(t, e) {
  const n = Vn(t, e);
  for (let r of n)
    if (!su.test(r))
      return !1;
  return !0;
}
function Vn(t, e) {
  let n = [];
  for (let r in t)
    Ft.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    Ft.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Cn(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && lu(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function lu(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function au(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let o = t[s];
    o !== void 0 && i.push(o);
  }
  return i;
}
let co = {};
function cu(t, e) {
  co[t] = e;
}
function du(t) {
  return new co[t]();
}
class uu {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return Z(e);
  }
  markerToArray(e) {
    return ye(e);
  }
}
cu("gregory", uu);
const fu = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function hu(t) {
  let e = fu.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (oo(n)) {
      let r = null;
      return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: r
      };
    }
  }
  return null;
}
class pu {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = du(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Z(_i(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Z(e)), n === null || !oo(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = hu(e);
    if (n === null)
      return null;
    let { marker: r } = n, i = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset), { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i };
  }
  // Accessors
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  // Adding / Subtracting
  add(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  subtract(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  addYears(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n, this.calendarSystem.arrayToMarker(r);
  }
  addMonths(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[1] += n, this.calendarSystem.arrayToMarker(r);
  }
  // Diffing Whole Units
  diffWholeYears(e, n) {
    let { calendarSystem: r } = this;
    return Ee(e) === Ee(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return Ee(e) === Ee(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = Pd(e, n), r !== null ? { unit: "week", value: r } : (r = Ht(e, n), r !== null ? { unit: "day", value: r } : (r = Id(e, n), Nt(r) ? { unit: "hour", value: r } : (r = kd(e, n), Nt(r) ? { unit: "minute", value: r } : (r = Md(e, n), Nt(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / _d(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / Td(r) : r.days && (i = Ht(e, n), i !== null) ? i / je(r) : (n.valueOf() - e.valueOf()) / ne(r);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? L(e) : n === "hour" ? Bd(e) : n === "minute" ? Hd(e) : n === "second" ? Ld(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : Ud(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = Ce(n, -1)), r.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
    }, this, i.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(e, n = {}) {
    let r = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), lo(e, r, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? Z(_i(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Z(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Ti(ye(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(ye(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Ti(ye(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(ye(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class ct {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, r;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (r in e)
        n[r] = this.applyIconOverridePrefix(e[r]);
      this.iconClasses = n;
    } else
      e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let r;
    return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
ct.prototype.classes = {};
ct.prototype.iconClasses = {};
ct.prototype.baseIconClass = "";
ct.prototype.iconOverridePrefix = "";
function jt(t) {
  t();
  let e = D.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (D.debounceRendering = r, st(p(gu, {}), document.createElement("div")); n.length; )
    n.shift()();
  D.debounceRendering = e;
}
class gu extends X {
  render() {
    return p("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function uo(t) {
  let e = Fc(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, i = n.apply(this, arguments);
    if (r) {
      let s = [];
      this.shouldComponentUpdate = (o) => {
        this.props.value !== o.value && s.forEach((l) => {
          l.context = o.value, l.forceUpdate();
        });
      }, this.sub = (o) => {
        s.push(o);
        let l = o.componentWillUnmount;
        o.componentWillUnmount = () => {
          s.splice(s.indexOf(o), 1), l && l.call(o);
        };
      };
    }
    return i;
  }, e;
}
class mu {
  constructor(e, n, r, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = i, this.handleScrollRequest = (s) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const pe = uo({});
function vu(t, e, n, r, i, s, o, l, a, d, c, u, h) {
  return {
    dateEnv: i,
    options: n,
    pluginHooks: o,
    emitter: d,
    dispatch: l,
    getCurrentData: a,
    calendarApi: c,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: s,
    isRtl: n.direction === "rtl",
    addResizeHandler(f) {
      d.on("_resize", f);
    },
    removeResizeHandler(f) {
      d.off("_resize", f);
    },
    createScrollResponder(f) {
      return new mu(f, d, M(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: u,
    unregisterInteractiveComponent: h
  };
}
class Be extends X {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(Vn(e, this.props), Vn(n, this.state)), !Cn(this.props, e, this.propEquality) || !Cn(this.state, n, this.stateEquality);
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    Cn(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
Be.addPropsEquality = bu;
Be.addStateEquality = yu;
Be.contextType = pe;
Be.prototype.propEquality = {};
Be.prototype.stateEquality = {};
class B extends Be {
}
B.contextType = pe;
function bu(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function yu(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function he(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class Ar extends B {
  constructor() {
    super(...arguments), this.id = Oe(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      const { options: n } = this.context, { generatorName: r } = this.props;
      (!n.customRenderingReplaces || !Gn(r, n)) && this.updateElRef(e);
    }, this.updateElRef = (e) => {
      this.props.elRef && he(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: o } = e, l = fo(e, [], this.handleEl);
    let a = !1, d, c = [], u;
    if (i != null) {
      const h = typeof i == "function" ? i(o, p) : i;
      if (h === !0)
        a = !0;
      else {
        const f = h && typeof h == "object";
        f && "html" in h ? l.dangerouslySetInnerHTML = { __html: h.html } : f && "domNodes" in h ? c = Array.prototype.slice.call(h.domNodes) : (f ? Ps(h) : typeof h != "function") ? d = h : u = h;
      }
    } else
      a = !Gn(e.generatorName, r);
    return a && s && (d = s(o)), this.queuedDomNodes = c, this.currentGeneratorMeta = u, p(e.elTag, l, d);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: r, context: i } = this, { handleCustomRendering: s, customRenderingMetaMap: o } = i.options;
    if (s) {
      const l = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : o == null ? void 0 : o[r.generatorName];
      l && s(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.updateElRef,
        // front-end framework tells us about new container els
        generatorMeta: l
      }, r), { elClasses: (r.elClasses || []).filter(Eu) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!Ae(e, n)) {
      n.forEach(hr);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
Ar.addPropsEquality({
  elClasses: Ae,
  elStyle: oe,
  elAttrs: ou,
  renderProps: oe
});
function Gn(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function fo(t, e, n) {
  const r = Object.assign(Object.assign({}, t.elAttrs), { ref: n });
  return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")), t.elStyle && (r.style = t.elStyle), r;
}
function Eu(t) {
  return !!t;
}
const ho = uo(0);
class K extends X {
  constructor() {
    super(...arguments), this.InnerContent = Su.bind(void 0, this), this.handleEl = (e) => {
      this.el = e, this.props.elRef && (he(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
    };
  }
  render() {
    const { props: e } = this, n = Au(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = fo(e, n, this.handleEl), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? p(e.elTag, r, i) : i;
    } else
      return p(Ar, Object.assign(Object.assign({}, e), { elRef: this.handleEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    this.el ? (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el })) : this.didMountMisfire = !0;
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
  }
}
K.contextType = ho;
function Su(t, e) {
  const n = t.props;
  return p(Ar, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function Au(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class zt extends B {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return p(K, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...po(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function po(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
function Cu(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function Pi(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(wu), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function wu(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function ke(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function Du(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function Cr(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function ln(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function ue(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Ru(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function go(t) {
  let e = Math.floor(Pe(t.start, t.end)) || 1, n = L(t.start), r = $(n, e);
  return { start: n, end: r };
}
function mo(t, e = M(0)) {
  let n = null, r = null;
  if (t.end) {
    r = L(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= ne(e) && (r = $(r, 1));
  }
  return t.start && (n = L(t.start), r && r <= n && (r = $(n, 1))), { start: n, end: r };
}
function Ue(t, e, n, r) {
  return r === "year" ? M(n.diffWholeYears(t, e), "year") : r === "month" ? M(n.diffWholeMonths(t, e), "month") : Od(t, e);
}
function _u(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function Tu(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : dt(t.now, e);
}
function dt(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class vo {
  constructor(e) {
    this.props = e, this.nowDate = dt(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, n, r) {
    let { dateEnv: i } = this.props, s = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, -1, r);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, n, r) {
    let { dateEnv: i } = this.props, s = i.add(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, 1, r);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, n, r = !0) {
    let { props: i } = this, s, o, l, a, d, c;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = Ru(e, s)), o = this.buildCurrentRangeInfo(e, n), l = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, l), a = this.trimHiddenDays(a), d = a, i.showNonCurrentDates || (d = ke(d, o.range)), d = this.adjustActiveRange(d), d = ke(d, s), c = Cr(o.range, s), ue(a, e) || (e = a.start), {
      currentDate: e,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: s,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: o.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: o.unit,
      isRangeAllDay: l,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: d,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: a,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: i.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: i.slotMaxTime,
      isValid: c,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(o.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, i = null, s = null, o = null, l;
    return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, n, i, s)) : (l = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, n, l)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = Wn(i).unit, o = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: o };
  }
  getFallbackDuration() {
    return M({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: o, end: l } = e;
    return r && (je(i) < 0 && (o = L(o), o = n.add(o, i)), je(s) > 1 && (l = L(l), l = $(l, -1), l = n.add(l, s))), { start: o, end: l };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: o } = this.props, l, a, d;
    if (!o) {
      let { dateIncrement: u } = this.props;
      u && ne(u) < ne(r) ? o = Wn(u).unit : o = i;
    }
    je(r) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, n), l = L(l));
    function c() {
      l = s.startOf(e, o), a = s.add(l, r), d = { start: l, end: a };
    }
    return c(), this.trimHiddenDays(d) || (e = this.skipHiddenDays(e, n), c()), d;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, o = 0, l = e, a;
    s && (l = i.startOf(l, s)), l = L(l), l = this.skipHiddenDays(l, n), a = l;
    do
      a = $(a, 1), this.isHiddenDay(a) || (o += 1);
    while (o < r);
    return { start: l, end: a };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: n } = this, r = n.visibleRangeInput, i = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, s = this.refineRange(i);
    return s && (s.start == null || s.end == null) ? null : s;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(e, n, r) {
    return e;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, r;
    return n || ((r = this.props.dateAlignment) ? M(1, r) : e || M({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = Cu(e, this.props.dateEnv);
      return n && (n = mo(n)), n;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], r = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = e.indexOf(i) !== -1) || (r += 1);
    if (!r)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(e) {
    let { start: n, end: r } = e;
    return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, !0)), n == null || r == null || n < r ? { start: n, end: r } : null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(e, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      e = $(e, n);
    return e;
  }
}
function wr(t, e, n, r) {
  return {
    instanceId: Oe(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function Nu(t, e, n, r) {
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].parse(t, n);
    if (s) {
      let { allDay: o } = t;
      return o == null && (o = e, o == null && (o = s.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: s.duration,
        typeData: s.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function Me(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: o, instances: l } = t;
  l = Ie(l, (a) => !o[a.defId].recurringDef);
  for (let a in o) {
    let d = o[a];
    if (d.recurringDef) {
      let { duration: c } = d.recurringDef;
      c || (c = d.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let u = xu(d, c, e, r, i.recurringTypes);
      for (let h of u) {
        let f = wr(a, {
          start: h,
          end: r.add(h, c)
        });
        l[f.instanceId] = f;
      }
    }
  }
  return { defs: o, instances: l };
}
function xu(t, e, n, r, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (o = o.map(L)), o;
}
const It = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, bo = {
  start: y,
  end: y,
  date: y,
  allDay: Boolean
}, Iu = Object.assign(Object.assign(Object.assign({}, It), bo), { extendedProps: y });
function yo(t, e, n, r, i = Dr(n), s, o) {
  let { refined: l, extra: a } = Eo(t, n, i), d = Mu(e, n), c = Nu(l, d, n.dateEnv, n.pluginHooks.recurringTypes);
  if (c) {
    let h = qn(l, a, e ? e.sourceId : "", c.allDay, !!c.duration, n, s);
    return h.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: h, instance: null };
  }
  let u = ku(l, d, n, r);
  if (u) {
    let h = qn(l, a, e ? e.sourceId : "", u.allDay, u.hasEnd, n, s), f = wr(h.defId, u.range, u.forcedStartTzo, u.forcedEndTzo);
    return o && h.publicId && o[h.publicId] && (f.instanceId = o[h.publicId]), { def: h, instance: f };
  }
  return null;
}
function Eo(t, e, n = Dr(e)) {
  return yr(t, n);
}
function Dr(t) {
  return Object.assign(Object.assign(Object.assign({}, Wt), Iu), t.pluginHooks.eventRefiners);
}
function qn(t, e, n, r, i, s, o) {
  let l = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || Oe(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: Vt(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let a of s.pluginHooks.eventDefMemberAdders)
    Object.assign(l, a(t));
  return Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), l;
}
function ku(t, e, n, r) {
  let { allDay: i } = t, s, o = null, l = !1, a, d = null, c = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(c), s)
    o = s.marker;
  else if (!r)
    return null;
  return t.end != null && (a = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!a || a.isTimeUnspecified)), i && o && (o = L(o)), a && (d = a.marker, i && (d = L(d)), o && d <= o && (d = null)), d ? l = !0 : r || (l = n.options.forceEventDuration || !1, d = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: l,
    range: { start: o, end: d },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: a ? a.forcedTzo : null
  };
}
function Mu(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
function ot(t, e, n, r, i, s) {
  let o = J(), l = Dr(n);
  for (let a of t) {
    let d = yo(a, e, n, r, l, i, s);
    d && $n(d, o);
  }
  return o;
}
function $n(t, e = J()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function Rr(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = an(t, (s) => Ou(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return J();
}
function Ou(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function J() {
  return { defs: {}, instances: {} };
}
function _r(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function an(t, e) {
  let n = Ie(t.defs, e), r = Ie(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function Pu(t, e) {
  let { defs: n, instances: r } = t, i = {}, s = {};
  for (let o in n)
    e.defs[o] || (i[o] = n[o]);
  for (let o in r)
    !e.instances[o] && // not explicitly excluded
    i[r[o].defId] && (s[o] = r[o]);
  return {
    defs: i,
    instances: s
  };
}
function Bu(t, e) {
  return Array.isArray(t) ? ot(t, null, e, !0) : typeof t == "object" && t ? ot([t], null, e, !0) : t != null ? String(t) : null;
}
function Bi(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Wt = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: y,
  overlap: y,
  allow: y,
  className: Bi,
  classNames: Bi,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Hu = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function Vt(t, e) {
  let n = Bu(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function So(t) {
  return t.reduce(Lu, Hu);
}
function Lu(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const Uu = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: y,
  eventDataTransform: y,
  // for any network-related sources
  success: y,
  failure: y
};
function Ao(t, e, n = Co(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = yr(r, n), o = Fu(i, e);
    if (o)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: Oe(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Vt(i, e),
        extendedProps: s
      };
  }
  return null;
}
function Co(t) {
  return Object.assign(Object.assign(Object.assign({}, Wt), Uu), t.pluginHooks.eventSourceRefiners);
}
function Fu(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
function ju(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return zu(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return Wu(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return Vu(
        t,
        e.eventStore,
        // new ones
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return _r(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Me(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return Pu(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Do(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return an(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return J();
    default:
      return t;
  }
}
function zu(t, e, n, r, i, s) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let o = ot(wo(i, e, s), e, s);
    return r && (o = Me(o, r, s)), _r(Do(t, e.sourceId), o);
  }
  return t;
}
function Wu(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: o } = qu(t);
  let l = ot(wo(n, e, i), e, i, !1, s, o);
  return Me(l, r, i);
}
function wo(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = Hi(t, i)), r && (t = Hi(t, r)), t;
}
function Hi(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let r of t) {
      let i = e(r);
      i ? n.push(i) : i == null && n.push(r);
    }
  }
  return n;
}
function Vu(t, e, n, r) {
  return n && (e = Me(e, n, r)), _r(t, e);
}
function Li(t, e, n) {
  let { defs: r } = t, i = fe(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function Do(t, e) {
  return an(t, (n) => n.sourceId !== e);
}
function Gu(t, e) {
  return {
    defs: t.defs,
    instances: Ie(t.instances, (n) => !e[n.instanceId])
  };
}
function qu(t) {
  const { defs: e, instances: n } = t, r = {}, i = {};
  for (let s in e) {
    const o = e[s], { publicId: l } = o;
    l && (r[l] = s);
  }
  for (let s in n) {
    const o = n[s], l = e[o.defId], { publicId: a } = l;
    a && (i[a] = s);
  }
  return { defIdMap: r, instanceIdMap: i };
}
class cn {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    $u(this.handlers, e, n);
  }
  off(e, n) {
    Qu(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], r);
    for (let o of s)
      o.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function $u(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function Qu(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
const Yu = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Zu(t, e) {
  return ot(Xu(t), null, e);
}
function Xu(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, Yu), n)), e;
}
function Ro(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, Tr(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function Ju(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function Tr(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, hf(t, e.dateEnv)), n;
}
function Ui(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = L(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function Nr(t, e, n, r) {
  let i = Gt(t.defs, e), s = J();
  for (let o in t.defs) {
    let l = t.defs[o];
    s.defs[o] = Ku(l, i[o], n, r);
  }
  for (let o in t.instances) {
    let l = t.instances[o], a = s.defs[l.defId];
    s.instances[o] = ef(l, a, i[l.defId], n, r);
  }
  return s;
}
function Ku(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let o of r.pluginHooks.eventDefMutationAppliers)
    o(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function ef(t, e, n, r, i) {
  let { dateEnv: s } = i, o = r.standardProps && r.standardProps.allDay === !0, l = r.standardProps && r.standardProps.hasEnd === !1, a = Object.assign({}, t);
  return o && (a.range = go(a.range)), r.datesDelta && n.startEditable && (a.range = {
    start: s.add(a.range.start, r.datesDelta),
    end: s.add(a.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (a.range = {
    start: s.add(a.range.start, r.startDelta),
    end: a.range.end
  }), r.endDelta && n.durationEditable && (a.range = {
    start: a.range.start,
    end: s.add(a.range.end, r.endDelta)
  }), l && (a.range = {
    start: a.range.start,
    end: Ui(e.allDay, a.range.start, i)
  }), e.allDay && (a.range = {
    start: L(a.range.start),
    end: L(a.range.end)
  }), a.range.end < a.range.start && (a.range.end = Ui(e.allDay, a.range.start, i)), a;
}
class Le {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class j {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in bo)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = It[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in It)
      n = It[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Wt) {
      let r = Wt[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, i = r.createMarker(e);
    if (i && this._instance) {
      let s = this._instance.range, o = Ue(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = Ue(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, o = i.createMarker(e), l;
    if (o && !(n != null && (l = i.createMarker(n), !l)) && this._instance) {
      let a = this._instance.range;
      r.allDay === !0 && (a = go(a));
      let d = Ue(a.start, o, i, r.granularity);
      if (l) {
        let c = Ue(a.end, l, i, r.granularity);
        wd(d, c) ? this.mutate({ datesDelta: d, standardProps: s }) : this.mutate({ startDelta: d, endDelta: c, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: d, standardProps: s });
    }
  }
  moveStart(e) {
    let n = M(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = M(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = M(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = z(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, i, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, i, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), o = Rr(s, n.instanceId);
      o = Nr(o, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, i);
      let a = new j(i, r, n);
      this._def = o.defs[r.defId], this._instance = o.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: a,
        event: this,
        relatedEvents: Ne(o, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: s
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = _o(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new Le(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: i, endStr: s } = this, o = {
      allDay: n.allDay
    };
    return n.title && (o.title = n.title), i && (o.start = i), s && (o.end = s), n.publicId && (o.id = n.publicId), n.groupId && (o.groupId = n.groupId), n.url && (o.url = n.url), r.display && r.display !== "auto" && (o.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? o.color = r.backgroundColor : (r.backgroundColor && (o.backgroundColor = r.backgroundColor), r.borderColor && (o.borderColor = r.borderColor)), r.textColor && (o.textColor = r.textColor), r.classNames.length && (o.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(o, n.extendedProps) : o.extendedProps = n.extendedProps), o;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function _o(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function Ne(t, e, n) {
  let { defs: r, instances: i } = t, s = [], o = n ? n.instanceId : "";
  for (let l in i) {
    let a = i[l], d = r[a.defId];
    a.instanceId !== o && s.push(new j(e, d, a));
  }
  return s;
}
function Fi(t, e, n, r) {
  let i = {}, s = {}, o = {}, l = [], a = [], d = Gt(t.defs, e);
  for (let c in t.defs) {
    let u = t.defs[c];
    d[u.defId].display === "inverse-background" && (u.groupId ? (i[u.groupId] = [], o[u.groupId] || (o[u.groupId] = u)) : s[c] = []);
  }
  for (let c in t.instances) {
    let u = t.instances[c], h = t.defs[u.defId], f = d[h.defId], v = u.range, g = !h.allDay && r ? mo(v, r) : v, b = ke(g, n);
    b && (f.display === "inverse-background" ? h.groupId ? i[h.groupId].push(b) : s[u.defId].push(b) : f.display !== "none" && (f.display === "background" ? l : a).push({
      def: h,
      ui: f,
      instance: u,
      range: b,
      isStart: g.start && g.start.valueOf() === b.start.valueOf(),
      isEnd: g.end && g.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let c in i) {
    let u = i[c], h = Pi(u, n);
    for (let f of h) {
      let v = o[c], g = d[v.defId];
      l.push({
        def: v,
        ui: g,
        instance: null,
        range: f,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let c in s) {
    let u = s[c], h = Pi(u, n);
    for (let f of h)
      l.push({
        def: t.defs[c],
        ui: d[c],
        instance: null,
        range: f,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: l, fg: a };
}
function tf(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function ji(t, e) {
  t.fcSeg = e;
}
function qe(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function Gt(t, e) {
  return fe(t, (n) => To(n, e));
}
function To(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), So(n);
}
function No(t, e) {
  let n = t.map(nf);
  return n.sort((r, i) => vd(r, i, e)), n.map((r) => r._seg);
}
function nf(t) {
  let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, i = r.start ? r.start.valueOf() : 0, s = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function rf(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, o = s.startEditable;
  for (let l of r)
    o = l(o, i, s, e);
  return o;
}
function sf(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function of(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function xo(t, e, n, r, i, s, o) {
  let { dateEnv: l, options: a } = n, { displayEventTime: d, displayEventEnd: c } = a, u = t.eventRange.def, h = t.eventRange.instance;
  d == null && (d = r !== !1), c == null && (c = i !== !1);
  let f = h.range.start, v = h.range.end, g = s || t.start || t.eventRange.range.start, b = o || t.end || t.eventRange.range.end, E = L(f).valueOf() === L(g).valueOf(), C = L(Ce(v, -1)).valueOf() === L(Ce(b, -1)).valueOf();
  return d && !u.allDay && (E || C) ? (g = E ? f : g, b = C ? v : b, c && u.hasEnd ? l.formatRange(g, b, e, {
    forcedStartTzo: s ? null : h.forcedStartTzo,
    forcedEndTzo: o ? null : h.forcedEndTzo
  }) : l.format(g, e, {
    forcedTzo: s ? null : h.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Se(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end <= (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && ue(e, r.start)
  };
}
function lf(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Io(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function ko(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: o } = e, { eventInteractive: l } = o;
  return l == null && (l = n.interactive, l == null && (l = !!s.hasHandlers("eventClick"))), l ? so((a) => {
    s.trigger("eventClick", {
      el: a.target,
      event: new j(e, n, r),
      jsEvent: a,
      view: e.viewApi
    });
  }) : {};
}
const af = {
  start: y,
  end: y,
  allDay: Boolean
};
function cf(t, e, n) {
  let r = df(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function df(t, e) {
  let { refined: n, extra: r } = yr(t, af), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: o } = n;
  return o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: o }, r);
}
function uf(t, e) {
  return Du(t.range, e.range) && t.allDay === e.allDay && ff(t, e);
}
function ff(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function hf(t, e) {
  return Object.assign(Object.assign({}, Oo(t.range, e, t.allDay)), { allDay: t.allDay });
}
function Mo(t, e, n) {
  return Object.assign(Object.assign({}, Oo(t, e, n)), { timeZone: e.timeZone });
}
function Oo(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function pf(t, e, n) {
  let r = Eo({ editable: !1 }, n), i = qn(
    r.refined,
    r.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    n
  );
  return {
    def: i,
    ui: To(i, e),
    instance: wr(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function gf(t, e, n) {
  let r = !1, i = function(l) {
    r || (r = !0, e(l));
  }, s = function(l) {
    r || (r = !0, n(l));
  }, o = t(i, s);
  o && typeof o.then == "function" && o.then(i, s);
}
class zi extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function mf(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new zi("Failure parsing JSON", i);
      });
    throw new zi("Request failed", i);
  });
}
let wn;
function Po() {
  return wn == null && (wn = vf()), wn;
}
function vf() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
class bf extends B {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      jt(() => {
        this.setState({ forPrint: !0 });
      });
    }, this.handleAfterPrint = () => {
      jt(() => {
        this.setState({ forPrint: !1 });
      });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, i = r || n.height === "auto" || n.contentHeight === "auto", s = !i && n.height != null ? n.height : "", o = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return Po() || o.push("fc-liquid-hack"), e.children(o, s, i, r);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
class Ze {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function yf(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function xr(t) {
  return {
    [t.component.uid]: t
  };
}
const Qn = {};
class Ef {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(e, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  // not meant for public use
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(e, n) {
    let r = this.getCurrentData(), i;
    n = n || "day", i = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), s, o;
    for (let l in n)
      i.push(l);
    for (s = 0; s < i.length; s += 1)
      if (o = n[i[s]], o && o.singleUnit === e)
        return o;
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: dt(e.calendarOptions.now, e.dateEnv)
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), r = M(e);
    r && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, r)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(e), z(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), z(r), r);
  }
  formatIso(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(e), { omitTime: n });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(e, n) {
    let r;
    n == null ? e.start != null ? r = e : r = {
      start: e,
      end: null
    } : r = {
      start: e,
      end: n
    };
    let i = this.getCurrentData(), s = cf(r, i.dateEnv, M({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), Ro(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Ju(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof j) {
      let o = e._def, l = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: $n({ def: o, instance: l })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof Le)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Sr(r.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = o.internalEventSource;
    }
    let s = yo(e, i, r, !1);
    if (s) {
      let o = new j(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: $n(s)
      }), this.triggerEventAdd(o), o;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: _o(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let n = this.getCurrentData(), { defs: r, instances: i } = n.eventStore;
    e = String(e);
    for (let s in r) {
      let o = r[s];
      if (o.publicId === e) {
        if (o.recurringDef)
          return new j(n, o, null);
        for (let l in i) {
          let a = i[l];
          if (a.defId === o.defId)
            return new j(n, o, a);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return Ne(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new Le(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new Le(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Le)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = Ao(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new Le(n, r)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(e) {
    let n = M(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function Sf(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function Bo(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function Af(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Cf(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function wf(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
const Dn = J();
class Df {
  constructor() {
    this.getKeysForEventDefs = R(this._getKeysForEventDefs), this.splitDateSelection = R(this._splitDateSpan), this.splitEventStore = R(this._splitEventStore), this.splitIndividualUi = R(this._splitIndividualUi), this.splitEventDrag = R(this._splitInteraction), this.splitEventResize = R(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, r), o = this.splitEventStore(e.eventStore, r), l = this.splitEventDrag(e.eventDrag), a = this.splitEventResize(e.eventResize), d = {};
    this.eventUiBuilders = fe(n, (c, u) => this.eventUiBuilders[u] || R(Rf));
    for (let c in n) {
      let u = n[c], h = o[c] || Dn, f = this.eventUiBuilders[c];
      d[c] = {
        businessHours: u.businessHours || e.businessHours,
        dateSelection: i[c] || null,
        eventStore: h,
        eventUiBases: f(e.eventUiBases[""], u.ui, s[c]),
        eventSelection: h.instances[e.eventSelection] ? e.eventSelection : "",
        eventDrag: l[c] || null,
        eventResize: a[c] || null
      };
    }
    return d;
  }
  _splitDateSpan(e) {
    let n = {};
    if (e) {
      let r = this.getKeysForDateSpan(e);
      for (let i of r)
        n[i] = e;
    }
    return n;
  }
  _getKeysForEventDefs(e) {
    return fe(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: i } = e, s = {};
    for (let o in r)
      for (let l of n[o])
        s[l] || (s[l] = J()), s[l].defs[o] = r[o];
    for (let o in i) {
      let l = i[o];
      for (let a of n[l.defId])
        s[a] && (s[a].instances[o] = l);
    }
    return s;
  }
  _splitIndividualUi(e, n) {
    let r = {};
    for (let i in e)
      if (i)
        for (let s of n[i])
          r[s] || (r[s] = {}), r[s][i] = e[i];
    return r;
  }
  _splitInteraction(e) {
    let n = {};
    if (e) {
      let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), i = this._getKeysForEventDefs(e.mutatedEvents), s = this._splitEventStore(e.mutatedEvents, i), o = (l) => {
        n[l] || (n[l] = {
          affectedEvents: r[l] || Dn,
          mutatedEvents: s[l] || Dn,
          isEvent: e.isEvent
        });
      };
      for (let l in r)
        o(l);
      for (let l in s)
        o(l);
    }
    return n;
  }
}
function Rf(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let i = {
    "": So(r)
  };
  return n && Object.assign(i, n), i;
}
function Ho(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(r && !ue(r.activeRange, t)),
    isOther: !!(r && !ue(r.currentRange, t)),
    isToday: !!(e && ue(e, t)),
    isPast: !!(n ? t < n : e && t < e.start),
    isFuture: !!(n ? t > n : e && t >= e.end)
  };
}
function Ir(t, e) {
  let n = [
    "fc-day",
    `fc-day-${Nd[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const _f = z({ year: "numeric", month: "long", day: "numeric" }), Tf = z({ week: "long" });
function qt(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: o } = t;
  let l = i.format(e, n === "week" ? Tf : _f);
  if (s.navLinks) {
    let a = i.toDate(e);
    const d = (c) => {
      let u = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof u == "function" ? u.call(o, i.toDate(e), c) : (typeof u == "string" && (n = u), o.zoomTo(e, n));
    };
    return Object.assign({ title: tt(s.navLinkHint, [l, a], l), "data-navlink": "" }, r ? io(d) : { onClick: d });
  }
  return { "aria-label": l };
}
let Rn = null;
function Nf() {
  return Rn === null && (Rn = xf()), Rn;
}
function xf() {
  let t = document.createElement("div");
  et(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return hr(t), n;
}
let _n;
function If() {
  return _n || (_n = kf()), _n;
}
function kf() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = Lo(t);
  return document.body.removeChild(t), e;
}
function Lo(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function Mf(t, e = !1) {
  let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, s = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, l = Lo(t), a = l.y - r - i, d = l.x - s - o, c = {
    borderLeft: r,
    borderRight: i,
    borderTop: s,
    borderBottom: o,
    scrollbarBottom: d,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Nf() && n.direction === "rtl" ? c.scrollbarLeft = a : c.scrollbarRight = a, e && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0, c.paddingRight = parseInt(n.paddingRight, 10) || 0, c.paddingTop = parseInt(n.paddingTop, 10) || 0, c.paddingBottom = parseInt(n.paddingBottom, 10) || 0), c;
}
function Of(t, e = !1, n) {
  let r = n ? t.getBoundingClientRect() : kr(t), i = Mf(t, e), s = {
    left: r.left + i.borderLeft + i.scrollbarLeft,
    right: r.right - i.borderRight - i.scrollbarRight,
    top: r.top + i.borderTop,
    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function kr(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function Pf(t) {
  let e = Uo(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = Bo(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function Uo(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
class $e {
  constructor(e, n, r, i) {
    this.els = n;
    let s = this.originClientRect = e.getBoundingClientRect();
    r && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.left - e), r.push(s.right - e);
    }
    this.lefts = n, this.rights = r;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.top - e), r.push(s.bottom - e);
    }
    this.tops = n, this.bottoms = r;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: n, rights: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: n, bottoms: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Gets the width of the element at the given index
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  // Gets the height of the element at the given index
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return bt(this.tops || [], e.tops || []) && bt(this.bottoms || [], e.bottoms || []) && bt(this.lefts || [], e.lefts || []) && bt(this.rights || [], e.rights || []);
  }
}
function bt(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class Mr {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
}
class Bf extends Mr {
  constructor(e) {
    super(), this.el = e;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(e) {
    this.el.scrollTop = e;
  }
  setScrollLeft(e) {
    this.el.scrollLeft = e;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
}
class Hf extends Mr {
  getScrollTop() {
    return window.pageYOffset;
  }
  getScrollLeft() {
    return window.pageXOffset;
  }
  setScrollTop(e) {
    window.scroll(window.pageXOffset, e);
  }
  setScrollLeft(e) {
    window.scroll(e, window.pageYOffset);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
}
class ae extends B {
  constructor() {
    super(...arguments), this.uid = Oe();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(e, n, r, i) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(e) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !q(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !q(e, ".fc-event:not(.fc-bg-event)") && !q(e, ".fc-more-link") && // a "more.." link
    !q(e, "a[data-navlink]") && // a clickable nav link
    !q(e, ".fc-popover");
  }
}
class Fo {
  constructor(e = (n) => n.thickness || 1) {
    this.getEntryThickness = e, this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let r of e)
      this.insertEntry(r, n);
    return n;
  }
  insertEntry(e, n) {
    let r = this.findInsertion(e);
    this.isInsertionValid(r, e) ? this.insertEntryAt(e, r) : this.handleInvalidInsertion(r, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(n) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  handleInvalidInsertion(e, n, r) {
    if (this.allowReslicing && e.touchingEntry) {
      const i = Object.assign(Object.assign({}, n), { span: Or(n.span, e.touchingEntry.span) });
      r.push(i), this.splitEntry(n, e.touchingEntry, r);
    } else
      r.push(n);
  }
  /*
  Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
  */
  splitEntry(e, n, r) {
    let i = e.span, s = n.span;
    i.start < s.start && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: i.start, end: s.start }
    }, r), i.end > s.end && this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: s.end, end: i.end }
    }, r);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? (Tn(i, n.level, n.levelCoord), Tn(r, n.level, [e])) : Tn(r[n.level], n.lateral, e), this.stackCnts[xe(e)] = n.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, o = n.length, l = 0, a = -1, d = -1, c = null, u = 0;
    for (let v = 0; v < o; v += 1) {
      const g = n[v];
      if (!i && g >= l + this.getEntryThickness(e))
        break;
      let b = r[v], E, C = Zn(b, e.span.start, Yn), w = C[0] + C[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (E = b[w]) && // but not past the whole entry list
        E.span.start < e.span.end;
      ) {
        let T = g + this.getEntryThickness(E);
        T > l && (l = T, c = E, a = v, d = w), T === l && (u = Math.max(u, s[xe(E)] + 1)), w += 1;
      }
    }
    let h = 0;
    if (c)
      for (h = a + 1; h < o && n[h] < l; )
        h += 1;
    let f = -1;
    return h < o && n[h] === l && (f = Zn(r[h], e.span.end, Yn)[0]), {
      touchingLevel: a,
      touchingLateral: d,
      touchingEntry: c,
      stackCnt: u,
      levelCoord: l,
      level: h,
      lateral: f
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, i = [];
    for (let s = 0; s < r; s += 1) {
      let o = e[s], l = n[s];
      for (let a of o)
        i.push(Object.assign(Object.assign({}, a), { thickness: this.getEntryThickness(a), levelCoord: l }));
    }
    return i;
  }
}
function Yn(t) {
  return t.span.end;
}
function xe(t) {
  return t.index + ":" + t.span.start;
}
function Lf(t) {
  let e = [];
  for (let n of t) {
    let r = [], i = {
      span: n.span,
      entries: [n]
    };
    for (let s of e)
      Or(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: Uf(s.span, i.span)
      } : r.push(s);
    r.push(i), e = r;
  }
  return e;
}
function Uf(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function Or(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function Tn(t, e, n) {
  t.splice(e, 0, n);
}
function Zn(t, e, n) {
  let r = 0, i = t.length;
  if (!i || e < n(t[r]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; r < i; ) {
    let s = Math.floor(r + (i - r) / 2), o = n(t[s]);
    if (e < o)
      i = s;
    else if (e > o)
      r = s + 1;
    else
      return [s, 1];
  }
  return [r, 0];
}
class Ff {
  constructor(e, n) {
    this.emitter = new cn();
  }
  destroy() {
  }
  setMirrorIsVisible(e) {
  }
  setMirrorNeedsRevert(e) {
  }
  setAutoScrollEnabled(e) {
  }
}
const Pr = {};
function jf(t, e) {
  return !t || e > 10 ? z({ weekday: "short" }) : e > 1 ? z({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : z({ weekday: "long" });
}
const jo = "fc-col-header-cell";
function zo(t) {
  return t.text;
}
class zf extends B {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: o, dateProfile: l } = s, a = Ho(o, s.todayRange, null, l), d = [jo].concat(Ir(a, r)), c = e.format(o, s.dayHeaderFormat), u = !a.isDisabled && s.colCnt > 1 ? qt(this.context, o) : {}, h = Object.assign(Object.assign(Object.assign({ date: e.toDate(o), view: i }, s.extraRenderProps), { text: c }), a);
    return p(K, { elTag: "th", elClasses: d, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": a.isDisabled ? void 0 : vr(o) }, s.extraDataAttrs), renderProps: h, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: zo, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (f) => p("div", { className: "fc-scrollgrid-sync-inner" }, !a.isDisabled && p(f, { elTag: "a", elAttrs: u, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const Wf = z({ weekday: "long" });
class Vf extends B {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, o = $(/* @__PURE__ */ new Date(2592e5), e.dow), l = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, a = n.format(o, e.dayHeaderFormat), d = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: o
    }, l), { view: i }), e.extraRenderProps), { text: a });
    return p(K, { elTag: "th", elClasses: [
      jo,
      ...Ir(l, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: zo, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (c) => p(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      p(c, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(o, Wf)
      } })
    ));
  }
}
class ut extends X {
  constructor(e, n) {
    super(e, n), this.initialNowDate = dt(n.options.now, n.dateEnv), this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: e, context: n } = this, r = Ce(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), i = n.dateEnv.startOf(r, e.unit), s = n.dateEnv.add(i, M(1, e.unit)), o = s.valueOf() - r.valueOf();
    return o = Math.min(1e3 * 60 * 60 * 24, o), {
      currentState: { nowDate: i, todayRange: Wi(i) },
      nextState: { nowDate: s, todayRange: Wi(s) },
      waitMs: o
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
ut.contextType = pe;
function Wi(t) {
  let e = L(t), n = $(e, 1);
  return { start: e, end: n };
}
class Wo extends B {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = R(Gf);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return p(ut, { unit: "day" }, (l, a) => p(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((d) => i ? p(zf, { key: d.toISOString(), date: d, dateProfile: r, todayRange: a, colCnt: n.length, dayHeaderFormat: o }) : p(Vf, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function Gf(t, e, n) {
  return t || jf(e, n);
}
class Vo {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], o = [], l = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(l + 0.5) : (l += 1, s.push(l), o.push(r)), r = $(r, 1);
    this.dates = o, this.indices = s, this.cnt = o.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex($(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
    return i = Math.ceil(i), s = Math.floor(s), i <= s ? {
      firstIndex: i,
      lastIndex: s,
      isStart: n === i,
      isEnd: r === s
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: n } = this, r = Math.floor(Pe(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class Go {
  constructor(e, n) {
    let { dates: r } = e, i, s, o;
    if (n) {
      for (s = r[0].getUTCDay(), i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1)
        ;
      o = Math.ceil(r.length / i);
    } else
      o = 1, i = r.length;
    this.rowCnt = o, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let i = 0; i < this.colCnt; i += 1)
        r.push(this.buildCell(n, i));
      e.push(r);
    }
    return e;
  }
  buildCell(e, n) {
    let r = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: r.toISOString(),
      date: r
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, r = this.daySeries.sliceRange(e), i = [];
    if (r) {
      let { firstIndex: s, lastIndex: o } = r, l = s;
      for (; l <= o; ) {
        let a = Math.floor(l / n), d = Math.min((a + 1) * n, o + 1);
        i.push({
          row: a,
          firstCol: l % n,
          lastCol: (d - 1) % n,
          isStart: r.isStart && l === s,
          isEnd: r.isEnd && d - 1 === o
        }), l = d;
      }
    }
    return i;
  }
}
class qo {
  constructor() {
    this.sliceBusinessHours = R(this._sliceBusinessHours), this.sliceDateSelection = R(this._sliceDateSpan), this.sliceEventStore = R(this._sliceEventStore), this.sliceEventDrag = R(this._sliceInteraction), this.sliceEventResize = R(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, r, i, ...s) {
    let { eventUiBases: o } = e, l = this.sliceEventStore(e.eventStore, o, n, r, ...s);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, o, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, i, ...s),
      fgEventSegs: l.fg,
      bgEventSegs: l.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, o, n, r, ...s),
      eventResize: this.sliceEventResize(e.eventResize, o, n, r, ...s),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, r, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: Ce(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(Me(e, yt(n, !!r), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let o = Fi(e, n, yt(r, !!i), i);
      return {
        bg: this.sliceEventRanges(o.bg, s),
        fg: this.sliceEventRanges(o.fg, s)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, r, i, ...s) {
    if (!e)
      return null;
    let o = Fi(e.mutatedEvents, n, yt(r, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...o) {
    if (!e)
      return [];
    let l = yt(n, !!r), a = ke(e.range, l);
    if (a) {
      e = Object.assign(Object.assign({}, e), { range: a });
      let d = pf(e, i, s), c = this.sliceRange(e.range, ...o);
      for (let u of c)
        u.eventRange = d;
      return c;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(e, n) {
    let r = [];
    for (let i of e)
      r.push(...this.sliceEventRange(i, n));
    return r;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(e, n) {
    let r = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
      start: r.start,
      end: $(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function yt(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: Ce(n.start, t.slotMinTime.milliseconds),
    end: Ce(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function $o(t, e, n) {
  let { instances: r } = t.mutatedEvents;
  for (let i in r)
    if (!ln(e.validRange, r[i].range))
      return !1;
  return Qo({ eventDrag: t }, n);
}
function qf(t, e, n) {
  return ln(e.validRange, t.range) ? Qo({ dateSelection: t }, n) : !1;
}
function Qo(t, e) {
  let n = e.getCurrentData(), r = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || $f)(r, e);
}
function $f(t, e, n = {}, r) {
  return !(t.eventDrag && !Qf(t, e, n, r) || t.dateSelection && !Yf(t, e, n, r));
}
function Qf(t, e, n, r) {
  let i = e.getCurrentData(), s = t.eventDrag, o = s.mutatedEvents, l = o.defs, a = o.instances, d = Gt(l, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  r && (d = fe(d, r));
  let c = Gu(t.eventStore, s.affectedEvents.instances), u = c.defs, h = c.instances, f = Gt(u, t.eventUiBases);
  for (let v in a) {
    let g = a[v], b = g.range, E = d[g.defId], C = l[g.defId];
    if (!Yo(E.constraints, b, c, t.businessHours, e))
      return !1;
    let { eventOverlap: w } = e.options, T = typeof w == "function" ? w : null;
    for (let P in h) {
      let H = h[P];
      if (Cr(b, H.range) && (f[H.defId].overlap === !1 && s.isEvent || E.overlap === !1 || T && !T(
        new j(e, u[H.defId], H),
        // still event
        new j(e, C, g)
      )))
        return !1;
    }
    let F = i.eventStore;
    for (let P of E.allows) {
      let H = Object.assign(Object.assign({}, n), { range: g.range, allDay: C.allDay }), I = F.defs[C.defId], ee = F.instances[v], De;
      if (I ? De = new j(e, I, ee) : De = new j(e, C), !P(Tr(H, e), De))
        return !1;
    }
  }
  return !0;
}
function Yf(t, e, n, r) {
  let i = t.eventStore, s = i.defs, o = i.instances, l = t.dateSelection, a = l.range, { selectionConfig: d } = e.getCurrentData();
  if (r && (d = r(d)), !Yo(d.constraints, a, i, t.businessHours, e))
    return !1;
  let { selectOverlap: c } = e.options, u = typeof c == "function" ? c : null;
  for (let h in o) {
    let f = o[h];
    if (Cr(a, f.range) && (d.overlap === !1 || u && !u(new j(e, s[f.defId], f), null)))
      return !1;
  }
  for (let h of d.allows) {
    let f = Object.assign(Object.assign({}, n), l);
    if (!h(Tr(f, e), null))
      return !1;
  }
  return !0;
}
function Yo(t, e, n, r, i) {
  for (let s of t)
    if (!Xf(Zf(s, e, n, r, i), e))
      return !1;
  return !0;
}
function Zf(t, e, n, r, i) {
  return t === "businessHours" ? Nn(Me(r, e, i)) : typeof t == "string" ? Nn(an(n, (s) => s.groupId === t)) : typeof t == "object" && t ? Nn(Me(t, e, i)) : [];
}
function Nn(t) {
  let { instances: e } = t, n = [];
  for (let r in e)
    n.push(e[r].range);
  return n;
}
function Xf(t, e) {
  for (let n of t)
    if (ln(n, e))
      return !0;
  return !1;
}
const Et = /^(visible|hidden)$/;
class Jf extends B {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, he(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, i = n && r, s = ["fc-scroller"];
    return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), p("div", { ref: this.handleEl, className: s.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: i && -(e.overcomeLeft || 0) || "",
      right: i && -(e.overcomeRight || 0) || "",
      bottom: i && -(e.overcomeBottom || 0) || "",
      marginLeft: !i && -(e.overcomeLeft || 0) || "",
      marginRight: !i && -(e.overcomeRight || 0) || "",
      marginBottom: !i && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (Et.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (Et.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return Et.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return Et.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class ce {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: i, currentMap: s } = this, o = !1, l = !1;
      n !== null ? (o = r in s, s[r] = n, i[r] = (i[r] || 0) + 1, l = !0) : (i[r] -= 1, i[r] || (delete s[r], delete this.callbackMap[r], o = !0)), this.masterCallback && (o && this.masterCallback(null, String(r)), l && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(e, n, r) {
    return au(this.currentMap, e, n, r);
  }
  getAll() {
    return Sr(this.currentMap);
  }
}
function Kf(t) {
  let e = ld(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, Sd(r));
  return Math.ceil(n);
}
function Zo(t, e) {
  return t.liquid && e.liquid;
}
function eh(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Zo(t, e);
}
function th(t, e, n, r) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : p("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: i ? n.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, n.tableColGroupNode, p(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function nh(t, e) {
  return Ae(t, e, oe);
}
function rh(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(p("col", { style: {
        width: r.width === "shrink" ? ih(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return p("colgroup", {}, ...n);
}
function ih(t) {
  return t ?? 4;
}
function sh(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function oh(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function lh(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function Xn(t) {
  return p("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function $t(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Xo(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class Br extends B {
  constructor() {
    super(...arguments), this.processCols = R((e) => e, nh), this.renderMicroColGroup = R(rh), this.scrollerRefs = new ce(), this.scrollerElRefs = new ce(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), o = this.renderMicroColGroup(s, n.shrinkWidth), l = oh(e.liquid, r);
    e.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
    let a = i.length, d = 0, c, u = [], h = [], f = [];
    for (; d < a && (c = i[d]).type === "header"; )
      u.push(this.renderSection(c, o, !0)), d += 1;
    for (; d < a && (c = i[d]).type === "body"; )
      h.push(this.renderSection(c, o, !1)), d += 1;
    for (; d < a && (c = i[d]).type === "footer"; )
      f.push(this.renderSection(c, o, !0)), d += 1;
    let v = !Po();
    const g = { role: "rowgroup" };
    return p("table", {
      role: "grid",
      className: l.join(" "),
      style: { height: e.height }
    }, !!(!v && u.length) && p("thead", g, ...u), !!(!v && h.length) && p("tbody", g, ...h), !!(!v && f.length) && p("tfoot", g, ...f), v && p("tbody", g, ...u, ...h, ...f));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? p(U, { key: e.key }, e.outerContent) : p("tr", { key: e.key, role: "presentation", className: lh(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: o, scrollerClientWidths: l, scrollerClientHeights: a } = this.state, d = eh(s, e), c = Zo(s, e), u = s.liquid ? o ? "scroll" : d ? "auto" : "hidden" : "visible", h = e.key, f = th(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && l[h] !== void 0 ? l[h] : null,
      clientHeight: a[h] !== void 0 ? a[h] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return p(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, p(
      "div",
      { className: `fc-scroller-harness${c ? " fc-scroller-harness-liquid" : ""}` },
      p(Jf, { ref: this.scrollerRefs.createRef(h), elRef: this.scrollerElRefs.createRef(h), overflowY: u, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: c, liquidIsAbsolute: !0 }, f)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = ah(this.props.sections, n);
    r && he(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return sh(this.props.cols) ? Kf(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = If(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, o = {};
    for (let l in n.currentMap) {
      let a = n.currentMap[l];
      if (a && a.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let l of this.props.sections) {
      let a = l.key, d = r.currentMap[a];
      if (d) {
        let c = d.parentNode;
        s[a] = Math.floor(c.getBoundingClientRect().width - (i ? e.y : 0)), o[a] = Math.floor(c.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: o };
  }
}
Br.addStateEquality({
  scrollerClientWidths: oe,
  scrollerClientHeights: oe
});
function ah(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class Hr extends B {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && ji(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: o } = s, l = {
      event: new j(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: o.textColor,
      backgroundColor: o.backgroundColor,
      borderColor: o.borderColor,
      isDraggable: !e.disableDragging && rf(i, n),
      isStartResizable: !e.disableResizing && sf(i, n),
      isEndResizable: !e.disableResizing && of(i),
      isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: !!i.isStart,
      isEnd: !!i.isEnd,
      isPast: !!e.isPast,
      isFuture: !!e.isFuture,
      isToday: !!e.isToday,
      isSelected: !!e.isSelected,
      isDragging: !!e.isDragging,
      isResizing: !!e.isResizing
    };
    return p(K, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...lf(l),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: l, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && ji(this.el, this.props.seg);
  }
}
class Jo extends B {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, o = r.eventTimeFormat || e.defaultTimeFormat, l = xo(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return p(Hr, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: ko(i, n), defaultGenerator: ch, timeText: l }), (a, d) => p(
      U,
      null,
      p(a, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: d.textColor } }),
      !!d.isStartResizable && p("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!d.isEndResizable && p("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function ch(t) {
  return p(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && p("div", { className: "fc-event-time" }, t.timeText),
    p(
      "div",
      { className: "fc-event-title-container" },
      p("div", { className: "fc-event-title fc-sticky" }, t.event.title || p(U, null, " "))
    )
  );
}
const Lr = (t) => p(pe.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return p(K, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }));
}), dh = z({ day: "numeric" });
class Ur extends B {
  constructor() {
    super(...arguments), this.refineRenderProps = xt(uh);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: r.monthStartFormat
    });
    return p(K, Object.assign({}, e, { elClasses: [
      ...Ir(i, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": vr(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : r.dayCellClassNames
    ), didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function Fr(t) {
  return !!(t.dayCellContent || Gn("dayCellContent", t));
}
function uh(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = Ho(e, t.todayRange, null, r), o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : dh) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class Ko extends B {
  render() {
    let { props: e } = this, { seg: n } = e;
    return p(Hr, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: fh, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function fh(t) {
  let { title: e } = t.event;
  return e && p("div", { className: "fc-event-title" }, t.event.title);
}
function el(t) {
  return p("div", { className: `fc-${t}` });
}
const tl = (t) => p(pe.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, o = n.computeWeekNumber(i), l = n.format(i, s);
  return p(
    K,
    Object.assign({}, t, { renderProps: { num: o, text: l, date: i }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: hh, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function hh(t) {
  return t.text;
}
const xn = 10;
class ph extends B {
  constructor() {
    super(...arguments), this.state = {
      titleId: sn()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && he(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = no(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: r, state: i } = this, s = [
      "fc-popover",
      e.getClass("popover")
    ].concat(r.extraClassNames || []);
    return $c(p(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      p(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        p("span", { className: "fc-popover-title", id: i.titleId }, r.title),
        p("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      p("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = Pf(n);
    if (s) {
      let o = i.getBoundingClientRect(), l = r ? q(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, a = e ? s.right - o.width : s.left;
      l = Math.max(l, xn), a = Math.min(a, document.documentElement.clientWidth - xn - o.width), a = Math.max(a, xn);
      let d = i.offsetParent.getBoundingClientRect();
      et(i, {
        top: l - d.top,
        left: a - d.left
      });
    }
  }
}
class gh extends ae {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: i, todayRange: s, dateProfile: o } = r, l = n.format(i, e.dayPopoverFormat);
    return p(Ur, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: s }, (a, d, c) => p(
      ph,
      { elRef: c.ref, id: r.id, title: l, extraClassNames: ["fc-more-popover"].concat(c.className || []), extraAttrs: c, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      Fr(e) && p(a, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      r.children
    ));
  }
  queryHit(e, n, r, i) {
    let { rootEl: s, props: o } = this;
    return e >= 0 && e < r && n >= 0 && n < i ? {
      dateProfile: o.dateProfile,
      dateSpan: Object.assign({ allDay: !o.forceTimed, range: {
        start: o.startDate,
        end: o.endDate
      } }, o.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: i
      },
      layer: 1
      // important when comparing with hits from other components
    } : null;
  }
}
class nl extends B {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: sn()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && he(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = Vi(n).start;
      function o(l) {
        let { def: a, instance: d, range: c } = l.eventRange;
        return {
          event: new j(r, a, d),
          start: r.dateEnv.toDate(c.start),
          end: r.dateEnv.toDate(c.end),
          isStart: l.isStart,
          isEnd: l.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: s,
        allDay: !!n.allDayDate,
        allSegs: n.allSegs.map(o),
        hiddenSegs: n.hiddenSegs.map(o),
        jsEvent: e,
        view: r.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && r.calendarApi.zoomTo(s, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return p(pe.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: o } = r, { moreLinkText: l } = s, { moreCnt: a } = e, d = Vi(e), c = typeof l == "function" ? l.call(o, a) : `+${a} ${l}`, u = tt(s.moreLinkHint, [a], c), h = {
        num: a,
        shortText: `+${a}`,
        text: c,
        view: i
      };
      return p(
        U,
        null,
        !!e.moreCnt && p(K, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), io(this.handleClick)), { title: u, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: h, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || mh, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && p(gh, { id: n.popoverId, startDate: d.start, endDate: d.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = q(this.linkEl, ".fc-view-harness"));
  }
}
function mh(t) {
  return t.text;
}
function Vi(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: $(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: rl(e),
    end: bh(e)
  };
}
function rl(t) {
  return t.reduce(vh).eventRange.range.start;
}
function vh(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function bh(t) {
  return t.reduce(yh).eventRange.range.end;
}
function yh(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class Eh {
  constructor() {
    this.handlers = [];
  }
  set(e) {
    this.currentValue = e;
    for (let n of this.handlers)
      n(e);
  }
  subscribe(e) {
    this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue);
  }
}
class Sh extends Eh {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map();
  }
  // for consistent order
  handle(e) {
    const { map: n } = this;
    let r = !1;
    e.isActive ? (n.set(e.id, e), r = !0) : n.has(e.id) && (n.delete(e.id), r = !0), r && this.set(n);
  }
}
const Ah = [], il = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, sl = Object.assign(Object.assign({}, il), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function Ch(t) {
  let e = t.length > 0 ? t[0].code : "en", n = Ah.concat(t), r = {
    en: sl
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function ol(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? ll(t.code, [t.code], t) : wh(t, e);
}
function wh(t, e) {
  let n = [].concat(t || []), r = Dh(n, e) || sl;
  return ll(t, n, r);
}
function Dh(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t[n].toLocaleLowerCase().split("-");
    for (let i = r.length; i > 0; i -= 1) {
      let s = r.slice(0, i).join("-");
      if (e[s])
        return e[s];
    }
  }
  return null;
}
function ll(t, e, n) {
  let r = Er([il, n], ["buttonText"]);
  delete r.code;
  let { week: i } = r;
  return delete r.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: r
  };
}
function ge(t) {
  return {
    id: Oe(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function Rh(t, e) {
  let n = {}, r = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(s) {
    for (let o of s) {
      const l = o.name, a = n[l];
      a === void 0 ? (n[l] = o.id, i(o.deps), r = Th(r, o)) : a !== o.id && console.warn(`Duplicate plugin '${l}'`);
    }
  }
  return t && i(t), i(e), r;
}
function _h() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !Ae(r, t) || !Ae(i, e)) && (n = Rh(r, i)), t = r, e = i, n);
}
function Th(t, e) {
  return {
    premiumReleaseDate: Nh(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function Nh(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class we extends ct {
}
we.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
we.prototype.baseIconClass = "fc-icon";
we.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
we.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
we.prototype.iconOverrideOption = "buttonIcons";
we.prototype.iconOverrideCustomButtonOption = "icon";
we.prototype.iconOverridePrefix = "fc-icon-";
function xh(t, e) {
  let n = {}, r;
  for (r in t)
    Jn(r, n, t, e);
  for (r in e)
    Jn(r, n, t, e);
  return n;
}
function Jn(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = Ih(t, e, n, r);
  return i && (e[t] = i), i;
}
function Ih(t, e, n, r) {
  let i = n[t], s = r[t], o = (c) => i && i[c] !== null ? i[c] : s && s[c] !== null ? s[c] : null, l = o("component"), a = o("superType"), d = null;
  if (a) {
    if (a === t)
      throw new Error("Can't have a custom view type that references itself");
    d = Jn(a, e, n, r);
  }
  return !l && d && (l = d.component), l ? {
    type: t,
    component: l,
    defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function Gi(t) {
  return fe(t, kh);
}
function kh(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = qi(e) : n && !(n.prototype instanceof B) && (n = qi(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function qi(t) {
  return (e) => p(pe.Consumer, null, (n) => p(K, { elTag: "div", elClasses: po(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function Mh(t, e, n, r) {
  let i = Gi(t), s = Gi(e.views), o = xh(i, s);
  return fe(o, (l) => Oh(l, s, e, n, r));
}
function Oh(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, o = null, l = "", a = "", d = {};
  if (s && (o = Ph(s), o)) {
    let h = Wn(o);
    l = h.unit, h.value === 1 && (a = l, d = e[l] ? e[l].rawOptions : {});
  }
  let c = (h) => {
    let f = h.buttonText || {}, v = t.defaults.buttonTextKey;
    return v != null && f[v] != null ? f[v] : f[t.type] != null ? f[t.type] : f[a] != null ? f[a] : null;
  }, u = (h) => {
    let f = h.buttonHints || {}, v = t.defaults.buttonTextKey;
    return v != null && f[v] != null ? f[v] : f[t.type] != null ? f[t.type] : f[a] != null ? f[a] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: l,
    singleUnit: a,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, d), t.overrides),
    buttonTextOverride: c(r) || c(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: c(i) || t.defaults.buttonText || c(nt) || t.type,
    // not DRY
    buttonTitleOverride: u(r) || u(n) || t.overrides.buttonHint,
    buttonTitleDefault: u(i) || t.defaults.buttonHint || u(nt)
    // will eventually fall back to buttonText
  };
}
let $i = {};
function Ph(t) {
  let e = JSON.stringify(t), n = $i[e];
  return n === void 0 && (n = M(t), $i[e] = n), n;
}
function Bh(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function Hh(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function Lh(t, e, n, r) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(e.dateMarker);
    case "PREV":
      if (i = r.buildPrev(t, n), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = r.buildNext(t, n), i.isValid)
        return i;
      break;
  }
  return t;
}
function Uh(t, e, n) {
  let r = e ? e.activeRange : null;
  return cl({}, qh(t, n), r, n);
}
function Fh(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return cl(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return zh(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? dl(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return jr(t, e.sourceIds ? (
        // why no type?
        ao(e.sourceIds)
      ) : ul(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Gh(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function jh(t, e, n) {
  let r = e ? e.activeRange : null;
  return jr(t, ul(t, n), r, !0, n);
}
function al(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function cl(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = dl(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function zh(t, e) {
  return Ie(t, (n) => n.sourceId !== e);
}
function dl(t, e, n) {
  return jr(t, Ie(t, (r) => Wh(r, e, n)), e, !1, n);
}
function Wh(t, e, n) {
  return fl(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function jr(t, e, n, r, i) {
  let s = {};
  for (let o in t) {
    let l = t[o];
    e[o] ? s[o] = Vh(l, n, r, i) : s[o] = l;
  }
  return s;
}
function Vh(t, e, n, r) {
  let { options: i, calendarApi: s } = r, o = r.pluginHooks.eventSourceDefs[t.sourceDefId], l = Oe();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (a) => {
    let { rawEvents: d } = a;
    i.eventSourceSuccess && (d = i.eventSourceSuccess.call(s, d, a.response) || d), t.success && (d = t.success.call(s, d, a.response) || d), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: l,
      fetchRange: e,
      rawEvents: d
    });
  }, (a) => {
    let d = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, a), d = !0), t.failure && (t.failure(a), d = !0), d || console.warn(a.message, a), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: l,
      fetchRange: e,
      error: a
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: l });
}
function Gh(t, e, n, r) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function ul(t, e) {
  return Ie(t, (n) => fl(n, e));
}
function qh(t, e) {
  let n = Co(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let o = Ao(s, e, n);
    o && i.push(o);
  }
  return i;
}
function fl(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function $h(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Qh(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Yh(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Zh(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function Xh(t, e, n, r, i) {
  let s = t.headerToolbar ? Qi(t.headerToolbar, t, e, n, r, i) : null, o = t.footerToolbar ? Qi(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: o };
}
function Qi(t, e, n, r, i, s) {
  let o = {}, l = [], a = !1;
  for (let d in t) {
    let c = t[d], u = Jh(c, e, n, r, i, s);
    o[d] = u.widgets, l.push(...u.viewsWithButtons), a = a || u.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: l, hasTitle: a };
}
function Jh(t, e, n, r, i, s) {
  let o = e.direction === "rtl", l = e.customButtons || {}, a = n.buttonText || {}, d = e.buttonText || {}, c = n.buttonHints || {}, u = e.buttonHints || {}, h = t ? t.split(" ") : [], f = [], v = !1;
  return { widgets: h.map((b) => b.split(",").map((E) => {
    if (E === "title")
      return v = !0, { buttonName: E };
    let C, w, T, F, P, H;
    if (C = l[E])
      T = (I) => {
        C.click && C.click.call(I.target, I, I.target);
      }, (F = r.getCustomButtonIconClass(C)) || (F = r.getIconClass(E, o)) || (P = C.text), H = C.hint || C.text;
    else if (w = i[E]) {
      f.push(E), T = () => {
        s.changeView(E);
      }, (P = w.buttonTextOverride) || (F = r.getIconClass(E, o)) || (P = w.buttonTextDefault);
      let I = w.buttonTextOverride || w.buttonTextDefault;
      H = tt(
        w.buttonTitleOverride || w.buttonTitleDefault || e.viewHint,
        [I, E],
        // view-name = buttonName
        I
      );
    } else if (s[E])
      if (T = () => {
        s[E]();
      }, (P = a[E]) || (F = r.getIconClass(E, o)) || (P = d[E]), E === "prevYear" || E === "nextYear") {
        let I = E === "prevYear" ? "prev" : "next";
        H = tt(c[I] || u[I], [
          d.year || "year",
          "year"
        ], d[E]);
      } else
        H = (I) => tt(c[E] || u[E], [
          d[I] || I,
          I
        ], d[E]);
    return { buttonName: E, buttonClick: T, buttonIcon: F, buttonText: P, buttonHint: H };
  })), viewsWithButtons: f, hasTitle: v };
}
class Kh {
  constructor(e, n, r) {
    this.type = e, this.getCurrentData = n, this.dateEnv = r;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let ep = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const tp = ge({
  name: "array-event-source",
  eventSourceDefs: [ep]
});
let np = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    gf(i.bind(null, Mo(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const rp = ge({
  name: "func-event-source",
  eventSourceDefs: [np]
}), ip = {
  method: String,
  extraParams: y,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let sp = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, i = lp(r, t.range, t.context);
    mf(r.method, r.url, i).then(([s, o]) => {
      e({ rawEvents: s, response: o });
    }, n);
  }
};
const op = ge({
  name: "json-event-source",
  eventSourceRefiners: ip,
  eventSourceDefs: [sp]
});
function lp(t, e, n) {
  let { dateEnv: r, options: i } = n, s, o, l, a, d = {};
  return s = t.startParam, s == null && (s = i.startParam), o = t.endParam, o == null && (o = i.endParam), l = t.timeZoneParam, l == null && (l = i.timeZoneParam), typeof t.extraParams == "function" ? a = t.extraParams() : a = t.extraParams || {}, Object.assign(d, a), d[s] = r.formatIso(e.start), d[o] = r.formatIso(e.end), r.timeZone !== "local" && (d[l] = r.timeZone), d;
}
const ap = {
  daysOfWeek: y,
  startTime: M,
  endTime: M,
  duration: M,
  startRecur: y,
  endRecur: y
};
let cp = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = Dd(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: r,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = ke(e, { start: t.startRecur, end: t.endRecur });
    return r ? up(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const dp = ge({
  name: "simple-recurring-event",
  recurringTypes: [cp],
  eventRefiners: ap
});
function up(t, e, n, r) {
  let i = t ? ao(t) : null, s = L(n.start), o = n.end, l = [];
  for (; s < o; ) {
    let a;
    (!i || i[s.getUTCDay()]) && (e ? a = r.add(s, e) : a = s, l.push(a)), s = $(s, 1);
  }
  return l;
}
const fp = ge({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      Yi([t], e);
    },
    eventSources: Yi
  }
});
function Yi(t, e) {
  let n = Sr(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let r = [];
  for (let i of t) {
    let s = !1;
    for (let o = 0; o < n.length; o += 1)
      if (n[o]._raw === i) {
        n.splice(o, 1), s = !0;
        break;
      }
    s || r.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of r)
    e.calendarApi.addEventSource(i);
}
function hp(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, Mo(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function pp(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Ne(t, e));
}
const gp = [
  tp,
  rp,
  op,
  dp,
  fp,
  ge({
    name: "misc",
    isLoadingFuncs: [
      (t) => al(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: hp,
      eventStore: pp
    }
  })
];
class mp {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new fr(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], r;
      for (; r = e.shift(); )
        this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function vp(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, z(e.titleFormat || bp(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function bp(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Ht(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class yp {
  constructor(e) {
    this.computeCurrentViewData = R(this._computeCurrentViewData), this.organizeRawLocales = R(Ch), this.buildLocale = R(ol), this.buildPluginHooks = _h(), this.buildDateEnv = R(Ep), this.buildTheme = R(Sp), this.parseToolbars = R(Xh), this.buildViewSpecs = R(Mh), this.buildDateProfileGenerator = xt(Ap), this.buildViewApi = R(Cp), this.buildViewUiProps = xt(Rp), this.buildEventUiBySource = R(wp, oe), this.buildEventUiBases = R(Dp), this.parseContextBusinessHours = xt(_p), this.buildTitle = R(vp), this.emitter = new cn(), this.actionRunner = new mp(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (h) => {
      this.actionRunner.request(h);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let o = Tu(r.calendarOptions, r.dateEnv), l = s.dateProfileGenerator.build(o);
    ue(l.activeRange, o) || (o = l.currentRange.start);
    let a = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let h of r.pluginHooks.contextInit)
      h(a);
    let d = Uh(r.calendarOptions, l, a), c = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: o,
      dateProfile: l,
      businessHours: this.parseContextBusinessHours(a),
      eventSources: d,
      eventUiBases: {},
      eventStore: J(),
      renderableEventStore: J(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(a).selectionConfig
    }, u = Object.assign(Object.assign({}, a), c);
    for (let h of r.pluginHooks.reducers)
      Object.assign(c, h(null, null, u));
    In(c, a) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = Hh(r.dynamicOptionOverrides, e), o = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), l = Bh(r.currentViewType, e), a = this.computeCurrentViewData(l, o, n.optionOverrides, s);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(a.options);
    let d = {
      dateEnv: o.dateEnv,
      options: o.calendarOptions,
      pluginHooks: o.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: c, dateProfile: u } = r;
    this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (u = a.dateProfileGenerator.build(c)), c = _u(c, e), u = Lh(u, e, c, a.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !ue(u.currentRange, c)) && (c = u.currentRange.start);
    let h = Fh(r.eventSources, e, u, d), f = ju(r.eventStore, e, h, u, d), g = al(h) && !a.options.progressiveEventRendering && r.renderableEventStore || f, { eventUiSingleBase: b, selectionConfig: E } = this.buildViewUiProps(d), C = this.buildEventUiBySource(h), w = this.buildEventUiBases(g.defs, b, C), T = {
      dynamicOptionOverrides: s,
      currentViewType: l,
      currentDate: c,
      dateProfile: u,
      eventSources: h,
      eventStore: f,
      renderableEventStore: g,
      selectionConfig: E,
      eventUiBases: w,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: $h(r.dateSelection, e),
      eventSelection: Qh(r.eventSelection, e),
      eventDrag: Yh(r.eventDrag, e),
      eventResize: Zh(r.eventResize, e)
    }, F = Object.assign(Object.assign({}, d), T);
    for (let I of o.pluginHooks.reducers)
      Object.assign(T, I(r, e, F));
    let P = In(r, d), H = In(T, d);
    !P && H ? i.trigger("loading", !0) : P && !H && i.trigger("loading", !1), this.state = T, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), l = i.pluginHooks.optionChangeHandlers, a = r && r.calendarOptions, d = i.calendarOptions;
    if (a && a !== d) {
      a.timeZone !== d.timeZone && (n.eventSources = o.eventSources = jh(o.eventSources, n.dateProfile, o), n.eventStore = o.eventStore = Li(o.eventStore, r.dateEnv, o.dateEnv), n.renderableEventStore = o.renderableEventStore = Li(o.renderableEventStore, r.dateEnv, o.dateEnv));
      for (let c in l)
        (this.optionsForHandling.indexOf(c) !== -1 || a[c] !== d[c]) && l[c](d[c], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: o, availableLocaleData: l, extra: a } = this.processRawCalendarOptions(e, n);
    Zi(a);
    let d = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, l, i.defaultRangeSeparator), c = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o), u = this.buildTheme(i, s), h = this.parseToolbars(i, this.stableOptionOverrides, u, c, r);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: d,
      viewSpecs: c,
      theme: u,
      toolbarConfig: h,
      localeDefaults: o,
      availableRawLocales: l.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: i } = An([
      nt,
      e,
      n
    ]), s = this.organizeRawLocales(r), o = s.map, l = this.buildLocale(i || s.defaultCode, o).options, a = this.buildPluginHooks(e.plugins || [], gp), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ki), Mi), Oi), a.listenerRefiners), a.optionRefiners), c = {}, u = An([
      nt,
      l,
      e,
      n
    ]), h = {}, f = this.currentCalendarOptionsInput, v = this.currentCalendarOptionsRefined, g = !1;
    for (let b in u)
      this.optionsForRefining.indexOf(b) === -1 && (u[b] === f[b] || Re[b] && b in f && Re[b](f[b], u[b])) ? h[b] = v[b] : d[b] ? (h[b] = d[b](u[b]), g = !0) : c[b] = f[b];
    return g && (this.currentCalendarOptionsInput = u, this.currentCalendarOptionsRefined = h, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: a,
      availableLocaleData: s,
      localeDefaults: l,
      extra: c
    };
  }
  _computeCurrentViewData(e, n, r, i) {
    let s = n.viewSpecs[e];
    if (!s)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: o, extra: l } = this.processRawViewOptions(s, n.pluginHooks, n.localeDefaults, r, i);
    Zi(l);
    let a = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
      duration: s.duration,
      durationUnit: s.durationUnit,
      usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: o.slotMinTime,
      slotMaxTime: o.slotMaxTime,
      showNonCurrentDates: o.showNonCurrentDates,
      dayCount: o.dayCount,
      dateAlignment: o.dateAlignment,
      dateIncrement: o.dateIncrement,
      hiddenDays: o.hiddenDays,
      weekends: o.weekends,
      nowInput: o.now,
      validRangeInput: o.validRange,
      visibleRangeInput: o.visibleRange,
      fixedWeekCount: o.fixedWeekCount
    }), d = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: s, options: o, dateProfileGenerator: a, viewApi: d };
  }
  processRawViewOptions(e, n, r, i, s) {
    let o = An([
      nt,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), l = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ki), Mi), Oi), iu), n.listenerRefiners), n.optionRefiners), a = {}, d = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, u = !1, h = {};
    for (let f in o)
      o[f] === d[f] || Re[f] && Re[f](o[f], d[f]) ? a[f] = c[f] : (o[f] === this.currentCalendarOptionsInput[f] || Re[f] && Re[f](o[f], this.currentCalendarOptionsInput[f]) ? f in this.currentCalendarOptionsRefined && (a[f] = this.currentCalendarOptionsRefined[f]) : l[f] ? a[f] = l[f](o[f]) : h[f] = o[f], u = !0);
    return u && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = a), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: h
    };
  }
}
function Ep(t, e, n, r, i, s, o, l) {
  let a = ol(e || o.defaultCode, o.map);
  return new pu({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: a,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: l
  });
}
function Sp(t, e) {
  let n = e.themeClasses[t.themeSystem] || we;
  return new n(t);
}
function Ap(t) {
  let e = t.dateProfileGeneratorClass || vo;
  return new e(t);
}
function Cp(t, e, n) {
  return new Kh(t, e, n);
}
function wp(t) {
  return fe(t, (e) => e.ui);
}
function Dp(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function Rp(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Vt({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: Vt({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function In(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function _p(t) {
  return Zu(t.options.businessHours, t);
}
function Zi(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class Tp extends B {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return p("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, i = [], s = !0;
    for (let o of e) {
      let { buttonName: l, buttonClick: a, buttonText: d, buttonIcon: c, buttonHint: u } = o;
      if (l === "title")
        s = !1, i.push(p("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let h = l === n.activeButton, f = !n.isTodayEnabled && l === "today" || !n.isPrevEnabled && l === "prev" || !n.isNextEnabled && l === "next", v = [`fc-${l}-button`, r.getClass("button")];
        h && v.push(r.getClass("buttonActive")), i.push(p("button", { type: "button", title: typeof u == "function" ? u(n.navUnit) : u, disabled: f, "aria-pressed": h, className: v.join(" "), onClick: a }, d || (c ? p("span", { className: c, role: "img" }) : "")));
      }
    }
    if (i.length > 1) {
      let o = s && r.getClass("buttonGroup") || "";
      return p("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class Xi extends B {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, i, s, o = e.sectionWidgets, l = o.center;
    return o.left ? (r = !0, i = o.left) : i = o.start, o.right ? (r = !0, s = o.right) : s = o.end, p(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        r ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", l || []),
      this.renderSection("end", s || [])
    );
  }
  renderSection(e, n) {
    let { props: r } = this;
    return p(Tp, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class Np extends B {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, he(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: r } = e, i = [
      "fc-view-harness",
      r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], s = "", o = "";
    return r ? n.availableWidth !== null ? s = n.availableWidth / r : o = `${1 / r * 100}%` : s = e.height || "", p("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: o } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && // needed. but why?
    this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class xp extends Ze {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, o = qe(r);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let l = q(n.target, ".fc-event-forced-url"), a = l ? l.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new j(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), a && !n.defaultPrevented && (window.location.href = a);
      }
    }, this.destroy = ro(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class Ip extends Ze {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      qe(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = dd(
      e.el,
      ".fc-event",
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, r) {
    let { component: i } = this, { context: s } = i, o = qe(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new j(s, o.eventRange.def, o.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class kp extends Be {
  constructor() {
    super(...arguments), this.buildViewContext = R(vu), this.buildViewPropTransformers = R(Op), this.buildToolbarProps = R(Mp), this.headerRef = Y(), this.footerRef = Y(), this.interactionsStore = {}, this.state = {
      viewLabelId: sn()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = yf(e, n), o = [
        xp,
        Ip
      ].concat(this.props.pluginHooks.componentInteractions).map((l) => new l(r));
      this.interactionsStore[e.uid] = o, Qn[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Qn[e.uid];
    }, this.resizeRunner = new fr(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props: e } = this, { toolbarConfig: n, options: r } = e, i = this.buildToolbarProps(
      e.viewSpec,
      e.dateProfile,
      e.dateProfileGenerator,
      e.currentDate,
      dt(e.options.now, e.dateEnv),
      // TODO: use NowTimer????
      e.viewTitle
    ), s = !1, o = "", l;
    e.isHeightAuto || e.forPrint ? o = "" : r.height != null ? s = !0 : r.contentHeight != null ? o = r.contentHeight : l = Math.max(r.aspectRatio, 0.5);
    let a = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), d = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
    return p(
      pe.Provider,
      { value: a },
      n.header && p(Xi, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: d }, i)),
      p(
        Np,
        { liquid: s, height: o, aspectRatio: l, labeledById: d },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && p(Xi, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let r in n)
      n[r](e[r], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
    for (let i in r)
      n[i] !== e[i] && r[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
    return p(U, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: r } = e, i = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, s = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let l of s)
      Object.assign(i, l.transform(i, e));
    let o = r.component;
    return p(o, Object.assign({}, i));
  }
}
function Mp(t, e, n, r, i, s) {
  let o = n.build(i, void 0, !1), l = n.buildPrev(e, r, !1), a = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !ue(e.currentRange, i),
    isPrevEnabled: l.isValid,
    isNextEnabled: a.isValid
  };
}
function Op(t) {
  return t.map((e) => new e());
}
class Pp extends Ef {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
      switch (r.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (r) => {
      this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: r } = this;
        jt(() => {
          st(p(bf, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, o, l) => (this.setClassNames(i), this.setHeight(s), p(
            ho.Provider,
            { value: this.customContentRenderId },
            p(kp, Object.assign({ isHeightAuto: o, forPrint: l }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, st(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, td(e), this.el = e, this.renderRunner = new fr(this.handleRenderRequest), new yp({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    jt(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!Ae(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    to(this.el, "height", e);
  }
}
const Bp = parseInt(String(Mn.version).split(".")[0]), Hp = Bp < 18;
class hl extends zl {
  constructor() {
    super(...arguments), this.elRef = Wl(), this.isUpdating = !1, this.isUnmounting = !1, this.state = {
      customRenderingMap: /* @__PURE__ */ new Map()
    }, this.requestResize = () => {
      this.isUnmounting || (this.cancelResize(), this.resizeId = requestAnimationFrame(() => {
        this.doResize();
      }));
    };
  }
  render() {
    const e = [];
    for (const n of this.state.customRenderingMap.values())
      e.push(Mn.createElement(Lp, { key: n.id, customRendering: n }));
    return Mn.createElement("div", { ref: this.elRef }, e);
  }
  componentDidMount() {
    this.isUnmounting = !1;
    const e = new Sh();
    this.handleCustomRendering = e.handle.bind(e), this.calendar = new Pp(this.elRef.current, Object.assign(Object.assign({}, this.props), { handleCustomRendering: this.handleCustomRendering })), this.calendar.render();
    let n;
    e.subscribe((r) => {
      const i = Date.now(), s = !n;
      // don't call flushSync if React version already does sync rendering by default
      // guards against fatal errors:
      // https://github.com/fullcalendar/fullcalendar/issues/7448
      (Hp || //
      s || this.isUpdating || this.isUnmounting || i - n < 100 ? pl : Gl)(() => {
        this.setState({ customRenderingMap: r }, () => {
          n = i, s ? this.doResize() : this.requestResize();
        });
      });
    });
  }
  componentDidUpdate() {
    this.isUpdating = !0, this.calendar.resetOptions(Object.assign(Object.assign({}, this.props), { handleCustomRendering: this.handleCustomRendering })), this.isUpdating = !1;
  }
  componentWillUnmount() {
    this.isUnmounting = !0, this.cancelResize(), this.calendar.destroy();
  }
  doResize() {
    this.calendar.updateSize();
  }
  cancelResize() {
    this.resizeId !== void 0 && (cancelAnimationFrame(this.resizeId), this.resizeId = void 0);
  }
  getApi() {
    return this.calendar;
  }
}
hl.act = pl;
class Lp extends Vl {
  render() {
    const { customRendering: e } = this.props, { generatorMeta: n } = e, r = typeof n == "function" ? n(e.renderProps) : n;
    return ql(r, e.containerEl);
  }
}
function pl(t) {
  t();
}
const Up = "_container_mx4v9_1", Fp = "_calendarHeader_mx4v9_6", jp = "_addButton_mx4v9_13", zp = "_caseNumberSelect_mx4v9_24", Wp = "_InvitesBadgesContainer_mx4v9_32", St = {
  container: Up,
  calendarHeader: Fp,
  addButton: jp,
  caseNumberSelect: zp,
  InvitesBadgesContainer: Wp
};
class Vp extends ae {
  constructor() {
    super(...arguments), this.headerElRef = Y();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], o = $t(i.options);
    return e && s.push({
      type: "header",
      key: "header",
      isSticky: o,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), p(
      zt,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      p(Br, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: l } = this, a = !o.forPrint && $t(l.options), d = !o.forPrint && Xo(l.options), c = [];
    return e && c.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), c.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), d && c.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Xn
      }]
    }), p(
      zt,
      { elClasses: ["fc-daygrid"], viewSpec: l.viewSpec },
      p(s, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: c })
    );
  }
}
function At(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function Ct(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function Ji(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.row].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
const gl = z({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function ml(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class vl extends B {
  render() {
    let { props: e } = this;
    return p(Jo, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: gl, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class bl extends B {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || gl, o = xo(i, s, n, !0, e.defaultDisplayEventEnd);
    return p(Hr, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: ko(e.seg, n), defaultGenerator: Gp, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function Gp(t) {
  return p(
    U,
    null,
    p("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && p("div", { className: "fc-event-time" }, t.timeText),
    p("div", { className: "fc-event-title" }, t.event.title || p(U, null, " "))
  );
}
class qp extends B {
  constructor() {
    super(...arguments), this.compileSegs = R($p);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return p(nl, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return p(U, null, n.map((s) => {
        let o = s.eventRange.instance.instanceId;
        return p("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, ml(s) ? p(bl, Object.assign({ seg: s, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Se(s, e.todayRange))) : p(vl, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Se(s, e.todayRange))));
      }));
    } });
  }
}
function $p(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const Qp = z({ week: "narrow" });
class Yp extends ae {
  constructor() {
    super(...arguments), this.rootElRef = Y(), this.state = {
      dayNumberId: sn()
    }, this.handleRootEl = (e) => {
      he(this.rootElRef, e), he(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: o } = e, { date: l, dateProfile: a } = n;
    const d = n.showDayNumber && Xp(l, a.currentRange, o);
    return p(Ur, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: Zp, date: l, dateProfile: a, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: d, extraRenderProps: n.extraRenderProps }, (c, u) => p(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && p(tl, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: qt(e, l, "week"), date: l, defaultFormat: Qp }),
      !u.isDisabled && (n.showDayNumber || Fr(s) || n.forceDayTop) ? p(
        "div",
        { className: "fc-daygrid-day-top" },
        p(c, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, qt(e, l)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        p(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          p("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      p(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        p(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          p(qp, { allDayDate: l, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      p("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function Zp(t) {
  return t.dayNumberText || p(U, null, " ");
}
function Xp(t, e, n) {
  const { start: r, end: i } = e, s = Ce(i, -1), o = n.getYear(r), l = n.getMonth(r), a = n.getYear(s), d = n.getMonth(s);
  return !(o === a && l === d) && // first date in current view?
  (t.valueOf() === r.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function yl(t) {
  return t.eventRange.instance.instanceId + ":" + t.firstCol;
}
function El(t) {
  return yl(t) + ":" + t.lastCol;
}
function Jp(t, e, n, r, i, s, o) {
  let l = new tg((E) => {
    let C = t[E.index].eventRange.instance.instanceId + ":" + E.span.start + ":" + (E.span.end - 1);
    return i[C] || 1;
  });
  l.allowReslicing = !0, l.strictOrder = r, e === !0 || n === !0 ? (l.maxCoord = s, l.hiddenConsumes = !0) : typeof e == "number" ? l.maxStackCnt = e : typeof n == "number" && (l.maxStackCnt = n, l.hiddenConsumes = !0);
  let a = [], d = [];
  for (let E = 0; E < t.length; E += 1) {
    let C = t[E], w = El(C);
    i[w] != null ? a.push({
      index: E,
      span: {
        start: C.firstCol,
        end: C.lastCol + 1
      }
    }) : d.push(C);
  }
  let c = l.addSegs(a), u = l.toRects(), { singleColPlacements: h, multiColPlacements: f, leftoverMargins: v } = Kp(u, t, o), g = [], b = [];
  for (let E of d) {
    f[E.firstCol].push({
      seg: E,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let C = E.firstCol; C <= E.lastCol; C += 1)
      h[C].push({
        seg: ze(E, C, C + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let E = 0; E < o.length; E += 1)
    g.push(0);
  for (let E of c) {
    let C = t[E.index], w = E.span;
    f[w.start].push({
      seg: ze(C, w.start, w.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let T = w.start; T < w.end; T += 1)
      g[T] += 1, h[T].push({
        seg: ze(C, T, T + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let E = 0; E < o.length; E += 1)
    b.push(v[E]);
  return { singleColPlacements: h, multiColPlacements: f, moreCnts: g, moreMarginTops: b };
}
function Kp(t, e, n) {
  let r = eg(t, n.length), i = [], s = [], o = [];
  for (let l = 0; l < n.length; l += 1) {
    let a = r[l], d = [], c = 0, u = 0;
    for (let f of a) {
      let v = e[f.index];
      d.push({
        seg: ze(v, l, l + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: f.levelCoord - c
      }), c = f.levelCoord + f.thickness;
    }
    let h = [];
    c = 0, u = 0;
    for (let f of a) {
      let v = e[f.index], g = f.span.end - f.span.start > 1, b = f.span.start === l;
      u += f.levelCoord - c, c = f.levelCoord + f.thickness, g ? (u += f.thickness, b && h.push({
        seg: ze(v, f.span.start, f.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: f.levelCoord,
        marginTop: 0
      })) : b && (h.push({
        seg: ze(v, f.span.start, f.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: u
        // claim the margin
      }), u = 0);
    }
    i.push(d), s.push(h), o.push(u);
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: o };
}
function eg(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function ze(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, o = ke(s, {
    start: r[e].date,
    end: $(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === s.end.valueOf() });
}
class tg extends Fo {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[xe(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: o, touchingLevel: l, touchingLateral: a } = e;
    if (this.hiddenConsumes && o) {
      const d = xe(o);
      if (!s[d])
        if (this.allowReslicing) {
          const c = Object.assign(Object.assign({}, o), { span: Or(o.span, n.span) }), u = xe(c);
          s[u] = !0, i[l][a] = c, r.push(c), this.splitEntry(o, n, r);
        } else
          s[d] = !0, r.push(o);
    }
    super.handleInvalidInsertion(e, n, r);
  }
}
class Sl extends ae {
  constructor() {
    super(...arguments), this.cellElRefs = new ce(), this.frameElRefs = new ce(), this.fgElRefs = new ce(), this.segHarnessRefs = new ce(), this.rootElRef = Y(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, o = Ct(e.businessHourSegs, s), l = Ct(e.bgEventSegs, s), a = Ct(this.getHighlightSegs(), s), d = Ct(this.getMirrorSegs(), s), { singleColPlacements: c, multiColPlacements: u, moreCnts: h, moreMarginTops: f } = Jp(No(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), v = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return p(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((g, b) => {
        let E = this.renderFgSegs(b, e.forPrint ? c[b] : u[b], e.todayRange, v), C = this.renderFgSegs(b, ng(d[b], u), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return p(Yp, { key: g.key, elRef: this.cellElRefs.createRef(g.key), innerElRef: this.frameElRefs.createRef(g.key), dateProfile: e.dateProfile, date: g.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: g.extraRenderProps, extraDataAttrs: g.extraDataAttrs, extraClassNames: g.extraClassNames, extraDateSpan: g.extraDateSpan, moreCnt: h[b], moreMarginTop: f[b], singlePlacements: c[b], fgContentElRef: this.fgElRefs.createRef(g.key), fgContent: (
          // Fragment scopes the keys
          p(
            U,
            null,
            p(U, null, E),
            p(U, null, C)
          )
        ), bgContent: (
          // Fragment scopes the keys
          p(
            U,
            null,
            this.renderFillSegs(a[b], "highlight"),
            this.renderFillSegs(o[b], "non-business"),
            this.renderFillSegs(l[b], "bg-event")
          )
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!oe(e, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, r, i, s, o, l) {
    let { context: a } = this, { eventSelection: d } = this.props, { framePositions: c } = this.state, u = this.props.cells.length === 1, h = s || o || l, f = [];
    if (c)
      for (let v of n) {
        let { seg: g } = v, { instanceId: b } = g.eventRange.instance, E = v.isVisible && !i[b], C = v.isAbsolute, w = "", T = "";
        C && (a.isRtl ? (T = 0, w = c.lefts[g.lastCol] - c.lefts[g.firstCol]) : (w = 0, T = c.rights[g.firstCol] - c.rights[g.lastCol])), f.push(p("div", { className: "fc-daygrid-event-harness" + (C ? " fc-daygrid-event-harness-abs" : ""), key: yl(g), ref: h ? null : this.segHarnessRefs.createRef(El(g)), style: {
          visibility: E ? "" : "hidden",
          marginTop: C ? "" : v.marginTop,
          top: C ? v.absoluteTop : "",
          left: w,
          right: T
        } }, ml(g) ? p(bl, Object.assign({ seg: g, isDragging: s, isSelected: b === d, defaultDisplayEventEnd: u }, Se(g, r))) : p(vl, Object.assign({ seg: g, isDragging: s, isResizing: o, isDateSelecting: l, isSelected: b === d, defaultDisplayEventEnd: u }, Se(g, r)))));
      }
    return f;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, o = [];
    if (s)
      for (let l of e) {
        let a = r ? {
          right: 0,
          left: s.lefts[l.lastCol] - s.lefts[l.firstCol]
        } : {
          left: 0,
          right: s.rights[l.firstCol] - s.rights[l.lastCol]
        };
        o.push(p("div", { key: Io(l.eventRange), className: "fc-daygrid-bg-harness", style: a }, n === "bg-event" ? p(Ko, Object.assign({ seg: l }, Se(l, i))) : el(n)));
      }
    return p(U, {}, ...o);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let a = n.cells.map((d) => i.currentMap[d.key]);
        if (a.length) {
          let d = this.rootElRef.current, c = new $e(
            d,
            a,
            !0,
            // isHorizontal
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(c)) && this.setState({
            framePositions: new $e(
              d,
              a,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const s = this.state.segHeights, o = this.querySegHeights(), l = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, s), o),
        maxContentHeight: l ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let r in e) {
      let i = Math.round(e[r].getBoundingClientRect().height);
      n[r] = Math.max(n[r] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
Sl.addStateEquality({
  segHeights: oe
});
function ng(t, e) {
  if (!t.length)
    return [];
  let n = rg(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function rg(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class ig extends ae {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = R(At), this.splitBgEventSegs = R(At), this.splitFgEventSegs = R(At), this.splitDateSelectionSegs = R(At), this.splitEventDrag = R(Ji), this.splitEventResize = R(Ji), this.rowRefs = new ce();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitFgEventSegs(e.fgEventSegs, r), l = this.splitDateSelectionSegs(e.dateSelectionSegs, r), a = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r), c = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return p(ut, { unit: "day" }, (u, h) => p(U, null, e.cells.map((f, v) => p(Sl, {
      ref: this.rowRefs.createRef(v),
      key: f.length ? f[0].date.toISOString() : v,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: h,
      dateProfile: e.dateProfile,
      cells: f,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[v],
      eventSelection: e.eventSelection,
      bgEventSegs: s[v].filter(sg),
      fgEventSegs: o[v],
      dateSelectionSegs: l[v],
      eventDrag: a[v],
      eventResize: d[v],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: c,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const e = this.rowRefs.currentMap[0].getCellEls()[0], n = e ? e.closest(".fc-daygrid-body") : null;
      n && (this.rootEl = n, this.context.registerInteractiveComponent(this, {
        el: n,
        isHitComboAllowed: this.props.isHitComboAllowed
      }));
    }
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new $e(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new $e(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: r, rowPositions: i } = this, s = r.leftToIndex(e), o = i.topToIndex(n);
    if (o != null && s != null) {
      let l = this.props.cells[o][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(o, s), allDay: !0 }, l.extraDateSpan),
        dayEl: this.getCellEl(o, s),
        rect: {
          left: r.lefts[s],
          right: r.rights[s],
          top: i.tops[o],
          bottom: i.bottoms[o]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let r = this.props.cells[e][n].date, i = $(r, 1);
    return { start: r, end: i };
  }
}
function sg(t) {
  return t.eventRange.def.allDay;
}
class og extends ae {
  constructor() {
    super(...arguments), this.elRef = Y(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = e, s = r === !0 || n === !0;
    s && !i && (s = !1, n = null, r = null);
    let o = [
      "fc-daygrid-body",
      s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return p(
      "div",
      { ref: this.elRef, className: o.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      p(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        p(
          "tbody",
          { role: "presentation" },
          p(ig, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = lg(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function lg(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${jd(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${vr(e.currentDate)}"]`)), n;
}
class ag extends qo {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Al extends ae {
  constructor() {
    super(...arguments), this.slicer = new ag(), this.tableRef = Y();
  }
  render() {
    let { props: e, context: n } = this;
    return p(og, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class cg extends Vp {
  constructor() {
    super(...arguments), this.buildDayTableModel = R(dg), this.headerRef = Y(), this.tableRef = Y();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && p(Wo, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (l) => p(Al, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: l.tableColGroupNode, tableMinWidth: l.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: l.clientWidth, clientHeight: l.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, o);
  }
}
function dg(t, e) {
  let n = new Vo(t.renderRange, e);
  return new Go(n, /year|month|week/.test(t.currentRangeUnit));
}
class ug extends vo {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return fg({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function fg(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = Ri(s, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth($(n.end, -1))), l = Math.ceil(
      // could be partial weeks due to hiddenDays
      xd(o, i)
    );
    i = Ri(i, 6 - l);
  }
  return { start: r, end: i };
}
var hg = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
ur(hg);
var pg = ge({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: cg,
      dateProfileGeneratorClass: ug
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});
class gg extends Df {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(e) {
    return e.allDay ? ["allDay"] : ["timed"];
  }
  getKeysForEventDef(e) {
    return e.allDay ? tf(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const mg = z({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function Cl(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return p(pe.Consumer, null, (n) => {
    if (!t.isLabeled)
      return p("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: i, viewApi: s } = n, o = (
      // TODO: fully pre-parse
      i.slotLabelFormat == null ? mg : Array.isArray(i.slotLabelFormat) ? z(i.slotLabelFormat[0]) : z(i.slotLabelFormat)
    ), l = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: s,
      text: r.format(t.date, o)
    };
    return p(K, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: l, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: vg, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (a) => p(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      p(a, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function vg(t) {
  return t.text;
}
class bg extends B {
  render() {
    return this.props.slatMetas.map((e) => p(
      "tr",
      { key: e.key },
      p(Cl, Object.assign({}, e))
    ));
  }
}
const yg = z({ week: "short" }), Eg = 5;
class Sg extends ae {
  constructor() {
    super(...arguments), this.allDaySplitter = new gg(), this.headerElRef = Y(), this.rootElRef = Y(), this.scrollerElRef = Y(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: i } = this.props, s = i.renderRange, l = Pe(s.start, s.end) === 1 ? qt(this.context, s.start, "week") : {};
      return r.weekNumbers && e === "day" ? p(tl, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: yg }, (a) => p(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: n } },
        p(a, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: l })
      )) : p(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        p("div", { className: "fc-timegrid-axis-frame", style: { height: n } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: n, viewApi: r } = this.context, i = {
        text: n.allDayText,
        view: r
      };
      return (
        // TODO: make reusable hook. used in list view too
        p(K, { elTag: "td", elClasses: [
          "fc-timegrid-axis",
          "fc-scrollgrid-shrink"
        ], elAttrs: {
          "aria-hidden": !0
        }, renderProps: i, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: Ag, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (s) => p(
          "div",
          { className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            e == null ? " fc-timegrid-axis-frame-liquid" : ""
          ].join(" "), style: { height: e } },
          p(s, { elTag: "span", elClasses: [
            "fc-timegrid-axis-cushion",
            "fc-scrollgrid-shrink-cushion",
            "fc-scrollgrid-sync-inner"
          ] })
        ))
      );
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(e, n, r) {
    let { context: i, props: s } = this, o = [], l = $t(i.options);
    return e && o.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), n && (o.push({
      type: "body",
      key: "all-day",
      chunk: { content: n }
    }), o.push({
      type: "body",
      key: "all-day-divider",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        p(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          p("td", { className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded") })
        )
      )
    })), o.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!i.options.expandRows,
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: r
      }
    }), p(
      zt,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      p(Br, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: o })
    );
  }
  renderHScrollLayout(e, n, r, i, s, o, l) {
    let a = this.context.pluginHooks.scrollGridImpl;
    if (!a)
      throw new Error("No ScrollGrid implementation");
    let { context: d, props: c } = this, u = !c.forPrint && $t(d.options), h = !c.forPrint && Xo(d.options), f = [];
    e && f.push({
      type: "header",
      key: "header",
      isSticky: u,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (g) => p("tr", { role: "presentation" }, this.renderHeadAxis("day", g.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), n && (f.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (g) => p("tr", { role: "presentation" }, this.renderTableRowAxis(g.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: n
        }
      ]
    }), f.push({
      key: "all-day-divider",
      type: "body",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        p(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          p("td", { colSpan: 2, className: "fc-timegrid-divider " + d.theme.getClass("tableCellShaded") })
        )
      )
    }));
    let v = d.options.nowIndicator;
    return f.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!d.options.expandRows,
      chunks: [
        {
          key: "axis",
          content: (g) => (
            // TODO: make this now-indicator arrow more DRY with TimeColsContent
            p(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              p(
                "table",
                { "aria-hidden": !0, style: { height: g.expandRows ? g.clientHeight : "" } },
                g.tableColGroupNode,
                p(
                  "tbody",
                  null,
                  p(bg, { slatMetas: o })
                )
              ),
              p(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                p(ut, {
                  unit: v ? "minute" : "day"
                  /* hacky */
                }, (b) => {
                  let E = v && l && l.safeComputeTop(b);
                  return typeof E == "number" ? p(Lr, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: E }, isAxis: !0, date: b }) : null;
                })
              )
            )
          )
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: r
        }
      ]
    }), h && f.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: Xn
        },
        {
          key: "cols",
          content: Xn
        }
      ]
    }), p(
      zt,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: d.viewSpec },
      p(a, { liquid: !c.isHeightAuto && !c.forPrint, forPrint: c.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: i, minWidth: s }] }
      ], sections: f })
    );
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
    return (e === !0 || n === !0) && (e = void 0, n = Eg), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function Ag(t) {
  return t.text;
}
class Cg {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (ue(n.currentRange, e)) {
      let r = L(e), i = e.valueOf() - r.valueOf();
      if (i >= ne(n.slotMinTime) && i < ne(n.slotMaxTime))
        return this.computeTimeTop(M(i));
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(e, n) {
    return n || (n = L(e)), this.computeTimeTop(M(e.valueOf() - n.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - ne(r.slotMinTime)) / ne(this.slotDuration), o, l;
    return s = Math.max(0, s), s = Math.min(i, s), o = Math.floor(s), o = Math.min(o, i - 1), l = s - o, n.tops[o] + n.getHeight(o) * l;
  }
}
class wg extends B {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { slatElRefs: i } = e;
    return p("tbody", null, e.slatMetas.map((s, o) => {
      let l = {
        time: s.time,
        date: n.dateEnv.toDate(s.date),
        view: n.viewApi
      };
      return p(
        "tr",
        { key: s.key, ref: i.createRef(s.key) },
        e.axis && p(Cl, Object.assign({}, s)),
        p(K, { elTag: "td", elClasses: [
          "fc-timegrid-slot",
          "fc-timegrid-slot-lane",
          !s.isLabeled && "fc-timegrid-slot-minor"
        ], elAttrs: {
          "data-time": s.isoTimeStr
        }, renderProps: l, generatorName: "slotLaneContent", customGenerator: r.slotLaneContent, classNameGenerator: r.slotLaneClassNames, didMount: r.slotLaneDidMount, willUnmount: r.slotLaneWillUnmount })
      );
    }));
  }
}
class Dg extends B {
  constructor() {
    super(...arguments), this.rootElRef = Y(), this.slatElRefs = new ce();
  }
  render() {
    let { props: e, context: n } = this;
    return p(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      p(
        "table",
        { "aria-hidden": !0, className: n.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        p(wg, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
      )
    );
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    this.props.onCoords && this.props.onCoords(null);
  }
  updateSizing() {
    let { context: e, props: n } = this;
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new Cg(new $e(this.rootElRef.current, Rg(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function Rg(t, e) {
  return e.map((n) => t[n.key]);
}
function Je(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function Ki(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.col].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
class _g extends B {
  render() {
    let { props: e } = this;
    return p(nl, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => Dl(e.hiddenSegs, e), defaultGenerator: Tg, forceTimed: !0 }, (n) => p(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function Tg(t) {
  return t.shortText;
}
function Ng(t, e, n) {
  let r = new Fo();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let i = r.addSegs(t), s = Lf(i), o = xg(r);
  return o = Og(o, 1), { segRects: Pg(o), hiddenGroups: s };
}
function xg(t) {
  const { entriesByLevel: e } = t, n = zr((r, i) => r + ":" + i, (r, i) => {
    let s = Mg(t, r, i), o = es(s, n), l = e[r][i];
    return [
      Object.assign(Object.assign({}, l), { nextLevelNodes: o[0] }),
      l.thickness + o[1]
      // the pressure builds
    ];
  });
  return es(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function es(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: i } = t, s = r, o = [];
  for (; s < i; )
    o.push(e(n, s)), s += 1;
  return o.sort(Ig), [
    o.map(kg),
    o[0][1]
    // first item's pressure
  ];
}
function Ig(t, e) {
  return e[1] - t[1];
}
function kg(t) {
  return t[0];
}
function Mg(t, e, n) {
  let { levelCoords: r, entriesByLevel: i } = t, s = i[e][n], o = r[e] + s.thickness, l = r.length, a = e;
  for (; a < l && r[a] < o; a += 1)
    ;
  for (; a < l; a += 1) {
    let d = i[a], c, u = Zn(d, s.span.start, Yn), h = u[0] + u[1], f = h;
    for (
      ;
      // loop through entries that horizontally intersect
      (c = d[f]) && // but not past the whole seg list
      c.span.start < s.span.end;
    )
      f += 1;
    if (h < f)
      return { level: a, lateralStart: h, lateralEnd: f };
  }
  return null;
}
function Og(t, e) {
  const n = zr((r, i, s) => xe(r), (r, i, s) => {
    let { nextLevelNodes: o, thickness: l } = r, a = l + s, d = l / a, c, u = [];
    if (!o.length)
      c = e;
    else
      for (let f of o)
        if (c === void 0) {
          let v = n(f, i, a);
          c = v[0], u.push(v[1]);
        } else {
          let v = n(f, c, 0);
          u.push(v[1]);
        }
    let h = (c - i) * d;
    return [c - h, Object.assign(Object.assign({}, r), { thickness: h, nextLevelNodes: u })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function Pg(t) {
  let e = [];
  const n = zr((i, s, o) => xe(i), (i, s, o) => {
    let l = Object.assign(Object.assign({}, i), {
      levelCoord: s,
      stackDepth: o,
      stackForward: 0
    });
    return e.push(l), l.stackForward = r(i.nextLevelNodes, s + i.thickness, o + 1) + 1;
  });
  function r(i, s, o) {
    let l = 0;
    for (let a of i)
      l = Math.max(n(a, s, o), l);
    return l;
  }
  return r(t, 0, 0), e;
}
function zr(t, e) {
  const n = {};
  return (...r) => {
    let i = t(...r);
    return i in n ? n[i] : n[i] = e(...r);
  };
}
function ts(t, e, n = null, r = 0) {
  let i = [];
  if (n)
    for (let s = 0; s < t.length; s += 1) {
      let o = t[s], l = n.computeDateTop(o.start, e), a = Math.max(
        l + (r || 0),
        // :(
        n.computeDateTop(o.end, e)
      );
      i.push({
        start: Math.round(l),
        end: Math.round(a)
        //
      });
    }
  return i;
}
function Bg(t, e, n, r) {
  let i = [], s = [];
  for (let d = 0; d < t.length; d += 1) {
    let c = e[d];
    c ? i.push({
      index: d,
      thickness: 1,
      span: c
    }) : s.push(t[d]);
  }
  let { segRects: o, hiddenGroups: l } = Ng(i, n, r), a = [];
  for (let d of o)
    a.push({
      seg: t[d.index],
      rect: d
    });
  for (let d of s)
    a.push({ seg: d, rect: null });
  return { segPlacements: a, hiddenGroups: l };
}
const Hg = z({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class wl extends B {
  render() {
    return p(Jo, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: Hg }));
  }
}
class Lg extends B {
  constructor() {
    super(...arguments), this.sortEventSegs = R(No);
  }
  // TODO: memoize event-placement?
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = r.selectMirror, s = (
      // yuck
      e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || []
    ), o = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    ), l = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
    return p(Ur, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (a) => p(
      "div",
      { className: "fc-timegrid-col-frame" },
      p(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      p("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(l, o, !1, !1, !1)),
      p("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, "mirror")),
      p("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      Fr(r) && p(a, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, i, s, o) {
    let { props: l } = this;
    return l.forPrint ? Dl(e, l) : this.renderPositionedFgSegs(e, n, r, i, s, o);
  }
  renderPositionedFgSegs(e, n, r, i, s, o) {
    let { eventMaxStack: l, eventShortHeight: a, eventOrderStrict: d, eventMinHeight: c } = this.context.options, { date: u, slatCoords: h, eventSelection: f, todayRange: v, nowDate: g } = this.props, b = r || i || s, E = ts(e, u, h, c), { segPlacements: C, hiddenGroups: w } = Bg(e, E, d, l);
    return p(
      U,
      null,
      this.renderHiddenGroups(w, e),
      C.map((T) => {
        let { seg: F, rect: P } = T, H = F.eventRange.instance.instanceId, I = b || !!(!n[H] && P), ee = kn(P && P.span), De = !b && P ? this.computeSegHStyle(P) : { left: 0, right: 0 }, _ = !!P && P.stackForward > 0, Q = !!P && P.span.end - P.span.start < a;
        return p(
          "div",
          { className: "fc-timegrid-event-harness" + (_ ? " fc-timegrid-event-harness-inset" : ""), key: o || H, style: Object.assign(Object.assign({ visibility: I ? "" : "hidden" }, ee), De) },
          p(wl, Object.assign({ seg: F, isDragging: r, isResizing: i, isDateSelecting: s, isSelected: H === f, isShort: Q }, Se(F, v, g)))
        );
      })
    );
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: l, eventDrag: a, eventResize: d } = this.props;
    return p(U, null, e.map((c) => {
      let u = kn(c.span), h = Ug(c.entries, n);
      return p(_g, { key: lo(rl(h)), hiddenSegs: h, top: u.top, bottom: u.bottom, extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: l, eventDrag: a, eventResize: d });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: i } = this, o = ts(e, r.date, r.slatCoords, i.options.eventMinHeight).map((l, a) => {
      let d = e[a];
      return p("div", { key: Io(d.eventRange), className: "fc-timegrid-bg-harness", style: kn(l) }, n === "bg-event" ? p(Ko, Object.assign({ seg: d }, Se(d, r.todayRange, r.nowDate))) : el(n));
    });
    return p(U, null, o);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((i, s) => p(
      Lr,
      {
        // key doesn't matter. will only ever be one
        key: s,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: n.computeDateTop(i.start, r)
        },
        isAxis: !1,
        date: r
      }
    )) : null;
  }
  computeSegHStyle(e) {
    let { isRtl: n, options: r } = this.context, i = r.slotEventOverlap, s = e.levelCoord, o = e.levelCoord + e.thickness, l, a;
    i && (o = Math.min(1, s + (o - s) * 2)), n ? (l = 1 - o, a = s) : (l = s, a = 1 - o);
    let d = {
      zIndex: e.stackDepth + 1,
      left: l * 100 + "%",
      right: a * 100 + "%"
    };
    return i && !e.stackForward && (d[n ? "marginLeft" : "marginRight"] = 10 * 2), d;
  }
}
function Dl(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
  let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return p(U, null, t.map((l) => {
    let a = l.eventRange.instance.instanceId;
    return p(
      "div",
      { key: a, style: { visibility: o[a] ? "hidden" : "" } },
      p(wl, Object.assign({ seg: l, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: a === r, isShort: !1 }, Se(l, e, n)))
    );
  }));
}
function kn(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function Ug(t, e) {
  return t.map((n) => e[n.index]);
}
class Fg extends B {
  constructor() {
    super(...arguments), this.splitFgEventSegs = R(Je), this.splitBgEventSegs = R(Je), this.splitBusinessHourSegs = R(Je), this.splitNowIndicatorSegs = R(Je), this.splitDateSelectionSegs = R(Je), this.splitEventDrag = R(Ki), this.splitEventResize = R(Ki), this.rootElRef = Y(), this.cellElRefs = new ce();
  }
  render() {
    let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), i = e.cells.length, s = this.splitFgEventSegs(e.fgEventSegs, i), o = this.splitBgEventSegs(e.bgEventSegs, i), l = this.splitBusinessHourSegs(e.businessHourSegs, i), a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i), d = this.splitDateSelectionSegs(e.dateSelectionSegs, i), c = this.splitEventDrag(e.eventDrag, i), u = this.splitEventResize(e.eventResize, i);
    return p(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      p(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        p(
          "tbody",
          { role: "presentation" },
          p(
            "tr",
            { role: "row" },
            e.axis && p(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              p(
                "div",
                { className: "fc-timegrid-col-frame" },
                p("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && p(Lr, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((h, f) => p(Lg, { key: h.key, elRef: this.cellElRefs.createRef(h.key), dateProfile: e.dateProfile, date: h.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: h.extraRenderProps, extraDataAttrs: h.extraDataAttrs, extraClassNames: h.extraClassNames, extraDateSpan: h.extraDateSpan, fgEventSegs: s[f], bgEventSegs: o[f], businessHourSegs: l[f], nowIndicatorSegs: a[f], dateSelectionSegs: d[f], eventDrag: c[f], eventResize: u[f], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
          )
        )
      )
    );
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let { props: e } = this;
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new $e(
      this.rootElRef.current,
      jg(this.cellElRefs.currentMap, e.cells),
      !0,
      // horizontal
      !1
    ));
  }
}
function jg(t, e) {
  return e.map((n) => t[n.key]);
}
class zg extends ae {
  constructor() {
    super(...arguments), this.processSlotOptions = R(Wg), this.state = {
      slatCoords: null
    }, this.handleRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e,
        isHitComboAllowed: this.props.isHitComboAllowed
      }) : this.context.unregisterInteractiveComponent(this);
    }, this.handleScrollRequest = (e) => {
      let { onScrollTopRequest: n } = this.props, { slatCoords: r } = this.state;
      if (n && r) {
        if (e.time) {
          let i = r.computeTimeTop(e.time);
          i = Math.ceil(i), i && (i += 1), n(i);
        }
        return !0;
      }
      return !1;
    }, this.handleColCoords = (e) => {
      this.colCoords = e;
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
    };
  }
  render() {
    let { props: e, state: n } = this;
    return p(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      p(Dg, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      p(Fg, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
    );
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(e) {
    this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(e, n) {
    let { dateEnv: r, options: i } = this.context, { colCoords: s } = this, { dateProfile: o } = this.props, { slatCoords: l } = this.state, { snapDuration: a, snapsPerSlot: d } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), c = s.leftToIndex(e), u = l.positions.topToIndex(n);
    if (c != null && u != null) {
      let h = this.props.cells[c], f = l.positions.tops[u], v = l.positions.getHeight(u), g = (n - f) / v, b = Math.floor(g * d), E = u * d + b, C = this.props.cells[c].date, w = zn(o.slotMinTime, Rd(a, E)), T = r.add(C, w), F = r.add(T, a);
      return {
        dateProfile: o,
        dateSpan: Object.assign({ range: { start: T, end: F }, allDay: !1 }, h.extraDateSpan),
        dayEl: s.els[c],
        rect: {
          left: s.lefts[c],
          right: s.rights[c],
          top: f,
          bottom: f + v
        },
        layer: 0
      };
    }
    return null;
  }
}
function Wg(t, e) {
  let n = e || t, r = mr(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class Vg extends qo {
  sliceRange(e, n) {
    let r = [];
    for (let i = 0; i < n.length; i += 1) {
      let s = ke(e, n[i]);
      s && r.push({
        start: s.start,
        end: s.end,
        isStart: s.start.valueOf() === e.start.valueOf(),
        isEnd: s.end.valueOf() === e.end.valueOf(),
        col: i
      });
    }
    return r;
  }
}
class Gg extends ae {
  constructor() {
    super(...arguments), this.buildDayRanges = R(qg), this.slicer = new Vg(), this.timeColsRef = Y();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: o } = n.options, l = this.buildDayRanges(i, r, n.dateEnv);
    return p(ut, { unit: s ? "minute" : "day" }, (a, d) => p(zg, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, l), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: a, nowIndicatorSegs: s && this.slicer.sliceNowDate(a, r, o, n, l), todayRange: d, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function qg(t, e, n) {
  let r = [];
  for (let i of t.headerDates)
    r.push({
      start: n.add(i, e.slotMinTime),
      end: n.add(i, e.slotMaxTime)
    });
  return r;
}
const ns = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function $g(t, e, n, r, i) {
  let s = /* @__PURE__ */ new Date(0), o = t, l = M(0), a = n || Qg(r), d = [];
  for (; ne(o) < ne(e); ) {
    let c = i.add(s, o), u = mr(l, a) !== null;
    d.push({
      date: c,
      time: o,
      key: c.toISOString(),
      isoTimeStr: zd(c),
      isLabeled: u
    }), o = zn(o, r), l = zn(l, r);
  }
  return d;
}
function Qg(t) {
  let e, n, r;
  for (e = ns.length - 1; e >= 0; e -= 1)
    if (n = M(ns[e]), r = mr(n, t), r !== null && r > 1)
      return n;
  return t;
}
class Yg extends Sg {
  constructor() {
    super(...arguments), this.buildTimeColsModel = R(Zg), this.buildSlatMetas = R($g);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: i } = this, { dateProfile: s } = i, o = this.buildTimeColsModel(s, r), l = this.allDaySplitter.splitProps(i), a = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: d } = e, c = !d, u = d, h = e.dayHeaders && p(Wo, { dates: o.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: c ? this.renderHeadAxis : null }), f = e.allDaySlot !== !1 && ((g) => p(Al, Object.assign({}, l.allDay, { dateProfile: s, dayTableModel: o, nextDayThreshold: e.nextDayThreshold, tableMinWidth: g.tableMinWidth, colGroupNode: g.tableColGroupNode, renderRowIntro: c ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: g.clientWidth, clientHeight: g.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), v = (g) => p(Gg, Object.assign({}, l.timed, { dayTableModel: o, dateProfile: s, axis: c, slotDuration: e.slotDuration, slatMetas: a, forPrint: i.forPrint, tableColGroupNode: g.tableColGroupNode, tableMinWidth: g.tableMinWidth, clientWidth: g.clientWidth, clientHeight: g.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: g.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return u ? this.renderHScrollLayout(h, f, v, o.colCnt, d, a, this.state.slatCoords) : this.renderSimpleLayout(h, f, v);
  }
}
function Zg(t, e) {
  let n = new Vo(t.renderRange, e);
  return new Go(n, !1);
}
var Xg = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
ur(Xg);
const Jg = {
  allDaySlot: Boolean
};
var Kg = ge({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: Jg,
  views: {
    timeGrid: {
      component: Yg,
      usesMinMaxTime: !0,
      allDaySlot: !0,
      slotDuration: "00:30:00",
      slotEventOverlap: !0
      // a bad name. confused with overlap/constraint system
    },
    timeGridDay: {
      type: "timeGrid",
      duration: { days: 1 }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: { weeks: 1 }
    }
  }
});
Pr.touchMouseIgnoreWait = 500;
let Kn = 0, Qt = 0, er = !1;
class Rl {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && em(n) && this.tryStart(n)) {
        let r = this.createEventFromMouse(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
      }
    }, this.handleMouseMove = (n) => {
      let r = this.createEventFromMouse(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleMouseUp = (n) => {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(n)), this.cleanup();
    }, this.handleTouchStart = (n) => {
      if (this.tryStart(n)) {
        this.isTouchDragging = !0;
        let r = this.createEventFromTouch(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r);
        let i = n.target;
        this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove), i.addEventListener("touchend", this.handleTouchEnd), i.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = (n) => {
      let r = this.createEventFromTouch(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleTouchEnd = (n) => {
      if (this.isDragging) {
        let r = n.target;
        r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, tm();
      }
    }, this.handleTouchScroll = () => {
      this.wasTouchScroll = !0;
    }, this.handleScroll = (n) => {
      if (!this.shouldIgnoreMove) {
        let r = window.pageXOffset - this.prevScrollX + this.prevPageX, i = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX: r,
          pageY: i,
          deltaX: r - this.origPageX,
          deltaY: i - this.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new cn(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), nm();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), rm();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), r = e.target;
    return n && (!this.handleSelector || q(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    er = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? q(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Kn || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (er = !0);
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }
  recordCoords(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }
  destroyScrollWatch() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(e, n) {
    let r = 0, i = 0;
    return n ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (r = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: r,
      deltaY: i
    };
  }
  createEventFromTouch(e, n) {
    let r = e.touches, i, s, o = 0, l = 0;
    return r && r.length ? (i = r[0].pageX, s = r[0].pageY) : (i = e.pageX, s = e.pageY), n ? (this.origPageX = i, this.origPageY = s) : (o = i - this.origPageX, l = s - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: s,
      deltaX: o,
      deltaY: l
    };
  }
}
function em(t) {
  return t.button === 0 && !t.ctrlKey;
}
function tm() {
  Kn += 1, setTimeout(() => {
    Kn -= 1;
  }, Pr.touchMouseIgnoreWait);
}
function nm() {
  Qt += 1, Qt === 1 && window.addEventListener("touchmove", _l, { passive: !1 });
}
function rm() {
  Qt -= 1, Qt || window.removeEventListener("touchmove", _l, { passive: !1 });
}
function _l(t) {
  er && t.preventDefault();
}
class im {
  constructor() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  start(e, n, r) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.pageXOffset, this.origScreenY = r - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }
  handleMove(e, n) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = n - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }
  // can be called before start
  setIsVisible(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }
  // always async
  stop(e, n) {
    let r = () => {
      this.cleanup(), n();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
  }
  doRevertAnimation(e, n) {
    let r = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    r.style.transition = "top " + n + "ms,left " + n + "ms", et(r, {
      left: i.left,
      top: i.top
    }), ud(r, () => {
      r.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (hr(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && et(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.classList.add("fc-event-dragging"), et(n, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(n)), n;
  }
}
class Tl extends Mr {
  constructor(e, n) {
    super(), this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
    }, this.scrollController = e, this.doesListening = n, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
  }
  destroy() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(e) {
    this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }
  setScrollLeft(e) {
    this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
}
class Nl extends Tl {
  constructor(e, n) {
    super(new Bf(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return Of(this.scrollController.el);
  }
}
class sm extends Tl {
  constructor(e) {
    super(new Hf(), e);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}
const rs = typeof performance == "function" ? performance.now : Date.now;
class om {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let n = rs();
          this.handleSide(e, (n - this.msSinceRequest) / 1e3), this.requestAnimation(n);
        } else
          this.isAnimating = !1;
      }
    };
  }
  start(e, n, r) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(r), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, n));
  }
  handleMove(e, n) {
    if (this.isEnabled) {
      let r = e - window.pageXOffset, i = n - window.pageYOffset, s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : r - this.pointerScreenX;
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = r, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(rs()));
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (let e of this.scrollCaches)
        e.destroy();
      this.scrollCaches = null;
    }
  }
  requestAnimation(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }
  handleSide(e, n) {
    let { scrollCache: r } = e, { edgeThreshold: i } = this, s = i - e.distance, o = (
      // the closer to the edge, the faster we scroll
      s * s / (i * i) * // quadratic
      this.maxVelocity * n
    ), l = 1;
    switch (e.name) {
      case "left":
        l = -1;
      case "right":
        r.setScrollLeft(r.getScrollLeft() + o * l);
        break;
      case "top":
        l = -1;
      case "bottom":
        r.setScrollTop(r.getScrollTop() + o * l);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(e, n) {
    let { edgeThreshold: r } = this, i = null, s = this.scrollCaches || [];
    for (let o of s) {
      let l = o.clientRect, a = e - l.left, d = l.right - e, c = n - l.top, u = l.bottom - n;
      a >= 0 && d >= 0 && c >= 0 && u >= 0 && (c <= r && this.everMovedUp && o.canScrollUp() && (!i || i.distance > c) && (i = { scrollCache: o, name: "top", distance: c }), u <= r && this.everMovedDown && o.canScrollDown() && (!i || i.distance > u) && (i = { scrollCache: o, name: "bottom", distance: u }), a <= r && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > a) && (i = { scrollCache: o, name: "left", distance: a }), d <= r && this.everMovedRight && o.canScrollRight() && (!i || i.distance > d) && (i = { scrollCache: o, name: "right", distance: d }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new sm(!1) : new Nl(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let r of this.scrollQuery)
      typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
    return n;
  }
}
class ft extends Ff {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, fd(document.body), pd(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let s = this.minDistance, o, { deltaX: l, deltaY: a } = i;
          o = l * l + a * a, o >= s * s && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, hd(document.body), gd(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let r = this.pointer = new Rl(e);
    r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new im(), this.autoScroller = new om();
  }
  destroy() {
    this.pointer.destroy(), this.onPointerUp({});
  }
  startDelay(e) {
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
      this.delayTimeoutId = null, this.handleDelayEnd(e);
    }, this.delay) : this.handleDelayEnd(e);
  }
  handleDelayEnd(e) {
    this.isDelayEnded = !0, this.tryStartDrag(e);
  }
  handleDistanceSurpassed(e) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(e);
  }
  tryStartDrag(e) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }
  tryStopDrag(e) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
  }
  stopDrag(e) {
    this.isDragging = !1, this.emitter.trigger("dragend", e);
  }
  // fill in the implementations...
  setIgnoreMove(e) {
    this.pointer.shouldIgnoreMove = e;
  }
  setMirrorIsVisible(e) {
    this.mirror.setIsVisible(e);
  }
  setMirrorNeedsRevert(e) {
    this.mirrorNeedsRevert = e;
  }
  setAutoScrollEnabled(e) {
    this.autoScroller.isEnabled = e;
  }
}
class lm {
  constructor(e) {
    this.origRect = kr(e), this.scrollCaches = Uo(e).map((n) => new Nl(n, !0));
  }
  destroy() {
    for (let e of this.scrollCaches)
      e.destroy();
  }
  computeLeft() {
    let e = this.origRect.left;
    for (let n of this.scrollCaches)
      e += n.origScrollLeft - n.getScrollLeft();
    return e;
  }
  computeTop() {
    let e = this.origRect.top;
    for (let n of this.scrollCaches)
      e += n.origScrollTop - n.getScrollTop();
    return e;
  }
  isWithinClipping(e, n) {
    let r = { left: e, top: n };
    for (let i of this.scrollCaches)
      if (!am(i.getEventTarget()) && !Sf(r, i.clientRect))
        return !1;
    return !0;
  }
}
function am(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class dn {
  constructor(e, n) {
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (r) => {
      let { dragging: i } = this;
      this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(r), this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1), this.emitter.trigger("pointerdown", r)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = (r) => {
      this.emitter.trigger("dragstart", r), this.handleMove(r, !0);
    }, this.handleDragMove = (r) => {
      this.emitter.trigger("dragmove", r), this.handleMove(r);
    }, this.handlePointerUp = (r) => {
      this.releaseHits(), this.emitter.trigger("pointerup", r);
    }, this.handleDragEnd = (r) => {
      this.movingHit && this.emitter.trigger("hitupdate", null, !0, r), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", r);
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new cn();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, r = n, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = kr(i), r = Af(r, s));
    let o = this.initialHit = this.queryHitForOffset(r.left, r.top);
    if (o) {
      if (this.useSubjectCenter && s) {
        let l = Bo(s, o.rect);
        l && (r = Cf(l));
      }
      this.coordAdjust = wf(r, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !un(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = fe(this.droppableStore, (e) => (e.component.prepareHits(), new lm(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let n in e)
      e[n].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, n) {
    let { droppableStore: r, offsetTrackers: i } = this, s = null;
    for (let o in r) {
      let l = r[o].component, a = i[o];
      if (a && // wasn't destroyed mid-drag
      a.isWithinClipping(e, n)) {
        let d = a.computeLeft(), c = a.computeTop(), u = e - d, h = n - c, { origRect: f } = a, v = f.right - f.left, g = f.bottom - f.top;
        if (
          // must be within the element's bounds
          u >= 0 && u < v && h >= 0 && h < g
        ) {
          let b = l.queryHit(u, h, v, g);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          ln(b.dateProfile.activeRange, b.dateSpan.range) && (!s || b.layer > s.layer) && (b.componentId = o, b.context = l.context, b.rect.left += d, b.rect.right += d, b.rect.top += c, b.rect.bottom += c, s = b);
        }
      }
    }
    return s;
  }
}
function un(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : uf(t.dateSpan, e.dateSpan);
}
function xl(t, e) {
  let n = {};
  for (let r of e.pluginHooks.datePointTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, cm(t, e.dateEnv)), n;
}
function cm(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class dm extends Ze {
  constructor(e) {
    super(e), this.handlePointerDown = (r) => {
      let { dragging: i } = this, s = r.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (r) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: o, finalHit: l } = this.hitDragging;
        if (o && l && un(o, l)) {
          let { context: a } = i, d = Object.assign(Object.assign({}, xl(o.dateSpan, a)), { dayEl: o.dayEl, jsEvent: r.origEvent, view: a.viewApi || a.calendarApi.view });
          a.emitter.trigger("dateClick", d);
        }
      }
    }, this.dragging = new ft(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new dn(this.dragging, xr(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class um extends Ze {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: l, dragging: a } = this, { options: d } = l.context, c = d.selectable && l.isValidDateDownEl(o.origEvent.target);
      a.setIgnoreMove(!c), a.delay = o.isTouch ? fm(l) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, l) => {
      let { context: a } = this.component, d = null, c = !1;
      if (o) {
        let u = this.hitDragging.initialHit;
        o.componentId === u.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(u, o) || (d = hm(u, o, a.pluginHooks.dateSelectionTransformers)), (!d || !qf(d, o.dateProfile, a)) && (c = !0, d = null);
      }
      d ? a.dispatch({ type: "SELECT_DATES", selection: d }) : l || a.dispatch({ type: "UNSELECT_DATES" }), c ? pr() : gr(), l || (this.dragSelection = d);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (Ro(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: r } = n.context, i = this.dragging = new ft(e.el);
    i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new dn(this.dragging, xr(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function fm(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function hm(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = [
    r.range.start,
    r.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(Ed);
  let o = {};
  for (let l of n) {
    let a = l(t, e);
    if (a === !1)
      return null;
    a && Object.assign(o, a);
  }
  return o.range = { start: s[0], end: s[3] }, o.allDay = r.allDay, o;
}
class ht extends Ze {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let l = o.origEvent.target, { component: a, dragging: d } = this, { mirror: c } = d, { options: u } = a.context, h = a.context;
      this.subjectEl = o.subjectEl;
      let f = this.subjectSeg = qe(o.subjectEl), g = (this.eventRange = f.eventRange).instance.instanceId;
      this.relevantEvents = Rr(h.getCurrentData().eventStore, g), d.minDistance = o.isTouch ? 0 : u.eventDragMinDistance, d.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && g !== a.props.eventSelection ? gm(a) : null, u.fixedMirrorParent ? c.parentNode = u.fixedMirrorParent : c.parentNode = q(l, ".fc"), c.revertDuration = u.dragRevertDuration;
      let b = a.isValidSegDownEl(l) && !q(l, ".fc-event-resizer");
      d.setIgnoreMove(!b), this.isDragging = b && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let l = this.component.context, a = this.eventRange, d = a.instance.instanceId;
      o.isTouch ? d !== this.component.props.eventSelection && l.dispatch({ type: "SELECT_EVENT", eventInstanceId: d }) : l.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (l.calendarApi.unselect(o), l.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new j(l, a.def, a.instance),
        jsEvent: o.origEvent,
        view: l.viewApi
      }));
    }, this.handleHitUpdate = (o, l) => {
      if (!this.isDragging)
        return;
      let a = this.relevantEvents, d = this.hitDragging.initialHit, c = this.component.context, u = null, h = null, f = null, v = !1, g = {
        affectedEvents: a,
        mutatedEvents: J(),
        isEvent: !0
      };
      if (o) {
        u = o.context;
        let b = u.options;
        c === u || b.editable && b.droppable ? (h = pm(d, o, u.getCurrentData().pluginHooks.eventDragMutationMassagers), h && (f = Nr(a, u.getCurrentData().eventUiBases, h, u), g.mutatedEvents = f, $o(g, o.dateProfile, u) || (v = !0, h = null, f = null, g.mutatedEvents = J()))) : u = null;
      }
      this.displayDrag(u, g), v ? pr() : gr(), l || (c === u && // TODO: write test for this
      un(d, o) && (h = null), this.dragging.setMirrorNeedsRevert(!h), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = u, this.validMutation = h, this.mutatedRelevantEvents = f);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let l = this.component.context, a = l.viewApi, { receivingContext: d, validMutation: c } = this, u = this.eventRange.def, h = this.eventRange.instance, f = new j(l, u, h), v = this.relevantEvents, g = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), l.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: f,
          jsEvent: o.origEvent,
          view: a
        }), c) {
          if (d === l) {
            let E = new j(l, g.defs[u.defId], h ? g.instances[h.instanceId] : null);
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let C = {
              oldEvent: f,
              event: E,
              relatedEvents: Ne(g, l, h),
              revert() {
                l.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: v
                  // the pre-change data
                });
              }
            }, w = {};
            for (let T of l.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(w, T(c, l));
            l.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, C), w), { el: o.subjectEl, delta: c.datesDelta, jsEvent: o.origEvent, view: a })), l.emitter.trigger("eventChange", C);
          } else if (d) {
            let E = {
              event: f,
              relatedEvents: Ne(v, l, h),
              revert() {
                l.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: v
                });
              }
            };
            l.emitter.trigger("eventLeave", Object.assign(Object.assign({}, E), { draggedEl: o.subjectEl, view: a })), l.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: v
            }), l.emitter.trigger("eventRemove", E);
            let C = g.defs[u.defId], w = g.instances[h.instanceId], T = new j(d, C, w);
            d.dispatch({
              type: "MERGE_EVENTS",
              eventStore: g
            });
            let F = {
              event: T,
              relatedEvents: Ne(g, d, w),
              revert() {
                d.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: g
                });
              }
            };
            d.emitter.trigger("eventAdd", F), o.isTouch && d.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: h.instanceId
            }), d.emitter.trigger("drop", Object.assign(Object.assign({}, xl(b.dateSpan, d)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: b.context.viewApi })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, F), { draggedEl: o.subjectEl, view: b.context.viewApi }));
          }
        } else
          l.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: r } = n.context, i = this.dragging = new ft(e.el);
    i.pointer.selector = ht.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new dn(this.dragging, Qn);
    s.useSubjectCenter = e.useEventCenter, s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp), s.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(e, n) {
    let r = this.component.context, i = this.receivingContext;
    i && i !== e && (i === r ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: J(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }
  clearDrag() {
    let e = this.component.context, { receivingContext: n } = this;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== n && e.dispatch({ type: "UNSET_EVENT_DRAG" });
  }
  cleanup() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }
}
ht.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function pm(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = r.range.start, o = i.range.start, l = {};
  r.allDay !== i.allDay && (l.allDay = i.allDay, l.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = L(s)));
  let a = Ue(s, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  a.milliseconds && (l.allDay = !1);
  let d = {
    datesDelta: a,
    standardProps: l
  };
  for (let c of n)
    c(d, t, e);
  return d;
}
function gm(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class mm extends Ze {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: o } = this, l = this.querySegEl(s), a = qe(l), d = this.eventRange = a.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: o } = this.component, l = this.eventRange;
      this.relevantEvents = Rr(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let a = this.querySegEl(s);
      this.draggingSegEl = a, this.draggingSeg = qe(a), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: a,
        event: new j(o, l.def, l.instance),
        jsEvent: s.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (s, o, l) => {
      let { context: a } = this.component, d = this.relevantEvents, c = this.hitDragging.initialHit, u = this.eventRange.instance, h = null, f = null, v = !1, g = {
        affectedEvents: d,
        mutatedEvents: J(),
        isEvent: !0
      };
      s && (s.componentId === c.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(c, s) || (h = vm(c, s, l.subjectEl.classList.contains("fc-event-resizer-start"), u.range))), h && (f = Nr(d, a.getCurrentData().eventUiBases, h, a), g.mutatedEvents = f, $o(g, s.dateProfile, a) || (v = !0, h = null, f = null, g.mutatedEvents = null)), f ? a.dispatch({
        type: "SET_EVENT_RESIZE",
        state: g
      }) : a.dispatch({ type: "UNSET_EVENT_RESIZE" }), v ? pr() : gr(), o || (h && un(c, s) && (h = null), this.validMutation = h, this.mutatedRelevantEvents = f);
    }, this.handleDragEnd = (s) => {
      let { context: o } = this.component, l = this.eventRange.def, a = this.eventRange.instance, d = new j(o, l, a), c = this.relevantEvents, u = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: d,
        jsEvent: s.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let h = new j(o, u.defs[l.defId], a ? u.instances[a.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: u
        });
        let f = {
          oldEvent: d,
          event: h,
          relatedEvents: Ne(u, o, a),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: c
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, f), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || M(0), endDelta: this.validMutation.endDelta || M(0), jsEvent: s.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", f);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, r = this.dragging = new ft(e.el);
    r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new dn(this.dragging, xr(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return q(e.subjectEl, ".fc-event");
  }
}
function vm(t, e, n, r) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, o = e.dateSpan.range.start, l = Ue(s, o, i, t.largeUnit);
  if (n) {
    if (i.add(r.start, l) < r.end)
      return { startDelta: l };
  } else if (i.add(r.end, l) > r.start)
    return { endDelta: l };
  return null;
}
class bm {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (r) => {
      r.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (r) => {
      let i = this.context.options.unselectCancel, s = no(r.origEvent);
      this.matchesCancel = !!q(s, i), this.matchesEvent = !!q(s, ht.SELECTOR);
    }, this.onDocumentPointerUp = (r) => {
      let { context: i } = this, { documentPointer: s } = this, o = i.getCurrentData();
      if (!s.wasTouchScroll) {
        if (o.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let l = i.options.unselectAuto;
          l && (!l || !this.matchesCancel) && i.calendarApi.unselect(r);
        }
        o.eventSelection && // an existing event selected?
        !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let n = this.documentPointer = new Rl(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const ym = {
  fixedMirrorParent: y
}, Em = {
  dateClick: y,
  eventDragStart: y,
  eventDragStop: y,
  eventDrop: y,
  eventResizeStart: y,
  eventResizeStop: y,
  eventResize: y,
  drop: y,
  eventReceive: y,
  eventLeave: y
};
Pr.dataAttrPrefix = "";
var Sm = ge({
  name: "@fullcalendar/interaction",
  componentInteractions: [dm, um, ht, mm],
  calendarInteractions: [bm],
  elementDraggingImpl: ft,
  optionRefiners: ym,
  listenerRefiners: Em
});
function Am(t) {
  var v;
  const [e, n] = V([
    { title: "Meeting", start: /* @__PURE__ */ new Date() }
  ]), [r, i] = V(
    {
      caseNumber: "",
      title: "",
      lawyerIds: []
    }
  ), s = {
    hour: "2-digit",
    minute: "2-digit",
    meridiem: !1
  }, [o, l] = V([]);
  function a(g) {
    return /* @__PURE__ */ A(jl, { children: [
      /* @__PURE__ */ m("div", { children: /* @__PURE__ */ A("b", { children: [
        g.timeText,
        " "
      ] }) }),
      /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m("i", { children: g.event.title }) })
    ] });
  }
  Zt(() => {
    k.post("/court-cases/getAllCases", {
      accessToken: sessionStorage.getItem("access_token") || ""
    }).then((g) => {
      console.log(g), l(g.data);
      const b = [];
      o.forEach((E) => {
      }), n(b);
    });
  });
  const d = (g) => {
    i({
      ...r,
      title: g.target.value
    });
  }, c = (g) => {
    i({
      ...r,
      date: new Date(g.target.value)
    });
  }, u = (g) => {
    i({
      ...r,
      caseNumber: g.target.value
    });
  }, h = (g) => {
    var b;
    i({
      ...r,
      lawyerIds: (b = r.lawyerIds) == null ? void 0 : b.concat([g.target.value])
    });
  }, f = () => {
    console.log(r);
  };
  return /* @__PURE__ */ A("div", { className: St.container, children: [
    /* @__PURE__ */ A("div", { className: St.calendarHeader, children: [
      /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m("h1", { children: "Demo App" }) }),
      /* @__PURE__ */ m("div", { className: St.addButton, children: /* @__PURE__ */ m(
        "span",
        {
          className: "material-symbols-outlined",
          "data-bs-toggle": "offcanvas",
          "data-bs-target": "#offcanvasWithBothOptions",
          children: "add"
        }
      ) })
    ] }),
    /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m(
      hl,
      {
        plugins: [pg, Kg, Sm],
        initialView: "dayGridMonth",
        weekends: !1,
        events: e,
        eventContent: a,
        eventTimeFormat: s,
        height: "92vh"
      }
    ) }),
    /* @__PURE__ */ A(
      "div",
      {
        className: "offcanvas offcanvas-end",
        "data-bs-scroll": "true",
        tabIndex: -1,
        id: "offcanvasWithBothOptions",
        children: [
          /* @__PURE__ */ A("div", { className: "offcanvas-header", children: [
            /* @__PURE__ */ m("h5", { className: "offcanvas-title", id: "offcanvasWithBothOptionsLabel", children: "Backdrop with scrolling" }),
            /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "offcanvas",
                "aria-label": "Close"
              }
            )
          ] }),
          /* @__PURE__ */ A("div", { className: "offcanvas-body", children: [
            /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
              /* @__PURE__ */ m("label", { htmlFor: "caseNumber", children: "Case Number" }),
              /* @__PURE__ */ A(
                "select",
                {
                  name: "caseNumber",
                  id: "caseNumber",
                  className: "form-control",
                  onChange: u,
                  children: [
                    /* @__PURE__ */ m("option", { defaultChecked: !0, children: "---Select option---" }),
                    o.map((g, b) => /* @__PURE__ */ A("option", { value: g.caseNumber, children: [
                      g.caseNumber,
                      " - ",
                      g.plaintiff,
                      " vs",
                      " ",
                      g.defendant
                    ] }, b))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
              /* @__PURE__ */ m("label", { htmlFor: "plaintiff", children: "Title" }),
              /* @__PURE__ */ m(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  id: "eventTitle",
                  placeholder: "Enter event title",
                  onChange: d
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
              /* @__PURE__ */ m("label", { htmlFor: "lawyer", children: "Date" }),
              /* @__PURE__ */ m(
                "input",
                {
                  id: "startDate",
                  className: "form-control mt-2",
                  type: "datetime-local",
                  onChange: c
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
              /* @__PURE__ */ m("label", { htmlFor: "invites", children: "Invite" }),
              /* @__PURE__ */ A(
                "select",
                {
                  name: "invites",
                  id: "invites",
                  className: "form-control",
                  onChange: h,
                  children: [
                    /* @__PURE__ */ m("option", { defaultChecked: !0, children: "---Select option---" }),
                    /* @__PURE__ */ m("option", { value: "test1", children: "Test 1" }),
                    /* @__PURE__ */ m("option", { value: "test2", children: "Test 2" }),
                    /* @__PURE__ */ m("option", { value: "test3", children: "Test 3" }),
                    o.map((g, b) => /* @__PURE__ */ A("option", { value: g.caseNumber, children: [
                      g.caseNumber,
                      " - ",
                      g.plaintiff,
                      " vs",
                      " ",
                      g.defendant
                    ] }, b))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: St.InvitesBadgesContainer, children: [
              /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m("span", { className: "badge rounded-pill bg-primary", children: "Primary" }) }),
              (v = r.lawyerIds) == null ? void 0 : v.map((g) => /* @__PURE__ */ m("div", { children: /* @__PURE__ */ m("span", { className: "badge rounded-pill bg-primary", children: g }) }))
            ] }),
            /* @__PURE__ */ m("div", { className: "form-group mt-4", children: /* @__PURE__ */ m("button", { className: "btn btn-outline-dark", onClick: f, children: "Add Event" }) })
          ] })
        ]
      }
    )
  ] });
}
const Cm = {};
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var tr;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(tr || (tr = {}));
function W(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
function Qe(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function Il(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
    let r = t.indexOf("?");
    r >= 0 && (e.search = t.substr(r), t = t.substr(0, r)), t && (e.pathname = t);
  }
  return e;
}
var is;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(is || (is = {}));
function wm(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? Il(e) : e, i = Um(r.pathname || "/", n);
  if (i == null)
    return null;
  let s = kl(t);
  Dm(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l)
    o = Om(
      s[l],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Hm(i)
    );
  return o;
}
function kl(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s
    };
    a.relativePath.startsWith("/") && (W(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let d = We([r, a.relativePath]), c = n.concat(a);
    s.children && s.children.length > 0 && (W(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')
    ), kl(s.children, e, c, d)), !(s.path == null && !s.index) && e.push({
      path: d,
      score: km(d, s.index),
      routesMeta: c
    });
  };
  return t.forEach((s, o) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      i(s, o);
    else
      for (let a of Ml(s.path))
        i(s, o, a);
  }), e;
}
function Ml(t) {
  let e = t.split("/");
  if (e.length === 0)
    return [];
  let [n, ...r] = e, i = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [s, ""] : [s];
  let o = Ml(r.join("/")), l = [];
  return l.push(...o.map((a) => a === "" ? s : [s, a].join("/"))), i && l.push(...o), l.map((a) => t.startsWith("/") && a === "" ? "/" : a);
}
function Dm(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : Mm(e.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Rm = /^:\w+$/, _m = 3, Tm = 2, Nm = 1, xm = 10, Im = -2, ss = (t) => t === "*";
function km(t, e) {
  let n = t.split("/"), r = n.length;
  return n.some(ss) && (r += Im), e && (r += Tm), n.filter((i) => !ss(i)).reduce((i, s) => i + (Rm.test(s) ? _m : s === "" ? Nm : xm), r);
}
function Mm(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - e[e.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Om(t, e) {
  let {
    routesMeta: n
  } = t, r = {}, i = "/", s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o], a = o === n.length - 1, d = i === "/" ? e : e.slice(i.length) || "/", c = Pm({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: a
    }, d);
    if (!c)
      return null;
    Object.assign(r, c.params);
    let u = l.route;
    s.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: We([i, c.pathname]),
      pathnameBase: Fm(We([i, c.pathnameBase])),
      route: u
    }), c.pathnameBase !== "/" && (i = We([i, c.pathnameBase]));
  }
  return s;
}
function Pm(t, e) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Bm(t.path, t.caseSensitive, t.end), i = e.match(n);
  if (!i)
    return null;
  let s = i[0], o = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: r.reduce((d, c, u) => {
      if (c === "*") {
        let h = l[u] || "";
        o = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return d[c] = Lm(l[u] || "", c), d;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t
  };
}
function Bm(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !0), Qe(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (o, l) => (r.push(l), "/([^\\/]+)"));
  return t.endsWith("*") ? (r.push("*"), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), r];
}
function Hm(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return Qe(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
  }
}
function Lm(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return Qe(!1, 'The value for the URL param "' + e + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), t;
  }
}
function Um(t, e) {
  if (e === "/")
    return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length, r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
const We = (t) => t.join("/").replace(/\/\/+/g, "/"), Fm = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function jm(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
const Ol = ["post", "put", "patch", "delete"];
new Set(Ol);
const zm = ["get", ...Ol];
new Set(zm);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, nr.apply(this, arguments);
}
const Pl = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Pl.displayName = "DataRouter");
const Bl = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Bl.displayName = "DataRouterState");
const Wm = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Wm.displayName = "Await");
const Hl = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Hl.displayName = "Navigation");
const fn = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (fn.displayName = "Location");
const pt = /* @__PURE__ */ x.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (pt.displayName = "Route");
const Wr = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Wr.displayName = "RouteError");
function Ll() {
  return x.useContext(fn) != null;
}
function Vm() {
  return Ll() || (process.env.NODE_ENV !== "production" ? W(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : W(!1)), x.useContext(fn).location;
}
function Gm(t, e) {
  return qm(t, e);
}
function qm(t, e, n) {
  Ll() || (process.env.NODE_ENV !== "production" ? W(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : W(!1));
  let {
    navigator: r
  } = x.useContext(Hl), {
    matches: i
  } = x.useContext(pt), s = i[i.length - 1], o = s ? s.params : {}, l = s ? s.pathname : "/", a = s ? s.pathnameBase : "/", d = s && s.route;
  if (process.env.NODE_ENV !== "production") {
    let E = d && d.path || "";
    nv(l, !d || E.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + l + '" (under <Route path="' + E + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + E + '"> to <Route ') + ('path="' + (E === "/" ? "*" : E + "/*") + '">.'));
  }
  let c = Vm(), u;
  if (e) {
    var h;
    let E = typeof e == "string" ? Il(e) : e;
    a === "/" || (h = E.pathname) != null && h.startsWith(a) || (process.env.NODE_ENV !== "production" ? W(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + a + '" ') + ('but pathname "' + E.pathname + '" was given in the `location` prop.')) : W(!1)), u = E;
  } else
    u = c;
  let f = u.pathname || "/", v = a === "/" ? f : f.slice(a.length) || "/", g = wm(t, {
    pathname: v
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Qe(d || g != null, 'No routes matched location "' + u.pathname + u.search + u.hash + '" '), process.env.NODE_ENV !== "production" && Qe(g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0, 'Matched leaf route at location "' + u.pathname + u.search + u.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let b = Xm(g && g.map((E) => Object.assign({}, E, {
    params: Object.assign({}, o, E.params),
    pathname: We([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(E.pathname).pathname : E.pathname
    ]),
    pathnameBase: E.pathnameBase === "/" ? a : We([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(E.pathnameBase).pathname : E.pathnameBase
    ])
  })), i, n);
  return e && b ? /* @__PURE__ */ x.createElement(fn.Provider, {
    value: {
      location: nr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, u),
      navigationType: tr.Pop
    }
  }, b) : b;
}
function $m() {
  let t = tv(), e = jm(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, r = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: r
  }, s = {
    padding: "2px 4px",
    backgroundColor: r
  }, o = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", t), o = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ x.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ x.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ x.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), n ? /* @__PURE__ */ x.createElement("pre", {
    style: i
  }, n) : null, o);
}
const Qm = /* @__PURE__ */ x.createElement($m, null);
class Ym extends x.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error || n.error,
      location: n.location,
      revalidation: e.revalidation || n.revalidation
    };
  }
  componentDidCatch(e, n) {
    console.error("React Router caught the following error during render", e, n);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ x.createElement(pt.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ x.createElement(Wr.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Zm(t) {
  let {
    routeContext: e,
    match: n,
    children: r
  } = t, i = x.useContext(Pl);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ x.createElement(pt.Provider, {
    value: e
  }, r);
}
function Xm(t, e, n) {
  var r;
  if (e === void 0 && (e = []), n === void 0 && (n = null), t == null) {
    var i;
    if ((i = n) != null && i.errors)
      t = n.matches;
    else
      return null;
  }
  let s = t, o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let l = s.findIndex((a) => a.route.id && (o == null ? void 0 : o[a.route.id]));
    l >= 0 || (process.env.NODE_ENV !== "production" ? W(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(o).join(",")) : W(!1)), s = s.slice(0, Math.min(s.length, l + 1));
  }
  return s.reduceRight((l, a, d) => {
    let c = a.route.id ? o == null ? void 0 : o[a.route.id] : null, u = null;
    n && (u = a.route.errorElement || Qm);
    let h = e.concat(s.slice(0, d + 1)), f = () => {
      let v;
      return c ? v = u : a.route.Component ? v = /* @__PURE__ */ x.createElement(a.route.Component, null) : a.route.element ? v = a.route.element : v = l, /* @__PURE__ */ x.createElement(Zm, {
        match: a,
        routeContext: {
          outlet: l,
          matches: h,
          isDataRoute: n != null
        },
        children: v
      });
    };
    return n && (a.route.ErrorBoundary || a.route.errorElement || d === 0) ? /* @__PURE__ */ x.createElement(Ym, {
      location: n.location,
      revalidation: n.revalidation,
      component: u,
      error: c,
      children: f(),
      routeContext: {
        outlet: null,
        matches: h,
        isDataRoute: !0
      }
    }) : f();
  }, null);
}
var os;
(function(t) {
  t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate";
})(os || (os = {}));
var Yt;
(function(t) {
  t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId";
})(Yt || (Yt = {}));
function Ul(t) {
  return t + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Jm(t) {
  let e = x.useContext(Bl);
  return e || (process.env.NODE_ENV !== "production" ? W(!1, Ul(t)) : W(!1)), e;
}
function Km(t) {
  let e = x.useContext(pt);
  return e || (process.env.NODE_ENV !== "production" ? W(!1, Ul(t)) : W(!1)), e;
}
function ev(t) {
  let e = Km(t), n = e.matches[e.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? W(!1, t + ' can only be used on routes that contain a unique "id"') : W(!1)), n.route.id;
}
function tv() {
  var t;
  let e = x.useContext(Wr), n = Jm(Yt.UseRouteError), r = ev(Yt.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
const ls = {};
function nv(t, e, n) {
  !e && !ls[t] && (ls[t] = !0, process.env.NODE_ENV !== "production" && Qe(!1, n));
}
function ve(t) {
  process.env.NODE_ENV !== "production" ? W(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : W(!1);
}
function rv(t) {
  let {
    children: e,
    location: n
  } = t;
  return Gm(rr(e), n);
}
var as;
(function(t) {
  t[t.pending = 0] = "pending", t[t.success = 1] = "success", t[t.error = 2] = "error";
})(as || (as = {}));
new Promise(() => {
});
function rr(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return x.Children.forEach(t, (r, i) => {
    if (!/* @__PURE__ */ x.isValidElement(r))
      return;
    let s = [...e, i];
    if (r.type === x.Fragment) {
      n.push.apply(n, rr(r.props.children, s));
      return;
    }
    r.type !== ve && (process.env.NODE_ENV !== "production" ? W(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : W(!1)), !r.props.index || !r.props.children || (process.env.NODE_ENV !== "production" ? W(!1, "An index route cannot have child routes.") : W(!1));
    let o = {
      id: r.props.id || s.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (o.children = rr(r.props.children, s)), n.push(o);
  }), n;
}
const iv = "_container_1q3gx_2", G = {
  container: iv,
  "navigation-container": "_navigation-container_1q3gx_6",
  "naviagtion-item-text": "_naviagtion-item-text_1q3gx_18",
  "navigation-item": "_navigation-item_1q3gx_22",
  "navigation-item-container": "_navigation-item-container_1q3gx_27",
  "material-symbols-outlined": "_material-symbols-outlined_1q3gx_56"
}, sv = "_container_9hdue_1", cs = {
  container: sv,
  "login-container": "_login-container_9hdue_9"
};
class ov {
}
function lv(t) {
  const [e, n] = V(
    new ov()
  ), r = (o) => {
    n({
      ...e,
      email: o.target.value
    });
  }, i = (o) => {
    n({
      ...e,
      password: o.target.value
    });
  }, s = async () => {
    k.post("/authentication/login", e).then(function(o) {
      console.log(o.data), sessionStorage.setItem("access_token", o.data.accessToken), sessionStorage.setItem("refresh_token", o.data.refreshToken);
    }).catch(function(o) {
      console.log(o);
    });
  };
  return /* @__PURE__ */ m("div", { className: cs.container, children: /* @__PURE__ */ A("div", { className: cs["login-container"], children: [
    /* @__PURE__ */ A("div", { className: "mb-3 mt-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "email", className: "form-label", children: "Email:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "email",
          className: "form-control",
          id: "email",
          placeholder: "Enter email",
          name: "email",
          value: e.email,
          onChange: r
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "mb-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "pwd", className: "form-label", children: "Password:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "password",
          className: "form-control",
          id: "pwd",
          placeholder: "Enter password",
          name: "pswd",
          value: e.password,
          onChange: i
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "form-check mb-3", children: /* @__PURE__ */ A("label", { className: "form-check-label", children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          name: "remember"
        }
      ),
      " ",
      "Remember me"
    ] }) }),
    /* @__PURE__ */ m("div", { className: "form-check mb-3", children: /* @__PURE__ */ m("a", { href: "/register", children: "Don't have an account? Sign Up" }) }),
    /* @__PURE__ */ m(
      "button",
      {
        type: "submit",
        className: "btn btn-primary",
        onClick: s,
        children: "Submit"
      }
    )
  ] }) });
}
const av = "_container_1skuw_1", ds = {
  container: av,
  "register-container": "_register-container_1skuw_9"
};
class cv {
}
function dv(t) {
  const [e, n] = V(new cv()), [r, i] = V(""), s = (f) => {
    n({
      ...e,
      name: f.target.value
    });
  }, o = (f) => {
    n({
      ...e,
      email: f.target.value
    });
  }, l = (f) => {
    n({
      ...e,
      password: f.target.value
    });
  }, a = (f) => {
    n({
      ...e,
      surname: f.target.value
    });
  }, d = (f) => {
    n({
      ...e,
      mobileNumber: f.target.value
    });
  }, c = (f) => {
    i(f.target.value);
  }, u = async () => {
    if (r !== e.password)
      return h("Passwords do not match");
    k.post("/authentication/register", e).then((f) => {
      console.log(f);
    });
  }, h = (f) => {
    alert(f);
  };
  return /* @__PURE__ */ m("div", { className: ds.container, children: /* @__PURE__ */ A("div", { className: ds["register-container"], children: [
    /* @__PURE__ */ A("div", { className: "mb-3 mt-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "email", className: "form-label", children: "Email:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "email",
          className: "form-control",
          id: "email",
          placeholder: "Enter email",
          name: "email",
          value: e.email,
          onChange: o
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "mb-3 mt-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "name", className: "form-label", children: "Name:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "name",
          placeholder: "Enter name",
          name: "name",
          value: e.name,
          onChange: s
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "mb-3 mt-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "surname", className: "form-label", children: "Surname:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "surname",
          placeholder: "Enter surname",
          name: "surname",
          value: e.surname,
          onChange: a
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "mb-3 mt-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "mobile", className: "form-label", children: "Mobile:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "number",
          className: "form-control",
          id: "mobile",
          placeholder: "Enter mobile number",
          name: "text",
          value: e.mobileNumber,
          onChange: d
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "mb-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "pwd", className: "form-label", children: "Password:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "password",
          className: "form-control",
          id: "pwd",
          placeholder: "Enter password",
          name: "password",
          value: e.password,
          onChange: l
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "mb-3", children: [
      /* @__PURE__ */ m("label", { htmlFor: "pwd", className: "form-label", children: "Confirm Password:" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "password",
          className: "form-control",
          id: "passwordConfirm",
          placeholder: "Confirm password",
          name: "pswd",
          value: r,
          onChange: c
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "form-check mb-3", children: /* @__PURE__ */ A("label", { className: "form-check-label", children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          name: "remember"
        }
      ),
      " ",
      "Remember me"
    ] }) }),
    /* @__PURE__ */ m("div", { className: "form-check mb-3", children: /* @__PURE__ */ m("a", { href: "/register", children: "Have an account already? Login" }) }),
    /* @__PURE__ */ m(
      "button",
      {
        type: "submit",
        className: "btn btn-primary",
        onClick: u,
        children: "Submit"
      }
    )
  ] }) });
}
const uv = "_courtCaseTable_jugfw_2", fv = "_container_jugfw_6", hv = "_courtCasesHeader_jugfw_10", pv = "_sort_jugfw_16", gv = "_addCase_jugfw_25", mv = "_filter_jugfw_29", vv = "_search_jugfw_33", bv = "_sortButton_jugfw_1", yv = "_filterButton_jugfw_1", Ev = "_addButton_jugfw_1", re = {
  courtCaseTable: uv,
  container: fv,
  courtCasesHeader: hv,
  sort: pv,
  addCase: gv,
  filter: mv,
  search: vv,
  sortButton: bv,
  filterButton: yv,
  addButton: Ev
};
function Sv(t) {
  const [e, n] = V([]), [r, i] = V("");
  Zt(() => {
    k.post("/court-cases/getAllCases", {
      accessToken: sessionStorage.getItem("access_token") || ""
    }).then((o) => {
      n(o.data);
    }).catch((o) => {
      console.log(o);
    });
  }, []);
  const s = (o) => {
    i(o.target.value), console.log(r);
  };
  return /* @__PURE__ */ A("div", { className: re.container, children: [
    /* @__PURE__ */ A("div", { className: re.courtCasesHeader, children: [
      /* @__PURE__ */ m("div", { className: re.search, children: /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: re.searchInput,
          name: "searchInput",
          onChange: s,
          placeholder: "Search cases"
        }
      ) }),
      /* @__PURE__ */ m("div", { className: re.addCase, children: /* @__PURE__ */ m("a", { href: "/add-court-case", children: /* @__PURE__ */ m(
        "span",
        {
          className: "material-symbols-outlined",
          id: re.addButton,
          children: "add"
        }
      ) }) }),
      /* @__PURE__ */ m("div", { className: re.filter, children: /* @__PURE__ */ m(
        "span",
        {
          className: "material-symbols-outlined",
          id: re.filterButton,
          children: "filter_alt"
        }
      ) }),
      /* @__PURE__ */ m("div", { className: re.sort, children: /* @__PURE__ */ m("span", { className: "material-symbols-outlined", id: re.sortButton, children: "sort" }) })
    ] }),
    /* @__PURE__ */ A("table", { className: "table table-hover courtCaseTable", children: [
      /* @__PURE__ */ m("thead", { children: /* @__PURE__ */ A("tr", { children: [
        /* @__PURE__ */ m("th", { scope: "col", children: "Case Number" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Defendent" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Plaintiff" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Status" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Type" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Next Date" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Created" }),
        /* @__PURE__ */ m("th", { scope: "col", children: "Outcome" })
      ] }) }),
      /* @__PURE__ */ m("tbody", { children: e.map((o, l) => /* @__PURE__ */ A("tr", { children: [
        /* @__PURE__ */ m("th", { scope: "row", children: o.caseNumber }),
        /* @__PURE__ */ m("td", { children: o.defendant }),
        /* @__PURE__ */ m("td", { children: o.plaintiff }),
        /* @__PURE__ */ m("td", { children: o.status }),
        /* @__PURE__ */ m("td", { children: o.type }),
        /* @__PURE__ */ m("td", { children: "INSERT NEXT DATE HERE" }),
        /* @__PURE__ */ m("td", { children: o.dateCreated.toLocaleString().split("T")[0] }),
        /* @__PURE__ */ m("td", { children: o.outcome })
      ] }, l)) })
    ] })
  ] });
}
const Av = "_container_7gvqc_1", us = {
  container: Av,
  "add-case-container": "_add-case-container_7gvqc_6",
  "input-container": "_input-container_7gvqc_14"
}, Cv = [
  "CRIMINAL",
  "CIVIL",
  "FAMILY",
  "JUVENILE",
  "ROAD ACCIDENT FUND",
  "LABOUR"
], wv = [
  "OPEN",
  "CLOSED",
  "APPEALED",
  "IN PROGRESS",
  "WITHDRAWN",
  "SETTLED"
];
function Dv() {
  return Cv;
}
function Rv() {
  return wv;
}
function _v(t) {
  const e = Rv(), n = Dv(), [r, i] = V(new Ms()), s = async () => {
    const f = nn(
      sessionStorage.getItem("access_token") || ""
    );
    r.userId = f.userId, await k.post("/court-cases/add", r).then((v) => {
      console.log(v);
    });
  }, o = (f) => {
    i({
      ...r,
      caseNumber: f.target.value
    });
  }, l = (f) => {
    i({
      ...r,
      plaintiff: f.target.value
    });
  }, a = (f) => {
    i({
      ...r,
      defendant: f.target.value
    });
  }, d = (f) => {
    i({
      ...r,
      location: f.target.value
    });
  }, c = (f) => {
    i({
      ...r,
      status: f.target.value
    });
  }, u = (f) => {
    i({
      ...r,
      type: f.target.value
    });
  }, h = (f) => {
    i({
      ...r,
      lawyerId: f.target.value
    });
  };
  return /* @__PURE__ */ m("div", { className: us["add-case-container"], children: /* @__PURE__ */ m("div", { className: "card", children: /* @__PURE__ */ m("div", { className: "card-body", children: /* @__PURE__ */ A("div", { className: us["input-container"], children: [
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "caseNumber", children: "Case Number" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "caseNumber",
          placeholder: "Enter case number",
          onChange: o
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "plaintiff", children: "Plaintiff" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "plaintiff",
          placeholder: "Enter plaintiff full name",
          onChange: l
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "defendant", children: "Defendant" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "defendant",
          placeholder: "Enter defendant full name",
          onChange: a
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "defendant", children: "Location" }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "location",
          placeholder: "Enter defendant full name",
          onChange: d
        }
      )
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "caseStatus", children: "Case Status" }),
      /* @__PURE__ */ m("select", { className: "form-control", onChange: c, children: e.map((f, v) => /* @__PURE__ */ m("option", { value: f, children: f }, v)) })
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "caseStatus", children: "Type" }),
      /* @__PURE__ */ m("select", { className: "form-control", onChange: u, children: n.map((f, v) => /* @__PURE__ */ m("option", { value: f, children: f }, v)) })
    ] }),
    /* @__PURE__ */ A("div", { className: "form-group mt-2", children: [
      /* @__PURE__ */ m("label", { htmlFor: "lawyer", children: "Instructing Attorney" }),
      /* @__PURE__ */ A("select", { className: "form-control", onChange: h, children: [
        /* @__PURE__ */ m("option", { value: "1", children: "TEST 1" }),
        /* @__PURE__ */ m("option", { value: "2", children: "TEST 2" }),
        /* @__PURE__ */ m("option", { value: "3", children: "TEST 3" })
      ] })
    ] }),
    /* @__PURE__ */ m("div", { className: "mt-3", children: /* @__PURE__ */ m(
      "button",
      {
        type: "submit",
        className: "btn btn-primary",
        onClick: s,
        children: "Submit"
      }
    ) })
  ] }) }) }) });
}
function Tv(t) {
  return /* @__PURE__ */ A("div", { className: G.container, children: [
    /* @__PURE__ */ m("div", { className: G["navigation-container"], children: /* @__PURE__ */ A("div", { className: G["navigation-item-container"], children: [
      /* @__PURE__ */ m("div", { className: "display-5", children: "CMS" }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: "home"
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: "Dashboard" })
      ] }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: "business_center"
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: /* @__PURE__ */ m("a", { href: "/court-cases", children: "Case Management" }) })
      ] }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: "calendar_month"
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: /* @__PURE__ */ m("a", { href: "/calendar", children: "Calendar" }) })
      ] }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: "folder"
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: "Document Management" })
      ] }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: "payments"
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: /* @__PURE__ */ m("a", { href: "invoices", children: "Invoices" }) })
      ] }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: "person"
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: /* @__PURE__ */ m("a", { href: "invoices", children: "Profile" }) })
      ] }),
      /* @__PURE__ */ A("div", { className: G["navigation-item"], children: [
        /* @__PURE__ */ m(
          "span",
          {
            className: "material-symbols-outlined",
            style: { fontSize: "50px", paddingRight: "1vw" },
            children: /* @__PURE__ */ m("a", { href: "/login", children: "Logout" })
          }
        ),
        /* @__PURE__ */ m("div", { className: G["naviagtion-item-text"], children: "Logout" })
      ] })
    ] }) }),
    /* @__PURE__ */ A(rv, { children: [
      /* @__PURE__ */ m(ve, { path: "/login", element: /* @__PURE__ */ m(lv, {}) }),
      /* @__PURE__ */ m(ve, { path: "/register", element: /* @__PURE__ */ m(dv, {}) }),
      /* @__PURE__ */ m(ve, { path: "/court-cases", element: /* @__PURE__ */ m(Sv, {}) }),
      /* @__PURE__ */ m(ve, { path: "/add-court-case", element: /* @__PURE__ */ m(_v, {}) }),
      /* @__PURE__ */ m(ve, { path: "/calendar", element: /* @__PURE__ */ m(Am, {}) }),
      /* @__PURE__ */ m(ve, { path: "/test", element: /* @__PURE__ */ m(Oc, {}) }),
      /* @__PURE__ */ m(ve, { path: "/invoices", element: /* @__PURE__ */ m(kc, {}) })
    ] })
  ] });
}
function kv(t) {
  k.defaults.baseURL = "http://localhost:3000/api";
  const e = [];
  let n = !1;
  return k.interceptors.request.use(
    function(r) {
      let i;
      return r.headers.isRetryRequest ? i = sessionStorage.getItem("refresh_token") : i = sessionStorage.getItem("access_token"), i && (r.headers.Authorization = `Bearer ${i}`), r;
    },
    function(r) {
      return console.log(r), Promise.reject(r);
    }
  ), k.interceptors.response.use(void 0, async function(r) {
    if (console.log(r.config), r.response.status === 401 && r.config && !r.config.__isRetryRequest) {
      console.log("Getting refresh token"), r.config.__isRetryRequest = !0;
      const i = r.config, s = sessionStorage.getItem("refresh_token");
      if (!n && (n = !0, s)) {
        const o = nn(s);
        console.log(o), await k.post(
          "/authentication/refreshToken",
          {
            email: o.username,
            refreshToken: s
          },
          {
            headers: {
              isRetryRequest: !0
            }
          }
        ).then((l) => (n = !1, l.data.accessToken !== "" && (sessionStorage.setItem(
          "access_token",
          l.data.accessToken
        ), e.forEach(({ config: a, resolve: d, reject: c }) => {
          k.request(a).then((u) => d(u)).catch((u) => c(u));
        }), e.length = 0), k(i))).catch((l) => {
          console.log(l);
        });
      }
      return new Promise((o, l) => {
        e.push({ config: i, resolve: o, reject: l });
      });
    }
  }), /* @__PURE__ */ m("div", { className: Cm.container, children: /* @__PURE__ */ m(Tv, {}) });
}
export {
  Am as CalendarUi,
  kv as CmsUiLibrary,
  kc as Invoice,
  Oc as TestComponent
};
