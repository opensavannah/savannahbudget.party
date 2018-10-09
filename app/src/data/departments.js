const departments = [
  {
    name: 'Fire',
    description: 'The fire services department of the City of Savannah',
    learnMore: '• Reduce Firefighter Hiring by 25, $1,700,000  - Do not hire 25 additional firemen –Plans to recruit and hire 25 additional firemen will be put on hold.  The spring training class will be cancelled, saving funds for hiring and equipment.  The size of the fire force will be reduced through attrition. \n\n • Close one Fire Station, $1,500,000\n\n • Fire station brownouts, $1,000,000',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 32023839, // City Manager Proposed Budget
    amount2018: 32023839,
    amount2017: 32023839,
    amount2016: 22514014,
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
      'The mission of the Savannah Police Department is to keep you, your family and our community safe.\n\n Officers do everything from enforcing the law, to preventing crime, investigating crime, reaching out to the community and writing reports',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 58070771,
    amount2018: 58070771,
    amount2017: 58070771,
    amount2016: 58070771,
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
    name: 'Mobility and Parking Services Departments',
    description: 'Parking, street-lights, bike lanes, roads.',
    learnMore:
      'Mobility Services Department operates the City parking management program, performs street maintenance, streetlights, and bike lanes.\n\n ',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 10529722,
    amount2018: 10529722,
    amount2016: 10529722,
    amount2017: 10529722,
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
    name: 'Public Works and Water Resources Department',
    description: 'Parks, squares, street maintenance, and stormwater management',
    learnMore:
      'The mission of Savannah EMS is to positively impact and change the lives of the people we serve through the personal commitment of each of our members to provide great patient and customer care, pursue excellence in everything we do, and show compassion to others every day.\n\n EMS provides emergency communication services, ground and air emergency ambulance response, standby support, and special rescue services to the community.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 19363232,
    amount2018: 19363232,
    amount2017: 19363232,
    amount2016: 19363232,
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
    url: 'https://data.Savannahtexas.gov/stories/s/Emergency-Medical-Services/nq44-vyqb',
  },
  {
    name: 'Development Services',
    description: 'Streets, stormwater management, parks.',
    learnMore:
      'The department is responsible for interpreting nd enforcing the zoning, land use, site and plan review standards, codes, laws and ordinances, this includes all aspects of building construction, life safety, electrical, plumbing, and mechanical systems, as well as enforcing the Flood Damage Prevention and Zoning Ordinances, including sign and historic preservation standards. \n\n',
    url: 'https://data.Savannahtexas.gov/stories/s/Planning-and-Zoning/se7h-anvc',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 4021654,
    amount2018: 4021654,
    amount2017: 4021654,
    amount2016: 4021654,
    percentChange: 0,
    deptId: 5,
  },
  {
    name: 'Parks and Recreation',
    description: 'Parks, monuments, historic squares.',
    learnMore:
      'Providing, protecting, and preserving the city’s park system.\n\nThe mission of the Parks and Recreation Department is to provide, protect, and preserve a premier park system that promotes quality recreational, cultural, and outdoor experiences for Savannahs citizens and visit ',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 9550391,
    amount2018: 9550391,
    amount2017: 9550391,
    amount2016: 9550391,
    percentChange: 0,
    deptId: 6,
    tradeoff: [
      {
        900: '10 microchipped animals',
      },
    ],
    metrics: [
      '90% of a live shelter outcome goal. This refers to 90% animals that enter the shelter are adopted, transferred to rescue programs, or returned to their homes',
    ],
    url: 'https://data.Savannahtexas.gov/stories/s/Animal-Services/qqkn-erv5',
  },
  {
    name: 'Human Services Department',
    description: 'Parks, monuments, historic squares.',
    learnMore:
      'Providing, protecting, and preserving the city’s park system.\n\nThe mission of the Parks and Recreation Department is to provide, protect, and preserve a premier park system that promotes quality recreational, cultural, and outdoor experiences for Savannahs citizens and visit ',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 685885,
    amount2018: 685885,
    amount2017: 685885,
    amount2016: 685885,
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
    url: 'https://data.Savannahtexas.gov/stories/s/Animal-Services/qqkn-erv5',
  },
  {
    name: 'Code Compliance',
    description: 'Providing, protecting, and preserving the city’s park system.',
    learnMore:
      '',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 3713354,
    amount2018: 3713354,
    amount2017: 3713354,
    amount2016: 3713354,
    percentChange: 0,
    deptId: 8,
    url: 'https://data.Savannahtexas.gov/stories/s/Parks-and-Recreation/wgi2-kbuk',
    tradeoff: [
      {
        75000: '1 FTE for maintaining safe trails and playgrounds',
      },
    ],
  },
  {
    name: 'Arts, Culture, and Historical Resources',
    description: 'Provide easy access to books and information for all ages',
    learnMore:
      'The mission of the Savannah Public Library is to provide easy access to books and information for all ages, through responsive professionals, engaging programs, and state of the art technology in a safe and friendly environment.\n\n The budget includes staffing and management of existing and planned library facilities.',
    tradeoff: [
      {
        23676.5: '1 Librarian',
      },
    ],
    metrics: ['Library Program attendance per capita'],
    url: 'https://data.Savannahtexas.gov/stories/s/Savannah-Public-Library/patt-h8xx',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 1145946,
    amount2018: 1145946,
    amount2017: 1145946,
    amount2016: 1145946,
    percentChange: 0,
    deptId: 9,
  },
{
    name: 'Real Estate Services departments',
    description: 'Facilities maintenance, Civic Center, city cemereteries, property acquisition and transfer.',
    learnMore:
      'Mission is to prevent disease, and promote and protect the health and well-being of the community by providing services such as immunizations, food, shelter, and job assistance, health screenings, and overseeing the inspection and permitting of restaurants',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 7618644,
    amount2018: 7618644,
    amount2017: 7618644,
    amount2016: 7618644,
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
    url: 'http://www.Savannahtexas.gov/department/health/about',
  },
{
    name: 'Recorders Court Department',
    description: 'Facilities maintenance, Civic Center, city cemereteries, property acquisition and transfer.',
    learnMore:
      'Mission is to prevent disease, and promote and protect the health and well-being of the community by providing services such as immunizations, food, shelter, and job assistance, health screenings, and overseeing the inspection and permitting of restaurants',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 2296216,
    amount2018: 2296216,
    amount2017: 2296216,
    amount2016: 2296216,
    percentChange: 0,
    deptId: 11,
    tradeoff: [
      {
        4600: 'Shot for tots for 10 individuals',
      },
    ],
    metrics: [
      'Number of client visits at the Shots for Tots clinics for vaccines for children ages 0-18',
    ],
    url: 'http://www.Savannahtexas.gov/department/health/about',
  },
{
    name: 'Financial Services Department',
    description: 'Housing, small business assistance, renter assistance, and more',
    learnMore:
      'The purpose of the Neighborhood Housing and Community Development Department is to provide housing, community and small business development services to benefit eligible residents so they can have access to livable neighborhoods and can increase their opportunities for self-sufficiency.\n\n The Neighborhood Housing & Community Development programs  include housing, small business assistance, renter assistance, and neighborhood and community revitalization.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 4680265,
    amount2018: 4680265,
    amount2017: 4680265,
    amount2016: 4680265,
    percentChange: 0,
    deptId: 12,
    tradeoff: [
      {
        3400: '1 child receives youth services',
      },
    ],
    metrics: [
      'Total number of services provided to beneficiaries through housing and community development',
    ],
    url:
      'https://data.Savannahtexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
{
    name: 'Department of Information Technology',
    description: 'Housing, small business assistance, renter assistance, and more',
    learnMore:
      'The purpose of the Neighborhood Housing and Community Development Department is to provide housing, community and small business development services to benefit eligible residents so they can have access to livable neighborhoods and can increase their opportunities for self-sufficiency.\n\n The Neighborhood Housing & Community Development programs  include housing, small business assistance, renter assistance, and neighborhood and community revitalization.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 0,
    amount2018: 0,
    amount2017: 0,
    amount2016: 0,
    percentChange: 0,
    deptId: 13,
    tradeoff: [
      {
        3400: '1 child receives youth services',
      },
    ],
    metrics: [
      'Total number of services provided to beneficiaries through housing and community development',
    ],
    url:
      'https://data.Savannahtexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
{
    name: 'Mayor and City Council Offices',
    description: 'Trainings and Tuition Reimbursements for City staff professional development',
    learnMore: 'Learn more about Human Resources training: ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Human+Resources/0/div_nm/Division+placeholder/0/gp_nm/Group+placeholder/0/unit_nm/Tuition+Reimbursement/0/obj_cat/Contractuals/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 874748,
    amount2018: 874748,
    amount2017: 874748,
    amount2016: 874748,
    percentChange: 0,
    deptId: 14,
    url:
      'https://data.Savannahtexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
{
    name: 'City Attorney and Clerk of Council Offices',
    description: 'Trainings and Tuition Reimbursements for City staff professional development',
    learnMore: 'Learn more about Human Resources training: ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Human+Resources/0/div_nm/Division+placeholder/0/gp_nm/Group+placeholder/0/unit_nm/Tuition+Reimbursement/0/obj_cat/Contractuals/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 1299340,
    amount2018: 1299340,
    amount2017: 1299340,
    amount2016: 1299340,
    percentChange: 0,
    deptId: 15,
    url:
      'https://data.Savannahtexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
 {
    name: 'Office of Public Communications',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Savannah+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 615213,
    amount2018: 615213,
    percentChange: 0,
    deptId: 16,
  },
{
    name: 'Office of Business Opportunity',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Savannah+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 540408,
    amount2018: 540408,
    percentChange: 0,
    deptId: 17,
},
{
    name: 'Office of the City Manager',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Savannah+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 1142949,
    amount2018: 1142949,
    percentChange: 0,
    deptId: 18,
},
{
    name: 'Office of Arena Development',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Savannah+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 195607,
    amount2018: 195607,
    percentChange: 0,
    deptId: 19,
},
{
    name: 'Office of Management and Budget',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Savannah+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 820974,
    amount2018: 820974,
    percentChange: 0,
    deptId: 20,
},
{
    name: 'Office of Performance & Accountability',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Savannah+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 281602,
    amount2018: 281602,
    percentChange: 0,
    deptId: 21,
},
  {
    name: 'Interfund Transfers',
    description:
      'Transfers from general fund departments to other funds like Economic Incentives, Economic Development, Housing Trust Fund and more',
    learnMore: 'Learn more about Interfund Transfers: ',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Non-Departmental/0/div_nm/Transfers+and+Other+Requirements/0/gp_nm/Transfers/0/unit_nm/Interfund+Transfers-Other/0/obj_cat/Transfers/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 20850456,
    amount2018: 20850456,
    amount2017: 20850456,
    amount2016: 20850456,
    percentChange: 0,
    deptId: 22,
  },
  {
    name: 'Contigency',
    description:
      'Transfers are payments from general fund departments to non-general fund departments for services provided.  Examples include: the 311 call center, IT support, and utility billing support.',
    learnMore: 'Learn more about Interdepartmental Charges',
    learnMoreUrl:
      'http://budget.Savannahtexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Non-Departmental/0/div_nm/Transfers+and+Other+Requirements/0/gp_nm/Other+Requirements/0/unit_nm/Other+Requirements/0/obj_cat/Contractuals/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 1400000,
    amount2018: 1400000,
    percentChange: 0,
    deptId: 23,
  }
];

export default departments;