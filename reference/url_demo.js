const url = require('url')

const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Serialized URL
console.log(myurl.href)

// Host
console.log(myurl.host)


// Hostname (does not get port)
console.log(myurl.hostname)

// Pathname
console.log(myurl.pathname)

// Serialized Query
console.log(myurl.search)

// Params object 
console.log(myurl.searchParams)

// Add param
myurl.searchParams.append('abe', '123');

// Params object 
console.log(myurl.searchParams)