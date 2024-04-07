# TornPaper 
 
![ScreenShot](./assets/screenshot.jpg?raw=true "TornPaper.js")
 
## Demo 


## Usage 
### html
```html
<script src="https://cdn.jsdelivr.net/gh/happy358/TornPaper/tornpaper.min.js"></script>
<script>
    new Tornpaper().run;
</script>
```

### css 
 
#### tornpaper with grungepaper 
```css
:root {
    --grungepaper: url();
}
.your-class {
    filter: url(#filter_tornpaper);
    background: var(--grungepaper) center/cover repeat;
    background-color:white;
    background-blend-mode: multiply;
}
```

 
#### tornpaper with grungepaper and any other background-image
```css
:root {
    --grungepaper: url();
}
.your-class {
    filter: url(#filter_tornpaper);
    background: url("https://source.unsplash.com/random/") center/cover, var(--grungepaper) center/cover repeat;
    background-color:white;
    background-blend-mode: multiply;
}
```


#### only tornpaper 
```css
.your-class {
    filter: url(#filter_tornpaper);
}
```

 
## Options 
```
new Tornpaper({
    seed:1,
    tornFrequency : 0.05,
    tornScale : 10,
    grunge: true,
    grungeFrequency : 0.05,
    grungeScale : 5
}).run;
```
## References 
- Inspired by fguilleme. 
[https://codepen.io/fguilleme/pen/MMyKXB](https://codepen.io/fguilleme/pen/MMyKXB)  
 
- SVG Filter Effects: Creating Texture with &lt;feTurbulence&gt; 
[https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/) 
 
Thanks! 
