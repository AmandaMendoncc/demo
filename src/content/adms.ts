import type { PageContent } from './types'

export const adms: PageContent = {
  meta: {
    route: '/adms',
    title: 'ADMS / DMS: Distribution Management System',
    subtitle: 'Analytical and operational core of the distribution network',
    navLabel: 'ADMS / DMS',
    demoLabel: 'ADMS / DMS',
  },
  blocks: [
    { kind: 'heading', level: 2, number: '6.1', text: 'Overview' },
    {
      kind: 'paragraph',
      text: 'The SpinTech DMS (Distribution Management System) module is the analytical and operational core responsible for advanced supervision, real-time analysis, operational optimization, and decision-making support for electrical distribution networks.',
    },
    {
      kind: 'table',
      caption: 'SCADA vs. DMS',
      headers: ['Module', 'Function'],
      rows: [
        ['SCADA', 'Acquires data and executes supervisory commands.'],
        [
          'DMS',
          'Uses the complete electrical model for advanced analyses, identifies abnormal conditions, and proposes corrective or optimization actions.',
        ],
      ],
    },
    {
      kind: 'paragraph',
      text: 'All SpinTech DMS applications share a common electrical model (including substations, feeders, transformers, switches, reclosers, voltage regulators, and capacitor banks), ensuring consistency between analyses, simulations, and real-time operations.',
    },
    {
      kind: 'figure',
      src: 'adms-arquitetura-dms.png',
      alt: 'SpinTech DMS system architecture',
      caption: 'SpinTech DMS system architecture',
    },

    { kind: 'heading', level: 2, number: '6.2', text: 'Network Model' },
    {
      kind: 'paragraph',
      text: 'Network modelling is the foundation of all SpinTech DMS functionalities. A single shared electrical model ensures consistency between connectivity analysis, power flow, state estimation, FLISR/FMSR, Volt/VAR control, load balancing, and outage management.',
    },
    { kind: 'heading', level: 3, number: '6.2.1', text: 'Model Representations' },
    {
      kind: 'table',
      headers: ['Dimension', 'What is modelled'],
      rows: [
        ['Logical', 'Connectivity between devices, operational states, and topological relationships'],
        [
          'Electrical',
          'Impedances, transformer parameters, load curves, thermal and voltage limits, transfer capacity, and reactive compensation',
        ],
        ['Geographical', 'Geo-referenced positioning of assets (optional GIS integration)'],
      ],
    },
    { kind: 'heading', level: 3, number: '6.2.2', text: 'Represented Assets' },
    {
      kind: 'box',
      title: 'Devices included in the model',
      items: [
        'Substations, busbars, and power transformers;',
        'Primary feeders and laterals;',
        'Voltage regulators and capacitor banks;',
        'Reclosers, disconnectors, and fuses;',
        'Fault indicators (FPI) and remote units;',
        'Switching and protection devices in general.',
      ],
    },
    { kind: 'heading', level: 3, number: '6.2.3', text: 'Synchronization and Update' },
    {
      kind: 'paragraph',
      text: 'The model maintains permanent synchronization with the SCADA. Remotely controlled equipment is updated automatically. For non-remotely controlled devices, switching operations performed in the field are recorded by the operator, and the Topological Processor is automatically triggered after each confirmation.',
    },
    { kind: 'heading', level: 3, number: '6.2.4', text: 'GIS Integration and CIM Standard' },
    {
      kind: 'table',
      headers: ['System / Protocol', 'Description'],
      rows: [
        [
          'GIS',
          'Bidirectional synchronization: incremental asset updates without manual remodelling, ensuring consistency between engineering, planning, and operations.',
        ],
        [
          'IEC CIM (61968/61970)',
          'SpinTech DMS can consume data from GIS systems or corporate repositories via CIM/XML adapters, preserving a single data source and reducing inconsistencies.',
        ],
      ],
    },

    { kind: 'heading', level: 2, number: '6.3', text: 'DMS Application Functions: Overview' },
    {
      kind: 'paragraph',
      text: 'SpinTech DMS comprises an integrated set of analytical applications that operate on the same electrical model. The table below summarises each function and its main objective.',
    },
    {
      kind: 'table',
      headers: ['Acronym', 'Name', 'Main Objective'],
      rows: [
        ['NCA', 'Network Connectivity Analysis', 'Continuously determine the electrical network topology.'],
        ['SE', 'State Estimation', 'Estimate quantities at points without direct measurement.'],
        ['LFA', 'Load Flow Application', 'Calculate the complete electrical behaviour of the network.'],
        ['VVC', 'Volt/VAR Control', 'Optimize voltage and reactive power flow.'],
        [
          'FLISR',
          'Fault Location, Isolation & Service Restoration',
          'Detect, isolate, and restore the network after faults.',
        ],
        [
          'LMFR',
          'Loss Minimization via Feeder Reconfiguration',
          'Reduce technical losses through feeder reconfiguration.',
        ],
        ['LBFR', 'Load Balancing via Feeder Reconfiguration', 'Redistribute the load to balance the loading.'],
        ['OM', 'Operation Monitor', 'Monitor operational wear and asset reliability.'],
        ['LSA', 'Load Shed Application', 'Automate load shedding and restoration in contingencies.'],
      ],
    },

    { kind: 'heading', level: 3, number: '6.3.1', text: 'Network Connectivity Analysis (NCA)' },
    {
      kind: 'paragraph',
      text: 'The NCA is the operational foundation of SpinTech DMS. It continuously determines the electrical network topology and feeds all other analytical applications. It is executed automatically at every state change received from the SCADA or recorded by the operator.',
    },
    { kind: 'heading', level: 4, number: '6.3.1.1', text: 'What the NCA determines' },
    {
      kind: 'boxgrid',
      columns: [
        {
          title: 'Topology',
          items: [
            'Busbar and feeder connectivity',
            'Energized and de-energized areas',
            'Available power sources',
            'Radial and meshed configurations',
            'Alternative paths for load transfer',
          ],
        },
        {
          title: 'Abnormal Conditions',
          items: [
            'Electrical islanding',
            'Unauthorized parallels',
            'Loop formation',
            'Inconsistent switch states',
            'Equipment isolated from the main topology',
          ],
        },
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.1.2', text: 'Network Tracing Functions' },
    {
      kind: 'table',
      headers: ['Function', 'Description'],
      rows: [
        ['Feeder Trace', 'Complete feeder tracing.'],
        ['Circuit Trace', 'Electrical circuit tracing.'],
        ['Between Trace', 'Tracing between two selected points.'],
        ['Downstream Trace', 'Downstream tracing from a source point.'],
        ['Consumer Trace', 'Identification of connected consumers, loads, and devices.'],
        ['Impact Trace', 'Identification of areas affected by switching operations or contingencies.'],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.1.3', text: 'Temporary Network Representation' },
    {
      kind: 'paragraph',
      text: 'For operational and maintenance activities, the NCA allows modelling of temporary changes without modifying the real-time configuration: temporary cuts, phase, temporary jumpers, temporary groundings, and provisional maintenance configurations. Alarms are automatically generated for detected abnormal conditions, serving as a trigger for advanced applications such as LFA, VVC, FLISR, and LSA.',
    },

    { kind: 'heading', level: 3, number: '6.3.2', text: 'State Estimation (SE)' },
    {
      kind: 'paragraph',
      text: 'State Estimation provides a complete and continuously updated electrical representation of the network, even in regions without direct SCADA measurements. It is executed automatically after topological changes or significant updates to field measurements.',
    },
    { kind: 'heading', level: 4, number: '6.3.2.1', text: 'Algorithm Inputs' },
    {
      kind: 'box',
      title: 'Data sources used by the SE',
      items: [
        'Real-time SCADA measurements;',
        'Topology calculated by the NCA;',
        'Daily historical profiles and typical consumption curves;',
        'Equipment electrical parameters.',
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.2.2', text: 'Estimation Process Steps' },
    {
      kind: 'table',
      headers: ['Step', 'Description'],
      rows: [
        [
          '1. Load pre-estimation',
          'Assigns initial active and reactive power values to each segment based on historical profiles and available measurements.',
        ],
        [
          '2. Measurement validation',
          'Identifies and eliminates/corrects inconsistent values, defective measurements, and inconsistent data (Bad Data Identification).',
        ],
        [
          '3. Calibration and allocation',
          'Distributes estimated loads across medium voltage busbars and segments according to electrical and topological criteria.',
        ],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.2.3', text: 'Quantities Estimated for All Elements' },
    {
      kind: 'boxgrid',
      columns: [
        { title: 'Voltage / Current', items: ['Voltage magnitudes at busbars/nodes', 'Circuit currents'] },
        { title: 'Power / PF', items: ['Active and reactive power', 'Power factor'] },
        {
          title: 'Losses / Loading',
          items: ['Technical losses (active and reactive)', 'Transformer, feeder, and lateral loading'],
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'The results directly feed LFA, VVC, FMSR/FLISR, LMFR, and LBFR. The application operates in both real-time and study mode.',
    },

    { kind: 'heading', level: 3, number: '6.3.3', text: 'Load Flow Application (LFA)' },
    {
      kind: 'paragraph',
      text: 'The Load Flow Application is the analytical core of SpinTech DMS. It transforms topology (NCA) and estimated state (SE) information into operational knowledge by computing the network’s complete electrical behaviour at each instant, thereby forming the technical basis for all other advanced applications.',
    },
    {
      kind: 'box',
      title: 'Calculation Engine',
      items: [
        'SpinTech DMS uses OpenDSS (EPRI) as the LFA engine, operating on the complete electrical model, current topology, equipment states, and SE/SCADA results.',
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.3.1', text: 'When the LFA is executed' },
    {
      kind: 'box',
      title: 'Automatic trigger events',
      items: [
        'Topology changes identified by the NCA;',
        'Opening or closing of switches, reclosers, and circuit breakers;',
        'TAP changes in transformers and voltage regulators;',
        'Significant load variations or overloads;',
        'Changes in the state of reactive compensation equipment;',
        'Operator request or triggering by other DMS applications.',
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.3.2', text: 'Quantities Calculated by the LFA' },
    {
      kind: 'boxgrid',
      columns: [
        {
          title: 'Per Equipment',
          items: [
            'Voltage and phase angle at busbars',
            'Currents in all branches',
            'Active/reactive power and power factor',
            'Feeder and transformer loading',
          ],
        },
        {
          title: 'Per Region / Area',
          items: [
            'Technical losses per feeder and substation',
            'Three-phase and per-phase losses',
            'Voltage drops along circuits',
            'Operational limit violations',
          ],
        },
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.3.3', text: 'Central Role in the DMS Architecture' },
    {
      kind: 'table',
      headers: ['Module', 'Function'],
      rows: [
        ['NCA', 'Informs how the network is connected.'],
        ['SE', 'Estimates the most likely electrical condition of the network.'],
        [
          'LFA ★',
          'Determines how energy flows, which equipment is overloaded, which loads can be transferred, and which actions produce the best operational results.',
        ],
      ],
    },
    {
      kind: 'paragraph',
      text: 'Before any switching operation, the operator can use the LFA in study mode to simulate scenarios and pre-assess impacts, which is fundamental for FLISR, LMFR, LBFR, VVC, and LSA.',
    },

    { kind: 'heading', level: 3, number: '6.3.4', text: 'Volt/VAR Control (VVC)' },
    {
      kind: 'paragraph',
      text: 'The VVC coordinates the optimization of voltage levels and reactive power flow in the distribution network, maintaining the voltage profile within operational limits, reducing technical losses, and improving supply quality.',
    },
    {
      kind: 'boxgrid',
      columns: [
        {
          title: 'Coordinated Equipment',
          items: [
            'On-Load Tap Changers (OLTC)',
            'Voltage regulators',
            'Fixed capacitor banks',
            'Switched capacitor banks',
          ],
        },
        {
          title: 'Optimisation Objectives',
          items: [
            'Minimization of technical losses',
            'Improvement of the voltage profile',
            'Reactive flow control',
            'Load balancing',
          ],
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'SpinTech DMS continuously evaluates the topological configuration, operational limits, circuit loading, and operator-defined constraints to generate switching plans. The system operates in manual or operator-assisted automatic mode.',
    },

    { kind: 'heading', level: 3, number: '6.3.5', text: 'FLISR: Fault Location, Isolation and Service Restoration' },
    {
      kind: 'paragraph',
      text: 'The FLISR (Fault Location, Isolation and Service Restoration) supports the detection, location, isolation, and restoration of the network after faults. It operates in an integrated manner with the NCA, SE, LFA, SCADA, and the electrical model.',
    },
    { kind: 'heading', level: 4, number: '6.3.5.1', text: 'FLISR Process Flow' },
    {
      kind: 'table',
      headers: ['Step', 'Description'],
      rows: [
        [
          '1. Detection',
          'Monitors circuit breaker, recloser, and FPI operation and abrupt changes in electrical quantities. Applies a configurable wait period to prevent unnecessary restorations caused by transient events. Supervisory switching operations do not initiate the process.',
        ],
        [
          '2. Location',
          'Uses circuit breaker/recloser states, communicable FPIs, current/voltage telemetry, and NCA topology to identify the faulty section. The identified area is visually highlighted on operational diagrams and maps.',
        ],
        [
          '3. Isolation',
          'Generates the switching sequence to electrically isolate the faulty section, respecting operational limits and equipment capacity.',
        ],
        [
          '4. Restoration',
          'Evaluates alternative supply paths and executes LFA-validated load transfers to restore the maximum number of consumers possible.',
        ],
        [
          '5. Pre-fault return',
          'After fault elimination, it automatically generates an optimized switching sequence to restore the original configuration.',
        ],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.5.2', text: 'Storm Mode' },
    {
      kind: 'paragraph',
      text: 'Allows suspension of automatic restoration actions during exceptional situations (storms, large-scale events). Detection, analysis, and isolation functions remain active, but restoration remains under direct operator control.',
    },
    { kind: 'heading', level: 4, number: '6.3.5.3', text: 'Operating Modes' },
    {
      kind: 'table',
      headers: ['Operating Mode', 'Description'],
      rows: [
        [
          'Automatic',
          'Calculates and executes isolation and restoration plans after validation by the responsible operator.',
        ],
        [
          'Manual',
          'Generates recommendations and presents the complete switching sequence for step-by-step execution by the operator.',
        ],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.5.4', text: 'Reports Generated by FLISR' },
    {
      kind: 'box',
      title: 'Information available after each occurrence',
      items: [
        'Complete fault analysis and sequence of switching operations executed;',
        'Total outage time per feeder; date and time of each event;',
        'Amount of load interrupted and restored;',
        'Number of consumers affected and restored;',
        'Operational limit violations identified by the LFA;',
        'Alternative restoration plans ranked by operational merit;',
        'Complete traceability: user, date, time, and context of each operation.',
      ],
    },

    { kind: 'heading', level: 3, number: '6.3.6', text: 'Loss Minimization via Feeder Reconfiguration (LMFR)' },
    {
      kind: 'paragraph',
      text: 'The LMFR automatically identifies opportunities to reduce technical losses through operational network reconfiguration, exploiting already available resources without requiring infrastructure investments.',
    },
    { kind: 'heading', level: 4, number: '6.3.6.1', text: 'How It Works' },
    {
      kind: 'table',
      headers: ['Phase', 'Action'],
      rows: [
        [
          'Initial assessment',
          'Calculates existing losses in the current configuration (feeders, transformers, and other elements)',
        ],
        [
          'Scenario simulation',
          'Simulates combinations of opening/closing of normally open switches and transfers between adjacent feeders',
        ],
        [
          'LFA validation',
          'Runs power flow for each alternative; only configurations that meet all operational criteria are recommended',
        ],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.6.2', text: 'Criteria Verified for Each Alternative' },
    {
      kind: 'boxgrid',
      columns: [
        {
          title: 'Electrical Criteria',
          items: [
            'Technical losses and voltage profile',
            'Feeder and transformer loading',
            'Thermal limits and circuit capacity',
            'Active and reactive power flows',
          ],
        },
        {
          title: 'Operational Constraints',
          items: [
            'Planned and unplanned outages',
            'Equipment out of service or blocked',
            'Blocking tags (Control Inhibit Tags)',
            'Operations centre constraints',
          ],
        },
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.6.3', text: 'Operating Modes and Frequency' },
    {
      kind: 'table',
      headers: ['Feature', 'Description'],
      rows: [
        [
          'Frequency',
          'Automatic periodic execution (typically every 15 minutes) and on operator demand or triggered by other DMS applications.',
        ],
        ['Automatic', 'Generates switching plans automatically; after operator validation, executes via SpinTech SCADA.'],
        ['Manual', 'Presents all alternatives with operational benefits for operator-assisted decision and execution.'],
      ],
    },
    {
      kind: 'paragraph',
      text: 'What-If features allow simulation of strategies before execution. Reports include losses before/after reconfiguration, percentage reduction, power flows, and a complete list of recommended operations.',
    },

    { kind: 'heading', level: 3, number: '6.3.7', text: 'Load Balancing via Feeder Reconfiguration (LBFR)' },
    {
      kind: 'paragraph',
      text: 'The LBFR optimizes network loading by dynamically redistributing load between feeders and adjacent operational areas, eliminating imbalances, maximizing asset utilization, and increasing available operational capacity.',
    },
    { kind: 'heading', level: 4, number: '6.3.7.1', text: 'When the LBFR is Triggered' },
    {
      kind: 'box',
      title: 'Events that initiate balancing',
      items: [
        'Overload of feeders or distribution/power transformers;',
        'Significant imbalance between neighboring feeders;',
        'Unequal loading between circuits of the same substation;',
        'Significant load changes throughout the day or topological changes;',
        'Explicit operator request or scheduled execution.',
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.7.2', text: 'Criteria Evaluated for Each Transfer Scenario' },
    {
      kind: 'table',
      headers: ['Parameter', 'Assessment'],
      rows: [
        ['Loading', 'Feeders and transformers involved (before and after).'],
        ['Voltage', 'Resulting voltage profile across the entire affected area.'],
        ['Losses', 'Impact on technical losses associated with the new flow.'],
        ['Capacity', 'The remaining operational margin of the receiving circuits.'],
        ['Transient overloads', 'Duration, magnitude, and acceptability of intermediate conditions during the transfer.'],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.7.3', text: 'Operating Modes' },
    {
      kind: 'table',
      headers: ['Mode', 'Description'],
      rows: [
        ['Automatic', 'Generates and executes switching plans after operator validation, via SpinTech SCADA.'],
        ['Manual', 'Presents alternatives ranked by merit; assisted and sequential execution.'],
      ],
    },
    {
      kind: 'paragraph',
      text: 'What-If features and LFA simulation are available before any execution. Reports include loading condition before/after, participating feeders, redistributed load, percentage asset utilization, and resulting voltage profile.',
    },

    { kind: 'heading', level: 3, number: '6.3.8', text: 'Operation Monitor' },
    {
      kind: 'paragraph',
      text: 'The Operation Monitor tracks the operational condition of assets, transforming operational events and histories into indicators for maintenance management and increased network reliability.',
    },
    { kind: 'heading', level: 4, number: '6.3.8.1', text: 'Monitored Equipment' },
    {
      kind: 'box',
      title: 'Continuously supervised devices',
      items: [
        'Circuit Breakers (CBs) and automatic reclosers;',
        'Disconnectors and load break switches (LBS);',
        'Switched capacitor banks;',
        'On-Load Tap Changers (OLTCs);',
        'Motorized switches and supervised protection equipment.',
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.8.2', text: 'Information Maintained per Equipment' },
    {
      kind: 'table',
      headers: ['Indicator', 'Description'],
      rows: [
        ['Total accumulated operations', 'Counter updated at every device operation.'],
        ['Fault operations', 'Specific counter for operations resulting from faults.'],
        ['Date/time of last operation', 'Temporal record of the last switching operation executed.'],
        ['Complete history', 'Log of all operations with operational context.'],
        ['Current state', 'Current operational condition of the equipment.'],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.8.3', text: 'Alarms and Configurable Limits' },
    {
      kind: 'paragraph',
      text: 'Operational limits are configured individually per equipment (manufacturer criteria, utility policy or specific requirements). Alarms are automatically generated when monitored values exceed defined limits.',
    },
    {
      kind: 'box',
      title: 'Conditions that generate alarms',
      items: [
        'Maximum number of total or fault operations reached;',
        'Excessive operating frequency in a given period;',
        'Identified operational wear conditions.',
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.8.4', text: 'Calculated Reliability Indicators' },
    {
      kind: 'table',
      headers: ['Indicator', 'Description'],
      rows: [
        ['Failure Frequency', 'Number of failures occurring in a given period.'],
        ['Failure Rate', 'Probability of failure occurrence based on operational history.'],
        ['MTBF', 'Mean Time Between Failures: average time between successive failures.'],
        ['MTTR', 'Mean Time to Repair: average time for repair or restoration after failure.'],
        ['Downtime', 'Accumulated unavailability time of equipment.'],
        ['Availability', 'Operational availability, considering recorded operations and unavailability.'],
        ['Pareto Analysis', 'Identifies equipment/feeders that concentrate the largest share of occurrences and failures.'],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.8.5', text: 'Condition-Based Maintenance (CBM)' },
    {
      kind: 'paragraph',
      text: 'Operation Monitor data enables Condition-Based Maintenance strategies: instead of fixed-period maintenance, the utility uses actual utilization and wear data to determine the optimal timing of interventions.',
    },
    {
      kind: 'box',
      title: 'CBM Benefits',
      items: [
        'Reduction of unexpected failures and increased asset service life;',
        'Better utilization of maintenance teams;',
        'Optimization of operational costs;',
        'Risk-based investment prioritization;',
        'Improvement of supply continuity indicators.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Authorized users can reset counters after maintenance, temporarily disable counting, and adjust monitoring and alarm-generation criteria.',
    },

    { kind: 'heading', level: 3, number: '6.3.9', text: 'Load Shed Application (LSA)' },
    {
      kind: 'paragraph',
      text: 'The LSA automates the load shedding and restoration process in contingency situations, operational constraints, or frequency control, determining the optimal combination of switching devices to achieve the target quantity with minimal impact on consumers.',
    },
    { kind: 'heading', level: 4, number: '6.3.9.1', text: 'Prioritization Rules' },
    {
      kind: 'table',
      headers: ['Criterion', 'Logic'],
      rows: [
        [
          'Load Priority (1-10)',
          'Hospitals, critical infrastructure, strategic consumers, and high-revenue/low-loss feeders receive higher priority and are preserved.',
        ],
        [
          'Shedding History (24 h)',
          'The algorithm distributes impacts equitably, avoiding repetitive shedding in the same regions.',
        ],
        [
          'Affected Consumers',
          'Among equivalent alternatives, select the configuration that affects the fewest consumers.',
        ],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.9.2', text: 'Four Operating Modes' },
    {
      kind: 'table',
      headers: ['Mode', 'Operation'],
      rows: [
        [
          'Manual Load Shed',
          'The operator specifies the load to be shed; the system calculates all combinations and presents alternatives (load removed, consumers affected, priority, and equipment involved); the operator selects and executes.',
        ],
        [
          'Manual Load Restoration',
          'Identical to manual shedding but focused on restoration; maintains timers and generates alarms when scheduled restoration is due.',
        ],
        [
          'Automatic Load Shed',
          'Executes automatic shedding based on system frequency (parameters LSS_str / LSS_stp) or scheduled time (Time-of-Day).',
        ],
        [
          'Automatic Load Restoration',
          'Automatically restores load when operating conditions return to normal (parameters LSR_str / LSR_stp), by frequency or scheduled times.',
        ],
      ],
    },
    { kind: 'heading', level: 4, number: '6.3.9.3', text: 'Records, Alarms, and Reports' },
    {
      kind: 'paragraph',
      text: 'All shedding and restoration operations are recorded as permanent operational events. Failures in executing supervisory commands generate specific alarms with probable cause.',
    },
    {
      kind: 'box',
      title: 'Available in the LSA history',
      items: [
        'Daily and operational area reports;',
        'Complete event history;',
        'Statistics of load shed and restored;',
        'Complete operational audit.',
      ],
    },

    { kind: 'heading', level: 2, text: 'System Screens' },
    {
      kind: 'figure',
      src: 'adms-rede-distribuicao-b.png',
      alt: 'Distribution network system display',
      caption: 'Distribution network system display',
    },
    {
      kind: 'figure',
      src: 'adms-criterios-localizacao-falta.png',
      alt: 'Fault locator criteria',
      caption: 'Fault locator criteria',
    },
    {
      kind: 'figure',
      src: 'adms-gestao-falta-restauracao.png',
      alt: 'Fault management and system restoration screen',
      caption: 'Fault management and system restoration screen',
    },
  ],
}
