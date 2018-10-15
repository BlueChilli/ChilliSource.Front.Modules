import { Mod } from "chillifront";

export default class FacebookPixel extends Mod {
  name() {
    return "Facebok Pixel";
  }

  init() {
    const pixelId = this.getOption("pixelId");
    if (!pixelId) {
      console.log("Pixel ID is not found");
      return;
    }
    const fbPixel = !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    if (fbPixel) {
      window.fbq("init", pixelId, {}, { agent: "plsquarespace" });
      window.fbq("track", "PageView");
    }
  }

  options() {
    return {
      pixelId: ""
    };
  }
}
