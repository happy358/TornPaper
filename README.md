# TornPaper 

## Demo 


## Usage 
### html
```
<script src="https://cdn.jsdelivr.net/gh/happy358/TornPaper
/tornpaper.min.js"></script>
<script>
    new Tornpaper().run;
</script>
```

### css 
#### only tornpaper 
(not use grungepaper) 
```
.your-class {
filter: url(#filter_tornpaper);
}
```
#### tornpaper with grungepaper 
```
:root {
    --grungepaper: url();
}
.your-class {
background: var(--grungepaper) center/cover repeat;
filter: url(#filter_tornpaper);
}
```
#### tornpaper with grungepaper and any other background-image(or color)
```
:root {
    --grungepaper: url();
}
.your-class {
background: url("https://source.unsplash.com/random/") center/cover, var(--grungepaper) center/cover repeat;
    background-blend-mode: multiply;
filter: url(#filter_tornpaper);
}
```
 
## Options 
```
    new Tornpaper({
        grunge: true
    }).run;
```
## References 
- Inspired by fguilleme. 
[https://codepen.io/fguilleme/pen/MMyKXB](https://codepen.io/fguilleme/pen/MMyKXB)  
 
- SVG Filter Effects: Creating Texture with &lt;feTurbulence&gt; 
[https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/) 
 
Thanks! 
