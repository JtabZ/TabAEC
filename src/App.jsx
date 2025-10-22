import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, X, AlertCircle } from 'lucide-react';

const AgentComposer = () => {
  const [selectedCapabilities, setSelectedCapabilities] = useState([]);
  const [agentName, setAgentName] = useState('');
  const [showAgentSummary, setShowAgentSummary] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [showCustomAgentInput, setShowCustomAgentInput] = useState(false);
  const [customAgentDescription, setCustomAgentDescription] = useState('');

  const capabilities = {
    sources: {
      name: 'Sources',
      color: 'blue',
      items: [
        { id: 's1', name: 'Business Applications', abbrev: 'BA', description: 'Core Salesforce CRM and business apps where operational data originates', products: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud'] },
        { id: 's2', name: 'Collaboration Platforms', abbrev: 'CP', description: 'Team communication and collaboration tools generating workflow data', products: ['Slack', 'Chatter'] },
        { id: 's3', name: 'External Data Sources', abbrev: 'EXT', description: 'Connect to third-party systems and partner data', products: ['MuleSoft Anypoint', 'Data Cloud Partner Data', 'Cloud Connectors'] }
      ]
    },
    collection: {
      name: 'Collection',
      color: 'purple',
      items: [
        { id: 'c1', name: 'API Integration', abbrev: 'API', description: 'Connect systems via REST/SOAP APIs for data exchange', products: ['MuleSoft Anypoint', 'Salesforce Connect'] },
        { id: 'c2', name: 'Data Connectors', abbrev: 'CON', description: 'Pre-built connectors to ingest data from various sources', products: ['Data Cloud Connectors', 'Tableau Connectors'] },
        { id: 'c3', name: 'Streaming & Batch', abbrev: 'STR', description: 'Real-time streaming or scheduled batch data ingestion', products: ['Data Cloud Streaming', 'Bulk API', 'Platform Events'] }
      ]
    },
    organization: {
      name: 'Organization',
      color: 'green',
      items: [
        { id: 'o1', name: 'Data Modeling', abbrev: 'MDL', description: 'Structure data into usable schemas and relationships', products: ['Data Cloud DMO', 'Tableau Data Models'] },
        { id: 'o2', name: 'Identity Resolution', abbrev: 'ID', description: 'Unify customer records across systems into single profiles', products: ['Data Cloud Identity Resolution', 'Matching Rules'] },
        { id: 'o3', name: 'Semantic Layer', abbrev: 'SEM', description: 'Business-friendly metrics and definitions for consistent analysis', products: ['Tableau Semantic Layer', 'Calculated Insights'] },
        { id: 'o4', name: 'Governance & Quality', abbrev: 'GOV', description: 'Data security, compliance, and quality management', products: ['Data Cloud Governance', 'Shield Encryption', 'Data Quality Rules'] },
        { id: 'o5', name: 'Data Cataloging', abbrev: 'CAT', description: 'Discover, document, and manage data assets', products: ['Data Cloud Explorer', 'Tableau Catalog'] }
      ]
    },
    analysis: {
      name: 'Analysis',
      color: 'orange',
      items: [
        { id: 'a1', name: 'Visual Analytics', abbrev: 'VIZ', description: 'Interactive dashboards and visualizations for data exploration', products: ['Tableau Cloud', 'Tableau Desktop', 'CRM Analytics'] },
        { id: 'a2', name: 'Natural Language Query', abbrev: 'NLQ', description: 'Ask questions in plain English to query data', products: ['Tableau Ask Data', 'Einstein GPT for Analytics'] },
        { id: 'a3', name: 'AI-Powered Insights', abbrev: 'AI', description: 'Automated insights and anomaly detection', products: ['Einstein Discovery', 'Tableau Einstein'] },
        { id: 'a4', name: 'Predictive Modeling', abbrev: 'ML', description: 'Build and deploy ML models for forecasting and predictions', products: ['Einstein Discovery', 'Einstein Prediction Builder'] },
        { id: 'a5', name: 'Ad-hoc Query', abbrev: 'SQL', description: 'Direct SQL/SOQL queries for custom data retrieval', products: ['Data Cloud Query API', 'SOQL'] },
        { id: 'a7', name: 'Embedded Analytics', abbrev: 'EMB', description: 'Integrate analytics directly into business applications', products: ['Tableau Embedded', 'CRM Analytics Embedded'] }
      ]
    },
    action: {
      name: 'Action',
      color: 'red',
      items: [
        { id: 'ac1', name: 'Alerts & Notifications', abbrev: 'ALT', description: 'Proactive alerts when data crosses thresholds', products: ['Slack Notifications', 'Tableau Alerts', 'Flow Builder'] },
        { id: 'ac2', name: 'Data Writeback', abbrev: 'WB', description: 'Update source systems based on analytical insights', products: ['Tableau Extensions', 'MuleSoft APIs', 'Salesforce APIs'] },
        { id: 'ac3', name: 'Workflow Automation', abbrev: 'WF', description: 'Trigger automated business processes from insights', products: ['Flow Builder', 'MuleSoft RPA', 'Slack Workflow Builder'] },
        { id: 'ac4', name: 'Agents in the Flow', abbrev: 'AGT', description: 'AI agents that take autonomous actions within workflows', products: ['Agentforce', 'Einstein Copilot', 'Slack AI'] }
      ]
    }
  };

  const agentTemplates = [
    {
      name: 'Ad-hoc Query Agent',
      description: 'Enables natural language queries that execute SQL/SOQL behind the scenes',
      capabilities: ['s1', 'c2', 'o1', 'o3', 'o5', 'a5', 'a2', 'ac1'],
      complexity: 'Low',
      timeEstimate: '1-2 weeks'
    },
    {
      name: 'Sales Forecast Agent',
      description: 'Predicts future sales and automatically updates forecasts',
      capabilities: ['s1', 'c2', 'o1', 'o3', 'a4', 'ac4'],
      complexity: 'Medium',
      timeEstimate: '2-3 weeks'
    },
    {
      name: 'Real-time Dashboard Alert Agent',
      description: 'Monitors KPIs in real-time and sends intelligent alerts via Slack',
      capabilities: ['s1', 'c3', 'o1', 'o3', 'a1', 'ac1'],
      complexity: 'Medium',
      timeEstimate: '2-3 weeks'
    },
    {
      name: 'Embedded Analytics Assistant',
      description: 'Delivers contextual analytics within business processes',
      capabilities: ['s1', 'c2', 'o1', 'o3', 'a7', 'a2', 'ac4'],
      complexity: 'Medium',
      timeEstimate: '2-3 weeks'
    },
    {
      name: 'Customer Churn Predictor',
      description: 'Identifies at-risk customers and triggers retention workflows',
      capabilities: ['s1', 's2', 'c1', 'c2', 'o1', 'o2', 'o3', 'a4', 'ac3', 'ac4'],
      complexity: 'High',
      timeEstimate: '3-4 weeks'
    },
    {
      name: 'Customer 360 Insight Agent',
      description: 'Unifies customer data and provides conversational insights',
      capabilities: ['s1', 's2', 'c1', 'c2', 'o1', 'o2', 'o3', 'o5', 'a2', 'a3', 'ac4'],
      complexity: 'High',
      timeEstimate: '4-6 weeks'
    },
    {
      name: 'Sales Excellence + Operations Agent',
      description: 'Monitors sales processes, identifies bottlenecks, and recommends process improvements',
      detailedDescription: 'Analyzes sales cycle efficiency, identifies process deviations, recommends territory realignment, monitors forecast accuracy, and generates executive dashboards.',
      capabilities: ['s1', 'c2', 'o1', 'o3', 'o5', 'a1', 'a3', 'a4', 'ac1', 'ac3'],
      complexity: 'High',
      timeEstimate: '6-8 weeks'
    },
    {
      name: 'Lead Routing Agent',
      description: 'Automatically qualifies, scores, and routes leads to optimal sales reps',
      detailedDescription: 'Real-time lead scoring with AI, smart capacity balancing, skills-based routing, geographic logic, and SLA monitoring.',
      capabilities: ['s1', 'c2', 'o1', 'a4', 'ac3', 'ac4'],
      complexity: 'Medium',
      timeEstimate: '3-4 weeks'
    },
    {
      name: 'SDR Agent - Pipeline Builder',
      description: 'Autonomous prospecting agent that researches accounts and personalizes outreach',
      detailedDescription: 'Researches prospects, generates personalized sequences, manages multi-channel cadences, books meetings, and tracks engagement.',
      capabilities: ['s1', 's3', 'c1', 'c2', 'o1', 'o2', 'a2', 'a3', 'ac1', 'ac3', 'ac4'],
      complexity: 'High',
      timeEstimate: '8-10 weeks'
    },
    {
      name: 'Sales Coach Agent',
      description: 'Analyzes rep performance and provides real-time guidance to accelerate deals',
      detailedDescription: 'Identifies skill gaps, suggests next best actions, provides pre-call briefs, delivers deal risk assessments, and sends personalized coaching tips.',
      capabilities: ['s1', 's2', 'c2', 'o1', 'o3', 'a3', 'a4', 'ac1', 'ac4'],
      complexity: 'High',
      timeEstimate: '6-8 weeks'
    },
    {
      name: 'Slack Sales Agent',
      description: 'Conversational agent in Slack for prospect insights, coaching, and sales actions',
      detailedDescription: 'Answers questions about accounts, provides prospect research, suggests next steps, creates Salesforce records, and sends proactive alerts.',
      capabilities: ['s1', 's2', 'c1', 'o1', 'o3', 'a2', 'ac1', 'ac4'],
      complexity: 'Medium',
      timeEstimate: '5-7 weeks'
    },
    {
      name: 'Sales Actions Agent - Deal Accelerator',
      description: 'Guides sellers through complex sales cycles and manages account relationships',
      detailedDescription: 'Generates mutual action plans, maps stakeholders, automates follow-ups, coordinates partners, and tracks competitive threats.',
      capabilities: ['s1', 's2', 's3', 'c1', 'c2', 'o1', 'o2', 'o3', 'a7', 'ac2', 'ac3', 'ac4'],
      complexity: 'Very High',
      timeEstimate: '10-12 weeks'
    },
    {
      name: 'Pipeline Agent - Inspection & Analysis',
      description: 'Provides deep analytical insights and ensures forecast accuracy',
      detailedDescription: 'Performs automated pipeline reviews, identifies stalled deals, analyzes deal velocity, flags forecast anomalies, and simulates scenarios.',
      capabilities: ['s1', 'c2', 'o1', 'o3', 'o5', 'a1', 'a3', 'a4', 'a5', 'ac1'],
      complexity: 'High',
      timeEstimate: '6-8 weeks'
    },
    {
      name: 'Quoting Agent - Intelligent CPQ',
      description: 'Generates accurate, compliant quotes based on complex business rules',
      detailedDescription: 'Applies discount matrices, ensures product compatibility, validates margins, routes approvals, and handles subscription pricing.',
      capabilities: ['s1', 'c1', 'c2', 'o1', 'o4', 'a5', 'ac2', 'ac3'],
      complexity: 'Medium',
      timeEstimate: '5-7 weeks'
    },
    {
      name: 'Agent Surface - Slack Intelligence Feed',
      description: 'Surfaces critical sales intelligence and insights directly into Slack',
      detailedDescription: 'Pushes real-time alerts, delivers performance summaries, shares best practices, notifies at-risk deals, and announces wins.',
      capabilities: ['s1', 's2', 'c3', 'o1', 'a1', 'a3', 'ac1'],
      complexity: 'Medium',
      timeEstimate: '3-5 weeks'
    }
  ];

  const businessFunctions = {
    revenueDrivers: {
      name: 'Revenue Drivers',
      icon: '💰',
      description: 'Functions that create growth by generating revenue, influencing market expansion, and shaping customer experience.',
      valueProps: 'Speed, agility, and clear insight into what moves the numbers. Measured by ARR, CAC, LTV, churn, and revenue per customer.',
      functions: [
        { id: 'sales', name: 'Sales', description: 'Revenue generation, pipeline execution, and quota attainment', recommendedAgents: [1, 6, 9, 10, 11, 13] },
        { id: 'marketing', name: 'Marketing', description: 'Demand generation, pipeline contribution, and brand-to-revenue performance', recommendedAgents: [8, 0, 2, 5] },
        { id: 'customer-success', name: 'Customer Success', description: 'Adoption, retention, and expansion', recommendedAgents: [4, 5, 11, 2] },
        { id: 'rev-ops', name: 'Revenue Operations', description: 'GTM alignment with metrics, process, and accountability', recommendedAgents: [6, 13, 0, 1] },
        { id: 'partnerships', name: 'Partnerships', description: 'Co-sell motions, partner pipeline, and channel performance', recommendedAgents: [12, 1, 2, 5] },
        { id: 'product', name: 'Product & Engineering', description: 'What the business sells and how fast it ships', recommendedAgents: [0, 3, 2] }
      ]
    },
    costCenters: {
      name: 'Cost Centers',
      icon: '🏛️',
      description: 'Functions that protect and scale the business through control, compliance, and operational clarity.',
      valueProps: 'Accuracy, efficiency, and governance. Success defined by predictability, trust in data, and defensible decisions.',
      functions: [
        { id: 'support', name: 'Support', description: 'Frontline teams managing tickets, SLAs, and CSAT', recommendedAgents: [2, 3, 0] },
        { id: 'hr', name: 'HR / People Ops', description: 'Talent, headcount planning, engagement, and workforce health', recommendedAgents: [0, 2, 3] },
        { id: 'it-ops', name: 'IT Operations', description: 'Internal systems, uptime, and help desk operations', recommendedAgents: [2, 0, 3] },
        { id: 'finance', name: 'Finance', description: 'Forecasting, budgeting, and performance tracking', recommendedAgents: [0, 1, 2] },
        { id: 'legal', name: 'Legal', description: 'Contracts, risk mitigation, and operational compliance', recommendedAgents: [0, 3, 2] },
        { id: 'security', name: 'Security & Compliance', description: 'Audit readiness, regulatory posture, and risk mitigation', recommendedAgents: [2, 0, 3] }
      ]
    }
  };

  const colorClasses = {
    blue: { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', border: 'border-blue-600', text: 'text-blue-700', lightBg: 'bg-blue-50' },
    purple: { bg: 'bg-purple-500', hover: 'hover:bg-purple-600', border: 'border-purple-600', text: 'text-purple-700', lightBg: 'bg-purple-50' },
    green: { bg: 'bg-green-500', hover: 'hover:bg-green-600', border: 'border-green-600', text: 'text-green-700', lightBg: 'bg-green-50' },
    orange: { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', border: 'border-orange-600', text: 'text-orange-700', lightBg: 'bg-orange-50' },
    red: { bg: 'bg-red-500', hover: 'hover:bg-red-600', border: 'border-red-600', text: 'text-red-700', lightBg: 'bg-red-50' }
  };

  const toggleCapability = (capId) => {
    setSelectedCapabilities(prev => 
      prev.includes(capId) 
        ? prev.filter(id => id !== capId)
        : [...prev, capId]
    );
  };

  const loadTemplate = (template, idx) => {
    setSelectedCapabilities(template.capabilities);
    setAgentName(template.name);
    setShowAgentSummary(true);
    setSelectedTemplate(idx);
  };

  const clearSelection = () => {
    setSelectedCapabilities([]);
    setAgentName('');
    setShowAgentSummary(false);
    setSelectedTemplate(null);
  };

  const getRecommendedAgents = () => {
    if (!selectedFunction) return [];

    for (const category of Object.values(businessFunctions)) {
      const func = category.functions.find(f => f.id === selectedFunction);
      if (func) return func.recommendedAgents;
    }
    return [];
  };

  const parseAgentDescription = (description) => {
    const text = description.toLowerCase();
    const suggestedCapabilities = [];

    // Keyword mappings for each capability
    const keywordMap = {
      // Sources
      's1': ['salesforce', 'sales cloud', 'service cloud', 'crm', 'customer data', 'accounts', 'contacts', 'opportunities', 'cases'],
      's2': ['slack', 'chatter', 'collaborate', 'team chat', 'messaging'],
      's3': ['external', 'third party', 'partner data', 'outside system', 'integration'],

      // Collection
      'c1': ['api', 'rest', 'soap', 'integrate', 'connect systems', 'web service'],
      'c2': ['connector', 'ingest', 'import', 'pull data', 'extract'],
      'c3': ['real-time', 'streaming', 'batch', 'events', 'live data', 'real time'],

      // Organization
      'o1': ['model', 'schema', 'structure', 'organize', 'data model', 'relationships'],
      'o2': ['identity', 'dedupe', 'matching', 'unified profile', 'customer 360', 'merge records'],
      'o3': ['semantic', 'metrics', 'calculated', 'business logic', 'kpi', 'measures'],
      'o4': ['governance', 'security', 'compliance', 'permissions', 'data quality', 'rules'],
      'o5': ['catalog', 'discover', 'metadata', 'lineage', 'documentation'],

      // Analysis
      'a1': ['dashboard', 'visualization', 'chart', 'graph', 'visual', 'report'],
      'a2': ['natural language', 'ask questions', 'conversational', 'chat', 'nlq', 'ask data'],
      'a3': ['insights', 'automated analysis', 'anomaly', 'trends', 'ai insights'],
      'a4': ['predict', 'forecast', 'machine learning', 'ml', 'churn', 'propensity', 'scoring'],
      'a5': ['query', 'sql', 'soql', 'ad hoc', 'custom query', 'data exploration'],
      'a7': ['embed', 'embedded analytics', 'in-app', 'contextual'],

      // Action
      'ac1': ['alert', 'notify', 'notification', 'threshold', 'trigger alert'],
      'ac2': ['writeback', 'update records', 'modify data', 'write back'],
      'ac3': ['workflow', 'automate', 'automation', 'process', 'flow'],
      'ac4': ['agent', 'copilot', 'agentforce', 'autonomous', 'ai agent']
    };

    // Check each capability for keyword matches
    for (const [capId, keywords] of Object.entries(keywordMap)) {
      if (keywords.some(keyword => text.includes(keyword))) {
        suggestedCapabilities.push(capId);
      }
    }

    // Remove duplicates
    return [...new Set(suggestedCapabilities)];
  };

  const handleCustomAgentSubmit = () => {
    if (customAgentDescription.trim()) {
      const suggestedCaps = parseAgentDescription(customAgentDescription);
      setSelectedCapabilities(suggestedCaps);
      setAgentName('Custom Agent');
      setShowAgentSummary(true);
      setShowCustomAgentInput(false);
      setCustomAgentDescription('');
    }
  };

  const getSelectedCapabilityDetails = () => {
    const details = [];
    Object.values(capabilities).forEach(layer => {
      layer.items.forEach(cap => {
        if (selectedCapabilities.includes(cap.id)) {
          details.push({ ...cap, layer: layer.name, color: layer.color });
        }
      });
    });
    return details;
  };

  const getAllProducts = () => {
    const products = new Set();
    getSelectedCapabilityDetails().forEach(cap => {
      cap.products.forEach(p => products.add(p));
    });
    return Array.from(products);
  };

  const getComplexity = () => {
    const count = selectedCapabilities.length;
    if (count === 0) return null;
    if (count <= 4) return { level: 'Low', color: 'green', time: '1-2 weeks' };
    if (count <= 8) return { level: 'Medium', color: 'yellow', time: '2-3 weeks' };
    return { level: 'High', color: 'red', time: '3-6 weeks' };
  };

  const getPlatformIntersections = () => {
    const products = getAllProducts();
    const intersections = [];

    // Define platform categories
    const salesforceCRM = ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud'];
    const dataCloud = ['Data Cloud Connectors', 'Data Cloud Streaming', 'Data Cloud DMO', 'Data Cloud Data Model Objects',
                       'Data Cloud Identity Resolution', 'Data Cloud Calculated Insights', 'Calculated Insights',
                       'Data Cloud Governance', 'Data Cloud Explorer', 'Data Cloud Query API', 'Data Cloud Predictions'];
    const tableau = ['Tableau Desktop', 'Tableau Cloud', 'Tableau Connectors', 'Tableau Data Models',
                     'Tableau Semantic Layer', 'Tableau Catalog', 'Tableau Ask Data', 'Tableau Einstein',
                     'Tableau Embedded', 'Tableau Alerts', 'Tableau Extensions'];
    const tableauNext = ['Tableau Ask Data', 'Tableau Einstein', 'Einstein GPT for Analytics'];
    const predictiveML = ['Einstein Discovery', 'Einstein Prediction Builder', 'Data Cloud Predictions',
                          'Einstein Predictions', 'Tableau Einstein'];
    const slack = ['Slack', 'Slack Notifications', 'Slack Workflow Builder', 'Slack AI'];
    const mulesoft = ['MuleSoft Anypoint', 'MuleSoft Anypoint Platform', 'MuleSoft DataGraph',
                      'MuleSoft RPA', 'MuleSoft APIs'];

    // Check which platforms are involved
    const hasSalesforceCRM = products.some(p => salesforceCRM.includes(p));
    const hasDataCloud = products.some(p => dataCloud.includes(p));
    const hasTableau = products.some(p => tableau.includes(p));
    const hasTableauNext = products.some(p => tableauNext.includes(p));
    const hasPredictiveML = products.some(p => predictiveML.includes(p));
    const hasSlack = products.some(p => slack.includes(p));
    const hasMuleSoft = products.some(p => mulesoft.includes(p));

    // Detect intersections and collaborations
    if (hasSalesforceCRM && hasDataCloud) {
      intersections.push({
        platforms: ['Salesforce CRM', 'Data Cloud'],
        description: 'CRM data unification - bringing operational data into a unified data model for deeper insights',
        icon: '🔄'
      });
    }

    if (hasDataCloud && hasTableau) {
      intersections.push({
        platforms: ['Data Cloud', 'Tableau'],
        description: 'Unified analytics - Tableau visualizing harmonized Data Cloud data with semantic layer',
        icon: '📊'
      });
    }

    if (hasSalesforceCRM && hasTableau && !hasDataCloud) {
      intersections.push({
        platforms: ['Salesforce CRM', 'Tableau'],
        description: 'Direct CRM analytics - Tableau connecting to Salesforce data for operational reporting',
        icon: '📈'
      });
    }

    if (hasTableauNext) {
      intersections.push({
        platforms: ['Tableau Next (AI-Powered)'],
        description: 'Natural language analytics - conversational data exploration with Einstein-powered insights',
        icon: '🤖'
      });
    }

    if (hasPredictiveML && (hasDataCloud || hasSalesforceCRM)) {
      intersections.push({
        platforms: ['Predictive AI', hasDataCloud ? 'Data Cloud' : 'Salesforce CRM'],
        description: 'Embedded predictions - ML models scoring data and surfacing predictions in operational workflows',
        icon: '🎯'
      });
    }

    if (hasSlack && (hasSalesforceCRM || hasTableau)) {
      intersections.push({
        platforms: ['Slack', hasSalesforceCRM ? 'Salesforce CRM' : 'Tableau'],
        description: 'Conversational workflows - alerts and actions delivered where teams collaborate',
        icon: '💬'
      });
    }

    if (hasMuleSoft && (hasSalesforceCRM || hasDataCloud)) {
      intersections.push({
        platforms: ['MuleSoft', hasDataCloud ? 'Data Cloud' : 'Salesforce CRM'],
        description: 'Integration backbone - connecting external systems to the Salesforce ecosystem',
        icon: '🔗'
      });
    }

    if (hasSalesforceCRM && hasDataCloud && hasTableau) {
      intersections.push({
        platforms: ['Salesforce CRM', 'Data Cloud', 'Tableau'],
        description: 'Complete data-to-insights stack - operational data → unified model → visual analytics',
        icon: '⭐'
      });
    }

    return intersections;
  };

  const renderCapabilityElement = (cap, layerColor) => {
    const isSelected = selectedCapabilities.includes(cap.id);
    const colors = colorClasses[layerColor];

    return (
      <div
        key={cap.id}
        onClick={() => toggleCapability(cap.id)}
        className={`
          relative aspect-square rounded-lg cursor-pointer transition-all duration-200 border-2 group
          ${isSelected
            ? `${colors.bg} border-white shadow-lg scale-105`
            : `bg-white ${colors.border} ${colors.hover} hover:scale-105`
          }
        `}
      >
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg z-10">
            <Check className="w-4 h-4 text-green-600" />
          </div>
        )}
        <div className={`h-full flex flex-col items-center justify-center p-2 ${isSelected ? 'text-white' : colors.text}`}>
          <div className="text-2xl font-bold mb-1">{cap.abbrev}</div>
          <div className="text-xs text-center leading-tight font-medium">{cap.name}</div>
        </div>

        {/* Tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl w-64">
            <div className="font-bold mb-1">{cap.name}</div>
            <div className="text-gray-300 mb-2 leading-relaxed">{cap.description}</div>
            <div className="border-t border-gray-700 pt-2">
              <div className="font-semibold text-gray-400 mb-1">Examples:</div>
              <div className="space-y-0.5">
                {cap.products.slice(0, 3).map((product, idx) => (
                  <div key={idx} className="text-gray-300">• {product}</div>
                ))}
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
              <div className="border-8 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const complexity = getComplexity();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-purple-600" />
            Tableau Agentic Enterprise Composer
          </h1>
          <p className="text-gray-600 text-lg">Select capabilities across layers to compose your analytics agent</p>
        </div>

        {/* Business Functions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Business Functions</h2>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Two Types of Functions. Two Paths to Value.</strong> Every function is critical, but they don't all play the same role.
            Some drive growth. Others protect and scale the business. Select a function below to see recommended agent types.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(businessFunctions).map(([key, category]) => (
              <div key={key} className="border-2 border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.name}
                </h3>
                <p className="text-sm text-gray-700 mb-2">{category.description}</p>
                <p className="text-xs text-gray-500 italic mb-4">{category.valueProps}</p>

                <div className="grid grid-cols-2 gap-2">
                  {category.functions.map((func) => {
                    const isSelected = selectedFunction === func.id;
                    return (
                      <div
                        key={func.id}
                        onClick={() => setSelectedFunction(isSelected ? null : func.id)}
                        className={`group relative border-2 rounded-lg p-3 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50 shadow-md'
                            : 'border-gray-200 hover:border-purple-400 hover:shadow-sm'
                        }`}
                      >
                        <div className="font-semibold text-sm text-gray-900">{func.name}</div>

                        {/* Tooltip */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                          <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl w-56">
                            <div className="font-bold mb-1">{func.name}</div>
                            <div className="text-gray-300">{func.description}</div>
                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                              <div className="border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-800">Agent Types</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-600 font-semibold">Complexity:</span>
              <span className="px-2 py-1 rounded bg-green-100 text-green-800 font-semibold">Low</span>
              <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 font-semibold">Medium</span>
              <span className="px-2 py-1 rounded bg-red-100 text-red-800 font-semibold">High</span>
              <span className="px-2 py-1 rounded bg-purple-100 text-purple-800 font-semibold">Very High</span>
            </div>
          </div>
          {selectedFunction ? (
            <p className="text-sm text-gray-600 mb-4">
              <strong>Recommended for your selected function.</strong> These agent types align with the priorities and workflows of your chosen business function.
              {' '}Highlighted agents are the best fit.
            </p>
          ) : (
            <p className="text-sm text-gray-600 mb-4">
              Select a business function above to see recommended agent types, or choose any agent type to get started.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {agentTemplates.map((template, idx) => {
              const isSelected = selectedTemplate === idx;
              const recommendedAgents = getRecommendedAgents();
              const isRecommended = recommendedAgents.includes(idx);

              return (
                <div
                  key={idx}
                  onClick={() => loadTemplate(template, idx)}
                  className={`group relative border-2 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 shadow-lg'
                      : isRecommended
                      ? 'border-blue-400 bg-blue-50 hover:border-purple-500'
                      : 'border-gray-200 hover:border-purple-500'
                  }`}
                >
                  {isRecommended && !isSelected && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-10">
                      Recommended
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  <div className="flex items-start text-xs">
                    <span className={`px-2 py-1 rounded font-semibold ${
                      template.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                      template.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      template.complexity === 'Very High' ? 'bg-purple-100 text-purple-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {template.complexity}
                    </span>
                  </div>

                  {/* Tooltip for detailed description */}
                  {template.detailedDescription && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                      <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl w-72">
                        <div className="font-bold mb-1">{template.name}</div>
                        <div className="text-gray-300 leading-relaxed">{template.detailedDescription}</div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                          <div className="border-6 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Custom Agent Builder */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            {!showCustomAgentInput ? (
              <button
                onClick={() => setShowCustomAgentInput(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all text-gray-600 hover:text-purple-700"
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Don't see an agent you're looking for? Describe what you want to build.</span>
              </button>
            ) : (
              <div className="border-2 border-purple-400 rounded-lg p-4 bg-purple-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Describe Your Custom Agent</h3>
                  <button
                    onClick={() => {
                      setShowCustomAgentInput(false);
                      setCustomAgentDescription('');
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Tell us what you want your agent to do. Be specific about data sources, analysis needs, and actions.
                </p>
                <textarea
                  value={customAgentDescription}
                  onChange={(e) => setCustomAgentDescription(e.target.value)}
                  placeholder="Example: I need an agent that monitors Salesforce opportunities in real-time, predicts which deals are at risk of churning, and sends alerts to the sales team via Slack when action is needed."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  rows="4"
                />
                <div className="flex items-center justify-end gap-3 mt-3">
                  <button
                    onClick={() => {
                      setShowCustomAgentInput(false);
                      setCustomAgentDescription('');
                    }}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCustomAgentSubmit}
                    disabled={!customAgentDescription.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Sparkles className="w-4 h-4" />
                    Generate Agent
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Periodic Table Grid */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Capability Matrix</h2>
            {selectedCapabilities.length > 0 && (
              <button
                onClick={clearSelection}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
                Clear Selection ({selectedCapabilities.length})
              </button>
            )}
          </div>

          <div className="grid grid-cols-5 gap-6">
            {Object.entries(capabilities).map(([key, layer]) => {
              const colors = colorClasses[layer.color];
              
              return (
                <div key={key} className="space-y-3">
                  <div className={`${colors.bg} text-white font-bold text-center py-3 rounded-lg text-sm`}>
                    {layer.name}
                  </div>
                  <div className="space-y-3">
                    {layer.items.map(cap => renderCapabilityElement(cap, layer.color))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agent Summary */}
        {selectedCapabilities.length > 0 && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Sparkles className="w-8 h-8" />
                {agentName || 'Custom Agent'}
              </h2>
              {!agentName && (
                <input
                  type="text"
                  placeholder="Name your agent..."
                  className="px-4 py-2 rounded-lg text-gray-900 placeholder-gray-400"
                  onChange={(e) => setAgentName(e.target.value)}
                />
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Selected Capabilities</div>
                <div className="text-3xl font-bold">{selectedCapabilities.length}</div>
              </div>
              {complexity && (
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Complexity</div>
                  <div className="text-3xl font-bold">{complexity.level}</div>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Capabilities by Layer</h3>
                <div className="space-y-2">
                  {getSelectedCapabilityDetails().map(cap => {
                    const colors = colorClasses[cap.color];
                    return (
                      <div key={cap.id} className={`${colors.lightBg} ${colors.text} px-3 py-2 rounded-lg text-sm font-medium`}>
                        {cap.layer}: {cap.name}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Required Products</h3>
                <div className="space-y-2">
                  {getAllProducts().map(product => (
                    <div key={product} className="bg-white/20 px-3 py-2 rounded-lg text-sm">
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Intersections */}
            {getPlatformIntersections().length > 0 && (
              <div className="border-t border-white/20 pt-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>Platform Intersections & Collaborations</span>
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Your agent leverages multiple Salesforce platforms working together. Here's how they intersect:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {getPlatformIntersections().map((intersection, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{intersection.icon}</span>
                        <div>
                          <div className="font-bold text-sm mb-1">
                            {intersection.platforms.join(' + ')}
                          </div>
                          <div className="text-xs opacity-90 leading-relaxed">
                            {intersection.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCapabilities.length > 0 && !selectedCapabilities.some(id => id.startsWith('o')) && (
              <div className="mt-6 bg-yellow-500 text-yellow-900 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong>Missing Foundation:</strong> Your agent needs Organization layer capabilities (data modeling, semantic layer) to function properly. Consider adding them.
                </div>
              </div>
            )}
          </div>
        )}

        {selectedCapabilities.length === 0 && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
            <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Build Your Agent?</h3>
            <p className="text-gray-600">Select capabilities from the matrix above or choose a template to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentComposer;