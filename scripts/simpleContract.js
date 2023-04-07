const hre = require("hardhat");

async function main() {

  const SimpleContract = await hre.ethers.getContractFactory("SimpleContract"); // para acceder al contrato
  const simpleContract = await SimpleContract.deploy(); // se acceden a los parámetros que solicita en contrato en el constructor

  await simpleContract.deployed();

  console.log("EL address del contrato es: ", simpleContract.address);

  const tx = await simpleContract.setName("Oscar")
  const name = await simpleContract.name();

  console.log("El name es: ", name);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});