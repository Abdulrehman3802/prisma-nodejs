const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

// module.exports.getData = async (req, res) => {
//     const data = await prisma.customers.updateMany({
//         where:{
//             customerid:{in:req.body.ids},
//         },
//         data:{
//             credit:0
//         }
//     }
//     )
//     res.json(data)
// }
// module.exports.getData = async (req, res) => {
//     const data = await prisma.customers.findFirst({
//         where:{
//                 customerid:{in:req.body.ids},
//             }
//         }
//     )
//     res.json(data)
// }
// module.exports.getData = async (req, res) => {
//     const data = await prisma.customers.findMany({
//
//         }
//     )
//     res.json(data)
// }

module.exports.getData = async (req, res) => {
    const data = await prisma.customers.updateMany({
            where:{
                customerid:{in:req.body.ids},
            },
        data:{
                is_deleted:false
        }
        }
    )
    res.json(data)
}
module.exports.hello = async (req,res)=>{
    res.json("Hello");
}