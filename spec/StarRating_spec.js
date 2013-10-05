
describe("StarRating Tests", function() {

	var Alloy = require("alloy");
	var widget = Alloy.createWidget("StarRating");
	var view = widget.getView();

	describe("can generate a usable StarRating widget", function() {

		it("can init the widget with a rating", function() {
		
			var tester = Alloy.createWidget("StarRating", {rating:'4'});
			expect(tester.getRating()).toEqual(4);
			
		});
		
		xit("can set and get the widget value", function() {
			
			widget.setValue(true);
			expect(widget.getValue()).toEqual(true);

			widget.setValue(false);
			expect(widget.getValue()).toEqual(false);

		});
		
		xit("can change value when clicked", function() {
			
			runs(function(){
				widget.setValue(false);
				view.fireEvent('click');
			});
			
			waitsFor(function(){
				return widget.getValue();
			}, "widget didn't change value", 100);

			runs(function(){
				expect(widget.getValue()).toEqual(true);
				view.fireEvent('click');
			});
			
			waitsFor(function(){
				return !widget.getValue();
			}, "widget didn't change value", 100);

			runs(function(){
				expect(widget.getValue()).toEqual(false);
			});
			
		});

		
		xit("sends correct event when clicked", function() {

			var eventValue = false;
			view.addEventListener('change', function(e){
				eventValue = e.value;
			});

			runs(function(){
				widget.setValue(false);
				view.fireEvent('click');
			});
			
			waitsFor(function(){
				return eventValue;
			}, "widget didn't send event or wrong value", 100);

			runs(function(){
				expect(eventValue).toEqual(true);
				view.fireEvent('click');
			});
			
			waitsFor(function(){
				return !eventValue;
			}, "widget didn't send event or wrong value", 100);

			runs(function(){
				expect(eventValue).toEqual(false);
			});
			
		});

	});
	
}); 