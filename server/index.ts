import server from './src/api/server'
const PORT = process.env.PORT || 5000
import {connect} from './connect'



connect(
  'mongodb+srv://swavay23:Q9PTiSaZBNWVJxLP@cluster0.voceq.mongodb.net/mikeStore?retryWrites=true&w=majority'
)
  .then(() =>
    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`)
    })
  )
  .catch((e: Error) => console.error(e))



