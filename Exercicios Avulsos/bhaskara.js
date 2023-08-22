let a = Number(prompt("valor de A:"))
let b = Number(prompt("valor de B:"))
let c = Number(prompt("valor de C:"))
let bask_p
let bask_n
let delta = (b*b)*(-4)*a*c

bask_p = ((-b) + Math.sqrt(delta)) /(2*a)
bask_n = ((-b) - Math.sqrt(delta)) /(2*a)

console.log(bask_p)

