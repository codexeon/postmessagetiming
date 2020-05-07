- Modify host file to the following mappings:
```
127.0.0.1       www.testsite1.com
127.0.0.1       www.testsite2.com
```
- Clone project
- NPM install/npm run
- Navigate to the URL: http://www.testsite1.com:3000/
- Click "Add Iframe" button
- Look ad invalid timestamps. Refresh page if it is not reproing. This repros on Edge/Chrome, but not IE/firefox.
- You can also set the iframe to the same domain as main frame and you will not repro.