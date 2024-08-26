<?php

function register_new_block_type(): void
{
    register_block_type_from_metadata(__DIR__ . '/build/menu');
}

function attach_files(): void
{
    wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('init', 'register_new_block_type');
add_action('wp_enqueue_scripts', 'attach_files');
