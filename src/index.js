console.log("hello world!")

let data = [
    {order_id: 10,kot_id: 1,price: 200,quantity: 1},
    {order_id: 10,kot_id: 1,price: 300,quantity: 1},
    {order_id: 11,kot_id: 2,price: 400,quantity: 3}
]

data = data.reduce((dict, v) => { 
    let { order_id, ...rest } = v
    dict[order_id] = dict[order_id] === undefined ? [ rest ] : dict[order_id].concat(rest)
    return dict
}, {})

console.log("result", data);