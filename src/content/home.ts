import type { PageContent } from './types'

export const home: PageContent = {
  meta: {
    route: '/',
    title: 'The Sharika SpinTech Solution',
    subtitle: 'Integrated SCADA · ADMS · OMS platform for power distribution networks',
    navLabel: 'Overview',
    demoLabel: 'the Sharika SpinTech platform',
  },
  blocks: [
    { kind: 'heading', level: 2, text: 'Introduction & Product Overview' },

    { kind: 'heading', level: 3, number: '1.1', text: 'Background and Purpose' },
    {
      kind: 'paragraph',
      text: 'Following the completion of the technical and commercial evaluation process and the formalization of the contract for the implementation of the SCADA/DMS/OMS solution under the RDSS Program of Uttarakhand Power Corporation Limited (UPCL), this Functional Design Document (FDD) presents the functional architecture, the main components of the solution, their operational functionalities, and the integration requirements that make up the proposed platform.',
    },
    {
      kind: 'paragraph',
      text: 'The proposed solution consists of an integrated ADMS (Advanced Distribution Management System) platform, developed to provide supervision, control, analysis, automation, and operational management of electrical distribution networks. The architecture is composed of the following main modules:',
    },
    {
      kind: 'list',
      items: [
        'SpinTech SCADA: Supervisory Control and Data Acquisition System responsible for real-time monitoring and control of the electrical network. The platform operates on a distributed, redundant architecture, with support for multiple communication protocols, advanced alarm and event management, an operational data historian, automation features, an advanced graphical interface, and access via operator workstations, web clients, and mobile devices.',
        'SpinTech DMS (Distribution Management System): a distribution management system that uses the electrical and topological network model to support real-time operation and operational planning. Its main functionalities include: network topological processing; state and load estimation; real-time and simulation mode load flow; network contingency analysis; Volt/VAR Control (VVC); demand forecasting; Fault Location, Isolation and Service Restoration (FLISR); load transfer and balancing; operational simulation and scenario analysis.',
        'SpinTech OMS (Outage Management System): responsible for monitoring, recording, and managing occurrences in the electrical network, enabling the identification of affected areas, fault location, event tracking, consumer call management, dispatching, and monitoring of field crews, as well as the automatic calculation of service continuity and quality indicators.',
        'SpinTech DTS (Dispatcher Training Simulator): operational training simulator designed for the training of operators and dispatchers. The module reproduces the network’s electrical and operational behaviour in a safe environment, enabling training scenarios, operational studies, and contingency simulations without affecting real system operation.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'In addition to the core ADMS modules, the solution includes complementary components responsible for field data integration and acquisition:',
    },
    {
      kind: 'list',
      items: [
        'SpinTech Edge: data acquisition and operational integration platform responsible for establishing secure and reliable communication between the ADMS environment and field devices, substations, and external systems. SpinTech Edge performs Front-End Processor (FEP) functions, concentrating on real-time data collection, communication protocol processing, information conversion and normalization, communications management, and data distribution to the SCADA, DMS, and OMS modules.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Together, these components form an integrated platform capable of providing real-time operational visibility, advanced decision-making support, automation of operational processes, improved continuity indicators, and increased efficiency in managing electrical distribution networks.',
    },

    { kind: 'heading', level: 3, number: '1.2', text: 'Product Overview' },
    {
      kind: 'paragraph',
      text: 'The SpinTech ADMS solution comprises an integrated set of specialized modules that operate in coordination to provide supervision, control, analysis, optimization, and operational management of electrical distribution systems. This integrated architecture enables operational information, network events, equipment data, and performance indicators to be shared in real time across the platform’s components, providing a unified and consistent view of operations.',
    },
    {
      kind: 'paragraph',
      text: 'Each module performs specific and complementary functions, ranging from field data acquisition and real-time control of the electrical network to advanced system analysis, outage management, operational training, and integration with devices and corporate systems. The combined action of these modules enables greater operational reliability, reduced contingency response times, improved service quality indicators, optimization of network resources, and support for operator decision-making.',
    },
    {
      kind: 'paragraph',
      text: 'The following sections present the main modules that make up the ADMS solution, highlighting their functionalities, applications, and benefits for the modern operation of electrical distribution systems.',
    },
    {
      kind: 'figure',
      src: 'arquitetura-solucao-adms.png',
      alt: 'Sharika SpinTech ADMS system architecture',
      caption: 'Sharika SpinTech ADMS system architecture',
    },

    { kind: 'heading', level: 4, number: '1.2.1', text: 'SpinTech SCADA' },
    {
      kind: 'paragraph',
      text: 'The SCADA (Supervisory Control and Data Acquisition) module constitutes the operational foundation of the SpinTech ADMS solution, being responsible for real-time data acquisition, electrical network supervision, event processing, historical storage, and execution of remote commands on field equipment. The system was designed with a modular and redundant architecture, operating in a 64-bit environment, with high availability and support for multiple communication protocols used in power distribution systems.',
    },
    {
      kind: 'paragraph',
      text: 'The platform continuously acquires information from the SpinTech Edge using a proprietary protocol, collecting analog quantities, digital states, alarms, and sequence-of-events (SOE) records. Among the monitored data are active and reactive power, per-phase voltage and current, power factor, imported and exported energy, transformer oil and winding temperatures, TAP position, and other operational network variables.',
    },
    {
      kind: 'paragraph',
      text: 'The system incorporates advanced data processing and validation functions, including conversion to engineering units, operational limit monitoring, telemetry fault detection, consistency checks on received values, rate-of-change calculation, and information quality code management. These features ensure that operators have access to reliable data for operational decision-making.',
    },
    {
      kind: 'paragraph',
      text: 'In the scope of supervision and control, the SCADA enables the safe execution of remote commands. Supported operations include opening and closing of circuit breakers, reclosers, disconnectors, and capacitor banks, as well as TAP raise/lower commands and setpoint transmission to intelligent devices. The system features interlocking mechanisms, operational blocking, permission verification, and a complete audit trail for all actions performed by operators.',
    },
    {
      kind: 'paragraph',
      text: 'The human-machine interface (HMI) provides substation single-line diagrams, alarm and event panels, historical trends, operational dashboards, and configurable reports. The environment supports local, web, and mobile clients, allowing secure access to operational information from different levels of the organization.',
    },
    {
      kind: 'paragraph',
      text: 'Complementing real-time operational functions, the SCADA maintains a data and event historian that continuously stores analog measurements, digital states, alarms, and SOE records in a relational database. This information is used for operational analyses, incident investigation, report generation, and indicator calculation.',
    },
    {
      kind: 'paragraph',
      text: 'In this way, the SCADA module provides a complete, real-time view of the electrical system, enabling continuous monitoring, secure remote control, detailed historical recording, and integration with advanced distribution management applications, forming the operational foundation of the entire ADMS environment.',
    },

    { kind: 'heading', level: 4, number: '1.2.2', text: 'SpinTech DMS' },
    {
      kind: 'paragraph',
      text: 'The DMS (Distribution Management System) module of the SpinTech ADMS platform is responsible for analytical supervision, electrical modelling, operational optimization, and decision-making support in distribution networks. Integrated with the Edge (FEP), SCADA, OMS, and GIS modules, the DMS uses real-time information, historical data, and electrical network models to provide a complete operational view of the electrical system, enabling operators to keep the network operating safely, efficiently, and with high reliability levels.',
    },
    {
      kind: 'paragraph',
      text: 'The system maintains a detailed topological and electrical network model that covers substations, feeders, transformers, switching devices, consumers, and distributed energy resources. Through the Topological Processor, the DMS automatically identifies network connectivity and, in real time, recalculates the operational state after any change to switches, circuit breakers, or reclosers, serving as the basis for all analytical applications in the system.',
    },
    {
      kind: 'paragraph',
      text: 'Among its main functionalities are Load Flow studies, which allow calculation of voltages, currents, loadings, and power flows throughout the network, assisting in identifying overloads, technical losses, and operational limit violations. The module also offers State Estimation and Load Estimation capabilities, enabling reconstruction of the network’s electrical behaviour even in areas without complete telemetry, using SCADA measurements, historical data, load curves, and intelligent algorithms to improve the accuracy of operational calculations.',
    },
    {
      kind: 'paragraph',
      text: 'The DMS also provides advanced applications for contingency analysis, short-circuit calculation, protection coordination, Volt/VAR control, capacitor bank control, voltage regulators, and On-Load Tap-Changing transformers (OLTC), enabling the reduction of technical losses, improvement of voltage profiles, and increased operational reliability of the system.',
    },
    {
      kind: 'paragraph',
      text: 'For operational planning, the system incorporates demand forecasting tools that use historical data and predictive models to anticipate future load behaviour and support decisions on dispatching, load transfer, and network expansion. Complementarily, the operational simulation mode enables operators to evaluate hypothetical scenarios, planned switching operations, and contingency conditions without affecting real operations, thereby reducing risks and increasing operational safety.',
    },
    {
      kind: 'paragraph',
      text: 'One of the most important features of the DMS is the FLISR (Fault Location, Isolation and Service Restoration) functionality, which automatically identifies the probable fault location, determines the switching operations required to isolate the faulty section, and proposes or executes supply restoration strategies through load transfer between feeders. This feature significantly reduces the number of affected consumers and the outage duration, directly improving continuity indicators such as SAIDI and SAIFI.',
    },
    {
      kind: 'paragraph',
      text: 'Beyond remotely controlled networks, the DMS also supports modelling and analysis of partially automated or non-remotely controlled networks, enabling load estimation in distribution transformers, probable fault location, circuit balancing, optimal network reconfiguration, and analysis of technical and non-technical losses.',
    },
    {
      kind: 'paragraph',
      text: 'In this way, the DMS module constitutes the analytical core of the ADMS platform, transforming operational data into actionable information for operation optimization, increased electrical system reliability, loss reduction, and continuous improvement of the quality of service provided to consumers.',
    },

    { kind: 'heading', level: 4, number: '1.2.3', text: 'SpinTech OMS' },
    {
      kind: 'paragraph',
      text: 'The OMS (Outage Management System) module of the SpinTech ADMS platform is responsible for the operational management of outages in the electrical distribution system, providing the Operations Centre with an integrated, real-time view of events that affect the continuity of power supply. The system serves as the primary tool for identifying, recording, analyzing, tracking, and restoring occurrences in the electrical network, integrating information from the Edge (FEP), SCADA, GIS, customer service, and field crews.',
    },
    {
      kind: 'paragraph',
      text: 'The OMS continuously monitors switching operations performed on the network, whether performed remotely via SCADA or manually recorded by operators for non-remotely controlled elements. Based on this information, the system automatically processes network topology, identifies energized and de-energized areas, determines affected customers, and records outage-related events.',
    },
    {
      kind: 'paragraph',
      text: 'One of the most important functionalities of the OMS is the intelligent management of events and incidents, enabling the automatic creation of predictive events from consumer calls or the actuation of SCADA-monitored devices. Using network electrical connectivity, the system identifies the probable fault location, assists operators in decision-making, and significantly reduces the time required to locate and restore power.',
    },
    {
      kind: 'paragraph',
      text: 'The system also incorporates Trouble Call System (TCS) functionalities, enabling the management of consumer calls, automatic correlation of received complaints, and identification of the common outage point. Integration with commercial systems allows service representatives to view detailed consumer information, including associated transformers, supply circuits, and service status, enabling faster, more accurate responses to network users.',
    },
    {
      kind: 'paragraph',
      text: 'For maintenance crew management, the OMS provides resources for crew management, work orders, and AVL (Automatic Vehicle Location), enabling real-time tracking of field crew locations, task assignment, response time monitoring, and optimization of operational resource dispatch to incident locations.',
    },
    {
      kind: 'paragraph',
      text: 'The module automatically records the frequency and duration of outages, maintaining a complete history of events and affected consumers. Based on this information, it calculates regulatory and operational service quality indicators such as SAIDI and SAIFI, providing inputs for management analyses, regulatory reports, and electrical system reliability improvement programs.',
    },
    {
      kind: 'paragraph',
      text: 'In addition to real-time operation, the OMS features an advanced simulation mode that enables pre-assessment of planned switching operations, maintenance shutdowns, and system restoration strategies. During simulation, the operator can analyse the expected impacts on consumers and continuity indicators, ensuring that planned interventions are carried out with the least possible impact on the power supply.',
    },

    { kind: 'heading', level: 4, number: '1.2.4', text: 'SpinTech DTS' },
    {
      kind: 'paragraph',
      text: 'The DTS (Dispatcher Training Simulator) is the advanced training module for SCADA/DMS/OMS system operators, designed to reproduce with a high degree of realism the behaviour of the electrical network and the operations centre. Its main objective is to train operators, dispatchers, and supervisors in a completely safe environment, without affecting the real operation of the electrical system.',
    },
    {
      kind: 'paragraph',
      text: 'The simulator fully replicates the functionalities of the SCADA/DMS/OMS operational environment, allowing users to perform the same actions, commands, analyses, and procedures used daily in the control centre. The system reproduces the behaviour of the distribution network in real time, including responses to simulated events, instructor actions, and operator decisions during training.',
    },
    {
      kind: 'paragraph',
      text: 'The DTS enables the creation and execution of various operational scenarios, including normal operating conditions, network disturbances, overvoltages and undervoltages, reactive power (VAR) control problems, cascading events, islanding of parts of the system, total blackouts, and complete system restoration procedures after contingencies. It also enables simulation of interactions with the SCADA, DMS, and OMS modules, providing an integrated training experience that adheres to operational reality.',
    },
    {
      kind: 'paragraph',
      text: 'The platform supports dedicated consoles for the Instructor and Trainee (Operator in Training), allowing the instructor to configure scenarios, introduce unexpected events, pause or accelerate the simulation, monitor actions executed, and evaluate participant performance. Scenarios can be built from the current system state, historical records, or previously defined event groups, enabling customized training for different operational situations.',
    },
    {
      kind: 'figure',
      src: 'dts-telas-instrutor.png',
      alt: 'DTS instructor screens',
      caption: 'DTS instructor screens',
    },
    {
      kind: 'paragraph',
      text: 'In addition to operational training, the DTS provides advanced performance evaluation resources, automatic report generation, tracking of operational indicators, and gamification mechanisms that stimulate continuous learning. The system records all actions performed during the session, enabling detailed analysis of participants’ decision-making, response times, and operational efficiency.',
    },
    {
      kind: 'paragraph',
      text: 'In this way, the DTS constitutes a strategic tool for the development and certification of operators, reducing operational risks, improving contingency response capability, and increasing the reliability of electrical system operations through realistic training conducted in an environment completely isolated from the production network.',
    },

    { kind: 'heading', level: 4, number: '1.2.5', text: 'SpinTech Edge' },
    {
      kind: 'paragraph',
      text: 'SpinTech Edge is the module that connects the field operational environment to the SCADA/DMS/OMS ecosystem, serving as the intelligent layer for real-time data acquisition, processing, and integration. Installed at the edge of the operational network, the module concentrates communications from RTUs, FRTUs, IEDs, reclosers, disconnectors, fault indicators, and other automation devices, performing the collection, validation, processing, and secure forwarding of information to the control centre.',
    },
    {
      kind: 'paragraph',
      text: 'In addition to its data acquisition function, SpinTech Edge manages the execution of supervisory and control commands sent by the SCADA system, ensuring reliable and traceable communication between operators and field equipment. Its architecture supports redundancy and high availability, enabling continuous operation even in situations of communication failures or the unavailability of individual components.',
    },
    {
      kind: 'paragraph',
      text: 'The module offers native support for the main protocols used in the electrical sector, including IEC 60870-5-104, IEC 61850, DNP3, MODBUS, OPC UA, and ICCP/TASE.2, enabling seamless integration of equipment and systems from different manufacturers. Additionally, it provides interfaces for integration with corporate systems, GIS, commercial management platforms, billing, external operations centres, and regulatory applications through REST APIs, ODBC, and other standardized data exchange mechanisms.',
    },
    {
      kind: 'paragraph',
      text: 'SpinTech Edge also incorporates advanced cybersecurity features, including encrypted communication, device authentication, segregation between operational and corporate networks, access control, and event auditing. In this way, the module establishes a robust and secure infrastructure for the transport of operational information, ensuring low latency, high reliability and interoperability among all elements of the SpinTech ADMS platform.',
    },

    { kind: 'heading', level: 3, number: '1.3', text: 'Applicable Project Scope' },
    {
      kind: 'table',
      headers: ['Town', 'Group', 'Approx. 33/11 kV S/S'],
      rows: [
        ['Dehradun', 'A (SCADA/DMS/OMS)', '32'],
        ['Haridwar', 'A (SCADA/DMS/OMS)', '16'],
        ['Rishikesh', 'A (SCADA/DMS/OMS)', '10'],
      ],
    },

    { kind: 'heading', level: 2, text: 'System Architecture' },

    { kind: 'heading', level: 3, number: '2.1', text: 'Overall Architecture' },
    {
      kind: 'paragraph',
      text: 'The SCADA/DMS/OMS solution proposed for Dehradun, Haridwar, and Rishikesh is based on a centralized, modular architecture comprising three main layers: Field Level, Communication Layer, and Data Control Center (ADMS). The system operates from a single Control Centre responsible for the supervision, control, and integrated management of the electrical network, using redundant infrastructure to ensure high availability and operational continuity.',
    },
    {
      kind: 'figure',
      src: 'arquitetura-centro-controle.png',
      alt: 'Overall system architecture of the Main Control Centre (MCC)',
      caption: 'Overall system architecture of the Main Control Centre (MCC)',
    },
    {
      kind: 'note',
      text: 'Field equipment covered: 993 FRTUs (all towns) · 39 FPIs · 10 DTMUs.',
    },

    { kind: 'heading', level: 4, number: '2.1.1', text: 'Field Level' },
    {
      kind: 'paragraph',
      text: 'The field level comprises the devices responsible for acquiring operational network data and executing commands issued by the Control Centre.',
    },
    {
      kind: 'list',
      items: [
        'RTUs (Remote Terminal Units) installed in the substations;',
        'FRTUs (Feeder Remote Terminal Units) installed in reclosers, RMUs, and sectionalisers;',
        'FPIs (Fault Passage Indicators) that are distributed across the distribution network.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'These devices provide measurements, states, alarms, and operational information used by the SCADA, DMS, and OMS applications for real-time network monitoring and analysis.',
    },

    { kind: 'heading', level: 4, number: '2.1.2', text: 'Communication Layer' },
    {
      kind: 'paragraph',
      text: 'The communication layer is responsible for concentrating, processing, and transporting information between field devices and the Control Centre.',
    },
    {
      kind: 'list',
      items: [
        '2 Redundant FEP (Front-End Processor) Servers;',
        'Communication infrastructure for data acquisition from RTUs, FRTUs, and FPIs;',
        'Integration interfaces with external systems via OPC, ICCP, ODBC, and REST API.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'The FEP servers handle communication with field equipment, manage telecommunications channels, and make data available to Control Centre applications. This layer also supports information exchange with corporate and legacy systems, as well as other external platforms.',
    },

    { kind: 'heading', level: 4, number: '2.1.3', text: 'Data Control Centre' },
    {
      kind: 'paragraph',
      text: 'The Control Centre consolidates all operational and analytical applications of the ADMS system and runs on a redundant, scalable architecture.',
    },
    {
      kind: 'list',
      items: [
        '2 SCADA Servers for real-time supervision and control;',
        '2 ISR (Information Storage and Retrieval) Servers for historical storage, events, and reports;',
        '2 DMS (Distribution Management System) Servers for advanced network analysis and operation functions;',
        '2 OMS (Outage Management System) Servers for outage management and service restoration;',
        '2 Communication Servers (integration with external agents);',
        '2 NMS (Network Management System) Servers for infrastructure monitoring and cybersecurity;',
        '2 Development Servers, containing the SCADA, DMS, OMS modules, and GIS integration;',
        'Disaster Recovery Centre (DRR), responsible for taking over operations when the main centre fails.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'This infrastructure enables the integrated execution of SCADA, DMS, and OMS functions, including real-time data acquisition, operational supervision, historical storage, electrical network analysis, outage management, operator training, and disaster recovery.',
    },

    { kind: 'heading', level: 3, number: '2.2', text: 'Redundancy and Disaster Recovery' },
    {
      kind: 'paragraph',
      text: 'The SCADA/DMS/OMS architecture was designed to ensure high operational availability and continuity of critical services, minimizing the impacts from hardware, software, or communication infrastructure failures. To achieve this, the system adopts a combined strategy of operational redundancy and disaster recovery.',
    },

    { kind: 'heading', level: 4, number: '2.2.1', text: 'Redundancy Mechanism' },
    {
      kind: 'paragraph',
      text: 'All functions considered critical are supported by redundant infrastructure, eliminating single points of failure and ensuring the continuous availability of operational applications. The architecture includes redundant servers for the SCADA, FEP, ISR, DMS, OMS, Communication, and NMS modules, ensuring that isolated failures do not compromise system operation.',
    },
    {
      kind: 'paragraph',
      text: 'The redundancy mechanism uses a Hot-Standby architecture, in which a primary server and a standby server remain continuously synchronized. In the event of the main server’s unavailability, client processes are automatically redirected to the backup server without any manual operator intervention.',
    },
    {
      kind: 'paragraph',
      text: 'In this way, operator workstations, engineering workstations, web clients, and other access interfaces continue to operate normally during the transition, significantly reducing the risk of interruption to Control Centre activities. This mechanism ensures that supervision, control, historical storage, distribution management, and outage management functions remain available even during failure events.',
    },
    {
      kind: 'paragraph',
      text: 'In addition to the operational environments, the solution provides dedicated development and training environments (DTS), isolated from real-time operations, enabling testing, updates, and operator training without impacting the production system.',
    },

    { kind: 'heading', level: 4, number: '2.2.2', text: 'Disaster Recovery Centre (DRR)' },
    {
      kind: 'paragraph',
      text: 'As an additional layer of protection, the architecture includes a Disaster Replica Recovery Centre (DRR), designed as a functional replica of the main Control Centre. The DRR maintains periodic synchronization of databases, configurations, and operational information, remaining ready to fully take over operations in situations of unavailability of the main environment.',
    },
    {
      kind: 'paragraph',
      text: 'When a critical failure occurs in the main Control Centre, field devices (including RTUs, FRTUs, and FPIs) automatically switch to reporting to the DRR, which assumes the role of master operations centre. The switchover process is carried out by synchronization and interlocking mechanisms that prevent simultaneous operations between the two control centres, preserving information integrity and operational security.',
    },
    {
      kind: 'paragraph',
      text: 'According to the solution requirements, the transition between the main Control Centre (located in Haldwani) and the DRR must occur within 15 minutes, ensuring continuity of supervision and control activities even in the event of severe unavailability. After recovery of the main environment, operational data is re-synchronized, and the architecture can return to normal operating configuration.',
    },
    {
      kind: 'paragraph',
      text: 'The combination of Hot-Standby redundancy for critical servers and a dedicated Disaster Recovery Centre provides high operational resilience, ensuring continuous availability of SCADA, DMS, and OMS functions and significantly reducing risks associated with the main infrastructure failure.',
    },
  ],
}
