import React, {useState, useEffect} from 'react'
import ShopBagItem from '../components/ShopBagItem'
import './bag.css'

function Bag({games, reference}) {

  const [total, setTotal] = useState(0)

  const handleTotalPayment = () => {
    return games
    .map(game=>game.price*(1 - game.discount))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2)
  }

  useEffect(()=>{
    setTotal(handleTotalPayment())
  },[games])

  return (
    <section id="bag" className="bag" ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>Bag</h1>
          </div>
          {
            games.lenght===0 ? (
              <h2>Your bag is empty</h2>
            ) : (
              <>
              <div className="row">
                <div className="table-responsive">
                  <table className="shopBagTable table table-borderless align-middle">
                    <thead>
                      <tr>
                        <th className="col">No.</th>
                        <th className="col">Preview</th>
                        <th className="col">Game</th>
                        <th className="col">Price</th>
                        <th className="col">Discount</th>
                        <th className="col">Payment</th>
                        <th className="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        games.map((game, index) =>(
                          <ShopBagItem index={index} key={game._id} game={game}/>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-5">
                <div className="col-lg-2 d-flex align-items-center" >
                  <p className="itemCount">Total Items:{games.lenght}</p>
                </div>
                  <div className="col-lg-10 d-flex justify-content-end">
                    <div className="payment">
                      Total:${total}
                        <a href="#">
                          Check out <i className='bi bi-wallet-fill'></i>
                        </a>
                    </div>
                  </div>
                </div>
              
              </>
            )
          }
        </div>
    </section>
  )
}

export default Bag
