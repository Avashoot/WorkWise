const reportData = 
{
  "PQA": {
    "cons": [
      {
        "category": "Technical Skills",
        "description": "The responses focus heavily on project management and teamwork, with less emphasis on specific technical skills.  While problem-solving abilities are demonstrated, there's limited direct evidence of advanced technical expertise or proficiency in specific engineering domains."
      },
      {
        "category": "Risk Management",
        "description": "While the responses show awareness of risk, there's a tendency to favor 'calculated risks' without always detailing the thoroughness of the risk assessment process.  More detailed consideration of potential downsides and contingency plans would be beneficial."
      },
      {
        "category": "Communication",
        "description": "While communication is highlighted as a strength, the responses lack specifics on how different communication styles are used to suit different audiences or situations. The ability to tailor communication to specific stakeholders could be improved."
      },
      {
        "category": "Feedback Integration",
        "description": "The responses show a willingness to accept feedback, but there's limited detail on how feedback is actively used to improve processes or make significant changes.  More emphasis on iterative improvement based on feedback would be beneficial."
      },
      {
        "category": "Self-Reflection",
        "description": "The responses primarily focus on external factors and actions taken, with less emphasis on self-reflection and learning from mistakes.  Developing a stronger habit of self-assessment and identifying personal areas for improvement would enhance overall performance."
      }
    ],
    "pros": [
      {
        "category": "Project Management",
        "description": "Demonstrates a good understanding of project management principles.  The responses show an ability to break down large tasks into smaller, manageable ones, set deadlines, and prioritize tasks based on impact. There's also evidence of proactive risk assessment and mitigation."
      },
      {
        "category": "Teamwork & Collaboration",
        "description": "Highlights strong teamwork and collaboration skills. The responses consistently emphasize open communication, collaboration, and finding solutions that benefit both the project and team members.  The ability to mediate conflict and support stressed team members is also evident."
      },
      {
        "category": "Decision-Making",
        "description": "Shows a willingness to take calculated risks when the potential benefits outweigh the risks.  The responses demonstrate a thoughtful approach to decision-making, considering potential impacts and consulting with the team when appropriate."
      },
      {
        "category": "Adaptability & Problem-Solving",
        "description": "Displays adaptability and problem-solving skills. The responses indicate an ability to adjust to unexpected changes, setbacks, and last-minute additions while maintaining project quality and meeting deadlines.  The ability to propose alternative solutions is also noteworthy."
      },
      {
        "category": "Leadership",
        "description": "Exhibits leadership qualities, particularly in decision-making, delegation, and motivating the team.  The responses show a preference for a decisive leadership style while also valuing team input and collaboration."
      }
    ]
  },
  "TQA": {
    "cons": [
      {
        "area": "Machine Learning",
        "comment": "Shows a need for stronger practical application of ML techniques and a deeper understanding of algorithms.  The responses suggest a lack of hands-on experience.",
        "weaknesses": [
          "Incorrectly chose unsupervised learning for time-series prediction",
          "Incorrectly chose SVMs for a recommendation system (collaborative filtering would be more appropriate)",
          "Needs deeper understanding of hyperparameter tuning and backpropagation"
        ]
      },
      {
        "area": "AI Techniques",
        "comment": "Needs better understanding of which AI technique is suitable for which task.  Practical experience with these techniques is lacking.",
        "weaknesses": [
          "Incorrectly selected NLP for pedestrian identification (computer vision is correct)",
          "Incorrectly selected Expert System for nuanced language understanding (NLP is more suitable)"
        ]
      },
      {
        "area": "Software Engineering",
        "comment": "Significant gaps in understanding of software engineering principles and technologies.  More exposure to practical applications is required.",
        "weaknesses": [
          "Incorrect answers on database types, firewalls, HTTPS, REST, and cloud services demonstrate gaps in core software engineering knowledge",
          "Incorrectly identified Agile as the best methodology for finding vulnerabilities (SAST is more suitable)"
        ]
      },
      {
        "area": "Networking and Security",
        "comment": "Demonstrates a lack of understanding of fundamental networking and security concepts.  Further learning is needed in this area.",
        "weaknesses": [
          "Incorrect understanding of firewall functionality",
          "Incorrectly identified HTTP as the secure communication protocol (HTTPS is correct)",
          "Incorrectly identified a denial-of-service attack as a phishing threat"
        ]
      }
    ],
    "pros": [
      {
        "area": "Machine Learning",
        "comment": "Shows a basic understanding of core ML concepts.  However, the choice of unsupervised learning for stock price prediction and SVMs for recommendation systems show some gaps in applying the right technique to specific problems.",
        "skills": [
          "Familiar with supervised and unsupervised learning",
          "Understands concepts like regression, classification, and collaborative filtering",
          "Aware of overfitting and underfitting"
        ]
      },
      {
        "area": "AI Techniques",
        "comment": "Demonstrates awareness of different AI subfields. However, the application of these techniques needs improvement, as shown by the incorrect answer about pedestrian identification using NLP.",
        "skills": [
          "Knows about NLP, expert systems, and computer vision"
        ]
      },
      {
        "area": "Software Development",
        "comment": "Good foundational knowledge in software development practices. However, some knowledge gaps exist in specific technologies like databases and cloud services (incorrect answers).",
        "skills": [
          "Understands Agile methodology",
          "Knows about version control (Git)",
          "Familiar with Python"
        ]
      },
      {
        "area": "Data Structures and Algorithms",
        "comment": "Limited exposure shown in the quiz; needs further development.",
        "skills": [
          "Knows about PCA for high-dimensional data"
        ]
      }
    ]
  },
  "date": "2024-11-22",
  "email": "boxer123@gmail.com",
  "suggested_role": {
    "Junior Data Analyst": {
      "info": "Collects, cleans, and analyzes data to support business decisions. Creates reports and visualizations to communicate findings. Collaborates with other analysts and stakeholders.",
      "requirements": [
        "Strong analytical and problem-solving skills",
        "Proficiency in data analysis tools (e.g., Excel, SQL)",
        "Excellent communication skills"
      ]
    },
    "Junior Web Developer": {
      "info": "Develops and maintains websites and web applications. Works with front-end and/or back-end technologies.  Collaborates with designers and other developers to create user-friendly and functional websites.",
      "requirements": [
        "Familiarity with HTML, CSS, and JavaScript",
        "Understanding of web development frameworks (e.g., React, Angular)",
        "Basic understanding of databases"
      ]
    },
    "Software Engineer (Junior)": {
      "info": "Develops and maintains software applications. Works as part of a team to design, code, test, and debug software.  Contributes to the improvement of software development processes.",
      "requirements": [
        "Proficiency in at least one programming language (e.g., Python, Java)",
        "Understanding of software development principles",
        "Ability to work collaboratively in a team"
      ]
    }
  },
  "timetable": {
    "Time/days": {
      "Artificial Intelligence (AI)": [
        "Introduction to AI: 2 days",
        "AI Techniques: 3 days",
        "NLP fundamentals: 5 days",
        "Computer Vision fundamentals: 5 days",
        "Ethical considerations in AI: 1 day"
      ],
      "Big Data": [
        "Introduction to Big Data: 2 days",
        "Hadoop: 5 days",
        "Spark: 5 days",
        "Data warehousing and ETL processes: 3 days"
      ],
      "Machine Learning (ML)": [
        "Supervised Learning: 7 days",
        "Unsupervised Learning: 5 days",
        "Reinforcement Learning: 3 days",
        "Model Evaluation Metrics: 2 days",
        "Hyperparameter Tuning: 2 days",
        "Bias-Variance Tradeoff: 1 day",
        "Overfitting and Underfitting: 1 day",
        "Regularization Techniques: 2 days",
        "Collaborative Filtering: 2 days",
        "PCA: 2 days",
        "SVMs: 2 days",
        "Deep Learning: 7 days"
      ],
      "Networking and Security": [
        "Networking fundamentals: 5 days",
        "Network security: 4 days",
        "Cybersecurity threats: 2 days",
        "Cloud security: 2 days"
      ],
      "Software Engineering": [
        "Software Development Methodologies: 3 days",
        "Version Control Systems: 2 days",
        "Software Testing: 3 days",
        "SAST: 1 day",
        "REST APIs: 3 days",
        "Databases: 5 days",
        "Cloud Computing: 4 days",
        "Docker Containers: 2 days"
      ],
      "Web Development": [
        "HTML, CSS, JavaScript: 10 days",
        "Front-end framework (choose one): 14 days",
        "Back-end development (choose one): 14 days",
        "Databases: 5 days",
        "API Integration: 3 days"
      ]
    },
    "Topics": {
      "Artificial Intelligence (AI)": [
        "Introduction to AI",
        "AI Techniques (Rule-based systems, Expert systems, NLP, Computer Vision)",
        "Natural Language Processing (NLP) fundamentals",
        "Computer Vision fundamentals",
        "Ethical considerations in AI"
      ],
      "Big Data": [
        "Introduction to Big Data",
        "Hadoop",
        "Spark",
        "Data warehousing and ETL processes"
      ],
      "Machine Learning (ML)": [
        "Supervised Learning (Regression, Classification)",
        "Unsupervised Learning (Clustering, Dimensionality reduction)",
        "Reinforcement Learning",
        "Model Evaluation Metrics",
        "Hyperparameter Tuning",
        "Bias-Variance Tradeoff",
        "Overfitting and Underfitting",
        "Regularization Techniques",
        "Collaborative Filtering",
        "Principal Component Analysis (PCA)",
        "Support Vector Machines (SVMs)",
        "Deep Learning (Neural Networks, Backpropagation)"
      ],
      "Networking and Security": [
        "Networking fundamentals (TCP/IP, HTTP, HTTPS)",
        "Network security (Firewalls, Load Balancers)",
        "Cybersecurity threats (Phishing, Malware, DDoS)",
        "Cloud security"
      ],
      "Software Engineering": [
        "Software Development Methodologies (Agile, Waterfall)",
        "Version Control Systems (Git)",
        "Software Testing",
        "Static Application Security Testing (SAST)",
        "REST APIs",
        "Databases (Relational, NoSQL, Graph)",
        "Cloud Computing (IaaS, PaaS, SaaS)",
        "Docker Containers"
      ],
      "Web Development": [
        "HTML, CSS, JavaScript",
        "Front-end frameworks (React, Angular, Vue.js - choose one to start)",
        "Back-end development (Node.js, Python/Django, etc. - choose one)",
        "Databases (SQL, NoSQL)",
        "API Integration"
      ]
    },
    "email": "boxer123@gmail.com"
  }
}

export default reportData;