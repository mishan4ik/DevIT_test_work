function result_func(func,func2){


    function func(a,b) {
        console.log(a,b);
      }
      
      function func2(a,b) {
        console.log(a,b);
      }
      let arr = [ func, func2 ];

      arr[0](32,22);
      arr[1](3,55);


}

result_func();