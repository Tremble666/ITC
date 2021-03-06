import flask
from flask import render_template, redirect, url_for, request, session, g, flash,json,jsonify
from . import admin
from app.models import *
from app.exts import db
from datetime import datetime


#根据文章的id查询所有已分配的标签
@admin.route('/articletag', methods=['GET','POST'])
def listTagByArticleId():
    articleId = request.form['articleId']
    #tags = ArticleTag.query.filter_by(articleId=articleId)
    res = db.session.query(Tag,ArticleTag).filter(ArticleTag.articleId==articleId,ArticleTag.tagId==Tag.tagId).all()
    tags = []
    for ele in res:
        tags.append(ele[0])
    list = []
    dict = {}
    for i in tags:
        dict[repr(i.tagId)] = i.as_dict()
        list.append(dict[repr(i.tagId)])
    return json.dumps(list,ensure_ascii=False)

#查询所有的子标签
@admin.route('/articletag/all', methods=['GET','POST'])
def listAllArticleTag():
    tags = Tag.query.filter(Tag.parentId != None).all()
    list = []
    dict = {}
    for i in tags:
        dict[repr(i.tagId)] = i.as_dict()
        list.append(dict[repr(i.tagId)])
    return json.dumps(list,ensure_ascii=False)

#向数据库发sql修改文章的标签
@admin.route('/articletag/changetag', methods=['GET','POST'])
def changearticletag():
    tagIds = request.form['tagIds']
    articleId = request.form['articleId']
    tids = tagIds.split(",")
    #首先查询之前的标签文章删除
    articles = ArticleTag.query.filter_by(articleId=int(articleId)).all()
    for article in articles:
        db.session.delete(article)
        db.session.commit()
    #然后在文章标签表中插入更改后的记录
    for tid in tids:
        at = ArticleTag(int(articleId),int(tid),datetime.now())
        db.session.add(at)
        db.session.commit()
    return redirect(url_for('admin.articlelist'))