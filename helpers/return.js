const rest = (res, err, data) => {
    if (err) {
        res.json({
            success: false,
            data: {},
            message: err
        })
    } else {
        if (!data || !data.length) {
            res.json({
                success: false,
                data: {},
                message: 'No data matching the request was found.'
            })
        } else {
            res.json({
                success: true,
                data: data,
                message: 'Data successfully loaded'
            })
        }
    }
}

module.exports = { rest }
