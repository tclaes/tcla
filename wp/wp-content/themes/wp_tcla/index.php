<?php
if ( is_home() ) :
  get_header( 'home' );
elseif ( is_404() ) :
  get_header( '404' );
else :
  get_header();
endif;
?>



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


<?php get_footer(); ?>