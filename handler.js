'use strict';

module.exports.hello = async event => {
  let a = 1;
  let b = 2.2;
  let soma = a + b;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        resultado: `${soma}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
