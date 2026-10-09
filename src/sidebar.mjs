// Sidebar, in the same order as the original ReadMe docs.
export const sidebar = [
	{ label: 'Welcome to Marble!', slug: 'welcome' },
	{
		label: 'Overview',
		items: [
			{ label: 'What is Marble?', slug: 'overview/what-is-marble' },
			{ label: 'Open source', slug: 'overview/open-source' },
			{ label: 'Use cases', slug: 'overview/use-cases' },
			{ label: 'How Marble works', slug: 'overview/how-marble-works' },
			{ label: 'Security', slug: 'overview/security' },
		],
	},
	{
		label: 'Getting started',
		items: [
			{ label: 'Introduction', slug: 'getting-started/introduction' },
			{ label: 'Picking the implementation team', slug: 'getting-started/picking-the-implementation-team' },
			{ label: 'Proof-of-concept', slug: 'getting-started/proof-of-concept' },
			{ label: 'Autonomous Decision Generation with Marble', slug: 'getting-started/autonomous-decision-generation-with-marble' },
			{ label: 'Real-Time Processing', slug: 'getting-started/real-time-processing' },
			{ label: 'Deployment steps', slug: 'getting-started/deployment-steps' },
		],
	},
	{
		label: 'Data model and ingestion',
		items: [
			{ label: 'Introduction', slug: 'data-model/introduction' },
			{
				label: 'Data model edition',
				collapsed: true,
				items: [
					{ label: 'Overview', slug: 'data-model/data-model-edition' },
					{ label: 'Create a table', slug: 'data-model/create-a-table' },
					{ label: 'Create fields in a table', slug: 'data-model/create-fields-in-a-table' },
					{ label: 'Editing a field in a table', slug: 'data-model/editing-a-field-in-a-table' },
					{ label: 'Create links between tables', slug: 'data-model/create-links-between-tables' },
					{ label: 'Enumerated values', slug: 'data-model/enumerated-values' },
				],
			},
			{ label: 'Grouping decisions', slug: 'data-model/grouping-decisions' },
			{ label: 'Ingesting data', slug: 'data-model/ingesting-data' },
			{ label: 'Data migrations', slug: 'data-model/data-migrations' },
			{ label: 'Example data model', slug: 'data-model/example-data-model' },
		],
	},
	{
		label: 'Scenarios',
		items: [
			{ label: 'Introduction', slug: 'scenarios/introduction' },
			{ label: 'Getting started', slug: 'scenarios/getting-started' },
			{ label: 'Editing a scenario', slug: 'scenarios/editing-a-scenario' },
			{ label: 'Trigger', slug: 'scenarios/trigger' },
			{ label: 'Rules', slug: 'scenarios/rules' },
			{ label: 'Decision', slug: 'scenarios/decision' },
			{ label: 'Custom lists', slug: 'scenarios/custom-lists' },
			{
				label: 'Formula',
				collapsed: true,
				items: [
					{ label: 'Overview', slug: 'scenarios/formula' },
					{ label: 'Basics', slug: 'scenarios/basics' },
					{
						label: 'Functions',
						collapsed: true,
						items: [
							{ label: 'Overview', slug: 'scenarios/functions' },
							{ label: 'Aggregations', slug: 'scenarios/aggregations' },
							{ label: 'String similarity', slug: 'scenarios/string-similarity' },
							{ label: 'Datetime functions', slug: 'scenarios/datetime-functions' },
							{ label: 'Multiple of a threshold', slug: 'scenarios/multiple-of-a-threshold' },
							{ label: 'Extract a part from a timestamp', slug: 'scenarios/extract-a-part-from-a-timestamp' },
						],
					},
					{ label: 'Using lists in rules', slug: 'scenarios/using-lists-in-rules' },
				],
			},
			{ label: 'Lifecycle', slug: 'scenarios/lifecycle' },
			{ label: 'Workflows', slug: 'scenarios/workflows' },
		],
	},
	{
		label: 'Case Manager',
		items: [
			{ label: 'Overview', slug: 'case-manager/overview' },
			{ label: 'Rule snoozes', slug: 'case-manager/rule-snoozes' },
			{ label: 'Blocking Review', slug: 'case-manager/blocking-review' },
			{ label: 'Configuration', slug: 'case-manager/configuration' },
			{ label: 'Auto case assignment', slug: 'case-manager/auto-case-assignment' },
			{ label: 'AI Analyst', slug: 'case-manager/ai-analyst' },
		],
	},
	{
		label: 'Workflows',
		items: [
			{ label: 'Workflows configuration', slug: 'workflows/workflows-configuration' },
		],
	},
	{
		label: 'Webhooks',
		items: [
			{ label: 'Introduction', slug: 'webhooks/introduction' },
			{ label: 'Setting up the webhooks', slug: 'webhooks/setting-up-the-webhooks' },
			{ label: 'Available events and webhooks format', slug: 'webhooks/available-events-and-webhooks-format' },
			{ label: 'Receiving webhooks', slug: 'webhooks/receiving-webhooks' },
		],
	},
	{
		label: 'Screening',
		items: [
			{ label: 'Introduction', slug: 'screening/introduction' },
			{ label: 'Setting up a screening rule', slug: 'screening/setting-up-a-screening-rule' },
			{ label: 'Creating decisions with a screening rule', slug: 'screening/creating-decisions-with-a-screening-rule' },
			{ label: 'Reviewing a screening', slug: 'screening/reviewing-a-screening' },
			{ label: 'Screening refine', slug: 'screening/screening-refine' },
			{ label: 'Continuous screening', slug: 'screening/continuous-screening' },
			{ label: 'Manual search', slug: 'screening/manual-search' },
			{ label: 'Configuration and response time', slug: 'screening/configuration-and-response-time' },
			{ label: 'Search & scoring algorithm', slug: 'screening/search-scoring-algorithm' },
		],
	},
	{
		label: 'Customer Risk Assessment',
		items: [
			{ label: 'Overview', slug: 'risk-assessment/overview' },
			{ label: 'Benefits and use cases', slug: 'risk-assessment/benefits-and-use-cases' },
			{ label: 'Getting Started', slug: 'risk-assessment/getting-started' },
		],
	},
	{
		label: 'Settings',
		items: [
			{ label: 'Roles', slug: 'settings/roles' },
			{ label: 'IP Allow List', slug: 'settings/ip-allow-list' },
		],
	},
	{
		label: 'Tech and infrastructure',
		items: [
			{ label: 'Technical configuration', slug: 'infrastructure/technical-configuration' },
			{ label: 'SSO / OpenID Connect', slug: 'infrastructure/sso-openid-connect' },
			{ label: 'Optional debugging and monitoring configuration', slug: 'infrastructure/optional-debugging-and-monitoring-configuration' },
			{ label: 'Integrated analytics', slug: 'infrastructure/integrated-analytics' },
			{ label: 'Screening deployment', slug: 'infrastructure/screening-deployment' },
			{ label: 'AI configuration', slug: 'infrastructure/ai-configuration' },
			{ label: 'Data offloading', slug: 'infrastructure/data-offloading' },
		],
	},
	{
		label: 'API',
		items: [
			{ label: 'Introduction', slug: 'api/introduction' },
			{ label: 'Migrating from the legacy API to v1', slug: 'api/migrating-to-v1' },
			{ label: 'API reference (v1)', link: '/api/v1/' },
			{ label: 'Beta endpoints', link: '/api/v1beta/', badge: 'Beta' },
		],
	},
];
