function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index], "second arg");
  }
}

forEach([0, 1], (item, str) => console.log(item, str));
