const texts = {
  common: {
    back: "Back",
    close: "Close",
    confirm: "Confirm",
    done: "Done",
    continue: "Continue",
    next: "Next",
    yes: "Yes",
    no: "No",
    unlock: "Unlock",
    showSettings: "Show settings",
    lockWallet: "Lock wallet",
    reset: "Reset",
    confirmReset: "RESET",
    save: "Save",
    create: "Create",
    cancel: "Cancel",
    privacyStatement:
      "GDPR statement for browser extension wallet: Argent takes the privacy and security of individuals very seriously and takes every reasonable measure and precaution to protect and secure the personal data that we process. The browser extension wallet does not collect any personal information nor does it correlate any of your personal information with anonymous data processed as part of its services. On top of this Argent has robust information security policies and procedures in place to make sure any processing complies with applicable laws. If you would like to know more or have any questions then please visit our website at https://www.argent.xyz/",
    approve: "Approve",
    addArgentShield: "Add Argent Shield",
    dismiss: "Dismiss",
    reviewSend: "Review send",
  },
  account: {
    noAccounts: "You have no accounts on ",
    createAccount: "Create account",
    addFunds: "Add funds",
    fundsFromStarkNet: "From another Starknet wallet",
    fullAccountAddress: "Full account address",
    send: "Send",
    export: "Export",
    accountRecovery: "Save your recovery phrase",
    showAccountRecovery: "Show recovery phrase",
    saveTheRecoveryPhrase: "Save the recovery phrase",
    confirmTheSeedPhrase:
      "I have saved my recovery phrase and understand I should never share it with anyone else",
    pendingTransactions: "Pending transactions",
    recipientAddress: "Recipient's address",
    saveAddress: "Save address",
    deployFirst:
      "You must deploy this account before Argent Shield can be added",
    wrongPassword: "Incorrect password",
    invalidStarkIdError: " not found",
    shortAddressError: "Address must be 66 characters long",
    invalidCheckSumError: "Invalid address (checksum error)",
    invalidAddress: "Invalid address",
  },
  wallet: {
    //first screen
    banner1: "Welcome to Argent X",
    desc1: "Enjoy the security of Ethereum with the scale of StarkNet",
    createButton: "Create a new wallet",
    restoreButton: "Restore an existing wallet",
    //second screen
    banner2: "Disclaimer",
    desc2:
      "StarkNet is in Alpha and may experience technical issues or introduce breaking changes from time to time. Please accept this before continuing.",
    lossOfFunds:
      "I understand that StarkNet will introduce changes (e.g. Cairo 1.0) that will affect my existing account(s) (e.g. rendering unusable) if I do not complete account upgrades.",
    alphaVersion:
      "I understand that StarkNet may experience performance issues and my transactions may fail for various reasons.",
    //third screen
    banner3: "New wallet",
    desc3: "Enter a password to protect your wallet",
    password: "Password",
    repeatPassword: "Repeat password",
    createWallet: "Create wallet",
    //fourth screen
    banner4: "Your wallet is ready!",
    desc4: "Follow us for product updates or if you have any questions",
    twitter: "Follow Argent X on Twitter",
    discord: "Join the Argent X Discord",
    finish: "Finish",
  },
  settings: {
    addresBook: "Address book",
    connectedDapps: "Connected dapps",
    showRecoveryPhase: "Recovery phrase",
    developerSettings: "Developer settings",
    privacy: "Privacy",
    hideAccount: "Hide account",
    deleteAccount: "Delete account", //only available for local network
    exportPrivateKey: "Export private key",
    extendedView: "Extended view",
    hide: "Hide",
    hiddenAccounts: "Hidden accounts",
    delete: "Delete",
    copy: "Copy",
    copied: "Copied",
    confirmRecovery:
      "I have saved my recovery phrase and understand I should never share it with anyone else",
    revealSeedPhrase: "Click to reveal recovery phrase",
    beforeYouContinue: "Before you continue...",
    seedWarning:
      "Please save your recovery phrase. This is the only way you will be able to recover your Argent X accounts",
    deployAccount: "Deploy account",
  },
  developerSettings: {
    manageNetworks: "Manage networks",
    blockExplorer: "Block explorer",
    smartContractDevelopment: "Smart Contract Development",
    experimental: "Experimental",
    restoreDefaultNetworks: "Restore default networks",
  },
  address: {
    nameRequired: "Contact Name is required",
    addressRequired: "Address is required",
    removeAddress: "Remove from address book",
    delete: "Delete",
    addressBook: "Address book",
  },
  dapps: {
    connect: "Connect",
    reject: "Reject",
    resetAll: "Reset all dapp connections",
  },
}

export default texts
