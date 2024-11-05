// function cCompiler() {
//   return "C Compiler"
// }
// function javaCompiler() {
//   return "Java Compiler"
// }
// function selectLanguage (clbk) {
//  return "You have selected: "+clbk()
// }

// const result = selectLanguage(cCompiler);
// console.log(result);



// CallBack function:-
function selectLanguage(language)
{
    let data;
    if(language == "c")
    {
        function cCompiler()
        {
            return "C Compiler";
        }
        data = cCompiler();
    }
    if (language =="java")
    {
        function javaCompiler()
        {
            return "Java Compiler";
        }
        data = javaCompiler();
    }
    return data;
}
console.log(selectLanguage("c"));
