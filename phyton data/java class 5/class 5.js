// 1
let equal11 = (Number1,Number2) => (
    Number1 == 40 ?'false1':
    Number2 == 40 ?'false2':
    Number1 + Number2 == 40 ?'true':'false3' 
)
console.log(equal11(4,40))


// 2
let poe = vvv => vvv>0 ;
console.log(poe(-3))


// 3
let mt2 = anan => anan % 2 == 0;
console.log(mt2(4))


// 4
let egl = (aa,bb) => (
    aa == bb ?'equal':
    aa > bb ?'a is greater':'lesser'
)
console.log(egl(6,5))


// 5
let trianglef = (a,b,c) => (
    a == b && b == c && c == a ?'equal':
    a == b || b == c || c == a ?'two side equal':'scalene'
)
console.log(trianglef(1,1,1))


// 6
let mt = bbb => bbb % 3 === 0;
console.log(mt(8))


// 7
let muti = nnn => nnn % 4 === 0;
console.log(muti(8))


// 8
let monthseason = month => (
    month == 12 || month == 1 || month == 2 ? 'winter':
    month >= 3 && month <= 5 ? 'spring':
    month >= 6 && month <= 8 ? 'summer':
    month >= 9 && month <= 11 ? 'autumn':'fals'
)
console.log(monthseason(6))