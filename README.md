# TornPaper 
 
Creating torn edge and grunge paper effect using SVG and JavaScript.
 
![ScreenShot](./assets/ScreenShot.jpeg?raw=true "TornPaper.js")
 
## Demo 
* TornPaper.js demo 
  [https://codepen.io/wakana-k/full/PogRqLx](https://codepen.io/wakana-k/full/PogRqLx)

* Torn paper photo gallery 
  [https://codepen.io/wakana-k/full/ExJEvor](https://codepen.io/wakana-k/full/ExJEvor)

  
## Usage 
### html:
```html
<script src="https://cdn.jsdelivr.net/gh/happy358/TornPaper@v0.0.1/tornpaper.min.js"></script>
<script>
    new Tornpaper();
</script>
```

### css:
 ```css
.your-class {
    filter: url(#filter_tornpaper);
}
```
 
 
#### e.g. With background-color  
```css
.your-class {
    filter: url(#filter_tornpaper);
    background-color: peachpuff;
}
```

 
#### e.g. With background-image 
```css
.your-class {
    filter: url(#filter_tornpaper);
    background: url("https://source.unsplash.com/random/") center/cover;
}
```
 


## Options 
```js
new Tornpaper({
    seed:1, // default:random number
    tornFrequency : 0.05,
    tornScale : 10,
    grungeFrequency : 0.03,
    grungeScale : 3
});
```
## References 
- Inspired by fguilleme. 
[https://codepen.io/fguilleme/pen/MMyKXB](https://codepen.io/fguilleme/pen/MMyKXB)  
 
- SVG Filter Effects: Creating Texture with &lt;feTurbulence&gt; 
[https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/) 
 
Thanks! 
