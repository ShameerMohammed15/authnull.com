---
layout: post
title:  "What is Decentralized Identifier"
image: /assets/images/did.png
excerpt: "Decentralized identifiers (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID."
categories: blog
author: asif
highlighted: "true"
duration: "6 mins"
category: "special"
avatar: /assets/images/asif.jpg
---

Content heavily borrowed from: https://www.w3.org/TR/did-core/ in order to provide a spec definition of DID. 
<br/><br/>
### What are Decentralized Identifiers (DIDs)

 Decentralized identifiers (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. In contrast to typical, federated identifiers, DIDs have been designed so that they may be decoupled from centralized registries, identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a DID, the design enables the controller of a DID to prove control over it without requiring permission from any other party. DIDs are URIs that associate a DID subject with a DID document allowing trustable interactions associated with that subject.
<br/><br/>
Each DID document can express cryptographic material, verification methods, or services, which provide a set of mechanisms enabling a DID controller to prove control of the DID. Services enable trusted interactions associated with the DID subject. A DID might provide the means to return the DID subject itself, if the DID subject is an information resource such as a data model.
<br/><br/>


 As individuals and organizations, many of us use globally unique identifiers in a wide variety of contexts. They serve as communications addresses (telephone numbers, email addresses, usernames on social media), ID numbers (for passports, drivers licenses, tax IDs, health insurance), and product identifiers (serial numbers, barcodes, RFIDs). URIs (Uniform Resource Identifiers) are used for resources on the Web and each web page you view in a browser has a globally unique URL (Uniform Resource Locator).
<br/><br/>
The vast majority of these globally unique identifiers are not under our control. They are issued by external authorities that decide who or what they refer to and when they can be revoked. They are useful only in certain contexts and recognized only by certain bodies not of our choosing. They might disappear or cease to be valid with the failure of an organization. They might unnecessarily reveal personal information. In many cases, they can be fraudulently replicated and asserted by a malicious third-party, which is more commonly known as "identity theft".
<br/><br/>
The Decentralized Identifiers (DIDs) defined in this specification are a new type of globally unique identifier. They are designed to enable individuals and organizations to generate their own identifiers using systems they trust. These new identifiers enable entities to prove control over them by authenticating using cryptographic proofs such as digital signatures.
<br/><br/>
Since the generation and assertion of Decentralized Identifiers is entity-controlled, each entity can have as many DIDs as necessary to maintain their desired separation of identities, personas, and interactions. The use of these identifiers can be scoped appropriately to different contexts. They support interactions with other people, institutions, or systems that require entities to identify themselves, or things they control, while providing control over how much personal or private data should be revealed, all without depending on a central authority to guarantee the continued existence of the identifier. These ideas are explored in the DID Use Cases document [DID-USE-CASES].
<br/><br/>
This specification does not presuppose any particular technology or cryptography to underpin the generation, persistence, resolution, or interpretation of DIDs. For example, implementers can create Decentralized Identifiers based on identifiers registered in federated or centralized identity management systems. Indeed, almost all types of identifier systems can add support for DIDs. This creates an interoperability bridge between the worlds of centralized, federated, and decentralized identifiers. This also enables implementers to design specific types of DIDs to work with the computing infrastructure they trust, such as distributed ledgers, decentralized file systems, distributed databases, and peer-to-peer networks. 

<br/><br/>


### DIDs and DID URLs<br/> 

A Decentralized Identifier, or DID, is a URI composed of three parts: the scheme did:, a method identifier, and a unique, method-specific identifier specified by the DID method. DIDs are resolvable to DID documents. A DID URL extends the syntax of a basic DID to incorporate other standard URI components such as path, query, and fragment in order to locate a particular resource—for example, a cryptographic public key inside a DID document, or a resource external to the DID document. These concepts are elaborated upon in 3.1 DID Syntax and 3.2 DID URL Syntax. <br/><br/>
### DID subjects<br/>

The subject of a DID is, by definition, the entity identified by the DID. The DID subject might also be the DID controller. Anything can be the subject of a DID: person, group, organization, thing, or concept. This is further defined in 5.1.1 DID Subject. <br/><br/>
### DID controllers<br/>

The controller of a DID is the entity (person, organization, or autonomous software) that has the capability—as defined by a DID method—to make changes to a DID document. This capability is typically asserted by the control of a set of cryptographic keys used by software acting on behalf of the controller, though it might also be asserted via other mechanisms. Note that a DID might have more than one controller, and the DID subject can be the DID controller, or one of them. This concept is documented in 5.1.2 DID Controller. <br/><br/>
### Verifiable data registries

In order to be resolvable to DID documents, DIDs are typically recorded on an underlying system or network of some kind. Regardless of the specific technology used, any such system that supports recording DIDs and returning data necessary to produce DID documents is called a verifiable data registry. Examples include distributed ledgers, decentralized file systems, databases of any kind, peer-to-peer networks, and other forms of trusted data storage. This concept is further elaborated upon in 8. Methods. <br/><br/>
### DID documents<br/>

DID documents contain information associated with a DID. They typically express verification methods, such as cryptographic public keys, and services relevant to interactions with the DID subject. The generic properties supported in a DID document are specified in 5. Core Properties. A DID document can be serialized to a byte stream (see 6. Representations). The properties present in a DID document can be updated according to the applicable operations outlined in 8. Methods. <br/><br/>
### DID methods<br/>

DID methods are the mechanism by which a particular type of DID and its associated DID document are created, resolved, updated, and deactivated. DID methods are defined using separate DID method specifications as defined in 8. Methods.<br/><br/> 
### DID resolvers and DID resolution<br/>

A DID resolver is a system component that takes a DID as input and produces a conforming DID document as output. This process is called DID resolution. The steps for resolving a specific type of DID are defined by the relevant DID method specification. The process of DID resolution is elaborated upon in 7. Resolution. <br/><br/>
###  DID URL dereferencers and DID URL dereferencing<br/>

A DID URL dereferencer is a system component that takes a DID URL as input and produces a resource as output. This process is called DID URL dereferencing. The process of DID URL dereferencing is elaborated upon in 7.2 DID URL Dereferencing. 

