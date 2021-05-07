const TextBlocks = {
    // this is the big text on the landing page at the top
    hero_big: "Hi! I will generate a NFT from your file.",
    // title of the dark hero
    title: "Three step proccess",
    step1: "1. Connect Wallet",
    step2: "2. Upload File",
    step3: "3. Receive NFT in your wallet",
    // this is the dark box below the hero 
    hero_dark: {

        title:'The Service',
        // This text starts after the generator. the first line of the text
        content_l1: "is a tokenisation service for digital files.",
        // second line of text
        content_l2: "It creates an ERC-721 token on Ethereum blockchain which contains information of the referenced file.",
        // the button text this will always be all caps
        button: "LEARN MORE"
    },
    // the explainer section below the dark hero 
    explainer:{
        headertitle: "Why",
        box_left: {
            title: "Problem",
            content_l1:"Who would buy a jpg-file for $69 million if it needs to be sure that the file is unique?",
            content_l2:"In conventional IT, such a purchase would never have happened digitally, because the risk of a copyable proof of ownership would be too big."
        },
        box_center: {
            title: "Solution",
            content_l1:"With blockchain technology it is possible to generate digital proof of ownership and the purchase of the jpg-file for $69 million has happened.",
            content_l2: "The jpg-file was tokenized and reference date have been saved on an object called Non Fungible Token (NFT)."
        },
        box_right: {
            title: "Execution",
            content_l1:"Generator. is a service which creates Non Fungible Tokens (NFTs) based on any uploaded file.",
            content_l2:"The created token including the reference date of the file will be stored on the Ethereum blockchain. The file itself will be uploaded to IPFS and pinned using Pinata."
        }
    },

    subcription:{
        title:"Subscription",
        content_l1:"Your Generator. account does not work with e-mail and password. Your wallet is the identifier instead. If you want to be kept informed by this page, please sign up with your e-mail address. We won't spam you!"
    }


};
  
  export default TextBlocks;