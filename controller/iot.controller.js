const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

// module.exports.getData = async (req, res) => {
//     const data = await prisma.user.findMany({
//         }
//     )
//     res.json(data)
// }


module.exports.getData = async (req, res) => {
    const data = await prisma.user.create({
        data:{
            id:1,
            name:"Ali",
            email:"ali@gmail.com"
        }
        }
    )
    res.json(data)
}

module.exports.hello = async (req,res)=>{
    res.json("Hello");
}