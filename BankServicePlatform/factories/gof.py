# -*- coding: utf-8 -*-
__author__ = 'Johnny'


class Singleton(object):
    """
    单例模式
    """
    _instance = None

    def __new__(cls, *args, **kw):
        if not cls._instance:
            cls._instance = super(Singleton, cls).__new__(cls, *args, **kw)
        return cls._instance