import type { PageContent } from './types'

export const fep: PageContent = {
  meta: {
    route: '/fep',
    title: 'FEP: Front-End Processor',
    subtitle: "The platform's field communication layer",
    navLabel: 'FEP',
  },
  blocks: [
    { kind: 'heading', level: 2, text: "Edge / Front-End Processor (FEP): The Platform's Communication Layer" },
    {
      kind: 'paragraph',
      text: 'The Edge (also called Front-End Processor, or FEP) is the component responsible for the entire communication layer between the external environment and the ADMS ecosystem. It acts simultaneously as a front-end processor and as a centre-to-centre communication server, serving as the link between field devices, external systems, and the platform’s core modules (SCADA, DMS, OMS).',
    },
    {
      kind: 'paragraph',
      text: 'Its main function is to acquire, concentrate, process, and distribute the electrical network’s operational information in a secure, reliable, and real-time manner, functioning as the intelligent "gateway" between the field operational environment and the control centre.',
    },
    {
      kind: 'paragraph',
      text: 'An important architectural characteristic is the total decoupling between communication functions and operational functions: changes in protocols, equipment, telecommunications technologies, or external integrations are absorbed by the Edge without impacting the other system modules (SCADA, DMS, OMS).',
    },

    { kind: 'heading', level: 2, text: 'Data Acquisition and Concentration' },
    {
      kind: 'paragraph',
      text: 'The Edge performs continuous data acquisition from multiple field sources distributed across the electrical network, including:',
    },
    {
      kind: 'list',
      items: [
        'RTUs (Remote Terminal Units) installed in substations, collecting analog quantities (currents, voltages, active/reactive power, power factor, frequency, energy, TAP position, oil and winding temperature, battery voltage) and digital states (status of circuit breakers, switches, sectionalizers, protection relays, automatic reclosing, local/remote mode, and alarms);',
        'FRTUs, installed in RMUs (Ring Main Units), automatic reclosers, and remote-controlled sectionalizers, essential for distribution automation and circuit restoration;',
        'FPIs (Fault Passage Indicators), providing overcurrent and earth-fault passage indications, operational states, and diagnostics, used in fault location and automatic restoration.',
      ],
    },

    { kind: 'heading', level: 3, text: 'Collection Method and Performance' },
    {
      kind: 'paragraph',
      text: 'The Edge platform typically implements the data-by-exception (or report-by-exception) acquisition method, combined with configurable integrity scans, ensuring updates to digital states and analog values in sub-second to a few seconds, depending on the protocol and communication technology.',
    },

    { kind: 'heading', level: 3, text: 'Multivendor Protocol Engine' },
    {
      kind: 'paragraph',
      text: 'One of the distinguishing features of this layer is operating as a protocol engine capable of simultaneously interoperating with equipment from different manufacturers and technologies. Native support typically covers protocols such as:',
    },
    {
      kind: 'list',
      items: [
        'IEC 60870-5-101 and IEC 60870-5-104;',
        'IEC 61850 MMS;',
        'DNP3 (RTU and TCP);',
        'Modbus (RTU and TCP);',
        'MQTT;',
        'OPC DA and OPC UA;',
        'ICCP/TASE.2;',
        'DLMS/COSEM;',
        'REST API and Web Services.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'This multiprotocol capability eliminates dependency on specific vendors and facilitates future infrastructure expansions.',
    },

    { kind: 'heading', level: 3, text: 'Telemetry Fault Handling' },
    {
      kind: 'paragraph',
      text: 'The Edge incorporates native mechanisms for identifying and handling communication failures. When operating via IEC 60870-5-104, for example, the system continuously monitors TCP/IP connection supervision timers, allowing it to detect excessive delays, loss of communication, or unavailability of the remote equipment. When configured limits are exceeded, the connection is closed in a controlled manner and an automatic reconnection process is initiated.',
    },
    {
      kind: 'paragraph',
      text: 'In the event of a failure, the data points associated with the equipment automatically move to a "communication failure" state, retaining the last valid value received, preventing the propagation of incorrect values to operational applications while clearly indicating that the source is unavailable.',
    },

    { kind: 'heading', level: 2, text: 'Data Processing' },
    {
      kind: 'paragraph',
      text: 'After acquiring raw data, the Edge runs a processing layer that normalizes, validates, and prepares the information for operational use. Among the main functions are:',
    },
    {
      kind: 'box',
      title: 'CIM Data Model and GIS Integration',
      items: [
        'The platform adopts the Common Information Model (CIM), as defined by the IEC 61968 and IEC 61970 standards, as the standard model for representing the electrical network. This ensures that the SCADA, DMS, OMS, and DTS modules share the same network model, with data consistency and interoperability between components.',
      ],
    },
    {
      kind: 'box',
      title: 'Conversion to Engineering Units',
      items: [
        'Values received in normalized, scaled, or coded formats are automatically converted to engineering units (A, V, kW, MVAr, Hz, °C, etc.), making the information directly interpretable.',
      ],
    },
    {
      kind: 'box',
      title: 'Zero Dead Band Processing',
      items: [
        'Values within a configurable range around zero are treated as operational zero, avoiding spurious alarms and noise from sensors and communication channels.',
      ],
    },
    {
      kind: 'box',
      title: 'Rate of Change Calculation',
      items: [
        'Monitors the speed of variation of electrical quantities over time, allowing the identification of anomalous behaviour such as sudden loss of load, overloads, voltage oscillations, and abrupt frequency variations.',
      ],
    },
    {
      kind: 'box',
      title: 'Quality Codes',
      items: [
        'Each processed value receives a quality code (good, bad, uncertain, manually overwritten, out of service, among others), allowing the SCADA, DMS, and OMS modules to assess the reliability and origin of the information used in network operation.',
      ],
    },

    { kind: 'heading', level: 3, text: 'Communication Monitoring and Observability' },
    {
      kind: 'paragraph',
      text: 'While GridQ SCADA supervises the operation of the electrical network, GridQ Edge continuously monitors the infrastructure that carries that information. The platform typically offers dedicated dashboards to track device and channel availability, connection latency, packet loss, volume of data transmitted, communication success/failure rate, automatic reconnections, and link quality, allowing degradations to be quickly identified and acted upon before they cause operational impacts.',
    },

    { kind: 'heading', level: 3, text: 'Reliability Indicators' },
    {
      kind: 'paragraph',
      text: 'The platform also offers advanced reliability analysis mechanisms for communication and automation assets, calculating indicators such as MTTR (mean time to repair) and MTBF (mean time between failures), which support maintenance management and telecommunications infrastructure planning.',
    },

    { kind: 'heading', level: 3, text: 'Security' },
    {
      kind: 'paragraph',
      text: 'Finally, the Edge layer typically incorporates cybersecurity features, such as encrypted communication, device authentication, segregation between operational and corporate networks, access control, and event auditing, establishing a robust and secure infrastructure for the transport of operational information.',
    },

    { kind: 'heading', level: 2, text: 'Demo Application' },
    {
      kind: 'paragraph',
      text: 'The GridQ Edge presented in this demonstration is based on a real application used in the acquisition, processing, and distribution of operational data for the electrical distribution network of the state of Rio de Janeiro (excluding the capital).',
    },
    {
      kind: 'paragraph',
      text: 'The solution monitors, in real time, more than 15 thousand field devices, including switches, reclosers, voltage regulators, capacitor banks, meters, sensors, and other intelligent devices on the electrical network. The system maintains continuous communication with this equipment, ensuring high availability in data collection and making up-to-date information available to the utility’s corporate systems.',
    },
    {
      kind: 'figure',
      src: 'fep-demo.jpeg',
      alt: 'Georeferenced map of GridQ Edge field devices in Rio de Janeiro',
      caption: 'Georeferenced map, GridQ Edge, Rio de Janeiro distribution network',
    },
    { kind: 'video', src: 'fep-demo.mp4', poster: 'fep-demo.jpeg' },
    {
      kind: 'paragraph',
      text: 'To provide an operational and strategic view of the monitored infrastructure, GridQ Edge offers monitoring dashboards that show the communication status of equipment, availability indicators, failure statistics, communication performance, number of events processed, active alarms, and other information that supports platform management and the proactive identification of problems.',
    },
    {
      kind: 'paragraph',
      text: 'The solution also offers mechanisms for registering, changing, deleting, and parameterizing equipment in operation, allowing network expansions, device replacements, and configuration adjustments to be carried out dynamically, without interrupting services or making the application unavailable. This capability significantly reduces the impact of maintenance activities and increases the platform’s operational availability.',
    },
    {
      kind: 'paragraph',
      text: 'The data acquired by GridQ Edge is processed, validated, and distributed in real time to the SCADA, DMS/OMS, historians, and other corporate applications of the utility, providing a reliable basis for supervision, automation, operational analysis, outage management, fault location, service restoration, and decision-making support.',
    },
    {
      kind: 'paragraph',
      text: 'Its scalable, high-availability architecture supports large volumes of devices and messages, making GridQ Edge a robust platform for mission-critical environments in the electrical sector.',
    },
  ],
}
