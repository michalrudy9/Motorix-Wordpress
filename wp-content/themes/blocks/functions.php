<?php

function register_new_block_type(): void
{
    register_block_type_from_metadata(__DIR__ . '/build/menu');
}

function attach_files(): void
{
    wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

function no_admin_bar(): void
{
    $current_user = wp_get_current_user();

    if (count($current_user->roles) == 1 and $current_user->roles[0] == 'subscriber') {
        show_admin_bar(false);
    }
}

add_action('init', 'register_new_block_type');
add_action('wp_enqueue_scripts', 'attach_files');
add_action('wp_loaded', 'no_admin_bar');
