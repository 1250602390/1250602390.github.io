gsap.set("#blades", { transformOrigin: "center center" });

const tl = gsap.timeline();

tl
	.to("#blades", { rotate: 360, duration: 4, repeat: -1, ease: "none" })
	.fromTo(".cloud.one", { x: 250 }, { x: -550, duration: 25, repeat: -1, ease: "none" }, "<")
	.fromTo(".cloud.two", { x: -300 }, { x: 525, duration: 22, repeat: -1, ease: "none" }, "<")
	.fromTo(".cloud.three", { x: 300 }, { x: -525, duration: 23, repeat: -1, ease: "none" }, "<")
	.fromTo(".cloud.four", { x: -300 }, { x: 525, duration: 24, repeat: -1, ease: "none" }, "<")
	.fromTo(".cloud.five", { x: -300 }, { x: 525, duration: 21, repeat: -1, ease: "none" }, "<")