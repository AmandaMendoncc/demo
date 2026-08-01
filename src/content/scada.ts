import type { PageContent } from './types'

export const scada: PageContent = {
  meta: {
    route: '/scada',
    title: 'SCADA: Supervisory Control and Data Acquisition',
    subtitle: 'Supervision, operation, and visualization layer',
    navLabel: 'SCADA',
    demoLabel: 'SCADA',
  },
  blocks: [
    { kind: 'heading', level: 2, number: '4.1', text: 'SCADA Module Overview' },
    {
      kind: 'paragraph',
      text: 'The SpinTech SCADA module constitutes the supervision, operation, and visualization layer of the ADMS system. Its primary function is to provide operators with a complete and up-to-date representation of the electrical system through graphical interfaces, operational control capabilities, alarm management, historical data storage, and real-time analysis tools.',
    },
    {
      kind: 'paragraph',
      text: 'In the proposed architecture, all functions related to field-device communication, telecontrol protocols, and data acquisition are handled by the SpinTech Edge module. The SCADA module receives this information via an integration infrastructure based on the TRemoteClient protocol, transparently inheriting the structure of points, states, events, alarms, measurements, and operational attributes required for grid supervision and operation.',
    },
    {
      kind: 'paragraph',
      text: 'The platform provides a unified Human-Machine Interface (HMI) for operators, engineers, supervisors, and other authorized users, supporting local, remote, and web-browser access. Navigation is based on single-line diagrams, substation displays, operational dashboards, alarm and event lists, trends, and reports, ensuring a consistent operational experience across the entire ADMS environment.',
    },
    {
      kind: 'paragraph',
      text: 'The SCADA functional architecture comprises the following main modules:',
    },
    {
      kind: 'list',
      items: [
        'Displays (HMI);',
        'Alarms and Events;',
        'Supervisory Control;',
        'Historian and Trends;',
        'Reports;',
        'Scripts and Automation;',
        'Security and User Management.',
      ],
    },
    {
      kind: 'figure',
      src: 'scada-camadas.png',
      alt: 'SpinTech SCADA layers',
      caption: 'SpinTech SCADA layers',
    },

    { kind: 'heading', level: 2, number: '4.2', text: 'SCADA Data Sources and Types' },
    {
      kind: 'paragraph',
      text: 'Although information acquisition is performed by SpinTech Edge, the SCADA module maintains a complete operational representation of the electrical network through the TRemoteClient integration.',
    },
    {
      kind: 'paragraph',
      text: 'The main types of data made available to the SCADA include:',
    },
    {
      kind: 'list',
      items: [
        'Analog measurements from substations, feeders, and distribution automation devices;',
        'Digital states of switching and protection equipment;',
        'Information from reclosers, RMUs, remote-controlled switches, and other automated assets;',
        'Fault passage indications (FPI);',
        'SOE events with timestamp;',
        'Calculated data and operational indicators;',
        'Information entered manually by operators;',
        'Corporate electrical model data in CIM standard (IEC 61968/61970).',
      ],
    },
    {
      kind: 'paragraph',
      text: 'When available, the electrical model can be automatically loaded from corporate GIS systems through CIM/XML adapters, reducing manual modelling activities and ensuring consistency between the corporate and operational environments.',
    },

    { kind: 'heading', level: 2, number: '4.3', text: 'Supervisory Control' },
    {
      kind: 'paragraph',
      text: 'SpinTech SCADA provides supervisory control features for the remote operation of electrical network assets. The command process follows the Select-Check-Before-Operate (SCBO) philosophy, ensuring that all operational and security verifications are completed before the command is executed.',
    },
    {
      kind: 'paragraph',
      text: 'Command transmission to field devices is performed by SpinTech Edge, with the SCADA responsible for operational validation, process coordination, and operator interaction.',
    },
    {
      kind: 'paragraph',
      text: 'The main types of control supported include:',
    },
    {
      kind: 'list',
      items: [
        'Opening and closing of circuit breakers, reclosers, and switches;',
        'Capacitor bank control;',
        'Fault indicator reset;',
        'Voltage regulator and OLTC control;',
        'Setpoint control;',
        'Group control;',
        'Automatic execution of switching sequences.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'The system incorporates operational interlocking mechanisms, blocking tags, permission validation, and a comprehensive audit of user-performed operations.',
    },
    {
      kind: 'paragraph',
      text: 'Before executing any command, conditions such as telemetry availability, equipment operating mode, active blocks, maintenance status, configured interlocks, and operator permissions are automatically verified.',
    },

    { kind: 'heading', level: 2, number: '4.4', text: 'SCADA Programming Language and Automation' },
    {
      kind: 'paragraph',
      text: 'The SpinTech SCADA automation environment enables the development of operational logics, calculations, integrations, and utility-specific functionalities.',
    },
    {
      kind: 'paragraph',
      text: 'The following technologies are supported:',
    },
    {
      kind: 'list',
      items: [
        'C# and VB.NET for automations, calculations, and operational logic;',
        'Python for advanced analyses, artificial intelligence, and external integrations;',
        'JavaScript for dashboards and HTML5 interfaces;',
        'Automation framework with functionalities equivalent to IEC 61131-3.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'The C# and VB.NET scripts are compiled, providing high execution performance. The environment offers advanced engineering features, including automatic cross-references, object updates, integrated debugging, step-by-step execution, variable monitoring and exception tracking.',
    },
    {
      kind: 'paragraph',
      text: 'These features enable operational automation, real-time calculations, and other functionalities required for the supervisory system’s operation.',
    },
    {
      kind: 'figure',
      src: 'scada-ambiente-scripts.png',
      alt: 'Environment for writing, compiling, and debugging scripts',
      caption: 'Environment for writing, compiling, and debugging scripts',
    },

    { kind: 'heading', level: 2, number: '4.5', text: 'Historical Storage and Operational Playback' },
    {
      kind: 'paragraph',
      text: 'The Historian sub-module is responsible for the continuous storage of operational information received by the SCADA. The following are stored:',
    },
    {
      kind: 'list',
      items: [
        'Analog measurements;',
        'Digital states;',
        'Alarms;',
        'Events;',
        'Energy data;',
        'Calculated variables;',
        'Operational records and audits.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'The data is maintained in PostgreSQL relational databases residing on the ISR (Information, Storage, and Retrieval) server. The minimum online retention period is 2 years, meeting the utility’s operational, regulatory, and historical analysis requirements.',
    },
    {
      kind: 'paragraph',
      text: 'In addition to historical storage, the system provides Operational Playback functionalities, enabling reconstruction of the electrical network state at any point in the past directly on single-line diagrams and operational screens.',
    },
    {
      kind: 'paragraph',
      text: 'The module also offers advanced graphical and tabular trend features, enabling temporal analysis, variable comparison, time zoom, and investigation of operational occurrences.',
    },
    {
      kind: 'figure',
      src: 'scada-tendencias.png',
      alt: 'Real-time and historical trends available in SCADA',
      caption: 'Real-time and historical trends available in SCADA',
    },

    { kind: 'heading', level: 2, number: '4.6', text: 'Sequence of Events (SOE)' },
    {
      kind: 'paragraph',
      text: 'The SOE module enables the chronological consolidation of events from SpinTech Edge-supervised equipment.',
    },
    {
      kind: 'paragraph',
      text: 'Events are received by the SCADA through the TRemoteClient infrastructure, preserving their original timestamps and enabling the precise reconstruction of occurrences recorded in the electrical network.',
    },
    {
      kind: 'paragraph',
      text: 'Each SOE record can store:',
    },
    {
      kind: 'list',
      items: [
        'Date and time of the occurrence;',
        'Associated equipment;',
        'Event type;',
        'Previous and subsequent state;',
        'Information quality;',
        'Event source;',
        'Related installation or feeder.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Events are stored in the alarm and event historical database and remain available for online queries and historical analyses. The event interface allows filtering by period, installation, equipment, feeder, category, or occurrence type, supporting operations, post-fault analysis, disturbance investigation, and operational auditing. This functionality is one of the main operational analysis tools in the SCADA system, providing complete traceability of electrical system events and enabling a detailed understanding of network behaviour under normal conditions, contingencies, and emergencies.',
    },
    {
      kind: 'figure',
      src: 'scada-resumo-eventos.png',
      alt: 'Event summary with dozens of columns available in SCADA',
      caption: 'Event summary with dozens of columns available in SCADA',
    },
  ],
}
