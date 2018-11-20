//  var name = 'JJY';

//  if(name == 'JJY'){
//      console.log("My name is JJY");
//  } else if  (name == 'jjy'){
//      console.log("My name is jjy");
//  }

for (var i = 0; i < 5; i++)
{
    console.log("i = %d", i);
}

// let time1 = 100;
// while (time1 > 100)
// {
//     console.log("Result: %d", time1);
//     time--;
// }

// let time2 = 100;
// do {
//     console.log("Result: %d", time1);
//     time--;
// } while (time2 > 100)

let action = "eat";
switch(action) 
{
    case 'draw':
        console.log('draw');
        break;
    case 'eat':
        console.log('eat');
        break;
     default:
        console.log('nothing');
}