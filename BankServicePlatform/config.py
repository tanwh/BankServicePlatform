__author__ = 'Johnny'

import sys
reload(sys)
sys.setdefaultencoding('utf8')

DEBUG = True

SECRET_KEY = '\x9c\n)\xec7 ?o@\x86\xc4\xe5_\x00\x10\xd9A$\xd3\x81\xcd\x1d\xb3\x90'

SQLALCHEMY_DATABASE_URI = 'mysql://root:Qk#13w79@139.196.31.230:3306/bank_service_platform'

SQLALCHEMY_TRACK_MODIFICATIONS=False

REDIS_URL='redis://:Qk$13w79@139.196.31.230:6379/0'

# CELERY_BROKER_URL = 'redis://192.168.3.252:6379/0'

"""
MAIL_DEFAULT_SENDER = 'info@bankserviceplatform.com'
MAIL_SERVER = 'smtp.postmarkapp.com'
MAIL_PORT = 25
MAIL_USE_TLS = True
MAIL_USERNAME = 'username'
MAIL_PASSWORD = 'password'
"""

