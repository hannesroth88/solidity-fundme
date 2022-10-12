import { expect } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage } from "../typechain-types";

describe("SimpleStorage Deployment", function () {
  let simpleStorageFactory, simpleStorage: SimpleStorage;
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("should give back initial number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    expect(currentValue.toString()).equal("0")
  });
});
 