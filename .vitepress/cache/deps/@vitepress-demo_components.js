import {
  Transition,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createVNode,
  defineComponent,
  openBlock,
  popScopeId,
  pushScopeId,
  renderSlot,
  resolveComponent,
  toDisplayString,
  vShow,
  withCtx,
  withDirectives
} from "./chunk-45PRN3GW.js";

// node_modules/@vitepress-demo/components/dist/index.js
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var a = document.createElement("style");
      a.appendChild(document.createTextNode(".demo[data-v-4b25fca1]{background-color:var(--vp-c-bg-soft);border:1px solid var(--vp-c-divider);border-radius:10px;margin-bottom:1.2em;transition:background-color .5s ease}.dark .demo[data-v-4b25fca1]{background-color:var(--vp-c-bg-soft)}.demo p[data-v-4b25fca1]{margin:0}.demo button[data-v-4b25fca1]{background-color:var(--vp-c-bg-mute);border:1px solid var(--vp-c-divider);border-radius:8px;font-size:.9em;font-weight:600;transition:background-color .5s ease}.demo button+button[data-v-4b25fca1]{margin-left:6px}.demo-header[data-v-4b25fca1]{position:relative}.demo-header-prefix[data-v-4b25fca1]{margin-left:20px;margin-right:20px;margin-top:18px}.demo-header-prefix-title[data-v-4b25fca1]{font-size:1.1em;font-weight:700;margin-bottom:10px}.demo-header-prefix-desc[data-v-4b25fca1]{font-size:.9em}.demo-header-suffix[data-v-4b25fca1]{position:absolute;display:flex;top:-6px;right:10px}.fade-enter-active[data-v-4b25fca1],.fade-leave-active[data-v-4b25fca1]{transition:opacity .25s ease}.fade-enter-from[data-v-4b25fca1],.fade-leave-to[data-v-4b25fca1]{opacity:0}.demo-copy-button[data-v-4b25fca1],.demo-code-button[data-v-4b25fca1]{width:40px;height:40px;display:flex;justify-content:center;align-items:center}.demo-copy-icon[data-v-4b25fca1],.demo-copied-icon[data-v-4b25fca1]{width:20px;height:20px}.demo-code-icon[data-v-4b25fca1],.demo-code-slash-icon[data-v-4b25fca1]{width:17px;height:17px}.demo-content[data-v-4b25fca1]{margin-top:20px;margin-bottom:18px}.demo-footer[data-v-4b25fca1]{display:flex;position:relative;border-radius:4px 4px 8px 8px;background-color:var(--vp-c-bg);margin:2px}.dark .demo-footer[data-v-4b25fca1]{background-color:var(--vp-c-bg-alt)}.demo-footer-lang[data-v-4b25fca1]{position:absolute;top:6px;right:12px;z-index:2;font-size:12px;font-weight:500;color:var(--vp-code-lang-color)}.demo-footer-code[data-v-4b25fca1]{padding:5px 20px;font-size:small}")), document.head.appendChild(a);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var k = defineComponent({
  name: "Demo",
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    highlight: {
      type: String,
      required: true
    }
  },
  computed: {
    decodeTitle() {
      return decodeURIComponent(this.title);
    },
    decodeDesc() {
      return decodeURIComponent(this.desc);
    },
    decodeLang() {
      return decodeURIComponent(this.lang);
    },
    decodeCode() {
      return decodeURIComponent(this.code);
    },
    decodeHighlight() {
      return decodeURIComponent(this.highlight);
    }
  },
  methods: {
    copyCode() {
      try {
        navigator.clipboard.writeText(this.decodeCode);
      } catch (e) {
        console.log(e);
      }
      this.copied = true, setTimeout(() => {
        this.copied = false;
      }, 2e3);
    }
  },
  data() {
    return {
      hover: false,
      copied: false,
      fold: false
    };
  }
});
var A = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [r, a] of t)
    l[r] = a;
  return l;
};
var i = (e) => (pushScopeId("data-v-4b25fca1"), e = e(), popScopeId(), e);
var x = { class: "demo-header" };
var H = { class: "demo-header-prefix" };
var L = ["innerHTML"];
var z = ["innerHTML"];
var S = { class: "demo-content" };
var T = { class: "demo-header-suffix" };
var I = {
  key: 0,
  class: "demo-copied-icon"
};
var $ = i(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
}, [
  createBaseVNode("g", { fill: "none" }, [
    createBaseVNode("path", {
      d: "M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v4.707a5.48 5.48 0 0 0-1-.185V4.5a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.1c.183.358.404.693.657 1H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z",
      fill: "currentColor"
    })
  ])
], -1));
var b = [
  $
];
var B = {
  key: 1,
  class: "demo-copy-icon"
};
var D = i(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 20 20"
}, [
  createBaseVNode("g", { fill: "none" }, [
    createBaseVNode("path", {
      d: "M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1z",
      fill: "currentColor"
    })
  ])
], -1));
var q = [
  D
];
var R = {
  key: 0,
  class: "demo-code-icon"
};
var U = i(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, [
  createBaseVNode("path", {
    d: "M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z",
    fill: "currentColor"
  }),
  createBaseVNode("path", {
    d: "M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z",
    fill: "currentColor"
  }),
  createBaseVNode("path", {
    d: "M208 437a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z",
    fill: "currentColor"
  })
], -1));
var O = [
  U
];
var V = {
  key: 1,
  class: "demo-code-slash-icon"
};
var E = i(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, [
  createBaseVNode("path", {
    d: "M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z",
    fill: "currentColor"
  }),
  createBaseVNode("path", {
    d: "M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z",
    fill: "currentColor"
  })
], -1));
var N = [
  E
];
var j = { class: "demo-footer" };
var F = { class: "demo-footer-lang" };
var G = ["innerHTML"];
function J(e, t, l, r, a, K) {
  const v = resolveComponent("ClientOnly");
  return openBlock(), createBlock(v, null, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: "demo",
        onMouseover: t[2] || (t[2] = (n) => e.hover = true),
        onMouseleave: t[3] || (t[3] = (n) => e.hover = false)
      }, [
        createBaseVNode("div", x, [
          createBaseVNode("div", H, [
            createBaseVNode("div", {
              class: "demo-header-prefix-title",
              innerHTML: e.decodeTitle
            }, null, 8, L),
            createBaseVNode("div", {
              class: "demo-header-prefix-desc",
              innerHTML: e.decodeDesc
            }, null, 8, z),
            createBaseVNode("div", S, [
              renderSlot(e.$slots, "default", {}, void 0, true)
            ])
          ]),
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("div", T, [
                createBaseVNode("button", {
                  class: "demo-copy-button",
                  onClick: t[0] || (t[0] = (...n) => e.copyCode && e.copyCode(...n))
                }, [
                  e.copied ? (openBlock(), createElementBlock("div", I, b)) : (openBlock(), createElementBlock("div", B, q))
                ]),
                createBaseVNode("button", {
                  class: "demo-code-button",
                  onClick: t[1] || (t[1] = (n) => {
                    e.fold = !e.fold;
                  })
                }, [
                  e.fold ? (openBlock(), createElementBlock("div", R, O)) : (openBlock(), createElementBlock("div", V, N))
                ])
              ], 512), [
                [vShow, e.hover || e.copied]
              ])
            ]),
            _: 1
          })
        ]),
        withDirectives(createBaseVNode("div", j, [
          createBaseVNode("div", F, toDisplayString(e.decodeLang), 1),
          createBaseVNode("div", {
            class: "demo-footer-code",
            innerHTML: e.decodeHighlight
          }, null, 8, G)
        ], 512), [
          [vShow, e.fold]
        ])
      ], 32)
    ]),
    _: 3
  });
}
var Q = A(k, [["render", J], ["__scopeId", "data-v-4b25fca1"]]);
export {
  Q as Demo
};
//# sourceMappingURL=@vitepress-demo_components.js.map
