const hre = require("hardhat");

async function main() {
  const CustomDEx = await hre.ethers.getContractFactory("CustomDEx");
  const customDex = await CustomDEx.deploy();

  await customDex.deployed();
  console.log(` CustomDex: ${customDex.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
