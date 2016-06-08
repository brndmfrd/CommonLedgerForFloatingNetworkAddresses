# CommonLedgerForFloatingNetworkAddresses
Client and server project for keeping track of floating IP addresses.

A server application lives on a location with a reliable, static IP address.
A client application lives on a location with a floating IP address.
When the client application is executed it established a connection with the server application.
The server application derives the source address from the message header as well as a unique identifier for the client, both used to update the IP address associated with the given machine. 
