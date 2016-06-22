#!/bin/bash
touch ca-database.txt
openssl ca -revoke client2-crt.pem -keyfile ca-key.pem -config ca.cnf -cert ca-crt.pem -passin 'pass:password'
openssl ca -keyfile ca-key.pem -cert ca-crt.pem -config ca.cnf -gencrl -out ca-crl.pem -passin 'pass:password'
