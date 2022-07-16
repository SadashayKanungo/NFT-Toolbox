# NFT-Toolbox

An npm package for seamless integration of all NFT related functionalities in Web2 projects.

### Supported Functionalities

1.  Generate NFT Collection Images and Metadata files from Layer Images
2.  Upload NFT Collection Assets and Metadata Files to IPFS (or alternative) Platforms via any of the following services:

    -   [NFT.storage](https://nft.storage/)
    -   [Pinata](https://www.pinata.cloud/)
    -   [Storj](https://landing.storj.io/permanently-pin-with-storj-dcs)
    -   [Infura](https://infura.io/product/ipfs)
    -   [Arweave](https://www.arweave.org/)

3.  Draft ERC721/ERC1155 Smart Contracts from scratch with [Open Zeppelin Wizard](https://github.com/OpenZeppelin/contracts-wizard)
4.  Deploy a Smart Contract to blockchain. Mainnets and Testnets of the following are supported are supported.
    -   [Ethereum](https://ethereum.org/): Mainnet, Ropsten, Rinkeby, Goerli, Kovan
    -   [Polygon](https://polygon.technology/): Mainnet, Mumbai
5.  Mint NFTs on a Smart Contract deployed on any of the supported networks.

### Development setup

1. Fork the `scorelab/NFT-Toolbox` repository
   Follow these instructions on [how to fork a repository](https://help.github.com/en/articles/fork-a-repo)

2. Clone the repository
   Navigate to the location on your computer where you want to host your code. Once in the appropriate folder, run the following command to clone the repository to your local machine.

```
git clone https://github.com/ {your-username} /NFT-Toolbox.git
```

3. Install the dependencies
   Setup the project with Node Package Manager.

```
cd NFT-Toolbox
npm install
```

4. You are ready to go!

Run an example script

```
ts-node examples/generate.ts
```

Run Tests

```
npm test
```
