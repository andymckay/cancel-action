const https = require('https');
const options = {
  hostname: 'api.github.com',
  path: `/repos/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}/cancel`,
  headers: {
    'Authorization': `token ${process.env.INPUT_TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'actions/cancel-action'
  },
  method: 'POST'
}

const req = https.request(options, (res) => {
  res.on('data', (data) => {
    if (res.statusCode != 202) {
      let parsed = JSON.parse(data)
      console.log(`Error: ${parsed.message}`)
      process.exit(1)
    } else {
      console.log('Cancelled successfully.')
      process.exit(0)
    }
  })
})

req.on('error', (error) => {
  console.log(`HTTP Error: ${error}`)
  process.exit(1)
})

req.end();
