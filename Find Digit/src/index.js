// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


// Write the function to find the findDigit obtained.
var findDigit = function(num, nth){
     //your code here
     if(nth<0)
     {
       return -1;
     }
     if(num<0)
     {
       num=num*(-1);
     }
     let f=0;
     let x=1;
     let st=""+num;
     for(let i=st.length-1;i>=0;i--)
     {
       if(x==nth)
       {
         return parseInt(st[i]);

       }
       x=x+1;
      }
      return 0;
  }


//Use SpecRunner to check the Test Cases.