// Configuration for the official $ClawScout token
// Once the token is launched, paste the Contract Address (CA) here.
// The app will prioritize this token above all others for the Feature Card.

export const CLAW_SCOUT_CONFIG = {
  // Set this to the real CA once launched, e.g., "7Ey..."
  // If empty, the app will continue to "Hunt" for tokens named "ClawSeek" or "$ClawSeek"
  officialMintAddress: '93TgXLEfyCt8hmBak4VPd3uq6C3r9HgWRA9pF5mRpump', 
  
  // Backup identifiers if CA is not yet known
  targetNames: ["ClawSeek", "$ClawSeek", "Claw Seek"],
  targetSymbols: ["SEEK", "CLAW", "CSEEK"],
  
  // Official override image (optional)
  image: "/clawseek_logo.jpg",
  
  // Social links to pre-fill or override
  socials: {
    twitter: "https://x.com/ClawSeek_",
    telegram: "",
    website: ""
  }
};