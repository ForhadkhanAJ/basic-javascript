//1. ARRAY declare...
//var friendsAge = [15, 16, 19, 17];
//console.log(friendsAge);

//2. konti koto NUMBER, janar jonno code...
//var friendsAge = [12, 13, 14, 15];
//console.log(friendsAge [0]);
//console.log(friendsAge [3]);
//console.log(friendsAge [5]);

//3. array theke kono ELEMENT ke niye VARIABLE e rakha lagle, simple code...
//var friendsAge = [15, 16, 17, 18];
//var jacqulineAge = friendsAge[2];
//console.log(jacqulineAge);

//4. kono Element er value ba man UPDATE korte hole, simple code system apply koro...
//var friendsAge = [16, 17, 18, 19]
//friendsAge[1] = 21;
//console.log(friendsAge);

//5. kono akta ELEMENT er POSITION koto, dhoro akhane ai array er moddhe 14 ase, er position koto amra janbo, jante...
//var friendsAge = [11, 12, 17, 14];
//var positionKoto = friendsAge.indexOf(17);
//console.log(positionKoto);

//6. array er moddhe kono ELEMENT ase ki nai, (jodi array er moddhe thake, taile 0 ba tar chaite beshi hobe), (jodi na thake taile -1 hobe), simple year!, ai jinish ta future e onek kaje lagbe (assa array er index ta koto?)...
//var friendsAge = [11, 12, 17, 14];
//var positionKoto = friendsAge.indexOf(171);
//console.log(positionKoto);

//7. array er moddhe ami jodi kono ELEMENT ADD kori, tobe push diye add korbo, (mone rakhte hobe, ai add kora element ti kintu shobar sheshey boshbe, local bus mone rakhba)...
//var friendsAge = [11, 12, 17, 14];
//console.log(friendsAge);
//friendsAge.push(22);
//console.log(friendsAge);

//8. kono shomoy jodi janar dorkar pore, (((kono ARRAY er vitor koita ELEMENT ase)), tobe array er nam ta likhba r ((.length)) boshai diba), taile array er moddhe koita ELEMENT ase jana jabe, (array er length tumi jano akhon, ai ta onek important akta jinish, programming er konai kanai, chipa, chapai ai ta lagbe)...
//var friendsAge = [11, 12, 17, 14];
//console.log(friendsAge.length);
//friendsAge.push(22);
//console.log(friendsAge.length);

//9. kono element ke ber kore dite, pop korte hoi, aita by default shesher element ke ber kore dei...
//var friendsAge = [11, 12, 17, 14];
//console.log(friendsAge.length);

//friendsAge.push(22);
//friendsAge.push(100);
//console.log(friendsAge);
//console.log(friendsAge.length);

//friendsAge.pop();
//friendsAge.pop();
//console.log(friendsAge);
//console.log(friendsAge.length);

//10. add ELEMENT at the beginning...
//var friendsAge = [11, 12, 17, 14];
//friendsAge.unshift(100, 200);
//console.log(friendsAge);

//11. remove ELEMENT at the beginning...
var friendsAge = [11, 12, 17, 14];
friendsAge.shift();
console.log(friendsAge);