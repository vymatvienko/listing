

const Listing = ({ item }) => {
    const itemTitle = item.title?.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;

    const Currency = ({ value }) => {
        if (value === 'USD') {
            return "$";
        } else if (value === 'EUR') {
            return "€";
        }
    }
    
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{itemTitle}</p>
                    {(item.currency_code === 'EUR' || item.currency_code === 'USD' ) ? 
                    (<p className="item-price"><Currency value={item.currency_code} />{item.price}</p>) : 
                    (<p className="item-price">{item.price} {item.currency_code}</p>)}
                <p className={`item-quantity level-${item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high'}`}>{item.quantity} left</p>
            </div>
        </div>
    )
}

export default Listing