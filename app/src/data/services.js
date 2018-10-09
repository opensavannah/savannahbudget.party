const services = [
  {
    index: 0,
    title: 'Welcome',
    image: 'titled_logo.svg',
    status: 'complete',
  },
  {
    index: 1,
    title: 'Public Safety',
    image: 'public_safety.svg',
    desc:
      "The community's safety and security is a top priority for City of Savannah leaders. Public safety made up nearly 50% of the City's general fund budget, providing for police, fire, and EMS services.",
    departments: [1, 2],
    status: 'ready',
  },
  {
    index: 2,
    title: 'Infrastructure & Development',
    image: 'development.svg',
    desc:
      'The City of Savannah provides a mix of services to foster economic vibrancy, ensure the quality of new development and preserve of our natural resources.',
    departments: [3, 4, 5],
    percentChange: null,
    completeSections: 0,
  },
  {
    index: 3,
    title: 'Community Services',
    image: 'community_services.svg',
    desc:
      'The City of Savannah is committed to promoting healthy, livable, communities with access to housing and libraries.  The budget covers costs for the Human Services Department, the Sanitation Department, the Parks and Recreation Department, the Code Department, Social Service Contracts, the Arts, Culture & Historical Resources Department, and the Housing and Neighbborhood Services Department.',
    departments: [6, 7, 8, 9],
  },
{
    index: 4,
    title: 'Municipal Operations',
    image: 'community_services.svg',
    desc:
      'The City of Savannah prioritzes improving its performance and service delivery efficiency for maximum benefit to residents. The Municipal Operations service center oversees Real Estate Services, Recorders Court, Financial Services, and Information Technology.',
    departments: [10, 11, 12, 13],
  },
{
    index: 5,
    title: 'Governance',
    image: 'governance.svg',
    desc:
      'The Governance service center covers the salaries of the Mayor and Aldermanic Council, the Office of City Attorney, and the Office of City Clerk.',
    departments: [14, 15],
  },
{
    index: 6,
    title: 'Strategic Services',
    image: 'strategic-services.svg',
    desc:
      'Transfers are payments from general fund departments to non-general fund departments for services provided.  Examples include: the 311 call center, IT support, utility billing support, or professional training.',
    departments: [16, 17, 18, 19, 20, 21],
  },
{
    index: 7,
    title: 'Interdepartmental/Transfers',
    image: 'infrastructure.svg',
    desc:
      'Transfers are payments from general fund departments to non-general fund departments for services provided.  Examples include: the 311 call center, IT support, utility billing support, or professional training.',
    departments: [22, 23],
  },
  {
    index: 8,
    title: 'Budget Submission',
    image: 'envelope.svg',
    departments: [],
  },
];

export default services;
