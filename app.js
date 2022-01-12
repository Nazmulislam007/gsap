let proxy = { skew: 0 };
let skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg");
let clamp = gsap.utils.clamp(-8, 8);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
