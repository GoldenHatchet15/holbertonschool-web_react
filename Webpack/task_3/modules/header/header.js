import $ from 'jquery';
import './header.css';

$(function() {
    $('body').prepend('<h1>Holberton Dashboard</h1>');
    $('#logo').append('<img src=../assets/holberton-logo.jpg" alt="Logo">');
    console.log('Init header');
});
