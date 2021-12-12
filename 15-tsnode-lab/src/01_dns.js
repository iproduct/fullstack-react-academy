"use strict";
exports.__esModule = true;
var dns = require("dns");
dns.resolve4('yahoo.com', function (err, addresses) {
    console.log("yahoo.com IPs: ".concat(JSON.stringify(addresses)));
    addresses.map(function (addr) { return dns.reverse(addr, function (err, hostnames) {
        console.log("reverse for ".concat(addr, ": ").concat(JSON.stringify(hostnames)));
    }); });
});
