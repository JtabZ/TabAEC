import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, X, AlertCircle } from 'lucide-react';

const AgentComposer = () => {
  const [selectedCapabilities, setSelectedCapabilities] = useState([]);
  const [agentName, setAgentName] = useState('');
  const [showAgentSummary, setShowAgentSummary] = useState(false);

  const capabilities = {
    sources: {
      name: 'Sources',
      color: 'blue',
      items: [
        { id: 's1', name: 'Business Applications', abbrev: 'BA', products: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud'] },
        { id: 's2', name: 'Collaboration Platforms', abbrev: 'CP', products: ['Slack', 'Chatter'] },
        { id: 's3', name: 'External Data Sources', abbrev: 'EXT', products: ['MuleSoft Anypoint', 'Data Cloud Partner Data', 'Cloud Connectors'] }
      ]
    },
    collection: {
      name: 'Collection',
      color: 'purple',
      items: [
        { id: 'c1', name: 'API Integration', abbrev: 'API', products: ['MuleSoft Anypoint Platform', 'Salesforce Connect'] },
        { id: 'c2', name: 'Data Connectors', abbrev: 'CON', products: ['Data Cloud Connectors', 'Tableau Connectors'] },
        { id: 'c3', name: 'Streaming & Batch', abbrev: 'STR', products: ['MuleSoft DataGraph', 'Data Cloud Streaming', 'Bulk API', 'Platform Events'] }
      ]
    },
    organization: {
      name: 'Organization',
      color: 'green',
      items: [
        { id: 'o1', name: 'Data Modeling', abbrev: 'MDL', products: ['Data Cloud Data Model Objects', 'Tableau Data Models'] },
        { id: 'o2', name: 'Identity Resolution', abbrev: 'ID', products: ['Data Cloud Identity Resolution', 'Matching Rules'] },
        { id: 'o3', name: 'Semantic Layer', abbrev: 'SEM', products: ['Tableau Semantic Layer', 'Data Cloud Calculated Insights'] },
        { id: 'o4', name: 'Governance & Quality', abbrev: 'GOV', products: ['Data Cloud Governance', 'Shield Platform Encryption', 'Data Quality Rules'] },
        { id: 'o5', name: 'Data Cataloging', abbrev: 'CAT', products: ['Data Cloud Data Explorer', 'Tableau Catalog'] }
      ]
    },
    analysis: {
      name: 'Analysis',
      color: 'orange',
      items: [
        { id: 'a1', name: 'Visual Analytics', abbrev: 'VIZ', products: ['Tableau Desktop', 'Tableau Cloud', 'CRM Analytics'] },
        { id: 'a2', name: 'Natural Language Query', abbrev: 'NLQ', products: ['Tableau Ask Data', 'Einstein GPT for Analytics'] },
        { id: 'a3', name: 'AI-Powered Insights', abbrev: 'AI', products: ['Einstein Discovery', 'Tableau Einstein', 'Einstein Predictions'] },
        { id: 'a4', name: 'Predictive Modeling', abbrev: 'ML', products: ['Einstein Discovery', 'Einstein Prediction Builder', 'Data Cloud Predictions'] },
        { id: 'a5', name: 'Ad-hoc Query', abbrev: 'SQL', products: ['Data Cloud Query API', 'SOQL', 'Tableau Data Engine'] },
        { id: 'a7', name: 'Embedded Analytics', abbrev: 'EMB', products: ['Tableau Embedded', 'CRM Analytics Embedded', 'Lightning Web Components'] }
      ]
    },
    action: {
      name: 'Action',
      color: 'red',
      items: [
        { id: 'ac1', name: 'Alerts & Notifications', abbrev: 'ALT', products: ['Slack Notifications', 'Tableau Alerts', 'Flow Builder'] },
        { id: 'ac2', name: 'Data Writeback', abbrev: 'WB', products: ['Tableau Extensions', 'MuleSoft APIs', 'Salesforce APIs'] },
        { id: 'ac3', name: 'Workflow Automation', abbrev: 'WF', products: ['Flow Builder', 'MuleSoft RPA', 'Slack Workflow Builder'] },
        { id: 'ac4', name: 'Agents in the Flow', abbrev: 'AGT', products: ['Einstein Copilot', 'Agentforce', 'Slack AI'] }
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
    }
  ];

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

  const loadTemplate = (template) => {
    setSelectedCapabilities(template.capabilities);
    setAgentName(template.name);
    setShowAgentSummary(true);
  };

  const clearSelection = () => {
    setSelectedCapabilities([]);
    setAgentName('');
    setShowAgentSummary(false);
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

  const renderCapabilityElement = (cap, layerColor) => {
    const isSelected = selectedCapabilities.includes(cap.id);
    const colors = colorClasses[layerColor];

    return (
      <div
        key={cap.id}
        onClick={() => toggleCapability(cap.id)}
        className={`
          relative aspect-square rounded-lg cursor-pointer transition-all duration-200 border-2
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
            Agent Composer
          </h1>
          <p className="text-gray-600 text-lg">Select capabilities across layers to compose your analytics agent</p>
        </div>

        {/* Templates */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Start Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {agentTemplates.map((template, idx) => (
              <div
                key={idx}
                onClick={() => loadTemplate(template)}
                className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-500 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-1 rounded ${
                    template.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                    template.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {template.complexity}
                  </span>
                  <span className="text-gray-500">{template.timeEstimate}</span>
                </div>
              </div>
            ))}
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

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Selected Capabilities</div>
                <div className="text-3xl font-bold">{selectedCapabilities.length}</div>
              </div>
              {complexity && (
                <>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Complexity</div>
                    <div className="text-3xl font-bold">{complexity.level}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Est. Time</div>
                    <div className="text-3xl font-bold">{complexity.time}</div>
                  </div>
                </>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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