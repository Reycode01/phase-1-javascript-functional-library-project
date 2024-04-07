// Define the myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // Define the myMap function
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }
  
  // Define the myReduce function
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[Object.keys(collection)[0]];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], collection);
      }
    }
    return accumulator;
  }
  
  // Define the myFind function
  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  // Define the myFilter function
  function myFilter(collection, callback) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  // Define the mySize function
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Define the myFirst function
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  // Define the myLast function
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
  // Define the myKeys function
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  // Define the myValues function
  function myValues(collection) {
    return Object.values(collection);
  }
  