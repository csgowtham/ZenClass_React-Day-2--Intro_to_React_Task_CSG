
import './App.css';

const plans = [
  {
    title: 'FREE',
    price: '$0/month',
    features: [
      { name: 'Single User', checked: true },
      { name: '50GB Storage', checked: true },
      { name: 'Unlimited Public Projects', checked: true },
      { name: 'Community Access', checked: true },
      { name: 'Unlimited Private Projects', checked: false },
      { name: 'Dedicated Phone Support', checked: false },
      { name: 'Free Subdomain', checked: false },
      { name: 'Monthly Status Report', checked: false },
    ],
  },

  {
    title: 'PLUS',
    price: '$9/month',
    features: [
      { name: '5 Users', checked: true },
      { name: '50GB Storage', checked: true },
      { name: 'Unlimited Public Projects', checked: true },
      { name: 'Community Access', checked: true },
      { name: 'Unlimited Private Projects', checked: true },
      { name: 'Dedicated Phone Support', checked: true },
      { name: 'Free Subdomain', checked: true },
      { name: 'Monthly Status Report', checked: false },
    ],
  },
  {
    title: 'PRO',
    price: '$49/month',
    features: [
      { name: '5 Users', checked: true },
      { name: '50GB Storage', checked: true },
      { name: 'Unlimited Public Projects', checked: true },
      { name: 'Community Access', checked: true },
      { name: 'Unlimited Private Projects', checked: true },
      { name: 'Dedicated Phone Support', checked: true },
      { name: 'Free Subdomain', checked: true },
      { name: 'Monthly Status Report', checked: true },
    ],
  },
  
];

function PricingPlan({ plan }) {
  return (
      <div className="pricing-plan">
      <div className="plan-title">{plan.title}</div>
      <div className="plan-price">{plan.price}</div>
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
        <span className={feature.checked ? 'tick' : 'cross'}>
          {feature.checked ? '\u2713' : '\u2715'} {/* Unicode for tick and cross */}
        </span>
        <span style={{ color: feature.checked ? 'black' : '#D6D7D8' }}>
          {feature.name}
        </span>
      </li>
        ))}
      </ul>
      <button className="plan-button">BUTTON</button>
    </div>
  );
}

function App() {
  return (
    <center>
    <div className='pricing-table'>
      {plans.map((plan) => (
        <PricingPlan key={plan.title} plan={plan} />
      ))}
    </div>
    </center>
  );
}



export default App;
