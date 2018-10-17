# list to string
def list2str(lst):
	return reduce(lambda x,y:x+y,str(list(lst)).split("]")[0].split("[")[1].split(", "))
