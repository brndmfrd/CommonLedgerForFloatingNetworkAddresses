@26June2016
Useful for leaning, understanding the creation of ssl key pairs.
Used with Spike: EchoV1
This directory is contained in the spike directory.
Otherwise, the scripts are no longer used.

The scripts in this directory use openssl to generate ssl key pairs as well 
as self-sign certificates for development and testing purposes.

-----------------------------------
ssl_create.sh
-----------------------------------
Generate the ssl files.


-----------------------------------
ssl_pubkey.sh
-----------------------------------
Derive the public key. Used by the client.


-----------------------------------
ssl_sign.sh
-----------------------------------
Used to self-sign an ssl cert.