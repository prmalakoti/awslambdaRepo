# Getting deploy Express app aws lambda
### `npm install -g serverless`

Add/update credentials
Add : ### `serverless config credentials --provider aws --key <access-key> --secret <secret-key>` 
Update: ### `serverless config credentials --provider aws --key <access-key> --secret <secret-key> -o` 

Create serverless template
### `serverless create -t aws-nodejs`

update serverless.yml

### 'npm insatll serverless-http'

Import in handler.js file and module.exports.hello = serverless(app);

add script in package.json 
### `"deploy": "serverless deploy"`
Finally run this command for deploy on server 
### `npm run deploy`