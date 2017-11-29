# jquery-ajax-autocomplete

## Description
A simple jQuery plugin to autocomplete a input text.

## Screenshots
![Alt text](/screenshots/screenshot01.png?raw=true "Screenshot 01")

## Author
Dhiogo Boza - dhiogoboza@gmail.com

## Usage

This plugins requests to a provided URL when the input text change. The reponse must be a json array with objects with `id` and `name` attributes.

```javascript
$("YOUR_SELECTOR").autocomplete({
    url: "data", // url to request json data
    data: "type=locations", // additional data
    onSelection: function (id, name) {
        // event triggered when a option is selected
    }
});
```
