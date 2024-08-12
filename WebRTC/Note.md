# WebRTC (Web Real Time Communication)
- It is a peer to peer (P2P) protocol.
- That means we directly send our media over to the other person without the need of a centeral server.

## Why we need WebRTC?
- If we create a real time communication needed application, and there we can meet person to person.
Here if we use web socket that means we have a central server.
- What if can send this video & audio data directly to that person somehow, wouldn't it be nice?
- If we can do that there is no need of a central server to bypass the video & audio data, and we can do that in very less latency.
- If there are N people in P2P, each participant is connected to every other participants.

## ICE candidates (Interactive Connectivity Establishment)
- It represents the potential method through which two peers on the inteernet can communcate with each other.
- Each candidate is essentially a combination of an IP address & port, along with additional info on how to use them for establishing a connection.

## STUN server (Session Traversal Utilities for NAT)
- To obtain our ICE candidates we use google's STUN server.
- It gives us back publically accessible IPs.
- It shows us how the world sees us.

## TURN Server (Traversal Using Relays around NAT)
- If direct connectivity test fail (typically due to restricive NATs or firewalls), relayed candidates provided by TURN serves are used.
- TURN servers relay media traffic between the participating peers when no direct path is feasible.

## SDP (Session Description Protocol)
- When we create an offer or answer in WebRTC, we are essentially generating a SDP message.
- This SDP message contains metadata about the media streams and data channels that we wish to share with the remote peer.

## Signaling Server
- Signaling server can be an http or ws server.
- The purpose of signaling server is to allow the peers to transfer the SDP & ICE candidates.
- Once it has transfered, peers can communicate even if the signaling server is down.

## RTC Peer Connection
- It is a class provided by Browser to enable peer to peer communication.
- First we will create an instance of a RTC Peer Connection.
- Then we will create an offer and set it as local description.
- Create offer method will generate the SDP. 
- when we set the local description, it starts to get the ICE candidates, and we pass the offer to the signaling server.
- Then the another peer will recieves the offer and set it to the remote description and generate the ICE candidates by creating answer & set it to the local description.
- Now connection will be established and peers can add tracks and get tracks and see.