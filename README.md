# jquery-ajax-autocomplete

## Description
A simple jQuery plugin to autocomplete a input text.

## Screenshots
![Alt text](/screenshots/screenshot01.png?raw=true "Screenshot 01")

## Author
Dhiogo Boza - dhiogoboza@gmail.com

## Contributing

[npm](https://www.npmjs.com) is used to build and test `jquery-ajax-autocomplete`.

## Building

```
npm install
npm run build
```

Check `dist` folder for compiled code

## Testing

```
npm run test
```

Opens a browser window and run unit test. Check [QUnit](http://qunitjs.com/) for details on how to write tests.

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
