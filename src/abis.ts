export const mockWETHAddress = '0x053DA244AaaF94A071d9e3E73141e5249FE9251D';
export const mockWETHABI =[
	'event Approval(address indexed src, address indexed guy, uint256 wad)',
	'event Deposit(address indexed dst, uint256 wad)',
	'event Transfer(address indexed src, address indexed dst, uint256 wad)',
	'event Withdrawal(address indexed src, uint256 wad)',
	'function allowance(address, address) view returns (uint256)',
	'function approve(address guy, uint256 wad) returns (bool)',
	'function balanceOf(address) view returns (uint256)',
	'function decimals() view returns (uint8)',
	'function deposit() payable',
	'function getFromFaucet()',
	'function name() view returns (string)',
	'function symbol() view returns (string)',
	'function totalSupply() view returns (uint256)',
	'function transfer(address dst, uint256 wad) returns (bool)',
	'function transferFrom(address src, address dst, uint256 wad) returns (bool)',
	'function withdraw(uint256 wad)'
]; 

export const assetsAccountantAddress = '0xd9c5D3B12719fdA2d8c2CCA48FD3D92123c5D1CC';
export const assetsAccountantABI = [
	'constructor()',
	'event ApprovalForAll(address indexed account, address indexed operator, bool approved)',
	'event HouseRegistered(address house, bytes32 indexed typeOfHouse, address indexed asset)',
	'event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)',
	'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
	'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
	'event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)',
	'event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)'
	,
	'event URI(string value, uint256 indexed id)',
	'function BURNER_ROLE() view returns (bytes32)',
	'function DEFAULT_ADMIN_ROLE() view returns (bytes32)',
	'function LIQUIDATOR_ROLE() view returns (bytes32)',
	'function MINTER_ROLE() view returns (bytes32)',
	'function URI_SETTER_ROLE() view returns (bytes32)',
	'function balanceOf(address account, uint256 id) view returns (uint256)',
	'function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])',
	'function burn(address account, uint256 id, uint256 amount)',
	'function burnBatch(address account, uint256[] ids, uint256[] amounts)',
	'function getRoleAdmin(bytes32 role) view returns (bytes32)',
	'function grantRole(bytes32 role, address account)',
	'function hasRole(bytes32 role, address account) view returns (bool)',
	'function houseOfCoins(address) view returns (address)',
	'function houseOfReserves(uint256) view returns (address)',
	'function isApprovedForAll(address account, address operator) view returns (bool)',
	'function mint(address account, uint256 id, uint256 amount, bytes data)',
	'function mintBatch(address to, uint256[] ids, uint256[] amounts, bytes data)',
	'function name() pure returns (string)',
	'function registerHouse(address houseAddress, address asset)',
	'function renounceRole(bytes32 role, address account)',
	'function reservesIds(address, address) view returns (uint256)',
	'function revokeRole(bytes32 role, address account)',
	'function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) pure',
	'function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)',
	'function setApprovalForAll(address operator, bool approved)',
	'function setURI(string newuri)',
	'function supportsInterface(bytes4 interfaceId) view returns (bool)',
	'function uri(uint256) view returns (string)'
];


export const houseOfReserveAddress = '0x8325CE385A2Fbc320f55F6C7bbe267532bF1F89B';
export const houseOfReserveABI = [
	'event CollateralRatioChanged(tuple(uint256 numerator, uint256 denominator) newFactor)',
	'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
	'event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)',
	'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
	'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
	'event TrustedSignerChanged(address indexed newSigner)',
	'event UserDeposit(address indexed user, address indexed asset, uint256 amount)',
	'event UserWithdraw(address indexed user, address indexed asset, uint256 amount)',
	'function DEFAULT_ADMIN_ROLE() view returns (bytes32)',
	'function HOUSE_TYPE() view returns (bytes32)',
	'function assetsAccountant() view returns (address)',
	'function authorizeSigner(address _trustedSigner)',
	'function backedAsset() view returns (address)',
	'function backedTokenID() view returns (uint256)',
	'function checkMaxWithdrawal(address user) view returns (uint256 max)',
	'function collateralRatio() view returns (uint256 numerator, uint256 denominator)',
	'function deposit(uint256 amount)',
	'function getRoleAdmin(bytes32 role) view returns (bytes32)',
	'function grantRole(bytes32 role, address account)',
	'function hasRole(bytes32 role, address account) view returns (bool)',
	'function initialize(address _reserveAsset, address _backedAsset, address _assetsAccountant)',
	'function maxDelay() view returns (uint256)',
	'function owner() view returns (address)',
	'function redstoneGetLastPrice() view returns (uint256)',
	'function renounceOwnership()',
	'function renounceRole(bytes32 role, address account)',
	'function reserveAsset() view returns (address)',
	'function reserveTokenID() view returns (uint256)',
	'function revokeRole(bytes32 role, address account)',
	'function setCollateralRatio(uint256 numerator, uint256 denominator)',
	'function setMaxDelay(uint256 _maxDelay)',
	'function supportsInterface(bytes4 interfaceId) view returns (bool)',
	'function transferOwnership(address newOwner)',
	'function trustedSigner() view returns (address)',
	'function withdraw(uint256 amount)'
];
 
// mockWETH and XOC ids, needed for some contract calls
export const reserveTokenID = '69208386426602677783460625292205263210637705470065513959812478282694433536962';
export const backedTokenID = '6398073223512371539250731142149975136586141799346430329041765947991383045798';

export const houseOfCoinAddress = '0x3c3714b6Ac979241a71717c0A89e7226988141A5';

export const houseOfCoinABI = [
	'event CoinMinted(address indexed user, uint256 indexed backedtokenID, uint256 amount)',
	'event CoinPayback(address indexed user, uint256 indexed backedtokenID, uint256 amount)',
	'event Liquidation(address indexed userLiquidated, address indexed liquidator, uint256 collateralAmount)',
	'event MarginCall(address indexed user, address indexed mintedAsset, address indexed reserveAsset)',
	'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
	'event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)',
	'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
	'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
	'event TrustedSignerChanged(address indexed newSigner)',
	'function DEFAULT_ADMIN_ROLE() view returns (bytes32)',
	'function HOUSE_TYPE() view returns (bytes32)',
	'function _checkRemainingMintingPower(address user, uint256 reserveTokenID, uint256 backedTokenID, tuple(uint256 numerator, uint256 denominator) collatRatio, uint256 price) view returns (uint256)',
	'function assetsAccountant() view returns (address)',
	'function authorizeSigner(address _trustedSigner)',
	'function backedAsset() view returns (address)',
	'function checkRemainingMintingPower(address user, address reserveAsset) view returns (uint256)',
	'function computeCostOfLiquidation(address user, address reserveAsset) view returns (uint256, uint256)',
	'function computeUserHealthRatio(address user, address reserveAsset) view returns (uint256)',
	'function getBackedTokenID(address _reserveAsset) view returns (uint256)',
	'function getRoleAdmin(bytes32 role) view returns (bytes32)',
	'function grantRole(bytes32 role, address account)',
	'function hasRole(bytes32 role, address account) view returns (bool)',
	'function initialize(address _backedAsset, address _assetsAccountant)',
	'function liqParam() view returns (uint256 globalBase, uint256 marginCallThreshold, uint256 liquidationThreshold, uint256 liquidationPricePenaltyDiscount, uint256 collateralPenalty)',
	'function liquidateUser(address userToLiquidate, address reserveAsset)',
	'function maxDelay() view returns (uint256)',
	'function mintCoin(address reserveAsset, address houseOfReserve, uint256 amount)',
	'function owner() view returns (address)',
	'function paybackCoin(uint256 _backedTokenID, uint256 amount)',
	'function redstoneGetLastPrice() view returns (uint256)',
	'function renounceOwnership()',
	'function renounceRole(bytes32 role, address account)',
	'function revokeRole(bytes32 role, address account)',
	'function setMaxDelay(uint256 _maxDelay)',
	'function supportsInterface(bytes4 interfaceId) view returns (bool)',
	'function transferOwnership(address newOwner)',
	'function trustedSigner() view returns (address)'
];

export const XOCAddress = '0x2FeE11961a58b36E766a74CC9c76A847E002FEAa';

export const XOCABI = [
	'constructor()',
	'event Approval(address indexed owner, address indexed spender, uint256 value)',
	'event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)',
	'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
	'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
	'event Transfer(address indexed from, address indexed to, uint256 value)',
	'function BURNER_ROLE() view returns (bytes32)',
	'function DEFAULT_ADMIN_ROLE() view returns (bytes32)',
	'function MINTER_ROLE() view returns (bytes32)',
	'function allowance(address owner, address spender) view returns (uint256)',
	'function approve(address spender, uint256 amount) returns (bool)',
	'function balanceOf(address account) view returns (uint256)',
	'function burn(address to, uint256 amount)',
	'function decimals() view returns (uint8)',
	'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',
	'function flashFee(address token, uint256 amount) view returns (uint256)',
	'function flashLoan(address receiver, address token, uint256 amount, bytes data) returns (bool)',
	'function getRoleAdmin(bytes32 role) view returns (bytes32)',
	'function grantRole(bytes32 role, address account)',
	'function hasRole(bytes32 role, address account) view returns (bool)',
	'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',
	'function maxFlashLoan(address token) view returns (uint256)',
	'function mint(address to, uint256 amount)',
	'function name() view returns (string)',
	'function renounceRole(bytes32 role, address account)',
	'function revokeRole(bytes32 role, address account)',
	'function supportsInterface(bytes4 interfaceId) view returns (bool)',
	'function symbol() view returns (string)',
	'function totalSupply() view returns (uint256)',
	'function transfer(address recipient, uint256 amount) returns (bool)',
	'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)'
];
