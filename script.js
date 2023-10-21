function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

let data = `
        assets/0001.png
        assets/0002.png
        assets/0003.png
        assets/0004.png
        assets/0005.png
        assets/0006.png
        assets/0007.png
        assets/0008.png
        assets/0009.png
        assets/0010.png
        assets/0011.png
        assets/0012.png
        assets/0013.png
        assets/0014.png
        assets/0015.png
        assets/0016.png
        assets/0017.png
        assets/0018.png
        assets/0019.png
        assets/0020.png
        assets/0021.png
        assets/0022.png
        assets/0023.png
        assets/0024.png
        assets/0025.png
        assets/0026.png
        assets/0027.png
        assets/0028.png
        assets/0029.png
        assets/0030.png
        assets/0031.png
        assets/0032.png
        assets/0033.png
        assets/0034.png
        assets/0035.png
        assets/0036.png
        assets/0037.png
        assets/0038.png
        assets/0039.png
        assets/0040.png
        assets/0041.png
        assets/0042.png
        assets/0043.png
        assets/0044.png
        assets/0045.png
        assets/0046.png
        assets/0047.png
        assets/0048.png
        assets/0049.png
        assets/0050.png
        assets/0051.png
        assets/0052.png
        assets/0053.png
        assets/0054.png
        assets/0055.png
        assets/0056.png
        assets/0057.png
        assets/0058.png
        assets/0059.png
        assets/0060.png
        assets/0061.png
        assets/0062.png
        assets/0063.png
        assets/0064.png
        assets/0065.png
        assets/0066.png
        assets/0067.png
        assets/0068.png
        assets/0069.png
        assets/0070.png
        assets/0071.png
        assets/0072.png
        assets/0073.png
        assets/0074.png
        assets/0075.png
        assets/0076.png
        assets/0077.png
        assets/0078.png
        assets/0079.png
        assets/0080.png
        assets/0081.png
        assets/0082.png
        assets/0083.png
        assets/0084.png
        assets/0085.png
        assets/0086.png
        assets/0087.png
        assets/0088.png
        assets/0089.png
        assets/0090.png
        assets/0091.png
        assets/0092.png
        assets/0093.png
        assets/0094.png
        assets/0095.png
        assets/0096.png
        assets/0097.png
        assets/0098.png
        assets/0099.png
        assets/0100.png
        assets/0101.png
        assets/0102.png
        assets/0103.png
        assets/0104.png
        assets/0105.png
        assets/0106.png
        assets/0107.png
        assets/0108.png
        assets/0109.png
        assets/0110.png
        assets/0111.png
        assets/0112.png
        assets/0113.png
        assets/0114.png
        assets/0115.png
        assets/0116.png
        assets/0117.png
        assets/0118.png
        assets/0119.png
        assets/0120.png
        assets/0121.png
        assets/0122.png
        assets/0123.png
        assets/0124.png
        assets/0125.png
        assets/0126.png
        assets/0127.png
        assets/0128.png
        assets/0129.png
        assets/0130.png
        assets/0131.png
        assets/0132.png
        assets/0133.png
        assets/0134.png
        assets/0135.png
        assets/0136.png
        assets/0137.png
        assets/0138.png
        assets/0139.png
        assets/0140.png
        assets/0141.png
        assets/0142.png
        assets/0143.png
        assets/0144.png
        assets/0145.png
        assets/0146.png
        assets/0147.png
        assets/0148.png
        assets/0149.png
        assets/0150.png
        assets/0151.png
        assets/0152.png
        assets/0153.png
        assets/0154.png
        assets/0155.png
        assets/0156.png
        assets/0157.png
        assets/0158.png
        assets/0159.png
        assets/0160.png
        assets/0161.png
        assets/0162.png
        assets/0163.png
        assets/0164.png
        assets/0165.png
        assets/0166.png
        assets/0167.png
        assets/0168.png
        assets/0169.png
        assets/0170.png
        assets/0171.png
        assets/0172.png
        assets/0173.png
        assets/0174.png
        assets/0175.png
        assets/0176.png
        assets/0177.png
        assets/0178.png
        assets/0179.png
        assets/0180.png
        assets/0181.png
        assets/0182.png
        assets/0183.png
        assets/0184.png
        assets/0185.png
        assets/0186.png
        assets/0187.png
        assets/0188.png
        assets/0189.png
        assets/0190.png
        assets/0191.png
        assets/0192.png
        assets/0193.png
        assets/0194.png
        assets/0195.png
        assets/0196.png
        assets/0197.png
        assets/0198.png
        assets/0199.png
        assets/0200.png
        assets/0201.png
        assets/0202.png
        assets/0203.png
        assets/0204.png
        assets/0205.png
        assets/0206.png
        assets/0207.png
        assets/0208.png
        assets/0209.png
        assets/0210.png
        assets/0211.png
        assets/0212.png
        assets/0213.png
        assets/0214.png
        assets/0215.png
        assets/0216.png
        assets/0217.png
        assets/0218.png
        assets/0219.png
        assets/0220.png
        assets/0221.png
        assets/0222.png
        assets/0223.png
        assets/0224.png
        assets/0225.png
        assets/0226.png
        assets/0227.png
        assets/0228.png
        assets/0229.png
        assets/0230.png
        assets/0231.png
        assets/0232.png
        assets/0233.png
        assets/0234.png
        assets/0235.png
        assets/0236.png
        assets/0237.png
        assets/0238.png
        assets/0239.png
        assets/0240.png
        assets/0241.png
        assets/0242.png
        assets/0243.png
        assets/0244.png
        assets/0245.png
        assets/0246.png
        assets/0247.png
        assets/0248.png
        assets/0249.png
        assets/0250.png
        assets/0251.png
        assets/0252.png
        assets/0253.png
        assets/0254.png
        assets/0255.png
        assets/0256.png
        assets/0257.png
        assets/0258.png
        assets/0259.png
        assets/0260.png
        assets/0261.png
        assets/0262.png
        assets/0263.png
        assets/0264.png
        assets/0265.png
        assets/0266.png
        assets/0267.png
        assets/0268.png
        assets/0269.png
        assets/0270.png
        assets/0271.png
        assets/0272.png
        assets/0273.png
        assets/0274.png
        assets/0275.png
        assets/0276.png
        assets/0277.png
        assets/0278.png
        assets/0279.png
        assets/0280.png
        assets/0281.png
        assets/0282.png
        assets/0283.png
        assets/0284.png
        assets/0285.png
        assets/0286.png
        assets/0287.png
        assets/0288.png
        assets/0289.png
        assets/0290.png
        assets/0291.png
        assets/0292.png
        assets/0293.png
        assets/0294.png
        assets/0295.png
        assets/0296.png
        assets/0297.png
        assets/0298.png
        assets/0299.png
        assets/0300.png
        assets/0301.png
        assets/0302.png
        assets/0303.png
        assets/0304.png
        assets/0305.png
        assets/0306.png
        assets/0307.png
        assets/0308.png
        assets/0309.png
        assets/0310.png
        assets/0311.png
        assets/0312.png
        assets/0313.png
        assets/0314.png
        assets/0315.png
        assets/0316.png
        assets/0317.png
        assets/0318.png
        assets/0319.png
        assets/0320.png
        assets/0321.png
        assets/0322.png
        assets/0323.png
        assets/0324.png
        assets/0325.png
        assets/0326.png
        assets/0327.png
        assets/0328.png
        assets/0329.png
        assets/0330.png
        assets/0331.png
        assets/0332.png
        assets/0333.png
        assets/0334.png
        assets/0335.png
        assets/0336.png
        assets/0337.png
        assets/0338.png
        assets/0339.png
        assets/0340.png
        assets/0341.png
        assets/0342.png
        assets/0343.png
        assets/0344.png
        assets/0345.png
        assets/0346.png
        assets/0347.png
        assets/0348.png
        assets/0349.png
        assets/0350.png
        assets/0351.png
        assets/0352.png
        assets/0353.png
        assets/0354.png
        assets/0355.png
        assets/0356.png
        assets/0357.png
        assets/0358.png
        assets/0359.png
        assets/0360.png
        assets/0361.png
        assets/0362.png
        assets/0363.png
        assets/0364.png
        assets/0365.png
        assets/0366.png
        assets/0367.png
        assets/0368.png
        assets/0369.png
        assets/0370.png
        assets/0371.png
        assets/0372.png
        assets/0373.png
        assets/0374.png
        assets/0375.png
        assets/0376.png
        assets/0377.png
        assets/0378.png
        assets/0379.png
        assets/0380.png
        assets/0381.png
        assets/0382.png
        assets/0383.png
        assets/0384.png
        assets/0385.png
        assets/0386.png
        assets/0387.png
        assets/0388.png
        assets/0389.png
        assets/0390.png
        assets/0391.png
        assets/0392.png
        assets/0393.png
        assets/0394.png
        assets/0395.png
        assets/0396.png
        assets/0397.png
        assets/0398.png
        assets/0399.png
        assets/0400.png
        assets/0401.png
        assets/0402.png
        assets/0403.png
        assets/0404.png
        assets/0405.png
        assets/0406.png
        assets/0407.png
        assets/0408.png
        assets/0409.png
        assets/0410.png
        assets/0411.png
        assets/0412.png
        assets/0413.png
        assets/0414.png
        assets/0415.png
        assets/0416.png
        assets/0417.png
        assets/0418.png
        assets/0419.png
        assets/0420.png
        assets/0421.png
        assets/0422.png
        assets/0423.png
        assets/0424.png
        assets/0425.png
        assets/0426.png
        assets/0427.png
        assets/0428.png
        assets/0429.png
        assets/0430.png
        assets/0431.png
        assets/0432.png
        assets/0433.png
        assets/0434.png
        assets/0435.png
        assets/0436.png
        assets/0437.png
        assets/0438.png
        assets/0439.png
        assets/0440.png
        assets/0441.png
        assets/0442.png
        assets/0443.png
        assets/0444.png
        assets/0445.png
        assets/0446.png
        assets/0447.png
        assets/0448.png
        assets/0449.png
        assets/0450.png
        assets/0451.png
        assets/0452.png
        assets/0453.png
        assets/0454.png
        assets/0455.png
        assets/0456.png
        assets/0457.png
        assets/0458.png
        assets/0459.png
        assets/0460.png
        assets/0461.png
        assets/0462.png
        assets/0463.png
        assets/0464.png
        assets/0465.png
        assets/0466.png
        assets/0467.png
        assets/0468.png
        assets/0469.png
    `;
data = data.split("\n");

const frameCount = 470;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = data[i];
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `.page>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `.main`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

let logo = document.getElementById('logo')

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

gsap.to(".page1>canvas", {
    scrollTrigger:{
        trigger: ".page1>canvas",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `600% top`,
    },
});

let mark = false;

gsap.to(".page2", {
    scrollTrigger:{
        trigger: ".page2",
        start: `top top`,
        end: `bottom top`,
        markers: mark,
        pin: true,
        scroller: ".main"
    },
});
gsap.to(".page3", {
    scrollTrigger:{
        trigger: ".page3",
        start: `top top`,
        end: `bottom top`,
        markers: mark,
        pin: true,
        scroller: ".main"
    },
});
gsap.pin(".page4", {
    scrollTrigger:{
        trigger: ".page4",
        start: `top top`,
        end: `bottom top`,
        markers: mark,
        pin: true,
        scroller: ".main"
    },
});
gsap.pin(".page5", {
    scrollTrigger:{
        trigger: ".page5",
        start: `top top`,
        end: `bottom top`,
        markers: mark,
        pin: true,
        scroller: ".main"
    },
});
gsap.pin(".page7", {
    scrollTrigger:{
        trigger: ".page7",
        start: `top top`,
        end: `bottom top`,
        markers: mark,
        pin: true,
        scroller: ".main"
    },
});
gsap.pin(".page7", {
    scrollTrigger:{
        trigger: ".page7",
        start: `top top`,
        end: `bottom top`,
        markers: mark,
        pin: true,
        scroller: ".main"
    },
});