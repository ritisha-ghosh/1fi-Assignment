import { useState } from 'react'
import { Check, ShieldCheck, Sparkles } from 'lucide-react'
import { formatPrice, products } from './products'

function ProductPicker({ activeProduct, onSelect }) {
  return <div className="product-picker" aria-label="Choose a product">{products.map((product) => <button className={`product-chip ${activeProduct.id === product.id ? 'is-active' : ''}`} key={product.id} onClick={() => onSelect(product)} type="button"><img src={product.image} alt="" /><span>{product.shortName}</span></button>)}</div>
}

function EmiPlan({ plan, selected, onSelect }) {
  return <button aria-pressed={selected} className={`emi-plan ${selected ? 'is-selected' : ''}`} onClick={onSelect} type="button"><span className={`radio-mark ${selected ? 'is-selected' : ''}`}>{selected && <Check size={13} strokeWidth={3} />}</span><span className="emi-copy"><strong>{plan.duration} months EMI</strong><span>{formatPrice(plan.monthlyAmount)} / month</span></span><span className="emi-total"><span>Interest</span><strong>{formatPrice(plan.totalInterest)}</strong></span></button>
}

function ProductImage({ product }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <div className="product-image-fallback" role="img" aria-label={product.name}>{product.name}</div>
  }

  return <>
    {isLoading && <div className="image-loading" role="status">Loading product image...</div>}
    <img src={product.image} alt={product.name} className={`product-image ${isLoading ? 'is-loading' : ''}`} onError={() => { setHasError(true); setIsLoading(false) }} onLoad={() => setIsLoading(false)} />
  </>
}

function MarketplacePage({ product, onProductChange, onPlanChange }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [selectedPlan, setSelectedPlan] = useState(product.emiPlans[1])

  const selectProduct = (nextProduct) => {
    onProductChange(nextProduct)
    setSelectedVariant(nextProduct.variants[0])
    setSelectedPlan(nextProduct.emiPlans[1])
    onPlanChange(nextProduct.emiPlans[1].duration)
  }

  const selectPlan = (plan) => {
    setSelectedPlan(plan)
    onPlanChange(plan.duration)
  }

  return <main className="marketplace">
    <ProductPicker activeProduct={product} onSelect={selectProduct} />
    <section className="product-detail">
      <div className="product-image-wrap"><span className="offer-badge"><Sparkles size={13} /> 15% OFF</span><ProductImage key={product.id} product={product} /></div>
        <div className="product-heading"><div><p className="eyebrow">1Fi exclusive</p><h1>{product.name}</h1></div><div className="price-block"><strong>{formatPrice(selectedVariant.discountedPrice)}</strong><span>{formatPrice(selectedVariant.originalPrice)}</span></div></div>
      <div className="variant-section"><p className="section-label">Select variant</p><div className="variant-list">{product.variants.map((variant) => <button className={`variant-pill ${selectedVariant.id === variant.id ? 'is-selected' : ''}`} key={variant.id} onClick={() => setSelectedVariant(variant)} type="button">{variant.name}</button>)}</div></div>
        <div className="product-perks"><span>Free delivery</span><span>1 year warranty</span></div>
    </section>
    <section className="emi-section"><div className="section-heading"><div><p className="eyebrow">Flexible payments</p><h2>Choose your EMI plan</h2></div><ShieldCheck size={20} aria-label="Secure payment" /></div><div className="emi-list">{product.emiPlans.map((plan) => <EmiPlan key={plan.duration} plan={plan} selected={selectedPlan.duration === plan.duration} onSelect={() => selectPlan(plan)} />)}</div></section>
  </main>
}

export default MarketplacePage
