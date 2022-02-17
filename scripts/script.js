require("dotenv").config();
const { ethers, Wallet } = require("ethers");
const Weth = require("../artifacts/contracts/Weth.sol/Weth.json");

async function main() {
  //

  const provider = new ethers.providers.getDefaultProvider(process.env.mumbai);
  const signed = new Wallet(process.env.account, provider);

  const weth = new ethers.Contract(
    "0xc7b6d53A277C87578922525bdC9e90B8D893a151",
    Weth.abi,
    signed
  );

  const value = ethers.utils.parseUnits("0.000001", "ether");
  // console.log(value.toString());
  // const tx = await weth.deposit({ value: value });
  // const tx = await weth.withdraw(value);
  // console.log(tx);
  const tx2 = await weth.balanceOf(signed.address);
  console.log(tx2);
  console.log(`account: ${String(tx2)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
