<?php

function ninja_gutenberg_blocks_register_socail_sharing(){
	if( !function_exists('register_block_type') ){
		return;
	}

	register_block_type('ninja-blocks/social-sharing', array(
		'attributes' => array(
			'facebook' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'twitter' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'google' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'linkedin' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'pinterest' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'reddit' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'email' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'shareButtonAlignment' => array(
				'type' => 'string',
				'default' => 'left',
			),
			'shareButtonStyle' => array(
				'type' => 'string',
				'default' => 'nb-sharing-icon-only',
			),
			'shareButtonShape' => array(
				'type' => 'string',
				'default' => 'nb-sharing-icon-circle',
			),
			'shareButtonSize' => array(
				'type' => 'string',
				'default' => 'nb-sharing-button-medium',
			),
			'shareButtonColorType' => array(
				'type' => 'string',
				'default' => 'nb-sharing-icon-color-social',
			),
		),
		'render_callback' => 'ninja_gutenberg_blocks_render_social_sharing',
	));
}
add_action('init', 'ninja_gutenberg_blocks_register_socail_sharing');



function ninja_gutenberg_blocks_render_social_sharing( $attr ){
	global $post;
	
	if( has_post_thumbnail() ){
		$thumbnail_id = get_post_thumbnail_id($post->ID);
		$thumbnail = $thumbnail_id ? current( wp_get_attachment_image_src( $thumbnail_id, 'full') ) : '';
	} else {
		$thumbnail = null;
	}
	
	$post_title = str_replace( ' ', '%20', get_the_title($post->ID) );
	
	// facebook url
	$facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' . get_the_permalink() . '&title=' . esc_attr($post_title) . '';
	
	// twitter url
	$twitter_url = 'http://twitter.com/share?text=' . esc_attr($post_title) . '&url='.get_the_permalink().'';
	
	// google url
	$google_url = 'https://plus.google.com/share?url=' . get_the_permalink() . '';
	
	// linkedin url 
	$linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' . get_the_permalink() . '&title=' . esc_attr($post_title) . '';
	
	// pinterest url 
	$pinterest_url = 'https://pinterest.com/pin/create/button/?&url=' . get_the_permalink() . '&description=' . esc_attr($post_title) . '&media=' . esc_url( $thumbnail ) . '';
	
	// reddit url
	$reddit_url = 'https://www.reddit.com/submit?url=' . get_the_permalink() . '';
	
	// email url 
	$email_url = 'mailto:?subject=' .esc_attr($post_title)  . '&body=' .esc_attr($post_title)  . '&mdash;' . get_the_permalink() . '';
	
	$html = '';
	
	if( isset($attr['facebook']) && $attr['facebook'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-facebook"><i class="nb-icon-facebook"></i><span>%2$s</span></a></li>',
			esc_url( $facebook_url ),
			esc_html__( 'Share on Facebook', 'ninja-gutenberg-blocks' )
		);
	}
	
	if( isset($attr['twitter']) && $attr['twitter'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-twitter"><i class="nb-icon-twitter"></i><span>%2$s</span></a></li>',
			esc_url( $twitter_url ),
			esc_html__( 'Share on Twitter', 'ninja-gutenberg-blocks' )
		);
	}

	if( isset($attr['google']) && $attr['google'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-google"><i class="nb-icon-google"></i><span>%2$s</span></a></li>',
			esc_url( $google_url ),
			esc_html__( 'Share on Google', 'ninja-gutenberg-blocks' )
		);
	}

	if( isset($attr['linkedin']) && $attr['linkedin'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-linkedin"><i class="nb-icon-linkedin"></i><span>%2$s</span></a></li>',
			esc_url( $linkedin_url ),
			esc_html__( 'Share on Linkedin', 'ninja-gutenberg-blocks' )
		);
	}
	
	if( isset($attr['pinterest']) && $attr['pinterest'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-pinterest"><i class="nb-icon-pinterest"></i><span>%2$s</span></a></li>',
			esc_url( $pinterest_url ),
			esc_html__( 'Share on Pinterest', 'ninja-gutenberg-blocks' )
		);
	}

	if( isset($attr['reddit']) && $attr['reddit'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-reddit"><i class="nb-icon-reddit"></i><span>%2$s</span></a></li>',
			esc_url( $reddit_url ),
			esc_html__( 'Share on Reddit', 'ninja-gutenberg-blocks' )
		);
	}
	
	if( isset($attr['email']) && $attr['email'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="nb-share-email"><i class="nb-icon-envelope"></i><span>%2$s</span></a></li>',
			esc_url( $email_url ),
			esc_html__( 'Share on Email', 'ninja-gutenberg-blocks' )
		);
	}
	
	
	$share_content = sprintf(
		'<div class="wp-block-ninja-blocks-social-sharing %2$s %3$s %4$s %5$s %6$s"><ul class="nb-social-sharing-links">%1$s</ul></div>',
		$html,
		$attr['shareButtonStyle'],
		$attr['shareButtonShape'],
		$attr['shareButtonColorType'],
		$attr['shareButtonSize'],
		$attr['shareButtonAlignment']
	);
	
	return $share_content;
	
	
}