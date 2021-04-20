"use strict";

$(function () {
  $('#btn-open').click(function () {
    $('.mobile-show').fadeIn();
    $('#btn-open').fadeOut();
    $('#btn-close').fadeIn(); //$('.covid').css('top','300px','left','20px');
    //$('.open').addClass('close');
    //$('.open').removeClass('open');

    $('.covid').fadeOut();
    $('body').css('overflow', 'hidden');
  });
  $('#btn-close').click(function () {
    $('.mobile-show').fadeOut();
    $('#btn-open').fadeIn();
    $('#btn-close').fadeOut();
    $('.covid').css('top', '0', 'left', '0');
  });
  $('.service:nth-of-type(1)').click(function () {
    $('.bike').hide();
    $('.transit').hide();
    $('.business').hide();
    $('.freight').hide();
    $('.eat').hide();
    $('.ride').hide();
    $('.earn').show();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_01.jpeg")');
  });
  $('.service:nth-of-type(2)').click(function () {
    $('.bike').hide();
    $('.transit').hide();
    $('.business').hide();
    $('.freight').hide();
    $('.earn').hide();
    $('.eat').hide();
    $('.ride').show();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_02.jpeg")');
  });
  $('.service:nth-of-type(3)').click(function () {
    $('.bike').hide();
    $('.transit').hide();
    $('.business').hide();
    $('.freight').hide();
    $('.earn').hide();
    $('.ride').hide();
    $('.eat').show();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_03.jpeg")');
  });
  $('.service:nth-of-type(4)').click(function () {
    $('.bike').hide();
    $('.transit').hide();
    $('.business').hide();
    $('.earn').hide();
    $('.ride').hide();
    $('.eat').hide();
    $('.freight').show();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_04.jpeg")');
  });
  $('.service:nth-of-type(5)').click(function () {
    $('.bike').hide();
    $('.transit').hide();
    $('.earn').hide();
    $('.ride').hide();
    $('.eat').hide();
    $('.freight').hide();
    $('.business').show();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_05.jpeg")');
  });
  $('.service:nth-of-type(6)').click(function () {
    $('.bike').hide();
    $('.transit').show();
    $('.earn').hide();
    $('.ride').hide();
    $('.eat').hide();
    $('.freight').hide();
    $('.business').hide();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_06.jpeg")');
  });
  $('.service:nth-of-type(7)').click(function () {
    $('.bike').show();
    $('.transit').hide();
    $('.earn').hide();
    $('.ride').hide();
    $('.eat').hide();
    $('.freight').hide();
    $('.business').hide();
    $('.service').removeClass('selected');
    $(this).addClass('selected');
    $('.bg').css('background-image', 'url("img/bg_07.jpeg")');
  });
});