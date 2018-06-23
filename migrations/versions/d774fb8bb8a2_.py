"""empty message

Revision ID: d774fb8bb8a2
Revises: c7c299e44c97
Create Date: 2018-06-19 16:48:58.001479

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'd774fb8bb8a2'
down_revision = 'c7c299e44c97'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Admin', sa.Column('permission', sa.CHAR(length=1), nullable=False))
    op.drop_column('Admin', 'authority')
    op.add_column('User', sa.Column('introduction', sa.Text(), nullable=False))
    op.add_column('User', sa.Column('permission', sa.CHAR(length=1), nullable=False))
    op.drop_column('User', 'authority')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('User', sa.Column('authority', mysql.CHAR(length=1), nullable=False))
    op.drop_column('User', 'permission')
    op.drop_column('User', 'introduction')
    op.add_column('Admin', sa.Column('authority', mysql.CHAR(length=1), nullable=False))
    op.drop_column('Admin', 'permission')
    # ### end Alembic commands ###
