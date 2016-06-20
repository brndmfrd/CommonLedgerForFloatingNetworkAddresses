# create self signed cert
# assumed key and csr names -- specific to this server

openssl x509 -req -in ssl-csr.pem -signkey ssl-key.pem -out ssl-cert.pem
