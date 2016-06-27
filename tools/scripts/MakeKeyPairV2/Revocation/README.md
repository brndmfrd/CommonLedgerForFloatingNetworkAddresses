Certificate Revocation

Revoke the cert from a single client without changing all the things.

To run the revokeClient2.sh script, we need access to the pem files we created.
Because I don't want to accidentally revoke client2, the files have been moved into 
this directory.

This means, when you want to revoke client2's cert, move the script to the directory with 
all the pem files (probably one level up).

Also, be sure to add the CLR to the server. For an example see clrServer.js (it's here to 
serve as an example).
