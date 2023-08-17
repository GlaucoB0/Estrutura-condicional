let a = 1;
let b = -3;
let c = -54;
let bask_p;
let bask_n;
let delta = (b*b)-4*a*c;

bask_p = ((-b) + Math.sqrt(delta)) /(2*a);
bask_n = ((-b) - Math.sqrt(delta)) /(2*a);

console.log(`x1 = ${bask_p}\nx2 = ${bask_n}`)