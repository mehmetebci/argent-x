import { expect } from "@playwright/test"

import test from "../test"
import config from "../config"

test.describe("Network", () => {
  test("Available networks", async ({ extension }) => {
    await extension.wallet.newWalletOnboarding()
    await extension.open()
    await expect(extension.network.networkSelector).toBeVisible()
    await extension.network.ensureAvailableNetworks([
      "Mainnet",
      `Testnet`,
      "Localhost 5050\nhttp://localhost:5050/rpc",
    ])
  })

  test("User should not be able to delete selected network", async ({
    extension,
  }) => {
    await extension.wallet.newWalletOnboarding()
    await extension.open()
    await extension.navigation.showSettings.click()
    await extension.settings.developerSettings.click()
    await extension.developerSettings.manageNetworks.click()

    //add new network
    await extension.developerSettings.addNetwork.click()
    await extension.developerSettings.networkName.fill("My Network")
    await extension.developerSettings.chainId.fill("SN_GOERLI")
    await extension.developerSettings.rpcUrl.fill(config.testnetRpcUrl!)
    await extension.navigation.create.click()
    await expect(
      extension.developerSettings.networkByName("My Network"),
    ).toBeVisible()
    await extension.navigation.back.click()
    await extension.navigation.back.click()
    await extension.navigation.close.click()
    await extension.network.ensureSelectedNetwork("Testnet")
    // select network
    await extension.network.selectNetwork("My Network")

    // try to delete network
    await extension.navigation.showSettings.click()
    await extension.settings.developerSettings.click()
    await extension.developerSettings.manageNetworks.click()
    await extension.developerSettings.deleteNetworkByName("My Network").click()
    await extension.navigation.cancel.click()
    await expect(
      extension.developerSettings.networkByName("My Network"),
    ).toBeVisible()

    await extension.navigation.back.click()
    await extension.navigation.back.click()
    await extension.navigation.close.click()
    await extension.network.ensureSelectedNetwork("My Network")
    await expect(extension.account.createAccount).toBeVisible()
    await expect(extension.account.noAccountBanner).toBeVisible()
    // select other network
    await extension.network.selectNetwork("Testnet")
    // delete network
    await extension.navigation.showSettings.click()
    await extension.settings.developerSettings.click()
    await extension.developerSettings.manageNetworks.click()
    await extension.developerSettings.deleteNetworkByName("My Network").click()
    await expect(
      extension.developerSettings.networkByName("My Network"),
    ).not.toBeVisible()
  })

  test("User should be able to restore default networks if network is not selected", async ({
    extension,
  }) => {
    await extension.wallet.newWalletOnboarding()
    await extension.open()
    await extension.navigation.showSettings.click()
    await extension.settings.developerSettings.click()
    await extension.developerSettings.manageNetworks.click()

    //add new network
    await extension.developerSettings.addNetwork.click()
    await extension.developerSettings.networkName.fill("My Network")
    await extension.developerSettings.chainId.fill("SN_GOERLI")
    await extension.developerSettings.rpcUrl.fill(config.testnetRpcUrl!)

    await extension.navigation.create.click()
    await expect(
      extension.developerSettings.networkByName("My Network"),
    ).toBeVisible()
    await extension.navigation.back.click()
    await extension.navigation.back.click()
    await extension.navigation.close.click()

    // add account
    await extension.network.selectNetwork("My Network")
    await extension.account.addAccount({ firstAccount: true })
    await extension.network.selectNetwork("Testnet")

    // try to restore networks
    await extension.navigation.showSettings.click()
    await extension.settings.developerSettings.click()
    await extension.developerSettings.manageNetworks.click()
    await extension.developerSettings.restoreDefaultNetworks.click()
    await expect(
      extension.developerSettings.networkByName("My Network"),
    ).not.toBeVisible()
  })
})
