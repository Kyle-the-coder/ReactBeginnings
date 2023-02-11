

function kangaroo(x1, v1, x2, v2) {
    if(v1<v2){
        return "NO"
    } else if((x2 - x1)%(v1 -v2) == 0) {
        return "YES"
    } else {
        return "NO"
    }

}

const firstMultipleInput = "0 2 5 3";

const x1 = 0

const v1 = 2

const x2 = 5

const v2 = 3



console.log(kangaroo(x1, v1, x2, v2))