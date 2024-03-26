const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
/** Update Many Organizations in one go */
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
/** Find Macthing object Id  */
// module.exports.getData = async (req, res) => {
//     const data = await prisma.customers.findFirst({
//         where:{
//                 customerid:{in:req.body.ids},
//             }
//         }
//     )
//     res.json(data)
// }
/** Get All organizations */
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
/** Default Route */
module.exports.hello = async (req,res)=>{
    res.json("Hello");
}