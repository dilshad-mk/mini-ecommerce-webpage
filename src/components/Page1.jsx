import React from 'react'
import "./Page1.css"
import { useNavigate } from 'react-router-dom'
function Page1() {
    const products=[{
        image:"/pp1.png",
        name:"Drou watch ultra",
        off_price:"$70.00",
        price:"$86.00"
    },
    {
        image:"/pp2.png",
        name:"Droubook space gray",
        off_price:"$80.00",
        price:"$96.00"
    },
    
    {
        image:"/pp3.png",
        name:"Homepod mini 2022",
        off_price:"$39.00",
        price:"$60.00"
    },
    {
        image:"/pp4.png",
        name:"DroSafe Charger",
        off_price:"$55.00",
        price:"$76.00"
    },
    {
        image:"/pp5.png",
        name:"Home entertainment",
        off_price:"$79.00",
        price:"$86.00"
    },
 
    
    {
        image:"/tp3.png",
        name:"DrouPods max",
        off_price:"$55.00",
        price:"$75.00"
    },
    {        image:"/tp2.png",
        name:"IPhone 14 pro max",
        off_price:"$949.00",
        price:"$999.00"
    },
    {
        image:"/tp4.png",
        name:"IPhone 13 white color",
        off_price:"$110.00",
        price:"$130.00"
    },

]
const navigate=useNavigate();
 const handleLoginRedirect = () => {
        navigate("/login");}
  return (
    <div>
        {/* banner section  */}
        <div className='banner'>
            <div className='content-wraper'>
                <div >
                    <h4>SALE UPTO 30% OFF</h4>
                <h2>Apple Watch Series</h2>
                <p>Feature packed at a better value than ever <br /> Powerful sensors to
                    monitor your fitness</p>
                    <button onClick={handleLoginRedirect}>Shop Now <i class="bi bi-arrow-right"></i></button>
                </div>
            </div>
        
        </div>

        {/* popular-products  */}

        <div className='popular-products-wrapper'>
           <div className='headiing-part-pp'>
             <h5>Popular products</h5>
             <h6 onClick={handleLoginRedirect}>View all products <i class="bi bi-arrow-right"></i></h6>
           </div>

                <div className="pp-grid">
                    {products.slice(0,5).map((product_data,index)=>(
                        <div className='card-body' key={index}>
                            <div className='img-div'><img src={product_data.image} alt="error" /></div>
                            <div className='rating'>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            
                            </div>
                            <div className='p-name'>
                                <h5>{product_data.name}</h5>
                            </div>
                            <div className='prices'>
                                <p>{product_data.off_price}</p> 
                                <p>{product_data.price}</p> 
                            </div>

                        </div>
                    ))}
                </div>
            
        </div>

        <div className='banners-1-wrapper'>
            <div className='console'>
                <h4>BIG SCREEN</h4>
                <h3>Samrt Watch Series 7</h3>
                <h4>$65.00</h4>
                <button className='rounded-pill' onClick={handleLoginRedirect}>Shop Now</button>
            </div>
            <div className='cam'>
                <h4>STUDIO DISPLAY</h4>
                <h3>600 nits of brightnes.</h3>
                <h4>$999.00</h4>
                <button className='rounded-pill' onClick={handleLoginRedirect}>Shop Now</button>
            </div>
        </div>
        {/* trending products */}

                    <div className='trending_prduct_section'>
                       <div className="tp-head">
                         <div className="head_left">
                            <h5>Trending Products</h5>
                        </div>
                        <div className="nav_right">
                            <ul>
                                <li className='active'>Headphones</li>
                                <li>Laptops</li>
                                <li>Watch</li>
                            </ul>
                        </div>
                       </div>
                        <div className="product_grid">
                             {products.map((trending_products,index)=>(
                                <div className="trending_product_body" key={index}>
                                     <div className='img-div'><img src={trending_products.image} alt="error" /></div>
                            <div className='rating'>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            
                            </div>
                            <div className='p-name'>
                                <h5>{trending_products.name}</h5>
                            </div>
                            <div className='prices'>
                                <p>{trending_products.off_price}</p> 
                                <p>{trending_products.price}</p> 
                            </div>
                                </div>
                             ))}
                        </div>
                    </div>


                    <section className="brands-section">
    <h2>Shop by brands</h2>
    <div className="brands-grid">
        <div className="brand-card"><i className="bi bi-wind"></i> Speed Flow</div>
        <div className="brand-card"><i className="bi bi-moon"></i> Half Moon</div>
        <div className="brand-card"><i className="bi bi-hexagon"></i> Hexaware</div>
        <div className="brand-card"><i className="bi bi-award"></i> Crown & King</div>
        <div className="brand-card"><i className="bi bi-flower1"></i> Orchid</div>
        <div className="brand-card"><i className="bi bi-triangle"></i> Trispace</div>
        <div className="brand-card"><i className="bi bi-star"></i> Star Inc</div>
        <div className="brand-card"><i className="bi bi-award"></i> Crown & King</div>
        <div className="brand-card"><i className="bi bi-grid"></i> Five Square</div>
        <div className="brand-card"><i className="bi bi-star"></i> Star Inc</div>
        <div className="brand-card"><i className="bi bi-award"></i> Crown & King</div>
        <div className="brand-card"><i className="bi bi-moon"></i> Half Moon</div>
    </div>
</section>

<section className="info-bar">
    <span className="site-url">www.Ecco.com</span>
    
    <div className="info-grid">
        <div className="info-item">
            <h4>Store location</h4>
            <p>259 Freedom, New York</p>
        </div>
        <div className="info-item">
            <h4>Work inquiries</h4>
            <p>inquiries@Ecco.com</p>
        </div>
        <div className="info-item">
            <h4>Call us</h4>
            <p>+91-987654321</p>
        </div>
        <div className="info-item">
            <h4>Open hours</h4>
            <p>Mon-Sat : 08.00 - 18.00</p>
        </div>
    </div>
</section>

<footer className="main-footer">
    <div className="footer-container">
        
        <div className="footer-col-brand">
            <div className="footer-logo">
                <i className="bi bi-lightning-fill"></i>
                <span>ECCO<br /><small>MOBILE STORE</small></span>
            </div>
            <p className="copyright">
                Copyright © 2025 dilshad 
            </p>
        </div>

        <div className="footer-col-links">
            <h4>Information</h4>
            <ul>
                <li><a href="#">Product Support</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">License Policy</a></li>
                <li><a href="#">Affiliate</a></li>
            </ul>
        </div>

        <div className="footer-col-links">
            <h4>Customer Service</h4>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Redeem Voucher</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Policies & Rules</a></li>
            </ul>
        </div>

        <div className="footer-col-app">
            <h4>Download Our App</h4>
            <p>Download our App and get extra 15% Discount on your first Order..!</p>
            
            <div className="app-buttons">
                <a href="#" className="app-btn">
                    <i className="bi bi-google-play"></i>
                    <div className="app-btn-text">
                        <span>Get it on</span>
                        <span>Google play</span>
                    </div>
                </a>
                
                <a href="#" className="app-btn">
                    <i className="bi bi-apple"></i>
                    <div className="app-btn-text">
                        <span>Download on the</span>
                        <span>App Store</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
</footer>
                                    
    </div>
  )
}

export default Page1;