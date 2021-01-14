const mongoose = require('mongoose')
mongoose.Promise = global.Promise

export const connect = (url: string) =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


