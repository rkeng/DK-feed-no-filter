// random family code generator
let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
let numbers = '0123456789'.split('');
let codePool = letters.concat(numbers);

function generateCode() {
      let code = "";
      for(let i=0; i<6; i++) {
         code += codePool[Math.floor(Math.random()*codePool.length)]
      }
   return code;
}