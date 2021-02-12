

/* ローディング画面を非表示にする処理 */
function stopload(){
    bg.delay(900).fadeOut(800);
    loader.delay(900).fadeOut(300);
}


$(function(){
  /**偃月マウスオーバー */
  $(document).on('mouseover', '.engetsu_container', function(){
    // alert('Button is clicked');
		$("#engetsu_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

  });
	$(document).on('mouseout', '.engetsu_container', function(){
		// alert('Button is clicked');
		$("#engetsu_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

	});
});

$(function(){
  /** 蜂矢マウスオーバー */
  $(document).on('mouseover', '.houshi_container', function(){
    // alert('Button is clicked');
		$("#houshi_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

  });
	$(document).on('mouseout', '.houshi_container', function(){
		// alert('Button is clicked');
		$("#houshi_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

	});
});

$(function(){
  /** 魚鱗マウスオーバー */
  $(document).on('mouseover', '.gyorin_container', function(){
    // alert('Button is clicked');
		$("#gyorin_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

  });
	$(document).on('mouseout', '.gyorin_container', function(){
		// alert('Button is clicked');
		$("#gyorin_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

	});
});

$(function(){
  /** 長蛇マウスオーバー */
  $(document).on('mouseover', '.tyouda_container', function(){
    // alert('Button is clicked');
		$("#tyouda_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

  });
	$(document).on('mouseout', '.tyouda_container', function(){
		// alert('Button is clicked');
		$("#tyouda_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

	});
});

$(function(){
  /** こうやくマウスオーバー */
  $(document).on('mouseover', '.kouyaku_container', function(){
    // alert('Button is clicked');
		$("#kouyaku_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

  });
	$(document).on('mouseout', '.kouyaku_container', function(){
		// alert('Button is clicked');
		$("#kouyaku_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

	});
});

$(function(){
  /** 雁行マウスオーバー */
  $(document).on('mouseover', '.gankou_container', function(){
    // alert('Button is clicked');
		$("#gankou_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

  });
	$(document).on('mouseout', '.gankou_container', function(){
		// alert('Button is clicked');
		$("#gankou_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

	});
});
$(function(){
/** 鶴翼マウスオーバー */
$(document).on('mouseover', '.kakuyoku_container', function(){
  // alert('Button is clicked');
  $("#kakuyoku_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

});
$(document).on('mouseout', '.kakuyoku_container', function(){
  // alert('Button is clicked');
  $("#kakuyoku_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

});
});

$(function(){
/** 方円マウスオーバー */
$(document).on('mouseover', '.houen_container', function(){
  // alert('Button is clicked');
  $("#houen_change").animate({ opacity: 0 }, { duration: 500, easing: 'swing'})

});
$(document).on('mouseout', '.houen_container', function(){
  // alert('Button is clicked');
  $("#houen_change").animate({ opacity: 1 }, { duration: 500, easing: 'swing'})

});
});
window.onload = function() {
  $(function(){
      var player = $('#player').get(0);
         //videoタグの要素を取得

      player.play();    //動画の再生

      //動画が終了後
      player.addEventListener('ended',function() {
          $('#player').remove();    //videoタグを削除
      });
  });

  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}


window.onresize = resizeWindow;
