# TornPaper 
 
![ScreenShot](./assets/screenshot.jpg?raw=true "TornPaper.js")
 
## Demo 
[https://codepen.io/wakana-k/full/PogRqLx](https://codepen.io/wakana-k/full/PogRqLx)
 
 
## Usage 
### html:
```html
<script src="https://cdn.jsdelivr.net/gh/happy358/TornPaper@v1.0.0/tornpaper.min.js"></script>
<script>
    new Tornpaper().run;
</script>
```

### css:
 
* tornpaper with grungepaper 
```css
:root {
    --grungepaper: url();
}
.your-class {
    filter: url(#filter_tornpaper);
    background-image: var(--grungepaper);
    background-size: cover;
    background-color: peachpuff;
    background-blend-mode: multiply;
}
```

 
* tornpaper with grungepaper and any other background-image
```css
:root {
    --grungepaper: url();
}
.your-class {
    filter: url(#filter_tornpaper);
    background: url("https://source.unsplash.com/random/") center/cover, var(--grungepaper) center/cover repeat;
    background-blend-mode: multiply;
}
```


* only tornpaper 
```css
.your-class {
    filter: url(#filter_tornpaper);
}
```

 
## Options 
```
new Tornpaper({
    seed:1, // default:random number
    tornFrequency : 0.05,
    tornScale : 10,
    grunge: true, // default:true
    grungeFrequency : 0.03,
    grungeScale : 3
}).run;
```
## References 
- Inspired by fguilleme. 
[https://codepen.io/fguilleme/pen/MMyKXB](https://codepen.io/fguilleme/pen/MMyKXB)  
 
- SVG Filter Effects: Creating Texture with &lt;feTurbulence&gt; 
[https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/) 
 
Thanks! 
