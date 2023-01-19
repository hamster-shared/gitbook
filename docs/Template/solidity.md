---
sidebar_position: 1
---

# Solidity

Some solidity templates.

## NFTs

Wo providers some NFT templates based on [openzeppelin](https://openzeppelin.com)

### NFT Collection Contract (ERC721)

ERC721 is a more complex standard than ERC20, with multiple optional extensions, and is split across a number of contracts. The OpenZeppelin Contracts provide flexibility regarding how these are combined, along with custom useful extensions. Check out the API Reference to learn more about these.

#### Constructing an ERC721 Token Contract

We’ll use ERC721 to track items in our game, which will each have their own unique attributes. Whenever one is to be awarded to a player, it will be minted and sent to them. Players are free to keep their token or trade it with other people as they see fit, as they would any other asset on the blockchain! Please note any account can call awardItem to mint items. To restrict what accounts can mint items we can add Access Control.

Here’s what a contract for tokenized items might look like:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/draft-ERC721VotesUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract MyNFT is Initializable, ERC721Upgradeable, ERC721EnumerableUpgradeable, ERC721URIStorageUpgradeable, PausableUpgradeable, OwnableUpgradeable, ERC721BurnableUpgradeable, EIP712Upgradeable, ERC721VotesUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC721_init("MyNFT", "MNFT");
        __ERC721Enumerable_init();
        __ERC721URIStorage_init();
        __Pausable_init();
        __Ownable_init();
        __ERC721Burnable_init();
        __EIP712_init("MyNFT", "1");
        __ERC721Votes_init();
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
    internal
    whenNotPaused
    override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
    internal
    override(ERC721Upgradeable, ERC721VotesUpgradeable)
    {
        super._afterTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId)
    internal
    override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

```

The ERC721URIStorage contract is an implementation of ERC721 that includes the metadata standard extensions (IERC721Metadata) as well as a mechanism for per-token metadata. That’s where the _setTokenURI method comes from: we use it to store an item’s metadata.

Also note that, unlike ERC20, ERC721 lacks a decimals field, since each token is distinct and cannot be partitioned.

### ERC721CommunityStream (ERC721)

ERC721 is a more complex standard than ERC20, with multiple optional extensions, and is split across a number of contracts. The OpenZeppelin Contracts provide flexibility regarding how these are combined, along with custom useful extensions. Check out the API Reference to learn more about these.

#### Constructing an ERC721 Token Contract

We’ll use ERC721 to track items in our game, which will each have their own unique attributes. Whenever one is to be awarded to a player, it will be minted and sent to them. Players are free to keep their token or trade it with other people as they see fit, as they would any other asset on the blockchain! Please note any account can call awardItem to mint items. To restrict what accounts can mint items we can add Access Control.

Here’s what a contract for tokenized items might look like:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyNFT is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC721_init("MyNFT", "MT");
        __Ownable_init();
    }
}

```

The ERC721URIStorage contract is an implementation of ERC721 that includes the metadata standard extensions (IERC721Metadata) as well as a mechanism for per-token metadata. That’s where the _setTokenURI method comes from: we use it to store an item’s metadata.

Also note that, unlike ERC20, ERC721 lacks a decimals field, since each token is distinct and cannot be partitioned.



### ERC4907 

#### Abstract

This standard is an extension of EIP-721. It proposes an additional role (`user`) which can be granted to addresses, and a time where the role is automatically revoked (`expires`). The `user` role represents permission to "use" the NFT, but not the ability to transfer it or set users.

#### Motivation

Some NFTs have certain utilities. For example, virtual land can be "used" to build scenes, and NFTs representing game assets can be "used" in-game. In some cases, the owner and user may not always be the same. There may be an owner of the NFT that rents it out to a “user”. The actions that a “user” should be able to take with an NFT would be different from the “owner” (for instance, “users” usually shouldn’t be able to sell ownership of the NFT).  In these situations, it makes sense to have separate roles that identify whether an address represents an “owner” or a “user” and manage permissions to perform actions accordingly.

Some projects already use this design scheme under different names such as “operator” or “controller” but as it becomes more and more prevalent, we need a unified standard to facilitate collaboration amongst all applications.

Furthermore, applications of this model (such as renting) often demand that user addresses have only temporary access to using the NFT. Normally, this means the owner needs to submit two on-chain transactions, one to list a new address as the new user role at the start of the duration and one to reclaim the user role at the end. This is inefficient in both labor and gas and so an “expires” function is introduced that would facilitate the automatic end of a usage term without the need of a second transaction.

#### Specification

The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

##### Contract Interface
Solidity Interface with NatSpec & OpenZeppelin v4 Interfaces (also available at [`IERC4907.sol`](https://raw.githubusercontent.com/ethereum/EIPs/master/assets/eip-4907/contracts/IERC4907.sol)):

```solidity
interface IERC4907 {

    // Logged when the user of an NFT is changed or expires is changed
    /// @notice Emitted when the `user` of an NFT or the `expires` of the `user` is changed
    /// The zero address for user indicates that there is no user address
    event UpdateUser(uint256 indexed tokenId, address indexed user, uint64 expires);

    /// @notice set the user and expires of an NFT
    /// @dev The zero address indicates there is no user
    /// Throws if `tokenId` is not valid NFT
    /// @param user  The new user of the NFT
    /// @param expires  UNIX timestamp, The new user could use the NFT before expires
    function setUser(uint256 tokenId, address user, uint64 expires) external;

    /// @notice Get the user address of an NFT
    /// @dev The zero address indicates that there is no user or the user is expired
    /// @param tokenId The NFT to get the user address for
    /// @return The user address for this NFT
    function userOf(uint256 tokenId) external view returns(address);

    /// @notice Get the user expires of an NFT
    /// @dev The zero value indicates that there is no user
    /// @param tokenId The NFT to get the user expires for
    /// @return The user expires for this NFT
    function userExpires(uint256 tokenId) external view returns(uint256);
}
```

The `userOf(uint256 tokenId)` function MAY be implemented as `pure` or `view`.

The `userExpires(uint256 tokenId)` function MAY be implemented as `pure` or `view`.

The `setUser(uint256 tokenId, address user, uint64 expires)` function MAY be implemented as `public` or `external`.

The `UpdateUser` event MUST be emitted when a user address is changed or the user expires is changed.

The `supportsInterface` method MUST return `true` when called with `0xad092b5c`.

#### Rationale

This model is intended to facilitate easy implementation. Here are some of the problems that are solved by this standard:

##### Clear Rights Assignment

With Dual “owner” and “user” roles, it becomes significantly easier to manage what lenders and borrowers can and cannot do with the NFT (in other words, their rights). Additionally, owners can control who the user is and it’s easy for other projects to assign their own rights to either the owners or the users.

##### Simple On-chain Time Management

Once a rental period is over, the user role needs to be reset and the “user” has to lose access to the right to use the NFT. This is usually accomplished with a second on-chain transaction but that is gas inefficient and can lead to complications because it’s imprecise. With the `expires` function, there is no need for another transaction because the “user” is invalidated automatically after the duration is over.

##### Easy Third-Party Integration

In the spirit of permission less interoperability, this standard makes it easier for third-party protocols to manage NFT usage rights without permission from the NFT issuer or the NFT application. Once a project has adopted the additional `user` role and `expires`, any other project can directly interact with these features and implement their own type of transaction. For example, a PFP NFT using this standard can be integrated into both a rental platform where users can rent the NFT for 30 days AND, at the same time, a mortgage platform where users can use the NFT while eventually buying ownership of the NFT with installment payments. This would all be done without needing the permission of the original PFP project.

#### Backwards Compatibility

As mentioned in the specifications section, this standard can be fully EIP-721 compatible by adding an extension function set.

In addition, new functions introduced in this standard have many similarities with the existing functions in EIP-721. This allows developers to easily adopt the standard quickly.

#### Reference Implementation
Implementation: [`ERC4907.sol`](https://raw.githubusercontent.com/ethereum/EIPs/master/assets/eip-4907/contracts/ERC4907.sol)
```solidity
// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC4907 is ERC721, IERC4907 {
    struct UserInfo
    {
        address user;   // address of user role
        uint64 expires; // unix timestamp, user expires
    }

    mapping (uint256  => UserInfo) internal _users;

    constructor(string memory name_, string memory symbol_)
    ERC721(name_,symbol_)
    {
    }

    /// @notice set the user and expires of a NFT
    /// @dev The zero address indicates there is no user
    /// Throws if `tokenId` is not valid NFT
    /// @param user  The new user of the NFT
    /// @param expires  UNIX timestamp, The new user could use the NFT before expires
    function setUser(uint256 tokenId, address user, uint64 expires) public virtual override{
        require(_isApprovedOrOwner(msg.sender, tokenId),"ERC721: transfer caller is not owner nor approved");
        UserInfo storage info =  _users[tokenId];
        info.user = user;
        info.expires = expires;
        emit UpdateUser(tokenId,user,expires);
    }

    /// @notice Get the user address of an NFT
    /// @dev The zero address indicates that there is no user or the user is expired
    /// @param tokenId The NFT to get the user address for
    /// @return The user address for this NFT
    function userOf(uint256 tokenId)public view virtual override returns(address){
        if( uint256(_users[tokenId].expires) >=  block.timestamp){
            return  _users[tokenId].user;
        }
        else{
            return address(0);
        }
    }

    /// @notice Get the user expires of an NFT
    /// @dev The zero value indicates that there is no user
    /// @param tokenId The NFT to get the user expires for
    /// @return The user expires for this NFT
    function userExpires(uint256 tokenId) public view virtual override returns(uint256){
        return _users[tokenId].expires;
    }

    /// @dev See {IERC165-supportsInterface}.
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC4907).interfaceId || super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override{
        super._beforeTokenTransfer(from, to, tokenId,batchSize);

        if (from != to && _users[tokenId].user != address(0)) {
            delete _users[tokenId];
            emit UpdateUser(tokenId, address(0), 0);
        }
    }
}

```

#### Security Considerations

This EIP standard can completely protect the rights of the owner, the owner can change the NFT user and expires at any time.

### Edition (ERC1155)

ERC1155 is a novel token standard that aims to take the best from previous standards to create a fungibility-agnostic and gas-efficient token contract.

#### Multi Token Standard

The distinctive feature of ERC1155 is that it uses a single smart contract to represent multiple tokens at once. This is why its balanceOf function differs from ERC20’s and ERC777’s: it has an additional id argument for the identifier of the token that you want to query the balance of.

This is similar to how ERC721 does things, but in that standard a token id has no concept of balance: each token is non-fungible and exists or doesn’t. The ERC721 balanceOf function refers to how many different tokens an account has, not how many of each. On the other hand, in ERC1155 accounts have a distinct balance for each token id, and non-fungible tokens are implemented by simply minting a single one of them.

This approach leads to massive gas savings for projects that require multiple tokens. Instead of deploying a new contract for each token type, a single ERC1155 token contract can hold the entire system state, reducing deployment costs and complexity.

#### Batch Operations

Because all state is held in a single contract, it is possible to operate over multiple tokens in a single transaction very efficiently. The standard provides two functions, balanceOfBatch and safeBatchTransferFrom, that make querying multiple balances and transferring multiple tokens simpler and less gas-intensive.

In the spirit of the standard, we’ve also included batch operations in the non-standard functions, such as _mintBatch.

#### Constructing an ERC1155 Token Contract

We’ll use ERC1155 to track multiple items in our game, which will each have their own unique attributes. We mint all items to the deployer of the contract, which we can later transfer to players. Players are free to keep their tokens or trade them with other people as they see fit, as they would any other asset on the blockchain!

For simplicity we will mint all items in the constructor but you could add minting functionality to the contract to mint on demand to players.

Here’s what a contract for tokenized items might look like:

```solidity
// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GameItems is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant THORS_HAMMER = 2;
    uint256 public constant SWORD = 3;
    uint256 public constant SHIELD = 4;

    constructor() ERC1155("https://game.example/api/item/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**27, "");
        _mint(msg.sender, THORS_HAMMER, 1, "");
        _mint(msg.sender, SWORD, 10**9, "");
        _mint(msg.sender, SHIELD, 10**9, "");
    }
}
```

## Defi

## GameFi


## DAOs & Governance

### Token (ERC20)

An ERC20 token contract keeps track of fungible tokens: any one token is exactly equal to any other token; no tokens have special rights or behavior associated with them. This makes ERC20 tokens useful for things like a medium of exchange currency, voting rights, staking, and more.

OpenZeppelin Contracts provides many ERC20-related contracts. On the API reference you’ll find detailed information on their properties and usage.

#### Constructing an ERC20 Token Contract

Using Contracts, we can easily create our own ERC20 token contract, which will be used to track Gold (GLD), an internal currency in a hypothetical game.

Here’s what our GLD token might look like.

```solidity
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}
```

Openzeppelin contracts are often used via inheritance, and here we’re reusing ERC20 for both the basic standard implementation and the name, symbol, and decimals optional extensions. Additionally, we’re creating an initialSupply of tokens, which will be assigned to the address that deploys the contract.
