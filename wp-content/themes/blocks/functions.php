<?php

function register_new_block_type(): void
{
    register_block_type_from_metadata(__DIR__ . '/build/menu');
}

function attach_files(): void
{
    wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
    wp_enqueue_style('fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
}

function no_admin_bar(): void
{
    $current_user = wp_get_current_user();

    if (count($current_user->roles) == 1 and $current_user->roles[0] == 'subscriber') {
        show_admin_bar(false);
    }
}

function load_fonts(): void
{
    wp_enqueue_style('dm_sans_font', 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
    wp_enqueue_style('roboto_font', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
}

add_action('init', 'register_new_block_type');
add_action('wp_enqueue_scripts', 'attach_files');
add_action('wp_loaded', 'no_admin_bar');
add_action('login_enqueue_scripts', 'load_fonts');
