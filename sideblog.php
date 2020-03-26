<div class="col-sm-12 col-md-3">
            <div class="sidebar sidebar-right mt-sm-30">
              
              <div class="widget">
                <h4 class="widget-title line-bottom">Other Blogs</h4>
                <div class="categories">
                  <ul class="list list-border angle-double-right">
                      <?php 
                        $l = 1;
                        $tre = mysqli_query($con, "select * from e_blog order by id desc");
                        while ($trk = mysqli_fetch_array($tre)) {
                          $b_content = substr($trk['b_content'], 0, 50);
                      ?>
                          <li class="muik"><a href="<?= $trk['id']; ?>"><?= $trk['name']; ?></a></li>
                      <?php 
                        $l++;}
                      ?>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>