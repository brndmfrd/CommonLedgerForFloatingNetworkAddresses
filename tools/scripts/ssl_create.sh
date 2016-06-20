# Generate ssl key and cert request

openssl genrsa -out ssl-key.pem 2048
openssl req -new -sha256 -key ssl-key.pem -out ssl-csr.pem
