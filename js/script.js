$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
  })

  function mainInit(){
    gnb_menu();
    // visual();
    scroll();
    contribute();
    family_site();
  }

  //메뉴
  function gnb_menu(){
    let $header = $('#header');
    let $subMenu = $('.sub-menu');
    let $span = $('.sub-menu span');
    let $li = $('#header .menu li a');
    let spanTxt = $li.data('submenu');
    let idx = 0;

    $header.hover(function(){
      $subMenu.stop().animate({top:90, opacity:1},500);
    },function(){
      $subMenu.stop().animate({top:-400, opacity:0},500);
    })
    $subMenu.hover(function(){
      $subMenu.stop().animate({top:90, opacity:1},500);
    },function(){
      $subMenu.stop().animate({top:-400, opacity:0},500);
    })
    
    let subTxt = ''
    $li.hover(function(){
      subTxt  = $(this).attr('data-submenu')
      console.log( subTxt )
      $span.text( subTxt );
    })
  }

/*   function visual(){
    let timer = null, intetval = 3000;
    
    timer = setInterval(time,interval);
    function time(){

    }
  } */

  function scroll(){
    let len = $('#content > div').length;
    let next = '', prev = '', cnt='';
    let posY = [], ty = '';

    $(window).on('scroll',function(){
      for(let i=0 ; i<len ; i++){
        posY[i] = $('#content > div').eq(i).offset().top;
        console.log(posY);
        //$('html,body').stop().animate({scrollTop:posY[i]},300);
      }
    })
    // end scroll
  }

  function contribute(){
    let $gnbLi = $('.contribute .gnb ul li');
    let $img = $('.contribute .img img');
    let idx = 0;

    $gnbLi.on('click',function(){
      idx = $(this).index();
      $gnbLi.removeClass();
      $(this).addClass('on');
      $img.attr('src', `images/04_contribute${idx}.jpg`)
    })
  }
// end contribute

  function family_site(){
    let $a = $('#footer .family-site > a');
    let $i = $('#footer .family-site > a i');
    let $ul = $('#footer .family-site ul');
    let $li = $('#footer .family-site ul li a');

    $a.on('click',function(){
      // $i.css({transform: 'rotate(180deg)',transformOrigin: 'center center'});
      $i.toggleClass('on');
      $ul.animate({height: 246});
    })
  }