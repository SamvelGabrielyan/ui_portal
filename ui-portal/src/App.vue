<template>
  <div id="app">
      <header id="header">
       <nav id="navigation" class="navbar">
            
            <!-- .container -->
            <div class="container">
                
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse-1">
                        <span class = "sr-only">Menu</span>
                        <span class = "icon-bar"></span>
                        <span class = "icon-bar"></span>
                        <span class = "icon-bar"></span>
                    </button>
                    <div class="navbar-brand"><img src="./assets/images/logo1.png" alt="Logo" /></div> <!-- site logo -->
                </div>
                
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="menu-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link to = "/features">Features</router-link></li>
                        <li><router-link to = "/test">Test Now</router-link></li>
                        <li><a href = "/price">Pricing</a></li>
                        <li><router-link to = "/register">Register</router-link></li>
                        <li><router-link to = "/login">Login</router-link></li>
                    </ul>
                </div>
                
            </div>
            <!-- .container end -->
            
        </nav>
      <router-view></router-view>
  
      </header>
 
    <div id="features3" class="wrap-container8040">
        
        <!-- .container -->
    	<div class="container">
            
            <!-- .row -->
            <!--<div class="row">-->
                <!---->
                <!--<div class="col-sm-10 col-md-6 col-lg-5 col-sm-offset-1 col-md-offset-0">-->
                	<!--<figure class="margin-bottom40 animation" data-animation="animation-fade-in-left">-->
                    	<!--<img src="./assets/images/content/landing/feature-2.png" alt="Image">-->
                    <!--</figure>-->
                <!--</div>-->
                <!---->
                <!--<div class="col-sm-10 col-md-6 col-sm-offset-1 col-md-offset-0 col-lg-offset-1">-->
                	<!--<div class="col-text20 margin-bottom20">-->
                    	<!--<div class="post-heading-left margin-bottom20">-->
                            <!--<h4>Flatland Landing Page</h4>-->
                            <!--<h2>Why It’s Best #2</h2>-->
                            <!--<p>Lorem ipsum dolor sit amet, consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>-->
                        <!--</div>-->
                        <!---->
                        <!--<div class="list-row">-->
                        	<!--<div class="list-col">-->
                                <!--<ul class="list-icon">-->
                                    <!--<li><i class="fa fa-check"></i> Meeting time</li>-->
                                    <!--<li><i class="fa fa-check"></i> Invite people</li>-->
                                    <!--<li><i class="fa fa-check"></i> Share location</li>-->
                                    <!--<li><i class="fa fa-check"></i> Reminder</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                            <!---->
                            <!--<div class="list-col">-->
                            	<!--<ul class="list-icon">-->
                                    <!--<li><i class="fa fa-check"></i> Notification by email</li>-->
                                    <!--<li><i class="fa fa-check"></i> List of meeting materials</li>-->
                                    <!--<li><i class="fa fa-check"></i> Made very important</li>-->
                                    <!--<li><i class="fa fa-check"></i> Go out and take holiday</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
            <!--</div>-->
            <!-- .row end -->
            
        </div>
        <!-- .container end -->
        
    </div>

        <div id="features4" class="wrap-container8040 bg-grey">
        
        <!-- .container -->
    	<div class="container">
            
            <div class="post-heading-center">
            	<h2>Our's Amazing Features</h2>
                <p>Lorem ipsum dolor sit amet, consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <!-- .row-custom -->
            <div class="row-custom">
            	
                <div class="col-left">
                	<div class="affa-feature-icon"> <!-- 1 -->
                    	<i class="fa fa-laptop animation" data-animation="animation-fade-in-left"></i>
                        <div class="feature-text">
                        	<h4>Flat Design</h4>
                            <p>Proident sunt in culpa qui officia deserunt mollit anim perspiciatis unde omnis natus culpa qui deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    
                    <div class="affa-feature-icon"> <!-- 2 -->
                    	<i class="fa fa-download animation" data-animation="animation-fade-in-left"></i>
                        <div class="feature-text">
                        	<h4>PSD Layers</h4>
                            <p>Proident sunt in culpa qui officia deserunt mollit anim perspiciatis unde omnis natus culpa qui deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    
                    <div class="affa-feature-icon"> <!-- 3 -->
                    	<i class="fa fa-building-o animation" data-animation="animation-fade-in-left"></i>
                        <div class="feature-text">
                        	<h4>Responsive Layout</h4>
                            <p>Proident sunt in culpa qui officia deserunt mollit anim perspiciatis unde omnis natus culpa qui deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-center">
                	<figure class="margin-bottom40 animation" data-animation="animation-fade-in-down">
                    	<img src="./assets/images/content/landing/feature-3.png" alt="Nexus Black" />
                    </figure>
                </div>
                
                <div class="col-right">
                	<div class="affa-feature-icon"> <!-- 4 -->
                    	<i class="fa fa-paint-brush animation" data-animation="animation-fade-in-right"></i>
                        <div class="feature-text">
                        	<h4>Customizable</h4>
                            <p>Proident sunt in culpa qui officia deserunt mollit anim perspiciatis unde omnis natus culpa qui deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    
                    <div class="affa-feature-icon"> <!-- 5 -->
                    	<i class="fa fa-support animation" data-animation="animation-fade-in-right"></i>
                        <div class="feature-text">
                        	<h4>Extensive Docs</h4>
                            <p>Proident sunt in culpa qui officia deserunt mollit anim perspiciatis unde omnis natus culpa qui deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    
                    <div class="affa-feature-icon"> <!-- 6 -->
                    	<i class="fa fa-shield animation" data-animation="animation-fade-in-right"></i>
                        <div class="feature-text">
                        	<h4>Secure & Valid</h4>
                            <p>Proident sunt in culpa qui officia deserunt mollit anim perspiciatis unde omnis natus culpa qui deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- .row-custom end -->
            
        </div>
        <!-- .container end -->
        
    </div>
     <div id="counter" class="bg-parallax" data-parallax="scroll" data-speed="0.2" data-natural-width="1920" data-natural-height="1080" data-image-src="./assets/images/content/bg/1.jpg">
        
        <!-- .bg-overlay -->
        <div class="bg-overlay50 wrap-container8040">
            
            <!-- .container -->
            <div class="container">
                
                <!-- .row -->
                <div class="row">
                    
                    <div class="col-sm-3"> <!-- 1 -->
                    	<div class="affa-counter">
                        	<img src="./assets/images/content/icon/stats.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" />
                            <h4><span>{{this.sms}}</span></h4>
                            <p>SMS Forwarded</p>
                        </div>
                    </div>
                    
                    <div class="col-sm-3"> <!-- 2 -->
                    	<div class="affa-counter">
                        	<img src="./assets/images/content/icon/clock.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" data-delay="300" />
                            <h4><span>200</span>k</h4>
                            <p>Recording Forwarded</p>
                        </div>
                    </div>
                    
                    <div class="col-sm-3"> <!-- 3 -->
                    	<div class="affa-counter">
                        	<img src="./assets/images/content/icon/coffe-cup.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" data-delay="600" />
                            <h4><span>64</span>k</h4>
                            <p>Phone Numbers</p>
                        </div>
                    </div>
                    
                    <div class="col-sm-3"> <!-- 4 -->
                    	<div class="affa-counter">
                        	<img src="./assets/images/content/icon/user.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" data-delay="900" />
                            <h4><span>256</span>k</h4>
                            <p>Registered Users</p>
                        </div>
                    </div>
                    
                </div>
                <!-- .row end -->
                
            </div>
            <!-- .container end -->
            
        </div>
        <!-- .bg-overlay end -->
        
    </div>

    <!--<div id="testimonials" class="wrap-container8040 bg-color">-->
        <!---->
        <!--&lt;!&ndash; .container &ndash;&gt;-->
    	<!--<div class="container">-->
            <!---->
            <!--<div class="post-heading-center">-->
            	<!--<h2>What Our's Clients Says</h2>-->
                <!--<p>Lorem ipsum dolor sit amet, consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
            <!--</div>-->
            <!---->
            <!--&lt;!&ndash; .row &ndash;&gt;-->
            <!--<div class="row">-->
                <!---->
                <!--<div class="col-sm-6"> &lt;!&ndash; 1 &ndash;&gt;-->
                	<!--<div class="affa-testimonial animation" data-animation="animation-fade-in-left">-->
                    	<!--<div class="testimonial-text">-->
                        	<!--<p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium."</p>-->
                        <!--</div>-->
                        <!--<div class="testimonial-author">-->
                        	<!--<h4>John Doe</h4>-->
                            <!--<p>company.com</p>-->
                            <!--<img src="./assets/images/content/avatar/1.jpg" alt="Avatar" />-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="col-sm-6"> &lt;!&ndash; 2 &ndash;&gt;-->
                	<!--<div class="affa-testimonial animation" data-animation="animation-fade-in-right">-->
                    	<!--<div class="testimonial-text">-->
                        	<!--<p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium."</p>-->
                        <!--</div>-->
                        <!--<div class="testimonial-author">-->
                            <!--<h4>John Doe</h4>-->
                            <!--<p>company.com</p>-->
                            <!--<img src="./assets/images/content/avatar/2.jpg" alt="Avatar" />-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
            <!--</div>-->
            <!--&lt;!&ndash; .row &ndash;&gt;-->
            <!---->
            <!--&lt;!&ndash; .row &ndash;&gt;-->
            <!--<div class="row">-->
            <!---->
            	<!--<div class="col-sm-6"> &lt;!&ndash; 3 &ndash;&gt;-->
                	<!--<div class="affa-testimonial animation" data-animation="animation-fade-in-left">-->
                    	<!--<div class="testimonial-text">-->
                        	<!--<p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium."</p>-->
                        <!--</div>-->
                        <!--<div class="testimonial-author">-->
                        	<!--<h4>John Doe</h4>-->
                            <!--<p>company.com</p>-->
                            <!--<img src="./assets/images/content/avatar/3.jpg" alt="Avatar" />-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="col-sm-6"> &lt;!&ndash; 4 &ndash;&gt;-->
                	<!--<div class="affa-testimonial animation" data-animation="animation-fade-in-right">-->
                    	<!--<div class="testimonial-text">-->
                        	<!--<p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium."</p>-->
                        <!--</div>-->
                        <!--<div class="testimonial-author">-->
                            <!--<h4>John Doe</h4>-->
                            <!--<p>company.com</p>-->
                            <!--<img src="./assets/images/content/avatar/4.jpg" alt="Avatar" />-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!---->
            <!--</div>-->
            <!--&lt;!&ndash; .row &ndash;&gt;-->
            <!---->
            <!--&lt;!&ndash; .row &ndash;&gt;-->
            <!--<div class="row">-->
            <!---->
            	<!--<div class="col-sm-6"> &lt;!&ndash; 5 &ndash;&gt;-->
                	<!--<div class="affa-testimonial animation" data-animation="animation-fade-in-left">-->
                    	<!--<div class="testimonial-text">-->
                        	<!--<p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium."</p>-->
                        <!--</div>-->
                        <!--<div class="testimonial-author">-->
                        	<!--<h4>John Doe</h4>-->
                            <!--<p>company.com</p>-->
                            <!--<img src="./assets/images/content/avatar/5.jpg" alt="Avatar" />-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="col-sm-6"> &lt;!&ndash; 6 &ndash;&gt;-->
                	<!--<div class="affa-testimonial animation" data-animation="animation-fade-in-right">-->
                    	<!--<div class="testimonial-text">-->
                        	<!--<p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium."</p>-->
                        <!--</div>-->
                        <!--<div class="testimonial-author">-->
                            <!--<h4>John Doe</h4>-->
                            <!--<p>company.com</p>-->
                            <!--<img src="./assets/images/content/avatar/6.jpg" alt="Avatar" />-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
            <!--</div>-->
            <!--&lt;!&ndash; .row &ndash;&gt;-->
            <!---->
        <!--</div>-->
        <!--&lt;!&ndash; .container end &ndash;&gt;-->
        <!---->
    <!--</div>-->
       <div id="contact" class="wrap-container80">
        
        <!-- .container -->
    	<div class="container">
            
            <!-- .row -->
            <!--<div class="row">-->
                <!---->
                <!--<div class="col-sm-4">-->
                	<!--<div class="affa-info-text">-->
                    	<!--<img src="images/content/icon/mobile.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" />-->
                        <!--<h4>Phone Number</h4>-->
                        <!--<p>(00) 123-4567890 (tel-1)</p>-->
                        <!--<p>(00) 123-4567890 (tel-2)</p>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="col-sm-4">-->
                	<!--<div class="affa-info-text">-->
                    	<!--<img src="images/content/icon/mail.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" data-delay="300" />-->
                        <!--<h4>Email Address</h4>-->
                        <!--<p>email_1@example.com</p>-->
                        <!--<p>email_2@example.com</p>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="col-sm-4">-->
                	<!--<div class="affa-info-text">-->
                    	<!--<img src="images/content/icon/location-pin.png" alt="Icon" class="animation" data-animation="animation-fade-in-down" data-delay="600" />-->
                        <!--<h4>Business Address</h4>-->
                        <!--<p>123 Main Street Cottage</p>-->
                        <!--<p>Long Branch, P.O Box 65148</p>-->
                    <!--</div>-->
                <!--</div>-->
                <!---->
            <!--</div>-->
            <!-- .row end -->
            
            <div class="sep-border margin-bottom40"></div> <!-- separator -->
            
            <div class="post-heading-center">
                <h2>Keep in Touch with Us</h2>
                <p>Contact us if you would like to place special request and we will get back to you within 24 hours.</p>
            </div>
            
            <!-- .row -->
            <div class="row">
                
                <div class="col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2">
                	<form method="post" action="#" class="affa-form-contact">
                    	<div class="submit-status"></div> <!-- submit status -->
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="text" name="email" placeholder="Email Address *" />
                        <textarea name="message" placeholder="Message *"></textarea>
                        <br><br>
                        <input type="submit" name="submit" value="Send Message" />
                    </form>
                </div>
                
            </div>
            <!-- .row end -->
            
        </div>
        <!-- .container end -->
        
    </div>
        
         <footer id="footer">
        <div class="footer-socials">
        	<div class="container">
                <a href="#" title="Paypal" class="animation" data-animation="animation-bounce-in"><i class="fa fa-paypal"></i></a>
                <a href="#" title="BitCoin" class="animation" data-animation="animation-bounce-in"><i class="fa fa-bitcoin"></i></a>
            	<a href="#" title="Twitter" class="animation" data-animation="animation-bounce-in"><i class="fa fa-twitter"></i></a>
                <a href="#" title="Facebook" class="animation" data-animation="animation-bounce-in" data-delay="200"><i class="fa fa-facebook"></i></a>
                <a href="#" title="Google Plus" class="animation" data-animation="animation-bounce-in" data-delay="400"><i class="fa fa-google-plus"></i></a>
                <a href="#" title="Pinterest" class="animation" data-animation="animation-bounce-in" data-delay="600"><i class="fa fa-pinterest"></i></a>
                <a href="#" title="Instagram" class="animation" data-animation="animation-bounce-in" data-delay="800"><i class="fa fa-instagram"></i></a>
                <a href="#" title="LinkedIn" class="animation" data-animation="animation-bounce-in" data-delay="1000"><i class="fa fa-linkedin"></i></a>
                <a href="#" title="Github" class="animation" data-animation="animation-bounce-in" data-delay="1200"><i class="fa fa-github"></i></a>
            </div>
        </div>
        
        <div class="footer-copyright">
            <div class="container">
            	<p>&copy; 2018 Copyright. All Rights Reserved.</p>
            </div>
        </div>
        
    </footer>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: 'app',
    data(){
      return {
          token:'',
          sms:'',
          record:'',
          phone:'',
          users:'',
      }
    },
    methods:{
        Consol(){
            if (window.location.search) {
                this.token = window.location.search.split('=').pop();
                // console.log(this.token)
                axios.post(`http://88.198.106.121/api_gsim/v1/registration/confirm/${this.token}`,{

                }).then((res)=>{
                    if (res.data.success){
                        alert('Your Email has been verified, Login to portal to buy SMS DIDs and manange your account')
                    }
                })
            }
        },
        GetDashbord:function () {
            axios.get('http://88.198.106.121/api_gsim/v1/public/dashboard',{
                headers:{
                    'X-Auth-Token': this.token,
                }
            }) .then((res)=> {
                // console.log(res)
                this.sms = res.data.payload.sms_count
                this.phone = res.data.payload
                this.users = res.data.payload.regstered_users
                // console.log(res.data.payload.items)
                // console.log(this.Orders.AppData)
                // console.log(this.i)


            })
        }
    },
    created(){
        this.Consol();
        this.GetDashbord();
    }
}
</script>

<style scoped src="../public/css/bootstrap.min.css">

</style>
