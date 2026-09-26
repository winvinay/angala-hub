(function () {
  var cfg = window.ANGAALA_RAZORPAY || {};
  var statusEl = null;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function money(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
  }

  function ensureOverlay() {
    var ov = $("#checkout-overlay");
    if (ov) return ov;
    ov = document.createElement("div");
    ov.id = "checkout-overlay";
    ov.className = "checkout-overlay";
    ov.hidden = true;
    ov.innerHTML =
      '<div class="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title">' +
      '<button type="button" class="checkout-close" aria-label="Close">&times;</button>' +
      '<p class="checkout-badge">Razorpay sandbox · test mode</p>' +
      '<h3 id="checkout-title">Checkout</h3>' +
      '<div class="checkout-product">' +
      '<img id="checkout-img" alt="" width="72" height="72">' +
      '<div><strong id="checkout-name"></strong><div class="checkout-price" id="checkout-price"></div></div>' +
      "</div>" +
      '<p class="checkout-hint">No real money is charged. Use Razorpay test cards / UPI after the checkout opens.</p>' +
      '<p class="checkout-live-note">Live payment keys will be added later. This site uses test keys only.</p>' +
      '<button type="button" class="btn btn-primary checkout-pay" id="checkout-pay">Pay with Razorpay (test)</button>' +
      '<p class="checkout-status" id="checkout-status" role="status"></p>' +
      "</div>";
    document.body.appendChild(ov);
    ov.querySelector(".checkout-close").addEventListener("click", close);
    ov.addEventListener("click", function (e) {
      if (e.target === ov) close();
    });
    statusEl = $("#checkout-status");
    return ov;
  }

  function setStatus(msg, kind) {
    statusEl = statusEl || $("#checkout-status");
    if (!statusEl) return;
    statusEl.textContent = msg || "";
    statusEl.className = "checkout-status" + (kind ? " is-" + kind : "");
  }

  var current = null;

  function openCheckout(product) {
    current = product;
    var ov = ensureOverlay();
    $("#checkout-name").textContent = product.name;
    $("#checkout-price").textContent = money(product.price);
    var img = $("#checkout-img");
    img.src = product.image;
    img.alt = product.name;
    setStatus("");
    ov.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    var ov = $("#checkout-overlay");
    if (ov) ov.hidden = true;
    document.body.style.overflow = "";
  }

  function pay() {
    if (!current) return;
    var key = (cfg.keyId || "").trim();
    if (!key || key.indexOf("rzp_test_") !== 0 || key.indexOf("REPLACE") !== -1) {
      setStatus(
        "Add a Razorpay test Key ID (rzp_test_…) in js/razorpay-config.js to open sandbox checkout. Live keys are not used.",
        "error"
      );
      return;
    }
    if (typeof Razorpay === "undefined") {
      setStatus("Razorpay script failed to load. Check your network and try again.", "error");
      return;
    }
    setStatus("Opening Razorpay test checkout…");
    var options = {
      key: key,
      amount: Math.round(Number(current.price) * 100),
      currency: "INR",
      name: "Angaala Hub",
      description: current.name + " (TEST)",
      image: "images/ah-mark-v5.png?v=6",
      prefill: { contact: "7619514677", email: "info@angaalahub.com" },
      notes: { product_id: current.id, mode: "sandbox" },
      theme: { color: "#e07a12" },
      modal: {
        ondismiss: function () {
          setStatus("Payment cancelled. You can try again anytime.", "warn");
        }
      },
      handler: function (response) {
        setStatus(
          "Test payment successful. Payment ID: " +
            (response.razorpay_payment_id || "n/a") +
            ". (Sandbox — no real charge. Live keys later.)",
          "ok"
        );
      }
    };
    try {
      var rzp = new Razorpay(options);
      rzp.on("payment.failed", function (resp) {
        var err = (resp && resp.error) || {};
        setStatus(
          "Test payment failed: " +
            (err.description || err.reason || "unknown error") +
            ". You can retry.",
          "error"
        );
      });
      rzp.open();
    } catch (e) {
      setStatus("Could not open Razorpay: " + (e && e.message ? e.message : e), "error");
    }
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-buy]");
    if (btn) {
      e.preventDefault();
      openCheckout({
        id: btn.getAttribute("data-id"),
        name: btn.getAttribute("data-name"),
        price: btn.getAttribute("data-price"),
        image: btn.getAttribute("data-image")
      });
      return;
    }
    if (e.target && e.target.id === "checkout-pay") {
      e.preventDefault();
      pay();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
