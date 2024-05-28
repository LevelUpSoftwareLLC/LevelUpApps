export const getDescriptionForHeader = (header) => {
    switch (header) {
      case 'Web Development':
        return 'Leverage cutting-edge frameworks and responsive design techniques to create dynamic, user-centric websites. Our web development services ensure your online presence is powerful, scalable, and conversion-oriented.';
      case 'Full-Stack Engineering':
        return 'Experience comprehensive development solutions with our Full-Stack Engineering services. From front-end aesthetics to back-end functionality, we architect seamless experiences across all layers of your technology stack.';
      case 'E-Commerce':
        return 'Maximize online sales with bespoke E-Commerce platforms, tailored to your unique business needs. We integrate advanced shopping cart solutions, payment gateways, and product management systems to drive digital retail innovation.';
      case 'Database Deployment':
        return 'Our Database Deployment services provide robust, secure, and scalable database architectures. Employing best practices in data modeling and storage optimization, we ensure your data solutions are efficient and reliable.';
      case 'AI & Machine Learning':
        return 'Harness the power of AI & Machine Learning to unlock transformative business insights. We develop intelligent systems that improve over time, automating tasks, predicting outcomes, and personalizing user experiences.';
      case 'Prompt Engineering':
        return "Elevate your AI's performance with our Prompt Engineering expertise. We craft precise prompts to effectively communicate with AI models, optimizing for accuracy and relevancy in outputs, from content generation to complex problem-solving.";
      case 'Data-Driven BI':
        return 'Our Data-Driven Business Intelligence (BI) solutions turn your data into actionable insights. Implementing advanced analytics and visualization tools, we empower decision-makers to navigate market trends and drive business strategy.';
      case 'SaaS Development':
        return 'Develop scalable, cloud-native Software as a Service (SaaS) applications. Our SaaS Development services focus on multi-tenancy, configurability, and user experience, delivering software that grows with your customer base.';
      case 'Networking & IT':
        return 'Build a resilient IT infrastructure with our Networking and IT services. From network design and implementation to ongoing management, we ensure your IT systems are secure, scalable, and streamlined.';
      case 'Mobile App Development':
        return 'Create compelling mobile experiences with our Mobile App Development services. Focusing on intuitive design and cross-platform compatibility, we bring your mobile app vision to life, engaging users on any device.';
      case 'AWS Cloud':
        return "Accelerate your cloud journey with Amazon Web Services (AWS). Our AWS Cloud services span cloud migration, management, and optimization, leveraging AWS's breadth and depth to power your infrastructure cost-effectively.";
      case 'Large Language Model Deployment':
        return 'Implement state-of-the-art Large Language Models (LLMs) in your applications. From natural language processing to generative AI, we provide end-to-end LLM Deployment services to revolutionize how you interact with data and customers.';
      case 'High Availability Systems':
        return 'Ensure maximum uptime and reliability with our High Availability Systems solutions. Designing for redundancy and failover, our architectures minimize downtime, maintaining business continuity under any circumstances.';
      case 'Content Management Sys':
        return 'Empower your content strategy with flexible Content Management Systems (CMS). We customize and deploy CMS platforms, enabling you to create, manage, and optimize your digital content with ease and efficiency.';
      case 'Cybersecurity':
        return 'Guard your digital assets with our cutting-edge Cybersecurity solutions. From vulnerability assessments to incident response, we provide comprehensive protection against evolving cyber threats, preserving your business integrity.';
      case 'Service Level Agreements':
        return 'Our Service Level Agreements (SLAs) guarantee superior service quality and reliability. Tailored to meet your specific needs, our SLAs ensure performance metrics, availability, and support commitments are clearly defined and adhered to.';
      case 'ERP':
        return 'Streamline your business processes with our Enterprise Resource Planning (ERP) solutions. Integrating financials, supply chain, operations, and HR functions, our ERP services enhance efficiency and inform strategic decision-making.';
      case 'Kubernetes':
        return 'Embrace container orchestration with Kubernetes. We provide Kubernetes solutions to automate deployment, scaling, and operations of application containers, enabling faster software delivery and operational resiliency.';
      case 'UI/UX Design':
        return 'Craft unforgettable user experiences with our UI/UX Design services. Merging aesthetics with usability, our designs are intuitive, accessible, and engaging, ensuring users have seamless interactions with your digital products.';
      default:
        return 'Such empty 😢';
    }
  };
  