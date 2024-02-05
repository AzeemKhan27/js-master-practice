const myObj = {
    js : 'javaScript',
    cpp : "c++",
    py : "python",
    rb : "ruby",
    swift : "swift by apple"
}

for(const key in myObj){
    console.log(`${key} file extension is ${myObj[key]}`);
}


const programing_language = ['JS','CPP','PY','RUBY','JAVA']

// for (const key in programing_language) {
//     console.log(programing_language[key]);
// }


//+++++++++++ MAP ++++++++++++++

const map = new Map()
map.set('IN','India')
map.set('US','USA')
map.set('UAE','Dubai')

for (const key in map) {
     console.log(key);   // we can't iterate "Map()" becz Map() is not iterable.
}




