import type { PageContent } from './types'

export const dms: PageContent = {
  meta: {
    route: '/dms',
    title: 'DMS: Distribution Management System',
    subtitle: 'Analytical and operational core of the distribution network',
    navLabel: 'DMS',
  },
  blocks: [
    {
      kind: 'paragraph',
      text: 'GridQ DMS (Distribution Management System) is the analytical and operational module responsible for advanced supervision, real-time analysis, operational optimization, and decision-making support in electrical distribution networks. While GridQ SCADA is responsible for acquiring data and executing supervisory commands, GridQ DMS uses the network’s complete electrical model to perform advanced analyses, identify abnormal conditions, and propose corrective or optimization actions, acting as the analytical core of the distribution management system.',
    },
    {
      kind: 'paragraph',
      text: 'All GridQ DMS applications share a common electrical model, including substations, feeders, transformers, switches, reclosers, voltage regulators, and capacitor banks, ensuring consistency between analyses, simulations, and real-time operation.',
    },

    { kind: 'heading', level: 2, text: 'Network Model' },
    {
      kind: 'paragraph',
      text: 'Network modelling is the foundation of all GridQ DMS functionalities. A single shared electrical model ensures consistency between connectivity analysis, power flow, state estimation, FLISR, Volt/VAR control, load balancing, and outage management.',
    },
    { kind: 'paragraph', text: 'The model covers three dimensions:' },
    {
      kind: 'list',
      items: [
        'Logical: connectivity between devices, operational states, and topological relationships;',
        'Electrical: impedances, transformer parameters, load curves, thermal and voltage limits, transfer capacity, and reactive compensation;',
        'Geographical: georeferenced positioning of assets (with optional GIS integration).',
      ],
    },
    {
      kind: 'paragraph',
      text: 'The represented assets include substations, busbars, power transformers, primary feeders and laterals, voltage regulators, capacitor banks, reclosers, sectionalizers, fuses, fault indicators, and other switching and protection devices.',
    },
    {
      kind: 'paragraph',
      text: 'The model maintains permanent synchronization with GridQ SCADA: remotely controlled equipment is updated automatically, while switching operations performed on non-remotely-controlled equipment are manually recorded by the operator, automatically triggering the Topological Processor. Optionally, GridQ DMS can integrate with corporate GIS systems via CIM/XML adapters (in accordance with the IEC 61968/61970 standards), preserving a single source of data.',
    },

    { kind: 'heading', level: 2, text: 'Analytical Applications' },
    {
      kind: 'paragraph',
      text: 'GridQ DMS brings together an integrated set of analytical applications that operate on the same electrical model:',
    },
    {
      kind: 'table',
      headers: ['Acronym', 'Name', 'Main Objective'],
      rows: [
        ['NCA', 'Network Connectivity Analysis', 'Continuously determine the electrical network topology'],
        ['SE', 'State Estimation', 'Estimate quantities at points without direct measurement'],
        ['LFA', 'Load Flow', 'Calculate the complete electrical behaviour of the network'],
        ['VVC', 'Volt/VAR Control', 'Optimize voltage and reactive power flow'],
        [
          'FLISR',
          'Fault Location, Isolation and Service Restoration',
          'Detect, isolate, and restore the network after faults',
        ],
        ['LMFR', 'Loss Minimization via Feeder Reconfiguration', 'Reduce technical losses through feeder reconfiguration'],
        ['LBFR', 'Load Balancing via Feeder Reconfiguration', 'Redistribute load between feeders'],
        ['OM', 'Operation Monitor', 'Monitor operational wear and asset reliability'],
        ['LSA', 'Load Shed Application', 'Automate load shedding and restoration in contingencies'],
      ],
    },

    { kind: 'heading', level: 3, text: 'Network Connectivity Analysis (NCA)' },
    {
      kind: 'paragraph',
      text: 'The operational foundation of GridQ DMS: it continuously determines the electrical topology and feeds all other analytical applications, running automatically at every state change received from GridQ SCADA or recorded by the operator. The NCA identifies busbar and feeder connectivity, energized and de-energized areas, available supply sources, radial and meshed configurations, and abnormal conditions such as electrical islanding, unauthorized parallels, loop formation, and inconsistent switch states. It also offers network tracing functions (feeder, circuit, between-points, downstream, consumer, and impact tracing) and allows temporary representation of network changes, such as cuts, jumpers, and provisional groundings, without altering the real-time configuration.',
    },

    { kind: 'heading', level: 3, text: 'State Estimation (SE)' },
    {
      kind: 'paragraph',
      text: 'Provides a complete, continuously updated electrical representation of the network, even in regions without direct measurement from GridQ SCADA. It runs automatically after topological changes or significant measurement updates, using real-time measurements, topology calculated by the NCA, historical consumption profiles, and equipment electrical parameters. The process involves load pre-estimation, measurement validation (identification and correction of inconsistent data), and calibration/allocation of estimated loads. As a result, it estimates voltages, currents, power, power factor, technical losses, and equipment loading, feeding the other applications directly.',
    },

    { kind: 'heading', level: 3, text: 'Load Flow (LFA)' },
    {
      kind: 'paragraph',
      text: 'The analytical core of GridQ DMS, turning topology (NCA) and estimated state (SE) information into operational knowledge by calculating the network’s complete electrical behaviour at each instant. It is triggered automatically by topological changes, switching operations, TAP changes, significant load variations, or operator request, calculating voltage and phase angle at busbars, currents in branches, power, feeder and transformer loading, technical losses by region, and operational limit violations. The operator can use the LFA in study mode to simulate scenarios and pre-assess impacts before any switching operation, a functionality that is fundamental for FLISR, LMFR, LBFR, VVC, and LSA.',
    },

    { kind: 'heading', level: 3, text: 'Volt/VAR Control (VVC)' },
    {
      kind: 'paragraph',
      text: 'Coordinates the optimization of voltage levels and reactive power flow in the distribution network, keeping the voltage profile within operational limits, reducing technical losses, and improving supply quality. It coordinates equipment such as on-load tap changers (OLTC), voltage regulators, and fixed and switched capacitor banks, continuously evaluating the topological configuration, operational limits, circuit loading, and operator-defined constraints to generate switching plans, operating in manual or operator-assisted automatic mode.',
    },

    { kind: 'heading', level: 3, text: 'FLISR: Fault Location, Isolation and Service Restoration' },
    {
      kind: 'paragraph',
      text: 'Supports the detection, location, isolation, and restoration of the network after faults, operating in an integrated manner with the NCA, SE, LFA, SCADA, and the network’s electrical model, to minimize the area and duration of supply interruptions.',
    },

    { kind: 'heading', level: 3, text: 'Other Applications' },
    {
      kind: 'paragraph',
      text: 'The analytical set is complemented by the loss-minimization and load-balancing functions via feeder reconfiguration, the operation monitor, which tracks the operational wear and reliability of assets, and the load shed application, which automates load shedding and restoration in contingency situations.',
    },

    { kind: 'heading', level: 2, text: 'Demo Application' },
    {
      kind: 'paragraph',
      text: 'FLISR stands for Fault Location, Isolation and Service Restoration. It is the function, within the GridQ DMS module, that automatically isolates a fault in the smallest possible section of the electrical network and restores the healthy sections that were left without power, opening and closing switches and reclosers automatically, without depending on a human operator at the moment of the fault.',
    },
    {
      kind: 'paragraph',
      text: 'In practice, it is the difference between a fault that leaves an entire neighbourhood in the dark for hours, until a crew arrives to switch equipment manually, and a fault in which only the small section that was actually damaged is isolated, with the rest of the network restored to power within seconds.',
    },

    { kind: 'heading', level: 3, text: 'From the Single-Line Diagram to Automatic Restoration' },
    {
      kind: 'paragraph',
      text: 'The network operates normally, with all reclosers closed (green indication); a spontaneous opening occurs on one of the reclosers due to protection operation; the system identifies the section between the two reclosers closest to the opening as the probable fault area; that section is isolated; and both the upstream and downstream sections are restored, the downstream section often through an alternative source, via a tie switch, when one exists in the topology.',
    },
    { kind: 'video' },

    { kind: 'heading', level: 3, text: 'What Triggers FLISR' },
    { kind: 'heading', level: 4, text: 'Permanent Fault' },
    {
      kind: 'paragraph',
      text: 'Spontaneous opening of a recloser or circuit breaker due to protection operation. The system locates the fault between the equipment, isolates the section, and restores the remainder.',
    },
    { kind: 'heading', level: 4, text: 'Overload and Under/Overvoltage' },
    {
      kind: 'paragraph',
      text: 'Each cycle, GridQ DMS runs a state estimator using the current and voltage data received from the field. Upon detecting an overload or out-of-range voltage, the algorithm can suggest preventive reconfiguration.',
    },
    { kind: 'heading', level: 4, text: 'Isolated Blocks' },
    {
      kind: 'paragraph',
      text: 'Periodically, the system checks whether there are isolated load sections in the network, without power but without an active fault, and suggests to the operator a sequence of switching operations to restore that block.',
    },
    { kind: 'heading', level: 4, text: 'Faults in Unmonitored Areas' },
    {
      kind: 'paragraph',
      text: 'Even interruptions caused by equipment outside GridQ DMS’s direct supervision (such as a bus circuit breaker at the substation) can be inferred and handled by the reconfiguration logic.',
    },

    { kind: 'heading', level: 3, text: 'From Field Sensor to Automatic Switching' },
    {
      kind: 'paragraph',
      text: 'The cycle begins long before the fault: with the complete modelling of the electrical network (busbars, sections, loads, switches, generators) in the topological database, and with the continuous acquisition of analog and digital data from each field device.',
    },
    { kind: 'heading', level: 4, text: 'Real-Time Acquisition' },
    {
      kind: 'paragraph',
      text: 'Field reclosers and circuit breakers send data to GridQ FEP (via standard protocols such as IEC 60870-5-104, ICCP/TASE.2, or DNP3.0), and GridQ DMS integrates with it, receiving the states of each switch and the per-phase currents.',
    },
    { kind: 'heading', level: 4, text: 'Opening Detection' },
    {
      kind: 'paragraph',
      text: 'A spontaneous opening, not commanded by the operator, is recognized as an indication of a fault. A "protection trip" can also be configured, in which the system waits for a defined delay to ensure there will be no automatic reclosing of the equipment itself before acting.',
    },
    { kind: 'heading', level: 4, text: 'State Estimation and Location' },
    {
      kind: 'paragraph',
      text: 'The module runs the state estimator using the topology and the latest measurements prior to the fault, which increases the accuracy of calculating where the fault is located on the network.',
    },
    { kind: 'heading', level: 4, text: 'Switching Sequence Generation' },
    {
      kind: 'paragraph',
      text: 'A modified genetic algorithm calculates the optimal sequence of switch openings and closings to isolate the smallest possible section and restore supply to the healthy sections, respecting the current and voltage limits of the equipment and the network.',
    },
    { kind: 'heading', level: 4, text: 'Execution: Automatic or Assisted' },
    {
      kind: 'paragraph',
      text: 'In automatic mode, commands are sent directly to the field. In manual mode, the sequence appears in a suggested-switching window and is only sent when the operator clicks "Execute".',
    },
    { kind: 'heading', level: 4, text: 'Confirmation and Logging' },
    {
      kind: 'paragraph',
      text: 'Each successfully commanded recloser displays an indicator. The entire occurrence is recorded in the operations log and in the occurrence report, available for up to 60 days.',
    },

    { kind: 'heading', level: 3, text: 'Criteria the Algorithm Follows' },
    {
      kind: 'list',
      items: [
        'Minimize the number of customers disconnected from the network;',
        'Minimize the number of switching operations performed;',
        'Maximize the current capacity available in each section, considering the margin between rated capacity and current loading;',
        'Minimize the need for future switching operations, using historical load curves;',
        'Consider not only the circuits neighbouring the fault, but the entire extent of monitored circuits, including transferring load in a chain, from the "neighbour’s neighbour" to the direct neighbour, when necessary;',
        'Identify protection miscoordination, when two equipment in series detect the fault but the wrong (upstream) equipment is the one that opens.',
      ],
    },

    { kind: 'heading', level: 3, text: 'Production, Listen, Simulation' },
    {
      kind: 'paragraph',
      text: 'GridQ DMS can run in four distinct modes, which allows testing and validating FLISR behaviour before letting it act on the real network.',
    },
    { kind: 'heading', level: 4, text: 'Real-Time Production Mode' },
    {
      kind: 'paragraph',
      text: 'The software communicates with the real field: it locates faults from real data and proposes/executes isolation and restoration switching operations.',
    },
    { kind: 'heading', level: 4, text: 'Listen Command Mode' },
    {
      kind: 'paragraph',
      text: 'A special case of real-time mode: the system receives real data from the field and reports, through the interface, what it would do to recover the occurrence, but does not send any command. Used during commissioning, when faults are already real but the switching is not yet delegated to the software.',
    },
    { kind: 'heading', level: 4, text: 'Internal Simulation Mode' },
    {
      kind: 'paragraph',
      text: 'The software does not communicate with the field: the data is simulated from the modelled network’s history. The operator can trigger fictitious faults through the interface itself and observe how the system would restore the network.',
    },
    { kind: 'heading', level: 4, text: 'External Simulation' },
    {
      kind: 'paragraph',
      text: 'The system operates "for real", but exchanging data with a second computing environment, the same topology, but with measurements generated by an external simulator, compatible with the topology and the switching operations in progress.',
    },

    { kind: 'heading', level: 3, text: 'The System Never Switches Blindly' },
    {
      kind: 'paragraph',
      text: 'All automation is surrounded by safety interlocks, and the operator always retains the final say over every switch on the network.',
    },
    { kind: 'heading', level: 4, text: 'Manual Block' },
    {
      kind: 'paragraph',
      text: 'The operator can deactivate any recloser, or an entire network, for the self-healing function, by clicking directly on the single-line diagram. The switch then displays a block indication and stays out of any switching operation proposed by the algorithm.',
    },
    { kind: 'heading', level: 4, text: 'Automatic Block' },
    {
      kind: 'paragraph',
      text: 'If a recloser has a communication failure, a reclosing block, a neutral block, or is under maintenance, the system automatically deactivates it for FLISR, without it participating in any proposed switching operation.',
    },
    { kind: 'heading', level: 4, text: 'Manual vs. Automatic Execution' },
    {
      kind: 'paragraph',
      text: 'It can be selected whether the suggested switching sequence is executed immediately or remains pending confirmation by the operator in the command window.',
    },
    { kind: 'heading', level: 4, text: 'Switching Failure' },
    {
      kind: 'paragraph',
      text: 'If a command fails during execution, the system flags the occurrence and keeps the record in the log, giving the operator full visibility into every stage of the restoration.',
    },
  ],
}
