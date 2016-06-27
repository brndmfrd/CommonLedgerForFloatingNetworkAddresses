# Use current rsa key to create public key
openssl rsa -in ssl-key.pem -pubout > ssl-key.pub
