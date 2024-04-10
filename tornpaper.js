/*!
 * TornPaper.js v0.0.3
 * Copyright(c)2024 Wakana Y.K./happy358
 * Site:https://github.com/happy358/TornPaper/
 * Released under the MIT license.
 * see https://github.com/happy358/TornPaper/blob/master/LICENSE
 */
class Tornpaper {
    constructor(e = null) {
        (this.filterName = "filter_tornpaper"),
            (this.seed = Math.floor(1e7 * Math.random())),
            (this.grungeFrequency = 0.03),
            (this.grungeScale = 3),
            (this.tornFrequency = 0.05),
            (this.tornScale = 10),
            e && this.init(e),
            this.run;
    }
    init(e) {
        (this.filterName = e.filterName || this.filterName),
            (e.seed || 0 == e.seed) && (this.seed = e.seed),
            (e.grungeScale || 0 == e.grungeScale) &&
                (this.grungeScale = e.grungeScale),
            (e.grungeFrequency || 0 == e.grungeFrequency) &&
                (this.grungeFrequency = e.grungeFrequency),
            (e.tornFrequency || 0 == e.tornFrequency) &&
                (this.tornFrequency = e.tornFrequency),
            (e.tornScale || 0 == e.tornScale) && (this.tornScale = e.tornScale);
    }
    get run() {
        return this.addHtml();
    }
    addHtml() {
        this.tornpaper();
    }
    tornpaper() {
        let e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        (e.style = this.style()),
            (e.innerHTML = `<filter id="${this.filterName}"><feTurbulence type="fractalNoise" baseFrequency="${this.grungeFrequency}" result="paper_noise" numOctaves="10" seed="${this.seed}" /><feDiffuseLighting in="paper_noise" lighting-color="white" surfaceScale="${this.grungeScale}" result="paper"><feDistantLight azimuth="45" elevation="60" /></feDiffuseLighting><feTurbulence baseFrequency="${this.tornFrequency}" type="turbulence" numOctaves="10" seed="${this.seed}" result="edge_noise" /><feGaussianBlur stdDeviation="0.5" in="SourceGraphic" /><feMorphology operator="erode" radius="5" /><feOffset dx="-2" dy="-2" /><feDisplacementMap scale="${this.tornScale}" xChannelSelector="B" yChannelSelector="G" in2="edge_noise" result="edge" /><feComposite in="paper" in2="edge" operator="atop" result="result_rough" /><feComposite in="SourceGraphic" in2="edge" operator="atop" result="result_sg" /><feBlend mode="multiply" in="result_rough" in2="result_sg" /></filter>`),
            document.body.appendChild(e);
    }
    style() {
        return "position:fixed;top:0;left:0;width:0;height:0;z-index:-1;";
    }
}
