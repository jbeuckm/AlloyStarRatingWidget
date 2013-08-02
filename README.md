**Usage**

The rating widget has two modes: display a rating and input a rating.

Here is the markup for a StarRating that displays a rating of two:

```xml
<Widget id="myRating" src="StarRating" rating="2" mode="display"/>
```

This one shows the widget as an input that will emit "change" events when clicked:

```xml
<Widget id="myRating" src="StarRating" mode="input"/>
```

To responsd when the input rating is clicked:

In the controller:
```javascript
$.myRating.getView().addEventListener('change', alert);
```

After the user chooses their rating, you might want to put the widget in display mode:
```javascript
$.myRating.setMode("display");
```


The widget comes with a set of default images, but you can use your own. Square images work best, and here is how to specify a custom set of images:

```javascript
'#myRating': {
	dimension: 18,
	onStarImage: '/interface/star/on_star.png',
	offStarImage: '/interface/star/off_star.png',
	inputStarImage: '/interface/star/input_star.png'
}
```

