import type { PageContent } from './types'

export const home: PageContent = {
  meta: {
    route: '/',
    title: 'GridQ',
    subtitle: 'Integrated FEP · SCADA · DMS · OMS Platform',
    navLabel: 'Overview',
    heroImage: 'hero-home.jpg',
  },
  blocks: [
    { kind: 'heading', level: 2, text: 'GridQ: Integrated SCADA, ADMS, and OMS Platform' },
    {
      kind: 'paragraph',
      text: 'GridQ is a unified software platform, developed to provide supervision, control, analysis, automation, and complete operational management of electrical power distribution networks. Unlike architectures that integrate independent products through fragile interfaces, GridQ delivers all operational and analytical functions on a single product platform, ensuring that all applications share the same network model and that operators have a unified user experience, from telemetry monitoring to network analysis and outage management.',
    },

    { kind: 'paragraph', text: 'The platform is built on four guiding principles:' },
    {
      kind: 'list',
      items: [
        'Open standards: native support for protocols such as IEC 61850, IEC 60870-5-104/101, ICCP/TASE.2, OPC UA, CIM, and MQTT;',
        'Modular composition: each organization deploys only the modules it needs;',
        'Operational resilience: native hot-standby redundancy, deterministic data acquisition, and tested failover;',
      ],
    },

    { kind: 'heading', level: 2, text: 'Main Platform Modules' },

    { kind: 'heading', level: 3, text: 'GridQ SCADA' },
    {
      kind: 'paragraph',
      text: 'Constitutes the operational foundation of the solution, responsible for real-time data acquisition, electrical network supervision, event processing, historical storage, and execution of remote commands on field equipment. It operates in a 64-bit environment, with a modular and redundant architecture, supporting multiple communication protocols. The system processes analog quantities, digital states, alarms, and sequence-of-events (SOE) records, applying data validation, conversion to engineering units, operational limit verification, and telemetry fault detection. It enables the safe execution of remote commands, such as opening/closing of circuit breakers, switches, reclosers, and capacitor banks, in addition to TAP commands, with interlocking mechanisms, operational blocking, and a complete audit trail. The human-machine interface provides single-line diagrams, alarm and event panels, historical trends, and configurable reports, with local, web, and mobile access.',
    },

    { kind: 'heading', level: 3, text: 'GridQ DMS' },
    {
      kind: 'paragraph',
      text: 'Responsible for analytical supervision, electrical modelling, operational optimization, and decision-making support. It maintains a detailed topological and electrical model of the network, automatically recalculating the operational state after every switching change through its Topological Processor. Among its main functionalities are Load Flow studies, State and Load Estimation, and FLISR (Fault Location, Isolation and Service Restoration), which automatically identifies the probable location of a fault, determines the switching operations required to isolate the affected section, and proposes or executes restoration strategies via load transfer between feeders, reducing the number of affected consumers and the outage duration, with a direct impact on indicators such as SAIDI and SAIFI.',
    },

    { kind: 'heading', level: 3, text: 'GridQ OMS' },
    {
      kind: 'paragraph',
      text: 'A module dedicated to the operational management of supply interruptions, offering the operations centre an integrated, real-time view of events that affect continuity of supply. It monitors switching operations performed on the network (remote or manually recorded), processes the resulting topology, identifies energized and de-energized areas, and determines affected consumers. It incorporates Trouble Call System (TCS) functionalities for consumer call management, automatic correlation of complaints, and identification of the common outage point, in addition to integration with commercial systems for consulting consumer data.',
    },

    { kind: 'heading', level: 3, text: 'GridQ DTS' },
    {
      kind: 'paragraph',
      text: 'An advanced training simulator for SCADA/DMS/OMS operators, which reproduces the behaviour of the electrical network and the operations centre with a high degree of realism. It trains operators, dispatchers, and supervisors in a completely safe environment, without impacting real operation, simulating scenarios such as network disturbances, overvoltages and undervoltages, reactive power control problems, cascading events, islanding of parts of the system, total blackouts, and complete restoration procedures.',
    },

    { kind: 'heading', level: 3, text: 'GridQ Edge FEP' },
    {
      kind: 'paragraph',
      text: 'An intelligent layer that connects the field operational environment to the platform ecosystem, concentrating communications from RTUs, FRTUs, IEDs, reclosers, sectionalizers, fault indicators, and other automation devices. It performs the collection, validation, processing, and secure forwarding of information to the control centre, with native support for the main protocols of the electrical sector (IEC 60870-5-104/101, IEC 61850, DNP3, MODBUS, OPC UA, and ICCP/TASE.2) and interfaces for integration with corporate systems, GIS, commercial platforms, and regulatory applications via REST APIs, ODBC, and other standardized data exchange mechanisms.',
    },

    {
      kind: 'figure',
      src: 'arquitetura-solucao-adms.png',
      alt: 'GridQ ADMS system architecture',
      caption: 'GridQ ADMS system architecture',
    },

    {
      kind: 'paragraph',
      text: 'Together, these modules share operational information, network events, equipment data, and performance indicators in real time, providing a consistent and unified view of electrical distribution operations.',
    },
  ],
}
