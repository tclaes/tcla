<?php get_header(); ?>



	<div class="container" id="services">
    <div class="row">

    <?php if(have_posts()) : ?>
      <?php while (have_posts()) : the_post(); ?>
          <div class="col-md-12 box">
            <div class="well">
            <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
            <p><?php the_date(); ?></p>
            <div class="post-thumb">
            <?php if(has_post_thumbnail()) : ?>
              <?php the_post_thumbnail(); ?>
            <?php endif; ?>
            </div>
            <div><?php the_excerpt(); ?></div>

        </div>
       </div>
      <?php endwhile; ?>
    <?php else: ?>
      <p><?php __('No posts found'); ?></p>
    <?php endif; ?>
  
    </div>
    </div>
    <footer class="main-footer">
    <div class="container">
      <div class="row">

        <div class="col-md-3">
          <h3>Testcases</h3>
          <ul class="list-unstyled">
            <li><a href="/framework" target="_blank">Framework</a></li>
            <li><a href="/timeline" target="_blank">Timeline</a></li>
            <li><a href="/herta" target="_blank">Herta</a></li>
            <li><a href="/bootstrap" target="_blank">Bootstrap</a></li>
            <li><a href="/snapshot" target="_blank">Visuatech snapshots</a></li>
            <li><a href="/cv" target="_blank">CV website</a></li>
            <li><a href="/fullscreen" target="_blank">Fullscreen slider</a></li>
          </ul>
        </div>
        <div class="col-md-3">
        <h3>Realisaties</h3>
          <ul class="list-unstyled">
            <li><a href="">.tcla</a></li>
            <li><a href="http://www.louieclaes.be">Louie Claes</a></li>
            <li><a href="#">Goedkope pampers (offline)</a></li>
            <li><a href="#">Mijn Baby (offline)</a></li>
          </ul>
        </div>
        <div class="col-md-3">
        <h3>Partners</h3>
          <ul class="list-unstyled">
            <li><a href="https://www.versio.nl/?pa=21306uvsrl">Versio</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>Over mij</h3>
          <p>Webdevelopment is een passie. Na lang twijfelen wil ik er voor gaan en er mijn beroep van maken.</p>
          <p>Copyright &copy; <?php echo Date('Y'); ?> | <?php bloginfo('name'); ?></p>
        </div>
      </div>
    </div>
  </footer>

<?php get_footer(); ?>