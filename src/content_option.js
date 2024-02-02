const logotext = "SAIMA DAR";
const meta = {
    title: "Saima Dar",
    description: "I’m saima _ Full stack devloper,currently working as freelancer",
};

const introdata = {
    title: "I’m Saima Dar",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop serverless apps",
    },
    description: "Full Stack Web Developer | AWS Amplify | React | Nodejs | Next.js",
    your_img_url: "https://images.unsplash.com/photo-1487611459768-bd414656ea10",
};

const dataabout = {
    title: "About MySelf",
    aboutme: "I am a driven and skilled contemporary web and single-page application (SPA) developer, proficient in React and Node.js, specializing in serverless computing for streamlined, efficient solutions. I've constructed applications from initial requirements and designs, engaging in extensive development and architectural planning. Finally, I prioritize thorough testing before deploying the applications to production for clients."
};
const worktimeline = [
    {
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
    },
];

const skills = [{
        name: "React",
        value: 90,
    },
    {
        name: "Next",
        value: 85,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "Express",
        value: 80,
    },
    {
        name: "Node",
        value: 85,
    },
    {
        name: "AWS Services",
        value: 85,
    },
    {
        name: "Serverless Computing",
        value: 90,
    },
];

const services = [{
        title: "Front-End",
        description: "- React.js, Next.js, HTML5, CSS3, jQuery ,JavaScript (ES6+) - Tailwind, Material-UI, Ant Design, Bootstrap, LESS, SCSS- TypeScript, GraphQL, Apollo",
    },
    {
        title: "Back-End",
        description: "- Node.js, Express.js, RESTful APIs",
    },
    {
        title: "Cloud Services",
        description: "- Amazon Web Services (AWS Amplify, Lambda, API Gateway, Cognito, CloudWatch, IAM, S3, SNS, SQS, CloudFormation, Dynamo DB, CodePipeline, CodeCommit, CodeDeploy, CodeWhisperer) -  Firebase/GCP(Google Cloud Platform) ",
    },
    {
        title: "Version Control",
        description: "- Git ",
    },
    {
        title: "Database Management",
        description: "- MongoDB, MySQL, DynamoDB ",
    },
    {
        title: "Testing",
        description: "- Jest, React Testing Library, Cypress",
    },
];

const dataportfolio = [{
        img: `${process.env.PUBLIC_URL}/images/CRD.jpg`,
        description: "Cardiac Rhythm Diagnostics (CRD) is a healthcare platform implemented with React and TypeScript for the front end, and AWS Amplify with serverless computing for the backend.",
        link: "https://www.cardiacrhythmdiagnostics.com.au/",
    },
    {       
        img: `${process.env.PUBLIC_URL}/images/hangman.jpg`,
        description: "The Hangman game has been created using fundamental React concepts. This initial version of the single-page application (SPA) incorporates basic Hangman functionality. It allows users to choose words from different categories.",
        link: "https://sam-dar.github.io/Hangman/",
    },
    {
        img: `${process.env.PUBLIC_URL}/images/micro.jpg`,
        description: "MicroInvesting is a secure and user-friendly React app, developed with TypeScript and Tailwind CSS, designed to empower investors with comprehensive insights into their portfolios.",
        link: "https://www.rewardle.com/",
    },
    
    {        
        img: `${process.env.PUBLIC_URL}/images/textutil.jpg`,
        description:"This single-page application (SPA) has been crafted using React and offers fundamental text utility functionalities. Users can perform actions such as changing case, removing spaces, and counting words.",
        link: "https://sam-dar.github.io/TextUtils/",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: "sammythefreelancer@gmail.com",
    YOUR_FONE: "+92 323-4554529",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/sam-dar",
    linkedin: "https://www.linkedin.com/in/saima-asad-2a8147234",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};