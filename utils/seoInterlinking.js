// SEO Interlinking Infrastructure
// Maps categories to routes for breadcrumbs and related services

export const SERVICE_CATEGORIES = {
  'Credit Repair Services': {
    label: 'Credit Repair Services',
    routes: [
      { path: '/credit-repair-australia', title: 'Credit Repair Australia' },
      { path: '/fix-bad-credit-australia', title: 'Fix Bad Credit Australia' },
      { path: '/get-credit-repair', title: 'Get Credit Repair' },
      { path: '/apply-credit-repair', title: 'Apply Credit Repair' },
      { path: '/fix-my-credit-now', title: 'Fix My Credit Now' },
      { path: '/emergency-credit-repair', title: 'Emergency Credit Repair' }
    ]
  },
  'Specific Service Pages': {
    label: 'Specific Services',
    routes: [
      { path: '/court-judgment-removal', title: 'Court Judgment Removal' },
      { path: '/credit-enquiry-removal', title: 'Credit Enquiry Removal' },
      { path: '/credit-enquiry-removal-australia', title: 'Credit Enquiry Removal Australia' },
      { path: '/default-removal-services-australia', title: 'Default Removal Services' },
      { path: '/remove-defaults-from-your-credit-file', title: 'Remove Defaults From Credit File' },
      { path: '/worst-repayment-history-removal', title: 'Repayment History Removal' },
      { path: '/credit-score', title: 'Credit Score Information' }
    ]
  },
  'Finance-Specific Credit Repair': {
    label: 'Finance-Specific Services',
    routes: [
      { path: '/credit-repair-for-first-home-buyers', title: 'First Home Buyers Credit Repair' },
      { path: '/credit-repair-for-car-finance', title: 'Car Finance Credit Repair' },
      { path: '/credit-repair-for-credit-card-applications-australia', title: 'Credit Card Applications' },
      { path: '/credit-repair-home-loan-approval', title: 'Home Loan Approval' },
      { path: '/credit-repair-for-centrelink-recipients-australia', title: 'Centrelink Recipients' }
    ]
  },
  'Life Situation Credit Repair': {
    label: 'Life Situation Services',
    routes: [
      { path: '/credit-repair-after-bankruptcy', title: 'Credit Repair After Bankruptcy' },
      { path: '/credit-repair-after-divorce-or-separation', title: 'Credit Repair After Divorce' }
    ]
  },
  'Regional NSW': {
    label: 'New South Wales',
    routes: [
      { path: '/credit_repair_sydney', title: 'Credit Repair Sydney' },
      { path: '/credit-repair-regional-nsw', title: 'Regional NSW Credit Repair' }
    ]
  },
  'Regional Victoria': {
    label: 'Victoria',
    routes: [
      { path: '/credit-repair-melbourne', title: 'Credit Repair Melbourne' },
      { path: '/credit-repair-melbourne-victoria', title: 'Melbourne Victoria' },
      { path: '/credit-repair-geelong-warrnambool-western-victoria', title: 'Western Victoria' },
      { path: '/credit-repair-bendigo-ballarat-regional-victoria', title: 'Regional Victoria North' },
      { path: '/credit-repair-sale-traralgon-gippsland-victoria', title: 'Gippsland Victoria' }
    ]
  },
  'Regional Queensland': {
    label: 'Queensland',
    routes: [
      { path: '/credit-repair-brisbane', title: 'Credit Repair Brisbane' },
      { path: '/credit-repair-gold-coast-queensland', title: 'Gold Coast Queensland' }
    ]
  },
  'Regional South Australia': {
    label: 'South Australia',
    routes: [
      { path: '/credit-repair-adelaide', title: 'Credit Repair Adelaide' },
      { path: '/credit-repair-south-australia-adelaide', title: 'South Australia Adelaide' },
      { path: '/south-australia-credit-repair', title: 'South Australia Credit Repair' }
    ]
  },
  'Regional Western Australia': {
    label: 'Western Australia',
    routes: [
      { path: '/credit-repair-perth', title: 'Credit Repair Perth' }
    ]
  },
  'Regional ACT': {
    label: 'Australian Capital Territory',
    routes: [
      { path: '/credit-repair-canberra', title: 'Credit Repair Canberra' },
      { path: '/credit-repair-canberra-act', title: 'Canberra ACT' }
    ]
  },
  'Regional Northern Territory': {
    label: 'Northern Territory',
    routes: [
      { path: '/credit-repair-darwin', title: 'Credit Repair Darwin' },
      { path: '/credit-repair-darwin-nt', title: 'Darwin NT' }
    ]
  },
  'Regional Tasmania': {
    label: 'Tasmania',
    routes: [
      { path: '/credit-repair-hobart', title: 'Credit Repair Hobart' }
    ]
  }
};

// Helper function to identify a page's category from its path
export function getPageCategory(pathname) {
  for (const [categoryKey, categoryData] of Object.entries(SERVICE_CATEGORIES)) {
    const routeExists = categoryData.routes.some(route => route.path === pathname);
    if (routeExists) {
      return {
        key: categoryKey,
        label: categoryData.label,
        routes: categoryData.routes
      };
    }
  }
  return null;
}

// Helper function to get sibling routes (excluding current page, max 6)
export function getSiblingRoutes(pathname, maxCount = 6) {
  const category = getPageCategory(pathname);
  if (!category) return [];
  
  return category.routes
    .filter(route => route.path !== pathname)
    .slice(0, maxCount);
}

// Helper function to get current page title from path
export function getPageTitle(pathname) {
  for (const categoryData of Object.values(SERVICE_CATEGORIES)) {
    const route = categoryData.routes.find(route => route.path === pathname);
    if (route) return route.title;
  }
  return null;
}

// Helper function to get contextual link suggestions for each category
export function getContextualLinkSuggestions(pathname) {
  const category = getPageCategory(pathname);
  if (!category) return [];

  // Return different contextual links based on category
  const suggestions = {
    'Credit Repair Services': [
      { path: '/credit-repair-australia', anchor: 'credit repair services' },
      { path: '/fix-bad-credit-australia', anchor: 'fixing bad credit' }
    ],
    'Specific Service Pages': [
      { path: '/default-removal-services-australia', anchor: 'default removal services' },
      { path: '/credit-enquiry-removal', anchor: 'credit enquiry removal' }
    ],
    'Finance-Specific Credit Repair': [
      { path: '/credit-repair-for-first-home-buyers', anchor: 'first home buyer credit repair' },
      { path: '/credit-repair-home-loan-approval', anchor: 'home loan approval services' }
    ],
    'Life Situation Credit Repair': [
      { path: '/credit-repair-after-bankruptcy', anchor: 'credit repair after bankruptcy' },
      { path: '/credit-repair-after-divorce-or-separation', anchor: 'divorce credit repair' }
    ]
  };

  // For regional pages, suggest main service pages
  if (category.key.startsWith('Regional')) {
    return [
      { path: '/credit-repair-australia', anchor: 'Australian credit repair services' },
      { path: '/free-credit-assessment', anchor: 'free credit assessment' }
    ];
  }

  return suggestions[category.key] || [
    { path: '/credit-repair-australia', anchor: 'credit repair services' }
  ];
}
