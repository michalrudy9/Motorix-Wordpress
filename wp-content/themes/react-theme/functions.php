<?php

function load_assets(): void
{
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
  wp_enqueue_style('fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
}

function load_fonts(): void
{
  wp_enqueue_style('dm_sans_font', 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  wp_enqueue_style('roboto_font', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
}

function boilerplate_add_support(): void
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('wp_enqueue_scripts', 'load_assets');
add_action('after_setup_theme', 'boilerplate_add_support');
add_action('login_enqueue_scripts', 'load_fonts');
