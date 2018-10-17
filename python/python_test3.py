#-*- coding:cp1251 -*-
from Tkinter import *
""" pyCalc by deluxe, thanks to Sanch0
Калькулятор работает только с 2 числами и одним действием над ними."""
# глобальные переменные
x1=''
x2=''
deistvie=''
# функции батонов ввода цифр и запятой
# если действие еще не задано, заполняется х1, а если задано - х2
# и значение переменной отражается на соотв. виджете
def press1():  
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'1'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'1'
		lblx2.configure(text=x2)
def press2():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'2'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'2'
		lblx2.configure(text=x2)
def press3():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'3'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'3'
		lblx2.configure(text=x2)
def press4():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'4'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'4'
		lblx2.configure(text=x2)
def press5():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'5'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'5'
		lblx2.configure(text=x2)
def press6():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'6'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'6'
		lblx2.configure(text=x2)
def press7():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'7'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'7'
		lblx2.configure(text=x2)
def press8():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'8'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'8'
		lblx2.configure(text=x2)
def press9():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'9'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'9'
		lblx2.configure(text=x2)
def press0():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'0'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'0'
		lblx2.configure(text=x2)
def pressdot():
	global x1, deistvie, x2
	if deistvie=='': 
		x1=x1+'.'
		lblx1.configure(text=x1)
	else: 
		x2=x2+'.'
		lblx2.configure(text=x2)
