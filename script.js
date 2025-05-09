// Apply Shery.js image effect
Shery.imageEffect("#back", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.94, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 2.103762718012982 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.76, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.37, range: [0, 2] },
      noise_scale: { value: 22.14, range: [0, 100] },
    },
    gooey: true,
  });
  
  // Animate the h1 elements inside .elem on click
  var elems = document.querySelectorAll(".elem");
  
  elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
  
    document.querySelector("#main").addEventListener("click", function () {
      if (!animating) {
        animating = true;
  
        // Animate current heading out
        gsap.to(h1s[index], {
          top: "-=200%",
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], { top: "100%" });
            animating = false;
          },
        });
  
        // Update index properly (this was your original mistake)
        index === h1s.length - 1 ? (index = 0) : index++;
  
        // Animate next heading into view
        gsap.to(h1s[index], {
          top: "-=120%",
          ease: Expo.easeInOut,
          duration: 1,
        });
      }
    });
  });
  