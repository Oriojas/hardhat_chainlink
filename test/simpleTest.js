const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Basic test bootcamp", function(){
    async function deploySmartContract(){
        const [owner, otherAccount] = await ethers.getSigners()

        const SimpleFactory = await ethers.getContractFactory("SimpleContract")

        const simple = await SimpleFactory.deploy();
        await simple.deployed();
        
        return {simple};
    
    }

    describe("Deployment", function(){
        it("todo bien", async function(){
            const {simple} = await deploySmartContract();
            console.log("Dirección: ", simple.address);
            expect(simple.address).to.not.be.null;
        });
        it("todo bien", async function(){
            const {simple} = await deploySmartContract();
            const tx = await simple.setName("Esto");
            const name = await simple.name();
            expect(name).to.be.equal("Esto")

        })
    })
})