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
        it("Deploy OK", async function(){
            const {simple} = await deploySmartContract();
            console.log("Dirección: ", simple.address);
            expect(simple.address).to.not.be.null;
        });
        it("Name OK", async function(){
            const {simple} = await deploySmartContract();
            const tx1 = await simple.setName("Esto");
            const name = await simple.name();
            expect(name).to.be.equal("Esto")        
        });
        it("Number OK", async function(){
            const {simple} = await deploySmartContract();
            const tx2 = await simple.setNumber(50);
            const number = await simple.number();
            expect(number).to.be.equal(50)        
        });
    })
})