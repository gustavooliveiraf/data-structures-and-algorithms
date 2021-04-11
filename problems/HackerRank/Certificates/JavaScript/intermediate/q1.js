'use strict';

const https = require('https');

const apiEndpointUser = 'https://jsonmock.hackerrank.com/api/article_users?username=';
const apiEndpointTransaction = 'https://jsonmock.hackerrank.com/api/transactions?&userId=';

function doRequest(url) {
  return new Promise((resolve) => {
    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    })
  });
}

async function getNumTransactions(username) {
  const user = await doRequest(apiEndpointUser + username);
  if (user.data.length === 0) return 'Username Not Found';
  
  const userId = user.data[0].id;
  const transaction = await doRequest(apiEndpointTransaction + userId);

  return transaction.total;
}

(async () => {
  console.log(await getNumTransactions('epaga'));
  console.log(await getNumTransactions('jay'));
})();
