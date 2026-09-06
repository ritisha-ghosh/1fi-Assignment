import { useState } from 'react'
import { ArrowLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import NearbyStoresPage from './pages/NearbyStoresPage'
import MarketplacePage from './pages/MarketplacePage'
import { products } from './pages/products'
import TopBrandsPage from './pages/TopBrandsPage'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('marketplace')
  const [product, setProduct] = useState(products[0])
  const [selectedDuration, setSelectedDuration] = useState(products[0].emiPlans[1].duration)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const handleProductChange = (nextProduct) => {
    setProduct(nextProduct)
    setCheckoutMessage('')
  }

  const handleProceed = () => {
    setCheckoutMessage(`Plan selected: ${selectedDuration} months EMI`)
  }

  return <div className="app-frame">
    <header className="app-header"><button className="icon-button" aria-label="Go back" type="button"><ArrowLeft size={21} /></button><span className="app-title">Shop</span><button className="icon-button cart-button" aria-label="Open cart" type="button"><ShoppingBag size={21} /><span className="cart-count">2</span></button></header>
    <nav className="tabs" aria-label="Shop categories">{[['brands', 'Top Brands'], ['nearby', 'Nearby Stores'], ['marketplace', '1Fi Marketplace']].map(([tab, label]) => <button className={`tab ${activeTab === tab ? 'is-active' : ''}`} key={tab} onClick={() => setActiveTab(tab)} type="button">{label}</button>)}</nav>
    {activeTab === 'marketplace' ? <MarketplacePage product={product} onProductChange={handleProductChange} onPlanChange={setSelectedDuration} /> : activeTab === 'brands' ? <TopBrandsPage /> : <NearbyStoresPage />}
    {activeTab === 'marketplace' && <div className="bottom-bar">{checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}<button className="proceed-button" onClick={handleProceed} type="button">Proceed with {selectedDuration} Months EMI <ChevronRight size={19} /></button></div>}
  </div>
}

export default App
