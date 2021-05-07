pragma solidity 0.7.0; 
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface IStdReference {
    /// A structure returned whenever someone requests for standard reference data.
    struct ReferenceData {
        uint256 rate; // base/quote exchange rate, multiplied by 1e18.
        uint256 lastUpdatedBase; // UNIX epoch of the last time when base price gets updated.
        uint256 lastUpdatedQuote; // UNIX epoch of the last time when quote price gets updated.
    }

    /// Returns the price data for the given base/quote pair. Revert if not available.
    function getReferenceData(string memory _base, string memory _quote)
        external
        view
        returns (ReferenceData memory);

    /// Similar to getReferenceData, but with multiple base/quote pairs at once.
    function getReferenceDataBulk(string[] memory _bases, string[] memory _quotes)
        external
        view
        returns (ReferenceData[] memory);
}



contract GeneratorBase is Ownable, ERC721("Generator.pink","GENERATOR") {

    /* ========== Structs and contracts variables ========== */
    using SafeMath for uint256;
    // The address the recives all the fees from the contract
    address payable public feeReciver; 
    // The fee amount denominated in USD amount Ex. 1 USD = 1* 10^18;
    uint256 public USD_FEE; 

    // The oracle refferance address
    IStdReference ref;

   
    struct Document {
        uint256 id;

        string uuid;

        // Token Title
        string title;
        // Description of connected file
        string description;
        // Link to document
        string uri; 
        // Validity Date
        uint validationDate; 
        // Mint timestamp.
        uint timestamp; 

        string  name;

        string  fulladdress;

        string email; 

        string website; 

        address minter; 

        string ipaddress; 
    }

    Document[] public documents;

    /* ========== CONSTRUCTOR ========== */

    /**
     * @dev 
     * @param _fee the base fee nominated in USD only NO DECIMAL NUMBERS ACCEPTED.
     * @param _reciver This is the address where all the fee's will be sent to. 
     */
    constructor (
        uint256 _fee,
        address payable _reciver,
        IStdReference _ref
    ) {
        USD_FEE = _fee;
        feeReciver = _reciver;
        ref = _ref;
        _setBaseURI('https://gateway.pinata.cloud/ipfs/');

    }

    /* ========== EXTERNAL MUTABLE FUNCTIONS ========== */
    
    /**
     * @dev  Add a document
     * @param _title Title of the document.
     * @param _description Short Description. 
     * @param _uri The URI. 
     * @param _validationDate Validation Date of document.
     * @param _email Email address of the creator
     * @param _website Website of creator.
     */
    function addDocument (
        string memory _uuid,
        string memory _title,
        string memory _description, 
        string memory _uri, 
        uint256 _validationDate,
        string memory _name, 
        string memory _fulladdress,
        string memory _email, 
        string memory _website,
        string memory _ipaddress
    ) public payable returns(uint256) {
        // handle the payment for the minting proccess.

           
        // require that the caller has send enough to the contract
        require(msg.value >= get_FEE_IN_ETH(), 'msg.sender did not pay enough');


        // handle the minting of the new token.

        // Grab the ID of the document to make. 
        uint256 newid = documents.length; 
        // Assemble the struct. 
        Document memory newDoc = Document({
            id: newid,
            uuid: _uuid,
            title: _title,
            description: _description,
            uri: _uri,
            validationDate: _validationDate,
            timestamp: block.timestamp,
            name: _name,
            fulladdress: _fulladdress,
            email: _email,
            website: _website,
            minter: msg.sender,
            ipaddress: _ipaddress
        });
        // Push it to the array 
        documents.push(newDoc); 

        // mint the token to this address
        _safeMint(msg.sender, newid);

        _setTokenURI(newid, _uri);

        payReciver();

        return  newid; 
    }


    function burnDocument(uint256 tokenId) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "caller is not owner nor approved");
        Document storage doc = documents[tokenId];
        doc.uuid = '';
        doc.title = ''; 
        doc.description = ''; 
        doc.uri = '';
        doc.validationDate = 0;
        doc.timestamp = 0;
        doc.title = '';
        doc.email ='';
        doc.name = '';
        doc.fulladdress = '';
        doc.website ='';
        doc.minter = 0x0000000000000000000000000000000000000000;
        doc.ipaddress ='';
        _burn(tokenId);
    } 


    /** 
     * @dev sets a new reciver for the fee. 
     * @param newReciver .
     */
    function setNewRevicer(address payable newReciver) public onlyOwner {
        feeReciver = newReciver;

    }

     /** 
     * @dev sets a new fee amount in USD. Ex. 1 USD. NOT 0.1 USD NO DECIMALS POSSIBLE
     * @param newFee .
     */
    function setNewFeeInUSD(uint256 newFee) public onlyOwner {
        USD_FEE = newFee;

    }

    function setBaseURI(string memory baseURI_) public onlyOwner {
        _setBaseURI(baseURI_);
    }

    /* ========== VIEW FUNCTIONS ========== */
    /**
     * @dev  Get the info from the document. 
     * @param documentId the ID of the document you want to retrive info from.
     */
    function getDocument(uint256 documentId) 
        public
        view
        returns (
            uint256 id,
            string memory uuid, 
            string memory title, 
            string memory description, 
            string memory uri, 
            uint256 validationDate,
            uint256 timestamp, 
            string memory name,
            string memory fulladdress,
            string memory email, 
            string memory website,
            address minter,
            string memory ipaddress
        )
    {
        Document storage doc = documents[documentId];
        id = documentId; 
        uuid = doc.uuid;
        title = doc.title; 
        description = doc.description; 
        uri = doc.uri;
        validationDate = doc.validationDate;
        timestamp = doc.timestamp;
        title = doc.title;
        name = doc.name;
        fulladdress = doc.fulladdress;
        email = doc.email;
        website = doc.website;
        minter = doc.minter;
        ipaddress = doc.ipaddress;
    }

    function getTotalDocuments () public view returns (uint256) {
        return documents.length;
    }
    
    function getCurrentPriceInEth() public view returns (uint256) {
        return get_FEE_IN_ETH();
    }

    function getURI(uint256 documentId) external view returns (string memory uri) {
        uri = tokenURI(documentId);
    }
    
    /* ========== INTERNAL FUNCTIONS ========== */

    /**
     * @dev  Function to return the price of 1 USD in ETH. Then multiplied by the USD_FEE to get the correct ETH value. Using BAND oracle contract for this. 
     */

    function get_FEE_IN_ETH() internal view returns(uint256){
        IStdReference.ReferenceData memory data = ref.getReferenceData('USD', 'ETH');
        return data.rate.mul(USD_FEE);
    }

    function payReciver() internal {
        feeReciver.transfer(address(this).balance);
    }

    

    /* ====== MODIFIERS ====== */

     

    /* ====== FALLBACK ====== */

    receive() external payable {}
   
}
