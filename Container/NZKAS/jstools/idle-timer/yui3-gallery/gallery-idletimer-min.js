YUI.add(
  "gallery-idletimer",
  function (F) {
    var D = false,
      G = -1,
      B = false,
      E = 30000;
    function C() {
      clearTimeout(G);
      if (B) {
        if (D) {
          A();
        }
        G = setTimeout(A, E);
      }
    }
    function A() {
      D = !D;
      F.IdleTimer.fire(D ? "idle" : "active");
    }
    F.IdleTimer = {
      isRunning: function () {
        return B;
      },
      isIdle: function () {
        return D;
      },
      start: function (H) {
        B = true;
        D = false;
        if (typeof H == "number") {
          E = H;
        }
        F.on("mousemove", C, document);
        F.on("keydown", C, document);
        G = setTimeout(A, E);
      },
      stop: function () {
        B = false;
        clearTimeout(G);
        F.detach("mousemove", C, document);
        F.detach("keydown", C, document);
      },
    };
    F.augment(F.IdleTimer, F.Event.Target);
  },
  "@VERSION@",
  { requires: ["event", "event-custom"] }
);
