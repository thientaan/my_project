    // Tạo biến và xử lý khi có sự kiện click
    document.getElementById('throw-button').addEventListener('click', function() {
    let image = document.getElementById('snowball-image');
    let throwButton = document.getElementById('throw-button');
    let promoCode = document.getElementById('promo-code');
   
    // Cập nhật đường dẫn của các ảnh
    let images = [
        'images/game/1.jpg', 
        'images/game/2.jpg', 
        'images/game/3.jpg', 
        'images/game/4.jpg', 
        'images/game/5.jpg', 
        'images/game/6.jpg', 
        'images/game/7.jpg'
    ];
 
    // Lấy tên ảnh từ src và tìm chỉ số của ảnh đó trong mảng
    let currentImageName = image.src.split('/').pop();
    let currentIndex = images.indexOf(images.find(img => img.includes(currentImageName)));

    // Nếu hình hiện tại là hình cuối cùng, ẩn nút và reset game
    if (currentIndex === images.length - 1) {
        image.src = images[0]; // Reset lại hình ảnh đầu tiên
        throwButton.style.display = 'none';
        promoCode.style.display = 'block'; // Hiển thị promo code
        return;
    }

    // Chuyển đến hình tiếp theo ngay lập tức nếu hình hiện tại là hình đầu tiên hoặc hình chẵn
    if (currentIndex === -1 || currentIndex % 2 === 0) {
        currentIndex++;
        image.src = images[currentIndex];
    } 

    // Sau 0.3 giây, hiển thị hình tiếp theo
    setTimeout(function() {
        currentIndex++;
        image.src = images[currentIndex];
        // Nếu hình tiếp theo là '7.jpg', ẩn nút 'Ném Bóng Tuyết'
        if (images[currentIndex].includes('7.jpg')) {
            throwButton.style.display = 'none';
            promoCode.style.display = 'block'; // Hiển thị promo code
        }
    }, 300); // Đợi 0.3 giây trước khi chuyển hình
});

//Chuông noel
document.write('<style type="text/css">body{padding-bottom:150px}</style><img style="position:fixed;z-index:9999;top:0;left:0" src="https://lh6.googleusercontent.com/-c8CoUvCourw/UMcWWTeBE-I/AAAAAAAABcU/q-j9X7733zw/s150/top-left.png"/><img style="position:fixed;z-index:9999;top:0;right:0" src="https://lh5.googleusercontent.com/-JABklf9ModU/UMcWWzSSJ4I/AAAAAAAABcY/g4sZMhrgjXU/s150/top-right.png"/><div style="position:fixed;z-index:9999;bottom:30px;left:30px" src="https://lh4.googleusercontent.com/-mEgGUg-ou4k/UMcz0qy2NhI/AAAAAAAABc0/gF1uW4iE6y0/s180/bottom-left.png"/>');var no=100;var hidesnowtime=0;var snowdistance='pageheight';var ie4up=(document.all)?1:0;var ns6up=(document.getElementById&&!document.all)?1:0;function iecompattest(){return(document.compatMode&&document.compatMode!='BackCompat')?document.documentElement:document.body}var dx,xp,yp;var am,stx,sty;var i,doc_width=800,doc_height=600;if(ns6up){doc_width=self.innerWidth;doc_height=self.innerHeight}else if(ie4up){doc_width=iecompattest().clientWidth;doc_height=iecompattest().clientHeight}dx=new Array();xp=new Array();yp=new Array();am=new Array();stx=new Array();sty=new Array();for(i=0;i<no;++i){dx[i]=0;xp[i]=Math.random()*(doc_width-50);yp[i]=Math.random()*doc_height;am[i]=Math.random()*20;stx[i]=0.02+Math.random()/10; sty[i]=0.7+Math.random();if(ie4up||ns6up){document.write('<div id="dot'+i+'" style="POSITION:absolute;Z-INDEX:'+i+';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:18px;color:#fff">*</span><\/div>')}}function snowIE_NS6(){doc_width=ns6up?window.innerWidth-10:iecompattest().clientWidth-10;doc_height=(window.innerHeight&&snowdistance=='windowheight')?window.innerHeight:(ie4up&&snowdistance=='windowheight')?iecompattest().clientHeight:(ie4up&&!window.opera&&snowdistance=='pageheight')?iecompattest().scrollHeight:iecompattest().offsetHeight;for(i=0;i<no;++i){yp[i]+=sty[i];if(yp[i]>doc_height-50){xp[i]=Math.random()*(doc_width-am[i]-30);yp[i]=0;stx[i]=0.02+Math.random()/10;sty[i]=0.7+Math.random()}dx[i]+=stx[i];document.getElementById('dot'+i).style.top=yp[i]+'px';document.getElementById('dot'+i).style.left=xp[i]+am[i]*Math.sin(dx[i])+'px'}snowtimer=setTimeout('snowIE_NS6()',10)}function hidesnow(){if(window.snowtimer){clearTimeout(snowtimer)}for(i=0;i<no;i++)document.getElementById('dot'+i).style.visibility='hidden'}if(ie4up||ns6up){snowIE_NS6();if(hidesnowtime>0)setTimeout('hidesnow()',hidesnowtime*1000)}
//Kết thúc chuông noel
  
