import React from 'react';

function Home(props) {
    return (
        <div>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-text header-text">
                                <h6>Over 36,500+ Active Listings</h6>
                                <h2>Find Nearby Places &amp; Things</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <form id="search-form" name="gs" method="submit" role="search" action="#">
                                <div className="row">
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <select name="area" className="form-select" aria-label="Area" id="chooseCategory" onchange="this.form.click()">
                                                <option selected>All Areas</option>
                                                <option value="New Village">New Village</option>
                                                <option value="Old Town">Old Town</option>
                                                <option value="Modern City">Modern City</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <input type="address" name="address" className="searchText" placeholder="Enter a location" autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <select name="price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                                                <option selected>Price Range</option>
                                                <option value="$100 - $250">$100 - $250</option>
                                                <option value="$250 - $500">$250 - $500</option>
                                                <option value="$500 - $1000">$500 - $1,000</option>
                                                <option value="$1000+">$1,000 or more</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3">
                                        <fieldset>
                                            <button className="main-button"><i className="fa fa-search" /> Search Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <ul className="categories">
                                <li><a href="category.html"><span className="icon"><img src="assets/images/search-icon-01.png" alt="Home" /></span> Apartments</a></li>
                                <li><a href="listing.html"><span className="icon"><img src="assets/images/search-icon-02.png" alt="Food" /></span> Food &amp; Life</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-03.png" alt="Vehicle" /></span> Cars</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-04.png" alt="Shopping" /></span> Shopping</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-05.png" alt="Travel" /></span> Traveling</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Popular Categories</h2>
                                <h6>Check Them Out</h6>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="naccs">
                                <div className="grid">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="menu">
                                                <div className="first-thumb active">
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-01.png" alt /></span>
                                                        Apartments
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-02.png" alt /></span>
                                                        Food &amp; Life
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-03.png" alt /></span>
                                                        Cars
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-04.png" alt /></span>
                                                        Shopping
                                                    </div>
                                                </div>
                                                <div className="last-thumb">
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-05.png" alt /></span>
                                                        Traveling
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 align-self-center">
                                            <ul className="nacc">
                                                <li className="active">
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>One Of The Most Trending Stuffs Right Now!</h4>
                                                                        <p>Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.</p>
                                                                        <div className="main-white-button"><a href="#"><i className="fa fa-eye" /> Discover More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-01.jpg" alt />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Food and Lifestyle category is here</h4>
                                                                        <p>You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.</p>
                                                                        <div className="main-white-button"><a href="#"><i className="fa fa-eye" /> Explore More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-02.jpg" alt="Foods on the table" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Best car rentals for your trips!</h4>
                                                                        <p>Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates.</p>
                                                                        <div className="main-white-button"><a href="listing.html"><i className="fa fa-eye" /> More Listing</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-03.jpg" alt="cars in the city" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Shopping List: Images from Unsplash</h4>
                                                                        <p>Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.</p>
                                                                        <div className="main-white-button"><a href="#"><i className="fa fa-eye" /> Discover More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-04.jpg" alt="Shopping Girl" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Information and Safety Tips for Traveling</h4>
                                                                        <p>You are allowed to use this template for your commercial websites. You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites.</p>
                                                                        <div className="main-white-button"><a rel="nofollow" href="https://templatemo.com/contact"><i className="fa fa-eye" /> Read More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-05.jpg" alt="Traveling Beach" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recent-listing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Recent Listing</h2>
                                <h6>Check Them Out</h6>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="owl-carousel owl-listing">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-01.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>1. First Apartment Unit</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(18) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $450 - $950 / month with taxes</span>
                                                    <span className="details">Details: <em>2760 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 4 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 4 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-02.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>2. Another House of Gaming</h4></a>
                                                    <h6>by: Top Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(24) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $1,400 - $3,500 / month with taxes</span>
                                                    <span className="details">Details: <em>3650 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 4 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 3 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-03.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>3. Secret Place Hidden House</h4></a>
                                                    <h6>by: Best Property</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(36) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $1,500 - $3,600 / month with taxes</span>
                                                    <span className="details">Details: <em>5500 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 4 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 3 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-04.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>4. Sunshine Fourth Apartment</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(24) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $3,600 / month with taxes</span>
                                                    <span className="details">Details: <em>3660 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 5 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 3 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-05.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>5. Best House Of the Town</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(32) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $5,600 / month with taxes</span>
                                                    <span className="details">Details: <em>1750 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 6 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 3 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-06.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>6. Amazing Pool Party Villa</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(40) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $3,850 / month with taxes</span>
                                                    <span className="details">Details: <em>3660 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 4 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 3 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-05.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>7. Sunny Apartment</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(24) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $5,450 / month with taxes</span>
                                                    <span className="details">Details: <em>1640 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 8 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 5 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-02.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>8. Third House of Gaming</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(15) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $5,520 / month with taxes</span>
                                                    <span className="details">Details: <em>1660 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 5 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 4 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="listing-item">
                                                <div className="left-image">
                                                    <a href="#"><img src="assets/images/listing-06.jpg" alt /></a>
                                                </div>
                                                <div className="right-content align-self-center">
                                                    <a href="#"><h4>9. Relaxing BBQ Party Villa</h4></a>
                                                    <h6>by: Sale Agent</h6>
                                                    <ul className="rate">
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li>(20) Reviews</li>
                                                    </ul>
                                                    <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt /></div> $4,760 / month with taxes</span>
                                                    <span className="details">Details: <em>2880 sq ft</em></span>
                                                    <ul className="info">
                                                        <li><img src="assets/images/listing-icon-02.png" alt /> 6 Bedrooms</li>
                                                        <li><img src="assets/images/listing-icon-03.png" alt /> 4 Bathrooms</li>
                                                    </ul>
                                                    <div className="main-white-button">
                                                        <a href="contact.html"><i className="fa fa-eye" /> Contact Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Home;