const rest = (res, err, data) => {
    if (err) {
        res.json({
            success: false,
            data: err
        })
    } else {
        res.json({
            success: true,
            data: data
        })
    }
}

module.exports = { rest }