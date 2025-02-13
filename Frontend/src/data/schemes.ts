export interface Scheme {
    id: string;
    title: string;
    description: string;
    eligibility: string;
    benefits: string;
    deadline: string;
    maxBenefit: string;
    beneficiaries: string;
    applyLink: string;
    category: string;
    state: string;
  }
  
  export const schemes: Scheme[] = [
    {
      id: '1',
      title: 'PM-KISAN Samman Nidhi Yojana',
      description: 'Direct income support of ₹6,000 per year for eligible farmer families.',
      eligibility: 'Small and marginal farmers with combined landholding up to 2 hectares',
      benefits: '₹6,000 per year in three equal installments of ₹2,000 each',
      deadline: 'December 31, 2024',
      maxBenefit: '₹6,000 per year',
      beneficiaries: '11.37 Crore',
      applyLink: '#',
      category: 'agriculture',
      state: 'all states'
    },
    {
      id: '2',
      title: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Comprehensive crop insurance scheme to protect farmers from crop losses.',
      eligibility: 'All farmers including sharecroppers and tenant farmers growing notified crops',
      benefits: 'Insurance coverage and financial support in case of crop failure',
      deadline: 'Ongoing',
      maxBenefit: 'Up to sum insured',
      beneficiaries: '3.7 Crore',
      applyLink: '#',
      category: 'agriculture',
      state: 'all states'
    },
    {
      id: '3',
      title: 'Kisan Credit Card Scheme',
      description: 'Provides adequate and timely credit to farmers for their agricultural needs.',
      eligibility: 'All farmers, tenant farmers, oral lessees, and share croppers',
      benefits: 'Credit up to ₹3 lakh at 4% interest rate',
      deadline: 'Ongoing',
      maxBenefit: '₹3 Lakh',
      beneficiaries: '2.5 Crore',
      applyLink: '#',
      category: 'agriculture',
      state: 'all states'
    },
    {
      id: '4',
      title: 'Agriculture Infrastructure Fund',
      description: 'Financial support for investment in viable agriculture infrastructure projects.',
      eligibility: 'Farmers, FPOs, PACS, Marketing Cooperative Societies, and Entrepreneurs',
      benefits: 'Long term debt financing with interest subvention of 3%',
      deadline: 'March 31, 2025',
      maxBenefit: '₹2 Crore',
      beneficiaries: '1.2 Lakh',
      applyLink: '#',
      category: 'agriculture',
      state: 'all states'
    }
  ];