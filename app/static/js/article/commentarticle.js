var comment_id;

//点击评论，跳到文章评论这一块
function commentvisible() {
    var bottombox = document.getElementById("articlecomment");
    window.location.hash = "#articlecomment";
}

//点击评论他人，评论框显示出来
function saycomment(commentId) {
    console.debug($('#comment_' + commentId + ' + div .' + 'write-comment'));
    $('#comment_' + commentId + ' + div .' + 'write-comment').css({display: 'inline'});
}

function post_child_comment(commentId, articleId) {
    var content = $('#after_comment_' + commentId).val();
    var data = {
        data: JSON.stringify({
            'content': content,
            'parentId': commentId,
            'articleId': articleId
        })
    };
    $.ajax({
        url: '/article/comment',
        type: 'POST',
        data: data,
        success: function (res) {
            window.location.reload();
        },
    });
}

function delete_comment(commentId) {
    comment_id = commentId;
    console.debug('The comment_id' + comment_id);
    var info = "确定要删除该评论吗?";
    $('.modal.fade .modal-body').text(info);
}

function true_delete() {
    if (comment_id) {
        sendDeleteComment();
    }
}

function sendDeleteComment() {
    $.ajax({
        url: '/article/delete-comment',
        type: 'POST',
        data: 'commentId=' + comment_id,
        success: function (data) {
            window.location.reload();
        }
    });
}

//点击评论他人的评论，评论框显示出来
function saycomment1(commentId) {
    console.debug($('#comment_' + commentId + ' + div .' + 'write-comment'));
    $('#com_' + commentId + ' .comment-comment').css({display: 'inline'});
}


function afterComment(parentId, articleId, content, userId) {
    $.ajax({
        url: '/article/after-comment',
        type: 'POST',
        data: 'parentId=' + parentId + '&articleId=' + articleId + '&content=' + content + '&userId=' + userId,
        success: function (data) {
            window.location.reload();
        }
    })
}

function sendAfterComment(commentId, articleId, userId) {
    var content = $('#after_comment_' + commentId).val();
    $.ajax({
        url: '/article/after-comment',
        type: 'POST',
        data: 'commentId=' + commentId + '&articleId=' + articleId + '&content=' + content + '&userId=' + userId,
        success: function (res) {
            window.location.reload();
        },
    });
}