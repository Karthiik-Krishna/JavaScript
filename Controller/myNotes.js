/*exports.getNotes = async(req, res) => {
    try {
        res.status(200).json({
            message: "You can now get the requested notes"
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.newNotes = async(req, res) => {
    try {
        res.status(200).json({
            data: "New notes added successfully!"
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.invalid = async(req, res) => {
    res.status(200).send('Welcome all')

}*/

exports.packages = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Successfully seeing packages'
        })
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: 'Package Error'
        })
    }
}

exports.online_booking = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Successfully seeing online_booking'
        })
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: 'online_booking Error'
        })
    }
}

exports.media = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Successfully seeing media'
        })
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: 'media Error'
        })
    }
}

exports.contact_us = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Successfully seeing contact_us'
        })
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: 'contact_us Error'
        })
    }
}

exports.login = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Successfully seeing login'
        })
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: 'login Error'
        })
    }
}

exports.admin = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Successfully seeing admin'
        })
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: 'admin Error'
        })
    }
}