const COURSES_DB = [
  {
    code: "CSC 101",
    title: "Introduction to Computer Science",
    description: "Core computing concepts, hardware, and internet programming.",
    topics: [
      {
        id: "csc101-net",
        week: "Module 1",
        title: "Internet Programming Lecture Notes",
        pdfPath: "pdfs/KWASU-CSC101_Internet_Programming_1_Lecture_Notes 2.pdf",
        summary: [
          "The Internet is the physical hardware network infrastructure (TCP/IP), while the Web is the information service running on top of it (HTTP)[cite: 11].",
          "ARPANET was launched in 1969 by the U.S. DoD, marking the birth of networking[cite: 11].",
          "Tim Berners-Lee invented the World Wide Web in 1991 at CERN, creating HTML, URI/URL, and HTTP[cite: 11].",
          "DNS (1985) revolutionized usability by replacing numeric IP addresses with readable domain names[cite: 11]."
        ],
     questions: [
          {
            q: "Which memory type is volatile and loses all stored data when power is removed?",
            options: ["ROM", "RAM", "Hard Drive", "CMOS"],
            answer: 1,
            explanation: "RAM (Random Access Memory) is temporary volatile working memory that clears automatically upon shutdown[cite: 3]."
          },
          {
            q: "What is the standard pin count and color typically associated with a PC VGA monitor port?",
            options: [
              "9-pin, gray",
              "25-pin, pink",
              "8-pin, yellow",
              "15-pin in three rows, blue"
            ],
            answer: 3,
            explanation: "PCs traditionally use a VGA analog connector featuring 15 pins across three rows, colored blue[cite: 3]."
          },
          {
            q: "What are the three primary building blocks of a computer system?",
            options: [
              "CPU, Memory, and I/O devices",
              "Monitor, Keyboard, and Mouse",
              "Hard Drive, RAM, and ROM",
              "Motherboard, Power Supply, and Fan"
            ],
            answer: 0,
            explanation: "A computer system relies on the Central Processing Unit (CPU), Memory, and Input/Output devices[cite: 3]."
          },
          {
            q: "Is HTML considered a programming language?",
            options: [
              "Yes, because it performs logical calculations",
              "No, because it is a markup language describing document structure rather than logic",
              "Yes, because it compiles into binary",
              "No, it is a stylesheet language"
            ],
            answer: 1,
            explanation: "HTML is a markup language used to describe content structure, not a programming language with execution logic."
          },
          {
            q: "What gives your computer power by converting alternating current (AC) to direct current (DC)?",
            options: ["Transformer", "Inverter", "Power Supply", "Motherboard"],
            answer: 2,
            explanation: "The Power Supply converts wall AC power into direct current (DC) usable by internal computer components[cite: 3]."
          },
          {
            q: "Which HTML element is the root element of a web page?",
            options: ["The body tag", "The head tag", "The document tag", "The html root element"],
            answer: 3,
            explanation: "The html element is the root element that wraps all other content in an HTML document."
          },
          {
            q: "Who is credited with inventing the World Wide Web in 1991?",
            options: ["Tim Berners-Lee", "Ray Tomlinson", "Vint Cerf", "Bill Gates"],
            answer: 0,
            explanation: "Tim Berners-Lee invented the World Wide Web at CERN, creating HTML, URI/URL, and HTTP."
          },
          {
            q: "What is the primary purpose of the head section in an HTML document?",
            options: [
              "To display visible headings and paragraphs",
              "To hold meta-information, character encoding, and the page title not displayed directly on the page",
              "To style the background color",
              "To execute JavaScript loops"
            ],
            answer: 1,
            explanation: "The head section contains metadata used by browsers and search engines, hidden from the main visual canvas."
          },
          {
            q: "What was the purpose of introducing the Domain Name System (DNS) in 1985?",
            options: [
              "To send emails faster",
              "To display images inline with text",
              "To replace hard numeric IP addresses with human-readable domain names",
              "To connect wireless routers"
            ],
            answer: 2,
            explanation: "DNS revolutionized usability by mapping complex numeric IP addresses to readable names like google.com."
          },
          {
            q: "Which protocol suite is used as the foundational communication standard for the Internet?",
            options: ["SMTP", "HTTP / HTTPS", "FTP", "TCP/IP"],
            answer: 3,
            explanation: "The Internet relies on the Transmission Control Protocol / Internet Protocol (TCP/IP) suite."
          },
          {
            q: "What year was ARPANET created by the U.S. Department of Defense's ARPA?",
            options: ["1969", "1975", "1983", "1991"],
            answer: 0,
            explanation: "ARPANET was launched in 1969, successfully connecting four university computers using TCP/IP."
          },
          {
            q: "Which HTML tag is a self-closing element used to insert a line break within text?",
            options: ["The lb element", "The br break tag", "The break element", "The hr line tag"],
            answer: 1,
            explanation: "The br tag inserts a single line break without starting a new paragraph."
          },
          {
            q: "What is the primary difference between an absolute URL and a relative URL?",
            options: [
              "Absolute URLs only work on mobile devices",
              "Relative URLs are slower to load",
              "Absolute URLs give the full web address including protocol, while relative URLs point to files within the same site",
              "There is no difference"
            ],
            answer: 2,
            explanation: "Absolute URLs provide the complete external path, whereas relative URLs use paths relative to the current file."
          },
          {
            q: "Which web browser released in 1993 was the first to display images inline with text?",
            options: ["Netscape Navigator", "Internet Explorer", "Google Chrome", "Mosaic"],
            answer: 3,
            explanation: "The Mosaic web browser (1993) revolutionized accessibility by rendering images inline with text."
          },
          {
            q: "What is the mandatory first line of code in every modern HTML5 document?",
            options: ["The html5 doctype declaration", "The html root tag", "The meta charset tag", "The head tag"],
            answer: 0,
            explanation: "The doctype declaration tells the browser that the document is written in HTML5 and must be the very first line."
          },
          {
            q: "What type of storage device is a traditional magnetic Hard Disk Drive (HDD)?",
            options: ["Primary volatile memory", "Secondary non-volatile storage", "Cache memory", "ROM firmware"],
            answer: 1,
            explanation: "HDDs serve as non-volatile secondary storage for permanent file retention."
          },
          {
            q: "Which expansion card allows a computer to connect to a local area network via an Ethernet cable?",
            options: ["Graphics Card", "Sound Card", "Network Interface Card (NIC)", "Video Capture Card"],
            answer: 2,
            explanation: "A Network Interface Card (NIC) provides wired network connectivity."
          },
          {
            q: "In the client-server architecture, what is the primary role of the web browser?",
            options: [
              "Storing website files and databases",
              "Routing network packets globally",
              "Compiling programming code",
              "Making requests for resources and displaying the rendered response to the user"
            ],
            answer: 3,
            explanation: "The client (browser) requests resources from a server, interprets the data, and renders it visually for the user."
          },
          {
            q: "Which HTML heading tag represents the highest level of importance?",
            options: ["The h1 heading tag", "The h6 heading tag", "The h3 heading tag", "The head tag"],
            answer: 0,
            explanation: "h1 is the highest heading tag representing the main title of the page."
          },
          {
            q: "What is the primary function of an operating system?",
            options: ["To compile C++ code into machine language", "To manage hardware resources and provide common services for computer programs", "To design responsive web layouts", "To clean dust from computer fans"],
            answer: 1,
            explanation: "An Operating System (OS) manages hardware and software resources to ensure smooth operation."
          },
          {
            q: "Which peripheral device is classified strictly as an output device?",
            options: ["Keyboard", "Mouse", "Microphone", "Monitor"],
            answer: 2,
            explanation: "A monitor displays visual output generated by the computer system."
          },
          {
            q: "Which list tag is used to create an unordered (bulleted) list in HTML?",
            options: ["Ordered list tag", "Definition list tag", "List item tag", "Unordered list ul tag"],
            answer: 3,
            explanation: "The ul tag creates an unordered bulleted list, with items defined inside using li."
          },
          {
            q: "How should the mathematical expression '5 < 10' be written in HTML to display correctly?",
            options: ["Using the lt entity reference", "Directly with the less than sign", "Using the gt entity reference", "Using the ampersand entity"],
            answer: 0,
            explanation: "Reserved characters like '<' must be written using their entity reference '&lt;'."
          },
          {
            q: "What unit is used to measure processor clock speed?",
            options: ["Bytes", "Hertz (MHz or GHz)", "Volts", "Watts"],
            answer: 1,
            explanation: "CPU clock speed is measured in Hertz, representing cycles per second."
          },
          {
            q: "What attribute is mandatory inside an image tag to specify the image source file path?",
            options: ["href", "link", "src", "path"],
                        answer: 2,
            explanation: "The src attribute defines the path to the image file."
          },
          {
            q: "What three tags are used together to create a definition list in HTML?",
            options: ["ul, li, item tags", "ol, li, item tags", "list, term, desc tags", "dl, dt, dd definition tags"],
            answer: 3,
            explanation: "dl defines the list, dt defines the term, and dd defines the definition description."
          },
          {
            q: "Which physical device is considered the 'brain' of the computer where calculations occur?",
            options: ["CPU", "Hard Disk", "RAM", "Motherboard"],
            answer: 0,
            explanation: "The Central Processing Unit (CPU) executes instructions and performs core computations[cite: 3]."
          },
          {
            q: "Which peripheral device is classified strictly as an input device?",
            options: ["Monitor", "Printer", "Scanner", "Speaker"],
            answer: 1,
            explanation: "A scanner captures physical documents and inputs digital images into the computer."
          },
          {
            q: "Where should CSS style rules typically be linked within an HTML document for optimal loading?",
            options: ["At the very bottom of the body", "Inside a footer element", "Inside the head section", "Inside a comment tag"],
            answer: 2,
            explanation: "Linking CSS stylesheets inside the head section ensures styles load before content renders, preventing layout shifts."
          },
          {
            q: "What value should be given to the target attribute in a link tag to open a link in a new browser tab?",
            options: ["self value", "new value", "top value", "blank value"],
            answer: 3,
            explanation: "target='_blank' opens the linked document in a new browser tab or window."
          },
          {
            q: "What does BIOS stand for in computer architecture?",
            options: ["Basic Input/Output System", "Binary Integrated Operating Structure", "Built-in Internal Operating Software", "Basic Internet Online Service"],
            answer: 0,
            explanation: "BIOS is firmware used to perform hardware initialization during the booting process."
          },
          {
            q: "What is cache memory?",
            options: ["A slow permanent storage drive", "Extremely fast small memory located close to or on the CPU for rapid data access", "External backup tape storage", "Removable flash memory"],
            answer: 1,
            explanation: "CPU cache provides high-speed temporary storage for frequently used instructions."
          },
          {
            q: "Which HTML tag defines a table row?",
            options: ["Data cell tag", "Header cell tag", "Table row tr tag", "Table container tag"],
            answer: 2,
            explanation: "The tr tag defines a table row containing header or data cells."
          },
          {
            q: "Which port type transmits uncompressed high-definition digital video and audio through a single cable?",
            options: ["VGA", "Serial Port", "PS/2", "HDMI"],
            answer: 3,
            explanation: "HDMI (High-Definition Multimedia Interface) transmits digital audio and video signals."
          },
          {
            q: "What does USB stand for?",
            options: ["Universal Serial Bus", "Unified System Board", "Ultra Speed Binary", "Universal Software Bridge"],
            answer: 0,
            explanation: "USB stands for Universal Serial Bus, an industry standard for connection and power."
          },
          {
            q: "What is an IP address?",
            options: ["A physical hardware serial number", "A unique numerical label assigned to each device connected to a computer network", "A password for accessing email", "A website design template"],
            answer: 1,
            explanation: "An Internet Protocol (IP) address uniquely identifies devices on a TCP/IP network."
          },
          {
            q: "What protocol does the World Wide Web use to transmit hyperlinked documents?",
            options: ["FTP", "DNS", "TCP/IP", "HTTP / HTTPS"],
            answer: 2,
            explanation: "The Web uses HyperText Transfer Protocol (HTTP/HTTPS) to transmit web resources across the internet."
          },
          {
            q: "Which of the following is an example of application software rather than system software?",
            options: ["Microsoft Windows", "Linux Kernel", "Device Driver", "Microsoft Word"],
            answer: 3,
            explanation: "Microsoft Word is an end-user application designed for word processing."
          },
          {
            q: "Which protocol is used for securely transmitting web pages over an encrypted connection?",
            options: ["HTTPS", "HTTP", "FTP", "TELNET"],
            answer: 0,
            explanation: "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption for secure data transfer."
          },
          {
            q: "What is the function of a web server?",
            options: ["To browse web pages on the client side", "To store, process, and deliver web pages to users over the network upon request", "To compile HTML code into PDF", "To block computer viruses"],
            answer: 1,
            explanation: "A web server hosts website files and responds to client browser requests."
          },
          {
            q: "Which HTML tag is used to define a table header cell?",
            options: ["Data cell tag", "Table row tag", "Table header th tag", "Head section tag"],
            answer: 2,
            explanation: "The th tag defines a table header cell, typically rendered in bold and centered by default."
          },
          {
            q: "What is the function of a motherboard in a personal computer?",
            options: ["To cool down the processor", "To supply electric current", "To display graphics on screen", "To act as the main printed circuit board connecting all internal components together"],
            answer: 3,
            explanation: "The motherboard provides electrical connections and communication pathways for all components[cite: 3]."
          },
          {
            q: "Which HTML tag is used to create a numbered (ordered) list?",
            options: ["Ordered list ol tag", "Unordered list tag", "List item tag", "Definition list tag"],
            answer: 0,
            explanation: "The ol tag creates an ordered (numbered) list in HTML."
          },
          {
            q: "Which HTML tag is used to embed an image into a web page?",
            options: ["Image tag alias", "Image img tag", "Picture tag alias", "Source attribute"],
            answer: 1,
            explanation: "The img tag embeds images, utilizing the src attribute to specify the image file path."
          },
          {
            q: "What does CSS stand for in web design?",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Colorful Sheet Syntax"],
            answer: 1,
            explanation: "CSS stands for Cascading Style Sheets, used for styling and layout presentation."
          },
          {
            q: "What is open-source software?",
            options: ["Software whose source code is made freely available for modification and redistribution", "Software that requires a paid subscription", "Software that only runs on cloud servers", "Software protected by strict copyright laws"],
            answer: 0,
            explanation: "Open-source software allows anyone to inspect, modify, and enhance its source code."
          },
          {
            q: "What is a computer network?",
            options: ["A single standalone computer with no peripherals", "A collection of computers and devices interconnected via communication channels to share resources", "An internal CPU cooling system", "A programming compiler"],
            answer: 1,
            explanation: "A network connects multiple computing devices together to share data, hardware, and internet access."
          },
          {
            q: "What is the primary function of a router in networking?",
            options: ["To forward data packets between different computer networks", "To display web pages", "To convert AC power to DC", "To store user passwords securely"],
            answer: 0,
            explanation: "Routers direct traffic and forward data packets across interconnected networks."
          },
          {
            q: "Which HTML element is used to define emphasized text (usually displayed in italics)?",
            options: ["Emphasized em tag", "Strong bold tag", "Plain bold tag", "Mark highlight tag"],
            answer: 0,
            explanation: "The em tag renders text with emphasized italicized styling."
          },
          {
            q: "What is the purpose of the body tag in HTML?",
            options: ["To contain all visible content such as text, images, and links displayed on the web page", "To hold metadata and scripts only", "To define the site header", "To store CSS styles"],
            answer: 0,
            explanation: "The body tag holds the main visual content of an HTML document."
          }
        ]
        
      },
      {
        id: "csc101-syllabus",
        week: "Course Syllabus (2026/2027)",
        title: "CSC 101: Internet Programming I Syllabus & Course Roadmap",
        pdfPath: "kwasu csc 101 syllabus 2026_2027.pdf",
        summary: [
          "1. Topic Introduction: KWASU-CSC 101 (Internet Programming I) is a 2-unit core course for first-year B.Sc. and B.Ed. Computer Science students in the 2026/2027 Harmattan Semester, coordinated by Dr. S. R. Yusuff (Lectures hold Wednesdays at ICT LR G from 12 PM to 2 PM for Group A, and ICT LR H from 2 PM to 4 PM for Group B)[cite: 23]. It introduces the foundations of the Internet and World Wide Web alongside practical static front-end web development[cite: 23].",
          "2. Detailed Lecture Explanations: The 13-week curriculum is structured into three progressive modules[cite: 25, 27]. Module A (Weeks 1 to 2) covers the distinction between the physical Internet infrastructure and the Web service, ARPANET history, Tim Berners-Lee, and client-server request-response communication[cite: 25]. Module B (Weeks 3 to 10) dives deeply into HTML document skeletons, tags, attributes, character entities, text formatting, headings, lists, images, hyperlinks, tables, forms, and semantic HTML[cite: 25, 26, 27]. Module C (Weeks 11 to 13) introduces Cascading Style Sheets (CSS) for visual styling, JavaScript (JS) for DOM interactivity, and culminates in hosting a personal portfolio website[cite: 25, 27].",
          "3. Important Definitions and Terminology: Internet (the global physical network of interconnected computers) vs. World Wide Web (an information service running on top of the Internet)[cite: 25]; Client-Server Architecture (browsers acting as clients requesting resources from web servers)[cite: 25]; HTML (HyperText Markup Language for page structure)[cite: 23, 25]; CSS (Cascading Style Sheets for presentation and layout)[cite: 23, 25]; JavaScript (client-side scripting for page behavior and interactivity)[cite: 23, 25]; Void Elements (self-closing HTML tags such as the line break element)[cite: 26]; Semantic HTML (meaningful structural tags like header, nav, main, section, article, aside, and footer)[cite: 27].",
          "4. Examples and Applications: Practical sessions emphasize live coding in Visual Studio Code with Live Server, inspecting elements using Chrome or Firefox DevTools, validating markup with the W3C Markup Validator, and deploying student portfolio projects online via GitHub Pages or free/paid web hosting platforms[cite: 23, 27, 28].",
          "5. Formulas and Grading Breakdown: Total course evaluation equals 100 marks distributed across five components: Continuous Assessment Test 1 in Week 5 covering Weeks 1 to 4 (5 marks, short answer)[cite: 24, 26]; Regular Classroom and Online Discussions (2 marks)[cite: 24]; Lecture Attendance requiring a minimum of 6 classes (3 marks)[cite: 24]; Continuous Assessment Test 2 in Week 10 covering Weeks 5 to 9 (15 marks, multiple choice)[cite: 24, 27]; Out-of-Classroom Practical Webpage Project due in Week 13 (15 marks)[cite: 24, 27]; and the End-of-Semester Examination (60 marks)[cite: 24].",
          "6. Important Examination and Policy Points: Attendance is compulsory, and a minimum of 75 percent lecture attendance is a strict prerequisite to sit for the final examination[cite: 28]. Students must arrive within the first hour of lecture (latecomers after one hour are not condoned), mute mobile phones, dress properly with a functioning laptop or mobile device, and ensure official course registration on the KWASU portal so grades are recorded[cite: 28].",
          "7. Revision Exercises: (a) Distinguish clearly between the Internet and the World Wide Web[cite: 25]. (b) Outline the exact mark distribution for CA Tests, attendance, project, and final exam[cite: 24]. (c) Explain the distinct roles of HTML, CSS, and JavaScript in front-end development[cite: 25]. (d) List the seven semantic HTML layout elements taught in Week 10 and explain their SEO and accessibility benefits[cite: 27]."
        ],
        questions: [
          {
            q: "How many credit units is KWASU-CSC 101 Internet Programming I worth?",
            options: ["3 units", "2 units", "4 units", "1 unit"],
            answer: 1,
            explanation: "KWASU-CSC 101 is a 2-unit core course for first-year Computer Science students[cite: 23]."
          },
          {
            q: "Who is the Course Lecturer and Coordinator for KWASU-CSC 101 in the 2026/2027 session?",
            options: ["S. R. Yusuff", "Julie C. Meloni", "Tim Berners-Lee", "Mark J. Collins"],
            answer: 0,
            explanation: "The course syllabus lists S. R. Yusuff as the Course Lecturer and Coordinator[cite: 23]."
          },
          {
            q: "When and where do Group A lectures hold for CSC 101?",
            options: ["Mondays 10 AM to 12 PM at ICT LR H", "Wednesdays 2 PM to 4 PM at ICT LR H", "Wednesdays 12 PM to 2 PM at ICT LR G", "Fridays 10 AM to 12 PM at ICT LR G"],
            answer: 2,
            explanation: "Group A meets on Wednesdays at ICT LR G from 12 PM to 2 PM[cite: 23]."
          },
          {
            q: "When and where do Group B lectures hold for CSC 101?",
            options: ["Wednesdays 12 PM to 2 PM at ICT LR G", "Mondays 10 AM to 12 PM at ICT LR G", "Tuesdays 2 PM to 4 PM at ICT LR H", "Wednesdays 2 PM to 4 PM at ICT LR H"],
            answer: 3,
            explanation: "Group B meets on Wednesdays at ICT LR H from 2 PM to 4 PM[cite: 23]."
          },
          {
            q: "What is the minimum lecture attendance percentage required as a prerequisite for taking the CSC 101 examination?",
            options: ["75 percent", "50 percent", "60 percent", "80 percent"],
            answer: 0,
            explanation: "A minimum of 75 percent attendance at lectures is a strict prerequisite for taking examinations[cite: 28]."
          },
          {
            q: "How many marks are allocated to the End-of-Session Examination in CSC 101?",
            options: ["50 marks", "60 marks", "70 marks", "40 marks"],
            answer: 1,
            explanation: "The end-of-session examination carries 60 marks out of the total 100 marks[cite: 24]."
          },
          {
            q: "In which week does the first Continuous Assessment short answer test take place?",
            options: ["Week 3", "Week 10", "Week 5", "Week 13"],
            answer: 2,
            explanation: "The first short answer test takes place in the fifth week of resumption for 5 marks[cite: 24]."
          },
          {
            q: "Which weeks of lecture content are covered in CA Test 1?",
            options: ["Weeks 5 to 9", "Weeks 10 to 13", "Weeks 1 to 2", "Weeks 1 to 4"],
            answer: 3,
            explanation: "CA Test 1 held in Week 5 covers the topics taught during Weeks 1 to 4[cite: 26]."
          },
          {
            q: "How many marks are awarded for the second test held in the tenth week of resumption?",
            options: ["15 marks", "5 marks", "10 marks", "20 marks"],
            answer: 0,
            explanation: "The second test is a multiple-choice test in Week 10 worth 15 marks[cite: 24]."
          },
          {
            q: "Which weeks of lecture content are covered in CA Test 2?",
            options: ["Weeks 1 to 4", "Weeks 5 to 9", "Weeks 10 to 12", "All 13 weeks"],
            answer: 1,
            explanation: "CA Test 2 in Week 10 covers lecture material from Weeks 5 to 9[cite: 27]."
          },
          {
            q: "When is the submission and presentation of the out-of-classroom practical webpage project due?",
            options: ["Week 5", "Week 10", "Week 13", "Week 9"],
            answer: 2,
            explanation: "Submission and presentation of the out-of-classroom project is due by the thirteenth week for 15 marks[cite: 24, 27]."
          },
          {
            q: "What are the three modules that organize the CSC 101 course outline?",
            options: ["Hardware, Software, Networking", "Python, Java, C Plus Plus", "Databases, Cloud, Security", "Internet Foundations, HTML, CSS and JavaScript Introduction"],
            answer: 3,
            explanation: "The syllabus organizes the course into Module A Internet Foundations, Module B HTML, and Module C CSS and JavaScript Introduction[cite: 25]."
          },
          {
            q: "According to Week 1 content, what is the core distinction between the Internet and the World Wide Web?",
            options: ["The Internet is the physical network while the Web is a service running on it", "They are completely identical terms", "The Web is hardware while the Internet is a browser", "The Internet was invented in 2010 while the Web started in 1969"],
            answer: 0,
            explanation: "Week 1 contrasts the Internet as the underlying network versus the World Wide Web as a service running on it[cite: 25]."
          },
          {
            q: "Who is studied in Week 1 as the inventor of the World Wide Web?",
            options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
            answer: 1,
            explanation: "Week 1 covers ARPANET, Tim Berners-Lee and the invention of the Web, and early browsers[cite: 25]."
          },
          {
            q: "In the web development landscape covered in Week 2, what is the specific role of HTML?",
            options: ["Styling and colors", "Interactive page behavior", "Document structure", "Database management"],
            answer: 2,
            explanation: "Week 2 defines the distinct roles of HTML for structure, CSS for style, and JS for behavior[cite: 25]."
          },
          {
            q: "What is the specific role of CSS in front-end web development?",
            options: ["Database storage", "Server routing", "Logic execution", "Visual styling and presentation"],
            answer: 3,
            explanation: "CSS is responsible for visual style and layout presentation[cite: 23, 25]."
          },
          {
            q: "What is the role of JavaScript alongside HTML and CSS?",
            options: ["Adding behavior and basic interactivity", "Defining server hardware", "Validating W3C certificates", "Creating network cables"],
            answer: 0,
            explanation: "JavaScript adds basic interactivity and dynamic behavior to web pages[cite: 23, 25]."
          },
          {
            q: "Which component of the HTML document skeleton is taught in Week 3 as the very first declaration?",
            options: ["The body element", "The DOCTYPE html declaration", "The footer element", "The script tag"],
            answer: 1,
            explanation: "Week 3 covers the HTML document skeleton starting with DOCTYPE html, followed by html, head, and body[cite: 26]."
          },
          {
            q: "What are self-closing HTML elements such as the line break element called in Week 4?",
            options: ["Block elements", "Root elements", "Void elements", "Semantic containers"],
            answer: 2,
            explanation: "Week 4 introduces opening and closing tags alongside self-closing void elements like the line break tag[cite: 26]."
          },
          {
            q: "How is HTML attribute syntax structured according to Week 4?",
            options: ["value equals name", "name colon value", "attribute arrow value", "name equals quoted value"],
            answer: 3,
            explanation: "Attribute syntax in HTML follows the standard name equals quoted value format[cite: 26]."
          },
          {
            q: "Which HTML character entity is used to represent the ampersand symbol safely in text?",
            options: ["amp entity", "lt entity", "copy entity", "nbsp entity"],
            answer: 0,
            explanation: "Week 4 covers HTML character entities including ampersand, less than, copyright, and non-breaking space[cite: 26]."
          },
          {
            q: "How many levels of HTML heading elements are covered in Week 5 to establish proper page hierarchy?",
            options: ["3 levels", "6 levels from h1 to h6", "4 levels", "10 levels"],
            answer: 1,
            explanation: "Week 5 teaches heading elements h1 through h6 and correct heading hierarchy[cite: 26]."
          },
          {
            q: "Which HTML list type is constructed using dl, dt, and dd elements in Week 6?",
            options: ["Unordered bulleted list", "Ordered numbered list", "Description or definition list", "Navigation dropdown list"],
            answer: 2,
            explanation: "Week 6 covers unordered lists, ordered lists, nested lists, and description or definition lists using dl, dt, and dd[cite: 26]."
          },
          {
            q: "Which two attributes are highlighted as essential for the HTML image element in Week 7?",
            options: ["href and target", "action and method", "rowspan and colspan", "src and alt"],
            answer: 3,
            explanation: "Week 7 covers the img element and its core attributes including src, alt, width, and height[cite: 26]."
          },
          {
            q: "Which element and attribute are used to create hyperlinks in HTML according to Week 7?",
            options: ["The anchor a element and href attribute", "The img element and src attribute", "The link element and rel attribute", "The form element and action attribute"],
            answer: 0,
            explanation: "Hyperlinks are created using the anchor element and the href attribute for internal, external, and relative URLs[cite: 26]."
          },
          {
            q: "In Week 8, which attributes allow HTML table cells to span across multiple rows or columns?",
            options: ["width and height", "rowspan and colspan", "action and method", "margin and padding"],
            answer: 1,
            explanation: "Week 8 teaches table structure alongside rowspan and colspan attributes[cite: 26]."
          },
          {
            q: "What is emphasized in Week 8 regarding the appropriate use of HTML tables?",
            options: ["Using tables for entire website page layouts", "Avoiding table headers", "Using tables strictly for tabular data rather than page layout", "Using tables instead of CSS"],
            answer: 2,
            explanation: "Week 8 contrasts appropriate use of tables for structured data versus inappropriate use for page layout[cite: 26]."
          },
          {
            q: "Which two attributes on the HTML form element control where and how form data is submitted?",
            options: ["src and alt", "id and class", "width and height", "action and method"],
            answer: 3,
            explanation: "Week 9 covers the form element and its action and method attributes[cite: 26]."
          },
          {
            q: "Which form attributes provide basic client-side validation and input hints in Week 9?",
            options: ["required and placeholder", "rowspan and colspan", "href and target", "bold and italic"],
            answer: 0,
            explanation: "Week 9 covers basic form validation attributes including required and placeholder[cite: 26]."
          },
          {
            q: "Which of the following is a semantic HTML element taught in Week 10?",
            options: ["div", "article", "span", "font"],
            answer: 1,
            explanation: "Week 10 introduces semantic elements including header, nav, main, section, article, aside, and footer[cite: 27]."
          },
          {
            q: "Besides document structure and accessibility, what additional benefit of semantic HTML is noted in Week 10?",
            options: ["Faster internet download speed", "Automatic database creation", "Search Engine Optimization or SEO benefits", "Free web hosting"],
            answer: 2,
            explanation: "Week 10 highlights that semantic HTML improves document structure, accessibility, and SEO[cite: 27]."
          },
          {
            q: "What are the three ways to apply CSS to an HTML document covered in Week 11?",
            options: ["Top, middle, and bottom CSS", "Static, dynamic, and relative CSS", "Local, global, and cloud CSS", "Inline, internal, and external CSS"],
            answer: 3,
            explanation: "Week 11 covers inline, internal, and external CSS stylesheets[cite: 27]."
          },
          {
            q: "Which three basic CSS selectors are introduced in Week 11?",
            options: ["Element, class, and id selectors", "Table, form, and list selectors", "Header, footer, and nav selectors", "Script, link, and meta selectors"],
            answer: 0,
            explanation: "Week 11 introduces basic CSS selectors including element, class, and id[cite: 27]."
          },
          {
            q: "What is the standard structure of a CSS rule taught in Week 11?",
            options: ["property equals value", "selector followed by curly braces containing property colon value", "tag name followed by attributes", "function name followed by parentheses"],
            answer: 1,
            explanation: "CSS syntax follows the pattern selector with property colon value inside curly braces[cite: 27]."
          },
          {
            q: "How can JavaScript be embedded into a webpage according to Week 12?",
            options: ["Only through CSS files", "Using the style tag", "Inline, internal script tag, or external .js file", "Through image alt attributes"],
            answer: 2,
            explanation: "Week 12 covers embedding JavaScript inline, via internal script tags, or via an external .js file[cite: 27]."
          },
          {
            q: "What practical DOM interaction example is highlighted in Week 12?",
            options: ["Formatting a hard drive", "Compiling C code", "Designing a logo in Photoshop", "Changing text on a button click"],
            answer: 3,
            explanation: "Week 12 features a simple DOM interaction example such as changing text when a button is clicked[cite: 27]."
          },
          {
            q: "What is the culminating project that each student presents at the end of CSC 101?",
            options: ["A hosted personal portfolio website", "A mobile banking app", "An operating system kernel", "A hardware motherboard"],
            answer: 0,
            explanation: "The class concludes with each student presenting a portfolio website hosted on the web[cite: 27]."
          },
          {
            q: "Which primary code editor is recommended in the digital tools section of the syllabus?",
            options: ["Microsoft Word", "Visual Studio Code with Live Server", "Adobe Photoshop", "Notepad only"],
            answer: 1,
            explanation: "Visual Studio Code with a live-reload extension such as Live Server is recommended as the primary code editor[cite: 28]."
          },
          {
            q: "Which tool is recommended in the syllabus for checking the validity of submitted HTML code?",
            options: ["GitHub Desktop", "Chrome Incognito", "W3C Markup Validator", "Microsoft Excel"],
            answer: 2,
            explanation: "The W3C Markup Validator is listed for checking the validity of submitted HTML[cite: 28]."
          },
          {
            q: "Which optional hosting platform is listed in the syllabus for publishing and sharing student webpage projects?",
            options: ["Dropbox", "Google Drive", "WhatsApp", "GitHub Pages"],
            answer: 3,
            explanation: "GitHub Pages is listed as an optional platform for publishing and sharing student webpage projects[cite: 28]."
          },
          {
            q: "How many marks are allocated to attendance in CSC 101, and what is the minimum class requirement?",
            options: ["3 marks for a minimum of 6 classes", "5 marks for 10 classes", "10 marks for 4 classes", "2 marks for 8 classes"],
            answer: 0,
            explanation: "A minimum of 6 classes attended earns 3 marks in the assessment breakdown[cite: 24]."
          },
          {
            q: "How many marks are awarded for regular participation in classroom and online discussions?",
            options: ["5 marks", "2 marks", "3 marks", "10 marks"],
            answer: 1,
            explanation: "Classroom discussions during classroom interactions and online meetings carry 2 marks[cite: 24]."
          },
          {
            q: "When are the Course Lecturer's office hours scheduled?",
            options: ["Wednesdays 12 PM to 2 PM", "Fridays 2 PM to 4 PM", "Mondays 10 AM to 12 PM", "Tuesdays 8 AM to 10 AM"],
            answer: 2,
            explanation: "Office hours hold on Mondays from 10 AM to 12 PM[cite: 23]."
          },
          {
            q: "What is the syllabus policy regarding students arriving late to CSC 101 lectures?",
            options: ["Latecomers are always welcomed at any time", "Students can arrive 90 minutes late", "Attendance is not taken", "Late coming an hour after lecture commencement is not condoned"],
            answer: 3,
            explanation: "Late coming to class an hour after the commencement of lecture will not be condoned[cite: 28]."
          },
          {
            q: "What prerequisite courses are required before enrolling in KWASU-CSC 101?",
            options: ["None, prerequisites are not applicable", "CSC 102 and MAT 101", "PHY 101", "COS 101"],
            answer: 0,
            explanation: "The syllabus states that prerequisites and co-requisites are Not Applicable for CSC 101[cite: 23]."
          },
          {
            q: "In client-server architecture taught in Week 2, what acts as the client?",
            options: ["The web server", "The web browser", "The Ethernet cable", "The CSS file"],
            answer: 1,
            explanation: "Week 2 explains client-server architecture where browsers act as clients communicating with web servers[cite: 25]."
          },
          {
            q: "Which learning model in the syllabus involves students reviewing pre-class tutorials so class time is reserved for hands-on practice?",
            options: ["Pure dictation", "Flipped or blended learning", "Correspondence study", "Exam-only evaluation"],
            answer: 1,
            explanation: "Flipped or blended learning uses short pre-class tutorials like MDN Web Docs so class time is spent on hands-on practice[cite: 27]."
          },
          {
            q: "What target score is set in Learning Objective 1 for the Week 2 quiz on Internet history and client-server architecture?",
            options: ["At least 70 percent", "At least 50 percent", "At least 90 percent", "At least 40 percent"],
            answer: 0,
            explanation: "Learning Objective 1 specifies scoring at least 70 percent on a related quiz by Week 2[cite: 24]."
          },
          {
            q: "What target score is set in Learning Objective 6 for the final JavaScript practical assessment?",
            options: ["At least 80 percent", "At least 60 percent", "At least 75 percent", "At least 50 percent"],
            answer: 1,
            explanation: "Learning Objective 6 specifies scoring at least 60 percent on the final JavaScript practical assessment[cite: 24]."
          },
          {
            q: "What administrative requirement must a student fulfill on the KWASU portal for their CSC 101 grades to be recorded?",
            options: ["Download VS Code", "Create a GitHub account", "Officially register for the course on the KWASU portal", "Submit a printed photo"],
            answer: 2,
            explanation: "Only students who officially registered for the course on the KWASU portal will have their grades recorded[cite: 28]."
          }
        ]
  },
  
      {
        id: "csc101-comments-lists",
        week: "Module 2",
        title: "HTML Comments and Lists",
        pdfPath: "pdfs/HTML_COMMENTS_LIST.pdf",
        summary: [
          "1. Topic Introduction: This lecture note from Kwara State University (KWASU), Department of Computer, Library and Information Science, coordinated by Shakirat Yusuff, covers core HTML concepts including attributes, human-readable comments, and comprehensive list structures (ordered, unordered, and definition lists)[cite: 29, 30, 31, 32, 33].",
          "2. Detailed Lecture Explanations: The material explains how HTML elements accept name/value attribute pairs in start tags to provide extra metadata (such as paragraph alignment or horizontal rule styling)[cite: 31]. It details syntax rules for writing browser-ignored comments for developer collaboration, and breaks down the structural differences, default behaviors, nesting rules, and type attributes for ordered lists (<ol>), unordered lists (<ul>), and definition lists (<dl>, <dt>, <dd>)[cite: 32, 34, 36, 38].",
          "3. Important Definitions and Terminology: HTML Attributes (extra metadata specified in start tags as name equals value)[cite: 31]; Comments (human-readable notes starting with `<!--` and ending with `-->` ignored by browsers)[cite: 32]; Ordered Lists (`<ol>` used for sequential items using Arabic numerals, Roman numerals, or letters by default)[cite: 34]; Unordered Lists (`<ul>` used for items of equal importance using disc, circle, or square bullets)[cite: 36]; Definition Lists (`<dl>` rendering terms and indented descriptions without bullets)[cite: 38].",
          "4. Examples and Applications: Practical demonstrations include nested ordered lists tracking university semester courses (e.g., Harmattan and Rain semesters with roman and arabic sub-numbering), nested unordered lists recording passed classes, and definition lists detailing web design languages like HTML, CSS, and JavaScript[cite: 40, 43, 44, 46].",
          "5. Formulas and Markup Syntax: Standard syntax patterns include `<ol type='I' start='4'>`, `<ul type='disc'>`, and `<dl><dt>term</dt><dd>explanation</dd></dl>`[cite: 34, 36, 38, 43].",
          "6. Important Examination Points: Ordered lists default to Arabic numerals and accept type values (`1`, `A`, `a`, `I`, `i`) and `start` attributes; unordered lists default to `disc` bullets and accept `disc`, `circle`, or `square`; definition lists display terms with indented descriptions (`<dd>`) without bullets[cite: 34, 36, 38].",
          "7. Revision Exercises: The lecture note concludes with a practical assignment requiring students to create a softcopy web page displaying the course outline for CSC 207 (weeks and topics only, excluding references) using ordered lists for weeks and topics, unordered lists for sub-topics, and proper text formatting tags[cite: 46]."
        ],
        questions: [
          {
            q: "What purpose do attributes serve in HTML elements?",
            options: ["They provide additional information about an element", "They replace the need for tags", "They compile the web page into binary", "They act as web servers"],
            answer: 0,
            explanation: "Attributes provide additional information about an element and are always specified in the start tag[cite: 31]."
          },
          {
            q: "Where must HTML attributes always be specified?",
            options: ["In the end tag", "In the start tag", "Inside the comment block", "In the external stylesheet"],
            answer: 1,
            explanation: "Attributes are always specified in the start tag[cite: 31]."
          },
          {
            q: "How do HTML attributes commonly come formatted?",
            options: ["As function parameter pairs", "As name value pairs like name equals value", "As boolean switches only", "As bullet point symbols"],
            answer: 1,
            explanation: "Attributes come in name/value pairs like name equals value[cite: 31]."
          },
          {
            q: "Where can HTML comments exist within a document?",
            options: ["Anywhere between the html tags", "Only inside the head section", "Only after the body tag", "Only inside table cells"],
            answer: 0,
            explanation: "Comments can exist anywhere between the html tags[cite: 32]."
          },
          {
            q: "What is the primary purpose of HTML comments?",
            options: ["To execute background scripts", "To style text formatting", "To contain information for humans to read and for the browser to ignore", "To speed up page loading"],
            answer: 2,
            explanation: "Comments contain information for other humans to read and for the browser to ignore[cite: 32]."
          },
          {
            q: "How do HTML comments start and end?",
            options: ["They start with exclamation point hyphen hyphen and end with hyphen hyphen greater than", "They start with slash asterisk and end with asterisk slash", "They start with hash and end with newline", "They start with percent and end with percent"],
            answer: 0,
            explanation: "Comments start with exclamation point hyphen hyphen and end with hyphen hyphen greater than[cite: 32]."
          },
          {
            q: "What are the three basic types of lists covered in HTML?",
            options: ["Ordered, unordered, and definition lists", "Numbered, bulleted, and table lists", "Primary, secondary, and tertiary lists", "Block, inline, and flex lists"],
            answer: 0,
            explanation: "There are basically three types of lists: Ordered Lists, Unordered Lists, and Definition Lists[cite: 33]."
          },
          {
            q: "When should an Ordered List using the ol tag be used?",
            options: ["When each item is equally important", "When information order is important", "When displaying term definitions", "When creating image galleries"],
            answer: 1,
            explanation: "Ordered lists are used for information for which order is important[cite: 34]."
          },
          {
            q: "What numbering type does an ordered list use by default?",
            options: ["Roman numerals", "Alphabetical letters", "Arabic numerals", "Bullet circles"],
            answer: 2,
            explanation: "Ordered list uses Arabic numerals as its default numbering type[cite: 34]."
          },
          {
            q: "What are the two main attributes for the ordered list ol tag?",
            options: ["src and alt", "type and start", "href and target", "action and method"],
            answer: 1,
            explanation: "Two main attributes for OL are type and start[cite: 34]."
          },
          {
            q: "Which of the following are valid attribute values for the ordered list type attribute?",
            options: ["disc, circle, square", "1, A, a, I, or i", "bold, italic, underline", "left, right, center"],
            answer: 1,
            explanation: "Attribute values for type in ordered lists are 1, A, a, I, or i[cite: 34]."
          },
          {
            q: "Which attribute can be used in an ordered list to continue a previous numbering sequence?",
            options: ["type attribute", "value attribute", "start attribute", "continue attribute"],
            answer: 2,
            explanation: "The start attribute can be used to continue a previous numbering[cite: 35]."
          },
          {
            q: "How can the value of an individual item in an ordered list be changed?",
            options: ["By using the value attribute in the li tag", "By changing the DOCTYPE", "By adding a comment tag", "By using the start attribute on the ol tag"],
            answer: 0,
            explanation: "The value of each item in the list can also be changed by using the value attribute in the li tag[cite: 35]."
          },
          {
            q: "When should an Unordered List using the ul tag be used?",
            options: ["When order is strictly sequential", "When each item is equally important", "When defining technical terms", "When creating table rows"],
            answer: 1,
            explanation: "Unordered lists are used for information when each item is equally important[cite: 36]."
          },
          {
            q: "What tag is used to specify each individual item inside an ordered or unordered list?",
            options: ["The item tag", "The list tag", "The li tag", "The ul tag"],
            answer: 1,
            explanation: "Each item of the list should be specified with the list item command li[cite: 34, 36]."
          },
          {
            q: "What is the default bullet type for an unordered list?",
            options: ["Circle", "Square", "Disc", "Triangle"],
            answer: 1,
            explanation: "The default bullet type is disc[cite: 36]."
          },
          {
            q: "What are the valid attribute values for the type attribute in an unordered list?",
            options: ["1, A, a, I, i", "disc, circle, or square", "top, bottom, middle", "solid, dashed, dotted"],
            answer: 1,
            explanation: "Main attribute for UL is type with values: disc, circle or square[cite: 36]."
          },
          {
            q: "When nesting unordered lists, what rule must each sublist follow?",
            options: ["It must use Arabic numerals", "It must be a complete list using beginning and ending ul tags", "It must be placed inside a table cell", "It must use definition dt tags"],
            answer: 1,
            explanation: "Each sublist must be a complete list using the beginning and ending ul tags[cite: 37]."
          },
          {
            q: "How do browsers handle bullet types when unordered lists are nested across multiple levels?",
            options: ["The browser assigns the same disc bullet to every level", "The browser assigns a different bullet type to each level of nesting", "The browser removes all bullets automatically", "The browser converts them to numbers"],
            answer: 1,
            explanation: "The browser assigns a different bullet type to each level of nesting[cite: 37]."
          },
          {
            q: "What tag is used to create a definition list in HTML?",
            options: ["The dl tag", "The dt tag", "The dd tag", "The list tag"],
            answer: 0,
            explanation: "Create definition lists using the dl tag[cite: 38]."
          },
          {
            q: "How does a definition list render visually compared to ordered and unordered lists?",
            options: ["It renders with bold numbers", "It renders with square bullets", "It renders without bullets", "It renders inside a boxed table"],
            answer: 2,
            explanation: "Definition lists render without bullets[cite: 38]."
          },
          {
            q: "What does the dt tag create inside a definition list?",
            options: ["A definition term", "A definition explanation description", "A bullet point", "A table row"],
            answer: 0,
            explanation: "The dt tag creates a definition term in a definition list[cite: 38]."
          },
          {
            q: "How does the dd tag appear relative to its definition term dt in a browser?",
            options: ["It appears centered above the term", "It appears indented and below the term", "It replaces the term entirely", "It renders with bullet points"],
            answer: 1,
            explanation: "The dd tag defines the definition for the term and will appear indented and below the term[cite: 38]."
          },
          {
            q: "In the definition list example showing web design languages, what term was defined for HTML?",
            options: ["A markup language designed for the creation of web pages with hypertext and other information", "A scripting language produced by Netscape", "A language used to describe formatting", "A server database router"],
            answer: 0,
            explanation: "HTML is defined as a markup language designed for the creation of web pages with hypertext and other information[cite: 40]."
          },
          {
            q: "In the definition list example, what was Cascading Style Sheets (CSS) described as?",
            options: ["A markup language for hypertext", "Language used to describe how an HTML document should be formatted", "A scripting language for interactivity", "A web server application"],
            answer: 1,
            explanation: "CSS is described as a language used to describe how an HTML document should be formatted[cite: 40]."
          },
          {
            q: "Which scripting language was highlighted in the definition list example as produced by Netscape for interactivity?",
            options: ["Python", "JavaScript", "PHP", "Java"],
            answer: 1,
            explanation: "JavaScript is described as a scripting language produced by Netscape for use within HTML Web pages[cite: 40]."
          },
          {
            q: "In the nested ordered list example for session courses, what type attribute was used for the main Harmattan Semester list?",
            options: ["type equals '1'", "type equals 'a'", "type equals 'I'", "type equals 'disc'"],
            answer: 2,
            explanation: "The main list used type equals 'I' for Roman numerals[cite: 43]."
          },
          {
            q: "In the course assignment detailed at the end of the lecture notes, which course outline must students create a web page for?",
            options: ["CSC 101", "CSC 207", "MTH 101", "STA 111"],
            answer: 1,
            explanation: "The assignment requires creating a web page that displays the course outline for csc 207[cite: 46]."
          },
          {
            q: "According to the assignment instructions, what should NOT be included in the csc 207 web page?",
            options: ["The weeks", "The topics", "The references", "The text formatting"],
            answer: 2,
            explanation: "The assignment explicitly states: Do not include the references[cite: 46]."
          },
          {
            q: "What specific list types does the assignment instruct students to use for weeks and topics?",
            options: ["Unordered list for weeks and ordered list for topics", "Ordered list for the weeks and ordered list for the topics", "Definition list for both weeks and topics", "Unordered list for both weeks and topics"],
            answer: 1,
            explanation: "Use ordered list for the weeks and also use ordered list for the topics[cite: 46]."
          },
          {
            q: "What list type does the assignment specify for sub topics?",
            options: ["Ordered list", "Definition list", "Unordered list", "Table structure"],
            answer: 2,
            explanation: "Use unordered list for the sub topics[cite: 46]."
          },
          {
            q: "What delivery format is required for the csc 207 assignment in class next week?",
            options: ["A printed paper booklet", "A softcopy of your webpage", "A physical CD-ROM", "An oral presentation only"],
            answer: 1,
            explanation: "Come to class with a softcopy of your webpage next week[cite: 46]."
          },
          {
            q: "Which HTML tag is used to create a second-level heading in the ordered list example code?",
            options: ["The h1 tag", "The h2 tag", "The h3 tag", "The title tag"],
            answer: 1,
            explanation: "The example uses h2 for Example of ordered lists[cite: 41]."
          },
          {
            q: "In the nested unordered list example, what text appeared inside the nested list under csc 101?",
            options: ["I am learning to be a web developer", "Thank God. I survived these classes", "Looking forward to this class", "I enjoyed this class"],
            answer: 1,
            explanation: "The nested item under csc 101 states: Thank God. I survived these classes[cite: 44]."
          },
          {
            q: "What was the subtitle of the HTML Comments and Lists lecture note coordinated by Shakirat Yusuff?",
            options: ["Advanced JavaScript Programming", "HTML Comments and Lists", "Database Management Systems", "Operating System Architectures"],
            answer: 1,
            explanation: "The lecture note title is HTML Comments and Lists[cite: 30]."
          },
          {
            q: "Which department is listed for the lecturer Shakirat Yusuff on the title slide?",
            options: ["Department of Computer Science", "Department of Computer, Library and Information Science", "Department of Mathematics", "Department of Physics"],
            answer: 1,
            explanation: "Shakirat Yusuff belongs to the Department of Computer, Library and Information Science[cite: 30]."
          },
          {
            q: "In the HTML attribute example slide, what tag was used with an align attribute set to right?",
            options: ["The paragraph p tag", "The heading h1 tag", "The division div tag", "The anchor a tag"],
            answer: 0,
            explanation: "The example shows paragraph p align equals right Hello /p[cite: 31]."
          },
          {
            q: "In the horizontal rule attribute example slide, what color and width were specified?",
            options: ["Width 50 percent and color red", "Width 75 percent and color blue", "Width 100 percent and color green", "Width 25 percent and color yellow"],
            answer: 1,
            explanation: "The example shows hr width equals 75 percent color equals blue[cite: 31]."
          },
          {
            q: "Which comment example was given to illustrate showing the university logo?",
            options: ["Show the logo for kwasu", "Hyperlink to the web site", "Header section start", "Table border comment"],
            answer: 0,
            explanation: "The comment example shows exclamation point hyphen hyphen Show the logo for kwasu hyphen hyphen greater than[cite: 32]."
          },
          {
            q: "What hyperlink URL was used in the comment example illustrating an anchor tag?",
            options: ["http://kwasu.edu.ng/", "http://google.com", "http://w3c.org", "http://github.com"],
            answer: 0,
            explanation: "The comment example references the hyperlink http://kwasu.edu.ng/[cite: 32]."
          },
          {
            q: "What summary function do lists provide according to the HTML lists introductory slide?",
            options: ["They act as a summary, menu or outline of the contents of the document", "They compile CSS stylesheets", "They replace the body tag", "They execute JavaScript functions"],
            answer: 0,
            explanation: "They can work as a summary, menu or outline of the contents of the document[cite: 33]."
          },
          {
            q: "In the nested ordered list example for the 2015/2016 session, what course was listed under Harmattan Semester with a sub-item about web development?",
            options: ["csc 207", "gns 203", "lis 207", "csc 208"],
            answer: 0,
            explanation: "Under csc 207, the sub-item states: I am learning to be a web developer[cite: 43]."
          },
          {
            q: "In the nested ordered list example, what start attribute value was specified for the Rain Semester list?",
            options: ["start equals '2'", "start equals '4'", "start equals '10'", "start equals '0'"],
            answer: 1,
            explanation: "The Rain Semester ordered list specifies start equals '4'[cite: 43]."
          },
          {
            q: "What expression was noted in the nested unordered list for Rain Semester 2014?",
            options: ["i enjoyed this class", "Thank God. I survived these classes", "I am learning to be a web developer", "looking forward to this class"],
            answer: 0,
            explanation: "Under Rain Semester 2014, the subitem states: i enjoyed this class[cite: 44]."
          },
          {
            q: "What tag pair is used to create a definition term inside a definition list?",
            options: ["dt tags", "dd tags", "dl tags", "li tags"],
            answer: 0,
            explanation: "The dt tag creates a definition term in a definition list[cite: 38]."
          },
          {
            q: "What tag pair is used to define the explanation or definition for a term in a definition list?",
            options: ["dt tags", "dd tags", "ol tags", "p tags"],
            answer: 1,
            explanation: "The dd tag defines the definition for the term[cite: 38]."
          },
          {
            q: "Which of the following is true regarding comments in HTML?",
            options: ["Browsers display comment text in bold on the screen", "Browsers ignore comments completely", "Comments must be placed inside the title tag", "Comments require closing tags with slashes"],
            answer: 1,
            explanation: "Comments contain information for other humans to read and for the browser to ignore[cite: 32]."
          },
          {
            q: "When creating a nested ordered list, what happens if you change the type attribute in a sublist?",
            options: ["It overrides the numbering style for that specific sublist level", "It breaks the entire HTML file", "It deletes the parent list items", "It converts the list into an unordered bullet list"],
            answer: 0,
            explanation: "Each sub list can use a different type of numbering using the type attribute[cite: 35]."
          },
          {
            q: "Why are text formatting tags recommended in the course assignment instructions?",
            options: ["To format text appropriately within the nested list structure", "To encrypt the webpage source code", "To connect to remote MySQL databases", "To automatically generate CSS stylesheets"],
            answer: 0,
            explanation: "Use text formatting tags to format your text in the assignment[cite: 46]."
          },
          {
            q: "What institution's crest appears on the header slides of the HTML Comments and Lists lecture presentation?",
            options: ["University of Lagos", "Kwara State University", "University of Ibadan", "Covenant University"],
            answer: 1,
            explanation: "The slides feature the Kwara State University KWASU crest[cite: 29]."
          }
        ]
      },

      

  {
    code: "COS 101",
    title: "Introduction to Computing Science & Word Notes",
    description: "Your main departmental course containing all major Word documents, hardware breakdowns, and PowerPoint notes.",
    topics: [
      {
        id: "cos101-main",
        week: "Module 1",
        title: "Introduction to Computing Science (Comprehensive Note)",
        pdfPath: "COS101 INTRODUCTION TO COMPUTING SCIENCE (part1)_113232.pdf",
        summary: [
          "Computers consist of 3 primary pillars: CPU, Memory, and Input/Output devices[cite: 3].",
          "RAM is volatile temporary working memory; ROM is non-volatile permanent storage[cite: 3].",
          "The Power Supply converts wall AC power into DC power for internal components[cite: 3]."
        ],
        questions: [
  {
    q: "What is the primary role of system software in a computer system?",
    options: ["Playing video games", "Managing hardware resources and providing a platform for applications", "Browsing social media", "Designing graphics"],
    answer: 1,
    explanation: "System software acts as the vital interface between physical hardware and user applications[cite: 3]."
  },
  {
    q: "Which memory type is volatile and loses its data when power is removed?",
    options: ["ROM", "RAM", "Hard Drive", "CMOS"],
    answer: 1,
    explanation: "RAM is volatile temporary storage that clears automatically when the system shuts down[cite: 3]."
  },
  {
    q: "What gives your computer power by converting alternating current (AC) to direct current (DC)?",
    options: ["Transformer", "Power Supply", "Inverter", "Motherboard"],
    answer: 1,
    explanation: "The Power Supply converts wall AC power into direct current (DC) usable by internal computer components[cite: 3]."
  },
  {
    q: "What is the standard pin count and color typically associated with a PC VGA monitor port?",
    options: ["9-pin, gray", "15-pin in three rows, blue", "25-pin, pink", "8-pin, yellow"],
    answer: 1,
    explanation: "PCs traditionally use a VGA analog connector featuring 15 pins across three rows, colored blue[cite: 3]."
  },
  {
    q: "Which device is considered the central processing unit or brain of the computer?",
    options: ["Hard Disk", "Power Supply", "CPU", "Motherboard"],
    answer: 2,
    explanation: "The CPU executes program instructions and performs core data computations[cite: 3]."
  },
  {
    q: "What type of storage is Read-Only Memory (ROM) classified as?",
    options: ["Non-volatile permanent storage", "Volatile cache memory", "Secondary magnetic storage", "Temporary register storage"],
    answer: 0,
    explanation: "ROM is non-volatile memory that retains its data even when power is turned off, holding vital boot firmware like BIOS[cite: 3]."
  },
  {
    q: "Which of the following is an example of an input device?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    answer: 1,
    explanation: "A keyboard is used to input text, commands, and data into the computer system."
  },
  {
    q: "Which of the following is an example of an output device?",
    options: ["Mouse", "Scanner", "Microphone", "Monitor"],
    answer: 3,
    explanation: "A monitor displays visual processed data and graphics output to the user."
  },
  {
    q: "What is the function of a computer motherboard?",
    options: ["To store temporary web files", "To serve as the main circuit board connecting all internal hardware components", "To convert AC to DC power", "To cool down the processor"],
    answer: 1,
    explanation: "The motherboard provides physical mounting and electrical communication pathways for the CPU, memory, and cards[cite: 3]."
  },
  {
    q: "Why are cooling fans and heatsinks necessary inside a computer case?",
    options: ["To increase internet speed", "To generate electric current", "To dissipate heat generated by the CPU and prevent thermal damage", "To read optical discs"],
    answer: 2,
    explanation: "Heatsinks and fans absorb and expel thermal energy to keep processor temperatures within safe operating limits[cite: 3]."
  },
  {
    q: "Which expansion card is primarily responsible for rendering complex 3D graphics and images?",
    options: ["Sound Card", "Graphics Card / GPU", "Network Interface Card", "Modem Card"],
    answer: 1,
    explanation: "A dedicated graphics card processes and renders visual data for display on the monitor."
  },
    {
    q: "What was the primary characteristic of first-generation computers?",
    options: ["Transistors", "Integrated circuits", "Vacuum tubes", "Microprocessors"],
    answer: 2,
    explanation: "First-generation computers relied on vacuum tubes for circuitry and magnetic drums for memory."
  },
  {
    q: "Which technology replaced vacuum tubes in second-generation computers, making them smaller and faster?",
    options: ["Transistors", "Integrated circuits", "Silicon microchips", "Optical fibers"],
    answer: 0,
    explanation: "Transistors revolutionized electronics in the second generation by replacing bulky vacuum tubes."
  },
  {
    q: "Third-generation computers were characterized by the invention of:",
    options: ["Vacuum tubes", "Transistors", "Integrated Circuits (ICs)", "Artificial intelligence"],
    answer: 2,
    explanation: "Integrated circuits packed multiple transistors onto a single silicon semiconductor chip."
  },
  {
    q: "Fourth-generation computers introduced which revolutionary component?",
    options: ["Punch cards", "Magnetic tape", "Microprocessors (VLSI)", "Vacuum tubes"],
    answer: 2,
    explanation: "Very Large Scale Integration (VLSI) microprocessors enabled the personal computer revolution."
  },
  {
    q: "What does the acronym ASCII stand for in data representation?",
    options: ["American Standard Code for Information Interchange", "Advanced System Control Information Interface", "Application Standard Code for Internet Integration", "Algorithmic Syntax for Computer Information Interaction"],
    answer: 0,
    explanation: "ASCII is a character encoding standard used for electronic communication in computers."
  },
  {
    q: "How many bits make up a single byte?",
    options: ["4 bits", "8 bits", "16 bits", "32 bits"],
    answer: 1,
    explanation: "A byte is standardized as a unit of digital information consisting of 8 bits."
  },
  {
    q: "Which term describes the physical tangible parts of a computer system?",
    options: ["Software", "Hardware", "Firmware", "Malware"],
    answer: 1,
    explanation: "Hardware refers to the physical machinery, circuitry, and peripheral components of a computer."
  },
  {
    q: "Which term describes the intangible set of instructions or programs that tell the hardware what to do?",
    options: ["Hardware", "Software", "Peripherals", "Circuitry"],
    answer: 1,
    explanation: "Software comprises programs, data, and operating instructions executed by the hardware."
  },
  {
    q: "What is the main function of cache memory in a computer system?",
    options: ["Permanent archival storage", "Ultra-fast temporary storage close to the CPU for rapid data retrieval", "Backing up hard drive files", "Supplying backup battery power"],
    answer: 1,
    explanation: "Cache memory bridges the speed gap between the ultra-fast CPU and slower main RAM."
  },
  {
    q: "What is the function of an operating system kernel?",
    options: ["To design web pages", "To act as the core central foundation managing system resources and hardware communication", "To type documents", "To print reports"],
    answer: 1,
    explanation: "The kernel is the core component of an operating system that manages memory, CPU scheduling, and devices."
  },
  {
    q: "Which of the following is an open-source operating system kernel widely used in servers and devices?",
    options: ["Microsoft Windows", "Linux", "macOS", "iOS"],
    answer: 1,
    explanation: "Linux is a prominent open-source Unix-like operating system kernel."
  },
  {
    q: "What does GUI stand for in human-computer interaction?",
    options: ["General Utility Interface", "Graphical User Interface", "Global User Interconnection", "Guide Unit Interaction"],
    answer: 1,
    explanation: "A Graphical User Interface lets users interact through graphical icons and visual indicators."
  },
  {
    q: "Which device converts digital computer signals into analog signals for transmission over telephone lines?",
    options: ["Router", "Switch", "Modem", "Hub"],
    answer: 2,
    explanation: "A modem (Modulator-Demodulator) modulates digital signals into analog format and vice versa."
  },
  {
    q: "What is secondary storage primarily used for?",
    options: ["Executing active CPU threads", "Long-term non-volatile data and program retention", "Temporary arithmetic calculations", "Displaying screen pixels"],
    answer: 1,
    explanation: "Secondary storage (HDDs, SSDs, flash drives) retains data permanently when powered off."
  },
  {
    q: "Which storage medium uses microscopic pits and lands read by a laser beam?",
    options: ["Magnetic hard disk", "Solid State Drive", "Optical Disc (CD/DVD/Blu-ray)", "RAM stick"],
    answer: 2,
    explanation: "Optical discs store digital data using laser optics to read reflective pits and lands."
  },
  {
    q: "What is an algorithm defined as in computer science?",
    options: ["A physical computer chip", "A step-by-step procedure or formula for solving a problem", "An error in source code", "A network cable type"],
    answer: 1,
    explanation: "An algorithm is a finite sequence of rigorous instructions designed to solve a specific class of problems."
  },
  {
    q: "What is a flowchart used for in programming?",
    options: ["To supply electrical voltage", "To visually represent an algorithm or workflow using standard geometric symbols", "To solder motherboard circuits", "To clean disk sectors"],
    answer: 1,
    explanation: "Flowcharts use standardized graphical boxes and arrows to map out logical program steps."
  },
  {
    q: "Which numbering system do computers use at the fundamental hardware level?",
    options: ["Decimal (Base 10)", "Binary (Base 2)", "Octal (Base 8)", "Hexadecimal (Base 16)"],
    answer: 1,
    explanation: "Computers use binary machine code consisting of 0s and 1s representing electronic states."
  },
  {
    q: "In the binary system, what does a single bit represent?",
    options: ["A full word of text", "A binary digit holding either a 0 or a 1", "Ten decimal digits", "An internet address"],
    answer: 1,
    explanation: "A bit (binary digit) is the basic unit of information in computing, valued at 0 or 1."
  },
  {
    q: "Which hexadecimal value represents decimal 15?",
    options: ["A", "B", "C", "F"],
    answer: 3,
    explanation: "In hexadecimal (base 16), values 10 through 15 are represented by letters A through F, where F equals 15."
  },
  {
    q: "What is the primary purpose of a device driver?",
    options: ["To drive computer cooling fans", "To allow the operating system to communicate with specific hardware peripherals", "To format hard drives", "To browse the internet securely"],
    answer: 1,
    explanation: "Device drivers act as translator software enabling the OS to control hardware devices like printers or GPUs."
  },
  {
    q: "Which utility software is used to reduce the file size of large documents or folders?",
    options: ["Antivirus scanner", "Disk defragmenter", "Compression / Zip utility", "Text editor"],
    answer: 2,
    explanation: "Compression utilities encode data using fewer bits to save storage space and bandwidth."
  },
  {
    q: "What is the function of an antivirus program?",
    options: ["To speed up internet downloads", "To detect, quarantine, and remove malicious software and computer viruses", "To create graphic designs", "To compile source code"],
    answer: 1,
    explanation: "Antivirus software scans systems to protect against malicious programs, trojans, and worms."
  },
  {
    q: "What does 'LAN' stand for in computer networking?",
    options: ["Large Access Network", "Local Area Network", "Logical Application Node", "Lightweight Audio Network"],
    answer: 1,
    explanation: "A LAN connects computers within a limited geographical area like a room, office building, or school."
  },
  {
    q: "What does 'WAN' stand for?",
    options: ["Wireless Access Node", "Wide Area Network", "Web Application Network", "Wired Analog Network"],
    answer: 1,
    explanation: "A WAN spans a large physical distance, connecting multiple smaller networks across cities or countries."
  },
  {
    q: "Which network topology connects all devices to a central switch or hub?",
    options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"],
    answer: 2,
    explanation: "In a star topology, every node connects directly to a central hub or switch."
  },
  {
    q: "What is the function of a network switch?",
    options: ["To block all internet traffic", "To connect devices together on a LAN and forward data packets to specific destination ports", "To supply wireless Bluetooth signals", "To print documents"],
    answer: 1,
    explanation: "Switches intelligently manage data traffic within a local network by routing packets to the correct device."
  },
  {
    q: "Which protocol is used for securely transferring files over a network?",
    options: ["HTTP", "SFTP / FTPS", "SMTP", "POP3"],
    answer: 1,
    explanation: "SFTP (Secure File Transfer Protocol) provides secure file transfer over an encrypted SSH connection."
  },
  {
    q: "What is phishing in the context of computer security?",
    options: ["Optimizing database queries", "A fraudulent attempt to steal sensitive user information by masquerading as a trustworthy entity", "Cleaning computer hardware components", "Installing system updates"],
    answer: 1,
    explanation: "Phishing uses deceptive emails or websites to trick users into revealing passwords or credit card details."
  },
  {
    q: "What is malware?",
    options: ["High-speed memory hardware", "Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems", "An open-source operating system", "A web browser extension"],
    answer: 1,
    explanation: "Malware is an umbrella term for viruses, ransomware, spyware, and trojans."
  },
    {
    q: "Which type of malware demands payment from a user in exchange for restoring access to encrypted files?",
    options: ["Adware", "Spyware", "Ransomware", "Worm"],
    answer: 2,
    explanation: "Ransomware encrypts victim files and demands a ransom payment for the decryption key."
  },
  {
    q: "What is a software bug?",
    options: ["An authorized feature", "An error, flaw, or fault in computer software causing incorrect or unexpected results", "A hardware cooling fan", "A network cable standard"],
    answer: 1,
    explanation: "A bug is a coding flaw that produces unintended behavior or crashes in a software application."
  },
  {
    q: "What process is used to find and remove bugs from computer program code?",
    options: ["Compiling", "Debugging", "Formatting", "Zipping"],
    answer: 1,
    explanation: "Debugging is the systematic process of identifying and resolving software defects."
  },
  {
    q: "What is source code?",
    options: ["Compiled machine binary code", "Human-readable programming instructions written in a high-level language", "The physical plastic casing of a computer", "Network router firmware"],
    answer: 1,
    explanation: "Source code is written by programmers in languages like Python, Java, or C++ before being compiled into executable machine code."
  },
  {
    q: "What does a compiler do?",
    options: ["Translates high-level source code entirely into machine-executable binary code", "Connects computers to the internet", "Scans for computer viruses", "Prints physical documents"],
    answer: 0,
    explanation: "A compiler translates human-readable source code into native machine code executed by the CPU."
  },
  {
    q: "What is an interpreter in programming?",
    options: ["A hardware cooling heatsink", "A program that translates and executes source code line-by-line in real-time", "A physical keyboard layout", "A database table"],
    answer: 1,
    explanation: "An interpreter executes instructions directly without requiring a prior compilation step."
  },
  {
    q: "What is a relational database management system (RDBMS) primarily used for?",
    options: ["Displaying web animations", "Storing, organizing, and querying structured data in tables with rows and columns", "Cooling the processor", "Playing audio files"],
    answer: 1,
    explanation: "An RDBMS manages structured data collections using relational tables and SQL queries."
  },
  {
    q: "What does SQL stand for?",
    options: ["Standard Query Language", "Structured Query Language", "System Quality Logic", "Simple Quick Link"],
    answer: 1,
    explanation: "SQL (Structured Query Language) is the standard programming language for managing and querying relational databases."
  },
  {
    q: "Which of the following represents a primary key in a database table?",
    options: ["A column containing duplicate values", "A unique identifier for each record in a table ensuring no nulls or duplicates", "An external web link", "A decorative table border"],
    answer: 1,
    explanation: "A primary key uniquely identifies every individual record within a database table."
  }
]
      },
      {
        id: "cos101-ppt",
        week: "Module 4",
        title: "PowerPoint Lecture Slides Summary",
        pdfPath: "Power point_114325.pdf",
        summary: [
          "PowerPoint 2010 uses a tabbed Ribbon system and Quick Access Toolbar[cite: 24].",
          "Press F5 to launch a slideshow from the beginning[cite: 24].",
          "Animations are categorized into Entrance, Emphasis, and Exit effects[cite: 24]."
        ],
        questions: [
  {
    q: "Which keyboard shortcut is used to start a slideshow presentation from the beginning in PowerPoint?",
    options: ["F5", "Ctrl + S", "Ctrl + N", "F1"],
    answer: 0,
    explanation: "F5 launches the presentation slideshow directly from the first slide."
  },
  {
    q: "Which tab on the PowerPoint 2010 ribbon contains pre-made color themes and background styles?",
    options: ["Home tab", "Design tab", "Animations tab", "View tab"],
    answer: 1,
    explanation: "The Design tab houses themes, color palettes, and background formatting options."
  },
  {
    q: "What type of file format can PowerPoint export your presentation into for universal video playback?",
    options: ["WMV or MP4 video", "EXE application", "PSD Photoshop file", "ZIP archive"],
    answer: 2,
    explanation: "PowerPoint can export presentations directly into video formats like WMV or MP4."
  },
  {
    q: "Which tool allows you to rotate a selected shape or picture freely in any direction?",
    options: ["Rotation handle / Rotate tool", "Crop tool", "Format Painter", "Zoom tool"],
    answer: 3,
    explanation: "The rotation handle lets users spin objects around a central axis."
  },
  {
    q: "What is the default file extension for Microsoft PowerPoint 2010 presentations?",
    options: ["pptx", "doc", "xls", "txt"],
    answer: 0,
    explanation: "pptx is the standard XML-based presentation format for PowerPoint 2010."
  },
  {
    q: "What type of animation makes an object pulse, spin, or change color while already visible on the slide?",
    options: ["Entrance", "Emphasis animation", "Exit", "Transition"],
    answer: 1,
    explanation: "Emphasis animations draw attention to an element currently active on screen."
  },
  {
    q: "Which keyboard shortcut is used to copy selected text or objects?",
    options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
    answer: 2,
    explanation: "Ctrl + C copies the selected item to the clipboard."
  },
  {
    q: "What is the purpose of setting slide transition durations?",
    options: ["To control how long the presentation stays open", "To determine how fast or slow the transition effect plays between slides", "To set text font size", "To adjust audio volume"],
    answer: 3,
    explanation: "Transition duration defines the speed of the visual transition effect."
  },
  {
    q: "Which tab on the PowerPoint ribbon contains commands to insert new slides, pictures, and shapes?",
    options: ["Home tab", "Design tab", "Animations tab", "Slide Show tab"],
    answer: 0,
    explanation: "The Home tab houses the slide insertion and basic editing groups."
  },
  {
    q: "Which shortcut key is used to save an active PowerPoint presentation?",
    options: ["Ctrl + C", "Ctrl + S", "Ctrl + V", "Ctrl + P"],
    answer: 1,
    explanation: "Ctrl + S saves the current presentation progress."
  },
  {
    q: "What is the purpose of the Animation Pane?",
    options: ["To display a timeline list of all animations applied to objects on the current slide for easy ordering", "To play background music", "To check grammar", "To design slide backgrounds"],
    answer: 2,
    explanation: "The Animation Pane gives precise control over effect sequencing and timings."
  },
  {
    q: "Which PowerPoint feature lets you align objects evenly across a slide space?",
    options: ["Distribute Horizontally or Vertically", "Spell Check", "WordArt", "Slide Sorter"],
    answer: 3,
    explanation: "Distribute tools space objects evenly between boundaries."
  },
  {
    q: "What type of animation is used to make an object appear on the slide during a presentation?",
    options: ["Entrance animation", "Emphasis animation", "Exit animation", "Motion path"],
    answer: 0,
    explanation: "Entrance animations control how an element first appears on screen."
  },
  {
    q: "What is the function of the Format Painter tool in PowerPoint?",
    options: ["To draw freehand shapes", "To copy formatting from one object or text box and apply it to another", "To insert audio clips", "To change slide dimensions"],
    answer: 1,
    explanation: "Format Painter copies font styles, sizes, and colors across elements."
  },
  {
    q: "Which button combination pastes copied items from the clipboard?",
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"],
    answer: 2,
    explanation: "Ctrl + V pastes clipboard contents onto the slide."
  },
  {
    q: "What is the function of the Reset button in the Slides group on the Home tab?",
    options: ["To delete the presentation", "To revert slide placeholder formatting back to the default layout template settings", "To restart the computer", "To clear clipboard history"],
    answer: 3,
    explanation: "Reset restores placeholder positions and formatting to the master template."
  },
  {
    q: "Which view in PowerPoint displays thumbnail images of all slides in the presentation for easy reordering?",
    options: ["Slide Sorter view", "Normal view", "Reading view", "Slide Master view"],
    answer: 0,
    explanation: "Slide Sorter view gives a comprehensive overview of all slides as miniatures."
  },
  {
    q: "Which view displays the presentation filling the entire computer screen like a finished show?",
    options: ["Slide Show view", "Normal view", "Outline view", "Slide Sorter view"],
    answer: 1,
    explanation: "Slide Show view runs the presentation full screen for audiences."
  },
  {
    q: "How can you insert a screenshot or screen clipping directly into your slide?",
    options: ["Using the Screenshot tool on the Insert tab", "Using F5", "Using Ctrl + S", "Using Slide Master"],
    answer: 2,
    explanation: "The Screenshot tool captures active windows or screen regions for insertion."
  },
  {
    q: "Which tab houses the options to record your screen or insert online video clips?",
    options: ["Insert tab", "Design tab", "View tab", "Animations tab"],
    answer: 3,
    explanation: "The Insert tab contains media groups for video, audio, and screen recording."
  },
  {
    q: "What is a slide master in PowerPoint used for?",
    options: ["Controlling the universal layout, fonts, and background styling across all slides", "Playing background music", "Checking spelling errors", "Exporting slides to PDF"],
    answer: 0,
    explanation: "The slide master defines the global template and design elements for every slide layout."
  },
  {
    q: "What does an exit animation do to an object on a slide?",
    options: ["Makes it appear", "Makes it disappear or leave the screen", "Makes it pulse", "Moves it along a path"],
    answer: 1,
    explanation: "Exit animations govern how an object leaves the slide view."
  },
  {
    q: "What is the function of the Zoom slider located at the bottom-right corner of the PowerPoint window?",
    options: ["To change slide transition speed", "To adjust the magnification view of the current slide workspace", "To change text font size", "To control speaker volume"],
    answer: 2,
    explanation: "The zoom slider scales the visual workspace magnification."
  },
  {
    q: "How do you add a subtle drop shadow or reflection effect to a picture or shape?",
    options: ["Using Picture / Shape Effects formatting", "Using Ctrl + D", "Using F5", "Using Spell Check"],
    answer: 3,
    explanation: "Shape and Picture Effects add professional styling like shadows and glows."
  },
  {
    q: "Which feature allows you to record narration, pen annotations, and precise timing for your presentation?",
    options: ["Record Slide Show", "Spell Check", "SmartArt", "WordArt"],
    answer: 0,
    explanation: "Record Slide Show lets presenters capture spoken audio and slide timings."
  },
  {
    q: "Which tab contains commands to set up automatic slide timing rehearsals?",
    options: ["Home tab", "Slide Show tab", "Insert tab", "Review tab"],
    answer: 1,
    explanation: "The Slide Show tab contains rehearsal tools and monitor setup options."
  },
  {
    q: "Which feature enables you to check for spelling errors throughout your presentation?",
    options: ["Spell Check", "Format Painter", "SmartArt", "Slide Sorter"],
    answer: 2,
    explanation: "Spell check scans text boxes for spelling mistakes."
  },
  {
    q: "What is the function of the Selection Pane in PowerPoint?",
    options: ["To list all objects on a slide, allowing you to select, hide, or reorder their stacking layers", "To select printer properties", "To check grammar", "To change slide size ratio"],
    answer: 3,
    explanation: "Selection Pane manages object stacking order and visibility easily."
  },
  {
    q: "What is the primary purpose of adding slide transitions?",
    options: ["To animate individual text paragraphs", "To control how the presentation moves from one slide to the next", "To check grammar", "To insert video files"],
    answer: 0,
    explanation: "Transitions define the visual effect played when switching between slides."
  },
  {
    q: "How do you group multiple selected shapes together into a single object in PowerPoint?",
    options: ["Right-click and select Group", "Press F5", "Click Spell Check", "Save as PDF"],
    answer: 1,
    explanation: "Grouping combines separate shapes so they can be moved or formatted together."
  },
  {
    q: "What is the purpose of adding a hyperlink to a shape or text box?",
    options: ["To jump to a web address, email, file, or another slide when clicked", "To animate the object", "To print the slide", "To change font color"],
    answer: 2,
    explanation: "Hyperlinks create interactive navigation paths during slideshows."
  },
  {
    q: "Which option allows you to change your slide dimensions from standard 4:3 to widescreen 16:9?",
    options: ["Slide Size on the Design tab", "Zoom slider", "Page Setup in print menu", "Slide Master view"],
    answer: 3,
    explanation: "Slide Size configures presentation aspect ratios for modern displays."
  },
  {
    q: "Which option under the Animation tab allows you to make an object move along a custom line or curve?",
    options: ["Motion Paths", "Entrance effect", "Emphasis effect", "Exit effect"],
    answer: 0,
    explanation: "Motion paths move objects along a specified geometric or freeform trajectory."
  },
  {
    q: "What is the purpose of a placeholder in a PowerPoint slide layout?",
    options: ["To hold dummy text, titles, or multimedia objects ready for user input", "To lock the file with a password", "To print hard copies", "To delete slides"],
    answer: 1,
    explanation: "Placeholders are dotted boxes on slide layouts waiting for content insertion."
  },
  {
    q: "Which view allows you to edit headers and footers for handout printouts?",
    options: ["Notes Page view", "Slide Master / Handout Master view", "Reading view", "Slide Show view"],
    answer: 2,
    explanation: "Handout Master view configures printed layout structures."
  },
  {
    q: "What does the 'On Mouse Click' setting control in slide transitions or animations?",
    options: ["Automatic slide looping", "Triggering the transition or animation step when the presenter clicks the mouse or presses a key", "Playing background music", "Shutting down PowerPoint"],
        options: ["Automatic slide looping", "Triggering the transition or animation step when the presenter clicks the mouse or presses a key", "Playing background music", "Shutting down PowerPoint"],
    answer: 3,
    explanation: "On Mouse Click pauses execution until user input is received."
  },
  {
    q: "How can you duplicate an existing slide quickly in PowerPoint?",
    options: ["Ctrl + D", "Ctrl + C", "Ctrl + P", "Ctrl + Z"],
    answer: 0,
    explanation: "Ctrl + D duplicates the currently selected slide or object."
  },
  {
    q: "Which keyboard shortcut opens the Print dialog box in PowerPoint?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + N", "Ctrl + F"],
    answer: 1,
    explanation: "Ctrl + P opens printing preferences."
  },
  {
    q: "Which feature allows you to save your PowerPoint presentation as a template (.potx) file?",
    options: ["Save As Template", "Export to PDF", "Print Handouts", "Record Show"],
    answer: 3,
    explanation: "Saving as a template (.potx) preserves layouts for future presentations."
  },
  {
    q: "Which PowerPoint view is best suited for typing and editing detailed slide text without graphics distracting you?",
    options: ["Outline view", "Slide Sorter", "Reading view", "Slide Show view"],
    answer: 0,
    explanation: "Outline view displays slide titles and body text in a structured text outline."
  },
  {
    q: "What is the function of the Reading view in PowerPoint?",
    options: ["To view the presentation in a window with simple controls for reviewing", "To edit master slide XML code", "To convert files to Word", "To record narration"],
    answer: 1,
    explanation: "Reading view displays the presentation in a convenient window for review."
  },
  {
    q: "What is the function of SmartArt graphics in PowerPoint?",
    options: ["To play background videos", "To visually communicate information using pre-designed diagrams and organizational charts", "To calculate spreadsheet formulas", "To check spelling"],
    answer: 1,
    explanation: "SmartArt allows users to create professional diagrams like process flows and hierarchies easily."
  },
  {
    q: "Which feature allows you to align multiple objects precisely relative to each other on a slide?",
    options: ["Align and Distribute tools", "Spell Check", "WordArt", "Slide Transition"],
    answer: 1,
    explanation: "Align tools snap shapes into precise horizontal or vertical alignments."
  },
  {
    q: "Which shortcut key combination creates a brand new blank presentation in PowerPoint?",
    options: ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    answer: 0,
    explanation: "Ctrl + N opens a new blank presentation file."
  },
  {
    q: "What is the benefit of using a custom slide show?",
    options: ["It deletes all animation effects", "It allows you to create and play a subset of slides from your main presentation", "It converts slides into a video", "It checks grammar"],
    answer: 1,
    explanation: "Custom slide shows let you present specific selected slides without deleting others."
  },
  {
    q: "What is the purpose of adding speaker notes to a slide?",
    options: ["To display text that only the audience can read", "To provide reference notes and talking points visible to the presenter during a slideshow", "To compress file size", "To change background colors"],
    answer: 1,
    explanation: "Speaker notes provide prompts and reminders for the speaker while hidden from the audience view."
  },
  {
    q: "Which tab contains the option to insert hyperlinks to web pages or other files?",
    options: ["Insert tab", "Design tab", "View tab", "Animations tab"],
    answer: 0,
    explanation: "The Insert tab manages links, shapes, pictures, and media."
  },
  {
    q: "What is the function of the Eyedropper tool in PowerPoint color selection?",
    options: ["To zoom in on text", "To sample and match any exact color from an image or shape on the screen", "To crop pictures", "To check spelling"],
    answer: 1,
    explanation: "The eyedropper samples exact color pixels for uniform design styling."
  },
  {
    q: "Which command undoes your last action in PowerPoint?",
    options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + A"],
    answer: 1,
    explanation: "Ctrl + Z reverses the most recent editing action."
  },
  {
    q: "Which feature allows you to compress all pictures in a presentation to reduce file size?",
    options: ["Compress Pictures tool", "Format Painter", "Crop tool", "Group tool"],
    answer: 0,
    explanation: "The Compress Pictures tool optimizes image resolution to reduce overall file weight."
  }
]
      },
      {
        id: "cos101-hardware",
        week: "New Lecture",
        title: "Computer Hardware Components",
        pdfPath: "Hardware components_113648.pdf",
        summary: [
          "Introduces computer hardware and the roles of input and output devices.",
          "Covers core components including the CPU, memory, storage, motherboard, and computer ports."
        ],
        questions: 
          [
  {
    q: "What is considered the brain of a computer where calculations and work occur?",
    options: ["CPU", "Hard Drive", "RAM", "Power Supply"],
    answer: 0,
    explanation: "The Central Processing Unit or processor is the brain of a computer, measuring about 1.5 inches by 1.5 inches[cite: 7]."
  },
  {
    q: "Which type of memory is volatile and loses its stored data when the computer is shut down or rebooted?",
    options: ["ROM", "RAM", "Hard Drive", "Cache Level 2"],
    answer: 1,
    explanation: "RAM or Random Access Memory is temporary volatile memory that clears automatically upon shutdown[cite: 9]."
  },
  {
    q: "Which component gives your computer power by converting alternating current to direct current?",
    options: ["Transformer", "Inverter", "Power Supply", "Motherboard"],
    answer: 2,
    explanation: "The power supply converts wall alternating current to direct current for internal parts[cite: 12]."
  },
  {
    q: "What is the primary function of a motherboard in a computer system?",
    options: ["To store permanent files", "To supply electric backup", "To cool the processor", "To allow the CPU to interact with other parts of the computer"],
    answer: 3,
    explanation: "A motherboard is a circuit board that connects the CPU to all other internal computer parts[cite: 9]."
  },
  {
    q: "Which port was traditionally used to connect older mice, modems, and digital cameras using a 9-pin connector?",
    options: ["Serial Port", "Parallel Port", "USB Port", "Ethernet Port"],
    answer: 0,
    explanation: "The serial port uses a 9-pin connector, often gray in color, and transmits data at 19 kilobits per second[cite: 10]."
  },
  {
    q: "What type of connector do PCs usually use for monitor ports, featuring 15 pins across three rows and typically colored blue?",
    options: ["DVI", "VGA or Video Graphics Array", "HDMI", "Firewire"],
    answer: 1,
    explanation: "PCs usually use a VGA analog connector known as a D-Sub connector with 15 pins in three rows[cite: 10]."
  },
  {
    q: "Which port is most often used to connect a printer to the computer via a 25-pin pink connector?",
    options: ["Serial Port", "USB Port", "Parallel Port", "PS2 Port"],
    answer: 2,
    explanation: "The parallel port is a 25-pin long and skinny connector, often pink, transmitting at 50 to 100 kilobits per second[cite: 10]."
  },
  {
    q: "Which universal port connects almost all modern peripheral devices and transmits at high speeds like 480 megabits per second in version 2.0?",
    options: ["Serial Port", "Parallel Port", "Firewire Port", "USB Port"],
    answer: 3,
    explanation: "The Universal Serial Bus connects almost all peripheral devices with speeds up to 480 megabits per second for USB 2.0[cite: 11]."
  },
  {
    q: "Which port is frequently found on Apple computers and often used with digital camcorders?",
    options: ["Firewire or IEEE 1394 Port", "Parallel Port", "VGA Port", "PS2 Port"],
    answer: 0,
    explanation: "Firewire or IEEE 1394 is commonly found on Apple computers and used with digital camcorders[cite: 11]."
  },
  {
    q: "What is the PS2 port sometimes referred to as, having been developed by IBM to connect mice and keyboards?",
    options: ["Modem port", "Mouse port", "Printer port", "Display port"],
    answer: 1,
    explanation: "The PS2 port is sometimes called a mouse port and is used to connect a computer mouse or keyboard[cite: 11]."
  },
  {
    q: "Which port is used for networking and fast internet connections, featuring little monitor lights that flicker when in use?",
    options: ["Serial Port", "Parallel Port", "Ethernet Port", "USB Port"],
    answer: 2,
    explanation: "The Ethernet port is used for networking and fast internet connections with status flicker lights[cite: 11]."
  },
  {
    q: "What is the main function of a computer fan?",
    options: ["To generate power", "To read optical discs", "To connect to the internet", "To keep your computer cool and prevent overheating"],
    answer: 3,
    explanation: "A fan keeps your computer cool so it does not overheat and damage internal parts[cite: 13]."
  },
  {
    q: "What component is used to disperse heat produced inside the computer by the CPU and other parts by increasing surface area?",
    options: ["Heatsink", "Capacitor", "Resistor", "Transistor"],
    answer: 0,
    explanation: "A heatsink disperses heat by increasing surface area around hot components like the CPU[cite: 13]."
  },
  {
    q: "What are the three main components of a computer system?",
    options: ["Monitor, Keyboard, and Mouse", "CPU, Memory, and Input Output Devices", "Hard Drive, RAM, and ROM", "Motherboard, Power Supply, and Fan"],
    answer: 1,
    explanation: "The three main components of a computer are the CPU, Memory, and Input Output Devices[cite: 13]."
  },
  {
    q: "What do capacitors do on a circuit board?",
    options: ["Allow current through", "Act as a valve to turn currents on or off", "Store energy", "Convert alternating current to direct current"],
    answer: 2,
    explanation: "Capacitors are small parts on circuit boards that store electrical energy[cite: 13]."
  },
  {
    q: "What is the function of a resistor in electronic circuits?",
    options: ["To store energy", "To turn current on and off like a valve", "To amplify sound", "To allow a specific current through"],
    answer: 3,
    explanation: "Resistors allow a controlled current through the circuit[cite: 13]."
  },
  {
    q: "What acts as a valve which allows electrical currents to be turned on or off?",
    options: ["Transistor", "Capacitor", "Resistor", "Heatsink"],
    answer: 0,
    explanation: "A transistor functions as an electronic valve that allows currents to be turned on or off[cite: 13]."
  },
  {
    q: "What is the enclosure that contains your motherboard, CPU, and internal components called when standing upright?",
    options: ["Chassis", "Tower or Case", "Console", "Cabinet"],
    answer: 1,
    explanation: "The case or tower if standing upright is what houses the motherboard, CPU, and other internals[cite: 13]."
  },
  {
    q: "Which expansion card is used to input and output sound under program control with enhanced quality?",
    options: ["Graphics Card", "Network Card", "Sound Card", "Modem Card"],
    answer: 2,
    explanation: "A sound card provides better sound quality than standard built-in sound controls[cite: 12]."
  },
  {
    q: "Which expansion card is used to convert the logical representation of an image to a signal for a monitor?",
    options: ["Sound Card", "Network Card", "Modem Card", "Graphics Card"],
    answer: 3,
    explanation: "A graphics card converts logical image representations into monitor display signals[cite: 12]."
  },
  {
    q: "Which expansion card is used to provide a computer connection over a network at speeds like 10, 100, or 1000 megabits per second?",
    options: ["Network Card", "Sound Card", "Graphics Card", "Video Capture Card"],
    answer: 0,
    explanation: "A network card provides wired connectivity over local networks[cite: 12]."
  },
  {
    q: "What does ROM stand for, providing permanent nonvolatile storage for firmware like the BIOS?",
    options: ["Random Operations Module", "Read Only Memory", "Rapid Online Media", "Remote Operating Mechanism"],
    answer: 1,
    explanation: "ROM stands for Read Only Memory, which is nonvolatile and retains data without power[cite: 9]."
  },
  {
    q: "Where is the BIOS or Basic Input Output System stored in standard PC architecture?",
    options: ["RAM", "Cache memory", "CMOS Read Only Memory", "Hard drive sectors"],
    answer: 2,
    explanation: "The BIOS is stored in CMOS read-only memory chips[cite: 9]."
  },
  {
    q: "What is the primary purpose of a hard drive in a computer system?",
    options: ["To hold temporary runtime instructions", "To supply direct current power", "To cool the CPU processor", "To store information permanently and frequently"],
    answer: 3,
    explanation: "A hard drive is nonvolatile secondary storage used to store information permanently most frequently[cite: 9]."
  },
  {
    q: "Which device is used to read CD-ROMs, and if capable of writing, is referred to as a burner or CD-RW?",
    options: ["CD-ROM", "Floppy Drive", "DVD-ROM", "Hard Disk"],
    answer: 0,
    explanation: "A CD-ROM device reads compact discs, and writers are called CD-RW burners[cite: 13]."
  },
  {
    q: "What is a device used to read and write to floppy diskettes called?",
    options: ["CD-ROM drive", "Floppy Drive", "DVD burner", "Flash drive"],
    answer: 1,
    explanation: "A floppy drive reads and writes to magnetic floppy diskettes[cite: 13]."
  },
  {
    q: "What do Input Output devices allow you to do in computer hardware terminology?",
    options: ["Store permanent backups", "Cool down the processor", "Send information to or get information from the computer", "Supply electrical current"],
    answer: 2,
    explanation: "Input Output devices allow sending information to the computer or getting information from it[cite: 7]."
  },
  {
    q: "Which of the following is listed as an input device in the computer basics notes?",
    options: ["Monitor", "Printer", "Speaker", "Scanner"],
    answer: 3,
    explanation: "A scanner is listed as an input device along with digital cameras and trackballs[cite: 7]."
  },
  {
    q: "What is the approximate physical size of a standard Central Processing Unit?",
    options: ["1.5 inches by 1.5 inches", "3.0 inches by 3.0 inches", "0.5 inches by 0.5 inches", "5.0 inches by 5.0 inches"],
    answer: 0,
    explanation: "The CPU processor is approximately 1.5 inches by 1.5 inches in physical dimension[cite: 7]."
  },
  {
    q: "Why is information kept in fast temporary memory rather than accessed directly from the hard drive?",
    options: ["Because hard drives have no storage space", "Because accessing the hard drive for information takes time while memory is fast", "Because RAM is permanent", "Because hard drives require no power"],
    answer: 1,
    explanation: "Accessing the hard drive takes time, so memory provides fast temporary storage for active execution[cite: 7]."
  },
  {
    q: "Which type of memory includes Physical RAM and Virtual Memory under temporary storage areas?",
    options: ["ROM", "CMOS", "RAM", "BIOS"],
    answer: 2,
    explanation: "RAM includes physical RAM and virtual memory as temporary storage areas[cite: 7, 8]."
  },
  {
    q: "Which storage device category includes ROM BIOS, removable drives, network storage, and hard drives?",
    options: ["Temporary Storage Areas", "Input Sources", "Peripheral Ports", "Permanent Storage Areas"],
    answer: 3,
    explanation: "ROM BIOS, removable drives, network storage, and hard drives are permanent storage areas[cite: 7, 8]."
  },
  {
    q: "Which of the following is classified under input sources in the hardware architecture diagram?",
    options: ["Keyboard", "Monitor", "Speaker", "Hard Drive"],
    answer: 0,
    explanation: "Keyboards, mice, and removable media are input sources[cite: 7, 8]."
  },
  {
    q: "What data transmission speed does USB 1.1 achieve at full speed?",
    options: ["1.5 megabits per second", "12 megabits per second", "480 megabits per second", "3.2 gigabits per second"],
    answer: 1,
    explanation: "USB 1.1 transmits data at 1.5 megabits per second at low speed and 12 megabits per second at full speed[cite: 11]."
  },
  {
    q: "What speed does USB 2.0 transmit data at?",
    options: ["12 megabits per second", "100 megabits per second", "480 megabits per second", "3.2 gigabits per second"],
    answer: 2,
    explanation: "USB 2.0 transmits data at 480 megabits per second[cite: 11]."
  },
  {
    q: "What data transmission speed does the new Firewire 1394B achieve?",
    options: ["400 megabits per second", "19 kilobits per second", "50 kilobits per second", "3.2 gigabits per second"],
    answer: 3,
    explanation: "Firewire 1394B transmits data at 3.2 gigabits per second[cite: 11]."
  },
  {
    q: "What speed does original Firewire transmit data at?",
    options: ["400 megabits per second", "480 megabits per second", "12 megabits per second", "1000 megabits per second"],
    answer: 0,
    explanation: "Firewire transmits data at 400 megabits per second[cite: 11]."
  },
  {
    q: "At what data speeds do Ethernet ports and network cards operate depending on hardware support?",
    options: ["10 megabits per second only", "10, 100, or 1000 megabits", "400 megabits per second fixed", "480 megabits per second"],
    answer: 1,
    explanation: "Ethernet ports operate at 10 megabits, 100 megabits, or 1 gigabit which is 1000 megabits[cite: 11]."
  },
  {
    q: "What data transfer rate does a parallel port transmit at?",
    options: ["19 kilobits per second", "400 megabits per second", "50 to 100 kilobits per second", "480 megabits per second"],
    answer: 2,
    explanation: "A parallel port transmits data at 50 to 100 kilobits per second[cite: 10]."
  },
  {
    q: "What data transfer rate does a serial port transmit at?",
    options: ["50 kilobits per second", "480 megabits per second", "1.5 megabits per second", "19 kilobits per second"],
    answer: 3,
    explanation: "A serial port transmits data at 19 kilobits per second[cite: 10]."
  },
  {
    q: "What does DVD stand for in optical drive terminology?",
    options: ["Digital Versatile Disc", "Digital Video Device", "Data Visual Drive", "Direct Virtual Disk"],
    answer: 0,
    explanation: "DVD stands for Digital Versatile Disc[cite: 13]."
  },
  {
    q: "What is the primary function of the CPU regarding system instructions?",
    options: ["Storing files permanently", "Coordinates all actions and executes program instructions", "Converting alternating current to direct current", "Displaying pixels on a monitor"],
    answer: 1,
    explanation: "The CPU coordinates all actions that occur in the system and executes program instructions[cite: 13]."
  },
  {
    q: "Which component is described as being nonvolatile, meaning data is not lost when power is removed?",
    options: ["RAM", "Cache Level 1", "ROM and Hard Drive", "CPU Register"],
    answer: 2,
    explanation: "ROM and hard drives are nonvolatile storage where data is retained without power[cite: 9]."
  },
  {
    q: "What is the primary difference between a CD-ROM and a CD-RW burner?",
    options: ["CD-RW can only read discs", "CD-ROM has higher storage capacity", "CD-ROM is volatile", "CD-RW is capable of writing data to the disc in addition to reading"],
    answer: 3,
    explanation: "If capable of writing to the disc, optical drives are referred to as burners or CD-RW and DVD-RW[cite: 13]."
  },
  {
    q: "Which connector standard was developed because VGA analog connectors do not support digital monitors directly?",
    options: ["DVI or Digital Video Interface", "USB", "Parallel", "PS2"],
    answer: 0,
    explanation: "The DVI or Digital Video Interface standard was developed to support digital monitors[cite: 10]."
  },
  {
    q: "What is the color and pin configuration typically associated with a PC parallel port?",
    options: ["15-pin, blue", "25-pin, pink", "9-pin, gray", "8-pin, yellow"],
    answer: 1,
    explanation: "The parallel port has a 25-pin connector and is often pink in color[cite: 10]."
  },
  {
    q: "What color and pin count is typically associated with an older serial port?",
    options: ["25-pin, pink", "15-pin, blue", "9-pin, gray", "8-pin, yellow"],
    answer: 2,
    explanation: "The serial port is a 9-pin connector, small and short, often gray in color[cite: 10]."
  },
  {
    q: "Which of the following components is classified as temporary storage in the memory hierarchy diagram?",
    options: ["Hard Drive", "ROM and BIOS", "Removable Drives", "CPU Register, Cache, and RAM"],
    answer: 3,
    explanation: "CPU Register, Cache Level 1 and 2, and RAM Physical and Virtual are temporary storage areas[cite: 7, 8]."
  },
  {
    q: "What role do Input Output devices play in a computer system?",
    options: ["Allow you to send information to or get information from the computer", "Convert alternating current to direct current", "House the motherboard", "Cool down internal parts"],
    answer: 0,
    explanation: "Input Output devices allow sending information to the computer or getting information from it[cite: 7]."
  },
  {
    q: "What is the primary purpose of expansion cards in a computer system?",
    options: ["To supply electrical power", "To add or improve functionality to the computer", "To act as system RAM", "To store permanent backups"],
    answer: 1,
    explanation: "Expansion cards like sound, graphics, and network cards are used to add or improve functionality to the computer[cite: 12]."
  }
]
      }
    ]
  },

  {
    code: "MAT 101",
    title: "Elementary Mathematics I",
    description: "Set theory, lecturer lecture notes, and combined past questions.",
    topics: [
      {
        id: "mat101-sets",
        week: "Week 1 - 2",
        title: "Set Theory Fundamentals",
        pdfPath: "pdfs/Set Theorem .pdf",
        summary: [
          "Sets are well-defined collections of objects denoted by capital letters[cite: 25, 27].",
          "Equivalent sets have the same number of elements; equal sets have identical members.",
          "The null set contains zero elements and is denoted by $\\emptyset$ or $\\{\\}$."
        ],
        questions: [
  {
    q: "If set A has 4 elements, how many possible subsets does it possess?",
    options: ["16", "8", "32", "64"],
    answer: 0,
    explanation: "The total number of subsets for a finite set with n elements is given by 2 raised to the power of n (2^4 = 16)."
  },
  {
    q: "What type of set contains no elements and is denoted by empty braces or the null symbol?",
    options: ["Universal set", "Null set or empty set", "Power set", "Subset"],
    answer: 1,
    explanation: "An empty or null set contains zero elements and represents nothing."
  },
  {
    q: "What is the imaginary unit i defined as in complex number theory?",
    options: ["Positive one", "Negative one", "Square root of negative one", "Zero"],
    answer: 2,
    explanation: "The imaginary unit i is defined fundamentally as the square root of negative one, meaning i squared equals -1."
  },
  {
    q: "Which of the following numbers is classified as an irrational number?",
    options: ["Square root of 16", "Square root of 25", "Three point seven five", "Square root of 11"],
    answer: 3,
    explanation: "Square root of 11 cannot be expressed as a simple fraction and has a non-terminating, non-recurring decimal expansion."
  },
  {
    q: "If 3, x, y, 18 are consecutive terms in an Arithmetic Progression (A.P.), what are the values of x and y?",
    options: ["8 and 13", "5 and 10", "9 and 12", "7 and 11"],
    answer: 0,
    explanation: "Using the common difference d = 5 across 3 terms to reach 18, the sequence yields x = 8 and y = 13."
  },
  {
    q: "What is the 14th term of the Arithmetic Progression starting with 3, 6, 9, 12, ...?",
    options: ["39", "45", "48", "42"],
    answer: 3,
    explanation: "Using the A.P. formula T_n = a + (n-1)d = 3 + (14-1)3 = 42."
  },
  {
    q: "Find the modulus of the complex number z = -4 + 2i.",
    options: ["Four root five", "Three root five", "Two root five", "Root five"],
    answer: 2,
    explanation: "Modulus |z| = square root of ((-4)^2 + 2^2) = square root of 20 = 2 root 5."
  },
  {
    q: "Determine the quadratic equation whose roots are 3 and -2.",
    options: ["x squared plus x minus six equals zero", "x squared minus x minus six equals zero", "x squared minus x plus six equals zero", "x squared plus x plus six equals zero"],
    answer: 1,
    explanation: "Sum of roots = 1, Product = -6, leading to the quadratic equation x squared minus x minus six equals zero."
  },
  {
    q: "What is the conjugate of the complex number z = 3 + 4i?",
    options: ["3 minus 4i", "minus 3 plus 4i", "minus 3 minus 4i", "4 plus 3i"],
    answer: 0,
    explanation: "The complex conjugate reverses the sign of the imaginary part, changing 3 + 4i to 3 minus 4i."
  },
  {
    q: "What is the sum to infinity of the geometric series: 1/2, 1/6, 1/18, ...?",
    options: ["1", "3 over 4", "1 over 2", "2"],
    answer: 1,
    explanation: "Using S_infinity = a / (1 - r) where a = 1/2 and r = 1/3, the sum evaluates to 3/4."
  },
  {
    q: "De Morgan's Law states that the complement of the union of two sets A and B is equal to:",
    options: ["Intersection of their complements", "Union of their complements", "Complement of their intersection", "The universal set"],
    answer: 0,
    explanation: "De Morgan's law states that (A union B)' equals A' intersection B'."
  },
  {
    q: "What is the universal set defined as in set theory?",
    options: ["An empty set", "The set containing all possible objects under consideration for a given context", "A subset of every set", "A set with one element"],
    answer: 1,
    explanation: "The universal set contains all objects and elements relevant to a particular discussion or problem."
  },
  {
    q: "If set P has 3 elements and set Q has 4 elements, and they are disjoint, how many elements are in P union Q?",
    options: ["12", "1", "7", "0"],
    answer: 2,
    explanation: "For disjoint sets, n(P union Q) = n(P) + n(Q) = 3 + 4 = 7."
  },
  {
    q: "What is the power set of a set?",
    options: ["The set of all subsets belonging to that set", "The intersection of all sets", "The complement of the set", "The universal set"],
    answer: 0,
    explanation: "The power set is the collection of all subsets of a given set, including the empty set and the set itself."
  },
  {
    q: "Which property states that A union (B intersection C) equals (A union B) intersection (A union C)?",
    options: ["Associative property", "Commutative property", "Distributive property", "Idempotent property"],
    answer: 2,
    explanation: "This is the distributive law of union over intersection in set theory."
  },
  {
    q: "Solve for x if log base 2 of x equals 5.",
    options: ["10", "32", "25", "16"],
    answer: 1,
    explanation: "Rewriting the logarithmic equation in exponential form gives x = 2 to the power of 5, which equals 32."
  },
  {
    q: "Evaluate log base 3 of 81.",
    options: ["2", "3", "4", "9"],
    answer: 2,
    explanation: "Since 3 to the power of 4 equals 81, log base 3 of 81 evaluates to 4."
  },
  {
    q: "What is the expansion of (a + b) raised to the power of 3 using binomial theorem?",
    options: ["a cubed plus 3 a squared b plus 3 a b squared plus b cubed", "a cubed plus b cubed", "a cubed plus 3 a b plus b cubed", "a cubed plus a squared b plus a b squared plus b cubed"],
    answer: 0,
    explanation: "The binomial expansion coefficients for n=3 are 1, 3, 3, 1 yielding a cubed plus 3 a squared b plus 3 a b squared plus b cubed."
  },
  {
    q: "What is the 5th term in the binomial expansion of (x + y) raised to the power of 6?",
    options: ["15 x squared y to the 4th", "20 x cubed y cubed", "6 x to the 5th y", "15 x to the 4th y squared"],
    answer: 0,
    explanation: "Using the general term formula for binomial expansion, the 5th term evaluates to 15 x squared y to the 4th."
  },
  {
    q: "Find the discriminant of the quadratic equation 2 x squared minus 4 x + 1 = 0.",
    options: ["8", "16", "12", "24"],
    answer: 0,
    explanation: "Discriminant Delta = b squared minus 4ac = (-4)^2 - 4(2)(1) = 16 - 8 = 8."
  },
  {
    q: "What are the roots of the quadratic equation x squared minus 5 x + 6 = 0?",
    options: ["1 and 6", "2 and 3", "minus 2 and minus 3", "1 and 5"],
    answer: 1,
    explanation: "Factoring yields (x - 2)(x - 3) = 0, so the roots are x = 2 and x = 3."
  },
  {
    q: "If matrix A has dimensions 2 by 3 and matrix B has dimensions 3 by 4, what is the dimension of product AB?",
    options: ["3 by 3", "2 by 4", "2 by 3", "4 by 2"],
    answer: 1,
    explanation: "Matrix multiplication dimensions result in the outer rows and columns, yielding a 2 by 4 matrix."
  },
  {
    q: "What is the determinant of a 2 by 2 matrix with rows [2, 3] and [1, 4]?",
    options: ["5", "8", "11", "10"],
    answer: 0,
    explanation: "Determinant = (2)(4) - (3)(1) = 8 - 3 = 5."
  },
  {
    q: "What is an identity matrix?",
    options: ["A matrix filled entirely with zeros", "A diagonal matrix with ones along the main principal diagonal", "A matrix with identical rows", "A square matrix with negative elements"],
    answer: 1,
    explanation: "An identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere."
  },
  {
    q: "When does a square matrix fail to have an inverse?",
    options: ["When its determinant is non-zero", "When its determinant equals zero", "When it has positive numbers", "When it is symmetric"],
    answer: 1,
    explanation: "A square matrix is singular and lacks an inverse if and only if its determinant equals zero."
  },
  {
    q: "What is the slope of a line passing through points (1, 2) and (3, 6)?",
    options: ["1", "3", "2", "4"],
    answer: 2,
    explanation: "Slope m = (y2 - y1) / (x2 - x1) = (6 - 2) / (3 - 1) = 4 / 2 = 2."
  },
  {
    q: "What is the equation of a line with slope 3 passing through the origin?",
    options: ["y equals 3 x", "y equals x plus 3", "3 y equals x", "y equals minus 3 x"],
    answer: 0,
    explanation: "Using y - y1 = m(x - x1) with point (0,0) gives y = 3x."
  },
  {
    q: "Find the distance between the two points (1, 2) and (4, 6) on a Cartesian plane.",
    options: ["3", "4", "5", "7"],
    answer: 2,
    explanation: "Distance = square root of ((4 - 1)^2 + (6 - 2)^2) = square root of (9 + 16) = square root of 25 = 5."
  },
  {
    q: "What is the sum of the first n terms of an Arithmetic Progression?",
    options: ["n over 2 times (2 a plus (n minus 1) d)", "a r to the power of n", "n squared times d", "a plus n d"],
    answer: 0,
    explanation: "The standard summation formula for an A.P. is S_n = (n/2)[2a + (n-1)d]."
  },
  {
    q: "Find the 6th term of a Geometric Progression where the first term is 3 and common ratio is 2.",
    options: ["48", "96", "24", "192"],
    answer: 1,
    explanation: "Using T_n = a * r^(n-1) = 3 * (2^5) = 3 * 32 = 96."
  },
  {
    q: "What is the condition for a geometric series to converge to a finite sum?",
    options: ["The common ratio r must have an absolute value strictly less than 1", "r must be greater than 1", "r must equal zero", "r must be negative"],
    answer: 0,
    explanation: "An infinite geometric series converges if and only if the absolute value of its common ratio |r| < 1."
  },
  {
    q: "Evaluate the factorial expression 5 factorial divided by 3 factorial.",
    options: ["10", "20", "60", "120"],
    answer: 1,
    explanation: "5! / 3! = (5 * 4 * 3!) / 3! = 5 * 4 = 20."
  },
  {
    q: "In combinatorics, what does nCr represent?",
    options: ["Number of permutations", "Number of combinations of r items chosen from n items without regard to order", "Number of subsets", "Total factorials"],
    answer: 1,
    explanation: "nCr represents combinations where order does not matter, calculated as n! / (r! (n-r)!)."
  },
  {
    q: "Calculate the value of 4 combination 2 (4C2).",
    options: ["4", "12", "6", "24"],
    answer: 2,
    explanation: "4C2 = 4! / (2! * 2!) = (24) / (2 * 2) = 6."
  },
  {
    q: "What is the number of ways to arrange 3 books on a shelf in a specific linear order?",
    options: ["3", "9", "3rd power of 3", "6"],
    answer: 3,
    explanation: "Arrangements of n distinct items in order is given by n! = 3! = 3 * 2 * 1 = 6."
  },
  {
    q: "What is the polar form representation of a complex number z = x + iy?",
    options: ["r times (cos theta plus i sin theta)", "x plus y", "r squared times theta", "x cos theta"],
    answer: 0,
    explanation: "Euler's polar form expresses complex numbers as z = r(cos theta + i sin theta)."
  },
  {
    q: "What is De Moivre's Theorem used for in complex numbers?",
        q: "What is De Moivre's Theorem used for in complex numbers?",
    options: ["Finding matrix determinants", "Raising a complex number in polar form to a power", "Solving linear inequalities", "Calculating set intersections"],
    answer: 1,
    explanation: "De Moivre's theorem states that (cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)."
  },
  {
    q: "What is the argument of the complex number z = 1 + i?",
    options: ["0 degrees", "45 degrees or pi over 4 radians", "90 degrees", "180 degrees"],
    answer: 1,
    explanation: "The argument theta = arctan(1/1) = pi/4 radians or 45 degrees."
  },
  {
    q: "Which law of logarithms states that log(a) + log(b) equals log(a times b)?",
    options: ["Product rule", "Quotient rule", "Power rule", "Change of base rule"],
    answer: 0,
    explanation: "The product rule of logarithms states that the sum of logarithms equals the logarithm of the product."
  },
  {
    q: "What is the value of log base a of a?",
    options: ["0", "1", "a", "Infinity"],
    answer: 1,
    explanation: "Any base raised to the power of 1 equals itself, so log base a of a is always 1."
  },
  {
    q: "What is the value of log base b of 1 for any valid base b greater than 0 and not equal to 1?",
    options: ["1", "b", "0", "Minus 1"],
    answer: 2,
    explanation: "Any valid base raised to the power of 0 equals 1, so log base b of 1 is always 0."
  },
  {
    q: "What is a polynomial function of degree 3 called?",
    options: ["Quadratic function", "Cubic function", "Linear function", "Quartic function"],
    answer: 1,
    explanation: "A polynomial where the highest exponent is 3 is termed a cubic function."
  },
  {
    q: "State the remainder theorem for polynomials: when a polynomial P(x) is divided by (x - c):",
    options: ["The remainder is P(c)", "The remainder is zero", "The quotient is P(c)", "The remainder is c"],
    answer: 0,
    explanation: "The remainder theorem states that evaluating P(c) yields the exact remainder of division by (x - c)."
  },
  {
    q: "What does the Factor Theorem state about a polynomial P(x) if P(c) = 0?",
    options: ["(x + c) is a factor", "(x - c) is a factor of P(x)", "c is the maximum value", "P(x) has no roots"],
    answer: 1,
    explanation: "The factor theorem establishes that if P(c) = 0, then (x - c) is a linear factor of polynomial P(x)."
  },
  {
    q: "What is the domain of the rational function f(x) = 1 over (x minus 2)?",
    options: ["All real numbers", "All real numbers except x equals 2", "Only positive numbers", "x greater than 2"],
    answer: 1,
    explanation: "A rational function is undefined where its denominator equals zero, so x cannot equal 2."
  },
  {
    q: "What is the vertical asymptote of the function f(x) = 1 over (x minus 3)?",
    options: ["x equals 0", "x equals 3", "y equals 0", "x equals minus 3"],
    answer: 1,
    explanation: "Vertical asymptotes occur where the denominator approaches zero, giving x = 3."
  },
  {
    q: "How is the inverse of a function denoted notationally?",
    options: ["f squared of x", "f to the power of minus 1 of x", "1 over f(x)", "f prime of x"],
    answer: 1,
    explanation: "The inverse function of f(x) is standardly denoted as f inverse of x (f^(-1)(x))."
  },
  {
    q: "What must be true for a function to possess an inverse function?",
    options: ["It must be one-to-one (injective) and onto (surjective)", "It must be linear", "It must have positive coefficients", "It must be a constant function"],
    answer: 0,
    explanation: "A function must be bijective (both one-to-one and onto) to be strictly invertible."
  },
  {
    q: "What is the composition of functions f(g(x)) graphically or algebraically interpreted as?",
    options: ["Multiplying two functions together", "Applying function g first and then applying function f to the result", "Dividing f by g", "Adding their derivatives"],
    answer: 1,
    explanation: "Function composition f(g(x)) passes the output of inner function g(x) into outer function f."
  },
  {
    q: "What is the solution set for the linear inequality 2 x minus 4 greater than or equal to 6?",
    options: ["x greater than or equal to 5", "x less than or equal to 5", "x greater than 2", "x equals 5"],
    answer: 0,
    explanation: "Adding 4 gives 2x >= 10, and dividing by 2 yields x >= 5."
  }
]
      },
      {
        id: "mat101-pq",
        week: "Exam Prep",
        title: "MTH 101 Combined Past Questions Bank",
        pdfPath: "pdfs/MTH101 COMBINE PAST QUESTIONS.pdf",
        summary: [
          "Covers Arithmetic Progressions (A.P.) and Geometric Progressions (G.P.)[cite: 23].",
          "Complex numbers arithmetic, conjugates, modulus, and polar form[cite: 23]."
        ],
        questions: 
[
  {
    q: "Evaluate the limit as x approaches 2 of the rational expression (x squared minus 4) over (x minus 2).",
    options: ["2", "Undefined", "4", "0"],
    answer: 2,
    explanation: "Factoring the numerator as (x-2)(x+2) and canceling (x-2) leaves x + 2, which evaluates to 4 as x approaches 2."
  },
  {
    q: "What is the derivative of f(x) = 3 x cubed minus 5 x squared + 7 with respect to x?",
    options: ["3 x squared minus 5 x", "18 x minus 10", "9 x cubed minus 10 x squared", "9 x squared minus 10 x"],
    answer: 3,
    explanation: "Using the power rule, the derivative is 3(3)x^2 - 5(2)x + 0 = 9x^2 - 10x."
  },
  {
    q: "Find the integral of 4 x cubed with respect to x.",
    options: ["12 x squared", "x to the 4th plus constant C", "4 x to the 4th", "12 x to the 4th"],
    answer: 1,
    explanation: "Integrating 4x^3 gives 4(x^4 / 4) + C = x^4 + C."
  },
  {
    q: "What is the slope of the tangent line to the curve y = x squared at the point x = 3?",
    options: ["6", "12", "3", "9"],
    answer: 0,
    explanation: "The derivative is dy/dx = 2x. Evaluating at x = 3 gives 2(3) = 6."
  },
  {
    q: "Evaluate the definite integral from x = 0 to x = 2 of 3 x squared dx.",
    options: ["4", "12", "6", "8"],
    answer: 3,
    explanation: "The antiderivative is x cubed. Evaluating from 0 to 2 gives 2 cubed - 0 cubed = 8."
  },
  {
    q: "What is the derivative of sin(x) with respect to x?",
    options: ["minus sin(x)", "secant squared of x", "cos(x)", "minus cos(x)"],
    answer: 2,
    explanation: "The standard derivative of sine is cosine."
  },
  {
    q: "What is the derivative of natural logarithm ln(x)?",
    options: ["x", "1 over x", "e to the power of x", "1 over x squared"],
    answer: 1,
    explanation: "The derivative of ln(x) for x > 0 is strictly 1/x."
  },
  {
    q: "Find the second derivative of f(x) = 5 x to the 4th.",
    options: ["20 x cubed", "5 x squared", "120 x", "60 x squared"],
    answer: 3,
    explanation: "First derivative = 20x^3. Second derivative = 20(3)x^2 = 60x^2."
  },
  {
    q: "What is the integral of e to the power of 2x with respect to x?",
    options: ["2 e to the power of 2x plus C", "e to the power of 2x plus C", "1 over 4 e to the power of 2x", "1 over 2 times e to the power of 2x plus C"],
    answer: 3,
    explanation: "Integrating exponential functions with a linear inner coefficient divides by the coefficient: (1/2)e^(2x) + C."
  },
  {
    q: "What is the limit as x approaches infinity of (1 over x)?",
    options: ["Infinity", "Minus 1", "0", "1"],
    answer: 2,
    explanation: "As the denominator grows infinitely large, the fraction approaches zero."
  },
  {
    q: "Determine the critical points of the function f(x) = x cubed minus 3 x.",
    options: ["x equals 0", "x equals plus or minus 1", "No critical points", "x equals plus or minus 3"],
    answer: 1,
    explanation: "Setting derivative 3x^2 - 3 = 0 gives x^2 = 1, so x = 1 and x = -1."
  },
  {
    q: "What does a positive second derivative indicate about a curve at a given point?",
    options: ["Constant slope", "Concave downward", "Undefined inflection", "Concave upward"],
    answer: 3,
    explanation: "A positive second derivative signifies that the curve is concave up (bending upward like a smile)."
  },
  {
    q: "Find the derivative of cos(x) with respect to x.",
    options: ["sin(x)", "minus sin(x)", "tan(x)", "minus cos(x)"],
    answer: 1,
    explanation: "The derivative of cosine is negative sine."
  },
  {
    q: "What is the derivative of tan(x) with respect to x?",
    options: ["secant squared x", "cosecant squared x", "cosine x", "sine x"],
    answer: 0,
    explanation: "The derivative of tangent is secant squared."
  },
  {
    q: "What is the integral of cos(x) dx?",
    options: ["minus sin(x) plus C", "cos(x) plus C", "sin(x) plus C", "minus cos(x) plus C"],
    answer: 2,
    explanation: "The antiderivative of cosine is sine plus the constant of integration."
  },
  {
    q: "What is the integral of sin(x) dx?",
    options: ["minus cos(x) plus C", "cos(x) plus C", "sin(x) plus C", "minus sin(x) plus C"],
    answer: 0,
    explanation: "The antiderivative of sine is negative cosine plus the constant of integration."
  },
  {
    q: "What is the derivative of a constant function?",
    options: ["1", "x", "0", "Infinity"],
    answer: 2,
    explanation: "The derivative of any constant function is zero."
  },
  {
    q: "What is the integral of a constant k with respect to x?",
    options: ["k plus C", "kx plus C", "x plus C", "0"],
    answer: 1,
    explanation: "The integral of a constant k is kx + C."
  },
  {
    q: "What is the derivative of x to the power n?",
    options: ["n x to the power n minus 1", "x to the power n plus 1", "n x to the power n", "x to the power n minus 1"],
    answer: 0,
    explanation: "The power rule states d/dx(x^n) = n*x^(n-1)."
  },
  {
    q: "What is the integral of x to the power n for n not equal to minus 1?",
    options: ["x to the power n plus C", "x to the power n plus 1 over n plus 1 plus C", "n x to the power n minus 1", "x to the power n minus 1"],
    answer: 1,
    explanation: "The power rule for integration is integral x^n dx = x^(n+1)/(n+1) + C, provided n is not -1."
  },
  {
    q: "What is the derivative of e to the power x?",
    options: ["0", "e to the power x", "x e to the power x", "1 over x"],
    answer: 1,
    explanation: "The derivative of e^x is e^x."
  },
  {
    q: "What is the derivative of ln(x)?",
    options: ["1 over x", "ln(x)", "e to the power x", "x"],
    answer: 0,
    explanation: "The derivative of natural logarithm is 1/x."
  },
  {
    q: "What is the integral of 1 over x?",
    options: ["x", "ln absolute value of x plus C", "1 over x squared", "e to the power x"],
    answer: 1,
    explanation: "The antiderivative of 1/x is the natural logarithm of the absolute value of x plus constant C."
  },
  {
    q: "What is the derivative of e to the power of x?",
    options: ["0", "e to the power of x", "1 over e to the power of x", "x times e to the power of x minus 1"],
    answer: 1,
    explanation: "The exponential function e^x is unique because its derivative is equal to itself."
  },
  {
    q: "If y = (2 x + 1) cubed, what is dy/dx using the chain rule?",
    options: ["3 times (2 x + 1) squared", "12 times (2 x + 1)", "6 times (2 x + 1) squared", "2 times (2 x + 1) cubed"],
    answer: 2,
    explanation: "By chain rule: 3(2x + 1)^2 * derivative of (2x + 1) = 3(2x + 1)^2 * 2 = 6(2x + 1)^2."
  },
  {
    q: "What is the product rule formula for differentiating the product of two functions u and v?",
    options: ["u prime v minus u v prime", "u prime v prime", "u prime v plus u v prime", "u over v"],
    answer: 2,
    explanation: "Product rule states d/dx(uv) = u'v + uv'."
  },
  {
    q: "What is the quotient rule formula for differentiating u divided by v?",
    options: ["u prime over v prime", "(u prime v plus u v prime) over v squared", "u v prime minus u prime v", "(u prime v minus u v prime) over v squared"],
    answer: 3,
    explanation: "Quotient rule is (u'v - uv') / v^2."
  },
  {
    q: "Evaluate the limit as x approaches 0 of sin(x) over x.",
    options: ["Infinity", "0", "Undefined", "1"],
    answer: 3,
    explanation: "This is a standard fundamental trigonometric limit which evaluates to 1."
  },
  {
    q: "What is the integral of cosine of x dx?",
    options: ["minus cos(x) plus C", "cos(x) plus C", "sin(x) plus C", "minus sin(x) plus C"],
    answer: 2,
    explanation: "The antiderivative of cos(x) is sin(x) + C."
  },
  {
    q: "Find the derivative of tangent of x.",
    options: ["cosecant squared of x", "sine of x", "cotangent of x", "secant squared of x"],
    answer: 3,
    explanation: "The derivative of tan(x) is sec^2(x)."
  },
  {
    q: "What is the slope of a horizontal line?",
    options: ["Undefined", "0", "Infinity", "1"],
    answer: 1,
    explanation: "Horizontal lines have zero vertical change, so their slope is 0."
  },
  {
    q: "What is the slope of a vertical line?",
    options: ["1", "Minus 1", "0", "Undefined / Infinite"],
    answer: 3,
    explanation: "Vertical lines have zero horizontal run, making division by zero yield an undefined slope."
  },
  {
    q: "What is the derivative of a constant number c with respect to x?",
    options: ["x", "1", "0", "c"],
    answer: 2,
    explanation: "The rate of change of any constant value is zero."
  },
  {
    q: "Find the integral of 5 dx.",
    options: ["0", "5 x plus C", "x squared over 2", "5"],
    answer: 1,
    explanation: "Integrating a constant c gives cx + C, so evaluating 5 dx yields 5x + C."
  },
  {
    q: "What method of integration is best suited for integrals of products like x times e to the power of x?",
    options: ["Partial fractions", "Trigonometric substitution", "Integration by parts", "Integration by substitution"],
    answer: 2,
    explanation: "Integration by parts formula (integral of u dv = uv - integral of v du) handles products of distinct function types."
  },
  {
    q: "What technique is used to integrate rational functions by breaking them into simpler fractions?",
    options: ["Chain rule expansion", "Integration by parts", "L'Hopital's rule", "Partial fraction decomposition"],
    answer: 3,
    explanation: "Partial fraction decomposition splits complex rational fractions into sums of simpler terms."
  },
  {
    q: "When can L'Hopital's rule be applied to evaluate limits?",
    options: ["Whenever denominators equal zero", "Only for trigonometric functions", "Only for polynomial limits", "When limits result in indeterminate forms like 0/0 or infinity over infinity"],
    answer: 3,
    explanation: "L'Hopital's rule applies to indeterminate forms 0/0 or inf/inf by taking derivatives of numerator and denominator."
  },
  {
    q: "What is the derivative of arcsin(x) with respect to x?",
    options: ["1 over x", "1 over (1 plus x squared)", "minus 1 over square root of (1 minus x squared)", "1 over square root of (1 minus x squared)"],
    answer: 3,
    explanation: "The standard derivative of arcsin(x) is 1 / sqrt(1 - x^2)."
  },
  {
    q: "What is the integral of secant squared of x dx?",
    options: ["cos(x) plus C", "sec(x) plus C", "tan(x) plus C", "sin(x) plus C"],
    answer: 2,
    explanation: "Since the derivative of tan(x) is sec^2(x), the integral of sec^2(x) dx is tan(x) + C."
  },
  {
    q: "What does the Mean Value Theorem require of a function on a closed interval [a, b]?",
    options: ["Must equal zero at endpoints", "Must be continuous on [a, b] and differentiable on (a, b)", "Must be a straight line", "Must be discontinuous"],
    answer: 1,
    explanation: "The MVT requires continuity on the closed interval and differentiability on the open interval."
  },
  {
    q: "What is the sum of angles in a triangle in radians?",
    options: ["3 pi radians", "2 pi radians", "pi radians", "pi over 2"],
    answer: 2,
    explanation: "The interior angles of a triangle sum to 180 degrees, which is equivalent to pi radians."
  },
  {
    q: "Find the derivative of ln(3 x).",
    options: ["1 over 3 x", "3", "3 over x", "1 over x"],
    answer: 3,
    explanation: "Using chain rule: derivative of ln(3x) is (1 / 3x) * 3 = 1/x."
  },
  {
    q: "What is the integral of 2 x over (x squared plus 1) dx?",
    options: ["2 x plus C", "arctan(x)", "ln absolute value of (x squared plus 1) plus C", "1 over (x squared plus 1)"],
    answer: 2,
    explanation: "Since the numerator is the exact derivative of the denominator, the integral evaluates to ln|x^2 + 1| + C."
  },
  {
    q: "What is the derivative of 2 to the power of x?",
    options: ["x times 2 to the power of x minus 1", "ln(2) over 2 to the power of x", "2 to the power of x times ln(2)", "2 to the power of x"],
    answer: 2,
    explanation: "The derivative of a^x is a^x * ln(a), giving 2^x * ln(2)."
  },
  {
    q: "What is the value of the derivative of constant 100?",
    options: ["10", "100", "1", "0"],
    answer: 3,
    explanation: "The derivative of any constant is identically 0."
  },
  {
    q: "What is the integral of sin(x) dx?",
    options: ["minus cos(x) plus C", "cos(x) plus C", "minus sin(x) plus C", "sin(x) plus C"],
    answer: 0,
    explanation: "The antiderivative of sin(x) is -cos(x) + C."
  },
  {
    q: "What is the degree of the differential equation x times (d y / d x) squared plus y equals 0?",
    options: ["4", "1", "3", "2"],
    answer: 3,
    explanation: "The degree is the highest power of the highest-order derivative present, which is squared (degree 2)."
  },
  {
    q: "What is the order of the differential equation triple prime of y plus 2 y prime equals 0?",
    options: ["2", "4", "1", "3"],
    answer: 3,
    explanation: "The order is determined by the highest derivative present, which is the 3rd derivative."
  },
  {
    q: "Which integration technique uses trigonometric identities like sin squared x + cos squared x = 1?",
    options: ["Numerical integration", "Partial fractions", "Integration by parts", "Trigonometric substitution"],
    answer: 3,
    explanation: "Trigonometric substitution simplifies integrals involving square roots of sums or differences of squares."
  },
  {
    q: "Find the derivative of x cubed times e to the power of x using product rule.",
    options: ["x cubed times e to the power of x", "e to the power of x times (x cubed + 1)", "3 x squared times e to the power of x", "x squared times e to the power of x times (3 + x)"],
    answer: 3,
    explanation: "Derivative = 3x^2 * e^x + x^3 * e^x = x^2 * e^x * (3 + x)."
  },
  {
    q: "What is the integral of x squared dx?",
    options: ["3 x cubed plus C", "x cubed plus C", "2 x plus C", "x cubed over 3 plus C"],
    answer: 3,
    explanation: "Using power rule for integration: x^(2+1) / (2+1) + C = x^3 / 3 + C."
  },
  {
    q: "What is the derivative of 4 x cubed minus 2 x + 5?",
    options: ["4 x squared minus 2", "12 x cubed", "12 x minus 2", "12 x squared minus 2"],
    answer: 3,
    explanation: "Differentiating term by term gives 12x^2 - 2 + 0 = 12x^2 - 2."
  },
  {
    q: "Evaluate the limit as x approaches 0 of (3 x over x).",
    options: ["1 over 3", "0", "1", "3"],
    answer: 3,
    explanation: "Canceling x gives the constant limit 3."
  },
  {
    q: "What is the integral of 0 dx?",
    options: ["x", "1", "0", "Constant C"],
    answer: 3,
    explanation: "The integral of zero is a constant value C."
  },
  {
    q: "What is the derivative of x with respect to x?",
    options: ["infinity", "0", "x", "1"],
    answer: 3,
    explanation: "The linear term x has a constant slope and derivative of 1."
  },
  {
    q: "Find the integral of (1 + x) dx.",
    options: ["x plus C", "x plus x squared", "1 plus x squared over 2", "x plus x squared over 2 plus C"],
    answer: 3,
    explanation: "Integrating 1 gives x, and integrating x gives x^2 / 2, yielding x + x^2/2 + C."
  },
  {
    q: "What is the derivative of 4 times x to the power of 5?",
    options: ["4 x to the 4th", "5 x to the 4th", "20 x to the 5th", "20 x to the 4th"],
    answer: 3,
    explanation: "Using power rule: 4 * 5 * x^4 = 20x^4."
  },
  {
    q: "What is the slope of the line given by equation y = minus 4 x + 7?",
    options: ["minus 7", "4", "7", "minus 4"],
    answer: 3,
    explanation: "In slope-intercept form y = mx + b, the coefficient of x is the slope m = -4."
  },
  {
    q: "What is the y-intercept of the line y = 3 x minus 8?",
    options: ["0", "8", "3", "minus 8"],
    answer: 3,
    explanation: "The constant term in slope-intercept form represents the y-intercept, which is -8."
  }
]
      },
      {
        id: "mat101-quadratic",
        week: "New Lecture",
        title: "Quadratic Equations",
        pdfPath: "MTH101_Quadratic_Equations.pdf",
        summary: [
          "Lecture material on quadratic equations. Add a more detailed summary after reviewing the note."
        ],
        questions: [
  {
    q: "What defines the general standard form of a quadratic equation?",
    options: ["ax squared plus bx plus c equals zero where a does not equal zero", "ax plus b equals zero", "ax cubed plus bx squared equals zero", "ax plus b over cx plus d equals zero"],
    answer: 0,
    explanation: "The standard form of a quadratic equation is ax squared plus bx plus c equals zero where a does not equal zero[cite: 12]."
  },
  {
    q: "Why is an equation called quadratic?",
    options: ["Because it has two variables", "Because the highest power of the unknown variable is 2", "Because it has two solutions always", "Because its discriminant is 2"],
    answer: 1,
    explanation: "The name quadratic comes from the fact that the highest power of the unknown variable is 2[cite: 12]."
  },
  {
    q: "What is the factorised form of a quadratic equation with roots alpha and beta?",
    options: ["a times x squared plus bx plus c equals zero", "a times x plus alpha times x plus beta equals zero", "a times x minus alpha times x minus beta equals zero", "x squared minus alpha plus beta equals zero"],
    answer: 2,
    explanation: "The factorised form is expressed as a times x minus alpha times x minus beta equals zero[cite: 12]."
  },
  {
    q: "What is the completing the square form of a quadratic equation?",
    options: ["a times x plus h squared plus k equals zero", "ax squared plus bx equals zero", "x minus alpha times x minus beta equals zero", "ax plus b equals zero"],
    answer: 3,
    explanation: "The completing the square form is written as a times x plus h squared plus k equals zero[cite: 12]."
  },
  {
    q: "What is the quadratic formula used to find the roots of ax squared plus bx plus c equals zero?",
    options: ["x equals negative b plus or minus square root of b squared minus 4ac all over 2a", "x equals b plus or minus square root of b squared plus 4ac over a", "x equals negative b plus 4ac over 2a", "x equals 2a over negative b plus or minus square root of b squared minus 4ac"],
    answer: 0,
    explanation: "The quadratic formula is x equals negative b plus or minus square root of b squared minus 4ac all over 2a[cite: 14]."
  },
  {
    q: "What does the discriminant of a quadratic equation represented as Delta equal?",
    options: ["b squared plus 4ac", "b squared minus 4ac", "4ac minus b squared", "2ac minus b"],
    answer: 1,
    explanation: "The discriminant is given by Delta equals b squared minus 4ac[cite: 15]."
  },
  {
    q: "If the discriminant Delta is greater than zero, what type of roots does the quadratic equation have?",
    options: ["Two distinct real roots", "One real repeated root", "Two complex roots", "No roots at all"],
    answer: 2,
    explanation: "When Delta is greater than zero, the quadratic equation has two distinct real roots[cite: 15]."
  },
  {
    q: "If the discriminant Delta is equal to zero, what can be said about the roots?",
    options: ["Two distinct real roots", "Two complex roots", "No real solutions", "One real repeated root"],
    answer: 3,
    explanation: "When Delta equals zero, the quadratic equation has one real repeated root[cite: 15]."
  },
  {
    q: "If the discriminant Delta is less than zero, what type of roots exist?",
    options: ["Two complex roots", "Two distinct real roots", "One real repeated root", "Zero roots"],
    answer: 0,
    explanation: "When Delta is less than zero, the quadratic equation yields two complex roots[cite: 15]."
  },
  {
    q: "What is the sum of the roots alpha plus beta for a quadratic equation ax squared plus bx plus c equals zero?",
    options: ["c over a", "negative b over a", "b over a", "negative c over a"],
    answer: 1,
    explanation: "The sum of the roots is given by negative b over a[cite: 15]."
  },
  {
    q: "What is the product of the roots alpha times beta for a quadratic equation ax squared plus bx plus c equals zero?",
    options: ["negative b over a", "negative c over a", "c over a", "b over a"],
    answer: 2,
    explanation: "The product of the roots is given by c over a[cite: 15]."
  },
  {
    q: "How do you form a quadratic equation when given the sum of roots S and product of roots P?",
    options: ["x squared plus Sx plus P equals zero", "x squared plus Sx minus P equals zero", "x squared minus Px plus S equals zero", "x squared minus Sx plus P equals zero"],
    answer: 3,
    explanation: "A quadratic equation formed from roots given sum S and product P is x squared minus Sx plus P equals zero[cite: 16]."
  },
  {
    q: "What shape does the graph of a quadratic function y equals ax squared plus bx plus c form?",
    options: ["A parabola", "A straight line", "A circle", "A hyperbola"],
    answer: 0,
    explanation: "The graph of a quadratic equation is a parabola[cite: 15]."
  },
  {
    q: "On a graphical representation, where are the roots of a quadratic equation located?",
    options: ["At the y-intercepts", "At the x-intercepts", "At the origin", "At the vertex only"],
    answer: 1,
    explanation: "The roots of a quadratic equation are represented by the x-intercepts of its parabola graph[cite: 15]."
  },
  {
    q: "What is the first step when solving a quadratic equation by completing the square?",
    options: ["Move the constant term to the right hand side", "Add b over 2 squared to both sides", "Make the coefficient of x squared equal to 1", "Take the square root of both sides"],
    answer: 2,
    explanation: "The first step in completing the square is to make the coefficient of x squared equal to 1[cite: 14]."
  },
  {
    q: "In the method of completing the square, what expression is added to both sides after making the x squared coefficient 1 and moving the constant?",
    options: ["b squared over 4a", "b over a squared", "2b squared", "b over 2 squared"],
    answer: 3,
    explanation: "You add b over 2 squared to both sides of the equation[cite: 14]."
  },
  {
    q: "Solve by factorisation: x squared plus 7x plus 12 equals zero. What are the values of x?",
    options: ["negative 3 and negative 4", "3 and 4", "negative 2 and negative 6", "1 and 12"],
    answer: 0,
    explanation: "Factorising x squared plus 7x plus 12 gives x plus 3 times x plus 4 equals zero, yielding roots negative 3 and negative 4[cite: 13]."
  },
  {
    q: "Solve the quadratic equation x squared plus 6x minus 7 equals zero by completing the square.",
    options: ["x equals 2 and negative 7", "x equals 1 and negative 7", "x equals negative 1 and 7", "x equals 3 and negative 3"],
    answer: 1,
    explanation: "Completing the square yields x plus 3 squared equals 16, resulting in x equals 1 and negative 7[cite: 14]."
  },
  {
    q: "Find the sum and product of the roots for the quadratic equation 4x squared minus 5x plus 2 equals zero.",
    options: ["Sum is 2 and product is 5 over 4", "Sum is negative 5 over 4 and product is 2", "Sum is 5 over 4 and product is 1 over 2", "Sum is 1 over 2 and product is 5 over 4"],
    answer: 2,
    explanation: "Using coefficients a equals 4, b equals negative 5, c equals 2, sum is negative b over a which is 5 over 4, and product is c over a equals 2 over 4 equals 1 over 2[cite: 16]."
  },
  {
    q: "Form a quadratic equation whose roots are 3 and 5.",
    options: ["x squared minus 8x minus 15 equals zero", "x squared plus 8x plus 15 equals zero", "x squared plus 8x minus 15 equals zero", "x squared minus 8x plus 15 equals zero"],
    answer: 3,
    explanation: "Sum S equals 3 plus 5 equals 8, Product P equals 3 times 5 equals 15, yielding x squared minus 8x plus 15 equals zero[cite: 16]."
  },
  {
    q: "Form a quadratic equation whose roots are negative 2 and negative 4.",
    options: ["x squared plus 6x plus 8 equals zero", "x squared minus 6x plus 8 equals zero", "x squared plus 6x minus 8 equals zero", "x squared minus 6x minus 8 equals zero"],
    answer: 0,
    explanation: "Sum S equals negative 6, Product P equals 8, leading to x squared plus 6x plus 8 equals zero[cite: 16]."
  },
  {
    q: "The product of two consecutive integers is 156. What are the integers?",
    options: ["10 and 11", "12 and 13 or negative 13 and negative 12", "13 and 14", "negative 11 and negative 10"],
    answer: 1,
    explanation: "Let integers be n and n plus 1. Solving n squared plus n minus 156 equals zero gives 12 and 13 or negative 13 and negative 12."
  },
  {
    q: "Solve the quadratic equation 9x squared plus 9x plus 2 equals zero.",
    options: ["negative 1 over 3 and negative 1 over 2", "1 over 3 and 1 over 2", "negative 2 and negative 9", "2 and 9"],
    answer: 2,
    explanation: "Factorising or using the formula yields roots negative 1 over 3 and negative 1 over 2."
  },
  {
    q: "Solve the quadratic equation 2x squared plus 7x minus 4 equals zero.",
    options: ["x equals 1 and 4", "x equals negative 1 and negative 4", "x equals 2 and negative 2", "x equals 1 over 2 and negative 4"],
    answer: 3,
    explanation: "Applying the formula or factorisation gives roots 1 over 2 and negative 4."
  },
  {
    q: "Solve the quadratic equation 3x squared minus 12x equals zero.",
    options: ["x equals 0 and 4", "x equals 3 and 12", "x equals negative 4 and 0", "x equals 0 and negative 4"],
    answer: 0,
    explanation: "Factoring 3x out gives 3x times x minus 4 equals zero, so x equals 0 and 4."
  },
  {
    q: "Solve the quadratic equation 5x squared plus 30x plus 45 equals zero.",
    options: ["x equals 3", "x equals negative 3 as a repeated root", "x equals 5 and 6", "x equals negative 5"],
    answer: 1,
    explanation: "Dividing by 5 gives x squared plus 6x plus 9 equals zero, which is x plus 3 squared equals zero, giving negative 3 as a repeated root."
  },
  {
    q: "What are the sum and product of the roots for the quadratic equation 2x squared minus 8x plus 6 equals zero?",
    options: ["Sum is 3 and product is 4", "Sum is negative 4 and product is 3", "Sum is 4 and product is 3", "Sum is 3 and product is negative 4"],
    answer: 2,
    explanation: "Sum equals negative negative 8 over 2 equals 4, and product equals 6 over 2 equals 3."
  },
  {
    q: "A rectangular field has a length 5 meters more than its width. If the area is 84 square meters, what is its width?",
    options: ["12 meters", "5 meters", "14 meters", "7 meters"],
    answer: 3,
    explanation: "Width w times w plus 5 equals 84 gives w squared plus 5w minus 84 equals zero, yielding width equal to 7 meters."
  },
  {
    q: "For the quadratic equation 3x squared minus 5x plus 2 equals zero, what is the value of the discriminant?",
    options: ["1", "25", "24", "0"],
    answer: 0,
    explanation: "Discriminant Delta equals b squared minus 4ac equals negative 5 squared minus 4 times 3 times 2 equals 25 minus 24 equals 1[cite: 15]."
  },
  {
    q: "What condition must coefficient a satisfy in the general quadratic equation ax squared plus bx plus c equals zero?",
    options: ["a equals zero", "a does not equal zero", "a is greater than b", "a is a positive integer"],
    answer: 1,
    explanation: "By definition of quadratic equations, a cannot equal zero[cite: 12]."
  },
  {
    q: "If the roots of a quadratic equation are equal, what is the value of its discriminant?",
    options: ["Greater than zero", "Less than zero", "Equal to zero", "Equal to one"],
    answer: 2,
    explanation: "Equal roots mean the discriminant Delta equals zero[cite: 15]."
  },
  {
    q: "When solving 3x squared minus 5x plus 2 equals zero using the quadratic formula, what are the two calculated values of x?",
    options: ["1 and 2", "0 and 1", "negative 1 and 1 over 3", "1 and 2 over 3"],
    answer: 3,
    explanation: "Applying the quadratic formula with Delta equals 1 gives x equals 5 plus or minus 1 over 6, yielding 1 and 2 over 3[cite: 15]."
  },
  {
    q: "In completing the square for x squared plus 6x minus 7 equals zero, what constant term is added to both sides?",
    options: ["9", "6", "3", "36"],
    answer: 0,
    explanation: "Half of 6 is 3, and 3 squared is 9[cite: 14]."
  },
  {
    q: "What is the factored form of x squared minus x minus 6 equals zero?",
    options: ["x plus 2 times x minus 3 equals zero", "x minus 2 times x plus 3 equals zero", "x minus 2 times x minus 3 equals zero", "x plus 2 times x plus 3 equals zero"],
    answer: 1,
    explanation: "Factors of negative 6 that add to negative 1 are negative 3 and 2, yielding x minus 3 times x plus 2 equals zero[cite: 13]."
  },
  {
    q: "What are the roots of the equation x squared minus x minus 6 equals zero?",
    options: ["2 and 3", "negative 2 and negative 3", "negative 2 and 3", "1 and 6"],
    answer: 2,
    explanation: "Setting factors to zero gives x equals negative 2 and x equals 3[cite: 13]."
  },
  {
    q: "If a quadratic equation has complex roots, what does its graph look like relative to the x-axis?",
    options: ["It intersects the x-axis twice", "It is tangent to the x-axis at one point", "It lies entirely above or below the x-axis and has no x-intercepts", "It is a vertical line"],
    answer: 3,
    explanation: "Complex roots mean no real x-intercepts, so the parabola never touches or crosses the x-axis[cite: 15]."
  },
  {
    q: "What is the sum of roots for the equation 3x squared plus 12x minus 15 equals zero?",
    options: ["negative 4", "4", "5", "negative 5"],
    answer: 0,
    explanation: "Sum equals negative b over a equals negative 12 over 3 equals negative 4[cite: 15]."
  },
  {
    q: "What is the product of roots for the equation 3x squared plus 12x minus 15 equals zero?",
    options: ["4", "negative 5", "5", "12"],
    answer: 1,
    explanation: "Product equals c over a equals negative 15 over 3 equals negative 5[cite: 15]."
  },
  {
    q: "Which method relies on expressing a quadratic equation as a product of two linear expressions?",
    options: ["Completing the square", "Quadratic formula", "Factorisation", "Graphical method"],
    answer: 2,
    explanation: "Factorisation involves writing the quadratic expression as a product of two linear factors[cite: 12]."
  },
  {
    q: "If the roots of a quadratic equation are alpha equals 2 and beta equals negative 4, what is their sum?",
    options: ["2", "6", "negative 8", "negative 2"],
    answer: 3,
    explanation: "Sum equals 2 plus negative 4 equals negative 2[cite: 16]."
  },
  {
    q: "If alpha equals 2 and beta equals negative 4, what is their product?",
    options: ["negative 8", "8", "negative 2", "2"],
    answer: 0,
    explanation: "Product equals 2 times negative 4 equals negative 8[cite: 16]."
  },
  {
    q: "What quadratic equation has roots 2 and negative 4?",
    options: ["x squared plus 2x plus 8 equals zero", "x squared plus 2x minus 8 equals zero", "x squared minus 2x minus 8 equals zero", "x squared minus 2x plus 8 equals zero"],
    answer: 1,
    explanation: "Using sum equals negative 2 and product equals negative 8 gives x squared minus negative 2x plus negative 8 equals zero, which is x squared plus 2x minus 8 equals zero[cite: 16]."
  },
  {
    q: "In the word problem where the product of two consecutive integers is 156, what is the quadratic equation formed letting the first integer be n?",
    options: ["n squared minus n plus 156 equals zero", "n squared plus 156n equals zero", "n squared plus n minus 156 equals zero", "2n plus 1 equals 156"],
    answer: 2,
    explanation: "n times n plus 1 equals 156 expands to n squared plus n minus 156 equals zero."
  },
  {
    q: "What are the dimensions of the rectangular field whose length is 5 meters more than its width and whose area is 84 square meters?",
    options: ["Width 5m and length 10m", "Width 6m and length 11m", "Width 8m and length 13m", "Width 7m and length 12m"],
    answer: 3,
    explanation: "Width 7 meters and length 7 plus 5 equals 12 meters gives area 84 square meters."
  },
  {
    q: "What type of roots are indicated when Delta is greater than zero and is a perfect square?",
    options: ["Real, rational, and distinct roots", "Real, irrational, and distinct roots", "Complex roots", "Equal real roots"],
    answer: 0,
    explanation: "A positive discriminant that is a perfect square yields real, rational, and distinct roots[cite: 15]."
  },
  {
    q: "What type of roots are indicated when Delta is greater than zero but NOT a perfect square?",
    options: ["Real and rational roots", "Real and irrational roots", "Equal roots", "Complex roots"],
    answer: 1,
    explanation: "If Delta is positive but not a perfect square, the roots are real and irrational[cite: 15]."
  },
  {
    q: "If a quadratic equation is given in standard form ax squared plus bx plus c equals zero, what does coefficient c represent graphically?",
    options: ["The x-intercept", "The vertex of the parabola", "The y-intercept", "The axis of symmetry"],
    answer: 2,
    explanation: "Setting x equals zero yields y equals c, making c the y-intercept of the parabola[cite: 15]."
  },
  {
    q: "Which formula gives the axis of symmetry for a parabola described by ax squared plus bx plus c equals zero?",
    options: ["x equals b over 2a", "x equals negative b over a", "x equals negative 4ac over 2a", "x equals negative b over 2a"],
    answer: 3,
    explanation: "The axis of symmetry for any vertical parabola ax squared plus bx plus c is given by x equals negative b over 2a[cite: 15]."
  },
  {
    q: "If one root of a quadratic equation is 3 plus root 2, what must the other root be if coefficients are rational?",
    options: ["3 minus root 2", "minus 3 plus root 2", "minus 3 minus root 2", "root 2 minus 3"],
    answer: 0,
    explanation: "Irrational roots of quadratic equations with rational coefficients always occur in conjugate pairs, so the other root is 3 minus root 2[cite: 15]."
  },
  {
    q: "If the sum of the roots of ax squared plus minus 6x plus 8 equals zero is 3, what is coefficient a assuming standard form?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Sum equals negative negative 6 over a equals 6 over a equals 3, which means a equals 2[cite: 15]."
  }
]
     }
    ]
  },
   
  {
    code: "PHY 101",
    title: "General Physics I (Mechanics)",
    description: "Mechanics, units, dimensions, and past question banks.",
    topics: [
      {
        id: "phy101-pq",
        week: "Exam Prep",
        title: "PHY 101 Combined Past Questions",
        pdfPath: "pdfs/Kwasu phy101 comibine  pq (2) (1).pdf",
        summary: [
          "Covers vectors, kinematics, Newton's laws of motion, and work-energy theorem[cite: 10].",
          "Explores rotational motion, torque, Young's modulus, and fluid mechanics[cite: 10]."
        ],
        questions:
[
  {
    q: "Which of the following physical quantities has the same dimensional formula as impulse?",
    options: ["Power", "Linear momentum", "Energy", "Work"],
    answer: 1,
    explanation: "Impulse equals change in momentum, meaning both share the exact same dimensions of [M L T^-1]."
  },
  {
    q: "What is the SI unit of pressure?",
    options: ["Newton", "Pascal", "Joule", "Watt"],
    answer: 1,
    explanation: "Pressure is measured in Pascals (Pa), which is equivalent to Newtons per square meter."
  },
  {
    q: "Which quantity is a scalar rather than a vector?",
    options: ["Acceleration", "Velocity", "Displacement", "Speed"],
    answer: 3,
    explanation: "Speed has magnitude only without directional components, making it a scalar quantity."
  },
  {
    q: "What does Newton's First Law of Motion primarily define?",
    options: ["Momentum", "Force", "Inertia", "Energy conservation"],
    answer: 2,
    explanation: "Newton's first law defines inertia, stating that objects tend to maintain their state of rest or uniform motion."
  },
  {
    q: "What is the acceleration due to gravity (g) approximately on the surface of the Earth?",
    options: ["6.67 times 10 to the minus 11", "0", "3.0 times 10 to the 8th meters per second", "9.8 meters per second squared"],
    answer: 3,
    explanation: "Standard Earth gravity acceleration is approximately 9.8 m/s^2."
  },
  {
    q: "Which of the following represents the work-energy theorem?",
    options: ["Work equals power divided by time", "Work equals force times time", "Work done on an object equals its change in kinetic energy", "Work equals mass times acceleration"],
    answer: 2,
    explanation: "The work-energy theorem states that net work done equals the change in kinetic energy."
  },
  {
    q: "What is the unit of power in the International System of Units (SI)?",
    options: ["Newton", "Watt", "Volt", "Joule"],
    answer: 1,
    explanation: "Power is the rate of doing work, measured in Watts (Joules per second)."
  },
  {
    q: "What is the conservation law associated with translational invariance in space according to Noether's theorem?",
    options: ["Conservation of energy", "Conservation of angular momentum", "Conservation of linear momentum", "Conservation of charge"],
    answer: 2,
    explanation: "Spatial translation invariance leads directly to the conservation of linear momentum."
  },
  {
    q: "What is the centripetal acceleration of an object moving in a circle of radius r with speed v?",
    options: ["r squared over v", "v times r", "v squared over r", "v over r squared"],
    answer: 2,
    explanation: "Centripetal acceleration is given by a_c = v^2 / r directed toward the center of rotation."
  },
  {
    q: "Which type of collision conserves both linear momentum and total kinetic energy?",
    options: ["Explosive collision", "Inelastic collision", "Perfectly inelastic collision", "Elastic collision"],
    answer: 3,
    explanation: "In an elastic collision, kinetic energy is conserved alongside momentum."
  },
  {
    q: "What is Young's modulus defined as the ratio of?",
    options: ["Force to area", "Shear stress to shear strain", "Tensile stress to tensile strain", "Bulk stress to volume strain"],
    answer: 2,
    explanation: "Young's modulus measures material stiffness under tensile stress versus tensile strain."
  },
  {
    q: "What is the SI unit of frequency?",
    options: ["Joule", "Hertz", "Second", "Meter"],
    answer: 1,
    explanation: "Frequency is measured in Hertz (Hz), representing cycles per second."
  },
  {
    q: "What is the period of a simple pendulum dependent upon?",
    options: ["Color of the bob", "Air pressure", "Length of the pendulum and gravitational acceleration", "Mass of the bob and amplitude"],
    answer: 2,
    explanation: "The period T = 2 pi times square root of (L / g), depending strictly on length L and gravity g."
  },
  {
    q: "Which law states that stress is directly proportional to strain within the elastic limit?",
    options: ["Archimedes' Principle", "Newton's Law", "Pascal's Principle", "Hooke's Law"],
    answer: 3,
    explanation: "Hooke's law states that extension is proportional to force within elastic limits."
  },
  {
    q: "What is the buoyant force acting on a submerged object equal to, according to Archimedes' Principle?",
    options: ["The weight of the object", "Zero", "The volume of the container", "The weight of the fluid displaced by the object"],
    answer: 3,
    explanation: "Archimedes' principle states buoyant force equals the weight of displaced fluid."
  },
  {
    q: "What is the dimensional formula for force?",
    options: ["M L T to the minus 2", "M over L T", "M L T squared", "M L squared T to the minus 2"],
    answer: 0,
    explanation: "Force = mass times acceleration [M] * [L T^-2] = [M L T^-2]."
  },
  {
    q: "Which physical quantity measures an object's resistance to rotational acceleration?",
    options: ["Angular momentum", "Mass", "Torque", "Moment of inertia"],
    answer: 3,
    explanation: "Moment of inertia acts as rotational mass, resisting changes in rotational speed."
  },
  {
    q: "What is torque defined mathematically as?",
    options: ["Mass times acceleration", "Work divided by time", "Radius vector cross force", "Force times velocity"],
    answer: 2,
    explanation: "Torque is the cross product of position vector r and force F (tau = r cross F)."
  },
  {
    q: "What is terminal velocity in fluid dynamics?",
    options: ["Speed of sound in air", "The initial speed of a falling object", "Zero velocity", "The constant maximum velocity reached by a falling object when drag equals gravity"],
    answer: 3,
    explanation: "Terminal velocity occurs when downward gravitational force equals upward drag and buoyant forces."
  },
  {
    q: "What is the SI unit of work and energy?",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    answer: 2,
    explanation: "Work and energy are measured in Joules (N·m)."
  },
  {
    q: "Which of the following is a non-conservative force?",
    options: ["Gravitational force", "Electrostatic force", "Spring elastic force", "Friction"],
    answer: 3,
    explanation: "Friction dissipates mechanical energy into heat, making it non-conservative."
  },
  {
    q: "What does the area under a Force versus Displacement graph represent?",
    options: ["Momentum", "Work done", "Acceleration", "Power"],
    answer: 1,
    explanation: "Integrating force over displacement gives the work done."
  },
  {
    q: "What is the conservation law associated with time translation invariance?",
    options: ["Conservation of momentum", "Conservation of charge", "Conservation of energy", "Conservation of angular momentum"],
    answer: 2,
    explanation: "Time translation symmetry implies the conservation of total energy."
  },
  {
    q: "What is the coefficient of restitution for a perfectly elastic collision?",
    options: ["0.5", "Infinity", "0", "1"],
    answer: 3,
    explanation: "A perfectly elastic collision has a restitution coefficient of 1."
  },
  {
    q: "What is the coefficient of restitution for a perfectly inelastic collision?",
    options: ["2", "1", "0.5", "0"],
    answer: 3,
    explanation: "In a perfectly inelastic collision, objects stick together, giving a restitution coefficient of 0."
  },
  {
    q: "What is power defined as?",
    options: ["Mass times velocity", "Work done per unit time", "Energy divided by displacement", "Force times distance"],
    answer: 1,
    explanation: "Power is the rate at which work is performed over time."
  },
  {
    q: "What is the angular momentum of a rigid body rotating with angular velocity omega and moment of inertia I?",
    options: ["I squared omega", "omega over I", "I over omega", "I times omega"],
    answer: 3,
    explanation: "Angular momentum L equals moment of inertia multiplied by angular velocity (L = I omega)."
  },
  {
    q: "Which law states that total momentum of an isolated system remains constant?",
    options: ["Boyle's Law", "Newton's First Law", "Law of Conservation of Linear Momentum", "Hooke's Law"],
    answer: 2,
    explanation: "In the absence of external forces, total linear momentum is conserved."
  },
  {
    q: "What is the kinetic energy formula for a linear moving body of mass m and velocity v?",
    options: ["m g h", "m v", "1 over 2 m v", "1 over 2 m v squared"],
    answer: 3,
    explanation: "Translational kinetic energy is given by KE = (1/2)mv^2."
  },
  {
    q: "What is gravitational potential energy near the Earth's surface expressed as?",
    options: ["1 over 2 m v squared", "1 over 2 k x squared", "m g h", "f times d"],
    answer: 2,
    explanation: "Gravitational potential energy equals mass times gravity times height (PE = mgh)."
  },
  {
    q: "What is the SI unit of angular velocity?",
    options: ["Hertz squared", "Meters per second", "Radians per second", "Revolutions per hour"],
    answer: 2,
    explanation: "Angular velocity is measured in rad/s."
  },
  {
    q: "What is the relationship between linear velocity v and angular velocity omega for a rotating body of radius r?",
    options: ["v equals r over omega", "omega equals v times r", "v equals omega squared r", "v equals omega times r"],
    answer: 3,
    explanation: "Linear speed equals radius multiplied by angular speed (v = omega r)."
  },
  {
    q: "Which quantity is conserved in planetary motion as described by Kepler's Second Law?",
    options: ["Total energy", "Kinetic energy", "Areal velocity / Angular momentum", "Linear momentum"],
    answer: 2,
    explanation: "Kepler's second law (equal areas in equal times) is a direct result of conservation of angular momentum."
  },
  {
    q: "What is the escape velocity from the Earth's surface dependent upon?",
    options: ["Launch angle", "Earth's mass and radius", "Color of the rocket", "Mass of the escaping object"],
    answer: 1,
    explanation: "Escape velocity v_esc = square root of (2 G M / R), depending on planetary mass M and radius R."
  },
  {
    q: "What is the center of mass of a symmetrical uniform body located at?",
    options: ["At its edge", "At infinity", "Outside the body", "At its geometric center"],
    answer: 3,
    explanation: "For uniform density and symmetry, the center of mass coincides with the geometric center."
  },
  {
    q: "What does Bernoullis equation in fluid mechanics represent?",
    options: ["Conservation of momentum", "Conservation of mass", "Thermal equilibrium", "Conservation of energy for flowing fluids"],
    answer: 3,
    explanation: "Bernoulli's principle is an expression of energy conservation for flowing ideal fluids."
  },
  {
    q: "What is surface tension in liquids caused by?",
    options: ["Gravitational pull", "Magnetic fields", "Cohesive intermolecular forces between liquid molecules", "Upward air pressure"],
    answer: 2,
    explanation: "Cohesion creates an inward pull on surface molecules, generating surface tension."
  },
  {
    q: "What is viscosity a measure of in fluids?",
    options: ["Density", "Internal resistance to flow", "Surface temperature", "Compressibility"],
    answer: 1,
    explanation: "Viscosity describes a fluid's internal friction and resistance to gradual deformation."
  },
  {
    q: "What is the Doppler effect in physics?",
    options: ["Reflection of sound in pipes", "Change in observed frequency of a wave due to relative motion between source and observer", "Interference of light", "Bending of light waves"],
    answer: 1,
    explanation: "The Doppler effect describes frequency shifts caused by relative source-observer motion."
  },
  {
    q: "What is simple harmonic motion (SHM)?",
    options: ["Constant velocity motion", "Rotational acceleration", "Periodic motion where restoring force is proportional to displacement and directed toward equilibrium", "Random motion"],
    answer: 2,
    explanation: "SHM is characterized by a restoring force proportional to displacement (F = -kx)."
  },
  {
    q: "What is the maximum displacement from equilibrium in a wave or oscillation called?",
    options: ["Period", "Amplitude", "Frequency", "Wavelength"],
    answer: 1,
    explanation: "Amplitude measures the peak displacement of an oscillation from its central resting state."
  },
  {
    q: "What is the wavelength of a wave defined as?",
    options: ["Wave height", "Distance between identical points in adjacent wave cycles", "Time taken for one cycle", "Number of waves per second"],
    answer: 1,
    explanation: "Wavelength is the spatial distance over which a wave's shape repeats."
  },
  {
    q: "What is the relationship between wave speed v, frequency f, and wavelength lambda?",
    options: ["f equals v times lambda", "v equals f squared lambda", "v equals lambda over f", "v equals f times lambda"],
    answer: 3,
    explanation: "Wave speed equals frequency multiplied by wavelength (v = f lambda)."
  },
  {
    q: "Which type of wave requires a material medium for propagation?",
    options: ["Radio waves", "Light waves", "Mechanical waves", "Electromagnetic waves"],
    answer: 2,
    explanation: "Mechanical waves like sound require a physical medium (solid, liquid, or gas) to travel."
  },
  {
    q: "What is resonance in oscillatory systems?",
    options: ["Complete cessation of sound", "Phase reversal", "Total damping of vibration", "Amplification of amplitude when driving frequency matches natural frequency"],
    answer: 3,
    explanation: "Resonance occurs when an external driver matches a system's natural frequency, causing large amplitudes."
  },
  {
    q: "What is the SI unit of torque?",
    options: ["Joule per second", "Newton", "Pascal", "Newton meter"],
    answer: 3,
    explanation: "Torque is force times lever arm distance, measured in N·m."
  },
  {
    q: "What does Newton's Third Law of Motion state?",
    options: ["Gravity attracts all masses", "For every action, there is an equal and opposite reaction", "Force equals mass times acceleration", "Objects at rest stay at rest"],
    answer: 1,
    explanation: "Action and reaction forces are equal in magnitude and opposite in direction."
  },
    {
    q: "What is the momentum of an object calculated as?",
    options: ["Force times time", "Work divided by distance", "Mass times velocity", "Mass times acceleration"],
    answer: 2,
    explanation: "Linear momentum p equals mass m multiplied by velocity v (p = mv)."
  },
  {
    q: "What is the work done by a centripetal force acting on an object moving in uniform circular motion?",
    options: ["Negative work", "Equal to kinetic energy", "Maximum work", "Zero work"],
    answer: 3,
    explanation: "Centripetal force is always perpendicular to the instantaneous displacement, resulting in zero work done."
  },
  {
    q: "What is the total mechanical energy of an isolated conservative system?",
    options: ["Zero", "Constantly increasing", "Constantly decreasing", "Conserved / constant"],
    answer: 3,
    explanation: "In the absence of non-conservative forces, total mechanical energy remains constant."
  }
]
}
]
},
{
code: "STA 111",
    title: "Statistics for Beginners",
    description: "Statistical data collection, presentation, charts, and measures of location.",
    topics: [
      {
        id: "sta111-w3",
        week: "Week 3",
        title: "STA 111 Lecture Note 3 (Charts & Graphs)",
        pdfPath: "pdfs/STA111 LECTURE NOTE 3 (1).pdf",
        summary: [
          "Bar charts, multiple bar charts, and component bar charts.",
          "Pie charts, histograms, frequency polygons, ogives, and stem-and-leaf plots."
        ],
        questions: [
  {
    q: "Which graphical representation displays data using bars whose heights or lengths are proportional to the frequencies they represent?",
    options: ["Scatter plot", "Ogive", "Bar chart / Histogram", "Pie chart"],
    answer: 2,
    explanation: "Bar charts and histograms use rectangular bars proportional in height to data frequencies."
  },
  {
    q: "What type of chart displays data as slices of a circle, where each slice represents a relative percentage of the total?",
    options: ["Line graph", "Box plot", "Histogram", "Pie chart"],
    answer: 3,
    explanation: "A pie chart breaks a circular total into proportional sector slices."
  },
  {
    q: "In a histogram representing continuous grouped data, what is plotted along the horizontal x-axis?",
    options: ["Class frequencies", "Cumulative frequencies", "Class boundaries", "Percentages"],
    answer: 1,
    explanation: "Histograms feature continuous class boundaries along the horizontal axis with no gaps between bars."
  },
  {
    q: "What distinguishes a histogram from a simple bar chart?",
    options: ["Histograms use circles instead of rectangles", "Histograms have no gaps between adjacent bars because data is continuous", "Bar charts represent continuous data exclusively", "Histograms have gaps between bars"],
    answer: 1,
    explanation: "Histograms have touching bars because they represent continuous grouped frequency distributions."
  },
  {
    q: "What is a cumulative frequency polygon graph commonly known as?",
    options: ["Ogive", "Histogram", "Scatter diagram", "Stem-and-leaf plot"],
    answer: 0,
    explanation: "An ogive is a graphical representation of cumulative frequencies plotted against upper class boundaries."
  },
  {
    q: "Which graph displays data points connected by straight line segments to show trends over time?",
    options: ["Box plot", "Pie chart", "Bar chart", "Line graph / Time series plot"],
    answer: 3,
    explanation: "Line graphs are ideal for visualizing sequential trends across time periods."
  },
  {
    q: "What is the primary purpose of a stem-and-leaf display?",
    options: ["To measure atmospheric pressure", "To calculate matrix determinants", "To display quantitative data while preserving the original numerical data values", "To show geographical maps"],
    answer: 2,
    explanation: "Stem-and-leaf plots organize numerical data visually while keeping individual data points intact."
  },
  {
    q: "What type of frequency distribution does a frequency polygon construct by connecting what points?",
    options: ["Random sample points", "Lower class limits", "Midpoints of the top of histogram bars", "Cumulative totals"],
    answer: 2,
    explanation: "Frequency polygons are formed by connecting the midpoints of the tops of histogram bars."
  },
  {
    q: "Which graphical tool is best used to show the relationship or correlation between two quantitative variables?",
    options: ["Simple cumulative ogive", "Bar chart", "Scatter plot", "Pie chart"],
    answer: 2,
    explanation: "Scatter plots plot pairs of numerical data on Cartesian axes to reveal bivariate correlations."
  },
  {
    q: "What is a Pareto chart?",
    options: ["A random line graph", "A 3D scatter plot", "A circular pie chart showing percentages", "A specialized bar chart where categories are ordered by frequency magnitude in descending order"],
    answer: 3,
    explanation: "Pareto charts combine bar and line graphs, ordering categories from highest to lowest frequency to highlight vital issues."
  },
  {
    q: "What does the total sum of angles in a pie chart equal?",
    options: ["270 degrees", "360 degrees", "90 degrees", "180 degrees"],
    answer: 1,
    explanation: "A complete circle representing 100% of data equals 360 degrees."
  },
  {
    q: "How do you calculate the central angle for a specific category slice in a pie chart?",
    options: ["Category frequency plus 360", "(Category frequency / Total frequency) times 360 degrees", "Category frequency times 100", "Total frequency divided by category frequency"],
    answer: 1,
    explanation: "Sector angle proportional share is calculated by multiplying the relative frequency fraction by 360 degrees."
  },
  {
    q: "What is a pictogram?",
    options: ["A regression line", "A mathematical formula", "A graph using icons, pictures, or symbols to represent data quantities", "A matrix table"],
    answer: 2,
    explanation: "Pictograms use iconic symbols or pictures to make statistical data visual and engaging."
  },
  {
    q: "Which chart type displays data categories across horizontal bars rather than vertical columns?",
    options: ["Pie chart", "Ogive", "Horizontal bar chart", "Vertical bar chart"],
    answer: 2,
    explanation: "Horizontal bar charts display category labels and bars horizontally, useful for long category names."
  },
  {
    q: "What is a component bar chart (stacked bar chart) used for?",
    options: ["To display totals broken down into sub-components stacked within a single bar", "To plot bivariate scatter points", "To display curved polynomial trends", "To show single ungrouped frequencies"],
    answer: 0,
    explanation: "Component bar charts stack sub-categories within bars to show both total and part-to-whole relationships."
  },
  {
    q: "What is a multiple bar chart (clustered bar chart) used for?",
    options: ["To draw circles", "To compare multiple distinct sub-categories side-by-side within main groups", "To calculate medians", "To show single continuous trends"],
    answer: 1,
    explanation: "Clustered bar charts place related bars side-by-side for direct group comparisons."
  },
  {
    q: "What is the main drawback of using pictograms to represent data?",
    options: ["They only work for negative numbers", "They can easily distort data perception if symbol sizes are not strictly proportional", "They cannot be printed in color", "They are too accurate"],
    answer: 1,
    explanation: "If symbol dimensions scale incorrectly, pictograms can mislead viewers about exact quantitative ratios."
  },
  {
    q: "What does a time series graph plot on its horizontal axis?",
    options: ["Cumulative percentages", "Time units such as days, months, or years", "Class boundaries", "Frequency values"],
    answer: 1,
    explanation: "Time series charts plot temporal units on the x-axis to track changes over time."
  },
  {
    q: "What is a box-and-whisker plot (box plot) primarily used to visualize?",
    options: ["Probability densities", "Exact category totals", "Matrix multiplication", "Data dispersion, median, and quartile spread"],
    answer: 3,
    explanation: "Box plots summarize data distributions using the median, quartiles, and outliers."
  },
  {
    q: "In a stem-and-leaf plot for the number 47, what represents the stem and what represents the leaf?",
    options: ["Stem is 47, leaf is 0", "Stem is 4, leaf is 7", "Stem is 0, leaf is 47", "Stem is 7, leaf is 4"],
    answer: 1,
    explanation: "Stems represent leading digits (4) while leaves represent trailing digits (7)."
  },
  {
    q: "What is the shape of a symmetrical bell-shaped frequency distribution curve called?",
    options: ["Normal distribution curve", "Uniform curve", "Bimodal curve", "Skewed curve"],
    answer: 0,
    explanation: "Symmetrical bell-shaped curves represent normal distributions in statistics."
  },
  {
    q: "What does a positively skewed (right-skewed) frequency distribution look like graphically?",
    options: ["Longer tail extending to the left", "Flat horizontal line", "Longer tail extending to the right", "Symmetrical on both sides"],
    answer: 2,
    explanation: "Positive skewness features a peak on the left with a long tail stretching toward higher values on the right."
  },
  {
    q: "What does a negatively skewed (left-skewed) distribution exhibit?",
    options: ["No variance", "Equal frequencies", "Longer tail extending to the right", "Longer tail extending to the left toward lower values"],
    answer: 3,
    explanation: "Negative skewness features a peak on the right and a stretched tail pointing toward the left."
  },
  {
    q: "Which graph displays the frequency of data grouped into class intervals using vertical bars of varying widths?",
    options: ["Line graph", "Histogram with unequal class widths", "Scatter diagram", "Simple pie chart"],
    answer: 1,
    explanation: "When class intervals vary in width, histogram bar areas must be proportional to frequencies."
  },
  {
    q: "What is a frequency distribution table?",
    options: ["A structured table showing data classes and their corresponding frequencies", "A regression matrix", "A computer spreadsheet formula", "A graphical drawing"],
    answer: 0,
    explanation: "Frequency tables organize raw data into summarized class categories and counts."
  },
  {
    q: "What are class boundaries in grouped frequency distributions?",
    options: ["Random numbers", "Midpoint averages", "Cumulative sums", "The upper and lower limits that eliminate gaps between adjacent classes"],
    answer: 3,
    explanation: "Class boundaries bridge the gap between discrete upper and lower class limits for continuous data."
  },
  {
    q: "How is the class width determined in a frequency distribution?",
    options: ["Mean plus mode", "Maximum value multiplied by sample size", "Upper class boundary minus lower class boundary", "Total frequency divided by two"],
    answer: 2,
    explanation: "Class width is the difference between the upper and lower boundaries of any class interval."
  },
  {
    q: "What is the midpoint (class mark) of a class interval calculated as?",
    options: ["Frequency times limit", "Square root of limits", "(Lower limit plus upper limit) divided by 2", "Upper limit minus lower limit"],
    answer: 2,
    explanation: "Class midpoints are averages of the lower and upper limits of a class interval."
  },
  {
    q: "What does relative frequency represent?",
    options: ["Range of data", "Class frequency divided by total sample size", "Cumulative sum", "Total frequency times sample size"],
    answer: 1,
    explanation: "Relative frequency expresses a class frequency as a proportion or fraction of the total observations."
  },
  {
    q: "How do you convert a relative frequency into a percentage frequency?",
    options: ["Divide relative frequency by 360", "Square the proportion", "Add total frequency", "Multiply relative frequency by 100 percent"],
    answer: 3,
    explanation: "Percentage frequency is calculated by multiplying relative frequency proportions by 100."
  },
  {
    q: "What is cumulative frequency?",
    options: ["The running total of frequencies up to the upper boundary of a given class", "The minimum data value", "The average of all classes", "The frequency of a single class"],
    answer: 0,
    explanation: "Cumulative frequencies accumulate successive class frequencies from bottom to top or top to bottom."
  },
  {
    q: "Which graphical chart uses rectangular boxes showing medians and interquartile ranges?",
    options: ["Frequency polygon", "Pie chart", "Box plot (box-and-whisker plot)", "Simple bar chart"],
    answer: 2,
    explanation: "Box plots display the five-number summary including medians and quartiles."
  },
  {
    q: "What is a bivariate data set?",
    options: ["Data with three variables", "Categorical single counts", "Data involving two different variables recorded for each observation", "Data with only one variable"],
    answer: 2,
    explanation: "Bivariate datasets record pairs of values (like height and weight) for each subject."
  },
  {
    q: "What chart is most appropriate for displaying the breakdown of a monthly household budget?",
    options: ["Ogive", "Histogram", "Pie chart or stacked bar chart", "Scatter plot"],
    answer: 2,
    explanation: "Pie charts effectively show part-to-whole proportions like budgets."
  },
  {
    q: "What does a steep positive slope in a time series line graph indicate?",
    options: ["Zero frequency", "Rapid decline", "Constant stationary value", "Rapid growth or increase over time"],
    answer: 3,
    explanation: "Steep upward slopes signify fast increases in values across time periods."
  },
  {
    q: "Why are titles and legends important in statistical charts?",
    options: ["To increase file size", "To hide data sources", "To provide clear context, scaling information, and data definitions for the reader", "To add decorative colors"],
    answer: 2,
    explanation: "Titles and legends ensure charts are interpretable and correctly understood."
  },
  {
    q: "What is a dot plot used for?",
    options: ["Calculating matrix inverses", "Displaying frequency counts of numerical data using dots along a number line", "Drawing 3D vectors", "Plotting geographical maps"],
    answer: 1,
    explanation: "Dot plots stack dots vertically above a number line to show data distributions for small datasets."
  },
  {
    q: "What is the primary advantage of a frequency polygon over a histogram?",
    options: ["It calculates standard deviation automatically", "It uses 3D bars", "Multiple distributions can be easily superimposed and compared on the same axes", "It requires no calculations"],
    answer: 2,
    explanation: "Frequency polygons allow multiple data series to be plotted together cleanly for comparison."
  },
  {
    q: "What type of data is best displayed using a qualitative bar chart?",
    options: ["Continuous time values", "Categorical or nominal data (e.g., eye color, brands)", "Precise scientific temperatures", "Continuous weight measurements"],
    answer: 1,
    explanation: "Bar charts are designed for discrete categorical or nominal data groups."
  },
  {
    q: "What does an outlier represent in a dataset visualized on a box plot?",
    options: ["The total sample size", "The class width", "The exact median value", "An observation numerically distant from the rest of the data"],
    answer: 3,
    explanation: "Outliers are extreme data points lying far outside the main data distribution range."
  },
  {
    q: "What is the main purpose of data visualization in statistics?",
    options: ["To replace mathematical calculations", "To communicate complex numerical patterns and trends clearly and intuitively at a glance", "To hide errors in data collection", "To make reports longer"],
    answer: 1,
    explanation: "Visual graphs summarize massive datasets so patterns become immediately apparent."
  },
  {
    q: "When drawing a bar chart, why must the frequency axis start at zero?",
    options: ["To save printer ink", "It is not required", "To prevent visual distortion of the relative heights and proportions of the bars", "To make the chart wider"],
    answer: 2,
    explanation: "Starting frequency axes at zero ensures bar lengths accurately reflect proportional quantities."
  },
  {
    q: "What is a Lorenz curve used to represent in statistics and economics?",
    options: ["Projectile motion", "Income or wealth inequality distribution", "Chemical reaction rates", "Temperature fluctuations"],
    answer: 1,
    explanation: "Lorenz curves graphically depict cumulative income distribution to measure inequality."
  },
  {
    q: "What is a radar chart (spider chart) used for?",
    options: ["Drawing straight lines", "Comparing multiple quantitative variables across several categories on a radial grid", "Calculating sums", "Plotting single numbers"],
    answer: 1,
    explanation: "Radar charts display multivariate data across axes radiating from a central point."
  },
  {
    q: "What does a flat, horizontal line on a time series graph indicate?",
    options: ["Complete data loss", "Exponential increase", "Rapid growth", "No change or stable values over that time period"],
    answer: 3,
    explanation: "A zero slope indicates that the measured variable remained constant over time."
  },
  {
    q: "How are classes represented in a histogram?",
    options: ["By separated disjoint circles", "By continuous rectangular bars covering interval widths", "By isolated dots", "By pie slices"],
    answer: 1,
    explanation: "Histograms use contiguous rectangular bars where area represents frequency."
  },
  {
    q: "What is a lesser-than ogive used to determine graphically?",
    options: ["Standard deviation", "Mode only", "Median and percentiles", "Total variance"],
    answer: 2,
    explanation: "Less-than ogives accumulate frequencies from bottom to top, helping estimate medians and percentiles."
  },
  {
    q: "What is a greater-than ogive?",
    options: ["A bar chart", "A pie chart slice", "A scatter plot trend", "An ogive accumulating frequencies from the highest class down to the lowest"],
    answer: 3,
    explanation: "Greater-than ogives accumulate frequencies from top to bottom."
  },
  {
    q: "What is the key characteristic of a frequency distribution chart for discrete data?",
    options: ["Only percentages are shown", "Bars are centered over distinct numerical values with clear spacing", "Data is always curved", "Bars touch each other with no gaps"],
    answer: 1,
    explanation: "Discrete data bar charts feature spaces between bars because values are distinct counts."
  },
  {
    q: "What is the final cumulative frequency value in an ogive equal to?",
    options: ["The arithmetic mean", "One hundred", "Zero", "The total sample size (N)"],
    answer: 3,
    explanation: "The maximum cumulative frequency at the upper boundary equals the total number of observations N."
  }
]
      },
            {
        id: "sta111-w4",
        week: "Week 4",
        title: "STA 111 Lecture Note 4 (Measures of Location)",
        pdfPath: "pdfs/STA111 LECTURE NOTE 4.pdf",
        summary: [
          "Central tendency measures: Arithmetic mean, weighted mean, geometric mean, and harmonic mean.",
          "Positional averages: Mode, median, quartiles, deciles, and percentiles."
        ],
        questions: [
  {
    q: "What is the primary purpose of measures of central tendency (location)?",
    options: ["To draw pie charts", "To summarize a dataset with a single representative central value", "To calculate matrix ranks", "To measure data dispersion"],
    answer: 1,
    explanation: "Measures of location aim to identify a central benchmark representing the entire dataset."
  },
  {
    q: "Which measure of central tendency is calculated by summing all observations and dividing by the total number of observations?",
    options: ["Median", "Geometric mean", "Arithmetic mean (average)", "Mode"],
    answer: 2,
    explanation: "The arithmetic mean is the sum of values divided by sample size N."
  },
  {
    q: "What is the median of a sorted dataset defined as?",
    options: ["The middle value that splits the ordered dataset into two equal halves", "The highest minus lowest value", "The arithmetic average", "The most frequent value"],
    answer: 0,
    explanation: "The median is the positional middle value of an ordered dataset."
  },
  {
    q: "What does the mode of a dataset represent?",
    options: ["The arithmetic mean", "The lower quartile", "The midpoint", "The value that appears most frequently with the highest occurrence"],
    answer: 3,
    explanation: "The mode is the most frequently occurring observation in a dataset."
  },
  {
    q: "If a distribution has two distinct peaks (modes), what is it called?",
    options: ["Amodal", "Bimodal", "Unimodal", "Multimodal"],
    answer: 1,
    explanation: "A distribution with two peaks is termed bimodal."
  },
  {
    q: "What is the main advantage of the median over the arithmetic mean?",
    options: ["It requires all data values to be summed", "It can only be calculated for qualitative data", "It is resistant and robust to extreme outliers and skewed data", "It is heavily affected by extreme outliers"],
    answer: 2,
    explanation: "The median is not distorted by extreme outlier values unlike the arithmetic mean."
  },
  {
    q: "Which measure of central tendency can be used for nominal (categorical) data?",
    options: ["Geometric mean", "Median", "Mode", "Mean"],
    answer: 2,
    explanation: "Mode is the only measure of central tendency applicable to qualitative nominal categories."
  },
  {
    q: "What is the geometric mean primarily used to calculate?",
    options: ["Simple sums", "Average growth rates, percentages, and financial ratios", "Categorical frequencies", "Positional medians"],
    answer: 1,
    explanation: "Geometric mean is ideal for multiplicative processes like compound interest and growth rates."
  },
  {
    q: "What is the harmonic mean useful for calculating?",
    options: ["Categorical modes", "Midpoint ranges", "Average rates, speeds, and time-based ratios", "Simple data sums"],
    answer: 2,
    explanation: "Harmonic mean is the appropriate average for rates and ratios such as speed over distance."
  },
  {
    q: "In a perfectly symmetrical distribution, what is the exact relationship between mean, median, and mode?",
    options: ["Median is zero", "Mean is greater than median", "Mode is greater than mean", "Mean equals median equals mode"],
    answer: 3,
    explanation: "Symmetrical distributions feature identical values for mean, median, and mode."
  },
  {
    q: "In a positively skewed distribution, what is the typical order of averages from lowest to highest?",
    options: ["Mean equals median equals mode", "Mode < Median < Mean", "Median < Mode < Mean", "Mean < Median < Mode"],
    answer: 1,
    explanation: "Positive skew pulls the mean upward, resulting in Mode < Median < Mean."
  },
  {
    q: "In a negatively skewed distribution, what is the typical relationship between mean, median, and mode?",
    options: ["Mean equals mode", "Median is lowest", "Mode < Median < Mean", "Mean < Median < Mode"],
    answer: 3,
    explanation: "Negative skew pulls the mean downward, resulting in Mean < Median < Mode."
  },
  {
    q: "What is the lower quartile (Q1) equivalent to in terms of percentiles?",
    options: ["50th percentile", "100th percentile", "25th percentile", "75th percentile"],
    answer: 2,
    explanation: "Q1 marks the 25th percentile below which 25% of the data falls."
  },
  {
    q: "What is the upper quartile (Q3) equivalent to?",
    options: ["90th percentile", "75th percentile", "25th percentile", "50th percentile"],
    answer: 1,
    explanation: "Q3 represents the 75th percentile."
  },
  {
    q: "What is the second quartile (Q2) equal to?",
    options: ["The harmonic mean", "The range", "The median (50th percentile)", "The mode"],
    answer: 2,
    explanation: "Q2 splits the data in half, making it identical to the median."
  },
  {
    q: "What is the interquartile range (IQR) calculated as?",
    options: ["Q3 plus Q1", "Mean divided by median", "Maximum minus minimum", "Q3 minus Q1"],
    answer: 3,
    explanation: "IQR measures the spread of the middle 50% of data by subtracting Q1 from Q3."
  },
  {
    q: "What is a decile?",
    options: ["The arithmetic mean", "Values that divide a ranked dataset into 10 equal parts", "Values dividing data into 100 parts", "Values dividing data into 4 parts"],
    answer: 1,
    explanation: "Deciles split datasets into 10 equal segments (D1 through D9)."
  },
  {
    q: "What does a percentile represent?",
    options: ["The total sum", "The frequency count", "A value below which a given percentage of observations fall", "The average value"],
    answer: 2,
    explanation: "Percentiles divide ordered datasets into 100 equal parts."
  },
  {
    q: "How is the range of a dataset calculated?",
    options: ["Q3 minus Q1", "Sum divided by N", "Mean plus median", "Maximum value minus minimum value"],
    answer: 3,
    explanation: "Range is the difference between the highest and lowest values in a dataset."
  },
  {
    q: "Why is the range considered a crude measure of dispersion?",
    options: ["It requires logarithms", "It depends solely on the two extreme values and ignores intermediate data", "It uses all data points", "It is too complex to calculate"],
    answer: 1,
    explanation: "Range only considers maximum and minimum extremes, ignoring all internal distribution structure."
  },
  {
    q: "What is the sum of deviations of individual observations from their arithmetic mean always equal to?",
    options: ["The sample size", "The median", "Zero", "1"],
    answer: 2,
    explanation: "Sum of (x - mean) is identically zero because positive and negative deviations cancel out."
  },
  {
    q: "Which measure of central tendency minimizes the sum of squared deviations?",
    options: ["Mode", "Geometric mean", "Median", "Arithmetic mean"],
    answer: 3,
    explanation: "Least squares property: deviations squared are minimized around the arithmetic mean."
  },
  {
    q: "Which measure minimizes the sum of absolute deviations (ignoring signs)?",
    options: ["Standard deviation", "Median", "Mode", "Mean"],
    answer: 1,
    explanation: "The median minimizes the sum of absolute deviations."
  },
  {
    q: "What is the weighted mean used for?",
    options: ["To calculate ranges", "When different data values carry differing degrees of importance or frequency weights", "To find medians", "When all values have identical weight"],
    answer: 1,
    explanation: "Weighted means assign specific importance weights to individual values."
  },
  {
    q: "What is the empirical relationship established by Karl Pearson connecting mean, median, and mode in moderately skewed distributions?",
    options: ["Mode equals Mean plus Median", "Median equals Mean times Mode", "Mean equals Median", "Mean minus Mode equals 3 times (Mean minus Median)"],
    answer: 3,
    explanation: "Pearson's empirical skewness relation states Mode = Mean - 3(Mean - Median)."
  },
  {
    q: "How do you find the median position in an ordered dataset of N observations?",
    options: ["N squared", "(N + 1) / 2 position", "2N", "N / 4"],
    answer: 1,
    explanation: "The median position is given by the (N + 1) / 2 term."
  },
  {
    q: "What is the class interval containing the median in a grouped frequency distribution called?",
    options: ["Standard class", "Frequency class", "Median class", "Modal class"],
    answer: 2,
    explanation: "The median class is the interval containing the cumulative frequency reaching N/2."
  },
  {
    q: "What is the modal class in a grouped frequency distribution?",
    options: ["The class with lowest frequency", "The first class", "The median class", "The class interval with the highest frequency"],
    answer: 3,
    explanation: "The modal class holds the maximum frequency count."
  },
  {
    q: "What is the primary limitation of the mode?",
    options: ["It may not exist, or there may be multiple modes in a dataset", "It uses every data point", "It requires all numbers to be positive", "It is too easy to calculate"],
    answer: 0,
    explanation: "Datasets can lack a mode entirely or have multiple modes, making it unstable."
  },
  {
    q: "What is the variance of a dataset?",
    options: ["The maximum minus minimum", "The average of the squared deviations from the arithmetic mean", "The sum of values", "The square root of the mean"],
    answer: 1,
    explanation: "Variance measures dispersion by averaging squared deviations from the mean."
  },
  {
    q: "What is the standard deviation defined as?",
    options: ["Median minus mode", "Mean divided by range", "The positive square root of the variance", "Variance squared"],
    answer: 2,
    explanation: "Standard deviation is the square root of variance, restoring original units."
  },
  {
    q: "What does a standard deviation of zero indicate about a dataset?",
    options: ["Mean is zero", "Data is infinite", "Data has extreme outliers", "All observations are identical with no variability"],
    answer: 3,
    explanation: "Zero standard deviation means every data point has the exact same value."
  },
  {
    q: "What is the coefficient of variation (CV) used for?",
    options: ["To test hypotheses", "To compare relative variability between datasets with different units or means", "To calculate medians", "To find absolute sums"],
    answer: 1,
    explanation: "CV expresses standard deviation as a percentage of the mean for comparative dispersion."
  },
  {
    q: "How is the coefficient of variation calculated?",
    options: ["Variance times mean", "Range over median", "(Standard deviation / Mean) times 100 percent", "Mean divided by standard deviation"],
    answer: 2,
    explanation: "CV formula is (s / mean) * 100%."
  },
  {
    q: "What is a parameter in statistics?",
    options: ["A numerical characteristic calculated from a population", "A graphical chart", "A table row", "A measure calculated from a sample"],
    answer: 0,
    explanation: "Parameters describe whole populations, whereas statistics describe samples."
  },
  {
    q: "What is a statistic?",
    options: ["A chart legend", "A numerical characteristic calculated from a sample", "A matrix formula", "A population constant"],
    answer: 1,
    explanation: "Statistics are numerical summaries computed from sample data."
  },
  {
    q: "What is the mean of the first n natural numbers?",
    options: ["2n", "n squared", "(n + 1) / 2", "n / 2"],
    answer: 2,
    explanation: "Sum is n(n+1)/2, divided by n gives (n + 1) / 2."
  },
  {
    q: "Which measure of location is most affected by extreme values (outliers)?",
    options: ["Mode", "Interquartile range", "Median", "Arithmetic mean"],
    answer: 3,
    explanation: "The arithmetic mean pulls toward extreme outlier values."
  },
  {
    q: "What is the property of linear transformation for the arithmetic mean: if y = ax + b, what is the mean of y?",
    options: ["mean of x plus b", "a times (mean of x) plus b", "b times mean", "a times mean of x"],
    answer: 1,
    explanation: "Linear scaling applies directly: mean of y = a(mean of x) + b."
  },
  {
    q: "What is the effect of adding a constant c to every observation in a dataset on its standard deviation?",
    options: ["Standard deviation becomes zero", "Standard deviation increases by c", "Standard deviation remains completely unchanged", "Standard deviation is multiplied by c"],
    answer: 2,
    explanation: "Shifting data by a constant shifts the mean but leaves spread and standard deviation unchanged."
  },
  {
    q: "What is the effect of multiplying every observation in a dataset by a positive constant k on its standard deviation?",
    options: ["Standard deviation is divided by k", "Standard deviation is unchanged", "Standard deviation increases by k squared", "Standard deviation is multiplied by k"],
    answer: 3,
    explanation: "Scaling data by k scales the standard deviation by k."
  },
  {
    q: "What is the interquartile range robust against?",
    options: ["Sample size changes", "Outliers and extreme values", "Zero values", "Normal distributions"],
    answer: 1,
    explanation: "Because IQR focuses on the middle 50%, extreme outliers do not affect it."
  },
  {
    q: "What is the 50th percentile always equal to?",
    options: ["The mode", "The range", "The median", "The mean"],
    answer: 2,
    explanation: "The 50th percentile cuts the distribution in half, which is the definition of the median."
  },
  {
    q: "Which average is best suited for averaging ratios or rates like kilometers per hour?",
    options: ["Median", "Mode", "Arithmetic mean", "Harmonic mean"],
    answer: 3,
    explanation: "Harmonic mean is mathematically correct for averaging rates and speeds."
  },
  {
    q: "What is root mean square (RMS) used for?",
    options: ["Counting frequencies", "Measuring magnitude of varying quantities like alternating electrical current", "Finding simple sums", "Calculating modes"],
    answer: 1,
    explanation: "RMS calculates effective magnitudes for fluctuating values."
  },
  {
    q: "What does a high standard deviation indicate about a dataset?",
    options: ["The mean is zero", "All values are equal", "Data values are widely spread out from the mean", "Data values are tightly clustered around the mean"],
    answer: 2,
    explanation: "High standard deviation denotes high dispersion and variability."
  },
  {
    q: "What does a low standard deviation indicate?",
    options: ["Extreme outliers", "No data exists", "High spread", "Data values are closely clustered around the mean"],
    answer: 3,
    explanation: "Low standard deviation means data points lie close to the central mean."
  },
  {
    q: "In grouped data, how is the arithmetic mean estimated?",
    options: ["Frequency times range", "Sum of (midpoint times frequency) divided by total frequency", "Maximum minus minimum", "Sum of limits divided by 2"],
    answer: 1,
    explanation: "Grouped mean formula is sum(f * x) / sum(f) where x is class midpoint."
  },
  {
    q: "Why do we square deviations when calculating variance?",
    options: ["To find the median", "To eliminate fractions", "To prevent positive and negative deviations from canceling each other out", "To make numbers smaller"],
    answer: 2,
    explanation: "Squaring positive and negative differences ensures they accumulate correctly instead of canceling."
  },
  {
    q: "What is the primary objective of exploratory data analysis using measures of location and dispersion?",
    options: ["To replace graphs", "To hide missing values", "To complicate reports", "To understand core data characteristics, central tendencies, and spread quickly and effectively"],
    answer: 3,
    explanation: "Measures of location and dispersion provide rapid mathematical summaries of data behavior."
  }
        ]
      },
      {
        id: "sta111-dispersion",
        week: "New Lecture",
        title: "Measures of Dispersion",
        pdfPath: "STA111_Measures_of_Dispersion.pdf",
        summary: [
          "Covers measures of spread such as range, mean deviation, variance, and standard deviation.",
          "Includes dispersion for individual and grouped data."
        ],
        questions: [
  {
    q: "What does a measure of dispersion quantify in a statistical dataset?",
    options: ["The exact middle value of an ordered list", "The most frequently occurring observation", "How spread out or scattered data points are around a central point", "The total sum of all observations"],
    answer: 2,
    explanation: "Measures of dispersion quantify how spread out or scattered data points are around a central point[cite: 17]."
  },
  {
    q: "Which of the following are common examples of measures of dispersion?",
    options: ["Mean, median, and mode", "Range, mean deviation, variance, and standard deviation", "Quartiles, deciles, and percentiles", "Pie charts, histograms, and ogives"],
    answer: 1,
    explanation: "Common examples of measures of dispersion include range, mean deviation, variance, and standard deviation[cite: 17]."
  },
  {
    q: "Why are measures of dispersion important when analyzing a dataset?",
    options: ["They replace the need for collecting data", "They determine whether a central value like mean or median is a reliable representation of the data", "They always equal zero", "They eliminate all outliers automatically"],
    answer: 1,
    explanation: "Measures of dispersion help determine if a central value is a reliable representation of the dataset[cite: 17]."
  },
  {
    q: "What does a low value of dispersion indicate about a dataset?",
    options: ["Data points are widely scattered", "Data points are closely clustered around the central value", "The mean is negative", "There are no observations"],
    answer: 1,
    explanation: "A low dispersion means data is clustered tightly around the central point[cite: 17]."
  },
  {
    q: "What does a high value of dispersion show regarding data distribution?",
    options: ["All values are identical", "Wide scattering of data points", "Zero variance", "Tight clustering around the median"],
    answer: 1,
    explanation: "High dispersion shows wide scattering across the dataset[cite: 17]."
  },
  {
    q: "How is mean deviation defined in descriptive statistics?",
    options: ["The mean of the absolute distances between each value and the mean", "The square root of the variance", "The highest value minus the lowest value", "The sum of squared deviations"],
    answer: 0,
    explanation: "Mean deviation is the mean of the absolute distances between each value and the mean[cite: 17]."
  },
  {
    q: "What is the formula for calculating the mean deviation of ungrouped data?",
    options: ["Sum of squared differences divided by n minus 1", "Sum of absolute differences between each value and the mean divided by n", "Maximum value minus minimum value", "Square root of total frequency"],
    answer: 1,
    explanation: "Mean deviation for ungrouped data equals the sum of absolute deviations from the mean divided by n[cite: 17]."
  },
  {
    q: "For the sample dataset 5, 7, 11, and 13, what is the calculated sample mean?",
    options: ["8", "10", "36", "9"],
    answer: 3,
    explanation: "Summing 5, 7, 11, and 13 gives 36, and dividing by 4 gives a mean of 9[cite: 17]."
  },
  {
    q: "For the sample dataset 5, 7, 11, and 13 with a mean of 9, what is the sum of the absolute deviations?",
    options: ["0", "12", "16", "36"],
    answer: 1,
    explanation: "The absolute deviations are 4, 2, 2, and 4, which sum to 12[cite: 17]."
  },
  {
    q: "What is the final mean deviation for the ungrouped sample dataset 5, 7, 11, and 13?",
    options: ["3", "2", "4", "12"],
    answer: 0,
    explanation: "Dividing the sum of absolute deviations 12 by sample size 4 gives a mean deviation of 3[cite: 18]."
  },
  {
    q: "In the grouped data mean deviation formula, what does the symbol Xm represent?",
    options: ["The total frequency", "The midpoint of the mth class interval", "The sample size", "The population variance"],
    answer: 1,
    explanation: "Xm represents the midpoint of the mth class interval[cite: 18]."
  },
  {
    q: "In the grouped data mean deviation formula, what does Fm denote?",
    options: ["The midpoint of the class", "The frequency of the mth class", "The overall mean", "The standard deviation"],
    answer: 1,
    explanation: "Fm represents the frequency of the mth class[cite: 18]."
  },
  {
    q: "In the STA 112 grouped exam scores example with total frequency 46 and sum of Fm times Xm equal to 3357, what is the approximate grouped mean?",
    options: ["73", "46", "84.5", "10.13"],
    answer: 0,
    explanation: "Dividing 3357 by 46 gives 72.978, which rounds to approximately 73[cite: 18]."
  },
  {
    q: "What is the final calculated mean deviation for the STA 112 grouped exam scores example?",
    options: ["72.98", "466", "46", "10.1304"],
    answer: 3,
    explanation: "Dividing 466 by 46 gives a grouped mean deviation of 10.1304[cite: 19]."
  },
  {
    q: "What symbol is standardly used to denote sample standard deviation?",
    options: ["sigma", "s", "mu", "N"],
    answer: 1,
    explanation: "Sample standard deviation is denoted by the lowercase letter s[cite: 19]."
  },
  {
    q: "What symbol denotes population variance?",
    options: ["sigma squared", "s squared", "s", "mu"],
    answer: 0,
    explanation: "Population variance is denoted by sigma squared[cite: 19]."
  },
  {
    q: "What symbol denotes sample variance?",
    options: ["sigma squared", "mu squared", "N minus 1", "s squared"],
    answer: 3,
    explanation: "Sample variance is denoted by s squared[cite: 19]."
  },
  {
    q: "How is variance mathematically related to standard deviation?",
    options: ["Variance is the square root of standard deviation", "Variance is found by squaring the standard deviation", "Variance is half of standard deviation", "Variance equals standard deviation plus mean"],
    answer: 1,
    explanation: "Variance can be found by squaring the standard deviation[cite: 19]."
  },
  {
    q: "What does a lower value of standard deviation indicate about a dataset?",
    options: ["Values are spread over a relatively smaller range closely around the mean", "Values are widely scattered far from the mean", "The sample size is very large", "The mean is zero"],
    answer: 0,
    explanation: "A lower standard deviation indicates values are spread over a relatively smaller range around the mean[cite: 19]."
  },
  {
    q: "In the population variance formula for ungrouped data, what denominator is used?",
    options: ["N", "n minus 1", "N plus 1", "2N"],
    answer: 0,
    explanation: "Population variance divides the sum of squared deviations by the population size N[cite: 19]."
  },
  {
    q: "In the sample variance formula for ungrouped data, what denominator is used?",
    options: ["n minus 1", "n", "n plus 1", "N squared"],
    answer: 0,
    explanation: "Sample variance divides the sum of squared deviations by n minus 1[cite: 19]."
  },
  {
    q: "What does the Greek letter mu represent in the population variance formula?",
    options: ["Sample size", "Sample standard deviation", "Class midpoint", "Population mean"],
    answer: 3,
    explanation: "In population formulas, mu represents the population mean[cite: 19]."
  },
  {
    q: "Find the population mean for the dataset: 20, 30, 15, 20, 25, and 10.",
    options: ["20", "15", "25", "120"],
    answer: 0,
    explanation: "Summing the 6 values gives 120, and dividing 120 by 6 yields a mean of 20[cite: 20]."
  },
  {
    q: "For the dataset 20, 30, 15, 20, 25, and 10 with mean 20, what is the sum of the squared deviations?",
    options: ["100", "250", "41.66", "6.5"],
    answer: 1,
    explanation: "The squared deviations are 0, 100, 25, 0, 25, and 100, which sum to 250[cite: 20]."
  },
  {
    q: "What is the population variance for the dataset 20, 30, 15, 20, 25, and 10?",
    options: ["6.5", "250", "41.66", "20"],
    answer: 2,
    explanation: "Dividing the sum of squared deviations 250 by N equals 6 gives 41.66[cite: 20]."
  },
  {
    q: "What is the population standard deviation for the dataset 20, 30, 15, 20, 25, and 10?",
    options: ["41.66", "6.5", "20", "5"],
    answer: 1,
    explanation: "Taking the square root of variance 41.66 yields a standard deviation of 6.5[cite: 20]."
  },
  {
    q: "Calculate the sample mean for the dataset: 3, 5, 7, 9, and 11.",
    options: ["5", "9", "7", "35"],
    answer: 2,
    explanation: "Summing 3, 5, 7, 9, and 11 gives 35, and dividing by 5 yields a sample mean of 7[cite: 20]."
  },
  {
    q: "For the sample dataset 3, 5, 7, 9, and 11 with mean 7, what is the total sum of squared deviations?",
    options: ["10", "20", "3.2", "40"],
    answer: 3,
    explanation: "The squared deviations are 16, 4, 0, 4, and 16, totaling 40[cite: 21]."
  },
  {
    q: "What is the sample variance for the dataset 3, 5, 7, 9, and 11?",
    options: ["10", "8", "3.2", "40"],
    answer: 0,
    explanation: "Dividing 40 by n minus 1 which is 5 minus 1 equals 4 gives a sample variance of 10[cite: 21]."
  },
  {
    q: "What is the sample standard deviation for the dataset 3, 5, 7, 9, and 11?",
    options: ["10", "4", "7", "3.2"],
    answer: 3,
    explanation: "Taking the square root of sample variance 10 gives approximately 3.2[cite: 21]."
  },
  {
    q: "In the grouped frequency distribution sample example with classes from 5 to 34, what is the total frequency?",
    options: ["20", "18.5", "370", "19"],
    answer: 0,
    explanation: "Adding the class frequencies 2, 4, 7, 3, 1, and 3 gives a total frequency of 20[cite: 22]."
  },
  {
    q: "What is the midpoint of the class interval 5 to 9 in the grouped sample example?",
    options: ["5", "9", "14", "7"],
    answer: 3,
    explanation: "The midpoint of 5 to 9 is 5 plus 9 divided by 2, which equals 7[cite: 22]."
  },
  {
    q: "What is the midpoint of the class interval 15 to 19 in the grouped sample example?",
    options: ["17", "15", "19", "119"],
    answer: 0,
    explanation: "The midpoint of 15 to 19 is 15 plus 19 divided by 2, which equals 17[cite: 22]."
  },
  {
    q: "In the grouped sample example where sum of Fm times Xm is 370 and total frequency is 20, what is the sample mean?",
    options: ["18.5", "20", "19", "58.16"],
    answer: 0,
    explanation: "Dividing 370 by 20 yields a grouped sample mean of 18.5[cite: 22]."
  },
  {
    q: "In the grouped sample example where sum of Fm times squared deviation is 1105 and total frequency is 20, what denominator is used to find sample variance?",
    options: ["20", "19", "21", "18.5"],
    answer: 1,
    explanation: "For sample variance, the denominator is total frequency minus 1, which is 20 minus 1 equals 19[cite: 22]."
  },
  {
    q: "What is the calculated sample variance in the grouped frequency distribution example?",
    options: ["7.6261", "58.1579", "1105", "18.5"],
    answer: 1,
    explanation: "Dividing 1105 by 19 yields a sample variance of 58.1579[cite: 22]."
  },
  {
    q: "What is the final sample standard deviation in the grouped frequency distribution example?",
    options: ["58.1579", "18.5", "7.6261", "19"],
    answer: 2,
    explanation: "Taking the square root of 58.1579 gives a standard deviation of 7.6261[cite: 22]."
  },
  {
    q: "Why do we take absolute values when calculating mean deviation?",
    options: ["To make the calculation faster", "To convert sample data into population data", "To eliminate the mean from the formula", "So positive and negative deviations from the mean do not cancel each other out"],
    answer: 3,
    explanation: "Using absolute values ensures distances from the mean are positive and do not sum to zero[cite: 17]."
  },
  {
    q: "If a dataset has no variation at all because every number is identical, what will its mean deviation, variance, and standard deviation be?",
    options: ["1", "Equal to the mean", "0", "Undefined"],
    answer: 2,
    explanation: "When all values equal the mean, all deviations are zero, resulting in zero dispersion[cite: 17]."
  },
  {
    q: "Which measure of dispersion uses the exact same units of measurement as the original dataset?",
    options: ["Variance", "Standard deviation", "Squared deviation", "Sample size"],
    answer: 1,
    explanation: "Standard deviation is the square root of variance, bringing the dispersion metric back to the original units[cite: 19]."
  },
  {
    q: "What is the first step when finding the mean deviation of an ungrouped sample dataset?",
    options: ["Square every observation", "Subtract 1 from the sample size", "Find the sample mean", "Identify the largest observation"],
    answer: 2,
    explanation: "Step 1 in finding mean deviation is calculating the sample mean[cite: 17]."
  },
  {
    q: "In grouped data calculations for variance, each squared class deviation is multiplied by which value before summing?",
    options: ["The class width", "The lower class limit", "The class frequency Fm", "The population size N"],
    answer: 2,
    explanation: "Each squared deviation from the mean is weighted by its class frequency Fm[cite: 21]."
  },
  {
    q: "Which formula represents the population standard deviation for grouped data?",
    options: ["Square root of sum of Fm times squared deviation divided by n minus 1", "Sum of Fm times Xm divided by N", "Square root of sum of Fm times squared deviation divided by N", "Sum of absolute deviations divided by N"],
    answer: 2,
    explanation: "Population standard deviation for grouped data divides the weighted sum of squared deviations by N before taking the square root[cite: 21]."
  },
  {
    q: "What is the midpoint of the class interval 40 to 49 in the STA 112 exam scores table?",
    options: ["44.5", "40", "49", "89"],
    answer: 0,
    explanation: "The midpoint of 40 to 49 is 40 plus 49 divided by 2, which equals 44.5[cite: 18]."
  },
  {
    q: "In the STA 112 exam scores table, which class interval had the highest frequency of 15 students?",
    options: ["70 to 79", "60 to 69", "80 to 89", "50 to 59"],
    answer: 0,
    explanation: "The class interval 70 to 79 recorded the highest frequency of 15[cite: 18]."
  },
  {
    q: "When calculating deviations for the dataset 3, 5, 7, 9, and 11 with a mean of 7, what is the deviation for the value 3?",
    options: ["4", "0", "16", "negative 4"],
    answer: 3,
    explanation: "Subtracting the mean 7 from 3 gives 3 minus 7 equals negative 4[cite: 21]."
  },
  {
    q: "When squaring the deviation negative 11.5 for the class interval 5 to 9 in the grouped sample example, what value is obtained?",
    options: ["264.5", "14", "23", "132.25"],
    answer: 3,
    explanation: "Squaring negative 11.5 gives 132.25, which is then multiplied by frequency 2 to get 264.5[cite: 22]."
  },
  {
    q: "What is the alternative term used in descriptive statistics for measures of dispersion?",
    options: ["Measures of central tendency", "Measures of position", "Measures of variation", "Measures of symmetry"],
    answer: 2,
    explanation: "Measures of dispersion are also referred to as measures of variation[cite: 17]."
  },
  {
    q: "If the sample variance of a dataset is 64, what is the sample standard deviation?",
    options: ["32", "8", "4096", "16"],
    answer: 1,
    explanation: "Since standard deviation is the positive square root of variance, the square root of 64 is 8[cite: 19]."
  },
  {
    q: "If the population standard deviation of a dataset is 5, what is the population variance?",
    options: ["25", "2.24", "10", "50"],
    answer: 0,
    explanation: "Variance is obtained by squaring the standard deviation, so 5 squared equals 25[cite: 19]."
  }
]
      }
    ]
  },
  {
    code: "GST 101",
    title: "General Studies & Orientation",
    description: "Departmental orientation guidelines and safety requirements.",
    topics: [
      {
        id: "gmt101-safety",
        week: "Orientation",
        title: "WE HV NOT YET DONE GST",
        pdfPath: "pdfs/GMT101_Orientation_Notes.pdf",
        summary: ["GST will be done on our portal."],
        questions: []
      }
    ]
  }
    ]
