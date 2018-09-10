const departments = [
  {
    name: 'Municipal Courts',
    description: 'The judicial branch of the City of Savannah',
    learnMore:
      'The mission of the Municipal Courts is to provide fair, efficient, and accountable service to the public by impartially administering justice so that the quality of life is enhanced.\n\n  Municipal court and Downtown Savannah Community Court make up the judicial branch of the City of Savannah local government. The court oversees cases of traffic, city ordinance, state code, and parking violations.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 22514014,
    amount2016: 22514014,
    amount2017: 22514014,
    percentChange: 0,
    deptId: 1,
    url: 'https://data.Savannahtexas.gov/stories/s/Municipal-Court/xm6x-8vij',
    metrics: [
      'Number of cases magistrated',
      'Percent of offenders who complete rehabilitative recommendations',
    ],
    tradeoff: [
      {
        72907: '1 Case Management FTE',
      },
    ],
  },
  {
    name: 'Police',
    description: 'Law enforcement and crime prevention',
    learnMore:
      'The mission of the Police Department is to keep you, your family and our community safe.\n\n Officers do everything from enforcing the law, to preventing crime, investigating crime, reaching out to the community and writing reports',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 386573423,
    amount2016: 373570249,
    amount2017: 386573423,
    percentChange: 0,
    deptId: 2,
    url: 'https://data.Savannahtexas.gov/stories/s/Police/v4d4-74jw',
    tradeoff: [
      {
        112397.25: '1 Officer full year of funding with equipment, fuel, salary, pension, etc.',
      },
    ],
  },
  {
    name: 'Fire',
    description: 'Fire prevention and emergency response',
    learnMore:
      'The Savannah Fire Department is committed to creating safer communities through prevention, preparedness and effective emergency response.\n\n ',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 189013831,
    amount2016: 175266499,
    amount2017: 189013831,
    percentChange: 0,
    deptId: 3,
    url: 'http://www.Savannahtexas.gov/department/fire',
    tradeoff: [
      {
        132829: '1 Lieutenant',
      },
    ],
    metrics: [
      'Percent of structure fires confined to room of origin',
      'Percent of emergency incidents where the amount of time between call receipt and the arrival of AFD unit is 8 minutes or less',
    ],
  },
  {
    name: 'Emergency Management Services',
    description: 'Emergency systems, communication, and response',
    learnMore:
      'The mission of Savannah-Travis County EMS is to positively impact and change the lives of the people we serve through the personal commitment of each of our members to provide great patient and customer care, pursue excellence in everything we do, and show compassion to others every day.\n\n EMS provides emergency communication services, ground and air emergency ambulance response, standby support, and special rescue services to the community.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 83786011,
    amount2016: 78255956,
    amount2017: 83786011,
    percentChange: 0,
    deptId: 4,
    tradeoff: [
      {
        108174: '1 EMS Position year of funding and equipment',
      },
    ],
    metrics: [
      'Percent of potentially life-threatening calls responded to within 9 minutes and 59 seconds',
    ],
    url:
      'https://data.Savannahtexas.gov/stories/s/Emergency-Medical-Services/nq44-vyqb',
  },
  {
    name: 'Planning & Zoning',
    description: 'Planning, preservation and design services',
    learnMore:
      'The purpose of the Planning and Zoning Department is to provide planning and zoning, preservation, and design services to make Savannah the most livable city in the country\n\n Planning & Zoning is responsible for long range planning, current planning (including historic preservation, annexation, and zoning), urban design services, and updates of the Land Development Code.\n\n Current Projects underway include: Imagine Savannah, CodeNEXT, South Center Waterfront Initiative.',
    url: 'https://data.Savannahtexas.gov/stories/s/Planning-and-Zoning/se7h-anvc',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 7642545,
    amount2016: 7505329,
    amount2017: 7642545,
    percentChange: 0,
    deptId: 5,
  },
  {
    name: 'Development Services',
    description:
      'Consolidates the process of land development permitting and assistance',
    learnMore:
      'Development Services provides a mix of services to foster economic vibrancy, ensure the quality of new development and preserve our natural resources.\n\n The mission of the Department is to provide comprehensive development review and inspection services to build a better Savannah.\n\n  Building Plan Review is responsible for reviewing all construction plans for compliance with the Land Development Code before building permits can be issued. The Building Inspection Division performs construction related inspections for all buildings within the City limits, and electrical and plumbing services in the extra-territorial jurisdiction.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 37523998,
    amount2016: 32902297,
    amount2017: 37523998,
    percentChange: 0,
    deptId: 6,
    tradeoff: [
      {
        68764: '1 FTE for land-use permit review',
      },
    ],
    metrics: [
      'Percent of building inspections performed within 24 hours of request',
    ],
    url:
      'https://data.savannahga.gov/stories/s/Development-Services/qwps-5848',
  },
  {
    name: 'Animal Services',
    description: 'Pet services, animal regulation, and shelter',
    learnMore:
      'The mission of the Savannah Animal Services Department is to prevent animal homelessness and promote humane, compassionate treatment of animals by enforcing regulations, providing a safety net for lost or homeless animals, and achieving live outcomes for at least 90% of sheltered pets.\n\n  The departments provides an array of animal control, health, and pet-owner services to the public. They provide food, water, shelter and veterinary care for lost or homeless animals. They enforce animal regulations including impoundment, quarantine and other rabies control services.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 12914285,
    amount2016: 11546362,
    amount2017: 12914285,
    percentChange: 0,
    deptId: 7,
    tradeoff: [
      {
        900: '10 microchipped animals',
      },
    ],
    metrics: [
      '90% of a live shelter outcome goal. This refers to 90% animals that enter the shelter are adopted, transferred to rescue programs, or returned to their homes',
    ],
    url: 'https://data.savannahga.gov/stories/s/Animal-Services/qqkn-erv5',
  },
  {
    name: 'Parks & Recreation',
    description:
      'Providing, protecting, and preserving the city’s park system.',
    learnMore:
      'The mission of the Parks and Recreation Department is to provide, protect, and preserve a premier park system that promotes quality recreational, cultural, and outdoor experiences for Savannahs citizens and visitors.\n\n  Parks and Recreation department is tasked with providing, protecting, and preserving the city’s park system',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 80504938,
    amount2016: 75432093,
    amount2017: 80504938,
    percentChange: 0,
    deptId: 8,
    url:
      'https://data.savannahga.gov/stories/s/Parks-and-Recreation/wgi2-kbuk',
    tradeoff: [
      {
        75000: '1 FTE for maintaining safe trails and playgrounds',
      },
    ],
  },
  {
    name: 'Public Libraries',
    description: 'Provide easy access to books and information for all ages',
    learnMore:
      'The mission of the Savannah Public Library is to provide easy access to books and information for all ages, through responsive professionals, engaging programs, and state of the art technology in a safe and friendly environment.\n\n The budget includes staffing and management of existing and planned library facilities.',
    tradeoff: [
      {
        23676.5: '1 Librarian',
      },
    ],
    metrics: ['Library Program attendance per capita'],
    url:
      'https://data.savannahga.gov/stories/s/Savannah-Public-Library/patt-h8xx',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 47167036,
    amount2016: 41755192,
    amount2017: 47167036,
    percentChange: 0,
    deptId: 9,
  },
  {
    name: 'Public Health',
    description:
      'Disease prevention, promoting and protecting community health',
    learnMore:
      'Mission is to prevent disease, and promote and protect the health and well-being of the community by providing services such as immunizations, food, shelter, and job assistance, health screenings, and overseeing the inspection and permitting of restaurants',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 70260911,
    amount2016: 61282968,
    amount2017: 70260911,
    percentChange: 0,
    deptId: 10,
    tradeoff: [
      {
        4600: 'Shot for tots for 10 individuals',
      },
    ],
    metrics: [
      'Number of client visits at the Shots for Tots clinics for vaccines for children ages 0-18',
    ],
    url: 'http://www.savannahga.gov/department/health/about',
  },
  {
    name: 'Neighborhood Housing & Community Development',
    description:
      'Housing, small business assistance, renter assistance, and more',
    learnMore:
      'The purpose of the Neighborhood Housing and Community Development Department is to provide housing, community and small business development services to benefit eligible residents so they can have access to livable neighborhoods and can increase their opportunities for self-sufficiency.\n\n The Neighborhood Housing & Community Development programs  include housing, small business assistance, renter assistance, and neighborhood and community revitalization.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 5798181,
    amount2016: 4818944,
    amount2017: 5798181,
    percentChange: 0,
    deptId: 11,
    tradeoff: [
      {
        3400: '1 child receives youth services',
      },
    ],
    metrics: [
      'Total number of services provided to beneficiaries through housing and community development',
    ],
    url:
      'https://data.savannahga.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
];

export default departments;
