$(document).ready(function() {
    // 页面加载时应用平移动画
    $('#content').addClass('slide-left');
    
    // 页面跳转前的过渡效果
    $('#switchPage').on('click', function(event) {
        event.preventDefault();  // 阻止默认跳转行为
        
        // 添加翻转效果或平移效果
        $('#content').addClass('flip');
        
        // 在动画结束后跳转
        setTimeout(() => {
            window.location.href = $(this).attr('href');
        }, 500); // 500ms后跳转，和动画时间匹配
    });
});