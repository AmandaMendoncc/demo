import type { PageContent } from './types'

export const scada: PageContent = {
  meta: {
    route: '/scada',
    title: 'SCADA: Supervisory Control and Data Acquisition',
    subtitle: 'Supervision, operation, and visualization layer',
    navLabel: 'SCADA',
    heroImage: 'hero-scada.jpg',
  },
  blocks: [
    {
      kind: 'paragraph',
      text: 'GridQ SCADA is the module that constitutes the operational foundation of electrical network management systems, being responsible for network supervision, event processing, historical storage, and execution of remote commands on field equipment.',
    },
    {
      kind: 'figure',
      src: 'scada-camadas.png',
      alt: 'GridQ SCADA layers',
      caption: 'GridQ SCADA layers',
    },

    { kind: 'heading', level: 2, text: 'Architecture and Operation' },
    {
      kind: 'paragraph',
      text: 'GridQ SCADA is designed with a modular and redundant architecture, operating in 64-bit environments, with high availability and support for multiple communication protocols used in power distribution systems.',
    },
    {
      kind: 'paragraph',
      text: 'The module is integrated with GridQ Edge FEP, receiving from it information from field devices, such as circuit breakers, reclosers, sectionalizers, fault passage indicators (FPI), and remote terminal units (RTUs/FRTUs), collecting analog quantities (voltage, current, active and reactive power, power factor, imported/exported energy, transformer temperature, TAP position, among others), digital states, and chronological event records (Sequence of Events, SOE).',
    },

    { kind: 'heading', level: 2, text: 'Data Processing and Validation' },
    { kind: 'paragraph', text: 'SCADA incorporates advanced processing functions, including:' },
    {
      kind: 'list',
      items: [
        'Conversion to engineering units;',
        'Operational limit monitoring;',
        'Telemetry fault detection;',
        'Consistency verification of received values;',
        'Rate of Change calculation;',
        'Information quality code management.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'These functions ensure that operators have access to reliable data for operational decision-making.',
    },

    { kind: 'heading', level: 2, text: 'Supervision and Remote Control' },
    {
      kind: 'paragraph',
      text: 'In the scope of supervision and control, it allows the safe execution of remote commands, such as opening and closing of circuit breakers, reclosers, sectionalizers, and capacitor banks, in addition to TAP raise/lower commands and sending setpoints to intelligent devices.',
    },
    {
      kind: 'paragraph',
      text: 'The command process normally follows the Select-Check-Before-Operate (SCBO) philosophy, ensuring that all operational and security checks are completed before the command is executed. The system also features interlocking mechanisms, operational blocking, permission validation, and a complete audit trail for all actions performed by operators.',
    },

    { kind: 'heading', level: 2, text: 'Human-Machine Interface (HMI)' },
    {
      kind: 'paragraph',
      text: 'The human-machine interface offers substation single-line diagrams, alarm and event panels, historical trends, operational dashboards, and configurable reports. The environment normally supports local, web, and mobile-device access, allowing secure access to operational information at different levels of the organization.',
    },

    { kind: 'heading', level: 2, text: 'Automation and Programming Languages' },
    {
      kind: 'paragraph',
      text: 'Advanced SCADA environments offer automation features that enable the development of operational logic, calculations, and custom integrations, with support for languages such as C#, VB.NET, Python (for advanced analyses and artificial intelligence), and JavaScript (for dashboards and web interfaces), in addition to automation frameworks equivalent to the IEC 61131-3 standard.',
    },

    { kind: 'heading', level: 2, text: 'Historical Storage and Sequence of Events' },
    {
      kind: 'paragraph',
      text: 'The Historian submodule is responsible for the continuous storage of analog measurements, digital states, alarms, events, energy data, and audit records in relational databases. In addition to storage, SCADA platforms typically offer operational playback functionalities, allowing the state of the electrical network to be reconstructed at any point in the past directly on the single-line diagrams.',
    },
    {
      kind: 'paragraph',
      text: 'The Sequence of Events (SOE) module allows the chronological consolidation of events, preserving original timestamps and enabling the precise reconstruction of occurrences in the electrical network, an essential tool for post-fault analysis, disturbance investigation, and operational auditing.',
    },

    { kind: 'heading', level: 2, text: 'Demo Application' },
    {
      kind: 'paragraph',
      text: 'The GridQ SCADA presented in this demonstration is based on a real application used in the operation and supervision of the electrical distribution network of the capital of Brazil, responsible for serving approximately 3 million inhabitants.',
    },
    {
      kind: 'paragraph',
      text: 'The solution performs real-time monitoring and remote control of more than 52 distribution substations at 13.8 kV, allowing operators of the System Operations Centre (COS) to supervise, in real time, the state of equipment, execute switching operations, track electrical measurements, identify alarms, and quickly respond to network occurrences.',
    },
    {
      kind: 'paragraph',
      text: 'The substation presented in the demonstration is SE Planaltina, located in the Administrative Region of Planaltina, Federal District. This region serves an extensive urban and rural area, playing an important role in supplying power to residential, commercial, industrial, and essential public-service consumers. The interface demonstrates how the operator visualizes the substation topology, tracks the state of switches and circuit breakers, monitors electrical quantities, and executes switching operations in a safe and traceable manner.',
    },
    {
      kind: 'figure',
      src: 'scada-demo.png',
      alt: 'GridQ SCADA distribution network overview, Brasília',
      caption: 'GridQ SCADA distribution network overview, Brasília',
    },
    { kind: 'video', src: 'scada-demo.mp4', poster: 'scada-demo.png' },
    {
      kind: 'paragraph',
      text: 'In addition to operational supervision, GridQ SCADA offers specialized applications for monitoring the voltage quality of the electrical network. Through a dedicated interface, operators continuously track the voltage levels of substation busbars, verifying their compliance with established operational limits.',
    },
    {
      kind: 'paragraph',
      text: 'The system presents, in real time, voltage values, deviation alarms, historical trends, and operational indicators, allowing the rapid identification of overvoltage or undervoltage conditions. This information supports decision-making for executing switching operations, changing transformer taps, controlling capacitor banks, and other actions needed to keep voltage levels within technical and regulatory standards, ensuring greater reliability, quality of supply, and operational safety.',
    },
  ],
}
