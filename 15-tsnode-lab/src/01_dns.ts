import * as dns from 'dns';
import { hostname } from 'os';

dns.resolve4('yahoo.com', (err, addresses) =>{
    console.log(`yahoo.com IPs: ${JSON.stringify(addresses)}`)
    addresses.map(addr => dns.reverse(addr, (err, hostnames)=>{
        console.log(`reverse for ${addr}: ${JSON.stringify(hostnames)}`)
    }))
})