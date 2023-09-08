const obj = {
    a: {
      b: {
        c: 12,
        d: 'Hello World'
      },
      e: [1,2,3]
    }
  };

  let myJSON = JSON.stringify(obj);

  console.log(myJSON)