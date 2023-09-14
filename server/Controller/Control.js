const Model = require('../Model/Model')

exports.viewData = async(req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(err){
       message: err 
    }
}

exports.addData = async(req, res) => {
    const data = new Model({
        name: req.body.name,
        status: req.body.status
    })
    try{
        const save = await data.save()
        res.json(save)
    }
    catch(err){
       message: err 
    }
}

exports.updateData = async(req, res) => {
    try{
        const data = await Model.updateOne(
            {_id: req.params.postId},
            {
                $set: {
                    name: req.body.name,
                    status: req.body.status
                }
            }
        )

        res.json(data)
    }
    catch(err){
       message: err 
    }
}

exports.deleteData = async(req, res) => {
    try{
        const data = await Model.deleteOne({_id: req.params.postId})
        res.json(data)
    }
    catch(err){
       message: err 
    }
}