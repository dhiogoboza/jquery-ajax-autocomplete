// test if jQuery is available
QUnit.test("jQuery test if exists", function(assert) {
  assert.ok(jQuery, "jQuery window object exists");
  assert.ok($, "jQuery's dollar object exists");
  assert.ok($.fn, "jQuery's dollar fn function exists");
});

// test if $.fn.timeline is available
QUnit.test("$.fn.autocomplete jquery function test if exists", function(assert) {
  assert.ok($.fn.autocomplete, "$.fn.autocomplete exists");
});

QUnit.todo("$.fn.autocomplete test", function(assert) {
});
