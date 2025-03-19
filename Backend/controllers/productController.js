const productModel = require("../models/productModel.js");
const cloudinary = require("cloudinary").v2

const addProduct = async (req,res) =>{
    try {
        const {name, description, price, category, subCategory, bestseller, sizes} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        const imagesURL = await Promise.all(
            images.map(async (item)=> {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url
            })
        )

        console.log(name, description, price, category, subCategory, bestseller, sizes);
        console.log(imagesURL)

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesURL,
            date: Date.now()
        }

        console.log(productData)

        const product = new productModel(productData)
        await product.save()

        res.json({success: true, message: "Product Added"})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

module.exports = {addProduct};