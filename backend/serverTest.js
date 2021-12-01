
import appTest from './api/appTest.js'

const port = 5200

appTest.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})