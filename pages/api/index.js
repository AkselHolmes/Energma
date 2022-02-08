const fs = require('fs')

export default function handler(req, res) {
    const file = fs.readFileSync(`public/${req.query.img}`)
    res.status(200).end(file, 'binary')
}