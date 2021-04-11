'use strict';

const https = require('https');

const apiEndpoint = 'https://jsonmock.hackerrank.com/api/countries?page=';

class PageInfo {
  constructor(page, perPage, total, totalPages) {
    this.page = page;
    this.perPage = perPage;
    this.total = total;
    this.totalPages = totalPages;
  }
}

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

async function getCountryName(code) {
  let firstPage = await doRequest(apiEndpoint + 1);
  const pageInfo = new PageInfo(firstPage.firstCountryRecord, firstPage.per_page, firstPage.total, firstPage.total_pages);

  let data = firstPage.data;
  for (let page = 2; page <= pageInfo.totalPages + 1; page++) {
    for (let countryRecord of data)
      if (countryRecord.alpha2Code === code)
        return countryRecord.name

    data = (await doRequest(apiEndpoint + page)).data;
  }
}

(async () => {
  console.log(await getCountryName('AF'));
})();
