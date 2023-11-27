import './App.css'
import Listing from './components/Listing'
import * as test from './data/etsy.json'

function App() {
  const items = test.default;

  return (
    <>
      <div className='item-list'>
        {items.map(el => 
          <Listing key={el.listing_id} item={el} />
        )}
      </div>
    </>
  )
}

export default App
