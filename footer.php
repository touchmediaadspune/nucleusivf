	
	<footer class="footer p-0 bg-foote">
    <div class="container">
      <div class="row equal-height pt-30">
        <div class="col-sm-4 col-md-4">
          <div class="footer-widget">
            <div class="footer-logo">
              <img class="mb-20" src="myimg/logo.png" height="80" alt="">
              <p>
                Nucleus IVF Centre has been providing quality IVF care with internationally comparable services and success rates. Our core strength lies in our ability to give to our patient's comprehensive ART and allied services.
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-4 col-md-2">
          <div class="widget dark sm-text-center">
            <h5 class="widget-title">Ouick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Doctor</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div class="col-sm-4 col-md-3">
          <div class="widget dark sm-text-center">
            <h5 class="widget-title">Quick Contact</h5>
            <ul>
              <li><a href="#">+91 8149143338</a></li>
              <li><a href="#">nucleusfrgc@gmail.com</a></li>
              <li><a href="#" class="lineheight-20">10, Ganesham Commercial, Ganesham D Building, Landmark : Near Govind Garden, Nashik Phata BRT Road, Pune</a></li>
            </ul>
            <!-- <ul class="social-icons icon-gray icon-circled icon-sm sm-text-center mt-sm-15">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul> -->
          </div>
        </div>

        <div class="col-md-3">
          <div class="widget dark">
            <h5 class="widget-title">Facebook</h5>
            <div class="fb-page" data-href="https://www.facebook.com/IVFtreatmentinpune/" data-tabs="timeline" data-height="195" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/IVFtreatmentinpune/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/IVFtreatmentinpune">Nucleus IVF</a></blockquote></div>
          </div>
        </div>

      </div>
    </div>
    <div class="footer-nav bg-colo pt-10 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="text-center">Copyright &copy;<?= date('Y') ?> NUCLEUS IVF. All Rights Reserved</p>
          </div>
          <div class="col-md-6">
            <div class="widget m-0 text-center">
              <p>Design & Developed By <a href="http://touchmediaads.com/" target=_blank>Touchmediaads</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>

  <a class="make_appointment" href="#" data-toggle="modal" data-target="#modal_appontment_form"><b>Make an Appointment</b></a>

  <div class="modal fade" id="modal_appontment_form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="border-1px p-25">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="text-theme-colored text-uppercase m-0">Make an Appointment</h4>
          <div class="line-bottom mb-20"></div>
          <form id="popup_appointment_form" name="popup_appointment_form" class="appmyForm" method="post" action="send_item.php">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input id="form_name" name="name" class="form-control" type="text" placeholder="Enter Name">
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input id="form_numb" name="phone" class="form-control email" type="number" placeholder="Enter Mobile Number">
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input id="form_email" name="email" class="form-control email" type="email" placeholder="Enter Email">
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group mb-10">
                  <input name="date" class="form-control date-picker" type="text" placeholder="Appoinment Date">
                </div>
              </div>
            </div>
            <div class="form-group mb-10">
              <textarea id="form_message" name="msg" class="form-control"  placeholder="Enter Message" rows="5"></textarea>
            </div>
            <div class="form-group mb-0 mt-20">
              <button id="appsubmit" type="submit" class="btn btn-dark btn-theme-colored" data-loading-text="Please wait...">Send Message</button>

              <div id="errormsg2" style="color: green;"></div>
              <div id="errormsg" style="color: red;"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <a href="https://www.google.co.in/maps/dir/''/Dynamic+World+Distance+Learning+centre+for+MBA,+Distance+Education+Centre+in+mumbai,+nr+samundra+manthan+country+bar,+nr+sanjeevani+hospital,+rd+khot+rd+corner,+Bhatti+Pada+Rd,+Battipada,+Bhandup+West,+Mumbai,+Maharashtra+400078/@19.129536,72.8948583,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b86510b19ef1:0xc6e1d764867285bd!2m2!1d72.936403!2d19.149983" target="_blank"><button class="map"></button></a>
  <a class="call5 text-center hidden-md hidden-lg" href="tel:+919820402089">
        <i class="fa fa-phone fa-2x"></i>
  </a>
  <a class="map5 text-center hidden-md hidden-lg" href="https://api.whatsapp.com/send?phone=919820402089" target="_blank">
      <i class="fa fa-whatsapp fa-2x"></i>
  </a>