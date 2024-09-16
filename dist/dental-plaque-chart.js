import { useState as u } from "react";
const g = [
  {
    id: "18",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "17",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "16",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "15",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "14",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "13",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "12",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "11",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  }
], k = [
  {
    id: "21",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "22",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "23",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "24",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "25",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "26",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "27",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "28",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  }
], b = [
  {
    id: "31",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "32",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "33",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "34",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "35",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "36",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "37",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "38",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  }
], m = [
  {
    id: "48",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "47",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "46",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "45",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "44",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "43",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "42",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  },
  {
    id: "41",
    present: !0,
    surfaces: {
      back: !1,
      front: !1,
      left: !1,
      right: !1
    }
  }
], i = (e, l) => e.map((s) => l.find((t) => s.id === t.id) ?? s), v = (e) => {
  const [l, s] = u(() => e != null && e.model ? i(g, e.model.quadrant_1) : g), [t, a] = u(() => e != null && e.model ? i(k, e.model.quadrant_2) : k), [r, f] = u(() => e != null && e.model ? i(b, e.model.quadrant_3) : b), [n, c] = u(() => e != null && e.model ? i(m, e.model.quadrant_4) : m);
  return { getModel: () => ({
    quadrant_1: l,
    quadrant_2: t,
    quadrant_3: r,
    quadrant_4: n
  }), _listeners: { setGroup1: s, setGroup2: a, setGroup3: f, setGroup4: c } };
}, h = ({ className: e }) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `lucide lucide-circle-x ${e}`
  },
  /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ React.createElement("path", { d: "m15 9-6 6" }),
  /* @__PURE__ */ React.createElement("path", { d: "m9 9 6 6" })
), R = "bg-rose-500 hover:bg-rose-400", E = "bg-blue-200 hover:bg-blue-300", _ = ({ piece: e, size: l = 40, onClickSurface: s = () => {
}, onDiscardPiece: t = () => {
} }) => /* @__PURE__ */ React.createElement("div", { className: "relative p-2" }, /* @__PURE__ */ React.createElement("div", { onClick: () => t(e.id) }, /* @__PURE__ */ React.createElement(h, { className: "absolute right-0 top-0 z-50 w-1/4 h-auto cursor-pointer" })), /* @__PURE__ */ React.createElement("div", { className: `w-[${l}px] aspect-square grid grid-cols-2 rotate-45` }, e.present ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(o, { surface: "front", isMarked: e.surfaces.front, onClickSurface: s }), /* @__PURE__ */ React.createElement(o, { surface: "right", isMarked: e.surfaces.right, onClickSurface: s }), /* @__PURE__ */ React.createElement(o, { surface: "left", isMarked: e.surfaces.left, onClickSurface: s }), /* @__PURE__ */ React.createElement(o, { surface: "back", isMarked: e.surfaces.back, onClickSurface: s })) : /* @__PURE__ */ React.createElement("div", { className: "col-span-full row-span-full -rotate-45" }, /* @__PURE__ */ React.createElement(h, { className: "h-full w-full text-blue-900" })))), o = ({ isMarked: e, surface: l, onClickSurface: s = () => {
} }) => {
  const t = (e ? R : E) + " hover:scale-110 transition active:scale-95";
  let a = "border border-black ";
  switch (l) {
    case "front":
      a += "rounded-tl-full";
      break;
    case "back":
      a += "rounded-br-full";
      break;
    case "left":
      a += "rounded-bl-full";
      break;
    case "right":
      a += "rounded-tr-full";
      break;
  }
  return /* @__PURE__ */ React.createElement("div", { onClick: () => s(l, !e), className: `${a} ${t}`, tabIndex: 0 });
}, d = ({ teeth: e, onClickSurface: l = () => {
}, onDiscardPiece: s = () => {
} }) => /* @__PURE__ */ React.createElement("div", { className: "p-4 inline-flex gap-1 border flex-wrap" }, e.map((t) => /* @__PURE__ */ React.createElement(_, { key: t.id, piece: t, onClickSurface: (a, r) => {
  l(t.id, a, r);
}, onDiscardPiece: s }))), w = ({ chart: e }) => {
  const l = (t, a, r, f) => t.map((n) => {
    if (n.id === a) {
      const c = { ...n };
      return c.surfaces[r] = f, c;
    } else
      return n;
  }), s = (t, a) => t.map((r) => {
    if (r.id === a) {
      const f = { ...r };
      return f.present = !f.present, f;
    } else
      return r;
  });
  return /* @__PURE__ */ React.createElement("div", { className: "inline-grid grid-cols-1 sm:grid-cols-2" }, /* @__PURE__ */ React.createElement(d, { teeth: e.getModel().quadrant_1, onDiscardPiece: (t) => {
    e._listeners.setGroup1((a) => s(a, t));
  }, onClickSurface: (t, a, r) => e._listeners.setGroup1((f) => l(f, t, a, r)) }), /* @__PURE__ */ React.createElement(d, { teeth: e.getModel().quadrant_2, onDiscardPiece: (t) => {
    e._listeners.setGroup2((a) => s(a, t));
  }, onClickSurface: (t, a, r) => e._listeners.setGroup2((f) => l(f, t, a, r)) }), /* @__PURE__ */ React.createElement(d, { teeth: e.getModel().quadrant_4, onDiscardPiece: (t) => {
    e._listeners.setGroup4((a) => s(a, t));
  }, onClickSurface: (t, a, r) => e._listeners.setGroup4((f) => l(f, t, a, r)) }), /* @__PURE__ */ React.createElement(d, { teeth: e.getModel().quadrant_3, onDiscardPiece: (t) => {
    e._listeners.setGroup3((a) => s(a, t));
  }, onClickSurface: (t, a, r) => e._listeners.setGroup3((f) => l(f, t, a, r)) }));
};
export {
  w as DentalPlaqueChart,
  v as useDentalPlaqueChart
};
