**Usage**

In the view:
```xml
<Widget id="rating" src="StarRating" rating="2"/>
```

In the controller:
```javascript
$.rating.getView().addEventListener('change', alert);
```
