/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
JavaScript functions
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223    
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function reversenum(n)  
  {   
   	var n=prompt('Ingrese numeros a poner alrevez:','');
    n = n + "";  
    return alert("El numero "+n+ " alrevez es: "+n.split("").reverse().join("")); 
  }  
    


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function Palindrome(str_entry){  
  str_entry=prompt('Ingrese frase a comprovar si es palindrome:','');

  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');  
   var ccount = 0;  
  if(cstr==="") {  
    alert(str_entry + "no se encontro!");  
    return false;  
  }  
     if ((cstr.length) % 2 === 0) {  
        ccount = (cstr.length) / 2;  
      } else {  
         if (cstr.length === 1) {  
           alert(str_entry + " es palindrome.");  
            return true;  
        } else {  
            ccount = (cstr.length - 1) / 2;  
        }  
    }  
    for (var x = 0; x < ccount; x++) {  
        if (cstr[x] != cstr.slice(-1-x)[0]) {  
           alert(str_entry + " no es palindrome.");  
            return false;  
        }  
    }  
  alert(str_entry + " es palindrome.");  
    return true;  
} 




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
3. Write a JavaScript function that generates all combinations of a string. 
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function combinacions(str1)  
{  
str1=prompt('Ingrese cadena a obtener combinaciones:','');
var array1 = [];  
  for (var x = 0, y=1; x < str1.length; x++,y++)   
  {  
   array1[x]=str1.substring(x, y);  
    }  
var combi = [];  
var temp= "";  
var slent = Math.pow(2, array1.length);  
  
for (var i = 0; i < slent ; i++)  
{  
    temp= "";  
    for (var j=0;j<array1.length;j++) {  
        if ((i & Math.pow(2,j))){   
            temp += array1[j];  
        }  
    }  
    if (temp !== "")  
    {  
        combi.push(temp);  
    }  
}  
  alert(combi.join("\n"));  
}  
  



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function orden_alfabetico(stralfa)  
  {  
  	stralfa=prompt('Ingrese cadena a ordenar alfabeticamente:','');
    return alert(stralfa.split('').sort().join('')); 

  }  



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function mayusculas (){

	str=prompt('Ingrese cadena para ponerle mayusculas:','');
function mayus(str)
{
  var lower = str.toLowerCase();
  return lower.replace(/(^| )(\w)/g, function(x)
  {
    return x.toUpperCase();
  });
}
  alert(mayus(str));
}




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial' 
Expected Output : 'Development'
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function palabralarga(){

function getLongest (arrStr) {
  var tamano = 0, palabrota;

  for(var i=0 , len = arrStr.length ; i < len ; i++){

    if(tamano < arrStr[i].length) {
      tamano =arrStr[i].length;
      palabrota = arrStr[i];
    }

  }

  return palabrota;
}

function isLongest (str) {
  var arrayStr = str.split(' ');
  return function(fn) {
    return fn.apply(this,[arrayStr]);
  }
}
var cad=prompt('Ingrese cadena para determinar la palabra mas larga:','');
alert("La palabras mas larga es: "+isLongest(cad)(getLongest));

}





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string : 'The quick brown fox' 
Expected Output : 5
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function numvocales(subject) {

var subject=prompt('Ingrese cadena para determinar en numero de vocales:','');

    return alert("Vocales contenidas en la frase '" + subject + "' son: " + subject.match(/[aeiou]/gi).length);
    
}





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function numprimo (n)
{
	var n=prompt('Ingrese en numero a determinar si es primo:','');
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return alert("El numero: "+n+" no es primo");
        }
    }
    return alert("El numero: "+n+" es primo");
}




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
9. Write a JavaScript function which accepts an argument and returns the type. 
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function tipos(dtypes){

    var value=prompt('Ingrese en numero a determinar si es primo:','');

    var dtypes = [Function, RegExp, numerito, String, Boolean, Object], x, len;  
          
    if (typeof value === "object" || typeof value === "function")   
        {  
         for (x = 0, len = dtypes.length; x < len; x++)   
         {  
                if (value instanceof dtypes[x])  
                {  
                    return dtypes[x];  
                }  
          }  
        }  
          
        return alert(typeof value + " ...En este caso siempre sera string por estar ingresando texto XD");  

    }  
    




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    function filascolumnas(n) {  
      
      var n=prompt('Ingrese la cantidad de columnas:','');
            var i;  
            var j;  
      
            for (i=0; i < n; i++)  
            {  
              for (j=0; j < n; j++)  
              {  
                   if (i === j)  
                   {  
                      
                    document.write(' 1 ');  
                   }  
                            
                   else   
                    {  
                     document.write(' 0 ');}  
                }  
                    
                document.write('<--Column' +[n-i]);  
                document.write('<br>'); 
               }  
           }   






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array : [1,2,3,4,5]
Expected Output : 2,4 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    function segundopenultimo(arr_num)  
    {  

    var caa=prompt('Ingrese cadena numerica:','');
    var arr_num = caa.split("");//elemenos de una cadena a un array

     arr_num.sort(function(x,y)  
         {  
          return x-y;  
         });  
      var unica = [arr_num[0]];  
      var result = [];  
        
      for(var j=1; j < arr_num.length; j++)  
      {  
        if(arr_num[j-1] !== arr_num[j])  
        {  
          unica.push(arr_num[j]);  
        }  
      }  
        result.push(unica[1],unica[unica.length-2]);  
      return alert(result.join(',')); 
      }  




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function perfecto(numerito)  
{  

   var numerito=prompt('Ingrese numero para determinar si es perfecto:','');
var temp = 0;  
   for(var i=1;i<=numerito/2;i++)  
     {  
         if(numerito%i === 0)  
          {  
            temp += i;  
          }  
     }  
     
     if(temp === numerito && temp !== 0)  
        {  
       alert("El número" + numerito +" es perfecto.");  
        }   
     else  
        {  
       alert("El numero " + numerito +" no esperfecto.");  
        }     
 }   






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
13. Write a JavaScript function to compute the factors of a positive integer. 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    function factor(n)  
    {  

   var n=prompt('Ingrese numero para obtener sus factores:','');
     var num_factors = [], i;  
       
     for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)  
      if (n % i === 0)  
      {  
       num_factors.push(i);  
       if (n / i !== i)  
        num_factors.push(n / i);  
      }  
     num_factors.sort(function(x, y)  
       {  
         return x - y;});  // numeric sort  
         return alert(num_factors);  
        }   




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
14. Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function monedas()
{

  var cc=prompt('Ingrese cantidad para monedas de 25, 10, 5, 2,1:','');
  alert(cantidadtomonedas(cc, [25, 10, 5, 2,1])); 
}

function cantidadtomonedas(amount, coins)   
    {  
      if (amount === 0)   
      {  
         return [];  
       }   
     else  
       {  
         if (amount >= coins[0])   
           {  
            left = (amount - coins[0]);  
            return [coins[0]].concat( cantidadtomonedas(left, coins) );  
            }   
          else  
            {  
             coins.shift();  
             return cantidadtomonedas(amount, coins);  
            }  
        }  
    }   






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    function exponente(b,n)  
    {  
      var b=prompt('Ingrese la base:','');
      var n=prompt('Ingrese exponente:','');

      var ans = 1;  
            for (var i =1; i <= n; i++)  
            {  
                    ans = b * ans;          
            }  
            return alert(ans);  
    }  

    
    



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
16. Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function unicos(n)  
{  
  var n=prompt('Ingrese texto (ejmp;"elperroestaflaco"):','');
 var str=n;  
 var uniql="";  
 for (var x=0;x < str.length;x++)  
 {  
  
 if(uniql.indexOf(str.charAt(x))==-1)  
  {  
  uniql += str[x];    
    
   }  
  }  
  return alert(uniql);    
}    





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function ocurrencias()
{

Object.size = function(obj) {
	var size = 0;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
}

var str =prompt('Ingrese palabra a obtener las concurrencias:','');
var letters = new Object;
    
for(x = 0, length = str.length; x < length; x++) {
	var l = str.charAt(x)
	letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
}

for(key in letters) {
	document.write(key + ' :: ' + letters[key]);
	document.write("<br>");
}
document.write("Total de Letras: "+Object.size(letters));

}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
18. Write a function for searching JavaScript arrays with a binary search. 
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
    function array_busquedaBinaria(narray, delement) {  
      narray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]; 
      delement=6;
       var mposicion = Math.floor(narray.length / 2);  
      
       if (narray[mposicion] === delement){  
          return mposicion;  
       }  
       else if (narray.length === 1)   
       {  
          return null;  
       }  
       else if (narray[mposicion] < delement) {  
          var arr = narray.slice(mposicion + 1);  
          var res = array_busquedaBinaria(arr, delement);  
          if (res === null)  
          {  
             return null;  
          }  
          else {  
             return mposicion + 1 + res;  
          }  
       }  
       else {  
          var arr1 = narray.slice(0, mposicion);  
          return alert(array_busquedaBinaria(arr1, delement));  
       }  
    }  
      

*/
      






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
19. Write a JavaScript function that returns array elemen ts larger than a number. 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function mayores()
{

var n =prompt('Ingrese el numero inferior:','');
var caa =prompt('Serie de Numeros por comas:','');
var arr_num = caa.split(",");

var result = arr_num. filter(BiggerElements(n));  
alert("Los números mayores a "+ n + " son " + result); 
}

function BiggerElements(val)  
   {  
     return function(evalue, index, array)  
     {  
     return (evalue > val);  
     };  
   }  








/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    function aleatorias(l)  
    {  
      var l=prompt('Ingrese que tan larga quiere la lista de caracteres aleatorios alfanumericos:','');
      var text = "";  
      var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
    for(var i=0; i < l; i++ )  
      {    
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));  
      }  
      return alert(text);  
    }  
    
    





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array : [1, 2, 3] and subset length is 2 
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function subset(arra, arra_size){
  var arra_size =prompt('Ingrese el tamaño del arreglo:','');
  var ara =prompt('Serie del arreglo por comas:','');
  var arra = ara.split(",");

  var result_set = [],   
      result;  
          
  for(var x = 0; x < Math.pow(2, arra.length); x++)  
      {  
        result = [];  
        i = arra.length - 1;   
         do  
          {  
          if( (x & (1 << i)) !== 0)  
              {  
                 result.push(arra[i]);  
               }  
            }  while(i--);  
      
        if( result.length >= arra_size)  
           {  
              result_set.push("["+result+"]");  
            }  
        }  
      
        return alert(result_set);   
    }  
      




