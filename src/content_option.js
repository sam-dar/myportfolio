const logotext = "SAIMA ASAD";
const meta = {
    title: "Saima Asad",
    description: "I’m saima _ Full stack devloper,currently working as freelancer",
};

const introdata = {
    title: "I’m Saima Asad",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop serverless apps",
    },
    description: "Full Stack Web Developer | AWS Amplify | React | Nodejs | Next.js",
    your_img_url: "https://images.unsplash.com/photo-1487611459768-bd414656ea10" || `${process.env.PUBLIC_URL}/images/main.jpg`,
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
        name: " • Front-End ",
        value: 90,
    },
    {
        name: "• Back-End ",
        value: 90,
    },
    {
        name: "• DevOps ",
        value: 85,
    },
    {
        name: " • Machine Learning $ Generative AI",
        value: 80,
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
        img: `${process.env.PUBLIC_URL}/images/Bbuddy.png`,
        description: "A modern expense tracking web application built with **Next.js**, **Tailwind CSS**, **Prisma**, and **Supabase** for authentication and database management.",
        link: "https://budgetbuddyapplication.vercel.app/",
    },
    {
        img: `${process.env.PUBLIC_URL}/images/micro.jpg`,
        description: "MicroInvesting is a secure and user-friendly React app, developed with TypeScript and Tailwind CSS, designed to empower investors with comprehensive insights into their portfolios.",
        link: "https://www.rewardle.com/",
    },
    
    {        
        img: `${process.env.PUBLIC_URL}/images/mb1.png`,
        description:"MailBrain, securely stores your emails and lets you ask questions about them. Whether it's finding specific details or summarizing conversations, MailBrain's AI scans your saved emails to generate precise answers.",
        link: "https://mailbrain.vercel.app/",
    },
    {       
        img: `${process.env.PUBLIC_URL}/images/weather1.jpg`,
        description: "This single-page application (SPA) has been crafted using React and offers fundamental weather forecast functionalities. ",
        link: "hthttps://my-weatherapp-react.vercel.app/",
    },
    {
        img: `${process.env.PUBLIC_URL}/images/ai-todo.png`,
        description: "SmartTasks, is a simple yet powerful task management web app built with React. It enables users to add, track, and manage tasks in a clean and minimal UI. Completed tasks can be marked off, and tasks can be removed with ease.",
        link:"https://ai-powered-todolist.vercel.app/",
    },
    
    {        
        img: `${process.env.PUBLIC_URL}/images/artisan.png`,
        description:"This website is built with Next.js to deliver a modern, fast, and responsive user experience. It highlights the company’s services in crafting premium Corian surfaces, showcasing their portfolio, achievements, and core values with a clean, professional design.",
        link: "https://artisan-fabricators-81gv.vercel.app/",
    },
    {
        img: `${process.env.PUBLIC_URL}/images/EmpLeaveApp.png`,
        description: "This Employee Leave Application is a modern web tool built with React and styled for a clean, professional UI. It provides employees with an intuitive way to submit leave requests, including details such as employee ID, department, leave type, and optional notes.",
        link:"https://github.com/sam-dar/employeeleaveform",
    },
    
    {        
        img: `${process.env.PUBLIC_URL}/images/ytdownloader.jpg`,
        description:"The YouTube Transcript Downloader Website is a versatile online platform built using React, Vite, and the YouTube API, offering users the ability to effortlessly download transcripts and caption libraries from YouTube channels and videos.",
        link: "https://youtubechanneltranscripts.com/",
    },
   {        
        img: `${process.env.PUBLIC_URL}/images/pwgen.png`,
        description:"This is a simple and responsive **Password Generator** web application built with HTML, CSS, and Node.js. It allows users to generate secure passwords with customizable settings like length, numbers, and symbols. The generated password can be copied to the clipboard or saved to a file.",
        link: "https://github.com/sam-dar/password-generator-web",
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
    upwork:"https://www.upwork.com/freelancers/~01e040cef7298ea94b"
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