const BookModel = require("../../models/bookOrder.model");

exports.deleteOrderDetails = async (req,res) =>{
    let orderId = req.params.id;

    if(orderId === undefined){
        
        return res.status(400).json({
            success: false,
            message: `Please provide order id.`,
        })
    }
    try {
        let orderdetails = await BookModel.findByIdAndDelete(orderId);

        if(!orderdetails){
            return res.status(400).json({
                success: false,
                message: `No orders found.`,
            })
        }

        return res.status(200).json({
            success: true,
            message: `Order successfully deleted.`,
            
        })
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: `Internal Server Error.`,
        })
    }
}