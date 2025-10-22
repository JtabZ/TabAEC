# Agent Composer - Context Document

## Project Overview

The **Tableau Agentic Enterprise Composer** (formerly Agent Composer) is an interactive web application that visualizes and demonstrates how analytics agents are composed from capabilities across the Salesforce and Tableau AI platforms. It helps communicate the hidden technical complexities of building agents by showing that AI doesn't replace the technology stack—it makes capabilities composable at the capability level.

**Current Application Title**: "Tableau Agentic Enterprise Composer"

### Strategic Purpose

This application addresses a critical insight from enterprise AI adoption:

> "AI has lowered the entry level for automation of 'agents'. AI allows us to pick and choose different capabilities all the way at the bottom level and create an Agent out of it. I can choose 'retrieval of data, data streaming, and organization into a data model' and make an agent out of those processes and eliminate work."

**The Problem It Solves:**
- People see ChatGPT and think AI can do everything
- Sales teams request "agents" without understanding the underlying complexity
- The Agent Composer visualizes how agents are actually composed from capabilities across multiple layers
- It demonstrates that AI doesn't replace the stack—it enables capability-level composition

### Project Context: The Three-Phase Ecosystem

The Agent Composer is **Phase 2** of a larger initiative to visualize the Salesforce data & analytics ecosystem:

1. **Phase 1 (Complete)**: Data & Analytics Layers Visualization
   - Shows the 5-layer ecosystem with zoom functionality
   - Features "Demo Reality Check" mode

2. **Phase 2 (Complete)**: Tableau Agentic Enterprise Composer (THIS APPLICATION)
   - Enables users to compose analytics agents by selecting capabilities across layers
   - Interactive capability selection with agent type templates and complexity analysis
   - Business Functions framework to align agents with revenue drivers and cost centers
   - Platform intersection detection to show how Salesforce, Data Cloud, Tableau, and other platforms collaborate

3. **Phase 3 (Not Yet Started)**: Comprehensive Capability Matrix
   - Separate reference tool showing ALL possible Salesforce capabilities
   - The Agent Composer intentionally shows only ~21 core capabilities most relevant to agent composition

## Design Philosophy

### The "Periodic Table" Metaphor

The entire visual design is inspired by the periodic table of elements:

- Each capability is an "element" with an abbreviation (like chemical symbols: VIZ, NLQ, API, etc.)
- Elements are organized in columns by their layer (like periodic table groups)
- Elements can be selected/combined to create new compounds (agents)
- The visual language is clean, scientific, and educational

### Scope: Agent-Focused vs. Comprehensive

**Critical Design Decision**: This tool shows only the core capabilities most relevant to agent composition for data analysis, not every possible capability.

**Rationale:**
- Focus on capabilities that commonly combine into agents
- Keep it practical and not overwhelming (~21 capabilities total in current implementation)
- A separate "Comprehensive Capability Matrix" will show everything else
- This tool is about composition, not reference

## The 5-Layer Data & Analytics Framework

The foundation of this application is Salesforce's 5-layer data & analytics framework:

### Layer 1: Sources (Blue)
**Where business data lives/appears**

Capabilities:
- **Business Applications (BA)**: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud
- **Collaboration Platforms (CP)**: Slack, Chatter
- **External Data Sources (EXT)**: MuleSoft Anypoint, Data Cloud Partner Data, Cloud Connectors

### Layer 2: Collection (Purple)
**How data gets in (connectors, APIs, pipelines, streaming/batch)**

Capabilities:
- **API Integration (API)**: MuleSoft Anypoint Platform, Salesforce Connect
- **Data Connectors (CON)**: Data Cloud Connectors, Tableau Connectors
- **Streaming & Batch (STR)**: MuleSoft DataGraph, Data Cloud Streaming, Bulk API, Platform Events

### Layer 3: Organization (Green)
**How it's made usable (modeling, identity, semantics, governance)**

Capabilities:
- **Data Modeling (MDL)**: Data Cloud Data Model Objects, Tableau Data Models
- **Identity Resolution (ID)**: Data Cloud Identity Resolution, Matching Rules
- **Semantic Layer (SEM)**: Tableau Semantic Layer, Data Cloud Calculated Insights
- **Governance & Quality (GOV)**: Data Cloud Governance, Shield Platform Encryption, Data Quality Rules
- **Data Cataloging (CAT)**: Data Cloud Data Explorer, Tableau Catalog

**Design Note**: This layer is critical for agents—AI amplifies the importance of well-organized data. The semantic layer becomes the "agent's understanding" of the business.

### Layer 4: Analysis (Orange)
**How people/AI explore and understand (dashboards, NLQ, auto-insights)**

This is the focus area with 6 capabilities:
- **Visual Analytics (VIZ)**: Tableau Desktop, Tableau Cloud, CRM Analytics
- **Natural Language Query (NLQ)**: Tableau Ask Data, Einstein GPT for Analytics
- **AI-Powered Insights (AI)**: Einstein Discovery, Tableau Einstein, Einstein Predictions
- **Predictive Modeling (ML)**: Einstein Discovery, Einstein Prediction Builder, Data Cloud Predictions
- **Ad-hoc Query (SQL)**: Data Cloud Query API, SOQL, Tableau Data Engine
- **Embedded Analytics (EMB)**: Tableau Embedded, CRM Analytics Embedded, Lightning Web Components

**Design Note**: Originally had 7 capabilities including "Real-time Analytics (RT)" but removed it to keep at 6 for cleaner layout consistency.

### Layer 5: Action (Red)
**How insights change work (alerts, writeback, automation, agents in the flow)**

Capabilities:
- **Alerts & Notifications (ALT)**: Slack Notifications, Tableau Alerts, Flow Builder
- **Data Writeback (WB)**: Tableau Extensions, MuleSoft APIs, Salesforce APIs
- **Workflow Automation (WF)**: Flow Builder, MuleSoft RPA, Slack Workflow Builder
- **Agents in the Flow (AGT)**: Einstein Copilot, Agentforce, Slack AI

## Technical Architecture

### Technology Stack

- **Framework**: React 19.1.1 with JSX (no TypeScript)
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14 + PostCSS
- **Icons**: Lucide React 0.545.0 (Check, Sparkles, ArrowRight, X, AlertCircle)
- **Deployment**: GitHub Pages (gh-pages)
- **Architecture**: Single Page Application (SPA), no routing

### Project Structure

```
agent-composer/
├── src/
│   ├── App.jsx                 # Main application component (354 lines)
│   ├── main.jsx                # React entry point
│   ├── index.css               # Tailwind CSS directives
│   ├── App.css                 # Custom styling
│   └── assets/                 # Static assets
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── eslint.config.js           # ESLint configuration
└── context.md                 # This document
```

### Component Architecture

**Single Component Design**: All logic is in the `AgentComposer` React component.

**State Management** (React useState):
- `selectedCapabilities`: Array of selected capability IDs
- `agentName`: Custom agent name (user input)
- `showAgentSummary`: Toggle for summary panel visibility
- `selectedTemplate`: Index of currently selected agent type template
- `selectedFunction`: ID of currently selected business function
- `showCustomAgentInput`: Toggle for custom agent builder form
- `customAgentDescription`: User's natural language agent description

**Key Functions**:
- `toggleCapability(capId)`: Select/deselect capabilities
- `loadTemplate(template, idx)`: Load pre-configured agent templates and track selection
- `clearSelection()`: Reset all selections
- `getRecommendedAgents()`: Get agent indices recommended for selected business function
- `parseAgentDescription(description)`: Parse natural language to capability IDs
- `handleCustomAgentSubmit()`: Process custom agent description and select capabilities
- `getSelectedCapabilityDetails()`: Retrieve details for selected capabilities
- `getAllProducts()`: Extract unique products from selected capabilities
- `getPlatformIntersections()`: Detect and describe platform collaborations
- `getComplexity()`: Calculate complexity based on capability count
- `renderCapabilityElement(cap, layerColor)`: Render individual capability tiles with tooltips

### Data Model

The 5-layer system is hardcoded in App.jsx as a JavaScript object:

```javascript
const capabilities = {
  sources: {
    color: 'blue',
    items: [
      {
        id: 's1',
        name: 'Business Applications',
        abbrev: 'BA',
        products: ['Sales Cloud', 'Service Cloud', ...]
      },
      // ... more capabilities
    ]
  },
  // ... other layers
};
```

**Capability Object Structure**:
```javascript
{
  id: string,              // Unique identifier (e.g., 's1', 'o3')
  name: string,            // Full name (e.g., 'Visual Analytics')
  abbrev: string,          // 2-3 character abbreviation (e.g., 'VIZ')
  products: string[]       // Array of Salesforce/Tableau products
}
```

**Total**: 21 capabilities across 5 layers

### Capability Tooltips

Each capability in the matrix includes hover tooltips that display:
- **Capability name** (bold header)
- **Concise description** of what the capability does
- **Examples section** showing 2-3 top Salesforce/Tableau products

This educational feature helps users understand each capability without cluttering the UI.

## Business Functions Framework

A strategic layer that connects business context to technical implementation, based on Tableau's "Business Functions" go-to-market approach.

### The Framework Philosophy

**"Two Types of Functions. Two Paths to Value."**

Shifts from selling analytics tools to delivering business outcomes by categorizing buyers based on how they create value:

### Revenue Drivers (💰)

Functions that create growth through customer acquisition, revenue expansion, and product-market impact.

**What They Care About:**
- Driving predictable, scalable revenue growth
- Improving customer acquisition, retention, and expansion
- Accelerating go-to-market execution and responsiveness
- Unlocking product and market insights to fuel strategy

**Value Metrics**: ARR, CAC, LTV, churn, revenue per customer

**Functions Included:**
1. **Sales**: Revenue generation, pipeline execution, quota attainment
2. **Marketing**: Demand generation, pipeline contribution, brand-to-revenue performance
3. **Customer Success**: Adoption, retention, and expansion
4. **Revenue Operations**: GTM alignment with metrics, process, and accountability
5. **Partnerships**: Co-sell motions, partner pipeline, channel performance
6. **Product & Engineering**: What the business sells and how fast it ships

### Cost Centers (🏛️)

Functions that protect and scale the business through control, compliance, and operational clarity.

**What They Care About:**
- Ensuring operational stability, accuracy, and control
- Driving cost efficiency and scalable process execution
- Reducing risk exposure, compliance gaps, and audit failures
- Improving forecasting, planning, and decision speed

**Value Metrics**: Accuracy, efficiency, predictability, governance

**Functions Included:**
1. **Support**: Frontline teams managing tickets, SLAs, and CSAT
2. **HR / People Ops**: Talent, headcount planning, engagement, workforce health
3. **IT Operations**: Internal systems, uptime, help desk operations
4. **Finance**: Forecasting, budgeting, performance tracking
5. **Legal**: Contracts, risk mitigation, operational compliance
6. **Security & Compliance**: Audit readiness, regulatory posture, risk mitigation

### Interactive Features

- **Selectable functions**: Users can select one function to see recommended agent types
- **Function tooltips**: Hover over functions to see detailed descriptions
- **Visual highlighting**: Selected functions show purple border and background
- **Agent type recommendations**: When a function is selected, recommended agents are highlighted with blue badges

### Agent Types

**Section Name**: "Agent Types" (with complexity legend showing Low/Medium/High/Very High)

**Total**: 15 pre-built agent types (6 original + 9 sales-focused)

#### Original Agent Types (1-6):

1. **Ad-hoc Query Agent**
   - Complexity: Low
   - Description: Enables natural language queries that execute SQL/SOQL behind the scenes

2. **Sales Forecast Agent**
   - Complexity: Medium
   - Description: Predicts future sales and automatically updates forecasts

3. **Real-time Dashboard Alert Agent**
   - Complexity: Medium
   - Description: Monitors KPIs in real-time and sends intelligent alerts via Slack

4. **Embedded Analytics Assistant**
   - Complexity: Medium
   - Description: Delivers contextual analytics within business processes

5. **Customer Churn Predictor**
   - Complexity: High
   - Description: Identifies at-risk customers and triggers retention workflows

6. **Customer 360 Insight Agent**
   - Complexity: High
   - Description: Unifies customer data and provides conversational insights

#### Sales-Focused Agent Types (7-15):

7. **Sales Excellence + Operations Agent**
   - Complexity: High
   - Description: Monitors sales processes, identifies bottlenecks, and recommends process improvements
   - Detailed: Analyzes sales cycle efficiency, identifies process deviations, recommends territory realignment, monitors forecast accuracy

8. **Lead Routing Agent**
   - Complexity: Medium
   - Description: Automatically qualifies, scores, and routes leads to optimal sales reps
   - Detailed: Real-time lead scoring with AI, smart capacity balancing, skills-based routing, SLA monitoring

9. **SDR Agent - Pipeline Builder**
   - Complexity: High
   - Description: Autonomous prospecting agent that researches accounts and personalizes outreach
   - Detailed: Researches prospects, generates personalized sequences, manages multi-channel cadences, books meetings

10. **Sales Coach Agent**
    - Complexity: High
    - Description: Analyzes rep performance and provides real-time guidance to accelerate deals
    - Detailed: Identifies skill gaps, suggests next best actions, provides pre-call briefs, delivers deal risk assessments

11. **Slack Sales Agent**
    - Complexity: Medium
    - Description: Conversational agent in Slack for prospect insights, coaching, and sales actions
    - Detailed: Answers questions about accounts, provides research, creates Salesforce records, sends proactive alerts

12. **Sales Actions Agent - Deal Accelerator**
    - Complexity: Very High
    - Description: Guides sellers through complex sales cycles and manages account relationships
    - Detailed: Generates mutual action plans, maps stakeholders, automates follow-ups, coordinates partners

13. **Pipeline Agent - Inspection & Analysis**
    - Complexity: High
    - Description: Provides deep analytical insights and ensures forecast accuracy
    - Detailed: Automated pipeline reviews, identifies stalled deals, analyzes deal velocity, flags anomalies

14. **Quoting Agent - Intelligent CPQ**
    - Complexity: Medium
    - Description: Generates accurate, compliant quotes based on complex business rules
    - Detailed: Applies discount matrices, ensures product compatibility, validates margins, routes approvals

15. **Agent Surface - Slack Intelligence Feed**
    - Complexity: Medium
    - Description: Surfaces critical sales intelligence and insights directly into Slack
    - Detailed: Pushes real-time alerts, delivers performance summaries, shares best practices, notifies at-risk deals

#### Agent Type Features:

- **Complexity Badges**: Color-coded (Green=Low, Yellow=Medium, Red=High, Purple=Very High)
- **Complexity Legend**: Visual legend at top of section explaining badge colors
- **Hover Tooltips**: Detailed descriptions appear on hover for agents with `detailedDescription`
- **Template Selection**: Clicking an agent type loads its capabilities into the matrix
- **Persistent Highlighting**: Selected agent stays highlighted with purple border
- **Recommended Badges**: When business function selected, recommended agents show blue "Recommended" badge

### Custom Agent Builder

**Location**: Bottom of Agent Types section

A simple keyword-based agent generator that allows users to describe custom agents in natural language.

**UI Components**:
- **Collapsed State**: Dashed border button with text "Don't see an agent you're looking for? Describe what you want to build."
- **Expanded State**: Input form with:
  - Description textarea (4 rows)
  - Example placeholder text
  - Cancel and "Generate Agent" buttons

**How It Works**:
1. User describes desired agent functionality in natural language
2. Keyword parser (`parseAgentDescription()`) maps keywords to capabilities:
   - "salesforce", "crm" → Business Applications (s1)
   - "real-time", "streaming" → Streaming & Batch (c3)
   - "predict", "forecast", "ml" → Predictive Modeling (a4)
   - "alert", "notify" → Alerts & Notifications (ac1)
   - And 17 more capability mappings
3. System auto-selects matching capabilities in the matrix
4. Agent Summary panel displays with "Custom Agent" name

**Example**:
Input: "I need an agent that monitors Salesforce opportunities in real-time, predicts which deals are at risk, and sends alerts via Slack"
Output: Selects s1 (Business Apps), c3 (Streaming), a4 (Predictive Modeling), ac1 (Alerts), s2 (Slack)

### UI/UX Architecture

**5-Column Grid Layout** (periodic table style):
- Each column represents one layer
- Color-coded by layer (blue, purple, green, orange, red)
- Capability tiles are selectable buttons with hover effects
- Selected capabilities show checkmark badges and visual highlighting

**Interactive Sections**:
1. **Header**: "Tableau Agentic Enterprise Composer" with description
2. **Business Functions**: Two-column layout (Revenue Drivers | Cost Centers) with 12 selectable functions
3. **Agent Types**: Grid of 15 agent types with complexity badges and recommendations
4. **Custom Agent Builder**: Natural language agent description input
5. **Capability Matrix**: 5-column grid of all 21 capabilities with hover tooltips
6. **Agent Summary Panel**: Shows when capabilities are selected
   - Selected capability count
   - Complexity level (Low/Medium/High/Very High)
   - Capabilities grouped by layer
   - Required products list
   - Platform Intersections & Collaborations (new)
   - Validation warning if Organization layer is missing

### Color System

Each layer has a consistent color palette:

```javascript
const colorClasses = {
  blue:   { /* Sources */ },
  purple: { /* Collection */ },
  green:  { /* Organization */ },
  orange: { /* Analysis */ },
  red:    { /* Action */ }
};
```

Each color includes variants for: background, hover, border, text, and light background.

## Platform Intersections & Collaborations

**Location**: Agent Summary panel, below "Capabilities by Layer" and "Required Products"

An intelligent detection system that identifies when selected capabilities span multiple Salesforce platforms and explains how they work together.

### Detected Platform Categories:
- **Salesforce CRM**: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud
- **Data Cloud**: All Data Cloud products (Connectors, Streaming, DMO, Identity Resolution, etc.)
- **Tableau**: All Tableau products (Desktop, Cloud, Semantic Layer, etc.)
- **Tableau Next**: AI-powered features (Ask Data, Tableau Einstein, Einstein GPT for Analytics)
- **Predictive ML**: Einstein Discovery, Prediction Builder, Data Cloud Predictions
- **Slack**: Slack, Slack Notifications, Workflow Builder, Slack AI
- **MuleSoft**: Integration products (Anypoint, DataGraph, RPA, APIs)

### Intersection Types (8 patterns):

1. **🔄 Salesforce CRM + Data Cloud**
   - "CRM data unification - bringing operational data into a unified data model for deeper insights"

2. **📊 Data Cloud + Tableau**
   - "Unified analytics - Tableau visualizing harmonized Data Cloud data with semantic layer"

3. **📈 Salesforce CRM + Tableau** (direct, without Data Cloud)
   - "Direct CRM analytics - Tableau connecting to Salesforce data for operational reporting"

4. **🤖 Tableau Next (AI-Powered)**
   - "Natural language analytics - conversational data exploration with Einstein-powered insights"

5. **🎯 Predictive AI + Data Cloud/CRM**
   - "Embedded predictions - ML models scoring data and surfacing predictions in operational workflows"

6. **💬 Slack + Salesforce CRM/Tableau**
   - "Conversational workflows - alerts and actions delivered where teams collaborate"

7. **🔗 MuleSoft + Data Cloud/CRM**
   - "Integration backbone - connecting external systems to the Salesforce ecosystem"

8. **⭐ Salesforce CRM + Data Cloud + Tableau** (complete stack)
   - "Complete data-to-insights stack - operational data → unified model → visual analytics"

### UI Design:
- Two-column grid of intersection cards
- Semi-transparent backgrounds with backdrop blur
- Icons for visual identification
- Platform names in bold (joined with " + ")
- Concise descriptions explaining the collaboration

### Strategic Value:
Shows stakeholders that agent success requires **platform collaboration**, not just individual products. Helps justify comprehensive platform investments by demonstrating how components work together.

## Key Features

### Core Functionality
1. **Interactive Capability Selection**: Click to select/deselect capabilities with visual feedback and checkmarks
2. **Capability Hover Tooltips**: Detailed descriptions and product examples on hover
3. **Real-time Complexity Calculation**: Automatically calculate implementation complexity (Low/Medium/High/Very High)
4. **Product Requirement Extraction**: See all required Salesforce/Tableau products for selected capabilities
5. **Validation Logic**: Alert if critical Organization layer capabilities are missing
6. **Responsive Grid Layout**: Mobile-friendly design using Tailwind CSS

### Business Context Features
7. **Business Functions Framework**: Select from 12 business functions (6 revenue drivers + 6 cost centers)
8. **Function-to-Agent Recommendations**: Automatically highlight relevant agent types based on selected function
9. **Platform Intersections Detection**: Shows how Salesforce, Data Cloud, Tableau, and other platforms collaborate

### Agent Discovery
10. **15 Pre-built Agent Types**: From simple ad-hoc queries to complex deal acceleration agents
11. **Template Selection with Highlighting**: Selected agents stay highlighted; recommended agents show blue badges
12. **Custom Agent Builder**: Natural language description input with keyword-based capability matching
13. **Complexity Legend**: Visual guide explaining Low/Medium/High/Very High complexity levels

### Educational Design
14. **Periodic Table Metaphor**: Clean, scientific visualization of capabilities as composable elements
15. **Strategic Messaging**: Emphasizes that AI enables capability composition, not stack replacement
16. **Two Paths to Value**: Revenue Drivers vs Cost Centers framework for business alignment

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Deployment

The application is configured for GitHub Pages deployment:

```bash
# Deploy to GitHub Pages
npm run deploy
```

This runs `vite build && gh-pages -d dist` to build and deploy.

## Design Principles

1. **Educational First**: The UI should teach users about agent composition, not just enable it
2. **Visual Clarity**: Use the periodic table metaphor consistently
3. **Complexity Transparency**: Show users the real implementation effort required
4. **Platform Realism**: Accurately represent Salesforce/Tableau product requirements
5. **Guided Discovery**: Templates help users learn common patterns
6. **Validation & Feedback**: Warn users when they're missing critical capabilities

## Future Considerations

### Potential Enhancements
- Add capability descriptions/tooltips for educational value
- Export agent configurations as JSON or PDF
- Add more templates based on common use cases
- Integration with Phase 1 (Layers Visualization) and Phase 3 (Comprehensive Matrix)
- Save/load custom agent configurations
- Add time/cost estimation based on product licensing
- Implement capability dependencies (e.g., "NLQ requires SEM")

### Known Limitations
- All data is hardcoded in App.jsx (no backend/database)
- Single-file component (could be split into smaller components as it grows)
- No routing (not needed for current scope)
- No user authentication or persistence
- Templates are static (not dynamically generated)

## Working with Claude on This Codebase

### What Claude Should Know

1. **This is a focused prototype**: The goal is to communicate complexity, not build a production system
2. **The periodic table metaphor is sacred**: Any UI changes should maintain this visual language
3. **Scope is intentionally limited**: ~21 capabilities is the right number; don't add everything
4. **Layer 3 (Organization) is critical**: The validation logic that warns about missing Organization capabilities is intentional and important
5. **Templates are educational tools**: They show common patterns and help users learn

### Common Tasks

When asked to:
- **Add a capability**: Add it to the appropriate layer in the `capabilities` object in App.jsx
- **Add a template**: Add it to the `templates` array with capability IDs
- **Change colors**: Modify the `colorClasses` object
- **Adjust complexity**: Update the `getComplexity()` function logic
- **Add validations**: Extend the validation logic in the Agent Summary section

### Code Style
- Use functional React components with hooks
- Keep Tailwind classes inline (don't extract to CSS unless absolutely necessary)
- Maintain the single-file architecture unless it becomes unwieldy (>500 lines)
- Use descriptive variable names that reflect the business domain
- Comment any complex business logic related to the Salesforce/Tableau platform

## Business Context

This application is designed to support sales and education scenarios where:
- A prospect asks "Can Salesforce build AI agents?"
- A team wants to understand the technical requirements of an agent
- Sales engineers need to scope an agent implementation
- Product teams want to show the depth of the Salesforce platform

The Agent Composer helps answer: "Yes, we can build agents—and here's everything involved in making them work."

---

## Recent Updates (January 2025)

### Major Features Added:
1. **Business Functions Framework**: Added 12 business functions (Revenue Drivers & Cost Centers) with strategic go-to-market messaging
2. **Function-to-Agent Recommendations**: Dynamic agent highlighting based on selected business function
3. **9 New Sales-Focused Agent Types**: Including Sales Excellence, Lead Routing, SDR Pipeline Builder, Sales Coach, Slack Sales Agent, Deal Accelerator, Pipeline Inspector, Quoting Agent, and Intelligence Feed
4. **Platform Intersections Detection**: Automatically identifies and explains how Salesforce, Data Cloud, Tableau, Slack, and MuleSoft collaborate
5. **Custom Agent Builder**: Natural language input with keyword-based capability parsing
6. **Capability Tooltips**: Hover descriptions for all 21 capabilities
7. **Agent Type Tooltips**: Detailed descriptions for sales-focused agents
8. **Complexity Legend**: Visual guide for Low/Medium/High/Very High complexity levels
9. **UI Refinements**: Removed time estimates, updated section names, improved visual hierarchy

### Technical Improvements:
- Enhanced state management for business functions and custom agents
- Added `parseAgentDescription()` function with 21 keyword mappings
- Implemented `getPlatformIntersections()` with 8 detection patterns
- Updated App.jsx from ~354 lines to ~750+ lines with new features

### Application Flow:
1. User selects a **Business Function** (e.g., Sales, Finance, Marketing)
2. System highlights **recommended Agent Types** with blue badges
3. User selects an agent type OR describes a custom agent
4. Capabilities auto-populate in the **Capability Matrix**
5. **Agent Summary** displays:
   - Complexity and capability count
   - Required products
   - **Platform Intersections** showing how platforms collaborate
6. User can fine-tune by selecting/deselecting capabilities manually

---

**Last Updated**: January 22, 2025
**Maintained by**: Jacob Zitko
**Related Projects**: Data & Analytics Layers Visualization (Phase 1), Comprehensive Capability Matrix (Phase 3)
