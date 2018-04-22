const { Item } = require('../../models/Item')
const { rest } = require('../../helpers/return')

module.export = createItem = (req, res) => {
    const newItem = new Item({
        title: "haha"
    })

    newItem.save((err, item) => {
        rest(res, err, item)
    })
}


module.exports = {
    createItem
}