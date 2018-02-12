(function euler2() {
    var fib = [2, 0];
    var sum = 0;
    var i = 0 ;
  
    while (fib[i] < 4000000) {
      sum += fib[i];
      i = (i+1) % 2;
      fib[i] = 4 * fib[(i + 1) % 2] + fib[i];
    }
  
    console.log(sum);
    return sum;
  }());