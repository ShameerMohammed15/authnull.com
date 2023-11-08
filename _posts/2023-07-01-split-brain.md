---
layout: post
title:  "How AuthNull’s Decentralized Architecture Eliminates Split Brain Problem"
excerpt: "AuthNull: The PAM solution that's immune to split brain problems that come with traditional PAM solutions. Read the blog to learn more."
image: /assets/images/split-brain-cyberark.png
categories: blog
author: ahrar
tags: decentralized-identity
datePub: August 01st 2023
highlighted: false
duration: "6 mins"
avatar: /assets/images/ahrar.jpg
---

Much has been <a href="https://cyberark-customers.force.com/s/question/0D52J00007xTuLoSAK/what-happens-during-a-vault-splitbrain-scenario" >discussed about the split-brain scenario </a> that occurs in Cyberark's vault, or any other credential storage that is HA. 

Split brain is a condition that can occur in distributed systems when two or more nodes disagree about the state of the system. This can happen for a number of reasons, such as network partitioning or hardware failures.<br/><br/>

In a traditional PAM solution such as Cyberark, split brain can be a major problem. If two or more nodes disagree about who has access to a particular system, it can lead to security breaches, data corruption, and service outages.<br/><br/>

AuthNull solves for this split brain problem in an elegant fashion. By eliminating the need to use a vault, AuthNull ensures that no split brain scenario can occur. 
<br/><br/>
### How does a Decentralized Vault work?
 AuthNull is a decentralized PAM solution that is immune to split brain because it uses end user authenticator wallet for credential storage and not rely on a central server or database for password or credential storage. A decentralized architecture that distributes the state of the system across a network of wallets.<br/><br/>

<img src="/assets/images/decentralized_system.png" /> <br/>
### A Decentralized system works in the following manner: <br/><br/>

--- Organizations verify real world identity identity and issue a DID after onboarding users through an Identity Provider. Every organization tenant and user is used a unique DID., identifiers that are generated using EDSA / ED25519 signature scheme. 
<br/><br/>
--- AuthNull uses the W3C Decentralized Identity (W3C DID) standards and W3C Verified Credentials (W3C VC).
Users can then be issued verified credentials for specific apps, servers or infrastructure. 
<br/><br/>
--- These credentials are signed by (a) organization’s private key, and users’s private key and can be stored on (a) wallet and (b) Decentralized blockchains. 
<br/><br/>
-- These credentials are managed decentrally (using the wallet) and are verified before issuing access. 
<br/><br/>
The wallets are unique to each user and they store the credentials for that user. If a wallet fails or is disconnected from the network, the other wallets continue to operate without interruption. This is because the other wallets still have the credentials for their user.<br/><br/>

## Benefits of AuthNull’s Decentralized Architecture<br/><br/>

There are a number of benefits to AuthNull’s decentralized architecture, including:<br/><br/>

--- Immunity to split brain: As mentioned above, AuthNull is immune to split brain because it does not rely on a central server or database for password or credential storage.<br/><br/>

--- High availability: AuthNull is highly available because it can continue to operate even if one or more wallets fail or are disconnected from the network.<br/><br/>

--- Scalability: AuthNull is scalable because it can be easily scaled up or down to meet the needs of any organization.

--- Security: AuthNull is secure because the credentials are encrypted and then distributed across a network of wallets backed by the user’s biometrics. This makes it difficult for attackers to compromise the credentials.<br/><br/>

## Conclusion<br/><br/>

AuthNull is a decentralized PAM solution that is immune to split brain problem as experienced by traditional players like CyberArk. This makes it a highly reliable and secure PAM solution that is ideal for organizations of all sizes.<br/><br/>

If you are looking for a PAM solution that is immune to split brain, then AuthNull is a good option. You can visit the AuthNull website to learn more about the solution and to [sign up for a free trial](https://authnull.com/contactus).<br/><br/>
