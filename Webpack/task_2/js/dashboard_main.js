import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="click-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    function updateCounter() {
        const count = parseInt($('#count').text() || '0', 10) + 1;
        $('#count').text(`${count} clicks on the button`);
    }

    $('#click-btn').on('click', _.debounce(updateCounter, 500));
});
